webpackJsonp([15],{

/***/ "../../../../../src/app/invoice/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create Supplier\n      </div>\n      <div class=\"card-block\">\n        <ng-template #progressSpinner>\n          <div class=\"loader02\"></div>\n        </ng-template>\n        <form #createForm=\"ngForm\" *ngIf=\"!progressLoading; else progressSpinner\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"firstname.errors && firstname.touched\">\n                <label for=\"firstname\">\n                      First Name\n                    </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"supplier.firstname\"\n                  minlength=\"2\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"firstname.errors && firstname.touched\">\n                  <small [hidden]=\"!firstname.errors.required\">\n                    First name is required.\n                  </small>\n                  <small [hidden]=\"!firstname.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"lastname.errors && lastname.touched\">\n                <label for=\"lastname\">\n                  Last Name\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"supplier.lastname\"\n                  minlength=\"2\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"lastname.errors && lastname.touched\">\n                  <small [hidden]=\"!lastname.errors.required\">\n                    Last name is required.\n                  </small>\n                  <small [hidden]=\"!lastname.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"phone.errors && phone.touched\">\n                <label for=\"phone\">\n                  Phone Number\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" name=\"Phone\" #phone=\"ngModel\" [(ngModel)]=\"supplier.phone\"\n                  minlength=\"11\" maxlength=\"15\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"phone.errors && phone.touched\">\n                  <small [hidden]=\"!phone.errors.required\">\n                    Your Phone Number is required.\n                  </small>\n                  <small [hidden]=\"!phone.errors.minlength\">\n                    Min characters is 11\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"email.errors && email.touched\">\n                <label for=\"email\">\n                  Email\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"supplier.email\" minlength=\"5\"\n                  required/>\n                <div class=\"form-control-feedback\" *ngIf=\"email.errors && email.touched\">\n                  <small [hidden]=\"!email.errors.required\">\n                    Your Email is required.\n                  </small>\n                  <small [hidden]=\"!email.errors.minlength\">\n                    Min characters is 5\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <fieldset class=\"form-group\" [class.has-danger]=\"address.errors && address.touched\">\n            <label for=\"address\">\n                  Address\n                </label>\n            <textarea class=\"form-control\" placeholder=\"Address\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"supplier.address\" minlength=\"20\"\n              required>\n                </textarea>\n            <div class=\"form-control-feedback\" *ngIf=\"address.errors && address.touched\">\n              <small [hidden]=\"!address.errors.required\">\n                    Your Address is required.\n                  </small>\n              <small [hidden]=\"!address.errors.minlength\">\n                    Min characters is 20\n                  </small>\n            </div>\n          </fieldset>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"accountNumber.errors && accountNumber.touched\">\n                <label for=\"accountNumber\">\n                  Account Number\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Account Number\" name=\"accountNumber\" #accountNumber=\"ngModel\" [(ngModel)]=\"supplier.accountNumber\"\n                  minlength=\"10\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"accountNumber.errors && accountNumber.touched\">\n                  <small [hidden]=\"!accountNumber.errors.required\">\n                    Account Number is required.\n                  </small>\n                  <small [hidden]=\"!accountNumber.errors.minlength\">\n                    Min characters is 10\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"bank.errors && bank.touched\">\n                <label for=\"bank\">\n                Bank\n              </label>\n                <select name=\"bank\" class=\"form-control\" #bank=\"ngModel\" [(ngModel)]=\"supplier.bank\">\n                      <option disabled></option>\n                      <option *ngFor=\"let bank of (banks$ | async)\" [value]=\"bank.code\">{{bank?.name}}</option>\n                    </select>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"lga.errors && lga.touched\">\n                <label for=\"lga\">\n                LGA\n              </label>\n                <select name=\"lga\" class=\"form-control\" #lga=\"ngModel\" [(ngModel)]=\"supplier.lga\">\n                      <option disabled></option>\n                      <option *ngFor=\"let lga of (lgas$ | async)\" [value]=\"lga.id\">{{lga?.name}}</option>\n                  </select>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!createForm.valid\">Create</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/invoice/create/create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bank__ = __webpack_require__("../../../../../src/app/services/bank.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_supplier__ = __webpack_require__("../../../../../src/app/services/supplier.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateComponent = (function () {
    function CreateComponent(router, supplierService, lgaService, bankService) {
        this.router = router;
        this.supplierService = supplierService;
        this.lgaService = lgaService;
        this.bankService = bankService;
        this.supplier = {};
        this.progressLoading = false;
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
        this.banks$ = this.bankService.getAll();
    };
    CreateComponent.prototype.onSubmit = function () {
        this.progressLoading = true;
        this.supplierService.createSupplier(this.supplier).subscribe(function (data) {
            console.info(data);
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/invoice/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice/create/create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_supplier__["a" /* SupplierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_supplier__["a" /* SupplierService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lga__["a" /* LgaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_bank__["a" /* BankService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bank__["a" /* BankService */]) === "function" && _d || Object])
], CreateComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoice/invoice.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__("../../../../angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__invoice_routing__ = __webpack_require__("../../../../../src/app/invoice/invoice.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_create_component__ = __webpack_require__("../../../../../src/app/invoice/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_list_component__ = __webpack_require__("../../../../../src/app/invoice/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_view_component__ = __webpack_require__("../../../../../src/app/invoice/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceModule", function() { return InvoiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var InvoiceModule = (function () {
    function InvoiceModule() {
    }
    return InvoiceModule;
}());
InvoiceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__invoice_routing__["a" /* InvoiceRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_13_angular_datatables__["a" /* DataTablesModule */],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["f" /* NgbTabsetModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__create_create_component__["a" /* CreateComponent */], __WEBPACK_IMPORTED_MODULE_11__list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_12__view_view_component__["a" /* ViewComponent */]]
    })
], InvoiceModule);

//# sourceMappingURL=invoice.module.js.map

/***/ }),

/***/ "../../../../../src/app/invoice/invoice.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_create_component__ = __webpack_require__("../../../../../src/app/invoice/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/invoice/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view_component__ = __webpack_require__("../../../../../src/app/invoice/view/view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceRoutes; });



var InvoiceRoutes = [
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_0__create_create_component__["a" /* CreateComponent */],
        data: {
            heading: 'Create Supplier',
            removeFooter: true
        }
    },
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* ListComponent */],
        data: {
            heading: 'List Suppliers',
            removeFooter: true
        }
    },
    {
        path: 'view',
        component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
        data: {
            heading: 'View Supplier',
            removeFooter: true
        }
    }
];
//# sourceMappingURL=invoice.routing.js.map

/***/ }),

/***/ "../../../../../src/app/invoice/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        List of Suppliers\n      </div>\n      <div class=\"card-block\">\n          <table datatable class=\"row-border hover\">\n              <thead>\n                <tr>\n                  <th>ID</th>\n                  <th>First name</th>\n                  <th>Last name</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Foo</td>\n                  <td>Bar</td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Someone</td>\n                  <td>Youknow</td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Iamout</td>\n                  <td>Ofinspiration</td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Yoda</td>\n                  <td>Skywalker</td>\n                </tr>\n                <tr>\n                  <td>5</td>\n                  <td>Patrick</td>\n                  <td>Dupont</td>\n                </tr>\n                <tr>\n                  <td>6</td>\n                  <td>Barack</td>\n                  <td>Obama</td>\n                </tr>\n                <tr>\n                  <td>7</td>\n                  <td>François</td>\n                  <td>Holland</td>\n                </tr>\n                <tr>\n                  <td>8</td>\n                  <td>Michel</td>\n                  <td>Popo</td>\n                </tr>\n                <tr>\n                  <td>9</td>\n                  <td>Chuck</td>\n                  <td>Norris</td>\n                </tr>\n                <tr>\n                  <td>10</td>\n                  <td>Simon</td>\n                  <td>Robin</td>\n                </tr>\n                <tr>\n                  <td>11</td>\n                  <td>Louis</td>\n                  <td>Lin</td>\n                </tr>\n                <tr>\n                  <td>12</td>\n                  <td>Zelda</td>\n                  <td>Link</td>\n                </tr>\n              </tbody>\n            </table>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/invoice/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = (function () {
    function ListComponent(router, catererService, lgaService) {
        this.router = router;
        this.catererService = catererService;
        this.lgaService = lgaService;
        this.supplier = {};
    }
    ListComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
    };
    ListComponent.prototype.onSubmit = function () {
        console.log(this.supplier);
        this.catererService.createCaterer(this.supplier).subscribe(function (response) {
            // this.router.navigate( ['/'] );
            console.info(response);
        }, function (reason) {
            console.warn(reason);
        });
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/invoice/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice/list/list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], ListComponent);

var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/invoice/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"card-block\">\n      <img src=\"assets/images/logo.png\" class=\"avatar-xs mb-3\" alt=\"\">\n  \n      <div class=\"row mb-3\">\n        <div class=\"col\">\n          <h5><strong>Invoice #0001</strong></h5>\n          <p class=\"mb-0\">Issued on 01 Jun 2016</p>\n          <p class=\"mb-0\">Payment due by 31 May 2016</p>\n        </div>\n      </div>\n  \n      <div class=\"row mb-3\">\n        <div class=\"col\">\n          <p class=\"mb-0\">Company LLC</p>\n          <p class=\"mb-0\">company@address.com</p>\n          <p class=\"mb-0\">+012 345 678 90</p>\n        </div>\n      </div>\n  \n      <div class=\"mt-5 mb-5\">\n        <p class=\"mb-0\"><strong>Client Details</strong></p>\n        <p class=\"mb-0\">John Smith</p>\n        <p class=\"mb-0\">1234 Main</p>\n        <p class=\"mb-0\">Apt. 4B</p>\n        <p class=\"mb-0\">Springfield, ST 54321</p>\n      </div>\n    </div>\n      <div class=\"table-responsive mb-5\">\n        <table class=\"table table-hover mb-0 align-middle\">\n          <thead class=\"thead-inverse\">\n            <tr>\n              <th>Description</th>\n              <th>Unit Price</th>\n              <th>Quantity</th>\n              <th>Amount</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of invoiceItems\">\n              <td>\n                <strong>{{item.title}}</strong><br/>\n                <span class=\"text-muted\">{{item.subtitle}}</span>\n              </td>\n              <td>{{item.price | currency:'USD':true:'1.2-2'}}</td>\n              <td>{{item.quantity}}</td>\n              <td>{{ (item.price * item.quantity) | currency:'USD':true:'1.2-2'}}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    <div class=\"card-block\">\n      \n      <div class=\"row mb-5\">\n        <div class=\"col mt-1 mb-1\">\n          <p class=\"text-uppercase m-0\"><strong>Subtotal</strong></p>\n          <h3 class=\"m-0\">{{getSubTotal() | currency:'USD':true:'1.2-2'}}</h3>\n        </div>\n        <div class=\"col mt-1 mb-1 text-sm-right text-md-left\">\n          <p class=\"text-uppercase m-0\"><strong>Tax (15%)</strong></p>\n          <h3 class=\"m-0\">{{getCalculatedTax() | currency:'USD':true:'1.2-2'}}</h3>\n        </div>\n        <div class=\"col mt-1 mb-1\">\n          <p class=\"text-uppercase m-0\"><strong>Discount</strong></p>\n          <h3 class=\"m-0\">$0.00</h3>\n        </div>\n        <div class=\"col mt-1 mb-1 text-xs-left text-sm-right\">\n          <p class=\"text-uppercase m-0\"><strong>Total</strong></p>\n          <h3 class=\"m-0 text-success\">{{ getTotal() | currency:'USD':true:'1.2-2'}}</h3>\n        </div>\n      </div>\n  \n      <small class=\"p-t-2\">\n        <strong>\n          PAYMENT TERMS AND POLICIES\n        </strong>\n        All accounts are to be paid within 7 days from receipt of invoice. To be paid by cheque or credit card or direct payment online. If account is not paid within 7 days the credits details supplied as confirmation of work undertaken will be charged the agreed\n        quoted fee noted above. If the Invoice remails unpaid. our dept recovery agency, Urban, may charge you a fee of 25% of the unpaid portion of the\n        invoice amount and other legal and collection costs not covered by the fee.\n      </small>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/invoice/view/view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/invoice/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = (function () {
    function ViewComponent(router, catererService, lgaService) {
        this.router = router;
        this.catererService = catererService;
        this.lgaService = lgaService;
        this.images = [];
        this.num = 1;
        this.supplier = {};
        this.invoiceItems = [{
                'title': 'Maintanance',
                'subtitle': 'Monthly web updates for http://www.themeforest.net',
                'price': 250.00,
                'quantity': 1
            }, {
                'title': 'Recurring Bill (Hosting)',
                'subtitle': 'Monthly dedicated VPN web hosting (1 Jan - 30 Jan, 2014)',
                'price': 652.87,
                'quantity': 3
            }, {
                'title': 'Recurring Bill (Domain)',
                'subtitle': '2 year domain name purchase',
                'price': 239.00,
                'quantity': 3
            }, {
                'title': 'Web design',
                'subtitle': 'PSD to HTML Conversion (3 pages)',
                'price': 958.00,
                'quantity': 1
            }];
        this.invoiceTotals = [{
                'subtotal': this.getSubTotal(),
                'tax': this.getCalculatedTax(),
                'discount': 0.00,
                'total': 0
            }];
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
    };
    ViewComponent.prototype.onSubmit = function () {
        console.log(this.supplier);
        this.catererService.createCaterer(this.supplier).subscribe(function (response) {
            // this.router.navigate( ['/'] );
            console.info(response);
        }, function (reason) {
            console.warn(reason);
        });
    };
    ViewComponent.prototype.getSubTotal = function () {
        var total = 0.00;
        for (var i = 1; i < this.invoiceItems.length; i++) {
            total += (this.invoiceItems[i].price * this.invoiceItems[i].quantity);
        }
        return total;
    };
    ViewComponent.prototype.getCalculatedTax = function () {
        return ((15 * this.getSubTotal()) / 100);
    };
    ViewComponent.prototype.getTotal = function () {
        return (this.getSubTotal() + this.getCalculatedTax());
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view',
        template: __webpack_require__("../../../../../src/app/invoice/view/view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/invoice/view/view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], ViewComponent);

var _a, _b, _c;
//# sourceMappingURL=view.component.js.map

/***/ })

});
//# sourceMappingURL=15.chunk.js.map