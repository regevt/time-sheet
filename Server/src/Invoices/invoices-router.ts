import { Router } from "express";
import * as entriesController from "./invoices-controller";
import { authorization } from "../Middleware/auth-middleware";

export default function invoiceRouter(): Router {
  const router = Router();

  router.route("/v1/invoice").all(authorization).get(entriesController.getInvoice);

  return router;
}
