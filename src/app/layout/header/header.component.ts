import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/Employee';
import {MenuItem} from 'primeng';
import {CurrentUser} from '../../model/CurrentUser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  adminPanelItems: any[];
  employeePanelItems: any[];
  sampleEmployee: Employee;
  splitButtonItems: MenuItem[];
  currentUser: CurrentUser;
  sidenav: any;

  constructor() { }


  ngOnInit(): void {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser.user.userName === 'Admin') {
      this.adminPanelItems = [
        {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/dashboard'},
        {label: 'Employees', icon: 'pi pi-fw pi-users',
          items: [
            {label: 'Search Employees', icon: 'pi pi-fw pi-users', routerLink: '/employee/search'},
            {label: 'Create Employee (ONLY ADMIN)', icon: 'pi pi-fw pi-user-plus', routerLink: '/employee/create'}
          ]},
        {label: 'Expenses', icon: 'pi pi-fw pi-money-bill',
          items: [
            {label: 'All Created Expense Requests', icon: 'pi pi-fw pi-money-bill', routerLink: '/expense/search'}
          ]},
        {label: 'Leaves', icon: 'pi pi-fw pi-briefcase',
          items: [
            {label: 'All Created Leave Requests', icon: 'pi pi-fw pi-filter', routerLink: '/leave/search'}
          ]},
        {label: 'Time Sheets', icon: 'pi pi-fw pi-calendar',
          items: [
            {label: 'All Created Time Sheets', icon: 'pi pi-fw pi-calendar', routerLink: '/time-sheet/search'}
          ]},
        {label: 'Users', icon: 'pi pi-fw pi-key',
          items: [
            {label: 'All Users', icon: 'pi pi-fw pi-key', routerLink: '/user/search'},
            {label: 'Create User', icon: 'pi pi-fw pi-plus-circle', routerLink: '/user/create'}
          ]}
      ];
    } else {
      this.employeePanelItems = [
        {label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: '/dashboard'},
        {label: ' All Employees', icon: 'pi pi-fw pi-users',
          items: [
            {label: 'All Employees', icon: 'pi pi-fw pi-users', routerLink: '/employee/search'}
          ]},
        {label: 'Expense Transactions', icon: 'pi pi-fw pi-money-bill',
          items: [
            {label: 'My Expense Requests', icon: 'pi pi-fw pi-money-bill', routerLink: '/expense/detail'},
            {label: 'Create Expense Request', icon: 'pi pi-fw pi-plus-circle', routerLink: '/expense/create'}
          ]},
        {label: 'Leave Transactions', icon: 'pi pi-fw pi-briefcase',
          items: [
            {label: 'My Leave Requests', icon: 'pi pi-fw pi-briefcase', routerLink: '/leave/detail'},
            {label: 'Create Leave Request', icon: 'pi pi-fw pi-plus-circle', routerLink: '/leave/create'}
          ]},
        {label: 'Time Sheet Transactions', icon: 'pi pi-fw pi-calendar',
          items: [
            {label: 'My Time Sheets / Create Time Sheet', icon: 'pi pi-fw pi-calendar-plus', routerLink: '/time-sheet/create'}
          ]},
        {label: 'User Transactions', icon: 'pi pi-fw pi-key',
          items: [
            {label: 'My User Profile', icon: 'pi pi-fw pi-key', routerLink: '/user/detail'}
          ]}
      ];
    }

    this.splitButtonItems = [
      {label: 'Profile Detail', icon: 'pi pi-info' , routerLink: ['/employee/detail']},
      {label: 'Sign Out', icon: 'pi pi-cog', routerLink: ['/login'] }
    ];
  }
}
