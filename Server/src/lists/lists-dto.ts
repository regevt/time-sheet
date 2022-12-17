import { Currency } from "../../../Shared/model-interfaces";
import { executeQuery, Tables } from "../services/db-service";

export const getAllCurrencies = async () => {
  const users = await executeQuery<Currency[]>(`select * from ${Tables.Currencies}`);
  return users;
};
