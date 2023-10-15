import { IAgendaJob } from "../interfaces/IAgendaJob";
import { Container } from "typedi";
import config from "../config/index";

import Logger from "./logger";
import Agenda from "agenda";
export default async ({ agenda }: { agenda: Agenda }) => {
  if (config.crons.enabled) {
  }
  agenda.on("fail", async (error, job) => {
    console.error(`${job.attrs.name} failed`);
    console.error(error);
  });

  // Container.set('agendaInstance', agenda);
  Logger.info("✌️ Agenda injected into container");

  return await agenda.start();
};
