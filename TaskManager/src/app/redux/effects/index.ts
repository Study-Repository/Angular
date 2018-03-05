import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import {QuoteEffect} from './quote.effect';
import {AuthEffect} from './auth.effect';
import {RouterEffects} from './router.effect';

@NgModule({
  imports: [
    EffectsModule.forRoot([
      RouterEffects,
      QuoteEffect,
      AuthEffect
    ])
  ]
})
export class AppEffectsModule {}
