import { LoggerAdapter } from "../loggerAdapter";

export class ConsoleLoggerAdapter extends LoggerAdapter {
  public debug = console.log.bind(console);
  public info = console.info.bind(console);
  public warn = console.warn.bind(console);
  public error = console.error.bind(console);
}
