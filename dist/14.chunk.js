webpackJsonp([14],{

/***/ "../../../../../src/app/email/email.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-sidebar-container class=\"mh-100\">\n  <ng-sidebar\n    [(opened)]=\"isOpened\"\n    [mode]=\"isOver() ? 'over' : 'push'\"\n    [position]=\"'left'\"\n    [dockedSize]=\"'50px'\"\n    [autoCollapseWidth]=\"'991'\"\n    [closeOnClickOutside]=\"isOver() ? true : false\"\n    [showBackdrop]=\"isOver() ? true : false\"\n    [sidebarClass]=\"'email-panel'\">\n    <div class=\"scroll-y\">\n      <div (click)=\"onSelect(message)\" *ngFor=\"let message of messages; let i = index\" [class.selected]=\"message === selectedMessage\" class=\"list-group-item list-group-item-action border-left-0 border-right-0 flex-column align-items-start\">\n        <a class=\"d-flex b-b w-100\" href=\"javascript:;\">\n          <div class=\"mr-auto\">\n            <div *ngIf=\"message.type\" class=\"avatar-status bg-{{message.type}}\">\n              <img alt=\"\" class=\"avatar-sm rounded-circle\" src=\"{{message.avatar}}\"/>\n            </div>\n            <img *ngIf=\"!message.type\" alt=\"\" class=\"avatar-sm rounded-circle\" src=\"{{message.avatar}}\"/>\n          </div>\n          <div class=\"pl-3\">\n            <div class=\"d-flex w-100 justify-content-between align-items-center\">\n              <small class=\"bold ff-headers\">\n                {{message.from}}\n              </small>\n              <small class=\"bold text-muted time\">\n                {{ message.date | date: 'MMMM d, y' }}\n              </small>\n            </div>\n            <p class=\"mb-0\">\n              {{message.subject}}\n            </p>\n          </div>\n        </a>\n      </div>\n    </div>\n  </ng-sidebar>\n  <div ng-sidebar-content>\n    <nav class=\"navbar custom-navbar\">\n      <div class=\"nav navbar-nav\">\n        <a (click)=\"toogleSidebar()\" class=\"nav-link hidden-lg-up\" href=\"javascript:;\">\n          <i class=\"hamburger-icon\">\n            <span></span>\n          </i>\n        </a>\n        <a class=\"nav-item nav-link active\" href=\"javascript:;\">\n          Reply\n        </a>\n        <a class=\"nav-item nav-link\" href=\"javascript:;\">\n          Forward\n        </a>\n        <a class=\"nav-item nav-link\" href=\"javascript:;\">\n          Flag\n        </a>\n        <a class=\"nav-item nav-link disabled\" href=\"javascript:;\">\n          Delete\n        </a>\n      </div>\n    </nav>\n    <div class=\"pl-5 pr-5 pt-3 pb-3\">\n      <div *ngIf=\"selectedMessage\">\n        <div class=\"d-flex align-items-center mb-3\">\n          <div class=\"mr-auto\">\n            <img alt=\"\" class=\"avatar-lg rounded-circle\" src=\"{{selectedMessage.avatar}}\"/>\n          </div>\n          <div class=\"pl-3\">\n            <div class=\"date\">\n              {{selectedMessage.date | date: 'fullDate'}}\n            </div>\n            <h4 class=\"lead mt-0\">\n              {{selectedMessage.subject}}\n            </h4>\n            <p>\n              <b>\n                {{selectedMessage.from}}\n              </b>\n              to Jeff &amp; Suzzane\n            </p>\n          </div>\n        </div>\n        <div [innerHtml]=\"selectedMessage.body\">\n        </div>\n      </div>\n      <div class=\"pt-3 pb-3\">\n        <div class=\"toolbar\" id=\"toolbar-toolbar\">\n          <span class=\"ql-formats\">\n            <select class=\"ql-font\">\n              <option selected=\"\"></option>\n              <option value=\"serif\"></option>\n              <option value=\"monospace\"></option>\n            </select>\n            <select class=\"ql-size\">\n              <option value=\"small\"></option>\n              <option selected=\"\"></option>\n              <option value=\"large\"></option>\n              <option value=\"huge\"></option>\n            </select>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-bold\"></button>\n            <button class=\"ql-italic\"></button>\n            <button class=\"ql-underline\"></button>\n            <button class=\"ql-strike\"></button>\n          </span>\n          <span class=\"ql-formats\">\n            <select class=\"ql-color\"></select>\n            <select class=\"ql-background\"></select>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-list\" value=\"ordered\"></button>\n            <button class=\"ql-list\" value=\"bullet\"></button>\n            <select class=\"ql-align\">\n              <option selected=\"\"></option>\n              <option value=\"center\"></option>\n              <option value=\"right\"></option>\n              <option value=\"justify\"></option>\n            </select>\n          </span>\n          <span class=\"ql-formats\">\n            <button class=\"ql-link\"></button>\n            <button class=\"ql-image\"></button>\n          </span>\n        </div>\n        <div id=\"editor-container\">\n         </div>\n      </div>\n    </div>\n  </div>\n</ng-sidebar-container>\n"

/***/ }),

/***/ "../../../../../src/app/email/email.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* $colors\n ------------------------------------------*/\n:host /deep/ {\n  height: calc(100vh - 3.5rem); }\n  :host /deep/ ng-sidebar-container {\n    height: calc(100vh - 3.5rem); }\n  :host /deep/ .email-panel.ng-sidebar {\n    width: 300px;\n    border-right: 1px solid rgba(0, 0, 0, 0.1); }\n  :host /deep/ .list-group-item.selected {\n    background-color: #fcf8e3;\n    border-color: #faf2cc; }\n    :host /deep/ .list-group-item.selected + .list-group-item {\n      border-color: #faf2cc; }\n    :host /deep/ .list-group-item.selected:hover, :host /deep/ .list-group-item.selected:focus, :host /deep/ .list-group-item.selected:active {\n      background-color: #fcf8e3; }\n  :host /deep/ .list-group-item a .time {\n    font-size: 10px; }\n\n:host {\n  padding: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/email/email.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("../../../../../src/app/email/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill__ = __webpack_require__("../../../../quill/dist/quill.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_quill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_quill__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailComponent = (function () {
    function EmailComponent(mailService) {
        this.mailService = mailService;
        this.messageOpen = false;
        this.isOpened = true;
        this._autoCollapseWidth = 991;
    }
    EmailComponent.prototype.ngOnInit = function () {
        if (this.isOver()) {
            this.isOpened = false;
        }
        this.getMessages();
    };
    EmailComponent.prototype.ngAfterContentInit = function () {
        var quill = new __WEBPACK_IMPORTED_MODULE_2_quill__('#editor-container', {
            modules: {
                toolbar: {
                    container: '#toolbar-toolbar'
                }
            },
            placeholder: 'Compose an epic...',
            theme: 'snow'
        });
    };
    EmailComponent.prototype.toogleSidebar = function () {
        this.isOpened = !this.isOpened;
    };
    EmailComponent.prototype.isOver = function () {
        return window.matchMedia("(max-width: 991px)").matches;
    };
    EmailComponent.prototype.getMessages = function () {
        var _this = this;
        this.mailService.getMessages().then(function (messages) {
            _this.messages = messages;
            _this.selectedMessage = _this.messages[1];
        });
    };
    EmailComponent.prototype.onSelect = function (message) {
        this.selectedMessage = message;
        if (this.isOver()) {
            this.isOpened = false;
        }
    };
    return EmailComponent;
}());
EmailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-email',
        template: __webpack_require__("../../../../../src/app/email/email.component.html"),
        styles: [__webpack_require__("../../../../../src/app/email/email.component.scss")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* MailService */]) === "function" && _a || Object])
], EmailComponent);

var _a;
//# sourceMappingURL=email.component.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__email_routing__ = __webpack_require__("../../../../../src/app/email/email.routing.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailModule", function() { return EmailModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var EmailModule = (function () {
    function EmailModule() {
    }
    return EmailModule;
}());
EmailModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__email_routing__["a" /* EmailRoutes */]), __WEBPACK_IMPORTED_MODULE_3_ng_sidebar__["SidebarModule"]],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__email_component__["a" /* EmailComponent */]]
    })
], EmailModule);

//# sourceMappingURL=email.module.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__email_component__ = __webpack_require__("../../../../../src/app/email/email.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailRoutes; });

var EmailRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__email_component__["a" /* EmailComponent */],
        data: {
            heading: 'Email',
            removeFooter: true
        }
    }];
//# sourceMappingURL=email.routing.js.map

/***/ }),

/***/ "../../../../../src/app/email/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mock_messages__ = __webpack_require__("../../../../../src/app/email/mock-messages.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MailService = (function () {
    function MailService() {
    }
    MailService.prototype.getMessages = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__mock_messages__["a" /* MESSAGES */]);
    };
    return MailService;
}());
MailService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], MailService);

//# sourceMappingURL=email.service.js.map

/***/ }),

/***/ "../../../../../src/app/email/mock-messages.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MESSAGES; });
/* tslint:disable:max-line-length */
var MESSAGES = [{
        from: 'Social',
        date: 1427207139000,
        subject: 'Check out this weeks most popular website designs in the Milkyway!',
        avatar: 'assets/images/face4.jpg',
        icon: 'group',
        iconClass: 'mat-text-primary',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'danger',
        important: true,
        id: 1
    }, {
        from: 'Promotions',
        date: 1427412725000,
        subject: 'eBook: The complete guide to creating Angularjs single page applications is here.',
        avatar: 'assets/images/face2.jpg',
        icon: 'local_offer',
        iconClass: 'mat-text-warn',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'success',
        important: false,
        id: 2
    }, {
        from: 'Updates',
        date: 1427546580000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face3.jpg',
        icon: 'info',
        iconClass: 'mat-text-accent',
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Clients',
        type: 'info',
        important: false,
        id: 3
    }, {
        from: 'Melissa Welch',
        date: 1427891640000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face1.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Family',
        type: 'warning',
        important: true,
        id: 4
    }, {
        from: 'Vincent Peterson',
        date: 1428275520000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face2.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Friends',
        type: 'info',
        important: false,
        id: 5
    }, {
        from: 'Pamela Wood',
        date: 1428830580000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face3.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'success',
        important: false,
        id: 6
    }, {
        from: 'Tammy Carpenter',
        date: 1429363920000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face4.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Personal',
        type: 'none',
        important: false,
        id: 7
    }, {
        from: 'Emma Sullican',
        date: 1430274720000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face5.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Clients',
        type: 'none',
        important: false,
        id: 8
    }, {
        from: 'Andrea Brewer',
        date: 1431293520000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face2.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Family',
        type: 'success',
        important: false,
        id: 9
    }, {
        from: 'Sean Carpenter',
        date: 1433115240000,
        subject: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        avatar: 'assets/images/face1.jpg',
        icon: false,
        iconClass: false,
        body: '<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>\n\n        <p>Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>\n\n        <blockquote>\n            <i>Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.</i>\n        </blockquote>\n\n        <p>Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>\n\n        <p>You don’t need to see his identification … These aren’t the droids you’re looking for … He can go about his business … Move along.</p>',
        tag: 'Friends',
        type: 'info',
        important: true,
        id: 10
    }];
//# sourceMappingURL=mock-messages.js.map

/***/ })

});
//# sourceMappingURL=14.chunk.js.map