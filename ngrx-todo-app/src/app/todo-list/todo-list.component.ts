import { Component, OnInit } from '@angular/core';
import {NgRedux, select} from '@angular-redux/store';
import * as actions from '../core/store/actions';
import {IAppState} from '../store';
import {ITodo} from '../core/models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select() todos;

  constructor(private ngRedux: NgRedux<IAppState>) { }

  public model: ITodo = {
    id: 0,
    description: '',
    responsible: '',
    priority: 'low',
    isCompleted: false
  };

  ngOnInit() {
  }

  public onSubmit () {
    this.ngRedux.dispatch({type: actions.ADD_TODO, todo: this.model});
  }

  public toggleTodo (todo) {
    this.ngRedux.dispatch({type: actions.TOGGLE_TODO, id: todo.id});
  }

  public removeTodo (todo) {
    this.ngRedux.dispatch({type: actions.REMOVE_TODO, id: todo.id})
  }

}
