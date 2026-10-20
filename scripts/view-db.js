const mysql = require('mysql2/promise');
require('dotenv').config();

(async () => {
    console.log('\n--- 📋 Portfolio MySQL Database Records (`portfolio_db.contacts`) ---\n');
    try {
        const conn = await mysql.createConnection({
            host: process.env.DB_HOST || 'localhost',
            port: parseInt(process.env.DB_PORT || '3306', 10),
            user: process.env.DB_USER || 'root',
            password: process.env.DB_PASSWORD || process.env.DB_PASS || '',
            database: process.env.DB_NAME || 'portfolio_db'
        });

        const [rows] = await conn.query('SELECT id, name, email, phone, subject, message, created_at FROM contacts ORDER BY id DESC');
        await conn.end();

        if (!rows || rows.length === 0) {
            console.log('No messages stored in the database yet. Send a test message from http://localhost:3000 to see it appear here!');
        } else {
            console.table(rows.map(r => ({
                'ID': `#${r.id}`,
                'Name': r.name,
                'Email': r.email,
                'Phone': r.phone || '-',
                'Subject': r.subject || '-',
                'Message': r.message.length > 30 ? r.message.substring(0, 27) + '...' : r.message,
                'Received': new Date(r.created_at).toLocaleString()
            })));
            console.log(`\n✅ Total inquiries stored in MySQL: ${rows.length}\n`);
        }
    } catch (err) {
        console.error('Error connecting to MySQL:', err);
    }
    process.exit(0);
})();
