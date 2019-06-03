import * as fromAppCoreAction from "./app-core.actions";

export interface State {
    error: string;
}

export const initialState: State = {
    error: ''
};

export function reducer(state = initialState, action: fromAppCoreAction.AppCoreActions): State {
    switch (action.type) {

        case fromAppCoreAction.ActionTypes.ERROR_ADD: {
            console.log(action.payload)
            return {
                ...state,
                error: action.payload
            };
        }

        default: {
            return state;
        }
    }
}

export const addError = (state: State) => state.error;
