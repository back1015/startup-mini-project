import { Injectable } from '@angular/core';
import { TodoItem } from '@src/models/TodoItem';

@Injectable({
  providedIn: 'root',
})
export class LocalStorgeServiceService {
  private stroageName = 'todoItems';
  todos: TodoItem[] = [];

  constructor() {
    this.todos = JSON.parse(localStorage.getItem(this.stroageName)) || [];
  }

  getTodos(): TodoItem[] {
    return [...this.todos];
  }

  setTodos(todos: TodoItem): void {
    this.todos.push(todos);
    localStorage.setItem(this.stroageName, JSON.stringify(this.todos));
  }

  removeTodos(id: number): void {
    this.todos.splice(id, 1);
    localStorage.setItem(this.stroageName, JSON.stringify(this.todos));
  }
}
