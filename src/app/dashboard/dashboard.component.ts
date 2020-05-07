import { Component, OnInit } from '@angular/core';
import {CurrentUser} from '../model/CurrentUser';
import {EmployeeService} from '../modules/employee/services/employee.service';
import {Employee} from '../model/Employee';
import {ExpenseService} from '../modules/expense/services/expense.service';
import {LeaveService} from '../modules/leave/services/leave.service';
import {TimeSheetService} from '../modules/time-sheet/services/time-sheet.service';
import {TimeIntervals} from '../model/TimeIntervals';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: CurrentUser;
  currentEmployee: Employee;
  currentMonth: number;
  timeIntervalGroup: TimeIntervals;
  numberOfExpenseReqOfEmployee: number;
  numberOfLeaveReqOfEmployee: number;
  numberOfTimeSheetsOfEmployee: number;
  data: any;
  chartOption: any;

  constructor(private employeeService: EmployeeService, private expenseService: ExpenseService,
              private leaveService: LeaveService, private timeSheetService: TimeSheetService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.currentEmployee = new Employee();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser.user.userRole === 'Employee') {
      this.employeeService.getEmployeeByUser(this.currentUser.user).subscribe((response: any) => {
        this.currentEmployee = response;
      });
      this.expenseService.getAllExpensesOfEmployee(0, 100, this.currentUser.user).subscribe((response: any) => {
        this.numberOfExpenseReqOfEmployee = response.totalElements;
      });
      this.leaveService.getAllLeavesOfEmployee(0, 100, this.currentUser.user).subscribe((response: any) => {
        this.numberOfLeaveReqOfEmployee = response.totalElements;
      });
      this.timeSheetService.getAllTimeSheetsOfEmployeeAsList(this.currentUser.user).subscribe((response: any) => {
        this.numberOfTimeSheetsOfEmployee = response.length;
      });
    } else {
      const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      this.currentMonth = new Date().getMonth();
      this.timeIntervalGroup = new TimeIntervals();

      this.timeIntervalGroup.startingDate = new Date();
      this.timeIntervalGroup.endingDate = new Date();
      this.timeIntervalGroup.startingDate.setDate(1);
      this.timeIntervalGroup.endingDate.setDate(30);
      this.apiService.getAdminDashboardItemsBetweenDates(this.timeIntervalGroup).subscribe((response: any) => {
        this.data = {
          labels: [monthNames[this.currentMonth]],
          datasets: [
            {
              label: 'Created Expense Requests',
              backgroundColor: '#4D97F3',
              borderColor: '#4D97F3',
              data: [response.listOfExpenses.length]
            },
            {
              label: 'Created Leave Requests',
              backgroundColor: '#E74033',
              borderColor: '#E74033',
              data: [response.listOfLeaves.length]
            },
            {
              label: 'Created Time Sheets',
              backgroundColor: '#F2C010',
              borderColor: '#F2C010',
              data: [response.listOfTimeSheets.length]
            }
          ]
        };
      });
      this.chartOption = {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      };
    }
  }

}
