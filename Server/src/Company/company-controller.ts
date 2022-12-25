import { NextFunction, Request, Response } from "express";
import { createAddress } from "../lists/lists-dto";
import * as companyDto from "./company-dto";
export async function getAllCompanies(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const companies = await companyDto.getAllCompanies();
    return res.status(200).json(companies).end();
  } catch (err) {
    return next(err);
  }
}

export async function createCompany(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("createCompany controller");
    const { name, registrationNumber, rateId, taxId, address } = req.body;

    if (!name || !registrationNumber || !rateId || !taxId || !address) {
      return res.status(400).send("Missing mandatory field");
    }

    const addressId = await createAddress({
      City: address.city,
      Country: address.country,
      Street: address.street,
      HouseNumber: address.houseNumber,
      ZipCode: address.zipCode,
      ID: 0,
    });

    if (!addressId) {
      return res.status(400).send("Error creating user");
    }

    const id = await companyDto.createCompany(name, registrationNumber, addressId, rateId, taxId);

    return res.status(200).json({ id }).end();
  } catch (err) {
    return next(err);
  }
}
export async function getCompanyById(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("createCompany controller");
    const { id } = req.params;

    if (!id || Number.isNaN(id)) return res.status(400).send("Unknown ID");
    const company = await companyDto.getCompanyById(Number(id));
    return res.status(200).json(company).end();
  } catch (err) {
    return next(err);
  }
}
