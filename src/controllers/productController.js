const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
    const products = await Product.find().populate("vendor", "name email");
    res.json(products);
};

exports.addProduct = async (req, res) => {
    if (req.user.role !== 'admin' && req.user.role !== 'vendor') {
        return res.status(403).json({ message: "Access Denied" });
    }
    try {
        const product = await Product.create(req.body);
        res.status(201).json({ message: "Product added", product });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
