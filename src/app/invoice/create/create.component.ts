import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { CatererService } from "../../services/caterer";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";
import { BankService } from "../../services/bank";
import { SupplierService } from "../../services/supplier";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  public supplier: any = {};
  public lgas$: Observable<Array<Lga>>;
  public banks$: Observable<Array<Bank>>;
  public progressLoading = false;

  constructor(
    private router: Router,
    private supplierService: SupplierService,
    private lgaService: LgaService,
    private bankService: BankService
  ) { }

  ngOnInit() {
    this.lgas$ = this.lgaService.getAll();
    this.banks$ = this.bankService.getAll();
  }
  
  onSubmit() {
    this.progressLoading = true;
    this.supplierService.createSupplier(this.supplier).subscribe((data)=>{
      console.info(data);
    });
  }
}
