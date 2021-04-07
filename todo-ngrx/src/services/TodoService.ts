import { Injectable } from '@angular/core';

import { TodoItem } from '@src/models/TodoItem';
import { IDService } from '@src/services/IDService';
import seedTodoItem from '@src/seed/todo-item.json';
import { Store } from '@ngrx/store';
import { IAppState } from '@src/app/app.module';
import { addTodo, getTodosList } from '@src/redux/actions/todos.actions';
import { Observable } from 'rxjs';

export enum EFilter {
  All = 'All',
  Todo = 'Todo',
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  /* todoItems = seedTodoItem.map(
    (seed) => new TodoItem(this.idService.getUniqueId(), seed.desc, seed.done)
  ); */
  todoItems: TodoItem[];
  selectedFilter = EFilter.All;

  todoItems$: Observable<TodoItem[]> = this.store.select('todo', 'todoItems');

  constructor(private idService: IDService, private store: Store<IAppState>) {
    this.store.dispatch(getTodosList());
    this.todoItems$.subscribe((todoItems) => (this.todoItems = todoItems));
  }

  addTodoItem(desc: string) {
    const newTodoItem = new TodoItem(this.idService.getUniqueId(), desc);

    this.store.dispatch(addTodo({ item: newTodoItem }));
    // this.todoItems.push(newTodoItem);
  }

  deleteTodoItem(id: number) {
    this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
  }

  toggleDoneStatus(id: number) {
    const idx = this.todoItems.findIndex((todoItem) => todoItem.id === id);

    if (idx !== -1) {
      this.todoItems[idx].done = !this.todoItems[idx].done;
    }
  }

  setSelectedFilter(filter: EFilter) {
    this.selectedFilter = filter;
  }
}
