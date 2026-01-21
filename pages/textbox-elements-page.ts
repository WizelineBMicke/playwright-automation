import { Locator, Page, expect } from '@playwright/test';
import { TextBoxPagePayload } from '@/data/interfaces/element-types';

export class TextBoxElementsPage {
  readonly page: Page;
  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly componentTitle: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.componentTitle = page.getByRole('heading', { name: 'Text Box' });
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressInput = page.locator('#currentAddress');
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
  }

  async assertSectionTitle() {
    await expect(this.componentTitle).toHaveText('Text Box');
  }

  async fillFormInputs(data: TextBoxPagePayload) {
    await this.fullNameInput.fill(data.fullName);
    await this.emailInput.fill(data.email);
    await this.currentAddressInput.fill(data.currentAddress);

    if (data.permanentAddress) {
      await this.permanentAddressInput.fill(data.permanentAddress);
    }
  }

  async clickOnSubmitButton() {
    this.submitButton.click();
  }
}
export default TextBoxElementsPage;
