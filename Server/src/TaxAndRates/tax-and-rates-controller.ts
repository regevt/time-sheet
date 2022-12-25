import { NextFunction, Request, Response } from "express";
import * as taxAndRatesDto from "./tax-and-rates-dto";

export async function getRates(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("getRates controller");

    const rates = await taxAndRatesDto.getRates();
    return res.status(200).json(rates).end();
  } catch (err) {
    return next(err);
  }
}
export async function getRate(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("getRate controller");

    const { id } = req.params;

    if (Number.isNaN(id)) return res.status(400).send("Unknown ID");
    const rates = await taxAndRatesDto.getRateById(Number(id));
    return res.status(200).json(rates).end();
  } catch (err) {
    return next(err);
  }
}

export async function createRate(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("createRate controller");
    const { name, rate, currencyId } = req.body;

    if (!name || !rate || !currencyId) {
      return res.status(400).send("Missing mandatory field");
    }

    const rateId = await taxAndRatesDto.createRate(name, rate, currencyId);

    return res.status(200).json({ rateId }).end();
  } catch (err) {
    return next(err);
  }
}

export async function getTaxes(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("getTaxes controller");

    const rates = await taxAndRatesDto.getTaxes();
    return res.status(200).json(rates).end();
  } catch (err) {
    return next(err);
  }
}
export async function getTax(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("getTax controller");

    const { id } = req.params;

    if (Number.isNaN(id)) return res.status(400).send("Unknown ID");
    const rates = await taxAndRatesDto.getTaxById(Number(id));
    return res.status(200).json(rates).end();
  } catch (err) {
    return next(err);
  }
}

export async function createTax(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("createTax controller");
    const { name, percentage } = req.body;

    if (!name || percentage === undefined) {
      return res.status(400).send("Missing mandatory field");
    }

    const taxId = await taxAndRatesDto.createTax(name, percentage);

    return res.status(200).json({ taxId }).end();
  } catch (err) {
    return next(err);
  }
}
