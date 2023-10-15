import Agenda from "agenda";
import config from "../config";

export default ({ database }) => {
  return new Agenda({
    mongo: database,
    db: {
      collection: config.agenda.dbCollection,
      address: config.databaseURL,
    },
    processEvery: config.agenda.pooltime,
    maxConcurrency: config.agenda.concurrency,
  });
};
