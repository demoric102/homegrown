import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService } from "../../services/user";
import { User } from "../../models/user";
import { Observable } from "rxjs/Observable";
import { Auth } from '../../models/auth';
import { AsyncLocalStorage } from 'angular-async-local-storage';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  private signin: User = new User();
  constructor(private router: Router, private userService: UserService, protected localStorage: AsyncLocalStorage) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.loginUser(this.signin).subscribe((response: Auth) => {
      localStorage.setItem('token', response.token);
      localStorage.setItem('uid', response.uid);
      let url = this.userService.getRedirectUrl();
      this.router.navigate([url]);
    }, (reason) => {
      console.warn(reason);
    })
  }


}
