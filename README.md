# Personal Expense Tracker API

##### This project is a RESTful API for managing personal financial records, allowing users to record their income and expenses, retrieve past transactions, and get summaries by category or time period.



### Clone the repository:
```bash
git clone https://github.com/mdvenukumar/expense-tracker.git 
cd expense-tracker
```

### Install dependencies
```bash
npm install
```

### Create the SQLite database
##### The database will be created automatically when the server starts. Ensure you have SQLite installed.

### Run the application
```bash
node index.js
```

### Access the API
##### The API will be available at http://localhost:3000.

## API Documentation

### Transactions

#### POST /transactions

###### Add a new transaction (income or expense).
Body
```json
{ 
	"type": "expense", 
	"category": 1, 
	"amount": 100, 
	"date": "2024-10-21", 
	"description": "Grocery shopping"
}
```
![Post All Transactions](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/post-transaction.png "Post All Transactions")

### GET /transactions

###### Retrieve all transactions.
![Get All Transactions](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/get-transaction.png "Get All Transactions")

### GET /transactions/{id}

###### Retrieve a transaction by ID.

![Get Transaction by ID](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/get-transaction-by-id.png "Get Transaction by ID")


### PUT /transactions/{id}

###### Update a transaction by ID.
Body: 
```json
{ 
	"type": "expense", 
	"category": 2, 
	"amount": 150, 
	"date": "2024-10-22", 
	"description": "Updated grocery shopping" 
}
```
![Update Transaction by ID](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/update-transaction-by-id.png "Update Transactions  by ID")

### DELETE /transactions/{id}

###### Delete a transaction by ID.
![Delete Transaction by ID](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/delete-transaction-by-id.png "Delete Transactions  by ID")

### GET /transactions/summary
###### Get a summary of transactions.
![Transaction Summary](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/get-transaction-summary.png "Transaction Summary")


### Categories

### POST /categories
###### Add a new category.
Body:
```json
{ 
	"name": "Food", 
	"type": "expense" 
}
```
![Post All Categories](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/add-categories.png "Post All Categories")

### GET /categories

###### Retrieve all categories.
![Get All Categories](https://github.com/mdvenukumar/expense-tracker/blob/master/imagse-postman/get-all-categories.png "Get All Categories")