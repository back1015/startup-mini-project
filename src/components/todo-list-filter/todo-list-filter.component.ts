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

    // TODO: Filter 아이템을 클릭했을 때 호출되는 메서드
    handleClickFilter(filter: EFilter): void {
        this.todoService.setSelectedFilter(filter);
        /**
         * 클릭한 필터가 반영되도록
         * todoService의 setSelectedFilter 메서드를 호출한다
         */
    }
}
