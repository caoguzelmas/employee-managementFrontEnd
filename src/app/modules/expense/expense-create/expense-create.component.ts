import { Component, OnInit } from '@angular/core';
import {Expense} from '../../../model/Expense';
import {ExpenseService} from '../services/expense.service';
import {ExpenseType} from '../../../model/ExpenseType';
import {Employee} from '../../../model/Employee';
import {ApiService} from '../../../services/api.service';
import {CurrentUser} from '../../../model/CurrentUser';
import {Router} from '@angular/router';

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
  currentUser: CurrentUser;

  constructor(private expenseService: ExpenseService, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.expenseCreationBody = new Expense();
    this.expenseCreationBody.employee = new Employee();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.apiService.getAllExpenseTypes().subscribe((response: any) => {
      this.expenseTypes = response;
    });
  }

  saveExpense() {
    this.expenseCreationBody.employee = this.currentUser.user.employee;
    this.expenseService.createExpense(this.expenseCreationBody).subscribe();
    this.router.navigate(['/expense/detail']);
  }

  checkEmployeeBodyValidation() {
    this.saveExpense();
  }

  setValue() {
    this.expenseCreationBody.expenseType = this.selectedExpenseType.name;

  }
}
