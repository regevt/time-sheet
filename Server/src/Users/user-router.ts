import { Router } from "express";
import * as userController from "./user-controller";

export default function userRouter(): Router {
  const router = Router();

  router.route("/v1/user").get(userController.getAllUsers).post(userController.createUser).put(userController.login);
  router.route("/v1/user/login").put(userController.login);

  return router;
}
