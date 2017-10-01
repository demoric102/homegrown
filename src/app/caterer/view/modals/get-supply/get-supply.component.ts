import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierService } from '../../../../services/supplier';
import { FoodService } from '../../../../services/food';


@Component({
  selector: 'get-supply',
  templateUrl: './get-supply.component.html'
})
export class GetSupplyModalComponent implements OnInit {
  private suppliers$: any;
  private foods$: any;
  @ViewChild('content')
  private content: NgbModal;
  @Input()
  private lga;
  private foodItems = [];
  private invoice = {
    foodItems: []
  };

  constructor(
    private modalService: NgbModal,
    private foodService: FoodService,
    private supplierService: SupplierService,
  ) {

  }

  ngOnInit(): void {
    this.suppliers$ = this.supplierService.getWhereLga(this.lga);
    this.foods$ = this.foodService.getAll();
  }

  generateInvoice() {
    console.log(this.invoice);
    // this.catererService.createCaterer(this.supplier).subscribe((response) => {
    //   // this.router.navigate( ['/'] );
    //   console.info(response);
    // }, (reason) => {
    //   console.warn(reason);
    // })
  }
  
  open() {
    this.modalService.open(this.content).result.then((result) => {
    }, (reason) => {
    });
  }
}
