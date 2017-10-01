import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierService } from '../../../../services/supplier';
import { FoodService } from '../../../../services/food';
import { Invoice } from '../../../../models/invoice';
import { InvoiceItem } from '../../../../models/invoiceItem';
import { InvoiceService } from '../../../../services/invoice';


@Component({
  selector: 'get-supply',
  templateUrl: './get-supply.component.html'
})
export class GetSupplyModalComponent implements OnInit {
  private suppliers$: any;
  private foods$: any;
  private foods: any;
  @ViewChild('content')
  private content: NgbModal;
  @Input()
  private caterer;
  @Input()
  private lga;
  private foodItems = [];
  private invoice = new Invoice();

  constructor(
    private modalService: NgbModal,
    private foodService: FoodService,
    private supplierService: SupplierService,
    private invoiceService: InvoiceService,
  ) {

  }

  ngOnInit(): void {
    this.suppliers$ = this.supplierService.getWhereLga(this.lga);
    this.foods$ = this.foodService.getAll().do((foods) => {
      this.foods = foods;
    });
  }

  generateInvoice() {
    this.invoice.caterer = this.caterer;
    this.invoice.invoiceItems = [];
    for (let foodId in this.foodItems) {
      let foodQuantity = this.foodItems[foodId];
      if (foodQuantity) {
        let foodObject = this.foods.find(x => x.id === foodId);
        let food = new InvoiceItem();
        food.name = foodObject.name;
        food.quantity = foodQuantity;
        food.unitPrice = foodObject.unitPrice;
        this.invoice.invoiceItems.push(food);
      }
    }
    console.log(this.invoice);
    this.invoiceService.createInvoice(this.invoice).subscribe((response) => {
      // this.router.navigate( ['/'] );
      console.info(response);
    }, (reason) => {
      console.warn(reason);
    })
  }

  open() {
    this.modalService.open(this.content).result.then((result) => {
    }, (reason) => {
    });
  }
}
