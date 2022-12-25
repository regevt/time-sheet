import { Router } from "express";
import * as listsController from "./lists-controller";
import { authorization } from "../Middleware/auth-middleware";

export default function listsRouter(): Router {
  const router = Router();

  router.route("/v1/list/currencies").all(authorization).get(listsController.getAllCurrencies);

  return router;
}
