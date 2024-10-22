const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /categories - Add a new category
router.post('/', (req, res, next) => {
    const { name, type } = req.body;
    const sql = `INSERT INTO categories (name, type) VALUES (?, ?)`;
    db.run(sql, [name, type], function (err) {
        if (err) return next(err);
        res.status(201).json({ id: this.lastID });
    });
});

// GET /categories - Retrieve all categories
router.get('/', (req, res, next) => {
    const sql = `SELECT * FROM categories`;
    db.all(sql, [], (err, rows) => {
        if (err) return next(err);
        res.json(rows);
    });
});

module.exports = router;
