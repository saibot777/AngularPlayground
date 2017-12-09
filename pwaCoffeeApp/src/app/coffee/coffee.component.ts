import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit, OnDestroy {
  routingSubscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routingSubscription =
      this.route.params.subscribe(params => {
        console.log(params["id"]);
      });
  }

  ngOnDestroy() {
    this.routingSubscription.unsubscribe();
  }

}
