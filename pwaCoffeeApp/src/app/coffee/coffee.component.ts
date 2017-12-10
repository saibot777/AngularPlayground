import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs/Subscription';
import {Coffee} from '../core/models/coffee.model';
import {GeolocationService} from '../core/services/geolocation.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  routingSubscription: Subscription;
  coffee: Coffee;
  types = [
    "Espresso",
    "Americano",
    "Cappucino",
    "Frappe"
  ];

  constructor(private route: ActivatedRoute, private geoService: GeolocationService) { }

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });

    this.geoService.requestLocation(location => {
      if (location) {
        this.coffee.location.latitude = location.latitude;
        this.coffee.location.longitude = location.longitude;
      }
    });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
