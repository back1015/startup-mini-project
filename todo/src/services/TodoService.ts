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

    // todoItem의 인스턴스들을 가지고 있는 리스트
    // seed 데이터로 초기 리스트를 생성한다
    todoItems = seedTodoItem.map(seed => new TodoItem(
        this.idService.getUniqueId(),
        seed.desc,
        seed.done,
    ));

    // 현재 선택된 필터
    selectedFilter = EFilter.All;

    constructor(
        private idService: IDService,
    ) { }

    // TODO: 새로운 TodoItem를 추가하는 메서드
    addTodoItem(desc: string): void {
        const newTodo = new TodoItem(this.idService.getUniqueId(), desc, false);
        this.todoItems.push(newTodo);
        /**
         * desc를 받아 새로운 todoItem 인스턴스를 생성
         * todoItems의 가장 마지막에 새롭게 생성한 todoItem 인스턴스 추가
         */
    }

    // TODO: 기존에 존재하던 todoItem을 삭제하는 메서드
    deleteTodoItem(id: number): void {
        //filter로 item.id 와 인자 id에 조건에 맞은 item만 걸러낸 값만 추출
        this.todoItems = this.todoItems.filter(item => item.id !== id);
        /**
         * id를 받아 해당 id와 일치하는 todoItem을 찾는다
         * 만약 일치하는 todoItem이 있다면 그 아이템을 리스트에서 제거한다
         */
    }

    // TODO: 기존에 존재하던 todoItem의 done 상태를 토글시키는 메서드
    toggleDoneStatus(id: number): void {
        this.todoItems.filter(item => {
            if (item.id === id) {
                item.done = !item.done;
            }
        });
        /**
         * id를 받아 해당 id와 일치하는 todoItem을 찾는다
         * 만약 일치하는 todoItem이 있다면 그 아이템의 done 상태를 토글시킨다
         */
    }

    // TODO: 현재 선택된 필터를 변경하는 메서드
    setSelectedFilter(filter: EFilter): void {
        this.selectedFilter = filter;
        /**
         * 현재 선택된 필터를 인자로 받은 값으로 변경시켜준다
         */
    }
}
