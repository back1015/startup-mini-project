import { createAction, props } from '@ngrx/store';
import { TodoItem } from '../../models/TodoItem';
export const getTodosList = createAction(
  '[Todo Items] getTodoList',
  props<{ TodoItems: TodoItem }>()
);
