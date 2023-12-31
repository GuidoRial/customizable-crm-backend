import CustomError from "./CustomError";

class NotFoundError extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 404;
  }
}

export default NotFoundError;
