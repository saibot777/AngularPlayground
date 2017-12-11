import { Injectable } from '@angular/core';
import {Coffee} from '../models/coffee.model';
import {PlaceLocation} from '../models/place-location.model';
import {Http} from '@angular/http';

@Injectable()
export class DataService {
  public endpoint = 'http://localhost:3000';

  constructor(private http: Http) { }

  public getList(callback) {
    this.http.get(`${this.endpoint}/coffees`)
      .subscribe(response => {
        callback(response.json());
      });
  }

  public save(coffee, callback) {
    if (coffee._id) {
      this.http.put(`${this.endpoint}/coffees/${coffee._id}`, coffee)
        .subscribe(response => {
          callback(true);
        });
    }else {
      this.http.post(`${this.endpoint}/coffees`, coffee)
        .subscribe(response => {
          callback(true);
        });
    }
  }

}
