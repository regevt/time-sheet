import { Company } from "../../../Shared/model-interfaces";
import { executeQuery, insert, Tables } from "../services/db-service";

export const getAllCompanies = async () => {
  const users = await executeQuery<Company[]>(`select * from ${Tables.Companies}`);
  return users;
};

export const createCompany = async (name: string, registrationNumber: string, addressID: number, rateID: number, taxID: number) => {
  console.log("createUser");

  const res = await insert(
    `
  INSERT INTO ${Tables.Companies}
  (Name, RegistrationNumber, AddressID, RateID, TaxID )
  VALUES(?,?,?,?,?);
  `,
    [registrationNumber, name, addressID, rateID, taxID]
  );
  return res;
};
