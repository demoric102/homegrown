import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { CatererService } from "../../services/caterer";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  images: any[] = [];
  num = 1;
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

  invoiceItems: any = [{
    'title': 'Maintanance',
    'subtitle': 'Monthly web updates for http://www.themeforest.net',
    'price': 250.00,
    'quantity': 1
  }, {
    'title': 'Recurring Bill (Hosting)',
    'subtitle': 'Monthly dedicated VPN web hosting (1 Jan - 30 Jan, 2014)',
    'price': 652.87,
    'quantity': 3
  }, {
    'title': 'Recurring Bill (Domain)',
    'subtitle': '2 year domain name purchase',
    'price': 239.00,
    'quantity': 3
  }, {
    'title': 'Web design',
    'subtitle': 'PSD to HTML Conversion (3 pages)',
    'price': 958.00,
    'quantity': 1
  }];

  invoiceTotals: any = [{
    'subtotal': this.getSubTotal(),
    'tax': this.getCalculatedTax(),
    'discount': 0.00,
    'total': 0
  }];

  getSubTotal() {
    let total = 0.00;
    for (let i = 1; i < this.invoiceItems.length; i++) {
      total += (this.invoiceItems[i].price * this.invoiceItems[i].quantity);
    }
    return total;
  }

  getCalculatedTax() {
    return ((15 * this.getSubTotal()) / 100);
  }

  getTotal() {
    return (this.getSubTotal() + this.getCalculatedTax());
  }
}
