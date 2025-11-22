import type { Page } from 'playwright-core';
import { expect } from "@playwright/test";
import {Logger} from "@base/logger";

export class BasePage {
    public readonly logger: Logger;
    constructor(public page: Page, public target_url: string, logger?: Logger) {
        this.logger = logger ? logger : Logger.child("BasePage");
    }

    public async open(): Promise<void> {
        this.logger.info(`Open ${this.target_url}`);
        await this.page.goto(this.target_url);
    }

    public async assertTitle(title: string): Promise<void> {
        this.logger.info(`assert title: ${title}`);
        await expect(this.page).toHaveTitle(title);
    }

    protected getByText(text: string) {
        this.logger.debug(`get item by text: ${text}`);
        return this.page.getByText(text);
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
}
