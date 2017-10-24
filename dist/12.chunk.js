webpackJsonp([12],{

/***/ "../../../../../src/app/zone/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create Zone\n      </div>\n      <div class=\"card-block\">\n        <form #createForm=\"ngForm\" (ngSubmit)=\"bvnModal.open()\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"name.errors && name.touched\">\n                <label for=\"name\">\n                      Name\n                    </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"First Name\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"zone.name\" minlength=\"2\"\n                  required/>\n                <div class=\"form-control-feedback\" *ngIf=\"name.errors && name.touched\">\n                  <small [hidden]=\"!name.errors.required\">\n                    LGA Name is required.\n                  </small>\n                  <small [hidden]=\"!name.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-12\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"description.errors && description.touched\">\n                <label for=\"description\">\n                      Description\n                    </label>\n                <textarea class=\"form-control\" placeholder=\"Description\" name=\"description\" #description=\"ngModel\" [(ngModel)]=\"zone.description\"\n                  minlength=\"20\" required>\n                    </textarea>\n                <div class=\"form-control-feedback\" *ngIf=\"description.errors && description.touched\">\n                  <small [hidden]=\"!description.errors.required\">\n                        Your description is required.\n                      </small>\n                  <small [hidden]=\"!description.errors.minlength\">\n                        Min characters is 20\n                      </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n\n\n\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/zone/create/create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zone/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
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
    function CreateComponent(router, catererService, lgaService) {
        this.router = router;
        this.catererService = catererService;
        this.lgaService = lgaService;
        this.zone = {};
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
    };
    CreateComponent.prototype.onSubmit = function () {
        console.log(this.zone);
        this.catererService.createCaterer(this.zone).subscribe(function (response) {
            // this.router.navigate( ['/'] );
            console.info(response);
        }, function (reason) {
            console.warn(reason);
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-create',
        template: __webpack_require__("../../../../../src/app/zone/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/zone/create/create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], CreateComponent);

var _a, _b, _c;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/zone/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-lg-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          List of Zones\n        </div>\n        <div class=\"card-block\">\n          <div class=\"table-responsive\">\n            <table datatable [dtOptions]=\"dtOptions\" class=\"table row-border hover dataTable\">\n              <thead>\n                <tr>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Phone</th>\n                  <th>LGA</th>\n                  <th>Date Joined</th>\n                </tr>\n              </thead>\n            </table>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/zone/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zone/list/list.component.ts":
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
        this.dtOptions = {};
        this.supplier = {};
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
                _this.zoneService.datatable(data)
                    .subscribe(function (response) {
                    callback(response);
                });
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
                    data: 'lga.name',
                    width: '20%',
                    orderable: false,
                },
                {
                    data: 'createdAt',
                    width: '20%',
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
        template: __webpack_require__("../../../../../src/app/zone/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/zone/list/list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_caterer__["a" /* CatererService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], ListComponent);

var _a, _b, _c;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/zone/match/match.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create Supplier\n      </div>\n      <div class=\"card-block\">\n          <form #createForm=\"ngForm\" (ngSubmit)=\"bvnModal.open()\">\n              \n              <div class=\"row\">\n                \n                <div class=\"col-md-6\">\n                  <fieldset class=\"form-group\" [class.has-danger]=\"lga.errors && lga.touched\">\n                    <label for=\"lga\">\n                LGA\n              </label>\n                    <select name=\"lga\" class=\"form-control\" #lga=\"ngModel\" [(ngModel)]=\"zone.lga\">\n                <option *ngFor=\"let lga of (lgas$ | async)\">{{lga?.name}}</option>\n            </select>\n                  </fieldset>\n                </div>\n                <div class=\"col-md-6\">\n                    <fieldset class=\"form-group\" [class.has-danger]=\"zone.errors && zone.touched\">\n                      <label for=\"zone\">\n                  Zone\n                </label>\n                      <select name=\"zone\" class=\"form-control\" #zone=\"ngModel\" [(ngModel)]=\"zone.zone\">\n                  <option *ngFor=\"let zone of (zones$ | async)\" [value]=\"zone.id\">{{zone?.name}}</option>\n              </select>\n                    </fieldset>\n                  </div>\n              </div>\n              <div class=\"block mb-3\"></div>\n              <!-- <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!form.valid\">Create</button> -->\n              <button class=\"btn btn-primary\" type=\"submit\">Create</button>\n            </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/zone/match/match.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/zone/match/match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MatchComponent = (function () {
    function MatchComponent(router, lgaService) {
        this.router = router;
        this.lgaService = lgaService;
        this.zone = {};
    }
    MatchComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
    };
    MatchComponent.prototype.onSubmit = function () {
        console.log(this.zone);
    };
    return MatchComponent;
}());
MatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match',
        template: __webpack_require__("../../../../../src/app/zone/match/match.component.html"),
        styles: [__webpack_require__("../../../../../src/app/zone/match/match.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_lga__["a" /* LgaService */]) === "function" && _b || Object])
], MatchComponent);

var _a, _b;
//# sourceMappingURL=match.component.js.map

/***/ }),

/***/ "../../../../../src/app/zone/zone.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__zone_routing__ = __webpack_require__("../../../../../src/app/zone/zone.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_create_component__ = __webpack_require__("../../../../../src/app/zone/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__list_list_component__ = __webpack_require__("../../../../../src/app/zone/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__match_match_component__ = __webpack_require__("../../../../../src/app/zone/match/match.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoneModule", function() { return ZoneModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ZoneModule = (function () {
    function ZoneModule() {
    }
    return ZoneModule;
}());
ZoneModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__zone_routing__["a" /* ZoneRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_13_angular_datatables__["a" /* DataTablesModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__create_create_component__["a" /* CreateComponent */], __WEBPACK_IMPORTED_MODULE_11__list_list_component__["a" /* ListComponent */], __WEBPACK_IMPORTED_MODULE_12__match_match_component__["a" /* MatchComponent */]]
    })
], ZoneModule);

//# sourceMappingURL=zone.module.js.map

/***/ }),

/***/ "../../../../../src/app/zone/zone.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_create_component__ = __webpack_require__("../../../../../src/app/zone/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/zone/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__match_match_component__ = __webpack_require__("../../../../../src/app/zone/match/match.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZoneRoutes; });



var ZoneRoutes = [
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
        path: 'match',
        component: __WEBPACK_IMPORTED_MODULE_2__match_match_component__["a" /* MatchComponent */],
        data: {
            heading: 'Match Zone',
            removeFooter: true
        }
    }
];
//# sourceMappingURL=zone.routing.js.map

/***/ })

});
//# sourceMappingURL=12.chunk.js.map