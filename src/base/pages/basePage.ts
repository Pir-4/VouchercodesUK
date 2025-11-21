import type { Locator, Page } from 'playwright-core';
import { expect } from "@playwright/test";

export class BasePage {

    constructor(public page: Page, public target_url: string) {
    }

    public async open(): Promise<void> {
        await this.page.goto(this.target_url);
    }

    public async assertTitle(title: string): Promise<void> {
        await expect(this.page).toHaveTitle(title);
    }

    protected getByText(text: string) {
        return this.page.getByText(text);
    }

    protected getButtonByText(text: string) {
        return this.page.getByRole('button', { name: text });
    }

    protected getById(itemId: string) {
        return this.page.locator(`id=${itemId}`);
    }

    protected getByTestId(itemId: string) {
        return this.page.getByTestId(itemId);
    }

}
