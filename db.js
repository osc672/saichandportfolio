const mysql = require('mysql2/promise');
require('dotenv').config();

// Fallback in-memory storage if MySQL is unreachable or waiting for configuration
const inMemoryContacts = [];

let pool = null;
let isConnected = false;
let dbStatusMessage = 'Initializing...';

const dbConfig = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT || '3306', 10),
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || process.env.DB_PASS || '',
    database: process.env.DB_NAME || 'portfolio_db',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
};

/**
 * Initialize MySQL Connection and ensure schema exists
 */
async function initDB() {
    try {
        // Step 1: Connect to server without database first to ensure database exists
        const rootConn = await mysql.createConnection({
            host: dbConfig.host,
            port: dbConfig.port,
            user: dbConfig.user,
            password: dbConfig.password
        });

        await rootConn.query(`CREATE DATABASE IF NOT EXISTS \`${dbConfig.database}\`;`);
        await rootConn.end();

        // Step 2: Create connection pool with the target database
        pool = mysql.createPool(dbConfig);

        // Step 3: Create table if not exists
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS contacts (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) NOT NULL,
                phone VARCHAR(50),
                subject VARCHAR(255),
                message TEXT NOT NULL,
                ip_address VARCHAR(100),
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                status ENUM('unread', 'read', 'archived') DEFAULT 'unread'
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
        `;
        await pool.query(createTableQuery);

        isConnected = true;
        dbStatusMessage = `Connected to MySQL database '${dbConfig.database}' on ${dbConfig.host}:${dbConfig.port}`;
        console.log(`✅ [MYSQL SUCCESS]: ${dbStatusMessage}`);
        return true;
    } catch (err) {
        isConnected = false;
        dbStatusMessage = `MySQL Connection Warning: ${err.message}. (Using in-memory fallback store until credentials in .env are verified)`;
        console.warn(`⚠️ [MYSQL WARNING]: ${dbStatusMessage}`);
        return false;
    }
}

/**
 * Save contact inquiry to MySQL (or in-memory fallback)
 */
async function saveContact({ name, email, phone, subject, message, ip }) {
    if (isConnected && pool) {
        try {
            const query = `
                INSERT INTO contacts (name, email, phone, subject, message, ip_address)
                VALUES (?, ?, ?, ?, ?, ?)
            `;
            const [result] = await pool.query(query, [
                name,
                email,
                phone || null,
                subject || 'General Inquiry',
                message,
                ip || '127.0.0.1'
            ]);

            return {
                id: result.insertId,
                name,
                email,
                phone,
                subject,
                message,
                created_at: new Date(),
                storage: 'mysql'
            };
        } catch (queryErr) {
            console.error('MySQL Query Error, saving to fallback:', queryErr.message);
        }
    }

    // Fallback store
    const fallbackItem = {
        id: inMemoryContacts.length + 1,
        name,
        email,
        phone,
        subject,
        message,
        created_at: new Date(),
        storage: 'in-memory-fallback'
    };
    inMemoryContacts.unshift(fallbackItem);
    return fallbackItem;
}

/**
 * Get all contact messages
 */
async function getContacts() {
    if (isConnected && pool) {
        try {
            const [rows] = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 100');
            return rows;
        } catch (err) {
            console.error('Error fetching contacts from MySQL:', err.message);
        }
    }
    return inMemoryContacts;
}

/**
 * Health status of database
 */
function getStatus() {
    return {
        connected: isConnected,
        database: dbConfig.database,
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        statusMessage: dbStatusMessage,
        totalContactsInMemory: inMemoryContacts.length
    };
}

module.exports = {
    initDB,
    saveContact,
    getContacts,
    getStatus
};
