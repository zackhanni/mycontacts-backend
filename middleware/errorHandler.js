const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  let response = {
    title: "Server error",
    message: err.message,
    stackTrace: err.stack,
  };

  switch (statusCode) {
    case constants.VALIDATION_ERROR:
      response.title = "Validation Failed";
      break;
    case constants.NOT_FOUND:
      response.title = "Not found";
      break;
    case constants.UNAUTHORIZED:
      response.title = "Unauthorized";
      break;
    case constants.FORBIDDEN:
      response.title = "Forbidden";
      break;
    case constants.SERVER_ERROR:
      response.title = "Server error";
      break;
    default:
      console.log("No error, all good dude");
      break;
  }

  res.status(statusCode).json(response);
};

module.exports = errorHandler;
