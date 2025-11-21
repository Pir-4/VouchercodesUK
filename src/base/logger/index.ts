import { APP_LOG_LEVEL } from "@base/config";

import { ConsoleLoggerAdapter } from "./adapters/consoleLoggerAdapter";
import {
  Logger as LoggerClass,
  LogLevel,
  type LoggerDependencies,
} from "./logger";

export const Logger = new LoggerClass({
  logLevel: APP_LOG_LEVEL,
  adapter: new ConsoleLoggerAdapter(),
});

export type Logger = typeof Logger;
export { LogLevel };
export type { LoggerDependencies };
