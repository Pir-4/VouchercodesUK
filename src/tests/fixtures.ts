import { test as base } from "@playwright/test";
import {PAGE_URL} from "@base/config";
import  {BasePage} from "@base/pages/basePage"

type CustomFixtures = {
  mainPage: BasePage;
};

export const test = base.extend<CustomFixtures>({
  // biome-ignore lint/correctness/noEmptyPattern: approve
  mainPage: async ({page}, use) => {
    await use(new BasePage(page, PAGE_URL));
  },
});