import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../../../model/Expense';
import {TimeSheet} from '../../../model/TimeSheet';
import {User} from '../../../model/User';
import {TimeSheetAndUserBody} from '../../../model/TimeSheetAndUserBody';
import {TimeIntervals} from '../../../model/TimeIntervals';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient, private apiService: ApiService) { }

  getAllTimeSheetsWithPagination(page: number, size: number){
    return this.httpClient.get(this.baseUrl + '/timeSheets/getTimeSheetsByPagination?page' + page + '&size' + size);
  }

  getTimeSheetById(timeSheetId: number) {
    return this.httpClient.get(this.baseUrl + '/timeSheets/' + timeSheetId);
  }

  createTimeSheets(timeSheetToBeCreate: TimeSheet){
    return this.httpClient.post(this.baseUrl + '/timeSheets', timeSheetToBeCreate);
  }

  deleteTimeSheet(timeSheetId: number) {
    return this.httpClient.delete(this.baseUrl + '/timeSheets/' + timeSheetId);
  }

  updateTimeSheet(timeSheetBody: TimeSheet, timeSheetId: number) {
    return this.httpClient.put(this.baseUrl + '/timeSheets/' + timeSheetId, timeSheetBody);
  }

  getEmployeesHasTimeSheets(page: number, size: number) {
    return this.httpClient.get(this.baseUrl + '/employees/getEmployeesHasTimeSheets?page' + page + '&size' + size);
  }

  getAllTimeSheetsOfEmployeeAsList(currentUser: User) {
    return this.httpClient.post(this.baseUrl + '/timeSheets/getTimeSheetsOfEmployeeAsList', currentUser);
  }

  getTimeSheetOfEmployeeByDate(timeSheetAndUserBody: TimeSheetAndUserBody) {
    return this.httpClient.post(this.baseUrl + '/timeSheets/getTimeSheetByDate', timeSheetAndUserBody);
  }

  getTimeSheetOfEmployeeById(emloyeeId: number) {
    return this.httpClient.get(this.baseUrl + '/timeSheets/getById/getTimeSheetsOfEmployeeById/' + emloyeeId);
  }
}

