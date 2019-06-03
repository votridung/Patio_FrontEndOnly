import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import * as CoreConst from '../core.const'
import { Todo } from '../../state/todo/todo.model';

@Injectable()
export class TodoService {
    private todoUrl = `${CoreConst.ApiUrl.HOST}${CoreConst.ApiUrl.GET_ALL_TODOS}`;
    constructor(private httpClient: HttpClient) { }

    getTodos(): Observable<Array<Todo>> {
        console.log(`getTodos(): Observable<Array<Todo>>`);
        return this.httpClient.get<Todo[]>(this.todoUrl);
    }

    getTodo(id: number): Observable<Todo> {
        console.log(`getTodo(id: number): Observable<Todo>`);
        return this.getTodos().pipe(
            map(todos => todos.find(todo => todo.id === id))
        );
    }

    save(todo: Todo): Observable<Todo> {
        if (todo.id) {
            return this.put(todo);
        }
        return this.post(todo);
    }

    delete(todo: Todo): Observable<Todo> {
        const url = `${this.todoUrl}/${todo.id}`;

        return this.httpClient
            .delete<void>(url)
            .pipe(switchMap(() => of(todo)));
    }

    private post(todo: Todo): Observable<Todo> {
        console.log('post(todo: Todo)', todo )
        return this.httpClient.post<Todo>(this.todoUrl, todo);
    }


    private put(todo: Todo): Observable<Todo> {
        console.log('put(todo: Todo)', todo)
        const url = `${this.todoUrl}/${todo.id}`;

        return this.httpClient
            .put(url, todo)
            .pipe(switchMap(() => of(todo)));
    }
}