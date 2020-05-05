import {Employee} from './Employee';
import {ExpenseType} from './ExpenseType';

export class Expense {
  expenseId: number;
  expenseDate: Date;
  totalAmount: number;
  updatedAt: string;
  expenseType: string;
  description: string;
  createdAt: string;
  employee: Employee = new Employee();
}
