import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SupplierService } from '../../../../services/supplier';
import { FoodService } from '../../../../services/food';
import { CatererService } from '../../../../services/caterer';


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
  private invoice = {};

  constructor(
    private modalService: NgbModal,
    private catererService: CatererService,
  ) {

  }
  
  ngOnInit(): void {
    // this.foods$ = this.foodService.getAll();
  }

  onSubmit() {
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
