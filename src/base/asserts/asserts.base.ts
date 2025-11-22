import {expect} from "@playwright/test";
import { Logger } from "@base/logger";
import { logWrapper, expectBuilder } from "./utils";

export function assertEqual(
  actualValue: unknown,
  expectedValue: unknown,
  actualValueName = "Actual value",
  isEqual = true,
) {
  const logger = Logger.child("Assert");
  logger.debug("Assert equal");
  let error_msg = `${actualValueName} has value ${actualValue} is not equal to ${expectedValue}`;
  // let assert_func = expect(actual_value, error_msg);
  if (!isEqual) {
    error_msg = `${actualValueName} has value ${actualValue} is equal to ${expectedValue}`;
  }
  const assert_func = expectBuilder(
    actualValue,
    error_msg,
    isEqual,
  );
  logWrapper(assert_func.toEqual, expectedValue, expectedValue, logger);
}

 export function assertGreaterThan(
    actualValue: number,
    boundaryValue: number,
    actualValueName = "Actual value",
  ) {
    const error_msg = `${actualValueName} is less then ${boundaryValue}`;
    logWrapper(
      expect(actualValue, error_msg).toBeGreaterThan,
      boundaryValue,
      actualValue,
    );
  }
