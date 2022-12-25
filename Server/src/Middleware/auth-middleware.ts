import { NextFunction, Request, Response } from "express";
import * as userDto from "../Users/user-dto";

export async function authorization(req: Request, res: Response, next: NextFunction) {
  const apiKey = req.headers["api-key"];

  if (!apiKey || apiKey.length === 0) return res.status(401).send("Unauthorized");

  const user = await userDto.getUserByApiKey(apiKey as string);

  if (!user) return res.status(401).send("Unauthorized");

  next();
}
