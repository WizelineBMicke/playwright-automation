import { test } from '@playwright/test';
import { TextBoxElementsPage } from '@/pages/textbox-elements-page';
import { HomePage } from '@/pages/home-page';
import { LeftPanelPage } from '@/pages/left-panel-page';
import * as testData from '@/data/textbox-data.json';
import * as leftMenu from '@/data/left-menu-options.json';

let homePage: HomePage;
let textBoxElementsPage: TextBoxElementsPage;
let leftPanelPage: LeftPanelPage;

test.beforeEach(async ({ page }) => {
  await page.goto('');
  homePage = new HomePage(page);
  textBoxElementsPage = new TextBoxElementsPage(page);
  leftPanelPage = new LeftPanelPage(page);
});

test.describe('Textbox component tests', () => {
  test('Fill, submit  and validate form information', async () => {
    await homePage.clickOnElementsCategory();
    await leftPanelPage.leftPanelAssertions();
    await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.TextBox);
    await textBoxElementsPage.assertSectionTitle();
    await textBoxElementsPage.fillFormInputs(testData.ValidInformation);
    await textBoxElementsPage.clickOnSubmitButton();
    await textBoxElementsPage.assertFormInformationOutput(testData.VerifyOutputInformation);
  });
});

test('Textbox component - Negative test: Fill form with invalid email and validate', async () => {
  await homePage.clickOnElementsCategory();
  await leftPanelPage.leftPanelAssertions();
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.TextBox);
  await textBoxElementsPage.assertSectionTitle();
  await textBoxElementsPage.fillFormInputs(testData.InvalidInformation);
  await textBoxElementsPage.assertFormInformationOutput(testData.InvalidInformation);
});
