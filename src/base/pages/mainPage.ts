import { BasePage } from "./basePage";
import {
    Title,
    Categories,
    PrivacyWindowId,
    OnlyRequiredButtonId,
    AdminableCategoryTestId,
    Restaurants,
} from "./mainPageConstants"

export class MainPage extends BasePage {

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

    public async openCategories(): Promise<void> {
        await this.openMenuSection(Categories);
        await this.openCategory(Restaurants);
    }
}