import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
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
import { EmployeeSearchComponent } from './modules/employee/employee-search/employee-search.component';
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
import {
  ButtonModule,
  CalendarModule, DialogModule,
  DropdownModule,
  MessageModule,
  PanelMenuModule,
  PanelModule, PasswordModule, SplitButtonModule,
  TableModule,
  TabMenuModule
} from 'primeng';
import {FormsModule} from '@angular/forms';
import {JwtInterceptor} from './security/jwt.interceptor';
import {AuthenticationService} from './security/authentication.service';
import {AuthGuard} from './security/auth.guard';
import {ErrorInterceptor} from './security/authentication.interceptor';
import {CommonModule} from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AppLayoutComponent,
    FooterComponent,
    DashboardComponent,
    LoginComponent,
    ExpenseSearchComponent,
    EmployeeSearchComponent,
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
    TabMenuModule,
    PanelModule,
    FormsModule,
    CalendarModule,
    DropdownModule,
    MessageModule,
    DialogModule,
    PasswordModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    SplitButtonModule
  ],
  providers: [
    ApiService,
    AuthenticationService,
    AuthGuard,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
