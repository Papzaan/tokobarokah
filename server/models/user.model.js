const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 5 },
  name: { type: String },
  role: { type: Number, default: 0},
  cart: { type: Array, default: [] },
});

module.exports = User = mongoose.model("user", userSchema);