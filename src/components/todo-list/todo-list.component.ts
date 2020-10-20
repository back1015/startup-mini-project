import { Component } from '@angular/core';

import { TodoService, EFilter } from '@src/services/TodoService';
import { TodoItem } from '@src/models/TodoItem';

@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {

    // TODO: todoService의 todoItems를 반환하는 computed property
    get todoItems() {
        /**
         * 현재 선택된 filter에 맞는 todoItems만 반환환다.
         */

        // return [] as TodoItem[];
        return this.todoService.todoItems as TodoItem[];
    }

    constructor(
        private todoService: TodoService,
    ) {}

    // TODO: 해당 todoItem의 done 상태를 토글시키는 메서드
    handleClickCheckBox(todoItem: TodoItem) {
        this.todoService.toggleDoneStatus(todoItem.id);
        /**
         * todoService의 toggleDoneStatus를 이용해
         * 해당 todoItem의 done 상태를 토글시킨다
         */
    }

    // TODO: 해당 todoItem을 삭제하는 메서드
    handleClickDelBtn(todoItem: TodoItem) {
        this.todoService.deleteTodoItem(todoItem.id);
        /**
         * todoService의 deleteTodoItem을 이용해
         * 해당 todoItem을 삭제한다
         */
    }
}
