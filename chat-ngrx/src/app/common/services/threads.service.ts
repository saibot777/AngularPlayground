import { Http } from '@angular/http';
import { UserData } from '../../../shared/models/user-data.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ThreadsService {

  constructor(private _http: Http) { }

  getUserThreads(): Observable<UserData> {
      return this._http.get('/api/threads')
        .map(res => res.json());
  }

}
