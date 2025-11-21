import { test, expect } from '@playwright/test';
import {PAGE_URL} from "@base/config";

test('has title', async ({ page }) => {
  await page.goto(PAGE_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("VoucherCodes - Exclusive Discount Codes & Vouchers");
});