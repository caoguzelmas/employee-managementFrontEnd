import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../model/Employee';
import {EmployeeService} from '../services/employee.service';
import {ApiService} from '../../../services/api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  employeeCreationBody: Employee;

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.employeeCreationBody = new Employee();
  }

  saveEmployee() {
    console.log('ok');
    this.employeeService.createEmployee(this.employeeCreationBody).subscribe();
    this.router.navigate(['/employee/search']);
  }

  checkEmployeeBodyValidation() {
    this.saveEmployee();
  }
}
