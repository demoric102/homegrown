import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CatererService } from "../../services/caterer";
import { Caterer } from "../../models/caterer";
import { Supplier } from "../../models/supplier";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private signup: any = {};

  constructor(private router: Router, private catererService: CatererService) { }

  ngOnInit() {

  }

  onSubmit() {
    this.catererService.createCaterer(this.signup).subscribe((response) => {
      // this.router.navigate( ['/'] );
      console.info(response);
    }, (reason) => {
      console.warn(reason);
    })
  }

}
