import { test as base } from "@playwright/test";
import {PAGE_URL} from "@base/config";
import  {MainPage} from "@base/pages"

type CustomFixtures = {
  mainPage: MainPage;
};

export const test = base.extend<CustomFixtures>({
  // biome-ignore lint/correctness/noEmptyPattern: approve
  mainPage: async ({page}, use) => {
    await use(new MainPage(page, PAGE_URL));
  },
});