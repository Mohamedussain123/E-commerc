const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    price: Number,
    stock: Number,
    imageUrl: String,
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    expiryDate: Date
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
