import { test } from '@playwright/test';
import HomePage from '../pages/home-page';

//Declare variables
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
});

test('has title', async () => {
  await homePage.assertPageTitle();
});

test('validate home categories are visible', async () => {
  await homePage.asserstionCategories();
  await homePage.clickOnElementsCategory();
});
