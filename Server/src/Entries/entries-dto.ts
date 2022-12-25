import { Filter } from "../../../Shared/model-interfaces";
import { insert, executeQuery, Tables } from "../services/db-service";
import moment from "moment";

export const getEntries = async (filter: Filter) => {
  const whereStr: string[] = [];

  if (filter.start) {
    whereStr.push('`Start` >= "' + moment(filter.start).format("YYYY-MM-DD hh:mm:ss") + '"');
  }
  if (filter.end) {
    whereStr.push('`End` <= "' + moment(filter.end).format("YYYY-MM-DD hh:mm:ss") + '"');
  }
  if (filter.userId) {
    whereStr.push(`UserID = ${filter.userId}`);
  }
  if (filter.companyId) {
    whereStr.push(`CompanyID = ${filter.companyId}`);
  }

  let query = `select * from ${Tables.Entries}`;

  if (whereStr.length > 0) {
    query = `${query} where ${whereStr.join(" and ")}`;
  }

  const users = await executeQuery(query);
  return users;
};

export const createEntry = async (start: Date, end: Date, companyId: number, userId: number) => {
  console.log("createEntry");

  const res = await insert("INSERT INTO " + Tables.Entries + " (`Start`, `End`, CompanyID, UserID ) VALUES(?,?,?,?);", [
    moment(start).format("YYYY-MM-DD hh:mm:ss"),
    moment(end).format("YYYY-MM-DD hh:mm:ss"),
    companyId,
    userId,
  ]);
  return res;
};
