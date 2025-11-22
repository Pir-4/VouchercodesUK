import { expect } from '@playwright/test';
import { test } from "@tests/fixtures"
import { LOCATIONS, DATES, PEOPLE } from "@tests/params";
import { dateConverter } from './helpers';

LOCATIONS.forEach((location) => {
    DATES.forEach(({ dateValue, dateName }) => {
        test(`Search offers for ${location} on ${dateName}`, async ({ mainPage }) => {
            await mainPage.open();
            await mainPage.closePrivacyWindow();
            const rPage = await mainPage.moveToRestaurantsPage();
            await rPage.fillLocation(location);
            const dateValues = dateConverter(dateValue);
            await rPage.selectDate(dateValues.inputValue, dateValues.expectedValue);
            await rPage.selectPeople('4');
            const t = 5;
        });
    });
});
