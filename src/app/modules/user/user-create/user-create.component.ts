import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/User';
import {UserRoleTypes} from '../../../model/UserRoleTypes';
import {ApiService} from '../../../services/api.service';
import {UserService} from '../services/user.service';
import {environment} from '../../../../environments/environment';
import {Router} from '@angular/router';

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

  constructor(private userService: UserService, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.userCreationBody = new User();
    this.apiService.getAllUserRoleTypes().subscribe((response: any) => {
      this.userRoleTypes = response;
    });
  }

  saveUser() {
    this.userService.createUser(this.userCreationBody).subscribe();
    this.router.navigate(['/user/search']);
  }

  setValue() {
    this.userCreationBody.userRole = this.selectedUserRoleType.name;
  }

  showPassword() {
    this.isPasswordShowing === false ? this.isPasswordShowing = true : this.isPasswordShowing = false;
  }
}
