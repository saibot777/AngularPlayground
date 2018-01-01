import {ITodoState} from './todo-state.model';
import {TODO_STATE, todoReducer} from '../reducers/todoReducer';
import {combineReducers} from 'redux';

export interface IInital_State {
  todos: ITodoState;
}

export const INITIAL_STATE: IInital_State = {
  todos: TODO_STATE
};

export const combine = combineReducers<IInital_State>({
  todos: todoReducer
});
