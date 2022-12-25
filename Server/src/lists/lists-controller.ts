import { NextFunction, Request, Response } from "express";
import * as listsDto from "./lists-dto";
export async function getAllCurrencies(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const currencies = await listsDto.getAllCurrencies();
    return res.status(200).json(currencies).end();
  } catch (err) {
    return next(err);
  }
}
export async function getAllAddresses(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const addresses = await listsDto.getAllAddresses();
    return res.status(200).json(addresses).end();
  } catch (err) {
    return next(err);
  }
}
export async function createAddress(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const { city, country, street, houseNumber, zipCode } = req.body;

    if (!city || !country || !street) {
      return res.status(400).send("Missing mandatory field");
    }

    const addressId = await listsDto.createAddress({
      City: city,
      Country: country,
      Street: street,
      HouseNumber: houseNumber,
      ZipCode: zipCode,
      ID: 0,
    });

    return res.status(200).json({ id: addressId }).end();
  } catch (err) {
    return next(err);
  }
}
