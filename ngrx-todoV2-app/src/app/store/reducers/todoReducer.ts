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

export const createTodosSuccess = (state: ITodoState, action: any) => {
  return tassign(state, {
    todos: state.todos.concat(action.payload),
    error: null,
    loading: false
  })
};

export const todosError = (state: ITodoState, action: any) => {
  return tassign(state, {
    error: action.payload
  })
};

export function todoReducer(state: ITodoState = TODO_STATE, action: any): ITodoState {
  switch (action.type) {
    case actions.CREATE_TODOS: return createTodos(state, action);
    case actions.CREATE_TODOS_SUCCESS: return createTodosSuccess(state, action);
    case actions.TODOS_ERROR: return todosError(state, action);
    default:
      return state
  }
}
