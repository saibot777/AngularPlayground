import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookModel} from "../../models/book.model";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookEditForm: FormGroup;
  book: BookModel;
  activeForm = 'reactive';

  constructor(
    private route: ActivatedRoute,
    fb: FormBuilder
  ) {
    this.bookEditForm = fb.group({
      title: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', Validators.required]
    });
    route.params.subscribe(res => {
      this.book = BookModel.find(res['title']);
      if (this.book === null) {
        this.book = new BookModel('', '', '', 0);
      }
    });
  }

  submitReactiveForm() {
    const bookData = this.prepareSaveBook();
    this.book = new BookModel(
      bookData.image,
      bookData.title,
      bookData.description,
      bookData.price,
    );
    this.book.save();
  }

  prepareSaveBook() {
    const formModel = this.bookEditForm.value;
    return formModel;
  }

  ngOnInit() {
  }

}
