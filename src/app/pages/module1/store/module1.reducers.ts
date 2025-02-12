import { createReducer, on } from '@ngrx/store';
import { Module1Actions } from './action.types';

export interface Module1State {
  numberState: number;
}

export const Module1InitialState: Module1State = {
  numberState: 0,
};

export const Module1Reducer = createReducer(
  Module1InitialState,

  on(Module1Actions.incrementAction, (state, action) => {
    return {
      ...state,
      numberState: state.numberState + 1,
    };
  }),
  on(Module1Actions.decrementAction, (state, action) => {
    return {
      ...state,
      numberState: state.numberState - 1,
    };
  })
);
