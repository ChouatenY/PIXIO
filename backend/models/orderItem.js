// models/OrderItem.js
const OrderItemSchema = new mongoose.Schema({
    order_item_id: { type: Number, required: true, unique: true },
    order_id: { type: Number, required: true },
    product_id: { type: Number, required: true },
    price: { type: Number, required: true },
    subtotal: { type: Number, required: true },
  });
  
  module.exports = mongoose.model('OrderItem', OrderItemSchema);