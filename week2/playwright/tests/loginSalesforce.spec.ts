import test, { chromium } from '@playwright/test'

test('should login to salesforce application', async () => { 
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://login.salesforce.com/');

  await page.getByLabel('Username').fill('Tejas7822@gmail.com');
  await page.getByLabel('Password').fill('Tejas7844!');
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.waitForTimeout(10000);
  console.log(await page.title())
  console.log(page.url())
})