import { expect } from '@playwright/test';
import {test} from "@tests/fixtures"
import {PAGE_URL} from "@base/config";

test('has title', async ({ mainPage }) => {
    await mainPage.open();
    await mainPage.closePrivacyWindow();
    await mainPage.openCategories();
});