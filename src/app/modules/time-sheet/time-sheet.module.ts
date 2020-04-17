import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TimeSheetRoutingModule} from './time-sheet.routing.module';
import {EmployeeService} from '../employee/services/employee.service';
import {TimeSheetService} from './services/time-sheet.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TimeSheetRoutingModule
  ],
  providers: [
    TimeSheetService
  ]
})
export class TimeSheetModule { }
