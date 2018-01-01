import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as actions from './store/actions/actions';
import {NgRedux} from '@angular-redux/store';
import {IInital_State} from './store/models/initialState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ngRedux: NgRedux<IInital_State>) {
    this.initTodoForm();
  }

  initTodoForm () {
    return this.todoForm = this.fb.group({
      'name': [null, Validators.compose([Validators.required])],
      'description': [null, Validators.compose([Validators.required])],
      'complete': false,
      'created': [new Date()]
    })
  }

  addTodo () {
    this.ngRedux.dispatch({type: actions.CREATE_TODOS, payload: this.todoForm.value})
  }

}
