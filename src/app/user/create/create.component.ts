import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { UserService } from "../../services/user";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";
import { BankService } from "../../services/bank";
import { SchoolService } from "../../services/school";
import { HttpErrorResponse } from "@angular/common/http";
import { School } from "../../models/school";
import { RoleService } from '../../services/role';
import { Role } from '../../models/role';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public user: any = {};
  public roles$: Observable<Array<Role>>;
  public lgas$: Observable<Array<Lga>>;
  public progressLoading = false;
  public alert = {
    visible: false,
    status: null,
    message: ''
  }

  constructor(
    private router: Router,
    private userService: UserService,
    private roleService: RoleService,
    private lgaService: LgaService
  ) { }

  ngOnInit() {
    this.roles$ = this.roleService.getAll();
    this.lgas$ = this.lgaService.getAll();
  }
  
  onSubmit() {
    let that = this;
    this.progressLoading = true;
    that.alert = {
      visible: false,
      status: null,
      message: ''
    };
    this.userService.createUser(this.user)
    .subscribe((data) => {
      that.user = {};
      that.alert = {
        visible: true,
        status: 200,
        message: ''.concat('A new user has been created.')
      };
      that.progressLoading = false;
      console.info(data);
    }, (error: HttpErrorResponse) => {
      that.progressLoading = false;
      if (error.error instanceof Error) {
        that.alert = {
          visible: true,
          status: error.status,
          message: ''.concat('An error occurred:', error.error.message)
        };
      } else {
        that.alert = {
          visible: true,
          status: error.status,
          message: ''.concat('An error occurred:', error.error.data.invalidAttributes[Object.keys(error.error.data.invalidAttributes)[0]][0].message)
        };
      }
    }, () => {
      that.progressLoading = false;
    });
    
  }
}
