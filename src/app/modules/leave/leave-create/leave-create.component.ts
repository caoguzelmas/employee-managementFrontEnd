import { Component, OnInit } from '@angular/core';
import {LeaveType} from '../../../model/LeaveType';
import {Leave} from '../../../model/Leave';
import {LeaveService} from '../services/leave.service';
import {User} from '../../../model/User';
import {Employee} from '../../../model/Employee';
import {environment} from '../../../../environments/environment';
import {ExpenseService} from '../../expense/services/expense.service';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-leave-create',
  templateUrl: './leave-create.component.html',
  styleUrls: ['./leave-create.component.css']
})
export class LeaveCreateComponent implements OnInit {
  selectedDate: Date;
  leaveTypes: LeaveType;
  selectedLeaveType: LeaveType;
  leaveCreationBody: Leave;
  currentUser: User;

  constructor(private leaveService: LeaveService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.leaveCreationBody = new Leave();
    this.leaveCreationBody.employee = new Employee();
    this.currentUser = environment.currentUser;
    this.apiService.getAllLeaveTypes().subscribe((response: any) => {
      this.leaveTypes = response;
    });
    this.leaveCreationBody.employee.id = this.currentUser.employee.id;
  }

  setDates() {
    this.leaveCreationBody.startDate = this.selectedDate[0];
    this.selectedDate[1] !== null ? this.leaveCreationBody.endDate = this.selectedDate[1] : this.leaveCreationBody.endDate = undefined;
    if (this.leaveCreationBody.startDate !== null && this.leaveCreationBody.endDate !== null) {
      this.leaveCreationBody.requestedNumberOfDays = this.calculateNumberOfDays(this.leaveCreationBody.startDate, this.leaveCreationBody.endDate);
    }
  }

  setValue() {
    this.leaveCreationBody.leaveType = this.selectedLeaveType.name;
  }

  saveLeave() {
    this.leaveService.createLeave(this.leaveCreationBody).subscribe((response: any) => {
      console.log(response);
    });
    console.log(this.leaveCreationBody);
  }

  calculateNumberOfDays(startDate: Date, endDate: Date) {
    return Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24));
  }
}
