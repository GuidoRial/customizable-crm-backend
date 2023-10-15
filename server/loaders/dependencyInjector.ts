import { Container } from "typedi";
import LoggerInstance from "./logger";
import agendaFactory from "./agenda";
import user from "../models/user";
import NodeCache from "node-cache";

export default ({ database }: { database: any }) => {
  try {
    const nodeCache = new NodeCache();
    // const agendaInstance = agendaFactory({ database });

    Container.set("logger", LoggerInstance);
    Container.set("userModel", user);
    Container.set("nodeCache", nodeCache);

    return { agenda: "" };
  } catch (e) {
    LoggerInstance.error(
      "🔥 Error on dependency injector loader: %o",
      e.message,
    );
    throw e;
  }
};
