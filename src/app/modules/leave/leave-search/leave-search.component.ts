import { Component, OnInit } from '@angular/core';
import {Leave} from '../../../model/Leave';
import {LeaveService} from '../services/leave.service';
import {LeaveType} from '../../../model/LeaveType';
import {ApiService} from '../../../services/api.service';

@Component({
  selector: 'app-leave-search',
  templateUrl: './leave-search.component.html',
  styleUrls: ['./leave-search.component.css']
})
export class LeaveSearchComponent implements OnInit {
  cols: any;
  leaves: Leave[];
  selectedLeave: Leave;
  filterBodyLeave: Leave;
  leaveTypes: LeaveType;
  leaveTabItems: any[];
  updateDialogID: any;
  updateConfirmationDialog = false;
  selectedDate: Date;
  selectedLeaveType: LeaveType;
  selectedStartDate: any;
  exStartingDate: Date;
  exEndingDate: Date;

  constructor(private leaveService: LeaveService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.filterBodyLeave = new Leave();
    this.cols = [
      { field: this.filterBodyLeave.leaveID, header: 'Leave ID' },
      { field: this.filterBodyLeave.employee, header: 'Name-Surname' },
      { field: this.filterBodyLeave.leaveType, header: 'Type of Leave' },
      { field: this.filterBodyLeave.startDate, header: 'Start Date' },
      { field: this.filterBodyLeave.endDate, header: 'End Date' },
      { field: this.filterBodyLeave.createdAt, header: 'Created At' }
    ];
    this.apiService.getAllLeaveTypes().subscribe((response: any) => {
      this.leaveTypes = response;
    });
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.leaveService.getAllLeavesWithPagination(page, size).subscribe((response: any) => {
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
}
