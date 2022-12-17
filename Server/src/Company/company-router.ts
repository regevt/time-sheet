import { Router } from "express";
import * as companyController from "./company-controller";

export default function companyRouter(): Router {
  const router = Router();

  router.route("/v1/company").get(companyController.getAllCompanies);

  return router;
}
