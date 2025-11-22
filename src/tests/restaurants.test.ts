import { expect } from '@playwright/test';
import { test } from "@tests/fixtures"
import { LOCATIONS, DATES, PEOPLE } from "@tests/params";
import { dateConverter, peopleConverter } from './helpers';

LOCATIONS.forEach((location) => {
    DATES.forEach(({ dateValue, dateCaseName }) => {
        PEOPLE.forEach(({ peopleCaseName, peopleValue }) => {
            test(`Search offers for ${location} on ${dateCaseName} for ${peopleCaseName}`, async ({ mainPage }) => {
                await mainPage.open();
                await mainPage.closePrivacyWindow();
                const rPage = await mainPage.moveToRestaurantsPage();
                await rPage.fillLocation(location);
                const dateValues = dateConverter(dateValue);
                await rPage.selectDate(dateValues.inputValue, dateValues.expectedValue);
                const peopleValues = peopleConverter(peopleValue);
                await rPage.selectPeople(peopleValues.inputValue, peopleValues.expectedValue);
                const t = 5;
            });
        });
    });
});

