import { Router } from "express";
import * as companyController from "./company-controller";
import { authorization } from "../Middleware/auth-middleware";

export default function companyRouter(): Router {
  const router = Router();

  router.route("/v1/company").all(authorization).get(companyController.getAllCompanies).post(companyController.createCompany);
  router.route("/v1/company/:id").all(authorization).get(companyController.getCompanyById);

  return router;
}
