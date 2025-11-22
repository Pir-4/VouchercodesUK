import { logWrapper, expectBuilder } from "./utils";
import { Logger } from "@base/logger";

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
