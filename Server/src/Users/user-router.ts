import { Router } from "express";
import * as userController from "./user-controller";
import { authorization } from "../Middleware/auth-middleware";

export default function userRouter(): Router {
  const router = Router();

  router.route("/v1/user").get(authorization, userController.getAllUsers).post(userController.createUser);
  router.route("/v1/user/login").put(userController.login);

  return router;
}
