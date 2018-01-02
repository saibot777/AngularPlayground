import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import * as actions from '../actions/actions';

@Injectable()
export class HttpEpicsService {
  public url = 'http://localhost:3000/todos';

  constructor(private _http: Http) {}

  public getTodos = (action$: Observable<any>) => {
    return action$.filter(({ type }) => type === actions.GET_TODOS)
      .flatMap(() => this._http.get(this.url)
        .map(result => ({
          type: actions.GET_TODOS_SUCCESS,
          payload: result.json()
        }))
        .catch(error => Observable.of({type: actions.TODOS_ERROR}))
      )
  };

  public createTodo = (action$: Observable<any>) => {
    return action$.filter(({type}) => type === actions.CREATE_TODOS)
      .flatMap((data) => this._http.post(this.url, data.payload)
        .map(result => ({
          type: actions.CREATE_TODOS_SUCCESS,
          payload: result.json()
        }))
        .catch(error => Observable.of({ type: actions.TODOS_ERROR, payload: error }))
  )};

  public completeTodo = (action$: Observable<any>) => {
    return action$.filter(({ type }) => type === actions.COMPLETE_TODO)
      .flatMap((data) => this._http.put(this.url + data.payload.id, data.payload)
        .map(result => ({
          type: actions.COMPLETE_TODO_SUCCESS,
          payload: result.json()
        }))
        .catch(error => Observable.of( {type: actions.TODOS_ERROR} ))
      )
  };

  public deleteTodo = (action$: Observable<any>) => {
    return action$.filter(({ type }) => type === actions.DELETE_TODO)
      .flatMap((data) => this._http.delete(this.url + data.payload.id)
        .map(result => ({
          type: actions.GET_TODOS,
          payload: result.json()
        }))
        .catch(error => Observable.of({type: actions.TODOS_ERROR}))
      )
  }


}


