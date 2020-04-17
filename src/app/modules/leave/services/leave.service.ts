import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private LEAVE_PATH = '/leaves';

  constructor(private apiService: ApiService) { }

  getAllLeaves(): Observable<any> {
    return this.apiService.get(this.LEAVE_PATH).pipe(map(
      response => response !== null ? response : null));
  }

  getLeaveById(id): Observable<any> {
    return this.apiService.get(this.LEAVE_PATH, id).pipe(map(
      response => response !== null ? response : null));
  }

  createLeave(Employee): Observable<any> {
    return this.apiService.post(this.LEAVE_PATH, Employee).pipe(map(
      response => response !== null ? response : null));
  }

  deleteLeave(id): Observable<any> {
    return this.apiService.delete(this.LEAVE_PATH, id).pipe(map(
      response => response !== null ? response : null));
  }
}
