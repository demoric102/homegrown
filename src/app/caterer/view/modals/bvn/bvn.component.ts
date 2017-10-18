
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
    private send = new Bvn();
    private verify = new Bvn();
    @ViewChild('content')
    private content;
    private tokenValidator = false;

    constructor(
        private modalService: NgbModal,
        private bvnService: BvnService
    ) { }

    open() {
        this.modalService.open(this.content).result.then((result) => {
            this.tokenValidator = false;
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    sendOtp() {
        this.bvnService.sendToken(this.send).subscribe((response: any) => {
            this.tokenValidator = true;
            this.verify.transactionreference = response.transactionReference;
            this.verify.bvn = this.send.bvn;
            this.verify.otp = this.send.otp;
        });
    }

    verifyOtp() {
        this.bvnService.verify(this.verify).subscribe((response) => {
            
        });
    }

}
