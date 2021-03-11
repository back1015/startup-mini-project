import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@src/components/home/home.component';

// TODO: AutomaticallySearchComponent와 ManuallySearchComponent를 Router에 추가
const routes: Routes = [{
  path: '',
  component: HomeComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
