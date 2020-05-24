import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../model/Employee';
import {EmployeeService} from '../../employee/services/employee.service';
import {TimeSheetService} from '../services/time-sheet.service';
import {TimeSheet} from '../../../model/TimeSheet';


@Component({
  selector: 'app-time-sheet-search',
  templateUrl: './time-sheet-search.component.html',
  styleUrls: ['./time-sheet-search.component.css']
})
export class TimeSheetSearchComponent implements OnInit {
  employees: Employee[];
  employeeIds: number[] = [];
  dialogID: any;
  dialogColumns: any[];



  constructor(private employeeService: EmployeeService, private timeSheetService: TimeSheetService) { }

  ngOnInit(): void {
    this.dialogColumns = [
      { header: 'Time Sheet ID' },
      { header: 'Date' },
      { header: 'Hours' },
      { header: 'Project' },
      { header: 'Description' }
    ];
    this.paginate({page: 0, size: 16});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.employeeService.getAllEmployeesWithPagination(page, size).subscribe((response: any) => {
      console.log(response);
      this.employees = response.content;
      this.employees.forEach(employee => {
        this.timeSheetService.getTimeSheetOfEmployeeById(employee.id).subscribe((timeSheets: TimeSheet[]) => {
          employee.timeSheets = timeSheets;
          console.log(employee.timeSheets);
          console.log(employee.timeSheets.map((x) => new Date(x.timeSheetDate)).sort().reverse());
        });
      });
    });

  }

  showAllTimeSheets(employee: any) {
    this.dialogID = employee.id;
  }

  closeDialog() {
    this.dialogID = '';
  }
}
