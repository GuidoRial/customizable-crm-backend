import { Service } from "typedi";

@Service()
export default class ErrorService{
  constructor() {}
  public generateError = (error: any) => {
    return {
      message: error.message,
      code: error.statusCode || error.code || 500
    }
  }
}