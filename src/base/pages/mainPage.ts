import { Logger } from "@base/logger";
import { BasePage } from "./basePage";
import { RestaurantsPage } from "./restaurantsPage";
import {
    Title,
    Categories,
    PrivacyWindowId,
    OnlyRequiredButtonId,
    AdminableCategoryTestId,
    Restaurants,
    PrivacyWindowTimeout,
} from "./mainPageConstants"
import type { Page } from "playwright-core";

export class MainPage extends BasePage {

    constructor(public page: Page, public target_url: string) {
        super(page, target_url, Logger.child("MainPage"));
    }

    public async open(): Promise<void> {
        await super.open();
        await this.assertTitle(Title)
    }

    public async closePrivacyWindow(): Promise<void> {
        this.logger.info('close privacy window');
        const privacyWindow = this.getById(PrivacyWindowId);
        const isVisible = await privacyWindow
            .waitFor({ state: "visible", timeout: PrivacyWindowTimeout })
            .then(() => true)
            .catch(() => false);

        if (!isVisible) return;

        await this.takeScreenshot("PrivacyWindow");
        await this.getById(OnlyRequiredButtonId).click();
    }

    protected async openMenuSection(sectionName: string): Promise<void> {
        this.logger.info(`open menu section "${sectionName}"`);
        await this.takeScreenshot(`MenuSection-${sectionName}`);
        const section = this.getButtonByText(sectionName);
        await section.click();
    }

    protected async openCategory(categoryName: string): Promise<void> {
        this.logger.info(`open category "${categoryName}"`);
        await this.takeScreenshot(`CategorySection-${categoryName}`);
        const section = this.getByTestId(AdminableCategoryTestId)
            .filter({ hasText: categoryName });
        await section.click();
    }

    public async moveToRestaurantsPage() {
        this.logger.info('move to "restaurants" page');
        await this.openMenuSection(Categories);
        await this.openCategory(Restaurants);
        // Wait for page to load and key element to appear
        await this.page.waitForLoadState('networkidle');
        return RestaurantsPage.createPage(this.page);
    }
}
