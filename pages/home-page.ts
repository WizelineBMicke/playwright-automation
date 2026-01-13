import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly imageBannerAlt: Locator;
    readonly imageBannerAltText: string = "Selenium Online Training";
    readonly elementsCategory: Locator;
    readonly formsCategory: Locator;
    readonly alertsFrameWindowsCategory: Locator;
    readonly widgetsCategory: Locator;
    readonly interactionCategory: Locator;
    readonly bookStoreApplication: Locator;
    
    constructor (page: Page) {
        this.page = page;

        //this.imageBannerAlt = page.locator('img[alt="Selenium Online Training"]');
        //this.imageBannerAlt = page.getByAltText(this.imageBannerAltText);
        this.imageBannerAlt = page.getByAltText('Selenium Online Training');
        this.elementsCategory = page.getByRole('heading', { name: 'Elements'});
        this.formsCategory = page.getByRole('heading', { name: 'Forms'});
        this.alertsFrameWindowsCategory = page.getByRole('heading', { name: 'Alerts, Frame & Windows'});
        this.widgetsCategory = page.getByRole('heading', { name: 'Widgets'});
        this.interactionCategory = page.getByRole('heading', { name: 'Interactions'});
        this.bookStoreApplication = page.getByRole('heading', { name: 'Book Store Application'});
    }

    async assertPageTitle() {
        await expect(this.page).toHaveTitle('DEMOQA');
    }

    async clickOnBannerImage() {
        await expect(this.imageBannerAlt).toBeVisible();
        await this.imageBannerAlt.click();
    }

    async asserstionCategories() {
        await expect(this.elementsCategory).toBeVisible();
        await expect(this.formsCategory).toBeVisible();
        await expect(this.alertsFrameWindowsCategory).toBeVisible();
        await expect(this.widgetsCategory).toBeVisible();
        await expect(this.interactionCategory).toBeVisible();
        await expect(this.bookStoreApplication).toBeVisible();
    }

    async clickOnElementsCategory() {
        await this.elementsCategory.click();
    }
}
export default HomePage;
