require("dotenv").config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOSTNAME } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: "mysql",
    dialectOptions: {
      useUTC: false, //for reading from database
      dateStrings: true,
      typeCast: true,
    },
    timezone: "+07:00", //for writing to database
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: "mysql",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOSTNAME,
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      rejectUnauthorized: false,
    },
    ssl: true,
  },
};
