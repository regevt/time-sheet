import { Router } from "express";
import * as taxAndRatesController from "./tax-and-rates-controller";
import { authorization } from "../Middleware/auth-middleware";

export default function taxAndRateRouter(): Router {
  const router = Router();

  router.route("/v1/rate").all(authorization).get(taxAndRatesController.getRates).post(taxAndRatesController.createRate);
  router.route("/v1/rate/:id").all(authorization).get(taxAndRatesController.getRate);
  router.route("/v1/tax").all(authorization).get(taxAndRatesController.getTaxes).post(taxAndRatesController.createTax);
  router.route("/v1/tax/:id").all(authorization).get(taxAndRatesController.getTax);

  return router;
}
