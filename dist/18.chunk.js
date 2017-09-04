webpackJsonp([18],{

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"bg-primary text-white\">\n  <div class=\"container\">\n    <nav class=\"navbar custom-navbar landing-header no-shadow\">\n      <a class=\"navbar-brand\" [routerLink]=\"['/landing']\">\n        <img src=\"assets/images/logo.png\" class=\"navbar-brand-logo\" alt=\"\">&nbsp;\n      </a>\n      <ul class=\"navbar-nav mr-auto hidden-sm-down\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link active\" [routerLink]=\"['/']\">Demo</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" (click)=\"goToFeatures()\">Features</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://themeforest.net/user/iamnyasha?ref=iamnyasha\" target=\"_blank\">Support</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/docs']\">Documentation</a>\n        </li>\n      </ul>\n      <span class=\"mr-auto hidden-md-up\"></span>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"https://themeforest.net/user/iamnyasha/portfolio?ref=iamnyasha\" target=\"_blank\">\n            <span class=\"btn btn-secondary border-0\">Buy on Themeforest</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"header-banner\">\n      <h1><span class=\"fw-900\">Decima -</span> <i class=\"fw-300 ff-serif\">Angular Admin Template</i></h1>\n      <p>A creative Bootstrap 4 admin template built with Angular.<br/> It comes out of the box with different colour schemes and lots of other <br/>reusable UI elements and widgets.</p>\n      <a [routerLink]=\"['/']\" class=\"btn btn-secondary border-0\">View the demo</a>\n    </div>\n  </div>\n</header>\n\n<div class=\"header-flot-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-3 col-md-6 m-0\">\n        <div class=\"feature-content\">\n          <h6 class=\"feature-title\">Bootstrap 4</h6>\n          <p class=\"mb-0\">The most popular framework for developing web projects.</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-md-6 m-0\">\n        <div class=\"feature-content\">\n          <h6 class=\"feature-title\">angular-cli</h6>\n          <p class=\"mb-0\">Makes it easy to create an application that already works, right out of the box.</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-md-6 m-0\">\n        <div class=\"feature-content\">\n          <h6 class=\"feature-title\">Typescript</h6>\n          <p class=\"mb-0\">A typed superset of JavaScript that compiles to plain JavaScript.</p>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-md-6 m-0\">\n        <div class=\"feature-content\">\n          <h6 class=\"feature-title\">GIT</h6>\n          <p class=\"mb-0\">Grab the latest code and check log commits on updates.</p>\n        </div>\n      </div>     \n    </div>\n  </div>\n</div>\n\n<div class=\"landing-section\">\n  <div class=\"container\">\n    <div class=\"brands-wrapper d-flex align-items-center justify-content-between\">\n      <div>\n        <img src=\"assets/images/logos/angular.png\" alt=\"\">\n      </div>\n      <div>\n        <img src=\"assets/images/logos/bootstrap.png\" alt=\"\">\n      </div>\n      <div>\n        <img src=\"assets/images/logos/typescript.png\" alt=\"\">\n      </div>\n      <div>\n        <img src=\"assets/images/logos/sass.png\" alt=\"\">\n      </div>\n      <div>\n        <img src=\"assets/images/logos/npm.png\" alt=\"\">\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"landing-section\" id=\"features\">\n  <div class=\"container\">\n    <div class=\"feature-showcase\">\n      <div class=\"feature-showcase-media\">\n        <div class=\"feature-showcase-bg bg-primary\"></div>\n        <img src=\"assets/images/screen2.png\">\n      </div>\n      <div class=\"feature-showcase-content\">\n        <div class=\"feature-icon text-primary\">\n          <i class=\"icon icon-basic-accelerator\"></i>\n        </div>\n        <h6 class=\"feature-title\">Ready to go</h6>\n        <p>Get a running start with plenty of ready made page samples. Some pages include email, taskboard, social, calendar and landing pages ready for you to start working on.</p>\n        <a [routerLink]=\"['/']\" class=\"btn btn-primary\">Go to template demo</a>\n      </div>\n    </div>\n  </div>\n</div> \n\n<div class=\"landing-section\">\n  <div class=\"container\">\n    <div class=\"feature-showcase align-right\">\n      <div class=\"feature-showcase-media\">\n        <div class=\"feature-showcase-bg bg-primary\"></div>\n        <img src=\"assets/images/screen1.png\">\n      </div>\n      <div class=\"feature-showcase-content\">\n        <div class=\"feature-icon text-primary\">\n          <i class=\"icon icon-basic-accelerator\"></i>\n        </div>\n        <h6 class=\"feature-title\">Easily customize</h6>\n        <p>Select your desired layouts from a selection of varied options and themes. Sidebar features push, docked, overlay and slide modes.</p>\n        <a [routerLink]=\"['/']\" class=\"btn btn-primary\">Go to template demo</a>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"landing-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-8 offset-md-2 text-center\">\n        <h2 class=\"ff-serif text-uppercase\">Reviews for some of our products</h2>\n        <ngb-carousel>\n          <ng-template ngbSlide>\n            <blockquote class=\"blockquote\">Great! Great looking, well organized, well architected and easy to customize. I've tried out a number of other templates, and this one just makes sense and works well.\n            <cite>- Customer</cite>\n            </blockquote>\n          </ng-template>\n          <ng-template ngbSlide>\n            <blockquote class=\"blockquote\">Nice design, and most importantly it was implemented with best practices recommended by Angular 2, very reusable, maintainable, and easy to understand. I'm very impressed!!!<cite>- Customer</cite>\n            </blockquote>\n          </ng-template>\n          <ng-template ngbSlide>\n            <blockquote class=\"blockquote\">Very neatly structured source code following ng4, MD, scss conventions which makes it one of the best ng4 based themes available. It hardly takes any time to understand the flow and get started with the fun.<cite>- Customer</cite>\n            </blockquote>\n          </ng-template>\n        </ngb-carousel>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"landing-section bg-dark text-white\">\n  <div class=\"container text-center\">\n    <h3 class=\"ff-serif text-uppercase\">Simple, fast, powerful.</h3>\n    <p>Grab your copy today. Exclusively on Themeforest!</p>\n    <a href=\"https://themeforest.net/user/iamnyasha/portfolio?ref=iamnyasha\" class=\"btn btn-danger btn-lg\" target=\"_blank\">Purchase now!</a>\n  </div>\n</div>\n\n<footer class=\"landing-section footer\">\n  <div class=\"container\">\n    <div class=\"row m-b-1\">\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"footer-widget\">\n          <h6><img src=\"assets/images/logo.png\" class=\"avatar-xs\" alt=\"\"></h6>\n          <small>&copy; 2016 <a href=\"https://themeforest.net/user/iamnyasha?ref=iamnyasha\" target=\"_blank\">iamnyasha</a></small><br/><small>Designed by <a href=\"https://themeforest.net/user/iamnyasha?ref=iamnyasha\" target=\"_blank\">iamnyasha</a></small>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"footer-widget\">\n          <h6 class=\"footer-title\">Product</h6>\n          <ul>\n            <li><a [routerLink]=\"['/']\">Demo</a></li>\n            <li><a [routerLink]=\"['/docs']\">Documentation</a></li>\n            <li><a (click)=\"goToFeatures()\">Features</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"footer-widget\">\n          <h6 class=\"footer-title\">Tools</h6>\n          <ul>\n            <li><a href=\"https://cli.angular.io\" target=\"_blank\">angular-cli</a></li>\n            <li><a href=\"https://nodejs.org/en/\" target=\"_blank\">NodeJS</a></li>\n            <li><a href=\"https://angular.io/\" target=\"_blank\">Angular 4</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-lg-3 col-sm-6 col-xs-12\">\n        <div class=\"footer-widget\">\n          <h6 class=\"footer-title\">Support</h6>\n          <ul>\n            <li><a href=\"https://themeforest.net/user/iamnyasha?ref=iamnyasha\" target=\"_blank\">Leave a comment</a></li>\n            <li><a href=\"https://themeforest.net/user/iamnyasha?ref=iamnyasha\" target=\"_blank\">Send an email</a></li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* $colors\n ------------------------------------------*/\n:host /deep/ {\n  display: block;\n  background: white; }\n  :host /deep/ header {\n    position: relative;\n    display: block;\n    width: 100%; }\n  :host /deep/ .landing-header {\n    padding-top: 2rem;\n    padding-bottom: 2rem;\n    box-shadow: none; }\n    :host /deep/ .landing-header .nav-link {\n      color: rgba(255, 255, 255, 0.87);\n      font-family: \"Montserrat\", Helvetica, sans-serif;\n      font-size: smaller;\n      font-weight: 600;\n      text-transform: uppercase; }\n      :host /deep/ .landing-header .nav-link:focus, :host /deep/ .landing-header .nav-link:hover {\n        color: white; }\n  :host /deep/ .header-banner {\n    padding-top: 6rem;\n    padding-bottom: 12rem; }\n    :host /deep/ .header-banner p {\n      font-size: 1rem;\n      margin-top: 2rem;\n      margin-bottom: 2rem; }\n  :host /deep/ .header-flot-section {\n    margin-top: -70px; }\n    :host /deep/ .header-flot-section .row {\n      background: white;\n      border-radius: 0.125rem;\n      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);\n      padding: 30px; }\n      @media (max-width: 575px) {\n        :host /deep/ .header-flot-section .row {\n          padding: 30px 0; } }\n      :host /deep/ .header-flot-section .row > div {\n        margin-top: 0;\n        margin-bottom: 0; }\n      :host /deep/ .header-flot-section .row .feature-content {\n        padding: 0.5rem 0; }\n  :host /deep/ .landing-section {\n    padding-top: 3rem;\n    padding-bottom: 3rem; }\n    :host /deep/ .landing-section > .container > .row > div {\n      margin-top: 1rem;\n      margin-bottom: 1rem; }\n  :host /deep/ .feature-icon {\n    font-size: 40px;\n    padding: 0 0.5rem 0;\n    display: inline-block; }\n  :host /deep/ .feature-content {\n    padding: 0.5rem 0.5rem 0;\n    display: inline-block; }\n  :host /deep/ .feature-title,\n  :host /deep/ .footer-title {\n    font-family: \"Montserrat\", Helvetica, sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 0.02rem;\n    font-size: 13px;\n    background: transparent;\n    color: #000; }\n  :host /deep/ .brands-wrapper > div {\n    -webkit-box-flex: 0;\n        -ms-flex-positive: 0;\n            flex-grow: 0;\n    -ms-flex-negative: 1;\n        flex-shrink: 1;\n    margin: 0 1rem;\n    width: 100px; }\n  :host /deep/ .brands-wrapper img {\n    max-width: 100%;\n    transition: opacity 200ms, -webkit-filter 200ms;\n    transition: opacity 200ms, filter 200ms;\n    transition: opacity 200ms, filter 200ms, -webkit-filter 200ms;\n    opacity: .3;\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n    :host /deep/ .brands-wrapper img:focus, :host /deep/ .brands-wrapper img:hover {\n      cursor: pointer;\n      opacity: 1;\n      -webkit-filter: grayscale(0%);\n              filter: grayscale(0%); }\n  :host /deep/ .feature-showcase {\n    position: relative;\n    display: block; }\n    :host /deep/ .feature-showcase .feature-showcase-media {\n      padding: 2rem;\n      margin: 0 0 0 25%; }\n      @media (max-width: 991px) {\n        :host /deep/ .feature-showcase .feature-showcase-media {\n          margin: 0 0 0 0; } }\n      @media (max-width: 575px) {\n        :host /deep/ .feature-showcase .feature-showcase-media {\n          margin: 0;\n          padding: 0; } }\n      :host /deep/ .feature-showcase .feature-showcase-media img {\n        width: 100%;\n        max-width: 100%;\n        box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05);\n        position: relative; }\n    :host /deep/ .feature-showcase .feature-showcase-bg {\n      position: absolute;\n      top: 0;\n      right: 40%;\n      width: 50%;\n      height: 85%;\n      background: transparent; }\n    :host /deep/ .feature-showcase .feature-showcase-content {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      width: 50%;\n      text-align: center;\n      padding: 4rem 2rem;\n      background: white;\n      box-shadow: 0 0 40px 2px rgba(0, 0, 0, 0.05); }\n      @media (max-width: 767px) {\n        :host /deep/ .feature-showcase .feature-showcase-content {\n          width: 75%; } }\n      @media (max-width: 575px) {\n        :host /deep/ .feature-showcase .feature-showcase-content {\n          position: relative;\n          width: 100%; } }\n    :host /deep/ .feature-showcase.align-right .feature-showcase-media {\n      margin: 0 25% 0 0; }\n      @media (max-width: 991px) {\n        :host /deep/ .feature-showcase.align-right .feature-showcase-media {\n          margin: 0 0 0 0; } }\n    :host /deep/ .feature-showcase.align-right .feature-showcase-bg {\n      right: auto;\n      left: 40%; }\n    :host /deep/ .feature-showcase.align-right .feature-showcase-content {\n      left: auto;\n      right: 0; }\n  :host /deep/ .footer {\n    width: 100%;\n    padding: 1rem 0; }\n    :host /deep/ .footer .footer-widget {\n      padding: 1rem 0; }\n      :host /deep/ .footer .footer-widget ul {\n        margin: 0;\n        padding: 0;\n        list-style: none; }\n        :host /deep/ .footer .footer-widget ul li {\n          line-height: 2; }\n      :host /deep/ .footer .footer-widget a {\n        color: rgba(0, 0, 0, 0.87); }\n        :host /deep/ .footer .footer-widget a:focus, :host /deep/ .footer .footer-widget a:hover {\n          color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.goToFeatures = function () {
        document.getElementById('features').scrollIntoView({
            behavior: 'smooth'
        });
    };
    return LandingComponent;
}());
LandingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
    })
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__landing_routing__ = __webpack_require__("../../../../../src/app/landing/landing.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LandingModule = (function () {
    function LandingModule() {
    }
    return LandingModule;
}());
LandingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__landing_routing__["a" /* LandingRoutes */]), __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["b" /* NgbCarouselModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__landing_component__["a" /* LandingComponent */]]
    })
], LandingModule);

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingRoutes; });

var LandingRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__landing_component__["a" /* LandingComponent */]
    }];
//# sourceMappingURL=landing.routing.js.map

/***/ })

});
//# sourceMappingURL=18.chunk.js.map