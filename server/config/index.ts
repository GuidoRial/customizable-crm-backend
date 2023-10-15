import dotenv from "dotenv";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
export default {
  jwtSecret: process.env.SESSIONS_JWT_SECRET,
  crons: {
    enabled: process.env.CRON_JOBS_ENABLED,
  },
  logs: {
    level: process.env.LOG_LEVEL || "silly",
  },
  api: {
    prefix: "/api",
  },
  server: {
    port: process.env.port || 4000,
  },
  sessions: {
    secret: process.env.SESSIONS_JWT_SECRET,
  },
  databaseURL: process.env.MONGODB_URI,
  /**
   * Agenda.js stuff
   */
  agenda: {
    dbCollection: process.env.AGENDA_DB_COLLECTION,
    pooltime: process.env.AGENDA_POOL_TIME,
    concurrency: 20,
  },

  /**
   * Agendash config
   */
  agendash: {
    user: process.env.AGENDASH_USER || "agendash",
    password: process.env.AGENDASH_PASSWORD || "agendash123",
  },
};
