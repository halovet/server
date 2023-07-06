module.exports = (error, req, res, next) => {
  let message = "Internal Server Error";
  let status = 500;

  switch (error.name) {
    case "Username Empty":
      status = 400;
      message = "do not empty username";
      break;

    case "Email Empty":
      status = 400;
      message = "do not empty email";
      break;

    case "Password Empty":
      status = 400;
      message = "do not empty password";
      break;

    case "Email Not Unique":
      status = 400;
      message = "email already registered, create a new one";
      break;

    case "Email False":
      status = 400;
      message = "email not match";
      break;

    case "Password False":
      status = 400;
      message = "password not match";
      break;

    case "Invalid Token":
      status = 401;
      message = "you're not authenticate";
      break;

    case "Not Found":
      status = 404;
      message = "data not found";
      break;

    default:
      break;
  }
  res.status(status).json({ message: message });
};
