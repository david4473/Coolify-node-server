const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: "postgres",
  host: "lkk0kgw:5432",
  database: "postgres",
  password: process.env.DB_PASSWORD,
  port: 5432,
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};
