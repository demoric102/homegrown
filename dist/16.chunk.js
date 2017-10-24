webpackJsonp([16],{

/***/ "../../../../../src/app/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__error_routing__ = __webpack_require__("../../../../../src/app/error/error.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error4_error4_component__ = __webpack_require__("../../../../../src/app/error/error4/error4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__error5_error5_component__ = __webpack_require__("../../../../../src/app/error/error5/error5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__error503_error503_component__ = __webpack_require__("../../../../../src/app/error/error503/error503.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ErrorModule = (function () {
    function ErrorModule() {
    }
    return ErrorModule;
}());
ErrorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__error_routing__["a" /* ErrorRoutes */])
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__error4_error4_component__["a" /* Error4Component */], __WEBPACK_IMPORTED_MODULE_5__error5_error5_component__["a" /* Error5Component */], __WEBPACK_IMPORTED_MODULE_6__error503_error503_component__["a" /* Error503Component */]]
    })
], ErrorModule);

//# sourceMappingURL=error.module.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__error4_error4_component__ = __webpack_require__("../../../../../src/app/error/error4/error4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__error5_error5_component__ = __webpack_require__("../../../../../src/app/error/error5/error5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error503_error503_component__ = __webpack_require__("../../../../../src/app/error/error503/error503.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorRoutes; });



var ErrorRoutes = [
    {
        path: '',
        children: [{
                path: '404',
                component: __WEBPACK_IMPORTED_MODULE_0__error4_error4_component__["a" /* Error4Component */]
            }, {
                path: '500',
                component: __WEBPACK_IMPORTED_MODULE_1__error5_error5_component__["a" /* Error5Component */]
            }, {
                path: '503',
                component: __WEBPACK_IMPORTED_MODULE_2__error503_error503_component__["a" /* Error503Component */]
            }]
    }
];
//# sourceMappingURL=error.routing.js.map

/***/ }),

/***/ "../../../../../src/app/error/error4/error4.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 bg-dark text-white\">\n  <div class=\"p-5\">\n    <div class=\"error-number fw-900 text-warning text-uppercase\">Error 404</div>\n    <h6 class=\"fw-300 mb-0\">Page not found :(</h6>\n    <small class=\"ff-headers fw-300\">Sorry, but the page you were trying to view does not exist. <a [routerLink]=\"['/']\">Take me home</a></small>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/error/error4/error4.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error4/error4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error4Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error4Component = (function () {
    function Error4Component() {
    }
    return Error4Component;
}());
Error4Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error4',
        template: __webpack_require__("../../../../../src/app/error/error4/error4.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error4/error4.component.scss")]
    })
], Error4Component);

//# sourceMappingURL=error4.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error5/error5.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 bg-dark text-white\">\n  <div class=\"p-5\">\n    <div class=\"error-number fw-900 text-danger text-uppercase\">Error 500</div>\n    <h6 class=\"fw-300 mb-0\">Internal server failure :(</h6>\n    <small class=\"ff-headers fw-300\">Sorry something went wrong with our servers. <a [routerLink]=\"['/']\">Report this error!</a></small>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/error/error5/error5.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error5/error5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error5Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error5Component = (function () {
    function Error5Component() {
    }
    return Error5Component;
}());
Error5Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error5',
        template: __webpack_require__("../../../../../src/app/error/error5/error5.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error5/error5.component.scss")]
    })
], Error5Component);

//# sourceMappingURL=error5.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error503/error503.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex align-items-stretch min-height-100 bg-dark text-white\">\n  <div class=\"p-5\">\n    <div class=\"error-number fw-900 text-danger text-uppercase\">Error 503</div>\n    <h6 class=\"fw-300 mb-0\">Service is currently unavailable. :(</h6>\n    <small class=\"ff-headers fw-300\">The server is currently unable to handle the request. <a [routerLink]=\"['/']\">Take me home!</a></small>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/error/error503/error503.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error503/error503.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error503Component; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Error503Component = (function () {
    function Error503Component() {
    }
    return Error503Component;
}());
Error503Component = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error503',
        template: __webpack_require__("../../../../../src/app/error/error503/error503.component.html"),
        styles: [__webpack_require__("../../../../../src/app/error/error503/error503.component.scss")]
    })
], Error503Component);

//# sourceMappingURL=error503.component.js.map

/***/ })

});
//# sourceMappingURL=16.chunk.js.map