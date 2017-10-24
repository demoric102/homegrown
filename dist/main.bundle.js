webpackJsonp([30],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"../../../../../src/app/authentication/authentication.module.ts",
		9,
		0
	],
	"./cards/cards.module": [
		"../../../../../src/app/cards/cards.module.ts",
		17,
		0
	],
	"./caterer/caterer.module": [
		"../../../../../src/app/caterer/caterer.module.ts",
		6,
		0
	],
	"./charts/charts.module": [
		"../../../../../src/app/charts/charts.module.ts",
		11,
		0
	],
	"./components/components.module": [
		"../../../../../src/app/components/components.module.ts",
		0,
		2
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts",
		27,
		0
	],
	"./datatable/datatable.module": [
		"../../../../../src/app/datatable/datatable.module.ts",
		5
	],
	"./docs/docs.module": [
		"../../../../../src/app/docs/docs.module.ts",
		26
	],
	"./email/email.module": [
		"../../../../../src/app/email/email.module.ts",
		20,
		0
	],
	"./error/error.module": [
		"../../../../../src/app/error/error.module.ts",
		16
	],
	"./fooditem/fooditem.module": [
		"../../../../../src/app/fooditem/fooditem.module.ts",
		18,
		0
	],
	"./form/form.module": [
		"../../../../../src/app/form/form.module.ts",
		4,
		0
	],
	"./fullcalendar/fullcalendar.module": [
		"../../../../../src/app/fullcalendar/fullcalendar.module.ts",
		1
	],
	"./icons/icons.module": [
		"../../../../../src/app/icons/icons.module.ts",
		8,
		0
	],
	"./invoice/invoice.module": [
		"../../../../../src/app/invoice/invoice.module.ts",
		15,
		0
	],
	"./landing/landing.module": [
		"../../../../../src/app/landing/landing.module.ts",
		25
	],
	"./lga/lga.module": [
		"../../../../../src/app/lga/lga.module.ts",
		24,
		0
	],
	"./maps/maps.module": [
		"../../../../../src/app/maps/maps.module.ts",
		3
	],
	"./media/media.module": [
		"../../../../../src/app/media/media.module.ts",
		14
	],
	"./pages/pages.module": [
		"../../../../../src/app/pages/pages.module.ts",
		7
	],
	"./social/social.module": [
		"../../../../../src/app/social/social.module.ts",
		23
	],
	"./supplier/supplier.module": [
		"../../../../../src/app/supplier/supplier.module.ts",
		0,
		10
	],
	"./tables/tables.module": [
		"../../../../../src/app/tables/tables.module.ts",
		19
	],
	"./taskboard/taskboard.module": [
		"../../../../../src/app/taskboard/taskboard.module.ts",
		0,
		22
	],
	"./user/user.module": [
		"../../../../../src/app/user/user.module.ts",
		0,
		13
	],
	"./widgets/widgets.module": [
		"../../../../../src/app/widgets/widgets.module.ts",
		21
	],
	"./zone/zone.module": [
		"../../../../../src/app/zone/zone.module.ts",
		0,
		12
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_caterer__ = __webpack_require__("../../../../../src/app/services/caterer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_lga__ = __webpack_require__("../../../../../src/app/services/lga.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_bvn__ = __webpack_require__("../../../../../src/app/services/bvn.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_bank__ = __webpack_require__("../../../../../src/app/services/bank.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_fooditem__ = __webpack_require__("../../../../../src/app/services/fooditem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_supplier__ = __webpack_require__("../../../../../src/app/services/supplier.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_school__ = __webpack_require__("../../../../../src/app/services/school.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_food__ = __webpack_require__("../../../../../src/app/services/food.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user__ = __webpack_require__("../../../../../src/app/services/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_invoice__ = __webpack_require__("../../../../../src/app/services/invoice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__interceptor_interceptor__ = __webpack_require__("../../../../../src/app/interceptor/interceptor.ts");
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_13__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_14__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_10_angular_async_local_storage__["a" /* AsyncLocalStorageModule */],
            __WEBPACK_IMPORTED_MODULE_15__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* AppRoutes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClient */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_8__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_9_ng_sidebar__["SidebarModule"].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__services_caterer__["a" /* CatererService */],
            __WEBPACK_IMPORTED_MODULE_17__services_lga__["a" /* LgaService */],
            __WEBPACK_IMPORTED_MODULE_18__services_bvn__["a" /* BvnService */],
            __WEBPACK_IMPORTED_MODULE_19__services_bank__["a" /* BankService */],
            __WEBPACK_IMPORTED_MODULE_22__services_school__["a" /* SchoolService */],
            __WEBPACK_IMPORTED_MODULE_23__services_food__["a" /* FoodService */],
            __WEBPACK_IMPORTED_MODULE_20__services_fooditem__["a" /* FooditemService */],
            __WEBPACK_IMPORTED_MODULE_24__services_user__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_21__services_supplier__["a" /* SupplierService */],
            __WEBPACK_IMPORTED_MODULE_25__services_invoice__["a" /* InvoiceService */],
            __WEBPACK_IMPORTED_MODULE_26__guard_auth_guard__["a" /* AuthGuardService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_27__interceptor_interceptor__["a" /* TokenInterceptor */],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("../../../../../src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guard_auth_guard__ = __webpack_require__("../../../../../src/app/guard/auth-guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });



var AppRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [{
                path: '',
                loadChildren: './dashboard/dashboard.module#DashboardModule',
                canActivate: [__WEBPACK_IMPORTED_MODULE_2__guard_auth_guard__["a" /* AuthGuardService */]]
            }, {
                path: 'supplier',
                loadChildren: './supplier/supplier.module#SupplierModule'
            }, {
                path: 'caterer',
                loadChildren: './caterer/caterer.module#CatererModule'
            },
            {
                path: 'zone',
                loadChildren: './zone/zone.module#ZoneModule'
            },
            {
                path: 'invoice',
                loadChildren: './invoice/invoice.module#InvoiceModule'
            },
            {
                path: 'user',
                loadChildren: './user/user.module#UserModule'
            },
            {
                path: 'fooditem',
                loadChildren: './fooditem/fooditem.module#FooditemModule'
            }, {
                path: 'email',
                loadChildren: './email/email.module#EmailModule'
            }, {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule'
            }, {
                path: 'icons',
                loadChildren: './icons/icons.module#IconsModule'
            }, {
                path: 'cards',
                loadChildren: './cards/cards.module#CardsModule'
            }, {
                path: 'forms',
                loadChildren: './form/form.module#FormModule'
            }, {
                path: 'lga',
                loadChildren: './lga/lga.module#LgaModule'
            }, {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule'
            }, {
                path: 'datatable',
                loadChildren: './datatable/datatable.module#DatatableModule'
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule'
            }, {
                path: 'maps',
                loadChildren: './maps/maps.module#MapsModule'
            }, {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }, {
                path: 'taskboard',
                loadChildren: './taskboard/taskboard.module#TaskboardModule'
            }, {
                path: 'calendar',
                loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule'
            }, {
                path: 'media',
                loadChildren: './media/media.module#MediaModule'
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule'
            }, {
                path: 'social',
                loadChildren: './social/social.module#SocialModule'
            }, {
                path: 'docs',
                loadChildren: './docs/docs.module#DocsModule'
            }]
    }, {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [{
                path: 'authentication',
                loadChildren: './authentication/authentication.module#AuthenticationModule'
            }, {
                path: 'error',
                loadChildren: './error/error.module#ErrorModule'
            }, {
                path: 'landing',
                loadChildren: './landing/landing.module#LandingModule'
            }]
    }, {
        path: '**',
        redirectTo: 'error/404'
    }];
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/guard/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user__ = __webpack_require__("../../../../../src/app/services/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var url = state.url;
        if (this.userService.isUserLoggedIn()) {
            return true;
        }
        this.userService.setRedirectUrl(url);
        this.router.navigate(['authentication/signin']);
        return false;
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "../../../../../src/app/interceptor/interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TokenInterceptor = (function () {
    function TokenInterceptor(router, localStorage) {
        this.router = router;
        this.localStorage = localStorage;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        if (request.method === 'OPTIONS' || !localStorage.getItem('token')) {
            return next.handle(request);
        }
        request = request.clone({
            setHeaders: {
                "Authorization": localStorage.getItem('token') || "",
                "Content-Type": "application/json"
            }
        });
        console.log(request);
        return next.handle(request).do(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpResponse */]) {
                // do stuff with response if you want
            }
        }, function (err) {
            if (err instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpErrorResponse */]) {
                if (err.status === 401) {
                    _this.router.navigate(['authentication/signin']);
                }
            }
        });
    };
    return TokenInterceptor;
}());
TokenInterceptor = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["b" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_async_local_storage__["b" /* AsyncLocalStorage */]) === "function" && _b || Object])
], TokenInterceptor);

var _a, _b;
//# sourceMappingURL=interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-sidebar-container class=\"app\" [ngClass]=\"{'mode-boxed': isBoxed, 'sidebar-opened': isOpened, 'theme-light': theme == 'light', 'theme-dark': theme == 'dark', 'mode-push': _mode == 'push', 'mode-dock': _mode == 'dock', 'mode-over': _mode == 'over', 'mode-slide': _mode == 'slide', 'no-footer': options?.removeFooter, 'map-header': options?.mapHeader}\">\n  <ng-sidebar\n    [(opened)]=\"isOpened\"\n    [(mode)]=\"_mode\"\n    [position]=\"'left'\"\n    [dockedSize]=\"'80px'\"\n    [autoCollapseWidth]=\"'991'\"\n    [closeOnClickOutside]=\"isOver()\"\n    [showBackdrop]=\"isOver()\"\n    [sidebarClass]=\"'sidebar-panel'\" #sidebar>\n    <nav class=\"navbar custom-navbar main-brand\">\n      <a class=\"navbar-brand mr-auto\" [routerLink]=\"['/']\">\n        <img src=\"assets/images/logo.png\" class=\"navbar-brand-logo\" alt=\"\">\n        <span class=\"docked-hidden\">&nbsp;HGSFP</span>\n      </a>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a href=\"javascript:;\" class=\"nav-link\" (click)=\"toogleSidebar()\">\n            <i class=\"hamburger-icon v2\" *ngIf=\"_mode === 'over' && !isOver()\">\n              <span></span>\n            </i>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- main navigation -->\n    <nav class=\"menu\">\n      <ul class=\"navigation\" appAccordion>\n        <li class=\"navigation-item\" appAccordionLink *ngFor=\"let menuitem of menuItems.getAll()\" group=\"{{menuitem.state}}\">\n          <a class=\"navigation-link\" appAccordionToggle [routerLink]=\"['/', menuitem.state]\" *ngIf=\"menuitem.type === 'link'\">\n            <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n            <span>{{ menuitem.name | translate }}</span>\n            <span class=\"mr-auto\"></span>\n            <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a class=\"navigation-link\" appAccordionToggle href=\"{{menuitem.state}}\" *ngIf=\"menuitem.type === 'extLink'\">\n            <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n            <span>{{ menuitem.name | translate }}</span>\n            <span class=\"mr-auto\"></span>\n            <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a class=\"navigation-link\" appAccordionToggle href=\"{{menuitem.state}}\" target=\"_blank\" *ngIf=\"menuitem.type === 'extTabLink'\">\n            <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n            <span>{{ menuitem.name | translate }}</span>\n            <span class=\"mr-auto\"></span>\n            <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n          </a>\n          <a class=\"navigation-link\" appAccordionToggle href=\"javascript:;\" *ngIf=\"menuitem.type === 'sub'\">\n            <i class=\"icon icon-{{ menuitem.icon }}\"></i>\n            <span>{{ menuitem.name | translate }}</span>\n            <span class=\"mr-auto\"></span>\n            <span class=\"badge badge-{{ badge.type }}\" *ngFor=\"let badge of menuitem.badge\">{{ badge.value }}</span>\n            <i class=\"menu-caret icon icon-arrows-right\"></i>\n          </a>\n          <ul class=\"navigation-submenu\" *ngIf=\"menuitem.type === 'sub'\">\n            <li class=\"navigation-item\" *ngFor=\"let childitem of menuitem.children\" routerLinkActive=\"open\">\n              <a [routerLink]=\"['/', menuitem.state, childitem.state ]\" class=\"navigation-link relative\">{{ childitem.name | translate }}</a>\n            </li>\n          </ul>\n        </li>\n        <li class=\"navigation-item\"><hr class=\"mt-0 mb-0\" /></li>\n        <li class=\"navigation-item\">\n          <a class=\"navigation-link\" (click)=\"addMenuItem()\">\n            <i class=\"icon icon-basic-add\"></i>\n            <span>Add</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n    <!-- /main navigation -->\n  </ng-sidebar>\n\n  <div ng-sidebar-content class=\"app-inner\">\n    <nav class=\"navbar custom-navbar bg-faded main-header\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a href=\"javascript:;\" class=\"nav-link\" (click)=\"toogleSidebar()\">\n            <i class=\"hamburger-icon v2\" *ngIf=\"_mode !== 'dock'\">\n              <span></span>\n            </i>\n          </a>\n        </li>\n      </ul>\n      <span class=\"navbar-heading hidden-xs-down\">{{options?.heading}}</span>\n      <span class=\"mr-auto\"></span>\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\" ngbDropdown>\n          <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle>\n            <img src=\"assets/images/avatar.jpg\" class=\"navbar-avatar rounded-circle\" alt=\"user\" title=\"user\">\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right\">\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"icon icon-basic-settings mr-3\"></i>\n              <span>Settings</span>\n            </a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"icon icon-basic-postcard mr-3\"></i>\n              <span>Profile</span>\n            </a>\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"icon icon-basic-message-multiple mr-3\"></i>\n              <span>Notifications</span>\n            </a>\n            <div class=\"dropdown-divider\"></div>\n            <a class=\"dropdown-item\" href=\"javascript:;\">\n              <i class=\"icon icon-arrows-switch-vertical mr-3\"></i>\n              <span>Signout</span>\n            </a>\n          </div>\n        </li> \n        <li class=\"nav-item\" ngbDropdown>\n          <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle>\n            <i class=\"fi flaticon-notification\"></i>\n            <span class=\"badge badge-danger\">4</span>\n          </a>\n          <div class=\"dropdown-menu dropdown-menu-right notifications\">\n            <div class=\"notifications-wrapper\">\n              <a href=\"javascript:;\" class=\"dropdown-item\">\n                <span class=\"badge badge-warning\">NEW</span>\n                &nbsp;Sean launched a new application\n                <span class=\"time\">2 seconds ago</span>\n              </a>\n              <a href=\"javascript:;\" class=\"dropdown-item\">\n                Removed calendar from app list\n                <span class=\"time\">4 hours ago</span>\n              </a>\n              <a href=\"javascript:;\" class=\"dropdown-item\">\n                Jack Hunt has joined mailing list\n                <span class=\"time\">9 days ago</span>\n              </a>\n              <a href=\"javascript:;\" class=\"dropdown-item\">\n                <span class=\"text-muted\">Conan Johns created a new list</span>\n                <span class=\"time\">9 days ago</span>\n              </a>\n            </div>\n            <div class=\"notification-footer\">Notifications</div>\n          </div>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:;\" class=\"nav-link\" appToggleFullscreen>\n            <i class=\"fi flaticon-fullscreen\"></i>\n          </a>\n        </li>\n        \n        <li class=\"nav-item\">\n          <span class=\"nav-divider\"></span>\n        </li>\n        <li class=\"nav-item\">\n          <a href=\"javascript:;\" class=\"nav-link\" (click)=\"openSearch(search)\">\n            <i class=\"fi flaticon-search\"></i>\n          </a>\n        </li>\n              \n      </ul>\n    </nav>\n\n    <div class=\"main-content\">\n      <router-outlet></router-outlet>\n      <nav class=\"navbar custom-navbar navbar-light main-footer small\">\n        <ul class=\"navbar-nav mr-auto\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:;\">\n              <span>Copyright &copy; 2017</span> <span class=\"ff-headers text-uppercase\">Decima</span>. All rights reserved\n            </a>\n          </li>\n        </ul>\n        <ul class=\"navbar-nav hidden-xs-down\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"javascript:;\">Made with love on Earth</a>\n          </li>\n        </ul>\n      </nav>\n    </div>\n  </div>\n\n</ng-sidebar-container>\n\n<ng-template #search let-c=\"close\" let-d=\"dismiss\">\n  <form class=\"search__form\" action=\"\">\n    <input class=\"search-input\" name=\"search\" type=\"search\" placeholder=\"Search...\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" autofocus=\"true\" />\n    <p class=\"text-muted\"><small><strong>Hit enter to search or ESC to close</strong></small></p>\n  </form>\n  <div class=\"search-suggestions\">\n    <h6 class=\"text-uppercase\"><strong>Suggestions?</strong></h6>\n    <p class=\"text-primary\">#medical #analytics #fitness #transport #ui #dashboard #admin #bootstrap #angular #typescript</p>\n  </div>\n  <button type=\"button\" class=\"search-close\" aria-label=\"Close search form\" (click)=\"d('Cross click')\">\n    <i class=\"fi flaticon-close\"></i>\n  </button>\n</ng-template>\n\n\n<div class=\"configuration hidden-sm-down\" [ngClass]=\"{'active': showSettings}\">\n  <div class=\"configuration-cog\" (click)=\"showSettings = !showSettings\">\n    <i class=\"icon icon-basic-mixer2\"></i>\n  </div>\n  <div class=\"card\">\n    <div class=\"card-header\">\n      Template Options\n    </div>\n    <div class=\"card-block\">\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Explore Sidebar API</strong></small>\n      <div class=\"custom-controls-stacked mb-2\">\n        <label class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"push\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Push mode</span>\n        </label>\n        <label class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"dock\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Docked mode</span>\n        </label>\n        <label class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"over\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Over content mode</span>\n        </label>\n        <label class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"slide\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Slide mode</span>\n        </label>\n      </div>\n\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Layout</strong></small>\n      <div class=\"d-flex align-items-center\">\n        <label class=\"custom-control custom-checkbox mb-2\">\n          <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"isBoxed\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Boxed</span>\n        </label>\n      </div>\n      <div class=\"d-flex align-items-center mb-2\">\n        <label class=\"custom-control custom-checkbox mb-2\">\n          <input type=\"checkbox\" class=\"custom-control-input\" [ngModel]=\"options?.removeFooter\" (ngModelChange)=\"options.removeFooter=$event\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Remove footer</span>\n        </label>\n      </div>\n\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Theme</strong></small>\n      <div class=\"custom-controls-stacked mb-2\">\n        <label class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"light\" [(ngModel)]=\"theme\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Light theme</span>\n        </label>\n        <label class=\"custom-control custom-checkbox\">\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"dark\" [(ngModel)]=\"theme\">\n          <span class=\"custom-control-indicator\"></span>\n          <span class=\"custom-control-description\">Dark theme</span>\n        </label>\n      </div>\n\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Language</strong></small>\n      <div class=\"d-flex align-items-center\">\n        <select class=\"custom-select\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\" placeholder=\"Select language\" style=\"min-width: 50%;\">\n          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</option>\n        </select>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".configuration {\n  width: 240px;\n  position: fixed;\n  right: 0;\n  top: 150px;\n  margin-left: 0;\n  z-index: 99999999;\n  transition: -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0); }\n  .configuration .card {\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n    margin: 0;\n    border-radius: 0; }\n\n.configuration.active {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n\n.configuration-cog {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  left: -50px;\n  line-height: 50px;\n  font-size: 24px;\n  text-align: center;\n  background: #fff;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n  cursor: pointer; }\n  .configuration-cog i:before {\n    line-height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__ = __webpack_require__("../../../../../src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(menuItems, router, route, translate, modalService, titleService) {
        this.menuItems = menuItems;
        this.router = router;
        this.route = route;
        this.translate = translate;
        this.modalService = modalService;
        this.titleService = titleService;
        this.currentLang = 'en';
        this.theme = 'light';
        this.showSettings = false;
        this.isDocked = false;
        this.isBoxed = false;
        this.isOpened = true;
        this.mode = 'push';
        this._mode = this.mode;
        this._autoCollapseWidth = 991;
        this.width = window.innerWidth;
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isOver()) {
            this._mode = 'over';
            this.isOpened = false;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; }).subscribe(function (event) {
            // Scroll to top on view load
            document.querySelector('.main-content').scrollTop = 0;
            _this.runOnRouteChange();
        });
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        var _this = this;
        if (this.isOver() || this.router.url === '/maps/fullscreen') {
            this.isOpened = false;
        }
        this.route.children.forEach(function (route) {
            var activeRoute = route;
            while (activeRoute.firstChild) {
                activeRoute = activeRoute.firstChild;
            }
            _this.options = activeRoute.snapshot.data;
        });
        if (this.options.hasOwnProperty('heading')) {
            this.setTitle(this.options.heading);
        }
    };
    AdminLayoutComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle('Decima - Bootstrap 4 Angular Admin Template | ' + newTitle);
    };
    AdminLayoutComponent.prototype.toogleSidebar = function () {
        if (this._mode !== 'dock') {
            this.isOpened = !this.isOpened;
        }
    };
    AdminLayoutComponent.prototype.isOver = function () {
        return window.matchMedia("(max-width: 991px)").matches;
    };
    AdminLayoutComponent.prototype.openSearch = function (search) {
        this.modalService.open(search, { windowClass: 'search', backdrop: false });
    };
    // addMenuItem(): void {
    //   this.menuItems.add({
    //     state: 'menu',
    //     name: 'MENU',
    //     type: 'sub',
    //     icon: 'basic-webpage-txt',
    //     children: [
    //       {state: 'menu', name: 'MENU'},
    //       {state: 'menu', name: 'MENU'}
    //     ]
    //   });
    // }
    AdminLayoutComponent.prototype.onResize = function (event) {
        if (this.width === event.target.innerWidth) {
            return false;
        }
        if (this.isOver()) {
            this._mode = 'over';
            this.isOpened = false;
        }
        else {
            this._mode = this.mode;
            this.isOpened = true;
        }
        this.width = event.target.innerWidth;
    };
    return AdminLayoutComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
    __metadata("design:type", Object)
], AdminLayoutComponent.prototype, "sidebar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AdminLayoutComponent.prototype, "onResize", null);
AdminLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: __webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layouts/admin/admin-layout.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__["a" /* MenuItems */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__["a" /* MenuItems */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"]) === "function" && _f || Object])
], AdminLayoutComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=admin-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    return AuthLayoutComponent;
}());
AuthLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-layout',
        template: '<router-outlet></router-outlet>'
    })
], AuthLayoutComponent);

//# sourceMappingURL=auth-layout.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/bank.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BankService = (function () {
    function BankService(http) {
        this.http = http;
    }
    BankService.prototype.getAll = function () {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].BANK, "?sort=name ASC")).map(function (response) { return response.data; });
    };
    return BankService;
}());
BankService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], BankService);

var _a;
//# sourceMappingURL=bank.js.map

/***/ }),

/***/ "../../../../../src/app/services/bvn.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BvnService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BvnService = (function () {
    function BvnService(http) {
        this.http = http;
    }
    BvnService.prototype.sendToken = function (bvn) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].BVN_SEND), bvn).map(function (response) { return response.data; });
    };
    BvnService.prototype.verify = function (bvn) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].BVN_VALIDATE), bvn).map(function (response) { return response.data; });
    };
    return BvnService;
}());
BvnService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], BvnService);

var _a;
//# sourceMappingURL=bvn.js.map

/***/ }),

/***/ "../../../../../src/app/services/caterer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CatererService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CatererService = (function () {
    function CatererService(http) {
        this.http = http;
    }
    CatererService.prototype.createCaterer = function (caterer) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].CATERER), caterer);
    };
    CatererService.prototype.editCaterer = function (caterer) {
        return this.http.put(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].CATERER, '/', caterer.id), caterer);
    };
    CatererService.prototype.datatable = function (data) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].CATERER_DATATABLE), data)
            .map(function (response) { return response.data; })
            .catch(function (reason) { return reason.error.data; });
    };
    CatererService.prototype.getCaterer = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].CATERER, '?where={"id":"', id, '"}&populate=[school,bankaccount,lga]'))
            .map(function (response) { return response.data[0]; });
    };
    return CatererService;
}());
CatererService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], CatererService);

var _a;
//# sourceMappingURL=caterer.js.map

/***/ }),

/***/ "../../../../../src/app/services/food.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FoodService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FoodService = (function () {
    function FoodService(http) {
        this.http = http;
    }
    FoodService.prototype.createFood = function (food) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].FOOD), food);
    };
    FoodService.prototype.getAll = function () {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].FOOD, "?limit=null&sort=name ASC")).map(function (response) { return response.data; });
    };
    return FoodService;
}());
FoodService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], FoodService);

var _a;
//# sourceMappingURL=food.js.map

/***/ }),

/***/ "../../../../../src/app/services/fooditem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooditemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FooditemService = (function () {
    function FooditemService(http) {
        this.http = http;
    }
    FooditemService.prototype.createFood = function (food) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].FOOD), food);
    };
    FooditemService.prototype.editUser = function (food) {
        return this.http.put(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].FOOD, '/', food.id), food);
    };
    FooditemService.prototype.datatable = function (data) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].FOOD_DATATABLE), data)
            .map(function (response) { return response.data; })
            .catch(function (reason) { return reason.error.data; });
    };
    FooditemService.prototype.getFood = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].FOOD, '?where={"id":"', id, '"}&populate=[Food]'))
            .map(function (response) { return response.data[0]; });
    };
    FooditemService.prototype.getAll = function () {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].FOOD, "?sort=name ASC")).map(function (response) { return response.data; });
    };
    return FooditemService;
}());
FooditemService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], FooditemService);

var _a;
//# sourceMappingURL=fooditem.js.map

/***/ }),

/***/ "../../../../../src/app/services/invoice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoiceService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var InvoiceService = (function () {
    function InvoiceService(http) {
        this.http = http;
    }
    InvoiceService.prototype.createInvoice = function (invoice) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].INVOICE), invoice);
    };
    InvoiceService.prototype.datatable = function (data) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].INVOICE_DATATABLE), data)
            .map(function (response) { return response.data; })
            .catch(function (reason) { return reason.error.data; });
    };
    InvoiceService.prototype.getInvoice = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].INVOICE, '?where={"id":"', id, '"}&populate=[caterer,supplier]'))
            .map(function (response) { return response.data[0]; });
    };
    return InvoiceService;
}());
InvoiceService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], InvoiceService);

var _a;
//# sourceMappingURL=invoice.js.map

/***/ }),

/***/ "../../../../../src/app/services/lga.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LgaService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LgaService = (function () {
    function LgaService(http) {
        this.http = http;
    }
    LgaService.prototype.getAll = function () {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].LGA, "?sort=name ASC")).map(function (response) { return response.data; });
    };
    return LgaService;
}());
LgaService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], LgaService);

var _a;
//# sourceMappingURL=lga.js.map

/***/ }),

/***/ "../../../../../src/app/services/school.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchoolService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SchoolService = (function () {
    function SchoolService(http) {
        this.http = http;
    }
    SchoolService.prototype.getAll = function () {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].SCHOOL, "?limit=null&sort=name ASC")).map(function (response) { return response.data; });
    };
    SchoolService.prototype.getLga = function (lga) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].SCHOOL, '?where={"lga":"', lga, '"}&limit=null&sort=name ASC')).map(function (response) { return response.data; });
    };
    return SchoolService;
}());
SchoolService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SchoolService);

var _a;
//# sourceMappingURL=school.js.map

/***/ }),

/***/ "../../../../../src/app/services/supplier.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupplierService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SupplierService = (function () {
    function SupplierService(http) {
        this.http = http;
    }
    SupplierService.prototype.createSupplier = function (supplier) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].SUPPLIER), supplier);
    };
    SupplierService.prototype.datatable = function (data) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].SUPPLIER_DATATABLE), data)
            .map(function (response) { return response.data; })
            .catch(function (reason) { return reason.error.data; });
    };
    SupplierService.prototype.getSupplier = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].SUPPLIER, '?where={"id":"', id, '"}&populate=[bank,lga]'))
            .map(function (response) { return response.data[0]; });
    };
    SupplierService.prototype.getWhereLga = function (lga) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_3__shared_endpoints__["a" /* endpoints */].SUPPLIER, '?where={"lga":"', lga, '"}&limit=null&sort=name ASC')).map(function (response) { return response.data; });
    };
    return SupplierService;
}());
SupplierService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], SupplierService);

var _a;
//# sourceMappingURL=supplier.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__ = __webpack_require__("../../../../../src/app/shared/endpoints.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__ = __webpack_require__("../../../../angular-async-local-storage/angular-async-local-storage.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(http, localStorage) {
        this.http = http;
        this.localStorage = localStorage;
        this.redirectUrl = '/';
    }
    UserService.prototype.createUser = function (user) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].USER), user);
    };
    UserService.prototype.loginUser = function (user) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].USER_LOGIN), user)
            .map(function (response) { return response.data; });
    };
    UserService.prototype.getRedirectUrl = function () {
        return this.redirectUrl;
    };
    UserService.prototype.setRedirectUrl = function (url) {
        this.redirectUrl = url;
    };
    UserService.prototype.isUserLoggedIn = function () {
        if (localStorage.getItem('uid') && localStorage.getItem('token')) {
            return true;
        }
        return false;
    };
    UserService.prototype.editUser = function (user) {
        return this.http.put(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].USER, '/', user.id), user);
    };
    UserService.prototype.datatable = function (data) {
        return this.http.post(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].USER_DATATABLE), data)
            .map(function (response) { return response.data; })
            .catch(function (reason) { return reason.error.data; });
    };
    UserService.prototype.getUser = function (id) {
        return this.http.get(''.concat(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiUrl, __WEBPACK_IMPORTED_MODULE_2__shared_endpoints__["a" /* endpoints */].USER, '?where={"id":"', id, '"}&populate=[bank]'))
            .map(function (response) { return response.data[0]; });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__["b" /* AsyncLocalStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_async_local_storage__["b" /* AsyncLocalStorage */]) === "function" && _b || Object])
], UserService);

var _a, _b;
//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = (function () {
    function AccordionDirective(router) {
        var _this = this;
        this.router = router;
        this.navlinks = [];
        setTimeout(function () { return _this.checkOpenLinks(); });
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.checkOpenLinks = function () {
        var _this = this;
        this.navlinks.forEach(function (link) {
            if (link.group) {
                var routeUrl = _this.router.url;
                var currentUrl = routeUrl.split('/');
                if (currentUrl.indexOf(link.group) > 0) {
                    link.open = true;
                    _this.closeOtherLinks(link);
                }
            }
        });
    };
    AccordionDirective.prototype.ngAfterContentChecked = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationEnd */]; }).subscribe(function (e) { return _this.checkOpenLinks(); });
    };
    return AccordionDirective;
}());
AccordionDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordion]',
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AccordionDirective);

var _a;
//# sourceMappingURL=accordion.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionlink.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    return AccordionAnchorDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AccordionAnchorDirective.prototype, "onClick", null);
AccordionAnchorDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionToggle]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]) === "function" && _a || Object])
], AccordionAnchorDirective);

var _a;
//# sourceMappingURL=accordionanchor.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordion.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    return AccordionLinkDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], AccordionLinkDirective.prototype, "group", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], AccordionLinkDirective.prototype, "open", null);
AccordionLinkDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appAccordionLink]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]) === "function" && _a || Object])
], AccordionLinkDirective);

var _a;
//# sourceMappingURL=accordionlink.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordionlink.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__("../../../../../src/app/shared/accordion/accordion.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/endpoints.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return endpoints; });
var endpoints = {
    SUPPLIER: 'supplier',
    USER: 'user',
    CATERER: 'caterer',
    INVOICE: 'invoice',
    FOOD: 'food',
    SCHOOL: 'school',
    FOOD_DATATABLE: 'food/datatable',
    CATERER_DATATABLE: 'caterer/datatable',
    INVOICE_DATATABLE: 'invoice/datatable',
    SUPPLIER_DATATABLE: 'supplier/datatable',
    USER_DATATABLE: 'user/datatable',
    USER_LOGIN: 'user/login',
    LGA: 'lga',
    BANK: 'bank',
    BVN_SEND: 'bvn/send',
    BVN_VALIDATE: 'bvn/validate',
    value: 40
};
//# sourceMappingURL=endpoints.js.map

/***/ }),

/***/ "../../../../../src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("../../../../screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    return ToggleFullscreenDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ToggleFullscreenDirective.prototype, "onClick", null);
ToggleFullscreenDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[appToggleFullscreen]'
    })
], ToggleFullscreenDirective);

//# sourceMappingURL=toggle-fullscreen.directive.js.map

/***/ }),

/***/ "../../../../../src/app/shared/menu-items/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        state: '/',
        name: 'HOME',
        type: 'link',
        icon: 'basic-accelerator'
    },
    {
        state: 'supplier',
        name: 'SUPPLIER',
        type: 'sub',
        icon: 'basic-paperplane',
        children: [
            {
                state: 'create',
                name: 'CREATE'
            },
            {
                state: 'list',
                name: 'LIST'
            }
        ]
    },
    {
        state: 'user',
        name: 'USER',
        type: 'sub',
        icon: 'basic-paperplane',
        children: [
            {
                state: 'create',
                name: 'CREATE'
            },
            {
                state: 'list',
                name: 'LIST'
            }
        ]
    },
    {
        state: 'fooditem',
        name: 'FOODITEM',
        type: 'sub',
        icon: 'basic-paperplane',
        children: [
            {
                state: 'create',
                name: 'CREATE'
            },
            {
                state: 'list',
                name: 'LIST'
            }
        ]
    },
    {
        state: 'caterer',
        name: 'CATERER',
        type: 'sub',
        icon: 'basic-paperplane',
        children: [
            {
                state: 'create',
                name: 'CREATE'
            },
            {
                state: 'list',
                name: 'LIST'
            }
        ]
    },
    {
        state: 'zone',
        name: 'ZONE',
        type: 'sub',
        icon: 'basic-paperplane',
        children: [
            {
                state: 'create',
                name: 'CREATE'
            },
            {
                state: 'match',
                name: 'MATCH'
            },
            {
                state: 'list',
                name: 'LIST'
            }
        ]
    },
];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    return MenuItems;
}());
MenuItems = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MenuItems);

//# sourceMappingURL=menu-items.js.map

/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__ = __webpack_require__("../../../../../src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__("../../../../../src/app/shared/accordion/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__ = __webpack_require__("../../../../../src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionLinkDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionDirective */], __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionLinkDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionDirective */], __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]],
        providers: [__WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__["a" /* MenuItems */]]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:1337/api/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[2]);
//# sourceMappingURL=main.bundle.js.map