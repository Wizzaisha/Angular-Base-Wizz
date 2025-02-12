import {
  ActionReducer,
  ActionReducerMap,
  combineReducers,
  MetaReducer,
} from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import {
  Module1InitialState,
  Module1Reducer,
  Module1State,
} from '../../pages/module1/store/module1.reducers';
import { environment } from '../../../environments/environment';

export interface AppState {
  module1: Module1State;
}

const initialState: AppState = {
  module1: Module1InitialState,
};

export const reducers: ActionReducerMap<AppState> = {
  module1: Module1Reducer,
};

export function clearState(reducer: ActionReducer<any>): ActionReducer<any> {
  return function (state, action) {
    return reducer(state, action);
  };
}

export function localStorageSyncReducer(reducer: any): any {
  return localStorageSync({
    keys: ['module1'],
    rehydrate: true,
  })(reducer);
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [clearState, localStorageSyncReducer]
  : [clearState, localStorageSyncReducer];
