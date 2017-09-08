import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { CatererService } from "../../services/caterer";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  private supplier: any = {};
  private lgas$: Observable<Array<Lga>>;
  private banks$: Observable<Array<Bank>>;

  constructor(
    private router: Router,
    private catererService: CatererService,
    private lgaService: LgaService
  ) { }

  ngOnInit() {
    this.lgas$ = this.lgaService.getAll();
  }
  
  onSubmit() {
    console.log(this.supplier);
    this.catererService.createCaterer(this.supplier).subscribe((response) => {
      // this.router.navigate( ['/'] );
      console.info(response);
    }, (reason) => {
      console.warn(reason);
    })
  }
}
