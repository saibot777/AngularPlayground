import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import * as actions from './store/actions/actions';
import {NgRedux} from '@angular-redux/store';
import {IInital_State} from './store/models/initialState';
import {ITodo} from './core/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todoForm: FormGroup;
  public todo_state: Observable<ITodo[]>

  constructor(
    private fb: FormBuilder,
    private ngRedux: NgRedux<IInital_State>) {
    this.initTodoForm();
  }

  ngOnInit() {
    this.ngRedux.dispatch({type: actions.GET_TODOS});
    this.todo_state = this.ngRedux.select(x => x.todos)
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

  completeTodo(todo: ITodo) {
    todo.complete = !todo.complete;
    this.ngRedux.dispatch({type: actions.COMPLETE_TODO, payload: todo})
  }

  deleteTodo(todo: ITodo) {
    this.ngRedux.dispatch({type: actions.DELETE_TODO, payload: todo})
  }

}
