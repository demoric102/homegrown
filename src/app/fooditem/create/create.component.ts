import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { FooditemService } from "../../services/fooditem";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";
import { Food } from '../../models/food';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public food = new Food();
  public lgas$: Observable<Array<Lga>>;
  public banks$: Observable<Array<Bank>>;
  public progressLoading = false;
  public alert = {
    visible: false,
    status: null,
    message: ''
  }

  constructor(
    private router: Router,
    private foodItemService: FooditemService,
    private lgaService: LgaService
  ) { }

  ngOnInit() {
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
    this.foodItemService.createFood(this.food)
    .subscribe((data) => {
      that.food = new Food();
      that.alert = {
        visible: true,
        status: 200,
        message: ''.concat('A new Food has been created.')
      };
      that.progressLoading = false;
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
