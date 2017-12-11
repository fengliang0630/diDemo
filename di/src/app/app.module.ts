import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Product1Component } from './product1/product1.component';
import {Product1Service} from './shared/product1.service';
import { Product2Component } from './product2/product2.component';
import {Product2Service} from './shared/product2.service';
import {LoggerService} from './shared/logger.service';


@NgModule({
  declarations: [
    AppComponent,
    Product1Component,
    Product2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
    provide: Product1Service,
    useFactory: (logger: LoggerService, isDev, appConfig) => {
      if (appConfig.isDev) {
        return new Product1Service(logger);
      } else {
        return new Product2Service(logger);
      }
    },
    deps: [LoggerService, 'IS_DEV_ENV', 'APP_CONFIG']
  }, LoggerService,
    {
      provide: 'IS_DEV_ENV',
      useValue: false
    },{
      provide: 'APP_CONFIG',
      useValue: {isDev: true}
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
