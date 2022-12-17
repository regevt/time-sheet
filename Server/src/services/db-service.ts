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

export const executeQuery = async <T>(query: string): Promise<T> => {
  return new Promise(async (resolve, reject) => {
    let conn;
    try {
      console.log("running query", query);

      conn = await pool.getConnection();

      const data: any = [];

      conn
        .queryStream(query)
        .on("data", (row) => {
          data.push(row);
        })
        .on("close", () => {
          resolve(data);
        });
      conn.end();
    } catch (err) {
      throw err;
    } finally {
      if (conn) return conn.end();
    }
  });
};
