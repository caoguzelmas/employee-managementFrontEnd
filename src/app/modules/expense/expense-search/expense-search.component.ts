import { Component, OnInit } from '@angular/core';
import {Expense} from '../../../model/Expense';
import {Employee} from '../../../model/Employee';
import {ExpenseService} from '../services/expense.service';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-expense-search',
  templateUrl: './expense-search.component.html',
  styleUrls: ['./expense-search.component.css']
})
export class ExpenseSearchComponent implements OnInit {
  cols: any[];
  expenses: Expense[];
  selectedExpense: Expense;
  filterBodyExpense: Expense;
  updateDialogID: any;
  updateConfirmationDialog = false;
  expenseTypes: any;

  constructor(private expenseService: ExpenseService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.filterBodyExpense = new Expense();
    this.cols = [
      { field: this.filterBodyExpense.expenseId, header: 'Expense ID' },
      { field: this.filterBodyExpense.employee, header: 'Employee' },
      { field: this.filterBodyExpense.expenseDate, header: 'Expense Date' },
      { field: this.filterBodyExpense.createdAt, header: 'Creation Date' },
      { field: this.filterBodyExpense.totalAmount, header: 'Total Amount' }
    ];
    this.apiService.getAllExpenseTypes().subscribe((response: any) => {
      this.expenseTypes = response;
    });
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.expenseService.getAllExpensesWithPagination(page, size).subscribe((response: any) => {
      console.log(response.content);
      this.expenses = response.content;
    });
  }

  updateExpense(expense: Expense) {
    this.updateDialogID = expense.expenseId;
    expense.expenseDate = new Date(expense.expenseDate);
  }

  updateDialog() {

  }

  cancelUpdate() {
    this.updateDialogID = '';
    this.updateConfirmationDialog = false;
  }

  setDates(expense) {

  }

  setValue() {

  }
}
