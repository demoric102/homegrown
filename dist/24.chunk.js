webpackJsonp([24],{

/***/ "../../../../../src/app/lga/lga.module.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lga_routing__ = __webpack_require__("../../../../../src/app/lga/lga.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__match_match_component__ = __webpack_require__("../../../../../src/app/lga/match/match.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LgaModule", function() { return LgaModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LgaModule = (function () {
    function LgaModule() {
    }
    return LgaModule;
}());
LgaModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_9__lga_routing__["a" /* LgaRoutes */]),
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["e" /* NgbProgressbarModule */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_4_angular_tree_component__["a" /* TreeModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_3_ng2_file_upload_ng2_file_upload__["FileUploadModule"]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_10__match_match_component__["a" /* MatchComponent */]]
    })
], LgaModule);

//# sourceMappingURL=lga.module.js.map

/***/ }),

/***/ "../../../../../src/app/lga/lga.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__match_match_component__ = __webpack_require__("../../../../../src/app/lga/match/match.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LgaRoutes; });

var LgaRoutes = [
    {
        path: '',
        children: [{
                path: 'match',
                component: __WEBPACK_IMPORTED_MODULE_0__match_match_component__["a" /* MatchComponent */],
                data: {
                    heading: 'Match LGA - Zone'
                }
            }]
    }
];
//# sourceMappingURL=lga.routing.js.map

/***/ }),

/***/ "../../../../../src/app/lga/match/match.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        Match LGA to Zones\n      </div>\n      <div class=\"card-block\">\n        <form>\n          <div class=\"form-group\">\n            <label for=\"lga\">LGA</label>\n              <select name=\"lga\" class=\"form-control\" id=\"\">\n                <option value=\"ADAVI\">ADAVI</option>\n                <option value=\"AJAOKUTA\">AJAOKUTA</option>\n                <option value=\"ANKPA\">ANKPA</option>\n                <option value=\"BASSA\">BASSA</option>\n                <option value=\"DEKINA\">DEKINA</option>\n                <option value=\"IBAJI\">IBAJI</option>\n                <option value=\"IDAH\">IDAH</option>\n                <option value=\"IGALAMELA\">IGALAMELA</option>\n                <option value=\"IGALAMELA ODULU\">IGALAMELA ODULU</option>\n                <option value=\"IJUMU\">IJUMU</option>\n                <option value=\"KABBA/BUNU\">KABBA/BUNU</option>\n                <option value=\"KOGI\">KOGI</option>\n                <option value=\"LOKOJA\">LOKOJA</option>\n                <option value=\"MOPA MURO\">MOPA MURO</option>\n                <option value=\"OFU\">OFU</option>\n                <option value=\"OGORI/MAGONGO\">OGORI/MAGONGO</option>\n                <option value=\"OKEHI\">OKEHI</option>\n                <option value=\"OKENE\">OKENE</option>\n                <option value=\"OLAMABORO\">OLAMABORO</option>\n                <option value=\"OMALA\">OMALA</option>\n                <option value=\"YAGBA EAST\">YAGBA EAST</option>\n                <option value=\"YAGBA WEST\">YAGBA WEST</option>\n              </select>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"zone\">Zone</label>\n            <select name=\"zone\" class=\"form-control\" id=\"\">\n              <option value=\"Zone 1\">Zone 1</option>\n              <option value=\"Zone 2\">Zone 2</option>\n              <option value=\"Zone 3\">Zone 3</option>\n            </select>\n          </div>\n          <div class=\"block mb-3\"></div>\n          <button class=\"btn btn-primary\" type=\"submit\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/lga/match/match.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host /deep/ tree-viewport {\n  overflow: visible; }\n  :host /deep/ tree-viewport > div {\n    height: auto !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/lga/match/match.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular_tree_component__ = __webpack_require__("../../../../angular-tree-component/dist/angular-tree-component.js");
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
var MatchComponent = (function () {
    function MatchComponent() {
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
    MatchComponent.prototype.ngOnInit = function () {
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
    MatchComponent.prototype.getChildren = function (node) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () { return resolve(_this.asyncChildren.map(function (c) {
                return Object.assign({}, c, {
                    hasChildren: node.level < 5
                });
            })); }, 1000);
        });
    };
    MatchComponent.prototype.addNode = function (tree) {
        this.nodes[0].children.push({
            name: 'a new child'
        });
        tree.treeModel.update();
    };
    MatchComponent.prototype.childrenCount = function (node) {
        return node && node.children ? "(" + node.children.length + ")" : '';
    };
    MatchComponent.prototype.filterNodes = function (text, tree) {
        tree.treeModel.filterNodes(text);
    };
    MatchComponent.prototype.activateSubSub = function (tree) {
        // tree.treeModel.getNodeBy((node) => node.data.name === 'subsub')
        tree.treeModel.getNodeById(1001)
            .setActiveAndVisible();
    };
    MatchComponent.prototype.onEvent = function (event) {
        console.log(event);
    };
    MatchComponent.prototype.go = function ($event) {
        $event.stopPropagation();
        alert('this method is on the app component');
    };
    MatchComponent.prototype.activeNodes = function (treeModel) {
        console.log(treeModel.activeNodes);
    };
    return MatchComponent;
}());
MatchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-match',
        template: __webpack_require__("../../../../../src/app/lga/match/match.component.html"),
        styles: [__webpack_require__("../../../../../src/app/lga/match/match.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MatchComponent);

var _a;
//# sourceMappingURL=match.component.js.map

/***/ })

});
//# sourceMappingURL=24.chunk.js.map