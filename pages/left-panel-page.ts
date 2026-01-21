import { Locator, Page, expect } from '@playwright/test';

export class LeftPanelPage {
  readonly page: Page;
  readonly groupHeader: Locator;
  readonly groupItem: Locator;
  readonly panelCollapsed: Locator;

  constructor(page: Page) {
    this.page = page;
    this.groupHeader = page.locator('.header-text');
    this.panelCollapsed = page.locator('.element-list.collapse.show');
    this.groupItem = page.getByRole('listitem');
  }

  async leftPanelAssertions() {
    await expect(this.groupHeader.first()).toBeVisible();
    await expect(this.groupItem.first()).toBeVisible();
  }

  async clickOnPanelMenuItem(panelHeader: string, panelItem: string) {
    await this.groupHeader.filter({ hasText: panelHeader }).click();
    await this.groupItem.filter({ hasText: panelItem }).click();
  }
}
export default LeftPanelPage;
