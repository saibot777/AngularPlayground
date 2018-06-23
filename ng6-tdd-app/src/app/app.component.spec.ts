import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from "@angular/router/testing";
import {BookComponent} from "./components/book/book.component";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BookComponent
      ],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

});
