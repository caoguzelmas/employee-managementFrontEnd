import {Employee} from './Employee';

export class Expense {
  expenseId: number;
  expenseMonth: string;
  expenseYear: string;
  totalAmount: number;
  updatedAt: string;
  createdAt: string;
  employee: Employee;
}
