/*
const xact_url = 'https://handelsbanken-marknadsinformation.se/app/instrument/SHBSABTIi/2365/Historik'
const xact_selector = 'instrumenthistory history table'
const puppeteer = require('puppeteer');
const html_table_to_json = require('html-table-to-json');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(xact_url);
  await page.waitForSelector("instrumenthistory history table tbody > tr:nth-child(1) > td.cell-table__num");
  const html_table = await page.$eval(xact_selector, e => e.outerHTML);
  console.log(html_table_to_json.parse(html_table).results);
  await browser.close();
})();

*/