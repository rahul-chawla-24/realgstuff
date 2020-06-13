const jwt = require("jsonwebtoken");
const User = require("../models/user");
const config = require("../confiq/jwt_config.json");

module.exports = (req, res, next) => {
  const token = req.header("x-auth-token");
  console.log(token);
  // Check for token
  if (!token) {
    return res.status(401).json({ msg: "No token, authorizaton denied" });
  }
  try {
    // Verify token
    const decoded = jwt.verify(token, config.jwtSecret);
    // Add user from payload
    req.user = decoded.sub;
    next();
  } catch (e) {
    res.status(400).json({ err: "invalid_token"  ,msg: "Token is not valid" });
  }
};
