import { Component, OnInit } from '@angular/core';
import {Expense} from '../../../model/Expense';
import {ExpenseService} from '../services/expense.service';
import {ExpenseType} from '../../../model/ExpenseType';
import {User} from '../../../model/User';
import {environment} from '../../../../environments/environment';
import {Employee} from '../../../model/Employee';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-expense-create',
  templateUrl: './expense-create.component.html',
  styleUrls: ['./expense-create.component.css']
})
export class ExpenseCreateComponent implements OnInit {
  expenseCreationBody: Expense;
  selectedDate: Date;
  expenseTypes: ExpenseType;
  selectedExpenseType: ExpenseType;
  currentUser: User;

  constructor(private expenseService: ExpenseService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.expenseCreationBody = new Expense();
    this.expenseCreationBody.employee = new Employee();
    this.currentUser = environment.currentUser;
    this.apiService.getAllExpenseTypes().subscribe((response: any) => {
      this.expenseTypes = response;
    });
  }

  saveExpense() {
    console.log('ok');

  //  console.log(this.expenseCreationBody);
    this.expenseService.createExpense(this.expenseCreationBody).subscribe((response: any) => {
      console.log(response);
    });

  }

  checkEmployeeBodyValidation() {
    this.saveExpense();
  }

  setDates() {
    this.expenseCreationBody.expenseMonth = this.selectedDate.getMonth() + 1;
    this.expenseCreationBody.expenseYear = this.selectedDate.getFullYear();
  }

  setValue() {
    this.expenseCreationBody.expenseType = this.selectedExpenseType.name;
    this.expenseCreationBody.employee.id = this.currentUser.employee.id;
  }
}
