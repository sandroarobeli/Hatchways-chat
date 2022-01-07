const Sequelize = require("sequelize");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const db = new Sequelize(
  process.env.DATABASE_URL ||
    `postgres://postgres:${process.env.SESSION_SECRET}@127.0.0.1:5432/messenger`,
  {
    logging: false,
  }
);

module.exports = db;
