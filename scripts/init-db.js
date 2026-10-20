const { initDB, getStatus } = require('../db');

(async () => {
    console.log('Testing MySQL Database Initialization for Portfolio...');
    const success = await initDB();
    const status = getStatus();
    console.log('Database Status Result:', JSON.stringify(status, null, 2));
    if (success) {
        console.log('🎉 MySQL database initialized and ready to record contacts!');
    } else {
        console.log('💡 Note: You can set your MySQL password in .env (DB_PASSWORD=your_password).');
    }
    process.exit(0);
})();
