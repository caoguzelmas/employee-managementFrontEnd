import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../services/user.service';
import {UserRoleTypes} from '../../../model/UserRoleTypes';
import {ApiService} from '../../../services/api.service';
import {CurrentUser} from '../../../model/CurrentUser';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  cols: any[];
  users: User[];
  selectedUser: User;
  filterBodyUser: User;
  updateDialogID: any;
  updateConfirmationDialog =  false;
  userRoleTypes: UserRoleTypes;
  userRoleSelect: UserRoleTypes;
  isPasswordShowing = false;
  currentUser: CurrentUser;

  constructor(private userService: UserService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.filterBodyUser = new User();
    this.apiService.getAllUserRoleTypes().subscribe((response: any) => {
      this.userRoleTypes = response;
    });
    this.cols = [
      { field: this.filterBodyUser.userId, header: 'User ID' },
      { field: this.filterBodyUser.userName, header: 'Username' },
      { field: this.filterBodyUser.userRole, header: 'User Role' },
      { field: this.filterBodyUser.employee, header: 'Employee' },
      { field: this.filterBodyUser.createdAt, header: 'Creation Date' }
    ];
    this.paginate({page: 0, size: 5});
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.userService.getAllUsersWithPagination(page, size).subscribe((response: any) => {
      this.users = response.content;
    });
  }

  updateUser(user: User) {
    this.updateDialogID = user.userId;
  }

  updateDialog() {
    this.updateConfirmationDialog === false ? this.updateConfirmationDialog = true : this.updateConfirmationDialog = false;
  }

  cancelUpdate() {
    this.updateDialogID = '';
    this.updateConfirmationDialog = false;
  }

  confirmUpdate(userUpdateBody: User) {
    this.userService.updateUser(userUpdateBody, userUpdateBody.userId).subscribe();
    this.updateDialogID = '';
    this.updateConfirmationDialog = false;
    this.ngOnInit();
  }

  ShowPassword() {
    this.isPasswordShowing === false ? this.isPasswordShowing = true : this.isPasswordShowing = false;
  }

  setUserRole(user: User) {
    user.userRole = this.userRoleSelect.name;
  }

  deleteUser(userToDelete: User) {
    this.userService.deleteUser(userToDelete.userId).subscribe();
    this.updateDialogID = '';
    this.updateConfirmationDialog = false;
    this.ngOnInit();
  }
}
