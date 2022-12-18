import { Currency } from "../../../Shared/model-interfaces";
import { AddressDTO } from "../../../Shared/dto-models";
import { executeQuery, insert, Tables } from "../services/db-service";

export const getAllCurrencies = async () => {
  const users = await executeQuery<Currency[]>(`select * from ${Tables.Currencies}`);
  return users;
};

export const createAddress = async (address: AddressDTO) => {
  console.log("createAddress");

  const res = await insert(
    `
    INSERT INTO ${Tables.Addresses}
    (Street, HouseNumber, City, Country, ZipCode)
    VALUES(?,?,?,?,?);    
  `,
    [address.Street, address.HouseNumber, address.City, address.Country, address.ZipCode]
  );
  return res;
};
