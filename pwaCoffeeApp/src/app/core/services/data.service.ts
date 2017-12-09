import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }

  public getList(callback) {
    const list = [
      new Coffee("Double Expresso", "Sunny Cafe", new PlaceLocation("123 Marker St", "San Francisco")),
      new Coffee("Caramel Americano", "Star Cafe", new PlaceLocation("Gran Via 34", "Madrid")),
    ];
    callback(list);
  }

  public save(coffee, callback) {
    callback(true);
  }

}
