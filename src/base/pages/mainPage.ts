import {Logger} from "@base/logger";
import { BasePage } from "./basePage";
import { RestaurantsPage } from "./restaurantsPage";
import {
    Title,
    Categories,
    PrivacyWindowId,
    OnlyRequiredButtonId,
    AdminableCategoryTestId,
    Restaurants,
} from "./mainPageConstants"
import type {Page} from "playwright-core";

export class MainPage extends BasePage {

    constructor(public page: Page, public target_url: string) {
        super(page, target_url, Logger.child("MainPage"));
    }

    public async open(): Promise<void> {
        await super.open();
        await this.assertTitle(Title)
    }

    public async closePrivacyWindow(): Promise<void> {
        const privacyWindow = this.getById(PrivacyWindowId);
        const isVisible = await privacyWindow
            .waitFor({ state: "visible", timeout: 5000 })
            .then(() => true)
            .catch(() => false);
        if (!isVisible) return;

        await this.getById(OnlyRequiredButtonId).click();
    }

    protected async openMenuSection(sectionName: string): Promise<void> {
        const section = this.getButtonByText(sectionName);
        await section.click();
    }

    protected async openCategory(categoryName: string): Promise<void> {
        const section = this.getByTestId(AdminableCategoryTestId)
            .filter({ hasText: categoryName });
        await section.click();
    }

    public async moveToRestaurantsPage() {
        await this.openMenuSection(Categories);
        await this.openCategory(Restaurants);
        // Ждем навигации перед получением URL
        await this.page.waitForURL('**', { waitUntil: 'networkidle' });
        return RestaurantsPage.createPage(this.page);
    }
}