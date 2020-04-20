import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/User';
import {UserService} from '../services/user.service';

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

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.filterBodyUser = new User();
    this.cols = [
      { field: this.filterBodyUser.userId, header: 'User ID' },
      { field: this.filterBodyUser.userName, header: 'Username' },
      { field: this.filterBodyUser.userRole, header: 'User Role' },
      { field: this.filterBodyUser.employee, header: 'Employee' },
      { field: this.filterBodyUser.createdAt, header: 'Creation Date' }
    ];
    this.paginate({page: 0, size: 5});
  }

  paginate($event: any) {
    const page = $event.page;
    const size = $event.size;
    this.userService.getAllUsersWithPagination(page, size).subscribe((response: any) => {
      this.users = response.content;
    });
  }

}
