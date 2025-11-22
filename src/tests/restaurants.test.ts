import { expect } from '@playwright/test';
import { test } from "@tests/fixtures"
import { LOCATIONS, DATES, PEOPLE } from "@tests/params";

LOCATIONS.forEach((location) => {
    test(`Search offers for ${location}`, async ({ mainPage }) => {
        await mainPage.open();
        await mainPage.closePrivacyWindow();
        const rPage = await mainPage.moveToRestaurantsPage();
        await rPage.fillLocation(location);
        await rPage.selectDate('Today');
        await rPage.selectPeople('4');
        const t = 5;
    });
});