const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /transactions - Add a new transaction
router.post('/', (req, res, next) => {
    const { type, category, amount, date, description } = req.body;
    const sql = `INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)`;
    db.run(sql, [type, category, amount, date, description], function (err) {
        if (err) return next(err);
        res.status(201).json({ id: this.lastID });
    });
});

// GET /transactions - Retrieve all transactions
router.get('/', (req, res, next) => {
    const sql = `SELECT * FROM transactions`;
    db.all(sql, [], (err, rows) => {
        if (err) return next(err);
        res.json(rows);
    });
});

// GET /transactions/:id - Retrieve a transaction by ID
router.get('/:id', (req, res, next) => {
    const { id } = req.params;
    const sql = `SELECT * FROM transactions WHERE id = ?`;
    db.get(sql, [id], (err, row) => {
        if (err) return next(err);
        if (!row) return res.status(404).json({ message: 'Transaction not found' });
        res.json(row);
    });
});

// PUT /transactions/:id - Update a transaction by ID
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { type, category, amount, date, description } = req.body;
    const sql = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?`;
    db.run(sql, [type, category, amount, date, description, id], function (err) {
        if (err) return next(err);
        if (this.changes === 0) return res.status(404).json({ message: 'Transaction not found' });
        res.json({ message: 'Transaction updated' });
    });
});

// DELETE /transactions/:id - Delete a transaction by ID
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    const sql = `DELETE FROM transactions WHERE id = ?`;
    db.run(sql, [id], function (err) {
        if (err) return next(err);
        if (this.changes === 0) return res.status(404).json({ message: 'Transaction not found' });
        res.json({ message: 'Transaction deleted' });
    });
});

// GET /transactions/summary - Retrieve income, expenses, and balance
router.get('/summary', (_req, res, next) => {
    const sql = `SELECT type, SUM(amount) as total FROM transactions GROUP BY type`;
    db.all(sql, [], (err, rows) => {
        if (err) return next(err);
        const summary = {
            income: rows.find(r => r.type === 'income')?.total || 0,
            expense: rows.find(r => r.type === 'expense')?.total || 0
        };
        summary.balance = summary.income - summary.expense;
        res.json(summary);
    });
});

module.exports = router;
