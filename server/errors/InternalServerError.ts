import CustomError from './CustomError';

class InternalServerError extends CustomError {
  statusCode: number;
  constructor(message: string) {
    super(message);
    this.statusCode = 400;
  }
}

export default InternalServerError;
