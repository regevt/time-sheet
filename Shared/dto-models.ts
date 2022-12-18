export interface CurrencyDTO {
  ID: number;
  Name: string;
  Code: string;
  Symbol: string;
}

export interface RateDTO {
  ID: number;
  Name: string;
  Rate: number;
  CurrencyID: number;
}

export interface TaxDTO {
  ID: number;
  Name: string;
  Percentage: number;
}

export interface AddressDTO {
  ID: number;
  Street: string;
  HouseNumber?: number;
  City: string;
  Country: string;
  ZipCode?: string;
}

export interface UserDTO {
  ID: number;
  FirstName: string;
  LastName: string;
  KVK?: string;
  AddressID: number;
  Password: string;
  UserName: string;
}

export interface CompanyDTO {
  ID: number;
  Name: string;
  RegistrationNumber?: string;
  AddressID: number;
  TaxID: number;
  RateID: number;
}

export interface EntryDTO {
  ID: number;
  Start: Date;
  End: Date;
  CompanyID: number;
  UserID: number;
}
