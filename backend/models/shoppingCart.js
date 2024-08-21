// models/ShoppingCart.js
const ShoppingCartSchema = new mongoose.Schema({
    cart_id: { type: Number, required: true, unique: true },
    user_id: { type: Number, required: true },
    product_id: { type: Number, required: true },
  });
  
  module.exports = mongoose.model('ShoppingCart', ShoppingCartSchema);
  