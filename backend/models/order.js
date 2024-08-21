// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  order_id: { type: Number, required: true, unique: true },
  user_id: { type: Number, required: true },
  order_date: { type: Date, required: true },
  total_amount: { type: Number, required: true },
});

module.exports = mongoose.model('Order', OrderSchema);