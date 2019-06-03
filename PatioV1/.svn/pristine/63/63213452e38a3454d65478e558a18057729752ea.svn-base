import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import * as fromAppCore from './app/app-core.reducer';
import * as fromTodo from './todo/todo.reducer';

export interface AppState {
    appCore: fromAppCore.State;
    todo: fromTodo.State;
}
export const appReducer: ActionReducerMap<AppState> = {
    appCore: fromAppCore.reducer,
    todo: fromTodo.reducer
};
