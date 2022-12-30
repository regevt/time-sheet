import { NextFunction, Request, Response } from "express";
import { createAddress } from "../lists/lists-dto";
import { GenerateInvoicePDF } from "../services/pdf-service";
export async function getInvoice(req: Request, res: Response, next: NextFunction): Promise<Response | void> {
  try {
    // const { start, end, companyId, userId } = req.body;

    const buffer = await GenerateInvoicePDF({
      BillTo: "BattU",
      BillToAddress: {
        City: "schiedam",
        Country: "The Netherlands",
        Street: "Gerrit Verboonstraat",
        HouseNumber: 54,
        ZipCode: "3111 AA",
        ID: 0,
      },
      BillToRegistrationNumber: "123456",
      currencySymbol: "₪",
      InvoiceNumber: "123456",
      IssueDate: "31/07/1984",
      Issuer: "regev",
      IssuerAddress: {
        City: "schiedam",
        Country: "The Netherlands",
        Street: "Gerrit Verboonstraat",
        HouseNumber: 54,
        ZipCode: "3111 AA",
        ID: 0,
      },
      subtotal: "300",
      total: "700",
      vat: "21",
      IssuerBTW: "34g5kj23gh45k",
      IssuerIBAN: "45g34kj5hg23",
      IssuerKVK: "23j4h5ghjk234",
      Services: [
        {
          hours: "20",
          rate: "30",
          serviceTotal: "400",
          tax: "20",
          type: "Development",
        },
      ],
    });
    res.setHeader("Content-Length", buffer.length);
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=quote.pdf");

    return res.status(200).send(buffer).end();
  } catch (err) {
    return next(err);
  }
}
