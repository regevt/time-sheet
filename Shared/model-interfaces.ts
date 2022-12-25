export interface Currency {
  ID: number;
  Name: string;
  Code: string;
  Symbol: string;
}

export interface Rate {
  ID: number;
  Name: string;
  Rate: number;
  Currency: Currency;
}

export interface Tax {
  ID: number;
  Name: string;
  Percentage: number;
}

export interface Address {
  ID: number;
  Street: string;
  HouseNumber?: number;
  City: string;
  Country: string;
  ZipCode?: string;
}

export interface User {
  ID: number;
  FirstName: string;
  LastName: string;
  KVK?: string;
  Address: Address;
  Password: string;
  UserName: string;
  ApiKey?: string;
}

export interface Company {
  ID: number;
  Name: string;
  RegistrationNumber?: string;
  Address: Address;
  Tax: Tax;
  Rate: Rate;
}

export interface Entry {
  ID: number;
  Start: Date;
  End: Date;
  Company: Company;
  User: User;
}

export interface Filter {
  start?: Date;
  end?: Date;
  userId?: number;
  companyId?: number;
}
