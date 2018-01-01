import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/map';
import 'rxjs/add/observable/filter';
import 'rxjs/add/observable/catch';
import { Observable } from 'rxjs/Observable';
import * as actions from '../actions/actions';

@Injectable()
export class HttpEpicsService {

  constructor(private _http: Http) {}

  public createTodo = (action$: Observable<any>) => {
    return action$.filter(({type}) => type === actions.CREATE_TODOS)
      .flatMap((data) => this._http.post('localhost:3000/todos', data.payload)
        .map(result => ({
          type: actions.CREATE_TODOS_SUCCESS,
          payload: result.json()
        }))
        .catch(error => Observable.of({ type: actions.TODOS_ERROR, payload: error }))
  )}

}


