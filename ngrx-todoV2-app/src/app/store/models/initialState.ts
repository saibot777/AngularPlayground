import {ITodoState} from './todo-state.model';
import {TODO_STATE, todoReducer} from '../reducers/todoReducer';
import {combineReducers} from 'redux';

export interface IInitalState {
  todos: ITodoState;
}

export const INITIAL_STATE: IInitalState = {
  todos: TODO_STATE
};

export const combine = combineReducers<IInitalState>({
  todos: todoReducer
});
