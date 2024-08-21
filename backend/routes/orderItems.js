// routes/orderItems.js
const express = require('express');
const OrderItem = require('../models/orderItem');
const router = express.Router();

// Create a new order item
router.post('/', async (req, res) => {
  const { order_item_id, order_id, product_id, price, subtotal } = req.body;
  const orderItem = new OrderItem({ order_item_id, order_id, product_id, price, subtotal });

  try {
    const savedOrderItem = await orderItem.save();
    res.status(201).json(savedOrderItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
