import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { TodoItem } from '@src/models/TodoItem';
import { IDService } from '@src/services/IDService';
import seedTodoItem from '@src/seed/todo-item.json';

export enum EFilter {
    All = 'All',
    Todo = 'Todo',
}

@Injectable({
    providedIn: 'root',
})
export class TodoService {
    todoItems = seedTodoItem.map(seed => new TodoItem(
        this.idService.getUniqueId(), 
        seed.desc, 
        seed.done,
    ));

    selectedFilter = EFilter.All;

    constructor(
        private idService: IDService,
    ) { }

    addTodoItem(desc: string) {
        const newTodoItem = new TodoItem(
            this.idService.getUniqueId(),
            desc,
        );

        this.todoItems.push(newTodoItem);
    }

    deleteTodoItem(id: number) {
        this.todoItems = this.todoItems.filter(
            todoItem => todoItem.id !== id,
        );
    }

    toggleDoneStatus(id: number) {
        const idx = this.todoItems.findIndex(todoItem => todoItem.id === id);

        if (idx !== -1) {
            this.todoItems[idx].done = !this.todoItems[idx].done;
        }
    }

    setSelectedFilter(filter: EFilter) {
        this.selectedFilter = filter;
    }
}
