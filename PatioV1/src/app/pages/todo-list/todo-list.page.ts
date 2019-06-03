import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";

import { Todo } from "../../state/todo/todo.model";

import { Store } from "@ngrx/store";
import { AppState } from '../../state/app.reducer';

import * as fromStore from '../../state/app.reducer';
import * as fromTodoAction from '../../state/todo/todo.actions';
import * as fromTodo from '../../state/todo/todo.selectors';
import { Router } from '@angular/router';
import * as routerConst from '../../router.const';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {
    todos$: Observable<Array<Todo>>;
   
  loading$: Observable<boolean>;
  error$: Observable<string>;

    constructor(private store: Store<fromStore.AppState>, private router: Router) {
      
        this.todos$ = this.store.select(fromTodo.getAllTodos);
        this.loading$ = this.store.select(fromTodo.getLoading);
        this.error$ = this.store.select(fromTodo.getError);
        this.todos$.subscribe(val => {
            console.log('todos$', val)
        });
        
    }

    ngOnInit() {
        console.log('ngOnInit')
        this.store.dispatch(new fromTodoAction.GetAllTodos());
    }

    nextPage() {
        this.router.navigate([`${routerConst.RouterUrl.TODO_DETAIL}`]);
    }

}
