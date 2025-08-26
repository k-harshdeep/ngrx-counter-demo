import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset, incrementSuccess } from './counter.actions';
import { initialState } from './counter.state';

export const counterReducer = createReducer(
  initialState,
  on(increment, state => ({ count: state.count + 1 })),
  on(decrement, state => ({ count: state.count - 1 })),
  on(reset, state => ({ count: 0 })),
  on(incrementSuccess, state => ({...state,  count: state.count + 1}))
);
