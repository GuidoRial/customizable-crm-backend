import expressLoader from "./express";
import dependencyInjectorLoader from "./dependencyInjector";
import jobsLoader from "./jobs";
import Logger from "./logger";
import mongooseLoader from "./mongoose";
import "./events";

export default async ({ expressApp }) => {
  const database = await mongooseLoader();
  Logger.info("✌️ DB loaded and connected!");

  // It returns the agenda instance because it's needed in the subsequent loaders
  // const { agenda } = await dependencyInjectorLoader({ database });
  Logger.info("✌️ Dependency Injector loaded");

  // await jobsLoader({ agenda });
  Logger.info("✌️ Jobs loaded");

  await expressLoader({ app: expressApp });
  Logger.info("✌️ Express loaded");
};
