import { Currency, User } from "../../../Shared/model-interfaces";
import { executeQuery, Tables } from "../services/db-service";

export const getAppUsers = async () => {
  const users = await executeQuery<User[]>(`select * from ${Tables.Users}`);
  return users;
};
