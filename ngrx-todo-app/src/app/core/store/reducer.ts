import * as actions from './actions';

export const addTodo = (state, action) => {
  action.todo.id = state.todos.length + 1;
  return Object.assign({}, state, {
    todos: state.todos.concat(Object.assign({}, action.todo)),
    lastUpdate: new Date()
  });
};

export const toggleTodo = (state, action) => {
  let todo = state.todos.find(t => t.id === action.id);
  let index = state.todos.indexOf(todo);
  return Object.assign({}, state, {
    todos: [
      ...state.todos.slice(0, index),
      Object.assign({}, todo, {isCompleted: !todo.isCompleted}),
      ...state.todos.slice(index + 1)
    ],
    lastUpdate: new Date()
  });
};

export const removeTodo = (state, action) => {
  return Object.assign({}, state, {
    todos: state.todos.filter(t => t.id !== action.id),
    lastUpdate: new Date()
  });
};

export const removeAllTodos = (state, action) => {
  return Object.assign({}, state, {
    todos: [],
    lastUpdate: new Date()
  })
};

export function rootReducer(state, action) {
  switch (action.type) {
    case actions.ADD_TODO: return addTodo(state, action);
    case actions.TOGGLE_TODO: return toggleTodo(state, action);
    case actions.REMOVE_TODO: return removeTodo(state, action);
    case actions.REMOVE_ALL_TODOS: return removeAllTodos(state, action);
    default:
      return state;
  }
}
