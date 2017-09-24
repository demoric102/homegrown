import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { CatererService } from "../../services/caterer";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";
import { BankService } from "../../services/bank";
import { SchoolService } from "../../services/school";
import { HttpErrorResponse } from "@angular/common/http";
import { School } from "../../models/school";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private caterer: any = {};
  private lgas$: Observable<Array<Lga>>;
  private banks$: Observable<Array<Bank>>;
  private schools$: Observable<Array<School>>;
  private progressLoading = false;
  private alert = {
    visible: false,
    status: null,
    message: ''
  }

  constructor(
    private router: Router,
    private catererService: CatererService,
    private lgaService: LgaService,
    private schoolService: SchoolService,
    private bankService: BankService
  ) { }

  ngOnInit() {
    this.lgas$ = this.lgaService.getAll();
    this.banks$ = this.bankService.getAll();
    this.schools$ = this.schoolService.getAll();
  }
  
  onSubmit() {
    let that = this;
    this.progressLoading = true;
    that.alert = {
      visible: false,
      status: null,
      message: ''
    };
    this.catererService.createCaterer(this.caterer)
    .subscribe((data) => {
      that.caterer = {};
      that.alert = {
        visible: true,
        status: 200,
        message: ''.concat('A new caterer has been created.')
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
