async function openHome(page) {
  if (!page) throw new Error("page is undefined - browser not initialized");

  await page.goto("http://localhost:5173/");
}

async function getHeader(page) {
  return page.locator("header");
}

module.exports = {
  openHome,
  getHeader,
};
