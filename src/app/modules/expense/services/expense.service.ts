import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Expense} from '../../../model/Expense';
import {Employee} from '../../../model/Employee';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getAllExpensesWithPagination(page: number, size: number){
    return this.httpClient.get(this.baseUrl + '/expenses/getExpensesByPagination?page' + page + '&size' + size);
  }

  getExpenseById(expenseId: number) {
    return this.httpClient.get(this.baseUrl + '/expenses/' + expenseId);
  }

  createExpense(expenseToBeCreate: Expense){
    return this.httpClient.post(this.baseUrl + '/expenses', expenseToBeCreate);
  }

  deleteExpense(expenseId: number) {
    return this.httpClient.delete(this.baseUrl + '/expenses/' + expenseId);
  }

  updateExpense(expenseBody: Expense, expenseId: number) {
    return this.httpClient.put(this.baseUrl + '/expenses/' + expenseId, expenseBody);
  }
}
