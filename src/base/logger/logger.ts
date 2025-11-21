import type { LoggerAdapter } from "./loggerAdapter";

export const LogLevel = {
  debug: "debug",
  info: "info",
  warn: "warn",
  error: "error",
  silent: "silent",
} as const;

type LogLevel = (typeof LogLevel)[keyof typeof LogLevel];

const APP_LOG_LEVEL_WEIGHT: Record<LogLevel, number> = {
  [LogLevel.debug]: 20,
  [LogLevel.info]: 40,
  [LogLevel.warn]: 50,
  [LogLevel.error]: 60,
  [LogLevel.silent]: Number.POSITIVE_INFINITY,
};

const APP_LOG_LEVEL_PREFIXES: Record<`${LogLevel}`, string> = {
  [LogLevel.debug]: "[debug ]",
  [LogLevel.info]: "[info  ]",
  [LogLevel.warn]: "[warn  ]",
  [LogLevel.error]: "[error ]",
  [LogLevel.silent]: "",
};

export interface LoggerDependencies {
  scopes?: string[];
  logLevel: LogLevel;
  adapter: LoggerAdapter;
}

export class Logger {
  private readonly scopes;
  private readonly logLevel;

  constructor(private dependencies: LoggerDependencies) {
    this.scopes = dependencies.scopes || [];
    this.logLevel = dependencies.logLevel;
  }

  public debug(...args: unknown[]) {
    this.write("debug", ...args);
  }

  public info(...args: unknown[]) {
    this.write("info", ...args);
  }

  public warn(...args: unknown[]) {
    this.write("warn", ...args);
  }

  public error(...args: unknown[]) {
    this.write("error", ...args);
  }

  public child(...scopes: string[]) {
    return new Logger({
      ...this.dependencies,
      scopes: [...this.scopes, ...scopes],
    });
  }

  private write(
    method: keyof Omit<typeof APP_LOG_LEVEL_WEIGHT, "silent">,
    ...args: unknown[]
  ) {
    const shouldWrite =
      APP_LOG_LEVEL_WEIGHT[method] >= APP_LOG_LEVEL_WEIGHT[this.logLevel];

    if (!shouldWrite) return;

    const prefix = APP_LOG_LEVEL_PREFIXES[method];
    const scopes = this.scopes.filter(Boolean).join(" / ");

    this.dependencies.adapter[method](
      `${prefix}: ${scopes} >`,
      ...args,
    );
  }
}
