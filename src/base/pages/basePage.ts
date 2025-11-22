import type { Page, Locator } from 'playwright-core';
import { expect } from "@playwright/test";
import { Logger } from "@base/logger";
import { SCREENSHOTS_PATH, IS_SAVE_SCREENSHOTS } from "@base/config";

export class BasePage {
    public readonly logger: Logger;
    constructor(public page: Page, public target_url: string, logger?: Logger) {
        this.logger = logger ? logger : Logger.child("BasePage");
    }

    public async open(): Promise<void> {
        this.logger.info(`Open ${this.target_url}`);
        await this.page.goto(this.target_url);
        await this.takeScreenshot("open");
    }

    public async assertTitle(title: string): Promise<void> {
        this.logger.info(`assert title: ${title}`);
        await expect(this.page).toHaveTitle(title);
    }

    protected getByText(text: string) {
        this.logger.debug(`get item by text: ${text}`);
        return this.page.getByText(text);
    }

    protected getByXPath(xpath: string) {
        this.logger.debug(`get item by xpath: ${xpath}`);
        return this.page.locator(`xpath=${xpath}`);
    }

    protected getButtonByText(text: string) {
        this.logger.debug(`get button by text: ${text}`);
        return this.page.getByRole('button', { name: text });
    }

    protected getById(itemId: string) {
        this.logger.debug(`get item by id: ${itemId}`);
        return this.page.locator(`id=${itemId}`);
    }

    protected getByTestId(itemId: string) {
        this.logger.debug(`get item by test id: ${itemId}`);
        return this.page.getByTestId(itemId);
    }

    public async takeScreenshot(name: string, is_save: boolean = IS_SAVE_SCREENSHOTS) {
        if (!is_save) return;
        this.logger.debug(`taking screenshot to ${name}`);
        const currentDate = new Date().toISOString().replace(/[:.]/g, '-');
        const screenshotFileName = `${name}-${currentDate}.png`;
        await this.page.screenshot({ path: `${SCREENSHOTS_PATH}/${screenshotFileName}`, fullPage: true });
    }

    public async getSelectOptions(dropdown: Locator): Promise<Array<{ value: string; text: string }>> {
        this.logger.debug("getting all select options");
        const options = await dropdown.locator('option').all();
        const optionsData = await Promise.all(
            options.map(async (option) => {
                const value = await option.getAttribute('value');
                const text = await option.textContent();
                return {
                    value: value || '',
                    text: text?.trim() || '',
                };
            })
        );
        return optionsData;
    }
}
