import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { CatererService } from "../../services/caterer";
import { LgaService } from "../../services/lga";
import { Caterer } from "../../models/caterer";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  closeResult: string;
  images: any[] = [];
  num = 1;
  private supplier: any = {};
  private caterer: any = {};
  private lgas$: Observable<Array<Lga>>;
  private banks$: Observable<Array<Bank>>;
  private caterer$: Observable<Caterer>;
  private progressLoading = false;
  private alert = {
    visible: false,
    status: null,
    message: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private catererService: CatererService,
    private lgaService: LgaService
  ) { }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  ngOnInit() {
    this.lgas$ = this.lgaService.getAll();
    const that = this;
    that.caterer$ = this.route.params
       .switchMap((data) => this.catererService.getCaterer(data.id));
  }
    
}
