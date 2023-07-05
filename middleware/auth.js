const { verifyToken } = require("../helpers/helper");
const User = require("../model/User");

async function authenticationUser(req, _, next) {
  try {
    const access_token = req.headers.access_token;
    if (!access_token) throw { name: "Invalid Token" };

    const payload = verifyToken(access_token);
    const user = await User.findById(payload.id);
    if (!user) throw { name: "Invalid Token" };

    req.user = { username: user.username, email: user.email };

    next();
  } catch (error) {
    console.log(error);
    next(error);
  }
}

module.exports = { authenticationUser };
