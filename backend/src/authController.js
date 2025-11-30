const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

let otpStore = {};

router.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  const otp = Math.floor(100000 + Math.random() * 900000);

  otpStore[email] = otp;

  // email transporter
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: "yourmail@gmail.com", pass: "password" }
  });

  await transporter.sendMail({
    to: email,
    subject: "Your Login OTP",
    text: `Your OTP is ${otp}`
  });

  res.json({ message: "OTP Sent" });
});

router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;

  if (otpStore[email] != otp)
    return res.status(400).json({ message: "Invalid OTP" });

  const token = jwt.sign({ email }, "SECRET123", { expiresIn: "7d" });

  res.json({ token });
});

module.exports = router;
