import { expect } from '@playwright/test';
import {test} from "@tests/fixtures"

test('has title', async ({ mainPage }) => {
    await mainPage.open();
    await mainPage.closePrivacyWindow();
    const rPage = await mainPage.moveToRestaurantsPage();
    const t = 5;
});