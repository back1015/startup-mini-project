import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { TodoService } from '@src/services/TodoService';

@Component({
    selector: 'app-input-form',
    templateUrl: './input-form.component.html',
    styleUrls: ['./input-form.component.scss'],
})
export class InputFormComponent {
    todoItem = new FormGroup({
        desc: new FormControl(''),
    })

    constructor(
        private todoService: TodoService,
    ) { }

    addTodoItem() {
        const { desc } = this.todoItem.value;

        if (desc.length > 0) {
            this.todoItem.setValue({ desc: '' });
            this.todoService.addTodoItem(desc);
        }
    }
}
