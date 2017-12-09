import { Component, OnInit } from '@angular/core';
import { DataService } from '../core/services/data.service';
import {Coffee} from '../core/models/coffee.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: [Coffee];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getList(list => {
      this.list = list;
    });
  }

}
