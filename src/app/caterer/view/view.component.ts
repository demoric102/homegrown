import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { Invoice } from "../../models/invoice";
import { CatererService } from "../../services/caterer";
import { InvoiceService } from "../../services/invoice";
import { LgaService } from "../../services/lga";
import { Caterer } from "../../models/caterer";
import { HttpErrorResponse } from "@angular/common/http";
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import * as Moment from 'moment';
import { DATEFORMAT } from "../../shared/format";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  dtOptions: any = {};
  closeResult: string;
  images: any[] = [];
  num = 1;
  private supplier: any = {};
  private caterer: any = {};
  private lgas$: Observable<Array<Lga>>;
  private banks$: Observable<Array<Bank>>;
  private caterer$: Observable<Caterer>;
  private invoice$: Observable<Invoice>;
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
    private invoiceService: InvoiceService,
    private lgaService: LgaService,
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
       this.dtOptions = {
         processing: true,
         serverSide: true,
         dom: '<f<t>p>',
         pagingType: 'simple',
         orderable: false,
         ajax: (data, callback, settings) => {
           this.invoiceService.datatable(data)
             .subscribe((response) => {
               callback(response);
             });
         },
         rowCallback: (row: Node, data: any[] | Object | any, index: number) => {
           const self = this;
           $('td', row).unbind('click');
           $('td', row).bind('click', () => {
             self.router.navigate(['/invoice/view',data.id])
           });
           return row;
         },
         columns: [
           {
             data: 'id',
             width: '20%',
             orderable: true,
           },
           {
             data: 'supplier',
             width: '20%',
             orderable: true,
           },
           {
             data: 'createdAt',
             width: '30%',
             orderable: true,
             render: function (data, type, row, meta: any) {
               return Moment(data).calendar(null, DATEFORMAT);
             }
           }
         ],
         order: [[3, 'desc']],
         lengthMenu: [20, 30, 50],
         pageLength: 20,
         autoWidth: false,
         deferRender: true,
         stateSave: true,
         scrollX: true,
         scrollY: 'auto'
       };
  }
    
}
