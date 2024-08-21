import { constants } from "../constants.js";
export const ErrorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : constants.SERVER_ERROR;

  switch (res.statusCode) {
    case constants.VALIDATION_ERROR:
      res.json({
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.UNAUTHRIZED:
      res.json({
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.FORBIDDEN:
      res.json({
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    case constants.NOT_FOUND:
      console.log("not found error handling");
      res.json({
        message: err.message,
        stackTrace: err.stack,
      });
      break;
    default:
      break;
  }
};
