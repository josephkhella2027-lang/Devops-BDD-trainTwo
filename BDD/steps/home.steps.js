const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { chromium } = require("playwright");

let browser;
let page;

Given("I open the home page", async function () {
  browser = await chromium.launch({ headless: false });

  page = await browser.newPage();

  await page.goto("http://localhost:5173/", {
    waitUntil: "domcontentloaded",
  });
});

Then("I should see an h1 element", async function () {
  const h1 = page.locator("h1");

  await expect(h1).toBeVisible();

  await browser.close();
});
