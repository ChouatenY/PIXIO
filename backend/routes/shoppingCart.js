// routes/shoppingCart.js
const express = require('express');
const ShoppingCart = require('../models/shoppingCart');
const router = express.Router();

// Create a new shopping cart entry
router.post('/', async (req, res) => {
  const { cart_id, user_id, product_id } = req.body;
  const cart = new ShoppingCart({ cart_id, user_id, product_id });

  try {
    const savedCart = await cart.save();
    res.status(201).json(savedCart);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;