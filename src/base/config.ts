import { z } from "zod";
import { parseEnv } from "znv";
import dotenv from "dotenv";

import { LogLevel } from "@base/logger/logger";


dotenv.config();

const env = parseEnv(process.env, {
    PAGE_URL :z.string().default("The ulr of tested page"),
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
} = env;
