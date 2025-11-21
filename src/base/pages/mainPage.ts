import { BasePage } from "./basePage";
import { Title, Categories } from "./mainPageConstants"

export class MainPage extends BasePage {

    public async open(): Promise<void> {
        await super.open();
        await this.assertTitle(Title)
    }

    protected async openMenuSection(sectionName: string): Promise<void> {
        const section = this.getByText(sectionName);
        await section.click();
    }

    public async openCategories(): Promise<void> {
        await this.openMenuSection(Categories);
    }
}