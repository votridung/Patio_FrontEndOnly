
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';


import { Todo } from './todo.model';
import * as TodoActions from './todo.actions';
import { TodoService } from '../../core/services/todo.service';

@Injectable()
export class TodosEffects {
    @Effect()
    getAllTodos$: Observable<Action> = this.actions$
        .pipe(
            ofType(TodoActions.ActionTypes.GET_ALL_TODOS),
            switchMap(() => 
                this.todoService.getTodos().
                    pipe(
                        map((todos: Todo[]) => new TodoActions.GetAllTodosSuccess(todos)),
                        catchError(err => of(new TodoActions.GetAllTodosFail(err)))
                    )
            )

        );

    @Effect()
    getTodoById: Observable<Action> = this.actions$
       .pipe(
            ofType(TodoActions.ActionTypes.GET_TODO),
            map((action: TodoActions.GetTodo) => action.payload),
            switchMap((id) => this.todoService.getTodo(id).
                pipe(
                 map((todo: Todo) => new TodoActions.GetTodoSuccess(todo)),
                 catchError(err => of(new TodoActions.GetTodoFail(err)))
               )
            )
       );

    @Effect()
    createTodo: Observable<Action> = this.actions$
        .pipe(
            ofType(TodoActions.ActionTypes.CREATE_TODO),
            map((action: TodoActions.CreateTodo) => action.payload),
            switchMap((params) => this.todoService.save(params).
                pipe(
                map((todo: Todo) => new TodoActions.CreateTodoSuccess(todo)),
                    catchError(err => of(new TodoActions.GetTodoFail(err)))
                ))
        );

    constructor(private actions$: Actions, private todoService: TodoService) {
    }
}