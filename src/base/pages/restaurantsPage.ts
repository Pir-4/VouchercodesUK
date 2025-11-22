import { Page } from "playwright-core";
import { BasePage } from "./basePage";
import {Logger} from "@base/logger";

export class RestaurantsPage extends BasePage {
    public static createPage(page: Page) {
        return new RestaurantsPage(page, page.url());
    }

    constructor(public page: Page, public target_url: string) {
        super(page, target_url, Logger.child("RestaurantsPage"));
    }

    public async fillLocation(text: string) {
        this.logger.info(`filling location for ${text}`);
        const locationInput = this.getById('google-autocomplete');
        await locationInput.fill(text);
    }

    public async selectDate(value: string) {
        this.logger.info(`selecting date for ${value}`);
        const dateSelect = this.getById('day-select');
        await dateSelect.selectOption(value);
    }

    public async selectPeople(value: string) {
        this.logger.info(`selecting people for ${value}`);
        const peopleSelect = this.getById('people-select');
        await peopleSelect.selectOption(value);
    }
}