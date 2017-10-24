webpackJsonp([18],{

/***/ "../../../../../src/app/fooditem/create/create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create Food Item\n      </div>\n      <div class=\"card-block\">\n          <ng-container *ngIf=\"progressLoading\">\n            <div class=\"loader02\"></div>\n          </ng-container>\n        <form #createForm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"alert\" [class.alert-success]=\"alert.status == 200\" [class.alert-danger]=\"alert.status == 400\" role=\"alert\" *ngIf=\"alert.visible\">\n            <strong>Oh snap!</strong> {{alert.message}}.\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"name.errors && name.touched\">\n                <label for=\"name\">\n                      Name\n                    </label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Name\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"food.name\" minlength=\"2\"\n                  required/>\n                <div class=\"form-control-feedback\" *ngIf=\"name.errors && name.touched\">\n                  <small [hidden]=\"!name.errors.required\">\n                    Name is required.\n                  </small>\n                  <small [hidden]=\"!name.errors.minlength\">\n                    Min characters is 2\n                  </small>\n                </div>\n              </fieldset>\n            </div>\n            <div class=\"col-md-12\">\n              <fieldset class=\"form-group\" [class.has-danger]=\"unitPrice.errors && unitPrice.touched\">\n                <label for=\"unitPrice\">\n                      Unit Price\n                    </label>\n                <input type=\"number\" class=\"form-control\" placeholder=\"Unit Price\" name=\"unitPrice\" #unitPrice=\"ngModel\" [(ngModel)]=\"food.unitPrice\"\n                  required>\n                <div class=\"form-control-feedback\" *ngIf=\"unitPrice.errors && unitPrice.touched\">\n                  <small [hidden]=\"!unitPrice.errors.required\">\n                        Your Unit Price is required.\n                      </small>\n                  <small [hidden]=\"!unitPrice.errors.minlength\">\n                        Min characters is 20\n                      </small>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"!createForm.valid\">Create</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/fooditem/create/create.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fooditem/create/create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fooditem__ = __webpack_require__("../../../../../src/app/services/fooditem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_food__ = __webpack_require__("../../../../../src/app/models/food.ts");
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
    function CreateComponent(router, foodItemService, lgaService) {
        this.router = router;
        this.foodItemService = foodItemService;
        this.lgaService = lgaService;
        this.food = new __WEBPACK_IMPORTED_MODULE_4__models_food__["a" /* Food */]();
        this.progressLoading = false;
        this.alert = {
            visible: false,
            status: null,
            message: ''
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
        this.lgas$ = this.lgaService.getAll();
    };
    CreateComponent.prototype.onSubmit = function () {
        var that = this;
        this.progressLoading = true;
        that.alert = {
            visible: false,
            status: null,
            message: ''
        };
        this.foodItemService.createFood(this.food)
            .subscribe(function (data) {
            that.food = new __WEBPACK_IMPORTED_MODULE_4__models_food__["a" /* Food */]();
            that.alert = {
                visible: true,
                status: 200,
                message: ''.concat('A new Food has been created.')
            };
            that.progressLoading = false;
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
        template: __webpack_require__("../../../../../src/app/fooditem/create/create.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fooditem/create/create.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_fooditem__["a" /* FooditemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fooditem__["a" /* FooditemService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_lga__["a" /* LgaService */]) === "function" && _c || Object])
], CreateComponent);

var _a, _b, _c;
//# sourceMappingURL=create.component.js.map

/***/ }),

/***/ "../../../../../src/app/fooditem/fooditem.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__create_create_component__ = __webpack_require__("../../../../../src/app/fooditem/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__list_list_component__ = __webpack_require__("../../../../../src/app/fooditem/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__fooditem_routing__ = __webpack_require__("../../../../../src/app/fooditem/fooditem.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular_datatables__ = __webpack_require__("../../../../angular-datatables/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooditemModule", function() { return FooditemModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FooditemModule = (function () {
    function FooditemModule() {
    }
    return FooditemModule;
}());
FooditemModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_11__fooditem_routing__["a" /* FooditemRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_12_angular_datatables__["a" /* DataTablesModule */],
            __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploadModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_9__create_create_component__["a" /* CreateComponent */], __WEBPACK_IMPORTED_MODULE_10__list_list_component__["a" /* ListComponent */]]
    })
], FooditemModule);

//# sourceMappingURL=fooditem.module.js.map

/***/ }),

/***/ "../../../../../src/app/fooditem/fooditem.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_create_component__ = __webpack_require__("../../../../../src/app/fooditem/create/create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__list_list_component__ = __webpack_require__("../../../../../src/app/fooditem/list/list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemRoutes; });


var FooditemRoutes = [
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
    }
];
//# sourceMappingURL=fooditem.routing.js.map

/***/ }),

/***/ "../../../../../src/app/fooditem/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        List of Food Items\n      </div>\n      <div class=\"card-block\">\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-striped\">\n            <thead>\n              <tr>\n                <th>Name</th>\n                <th>Unit Price</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let food of (foods$ | async)\">\n                  <td>{{food.name}}</td>\n                  <td>{{food.unitPrice}}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/fooditem/list/list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/fooditem/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fooditem__ = __webpack_require__("../../../../../src/app/services/fooditem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function ListComponent(router, fooditemService) {
        this.router = router;
        this.fooditemService = fooditemService;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.foods$ = this.fooditemService.getAll();
    };
    return ListComponent;
}());
ListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-list',
        template: __webpack_require__("../../../../../src/app/fooditem/list/list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/fooditem/list/list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_fooditem__["a" /* FooditemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fooditem__["a" /* FooditemService */]) === "function" && _b || Object])
], ListComponent);

var _a, _b;
//# sourceMappingURL=list.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/food.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Food; });
var Food = (function () {
    function Food() {
    }
    return Food;
}());

//# sourceMappingURL=food.js.map

/***/ })

});
//# sourceMappingURL=18.chunk.js.map