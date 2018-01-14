import { NgModule } from '@angular/core';

import { LOGGER_SERVICE_PROVIDER, LOGGER_STATE } from './logger.service';

@NgModule({
  providers: [
    { provide: LOGGER_STATE, useValue: false },
    LOGGER_SERVICE_PROVIDER,
  ],
})
export class LoggerModule { }
