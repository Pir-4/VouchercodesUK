import { test } from "@tests/fixtures"
import { LOCATIONS, DATES, PEOPLE } from "@tests/params";
import {assertEqual, assertGreaterThan} from "@base/asserts";
import { dateConverter, peopleConverter } from './helpers';

LOCATIONS.forEach((location) => {
    DATES.forEach(({ dateValue, dateCaseName }) => {
        PEOPLE.forEach(({ peopleCaseName, peopleValue }) => {
            test(`Search offers for ${location} on ${dateCaseName} for ${peopleCaseName}`, async ({ mainPage }) => {
                // Data preparation
                const dateValues = dateConverter(dateValue);
                const peopleValues = peopleConverter(peopleValue);

                // Prepare
                await mainPage.open();
                await mainPage.closePrivacyWindow();
                const restaurantsPage = await mainPage.moveToRestaurantsPage();

                // test
                const actualLocationValue = await restaurantsPage.fillLocation(location);
                assertEqual(actualLocationValue, location, "Location value")

                const actualDateValue = await restaurantsPage.selectDate(dateValues.inputValue);
                assertEqual(actualDateValue, dateValues.expectedValue, "Date value")

                const actualPeopleValue = await restaurantsPage.selectPeople(peopleValues.inputValue);
                assertEqual(actualPeopleValue, peopleValues.expectedValue, "People amount value")

                await restaurantsPage.clickFindVoucherButton();
                const actualAmountOffers = await restaurantsPage.getAmountOffers();
                assertGreaterThan(actualAmountOffers, 0);
            });
        });
    });
});

