import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ExpenseRoutingModule} from './expense.routing.module';
import {ExpenseService} from './services/expense.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ExpenseRoutingModule
  ],
  providers: [
    ExpenseService
  ]
})
export class ExpenseModule { }
