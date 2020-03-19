(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\r\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\r\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\r\n\r\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/content-layout/content-layout.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/content-layout/content-layout.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\r\n\r\n<mat-sidenav-container class=\"example-container\">\r\n    <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\">\r\n        <app-nav></app-nav>\r\n    </mat-sidenav>\r\n\r\n    <mat-sidenav-content>\r\n        <app-breadcrumb></app-breadcrumb>\r\n        <router-outlet></router-outlet>\r\n\r\n    </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n\r\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center  position-bottom mx-0 my-0\">\r\n    <h1>Footer</h1>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/login-layout/login-layout.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/login-layout/login-layout.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\r\n<router-outlet></router-outlet>\r\n\r\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/nav/nav.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/nav/nav.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"list-group list-group-flush\">\r\n    <li class=\"list-group-item\"><a routerLink=\"/content/employees\">Employees</a></li>\r\n    <li class=\"list-group-item\"><a routerLink=\"/content/timesheets\">Timesheets</a></li>\r\n    <li class=\"list-group-item\"><a routerLink=\"/content/timesheets/approver/view/list\">Pending Timsheets</a></li>\r\n    <li class=\"list-group-item\"><a routerLink=\"/content/reports\">Reports</a></li>\r\n    <li class=\"list-group-item\"><a routerLink=\"/content/wp\">Work Packages</a></li>\r\n    <li class=\"list-group-item\">Porta ac consectetur ac</li>\r\n    <li class=\"list-group-item\">Vestibulum at eros</li>\r\n\r\n\r\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toolbar/toolbar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toolbar/toolbar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-primary\">\r\n    <div>\r\n        <span class=\"navbar-brand mb-0 h1\">\r\n            App\r\n        </span>\r\n        <span class=\"navbar-text\" *ngIf=\"currentUser\">\r\n            {{currentUser.credentialId}}\r\n        </span>\r\n    </div>\r\n    <div *ngIf=\"currentUser\">\r\n        <form class=\"form-inline\">\r\n            <i class=\"material-icons navbar-brand\" (click)=\"goToEmployeePage()\">\r\n                account_circle\r\n            </i>\r\n            <h4 class=\"navbar-brand  mb-0 h4\">\r\n                {{currentUser.firstName}} {{currentUser.lastName}}\r\n            </h4>\r\n            <button class=\"btn btn-outline-light\" type=\"button\" (click)=\"logout()\">Logout</button>\r\n        </form>\r\n    </div>\r\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-detail/list-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-detail/list-detail.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>id = {{cityid}}</h1>\r\n<!-- \r\n<h4>temp: {{weather.temp}}</h4>\r\n<H4>humidity: {{weather.humidity}}</H4> \r\n-->\r\n<div *ngIf=\"weather\">\r\n    <h4>city name: {{weather.name}}</h4>\r\n    <h4>description: {{weather.weather[0].description}}</h4>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-item/list-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-item/list-item.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-secondary\"\r\n    [routerLink]=\"['/cities/',city.id ]\">{{city.name}},{{city.country}}</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/cities/',id ]\">try get Vancouve weather</button>\r\n<button type=\"button\" class=\"btn btn-primary\" routerLink='/cities/detail'>detail</button> -->\r\n\r\n\r\n<!-- <div *ngFor=\"let item of citylist\">\r\n    <app-list-item [city]=\"item\"></app-list-item>\r\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>projects works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alertPromp/alertPromp.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alertPromp/alertPromp.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alertsToArray()\">\r\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">\r\n        <i class=\"material-icons \">report</i>\r\n        {{ alert.msg }}\r\n    </alert>\r\n</div>\r\n\r\n<!-- validation error modal-->\r\n<ng-template #validationError>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Validation Error</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        This is a modal.\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"true\" class=\"margine_5\">\r\n    <p-breadcrumb [model]=\"crumbs\" [home]=\"home\"></p-breadcrumb>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>message works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/timesheet/timesheet.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/timesheet/timesheet.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n    <div class=\"form-row\">\r\n\r\n        <div class=\"col-2\">\r\n            <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Version</span>\r\n                </div>\r\n                <input type=\"text\" id=\"weekNum\" class=\"form-control\" [value]=\"timesheet.versionNumber\"\r\n                    [readonly]=\"true\">\r\n            </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col-2\">\r\n            <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Week Number</span>\r\n                </div>\r\n                <input type=\"text\" id=\"weekNum\" class=\"form-control\" [value]=\"timesheet.weekNumber\" [readonly]=\"true\">\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"col-6\">\r\n            <div class=\"input-group mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Week Ending</span>\r\n                </div>\r\n                <input id=\"weekEnd\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\r\n                    [daysDisabled]=\"[6,2,4,3,1,0]\" [outsideClick]=\"true\"\r\n                    [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\r\n                    (bsValueChange)=\"onValueChange($event)\" value=\"{{ timesheet.weekEnding | date:'yyyy-MM-dd' }}\"\r\n                    [readonly]=\"(mode == 'read' || mode =='update')\"\r\n                    [isDisabled]=\"(mode == 'read' || mode =='update')\" />\r\n            </div>\r\n        </div>\r\n        <div class=\"col-2\" *ngIf=\"mode == 'create'|| mode =='update'\">\r\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"addRow($event)\">Add Row</button>\r\n        </div>\r\n    </div>\r\n</form>\r\n<div class=\"dropdown-divider \"></div>\r\n\r\n<!-- This is editable -->\r\n<div class=\"my-3\">\r\n    <p-table [value]=\"timesheet.timesheetRows\" (onEditComplete)=\"onEditComplete($event)\">\r\n        <ng-template pTemplate=\"header\">\r\n            <tr>\r\n                <th style=\"width:170px\">Project Name</th>\r\n                <th style=\"width:170px\">W.P. Name</th>\r\n                <th>Total</th>\r\n\r\n                <th *ngFor=\"let day of days\">{{day.header}}</th>\r\n                <th></th>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"body\" let-rowData>\r\n            <tr>\r\n                <!-- <td [attr.pEditableColumn]=\"mode == 'create'|| mode == 'update' ? '' : null\">\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n\r\n                            <p-dropdown [options]=\"projectDropdown\" [(ngModel)]=\"rowData.projectId\"\r\n                                [style]=\"{'width':'170px'}\">\r\n                            </p-dropdown>\r\n\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            \r\n                            {{rowData.projectName}}\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td> -->\r\n                <td>\r\n                    <p-dropdown [options]=\"populateProject()\" [(ngModel)]=\"rowData.projectId\"\r\n                        [style]=\"{'width':'170px'}\" *ngIf=\"(mode == 'create'|| mode == 'update')\">\r\n                    </p-dropdown>\r\n                    <span *ngIf=\"mode == 'read'\">{{rowData.projectId}}</span>\r\n                </td>\r\n                <!-- <td [attr.pEditableColumn]=\"mode == 'create'|| mode == 'update'? '' : null\">\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n\r\n                            <p-dropdown [options]=\"populateWP(rowData.projectId)\" [(ngModel)]=\"rowData.workPackageId\"\r\n                                [style]=\"{'width':'170px'}\">\r\n                            </p-dropdown>\r\n\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            {{rowData.pwName}}\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td> -->\r\n                <td>\r\n                    <p-dropdown [options]=\"populateWps(rowData.projectId)\" [(ngModel)]=\"rowData.workPackageId\"\r\n                        [style]=\"{'width':'170px'}\" *ngIf=\"(mode == 'create'|| mode == 'update')\">\r\n                    </p-dropdown>\r\n                    <span *ngIf=\"mode == 'read'\">{{rowData.workPackageId}}</span>\r\n                </td>\r\n                <td>\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"output\">\r\n                            <span>{{rowTotal(rowData) | number}}</span>\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td>\r\n\r\n                <td [pEditableColumn]=\"mode == 'create'|| mode == 'update'? '' : null\" *ngFor=\"let day of days\">\r\n                    <p-cellEditor>\r\n                        <ng-template pTemplate=\"input\">\r\n\r\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData[day.value]\">\r\n\r\n                        </ng-template>\r\n                        <ng-template pTemplate=\"output\">\r\n                            <span *ngIf=\"validate(rowData[day.value])\" class=\"error\">{{rowData[day.value]}}</span>\r\n                            <span *ngIf=\"!validate(rowData[day.value])\" class=\"pass\">{{rowData[day.value]}}</span>\r\n                        </ng-template>\r\n                    </p-cellEditor>\r\n                </td>\r\n\r\n                <td class=\"p-1\">\r\n                    <button *ngIf=\"mode == 'create'|| mode == 'update'\" type=\"button\" class=\"btn btn-link\"\r\n                        (click)=\"deleteRow(rowData)\">\r\n                        <i class=\"material-icons text-danger\">remove_circle_outline</i>\r\n                    </button>\r\n                </td>\r\n            </tr>\r\n        </ng-template>\r\n        <ng-template pTemplate=\"footer\">\r\n            <tr>\r\n                <td colspan=\"2\">\r\n                    <div class=\"form-row\">\r\n                        <div class=\"col\">\r\n                            <div class=\"input-group \">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Flex</span>\r\n                                </div>\r\n                                <input type=\"text\" id=\"weekNum\" class=\"form-control\" [value]=\"'question'\"\r\n                                    [readonly]=\"true\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col\">\r\n                            <div class=\"input-group \">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Overtime</span>\r\n                                </div>\r\n                                <input type=\"text\" id=\"weekNum\" class=\"form-control\" [value]=\"getOvertime()\"\r\n                                    [readonly]=\"true\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n                <!-- <td>Total</td> -->\r\n                <td>{{timesheetTotal()}}</td>\r\n\r\n                <td *ngFor=\"let day of days\">{{colTotal(day.value)}}</td>\r\n\r\n                <td></td>\r\n            </tr>\r\n        </ng-template>\r\n    </p-table>\r\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/layout/content-layout/content-layout.component */ "./src/app/core/layout/content-layout/content-layout.component.ts");
/* harmony import */ var _core_layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/layout/login-layout/login-layout.component */ "./src/app/core/layout/login-layout/login-layout.component.ts");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");






const routes = [
    {
        path: '',
        redirectTo: 'content/dashboard',
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: {
            breadcrumb: 'home'
        },
        pathMatch: 'full'
    },
    {
        path: 'content',
        data: {
            breadcrumb: 'content'
        },
        component: _core_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_3__["ContentLayoutComponent"],
        canActivate: [_core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        children: [
            {
                path: 'dashboard',
                data: {
                    breadcrumb: null
                },
                loadChildren: () => __webpack_require__.e(/*! import() | modules-dashboard-dashboard-module */ "modules-dashboard-dashboard-module").then(__webpack_require__.bind(null, /*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts")).then(m => m.DashboardModule)
            },
            {
                path: 'timesheets',
                data: { breadcrumb: 'timesheet list' },
                loadChildren: () => Promise.all(/*! import() | modules-timesheets-timesheets-module */[__webpack_require__.e("common"), __webpack_require__.e("modules-timesheets-timesheets-module")]).then(__webpack_require__.bind(null, /*! ./modules/timesheets/timesheets.module */ "./src/app/modules/timesheets/timesheets.module.ts")).then(m => m.TimesheetsModule)
            },
            {
                path: 'employees',
                data: { breadcrumb: 'employee list' },
                loadChildren: () => Promise.all(/*! import() | modules-employee-employee-module */[__webpack_require__.e("default~modules-employee-employee-module~modules-reports-reports-module~modules-wp-wp-module"), __webpack_require__.e("modules-employee-employee-module")]).then(__webpack_require__.bind(null, /*! ./modules/employee/employee.module */ "./src/app/modules/employee/employee.module.ts")).then(m => m.EmployeeModule)
            },
            {
                path: 'projects',
                data: { breadcrumb: 'some breadcrumb' },
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/projects/projects.module */ "./src/app/modules/projects/projects.module.ts"))
                    .then(p => p.ProjectsModule)
            },
            {
                path: 'reports',
                data: {
                    breadcrumb: null
                },
                loadChildren: () => Promise.all(/*! import() | modules-reports-reports-module */[__webpack_require__.e("default~modules-employee-employee-module~modules-reports-reports-module~modules-wp-wp-module"), __webpack_require__.e("common"), __webpack_require__.e("modules-reports-reports-module")]).then(__webpack_require__.bind(null, /*! ./modules/reports/reports.module */ "./src/app/modules/reports/reports.module.ts")).then(m => m.ReportsModule)
            },
            {
                path: 'wp',
                data: { breadcrumb: 'work package list' },
                loadChildren: () => Promise.all(/*! import() | modules-wp-wp-module */[__webpack_require__.e("default~modules-employee-employee-module~modules-reports-reports-module~modules-wp-wp-module"), __webpack_require__.e("modules-wp-wp-module")]).then(__webpack_require__.bind(null, /*! ./modules/wp/wp.module */ "./src/app/modules/wp/wp.module.ts")).then(m => m.WpModule)
            },
        ]
    },
    // {
    // path: '',
    // component: ContentLayoutComponent,
    // canActivate: [AuthGuard],
    // children: [
    //   {
    //     path: 'cities',
    //     loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
    //   },
    //   {
    //     path: 'employee',
    //     loadChildren: () => import('./modules/employee/employee.module').then(m => m.EmployeeModule)
    //   },
    // ]
    // },
    {
        path: 'auth',
        component: _core_layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_4__["LoginLayoutComponent"],
        loadChildren: () => __webpack_require__.e(/*! import() | modules-auth-auth-module */ "modules-auth-auth-module").then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then(m => m.AuthModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _core_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/service/authentication.service */ "./src/app/core/service/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/utils */ "./node_modules/ngx-bootstrap/utils/fesm2015/ngx-bootstrap-utils.js");





let AppComponent = class AppComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = 'ModuleDemo';
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
        Object(ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_4__["setTheme"])('bs3');
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _core_service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/layout/content-layout/content-layout.component */ "./src/app/core/layout/content-layout/content-layout.component.ts");
/* harmony import */ var _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/interceptor/jwt.interceptor */ "./src/app/core/interceptor/jwt.interceptor.ts");
/* harmony import */ var _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/interceptor/error.interceptor */ "./src/app/core/interceptor/error.interceptor.ts");
/* harmony import */ var _core_interceptor_fake_backend_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/interceptor/fake-backend.interceptor */ "./src/app/core/interceptor/fake-backend.interceptor.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/guard/auth.guard */ "./src/app/core/guard/auth.guard.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _modules_projects_projects_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/projects/projects.module */ "./src/app/modules/projects/projects.module.ts");























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _core_layout_content_layout_content_layout_component__WEBPACK_IMPORTED_MODULE_6__["ContentLayoutComponent"],
        ],
        imports: [
            // angular
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            // material
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            // 3rd party
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_18__["ButtonsModule"].forRoot(),
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_19__["BsDatepickerModule"].forRoot(),
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"],
            //app
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _modules_home_home_module__WEBPACK_IMPORTED_MODULE_16__["HomeModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_20__["ModalModule"].forRoot(),
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_21__["AlertModule"].forRoot(),
            _modules_projects_projects_module__WEBPACK_IMPORTED_MODULE_22__["ProjectsModule"]
        ],
        providers: [
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_jwt_interceptor__WEBPACK_IMPORTED_MODULE_7__["JwtInterceptor"], multi: true },
            { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _core_interceptor_error_interceptor__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
            _core_guard_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"],
            // provider used to create fake backend
            _core_interceptor_fake_backend_interceptor__WEBPACK_IMPORTED_MODULE_9__["fakeBackendProvider"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/login-layout/login-layout.component */ "./src/app/core/layout/login-layout/login-layout.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/toolbar/toolbar.component */ "./src/app/core/layout/toolbar/toolbar.component.ts");
/* harmony import */ var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/footer/footer.component */ "./src/app/core/layout/footer/footer.component.ts");
/* harmony import */ var _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/nav/nav.component */ "./src/app/core/layout/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var primeng_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/menu */ "./node_modules/primeng/fesm2015/primeng-menu.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");












let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_3__["LoginLayoutComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"],
            // app
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"],
            // material
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
            // primeng
            primeng_menu__WEBPACK_IMPORTED_MODULE_10__["MenuModule"],
        ],
        exports: [
            _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_3__["LoginLayoutComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
        ],
        providers: []
    })
], CoreModule);



/***/ }),

/***/ "./src/app/core/guard/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/core/guard/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/core/service/authentication.service.ts");




let AuthGuard = class AuthGuard {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    canActivate(route, state) {
        const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            // logged in so return true
            console.log(currentUser);
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/core/interceptor/error.interceptor.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/interceptor/error.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/core/service/authentication.service.ts");





let ErrorInterceptor = class ErrorInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => {
            // if (err.status === 401) {
            //     // auto logout if 401 response returned from api
            //     this.authenticationService.logout();
            //     // location.reload(true);
            // }
            // const error = err.error.message || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    }
};
ErrorInterceptor.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorInterceptor);



/***/ }),

/***/ "./src/app/core/interceptor/fake-backend.interceptor.ts":
/*!**************************************************************!*\
  !*** ./src/app/core/interceptor/fake-backend.interceptor.ts ***!
  \**************************************************************/
/*! exports provided: FakeBackendInterceptor, fakeBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendInterceptor", function() { return FakeBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fakeBackendProvider", function() { return fakeBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");






// fake users
// only for testing purpose. dont do this in production code.
const users = [
    {
        "credentialId": "A123",
        "password": "master",
        "token": "JWT_TOKEN1",
        "employeeId": 1,
        "jobTitle": "Master User",
        "firstName": "Master",
        "lastName": "Li",
        "isActive": true,
        "supervisorId": null,
        "timesheetApproverId": null,
    },
    {
        "credentialId": "A456",
        "password": "regular",
        "token": "JWT_TOKEN2",
        "employeeId": 2,
        "jobTitle": "Senior Software Developer",
        "firstName": "Regular",
        "lastName": "Li",
        "isActive": true,
        "supervisorId": "A123",
        "timesheetApproverId": "A789",
    },
    {
        "credentialId": "A789",
        "password": "lower",
        "token": "JWT_TOKEN3",
        "employeeId": 2,
        "jobTitle": "Junior Software Developer",
        "firstName": "Lower",
        "lastName": "Li",
        "isActive": true,
        "supervisorId": "A123",
        "timesheetApproverId": null,
    }
];
/**
 * This class intercept the https request, when user make a
 * login/logout request. We use client side hardcoded user
 * for front end dev testing.
 */
let FakeBackendInterceptor = class FakeBackendInterceptor {
    intercept(request, next) {
        const { url, method, headers, body } = request;
        // wrap in delayed observable to simulate server api call
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(handleRoute))
            // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
        function handleRoute() {
            if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fakeBackend)
                return next.handle(request);
            switch (src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].fakeBackend) {
                //comment out all cases and use default instead when testing with real backend
                // user login.
                case url.endsWith('/Credentials/Authenticate') && method === 'POST':
                    return authenticate();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
            }
        }
        // route functions
        function authenticate() {
            const { credentialId, password } = body;
            const user = users.find(x => x.credentialId === credentialId && x.password === password);
            if (!user)
                return error('Username or password is incorrect');
            return ok(user);
        }
        // helper functions
        function ok(body) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body }));
        }
        function error(message) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ error: { message } });
        }
        function unauthorized() {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])({ status: 401, error: { message: 'Unauthorised' } });
        }
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
};
FakeBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], FakeBackendInterceptor);

let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: FakeBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/core/interceptor/jwt.interceptor.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/interceptor/jwt.interceptor.ts ***!
  \*****************************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authentication.service */ "./src/app/core/service/authentication.service.ts");



let JwtInterceptor = class JwtInterceptor {
    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    intercept(request, next) {
        // if (environment.fakeBackend)
        return next.handle(request);
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        console.log(currentUser);
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }
        return next.handle(request);
    }
};
JwtInterceptor.ctorParameters = () => [
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
JwtInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], JwtInterceptor);



/***/ }),

/***/ "./src/app/core/layout/content-layout/content-layout.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/core/layout/content-layout/content-layout.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n  position: relative;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.example-events {\r\n  width: 300px;\r\n  height: 200px;\r\n  overflow: auto;\r\n  border: 1px solid #555;\r\n}\r\n\r\n.mat-sidenav-content{\r\nmin-height: 100vh;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvY29udGVudC1sYXlvdXQvY29udGVudC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dC9jb250ZW50LWxheW91dC9jb250ZW50LWxheW91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG59XHJcblxyXG4uZXhhbXBsZS1ldmVudHMge1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICM1NTU7XHJcbn1cclxuLm1hdC1zaWRlbmF2LWNvbnRlbnR7XHJcbm1pbi1oZWlnaHQ6IDEwMHZoO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/core/layout/content-layout/content-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/core/layout/content-layout/content-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: ContentLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentLayoutComponent", function() { return ContentLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContentLayoutComponent = class ContentLayoutComponent {
    constructor() {
        this.opened = true;
    }
    ngOnInit() {
    }
};
ContentLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-content-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./content-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/content-layout/content-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./content-layout.component.css */ "./src/app/core/layout/content-layout/content-layout.component.css")).default]
    })
], ContentLayoutComponent);



/***/ }),

/***/ "./src/app/core/layout/footer/footer.component.css":
/*!*********************************************************!*\
  !*** ./src/app/core/layout/footer/footer.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".position-bottom{\r\n    position: fixed;\r\n    bottom:0%;\r\n    width:100%;\r\n    background-color: black;\r\n    color:white\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCO0lBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24tYm90dG9te1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOjAlO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgY29sb3I6d2hpdGVcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/core/layout/footer/footer.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/layout/footer/footer.component.ts ***!
  \********************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/core/layout/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/core/layout/login-layout/login-layout.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/core/layout/login-layout/login-layout.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2xvZ2luLWxheW91dC9sb2dpbi1sYXlvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/layout/login-layout/login-layout.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/layout/login-layout/login-layout.component.ts ***!
  \********************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginLayoutComponent = class LoginLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-layout',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/login-layout/login-layout.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-layout.component.css */ "./src/app/core/layout/login-layout/login-layout.component.css")).default]
    })
], LoginLayoutComponent);



/***/ }),

/***/ "./src/app/core/layout/nav/nav.component.css":
/*!***************************************************!*\
  !*** ./src/app/core/layout/nav/nav.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/core/layout/nav/nav.component.ts":
/*!**************************************************!*\
  !*** ./src/app/core/layout/nav/nav.component.ts ***!
  \**************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/nav/nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/core/layout/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/core/layout/toolbar/toolbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/layout/toolbar/toolbar.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-align-right{\r\n    display: -webkit-box;\r\n    display: flex;\r\n    padding: 21px 0;\r\n    -webkit-box-pack: end;\r\n            justify-content: flex-end;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L3Rvb2xiYXIvdG9vbGJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1hbGlnbi1yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAyMXB4IDA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/core/layout/toolbar/toolbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/layout/toolbar/toolbar.component.ts ***!
  \**********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/authentication.service */ "./src/app/core/service/authentication.service.ts");




//import { EmployeeComponent } from 'src/app/modules/employee/employee.module'
let ToolbarComponent = class ToolbarComponent {
    constructor(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        console.log(this.currentUser);
    }
    goToEmployeePage() {
        console.log("inside gotoEmployeePage, local crendetial_Id is: " + JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["credentialId"]) +
            ", employeeId is: " + JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["employeeId"]));
        this.router.navigate(['/content/employees']);
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/auth/login']);
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // providers: [EmployeeComponent],
        selector: 'app-toolbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toolbar/toolbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toolbar.component.css */ "./src/app/core/layout/toolbar/toolbar.component.css")).default]
    })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/core/service/authentication.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/service/authentication.service.ts ***!
  \********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");






let AuthenticationService = class AuthenticationService {
    constructor(http) {
        this.http = http;
        //localStorage.removeItem('currentUser');
        console.log("current localstorage of current user is: " + localStorage.getItem('currentUser'));
        console.log("current token is: " + localStorage.getItem("currentUserToken"));
        //console.log("token is: " + JSON.parse(localStorage.getItem("currentUser"))["token"]);  //if this null, it fails
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    get currentUserValue() {
        return this.currentUserSubject.value;
    }
    login(credentialId, password) {
        //perry backend code
        let baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authUrl;
        return this.http.post(baseUrl + 'api/Credentials/Authenticate', { credentialId, password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('currentUser', JSON.stringify(user)); //must serialize json to string since it saves it as key-value pair)
            localStorage.setItem('currentUserToken', JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["token"]));
            localStorage.setItem('currentUserEmployeeId', JSON.stringify(JSON.parse(localStorage.getItem("currentUser"))["employeeId"]));
            this.currentUserSubject.next(user); //sets currentUserSubject to the new user  (next just sets the behaviourSubject to user)
            return user;
        }));
        // //Fake backend code
        // return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
        //   .pipe(map(user => {
        //     // store user details and jwt token in local storage to keep user logged in between page refreshes
        //     localStorage.setItem('currentUser', JSON.stringify(user));
        //     this.currentUserSubject.next(user);  //sets currentUserSubject to the new user  (next just sets the behaviourSubject to user)
        //     return user;
        //   }));
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentUserToken');
        this.currentUserSubject.next(null);
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AuthenticationService);



/***/ }),

/***/ "./src/app/core/service/city/city.service.ts":
/*!***************************************************!*\
  !*** ./src/app/core/service/city/city.service.ts ***!
  \***************************************************/
/*! exports provided: CityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CityService", function() { return CityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/core/service/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let CityService = class CityService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.appid = 'e3af58d9d5e58f975d0cbf176102d731';
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
    }
    getCities() {
        let url = `http://localhost:3000/citylist`;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(_ => this.alertUser('fetched city')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError(`get cities`)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.alertUser(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    alertUser(message) {
        this.messageService.add(`WeatherService: ${message}`);
    }
};
CityService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
CityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CityService);



/***/ }),

/***/ "./src/app/core/service/employee/employee.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/core/service/employee/employee.service.ts ***!
  \***********************************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message.service */ "./src/app/core/service/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







let EmployeeService = class EmployeeService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].apiUrl;
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
    }
    getLabourGrades() {
        let url = this.baseUrl + `api/LabourGrade`;
        return this.http.get(url).pipe();
    }
    getEmployee(id) {
        let url = this.baseUrl + `api/employees/${id}`;
        return this.http
            .get(url)
            .pipe();
    }
    getEmployees() {
        let url = this.baseUrl + `api/employees/allemployees`;
        return this.http
            .get(url)
            .pipe();
    }
    postEmployee(e) {
        let url = this.baseUrl + `api/employees`;
        let body = {
            "empUsername": e.empUsername,
            "empPassword": e.empPassword,
            "empCode": e.empCode,
            "labourGradeId": e.labourGrade.labourGradeId,
            "empFirstName": e.empFirstName,
            "empLastName": e.empLastName,
            "timesheetApproverId": e.timesheetApproverId,
            "supervisorId": e.supervisorId,
            "isProjectManager": e.isProjectManager,
            "isAdmin": e.isAdmin,
            "isHumanResources": e.isHumanResources,
            "isActivated": e.isActivated,
            "jobTitleId": e.jobTitleId
        };
        return this.http
            .post(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("postEmployee", e)));
    }
    // login(): Observable<User> {
    //   let url = this.baseUrl + "api/Credentials/Authenticate";
    //   let newCred = { "CredentialId": "A100001", "Password": "password" };
    //   return this.http.post<User>(url, newCred, this.httpOptions)
    //     .pipe()
    // }
    getEmployeeDetails() {
        var empId = localStorage.getItem("currentUserEmployeeId");
        console.log("inside getemployeedetails, employeeId is: " + empId);
        let baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].authUrl;
        console.log("request url is: " + baseUrl + 'api/Employees/' + empId);
        return this.http.get(baseUrl + 'api/Employees/' + empId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(l => console.log(l)));
        // .pipe(map(user => {
        //   console.log("employee details is: " + user);
        //   return user;
        //}));
    }
    checkUserNameOK(userName) {
        let url = this.baseUrl + `api/Credentials/CheckUsernameAvailability/${userName}`;
        return this.http.get(url, this.httpOptions).pipe();
    }
    checkUserEmployeeCodeOK(empCode) {
        let url = this.baseUrl + `api/Credentials/CheckEmployeeCodeAvailability/${empCode}`;
        return this.http.get(url, this.httpOptions).pipe();
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.alertUser(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
        };
    }
    alertUser(message) {
        // this.messageService.add(`WeatherService: ${message}`);
    }
};
EmployeeService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] }
];
EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], EmployeeService);



/***/ }),

/***/ "./src/app/core/service/message.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/service/message.service.ts ***!
  \*************************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageService = class MessageService {
    constructor() {
        this.messages = [];
    }
    add(message) {
        this.messages.push(message);
    }
    clear() {
        this.messages = [];
    }
};
MessageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MessageService);



/***/ }),

/***/ "./src/app/core/service/weather/weather.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/service/weather/weather.service.ts ***!
  \*********************************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/core/service/message.service.ts");
/* harmony import */ var src_app_shared_model_Weather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/model/Weather */ "./src/app/shared/model/Weather.ts");







let WeatherService = class WeatherService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.appid = 'e3af58d9d5e58f975d0cbf176102d731';
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
    }
    getWeatherByCityid(id) {
        let url = `https://api.openweathermap.org/data/2.5/weather?id=${id}&APPID=${this.appid}`;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(raw => new src_app_shared_model_Weather__WEBPACK_IMPORTED_MODULE_6__["CurrentWeather"](raw)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(_ => this.alertUser('fetched weather')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError(`getWeatherByCityid=${id}`)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.alertUser(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    }
    alertUser(message) {
        this.messageService.add(`WeatherService: ${message}`);
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WeatherService);



/***/ }),

/***/ "./src/app/modules/home/components/list-detail/list-detail.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/home/components/list-detail/list-detail.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2xpc3QtZGV0YWlsL2xpc3QtZGV0YWlsLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/home/components/list-detail/list-detail.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/home/components/list-detail/list-detail.component.ts ***!
  \******************************************************************************/
/*! exports provided: ListDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListDetailComponent", function() { return ListDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/weather/weather.service */ "./src/app/core/service/weather/weather.service.ts");




let ListDetailComponent = class ListDetailComponent {
    constructor(route, weatherService) {
        this.route = route;
        this.weatherService = weatherService;
    }
    ngOnInit() {
        this.cityid = -1;
        this.weather = null;
        // extract id from url
        this.routeSub = this.route.params.subscribe(params => {
            console.log(params); //log the entire params object
            console.log(params['id']); //log the value of id
            this.cityid = params['id'];
        });
        this.getWeather();
    }
    ngOnDestroy() {
        if (this.weatherSubscription) {
            this.weatherSubscription.unsubscribe();
        }
    }
    getWeather() {
        this.weatherSubscription = this.weatherService.getWeatherByCityid(this.cityid)
            // .subscribe(result => { this.weather = result; console.log(this.weather) });
            .subscribe(w => {
            this.weather = w;
            console.log("result w:");
            console.log(this.weather);
        });
    }
};
ListDetailComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_core_service_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }
];
ListDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-detail/list-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-detail.component.css */ "./src/app/modules/home/components/list-detail/list-detail.component.css")).default]
    })
], ListDetailComponent);



/***/ }),

/***/ "./src/app/modules/home/components/list-item/list-item.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/home/components/list-item/list-item.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9jb21wb25lbnRzL2xpc3QtaXRlbS9saXN0LWl0ZW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/home/components/list-item/list-item.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/home/components/list-item/list-item.component.ts ***!
  \**************************************************************************/
/*! exports provided: ListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItemComponent", function() { return ListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ListItemComponent = class ListItemComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ListItemComponent.prototype, "city", void 0);
ListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./list-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-item/list-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./list-item.component.css */ "./src/app/modules/home/components/list-item/list-item.component.css")).default]
    })
], ListItemComponent);



/***/ }),

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
// {
//   path: '',
//   redirectTo: 'index',
//   pathMatch: 'full'
// },
// {
//   path: 'index',
//   component: HomeComponent
// },
// {
//   path: ':id',
//   component: ListDetailComponent
// },
// {
//   path: 'detail',
//   component: ListDetailComponent
// }
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _pages_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home.component */ "./src/app/modules/home/pages/home.component.ts");
/* harmony import */ var _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/list-item/list-item.component */ "./src/app/modules/home/components/list-item/list-item.component.ts");
/* harmony import */ var _components_list_detail_list_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/list-detail/list-detail.component */ "./src/app/modules/home/components/list-detail/list-detail.component.ts");







let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _components_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_5__["ListItemComponent"], _components_list_detail_list_detail_component__WEBPACK_IMPORTED_MODULE_6__["ListDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"]
        ]
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/pages/home.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/pages/home.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ob21lLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/home/pages/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/home/pages/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_city_city_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/city/city.service */ "./src/app/core/service/city/city.service.ts");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");




let HomeComponent = class HomeComponent {
    //inject service into constructor?
    constructor(cityService, employeeService) {
        this.cityService = cityService;
        this.employeeService = employeeService;
        this.loading = false;
        this.id = 6173331;
    }
    ngOnInit() {
        console.log("inside home.component.ts init");
        this.loading = true;
        this.citylist = [];
        this.availableUsername;
        // this.cityService.getCities().subscribe(l => {
        //   this.citylist = l;
        //   console.log(l);
        // });
        // this.userService.getAll().pipe(first()).subscribe(users => {
        //   this.loading = false;
        //   this.users = users;
        // });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_core_service_city_city_service__WEBPACK_IMPORTED_MODULE_2__["CityService"] },
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/pages/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/modules/projects/projects-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/projects/projects-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: ProjectsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutingModule", function() { return ProjectsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");




const routes = [
    { path: '', component: _projects_component__WEBPACK_IMPORTED_MODULE_3__["ProjectsComponent"] }
];
let ProjectsRoutingModule = class ProjectsRoutingModule {
};
ProjectsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ProjectsRoutingModule);



/***/ }),

/***/ "./src/app/modules/projects/projects.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectsComponent = class ProjectsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-projects',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/projects.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./projects.component.css */ "./src/app/modules/projects/projects.component.css")).default]
    })
], ProjectsComponent);



/***/ }),

/***/ "./src/app/modules/projects/projects.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/projects/projects.module.ts ***!
  \*****************************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projects-routing.module */ "./src/app/modules/projects/projects-routing.module.ts");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.component */ "./src/app/modules/projects/projects.component.ts");





let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_4__["ProjectsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"]
        ]
    })
], ProjectsModule);



/***/ }),

/***/ "./src/app/shared/alertPromp/alertPromp.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/alertPromp/alertPromp.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hbGVydFByb21wL2FsZXJ0UHJvbXAuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/shared/alertPromp/alertPromp.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/alertPromp/alertPromp.component.ts ***!
  \***********************************************************/
/*! exports provided: alertPrompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertPrompComponent", function() { return alertPrompComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let alertPrompComponent = class alertPrompComponent {
    constructor() { }
    ngOnInit() {
    }
    alertsToArray() {
        return Object.values(this.alerts);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], alertPrompComponent.prototype, "alerts", void 0);
alertPrompComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shared-alertPromp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./alertPromp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alertPromp/alertPromp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./alertPromp.component.css */ "./src/app/shared/alertPromp/alertPromp.component.css")).default]
    })
], alertPrompComponent);



/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.css":
/*!************************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".margine_5{\r\n    margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbmVfNXtcclxuICAgIG1hcmdpbjogNXB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/shared/breadcrumb/breadcrumb.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/breadcrumb/breadcrumb.component.ts ***!
  \***********************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.breadcrumbs = [];
        this.crumbs = [];
    }
    ngOnInit() {
        this.home = { icon: 'pi pi-home' };
        const ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //subscribe to the NavigationEnd event
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe(event => {
            //set breadcrumbs
            this.crumbs.splice(0, this.crumbs.length);
            let root = this.activatedRoute.root;
            this.breadcrumbs = this.getBreadcrumbs(root);
        });
    }
    getBreadcrumbs(route, url = "", breadcrumbs = []) {
        const ROUTE_DATA_BREADCRUMB = "breadcrumb";
        //get the child routes
        let children = route.children;
        //return if there are no more children
        if (children.length === 0) {
            return breadcrumbs;
        }
        //iterate over each children
        for (let child of children) {
            //verify primary route
            if (child.outlet !== _angular_router__WEBPACK_IMPORTED_MODULE_2__["PRIMARY_OUTLET"]) {
                continue;
            }
            //verify the custom data property "breadcrumb" is specified on the route
            if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
                return this.getBreadcrumbs(child, url, breadcrumbs);
            }
            //get the route's URL segment
            let routeURL = child.snapshot.url.map(segment => segment.path).join("/");
            //append route URL to URL
            url += `/${routeURL}`;
            //add breadcrumb
            let breadcrumb = {
                label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
                params: child.snapshot.params,
                url: url
            };
            if (breadcrumb.label != null) {
                breadcrumbs.push(breadcrumb);
                this.crumbs.push({ label: breadcrumb.label, url: breadcrumb.url });
            }
            //recursive
            return this.getBreadcrumbs(child, url, breadcrumbs);
        }
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breadcrumb.component.css */ "./src/app/shared/breadcrumb/breadcrumb.component.css")).default]
    })
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/shared/components/message/message.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/message/message.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/components/message/message.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/message/message.component.ts ***!
  \****************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MessageComponent = class MessageComponent {
    constructor() { }
    ngOnInit() {
    }
};
MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./message.component.css */ "./src/app/shared/components/message/message.component.css")).default]
    })
], MessageComponent);



/***/ }),

/***/ "./src/app/shared/components/timesheet/timesheet.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/timesheet/timesheet.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pass{\r\n\r\n}\r\n.error{\r\n    /* display: block; */\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    color:red;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N7XHJcblxyXG59XHJcbi5lcnJvcntcclxuICAgIC8qIGRpc3BsYXk6IGJsb2NrOyAqL1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/shared/components/timesheet/timesheet.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/timesheet/timesheet.component.ts ***!
  \********************************************************************/
/*! exports provided: TimesheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetComponent", function() { return TimesheetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _model_TimesheetRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../model/TimesheetRow */ "./src/app/shared/model/TimesheetRow.ts");



let TimesheetComponent = class TimesheetComponent {
    constructor() {
        this.apiReady = false;
        this.validationError = false;
        this.dataReady = false;
    }
    ngOnInit() {
        this.dataReady = true;
        this.days = [
            { header: 'Sat', value: 'saturday' },
            { header: 'Sun', value: 'sunday' },
            { header: 'Mon', value: 'monday' },
            { header: 'Tue', value: 'tuesday' },
            { header: 'Wed', value: 'wednesday' },
            { header: 'Thu', value: 'thursday' },
            { header: 'Fri', value: 'friday' }
        ];
    }
    /** Validate hrs entered */
    validate(hr) {
        if (hr < 0 || hr >= 24) {
            this.validationError = true;
            return true;
        }
        if (hr % 0.25 != 0) {
            this.validationError = true;
            return true;
        }
        return false;
    }
    rowTotal(d) {
        let sum = 0;
        this.days.forEach(day => sum += +d[day.value]);
        return sum;
    }
    /** summing the week hours
     * @param colNumeber: week number (starting sat = 0)
     */
    colTotal(day) {
        let sum = 0;
        this.timesheet.timesheetRows.forEach(e => sum += +e[day]);
        return sum;
    }
    timesheetTotal() {
        let sum = 0;
        this.timesheet.timesheetRows.forEach(e => {
            this.days.forEach(day => sum += +e[day.value]);
        });
        return sum;
    }
    /** exist edit field */
    onEditComplete(event) {
    }
    onEditInit(event) {
        console.log(event);
        event.column.editable = false;
    }
    addRow(event) {
        // TODO: replace the pushed item as empty item
        this.timesheet.timesheetRows.push(new _model_TimesheetRow__WEBPACK_IMPORTED_MODULE_2__["TimesheetRow"](this.timesheet.timesheetId, this.timesheet.versionNumber, 1, 1));
    }
    deleteRow(p) {
        console.log(p);
        var temp = this.timesheet.timesheetRows;
        this.timesheet.timesheetRows = temp.filter(r => {
            if (r.workPackageId != p.workPackageId && r.projectId != p.projectId)
                return r;
        });
    }
    populateProject() {
        let projects = [{ 'label': '---', 'value': 0 }];
        if (!this.projectWp)
            return projects;
        this.projectWp.forEach(i => {
            var item = { 'label': i.projectName, 'value': i.projectId };
            if (projects.filter(p => { return p.value == item.value; }).length === 0)
                projects.push(item);
        });
        return projects;
    }
    populateWps(projectId) {
        let wps = [{ 'label': '---', 'value': 0, 'projectId': 0 }];
        if (!this.projectWp)
            return wps;
        if (projectId == null || projectId == 0)
            return wps;
        this.projectWp.forEach(i => {
            var item = { 'label': i.wpCode, 'value': i.wpId, 'projectId': i.projectId };
            if (item.projectId == projectId)
                wps.push(item);
        });
        return wps;
    }
    getWeek(date) {
        const today = new Date();
        const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
        const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
        return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
    }
    dateFormater(d) {
        var yyyy = d.getFullYear();
        var MM = d.getMonth() + 1;
        var dd = d.getDate();
        return `${yyyy}-${MM}-${dd}`;
    }
    /**
    *
    * @param s with format "2020-10-11"
    */
    stringToDate(s) {
        var date = new Date(s);
        console.log(date);
        return date;
    }
    onValueChange(value) {
        console.log(value);
        this.timesheet.weekEnding = this.dateFormater(value);
        this.timesheet.weekNumber = this.getWeek(value);
    }
    getOvertime() {
        var total = this.timesheetTotal();
        if (total - 40 > 0)
            return total - 40;
        return 0;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimesheetComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimesheetComponent.prototype, "timesheet", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TimesheetComponent.prototype, "projectWp", void 0);
TimesheetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'shared-timesheet',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./timesheet.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/timesheet/timesheet.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./timesheet.component.css */ "./src/app/shared/components/timesheet/timesheet.component.css")).default]
    })
], TimesheetComponent);



/***/ }),

/***/ "./src/app/shared/model/TimesheetRow.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/model/TimesheetRow.ts ***!
  \**********************************************/
/*! exports provided: TimesheetRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimesheetRow", function() { return TimesheetRow; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

/** this class is for Timesheet component model */
class TimesheetRow {
    constructor(tsId, version, projectId, wpId) {
        this.monday = 0;
        this.tuesday = 0;
        this.wednesday = 0;
        this.thursday = 0;
        this.friday = 0;
        this.saturday = 0;
        this.sunday = 0;
        this.projectId = projectId;
        this.timesheetVersionNumber = version;
        this.workPackageId = wpId;
        this.timesheetId = tsId;
    }
}


/***/ }),

/***/ "./src/app/shared/model/Weather.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model/Weather.ts ***!
  \*****************************************/
/*! exports provided: CurrentWeather */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentWeather", function() { return CurrentWeather; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class CurrentWeather {
    constructor(data) {
        this.id = data.id;
        this.weather = data.weather;
        this.name = data.name;
    }
}


/***/ }),

/***/ "./src/app/shared/pipe/map-to-array.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/pipe/map-to-array.pipe.ts ***!
  \**************************************************/
/*! exports provided: MapToArrayPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapToArrayPipe", function() { return MapToArrayPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let MapToArrayPipe = class MapToArrayPipe {
    transform(value, args) {
        let arr = [];
        for (let key in value) {
            arr.push({ key: key, value: value[key] });
        }
        return arr;
    }
};
MapToArrayPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'mapToArray'
    })
], MapToArrayPipe);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/message/message.component */ "./src/app/shared/components/message/message.component.ts");
/* harmony import */ var _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.component */ "./src/app/shared/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _components_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/timesheet/timesheet.component */ "./src/app/shared/components/timesheet/timesheet.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/breadcrumb */ "./node_modules/primeng/fesm2015/primeng-breadcrumb.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var _alertPromp_alertPromp_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./alertPromp/alertPromp.component */ "./src/app/shared/alertPromp/alertPromp.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _pipe_map_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pipe/map-to-array.pipe */ "./src/app/shared/pipe/map-to-array.pipe.ts");














let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
            _components_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["TimesheetComponent"],
            _alertPromp_alertPromp_component__WEBPACK_IMPORTED_MODULE_11__["alertPrompComponent"],
            _pipe_map_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["MapToArrayPipe"],
        ],
        imports: [
            // angular
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            // primeng
            primeng_table__WEBPACK_IMPORTED_MODULE_6__["TableModule"],
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropdownModule"],
            primeng_breadcrumb__WEBPACK_IMPORTED_MODULE_9__["BreadcrumbModule"],
            // bootstrap
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_10__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_12__["AlertModule"].forRoot(),
        ],
        exports: [
            _components_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"],
            _components_timesheet_timesheet_component__WEBPACK_IMPORTED_MODULE_5__["TimesheetComponent"],
            _breadcrumb_breadcrumb_component__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbComponent"],
            _alertPromp_alertPromp_component__WEBPACK_IMPORTED_MODULE_11__["alertPrompComponent"],
            _pipe_map_to_array_pipe__WEBPACK_IMPORTED_MODULE_13__["MapToArrayPipe"],
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    // NOTE: Front end devs enable these lines below
    apiUrl: 'http://localhost:4000/',
    authUrl: 'http://localhost:4000/',
    fakeBackend: true,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gregm\OneDrive\Documents\CST\Level 4\COMP 4911 - Enterprise Service\MasterFrontend\COMP4910FrontEnd\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map