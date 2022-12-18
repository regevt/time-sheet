import { Currency, User } from "../../../Shared/model-interfaces";
import { executeQuery, insert, Tables } from "../services/db-service";

export const getAppUsers = async (): Promise<User[] | undefined> => {
  console.log("getAppUsers");

  const users = await executeQuery<User[]>(`select * from ${Tables.Users}`);
  return users;
};

export const getUserByUserName = async (userName: string): Promise<User | undefined> => {
  console.log("getUserByUserName");
  const user = await executeQuery<User[]>(`select * from ${Tables.Users} where UserName = "${userName}" LIMIT 1`);
  return user.length ? user[0] : undefined;
};

export const createUser = async (userName: string, password: string, firstName: string, lastName: string, kvk: string, address: number) => {
  console.log("createUser");

  const res = await insert(
    `
  INSERT INTO ${Tables.Users}
  (Password, UserName, FirstName, LastName, KVK, AddressID )
  VALUES(?,?,?,?,?,?);
  `,
    [password, userName, firstName, lastName, kvk, address]
  );
  return res;
};
