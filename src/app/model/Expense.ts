import {Employee} from './Employee';
import {ExpenseType} from './ExpenseType';

export class Expense {
  expenseId: number;
  expenseMonth: number;
  expenseYear: number;
  totalAmount: number;
  updatedAt: string;
  expenseType: string;
  description: string;
  createdAt: string;
  employee: Employee;
}
