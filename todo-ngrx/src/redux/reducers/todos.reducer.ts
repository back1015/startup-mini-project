import { Action, createReducer, on } from '@ngrx/store';
import { getTodosList } from '../actions/todos.actions';
import seedTodoItem from '@src/seed/todo-item.json';
import { TodoItem } from '@src/models/TodoItem';

export interface TodoListState {
  todoItems: TodoItem[];
}

export const initialState: TodoListState = {
  todoItems: [],
};

const _todoReducer = createReducer(
  initialState,
  on(getTodosList, (state) => ({
    ...state,
    todoItems: seedTodoItem,
  }))
);

export function todoReducer(state = initialState, action: Action) {
  return _todoReducer(state, action);
}
