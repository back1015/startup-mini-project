import { Action, createReducer, on } from '@ngrx/store';
import { TodoItem } from '@src/models/TodoItem';
import { EFilter } from '@src/services/TodoService';
import * as actions from '../actions/todos.actions';

export interface TodoListState {
  todoItems: TodoItem[];
  selectedFilter: EFilter;
}

export const initialState: TodoListState = {
  todoItems: [],
  selectedFilter: EFilter.All,
};

const reducer = createReducer(
  initialState,
  on(actions.getTodosList, (state) => ({
    ...state,
  })),
  on(actions.addTodo, (state, { todo }) => ({
    ...state,
    todoItems: state.todoItems.concat(todo),
  })),
  on(actions.deleteTodo, (state, { id }) => ({
    ...state,
    todoItems: state.todoItems.filter((item) => item.id !== id),
  })),
  on(actions.toggleDoneSatus, (state, { id }) => ({
    ...state,
    // 상태 값을 변경 해야되는데..
    // 현재 상태 값을 바로 변경 하면 문제가 발생된다. 항상 새로운 값으로 반환해주자.
    todoItems: state.todoItems.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    }),
  })),
  on(actions.updateSelectedFilter, (state, { filter }) => {
    return {
      ...state,
      selectedFilter: filter,
    };
  })
);

export function todoReducer(state = initialState, action: Action) {
  return reducer(state, action);
}
