import { Component, OnInit } from '@angular/core';
import {CurrentUser} from '../../../model/CurrentUser';
import {Leave} from '../../../model/Leave';
import {LeaveType} from '../../../model/LeaveType';
import {LeaveService} from '../services/leave.service';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-leave-detail',
  templateUrl: './leave-detail.component.html',
  styleUrls: ['./leave-detail.component.css']
})
export class LeaveDetailComponent implements OnInit {
  cols: any;
  currentUser: CurrentUser;
  leave: Leave;
  leaves: Leave[];
  selectedLeave: Leave;
  leaveTabItems: any[];
  updateDialogID: any;
  updateConfirmationDialog = false;
  leaveTypes: LeaveType;
  selectedLeaveType: LeaveType;
  exStartingDate: Date;
  exEndingDate: Date;

  constructor(private leaveService: LeaveService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.leave = new Leave();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.cols = [
      { field: this.leave.leaveID, header: 'Leave ID' },
      { field: this.leave.leaveType, header: 'Type of Leave' },
      { field: this.leave.startDate, header: 'Start Date' },
      { field: this.leave.endDate, header: 'End Date' },
      { field: this.leave.createdAt, header: 'Created At' },
      { field: this.leave.requestedNumberOfDays, header: 'Number of Days' }
    ];
    this.apiService.getAllLeaveTypes().subscribe((response: any) => {
      this.leaveTypes = response;
    });
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.leaveService.getAllLeavesOfEmployee(page, size, this.currentUser.user).subscribe((response: any) => {
      this.leaves = response.content;
    });
  }

  updateLeave(leave: Leave) {
    leave.startDate = new Date(leave.startDate);
    leave.endDate = new Date(leave.endDate);
    this.exStartingDate = new Date(leave.startDate);
    this.exEndingDate = new Date(leave.endDate);
    this.updateDialogID = leave.leaveID;
  }

  updateDialog() {
    this.updateConfirmationDialog === false ? this.updateConfirmationDialog = true : this.updateConfirmationDialog = false;
  }

  setDates(leave: Leave) {
    if (leave.startDate !== null && leave.endDate !== null) {
      leave.requestedNumberOfDays = this.calculateNumberOfDays(leave.startDate, leave.endDate);
    }
  }

  calculateNumberOfDays(startDate: Date, endDate: Date) {
    return Math.ceil(Math.abs(startDate.getTime() - endDate.getTime()) / (1000 * 3600 * 24));
  }

  setValue(leave: Leave) {
    leave.leaveType = this.selectedLeaveType.name;
  }

  cancelUpdate() {
    this.updateDialogID = '';
    this.updateConfirmationDialog = false;
  }

  confirmUpdate(leaveUpdateBody: Leave) {
    this.leaveService.updateLeave(leaveUpdateBody, leaveUpdateBody.leaveID).subscribe();
    this.updateConfirmationDialog = false;
    this.updateDialogID = '';

  }

  deleteLeave(leave: Leave) {
    this.leaveService.deleteLeave(leave.leaveID).subscribe();
    this.updateConfirmationDialog = false;
    this.updateDialogID = '';
    this.paginate({page: 0, size: 5});
  }
}
