import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './layout/header/header.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ExpenseSearchComponent } from './modules/expense/expense-search/expense-search.component';
import { ExpenseDetailComponent } from './modules/expense/expense-detail/expense-detail.component';
import { EmployeeSearchComponent } from './modules/employee/employee-search/employee-search.component';
import { EmployeeDetailComponent } from './modules/employee/employee-detail/employee-detail.component';
import { LeaveSearchComponent } from './modules/leave/leave-search/leave-search.component';
import { LeaveDetailComponent } from './modules/leave/leave-detail/leave-detail.component';
import { LeaveCreateComponent } from './modules/leave/leave-create/leave-create.component';
import { EmployeeCreateComponent } from './modules/employee/employee-create/employee-create.component';
import { ExpenseCreateComponent } from './modules/expense/expense-create/expense-create.component';
import { TimeSheetCreateComponent } from './modules/time-sheet/time-sheet-create/time-sheet-create.component';
import { TimeSheetDetailComponent } from './modules/time-sheet/time-sheet-detail/time-sheet-detail.component';
import { TimeSheetSearchComponent } from './modules/time-sheet/time-sheet-search/time-sheet-search.component';
import { UserCreateComponent } from './modules/user/user-create/user-create.component';
import { UserDetailComponent } from './modules/user/user-detail/user-detail.component';
import { UserSearchComponent } from './modules/user/user-search/user-search.component';
import {ApiService} from './services/api.service';
import {EmployeeService} from './modules/employee/services/employee.service';
import {ButtonModule, PanelMenuModule, TableModule, TabMenuModule} from 'primeng';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppLayoutComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    ExpenseSearchComponent,
    ExpenseDetailComponent,
    EmployeeSearchComponent,
    EmployeeDetailComponent,
    LeaveSearchComponent,
    LeaveDetailComponent,
    LeaveCreateComponent,
    EmployeeCreateComponent,
    ExpenseCreateComponent,
    TimeSheetCreateComponent,
    TimeSheetDetailComponent,
    TimeSheetSearchComponent,
    UserCreateComponent,
    UserDetailComponent,
    UserSearchComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        TableModule,
        ButtonModule,
        PanelMenuModule,
        TabMenuModule
    ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
