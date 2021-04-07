import { Injectable } from '@angular/core';
import { TodoItem } from '@src/models/TodoItem';
import { IDService } from '@src/services/IDService';
import { Store } from '@ngrx/store';
import { IAppState } from '@src/app/app.module';
import {
  addTodo,
  deleteTodo,
  getTodosList,
  toggleDoneSatus,
} from '@src/redux/actions/todos.actions';
import { Observable } from 'rxjs';

export enum EFilter {
  All = 'All',
  Todo = 'Todo',
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItems: TodoItem[];
  selectedFilter = EFilter.All;
  todoItems$: Observable<TodoItem[]> = this.store.select('todo', 'todoItems');

  constructor(private idService: IDService, private store: Store<IAppState>) {
    this.store.dispatch(getTodosList());
    this.todoItems$.subscribe((todos) => (this.todoItems = todos));
  }

  addTodoItem(desc: string): void {
    const todo = new TodoItem(this.idService.getUniqueId(), desc);
    this.store.dispatch(addTodo({ todo }));
  }

  deleteTodoItem(id: number): void {
    this.todoItems = this.todoItems.filter((todoItem) => todoItem.id !== id);
    this.store.dispatch(deleteTodo({ id }));
  }

  toggleDoneStatus(id: number): void {
    // const id = this.todoItems.findIndex((todoItem) => todoItem.id === id);
    /*
    if (idx !== -1) {
      this.todoItems[idx].done = !this.todoItems[idx].done;
    } */

    this.store.dispatch(toggleDoneSatus({ id }));
  }

  setSelectedFilter(filter: EFilter): void {
    this.selectedFilter = filter;
  }
}
