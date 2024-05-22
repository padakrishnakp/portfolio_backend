const jwt = require("jsonwebtoken");
const User = require('../module/UserModule');

const protectRoutes = async (req, res, next) => {
  try {
    console.log('Start:------',req.headers)
    const token = req.cookies.jwt;
    console.log("TTTT:-",token)
    if (!token) {
      return res.status(401).json({ error: "Unauthorized, no token provided!" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized, invalid token provided!" });
    }

    const user = await User.findById(decoded._id); 
    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    req.user = user._id
    next();
  } catch (err) {
    console.log("Error:-",err)
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { protectRoutes };
