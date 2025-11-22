import { expect } from '@playwright/test';
import {test} from "@tests/fixtures"

test('has title', async ({ mainPage }) => {
    await mainPage.open();
    await mainPage.closePrivacyWindow();
    const rPage = await mainPage.moveToRestaurantsPage();
    await rPage.fillLocation('n17 9qj');
    await rPage.selectDate('Today');
    await rPage.selectPeople('4');
    const t = 5;
});