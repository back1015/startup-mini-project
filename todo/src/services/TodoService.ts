import { Injectable } from '@angular/core';

import { TodoItem } from '@src/models/TodoItem';
import { IDService } from '@src/services/IDService';
export enum EFilter {
  All = 'All',
  Todo = 'Todo',
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  // todoItem의 인스턴스들을 가지고 있는 리스트
  // seed 데이터로 초기 리스트를 생성한다
  todoItems: TodoItem[] = [];
  filterTodoItems: TodoItem[] = [];

  // 현재 선택된 필터
  selectedFilter = EFilter.All;

  constructor(private idService: IDService) {
    this.todoItems = JSON.parse(localStorage.getItem('todoItems'));
  }

  // TODO: 새로운 TodoItem를 추가하는 메서드
  addTodoItem(desc: string): void {
    /**
     * desc를 받아 새로운 todoItem 인스턴스를 생성
     * todoItems의 가장 마지막에 새롭게 생성한 todoItem 인스턴스 추가
     */

    // newTodo는 로컬 스토리지에 넣기 위해 오브젝트화
    const newTodo: TodoItem = {
      id: this.idService.getUniqueId(),
      desc: desc,
      done: false,
    };

    this.todoItems.push(newTodo);
    localStorage.setItem('todoItems', JSON.stringify(this.todoItems));

    /*     if (!desc) {
      return;
    }
    this.todoItems.push(newTodo);
    this.filterTodoItems = this.todoItems;

    if (this.selectedFilter === EFilter.Todo) {
      this.setSelectedFilter(EFilter.Todo);
    } */
  }

  // TODO: 기존에 존재하던 todoItem을 삭제하는 메서드
  deleteTodoItem(id: number): void {
    /**
     * id를 받아 해당 id와 일치하는 todoItem을 찾는다
     * 만약 일치하는 todoItem이 있다면 그 아이템을 리스트에서 제거한다
     */
    this.todoItems.splice(this.todoIndexSrh(id), 1);
  }

  // TODO: 기존에 존재하던 todoItem의 done 상태를 토글시키는 메서드
  toggleDoneStatus(id: number): void {
    /**
     * id를 받아 해당 id와 일치하는 todoItem을 찾는다
     * 만약 일치하는 todoItem이 있다면 그 아이템의 done 상태를 토글시킨다
     */
    this.todoItems[this.todoIndexSrh(id)].done = !this.todoItems[
      this.todoIndexSrh(id)
    ].done;
  }
  // TODO: 현재 선택된 필터를 변경하는 메서드
  setSelectedFilter(filter: EFilter): void {
    /**
     * 현재 선택된 필터를 인자로 받은 값으로 변경시켜준다
     */
    const todoFilter = this.todoItems.filter((todoItem) => !todoItem.done);

    if (filter === EFilter.All) {
      this.filterTodoItems = this.todoItems;
      this.selectedFilter = EFilter.All;
    } else if (filter === EFilter.Todo) {
      this.filterTodoItems = todoFilter;
      this.selectedFilter = EFilter.Todo;
    }
  }

  todoIndexSrh(id: number): number {
    return this.todoItems.findIndex((todoItem) => todoItem.id === id);
  }
}