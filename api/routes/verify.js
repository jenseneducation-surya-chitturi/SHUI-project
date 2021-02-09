const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = {
  async verifyToken(req, res, next) {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== "undefined") {
      const token = bearerHeader.replace("Bearer ", "");
      if (!token) return;
      const verifyToken = jwt.verify(token, process.env.SECRET);
      req.user = verifyToken;
      next();
    } else {
      res.status(401);
    }
  },
};
  