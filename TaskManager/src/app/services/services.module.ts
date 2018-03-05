import {ModuleWithProviders, NgModule} from '@angular/core';
import {TestService} from './test.service';
import {QuoteService} from './quote.service';
// map
import 'rxjs/Rx';
import {AuthService} from './auth.service';

@NgModule()
export class ServicesModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ServicesModule,
      providers: [
        TestService,
        QuoteService,
        AuthService
      ]
    }
  }
}
