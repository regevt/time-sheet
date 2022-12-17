const puppeteer = require("puppeteer");
async function Puppeteer_GeneratePDF() {
  // launching browser session
  const browser = await puppeteer.launch();
  // creating a new page
  const newpage = await browser.newPage();
  // defining the content to be converted to pdf
  const pdfContent = `&lt;!DOCTYPE html&gt;<br>&lt;html&gt;<br>
         &lt;title&gt;
Example of HTML to PDF using Puppetter&lt;
/title&gt;<br>
         &lt;body&gt;<br><br>
         &lt;h1&gt; Write here your heading&lt;/h1&gt;<br>
         &lt;p&gt;Write here your paragraph.&lt;/p&gt;<br><br>         &lt;/body&gt;<br>
         &lt;/html&gt;`;
  await newpage.setContent(pdfContent);
  // exporting generating the pdf from content
  await newpage.pdf({ path: "generated_File_name.pdf", format: "A4" });
  // closing browser session
  await browser.close();
}
