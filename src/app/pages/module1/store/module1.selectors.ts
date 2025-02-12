import { createFeatureSelector, createSelector } from '@ngrx/store';

import { Module1State } from './module1.reducers';

export const selectModuleState = createFeatureSelector<Module1State>('module1');

export const selectNumberState = createSelector(
  selectModuleState,
  (state) => state.numberState
);
