Personal Expense Tracker API

This project is a RESTful API for managing personal financial records, allowing users to record their income and expenses, retrieve past transactions, and get summaries by category or time period.

Table of Contents

Setup and Run Instructions
API Documentation
Postman Screenshots
Setup and Run Instructions

Clone the repository: git clone https://github.com/yourusername/personal-expense-tracker.git cd personal-expense-tracker

Install dependencies: npm install

Create the SQLite database: The database will be created automatically when the server starts. Ensure you have SQLite installed.

Run the application: npm start

Access the API: The API will be available at http://localhost:3000.

API Documentation

Transactions

POST /transactions

Add a new transaction (income or expense).
Body: { "type": "expense", "category": 1, "amount": 100, "date": "2024-10-21", "description": "Grocery shopping" }
GET /transactions

Retrieve all transactions.
GET /transactions/

Retrieve a transaction by ID.
PUT /transactions/

Update a transaction by ID.
Body: { "type": "expense", "category": 2, "amount": 150, "date": "2024-10-22", "description": "Updated grocery shopping" }
DELETE /transactions/

Delete a transaction by ID.
GET /transactions/summary

Get a summary of transactions.
Categories

POST /categories

Add a new category.
Body: { "name": "Food", "type": "expense" }
GET /categories

Retrieve all categories.
Postman Screenshots