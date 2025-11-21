import {BasePage} from "./basePage";
import {Title} from "./mainPageConstants"

export class MainPage extends BasePage {

    public async open(): Promise<void> {
        await super.open();
        await this.assertTitle(Title)
    }
}