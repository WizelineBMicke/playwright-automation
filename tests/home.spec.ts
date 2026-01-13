import { test, expect } from '@playwright/test';
import HomePage from '../pages/home-page';

//Declare variables
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
});

test('has title', async ({ page }) => {
  await homePage.assertPageTitle();
});

test('validate home categories are visible', async ({ page }) => {
  await homePage.asserstionCategories();
  await homePage.clickOnElementsCategory();
});
