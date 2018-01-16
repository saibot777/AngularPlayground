import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import {Note} from "../../core/models/note-model";
import {MatPaginator, MatTableDataSource} from "@angular/material";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {
  @Input() notes: Note[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns = ['position', 'title', 'date'];
  dataSource: MatTableDataSource<Note>;

  constructor() { }

  ngOnInit() {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
