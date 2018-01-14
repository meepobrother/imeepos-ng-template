import { Inject, Injectable, InjectionToken, Optional, Provider, SkipSelf } from '@angular/core';

@Injectable()
export class LoggerService {
  constructor( @Inject(LOGGER_STATE) private _loggerState: boolean) { }

  log(...args: any[]): void {
    if (this._loggerState) {
      console.log.apply(console, arguments);
    }
  }

  warn(...args: any[]): void {
    if (this._loggerState) {
      console.warn.apply(console, arguments);
    }
  }

  error(...args: any[]): void {
    if (this._loggerState) {
      console.error.apply(console, arguments);
    }
  }

  info(...args: any[]): void {
    if (this._loggerState) {
      console.log.apply(console, arguments);
    }
  }

  debug(...args: any[]): void {
    if (this._loggerState) {
      const arrs = Array.prototype.slice.call(arguments);
      console.log.apply(console, ['[DEBUG]'].concat(arrs));
    }
  }
}

export const LOGGER_STATE = new InjectionToken<boolean>('LOGGER_STATE');

export function LOGGER_SERVICE_PROVIDER_FACTORY(exist: LoggerService, loggerState: boolean): LoggerService { return exist || new LoggerService(loggerState); }

export const LOGGER_SERVICE_PROVIDER: Provider = {
  provide: LoggerService,
  useFactory: LOGGER_SERVICE_PROVIDER_FACTORY,
  deps: [[new Optional(), new SkipSelf(), LoggerService], LOGGER_STATE]
};
