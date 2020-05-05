import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient) { }
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(environment.API_BASE_PATH + path, {params}).pipe(catchError(this.formatError));
  }

  post(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(environment.API_BASE_PATH + path, {params}).pipe(catchError(this.formatError));
  }

  put(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    const header = new HttpHeaders({'Content- Type': 'application-json'});
    return this.httpClient.get(environment.API_BASE_PATH + path, {params}).pipe(catchError(this.formatError));
  }

  delete(path: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.httpClient.get(environment.API_BASE_PATH + path, {params}).pipe(catchError(this.formatError));
  }

  private formatError(error: any) {
    return Observable.caller(environment.API_BASE_PATH + error.error);
  }

  getAllLeaveTypes() {
    return this.httpClient.get(this.baseUrl + '/common/getAllLeaveTypes');
  }

  getAllExpenseTypes() {
    return this.httpClient.get(this.baseUrl + '/common/getAllExpenseTypes');
  }

  getAllUserRoleTypes() {
    return this.httpClient.get(this.baseUrl + '/common/getAllUserRoleTypes');
  }

  getAllProjects() {
    return this.httpClient.get(this.baseUrl + '/common/getAllProjects');
  }
}
