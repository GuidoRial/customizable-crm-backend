import { Response, NextFunction } from "express";
import { Container } from "typedi";
import { IRequest } from "../../interfaces/IRequest";

function cache(req: IRequest, res: Response, next: NextFunction) {
  const nodeCache = Container.get("nodeCache") as any;
  const fullURL = `${req.protocol}://${req.get("host")}${req.originalUrl}`;

  const isCached = nodeCache.has(fullURL);

  if (isCached) {
    req.cache = nodeCache.get(fullURL);
  }
  req.fullURL = fullURL;

  return next();
}

export default cache;
