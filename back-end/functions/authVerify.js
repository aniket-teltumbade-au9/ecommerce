const jwt = require('jsonwebtoken')
module.exports = authverify = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.send({ err: "No token provided!" });
  }

  jwt.verify(token, process.env.AUTH_PASS_KEY, (err, decoded) => {
    if (err) {
      return res.send({ err });
    }
    req.email = decoded.email;
    next();
  });
}