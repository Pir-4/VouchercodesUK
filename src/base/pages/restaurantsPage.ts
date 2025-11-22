import { Page } from "playwright-core";
import { BasePage } from "./basePage";
import { Logger } from "@base/logger";
import {
    LocationInputId,
    DateSelectId,
    PeopleSelectId,
} from "./restaurantsPageConstants";
import { expect } from "@playwright/test";

export class RestaurantsPage extends BasePage {
    public static createPage(page: Page) {
        return new RestaurantsPage(page, page.url());
    }

    constructor(public page: Page, public target_url: string) {
        super(page, target_url, Logger.child("RestaurantsPage"));
    }

    public async fillLocation(text: string) {
        this.logger.info(`filling location for ${text}`);
        await this.takeScreenshot("FillLocation");
        const locationInput = this.getById(LocationInputId);
        await locationInput.fill(text);
        return locationInput.inputValue();
    }

    public async selectDate(inputValue: string) {
        this.logger.info(`selecting date for "${inputValue}"`);
        await this.takeScreenshot("SelectDate");
        const dateSelect = this.getById(DateSelectId);
        if (inputValue) {
            await dateSelect.selectOption(inputValue);
        }
        return dateSelect.inputValue();
    }

    public async selectPeople(inputValue: string) {
        this.logger.info(`selecting people for "${inputValue}"`);
        await this.takeScreenshot("SelectPeople");
        const peopleSelect = this.getById(PeopleSelectId);
        if (inputValue) {
            await peopleSelect.selectOption(inputValue);
        }
        return peopleSelect.inputValue();
    }

    public async pressFindVoucher() {
        this.logger.info("Press FindVoucher button");
        await this.getByTestId('el:findRestaurantsVoucherButton').click();
    }

    public async getAmountOffers(): Promise<number> {
        const offers = this.getByXPath('//*[@*[starts-with(., "el:offer offerId:")]]');
        return await offers.count();
    }
}
