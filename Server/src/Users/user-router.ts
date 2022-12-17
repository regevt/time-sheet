import { Router } from "express";
import * as userController from "./user-controller";

export default function companyRouter(): Router {
  const router = Router();

  router.route("/v1/users").get(userController.getAllUsers);

  return router;
}
