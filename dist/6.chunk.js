webpackJsonp([6],{

/***/ "../../../../../src/app/caterer/caterer.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_create_component__ = __webpack_require__("../../../../../src/app/caterer/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_list_component__ = __webpack_require__("../../../../../src/app/caterer/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__caterer_routing__ = __webpack_require__("../../../../../src/app/caterer/caterer.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_view_component__ = __webpack_require__("../../../../../src/app/caterer/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__view_modals_get_supply_get_supply_component__ = __webpack_require__("../../../../../src/app/caterer/view/modals/get-supply/get-supply.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__view_modals_edit_caterer_edit_caterer_component__ = __webpack_require__("../../../../../src/app/caterer/view/modals/edit-caterer/edit-caterer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__view_modals_bvn_bvn_component__ = __webpack_require__("../../../../../src/app/caterer/view/modals/bvn/bvn.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatererModule", function() { return CatererModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var CatererModule = (function () {
    function CatererModule() {
    }
    return CatererModule;
}());
CatererModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__caterer_routing__["a" /* CatererRoutes */]),
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
        declarations: [__WEBPACK_IMPORTED_MODULE_9__create_create_component__["a" /* CreateComponent */], __WEBPACK_IMPORTED_MODULE_10__list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_12__view_view_component__["a" /* ViewComponent */], __WEBPACK_IMPORTED_MODULE_14__view_modals_get_supply_get_supply_component__["a" /* GetSupplyModalComponent */], __WEBPACK_IMPORTED_MODULE_15__view_modals_edit_caterer_edit_caterer_component__["a" /* EditCatererModalComponent */], __WEBPACK_IMPORTED_MODULE_16__view_modals_bvn_bvn_component__["a" /* BvnModalComponent */]]
    })
], CatererModule);

//# sourceMappingURL=caterer.module.js.map

/***/ }),

/***/ "../../../../../src/app/caterer/caterer.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_create_component__ = __webpack_require__("../../../../../src/app/caterer/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/caterer/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view_component__ = __webpack_require__("../../../../../src/app/caterer/view/view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatererRoutes; });



var CatererRoutes = [
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_0__create_create_component__["a" /* CreateComponent */],
        data: {
            heading: 'Create Caterer',
            removeFooter: true
        }
    },
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* ListComponent */],
        data: {
            heading: 'List Caterer',
            removeFooter: true
        }
    },
    {
        path: 'view/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
        data: {
            heading: 'View Caterer',
            removeFooter: true
        }
    }
];
//# sourceMappingURL=caterer.routing.js.map

/***/ }),

/***/ "../../../../../src/app/caterer/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create Caterer\n      </div>\n      <div class=\"card-block\">\n        <ng-container *ngIf=\"progressLoading\">\n          <div class=\"loader02\"></div>\n        </ng-container>\n        <form #createForm=\"ngForm\" [style.opacity]=\"progressLoading == true? 0.4 : 1\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"alert\" [class.alert-success]=\"alert.status == 200\" [class.alert-danger]=\"alert.status == 400\" role=\"alert\" *ngIf=\"alert.visible\">\n            <strong>Oh snap!</strong> {{alert.message}}.\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"firstname.errors && firstname.touched\">\n                <label for=\"firstname\">\n                      First Name\n                    </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"caterer.firstname\"\n                  minlength=\"2\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"firstname.errors && firstname.touched\">\n                  <small [hidden]=\"!firstname.errors.required\">\n                    First name is required.\n                  </small>\n                  <small [hidden]=\"!firstname.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"lastname.errors && lastname.touched\">\n                <label for=\"lastname\">\n                  Last Name\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"caterer.lastname\"\n                  minlength=\"2\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"lastname.errors && lastname.touched\">\n                  <small [hidden]=\"!lastname.errors.required\">\n                    Last name is required.\n                  </small>\n                  <small [hidden]=\"!lastname.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"phone.errors && phone.touched\">\n                <label for=\"phone\">\n                  Phone Number\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" name=\"Phone\" #phone=\"ngModel\" [(ngModel)]=\"caterer.phone\" minlength=\"11\"\n                  maxlength=\"15\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"phone.errors && phone.touched\">\n                  <small [hidden]=\"!phone.errors.required\">\n                    Your Phone Number is required.\n                  </small>\n                  <small [hidden]=\"!phone.errors.minlength\">\n                    Min characters is 11\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"email.errors && email.touched\">\n                <label for=\"email\">\n                  Email\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"caterer.email\" minlength=\"5\"\n                  required/>\n                <div class=\"form-control-feedback\" *ngIf=\"email.errors && email.touched\">\n                  <small [hidden]=\"!email.errors.required\">\n                    Your Email is required.\n                  </small>\n                  <small [hidden]=\"!email.errors.minlength\">\n                    Min characters is 5\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <fieldset class=\"form-group\" [class.has-danger]=\"address.errors && address.touched\">\n            <label for=\"address\">\n                  Address\n                </label>\n            <textarea class=\"form-control\" placeholder=\"Address\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"caterer.address\" minlength=\"20\"\n              required>\n                </textarea>\n            <div class=\"form-control-feedback\" *ngIf=\"address.errors && address.touched\">\n              <small [hidden]=\"!address.errors.required\">\n                    Your Address is required.\n                  </small>\n              <small [hidden]=\"!address.errors.minlength\">\n                    Min characters is 20\n                  </small>\n            </div>\n          </fieldset>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"accountNumber.errors && accountNumber.touched\">\n                <label for=\"accountNumber\">\n                  Account Number\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Account Number\" name=\"accountNumber\" #accountNumber=\"ngModel\" [(ngModel)]=\"caterer.bankAccount.accountNumber\"\n                  minlength=\"10\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"accountNumber.errors && accountNumber.touched\">\n                  <small [hidden]=\"!accountNumber.errors.required\">\n                    Account Number is required.\n                  </small>\n                  <small [hidden]=\"!accountNumber.errors.minlength\">\n                    Min characters is 10\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"bank.errors && bank.touched\">\n                <label for=\"bank\">\n                Bank\n              </label>\n                <select name=\"bank\" class=\"form-control\" #bank=\"ngModel\" [(ngModel)]=\"caterer.bankAccount.bank\">\n                    <option disabled selected></option>\n                <option *ngFor=\"let bank of (banks$ | async)\" [value]=\"bank.id\">{{bank?.name}}</option>\n            </select>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"lga.errors && lga.touched\">\n                <label for=\"lga\">\n                  Local Govt. Area\n                </label>\n                <select name=\"lga\" class=\"form-control\" #lga=\"ngModel\" [(ngModel)]=\"caterer.lga\" (change)=\"selectSchools(caterer.lga);\">\n                  <option disabled selected></option>\n                  <option *ngFor=\"let lga of (lgas$ | async)\" [value]=\"lga.id\">{{lga?.name}}</option>\n                </select>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"school.errors && school.touched\">\n                <label for=\"school\">\n                  School\n                </label>\n                <select name=\"school\" class=\"form-control\" #school=\"ngModel\" [(ngModel)]=\"caterer.school\">\n                    <option disabled selected></option>\n                  <option *ngFor=\"let school of (schools$ | async)\" [value]=\"school.id\">{{school?.name}}</option>\n                </select>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!createForm.valid\">Create</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/caterer/create/create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/caterer/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bank__ = __webpack_require__("../../../../../src/app/services/bank.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_school__ = __webpack_require__("../../../../../src/app/services/school.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_caterer__ = __webpack_require__("../../../../../src/app/models/caterer.ts");
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
    function CreateComponent(router, catererService, lgaService, schoolService, bankService) {
        this.router = router;
        this.catererService = catererService;
        this.lgaService = lgaService;
        this.schoolService = schoolService;
        this.bankService = bankService;
        this.caterer = new __WEBPACK_IMPORTED_MODULE_6__models_caterer__["a" /* Caterer */]();
        this.progressLoading = false;
        this.alert = {
            visible: false,
            status: null,
            message: ''
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
        this.banks$ = this.bankService.getAll();
        this.schools$ = null;
        this.schoolService.getAll();
    };
    CreateComponent.prototype.selectSchools = function (lga) {
        this.schools$ = this.schoolService.getLga(lga);
    };
    CreateComponent.prototype.onSubmit = function () {
        var that = this;
        this.progressLoading = true;
        that.alert = {
            visible: false,
            status: null,
            message: ''
        };
        this.catererService.createCaterer(this.caterer)
            .subscribe(function (data) {
            that.caterer = new __WEBPACK_IMPORTED_MODULE_6__models_caterer__["a" /* Caterer */]();
            that.alert = {
                visible: true,
                status: 200,
                message: ''.concat('A new caterer has been created.')
            };
            that.progressLoading = false;
            console.info(data);
        }, function (error) {
            that.progressLoading = false;
            if (error.error instanceof Error) {
                that.alert = {
                    visible: true,
                    status: error.status,
                    message: ''.concat('An error occurred:', error.error.message)
                };
            }
            else {
                that.alert = {
                    visible: true,
                    status: error.status,
                    message: ''.concat('An error occurred:', error.error.data.invalidAttributes[Object.keys(error.error.data.invalidAttributes)[0]][0].message)
                };
            }
        }, function () {
            that.progressLoading = false;
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/caterer/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/caterer/create/create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_school__["a" /* SchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_school__["a" /* SchoolService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_bank__["a" /* BankService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_bank__["a" /* BankService */]) === "function" && _e || Object])
], CreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/caterer/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        List of Caterers\n      </div>\n      <div class=\"card-block\">\n        <div class=\"table-responsive\">\n          <table datatable [dtOptions]=\"dtOptions\" class=\"table row-border table-hover dataTable\">\n            <thead>\n              <tr>\n                <th>First Name</th>\n                <th>Last Name</th>\n                <th>Phone</th>\n                <th>Date Joined</th>\n              </tr>\n            </thead>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/caterer/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/caterer/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_format__ = __webpack_require__("../../../../../src/app/shared/format.ts");
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
        this.dtOptions = {};
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lgas$ = this.lgaService.getAll();
        var that = this;
        this.dtOptions = {
            processing: true,
            serverSide: true,
            dom: '<f<t>p>',
            pagingType: 'simple',
            orderable: false,
            ajax: function (data, callback, settings) {
                _this.catererService.datatable(data)
                    .subscribe(function (response) {
                    callback(response);
                }, function (err) {
                    console.log('err', err);
                });
            },
            rowCallback: function (row, data, index) {
                var self = _this;
                $('td', row).unbind('click');
                $('td', row).bind('click', function () {
                    self.router.navigate(['/caterer/view', data.id]);
                });
                return row;
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
                    data: 'createdAt',
                    width: '30%',
                    orderable: true,
                    render: function (data, type, row, meta) {
                        return __WEBPACK_IMPORTED_MODULE_4_moment__(data).calendar(null, __WEBPACK_IMPORTED_MODULE_5__shared_format__["a" /* DATEFORMAT */]);
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
        template: __webpack_require__("../../../../../src/app/caterer/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/caterer/list/list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], ListComponent);

var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/caterer/view/modals/bvn/bvn.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template ngbModalContainer></ng-template>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h6 class=\"modal-title text-uppercase\">BVN Verification</h6>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div *ngIf=\"!tokenValidator; else token\">\n        <form #bvnVerificationForm=\"ngForm\" (ngSubmit)=\"sendOtp()\">\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <fieldset class=\"form-group\" [class.has-danger]=\"bvn.errors && bvn.touched\">\n                            <label for=\"bvn\">\n                            BVN\n                          </label>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Enter BVN\" name=\"bvn\" #bvn=\"ngModel\" [(ngModel)]=\"send.bvn\" minlength=\"2\"\n                                required/>\n                            <div class=\"form-control-feedback\" *ngIf=\"bvn.errors && bvn.touched\">\n                                <small [hidden]=\"!bvn.errors.required\">\n                          BVN is required.\n                        </small>\n                                <small [hidden]=\"!bvn.errors.minlength\">\n                          Min characters is 2\n                        </small>\n                            </div>\n                        </fieldset>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <fieldset class=\"form-group\" [class.has-danger]=\"method.errors && method.touched\">\n                            <label for=\"method\">\n                          Verification Method\n                        </label>\n                            <select name=\"method\" class=\"form-control\" #method=\"ngModel\" [(ngModel)]=\"send.otpoption\" required>\n                                    <option></option>\n                                    <option value=\"SMS\">SMS</option>\n                            <option value=\"VOICE\">Voice Call</option>\n                        </select>\n                            <div class=\"form-control-feedback\" *ngIf=\"method.errors && method.touched\">\n                                <small [hidden]=\"!method.errors.required\">\n                          Verification method is required.\n                        </small>\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n                <a href=\"#\" class=\"pull-right\">Resend OTP</a>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-secondary\">Verify BVN</button>\n            </div>\n        </form>\n    </div>\n    <div #token>\n        <form #tokenValidationForm=\"ngForm\" (ngSubmit)=\"verifyOtp()\">\n            <div class=\"modal-body\">\n                <div class=\"row\">\n                    <div class=\"col-md-6\">\n                        <fieldset class=\"form-group\" [class.has-danger]=\"token.errors && token.touched\">\n                            <label for=\"token\">\n                                TOKEN\n                            </label>\n                            <input type=\"text\" class=\"form-control text-center\" placeholder=\"******\" name=\"token\" #token=\"ngModel\" [(ngModel)]=\"verify.otp\"\n                                minlength=\"2\" required/>\n                            <div class=\"form-control-feedback\" *ngIf=\"token.errors && token.touched\">\n                                <small [hidden]=\"!token.errors.required\">\n                              Token is required.\n                            </small>\n                                <small [hidden]=\"!token.errors.minlength\">\n                              Min characters is 2\n                            </small>\n                            </div>\n                        </fieldset>\n                    </div>\n                </div>\n                <a href=\"#\" class=\"pull-right\">Back</a>\n            </div>\n            <div class=\"modal-footer\">\n                <button type=\"submit\" class=\"btn btn-secondary\">Authorize</button>\n            </div>\n        </form>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/caterer/view/modals/bvn/bvn.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_bvn__ = __webpack_require__("../../../../../src/app/models/bvn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_bvn__ = __webpack_require__("../../../../../src/app/services/bvn.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BvnModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BvnModalComponent = (function () {
    function BvnModalComponent(modalService, bvnService) {
        this.modalService = modalService;
        this.bvnService = bvnService;
        this.send = new __WEBPACK_IMPORTED_MODULE_2__models_bvn__["a" /* Bvn */]();
        this.verify = new __WEBPACK_IMPORTED_MODULE_2__models_bvn__["a" /* Bvn */]();
        this.tokenValidator = false;
    }
    BvnModalComponent.prototype.open = function () {
        var _this = this;
        this.modalService.open(this.content).result.then(function (result) {
            _this.tokenValidator = false;
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    BvnModalComponent.prototype.sendOtp = function () {
        var _this = this;
        this.bvnService.sendToken(this.send).subscribe(function (response) {
            _this.tokenValidator = true;
            _this.verify.transactionreference = response.transactionReference;
            _this.verify.bvn = _this.send.bvn;
            _this.verify.otp = _this.send.otp;
        });
    };
    BvnModalComponent.prototype.verifyOtp = function () {
        this.bvnService.verify(this.verify).subscribe(function (response) {
        });
    };
    return BvnModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", Object)
], BvnModalComponent.prototype, "content", void 0);
BvnModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'bvn-modal',
        template: __webpack_require__("../../../../../src/app/caterer/view/modals/bvn/bvn.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_bvn__["a" /* BvnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bvn__["a" /* BvnService */]) === "function" && _b || Object])
], BvnModalComponent);

var _a, _b;
//# sourceMappingURL=bvn.component.js.map

/***/ }),

/***/ "../../../../../src/app/caterer/view/modals/edit-caterer/edit-caterer.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template ngbModalContainer>\n</ng-template>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h6 class=\"modal-title text-uppercase\">Edit Caterer</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form #editCaterer=\"ngForm\" [style.opacity]=\"progressLoading == true? 0.4 : 1\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-12\">\n          <div class=\"alert\" [class.alert-success]=\"alert.status == 200\" [class.alert-danger]=\"alert.status == 400\" role=\"alert\" *ngIf=\"alert.visible\">\n            <strong>Oh snap!</strong> {{alert.message}}.\n          </div>\n          <div class=\"table-responsive\">\n            <table class=\"table mb-0\">\n              <ng-container *ngIf=\"caterer\">\n                <tbody>\n                  <tr>\n                    <td>\n                      First Name\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"caterer.firstname\" required/>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Last name\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"caterer.lastname\" required/>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Phone Number\n                    </td>\n                    <td>\n                      <input type=\"text\" class=\"form-control\" name=\"phone\" #phone=\"ngModel\" [(ngModel)]=\"caterer.phone\" required/>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Address\n                    </td>\n                    <td>\n                      <textarea rows=\"4\" class=\"form-control\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"caterer.address\" required></textarea>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td>\n                      Email\n                    </td>\n                    <td>\n                      <input type=\"email\" class=\"form-control\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"caterer.email\" required/>\n                    </td>\n                  </tr>\n                </tbody>\n              </ng-container>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"submit\" class=\"btn btn-info\" [disabled]=\"!editCaterer.valid\">Save Changes</button>\n    </div>\n  </form>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/caterer/view/modals/edit-caterer/edit-caterer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditCatererModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditCatererModalComponent = (function () {
    function EditCatererModalComponent(modalService, catererService) {
        this.modalService = modalService;
        this.catererService = catererService;
        this.progressLoading = false;
        this.alert = {
            visible: false,
            status: null,
            message: ''
        };
    }
    EditCatererModalComponent.prototype.ngOnInit = function () {
        // this.foods$ = this.foodService.getAll();
    };
    EditCatererModalComponent.prototype.onSubmit = function () {
        var that = this;
        this.progressLoading = true;
        that.alert = {
            visible: false,
            status: null,
            message: ''
        };
        this.catererService.editCaterer(this.caterer)
            .subscribe(function (data) {
            that.caterer = {};
            that.alert = {
                visible: true,
                status: 200,
                message: ''.concat('The modifications have been made.')
            };
            that.progressLoading = false;
            console.info(data);
        }, function (error) {
            that.progressLoading = false;
            if (error.error instanceof Error) {
                that.alert = {
                    visible: true,
                    status: error.status,
                    message: ''.concat('An error occurred:', error.error.message)
                };
            }
            else {
                that.alert = {
                    visible: true,
                    status: error.status,
                    message: ''.concat('An error occurred:', error.error.data.invalidAttributes[Object.keys(error.error.data.invalidAttributes)[0]][0].message)
                };
            }
        }, function () {
            that.progressLoading = false;
        });
    };
    EditCatererModalComponent.prototype.open = function () {
        this.modalService.open(this.content).result.then(function (result) {
        }, function (reason) {
        });
    };
    return EditCatererModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object)
], EditCatererModalComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], EditCatererModalComponent.prototype, "caterer", void 0);
EditCatererModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'edit-caterer',
        template: __webpack_require__("../../../../../src/app/caterer/view/modals/edit-caterer/edit-caterer.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_caterer__["a" /* CatererService */]) === "function" && _c || Object])
], EditCatererModalComponent);

var _a, _b, _c;
//# sourceMappingURL=edit-caterer.component.js.map

/***/ }),

/***/ "../../../../../src/app/caterer/view/modals/get-supply/get-supply.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template ngbModalContainer>\n</ng-template>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h6 class=\"modal-title text-uppercase\">Invoice</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-block p-0\">\n            <div class=\"table-responsive\">\n              <table class=\"table mb-0 table-no-border\">\n                <tbody>\n                  <tr *ngFor=\"let food of (foods$ | async); let i = index\">\n                    <td class=\"px-0 border-0\" width=\"70%\">\n                      {{food?.name}}\n                    </td>\n                    <td class=\"px-0 border-0\">\n                      <input type=\"number\" class=\"form-control\" [(ngModel)]=\"foodItems[food.id]\" />\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <form class=\"form-inline\" #invoiceForm=\"ngForm\" (ngSubmit)=\"generateInvoice()\">\n      <div class=\"form-group mx-sm-3\">\n        <div class=\"row\">\n          <div class=\"col-4\">\n            <label class=\"sr-only\" for=\"supplier\">Supplier</label>\n            <select name=\"supplier\" class=\"form-control mb-2 mr-sm-2 mb-sm-0\" #supplier=\"ngModel\" [(ngModel)]=\"invoice.supplier\" required>\n              <option disabled selected></option>\n              <option *ngFor=\"let supplier of (suppliers$ | async)\" [value]=\"supplier.id\">{{supplier?.fullname}}</option>\n            </select>\n          </div>\n        </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!invoiceForm.valid\">Generate</button>\n    </form>\n  </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/caterer/view/modals/get-supply/get-supply.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_supplier__ = __webpack_require__("../../../../../src/app/services/supplier.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_food__ = __webpack_require__("../../../../../src/app/services/food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_invoice__ = __webpack_require__("../../../../../src/app/models/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_invoiceItem__ = __webpack_require__("../../../../../src/app/models/invoiceItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_invoice__ = __webpack_require__("../../../../../src/app/services/invoice.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetSupplyModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var GetSupplyModalComponent = (function () {
    function GetSupplyModalComponent(modalService, foodService, supplierService, invoiceService) {
        this.modalService = modalService;
        this.foodService = foodService;
        this.supplierService = supplierService;
        this.invoiceService = invoiceService;
        this.foodItems = [];
        this.invoice = new __WEBPACK_IMPORTED_MODULE_4__models_invoice__["a" /* Invoice */]();
    }
    GetSupplyModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.suppliers$ = this.supplierService.getWhereLga(this.lga);
        this.foods$ = this.foodService.getAll().do(function (foods) {
            _this.foods = foods;
        });
    };
    GetSupplyModalComponent.prototype.generateInvoice = function () {
        this.invoice.caterer = this.caterer;
        this.invoice.invoiceItems = [];
        var _loop_1 = function (foodId) {
            var foodQuantity = this_1.foodItems[foodId];
            if (foodQuantity) {
                var foodObject = this_1.foods.find(function (x) { return x.id === foodId; });
                var food = new __WEBPACK_IMPORTED_MODULE_5__models_invoiceItem__["a" /* InvoiceItem */]();
                food.name = foodObject.name;
                food.quantity = foodQuantity;
                food.unitPrice = foodObject.unitPrice;
                this_1.invoice.invoiceItems.push(food);
            }
        };
        var this_1 = this;
        for (var foodId in this.foodItems) {
            _loop_1(foodId);
        }
        console.log(this.invoice);
        this.invoiceService.createInvoice(this.invoice).subscribe(function (response) {
            // this.router.navigate( ['/'] );
            console.info(response);
        }, function (reason) {
            console.warn(reason);
        });
    };
    GetSupplyModalComponent.prototype.open = function () {
        this.modalService.open(this.content).result.then(function (result) {
        }, function (reason) {
        });
    };
    return GetSupplyModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('content'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object)
], GetSupplyModalComponent.prototype, "content", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GetSupplyModalComponent.prototype, "caterer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], GetSupplyModalComponent.prototype, "lga", void 0);
GetSupplyModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'get-supply',
        template: __webpack_require__("../../../../../src/app/caterer/view/modals/get-supply/get-supply.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_food__["a" /* FoodService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_food__["a" /* FoodService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_supplier__["a" /* SupplierService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_supplier__["a" /* SupplierService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__services_invoice__["a" /* InvoiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_invoice__["a" /* InvoiceService */]) === "function" && _e || Object])
], GetSupplyModalComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=get-supply.component.js.map

/***/ }),

/***/ "../../../../../src/app/caterer/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-container *ngIf=\"(caterer$ | async); let caterer\">\n  <div class=\"text-center my-3\">\n    <label class=\"switch m-b\">\n      <span class=\"slide-toggle-content\">Pending verification on BVN</span>\n      <div class=\"slide-toggle-bar ml-4\">\n        <input type=\"checkbox\" (change)=\"bvnModal.open()\">\n        <span></span>\n      </div>\n    </label>\n  </div>\n  <div class=\"wrapper\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            Basic Information\n            <span class=\"mr-auto\"></span>\n            <div class=\"card-controls\">\n              <a href=\"javascript:;\" (click)=\"editCatererModal.open()\">\n                <i class=\"icon icon-software-pencil\"></i>\n              </a>\n            </div>\n          </div>\n          <div class=\"card-block\">\n            <div class=\"row mb-2\">\n              <div class=\"col\">\n                <div class=\"justify-content-start\">\n                  <div class=\"mr-auto\">Names</div>\n                  <strong>{{caterer?.firstname}} {{caterer?.lastname}}</strong>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"justify-content-start\">\n                  <div class=\"mr-auto\">Address</div>\n                  <strong>{{caterer?.address}}</strong>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mb-2\">\n              <div class=\"col\">\n                <div class=\"justify-content-start\">\n                  <div class=\"mr-auto\">Phone</div>\n                  <strong>{{caterer?.phone}}</strong>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"justify-content-start\">\n                  <div class=\"mr-auto\">School Name</div>\n                  <strong>{{caterer?.school.name}}</strong>\n                </div>\n              </div>\n            </div>\n            <div class=\"row mb-2\">\n              <div class=\"col\">\n                <div class=\"justify-content-start\">\n                  <div class=\"mr-auto\">Email</div>\n                  <strong>{{caterer?.email}}</strong>\n                </div>\n              </div>\n              <div class=\"col\">\n                <div class=\"justify-content-start\">\n                  <div class=\"mr-auto\">Account Number</div>\n                  <strong>{{caterer?.bankAccount.accountNumber}}</strong>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"row mb-2\">\n              <div class=\"col\">\n                <div class=\"justify-content-start\">\n                  <div class=\"mr-auto\">Bank Name</div>\n                  <strong>{{caterer?.bank?.name}}</strong>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          Invoice\n          <span class=\"mr-auto\"></span>\n          <div class=\"card-controls\">\n            <a href=\"javascript:;\" (click)=\"getSupplyModal.open()\">\n            <i class=\"icon icon-arrows-plus\"></i>\n          </a>\n          </div>\n        </div>\n        <div class=\"card-block\">\n          <div class=\"table-responsive\">\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table row-border table-hover dataTable\">\n              <thead>\n                <tr>\n                  <th>\n                    ID\n                  </th>\n                  <th>\n                    Supplier\n                  </th>\n                  <th>\n                    Time\n                  </th>\n                </tr>\n              </thead>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <get-supply #getSupplyModal [caterer]=\"caterer?.id\" [lga]=\"caterer?.lga?.id\"></get-supply>\n  <edit-caterer #editCatererModal [caterer]=\"caterer\"></edit-caterer>\n  <bvn-modal #bvnModal></bvn-modal>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/caterer/view/view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n\n/* $colors\n ------------------------------------------*/\n.pricing {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  text-align: center; }\n  .pricing .card {\n    border: 1px solid #304ffe;\n    margin-left: -1px; }\n  .pricing.card-group .card + .card {\n    margin-left: -1px;\n    border-left: 1px solid #304ffe; }\n  .pricing .pricing-plan {\n    text-align: center;\n    overflow: hidden;\n    cursor: default; }\n  .pricing .plan-price {\n    font-size: 2.5rem;\n    font-weight: 900;\n    position: relative;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis; }\n  .pricing .plan-price-symbol {\n    font-size: 1rem;\n    vertical-align: super; }\n  .pricing .plan-price-period {\n    font-size: 0.8125rem;\n    display: inline-block;\n    padding: 0;\n    opacity: .7; }\n  .pricing .plan-title {\n    font-size: 0.8125rem;\n    font-weight: 500;\n    overflow: hidden;\n    margin-bottom: 1rem;\n    white-space: nowrap;\n    text-transform: uppercase;\n    text-overflow: ellipsis; }\n  .pricing .plan-features {\n    line-height: 2.5;\n    margin: 0;\n    padding: 1rem;\n    list-style: none; }\n    .pricing .plan-features li {\n      overflow: hidden;\n      white-space: nowrap;\n      text-overflow: ellipsis; }\n\n.switch {\n  display: inline-block;\n  height: 24px;\n  line-height: 24px;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none; }\n  .switch .slide-toggle-bar {\n    display: inline-block;\n    margin-right: 8px;\n    margin-left: 0;\n    position: relative;\n    top: 5px;\n    width: 36px;\n    height: 14px;\n    border-radius: 8px; }\n  .switch input {\n    position: absolute;\n    left: -99999px; }\n  .switch input + span {\n    position: relative;\n    display: block;\n    width: 36px;\n    height: 14px;\n    border-radius: 8px;\n    border: none;\n    background-color: #B2B2B2;\n    background-color: rgba(0, 0, 0, 0.26);\n    transition: background-color linear .08s; }\n  .switch input + span:before {\n    content: '';\n    display: inline-block; }\n  .switch input + span:after {\n    content: '';\n    position: absolute;\n    top: -3px;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4), 0px 0px 0px -1px rgba(0, 0, 0, 0.5);\n    background-color: #FAFAFA;\n    border: none;\n    transition: background-color linear .08s, -webkit-transform linear .08s;\n    transition: transform linear .08s, background-color linear .08s;\n    transition: transform linear .08s, background-color linear .08s, -webkit-transform linear .08s; }\n  .switch input:checked + span {\n    background-color: rgba(255, 193, 7, 0.5); }\n  .switch input:checked + span:after {\n    background-color: #ffc107;\n    -webkit-transform: translate3d(18px, 0, 0);\n            transform: translate3d(18px, 0, 0);\n    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.4), 0px 0px 0px -1px rgba(0, 147, 133, 0.5); }\n\n.switch {\n  display: table;\n  margin: 0 auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/caterer/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_invoice__ = __webpack_require__("../../../../../src/app/services/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_format__ = __webpack_require__("../../../../../src/app/shared/format.ts");
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
    function ViewComponent(router, route, catererService, invoiceService, lgaService) {
        this.router = router;
        this.route = route;
        this.catererService = catererService;
        this.invoiceService = invoiceService;
        this.lgaService = lgaService;
        this.dtOptions = {};
        this.images = [];
        this.num = 1;
        this.supplier = {};
        this.caterer = {};
        this.progressLoading = false;
        this.alert = {
            visible: false,
            status: null,
            message: ''
        };
    }
    ViewComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["k" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["k" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lgas$ = this.lgaService.getAll();
        var that = this;
        that.caterer$ = this.route.params
            .switchMap(function (data) { return _this.catererService.getCaterer(data.id); });
        this.dtOptions = {
            processing: true,
            serverSide: true,
            dom: '<f<t>p>',
            pagingType: 'simple',
            orderable: false,
            ajax: function (data, callback, settings) {
                _this.invoiceService.datatable(data)
                    .subscribe(function (response) {
                    callback(response);
                });
            },
            rowCallback: function (row, data, index) {
                var self = _this;
                $('td', row).unbind('click');
                $('td', row).bind('click', function () {
                    self.router.navigate(['/invoice/view', data.id]);
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
                    render: function (data, type, row, meta) {
                        return __WEBPACK_IMPORTED_MODULE_6_moment__(data).calendar(null, __WEBPACK_IMPORTED_MODULE_7__shared_format__["a" /* DATEFORMAT */]);
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
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view',
        template: __webpack_require__("../../../../../src/app/caterer/view/view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/caterer/view/view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_caterer__["a" /* CatererService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_invoice__["a" /* InvoiceService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_invoice__["a" /* InvoiceService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_lga__["a" /* LgaService */]) === "function" && _e || Object])
], ViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/bankAccount.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankAccount; });
var BankAccount = (function () {
    function BankAccount() {
    }
    return BankAccount;
}());

//# sourceMappingURL=bankAccount.js.map

/***/ }),

/***/ "../../../../../src/app/models/caterer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bankAccount__ = __webpack_require__("../../../../../src/app/models/bankAccount.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Caterer; });

var Caterer = (function () {
    function Caterer() {
        this.bankAccount = new __WEBPACK_IMPORTED_MODULE_0__bankAccount__["a" /* BankAccount */]();
    }
    return Caterer;
}());

//# sourceMappingURL=caterer.js.map

/***/ }),

/***/ "../../../../../src/app/models/invoice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Invoice; });
var Invoice = (function () {
    function Invoice() {
    }
    return Invoice;
}());

//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ "../../../../../src/app/models/invoiceItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceItem; });
var InvoiceItem = (function () {
    function InvoiceItem() {
    }
    return InvoiceItem;
}());

//# sourceMappingURL=invoiceItem.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map