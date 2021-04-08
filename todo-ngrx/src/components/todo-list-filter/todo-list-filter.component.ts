import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from '@src/app/app.module';

import { TodoService, EFilter } from '@src/services/TodoService';

@Component({
  selector: 'app-todo-list-filter',
  templateUrl: './todo-list-filter.component.html',
  styleUrls: ['./todo-list-filter.component.scss'],
})
export class TodoListFilterComponent {
  selectedFilter = EFilter.All;

  get EFilter() {
    return EFilter;
  }

  constructor(
    private todoService: TodoService,
    private store: Store<IAppState>
  ) {}

  ngOnInit() {
    this.store
      .select((state) => state.todo.selectedFilter)
      .subscribe((filter) => (this.selectedFilter = filter));
  }

  handleClickFilter(filter: EFilter) {
    this.todoService.setSelectedFilter(filter);
  }
}
