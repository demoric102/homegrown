webpackJsonp([27],{

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-green text-white icon icon-basic-headset\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          1817\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Caterers</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-blue text-white icon icon-basic-server2\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          387\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Suppliers</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-teal text-white icon icon-basic-magic-mouse\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          1850\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Schools</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-red text-white icon icon-basic-heart\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          180k\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Pupils</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        <div class=\"card-header-text w-100\">\n          <div class=\"card-title\">\n            Financial Transaction\n          </div>\n          <div class=\"card-subtitle text-capitalize ff-sans\">\n            Last updated: 1 hour ago\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row text-center\">\n          <div class=\"col-xs-6 col-sm-3 text-success\">\n            <h5 class=\"mb-0\">\n              <strong>\n                N34.45\n              </strong>\n            </h5>\n            <small>\n              Income\n            </small>\n          </div>\n          <div class=\"col-xs-6 col-sm-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                34%\n              </strong>\n            </h5>\n            <small>\n              Caterer Engagements\n            </small>\n          </div>\n          <div class=\"col-xs-6 col-sm-3 text-danger\">\n            <h5 class=\"mb-0\">\n              <strong>\n                45%\n              </strong>\n            </h5>\n            <small>\n              Supplier Engagements\n            </small>\n          </div>\n          <div class=\"col-xs-6 col-sm-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                456\n              </strong>\n            </h5>\n            <small>\n              Invoices\n            </small>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-1\">\n        <ngx-charts-area-chart-stacked (legendlabelclick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\" [curve]=\"curve\" [gradient]=\"gradient\" [legend]=\"showLegend\" [results]=\"dateData\" [roundDomains]=\"roundDomains\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [showGridLines]=\"showGridLines\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [timeline]=\"timeline\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [xAxisLabel]=\"xAxisLabel\" [yAxis]=\"showYAxis\" [yAxisLabel]=\"yAxisLabel\" class=\"line-container\">\n        </ngx-charts-area-chart-stacked>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        <div class=\"card-header-text w-100\">\n          <div class=\"card-title\">\n            Food Item spending\n          </div>\n          <div class=\"card-subtitle text-capitalize ff-sans\">\n            Last updated: 1 hour ago\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row text-center\">\n          <div class=\"col-sm-6 col-md-3 text-purple\">\n            <h5 class=\"mb-0\">\n              <strong>\n                N34,845\n              </strong>\n            </h5>\n            <small>\n              Indomie\n            </small>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                N21,783\n              </strong>\n            </h5>\n            <small>\n              Egg\n            </small>\n          </div>\n          <div class=\"col-sm-6 col-md-3 text-indigo\">\n            <h5 class=\"mb-0\">\n              <strong>\n                N28,980\n              </strong>\n            </h5>\n            <small>\n              Chicken\n            </small>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                N34,7690\n              </strong>\n            </h5>\n            <small>\n              Rice\n            </small>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-1\">\n        <ngx-charts-gauge (legendlabelclick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\" [angleSpan]=\"gaugeAngleSpan\" [bigSegments]=\"gaugeLargeSegments\" [legend]=\"showLegend\" [margin]=\"margin ? [marginTop, marginRight, marginBottom, marginLeft] : null\" [max]=\"gaugeMax\" [min]=\"gaugeMin\" [results]=\"single\" [scheme]=\"colorScheme\" [showAxis]=\"gaugeShowAxis\" [smallSegments]=\"gaugeSmallSegments\" [startAngle]=\"gaugeStartAngle\" [textValue]=\"gaugeTextValue\" [tooltipDisabled]=\"tooltipDisabled\" [units]=\"gaugeUnits\" class=\"gauge-container\">\n        </ngx-charts-gauge>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-5\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        <div class=\"card-header-text w-100\">\n          <div class=\"card-title\">\n            Latest Activities\n          </div>\n          <div class=\"card-subtitle text-capitalize ff-sans\">\n            Last updated: 1 hour ago\n          </div>\n        </div>\n      </div>\n      <div class=\"activity-stream\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face1.jpg\"/>\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">\n                Invoce Generated\n              </div>\n              <div class=\"card-subtitle\">\n                at 3:14PM\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face2.jpg\"/>\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">\n                Supplier Bank Verified\n              </div>\n              <div class=\"card-subtitle\">\n                5 mins ago\n              </div>\n            </div>\n          </div>\n          <div class=\"card-block\">\n            <p class=\"mb-0\">\n              Caterer Feeds Students\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".line-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n\n.gauge-container {\n  height: 300px;\n  width: 100%;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_d3_shape__ = __webpack_require__("../../../../d3-shape/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_chartData__ = __webpack_require__("../../../../../src/app/shared/chartData.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = (function () {
    function DashboardComponent() {
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = false;
        this.showXAxisLabel = false;
        this.tooltipDisabled = false;
        this.xAxisLabel = 'Country';
        this.showYAxisLabel = false;
        this.yAxisLabel = 'GDP Per Capita';
        this.showGridLines = true;
        this.roundDomains = false;
        this.colorScheme = {
            domain: [
                '#0099cc', '#2ECC71', '#4cc3d9', '#ffc65d', '#d96557', '#ba68c8'
            ]
        };
        this.schemeType = 'ordinal';
        // line interpolation
        this.curve = __WEBPACK_IMPORTED_MODULE_1_d3_shape__["curveLinear"];
        // line, area
        this.timeline = false;
        // margin
        this.margin = false;
        this.marginTop = 40;
        this.marginRight = 40;
        this.marginBottom = 40;
        this.marginLeft = 40;
        // gauge
        this.gaugeMin = 0;
        this.gaugeMax = 50;
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
            single: __WEBPACK_IMPORTED_MODULE_2__shared_chartData__["a" /* single */]
        });
        this.dateData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__shared_chartData__["e" /* generateData */])(5, false);
    }
    DashboardComponent.prototype.select = function (data) {
        console.log('Item clicked', data);
    };
    DashboardComponent.prototype.onLegendLabelClick = function (entry) {
        console.log('Legend clicked', entry);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_routing__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__dashboard_routing__["a" /* DashboardRoutes */]), __WEBPACK_IMPORTED_MODULE_3__swimlane_ngx_charts__["NgxChartsModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__dashboard_component__["a" /* DashboardComponent */]]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardRoutes; });

var DashboardRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */],
        data: {
            heading: 'Dashboard'
        }
    }];
//# sourceMappingURL=dashboard.routing.js.map

/***/ })

});
//# sourceMappingURL=27.chunk.js.map