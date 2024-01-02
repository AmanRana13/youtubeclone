export default class ApiError extends Error {
  constructor(statusCode, message = "Something went wronge", errors = []) {
    super(statusCode, message, errors);

    this.statusCode = statusCode;
    this.message = message;
    this.data = null;
    this.errors = errors;
    this.success = false;
  }
}
