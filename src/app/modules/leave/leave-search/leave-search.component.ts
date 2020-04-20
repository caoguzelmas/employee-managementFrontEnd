import { Component, OnInit } from '@angular/core';
import {Leave} from '../../../model/Leave';
import {LeaveService} from '../services/leave.service';

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
  leaveTabItems: any[];

  constructor(private leaveService: LeaveService) { }

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
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.leaveService.getAllLeavesWithPagination(page, size).subscribe((response: any) => {
      this.leaves = response.content;
    });
  }

}
