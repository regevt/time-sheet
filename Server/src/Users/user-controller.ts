import { NextFunction, Request, Response } from "express";
import { createAddress } from "../lists/lists-dto";
import * as hashingService from "../services/hasing-service";
import * as userDto from "./user-dto";
export async function getAllUsers(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("getAllUsers controller");

    const users = await userDto.getAppUsers();
    return res.status(200).json(users).end();
  } catch (err) {
    return next(err);
  }
}

export async function createUser(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("createUser controller");
    const { userName, password, firstName, lastName, kvk, address } = req.body;

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

    const hashedPassword = await hashingService.hashPassword(password);
    await userDto.createUser(userName, hashedPassword, firstName, lastName, kvk, addressId);
    return res.status(200).end();
  } catch (err) {
    return next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    console.log("login controller");

    const { userName, password } = req.body;
    const user = await userDto.getUserByUserName(userName);

    if (!user) {
      return res.status(404).send("User does not exist!");
    }

    if (await hashingService.comparePassword(password, user.Password)) {
      const accessToken = hashingService.generateAccessToken(user);
      const refreshToken = hashingService.generateRefreshToken(user);
      return res.json({ accessToken: accessToken, refreshToken: refreshToken });
    } else {
      return res.status(401).send("Password Incorrect!");
    }
  } catch (err) {
    return next(err);
  }
}
