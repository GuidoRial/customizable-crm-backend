import "reflect-metadata"; // We need this in order to use @Decorators

import config from "./config";

import express from "express";

import loaders from "./loaders";

import Logger from "./loaders/logger";
async function startServer() {
  const app = express();
  await loaders({ expressApp: app });

  app.listen(config.server.port, (err?: any) => {
    if (err) {
      Logger.error(err);
      process.exit(1);
    }
    Logger.info(`
      ################################################
      ⚛️  Server listening on port: ${config.server.port}    ⚛️
      ################################################
    `);
  });
}

startServer();
