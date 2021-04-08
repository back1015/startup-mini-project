import { createAction, props } from '@ngrx/store';
import { TodoItem } from '@src/models/TodoItem';
import { EFilter } from '@src/services/TodoService';
export const getTodosList = createAction('[Todo Items] getTodoList');
export const addTodo = createAction(
  '[Todo Items] addTdo',
  props<{ todo: TodoItem }>()
);
export const deleteTodo = createAction(
  '[Todo Items] deleteTodo',
  props<{ id: number }>()
);

export const toggleDoneSatus = createAction(
  '[Todo Items] toggleDoneStatus',
  props<{ id: number }>()
);

export const updateSelectedFilter = createAction(
  '[Todo Items] updateSelectedFilter',
  props<{ filter: EFilter }>()
);
