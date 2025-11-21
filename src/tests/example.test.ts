import { expect } from '@playwright/test';
import {test} from "@tests/fixtures"

test('has title', async ({ mainPage }) => {
    await mainPage.open();
    await mainPage.closePrivacyWindow();
    await mainPage.moveToRestaurantsPage();
});