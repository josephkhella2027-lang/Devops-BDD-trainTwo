const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { chromium } = require("playwright");

let browser;
let page;

Given("I open the input page", async function () {
  browser = await chromium.launch({ headless: false });

  page = await browser.newPage();

  await page.goto("http://localhost:5173/", {
    waitUntil: "domcontentloaded",
  });
});

Then("I should see a text input", async function () {
  const input = page.locator('input[type="text"]');

  await expect(input).toBeVisible();

  await browser.close();
});
