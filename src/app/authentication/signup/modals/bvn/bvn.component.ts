
import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { Bvn } from "../../../../models/bvn";
import { BvnService } from "../../../../services/bvn";

@Component({
    selector: 'bvn-modal',
    templateUrl: './bvn.component.html',
    encapsulation: ViewEncapsulation.None,
})

export class BvnModalComponent {
    private closeResult: string;
    private verify = new Bvn();
    @ViewChild('content')
    private content;

    constructor(
        private modalService: NgbModal,
    private bvnService: BvnService
) { }

    alert() {
        this.modalService.open(this.content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    open() {
        this.modalService.open(this.content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    verifyOtp() {
        this.bvnService.verify(this.verify).subscribe((response)=>{
            console.log(response);
        });
    }

}
