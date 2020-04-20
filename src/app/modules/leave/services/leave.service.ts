import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Leave} from '../../../model/Leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getAllLeavesWithPagination(page: number, size: number) {
    return this.httpClient.get(this.baseUrl + '/leaves/getLeavesByPagination?page' + page + '&size' + size);
  }

  getLeaveById(leaveId: number) {
    return this.httpClient.get(this.baseUrl + '/leaves/' + leaveId);
  }

  createLeave(leaveToBeCreate: Leave) {
    return this.httpClient.post(this.baseUrl + '/leaves/', leaveToBeCreate);
  }

  deleteLeave(leaveId: number) {
    return this.httpClient.delete(this.baseUrl + '/leaves/' + leaveId);
  }

  updateLeave(leaveBody: Leave, leaveId: number) {
    return this.httpClient.put(this.baseUrl + '/leaves/' + leaveId, leaveBody);
  }
}
