const jwt = require("jsonwebtoken");

exports.userAuth = (req, res, next) => {
  let token = req.headers["authorization"];

  if (!token) return res.status(401).json({ message: "No Token Provided" });

  try {
    let data = jwt.verify(token, "SECRET123");
    req.user = data;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};

