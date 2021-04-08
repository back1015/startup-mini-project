import { Component } from '@angular/core';

import { TodoService, EFilter } from '@src/services/TodoService';

@Component({
    selector: 'app-todo-list-filter',
    templateUrl: './todo-list-filter.component.html',
    styleUrls: ['./todo-list-filter.component.scss'],
})
export class TodoListFilterComponent {

    get selectedFilter() {
        return this.todoService.selectedFilter;
    }

    get EFilter() {
        return EFilter;
    }

    constructor(
        private todoService: TodoService,
    ) { }

    handleClickFilter(filter: EFilter) {
        this.todoService.setSelectedFilter(filter);
    }
}