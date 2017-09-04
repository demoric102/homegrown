import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { CatererService } from "../../services/caterer";
import { Caterer } from "../../models/caterer";

const password = new FormControl('', Validators.required);
const confirmPassword = new FormControl('', CustomValidators.equalTo(password));

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  public form: FormGroup;
  constructor(private fb: FormBuilder, private router: Router, private catererService: CatererService) {}

  ngOnInit() {
    this.form = this.fb.group( {
      uname: [null , Validators.compose ( [ Validators.required ] )],
      password: password,
      confirmPassword: confirmPassword
    } );
  }

  createSupplier(): void {
    alert('yay');
    let caterer: Caterer = new Caterer();
    caterer.firstname = 'Ade';
    this.catererService.createCaterer(caterer).subscribe((response)=>{
      console.log(response);
    }, (reason)=>{
      console.log(reason);
    })
  }

  onSubmit() {
    this.router.navigate( ['/'] );
  }

}
