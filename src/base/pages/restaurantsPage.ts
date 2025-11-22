import { Page } from "playwright-core";
import { BasePage } from "./basePage";
import { Logger } from "@base/logger";
import {
    LocationInputId,
    DateSelectId,
    PeopleSelectId,
} from "./restaurantsPageConstants";
import {expect} from "@playwright/test";

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
        await expect(locationInput).toHaveValue(text);
    }

    public async selectDate(value: string) {
        this.logger.info(`selecting date for ${value}`);
        await this.takeScreenshot("SelectDate");
        const dateSelect = this.getById(DateSelectId);
        await dateSelect.selectOption(value);
        // await expect(dateSelect).toHaveValue(value);
    }

    public async selectPeople(value: string) {
        this.logger.info(`selecting people for ${value}`);
        await this.takeScreenshot("SelectPeople");
        const peopleSelect = this.getById(PeopleSelectId);
        await peopleSelect.selectOption(value);
        await expect(peopleSelect).toHaveValue(value);
    }
}
