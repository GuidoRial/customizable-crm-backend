import CustomError from "./CustomError";

class ForbiddenError extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 403;
  }
}

export default ForbiddenError;
