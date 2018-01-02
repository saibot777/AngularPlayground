import {ITodoState} from '../models/todo-state.model';
import { tassign } from 'tassign';
import * as actions from '../actions/actions';

export const TODO_STATE: ITodoState = {
  todos: [],
  loading: false,
  error: null
};

export const getTodos = (state: ITodoState, action: any) => {
  return tassign(state, {
    loading: true
  })
};

export const getTodosSuccess = (state: ITodoState, action: any) => {
  return tassign(state, {
    todos: action.payload,
    error: null,
    loading: false
  })
};

export const createTodos = (state: ITodoState, action: any) => {
  return tassign(state, {
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

export const completeTodo = (state:ITodoState, action: any) => {
  return tassign(state, {
    loading: true
  })
};

export const completeTodoSuccess = (state:ITodoState, action: any) => {
  return tassign(state, {
    loading: false
  })
};

export const deleteTodo = (state: ITodoState, action: any) => {
  return tassign(state, {
    loading: true
  })
};

export const deleteTodoSuccess = (state: ITodoState, action: any) => {
  return tassign(state, {
    loading: false
  })
};

export function todoReducer(state: ITodoState = TODO_STATE, action: any): ITodoState {
  switch (action.type) {
    case actions.GET_TODOS: return getTodos(state, action);
    case actions.GET_TODOS_SUCCESS: return getTodosSuccess(state, action);
    case actions.CREATE_TODOS: return createTodos(state, action);
    case actions.CREATE_TODOS_SUCCESS: return createTodosSuccess(state, action);
    case actions.COMPLETE_TODO: return completeTodo(state, action);
    case actions.COMPLETE_TODO_SUCCESS: return completeTodoSuccess(state, action);
    case actions.DELETE_TODO: return deleteTodo(state, action);
    case actions.DELETE_TODO_SUCCESS: return deleteTodoSuccess(state, action);
    case actions.TODOS_ERROR: return todosError(state, action);
    default:
      return state;
  }
}
