import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router } from "@angular/router";
import { SupplierService } from "../../services/supplier";
import * as Moment from 'moment';
import { DATEFORMAT } from "../../shared/format";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  dtOptions: any = {};

  constructor(
    private router: Router,
    private supplierService: SupplierService,
  ) { }

  ngOnInit() {
    const that = this;
    this.dtOptions = {
      processing: true,
      serverSide: true,
      dom: '<f<t>p>',
      pagingType: 'simple',
      orderable: false,
      ajax: (data, callback, settings) => {
        this.supplierService.datatable(data)
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

}
