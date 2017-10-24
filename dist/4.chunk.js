webpackJsonp([4],{

/***/ "../../../../../src/app/form/basic/basic.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create School\n      </div>\n      <div class=\"card-block\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"school\">School Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"School Name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"zone\">Zone</label>\n            <input type=\"password\" class=\"form-control\" id=\"zone\" placeholder=\"Enter Zone\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <select name=\"lga\" class=\"form-control\" id=\"\">\n              <option value=\"ADAVI\">ADAVI</option>\n              <option value=\"AJAOKUTA\">AJAOKUTA</option>\n              <option value=\"ANKPA\">ANKPA</option>\n              <option value=\"BASSA\">BASSA</option>\n              <option value=\"DEKINA\">DEKINA</option>\n              <option value=\"IBAJI\">IBAJI</option>\n              <option value=\"IDAH\">IDAH</option>\n              <option value=\"IGALAMELA\">IGALAMELA</option>\n              <option value=\"IGALAMELA ODULU\">IGALAMELA ODULU</option>\n              <option value=\"IJUMU\">IJUMU</option>\n              <option value=\"KABBA/BUNU\">KABBA/BUNU</option>\n              <option value=\"KOGI\">KOGI</option>\n              <option value=\"LOKOJA\">LOKOJA</option>\n              <option value=\"MOPA MURO\">MOPA MURO</option>\n              <option value=\"OFU\">OFU</option>\n              <option value=\"OGORI/MAGONGO\">OGORI/MAGONGO</option>\n              <option value=\"OKEHI\">OKEHI</option>\n              <option value=\"OKENE\">OKENE</option>\n              <option value=\"OLAMABORO\">OLAMABORO</option>\n              <option value=\"OMALA\">OMALA</option>\n              <option value=\"YAGBA EAST\">YAGBA EAST</option>\n              <option value=\"YAGBA WEST\">YAGBA WEST</option>\n          </select>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/basic/basic.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/basic/basic.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var BasicComponent = (function () {
    function BasicComponent() {
    }
    return BasicComponent;
}());
BasicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basic',
        template: __webpack_require__("../../../../../src/app/form/basic/basic.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/basic/basic.component.scss")]
    })
], BasicComponent);

//# sourceMappingURL=basic.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/editor/editor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Create Supplier\n      </div>\n      <div class=\"card-block\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"supplierName\">Supplier Name</label>\n            <input type=\"text\" class=\"form-control\" placeholder=\"Supplier Name\" minlength=\"2\">\n            <div class=\"form-control-feedback\" *ngIf=\"suppllierName.errors && suppllierName.touched\">\n              <small [hidden]=\"!suppllierName.errors.required\">\n                Supplier Name is required.\n              </small>\n              <small [hidden]=\"!suppllierName.errors.minlength\">\n                Min characters is 2\n              </small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"supplierAddress\">Supplier Address</label>\n            <input name=\"supplierAddress\" type=\"text\" class=\"form-control\" placeholder=\"Supplier Address\" minlength=\"10\">\n            <div class=\"form-control-feedback\" *ngIf=\"suppllierAddress.errors && suppllierAddress.touched\">\n              <small [hidden]=\"!suppllierAddress.errors.required\">\n                Supplier Address\n              </small>\n              <small [hidden]=\"!suppllierAddress.errors.minlength\">\n                Min characters is 10\n              </small>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"zone\">Zone</label>\n            <select name=\"zone\" class=\"form-control\" id=\"\">\n              <option value=\"Zone 1\">Zone 1</option>\n              <option value=\"Zone 2\">Zone 2</option>\n              <option value=\"Zone 3\">Zone 3</option>\n          </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n            <select name=\"lga\" class=\"form-control\" id=\"\">\n              <option value=\"ADAVI\">ADAVI</option>\n              <option value=\"AJAOKUTA\">AJAOKUTA</option>\n              <option value=\"ANKPA\">ANKPA</option>\n              <option value=\"BASSA\">BASSA</option>\n              <option value=\"DEKINA\">DEKINA</option>\n              <option value=\"IBAJI\">IBAJI</option>\n              <option value=\"IDAH\">IDAH</option>\n              <option value=\"IGALAMELA\">IGALAMELA</option>\n              <option value=\"IGALAMELA ODULU\">IGALAMELA ODULU</option>\n              <option value=\"IJUMU\">IJUMU</option>\n              <option value=\"KABBA/BUNU\">KABBA/BUNU</option>\n              <option value=\"KOGI\">KOGI</option>\n              <option value=\"LOKOJA\">LOKOJA</option>\n              <option value=\"MOPA MURO\">MOPA MURO</option>\n              <option value=\"OFU\">OFU</option>\n              <option value=\"OGORI/MAGONGO\">OGORI/MAGONGO</option>\n              <option value=\"OKEHI\">OKEHI</option>\n              <option value=\"OKENE\">OKENE</option>\n              <option value=\"OLAMABORO\">OLAMABORO</option>\n              <option value=\"OMALA\">OMALA</option>\n              <option value=\"YAGBA EAST\">YAGBA EAST</option>\n              <option value=\"YAGBA WEST\">YAGBA WEST</option>\n          </select>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/editor/editor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/editor/editor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quill__ = __webpack_require__("../../../../quill/dist/quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_quill__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EditorComponent = (function () {
    function EditorComponent() {
    }
    EditorComponent.prototype.ngOnInit = function () {
        var quill = new __WEBPACK_IMPORTED_MODULE_1_quill__('#editor-container', {
            modules: {
                toolbar: {
                    container: '#toolbar-toolbar'
                }
            },
            placeholder: 'Compose an epic...',
            theme: 'snow'
        });
    };
    return EditorComponent;
}());
EditorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-editor',
        template: __webpack_require__("../../../../../src/app/form/editor/editor.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/editor/editor.component.scss")]
    })
], EditorComponent);

//# sourceMappingURL=editor.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__form_routing__ = __webpack_require__("../../../../../src/app/form/form.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__basic_basic_component__ = __webpack_require__("../../../../../src/app/form/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__masks_masks_component__ = __webpack_require__("../../../../../src/app/form/masks/masks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__editor_editor_component__ = __webpack_require__("../../../../../src/app/form/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__validation_validation_component__ = __webpack_require__("../../../../../src/app/form/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__upload_upload_component__ = __webpack_require__("../../../../../src/app/form/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tree_tree_component__ = __webpack_require__("../../../../../src/app/form/tree/tree.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var FormModule = (function () {
    function FormModule() {
    }
    return FormModule;
}());
FormModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__form_routing__["a" /* FormRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploadModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__basic_basic_component__["a" /* BasicComponent */], __WEBPACK_IMPORTED_MODULE_11__masks_masks_component__["a" /* MasksComponent */], __WEBPACK_IMPORTED_MODULE_12__editor_editor_component__["a" /* EditorComponent */], __WEBPACK_IMPORTED_MODULE_13__validation_validation_component__["a" /* ValidationComponent */], __WEBPACK_IMPORTED_MODULE_14__upload_upload_component__["a" /* UploadComponent */], __WEBPACK_IMPORTED_MODULE_15__tree_tree_component__["a" /* TreeComponent */]]
    })
], FormModule);

//# sourceMappingURL=form.module.js.map

/***/ }),

/***/ "../../../../../src/app/form/form.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basic_basic_component__ = __webpack_require__("../../../../../src/app/form/basic/basic.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__masks_masks_component__ = __webpack_require__("../../../../../src/app/form/masks/masks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editor_editor_component__ = __webpack_require__("../../../../../src/app/form/editor/editor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validation_validation_component__ = __webpack_require__("../../../../../src/app/form/validation/validation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__upload_upload_component__ = __webpack_require__("../../../../../src/app/form/upload/upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__ = __webpack_require__("../../../../../src/app/form/tree/tree.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormRoutes; });






var FormRoutes = [
    {
        path: '',
        children: [{
                path: 'basic',
                component: __WEBPACK_IMPORTED_MODULE_0__basic_basic_component__["a" /* BasicComponent */],
                data: {
                    heading: 'Basic forms'
                }
            }, {
                path: 'masks',
                component: __WEBPACK_IMPORTED_MODULE_1__masks_masks_component__["a" /* MasksComponent */],
                data: {
                    heading: 'Masks'
                }
            }, {
                path: 'editor',
                component: __WEBPACK_IMPORTED_MODULE_2__editor_editor_component__["a" /* EditorComponent */],
                data: {
                    heading: 'Editor'
                }
            }, {
                path: 'validation',
                component: __WEBPACK_IMPORTED_MODULE_3__validation_validation_component__["a" /* ValidationComponent */],
                data: {
                    heading: 'Validation'
                }
            }, {
                path: 'upload',
                component: __WEBPACK_IMPORTED_MODULE_4__upload_upload_component__["a" /* UploadComponent */],
                data: {
                    heading: 'Upload'
                }
            }, {
                path: 'tree',
                component: __WEBPACK_IMPORTED_MODULE_5__tree_tree_component__["a" /* TreeComponent */],
                data: {
                    heading: 'Tree'
                }
            }]
    }
];
//# sourceMappingURL=form.routing.js.map

/***/ }),

/***/ "../../../../../src/app/form/masks/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return placeholderChars; });
/* unused harmony export textMaskProps */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return alphabetic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return digit; });
var placeholderChars = {
    whitespace: '\u2000',
    underscore: '_'
};
var textMaskProps = [
    'placeholder',
    'placeholderChar',
    'pipe',
    'keepCharPositions',
    'mask',
    'guide'
];
var alphabetic = /[A-Z]/i;
var digit = /\d/;
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/app/form/masks/masks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Input text masks</div>\n  <div class=\"card-block\">\n    <div class=\"form-group row\" *ngFor=\"let choice of choices\">\n      <label class=\"col-2 col-form-label\">{{choice.name}}</label>\n      <div class=\"col-10\">\n        <input class=\"form-control\" type=\"text\" placeholder=\"{{choice.placeholder}}\" [textMask]=\"{mask: choice.mask}\">\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/masks/masks.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/masks/masks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask__ = __webpack_require__("../../../../text-mask-addons/dist/createNumberMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_emailMask__ = __webpack_require__("../../../../text-mask-addons/dist/emailMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_emailMask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_emailMask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createAutoCorrectedDatePipe__ = __webpack_require__("../../../../text-mask-addons/dist/createAutoCorrectedDatePipe.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createAutoCorrectedDatePipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createAutoCorrectedDatePipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__constants__ = __webpack_require__("../../../../../src/app/form/masks/constants.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var defaultValues = {
    placeholderChar: __WEBPACK_IMPORTED_MODULE_5__constants__["a" /* placeholderChars */].whitespace,
    guide: true,
    pipe: null,
    keepCharPositions: false,
    help: null,
    placeholder: null
};
var MasksComponent = (function () {
    function MasksComponent() {
        this.formControlInput = new __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormControl"]();
        this.choices = [{
                name: 'US phone number',
                mask: ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
                placeholder: '(555) 495-3947'
            }, {
                name: 'US phone number with country code',
                mask: ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/],
                placeholder: '+1 (555) 495-3947'
            }, {
                name: 'Date',
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                placeholder: '25/09/1970'
            }, {
                name: 'Date (auto-corrected)',
                mask: [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/],
                pipe: __WEBPACK_IMPORTED_MODULE_3_text_mask_addons_dist_createAutoCorrectedDatePipe___default()(),
                placeholder: 'Please enter a date',
            }, {
                name: 'US dollar amount',
                mask: __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask___default()(),
                placeholder: 'Enter an amount',
            }, {
                name: 'US dollar amount (allows decimal)',
                mask: __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask___default()({ allowDecimal: true }),
                placeholder: 'Enter an amount',
            }, {
                name: 'Percentage amount',
                mask: __WEBPACK_IMPORTED_MODULE_1_text_mask_addons_dist_createNumberMask___default()({ suffix: '%', prefix: '' }),
                placeholder: 'Enter an amount',
            }, {
                name: 'Email',
                mask: __WEBPACK_IMPORTED_MODULE_2_text_mask_addons_dist_emailMask___default.a,
                placeholder: 'john@smith.com',
            }, {
                name: 'US zip code',
                mask: [/[1-9]/, /\d/, /\d/, /\d/, /\d/],
                placeholder: '94303',
            }, {
                name: 'Canadian postal code',
                mask: [__WEBPACK_IMPORTED_MODULE_5__constants__["b" /* alphabetic */], __WEBPACK_IMPORTED_MODULE_5__constants__["c" /* digit */], __WEBPACK_IMPORTED_MODULE_5__constants__["b" /* alphabetic */], ' ', __WEBPACK_IMPORTED_MODULE_5__constants__["c" /* digit */], __WEBPACK_IMPORTED_MODULE_5__constants__["b" /* alphabetic */], __WEBPACK_IMPORTED_MODULE_5__constants__["c" /* digit */]],
                pipe: function (conformedValue) { return ({ value: conformedValue.toUpperCase() }); },
                placeholder: 'K1A 0B2'
            }];
        this.mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.myModel = '';
        this.modelWithValue = '5554441234';
        this.formControlInput.setValue('5555551234');
    }
    return MasksComponent;
}());
MasksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-masks',
        template: __webpack_require__("../../../../../src/app/form/masks/masks.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/masks/masks.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MasksComponent);

//# sourceMappingURL=masks.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/tree/tree.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Match LGA to Zones\n      </div>\n      <div class=\"card-block\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"zone\">Zone</label>\n            <select name=\"zone\" class=\"form-control\" id=\"\">\n              <option value=\"Zone 1\">Zone 1</option>\n              <option value=\"Zone 2\">Zone 2</option>\n              <option value=\"Zone 3\">Zone 3</option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n              <select name=\"lga\" class=\"form-control\" id=\"\">\n                <option value=\"ADAVI\">ADAVI</option>\n                <option value=\"AJAOKUTA\">AJAOKUTA</option>\n                <option value=\"ANKPA\">ANKPA</option>\n                <option value=\"BASSA\">BASSA</option>\n                <option value=\"DEKINA\">DEKINA</option>\n                <option value=\"IBAJI\">IBAJI</option>\n                <option value=\"IDAH\">IDAH</option>\n                <option value=\"IGALAMELA\">IGALAMELA</option>\n                <option value=\"IGALAMELA ODULU\">IGALAMELA ODULU</option>\n                <option value=\"IJUMU\">IJUMU</option>\n                <option value=\"KABBA/BUNU\">KABBA/BUNU</option>\n                <option value=\"KOGI\">KOGI</option>\n                <option value=\"LOKOJA\">LOKOJA</option>\n                <option value=\"MOPA MURO\">MOPA MURO</option>\n                <option value=\"OFU\">OFU</option>\n                <option value=\"OGORI/MAGONGO\">OGORI/MAGONGO</option>\n                <option value=\"OKEHI\">OKEHI</option>\n                <option value=\"OKENE\">OKENE</option>\n                <option value=\"OLAMABORO\">OLAMABORO</option>\n                <option value=\"OMALA\">OMALA</option>\n                <option value=\"YAGBA EAST\">YAGBA EAST</option>\n                <option value=\"YAGBA WEST\">YAGBA WEST</option>\n              </select>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/tree/tree.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/tree/tree.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var actionMapping = {
    mouse: {
        contextMenu: function (tree, node, $event) {
            $event.preventDefault();
            alert("context menu for " + node.data.name);
        },
        dblClick: function (tree, node, $event) {
            if (node.hasChildren) {
                __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_EXPANDED(tree, node, $event);
            }
        },
        click: function (tree, node, $event) {
            $event.shiftKey
                ? __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED_MULTI(tree, node, $event)
                : __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["b" /* TREE_ACTIONS */].TOGGLE_SELECTED(tree, node, $event);
        }
    },
    keys: (_a = {},
        _a[__WEBPACK_IMPORTED_MODULE_1_angular_tree_component__["c" /* KEYS */].ENTER] = function (tree, node, $event) { return alert("This is " + node.data.name); },
        _a)
};
var TreeComponent = (function () {
    function TreeComponent() {
        this.nodes2 = [{ name: 'root' }, { name: 'root2' }];
        this.asyncChildren = [
            {
                name: 'child2.1',
                subTitle: 'new and improved'
            }, {
                name: 'child2.2',
                subTitle: 'new and improved2'
            }
        ];
        this.customTemplateStringOptions = {
            // displayField: 'subTitle',
            isExpandedField: 'expanded',
            idField: 'uuid',
            getChildren: this.getChildren.bind(this),
            actionMapping: actionMapping,
            nodeHeight: 23,
            allowDrag: true,
            useVirtualScroll: true
        };
    }
    TreeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.nodes = [
                {
                    expanded: true,
                    name: 'root expanded',
                    subTitle: 'the root',
                    children: [
                        {
                            name: 'child1',
                            subTitle: 'a good child',
                            hasChildren: false
                        }, {
                            name: 'child2',
                            subTitle: 'a bad child',
                            hasChildren: false
                        }
                    ]
                },
                {
                    name: 'root2',
                    subTitle: 'the second root',
                    children: [
                        {
                            name: 'child2.1',
                            subTitle: 'new and improved',
                            hasChildren: false
                        }, {
                            name: 'child2.2',
                            subTitle: 'new and improved2',
                            children: [
                                {
                                    uuid: 1001,
                                    name: 'subsub',
                                    subTitle: 'subsub',
                                    hasChildren: false
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'asyncroot',
                    hasChildren: true
                }
            ];
            var _loop_1 = function (i) {
                _this.nodes.push({
                    name: "rootDynamic" + i,
                    subTitle: "root created dynamically " + i,
                    children: new Array(4).fill(null).map(function (item, n) { return ({
                        name: "childDynamic" + i + "." + n,
                        subTitle: "child created dynamically " + i,
                        hasChildren: false
                    }); })
                });
            };
            for (var i = 0; i < 5; i++) {
                _loop_1(i);
            }
        }, 1);
    };
    TreeComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 1000);
        });
    };
    TreeComponent.prototype.addNode = function (tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    };
    TreeComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    TreeComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text);
    };
    TreeComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    TreeComponent.prototype.onEvent = function (event) {
        console.log(event);
    };
    TreeComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    TreeComponent.prototype.activeNodes = function (treeModel) {
        console.log(treeModel.activeNodes);
    };
    return TreeComponent;
}());
TreeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-tree',
        template: __webpack_require__("../../../../../src/app/form/tree/tree.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/tree/tree.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TreeComponent);

var _a;
//# sourceMappingURL=tree.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/upload/upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Angular2 File Upload</div>\n  <div class=\"card-block\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <p>Select files</p>\n\n        <div ng2FileDrop\n          [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\"\n          (fileOver)=\"fileOverBase($event)\"\n          [uploader]=\"uploader\"\n          class=\"well my-drop-zone\">\n          Base drop zone\n        </div>\n\n        <div ng2FileDrop\n          [ngClass]=\"{'another-file-over-class': hasAnotherDropZoneOver}\"\n          (fileOver)=\"fileOverAnother($event)\"\n          [uploader]=\"uploader\"\n          class=\"well my-drop-zone\">\n          Another drop zone\n        </div>\n\n        Multiple\n        <label class=\"custom-file mb-3\">\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple class=\"custom-file-input\">\n          <span class=\"custom-file-control\"></span>\n        </label>\n\n        Single\n        <label class=\"custom-file\">\n          <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" class=\"custom-file-input\">\n          <span class=\"custom-file-control\"></span>\n        </label>\n      </div>\n\n      <div class=\"col-md-9\">\n        <p>Upload queue</p>\n        <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th width=\"50%\">Name</th>\n              <th>Size</th>\n              <th>Progress</th>\n              <th>Status</th>\n              <th>Actions</th>\n            </tr>\n          </thead>\n          <tbody>\n          <tr *ngFor=\"let item of uploader.queue\">\n            <td><strong>{{ item?.file?.name }}</strong></td>\n            <td *ngIf=\"uploader.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n            <td *ngIf=\"uploader.isHTML5\">\n              <div class=\"progress\" style=\"margin-bottom: 0;\">\n                <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': item.progress + '%' }\"></div>\n              </div>\n            </td>\n            <td class=\"text-center\">\n              <span *ngIf=\"item.isSuccess\"><i class=\"glyphicon glyphicon-ok\"></i></span>\n              <span *ngIf=\"item.isCancel\"><i class=\"glyphicon glyphicon-ban-circle\"></i></span>\n              <span *ngIf=\"item.isError\"><i class=\"glyphicon glyphicon-remove\"></i></span>\n            </td>\n            <td nowrap>\n              <button type=\"button\" class=\"btn btn-success btn-sm\"\n                (click)=\"item.upload()\" [disabled]=\"item.isReady || item.isUploading || item.isSuccess\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload\n              </button>\n              <button type=\"button\" class=\"btn btn-warning btn-sm\"\n                (click)=\"item.cancel()\" [disabled]=\"!item.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-sm\"\n                (click)=\"item.remove()\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Remove\n              </button>\n            </td>\n          </tr>\n          </tbody>\n        </table>\n\n        <div>\n          <p>Queue progress: <ngb-progressbar type=\"primary\" [value]=\"uploader.progress\"></ngb-progressbar></p>\n          <button type=\"button\" class=\"btn btn-success\"\n            (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n            <span class=\"glyphicon glyphicon-upload\"></span> Upload all\n          </button>\n          <button type=\"button\" class=\"btn btn-warning\"\n            (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n            <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel all\n          </button>\n          <button type=\"button\" class=\"btn btn-danger\"\n            (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n            <span class=\"glyphicon glyphicon-trash\"></span> Remove all\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/form/upload/upload.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* $colors\n ------------------------------------------*/\n.my-drop-zone {\n  min-height: 1.5rem;\n  margin-bottom: 1rem;\n  padding: 1rem;\n  border: dashed 1px;\n  border-radius: 0.125rem; }\n\n.nv-file-over {\n  border-color: #d50000; }\n\n.another-file-over-class {\n  border-color: #00c853; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/upload/upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/ng2-file-upload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var URL = 'https://evening-anchorage-3159.herokuapp.com/api/';
var UploadComponent = (function () {
    function UploadComponent() {
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload_ng2_file_upload__["FileUploader"]({
            url: URL,
            isHTML5: true
        });
        this.hasBaseDropZoneOver = false;
        this.hasAnotherDropZoneOver = false;
    }
    UploadComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    UploadComponent.prototype.fileOverAnother = function (e) {
        this.hasAnotherDropZoneOver = e;
    };
    return UploadComponent;
}());
UploadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-upload',
        template: __webpack_require__("../../../../../src/app/form/upload/upload.component.html"),
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__("../../../../../src/app/form/upload/upload.component.scss")]
    })
], UploadComponent);

//# sourceMappingURL=upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/form/validation/validation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">Input text masks</div>\n  <div class=\"card-block\">\n    <form class=\"form-horizontal\" novalidate>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': requried?.errors?.required}\">\n        <label class=\"col-2 col-form-label\">Required</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"requried\" #requried=\"ngModel\" required  [ngClass]=\"{'form-control-danger': requried?.errors?.required}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"requried?.errors?.required\">required error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': minlength?.errors?.minlength}\">\n        <label class=\"col-2 col-form-label\">minlength</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"minlength\" #minlength=\"ngModel\" minlength=\"5\"  [ngClass]=\"{'form-control-danger': minlength?.errors?.minlength}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"minlength?.errors?.minlength\">minlength error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': maxlength?.errors?.maxlength}\">\n        <label class=\"col-2 col-form-label\">maxlength</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"maxlength\" #maxlength=\"ngModel\" maxlength=\"5\"  [ngClass]=\"{'form-control-danger': maxlength?.errors?.maxlength}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"maxlength?.errors?.maxlength\">maxlength error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': pattern?.errors?.pattern}\">\n        <label class=\"col-2 col-form-label\">pattern</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"pattern\" #pattern=\"ngModel\" pattern=\"[a-z]{6}\" [ngClass]=\"{'form-control-danger': pattern?.errors?.pattern}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"pattern?.errors?.pattern\">pattern error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': base64?.errors?.base64}\">\n        <label class=\"col-2 col-form-label\">base64</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"base64\" #base64=\"ngModel\" base64 [ngClass]=\"{'form-control-danger': base64?.errors?.base64}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"base64?.errors?.base64\">base64 error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': creditCard?.errors?.creditCard}\">\n        <label class=\"col-2 col-form-label\">creditCard</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"creditCard\" #creditCard=\"ngModel\" creditCard [ngClass]=\"{'form-control-danger': creditCard?.errors?.creditCard}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"creditCard?.errors?.creditCard\">creditCard error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': date?.errors?.date}\">\n        <label class=\"col-2 col-form-label\">date</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"date\" #date=\"ngModel\" date [ngClass]=\"{'form-control-danger': date?.errors?.date}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"date?.errors?.date\">date error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': dateISO?.errors?.dateISO}\">\n        <label class=\"col-2 col-form-label\">dateISO</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"dateISO\" #dateISO=\"ngModel\" dateISO [ngClass]=\"{'form-control-danger': dateISO?.errors?.dateISO}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"dateISO?.errors?.dateISO\">dateISO error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': maxDate?.errors?.maxDate}\">\n        <label class=\"col-2 col-form-label\">maxDate</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"maxDate\" #maxDate=\"ngModel\" maxDate=\"2016-12-12\" [ngClass]=\"{'form-control-danger': maxDate?.errors?.maxDate}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"maxDate?.errors?.maxDate\">maxDate error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': minDate?.errors?.minDate}\">\n        <label class=\"col-2 col-form-label\">minDate</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"minDate\" #minDate=\"ngModel\" minDate=\"2016-12-12\" [ngClass]=\"{'form-control-danger': minDate?.errors?.minDate}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"minDate?.errors?.minDate\">minDate error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': digits?.errors?.digits}\">\n        <label class=\"col-2 col-form-label\">digits</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"digits\" #digits=\"ngModel\" digits [ngClass]=\"{'form-control-danger': digits?.errors?.digits}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"digits?.errors?.digits\">digits error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': email?.errors?.email}\">\n        <label class=\"col-2 col-form-label\">email</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"email\" #email=\"ngModel\" email [ngClass]=\"{'form-control-danger': email?.errors?.email}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"email?.errors?.email\">email error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': equal?.errors?.equal}\">\n        <label class=\"col-2 col-form-label\">equal</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"equal\" #equal=\"ngModel\" equal=\"aabbcc\" [ngClass]=\"{'form-control-danger': equal?.errors?.equal}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"equal?.errors?.equal\">equal error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': notEqual?.errors?.notEqual}\">\n        <label class=\"col-2 col-form-label\">notEqual</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"notEqual\" #notEqual=\"ngModel\" notEqual=\"aabbcc\" [ngClass]=\"{'form-control-danger': notEqual?.errors?.notEqual}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"notEqual?.errors?.notEqual\">notEqual error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': equalTo?.errors?.equalTo}\">\n        <label class=\"col-2 col-form-label\">equalTo</label>\n        <div class=\"col-10\">\n          <input class=\"form-control mb-3\" type=\"text\" ngModel name=\"password\" #password=\"ngModel\"/>\n          <input class=\"form-control\" type=\"text\" ngModel name=\"equalTo\" #equalTo=\"ngModel\" [equalTo]=\"password\" [ngClass]=\"{'form-control-danger': equalTo?.errors?.equalTo}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"equalTo?.errors?.equalTo\">equalTo error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': notEqualTo?.errors?.notEqualTo}\">\n        <label class=\"col-2 col-form-label\">notEqualTo</label>\n        <div class=\"col-10\">\n          <input class=\"form-control mb-3\" type=\"text\" ngModel name=\"oldPassword\" #oldPassword=\"ngModel\"/>\n          <input class=\"form-control\" type=\"text\" ngModel name=\"notEqualTo\" #notEqualTo=\"ngModel\" [notEqualTo]=\"oldPassword\" [ngClass]=\"{'form-control-danger': notEqualTo?.errors?.notEqualTo}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"notEqualTo?.errors?.notEqualTo\">notEqualTo error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': gt?.errors?.gt}\">\n        <label class=\"col-2 col-form-label\">greater than</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"gt\" #gt=\"ngModel\" gt=\"10\" [ngClass]=\"{'form-control-danger': gt?.errors?.gt}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"gt?.errors?.gt\">greater than error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': lt?.errors?.lt}\">\n        <label class=\"col-2 col-form-label\">less than</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\" [ngClass]=\"{'form-control-danger': lt?.errors?.lt}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"lt?.errors?.lt\">less than error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': lt?.errors?.lt}\">\n        <label class=\"col-2 col-form-label\">less than</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"lt\" #lt=\"ngModel\" lt=\"5\" [ngClass]=\"{'form-control-danger': lt?.errors?.lt}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"lt?.errors?.lt\">less than error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': json?.errors?.json}\">\n        <label class=\"col-2 col-form-label\">json</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"json\" #json=\"ngModel\" json [ngClass]=\"{'form-control-danger': json?.errors?.json}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"json?.errors?.json\">json error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': max?.errors?.max}\">\n        <label class=\"col-2 col-form-label\">max</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"max\" #max=\"ngModel\" max=\"5\" [ngClass]=\"{'form-control-danger': max?.errors?.max}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"max?.errors?.max\">max error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': min?.errors?.min}\">\n        <label class=\"col-2 col-form-label\">min</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"min\" #min=\"ngModel\" min=\"5\" [ngClass]=\"{'form-control-danger': min?.errors?.min}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"min?.errors?.min\">min error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': number?.errors?.number}\">\n        <label class=\"col-2 col-form-label\">number</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"number\" #number=\"ngModel\" number [ngClass]=\"{'form-control-danger': number?.errors?.number}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"number?.errors?.number\">number error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': phone?.errors?.phone}\">\n        <label class=\"col-2 col-form-label\">phone</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"phone\" #phone=\"ngModel\" phone [ngClass]=\"{'form-control-danger': phone?.errors?.phone}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"phone?.errors?.phone\">phone error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': range?.errors?.range}\">\n        <label class=\"col-2 col-form-label\">range</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"range\" #range=\"ngModel\" [range]=\"[4,9]\" [ngClass]=\"{'form-control-danger': range?.errors?.range}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"range?.errors?.range\">range error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': rangeLength?.errors?.rangeLength}\">\n        <label class=\"col-2 col-form-label\">rangeLength</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"rangeLength\" #rangeLength=\"ngModel\" [rangeLength]=\"[4,9]\" [ngClass]=\"{'form-control-danger': rangeLength?.errors?.rangeLength}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"rangeLength?.errors?.rangeLength\">rangeLength error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': url?.errors?.url}\">\n        <label class=\"col-2 col-form-label\">url</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"url\" #url=\"ngModel\" url [ngClass]=\"{'form-control-danger': url?.errors?.url}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"url?.errors?.url\">url error</div>\n        </div>\n      </div>\n\n      <div class=\"form-group row\" [ngClass]=\"{'has-danger': uuid?.errors?.uuid}\">\n        <label class=\"col-2 col-form-label\">uuid</label>\n        <div class=\"col-10\">\n          <input class=\"form-control\" type=\"text\" ngModel name=\"uuid\" #uuid=\"ngModel\" uuid=\"3\" [ngClass]=\"{'form-control-danger': uuid?.errors?.uuid}\"/>\n          <div class=\"form-control-feedback\" *ngIf=\"uuid?.errors?.uuid\">uuid error</div>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/form/validation/validation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/form/validation/validation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_validation__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ValidationComponent = (function () {
    function ValidationComponent() {
        this.num = 5;
    }
    ValidationComponent.prototype.ngOnInit = function () {
        var password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
        var certainPassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', __WEBPACK_IMPORTED_MODULE_2_ng2_validation__["CustomValidators"].notEqualTo(password));
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            password: password,
            certainPassword: certainPassword
        });
    };
    ValidationComponent.prototype.onSubmit = function (form) {
        console.log(form);
    };
    return ValidationComponent;
}());
ValidationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-validation',
        template: __webpack_require__("../../../../../src/app/form/validation/validation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/form/validation/validation.component.scss")]
    })
], ValidationComponent);

//# sourceMappingURL=validation.component.js.map

/***/ }),

/***/ "../../../../text-mask-addons/dist/createAutoCorrectedDatePipe.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createAutoCorrectedDatePipe=t():e.createAutoCorrectedDatePipe=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"mm dd yyyy";return function(t){var r=[],n=e.split(/[^dmy]+/),o={dd:31,mm:12,yy:99,yyyy:9999},i={dd:1,mm:1,yy:0,yyyy:1},u=t.split("");n.forEach(function(t){var n=e.indexOf(t),i=parseInt(o[t].toString().substr(0,1),10);parseInt(u[n],10)>i&&(u[n+1]=u[n],u[n]=0,r.push(n))});var d=n.some(function(r){var n=e.indexOf(r),u=r.length,d=t.substr(n,u).replace(/\D/g,""),s=parseInt(d,10);return s>o[r]||d.length===u&&s<i[r]});return!d&&{value:u.join(""),indexesOfPipedChars:r}}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r}])});

/***/ }),

/***/ "../../../../text-mask-addons/dist/createNumberMask.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.createNumberMask=t():e.createNumberMask=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){e.exports=o(2)},,function(e,t){"use strict";function o(){function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=e.length;if(e===l||e[0]===y[0]&&1===t)return y.split(l).concat([v]).concat(h.split(l));if(e===k&&M)return y.split(l).concat(["0",k,v]).concat(h.split(l));var o=e.lastIndexOf(k),c=o!==-1,u=e[0]===s&&q,a=void 0,b=void 0,g=void 0;if(e.slice(T*-1)===h&&(e=e.slice(0,T*-1)),c&&(M||$)?(a=e.slice(e.slice(0,R)===y?R:0,o),b=e.slice(o+1,t),b=n(b.replace(f,l))):a=e.slice(0,R)===y?e.slice(R):e,P&&("undefined"==typeof P?"undefined":r(P))===p){var S="."===j?"[.]":""+j,w=(a.match(new RegExp(S,"g"))||[]).length;a=a.slice(0,P+w*Z)}return a=a.replace(f,l),E||(a=a.replace(/^0+(0$|[^0])/,"$1")),a=x?i(a,j):a,g=n(a),(c&&M||$===!0)&&(e[o-1]!==k&&g.push(m),g.push(k,m),b&&(("undefined"==typeof L?"undefined":r(L))===p&&(b=b.slice(0,L)),g=g.concat(b)),$===!0&&e[o-1]===k&&g.push(v)),R>0&&(g=y.split(l).concat(g)),u&&(g.length===R&&g.push(v),g=[d].concat(g)),h.length>0&&(g=g.concat(h.split(l))),g}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=t.prefix,y=void 0===o?c:o,b=t.suffix,h=void 0===b?l:b,g=t.includeThousandsSeparator,x=void 0===g||g,S=t.thousandsSeparatorSymbol,j=void 0===S?u:S,w=t.allowDecimal,M=void 0!==w&&w,N=t.decimalSymbol,k=void 0===N?a:N,D=t.decimalLimit,L=void 0===D?2:D,O=t.requireDecimal,$=void 0!==O&&O,_=t.allowNegative,q=void 0!==_&&_,B=t.allowLeadingZeroes,E=void 0!==B&&B,I=t.integerLimit,P=void 0===I?null:I,R=y&&y.length||0,T=h&&h.length||0,Z=j&&j.length||0;return e.instanceOf="createNumberMask",e}function n(e){return e.split(l).map(function(e){return v.test(e)?v:e})}function i(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)}Object.defineProperty(t,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=o;var c="$",l="",u=",",a=".",s="-",d=/-/,f=/\D+/g,p="number",v=/\d/,m="[]"}])});

/***/ }),

/***/ "../../../../text-mask-addons/dist/emailMask.js":
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.emailMask=t():e.emailMask=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var u=n[r]={exports:{},id:r,loaded:!1};return e[r].call(u.exports,u,u.exports,t),u.loaded=!0,u.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(3)},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function u(e,t){e=e.replace(y,h);var n=t.placeholderChar,r=t.currentCaretPosition,u=e.indexOf(x),s=e.lastIndexOf(d),f=s<u?-1:s,p=o(e,u+1,x),g=o(e,f-1,d),v=c(e,u,n),m=i(e,u,f,n),O=a(e,f,n,r);v=l(v),m=l(m),O=l(O,!0);var b=v.concat(p).concat(m).concat(g).concat(O);return b}function o(e,t,n){var r=[];return e[t]===n?r.push(n):r.push(g,n),r.push(g),r}function c(e,t){return t===-1?e:e.slice(0,t)}function i(e,t,n,r){var u=h;return t!==-1&&(u=n===-1?e.slice(t+1,e.length):e.slice(t+1,n)),u=u.replace(new RegExp("[\\s"+r+"]",m),h),u===x?p:u.length<1?v:u[u.length-1]===d?u.slice(0,u.length-1):u}function a(e,t,n,r){var u=h;return t!==-1&&(u=e.slice(t+1,e.length)),u=u.replace(new RegExp("[\\s"+n+".]",m),h),0===u.length?e[t-1]===d&&r!==e.length?p:h:u}function l(e,t){return e.split(h).map(function(e){return e===v?e:t?b:O})}Object.defineProperty(t,"__esModule",{value:!0});var s=n(4),f=r(s),p="*",d=".",h="",x="@",g="[]",v=" ",m="g",O=/[^\s]/,b=/[^.\s]/,y=/\s/g;t.default={mask:u,pipe:f.default}},function(e,t){"use strict";function n(e,t){var n=t.currentCaretPosition,o=t.rawValue,p=t.previousConformedValue,d=t.placeholderChar,h=e;h=r(h);var x=h.indexOf(i),g=null===o.match(new RegExp("[^@\\s."+d+"]"));if(g)return c;if(h.indexOf(l)!==-1||x!==-1&&n!==x+1||o.indexOf(u)===-1&&p!==c&&o.indexOf(a)!==-1)return!1;var v=h.indexOf(u),m=h.slice(v+1,h.length);return(m.match(f)||s).length>1&&h.substr(-1)===a&&n!==o.length&&(h=h.slice(0,h.length-1)),h}function r(e){var t=0;return e.replace(o,function(){return t++,1===t?u:c})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n;var u="@",o=/@/g,c="",i="@.",a=".",l="..",s=[],f=/\./g}])});

/***/ })

});
//# sourceMappingURL=4.chunk.js.map