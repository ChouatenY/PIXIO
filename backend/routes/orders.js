// routes/orders.js
const express = require('express');
const Order = require('../models/order');
const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
  const { order_id, user_id, order_date, total_amount } = req.body;
  const order = new Order({ order_id, user_id, order_date, total_amount });

  try {
    const savedOrder = await order.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;