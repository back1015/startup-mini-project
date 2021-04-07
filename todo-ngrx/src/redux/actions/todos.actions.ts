import { createAction, props } from '@ngrx/store';
import { TodoItem } from '@src/models/TodoItem';
export const getTodosList = createAction('[Todo Items] getTodoList');
export const addTodo = createAction(
  '[Todo Items] addTdo',
  props<{ item: TodoItem }>()
);
