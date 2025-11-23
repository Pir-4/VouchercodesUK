import { z } from "zod";
import { parseEnv } from "znv";
import dotenv from "dotenv";
import { LogLevel } from "@base/logger/logger";


dotenv.config();

const env = parseEnv(process.env, {
    PAGE_URL: z.string().describe("The URL of the page being tested"),
    APP_LOG_LEVEL: z
        .enum([
            LogLevel.debug,
            LogLevel.info,
            LogLevel.warn,
            LogLevel.error,
            LogLevel.silent,
        ])
        .default(LogLevel.info)
        .describe(
            `One of the possible log levels: [${Object.values(LogLevel).join(",")}]. Default is "info"`,
        ),
    SCREENSHOTS_PATH: z.string().default("/tmp/screenshots"),
    IS_SAVE_SCREENSHOTS: z.boolean().default(false),
});

export const {
    PAGE_URL,
    APP_LOG_LEVEL,
    SCREENSHOTS_PATH,
    IS_SAVE_SCREENSHOTS,
} = env;
