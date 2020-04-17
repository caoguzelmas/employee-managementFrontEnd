import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TimeSheetService {

  private TIME_SHEET_PATH = '/timeSheets';

  constructor(private apiService: ApiService) { }

  getAllTimeSheets(): Observable<any> {
    return this.apiService.get(this.TIME_SHEET_PATH).pipe(map(
      response => response !== null ? response : null));
  }

  getTimeSheetById(id): Observable<any> {
    return this.apiService.get(this.TIME_SHEET_PATH, id).pipe(map(
      response => response !== null ? response : null));
  }

  createTimeSheet(Employee): Observable<any> {
    return this.apiService.post(this.TIME_SHEET_PATH, Employee).pipe(map(
      response => response !== null ? response : null));
  }

  deleteTimeSheet(id): Observable<any> {
    return this.apiService.delete(this.TIME_SHEET_PATH, id).pipe(map(
      response => response !== null ? response : null));
  }
}

