import { Component } from '@angular/core';
import { BookModel } from "./models/book.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public book: BookModel = new BookModel(
    'https://cdn.wccftech.com/wp-content/uploads/2015/05/Witcher-3-415-2060x1288.jpg',
    'Blood of the Elves',
    'For more than a hundred years, humans, dwarves, gnomes and elves lived together in relative peace. But times have changed, the uneasy peace is over and now the races once again fight each other - and themselves: dwarves are killing their kinsmen, and elves are murdering humans and elves, at least those elves who are friendly to humans ',
    15,
    0
  );
}
