import { Rate, Tax } from "../../../Shared/model-interfaces";
import { insert, executeQuery, Tables } from "../services/db-service";

export const createRate = async (name: string, rate: number, currencyID: number) => {
  console.log("createRate");

  const res = await insert(
    `
  INSERT INTO ${Tables.Rates}
  (Name, Rate, CurrencyID )
  VALUES(?,?,?);
  `,
    [name, rate, currencyID]
  );
  return res;
};

export const getRates = async (): Promise<Rate[] | undefined> => {
  console.log("getRates");
  const rate = await executeQuery<Rate[]>(`select * from ${Tables.Rates}`);
  return rate.length ? rate : undefined;
};
export const getRateById = async (id: number): Promise<Rate | undefined> => {
  console.log("getRateById");
  const rate = await executeQuery<Rate[]>(`select * from ${Tables.Rates} where ID = "${id}" LIMIT 1`);
  return rate.length ? rate[0] : undefined;
};

export const createTax = async (name: string, percentage: number) => {
  console.log("createTax");

  const res = await insert(
    `
  INSERT INTO ${Tables.Taxes}
  (Name, Percentage )
  VALUES(?,?);
  `,
    [name, percentage]
  );
  return res;
};

export const getTaxes = async (): Promise<Tax[] | undefined> => {
  console.log("getRates");
  const rate = await executeQuery<Tax[]>(`select * from ${Tables.Taxes}`);
  return rate.length ? rate : undefined;
};

export const getTaxById = async (id: number): Promise<Tax | undefined> => {
  console.log("getRateById");
  const tax = await executeQuery<Tax[]>(`select * from ${Tables.Taxes} where ID = "${id}" LIMIT 1`);
  return tax.length ? tax[0] : undefined;
};
