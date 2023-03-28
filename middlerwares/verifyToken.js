const jwt = require("jsonwebtoken");

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token ||
    req.query.token ||
    req.params.token ||
    req.headers["x-access-token"];

  if (!token) {
    return res.status(404).json({ err: "token is needed for authentication" });
  }

  try {
    const decode = jwt.verify(token, process.env.MYSECRETKEY);
    req.user = decode;
  } catch (error) {
    return res.status(400).json({ msg: "token is invalid", err: error });
  }
  return next();
};

module.exports = {
  verifyToken,
};
