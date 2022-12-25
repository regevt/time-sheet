import { NextFunction, Request, Response } from "express";
import { createAddress } from "../lists/lists-dto";
import * as companyDto from "./entries-dto";
export async function getEntries(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const { start, end, companyId, userId } = req.body;

    const entries = await companyDto.getEntries({
      start,
      end,
      userId,
      companyId,
    });

    return res.status(200).json(entries).end();
  } catch (err) {
    return next(err);
  }
}

export async function createEntry(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("createEntry controller");
    const { start, end, companyId, userId } = req.body;

    if (!start || !end || !companyId || !userId) {
      return res.status(400).send("Missing mandatory field");
    }

    const id = await companyDto.createEntry(new Date(start), new Date(end), companyId, userId);

    return res.status(200).json({ id }).end();
  } catch (err) {
    return next(err);
  }
}
