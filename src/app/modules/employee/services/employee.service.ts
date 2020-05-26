import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Employee} from '../../../model/Employee';
import {ApiService} from '../../../services/api.service';
import {User} from '../../../model/User';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };


  getAllEmployees(page: number, size: number) {
      return this.apiService.get('/employees/getEmployeesByPagination?page' + page + '&size' + size);
    }

    // aynı şeyi denemek için

  getAllEmployeesWithPagination(page: number, size: number) {
    return this.httpClient.get(this.baseUrl + '/employees/getEmployeesByPagination?page' + page + '&size' + size);
  }

  getEmployeeById(id: number) {
    return this.httpClient.get(this.baseUrl + '/employees/getById/' + id);
  }

  createEmployee(employeeToBeCreate: Employee): Observable<any> {
    return this.httpClient.post<any>(this.baseUrl + '/employees/create', employeeToBeCreate);
  }

  deleteEmployee(id: number) {
    return this.httpClient.delete(this.baseUrl + '/employees/delete/' + id);
  }

  updateEmployee(employeeBody: Employee, id: number) {
    return this.httpClient.put(this.baseUrl + '/employees/update/' + id, employeeBody);
  }

  getEmployeeByUser(userBody: User) {
    return this.httpClient.post(this.baseUrl + '/employees/getEmployeeByUser', userBody);
  }
}
