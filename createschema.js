const db = require('./models/db'); // Import the database connection

// Function to create the users table
const createUsersTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL UNIQUE
        )
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating users table:", err);
        } else {
            console.log("Users table created successfully.");
        }
    });
};

// Function to create the balances table
const createBalancesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS balances (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            total_balance DECIMAL(15, 2),
            income DECIMAL(15, 2),
            expenditure DECIMAL(15, 2),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating balances table:", err);
        } else {
            console.log("Balances table created successfully.");
        }
    });
};

// Function to create the transactions table
const createTransactionsTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS transactions (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            date DATE,
            description VARCHAR(255),
            amount DECIMAL(15, 2),
            type ENUM('income', 'expense'),
            category VARCHAR(100),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating transactions table:", err);
        } else {
            console.log("Transactions table created successfully.");
        }
    });
};

// Function to create the expenses table
const createExpensesTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS expenses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            quarter VARCHAR(10),
            amount DECIMAL(15, 2),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating expenses table:", err);
        } else {
            console.log("Expenses table created successfully.");
        }
    });
};

// Function to create the revenue table
const createRevenueTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS revenue (
            id INT AUTO_INCREMENT PRIMARY KEY,
            user_id INT,
            month VARCHAR(20),
            amount DECIMAL(15, 2),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (user_id) REFERENCES users(id)
        )
    `;
    db.query(sql, (err, result) => {
        if (err) {
            console.error("Error creating revenue table:", err);
        } else {
            console.log("Revenue table created successfully.");
        }
    });
};

// Call all functions to create tables
createUsersTable();
createBalancesTable();
createTransactionsTable();
createExpensesTable();
createRevenueTable();
