import { Injectable, Component, Inject } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,

    HttpClient
} from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError, timer} from 'rxjs';
import {
    map, catchError, tap, timeout, retry, retryWhen,
    mergeMap, take, concat, delay, finalize, concatMap
} from 'rxjs/operators';

import { Store } from '@ngrx/store';
import * as fromStore from '../state/app.reducer';
import * as fromAppAction from '../state/app/app-core.actions';
export const genericRetryStrategy = ({
    maxRetryAttempts = 3,
    scalingDuration = 200,
    excludedStatusCodes = [401]
}: {
        maxRetryAttempts?: number,
        scalingDuration?: number,
        excludedStatusCodes?: number[]
    } = {}) => (attempts: Observable<any>) => {
        return attempts.pipe(
            mergeMap((error, i) => {
                const retryAttempt = i + 1;
                // if maximum number of retries have been met
                // or response is a status code we don't wish to retry, throw error
                if (
                    retryAttempt > maxRetryAttempts ||
                    excludedStatusCodes.find(e => e === error.status)
                ) {
                    return throwError(error);
                }
                console.log(
                    `Attempt ${retryAttempt}: retrying in ${retryAttempt *
                    scalingDuration}ms`
                );
                // retry after 1s, 2s, etc...
                return timer(retryAttempt * scalingDuration);
            }),
            finalize(() => console.log('We are done!'))
        );
    };
@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
    constructor(public http: HttpClient, private router: Router, private store: Store<fromStore.AppState>,) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!request.headers.has('Content-Type')) {
            request = request.clone({ headers: request.headers.set('Content-Type', 'application/json; charset=utf-8'), withCredentials: true });
        }

        console.log('HttpConfigInterceptor', request);
        return next.handle(request).pipe(
            timeout(15000),
            retryWhen(genericRetryStrategy()),
            map((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log('event--->>>', event);
                    if (event.body) {

                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                console.log('HttpConfigInterceptor catchError', error.message);
                if (error.status == 401) {
                    
                } else {
                    this.store.dispatch(new fromAppAction.AddError(error.message));
                }
               
                return throwError(error);
            }),
            finalize (() => { console.log('[debug] funally'); })
        )
    }

}
