const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: ['user', 'admin', 'vendor', 'staff'], default: 'user' }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
