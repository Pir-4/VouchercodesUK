import { expect } from '@playwright/test';
import {test} from "@tests/fixtures"
import {PAGE_URL} from "@base/config";

test('has title', async ({ mainPage }) => {
    await mainPage.open()
    // await page.goto(PAGE_URL);
  //
  // // Expect a title "to contain" a substring.
  // await expect(page).toHaveTitle("VoucherCodes - Exclusive Discount Codes & Vouchers");
});