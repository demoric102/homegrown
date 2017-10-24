webpackJsonp([13],{

/***/ "../../../../../src/app/user/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create User\n      </div>\n      <div class=\"card-block\">\n        <ng-container *ngIf=\"progressLoading\">\n          <div class=\"loader02\"></div>\n        </ng-container>\n        <form #createUser=\"ngForm\" [style.opacity]=\"progressLoading == true? 0.4 : 1\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"alert\" [class.alert-success]=\"alert.status == 200\" [class.alert-danger]=\"alert.status == 400\" role=\"alert\" *ngIf=\"alert.visible\">\n            <strong>Oh snap!</strong> {{alert.message}}.\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"firstname.errors && firstname.touched\">\n                <label for=\"firstname\">\n                      First Name\n                    </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"user.firstname\"\n                  minlength=\"2\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"firstname.errors && firstname.touched\">\n                  <small [hidden]=\"!firstname.errors.required\">\n                    First name is required.\n                  </small>\n                  <small [hidden]=\"!firstname.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"lastname.errors && lastname.touched\">\n                <label for=\"lastname\">\n                  Last Name\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"user.lastname\"\n                  minlength=\"2\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"lastname.errors && lastname.touched\">\n                  <small [hidden]=\"!lastname.errors.required\">\n                    Last name is required.\n                  </small>\n                  <small [hidden]=\"!lastname.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"phone.errors && phone.touched\">\n                <label for=\"phone\">\n                  Phone Number\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" name=\"Phone\" #phone=\"ngModel\" [(ngModel)]=\"user.phone\" minlength=\"11\"\n                  maxlength=\"15\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"phone.errors && phone.touched\">\n                  <small [hidden]=\"!phone.errors.required\">\n                    Your Phone Number is required.\n                  </small>\n                  <small [hidden]=\"!phone.errors.minlength\">\n                    Min characters is 11\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"email.errors && email.touched\">\n                <label for=\"email\">\n                  Email\n                </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"user.email\" minlength=\"5\"\n                  required/>\n                <div class=\"form-control-feedback\" *ngIf=\"email.errors && email.touched\">\n                  <small [hidden]=\"!email.errors.required\">\n                    Your Email is required.\n                  </small>\n                  <small [hidden]=\"!email.errors.minlength\">\n                    Min characters is 5\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <fieldset class=\"form-group\" [class.has-danger]=\"address.errors && address.touched\">\n            <label for=\"address\">\n                  Address\n                </label>\n            <textarea class=\"form-control\" placeholder=\"Address\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"user.address\" minlength=\"20\"\n              required>\n                </textarea>\n            <div class=\"form-control-feedback\" *ngIf=\"address.errors && address.touched\">\n              <small [hidden]=\"!address.errors.required\">\n                    Your Address is required.\n                  </small>\n              <small [hidden]=\"!address.errors.minlength\">\n                    Min characters is 20\n                  </small>\n            </div>\n          </fieldset>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"password.errors && password.touched\">\n                <label for=\"password\">\n                 Password\n                </label>\n                <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"user.password\"\n                  minlength=\"8\" required/>\n                <div class=\"form-control-feedback\" *ngIf=\"password.errors && password.touched\">\n                  <small [hidden]=\"!password.errors.required\">\n                    Password\n                  </small>\n                  <small [hidden]=\"!password.errors.minlength\">\n                    Min characters is 8\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"passwordAgain.errors && passwordAgain.touched\">\n                <label for=\"passwordAgain\">\n                Password Again\n              </label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password Again\" name=\"passwordAgain\" #passwordAgain=\"ngModel\" [(ngModel)]=\"user.passwordAgain\" minlength=\"5\"\n              required/>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"role.errors && role.touched\">\n                <label for=\"role\">\n                  Role\n                </label>\n                <select name=\"role\" class=\"form-control\" #role=\"ngModel\" [(ngModel)]=\"user.role\" (change)=\"selectSchools(user.role);\">\n                  <option disabled selected></option>\n                  <option *ngFor=\"let role of (role$ | async)\" [value]=\"role.id\">{{role?.name}}</option>\n                </select>\n              </fieldset>\n            </div>\n            <div class=\"col-md-6\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"lga.errors && lga.touched\">\n                <label for=\"lga\">\n                  Local Govt. Area\n                </label>\n                <select name=\"lga\" class=\"form-control\" #lga=\"ngModel\" [(ngModel)]=\"user.lga\" (change)=\"selectSchools(user.lga);\">\n                  <option disabled selected></option>\n                  <option *ngFor=\"let lga of (lga$ | async)\" [value]=\"lga.id\">{{lga?.name}}</option>\n                </select>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!createUser.valid\">Create</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/create/create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user__ = __webpack_require__("../../../../../src/app/services/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_bank__ = __webpack_require__("../../../../../src/app/services/bank.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_school__ = __webpack_require__("../../../../../src/app/services/school.ts");
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
    function CreateComponent(router, userService, lgaService, schoolService, bankService) {
        this.router = router;
        this.userService = userService;
        this.lgaService = lgaService;
        this.schoolService = schoolService;
        this.bankService = bankService;
        this.user = {};
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
        this.userService.createUser(this.user)
            .subscribe(function (data) {
            that.user = {};
            that.alert = {
                visible: true,
                status: 200,
                message: ''.concat('A new user has been created.')
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
        template: __webpack_require__("../../../../../src/app/user/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/create/create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__services_school__["a" /* SchoolService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_school__["a" /* SchoolService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_bank__["a" /* BankService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_bank__["a" /* BankService */]) === "function" && _e || Object])
], CreateComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n      <div class=\"card\">\n          <div class=\"card-header\">Users list</div>\n          <div class=\"card-block\">\n              <p>Showing all Users</p>\n          </div>\n      \n          <div class=\"table-responsive\">\n              <table datatable [dtOptions]=\"dtOptions\" class=\"table align-middle mb-0\">\n                  <thead>\n                      <tr>\n                          <th>&nbsp;</th>\n                          <th>User</th>\n                          <th>Registered</th>\n                          <th>Location</th>\n                          <th>Email</th>\n                          <th>Phone</th>\n                      </tr>\n                  </thead>\n                  \n              </table>\n          </div>\n      </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user__ = __webpack_require__("../../../../../src/app/services/user.ts");
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
    function ListComponent(router, userService, lgaService) {
        this.router = router;
        this.userService = userService;
        this.lgaService = lgaService;
        this.user = {};
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
                _this.userService.datatable(data)
                    .subscribe(function (response) {
                    callback(response);
                });
            },
            rowCallback: function (row, data, index) {
                var self = _this;
                $('td', row).unbind('click');
                $('td', row).bind('click', function () {
                    self.router.navigate(['/user/view', data.id]);
                });
                return row;
            },
            columns: [
                {
                    data: 'firstname',
                    width: '10%',
                    orderable: true,
                    render: function (data, type, row) {
                        return '<img src="https://randomuser.me/api/portraits/men/62.jpg" class="avatar-md rounded" alt="">';
                    }
                },
                {
                    data: 'firstname',
                    width: '20%',
                    orderable: true,
                    render: function (data, type, row) {
                        console.log(data, type, row);
                        return '<a href="#" class="d-block text-capitalize">' + (row.firstname) + ' ' + (row.lastname) + '</a><small>' + (row.lastname) + '</small>';
                    }
                },
                {
                    data: 'createdAt',
                    width: '20%',
                    orderable: true,
                    render: function (data, type, row, meta) {
                        return __WEBPACK_IMPORTED_MODULE_4_moment__(data).calendar(null, __WEBPACK_IMPORTED_MODULE_5__shared_format__["a" /* DATEFORMAT */]);
                    }
                },
                {
                    data: 'lastname',
                    width: '20%',
                    orderable: true,
                    render: function (data, type, row) {
                        return '<span class="badge badge-default text-uppercase">' + (data) + '</span>';
                    }
                },
                {
                    data: 'email',
                    width: '20%',
                    orderable: false,
                    render: function (data, type, row) {
                        return '<a href="#">' + (data) + '</a>';
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
    };
    ListComponent.prototype.onSubmit = function () {
        console.log(this.user);
        this.userService.createUser(this.user).subscribe(function (response) {
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
        template: __webpack_require__("../../../../../src/app/user/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/list/list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_user__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], ListComponent);

var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_create_component__ = __webpack_require__("../../../../../src/app/user/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_list_component__ = __webpack_require__("../../../../../src/app/user/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_routing__ = __webpack_require__("../../../../../src/app/user/user.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__view_view_component__ = __webpack_require__("../../../../../src/app/user/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__user_routing__["a" /* UserRoutes */]),
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
        declarations: [__WEBPACK_IMPORTED_MODULE_9__create_create_component__["a" /* CreateComponent */], __WEBPACK_IMPORTED_MODULE_10__list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_12__view_view_component__["a" /* ViewComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_create_component__ = __webpack_require__("../../../../../src/app/user/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/user/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_view_component__ = __webpack_require__("../../../../../src/app/user/view/view.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutes; });



var UserRoutes = [
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_0__create_create_component__["a" /* CreateComponent */],
        data: {
            heading: 'Create User',
            removeFooter: true
        }
    },
    {
        path: 'list',
        component: __WEBPACK_IMPORTED_MODULE_1__list_list_component__["a" /* ListComponent */],
        data: {
            heading: 'List User',
            removeFooter: true
        }
    },
    {
        path: 'view/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__view_view_component__["a" /* ViewComponent */],
        data: {
            heading: 'View User',
            removeFooter: true
        }
    }
];
//# sourceMappingURL=user.routing.js.map

/***/ }),

/***/ "../../../../../src/app/user/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n        <div class=\"card\">\n          <ng-container *ngIf=\"user$\">\n                <div class=\"card\">\n                    <div class=\"card-header\" >\n                        Basic Information\n                        \n                    </div>\n                  <div class=\"card-block\">\n                      <ng-container *ngIf=\"progressLoading\">\n                          <div class=\"loader02\"></div>\n                        </ng-container>\n                    <div class=\"row mb-2\">\n                      <div class=\"col\">\n                        <div class=\"justify-content-start\">   \n                          <div class=\"mr-auto\">Names</div>\n                          <strong>{{(user$ | async)?.firstname}} {{(user$ | async)?.lastname}}</strong>\n                        </div>\n                      </div>\n                      <div class=\"col\">          \n                        <div class=\"justify-content-start\">\n                          <div class=\"mr-auto\">Address</div>\n                          <strong>{{(user$ | async)?.address}}</strong>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"row mb-2\">\n                      <div class=\"col\">       \n                        <div class=\"justify-content-start\">\n                          <div class=\"mr-auto\">Phone</div>\n                          <strong>{{(user$ | async)?.phone}}</strong>\n                        </div>\n                      </div>\n                      <div class=\"col\">          \n                        <div class=\"justify-content-start\">\n                          <div class=\"mr-auto\">School Name</div>\n                          <strong>{{(user$ | async)?.school}}</strong>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"row mb-2\">\n                      <div class=\"col\">          \n                        <div class=\"justify-content-start\">\n                          <div class=\"mr-auto\">Email</div>\n                          <strong>{{(user$ | async)?.email}}</strong>\n                        </div>\n                      </div>\n                      <div class=\"col\">          \n                        <div class=\"justify-content-start\">\n                          <div class=\"mr-auto\">Account Number</div>\n                          <strong>{{(user$ | async)?.accountNumber}}</strong>\n                        </div>\n                      </div>\n                    </div>\n  \n                    <div class=\"row mb-2\">\n                      <div class=\"col\">          \n                        <div class=\"justify-content-start\">\n                          <div class=\"mr-auto\">Bank Name</div>\n                          <strong>{{(user$ | async)?.bank}}</strong>\n                        </div>\n                      </div>\n                    </div>\n                    <button class=\"btn btn-info\" (click)=\"open(editUser)\">Edit User</button>\n                  </div>\n                </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n\n<ng-template ngbModalContainer></ng-template>\n<ng-template #editUser let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h6 class=\"modal-title text-uppercase\">Edit user</h6>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <form #edituser=\"ngForm\" [style.opacity]=\"progressLoading == true? 0.4 : 1\" (ngSubmit)=\"onSubmit()\">\n  <div class=\"modal-body\">\n    <div class=\"row\">\n      <div class=\"col-sm-12\">\n          <div class=\"card\">\n            <div class=\"card-block\">\n              <div class=\"table-responsive\">\n                <table class=\"table mb-0\">\n                  <ng-container *ngIf=\"user$\">\n                  <tbody>\n                    <tr>\n                      <td>\n                        First Name\n                      </td>\n                      <td>\n                        <input type=\"text\" value=\"{{(user$ | async)?.firstname}}\">\n                      </td>\n                    </tr>\n                    <tr>\n                      <td>\n                        Last name\n                      </td>\n                      <td>\n                        <input type=\"text\" value=\"{{(user$ | async)?.lastname}}\">\n                      </td>\n                    </tr>\n                    <tr>\n                        <td>\n                          Phone Number\n                        </td>\n                        <td>\n                          <input type=\"text\" value=\"{{(user$ | async)?.phone}}\">\n                        </td>\n                      </tr>\n                    <tr>\n                      <td>\n                        Address\n                      </td>\n                      <td>\n                        <textarea name=\"\" rows=\"4\" value=\"{{(user$ | async)?.address}}\"></textarea>\n                      </td>\n                    </tr>\n                    <tr>\n                        <td>\n                          Email\n                        </td>\n                        <td>\n                          <input type=\"text\" value=\"{{(user$ | async)?.email}}\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                          Bank\n                        </td>\n                        <td>\n                          <input type=\"text\" value=\"{{(user$ | async)?.bank}}\">\n                        </td>\n                      </tr>\n                      <tr>\n                          <td>\n                            Account Number\n                          </td>\n                          <td>\n                            <input type=\"text\" value=\"{{(user$ | async)?.accountNumber}}\">\n                          </td>\n                        </tr>\n                  </tbody>\n                  </ng-container>\n                </table>\n              </div>\n            </div>\n          </div>\n      </div>\n  </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"submit\" class=\"btn btn-info\">Save Changes</button>\n  </div>\n</form>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/user/view/view.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user__ = __webpack_require__("../../../../../src/app/services/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
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
    function ViewComponent(router, route, userService, lgaService, modalService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
        this.lgaService = lgaService;
        this.modalService = modalService;
        this.images = [];
        this.num = 1;
        this.supplier = {};
        this.user = {};
        this.progressLoading = false;
        this.alert = {
            visible: false,
            status: null,
            message: ''
        };
    }
    ViewComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ViewComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["k" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["k" /* ModalDismissReasons */].BACKDROP_CLICK) {
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
        that.user$ = this.route.params
            .switchMap(function (data) { return _this.userService.getUser(data.id); });
    };
    ViewComponent.prototype.onSubmit = function () {
        var that = this;
        this.progressLoading = true;
        that.alert = {
            visible: false,
            status: null,
            message: ''
        };
        this.userService.editUser(this.user)
            .subscribe(function (data) {
            that.user = {};
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
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-view',
        template: __webpack_require__("../../../../../src/app/user/view/view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/user/view/view.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_user__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _e || Object])
], ViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=view.component.js.map

/***/ })

});
//# sourceMappingURL=13.chunk.js.map