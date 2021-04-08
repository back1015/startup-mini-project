import { Action, createReducer, on } from '@ngrx/store';
import { TodoItem } from '@src/models/TodoItem';
import {
  getTodosList,
  addTodo,
  deleteTodo,
  toggleDoneSatus,
} from '../actions/todos.actions';

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
  on(addTodo, (state, { todo }) => ({
    ...state,
    todoItems: state.todoItems.concat(todo),
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todoItems: state.todoItems.filter((item) => item.id !== id),
  }))
  /*  on(toggleDoneSatus, (state, { id }) => ({
    ...state,
    // 상태 값을 변경 해야되는데...
    todoItems: state.todoItems.map((value) => {}),
  })) */
);

export function todoReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
