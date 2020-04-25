import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ExpenseSearchComponent} from './expense-search/expense-search.component';
import {ExpenseCreateComponent} from './expense-create/expense-create.component';

const routes: Routes = [
  { path: 'search', component: ExpenseSearchComponent},
  { path: 'create', component: ExpenseCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpenseRoutingModule { }
