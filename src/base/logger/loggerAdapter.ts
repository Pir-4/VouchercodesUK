export abstract class LoggerAdapter {
  public abstract debug(...args: unknown[]): void;
  public abstract info(...args: unknown[]): void;
  public abstract warn(...args: unknown[]): void;
  public abstract error(...args: unknown[]): void;
}
