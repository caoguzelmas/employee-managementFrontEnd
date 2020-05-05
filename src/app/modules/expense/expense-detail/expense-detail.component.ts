import { Component, OnInit } from '@angular/core';
import {ExpenseService} from '../services/expense.service';
import {Expense} from '../../../model/Expense';
import {CurrentUser} from '../../../model/CurrentUser';
import {ApiService} from '../../../services/api.service';
import {ExpenseType} from '../../../model/ExpenseType';

@Component({
  selector: 'app-expense-detail',
  templateUrl: './expense-detail.component.html',
  styleUrls: ['./expense-detail.component.css']
})
export class ExpenseDetailComponent implements OnInit {
  cols: any[];
  expenses: Expense[];
  expense: Expense;
  expenseTypes: ExpenseType;
  selectedExpense: Expense;
  expenseTabItems: any[];
  updateDialogID: any;
  updateConfirmationDialog = false;
  currentUser: CurrentUser;
  selectedDates: Date;
  selectedExpenseType: ExpenseType;

  constructor(private expenseService: ExpenseService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.expense = new Expense();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.cols = [
      { field: this.expense.expenseId, header: 'Expense ID' },
      { field: this.expense.expenseType, header: 'Expense Type' },
      { field: this.expense.expenseDate, header: 'Expense Date' },
      { field: this.expense.createdAt, header: 'Creation Date' },
      { field: this.expense.totalAmount, header: 'Total Amount' }
    ];
    this.apiService.getAllExpenseTypes().subscribe((response: any) => {
      this.expenseTypes = response;
    });
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.expenseService.getAllExpensesOfEmployee(page, size, this.currentUser.user).subscribe((response: any) => {
      this.expenses = response.content;
    });
  }

  updateExpense(expense: Expense) {
    this.updateDialogID = expense.expenseId;
    expense.expenseDate = new Date(expense.expenseDate);
  }

  updateDialog() {
    this.updateConfirmationDialog === false ? this.updateConfirmationDialog = true : this.updateConfirmationDialog = false;
  }

  cancelUpdate() {
    this.updateDialogID = '';
    this.updateConfirmationDialog = false;
  }

  confirmUpdate(expenseUpdateBody: Expense) {
    this.expenseService.updateExpense(expenseUpdateBody, expenseUpdateBody.expenseId).subscribe();
    this.updateConfirmationDialog = false;
    this.updateDialogID = '';
  }

  setDates(expense: Expense) {

  }

  setValue() {

  }

  deleteExpense(expense: Expense) {
    this.expenseService.deleteExpense(expense.expenseId).subscribe();
    this.updateConfirmationDialog = false;
    this.updateDialogID = '';
    this.ngOnInit();
  }
}
