import {ITodoState} from '../models/todo-state.model';
import { tassign } from 'tassign';
import * as actions from '../actions/actions';

export const TODO_STATE: ITodoState = {
  todos: [],
  loading: false,
  error: null
};

export const createTodos = (state: ITodoState, action) => {
  return tassign(state, {
    todos: action.payload,
    loading: true,
    error: null
  })
};

export function todoReducer(state: ITodoState = TODO_STATE, action: any): ITodoState {
  switch (action.type) {
    case actions.CREATE_TODOS: return createTodos(state, action);
    default:
      return state
  }
}
