import {expect} from "@playwright/test";
import {Logger} from "@base/logger";

export function logWrapper(
  // biome-ignore lint/complexity/noBannedTypes: need
  func: Function,
  expected_value: unknown | null,
  cause_obj: unknown,
  logger: Logger = Logger.child("Assert"),
) {
  try {
    if (expected_value !== null) {
      func(expected_value);
    } else {
      func();
    }
  } catch (e) {
    logger.error("Error cause", cause_obj);
    throw e;
  }
}

export function expectBuilder(
    actual: unknown,
    error_msg: string,
    is_expected: boolean,
  ) {
    return is_expected
      ? expect(actual, error_msg)
      : expect(actual, error_msg).not;
  }