import { z } from "zod";
import { parseEnv } from "znv";
import dotenv from "dotenv";

dotenv.config();

const env = parseEnv(process.env, {
    PAGE_URL :z.string().default("The ulr of tested page")
})
