import { Component } from '@angular/core';

import { TodoService, EFilter } from '@src/services/TodoService';
import { TodoItem } from '@src/models/TodoItem';
import { getTodosList } from '@src/redux/actions/todos.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  get todoItems() {
    return this.todoService.todoItems.filter((item) => {
      if (this.todoService.selectedFilter === EFilter.All) {
        return true;
      }
      return !item.done;
    });
  }

  constructor(private todoService: TodoService) {}

  handleClickCheckBox(todoItem: TodoItem) {
    this.todoService.toggleDoneStatus(todoItem.id);
  }

  handleClickDelBtn(todoItem: TodoItem) {
    this.todoService.deleteTodoItem(todoItem.id);
  }
}
