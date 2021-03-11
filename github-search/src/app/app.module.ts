import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalNavComponent } from '@src/components/global-nav/global-nav.component';
import { ManuallySearchComponent } from '@src/components/manually-search/manually-search.component';
import { AutomaticallySearchComponent } from '@src/components/automatically-search/automatically-search.component';
import { HomeComponent } from '@src/components/home/home.component';
import { StyledInputComponent } from '@src/components/styled-input/styled-input.component';
import { UserListComponent } from '@src/components/user-list/user-list.component';
import { UserListItemComponent } from '@src/components/user-list-item/user-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalNavComponent,
    ManuallySearchComponent,
    AutomaticallySearchComponent,
    HomeComponent,
    StyledInputComponent,
    UserListComponent,
    UserListItemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
