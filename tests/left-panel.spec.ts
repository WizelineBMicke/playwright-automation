import { test } from '@playwright/test';
import { LeftPanelPage } from '@/pages/left-panel-page';
import { HomePage } from '@/pages/home-page';
import * as leftMenu from '@/data/left-menu-options.json';

let leftPanelPage: LeftPanelPage;
let homePage: HomePage;

test.beforeEach(async ({ page }) => {
  await page.goto('');
  leftPanelPage = new LeftPanelPage(page);
  homePage = new HomePage(page);
});

test('Left panel menu validation from Elements category', async () => {
  await homePage.clickOnElementsCategory();
  await leftPanelPage.leftPanelAssertions();
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.TextBox);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.CheckBox);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.RadioButton);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.WebTables);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.Buttons);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.Links);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.BrokenLinksImages);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.UploadAndDownload);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Elements, leftMenu.ElementsSubMenu.DynamicProperties);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Forms, leftMenu.FormsSubMenu.PracticeForm);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Forms, leftMenu.FormsSubMenu.PracticeForm);
  await leftPanelPage.clickOnPanelMenuItem(
    leftMenu.AlertsFrameWindows,
    leftMenu.AlertsFrameWindowsSubMenu.BrowserWindows,
  );
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.AlertsFrameWindows, leftMenu.AlertsFrameWindowsSubMenu.Alerts);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.AlertsFrameWindows, leftMenu.AlertsFrameWindowsSubMenu.Frames);
  await leftPanelPage.clickOnPanelMenuItem(
    leftMenu.AlertsFrameWindows,
    leftMenu.AlertsFrameWindowsSubMenu.NestedFrames,
  );
  await leftPanelPage.clickOnPanelMenuItem(
    leftMenu.AlertsFrameWindows,
    leftMenu.AlertsFrameWindowsSubMenu.ModalDialogs,
  );
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.Accordian);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.AutoComplete);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.DatePicker);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.Slider);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.ProgressBar);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.Tabs);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.ToolTips);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.Menu);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Widgets, leftMenu.WidgetsSubMenu.SelectMenu);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Interactions, leftMenu.InteractionsSubMenu.Sortable);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Interactions, leftMenu.InteractionsSubMenu.Selectable);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Interactions, leftMenu.InteractionsSubMenu.Resizable);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Interactions, leftMenu.InteractionsSubMenu.Droppable);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.Interactions, leftMenu.InteractionsSubMenu.Dragabble);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.BookStoreApplication, leftMenu.BookStoreApplicationSubMenu.Login);
  await leftPanelPage.clickOnPanelMenuItem(leftMenu.BookStoreApplication, leftMenu.BookStoreApplicationSubMenu.Profile);
  await leftPanelPage.clickOnPanelMenuItem(
    leftMenu.BookStoreApplication,
    leftMenu.BookStoreApplicationSubMenu.BookStore,
  );
  await leftPanelPage.clickOnPanelMenuItem(
    leftMenu.BookStoreApplication,
    leftMenu.BookStoreApplicationSubMenu.BookStoreAPI,
  );
});
