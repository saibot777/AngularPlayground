import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.css']
})
export class CharacterFormComponent implements OnInit {
  availableSides = [
    {display: 'None', value: ''},
    {display: 'Light', value: 'light'},
    {display: 'Dark', value: 'dark'},

  ]

  constructor() { }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    console.log(submittedForm);
  }

}
