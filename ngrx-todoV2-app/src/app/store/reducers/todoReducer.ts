import {ITodoState} from '../todo-state.model';

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
