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
  readonly fullNameOutput: Locator;
  readonly emailOutput: Locator;
  readonly currentAddressOutput: Locator;
  readonly permanentAddressOutput: Locator;

  constructor(page: Page) {
    this.page = page;
    this.componentTitle = page.getByRole('heading', { name: 'Text Box' });
    this.fullNameInput = page.locator('#userName');
    this.emailInput = page.locator('#userEmail');
    this.currentAddressInput = page.locator('#currentAddress');
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.locator('#submit');
    this.fullNameOutput = page.locator('#name');
    this.emailOutput = page.locator('#email');
    this.currentAddressOutput = page.locator('p[id="currentAddress"]');
    this.permanentAddressOutput = page.locator('p[id="permanentAddress"]');
  }

  async assertSectionTitle() {
    await expect(this.componentTitle).toHaveText('Text Box');
  }

  async assertFormInformationOutput(data: TextBoxPagePayload) {
    await expect(this.fullNameOutput).toHaveText(data.fullName);
    await expect(this.emailOutput).toHaveText(data.email);
    await expect(this.currentAddressOutput).toHaveText(data.currentAddress);

    if (data.permanentAddress) {
      await expect.soft(this.permanentAddressOutput).toHaveText(data.permanentAddress);
    }
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
