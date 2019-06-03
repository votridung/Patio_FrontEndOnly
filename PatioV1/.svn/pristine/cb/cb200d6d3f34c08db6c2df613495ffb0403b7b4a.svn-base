import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromAppCore from './app-core.reducer';
import { State as TodoState } from './app-core.reducer';

import { ActionReducerMap, MetaReducer } from '@ngrx/store';


export const getAppState = createFeatureSelector<TodoState>('appCore');

export const addError = createSelector(
    getAppState,
    fromAppCore.addError
);