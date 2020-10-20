import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InputFormComponent } from '@src/components/input-form/input-form.component';
import { TodoListComponent } from '@src/components/todo-list/todo-list.component';
import { TodoListFilterComponent } from '@src/components/todo-list-filter/todo-list-filter.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    TodoListComponent,
    TodoListFilterComponent,
   ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
