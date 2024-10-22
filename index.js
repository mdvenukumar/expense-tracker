const express = require('express');
const app = express();
const transactionsRouter = require('./routes/transactions');
const categoriesRouter = require('./routes/categories');

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/transactions', transactionsRouter);
app.use('/categories', categoriesRouter);

// Error handling middleware
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
