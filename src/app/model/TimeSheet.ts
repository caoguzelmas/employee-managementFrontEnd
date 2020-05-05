import {Employee} from './Employee';
import {Project} from './Project';

export class TimeSheet {
  timeSheetId: number;
  timeSheetDate: Date;
  hours: number;
  project: Project;
  description: string;
  createdAt: string;
  updatedAt: string;
  employee: Employee;
}
