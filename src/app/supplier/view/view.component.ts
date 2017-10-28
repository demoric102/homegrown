import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Supplier } from "../../models/supplier";
import { SupplierService } from "../../services/supplier";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  public supplier: any = {};
  public supplier$: Observable<Supplier>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private supplierService: SupplierService
  ) {
  }

  ngOnInit() {
    const that = this;
    that.supplier$ = this.route.params
       .switchMap((data) => this.supplierService.getSupplier(data.id));
  }

  onSubmit() {
    // this.catererService.createCaterer(this.supplier).subscribe((response) => {
    //   // this.router.navigate( ['/'] );
    //   console.info(response);
    // }, (reason) => {
    //   console.warn(reason);
    // })
  }
}
