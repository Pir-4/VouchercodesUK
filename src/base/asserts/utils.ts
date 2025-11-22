import {expect} from "@playwright/test";
import {Logger} from "@base/logger";

export function logWrapper(
  // biome-ignore lint/complexity/noBannedTypes: need
  func: Function,
  expectedValue: unknown | null,
  causeObj: unknown,
  logger: Logger = Logger.child("Assert"),
) {
  try {
    if (expectedValue !== null) {
      func(expectedValue);
    } else {
      func();
    }
  } catch (e) {
    logger.error("Error cause", causeObj);
    throw e;
  }
}

export function expectBuilder(
    actual: unknown,
    errorMsg: string,
    isExpected: boolean,
  ) {
    return isExpected
      ? expect(actual, errorMsg)
      : expect(actual, errorMsg).not;
  }
