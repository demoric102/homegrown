webpackJsonp([26],{

/***/ "../../../../../src/app/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<ngb-accordion #acc=\"ngbAccordion\" [closeOthers]=\"true\" activeIds=\"ngb-panel-0\">\n  <ngb-panel title=\"Overview\">\n    <ng-template ngbPanelContent>\n      <p>\n        This documentation is to help you understand the template's structure. Please go through the documentation carefully to understand how this template is made and how to edit this properly. Basic HTML, CSS(SASS), JS(Typescript) and NodeJS knowledge is required to customize this template.\n      </p>\n      <p>\n        If you have any questions that are beyond the scope of this help file, please feel free to get in touch.\n      </p>\n      <div class=\"alert alert-info\">\n        Support requests can go through the form\n        <a href=\"http://themeforest.net/user/iamnyasha/?ref=iamnyasha\" target=\"_blank\">\n          on my ThemeForest profile page\n        </a>\n        or via email.\n      </div>\n\n      <div class=\"alert alert-danger\">\n        You should have some knowledge of teminal/command line, NodeJS, NPM, SCSS and Typescript inorder to use this template.<br/> This is also an angular template, static files are not included and neither will this item work with Wordpress.\n      </div>\n\n      <p>\n        Support for my items includes:\n      </p>\n      <ul>\n        <li><a>\n          Responding to questions or problems regarding the item and its features\n        </a></li>\n        <li><a>\n          Fixing bugs and reported issues\n        </a></li>\n        <li><a>\n          Providing updates to ensure compatibility with new software versions\n        </a></li>\n      </ul>\n      <p>\n        Item support does not include:\n      </p>\n      <ul>\n        <li><a>\n          Customization and installation services\n        </a></li>\n        <li><a>\n          Support for third party software and plug-ins\n        </a></li>\n      </ul>\n      <p>\n        Before seeking support please:\n      </p>\n      <ul>\n        <li><a>\n          Make sure your question is a valid item Issue and not a customization request.\n        </a></li>\n        <li><a>\n          Make sure you have read through the documentation and any related guides before asking support on how to accomplish a task.\n        </a></li>\n        <li><a>\n          Make sure to double check the item FAQs.\n        </a></li>\n        <li><a>\n          If you have customized your item and now have an issue, back-track to make sure you didn't make a mistake. If you have made changes and can't find the issue, please provide us with your changelog.\n        </a></li>\n        <li><a>\n          Most of the time we find that the solution to people's issues can be solved with a simple \"Google Search\". You might want to try that before seeking support. You might be able to fix the issue yourself much quicker than we can respond to your request.\n        </a></li>\n        <li><a>\n          Make sure to state the name of the item you are having issues with when requesting support via ThemeForest.\n        </a></li>\n      </ul>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"What is it?\">\n    <ng-template ngbPanelContent>\n      <p>\n        Decima is a creative bootstrap admin template built for Angular 4+. It comes out of the box with AoT and lazy loading support, Language translation. With this, you get all you need to start working on your SAAS, CRM, CMS or dashboard based project.\n      </p>\n      <p>\n        Once you've purchased Decima please consider giving a 5 star rating, it helps in pushing out more updates and adding a lot more features.\n      </p>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Getting prerequisites\">\n    <ng-template ngbPanelContent>\n      <p>This template is built with angular-cli and requires Node 6.9.0+ and NPM 3+ to be installed.</p>\n\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Installing the prerequisites</strong></p>\n      <p><strong>Node.js and NPM:</strong> You can download Node.js from <a href=\"https://nodejs.org\">https://nodejs.org</a>. NPM comes bundled with Node.js</p>\n\n      <p><strong>angular-cli:</strong> You can install angular-cli by executing from your terminal <b>npm install -g @angular/cli</b>. More details can be found here <a href=\"https://github.com/angular/angular-cli\">https://github.com/angular/angular-cli</a> </p>\n\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Installing the npm packages</strong></p>\n      <p>Before proceding you'll need to install npm packages. You can do this by running <strong>npm install</strong> from the root of your project to install all the necessary dependencies.</p>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Command line\">\n    <ng-template ngbPanelContent>\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Development server</strong></p>\n      <p>Run <code>ng serve</code> for a dev server. Navigate to <code>http://localhost:4200/</code>. The app will automatically reload if you change any of the source files.</p>\n\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Code scaffolding</strong></p>\n      <p>Run <code>ng generate component component-name</code> to generate a new component. You can also use <code>ng generate directive/pipe/service/class</code>.</p>\n\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Building</strong></p>\n      <p>Run <code>ng build</code> to build the project. The build artifacts will be stored in the <code>dist/</code> directory. Use the <code>--prod</code> flag for a production build. Use <code>--aot</code> flag for a AoT build</p>\n\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Further help</strong></p>\n      <p>To get more help on the <code>angular-cli</code> use <code>ng --help</code> or go check out <a href=\"https://github.com/angular/angular-cli\">https://github.com/angular/angular-cli</a>.</p>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Utility helpers\">\n    <ng-template ngbPanelContent>\n      <p>\n        These are all the available helper classes used in the template. Use these alongside the utility classess provided by bootstrap.\n      </p>\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Avatars</strong></p>\n      <ul>\n        <li><a>\n          <code>.avatar-status</code> Staus indicator for avatar images\n        </a></li>\n        <li><a>\n          <code>.avatar-xxlg</code> avatar image with width of 32rem\n        </a></li>\n        <li><a>\n          <code>.avatar-xlg</code> avatar image with width of 16rem\n        </a></li>\n        <li><a>\n          <code>.avatar-lg</code> avatar image with width of 8rem\n        </a></li>\n\n        <li><a>\n          <code>.avatar-md</code> avatar image with width of 4rem\n        </a></li>\n        <li><a>\n          <code>.avatar-sm</code> avatar image with width of 3rem\n        </a></li>\n        <li><a>\n          <code>.avatar-xs</code> avatar image with width of 2.125rem\n        </a></li>\n        <li><a>\n          <code>.avatar-xxs</code> avatar image with width of 1.375rem\n        </a></li>\n      </ul>\n\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Layout</strong></p>\n      <ul>\n        <li><a>\n          <code>.min-height-100 </code> min-height 100%\n        </a></li>\n        <li><a>\n          <code>.page-height </code> page height minus the main header\n        </a></li>\n        <li><a>\n          <code>.scroll-y </code> vertical scrollbars\n        </a></li>\n        <li><a>\n          <code>.no-footer </code> remove the main footer\n        </a></li>\n      </ul>\n\n      <p class=\"ff-headers text-uppercase mb-3\"><strong>Typography</strong></p>\n      <ul>\n        <li><a>\n          <code>.ff-sans </code> style text with the main sans font-family \n        </a></li>\n        <li><a>\n          <code>.ff-serif </code> style text with the main serif font-family\n        </a></li>\n        <li><a>\n          <code>.ff-headers </code> style text with the main headers font-family\n        </a></li>\n        <li><a>\n          <code>.fw-300 </code> font weight of 300\n        </a></li>\n        <li><a>\n          <code>.fw-400 </code> font weight of 400\n        </a></li>\n        <li><a>\n          <code>.fw-500 </code> font weight of 500\n        </a></li>\n        <li><a>\n          <code>.fw-600 </code> font weight of 600\n        </a></li>\n        <li><a>\n          <code>.no-bg </code> remove background color\n        </a></li>\n        <li><a>\n          <code>.shadow </code> add slight shadow hint\n        </a></li>\n        <li><a>\n          <code>.no-shadow </code> remove shadow\n        </a></li>\n      </ul>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Color palette\">\n    <ng-template ngbPanelContent>\n      <p>Background colors are named using the format: bg-*color*-*shade*</p>\n      <p><b>Where color is one of:</b> red, pink , purple, deep-purple, indigo, blue, light-blue, cyan, teal, green, light-green, lime, yellow, amber, orange, deep-orage, brown, grey, blue-grey</p>\n      <p><b>Where shade is one of:</b> 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, A100, A200, A400, A700</p>\n      <p>e.g bg-red-500</p>\n      <div class=\"row color-palette\">\n        <div class=\"col-md-4 mt-3\" *ngFor=\"let color of colors\">\n          <ul class=\"list-group\">\n            <li class=\"list-group-item justify-content-between border-0 bg-{{color.options[5]}} ff-headers text-uppercase\">\n              {{color.name}}\n            </li>\n            <li class=\"list-group-item justify-content-between border-0 bg-{{option}}\"  *ngFor=\"let option of color.options\">\n              {{option}}\n            </li>\n          </ul>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-panel>\n  <ngb-panel title=\"Third Party\">\n    <ng-template ngbPanelContent>\n      <p>The following is a list of resources, plugins and other assets used in creating this template. Follow the links for more information on how you can use them.</p>\n      <ol>\n      <li><a href=\"https://angular.io/\">Angular</a></li>\n      <li><a href=\"http://getbootstrap.com/\">Bootstrap 4 - Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.</a></li>\n      <li><a href=\"https://ng-bootstrap.github.io/\">ng-bootstrap - Bootstrap 4 components, powered by Angular</a></li>\n      <li><a href=\"http://www.ngx-translate.com/\">ngx-translate - An implementation of angular translate for Angular</a></li>\n      <li><a href=\"https://github.com/swimlane/ngx-charts\">ngx-charts - Declarative Charting Framework for Angular2 and beyond!</a></li>\n      <li><a href=\"https://github.com/swimlane/ngx-datatable\">ngx-datatable - A feature-rich yet lightweight data-table crafted for Angular4 and beyond!</a></li>\n      <li><a href=\"https://github.com/mattlewis92/angular-calendar\">angular-calendar - Angular calendar - A flexible calendar component for angular 2.0+ that can display events on a month, week or day view.</a></li>\n      <li><a href=\"https://github.com/500tech/angular-tree-component\">angular-tree-component - A simple yet powerful tree component for Angular (>2)</a></li>\n      <li><a href=\"https://github.com/text-mask/text-mask\">text-mask - Input mask for React, Angular, Ember, Vue, & plain JavaScript</a></li>\n      <li><a href=\"https://github.com/valor-software/ng2-dragula\">ng2-dragula - Simple drag and drop with dragula</a></li>\n      <li><a href=\"https://github.com/arkon/ng-sidebar\">ng-sidebar - Angular sidebar component</a></li>\n      <li><a href=\"https://github.com/valor-software/ng2-file-upload\">ng2-file-upload - Easy to use Angular2 components for files upload</a></li>\n      <li><a href=\"https://github.com/yuyang041060120/ng2-validation\">ng2-validation - angular2 validation</a></li>\n      <li><a href=\"http://quilljs.com/\">Your powerful, rich text editor</a></li>\n      <li><a href=\"https://github.com/sindresorhus/screenfull.js/\">screenfull - Simple wrapper for cross-browser usage of the JavaScript Fullscreen API</a></li>\n      <li><a href=\"https://github.com/SebastianM/angular-google-maps\">angular-google-maps - Angular 2+ Google Maps Components</a></li>\n      <li>Header Font generated by <a href=\"http://www.flaticon.com\">flaticon.com</a>. Under <a href=\"http://creativecommons.org/licenses/by/3.0/\">CC</a>: <a data-file=\"003-notification\" href=\"http://www.flaticon.com/authors/bryn-taylor\">Bryn Taylor</a>, <a data-file=\"005-close\" href=\"http://www.flaticon.com/authors/eugene-pavovsky\">Eugene Pavovsky</a>, <a data-file=\"001-caret\" href=\"http://www.flaticon.com/authors/dave-gandy\">Dave Gandy</a>, <a data-file=\"002-search\" href=\"http://www.flaticon.com/authors/gregor-cresnar\">Gregor Cresnar</a>, <a data-file=\"004-fullscreen\" href=\"http://www.flaticon.com/authors/hadrien\">Hadrien</a></li>\n      </ol>\n    </ng-template>\n  </ngb-panel>\n</ngb-accordion>"

/***/ }),

/***/ "../../../../../src/app/docs/docs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/docs/docs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DocsComponent = (function () {
    function DocsComponent() {
        this.colors = [{
                name: 'red',
                options: [
                    'red-50', 'red-100', 'red-200', 'red-300',
                    'red-400', 'red-500', 'red-600', 'red-700',
                    'red-800', 'red-900', 'red-A100', 'red-A200',
                    'red-A400', 'red-A700'
                ],
            }, {
                name: 'pink',
                options: [
                    'pink-50', 'pink-100', 'pink-200', 'pink-300',
                    'pink-400', 'pink-500', 'pink-600', 'pink-700',
                    'pink-800', 'pink-900', 'pink-A100', 'pink-A200',
                    'pink-A400', 'pink-A700'
                ],
            }, {
                name: 'purple',
                options: [
                    'purple-50', 'purple-100', 'purple-200', 'purple-300',
                    'purple-400', 'purple-500', 'purple-600', 'purple-700',
                    'purple-800', 'purple-900', 'purple-A100', 'purple-A200',
                    'purple-A400', 'purple-A700'
                ],
            }, {
                name: 'deep-purple',
                options: [
                    'deep-purple-50', 'deep-purple-100', 'deep-purple-200', 'deep-purple-300',
                    'deep-purple-400', 'deep-purple-500', 'deep-purple-600', 'deep-purple-700',
                    'deep-purple-800', 'deep-purple-900', 'deep-purple-A100', 'deep-purple-A200',
                    'deep-purple-A400', 'deep-purple-A700'
                ],
            }, {
                name: 'indigo',
                options: [
                    'indigo-50', 'indigo-100', 'indigo-200', 'indigo-300',
                    'indigo-400', 'indigo-500', 'indigo-600', 'indigo-700',
                    'indigo-800', 'indigo-900', 'indigo-A100', 'indigo-A200',
                    'indigo-A400', 'indigo-A700'
                ],
            }, {
                name: 'blue',
                options: [
                    'blue-50', 'blue-100', 'blue-200', 'blue-300',
                    'blue-400', 'blue-500', 'blue-600', 'blue-700',
                    'blue-800', 'blue-900', 'blue-A100', 'blue-A200',
                    'blue-A400', 'blue-A700'
                ],
            }, {
                name: 'light-blue',
                options: [
                    'light-blue-50', 'light-blue-100', 'light-blue-200', 'light-blue-300',
                    'light-blue-400', 'light-blue-500', 'light-blue-600', 'light-blue-700',
                    'light-blue-800', 'light-blue-900', 'light-blue-A100', 'light-blue-A200',
                    'light-blue-A400', 'light-blue-A700'
                ],
            }, {
                name: 'cyan',
                options: [
                    'cyan-50', 'cyan-100', 'cyan-200', 'cyan-300',
                    'cyan-400', 'cyan-500', 'cyan-600', 'cyan-700',
                    'cyan-800', 'cyan-900', 'cyan-A100', 'cyan-A200',
                    'cyan-A400', 'cyan-A700'
                ],
            }, {
                name: 'teal',
                options: [
                    'teal-50', 'teal-100', 'teal-200', 'teal-300',
                    'teal-400', 'teal-500', 'teal-600', 'teal-700',
                    'teal-800', 'teal-900', 'teal-A100', 'teal-A200',
                    'teal-A400', 'teal-A700'
                ],
            }, {
                name: 'green',
                options: [
                    'green-50', 'green-100', 'green-200', 'green-300',
                    'green-400', 'green-500', 'green-600', 'green-700',
                    'green-800', 'green-900', 'green-A100', 'green-A200',
                    'green-A400', 'green-A700'
                ],
            }, {
                name: 'light-green',
                options: [
                    'light-green-50', 'light-green-100', 'light-green-200', 'light-green-300',
                    'light-green-400', 'light-green-500', 'light-green-600', 'light-green-700',
                    'light-green-800', 'light-green-900', 'light-green-A100', 'light-green-A200',
                    'light-green-A400', 'light-green-A700'
                ],
            }, {
                name: 'lime',
                options: [
                    'lime-50', 'lime-100', 'lime-200', 'lime-300',
                    'lime-400', 'lime-500', 'lime-600', 'lime-700',
                    'lime-800', 'lime-900', 'lime-A100', 'lime-A200',
                    'lime-A400', 'lime-A700'
                ],
            }, {
                name: 'yellow',
                options: [
                    'yellow-50', 'yellow-100', 'yellow-200', 'yellow-300',
                    'yellow-400', 'yellow-500', 'yellow-600', 'yellow-700',
                    'yellow-800', 'yellow-900', 'yellow-A100', 'yellow-A200',
                    'yellow-A400', 'yellow-A700'
                ],
            }, {
                name: 'amber',
                options: [
                    'amber-50', 'amber-100', 'amber-200', 'amber-300',
                    'amber-400', 'amber-500', 'amber-600', 'amber-700',
                    'amber-800', 'amber-900', 'amber-A100', 'amber-A200',
                    'amber-A400', 'amber-A700'
                ],
            }, {
                name: 'orange',
                options: [
                    'orange-50', 'orange-100', 'orange-200', 'orange-300',
                    'orange-400', 'orange-500', 'orange-600', 'orange-700',
                    'orange-800', 'orange-900', 'orange-A100', 'orange-A200',
                    'orange-A400', 'orange-A700'
                ],
            }, {
                name: 'deep-orange',
                options: [
                    'deep-orange-50', 'deep-orange-100', 'deep-orange-200', 'deep-orange-300',
                    'deep-orange-400', 'deep-orange-500', 'deep-orange-600', 'deep-orange-700',
                    'deep-orange-800', 'deep-orange-900', 'deep-orange-A100', 'deep-orange-A200',
                    'deep-orange-A400', 'deep-orange-A700'
                ],
            }, {
                name: 'brown',
                options: [
                    'brown-50', 'brown-100', 'brown-200', 'brown-300',
                    'brown-400', 'brown-500', 'brown-600', 'brown-700',
                    'brown-800', 'brown-900', 'brown-A100', 'brown-A200',
                    'brown-A400', 'brown-A700'
                ],
            }, {
                name: 'grey',
                options: [
                    'grey-50', 'grey-100', 'grey-200', 'grey-300',
                    'grey-400', 'grey-500', 'grey-600', 'grey-700',
                    'grey-800', 'grey-900', 'grey-A100', 'grey-A200',
                    'grey-A400', 'grey-A700'
                ],
            }, {
                name: 'blue-grey',
                options: [
                    'blue-grey-50', 'blue-grey-100', 'blue-grey-200', 'blue-grey-300',
                    'blue-grey-400', 'blue-grey-500', 'blue-grey-600', 'blue-grey-700',
                    'blue-grey-800', 'blue-grey-900', 'blue-grey-A100', 'blue-grey-A200',
                    'blue-grey-A400', 'blue-grey-A700'
                ],
            }];
    }
    return DocsComponent;
}());
DocsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-docs',
        template: __webpack_require__("../../../../../src/app/docs/docs.component.html"),
        styles: [__webpack_require__("../../../../../src/app/docs/docs.component.scss")]
    })
], DocsComponent);

//# sourceMappingURL=docs.component.js.map

/***/ }),

/***/ "../../../../../src/app/docs/docs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docs_component__ = __webpack_require__("../../../../../src/app/docs/docs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__docs_routing__ = __webpack_require__("../../../../../src/app/docs/docs.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DocsModule = (function () {
    function DocsModule() {
    }
    return DocsModule;
}());
DocsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__docs_routing__["a" /* DocsRoutes */]), __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbAccordionModule */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__docs_component__["a" /* DocsComponent */]]
    })
], DocsModule);

//# sourceMappingURL=docs.module.js.map

/***/ }),

/***/ "../../../../../src/app/docs/docs.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docs_component__ = __webpack_require__("../../../../../src/app/docs/docs.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsRoutes; });

var DocsRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__docs_component__["a" /* DocsComponent */],
        data: {
            heading: 'Documentation'
        }
    }];
//# sourceMappingURL=docs.routing.js.map

/***/ })

});
//# sourceMappingURL=26.chunk.js.map