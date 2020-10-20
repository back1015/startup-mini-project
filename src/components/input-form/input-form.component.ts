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

    // TODO: todoService를 통해 새로운 todoItem을 추가하는 메서드
    addTodoItem() {
        const todoList = this.todoItem.value.desc;
        if(!todoList) return;
        this.todoService.addTodoItem(todoList);
        // 입력 완료후 form reset을 실행
        this.todoItem.reset();
        /**
         * formGroup의 desc value를 가져온다
         * todoService의 addTodoItem의 메서드를 이용해 새로운 아이템을 추가한다
         */
    }
}
