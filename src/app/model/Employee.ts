import {TimeSheet} from './TimeSheet';

export class Employee {

  id: number;
  firstName: string;
  lastName: string;
  title: string;
  department: string;
  eMail: string;
  phoneNumber: string;
  photo: string;
  createdAt: string;
  updatedAt: string;
  timeSheets: TimeSheet[];

}
