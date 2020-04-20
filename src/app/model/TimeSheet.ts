import {Employee} from './Employee';

export class TimeSheet {
  timeSheetId: number;
  startDate: string;
  endDate: string;
  hours: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  employee: Employee;
}
