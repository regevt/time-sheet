import { Address } from "../../../Shared/model-interfaces";
import { clone } from "lodash";
import template from "./htmls/invoiceTemplate.html";
import issuerAddress from "./htmls/issuerAddress.html";
import rowTemplate from "./htmls/rowTemplate.html";

import puppeteer from "puppeteer";

export interface Service {
  type: string;
  description?: string;
  rate: string;
  hours: string;
  tax: string;
  serviceTotal: string;
}

export interface PdfData {
  InvoiceNumber: string;
  IssueDate: string;
  Issuer: string;
  IssuerAddress: Address;
  IssuerKVK?: string;
  IssuerIBAN?: string;
  IssuerBTW?: string;
  BillTo: string;
  BillToAddress: Address;
  BillToRegistrationNumber: string;
  currencySymbol: string;
  Services: Service[];
  subtotal: string;
  vat: string;
  total: string;
}

const fillRows = (services: Service[], currencySymbol: string): string => {
  let rows: string = "";
  services.forEach((service) => {
    let templateCopy = clone(rowTemplate);
    templateCopy = templateCopy.replaceAll("{type}", service.type);
    templateCopy = templateCopy.replaceAll("{description}", service.description ?? "");
    templateCopy = templateCopy.replaceAll("{rate}", service.rate);
    templateCopy = templateCopy.replaceAll("{currencySymbol}", currencySymbol);
    templateCopy = templateCopy.replaceAll("{serviceTotal}", service.serviceTotal);
    templateCopy = templateCopy.replaceAll("{currencySymbol}", currencySymbol);

    rows += templateCopy;
  });

  return rows;
};

const fillIssuerAddress = (address: Address, kvk?: string): string => {
  let templateCopy = clone(issuerAddress);

  templateCopy = templateCopy.replaceAll("{Street}", address.Street);
  templateCopy = templateCopy.replaceAll("{HouseNumber}", address.HouseNumber?.toString() ?? "");
  templateCopy = templateCopy.replaceAll("{ZipCode}", address.ZipCode ?? "");
  templateCopy = templateCopy.replaceAll("{City}", address.City);
  templateCopy = templateCopy.replaceAll("{Country}", address.Country);
  templateCopy = templateCopy.replaceAll("{KVK}", kvk ?? "");

  return templateCopy;
};

const fillTemplateData = (data: PdfData): string => {
  let templateCopy = clone(template);

  templateCopy = templateCopy.replaceAll("{InvoiceNumber}", data.InvoiceNumber);
  templateCopy = templateCopy.replaceAll("{IssueDate}", data.IssueDate);
  templateCopy = templateCopy.replaceAll("{Issuer}", data.Issuer);
  templateCopy = templateCopy.replaceAll("{IssuerAddress}", fillIssuerAddress(data.IssuerAddress, data.IssuerKVK));
  templateCopy = templateCopy.replaceAll("{BillTo}", data.BillTo);
  // templateCopy = templateCopy.replaceAll('{BillToAddress}',data.BillToAddress);
  templateCopy = templateCopy.replaceAll("{rows}", fillRows(data.Services, data.currencySymbol));
  templateCopy = templateCopy.replaceAll("{subtotal}", data.subtotal);
  templateCopy = templateCopy.replaceAll("{currencySymbol}", data.currencySymbol);
  templateCopy = templateCopy.replaceAll("{vat}", data.vat);
  templateCopy = templateCopy.replaceAll("{total}", data.total);
  templateCopy = templateCopy.replaceAll("{IssuerKVK}", data.IssuerKVK ?? "");
  templateCopy = templateCopy.replaceAll("{IssuerBTW}", data.IssuerBTW ?? "");
  templateCopy = templateCopy.replaceAll("{IssuerIBAN}", data.IssuerIBAN ?? "");

  templateCopy = templateCopy.replaceAll("{baseURL}", "http://localhost:8080");

  return templateCopy;
};

export async function GenerateInvoicePDF(data: PdfData): Promise<Buffer> {
  const browser = await puppeteer.launch();
  const newpage = await browser.newPage();
  const pdfContent = fillTemplateData(data);
  await newpage.setContent(pdfContent);
  return newpage.pdf({ path: "generated_File_name.pdf", format: "A4" });
}
