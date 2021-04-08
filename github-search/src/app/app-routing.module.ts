import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutomaticallySearchComponent } from '@src/components/automatically-search/automatically-search.component';

import { HomeComponent } from '@src/components/home/home.component';
import { ManuallySearchComponent } from '@src/components/manually-search/manually-search.component';

// TODO: AutomaticallySearchComponent와 ManuallySearchComponent를 Router에 추가
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'manually-search', component: ManuallySearchComponent },
  { path: 'automatically-search', component: AutomaticallySearchComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
