import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { UserService } from "../../services/user";
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
  private user: any = {};
  private lgas$: Observable<Array<Lga>>;
  private banks$: Observable<Array<Bank>>;
  dtOptions: any = {};

  constructor(
    private router: Router,
    private userService: UserService,
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
        this.userService.datatable(data)
          .subscribe((response) => {
            callback(response);
          });
      },
      rowCallback: (row: Node, data: any[] | Object | any, index: number) => {
        const self = this;
        $('td', row).unbind('click');
        $('td', row).bind('click', () => {
          self.router.navigate(['/user/view',data.id])
        });
        return row;
      }, 
      columns: [
        {
          data: 'firstname',
          width: '10%',
          orderable: true,
          render: function (data, type, row){
            return '<img src="https://randomuser.me/api/portraits/men/62.jpg" class="avatar-md rounded" alt="">';
          }
        },
        {
          data: 'firstname',
          width: '20%',
          orderable: true,
          render: function (data, type, row){
            console.log(data, type, row);
            return '<a href="#" class="d-block text-capitalize">'+(row.firstname)+' '+(row.lastname)+'</a><small>'+(row.lastname)+'</small>';
          }
        },
        {
          data: 'createdAt',
          width: '20%',
          orderable: true,
          render: function (data, type, row, meta: any) {
            return Moment(data).calendar(null, DATEFORMAT);
          }
        },
        {
          data: 'lastname',
          width: '20%',
          orderable: true,
          render: function (data, type, row){
            return '<span class="badge badge-default text-uppercase">'+(data)+'</span>';
          }
        },
        {
          data: 'email',
          width: '20%',
          orderable: false,
          render: function (data, type, row){
            return '<a href="#">'+(data)+'</a>';
          }
        },
        {
          data: 'phone',
          width: '20%',
          orderable: false,
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
    console.log(this.user);
    this.userService.createUser(this.user).subscribe((response) => {
      // this.router.navigate( ['/'] );
      console.info(response);
    }, (reason) => {
      console.warn(reason);
    })
  }
}
