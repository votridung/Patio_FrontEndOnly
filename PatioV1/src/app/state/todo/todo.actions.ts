import { Action } from "@ngrx/store";
import { Todo } from "./todo.model";
export enum ActionTypes {
    GET_ALL_TODOS = '[TODO] Get All Todos',
    GET_ALL_TODOS_SUCCESS = '[TODO] Get All Todos Success',
    GET_ALL_TODOS_FAIL = '[TODO] Get All Todos Fail',

    GET_TODO = '[TODO] Get Todo',
    GET_TODO_SUCCESS = '[TODO] Get Todo Success',
    GET_TODO_FAIL = '[TODO] Get Todo Fail',

    CREATE_TODO = '[TODO] Create Todo',
    CREATE_TODO_SUCCESS = '[TODO] Create Todo Success',
    CREATE_TODO_FAIL = '[TODO] Create Todo Fail',
}


//Get Todo List
export class GetAllTodos implements Action {
    readonly type = ActionTypes.GET_ALL_TODOS;
}

export class GetAllTodosSuccess implements Action {
    readonly type = ActionTypes.GET_ALL_TODOS_SUCCESS;
    constructor(public payload: Todo[]) { }
}

export class GetAllTodosFail implements Action {
    readonly type = ActionTypes.GET_ALL_TODOS_FAIL;
    constructor(public payload: any) { }
}

//Get todo by id
export class GetTodo implements Action {
    readonly type = ActionTypes.GET_TODO;
    constructor(public payload: number) { }
}

export class GetTodoSuccess implements Action {
    readonly type = ActionTypes.GET_TODO_SUCCESS;
    constructor(public payload: Todo) { }
}

export class GetTodoFail implements Action {
    readonly type = ActionTypes.GET_TODO_FAIL;
    constructor(public payload: any) { }
}

export class CreateTodo implements Action {
    readonly type = ActionTypes.CREATE_TODO;

    constructor(public payload: Todo) { }
}

export class CreateTodoSuccess implements Action {
    readonly type = ActionTypes.CREATE_TODO_SUCCESS;

    constructor(public payload: Todo) { }
}

export type TodoActions =
    GetAllTodos
    | GetAllTodosSuccess
    | GetAllTodosFail
    | GetTodo
    | GetTodoSuccess
    | GetTodoFail
    | CreateTodo
    | CreateTodoSuccess;