import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs/Subscription';
import {Coffee} from '../core/models/coffee.model';

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

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.coffee = new Coffee();
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
