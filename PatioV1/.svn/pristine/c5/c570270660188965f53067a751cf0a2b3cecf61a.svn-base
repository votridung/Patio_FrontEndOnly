import { Action } from "@ngrx/store";
import { AppCore } from './app-core.model';
export enum ActionTypes {
    ERROR_ADD = '[APP CORE] Error Add'
}

export class AddError {
    public type = ActionTypes.ERROR_ADD;
    constructor(public payload: string | any) { }
}

export type AppCoreActions =
    AddError;