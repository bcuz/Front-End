const jwt = require("jsonwebtoken");

const jwtKey =
  process.env.JWT_SECRET ||
  "add a .env file to root of project with the JWT_SECRET variable";

const generateToken = user => {
  console.log(user);
  const payload = {
    id: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1d"
  };

  return jwt.sign(payload, jwtKey, options);
};

module.exports = {
  generateToken
};