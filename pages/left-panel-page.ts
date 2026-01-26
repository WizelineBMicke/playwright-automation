import { Locator, Page, expect } from '@playwright/test';

export class LeftPanelPage {
  readonly page: Page;
  readonly groupElements: Locator;
  readonly groupItem: Locator;

  constructor(page: Page) {
    this.page = page;
    this.groupElements = page.locator('.element-group');
    this.groupItem = page.getByRole('listitem');
  }

  async leftPanelAssertions() {
    await expect(this.groupElements.first()).toBeVisible();
    await expect(this.groupItem.first()).toBeVisible();
  }

  async clickOnPanelMenuItem(panelHeader: string, panelItem: string) {
    const groupElement = this.groupElements.filter({ hasText: panelHeader });
    const collapsedElement = groupElement.locator('.element-list.collapse.show');
    if ((await collapsedElement.count()) === 0) {
      await this.groupElements.filter({ hasText: panelHeader }).click();
    }
    await this.groupItem.filter({ hasText: panelItem }).click();
  }
}
export default LeftPanelPage;
