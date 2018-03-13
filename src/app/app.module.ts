import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {TestDi2Component} from './test-di2/test-di2.component';
import {DataService} from './test-di2/data.service';
import {LoggerService} from './test-di2/logger.service';
import {ConsoleService} from './test-di2/console.service';


@NgModule({
  declarations: [
    AppComponent,
    TestDi2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DataService,
    ConsoleService,
    {
      provide: LoggerService,
      useFactory: (consoleService) => {
        return new LoggerService(true, consoleService);
      },
      deps: [ConsoleService]
    },
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
