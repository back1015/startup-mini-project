import { Action, createReducer, on } from '@ngrx/store';
import { TodoItem } from '@src/models/TodoItem';
import { getTodosList, addTodo } from '../actions/todos.actions';

export interface TodoListState {
  todoItems: TodoItem[];
}

export const initialState: TodoListState = {
  todoItems: [],
};

const reducer = createReducer(
  initialState,
  on(getTodosList, (state) => ({
    ...state,
  })),
  on(addTodo, (state, { item }) => ({
    ...state,
    todoItems: state.todoItems.concat(item),
  }))
);

export function todoReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
