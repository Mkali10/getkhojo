const express = require("express");
const router = express.Router();

// NOTE: Ye DB se link ho jayega when you add user model
let users = {}; // Temporary database

router.post("/activate", (req, res) => {
  const { email, type } = req.body;

  if (!users[email]) users[email] = {};

  users[email].subscription = type; // monthly / yearly
  users[email].active = true;

  res.json({ message: "Subscription Activated", data: users[email] });
});

router.post("/deactivate", (req, res) => {
  const { email } = req.body;

  if (!users[email]) return res.status(400).json({ message: "User not found" });

  users[email].active = false;

  res.json({ message: "Subscription Deactivated" });
});

router.get("/list", (req, res) => {
  res.json(users);
});

module.exports = router;

