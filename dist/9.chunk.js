webpackJsonp([9],{

/***/ "../../../../../src/app/authentication/authentication.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__authentication_routing__ = __webpack_require__("../../../../../src/app/authentication/authentication.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signin_signin_component__ = __webpack_require__("../../../../../src/app/authentication/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("../../../../../src/app/authentication/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__ = __webpack_require__("../../../../../src/app/authentication/lockscreen/lockscreen.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__signup_modals_bvn_bvn_component__ = __webpack_require__("../../../../../src/app/authentication/signup/modals/bvn/bvn.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AuthenticationModule = (function () {
    function AuthenticationModule() {
    }
    return AuthenticationModule;
}());
AuthenticationModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__authentication_routing__["a" /* AuthenticationRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__signin_signin_component__["a" /* SigninComponent */], __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_7__forgot_forgot_component__["a" /* ForgotComponent */], __WEBPACK_IMPORTED_MODULE_8__lockscreen_lockscreen_component__["a" /* LockscreenComponent */], __WEBPACK_IMPORTED_MODULE_10__signup_modals_bvn_bvn_component__["a" /* BvnModalComponent */]]
    })
], AuthenticationModule);

//# sourceMappingURL=authentication.module.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/authentication.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__signin_signin_component__ = __webpack_require__("../../../../../src/app/authentication/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__ = __webpack_require__("../../../../../src/app/authentication/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__ = __webpack_require__("../../../../../src/app/authentication/forgot/forgot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__ = __webpack_require__("../../../../../src/app/authentication/lockscreen/lockscreen.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationRoutes; });




var AuthenticationRoutes = [
    {
        path: '',
        children: [{
                path: 'signin',
                component: __WEBPACK_IMPORTED_MODULE_0__signin_signin_component__["a" /* SigninComponent */]
            }, {
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_1__signup_signup_component__["a" /* SignupComponent */]
            }, {
                path: 'forgot',
                component: __WEBPACK_IMPORTED_MODULE_2__forgot_forgot_component__["a" /* ForgotComponent */]
            }, {
                path: 'lockscreen',
                component: __WEBPACK_IMPORTED_MODULE_3__lockscreen_lockscreen_component__["a" /* LockscreenComponent */]
            }]
    }
];
//# sourceMappingURL=authentication.routing.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/forgot/forgot.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 h-100\">\n  <div class=\"bg-cover bg-3 hidden-sm-down col-md-6 col-lg-8\"></div>\n  <div class=\"card card-block mb-0 rounded-0 p-5 col-sm-12 col-md-6 col-lg-4\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"mb-3\">\n        <img src=\"assets/images/logo.png\" class=\"avatar-xs mb-1\" alt=\"\">\n        <p class=\"ff-headers text-uppercase\">Recover your password</p>\n      </div>\n      <fieldset class=\"form-group\" [ngClass]=\"{'has-danger': form.controls['uname'].hasError('required') && form.controls['uname'].touched}\">\n        <label for=\"username\" class=\"form-control-label\">\n          Enter your username\n        </label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" [formControl]=\"form.controls['uname']\" [ngClass]=\"{'form-control-danger': form.controls['uname'].hasError('required') && form.controls['uname'].touched}\"/>\n        <div class=\"form-control-feedback\" *ngIf=\"form.controls['uname'].hasError('required') && form.controls['uname'].touched\">Username is required.</div>\n      </fieldset>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Reset password</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/forgot/forgot.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/forgot/forgot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotComponent = (function () {
    function ForgotComponent(fb, router) {
        this.fb = fb;
        this.router = router;
    }
    ForgotComponent.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            uname: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    ForgotComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    return ForgotComponent;
}());
ForgotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-forgot',
        template: __webpack_require__("../../../../../src/app/authentication/forgot/forgot.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/forgot/forgot.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ForgotComponent);

var _a, _b;
//# sourceMappingURL=forgot.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/lockscreen/lockscreen.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-center justify-content-md-center min-height-100 text-center bg-indigo-A700 h-100\">\n  <div class=\"col col-lg-10 p-5\">\n    <img src=\"assets/images/avatar.jpg\" class=\"avatar-md rounded-circle\" alt=\"user\" title=\"user\"/>\n    <div class=\"mb-3 mt-3\">\n      <p class=\"ff-headers text-uppercase mb-0\">Betty Simmons</p>\n      <small>Please enter your lock code</small>\n    </div>\n    <div class=\"center-block lockcode mt-1\">\n      <form role=\"form\" (ngSubmit)=\"onSubmit()\">\n        <input type=\"text\" class=\"form-control\" placeholder=\"Enter passcode and press enter\">\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/authentication/lockscreen/lockscreen.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/lockscreen/lockscreen.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockscreenComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LockscreenComponent = (function () {
    function LockscreenComponent(router) {
        this.router = router;
    }
    LockscreenComponent.prototype.onSubmit = function () {
        this.router.navigate(['/']);
    };
    return LockscreenComponent;
}());
LockscreenComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lockscreen',
        template: __webpack_require__("../../../../../src/app/authentication/lockscreen/lockscreen.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/lockscreen/lockscreen.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], LockscreenComponent);

var _a;
//# sourceMappingURL=lockscreen.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 h-100\">\n  <div class=\"bg-cover bg-1 hidden-sm-down col-md-6 col-lg-8\"></div>\n  <div class=\"card card-block mb-0 rounded-0 p-5 col-sm-12 col-md-6 col-lg-4\">\n    <form  #signinForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"mb-3\">\n        <img src=\"assets/images/logo.png\" class=\"avatar-xs mb-1\" alt=\"\">\n        <p class=\"ff-headers text-uppercase\">Admin Login</p>\n      </div>\n      <fieldset class=\"form-group\" [class.has-danger]=\"email.errors && email.touched\">\n        <label for=\"email\" class=\"form-control-label\">\n          Enter your Email\n        </label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"signin.email\" minlength=\"5\"\n        pattern=\"^(([^<>()[\\]\\\\.,;:\\s@\\']+(\\.[^<>()[\\]\\\\.,;:\\s@\\']+)*)|(\\'.+\\'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$\" required/>\n        <div class=\"form-control-feedback\" *ngIf=\"email.errors && email.touched\">\n          <small [hidden]=\"!email.errors.required\">\n            Your Email is required.\n          </small>\n          <small [hidden]=\"!email.errors.minlength\">\n            Min characters is 5\n          </small>\n        </div>\n      </fieldset>\n      <fieldset class=\"form-group\" [class.has-danger]=\"password.errors && password.touched\">\n        <label for=\"password\" class=\"form-control-label\">\n          Enter your password\n        </label>\n        <input type=\"password\" class=\"form-control\" placeholder=\"********\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"signin.password\" required/>\n        <div class=\"form-control-feedback\" *ngIf=\"password.errors && password.touched\">\n          <small [hidden]=\"!password.errors.required\">\n            Password is required.\n          </small>\n        </div>\n        <a [routerLink]=\"['/authentication/forgot']\" class=\"form-text\"><small>Recover password</small></a>\n      </fieldset>\n      <label class=\"custom-control custom-checkbox mb-3\">\n        <input type=\"checkbox\" class=\"custom-control-input\">\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">Stay logged in</span>\n      </label>\n      <div class=\"block\"></div>\n      <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!signinForm.valid\">Login</button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/authentication/signin/signin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user__ = __webpack_require__("../../../../../src/app/services/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_user__ = __webpack_require__("../../../../../src/app/models/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninComponent = (function () {
    function SigninComponent(router, userService, localStorage) {
        this.router = router;
        this.userService = userService;
        this.localStorage = localStorage;
        this.signin = new __WEBPACK_IMPORTED_MODULE_3__models_user__["a" /* User */]();
    }
    SigninComponent.prototype.ngOnInit = function () {
    };
    SigninComponent.prototype.onSubmit = function () {
        var _this = this;
        this.userService.loginUser(this.signin).subscribe(function (response) {
            localStorage.setItem('token', response.token);
            localStorage.setItem('uid', response.uid);
            var url = _this.userService.getRedirectUrl();
            _this.router.navigate([url]);
        }, function (reason) {
            console.warn(reason);
        });
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/authentication/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/signin/signin.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user__["a" /* UserService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__["b" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__["b" /* AsyncLocalStorage */]) === "function" && _c || Object])
], SigninComponent);

var _a, _b, _c;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/signup/modals/bvn/bvn.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-template ngbModalContainer></ng-template>\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n        <h6 class=\"modal-title text-uppercase\">BVN Verification</h6>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    </div>\n    <div class=\"modal-body\">\n        <form #bvnVerificationForm=\"ngForm\" (ngSubmit)=\"alert()\">\n            <div class=\"row\">\n                <div class=\"col-md-6\">\n                    <fieldset class=\"form-group\" [class.has-danger]=\"bvn.errors && bvn.touched\">\n                        <label for=\"bvn\">\n                            BVN\n                          </label>\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Enter BVN\" name=\"bvn\" #bvn=\"ngModel\" [(ngModel)]=\"verify.bvn\" minlength=\"2\"\n                            required/>\n                        <div class=\"form-control-feedback\" *ngIf=\"bvn.errors && bvn.touched\">\n                            <small [hidden]=\"!bvn.errors.required\">\n                          BVN is required.\n                        </small>\n                            <small [hidden]=\"!bvn.errors.minlength\">\n                          Min characters is 2\n                        </small>\n                        </div>\n                    </fieldset>\n                </div>\n                <div class=\"col-md-6\">\n                    <fieldset class=\"form-group\" [class.has-danger]=\"method.errors && method.touched\">\n                        <label for=\"method\">\n                          Verification Method\n                        </label>\n                        <select name=\"method\" class=\"form-control\" #method=\"ngModel\" [(ngModel)]=\"verify.otpoption\" required>\n                                    <option></option>\n                                    <option value=\"SMS\">SMS</option>\n                            <option value=\"VOICE\">Voice Call</option>\n                        </select>\n                        <div class=\"form-control-feedback\" *ngIf=\"method.errors && method.touched\">\n                            <small [hidden]=\"!method.errors.required\">\n                          Verification method is required.\n                        </small>\n                        </div>\n                    </fieldset>\n                </div>\n            </div>\n            <a href=\"#\" class=\"pull-right\">Resend OTP</a>\n        </form>\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"verifyOtp()\">Verify BVN</button>\n    </div>\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/authentication/signup/modals/bvn/bvn.component.ts":
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
        this.verify = new __WEBPACK_IMPORTED_MODULE_2__models_bvn__["a" /* Bvn */]();
    }
    BvnModalComponent.prototype.alert = function () {
        var _this = this;
        this.modalService.open(this.content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    BvnModalComponent.prototype.open = function () {
        var _this = this;
        this.modalService.open(this.content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            //   this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    BvnModalComponent.prototype.verifyOtp = function () {
        this.bvnService.verify(this.verify).subscribe(function (response) {
            console.log(response);
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
        template: __webpack_require__("../../../../../src/app/authentication/signup/modals/bvn/bvn.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_bvn__["a" /* BvnService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_bvn__["a" /* BvnService */]) === "function" && _b || Object])
], BvnModalComponent);

var _a, _b;
//# sourceMappingURL=bvn.component.js.map

/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch flex-nowrap min-height-100 h-100\">\n  <div class=\"bg-cover bg-2 hidden-sm-down col-md-6 col-lg-6\"></div>\n  <div class=\"card card-block mb-0 rounded-0 p-5 col-sm-12 col-md-6 col-lg-6\">\n      <!-- <form #signUpForm=\"ngForm\" (ngSubmit)=\"onSubmit()\"> -->\n          <form #signUpForm=\"ngForm\" (ngSubmit)=\"bvnModal.open()\">\n      <div class=\"mb-3 text-center\">\n        <img src=\"assets/images/logo.png\" class=\"avatar-md mb-1\" alt=\"\">\n        <p class=\"ff-headers text-uppercase\">Home Grown School Feeding Programme</p>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"firstname.errors && firstname.touched\">\n            <label for=\"firstname\">\n              First Name\n            </label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"signup.firstname\"\n              minlength=\"2\" required/>\n            <div class=\"form-control-feedback\" *ngIf=\"firstname.errors && firstname.touched\">\n              <small [hidden]=\"!firstname.errors.required\">\n            First name is required.\n          </small>\n              <small [hidden]=\"!firstname.errors.minlength\">\n            Min characters is 2\n          </small>\n            </div>\n          </fieldset>\n        </div>\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"lastname.errors && lastname.touched\">\n            <label for=\"lastname\">\n          Last Name\n        </label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Last Name\" name=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"signup.lastname\"\n              minlength=\"2\" required/>\n            <div class=\"form-control-feedback\" *ngIf=\"lastname.errors && lastname.touched\">\n              <small [hidden]=\"!lastname.errors.required\">\n            Last name is required.\n          </small>\n              <small [hidden]=\"!lastname.errors.minlength\">\n            Min characters is 2\n          </small>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"phone.errors && phone.touched\">\n            <label for=\"phone\">\n          Phone Number\n        </label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Phone\" name=\"Phone\" #phone=\"ngModel\" [(ngModel)]=\"signup.address\" minlength=\"11\"\n              maxlength=\"15\" required/>\n            <div class=\"form-control-feedback\" *ngIf=\"phone.errors && phone.touched\">\n              <small [hidden]=\"!phone.errors.required\">\n            Your Phone Number is required.\n          </small>\n              <small [hidden]=\"!phone.errors.minlength\">\n            Min characters is 11\n          </small>\n            </div>\n          </fieldset>\n        </div>\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"email.errors && email.touched\">\n            <label for=\"email\">\n          Email\n        </label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" name=\"email\" #email=\"ngModel\" [(ngModel)]=\"signup.email\" minlength=\"5\"\n              required/>\n            <div class=\"form-control-feedback\" *ngIf=\"email.errors && email.touched\">\n              <small [hidden]=\"!email.errors.required\">\n            Your Email is required.\n          </small>\n              <small [hidden]=\"!email.errors.minlength\">\n            Min characters is 5\n          </small>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n      <fieldset class=\"form-group\" [class.has-danger]=\"address.errors && address.touched\">\n        <label for=\"address\">\n          Address\n        </label>\n        <textarea class=\"form-control\" placeholder=\"Address\" name=\"address\" #address=\"ngModel\" [(ngModel)]=\"signup.address\" minlength=\"20\"\n          required>\n        </textarea>\n        <div class=\"form-control-feedback\" *ngIf=\"address.errors && address.touched\">\n          <small [hidden]=\"!address.errors.required\">\n            Your Address is required.\n          </small>\n          <small [hidden]=\"!address.errors.minlength\">\n            Min characters is 20\n          </small>\n        </div>\n      </fieldset>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"accountNumber.errors && accountNumber.touched\">\n            <label for=\"accountNumber\">\n          Account Number\n        </label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Account Number\" name=\"accountNumber\" #accountNumber=\"ngModel\" [(ngModel)]=\"signup.accountNumber\"\n              minlength=\"10\" required/>\n            <div class=\"form-control-feedback\" *ngIf=\"accountNumber.errors && accountNumber.touched\">\n              <small [hidden]=\"!accountNumber.errors.required\">\n            Account Number is required.\n          </small>\n              <small [hidden]=\"!accountNumber.errors.minlength\">\n            Min characters is 10\n          </small>\n            </div>\n          </fieldset>\n        </div>\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"bank.errors && bank.touched\">\n            <label for=\"bank\">\n        Bank\n      </label>\n            <select name=\"bank\" class=\"form-control\" #bank=\"ngModel\" [(ngModel)]=\"signup.bank\">\n        <option *ngFor=\"let bank of (banks$ | async)\" [value]=\"bank.id\">{{bank?.name}}</option>\n    </select>\n          </fieldset>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"role.errors && role.touched\">\n            <label for=\"role\">\n      Role\n    </label>\n            <select name=\"role\" class=\"form-control\" #role=\"ngModel\" [(ngModel)]=\"signup.role\">\n              <option></option>\n        <option value=\"caterer\">Caterer</option>\n        <option value=\"supplier\">Supplier</option>\n    </select>\n          </fieldset>\n        </div>\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"lga.errors && lga.touched\">\n            <label for=\"lga\">\n        LGA\n      </label>\n            <select name=\"lga\" class=\"form-control\" #lga=\"ngModel\" [(ngModel)]=\"signup.lga\">\n        <option *ngFor=\"let lga of (lgas$ | async)\">{{lga?.name}}</option>\n    </select>\n          </fieldset>\n        </div>\n      </div>\n      <div class=\"row\">\n        <ng-container *ngIf=\"signup.role === 'caterer'\">\n        <div class=\"col-md-6\">\n          <fieldset class=\"form-group\" [class.has-danger]=\"school.errors && school.touched\">\n            <label for=\"school\">\n        School\n      </label>\n            <select name=\"school\" class=\"form-control\" #school=\"ngModel\" [(ngModel)]=\"signup.school\">\n        <optgroup label=\"Swedish Cars\">\n          <option value=\"volvo\">Volvo</option>\n          <option value=\"saab\">Saab</option>\n        </optgroup>\n        <optgroup label=\"German Cars\">\n          <option value=\"mercedes\">Mercedes</option>\n          <option value=\"audi\">Audi</option>\n        </optgroup>\n      </select>\n          </fieldset>\n        </div>\n        </ng-container>\n      </div>\n\n      <label class=\"custom-control custom-checkbox mb-1\">\n        <input type=\"checkbox\" class=\"custom-control-input\">\n        <span class=\"custom-control-indicator\"></span>\n        <span class=\"custom-control-description\">I have read and agree to the terms of service.</span>\n      </label>\n      <div class=\"block mb-3\"></div>\n      <!-- <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Create</button> -->\n      <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n      <a class=\"btn btn-outline-primary btn-link\" [routerLink]=\"['/authentication/signin']\">Login!</a>\n    </form>\n  </div>\n</div>\n<bvn-modal #bvnModal></bvn-modal>"

/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/authentication/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(router, catererService, lgaService) {
        this.router = router;
        this.catererService = catererService;
        this.lgaService = lgaService;
        this.signup = {};
    }
    SignupComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
    };
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.signup);
        this.catererService.createCaterer(this.signup).subscribe(function (response) {
            // this.router.navigate( ['/'] );
            console.info(response);
        }, function (reason) {
            console.warn(reason);
        });
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/authentication/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/authentication/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_caterer__["a" /* CatererService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map