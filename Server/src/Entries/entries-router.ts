import { Router } from "express";
import * as entriesController from "./entries-controller";
import { authorization } from "../Middleware/auth-middleware";

export default function entriesRouter(): Router {
  const router = Router();

  router.route("/v1/entry").all(authorization).put(entriesController.getEntries).post(entriesController.createEntry);

  return router;
}
