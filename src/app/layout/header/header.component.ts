import { Component, OnInit } from '@angular/core';
import {Employee} from '../../model/Employee';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: any[];
  sampleEmployee: Employee;
  splitButtonItems: any[];

  constructor() { }


  ngOnInit(): void {
    this.sampleEmployee = environment.currentUser.employee;
    this.items = [
      {label: 'Dashboard',
       routerLink: '/dashboard'},
      {label: 'Employees',
       items: [
         {label: 'Search Employees', icon: 'pi pi-fw pi-filter', routerLink: '/employee/search'},
         {label: 'Create Employee (ONLY ADMIN)', icon: 'pi pi-fw pi-filter', routerLink: '/employee/create'}
       ]},
      {label: 'Expenses',
        items: [
          {label: 'Search Expenses (ONLY ADMIN)', icon: 'pi pi-fw pi-filter', routerLink: '/expense/search'},
          {label: 'Create Expense', icon: 'pi pi-fw pi-filter', routerLink: '/expense/create'}
        ]},
      {label: 'Leaves',
        items: [
          {label: 'Search Leaves (ONLY ADMIN)', icon: 'pi pi-fw pi-filter', routerLink: '/leave/search'},
          {label: 'Create Leave', icon: 'pi pi-fw pi-filter', routerLink: '/leave/create'}
        ]},
      {label: 'Time Sheets',
        items: [
          {label: 'Search Time Sheets (ONLY ADMIN)', icon: 'pi pi-fw pi-filter', routerLink: '/time-sheet/search'},
          {label: 'CreateTime Sheets', icon: 'pi pi-fw pi-filter', routerLink: '/time-sheet/create'}
        ]},
      {label: 'Users (ADMIN ONLY)',
        items: [
          {label: 'Search Users', icon: 'pi pi-fw pi-filter', routerLink: '/user/search'},
          {label: 'Create User', icon: 'pi pi-fw pi-filter', routerLink: '/user/create'}
        ]}
    ];
    this.splitButtonItems = [
      {label: 'Profile Detail', icon: 'pi pi-info' , routerLink: ['/employee-detail']},
      {label: 'Sign Out', icon: 'pi pi-cog'},
      {separator: true},
      {label: 'Update', icon: 'pi pi-refresh'},
      {label: 'Delete', icon: 'pi pi-times'},
    ];
  }
}
