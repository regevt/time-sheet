import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
const path = require("path");

import bodyParser from "body-parser";
import companyRouter from "./src/Company/company-router";
import listsRouter from "./src/lists/lists-router";
import userRouter from "./src/Users/user-router";
import taxAndRateRouter from "./src/TaxAndRates/tax-and-rates-router";
import entriesRouter from "./src/Entries/entries-router";

const app: Express = express();
const port = Number(process.env.PORT) ?? 8080;
app.use(bodyParser.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use(userRouter());
app.use(companyRouter());
app.use(listsRouter());
app.use(taxAndRateRouter());
app.use(entriesRouter());

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
