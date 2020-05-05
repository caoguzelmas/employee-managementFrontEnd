import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/User';
import {UserRoleTypes} from '../../../model/UserRoleTypes';
import {ApiService} from '../../../services/api.service';
import {UserService} from '../services/user.service';
import {CurrentUser} from '../../../model/CurrentUser';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;
  isPasswordShowing = false;
  userRoleTypes: UserRoleTypes;
  selectedUserRoleType: UserRoleTypes;
  currentUser: CurrentUser;
  updateConfirmationDialog = false;

  constructor(private apiService: ApiService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User();
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.user = this.currentUser.user;
    this.apiService.getAllUserRoleTypes().subscribe((response: any) => {
      this.userRoleTypes = response;
    });
  }

  updateUser() {
    this.userService.updateUser(this.user, this.currentUser.user.userId).subscribe();
    this.updateConfirmationDialog = false;
    this.ngOnInit();
  }

  cancelUpdate() {
    this.ngOnInit();
    this.user = this.currentUser.user;
    this.updateConfirmationDialog = false;
  }

  showPassword() {
    this.isPasswordShowing === false ? this.isPasswordShowing = true : this.isPasswordShowing = false;
  }

  setValue(user: User) {
    this.user.userRole = this.selectedUserRoleType.name;
  }


  updateDialog() {
    this.updateConfirmationDialog === false ? this.updateConfirmationDialog = true : this.updateConfirmationDialog = false;
  }
}
