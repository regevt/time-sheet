require("dotenv").config();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { omit } from "lodash";
import { User } from "../../../Shared/model-interfaces";

const ACCESS_TOKEN_SECRET =
  process.env.ACCESS_TOKEN_SECRET ??
  "362d09a4d82f6ac5ddc6f69b3cf8e0be4a5d612cb421d74eec79208cb52e22d972c9f642107d755f598543fbb84e09e65070fc6ebc7be1d468b1480e6d93f4c2";

export const generateAccessToken = (user: User) => {
  return jwt.sign(omit(user, "Password"), ACCESS_TOKEN_SECRET, { expiresIn: "30d" });
};

export const generateRefreshToken = (user: User) => {
  let refreshTokens = [];
  const refreshToken = jwt.sign(user, ACCESS_TOKEN_SECRET, { expiresIn: "31 d" });
  refreshTokens.push(refreshToken);
  return refreshToken;
};

export const hashPassword = async (password: string): Promise<string> => {
  return await bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hashedPassword: string) => {
  return await bcrypt.compare(password, hashedPassword);
};
