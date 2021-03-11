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
  });

  constructor(private todoService: TodoService) {}

  // TODO: todoService를 통해 새로운 todoItem을 추가하는 메서드
  addTodoItem(): void {
    /**
     * formGroup의 desc value를 가져온다
     * todoService의 addTodoItem의 메서드를 이용해 새로운 아이템을 추가한다
     */
    const { desc } = this.todoItem.controls;

    this.todoService.addTodoItem(desc.value);
    desc.reset();
  }
}
