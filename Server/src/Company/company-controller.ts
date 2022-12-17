import { NextFunction, Request, Response } from "express";
import * as companyDto from "./company-dto";
export async function getAllCompanies(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const risks = await companyDto.getAllCompanies();
    return res.status(200).json(risks).end();
  } catch (err) {
    return next(err);
  }
}
