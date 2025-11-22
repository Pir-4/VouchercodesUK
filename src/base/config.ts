import { z } from "zod";
import { parseEnv } from "znv";
import dotenv from "dotenv";

import { LogLevel } from "@base/logger/logger";


dotenv.config();

const env = parseEnv(process.env, {
  PAGE_URL: z.string().default("The ulr of tested page"),
  SCREENSHOTS_PATH: z.string().default("/tmp/screenshots"),
  APP_LOG_LEVEL: z
    .nativeEnum(LogLevel)
    .optional()
    .default(LogLevel.info)
    .describe(
      `One of the possible log levels: [${Object.values(LogLevel).join(",")}]. Default is "info"`,
    ),
});

export const {
  PAGE_URL,
  APP_LOG_LEVEL,
  SCREENSHOTS_PATH,
} = env;
