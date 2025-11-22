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
  let errorMsg = `${actualValueName} has value ${actualValue} is not equal to ${expectedValue}`;
  if (!isEqual) {
    errorMsg = `${actualValueName} has value ${actualValue} is equal to ${expectedValue}`;
  }
  const assert_func = expectBuilder(
    actualValue,
    errorMsg,
    isEqual,
  );
  logWrapper(assert_func.toEqual, expectedValue, expectedValue, logger);
}

 export function assertGreaterThan(
    actualValue: number,
    boundaryValue: number,
    actualValueName = "Actual value",
  ) {
    const errorMsg = `${actualValueName} is less then ${boundaryValue}`;
    logWrapper(
      expect(actualValue, errorMsg).toBeGreaterThan,
      boundaryValue,
      actualValue,
    );
  }
