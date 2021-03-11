import { Component, OnInit } from '@angular/core';

import { TodoService, EFilter } from '@src/services/TodoService';
import { TodoItem } from '@src/models/TodoItem';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {

    // TODO: todoService의 todoItems를 반환하는 computed property
    get todoItems(): TodoItem[] {
        /**
         * 현재 선택된 filter에 맞는 todoItems만 반환환다.
         */
        return this.todoService.filterTodoItems as TodoItem[];
    }

    constructor(
        private todoService: TodoService,
    ) {}

    ngOnInit() {
        this.todoService.filterTodoItems = this.todoService.todoItems;
    }

    // TODO: 해당 todoItem의 done 상태를 토글시키는 메서드
    handleClickCheckBox(todoItem: TodoItem): void {
        /**
         * todoService의 toggleDoneStatus를 이용해
         * 해당 todoItem의 done 상태를 토글시킨다
         */
        this.todoService.toggleDoneStatus(todoItem.id);
    }

    // TODO: 해당 todoItem을 삭제하는 메서드
    handleClickDelBtn(todoItem: TodoItem): void {
        /**
         * todoService의 deleteTodoItem을 이용해
         * 해당 todoItem을 삭제한다
         */
        this.todoService.deleteTodoItem(todoItem.id);
    }
}
