import { Company } from "../../../Shared/model-interfaces";
import { insert, executeQuery, Tables } from "../services/db-service";

export const getAllCompanies = async () => {
  const users = await executeQuery(`select * from ${Tables.Companies}`);
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
    [name, registrationNumber, addressID, rateID, taxID]
  );
  return res;
};
export const getCompanyById = async (id: number) => {
  console.log("createCompanyById");

  const res = await executeQuery<any[]>(
    `
    select c.Name ,c.RegistrationNumber, a.Street, a.HouseNumber, a.City, a.Country, a.ZipCode  , r.Rate as Rate, t.Percentage as Tax from Companies c 
    join Rates r on r.ID = c.RateID 
    join Taxes t on t.ID = c.TaxID  
    join Addresses a on a.ID  = c.AddressID 
    WHERE c.ID = ?
  `,
    [id]
  );
  return res[0];
};
