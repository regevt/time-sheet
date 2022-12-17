import { NextFunction, Request, Response } from "express";
import * as listsDto from "./lists-dto";
export async function getAllCurrencies(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const risks = await listsDto.getAllCurrencies();
    return res.status(200).json(risks).end();
  } catch (err) {
    return next(err);
  }
}
