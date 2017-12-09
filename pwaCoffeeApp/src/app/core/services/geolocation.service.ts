import { Injectable } from '@angular/core';
import {PlaceLocation} from '../models/place-location.model';

@Injectable()
export class GeolocationService {

  constructor() { }

  public requestLocation(callback) {
      // W3C Geolocation API
    navigator.geolocation.getCurrentPosition(
      position => {
        callback(position.coords);
      },
      error => {
        callback(null);
      }
    );
  }

  public getMapLink(location: PlaceLocation) {
      // Universal Link
    let query = "";
    if (location.latitude) {
      query = location.latitude + "," + location.longitude;
    } else {
      query = `${location.address}, ${location.city}`;
    }
    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      return `https://maps.apple.com/?q=${query}`;
    } else {
      return `https://maps.google.com/?q=${query}`;
    }
  }

}
