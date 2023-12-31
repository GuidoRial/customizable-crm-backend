import CustomError from "./CustomError";

class BadRequestError extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}

export default BadRequestError;
