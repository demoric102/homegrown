import { Component, Input, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { Bank } from "../../models/bank";
import { Lga } from "../../models/lga";
import { UserService } from "../../services/user";
import { LgaService } from "../../services/lga";
import { User } from "../../models/user";
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
  public supplier: any = {};
  public user: any = {};
  public lgas$: Observable<Array<Lga>>;
  public banks$: Observable<Array<Bank>>;
  public user$: Observable<User>;
  public progressLoading = false;
  public alert = {
    visible: false,
    status: null,
    message: ''
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private lgaService: LgaService,
    private modalService: NgbModal
  ) { }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

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
    that.user$ = this.route.params
       .switchMap((data) => this.userService.getUser(data.id));
  }
  
  onSubmit() {
    let that = this;
    this.progressLoading = true;
    that.alert = {
      visible: false,
      status: null,
      message: ''
    };
    this.userService.editUser(this.user)
    .subscribe((data) => {
      that.user = {};
      that.alert = {
        visible: true,
        status: 200,
        message: ''.concat('The modifications have been made.')
      };
      that.progressLoading = false;
      console.info(data);
    }, (error: HttpErrorResponse) => {
      that.progressLoading = false;
      if (error.error instanceof Error) {
        that.alert = {
          visible: true,
          status: error.status,
          message: ''.concat('An error occurred:', error.error.message)
        };
      } else {
        that.alert = {
          visible: true,
          status: error.status,
          message: ''.concat('An error occurred:', error.error.data.invalidAttributes[Object.keys(error.error.data.invalidAttributes)[0]][0].message)
        };
      }
    }, () => {
      that.progressLoading = false;
    });
  }
    
}
