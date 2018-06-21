import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {BookComponent} from "./components/book/book.component";
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BookComponent
      ],
    }).compileComponents();
  }));

});
