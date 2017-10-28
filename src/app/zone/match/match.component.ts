import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { CatererService } from "../../services/caterer";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";
import { Zone } from '../../models/zone';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  public zone: any = {};
  public banks$: Observable<Array<Bank>>;
  public lgas$: Observable<Array<Lga>>;
  public zones$: Observable<Array<Zone>>;

  constructor(
    private router: Router,
    private lgaService: LgaService
  ) { }

  ngOnInit() {
    this.lgas$ = this.lgaService.getAll();
    this.zones$ = null;
  }
  
  onSubmit() {
    console.log(this.zone);
  }
}
