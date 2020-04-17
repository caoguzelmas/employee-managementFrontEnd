import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Employee} from '../../../model/Employee';
import {ApiService} from '../../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }


  getAllEmployees(page: number, size: number) {
      return this.apiService.get('/employees/getEmployeesByPagination?page' + page + '&size' + size);
    }

    // aynı şeyi denemek için

  getAllEmployeesWithPagination(page: number, size: number) {
    return this.httpClient.get(this.baseUrl + '/employees/getEmployeesByPagination?page' + page + '&size' + size);
  }

  getEmployeeById(id: number) {
    return this.httpClient.get(this.baseUrl + '/employees/' + id);
  }

  createEmployee(employeeToBeCreate: Employee) {
    return this.httpClient.post(this.baseUrl + '/employees', employeeToBeCreate);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(this.baseUrl + '/employees/' + id);
  }

  updateEmployee(employeeBody: Employee, id: number) {
    return this.httpClient.put(this.baseUrl + '/employees/' + id, employeeBody);
  }
}
