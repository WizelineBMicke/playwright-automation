import { test } from '@playwright/test';
import { TextBoxElementsPage } from '@/pages/textbox-elements-page';
import { HomePage } from '@/pages/home-page';
import { LeftPanelPage } from '@/pages/left-panel-page';
import * as testData from '@/data/textbox-data.json';

let homePage: HomePage;
let textBoxElementsPage: TextBoxElementsPage;
let leftPanelPage: LeftPanelPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  homePage = new HomePage(page);
  textBoxElementsPage = new TextBoxElementsPage(page);
  leftPanelPage = new LeftPanelPage(page);
});

test('Validating Text Box Components', async () => {
  await homePage.clickOnElementsCategory();
  await leftPanelPage.leftPanelAssertions();
  await leftPanelPage.clickOnPanelMenuItem('Elements', 'Text Box');
  await textBoxElementsPage.fillFormInputs(testData);
});
