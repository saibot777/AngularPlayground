import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import {Coffee} from '../core/models/coffee.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: [Coffee];

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getList(list => {
      this.list = list;
    });
  }

  goToDetails(coffee: Coffee) {
    this.router.navigate(["/coffee", coffee._id]);
  }

}
