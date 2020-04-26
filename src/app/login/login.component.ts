import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {AuthenticationService} from '../security/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  currentUser: User;
  showSpinner: any;
  returnUrl: string;
  error = '';
  loading = false;

  constructor(private authenticationService: AuthenticationService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.currentUser = new User();
    this.authenticationService.logout();
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl || '/';
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.currentUser.userName, this.currentUser.password)
      .pipe(first())
      .subscribe(data => {
        this.router.navigate(['/dashboard']);
        this.loading = false;
        },
        error => {
        this.loading = false;
        this.error = error;
        });
  }
}
