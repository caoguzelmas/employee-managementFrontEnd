import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppLayoutComponent} from './layout/app-layout/app-layout.component';


const routes: Routes = [
  { path: '', component: AppLayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'dashboard',  loadChildren: () => import('./dashboard/dashboard.module').then(module => module.DashboardModule) },
      { path: 'employee', loadChildren: () => import('./modules/employee/employee.module').then(module => module.EmployeeModule) },
      { path: 'expense', loadChildren: () => import('./modules/expense/expense.module').then(module => module.ExpenseModule) },
      { path: 'leave', loadChildren: () => import('./modules/leave/leave.module').then(module => module.LeaveModule) },
      { path: 'time-sheet', loadChildren: () => import('./modules/time-sheet/time-sheet.module').then(module => module.TimeSheetModule) },
      { path: 'user', loadChildren: () => import('./modules/user/user.module').then(module => module.UserModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
