import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeSearchComponent} from './employee-search/employee-search.component';


const routes: Routes = [
  { path: 'create', component: EmployeeCreateComponent},
  { path: 'search', component: EmployeeSearchComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
