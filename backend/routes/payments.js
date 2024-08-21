// routes/payments.js
const express = require('express');
const Payment = require('../models/payment');
const router = express.Router();

// Create a new payment
router.post('/', async (req, res) => {
  const { payment_id, order_id, payment_method, transaction_id } = req.body;
  const payment = new Payment({ payment_id, order_id, payment_method, transaction_id });

  try {
    const savedPayment = await payment.save();
    res.status(201).json(savedPayment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;