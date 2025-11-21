import type {Page} from 'playwright-core';
import {expect} from "@playwright/test";

export class BasePage {

    constructor(public page: Page, public target_url: string) {
    }

    async open() {
        await this.page.goto(this.target_url);
        await expect(this.page).toHaveTitle("VoucherCodes - Exclusive Discount Codes & Vouchers");
    }
}
