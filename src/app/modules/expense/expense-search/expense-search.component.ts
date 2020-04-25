import { Component, OnInit } from '@angular/core';
import {Expense} from '../../../model/Expense';
import {Employee} from '../../../model/Employee';
import {ExpenseService} from '../services/expense.service';

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
  expenseTabItems: any[];
  updateDialogID: any;
  updateConfirmationDialog = false;

  constructor(private expenseService: ExpenseService) { }

  ngOnInit(): void {
    this.filterBodyExpense = new Expense();
    this.cols = [
      { field: this.filterBodyExpense.expenseId, header: 'Expense ID' },
      { field: this.filterBodyExpense.employee, header: 'Employee' },
      { field: this.filterBodyExpense.expenseMonth, header: 'Expense Period (Month)' },
      { field: this.filterBodyExpense.expenseYear, header: 'Expense Period (Year)' },
      { field: this.filterBodyExpense.createdAt, header: 'Creation Date' },
      { field: this.filterBodyExpense.totalAmount, header: 'Total Amount' }
    ];
    this.expenseTabItems = [
      {label: 'All Expenses', icon: 'pi pi-fw pi-calendar', routerLink: ['/expense/search']},
      {label: 'Create New Expense', icon: 'pi pi-fw pi-pencil',  routerLink: ['/expense/create']}
    ];
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.expenseService.getAllExpensesWithPagination(page, size).subscribe((response: any) => {
      this.expenses = response.content;
      console.log(response.content);
    });
  }

  updateExpense(expense: Expense) {
    this.updateDialogID = expense.expenseId;
  }

  updateDialog() {

  }

  cancelUpdate() {

  }

  confirmUpdate(expense: Expense) {

  }
}
