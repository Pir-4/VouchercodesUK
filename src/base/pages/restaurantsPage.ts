import { Page } from "playwright-core";
import { BasePage } from "./basePage";

export class RestaurantsPage extends BasePage {
    public static createPage(page: Page) {
        return new RestaurantsPage(page, page.url());
    }
}