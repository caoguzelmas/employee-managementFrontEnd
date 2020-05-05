import { Component, OnInit } from '@angular/core';
import {TimeSheet} from '../../../model/TimeSheet';
import {ApiService} from '../../../services/api.service';
import {CurrentUser} from '../../../model/CurrentUser';
import {TimeSheetService} from '../services/time-sheet.service';
import {Project} from '../../../model/Project';
import {TimeSheetAndUserBody} from '../../../model/TimeSheetAndUserBody';
import {User} from '../../../model/User';

@Component({
  selector: 'app-time-sheet-create',
  templateUrl: './time-sheet-create.component.html',
  styleUrls: ['./time-sheet-create.component.css']
})
export class TimeSheetCreateComponent implements OnInit {
  selectedDate: Date;
  timeSheetBody: TimeSheet;
  timeSheetAndUserBody: TimeSheetAndUserBody;
  projects: Project;
  selectedProject: any;
  currentUser: CurrentUser;
  createdTimeSheetsDates: TimeSheet[] = [];
  disabledDates: number[] = [];
  isSelectedDateNull = true;
  createdTimeSheetOnSelectedDate: TimeSheet;
  defaultDate: Date;

  constructor(private timeSheetService: TimeSheetService, private apiService: ApiService) { }
  ngOnInit(): void {
    this.timeSheetBody = new TimeSheet();
    this.timeSheetAndUserBody = new TimeSheetAndUserBody();
    this.timeSheetAndUserBody.timeSheetBody = new TimeSheet();
    this.timeSheetAndUserBody.user = new User();
    this.createdTimeSheetOnSelectedDate = new TimeSheet();
    this.projects = new Project();
    this.defaultDate = new Date();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.apiService.getAllProjects().subscribe((response: any) => {
      this.projects = response;
    });
    this.timeSheetService.getAllTimeSheetsOfEmployeeAsList(this.currentUser.user).subscribe((response: any) => {
      response.forEach(item => {
        this.createdTimeSheetsDates.push(item);
      });
      this.createdTimeSheetsDates.forEach(item => {
        item.timeSheetDate = new Date(item.timeSheetDate);
        console.log(item.timeSheetDate);
        this.disabledDates.push(item.timeSheetDate.getDate());
      });
/*      console.log(this.createdTimeSheetsDates.length);
      this.createdTimeSheetsDates.forEach(item => {
        console.log(item);
      });*/
    });
  }

  setProject() {
  }

  saveTimeSheet() {
    this.timeSheetBody.employee = this.currentUser.user.employee;
    this.timeSheetService.createTimeSheets(this.timeSheetBody).subscribe();
    console.log(this.timeSheetBody);
    this.defaultDate = this.selectedDate;
    this.timeSheetService.getTimeSheetOfEmployeeByDate(this.timeSheetAndUserBody).subscribe((response: any) => {
      if (response !== null) {
        this.isSelectedDateNull = false;
        this.createdTimeSheetOnSelectedDate = response;
      }
    });
  }

  timeSheetDateSelect() {
    this.isSelectedDateNull = true;
    this.timeSheetAndUserBody.timeSheetBody.timeSheetDate = this.timeSheetBody.timeSheetDate;
    this.timeSheetAndUserBody.user = this.currentUser.user;
    this.timeSheetService.getTimeSheetOfEmployeeByDate(this.timeSheetAndUserBody).subscribe((response: any) => {
      if (response !== null) {
        this.isSelectedDateNull = false;
        this.createdTimeSheetOnSelectedDate = response;
      }
    });
  }

  funct(date: any) {
    // tslint:disable-next-line:only-arrow-functions
    setTimeout(function(){ }, 3000);
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.createdTimeSheetsDates.length; i++) {
      return date.day === this.createdTimeSheetsDates[i].timeSheetDate.getDate();
    }
  }
}
