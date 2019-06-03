import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../state/app.reducer';
import { Observable } from 'rxjs';
import { Todo } from '../../state/todo/todo.model';
import * as fromTodo from '../../state/todo/todo.selectors';
import * as fromTodoAction from '../../state/todo/todo.actions';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {
    todo$: Observable<Todo>;
    todo: Todo;
    constructor(private store: Store<fromStore.AppState>) {
        this.todo$ = this.store.select(fromTodo.getTodo);
        this.todo$.subscribe(val => {
            this.todo = val;
        })
    }

    ngOnInit() {
        this.store.dispatch(new fromTodoAction.GetTodo(1));
    }

    addItem() {
        var params = <Todo>{ name: 'newtodo' }
        this.store.dispatch(new fromTodoAction.CreateTodo(params));
        
    }

}
