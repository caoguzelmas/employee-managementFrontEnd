import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private USER_PATH = '/users';

  constructor(private apiService: ApiService) { }

  getAllUsers(): Observable<any> {
    return this.apiService.get(this.USER_PATH).pipe(map(
      response => response !== null ? response : null));
  }

  getUserById(id): Observable<any> {
    return this.apiService.get(this.USER_PATH, id).pipe(map(
      response => response !== null ? response : null));
  }

  createUser(Employee): Observable<any> {
    return this.apiService.post(this.USER_PATH, Employee).pipe(map(
      response => response !== null ? response : null));
  }

  deleteUser(id): Observable<any> {
    return this.apiService.delete(this.USER_PATH, id).pipe(map(
      response => response !== null ? response : null));
  }
}

