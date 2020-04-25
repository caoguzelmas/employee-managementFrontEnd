import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/User';
import {UserRoleTypes} from '../../../model/UserRoleTypes';
import {ApiService} from '../../../services/api.service';
import {UserService} from '../services/user.service';
import {environment} from '../../../../environments/environment';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userCreationBody: User;
  selectedUserRoleType: UserRoleTypes;
  userRoleTypes: UserRoleTypes;
  currentUser: User;
  isPasswordShowing =  false;

  constructor(private userService: UserService, private apiService: ApiService) { }

  ngOnInit(): void {
    this.userCreationBody = new User();
    this.currentUser = environment.currentUser;
    this.apiService.getAllUserRoleTypes().subscribe((response: any) => {
      this.userRoleTypes = response;
    });
  }

  saveUser() {
    this.userService.createUser(this.userCreationBody).subscribe(res => {
      console.log(res);
    });
  }

  setValue() {
    this.userCreationBody.userRole = this.selectedUserRoleType.name;
  }

  showPassword() {
    this.isPasswordShowing === false ? this.isPasswordShowing = true : this.isPasswordShowing = false;
  }
}
