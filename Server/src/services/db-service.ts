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

// export const query = async (query: string, prams?: any[]): Promise<number> => {
//   const conn = await pool.getConnection();
//   let rows = await conn.query(query, prams);

//   if(rows.length > 0){
//     rows = rows.filter(row => )
//   }
//   return res.insertId;
// };
export const insert = async (query: string, prams?: any[]): Promise<number> => {
  const conn = await pool.getConnection();
  const res = await conn.query(query, prams);
  console.log(res);

  return Number(res.insertId.toString());
};

// export const executeInsert = async (query: string, prams?: any[]): Promise<number> => {
//   return new Promise(async (resolve, reject) => {
//     let conn;
//     try {
//       console.log("running insert query", query);

//       conn = await pool.getConnection();
//       let data: any;

//       conn
//         .queryStream(query, prams)
//         .on("data", (row) => {
//           data = row;
//           console.log(data);
//         })
//         .on("close", () => {
//           console.log(data);

//           resolve(data);
//         });
//       conn.end();
//     } catch (err) {
//       throw err;
//     } finally {
//       if (conn) return conn.end();
//     }
//   });
// };
