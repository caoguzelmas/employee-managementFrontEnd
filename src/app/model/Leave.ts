import {Employee} from './Employee';
import {LeaveType} from './LeaveType';

export class Leave {
  leaveID: number;
  startDate: Date;
  endDate: Date;
  leaveType: string;
  createdAt: Date;
  updatedAt: string;
  description: string;
  employee: Employee;
  requestedNumberOfDays: number;
}
