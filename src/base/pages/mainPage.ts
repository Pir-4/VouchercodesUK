import { BasePage } from "./basePage";
import { Title, Categories, PrivacyWindowId, OnlyRequiredButtonId } from "./mainPageConstants"

export class MainPage extends BasePage {

    public async open(): Promise<void> {
        await super.open();
        await this.assertTitle(Title)
    }
    public async closePrivacyWindow(): Promise<void> {
        const privacyWindow = this.getById(PrivacyWindowId);
        if (await privacyWindow.isVisible()) {
            const onlyRequiredButton = this.getById(OnlyRequiredButtonId);
            await onlyRequiredButton.click();
        }
    }

    protected async openMenuSection(sectionName: string): Promise<void> {
        const section = this.getByText(sectionName);
        await section.click();
    }

    public async openCategories(): Promise<void> {
        await this.openMenuSection(Categories);
    }
}