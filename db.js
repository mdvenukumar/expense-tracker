const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Connect to the SQLite database
const db = new sqlite3.Database(path.join(__dirname, 'expense_tracker.db'), (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database.');

        // Create categories table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS categories (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            type TEXT CHECK(type IN ('income', 'expense')) NOT NULL
        )`);

        // Create transactions table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS transactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            type TEXT CHECK(type IN ('income', 'expense')) NOT NULL,
            category INTEGER NOT NULL,
            amount REAL NOT NULL,
            date TEXT NOT NULL,
            description TEXT,
            FOREIGN KEY (category) REFERENCES categories(id)
        )`);
    }
});

module.exports = db;
