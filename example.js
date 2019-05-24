const puppeteer = require('puppeteer');

(async () => {
  console.time("Puppeteer_Example");
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://google.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
  console.timeEnd("Puppeteer_Example")
})();
