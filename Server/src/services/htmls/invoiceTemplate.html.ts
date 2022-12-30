export default `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
    <style>
    body {
      font-family: 'Roboto rev=1', Fallback, sans-serif;
    }
    </style>



  </head>
  <body>
    <div style="width: 794px; min-height: 27cm; margin: 0 auto 0 auto; background: white; padding: 1.2cm">
      <div style="font-weight: bold; font-size: 29px; color: #aaa; text-align: center; padding-bottom: 20px; margin: 0 auto">INVOICE</div>
      <table class="table address">
        <tbody>
          <tr class="tr">
            <td class="td" valign="middle" style="padding: 0 0 10px 5px; width: 12cm">
              <div style="height: 3cm; width: 3.1433628318584cm">
                <img src="{baseURL}/assets/1ab9cb9c0fc507e494e6ce61e3fda603.png" style="height: 3cm; width: 3.1433628318584cm" />
              </div>
            </td>
            <td class="td" valign="top" style="text-align: right; width: 6.6cm; padding-bottom: 30px !important">
              Invoice #: {InvoiceNumber}
              <br />
              Issue Date: {IssueDate}<br />
            </td>
          </tr>
          <tr class="tr">
            <td class="td" valign="top" style="padding-left: 5px">
              From:
              <div style="font-size: 14px; font-weight: bold; margin: 0; padding: 0">{Issuer}</div>
              {IssuerAddress}
            </td>
            <td class="td" valign="top">
              Bill to:
              <div style="font-size: 14px; font-weight: bold; margin: 0; padding: 0">{BillTo}</div>
              {BillToAddress}
            </td>
          </tr>
        </tbody>
      </table>
      <div style="height: 20px"></div>
      <table class="table items" style="width: 18.6cm; padding-top: 20px; -ms-hyphens: auto; -moz-hyphens: auto; -webkit-hyphens: auto; hyphens: auto">
        <thead class="thead">
          <tr class="tr">
            <td class="td" colspan="6">Services</td>
          </tr>
          <tr class="tr" style="text-align: right; font-weight: 600; padding: 5px">
            <td class="td" style="text-align: left; width: 6cm">Type</td>
            <td class="td" style="text-align: left; width: 6cm">Description</td>
            <td class="td table-align-right" style="white-space: nowrap; width: 2cm">Hour Rate</td>
            <td class="td table-align-right" style="width: 1.5cm">Hours</td>
            <td class="td tax table-align-right">Tax</td>
            <td class="td table-align-right" style="width: 2cm">Line Total</td>
          </tr>
        </thead>
        {rows}
      </table>
      <table class="table total" style="margin-top: 20px; text-align: right; width: 18.6cm; white-space: nowrap">
        <tbody>
          <tr class="tr">
            <td class="td" style="width: 15.2cm">Subtotal:</td>
            <td class="td" style="font-weight: bold; width: 3.4cm; padding-right: 5px !important">{subtotal}{currencySymbol}</td>
          </tr>
          <tr class="tr">
            <td class="td">vat nl:</td>
            <td class="td" style="font-weight: bold; padding-right: 5px !important">{vat}{currencySymbol}</td>
          </tr>
          <tr class="tr" style="font-weight: bold; font-size: 14px">
            <td class="td">Total Due:</td>
            <td class="td" id="bolder" style="font-weight: bolder; font-size: 14px; padding-right: 5px">
              <div style="font-size: 14px; font-weight: bold; margin: 0; padding: 0">{total}{currencySymbol}</div>
            </td>
          </tr>
        </tbody>
      </table>
      <div style="clear: both"></div>
      <div style="margin: 20px 0">
        KVK: {IssuerKVK}<br />
        BTW-id: {IssuerBTW}<br />
        IBAN: {IssuerIBAN}
      </div>
    </div>
  </body>
</html>`;
