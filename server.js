const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const { initDB, saveContact, getContacts, getStatus } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve built React client if available, else fallback to public
const clientDistPath = path.join(__dirname, 'client', 'dist');
if (fs.existsSync(clientDistPath)) {
    app.use(express.static(clientDistPath));
} else {
    app.use(express.static(path.join(__dirname, 'public')));
}

// Configure Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SMTP_USER || 'saichanduvlk@gmail.com',
        pass: (process.env.SMTP_PASS || '').replace(/\s+/g, '')
    }
});

// Verify SMTP connection on startup
transporter.verify((error) => {
    if (error) {
        console.error('⚠️ [SMTP ERROR]: Unable to connect to Gmail SMTP service:', error.message);
    } else {
        console.log('✅ [SMTP READY]: Successfully connected to Gmail SMTP server for', process.env.SMTP_USER);
    }
});

// Initialize MySQL Database
initDB();

// API Routes
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString(),
        database: getStatus(),
        smtpUser: process.env.SMTP_USER
    });
});

// Get Database Status
app.get('/api/db/status', (req, res) => {
    res.json(getStatus());
});

// Get Stored Contact Inquiries from MySQL
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await getContacts();
        res.json({
            success: true,
            count: contacts.length,
            data: contacts
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// Handle Contact Form Submission (MySQL Save + SMTP Email Dispatch)
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, subject, message } = req.body;

        // Validation
        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'Please provide your name, email, and message.'
            });
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address.'
            });
        }

        const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';

        // 1. Save to MySQL Database
        const savedRecord = await saveContact({
            name,
            email,
            phone,
            subject,
            message,
            ip: clientIp
        });

        // 2. Format & Send SMTP Email to Sai Chand
        const recipient = process.env.RECIPIENT_EMAIL || 'saichanduvlk@gmail.com';
        const mailSubject = subject && subject.trim().length > 0 
            ? `[Portfolio Contact] ${subject.trim()} - from ${name}` 
            : `[Portfolio Contact] New Message from ${name}`;

        const adminMailOptions = {
            from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
            to: recipient,
            replyTo: email,
            subject: mailSubject,
            html: `
            <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: 0 auto; background: #0f172a; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #334155;">
                <div style="background: linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%); padding: 32px 24px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 26px; font-weight: 700; letter-spacing: -0.5px;">New Portfolio Inquiry</h1>
                    <p style="margin: 8px 0 0; color: rgba(255,255,255,0.9); font-size: 15px;">Saved to MySQL (ID: #${savedRecord.id}) &amp; Sent via SMTP</p>
                </div>
                <div style="padding: 28px 24px;">
                    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; width: 120px; font-weight: 600;">Database ID:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #38bdf8; font-weight: 600;">#${savedRecord.id} (${savedRecord.storage})</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Sender:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #ffffff; font-weight: 600;">${name}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Email:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
                        </tr>
                        ${phone ? `
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Phone:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9;"><a href="tel:${phone}" style="color: #38bdf8; text-decoration: none;">${phone}</a></td>
                        </tr>` : ''}
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Subject:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #f1f5f9;">${subject || 'General Inquiry'}</td>
                        </tr>
                        <tr>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-weight: 600;">Received:</td>
                            <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8;">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)</td>
                        </tr>
                    </table>

                    <div style="background: #1e293b; border-radius: 12px; padding: 20px; border-left: 4px solid #6366f1;">
                        <h3 style="margin-top: 0; margin-bottom: 12px; color: #e2e8f0; font-size: 16px;">Message:</h3>
                        <p style="white-space: pre-wrap; margin: 0; color: #cbd5e1; line-height: 1.6; font-size: 15px;">${message}</p>
                    </div>

                    <div style="margin-top: 28px; text-align: center;">
                        <a href="mailto:${email}?subject=Re: ${encodeURIComponent(subject || 'Inquiry')}" style="display: inline-block; background: #6366f1; color: #ffffff; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">Reply to ${name}</a>
                    </div>
                </div>
                <div style="background: #090d16; padding: 16px; text-align: center; font-size: 13px; color: #64748b; border-top: 1px solid #1e293b;">
                    Sai Chand Olupalli Portfolio Notification System • Stored in MySQL • Vijayawada, India
                </div>
            </div>
            `
        };

        // Try to dispatch SMTP email
        let emailSent = false;
        try {
            await transporter.sendMail(adminMailOptions);
            emailSent = true;
        } catch (emailErr) {
            console.error('SMTP Dispatch Warning:', emailErr.message);
        }

        return res.status(200).json({
            success: true,
            message: 'Message processed successfully!',
            savedToDb: true,
            emailSent: emailSent,
            recordId: savedRecord.id,
            storageType: savedRecord.storage
        });

    } catch (err) {
        console.error('Contact Form Error:', err);
        return res.status(500).json({
            success: false,
            message: 'Failed to process your message due to an internal server error.'
        });
    }
});

// Fallback route for SPA (React / HTML)
app.use((req, res) => {
    if (fs.existsSync(path.join(clientDistPath, 'index.html'))) {
        res.sendFile(path.join(clientDistPath, 'index.html'));
    } else {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    }
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 [PORTFOLIO SERVER]: Running at http://localhost:${PORT}`);
});
