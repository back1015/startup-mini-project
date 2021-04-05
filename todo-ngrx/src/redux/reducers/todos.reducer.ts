import { createReducer, on, Action } from '@ngrx/store';
import { getTodosList } from '../actions/todos.actions';
import { TodoItem } from '../../models/TodoItem';

import seedTodoItem from '@src/seed/todo-item.json';

import { IDService } from '@src/services/IDService';

export interface TodoListState {
  TodoItems: TodoItem;
}

export const initialState: TodoListState = {
  TodoItems: null,
};

const _todoReducer = createReducer(
  initialState,
  on(getTodosList, (state, { TodoItems }) => ({
    ...state,
    TodoItems
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
