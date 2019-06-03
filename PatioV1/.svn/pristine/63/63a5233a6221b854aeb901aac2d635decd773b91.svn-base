import * as fromTodo from "./todo.actions";
import { Todo } from './todo.model';

export interface State {
    todos: Todo[],
    todo: Todo,
    loading: boolean;
    error: string;
}

export const initialState: State = {
    todos: [],
    todo: null,
    loading: false,
    error: ''
};

export function reducer(state = initialState, action: fromTodo.TodoActions): State {
    switch (action.type) {

        case fromTodo.ActionTypes.GET_ALL_TODOS: {
            return {
                ...state,
                loading: true
            };
        }

        case fromTodo.ActionTypes.GET_ALL_TODOS_SUCCESS: {
            return {
                ...state,
                loading: false,
                todos:action.payload
            };
        }

        case fromTodo.ActionTypes.GET_ALL_TODOS_FAIL: {
            return {
                ...state,
                loading: false,
                error: 'error loading todos'
            };
        }

        case fromTodo.ActionTypes.GET_TODO: {
            return {
                ...state,
                loading: true
            };
        }

        case fromTodo.ActionTypes.GET_TODO_SUCCESS: {
            return {
                ...state,
                todo: action.payload,
                loading: false
            };
        }

        case fromTodo.ActionTypes.GET_TODO_FAIL: {
            return {
                ...state,
                loading: false,
                error: 'error loading todo'
            };
        }

        case fromTodo.ActionTypes.CREATE_TODO: {
            console.log(`fromTodo.ActionTypes.CREATE_TODO`, action.payload)
            return {
                ...state,
                loading: true,
            };
        }

        case fromTodo.ActionTypes.CREATE_TODO_SUCCESS: {
            console.log(`fromTodo.ActionTypes.CREATE_TODO_SUCCESS`, action.payload)
            return {
                ...state,
                todos: [...state.todos, action.payload],
                loading: true,
            };
        }
        default: {
            return state;
        }
    }
}

export const getAllTodos = (state: State) => state.todos;
export const getTodo = (state: State) => state.todo;
export const getLoading = (state: State) => state.loading;
export const getError = (state: State) => state.error;
