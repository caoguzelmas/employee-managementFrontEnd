import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../model/Employee';
import {EmployeeService} from '../../employee/services/employee.service';
import {TimeSheetService} from '../services/time-sheet.service';

@Component({
  selector: 'app-time-sheet-search',
  templateUrl: './time-sheet-search.component.html',
  styleUrls: ['./time-sheet-search.component.css']
})
export class TimeSheetSearchComponent implements OnInit {
  cols: any[];
  filterBodyEmployee: Employee;
  employees: Employee[];
  selectedEmployee: Employee;

  constructor(private timeSheetService: TimeSheetService) { }

  ngOnInit(): void {
    this.filterBodyEmployee = new Employee();
    this.cols = [
      { field: this.filterBodyEmployee.firstName, header: 'Name' },
      { field: this.filterBodyEmployee.lastName, header: 'Surname' },
      { field: this.filterBodyEmployee.title, header: 'Title' },
      { field: this.filterBodyEmployee.department, header: 'Department' },
      { field: this.filterBodyEmployee, header: 'Time Sheet ID' }
    ];
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.timeSheetService.getEmployeesHasTimeSheets(page, size).subscribe((response: any) => {
      this.employees = response.content;
      console.log(response.content);
    });
  }

}
