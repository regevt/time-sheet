import { Company } from "../../../Shared/model-interfaces";
import { executeQuery, Tables } from "../services/db-service";

export const getAllCompanies = async () => {
  const users = await executeQuery<Company[]>(`select * from ${Tables.Companies}`);
  return users;
};
