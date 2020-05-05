import { Component, OnInit } from '@angular/core';
import {LeaveType} from '../../../model/LeaveType';
import {Leave} from '../../../model/Leave';
import {LeaveService} from '../services/leave.service';
import {ApiService} from '../../../services/api.service';
import {CurrentUser} from '../../../model/CurrentUser';
import {Router} from '@angular/router';

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
  currentUser: CurrentUser;

  constructor(private leaveService: LeaveService, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.selectedDate = new Date();
    this.leaveCreationBody = new Leave();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.apiService.getAllLeaveTypes().subscribe((response: any) => {
      this.leaveTypes = response;
    });
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
    this.leaveCreationBody.employee = this.currentUser.user.employee;
    this.leaveService.createLeave(this.leaveCreationBody).subscribe();
    this.router.navigate(['/leave/detail']);
  }

  calculateNumberOfDays(startDate: Date, endDate: Date) {
    return Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24));
  }
}
