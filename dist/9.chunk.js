webpackJsonp([9],{

/***/ "../../../../../src/app/charts/bar/bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Vertical bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-vertical\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"single\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\">\n          </ngx-charts-bar-vertical>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Horizontal bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-horizontal\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"single\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Grouped vertical bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-vertical-2d\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [groupPadding]=\"groupPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-2d>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Grouped horizontal bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-horizontal-2d\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [groupPadding]=\"groupPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-2d>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Stacked vertical bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-vertical-stacked\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-stacked>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Stacked horizontal bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-horizontal-stacked\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-stacked>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Normalized vertical bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-vertical-normalized\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-vertical-normalized>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Normalized horizontal bar chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bar-horizontal-normalized\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"multi\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [legend]=\"showLegend\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showGridLines]=\"showGridLines\"\n            [barPadding]=\"barPadding\"\n            [roundDomains]=\"roundDomains\"\n            (select)=\"select($event)\">\n          </ngx-charts-bar-horizontal-normalized>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/charts/bar/bar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/bar/bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_chartData__ = __webpack_require__("../../../../../src/app/shared/chartData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarComponent = (function () {
    function BarComponent() {
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.colorScheme = {
            domain: [
                '#0099cc', '#2ECC71', '#4cc3d9'
            ]
        };
        this.schemeType = 'ordinal';
        Object.assign(this, {
            single: __WEBPACK_IMPORTED_MODULE_1__shared_chartData__["a" /* single */],
            multi: __WEBPACK_IMPORTED_MODULE_1__shared_chartData__["b" /* multi */]
        });
    }
    BarComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    BarComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    return BarComponent;
}());
BarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bar',
        template: __webpack_require__("../../../../../src/app/charts/bar/bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/bar/bar.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BarComponent);

//# sourceMappingURL=bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/charts.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__charts_routing__ = __webpack_require__("../../../../../src/app/charts/charts.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bar_bar_component__ = __webpack_require__("../../../../../src/app/charts/bar/bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pie_pie_component__ = __webpack_require__("../../../../../src/app/charts/pie/pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__line_line_component__ = __webpack_require__("../../../../../src/app/charts/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__misc_misc_component__ = __webpack_require__("../../../../../src/app/charts/misc/misc.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartsModule", function() { return ChartsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ChartsModule = (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__charts_routing__["a" /* ChartsRoutes */]),
            __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__bar_bar_component__["a" /* BarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__pie_pie_component__["a" /* PieComponent */],
            __WEBPACK_IMPORTED_MODULE_7__line_line_component__["a" /* LineComponent */],
            __WEBPACK_IMPORTED_MODULE_8__misc_misc_component__["a" /* MiscComponent */]
        ]
    })
], ChartsModule);

//# sourceMappingURL=charts.module.js.map

/***/ }),

/***/ "../../../../../src/app/charts/charts.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bar_bar_component__ = __webpack_require__("../../../../../src/app/charts/bar/bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pie_pie_component__ = __webpack_require__("../../../../../src/app/charts/pie/pie.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_line_component__ = __webpack_require__("../../../../../src/app/charts/line/line.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__misc_misc_component__ = __webpack_require__("../../../../../src/app/charts/misc/misc.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsRoutes; });




var ChartsRoutes = [{
        path: '',
        children: [{
                path: 'bar',
                component: __WEBPACK_IMPORTED_MODULE_0__bar_bar_component__["a" /* BarComponent */],
                data: {
                    heading: 'Bar'
                }
            }, {
                path: 'pie',
                component: __WEBPACK_IMPORTED_MODULE_1__pie_pie_component__["a" /* PieComponent */],
                data: {
                    heading: 'Pie'
                }
            }, {
                path: 'line',
                component: __WEBPACK_IMPORTED_MODULE_2__line_line_component__["a" /* LineComponent */],
                data: {
                    heading: 'Line'
                }
            }, {
                path: 'misc',
                component: __WEBPACK_IMPORTED_MODULE_3__misc_misc_component__["a" /* MiscComponent */],
                data: {
                    heading: 'Misc'
                }
            }]
    }];
//# sourceMappingURL=charts.routing.js.map

/***/ }),

/***/ "../../../../../src/app/charts/line/line.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Line chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-line-chart\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateDataWithOrWithoutRange\"\n            [legend]=\"showLegend\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [curve]=\"curve\"\n            [rangeFillOpacity]=\"rangeFillOpacity\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"true\"\n            (select)=\"select($event)\">\n          </ngx-charts-line-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Area chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-area-chart\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateData\"\n            [legend]=\"showLegend\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\"\n            [curve]=\"curve\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-area-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Stacked area chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-area-chart-stacked\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateData\"\n            [legend]=\"showLegend\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [curve]=\"curve\"\n            (select)=\"select($event)\">\n          </ngx-charts-area-chart-stacked>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Normalized area chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-area-chart-normalized\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [results]=\"dateData\"\n            [legend]=\"showLegend\"\n            [gradient]=\"gradient\"\n            [xAxis]=\"showXAxis\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [timeline]=\"timeline\"\n            [showGridLines]=\"showGridLines\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [curve]=\"curve\"\n            (select)=\"select($event)\">\n          </ngx-charts-area-chart-normalized>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/charts/line/line.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/line/line.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_chartData__ = __webpack_require__("../../../../../src/app/shared/chartData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LineComponent = (function () {
    function LineComponent() {
        this.range = false;
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        // line interpolation
        this.curve = __WEBPACK_IMPORTED_MODULE_1_d3_shape__["curveLinear"];
        this.colorScheme = {
            domain: [
                '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
            ]
        };
        this.schemeType = 'ordinal';
        this.rangeFillOpacity = 0.15;
        // line, area
        this.autoScale = true;
        this.timeline = false;
        Object.assign(this, {
            single: __WEBPACK_IMPORTED_MODULE_2__shared_chartData__["a" /* single */],
            multi: __WEBPACK_IMPORTED_MODULE_2__shared_chartData__["b" /* multi */]
        });
        this.dateData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_chartData__["e" /* generateData */])(5, false);
        this.dateDataWithRange = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_chartData__["e" /* generateData */])(2, true);
    }
    Object.defineProperty(LineComponent.prototype, "dateDataWithOrWithoutRange", {
        get: function () {
            if (this.range) {
                return this.dateDataWithRange;
            }
            else {
                return this.dateData;
            }
        },
        enumerable: true,
        configurable: true
    });
    LineComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    LineComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    return LineComponent;
}());
LineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-line',
        template: __webpack_require__("../../../../../src/app/charts/line/line.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/line/line.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LineComponent);

//# sourceMappingURL=line.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/misc/misc.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Bubble chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-bubble-chart\n            class=\"chart-container\"\n            [view]=\"view\"\n            [results]=\"bubble\"\n            [showGridLines]=\"showGridLines\"\n            [legend]=\"false\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"false\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [autoScale]=\"autoScale\"\n            [scheme]=\"colorScheme\"\n            [schemeType]=\"schemeType\"\n            [roundDomains]=\"roundDomains\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            [minRadius]=\"minRadius\"\n            [maxRadius]=\"maxRadius\">\n          </ngx-charts-bubble-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Heat map</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-heat-map\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [results]=\"multi\"\n            [legend]=\"showLegend\"\n            [gradient]=\"gradient\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"showXAxisLabel\"\n            [showYAxisLabel]=\"showYAxisLabel\"\n            [xAxisLabel]=\"xAxisLabel\"\n            [yAxisLabel]=\"yAxisLabel\"\n            [innerPadding]=\"innerPadding\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-heat-map>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Forced directed graph</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-force-directed-graph\n            class=\"chart-container\"\n            [legend]=\"showLegend\"\n            [links]=\"graph.links\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [nodes]=\"graph.nodes\"\n            [scheme]=\"colorScheme\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-force-directed-graph>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Heat map - Calendar</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-heat-map\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [results]=\"calendarData\"\n            [legend]=\"showLegend\"\n            [gradient]=\"gradient\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [xAxis]=\"showXAxis\"\n            [yAxis]=\"showYAxis\"\n            [showXAxisLabel]=\"false\"\n            [showYAxisLabel]=\"false\"\n            [xAxisTickFormatting]=\"calendarAxisTickFormatting\"\n            [tooltipText]=\"calendarTooltipText\"\n            [innerPadding]=\"innerPadding\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-heat-map>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Tree map</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-tree-map\n            class=\"chart-container\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-tree-map>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Number cards</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-number-card\n            class=\"chart-container\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            (select)=\"select($event)\">\n          </ngx-charts-number-card>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Gauge</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-gauge\n            class=\"chart-container\"\n            [legend]=\"showLegend\"\n            [results]=\"single\"\n            [textValue]=\"gaugeTextValue\"\n            [scheme]=\"colorScheme\"\n            [min]=\"gaugeMin\"\n            [max]=\"gaugeMax\"\n            [units]=\"gaugeUnits\"\n            [angleSpan]=\"gaugeAngleSpan\"\n            [startAngle]=\"gaugeStartAngle\"\n            [showAxis]=\"gaugeShowAxis\"\n            [bigSegments]=\"gaugeLargeSegments\"\n            [smallSegments]=\"gaugeSmallSegments\"\n            [margin]=\"margin ? [marginTop, marginRight, marginBottom, marginLeft] : null\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\">\n          </ngx-charts-gauge>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-12 col-md-6\">\n    <div class=\"card\">\n      <div class=\"card-header\">Linear gauge</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-linear-gauge\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [min]=\"gaugeMin\"\n            [max]=\"gaugeMax\"\n            [value]=\"gaugeValue\"\n            [previousValue]=\"gaugePreviousValue\"\n            [units]=\"gaugeUnits\"\n            (select)=\"select($event)\">\n          </ngx-charts-linear-gauge>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/charts/misc/misc.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/misc/misc.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_chartData__ = __webpack_require__("../../../../../src/app/shared/chartData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var monthName = new Intl.DateTimeFormat('en-us', { month: 'short' });
var weekdayName = new Intl.DateTimeFormat('en-us', { weekday: 'short' });
var MiscComponent = (function () {
    function MiscComponent() {
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.colorScheme = {
            domain: [
                '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
            ]
        };
        this.schemeType = 'ordinal';
        // line, area
        this.autoScale = true;
        this.timeline = false;
        // margin
        this.margin = false;
        this.marginTop = 40;
        this.marginRight = 40;
        this.marginBottom = 40;
        this.marginLeft = 40;
        // gauge
        this.gaugeMin = 0;
        this.gaugeMax = 100;
        this.gaugeLargeSegments = 10;
        this.gaugeSmallSegments = 5;
        this.gaugeTextValue = '';
        this.gaugeUnits = 'alerts';
        this.gaugeAngleSpan = 240;
        this.gaugeStartAngle = -120;
        this.gaugeShowAxis = true;
        this.gaugeValue = 50; // linear gauge value
        this.gaugePreviousValue = 70;
        Object.assign(this, {
            single: __WEBPACK_IMPORTED_MODULE_1__shared_chartData__["a" /* single */],
            multi: __WEBPACK_IMPORTED_MODULE_1__shared_chartData__["b" /* multi */],
            graph: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__shared_chartData__["c" /* generateGraph */])(50),
            bubble: __WEBPACK_IMPORTED_MODULE_1__shared_chartData__["d" /* bubble */]
        });
        this.view = undefined;
        this.calendarData = this.getCalendarData();
    }
    MiscComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    MiscComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    MiscComponent.prototype.getCalendarData = function () {
        // today
        var now = new Date();
        var todaysDay = now.getDate();
        var thisDay = new Date(now.getFullYear(), now.getMonth(), todaysDay);
        // Monday
        var thisMonday = new Date(thisDay.getFullYear(), thisDay.getMonth(), todaysDay - thisDay.getDay() + 1);
        var thisMondayDay = thisMonday.getDate();
        var thisMondayYear = thisMonday.getFullYear();
        var thisMondayMonth = thisMonday.getMonth();
        // 52 weeks before monday
        var calendarData = [];
        var getDate = function (d) { return new Date(thisMondayYear, thisMondayMonth, d); };
        for (var week = -52; week <= 0; week++) {
            var mondayDay = thisMondayDay + (week * 7);
            var monday = getDate(mondayDay);
            // one week
            var series = [];
            for (var dayOfWeek = 7; dayOfWeek > 0; dayOfWeek--) {
                var date = getDate(mondayDay - 1 + dayOfWeek);
                // skip future dates
                if (date > now) {
                    continue;
                }
                // value
                var value = (dayOfWeek < 6) ? (date.getMonth() + 1) : 0;
                series.push({
                    date: date,
                    name: weekdayName.format(date),
                    value: value
                });
            }
            calendarData.push({
                name: monday.toString(),
                series: series
            });
        }
        return calendarData;
    };
    MiscComponent.prototype.calendarAxisTickFormatting = function (mondayString) {
        var monday = new Date(mondayString);
        var month = monday.getMonth();
        var day = monday.getDate();
        var year = monday.getFullYear();
        var lastSunday = new Date(year, month, day - 1);
        var nextSunday = new Date(year, month, day + 6);
        return (lastSunday.getMonth() !== nextSunday.getMonth()) ? monthName.format(nextSunday) : '';
    };
    MiscComponent.prototype.calendarTooltipText = function (c) {
        return "\n      <span class=\"tooltip-label\">" + c.label + " \u2022 " + c.cell.date.toLocaleDateString() + "</span>\n      <span class=\"tooltip-val\">" + c.data.toLocaleString() + "</span>\n    ";
    };
    return MiscComponent;
}());
MiscComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-misc',
        template: __webpack_require__("../../../../../src/app/charts/misc/misc.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/misc/misc.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MiscComponent);

//# sourceMappingURL=misc.component.js.map

/***/ }),

/***/ "../../../../../src/app/charts/pie/pie.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Pie chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-pie-chart\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            [legend]=\"showLegend\"\n            [explodeSlices]=\"explodeSlices\"\n            [labels]=\"showLabels\"\n            [doughnut]=\"doughnut\"\n            [arcWidth]=\"arcWidth\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-pie-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Advanced pie chart</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-advanced-pie-chart\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            [results]=\"single\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [gradient]=\"gradient\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-advanced-pie-chart>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-12\">\n    <div class=\"card\">\n      <div class=\"card-header\">Pie grid</div>\n      <div class=\"card-block\">\n        <div>\n          <ngx-charts-pie-grid\n            class=\"chart-container\"\n            [scheme]=\"colorScheme\"\n            (legendLabelClick)=\"onLegendLabelClick($event)\"\n            [results]=\"single\"\n            [tooltipDisabled]=\"tooltipDisabled\"\n            (select)=\"select($event)\">\n          </ngx-charts-pie-grid>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/charts/pie/pie.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/charts/pie/pie.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_chartData__ = __webpack_require__("../../../../../src/app/shared/chartData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PieComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PieComponent = (function () {
    function PieComponent() {
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.innerPadding = 0;
        this.barPadding = 8;
        this.groupPadding = 16;
        this.roundDomains = false;
        this.maxRadius = 10;
        this.minRadius = 3;
        this.colorScheme = {
            domain: [
                '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
            ]
        };
        this.schemeType = 'ordinal';
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = false;
        this.arcWidth = 0.25;
        Object.assign(this, {
            single: __WEBPACK_IMPORTED_MODULE_1__shared_chartData__["a" /* single */]
        });
    }
    PieComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    PieComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    return PieComponent;
}());
PieComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pie',
        template: __webpack_require__("../../../../../src/app/charts/pie/pie.component.html"),
        styles: [__webpack_require__("../../../../../src/app/charts/pie/pie.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], PieComponent);

//# sourceMappingURL=pie.component.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map