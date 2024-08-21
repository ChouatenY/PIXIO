// models/Payment.js
const PaymentSchema = new mongoose.Schema({
    payment_id: { type: Number, required: true, unique: true },
    order_id: { type: Number, required: true },
    payment_method: { type: String, required: true },
    transaction_id: { type: String, required: true },
  });
  
  module.exports = mongoose.model('Payment', PaymentSchema);