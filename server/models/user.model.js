const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true, 
    minlength: 5 
  },
  role: {
    type: Number,
    default: 0
  },
  cart: {
    type: Array,
    default: []
  },
});

module.exports = User = mongoose.model("user", userSchema);