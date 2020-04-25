import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../services/employee.service';
import {Employee} from '../../../model/Employee';

@Component({
  selector: 'app-employee-search',
  templateUrl: './employee-search.component.html',
  styleUrls: ['./employee-search.component.css']
})
export class EmployeeSearchComponent implements OnInit {
  employees: Employee[];
  cols: any[];
  selectedEmployee: Employee;
  filterBodyEmployee: Employee;
  updateConfirmationDialog = false;
  employeeUpdateBody: Employee;
  updateDialogID: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.employeeUpdateBody = new Employee();
    this.filterBodyEmployee =  new Employee();
    this.cols = [
      { field: this.filterBodyEmployee.firstName, header: 'Name' },
      { field: this.filterBodyEmployee.lastName, header: 'Surname' },
      { field: this.filterBodyEmployee.title, header: 'Title' },
      { field: this.filterBodyEmployee.department, header: 'Department' },
      { field: this.filterBodyEmployee.eMail, header: 'E-Mail' },
      { field: this.filterBodyEmployee.phoneNumber, header: 'Phone Number' }
    ];
    this.paginate({page: 0, size: 5});
      }

  clicked() {
    this.employeeService.deleteEmployee(1).subscribe(
      resp => {
        console.log(resp);
      }
    );
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.employeeService.getAllEmployeesWithPagination(page, size).subscribe((response: any) => {
      this.employees = response.content;
    });
  }

  updateEmployee(employee: any) {
    this.updateDialogID = employee.id;
  }

  updateDialog() {
    this.updateConfirmationDialog === false ? this.updateConfirmationDialog = true : this.updateConfirmationDialog = false;
  }

  cancelUpdate() {
    this.updateDialogID = '';
    this.updateConfirmationDialog = false;
  }

  confirmUpdate(employeeUpdateBody: Employee) {
    this.employeeService.updateEmployee(employeeUpdateBody, employeeUpdateBody.id).subscribe();
    this.updateConfirmationDialog = false;
  }
}
