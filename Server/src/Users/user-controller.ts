import { NextFunction, Request, Response } from "express";
import * as userDto from "./user-dto";
export async function getAllUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    const risks = await userDto.getAppUsers();
    return res.status(200).json(risks).end();
  } catch (err) {
    return next(err);
  }
}
