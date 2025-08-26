import { ApplicationConfig } from '@angular/core';
import { provideStore } from '@ngrx/store';
import { counterReducer } from './counter/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounterEffects } from './counter/counter.effects';

export const appConfig: ApplicationConfig = {
  providers: [provideStore({ counter: counterReducer }), provideEffects(),
     provideEffects([CounterEffects])
  ]
};
