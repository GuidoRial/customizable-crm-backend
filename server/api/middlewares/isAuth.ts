import { expressjwt } from "express-jwt";
import config from "../../config";

const getTokenFromHeader = (req) => {
  if (req?.headers?.authorization.split(" ")[0] === "Bearer") {
    return req.headers.authorization.split(" ")[1];
  }
  if (req.cookies && req.cookies["auth-token"]) {
    return req.cookies["auth-token"];
  }
  return null;
};

const isAuth = expressjwt({
  secret: config.jwtSecret, // The _secret_ to sign the JWTs
  requestProperty: "token", // Use req.token to store the JWT
  getToken: getTokenFromHeader, // How to extract the JWT from the request
  algorithms: ["HS256"],
});

export default isAuth;
