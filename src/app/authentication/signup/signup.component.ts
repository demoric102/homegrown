import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CatererService } from "../../services/caterer";
import { Caterer } from "../../models/caterer";
import { Supplier } from "../../models/supplier";
import { LgaService } from "../../services/lga";
import { Observable } from "rxjs/Observable";
import { Lga } from "../../models/lga";
import { Bank } from "../../models/bank";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signup: any = {};
  public lgas$: Observable<Array<Lga>>;
  public banks$: Observable<Array<Bank>>;
  
  constructor(
    private router: Router,
    private catererService: CatererService,
    private lgaService: LgaService
  ) { }

  ngOnInit() {
    this.lgas$ = this.lgaService.getAll();
  }
  
  onSubmit() {
    console.log(this.signup);
    this.catererService.createCaterer(this.signup).subscribe((response) => {
      // this.router.navigate( ['/'] );
      console.info(response);
    }, (reason) => {
      console.warn(reason);
    })
  }

}
