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
  Currency: number;
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
  Name: string;
  KVK: string;
  Address: number;
  Password: string;
}

export interface Company {
  ID: number;
  Name: string;
  RegistrationNumber?: string;
  Address: number;
  Tax: number;
  Rate: number;
}

export interface Entry {
  ID: number;
  Start: Date;
  End: Date;
  Company: number;
  User: number;
}
