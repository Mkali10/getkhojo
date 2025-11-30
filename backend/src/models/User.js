const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: String,
  otp: Number,
  role: { type: String, default: "user" },
  subscription: { type: String, default: "free" },
  active: { type: Boolean, default: false }
});

module.exports = mongoose.model("User", userSchema);
