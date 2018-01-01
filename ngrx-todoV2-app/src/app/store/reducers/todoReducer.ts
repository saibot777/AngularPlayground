import {ITodoState} from '../models/todo-state.model';
import * as actions from '../actions/actions';

export const TODO_STATE: ITodoState = {
  todos: [],
  loading: false,
  error: null
};

export function todoReducer(state: ITodoState = TODO_STATE, action: any): ITodoState {
  switch (action.type) {
    default:
      return state
  }
}
