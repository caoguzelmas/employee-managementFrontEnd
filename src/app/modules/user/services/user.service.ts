import { Injectable } from '@angular/core';
import {ApiService} from '../../../services/api.service';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {environment} from '../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Expense} from '../../../model/Expense';
import {User} from '../../../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = environment.API_BASE_PATH;

  constructor(private httpClient: HttpClient) { }

  getAllUsersWithPagination(page: number, size: number){
    return this.httpClient.get(this.baseUrl + '/users/pagination/getUsersByPagination?page' + page + '&size' + size);
  }

  getUserById(userId: number) {
    return this.httpClient.get(this.baseUrl + '/users/' + userId);
  }

  createUser(userToBeCreate: User) {
    return this.httpClient.post(this.baseUrl + '/users/create', userToBeCreate);
  }

  deleteUser(userId: number) {
    return this.httpClient.delete(this.baseUrl + '/users/delete/' + userId);
  }

  updateUser(userBody: User, userId: number) {
    return this.httpClient.put(this.baseUrl + '/users/update/' + userId, userBody);
  }
}

