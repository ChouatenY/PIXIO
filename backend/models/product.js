const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    product_id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    rating: { type: Number, required: true },
    image_url: { type: String, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
