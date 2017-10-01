import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierService } from '../../../../services/supplier';
import { FoodService } from '../../../../services/food';
import { CatererService } from '../../../../services/caterer';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'edit-caterer',
  templateUrl: './edit-caterer.component.html'
})
export class EditCatererModalComponent implements OnInit {
  private suppliers$: any;
  private foods$: any;
  @ViewChild('content')
  private content: NgbModal;
  @Input()
  private caterer;
  private progressLoading = false;
  private alert = {
    visible: false,
    status: null,
    message: ''
  }

  constructor(
    private modalService: NgbModal,
    private catererService: CatererService,
  ) {

  }
  
  ngOnInit(): void {
    // this.foods$ = this.foodService.getAll();
  }

  
  onSubmit() {
    let that = this;
    this.progressLoading = true;
    that.alert = {
      visible: false,
      status: null,
      message: ''
    };
    this.catererService.editCaterer(this.caterer)
    .subscribe((data) => {
      that.caterer = {};
      that.alert = {
        visible: true,
        status: 200,
        message: ''.concat('The modifications have been made.')
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

  open() {
    this.modalService.open(this.content).result.then((result) => {
    }, (reason) => {
    });
  }
}
