import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {EmployeeRoutingModule} from './employee.routing.module';
import {EmployeeService} from './services/employee.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ],
  providers: [
    EmployeeService
  ]
})
export class EmployeeModule { }
