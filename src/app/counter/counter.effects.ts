import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { increment, incrementSuccess } from './counter.actions';
import { map, delay } from 'rxjs/operators';

@Injectable()
export class CounterEffects {
  constructor(private actions$: Actions) {}

  delayedIncrement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increment),
      delay(5000), // simulate async delay
      map(() => incrementSuccess())
    )
  );
}
