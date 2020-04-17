import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LeaveSearchComponent} from './leave-search/leave-search.component';
import {LeaveDetailComponent} from './leave-detail/leave-detail.component';
import {LeaveCreateComponent} from './leave-create/leave-create.component';

const routes: Routes = [
  { path: 'search', component: LeaveSearchComponent},
  { path: 'detail', component: LeaveDetailComponent},
  { path: 'create', component: LeaveCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeaveRoutingModule { }
