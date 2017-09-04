webpackJsonp([20],{

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-green text-white icon icon-basic-headset\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          576K\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Users</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-blue text-white icon icon-basic-server2\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          99.99%\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Uptime</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-teal text-white icon icon-basic-magic-mouse\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          465K\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Visitors</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-6 col-md-3\">\n    <div class=\"card card-block card-widget\">\n      <div class=\"widget-icon rounded-circle bg-red text-white icon icon-basic-heart\">\n      </div>\n      <div class=\"block ml-3 mr-3\">\n        <h5 class=\"mb-0 fw-400\">\n          7,578\n        </h5>\n        <small class=\"text-muted text-uppercase \">\n          <strong>Likes</strong>\n        </small>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        <div class=\"card-header-text w-100\">\n          <div class=\"card-title\">\n            GDP Per Capita\n          </div>\n          <div class=\"card-subtitle text-capitalize ff-sans\">\n            Last updated: 1 hour ago\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row text-center\">\n          <div class=\"col-xs-6 col-sm-3 text-success\">\n            <h5 class=\"mb-0\">\n              <strong>\n                34.45B\n              </strong>\n            </h5>\n            <small>\n              Income\n            </small>\n          </div>\n          <div class=\"col-xs-6 col-sm-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                34%\n              </strong>\n            </h5>\n            <small>\n              Growth\n            </small>\n          </div>\n          <div class=\"col-xs-6 col-sm-3 text-danger\">\n            <h5 class=\"mb-0\">\n              <strong>\n                45%\n              </strong>\n            </h5>\n            <small>\n              GNI\n            </small>\n          </div>\n          <div class=\"col-xs-6 col-sm-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                4.56M\n              </strong>\n            </h5>\n            <small>\n              Aid Flows\n            </small>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-1\">\n        <ngx-charts-area-chart-stacked (legendlabelclick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\" [curve]=\"curve\" [gradient]=\"gradient\" [legend]=\"showLegend\" [results]=\"dateData\" [roundDomains]=\"roundDomains\" [scheme]=\"colorScheme\" [schemeType]=\"schemeType\" [showGridLines]=\"showGridLines\" [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [timeline]=\"timeline\" [tooltipDisabled]=\"tooltipDisabled\" [xAxis]=\"showXAxis\" [xAxisLabel]=\"xAxisLabel\" [yAxis]=\"showYAxis\" [yAxisLabel]=\"yAxisLabel\" class=\"line-container\">\n        </ngx-charts-area-chart-stacked>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-6\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        <div class=\"card-header-text w-100\">\n          <div class=\"card-title\">\n            Country spending\n          </div>\n          <div class=\"card-subtitle text-capitalize ff-sans\">\n            Last updated: 1 hour ago\n          </div>\n        </div>\n      </div>\n      <div class=\"card-block\">\n        <div class=\"row text-center\">\n          <div class=\"col-sm-6 col-md-3 text-purple\">\n            <h5 class=\"mb-0\">\n              <strong>\n                34.45B\n              </strong>\n            </h5>\n            <small>\n              Health\n            </small>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                21.78B\n              </strong>\n            </h5>\n            <small>\n              Education\n            </small>\n          </div>\n          <div class=\"col-sm-6 col-md-3 text-indigo\">\n            <h5 class=\"mb-0\">\n              <strong>\n                2.89M\n              </strong>\n            </h5>\n            <small>\n              Research\n            </small>\n          </div>\n          <div class=\"col-sm-6 col-md-3\">\n            <h5 class=\"mb-0\">\n              <strong>\n                34.76B\n              </strong>\n            </h5>\n            <small>\n              Food\n            </small>\n          </div>\n        </div>\n      </div>\n      <div class=\"mb-1\">\n        <ngx-charts-gauge (legendlabelclick)=\"onLegendLabelClick($event)\" (select)=\"select($event)\" [angleSpan]=\"gaugeAngleSpan\" [bigSegments]=\"gaugeLargeSegments\" [legend]=\"showLegend\" [margin]=\"margin ? [marginTop, marginRight, marginBottom, marginLeft] : null\" [max]=\"gaugeMax\" [min]=\"gaugeMin\" [results]=\"single\" [scheme]=\"colorScheme\" [showAxis]=\"gaugeShowAxis\" [smallSegments]=\"gaugeSmallSegments\" [startAngle]=\"gaugeStartAngle\" [textValue]=\"gaugeTextValue\" [tooltipDisabled]=\"tooltipDisabled\" [units]=\"gaugeUnits\" class=\"gauge-container\">\n        </ngx-charts-gauge>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-lg-5\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        <div class=\"card-header-text w-100\">\n          <div class=\"card-title\">\n            Social Feed\n          </div>\n          <div class=\"card-subtitle text-capitalize ff-sans\">\n            Last updated: 1 hour ago\n          </div>\n        </div>\n      </div>\n      <div class=\"activity-stream\">\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face1.jpg\"/>\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">\n                Received a call from Joel\n              </div>\n              <div class=\"card-subtitle\">\n                at 3:14PM\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-header\">\n            <img class=\"card-avatar\" src=\"assets/images/face2.jpg\"/>\n            <div class=\"card-header-text\">\n              <div class=\"card-title\">\n                Added Ellie to Group\n              </div>\n              <div class=\"card-subtitle\">\n                5 mins ago\n              </div>\n            </div>\n          </div>\n          <div class=\"card-block\">\n            <p class=\"mb-0\">\n              Nullam id dolor id nibh ultricies vehicula ut id elit.\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-3\">\n    <div class=\"card bg-purple card-inverse\">\n      <div class=\"card-header\">\n        Todos\n      </div>\n      <div class=\"card-block\">\n        <ul class=\"list-unstyled mb-0\">\n          <li>\n            <label class=\"custom-control custom-checkbox mb-2\">\n              <input class=\"custom-control-input\" type=\"checkbox\"/>\n              <span class=\"custom-control-indicator\">\n              </span>\n              <span class=\"custom-control-description\">\n                Learn Angular 4\n              </span>\n            </label>\n          </li>\n          <li>\n            <label class=\"custom-control custom-checkbox mb-2\">\n              <input class=\"custom-control-input\" type=\"checkbox\"/>\n              <span class=\"custom-control-indicator\">\n              </span>\n              <span class=\"custom-control-description\">\n                Update Vue.JS\n              </span>\n            </label>\n          </li>\n          <li>\n            <label class=\"custom-control custom-checkbox\">\n              <input class=\"custom-control-input\" type=\"checkbox\">\n              <span class=\"custom-control-indicator\">\n              </span>\n              <span class=\"custom-control-description\">\n                Add ReactJS\n              </span>\n            </label>\n          </li>\n          <li>\n            <label class=\"custom-control custom-checkbox mb-2\">\n              <input class=\"custom-control-input\" type=\"checkbox\"/>\n              <span class=\"custom-control-indicator\">\n              </span>\n              <span class=\"custom-control-description\">\n                Upgrade Ember\n              </span>\n            </label>\n          </li>\n          <li>\n            <label class=\"custom-control custom-checkbox mb-2\">\n              <input class=\"custom-control-input\" type=\"checkbox\"/>\n              <span class=\"custom-control-indicator\">\n              </span>\n              <span class=\"custom-control-description\">\n                Read on Meteor\n              </span>\n            </label>\n          </li>\n          <li>\n            <label class=\"custom-control custom-checkbox\">\n              <input class=\"custom-control-input\" type=\"checkbox\"/>\n              <span class=\"custom-control-indicator\">\n              </span>\n              <span class=\"custom-control-description\">\n                Commit Riot changes\n              </span>\n            </label>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-lg-4\">\n    <div class=\"card no-bg\">\n      <div class=\"card-block text-center rounded\" style=\"background-image: url('assets/images/unsplash/2.jpg')\">\n        <img alt=\"\" class=\"avatar-lg rounded-circle d-block mx-auto mb-3\" src=\"assets/images/face4.jpg\"/>\n        <button class=\"btn btn-secondary btn-sm mb-3\">\n          Follow\n        </button>\n      </div>\n      <div class=\"card-block pt-3 pb-3 ml-3 mr-3 bg-indigo text-white rounded\" style=\"margin-top: -15px;\">\n        <div class=\"row text-center\">\n          <div class=\"col\">\n            <div class=\"h6 no-margin\">\n              62\n            </div>\n            <div class=\"small bold text-uppercase\">\n              Followers\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"h6 no-margin\">\n              98\n            </div>\n            <div class=\"small bold text-uppercase\">\n              Posts\n            </div>\n          </div>\n          <div class=\"col\">\n            <div class=\"h6 no-margin\">\n              29\n            </div>\n            <div class=\"small bold text-uppercase\">\n              Likes\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-12 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        Messages\n      </div>\n      <ul class=\"list-group border-0\">\n        <li class=\"list-group-item border-top-0 border-left-0 border-right-0\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"pull-left avatar-sm\" href=\"javascript:;\">\n              <img class=\"img-fluid rounded-circle\" src=\"assets/images/face1.jpg\"/>\n            </a>\n            <div class=\"pl-3\">\n              <a class=\"d-block\" href=\"javascript:;\">\n                Amanda Alvarez\n              </a>\n              <span>\n                Donec ullamcorper nulla non metus auctor fringilla.\n              </span>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item border-top-0 border-left-0 border-right-0\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"pull-left avatar-sm\" href=\"javascript:;\">\n              <img class=\"img-fluid rounded-circle\" src=\"assets/images/face2.jpg\"/>\n            </a>\n            <div class=\"pl-3\">\n              <a class=\"d-block\" href=\"javascript:;\">\n                Debra Kelly\n              </a>\n              <span>\n                Donec ullamcorper nulla non metus auctor fringilla.\n              </span>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item border-top-0 border-left-0 border-right-0  border-bottom-0\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"pull-left avatar-sm\" href=\"javascript:;\">\n              <img class=\"img-fluid rounded-circle\" src=\"assets/images/face3.jpg\"/>\n            </a>\n            <div class=\"pl-3\">\n              <a class=\"d-block\" href=\"javascript:;\">\n                Walter Ryan\n              </a>\n              <span>\n                Donec ullamcorper nulla non metus auctor fringilla.\n              </span>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card bg-indigo card-inverse\">\n      <div class=\"card-header no-shadow\">\n        Tweets\n      </div>\n      <div class=\"list-group\">\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start no-bg text-white\">\n          <p class=\"mb-1 w-100\">\n            Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.\n          </p>\n          <div class=\"d-flex w-100 justify-content-between\">\n            <div>\n              <a href=\"javascript:;\" class=\"text-white\">\n                <i class=\"icon icon-basic-heart\">\n                </i>\n              </a>\n              <a href=\"javascript:;\" class=\"text-white\">\n                <i class=\"icon icon-basic-share mr-3 ml-3\">\n                </i>\n              </a>\n            </div>\n            <small>\n              3m\n            </small>\n          </div>\n        </div>\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start no-bg text-white\">\n          <p class=\"mb-1 w-100\">\n            Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.\n          </p>\n          <div class=\"d-flex w-100 justify-content-between\">\n            <div>\n              <a href=\"javascript:;\" class=\"text-white\">\n                <i class=\"icon icon-basic-heart\">\n                </i>\n              </a>\n              <a href=\"javascript:;\" class=\"text-white\">\n                <i class=\"icon icon-basic-share mr-3 ml-3\">\n                </i>\n              </a>\n            </div>\n            <small>\n              3m\n            </small>\n          </div>\n        </div>\n        <div class=\"list-group-item list-group-item-action flex-column align-items-start no-bg text-white  border-bottom-0\">\n          <p class=\"mb-1 w-100\">\n            Aenean lacinia bibendum nulla sed consectetur. Cras mattis consectetur purus sit amet fermentum.\n          </p>\n          <div class=\"d-flex w-100 justify-content-between\">\n            <div>\n              <a href=\"javascript:;\" class=\"text-white\">\n                <i class=\"icon icon-basic-heart\">\n                </i>\n              </a>\n              <a href=\"javascript:;\" class=\"text-white\">\n                <i class=\"icon icon-basic-share mr-3 ml-3\">\n                </i>\n              </a>\n            </div>\n            <small>\n              3m\n            </small>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-xl-4\">\n    <div class=\"card\">\n      <div class=\"card-header no-shadow\">\n        News Feed\n      </div>\n      <ul class=\"list-group border-0\">\n        <li class=\"list-group-item border-left-0 border-right-0\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"pull-left avatar-sm\" href=\"javascript:;\">\n              <img class=\"img-fluid\" src=\"assets/images/face4.jpg\"/>\n            </a>\n            <div class=\"pl-3\">\n              <span class=\"d-block\">\n                Donec ullamcorper nulla non metus auctor fringilla.\n              </span>\n              <small class=\"text-muted\">\n                Yesterday\n              </small>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item border-left-0 border-right-0\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"pull-left avatar-sm\" href=\"javascript:;\">\n              <img class=\"img-fluid\" src=\"assets/images/face5.jpg\"/>\n            </a>\n            <div class=\"pl-3\">\n              <span class=\"d-block\">\n                Donec ullamcorper nulla non metus auctor fringilla.\n              </span>\n              <small class=\"text-muted\">\n                Yesterday\n              </small>\n            </div>\n          </div>\n        </li>\n        <li class=\"list-group-item border-left-0 border-right-0  border-bottom-0\">\n          <div class=\"d-flex justify-content-center\">\n            <a class=\"pull-left avatar-sm\" href=\"javascript:;\">\n              <img class=\"img-fluid\" src=\"assets/images/face1.jpg\">\n            </a>\n            <div class=\"pl-3\">\n              <span class=\"d-block\">\n                Donec ullamcorper nulla non metus auctor fringilla.\n              </span>\n              <small class=\"text-muted\">\n                Yesterday\n              </small>\n            </div>\n          </div>\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>"

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
//# sourceMappingURL=20.chunk.js.map