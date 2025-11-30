const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const ADMIN_EMAIL = "admin@getkhojo.com";
const ADMIN_PASSWORD = "Admin@123"; // Later .env me daalna

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email !== ADMIN_EMAIL || password !== ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid Credentials" });
  }

  const token = jwt.sign({ role: "admin" }, "ADMIN_SECRET", { expiresIn: "1d" });

  res.json({ token });
});

module.exports = router;

