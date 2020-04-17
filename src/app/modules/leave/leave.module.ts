import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LeaveRoutingModule} from './leave.routing.module';
import {EmployeeService} from '../employee/services/employee.service';
import {LeaveService} from './services/leave.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LeaveRoutingModule
  ],
  providers: [
    LeaveService
  ]
})
export class LeaveModule { }
