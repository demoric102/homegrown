import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { CatererService } from "../../services/caterer";
import { Router } from "@angular/router";
import { LgaService } from "../../services/lga";
import * as Moment from 'moment';
import { DATEFORMAT } from "../../shared/format";


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  private supplier: any = {};
  private lgas$: Observable<Array<Lga>>;
  private banks$: Observable<Array<Bank>>;
  dtOptions: any = {};

  constructor(
    private router: Router,
    private catererService: CatererService,
    private lgaService: LgaService
  ) { }

  ngOnInit() {
    this.lgas$ = this.lgaService.getAll();
    const that = this;
    this.dtOptions = {
      processing: true,
      serverSide: true,
      dom: '<f<t>p>',
      pagingType: 'simple',
      orderable: false,
      ajax: (data, callback, settings) => {
        this.catererService.datatable(data)
          .subscribe((response) => {
            callback(response);
          });
      },
      columns: [
        {
          data: 'firstname',
          width: '20%',
          orderable: true,
        },
        {
          data: 'lastname',
          width: '20%',
          orderable: true,
        },
        {
          data: 'phone',
          width: '20%',
          orderable: false,
        },
        {
          data: 'lga.name',
          width: '20%',
          orderable: false,
        },
        {
          data: 'createdAt',
          width: '20%',
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
