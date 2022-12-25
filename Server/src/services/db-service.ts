require("dotenv").config();
import mariadb from "mariadb";

export enum Tables {
  Currencies = "Currencies",
  Rates = "Rates",
  Taxes = "Taxes",
  Addresses = "Addresses",
  Users = "Users",
  Companies = "Companies",
  Entries = "Entries",
}

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.BD_PASSWORD,
  user: process.env.BD_USER,
  port: 3306,
  acquireTimeout: 200000,
});

export const insert = async (query: string, prams?: any[]): Promise<number> => {
  const conn = await pool.getConnection();
  const res = await conn.query(query, prams);
  console.log(res);

  return Number(res.insertId.toString());
};

export const executeQuery = async <T>(query: string, prams?: any[]): Promise<T> => {
  const conn = await pool.getConnection();
  const res = await conn.query(query, prams);
  console.log(res);

  return res;
};
