import {ITodo} from '../core/models/todo.model';

export interface ITodoState {
  todos: Array<ITodo>,
  loading: false,
  error: null
}
