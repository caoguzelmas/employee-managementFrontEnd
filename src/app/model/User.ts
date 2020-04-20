import {Employee} from './Employee';
import {UserType} from './UserType';

export class User {

  userId: number;
  userName: string;
  password: string;
  userRole: UserType;
  createdAt: string;
  updatedAt: string;
  employee: Employee;

}
