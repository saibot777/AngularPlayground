import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import {Coffee} from '../core/models/coffee.model';
import {Router} from '@angular/router';
import {GeolocationService} from '../core/services/geolocation.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: [Coffee];

  constructor(
    private dataService: DataService,
    private geoService: GeolocationService,
    private router: Router) { }

  ngOnInit() {
    this.dataService.getList(list => {
      this.list = list;
    });
  }

  goToDetails(coffee: Coffee) {
    this.router.navigate(["/coffee", coffee._id]);
  }

  goToMap(coffee: Coffee) {
    const mapUrl = this.geoService.getMapLink(coffee.location);
    location.href = mapUrl;
  }

  share(coffee: Coffee) {
    const shareText = `I Had this coffee at ${coffee.place} and for me it's a ${coffee.rating}`;
    if ('share' in navigator) {
      navigator["share"]({
        title: coffee.name,
        text: shareText,
        url: window.location.href
      }).then(() => console.log("shared"))
        .catch(() => console.log("error"));
    } else {
      const shareURL = `whatsapp://send?text=${encodeURIComponent(shareText)}`;
      location.href = shareURL;
    }
  }

}
