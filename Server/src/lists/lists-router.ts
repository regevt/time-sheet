import { Router } from "express";
import * as listsController from "./lists-controller";

export default function listsRouter(): Router {
  const router = Router();

  router.route("/v1/list/currencies").get(listsController.getAllCurrencies);

  return router;
}
