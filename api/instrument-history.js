const puppeteer = require('puppeteer');
const html_table_to_json = require('html-table-to-json');

const instrument_history = async (req, res) => {

  [ url, selector ] = req.query;

  url = decodeURIComponent(url);
  selector = decodeURIComponent(selector);
console.log(url, selector);
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();

  // await page.goto(url);
  // await page.waitForSelector(selector || "instrumenthistory history table tbody > tr:nth-child(1) > td.cell-table__num");
  // const html_table = await page.$eval(xact_selector, e => e.outerHTML);
  // const xact_obligation = html_table_to_json.parse(html_table).results;
  // await browser.close();
  console.log(xact_obligation);
  res.json({
    //xact_obligation,
    query: req.query,
    url,
    selector
  })
}

module.exports = instrument_history