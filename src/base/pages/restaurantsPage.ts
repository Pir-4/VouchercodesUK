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
        const locationInput = this.getById('google-autocomplete');
        await locationInput.fill(text);
    }

    public async selectDate(value: string) {
        const dateSelect = this.getById('day-select');
        await dateSelect.selectOption(value);
    }

    public async selectPeople(value: string) {
        const peopleSelect = this.getById('people-select');
        await peopleSelect.selectOption(value);
    }
}