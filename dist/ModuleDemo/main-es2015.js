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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * The content below * * * * * * * * * * * -->\n<!-- * * * * * * * * * * is only a placeholder * * * * * * * * * * -->\n<!-- * * * * * * * * * * and can be replaced. * * * * * * * * * * * -->\n<!-- * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * -->\n<!-- * * * * * * * * * Delete the template below * * * * * * * * * * -->\n<!-- * * * * * * * to get started with your project! * * * * * * * * -->\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/content-layout/content-layout.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/content-layout/content-layout.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toast-display></app-toast-display>\n<app-toolbar></app-toolbar>\n<!-- \n<mat-sidenav-container class=\"example-container\">\n    <mat-sidenav #sidenav mode=\"side\" [(opened)]=\"opened\" class=\"bg-navList\">\n        <app-nav class=\"m-2\"></app-nav>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <app-breadcrumb class=\"margin-fix\"></app-breadcrumb>\n        <router-outlet class=\"margin-fix my-3\"></router-outlet>\n    </mat-sidenav-content>\n</mat-sidenav-container> \n-->\n\n<mat-drawer-container class=\"example-container\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav bg-navList\" mode=\"side\" opened=\"true\" (mouseenter)=\"mouseEnter('div a') \"\n        (mouseleave)=\"mouseLeave('div A')\">\n        <app-nav class=\"m-2\" [showFiller]=\"showFiller\"></app-nav>\n        <!-- <button (click)=\"showFiller = !showFiller\" mat-raised-button>\n            T\n        </button> -->\n    </mat-drawer>\n\n    <div class=\"example-sidenav-content\">\n        <app-breadcrumb class=\"margin-fix\"></app-breadcrumb>\n        <router-outlet class=\"margin-fix my-3\"></router-outlet>\n    </div>\n\n</mat-drawer-container>\n\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/footer/footer.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center  position-bottom mx-0 my-0\">\n    <h1>Footer</h1>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/login-layout/login-layout.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/login-layout/login-layout.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-toolbar></app-toolbar>\n<router-outlet></router-outlet>\n\n<!-- <app-footer></app-footer> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/nav/nav.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/nav/nav.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"list-group list-group-flush\">\n    <!-- [@slideInOut]=\"showFiller\" -->\n    <!-- <li class=\"list-group-item bg-navList\">\n        <button class=\"button d-flex align-items-center\" (click)=\"showFiller = !showFiller\" mat-raised-button>\n            <span class=\"material-icons noHMargin\" *ngIf=\"!showFiller\">keyboard_arrow_right</span>\n            <span class=\"material-icons noHMargin\" *ngIf=\"showFiller\" []>keyboard_arrow_left</span>\n            <span class=\"navText\" *ngIf=\"showFiller\" []>Hide Menu</span>\n        </button>\n    </li> -->\n    <li class=\"list-group-item bg-navList\">\n        <a routerLink=\"/content/projects\" class=\"d-flex align-items-center\">\n            <span class=\"material-icons\">description</span>\n            <span class=\"navText\" *ngIf=\"showFiller\">Projects</span>\n        </a></li>\n    <li class=\"list-group-item bg-navList\">\n        <a routerLink=\"/content/timesheets\" class=\"d-flex align-items-center\">\n            <span class=\"material-icons\">av_timer</span>\n            <span class=\"navText\" *ngIf=\"showFiller\">Timesheets</span>\n        </a></li>\n    <li class=\"list-group-item bg-navList \">\n        <a routerLink=\"/content/employees\" class=\"d-flex align-items-center\">\n            <span class=\"material-icons\">group</span>\n            <span class=\"navText\" *ngIf=\"showFiller\">Employees</span>\n        </a></li>\n    <li class=\"list-group-item bg-navList\">\n        <a routerLink=\"/content/employees/supervisor/changeTimesheetApprover\" class=\"d-flex align-items-center\">\n            <span class=\"material-icons\">how_to_reg</span>\n            <span class=\"navText\" *ngIf=\"showFiller\">Timesheet Approver</span>\n        </a></li>\n    <li class=\"list-group-item bg-navList\">\n        <a routerLink=\"/content/projects/supervisor/projectlist\" class=\"d-flex align-items-center\">\n            <span class=\"material-icons\">person_add</span>\n            <span class=\"navText\" *ngIf=\"showFiller\">Project Members</span>\n        </a></li>\n    <li class=\"list-group-item bg-navList\">\n        <a routerLink=\"/content/timesheets/approver/view/list\" class=\"d-flex align-items-center\">\n            <span class=\"material-icons\">library_add_check</span>\n            <span class=\"navText\" *ngIf=\"showFiller\">Pending Timsheets</span>\n        </a></li>\n    <li class=\"list-group-item bg-navList\">\n        <a routerLink=\"/content/employees/changePassword\" class=\"d-flex align-items-center\">\n            <span class=\"material-icons\">vpn_key</span>\n            <span class=\"navText\" *ngIf=\"showFiller\">Change Password</span>\n        </a></li>\n    <!-- <li class=\"list-group-item bg-navList\"><a routerLink=\"/content/reports\">Reports</a></li> -->\n    <!-- <li class=\"list-group-item bg-navList\"><a routerLink=\"/content/wp\">Work Packages</a></li> -->\n\n</ul>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toast-display/toast-display.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toast-display/toast-display.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-toast [style]=\"{marginTop: '80px'}\" styleClass=\"custom-toast\" position=\"bottom-center\"></p-toast>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toolbar/toolbar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toolbar/toolbar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-dark bg-theme\">\n    <div>\n        <span class=\"navbar-brand mb-0 h1 title\">\n            Gerg's Beans\n        </span>\n        <span class=\"navbar-text\" *ngIf=\"currentUser\">\n            {{currentUser.credentialId}}\n        </span>\n        <span class=\"navbar-text\">\n            version v1.0.4\n        </span>\n\n    </div>\n    <div *ngIf=\"currentUser\">\n        <form class=\"form-inline\">\n            <i class=\"material-icons navbar-brand\" (click)=\"goToEmployeePage()\">\n                account_circle\n            </i>\n            <h4 class=\"navbar-brand  mb-0 h4\">\n                {{currentUser.firstName}} {{currentUser.lastName}}\n            </h4>\n            <button class=\"btn btn-outline-light\" type=\"button\" (click)=\"logout()\">Logout</button>\n        </form>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-detail/list-detail.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-detail/list-detail.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>id = {{cityid}}</h1>\n<!-- \n<h4>temp: {{weather.temp}}</h4>\n<H4>humidity: {{weather.humidity}}</H4> \n-->\n<div *ngIf=\"weather\">\n    <h4>city name: {{weather.name}}</h4>\n    <h4>description: {{weather.weather[0].description}}</h4>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-item/list-item.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/components/list-item/list-item.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button type=\"button\" class=\"btn btn-secondary\"\n    [routerLink]=\"['/cities/',city.id ]\">{{city.name}},{{city.country}}</button>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/home.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/cities/',id ]\">try get Vancouve weather</button>\n<button type=\"button\" class=\"btn btn-primary\" routerLink='/cities/detail'>detail</button> -->\n\n\n<!-- <div *ngFor=\"let item of citylist\">\n    <app-list-item [city]=\"item\"></app-list-item>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/components/project/project.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/components/project/project.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h5 class=\"lead\">Project Information</h5>\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- project name -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Name</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"project.projectName\" (blur)=\"onFieldExit()\"\n                [readOnly]=\"mode ==='read' || mode==='update'\">\n        </div>\n        <span *ngIf=\"alerts.projectName\" class=\"error my-2\"><small>{{alerts.projectName.msg}}</small></span>\n    </div>\n\n    <div class=\"col-1\"></div>\n\n    <div class=\"col-5\">\n        <!-- project code -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Code</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"project.projectCode\"\n                [readOnly]=\"mode ==='read' || mode==='update'\" (blur)=\"onExitProjectCode()\">\n        </div>\n        <span *ngIf=\"alerts.projectCode\" class=\"error my-2\"><small>{{alerts.projectCode.msg}}</small></span>\n\n\n    </div>\n\n\n    <div class=\"col-1\">\n        <div *ngIf=\"(mode ==='create')\">\n            <i *ngIf=\"validProjectCode\" class=\"material-icons pass my-2\">check_circle</i>\n            <i *ngIf=\"!validProjectCode\" class=\"material-icons error  my-2\">error</i>\n        </div>\n    </div>\n</div>\n\n<div class=\"  my-3\"></div>\n<div class=\"form-row my-3\">\n    <div class=\"col-5\">\n\n        <!-- start date -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\">Start Date</span>\n            </div>\n            <input id=\"startDate\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                [daysDisabled]=\"[]\" [outsideClick]=\"true\"\n                [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\n                (bsValueChange)=\"onStartDateChange($event)\" value=\"{{ project.startDate | date:'yyyy-MM-dd' }}\"\n                [readonly]=\"(mode == 'read' || mode =='update')\" [isDisabled]=\"(mode == 'read' || mode =='update')\" />\n        </div>\n        <span *ngIf=\"alerts.startDate\" class=\"error my-2\"><small>{{alerts.startDate.msg}}</small></span>\n\n\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n        <!-- end date -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\" id=\"basic-addon1\">End Date</span>\n            </div>\n            <input id=\"endDate\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                [daysDisabled]=\"[]\" [outsideClick]=\"true\"\n                [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\n                (bsValueChange)=\"onEndDateChange($event)\" value=\"{{ project.endDate | date:'yyyy-MM-dd' }}\"\n                [readonly]=\"(mode == 'read') || isSupervisorView\" [isDisabled]=\"(mode == 'read')\" />\n        </div>\n        <span *ngIf=\"alerts.endDate\" class=\"error my-2\"><small>{{alerts.endDate.msg}}</small></span>\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n\n<div class=\"my-3\"></div>\n\n<div class=\"form-row\" *ngIf=\"!isSupervisorView\">\n    <div class=\"col-5\">\n        <!-- budget -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Budget</span>\n            </div>\n            <input type=\"number\" class=\"form-control\" [(ngModel)]=\"project.budget\" [readOnly]=\"mode ==='read'\">\n        </div>\n    </div>\n    <div class=\"col-1\"></div>\n\n    <!-- status -->\n    <div class=\"col-5\">\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Status</span>\n            </div>\n            <!-- <input type=\"number\" class=\"form-control\" [(ngModel)]=\"project.budget\" [readOnly]=\"mode ==='read'\"> -->\n            <div class=\"btn-group btn-group-toggle form-control\" data-toggle=\"buttons\">\n                <label\n                    [className]=\"project.isClosed ? 'btn btn-outline-secondary btn-sm' : 'btn btn-outline-secondary active btn-sm'\">\n                    <input type=\"radio\" name=\"isClosed\" id=\"open\" [value]=false [(ngModel)]=\"project.isClosed\"\n                        [disabled]=\"mode==='create' || mode==='read'\">\n                    Open\n                </label>\n                <label\n                    [className]=\"project.isClosed ? 'btn btn-outline-secondary active btn-sm' : 'btn btn-outline-secondary btn-sm' \">\n                    <input type=\"radio\" name=\"isClosed\" id=\"closed\" [value]=true [(ngModel)]=\"project.isClosed\"\n                        [disabled]=\"mode==='create' || mode==='read'\">\n                    Closed\n                </label>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\" my-3\"></div>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- project manager -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Manager</span>\n            </div>\n            <input type=\"text\" class=\"form-control\"\n                [(value)]=\"project.projectManager.empFirstName+' '+project.projectManager.empLastName\"\n                [readOnly]=\"true\">\n        </div>\n        <span *ngIf=\"alerts.projectManager\" class=\"error my-2\"><small>{{alerts.projectManager.msg}}</small></span>\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-11\">\n        <!-- team members -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Team Members</span>\n            </div>\n            <!-- <input type=\"text\" class=\"form-control \" *ngIf=\"mode==='read'\" [readOnly]=\"true\"> -->\n            <div class=\"d-flex flex-wrap form-control \">\n                <div *ngFor=\"let x of project.employees;let i = index;\">\n                    <h4>\n                        <span class=\"badge badge-pill badge-secondary mr-2 my-2\">\n                            {{x.empFirstName +' ' +x.empLastName}}\n                        </span>\n                    </h4>\n                </div>\n                <p-multiSelect *ngIf=\"mode ==='create' || mode==='update'\" [options]=\"employeeDropdown\"\n                    [(ngModel)]=\"project.employees\" [panelStyle]=\"{minWidth:'12em'}\" maxSelectedLabels=\"0\">\n                </p-multiSelect>\n            </div>\n        </div>\n    </div>\n</div>\n\n<div class=\" my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-11\">\n        <!-- description -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Description</span>\n            </div>\n            <textarea class=\"form-control\" aria-label=\"With textarea\" [(ngModel)]=\"project.description\"\n                [readOnly]=\"mode =='read' || isSupervisorView\"></textarea>\n        </div>\n        <div class=\"col-1\"></div>\n    </div>\n\n    <div class=\"  my-3\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/empty/empty.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/empty/empty.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-creation/project-creation.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-creation/project-creation.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Create Project</h3>\n        <!-- alert -->\n        <!-- <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp> -->\n\n        <app-project [mode]=\"mode\" [project]=\"newProject\" [alerts]=\"alerts\" (changeProjectCode)=\"validateProjectCode()\"\n            [validProjectCode]=\"validProjectCode\" (vlidatePage)=\"validatePage()\">\n        </app-project>\n\n        <!-- Action section-->\n        <div class=\"dropdown-divider my-3\"></div>\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onCreate($event)\">Create</button>\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n        <div class=\"dropdown-divider my-3\"></div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-edit/project-edit.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-edit/project-edit.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Edit Project</h3>\n        <!-- alert -->\n        <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\n\n        <app-project *ngIf=\"project\" [mode]=\"mode\" [project]=\"project\" [alerts]=\"alerts\"\n            (changeProjectCode)=\"validateProjectCode()\" [validProjectCode]=\"validProjectCode\"\n            (vlidatePage)=\"validatePage()\">\n        </app-project>\n\n        <!-- Action section-->\n        <div class=\"dropdown-divider my-3\"></div>\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onUpdate()\">Update</button>\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h3 class=\"display-4\">Assign Employee to Project</h3>\n        <div class=\"dropdown-divider \"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n        </div>\n        <h3 class=\"lead\">The table below lists all your project and you can assign members to work on them.</h3>\n        <p-table #dt [columns]=\"cols\" [value]=\"displayProject\" [paginator]=\"true\" [rows]=\"10\"\n            [style]=\"{'text-align':'center'}\">\n            <ng-template pTemplate=\"caption\">\n                <div style=\"text-align: center\">\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                </div>\n            </ng-template>\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngSwitch]=\"col.field\">\n                        {{col.header}}\n                        <p-sortIcon *ngIf=\"col.header\" [field]=\"col.field\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                        <!-- <input *ngSwitchCase=\"'projectId'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\"> -->\n                        <input *ngSwitchCase=\"'projectName'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                        <input *ngSwitchCase=\"'projectManager'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                        <input *ngSwitchCase=\"'startDate'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                        <input *ngSwitchCase=\"'endDate'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                <tr [pSelectableRow]=\"rowData\">\n                    <!-- <td>{{rowData.projectId}}</td> -->\n                    <td>{{rowData.projectName}}</td>\n                    <td>{{rowData.projectManager}}</td>\n                    <td>{{rowData.startDate | date}}</td>\n                    <td>{{rowData.endDate|date}}</td>\n                    <td>\n                        <h5>\n                            <span class=\"badge badge-success\" *ngIf=\"rowData.isClosed\">Open</span>\n                            <span class=\"badge badge-danger\" *ngIf=\"!rowData.isClosed\">Closed</span>\n                        </h5>\n                    </td>\n                    <td>\n                        <div>\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\n                                [routerLink]=\"['view', rowData.projectId]\">Manage Members</button>\n                        </div>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-list/project-list.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-list/project-list.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <button type=\"button\" class=\"btn btn-primary my-2\" routerLink=\"creation\">Create</button>\n<button type=\"button\" class=\"btn btn-primary my-2\" [routerLink]=\"['edit', 111]\">edit</button>\n<button type=\"button\" class=\"btn btn-primary my-2\" [routerLink]=\"['view', 111]\">view</button> -->\n\n<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h3 class=\"display-4\">Project List</h3>\n        <div class=\"dropdown-divider \"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary my-2\" routerLink=\"creation\">Create</button>\n        </div>\n\n        <p-table #dt [columns]=\"cols\" [value]=\"displayProject\" [paginator]=\"true\" [rows]=\"10\"\n            [style]=\"{'text-align':'center'}\">\n            <ng-template pTemplate=\"caption\">\n                <div style=\"text-align: right\">\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                </div>\n            </ng-template>\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngSwitch]=\"col.field\">\n                        {{col.header}}\n                        <p-sortIcon *ngIf=\"col.header\" [field]=\"col.field\"></p-sortIcon>\n                    </th>\n                </tr>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                        <!-- <input *ngSwitchCase=\"'projectId'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\"> -->\n                        <input *ngSwitchCase=\"'projectName'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                        <input *ngSwitchCase=\"'projectManager'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                        <input *ngSwitchCase=\"'startDate'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                        <input *ngSwitchCase=\"'endDate'\" pInputText type=\"text\" class=\"ui-column-filter\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\"\n                            style=\"margin-left:-6px;width: 100%;\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                <tr [pSelectableRow]=\"rowData\">\n                    <!-- <td>{{rowData.projectId}}</td> -->\n                    <td>{{rowData.projectName}}</td>\n                    <td>{{rowData.projectManager}}</td>\n                    <td>{{rowData.startDate | date}}</td>\n                    <td>{{rowData.endDate|date}}</td>\n                    <td>\n                        <h5>\n                            <span class=\"badge badge-success\" *ngIf=\"rowData.isClosed\">Open</span>\n                            <span class=\"badge badge-danger\" *ngIf=\"!rowData.isClosed\">Closed</span>\n                        </h5>\n                    </td>\n                    <td>\n                        <div>\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\n                                [routerLink]=\"['view', rowData.projectId]\">View</button>\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\n                                [routerLink]=\"['edit', rowData.projectId]\">Edit</button>\n                        </div>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-management/project-management.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-management/project-management.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h6 class=\"\">Project</h6>\n        <h1 *ngIf=\"project\">{{project.projectName}}</h1>\n    </div>\n</div> -->\n\n<p-tabView [activeIndex]=\"activeIndex\" (onChange)=\"onChangeTab($event)\" *ngIf=\"project\">\n    <!-- Tab -->\n    <p-tabPanel header=\"...\">\n        <div class=\"my-3\"></div>\n    </p-tabPanel>\n\n    <!-- Tab -->\n    <p-tabPanel header=\"Project\" leftIcon=\"pi pi-briefcase\">\n        <h5 class=\"mt-4\">Project Cost Performance Reports:</h5>\n        <h1 *ngIf=\"project\" class=\"display-4\">{{project.projectName}}</h1>\n        <div class=\"dropdown-divider mb-3\"></div>\n        <app-project-view class=\"\"></app-project-view>\n    </p-tabPanel>\n\n    <!-- Tab -->\n    <p-tabPanel header=\"Project Cost Performance Reports\" leftIcon=\"pi pi-chart-bar\">\n        <h5 class=\"mt-4\">{{project.projectName}}</h5>\n        <h1 *ngIf=\"project\" class=\"display-4\">Cost Performance Reports</h1>\n        <div class=\"dropdown-divider mb-3\"></div>\n        <app-project-report-list [projectId]=\"project.projectId\" class=\"\"></app-project-report-list>\n    </p-tabPanel>\n\n    <!-- Tab -->\n    <p-tabPanel header=\"Work Packages\" leftIcon=\"pi pi-sitemap\">\n        <h5 class=\"mt-4\">{{project.projectName}}</h5>\n        <h1 *ngIf=\"project\" class=\"display-4\">Work Packages</h1>\n        <div class=\"dropdown-divider mb-3\"></div>\n        <app-wp-list [projectId]=\"project.projectId\" *ngIf=\"project\" class=\"\"></app-wp-list>\n    </p-tabPanel>\n    <!-- Work Package Report -->\n\n</p-tabView>\n<div class=\"my-3\"></div>\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Manage Project Members</h3>\n        <!-- alert -->\n        <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\n\n        <app-project *ngIf=\"project\" [mode]=\"mode\" [project]=\"project\" [alerts]=\"alerts\"\n            (changeProjectCode)=\"validateProjectCode()\" [validProjectCode]=\"validProjectCode\"\n            (vlidatePage)=\"validatePage()\" [isSupervisorView]=\"true\">\n        </app-project>\n\n        <!-- Action section-->\n        <div class=\"dropdown-divider my-3\"></div>\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onUpdate()\">Update</button>\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-view/project-view.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-view/project-view.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Project Details -->\n<!-- <div class=\"card mx-1\">\n    <div class=\"card-body\"> -->\n<!-- Title -->\n<app-project [project]=\"project\" [mode]=\"mode\" [alerts]=\"alerts\" *ngIf=\"project\"></app-project>\n\n<!-- Action section-->\n<div class=\"dropdown-divider my-3\"></div>\n\n\n<!-- </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.html":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.html ***!
  \**********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-table [columns]=\"cols\" [value]=\"cars1\">\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                {{col.header}}\n                <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\n                    ariaLabelDesc=\"Activate to sort in descending order\"\n                    ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr>\n            <td *ngFor=\"let col of columns\">\n                {{rowData[col.field]}}\n            </td>\n        </tr>\n    </ng-template>\n</p-table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-vertical-stepper [linear]=\"false\" #stepper (selectionChange)=\"onStepChange($event)\">\n    <mat-step [stepControl]=\"firstFormGroup\">\n        <form [formGroup]=\"firstFormGroup\">\n            <ng-template matStepLabel>Select Report Range</ng-template>\n            <form [formGroup]=\"firstFormGroup\">\n                <ng-template matStepLabel>Select Report Range</ng-template>\n                <div class=\"input-group w-50 my-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Start Date</span>\n                    </div>\n                    <input id=\"startDate\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                        formControlName=\"startDate\" [daysDisabled]=\"[6,5,4,3,2,0]\" [outsideClick]=\"true\"\n                        [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\" />\n                </div>\n                <div *ngIf=\"!f.startDate.valid && (f.startDate.dirty || f.startDate.touched)\">\n                    <span *ngIf=\"f.startDate.errors.required\" class=\"text-danger\">\n                        Start Date is required.\n                    </span>\n                </div>\n\n                <div class=\"input-group w-50 my-3\">\n                    <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">End Date</span>\n                    </div>\n                    <input id=\"endDate\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                        formControlName=\"endDate\" [daysDisabled]=\"[6,4,3,2,1,0]\" [outsideClick]=\"true\"\n                        [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\" />\n                </div>\n                <div *ngIf=\"!f.startDate.valid && (f.startDate.dirty || f.startDate.touched)\">\n                    <span *ngIf=\"f.startDate.errors.required\" class=\"text-danger\">\n                        Start Date is required.\n                    </span>\n                </div>\n                <div *ngIf=\"firstFormGroup.errors?.dateRangeValidator && (firstFormGroup.touched || firstFormGroup.dirty)\"\n                    class=\"cross-validation-error-message alert alert-danger\">\n                    Start date must before end date.\n                </div>\n                <div>\n                    <button type=\"button\" class=\"btn btn-outline-dark btn-sm mr-3\" matStepperNext>Next</button>\n                </div>\n            </form>\n        </form>\n    </mat-step>\n\n    <mat-step>\n        <form>\n            <ng-template matStepLabel>Detail Entry</ng-template>\n            <form>\n                <ng-template matStepLabel>Detail Entry</ng-template>\n\n                <!-- table -->\n                <div class=\"my-3\" *ngIf=\"wpr\">\n                    <p-table [value]=\"wpr.details\" (onEditComplete)=\"onEditComplete($event)\"\n                        (onEditCancel)=\"onEditComplete($event)\">\n                        <ng-template pTemplate=\"header\">\n                            <tr>\n                                <th>Labour Grade</th>\n                                <th>RE Budget (Day)</th>\n                                <th>Actual To Date (Day)</th>\n                                <th>RE ETC (Day)</th>\n                                <th>RE EAC (Day)</th>\n                                <th>Variance (%)</th>\n                                <th>Complete (%)</th>\n\n                            </tr>\n                        </ng-template>\n                        <ng-template pTemplate=\"body\" let-rowData>\n                            <tr>\n                                <td><strong>{{rowData.labourGradeName}}</strong></td>\n                                <td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'reBudgetDay'\">\n                                    <p-cellEditor>\n                                        <ng-template pTemplate=\"input\">\n                                            <!-- <input matInput formControlName=\"secondCtrl\" placeholder=\"Eff\" required> -->\n\n                                            <input pInputText type=\"number\" [(ngModel)]=\"rowData.reBudgetDay\"\n                                                name=\"reBudgetDay\" [disabled]=\"true\">\n                                        </ng-template>\n                                        <ng-template pTemplate=\"output\">\n                                            <span>{{rowData.reBudgetDay| number}}</span>\n                                        </ng-template>\n                                    </p-cellEditor>\n                                </td>\n                                <td>{{rowData.totalDays}}</td>\n                                <td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'reETC'\">\n                                    <p-cellEditor>\n                                        <ng-template pTemplate=\"input\">\n                                            <input pInputText type=\"number\" [(ngModel)]=\"rowData.reETC\" name=\"reETC\">\n                                        </ng-template>\n                                        <ng-template pTemplate=\"output\">\n                                            <span>{{rowData.reETC| number}}</span>\n                                        </ng-template>\n                                    </p-cellEditor>\n                                </td>\n                                <td class=\"{{rowData.reEAC>rowData.reBudgetDay?'text-danger':'text-success'}}\">\n                                    {{rowData.reEAC| number}}\n                                </td>\n                                <td class=\"{{rowData.variance>0?'text-danger':'text-success'}}\">\n                                    {{rowData.variance| number: '1.0-2'}} %\n                                </td>\n                                <td class=\"{{rowData.complete>=0?'text-success':'text-danger'}}\">\n                                    {{rowData.complete| number: '1.0-2'}} %\n                                </td>\n                            </tr>\n                        </ng-template>\n                    </p-table>\n\n                    <div class=\"d-flex flex-wrap my-2\">\n                        <div class=\"input-group my-3 mr-2\" style=\"max-width: 36rem;\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Work Accomplished This Period</span>\n                            </div>\n                            <textarea class=\"form-control \" aria-label=\"With textarea\"\n                                [(ngModel)]=\"wpr.workAccomplished\" name=\"workAccomplished\"></textarea>\n                        </div>\n                        <div class=\"input-group my-3 mr-2\" style=\"max-width: 36rem;\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Work Planned Next Period</span>\n                            </div>\n                            <textarea class=\"form-control \" aria-label=\"With textarea\" [(ngModel)]=\"wpr.workPlanned\"\n                                name=\"workPlanned\"></textarea>\n                        </div>\n                        <div class=\"input-group my-3 mr-2\" style=\"max-width: 36rem;\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Problems This Period</span>\n                            </div>\n                            <textarea class=\"form-control \" aria-label=\"With textarea\"\n                                [(ngModel)]=\"wpr.problemsThisPeriod\" name=\"problemsThisPeriod\"></textarea>\n                        </div>\n                        <div class=\"input-group my-3 mr-2\" style=\"max-width: 36rem;\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Problems Anticipated</span>\n                            </div>\n                            <textarea class=\"form-control \" aria-label=\"With textarea\"\n                                [(ngModel)]=\"wpr.problemsAnticipated\" name=\"problemsAnticipated\"></textarea>\n                        </div>\n                        <div class=\"input-group my-3 mr-2\" style=\"max-width: 36rem;\">\n                            <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\">Comment</span>\n                            </div>\n                            <textarea class=\"form-control \" aria-label=\"With textarea\" [(ngModel)]=\"wpr.comment\"\n                                name=\"comment\"></textarea>\n                        </div>\n                    </div>\n\n                </div>\n                <div>\n                    <button type=\"button\" class=\"btn btn-outline-dark btn-sm mr-3\" matStepperPrevious>Back</button>\n                    <button type=\"button\" class=\"btn btn-outline-dark btn-sm mr-3\" matStepperNext>Next</button>\n                </div>\n            </form>\n        </form>\n    </mat-step>\n\n    <!-- <mat-step>\n        <form>\n            <ng-template matStepLabel>Review</ng-template>\n\n\n            <div>\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm mr-3\" matStepperPrevious>Back</button>\n                <button type=\"button\" class=\"btn btn-outline-dark btn-sm mr-3\" matStepperNext>Next</button>\n            </div>\n        </form>\n    </mat-step> -->\n    <mat-step>\n        <ng-template matStepLabel>Submit Report</ng-template>\n        <!-- <p>You are now done.</p> -->\n        <div>\n            <button type=\"button\" class=\"btn btn-outline-dark btn-sm mr-3\" matStepperPrevious>Back</button>\n            <button type=\"button\" class=\"btn btn-secondary btn-sm mr-3\" (click)=\"onCancel($event)\">Cancel</button>\n            <button type=\"button\" class=\"btn btn-primary btn-sm mr-3\" (click)=\"onSubmit($event)\">Submit</button>\n        </div>\n    </mat-step>\n</mat-vertical-stepper>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/wp-report/wp-report.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/wp-report/wp-report.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown-divider  my-3\"></div>\n\n<h5 class=\"my-3\">Work Package Information</h5>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- Project Name -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Name</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wpr.projectName\" [readOnly]=\"true\">\n        </div>\n\n    </div>\n    <div class=\"col-5\">\n        <!-- Project Code -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Code</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wpr.projectCode\" [readOnly]=\"true\">\n        </div>\n    </div>\n</div>\n<div class=\"  my-2\"></div>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- W.P. Name -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">W.P. Name</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wpr.workPackageName\" [readOnly]=\"true\">\n        </div>\n\n    </div>\n    <div class=\"col-5\">\n        <!-- W.P. Code -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">W.P. Code</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wpr.workPackageCode\" [readOnly]=\"true\">\n        </div>\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-2\"></div>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- PM Name -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Manager</span>\n            </div>\n            <input type=\"text\" class=\"form-control\"\n                value=\"{{wpr.projectManager.empFirstName + ' '+ wpr.projectManager.empLastName}}\" [readOnly]=\"true\">\n        </div>\n\n    </div>\n    <div class=\"col-5\">\n        <!-- RE Code -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Responsible Engineer</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [readOnly]=\"true\"\n                value=\"{{wpr.responsibleEngineer.empFirstName + ' '+ wpr.responsibleEngineer.empLastName}}\">\n        </div>\n    </div>\n</div>\n\n<div class=\"dropdown-divider  my-4\"></div>\n\n<h5 class=\"my-3\">Report Information</h5>\n<div class=\"  my-2\"></div>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- Report Id -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">W.P. Report ID</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wpr.workPackageReportId\" [readOnly]=\"true\">\n        </div>\n\n    </div>\n    <div class=\"col-5\">\n        <!-- Report Date -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Report Date</span>\n            </div>\n            <!-- (bsValueChange)=\"onValueChange($event)\" -->\n\n            <input id=\"reportDate\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                [daysDisabled]=\"[6,0]\" [outsideClick]=\"true\"\n                [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\n                value=\"{{ wpr.reportDate | date:'yyyy-MM-dd' }}\" [readonly]=\"true\" [isDisabled]=\"true\" />\n        </div>\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-2\"></div>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- Start Date -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Start Date</span>\n            </div>\n            <input id=\"startDate\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                [daysDisabled]=\"[6,5,4,3,2,0]\" [outsideClick]=\"true\"\n                [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\n                value=\"{{ wpr.startDate | date:'yyyy-MM-dd' }}\" [readonly]=\"mode == 'read'\"\n                [isDisabled]=\"mode == 'read'\" />\n        </div>\n\n    </div>\n    <div class=\"col-5\">\n        <!-- End Date -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">End Date</span>\n            </div>\n            <!-- (bsValueChange)=\"onValueChange($event)\" -->\n            <input id=\"endDate\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                [daysDisabled]=\"[6,4,3,2,1,0]\" [outsideClick]=\"true\"\n                [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\n                value=\"{{ wpr.endDate | date:'yyyy-MM-dd' }}\" [readonly]=\"mode == 'read'\"\n                [isDisabled]=\"mode == 'read'\" />\n        </div>\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-2\"></div>\n\n\n<div class=\"my-3\" *ngIf=\"wpr\">\n    <p-table [value]=\"wpr.details\" (onEditComplete)=\"onEditComplete($event)\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Labour Grade</th>\n                <th>RE Budget (Day)</th>\n                <th>Actual To Date (Day)</th>\n                <th>RE ETC (Day)</th>\n                <th>RE EAC (Day)</th>\n                <th>Variance (%)</th>\n                <th>Complete (%)</th>\n\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData>\n            <tr>\n                <td><strong>{{rowData.labourGradeName}}</strong></td>\n                <td>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.reBudgetDay\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            <span *ngIf=\"validate(rowData.reBudgetDay)\" class=\"error\">{{rowData.reBudgetDay}}</span>\n                            <span *ngIf=\"!validate(rowData.reBudgetDay)\" class=\"pass\">{{rowData.reBudgetDay}}</span>\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td>{{rowData.totalDays}}</td>\n                <td>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.reETC\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            <span *ngIf=\"validate(rowData.reETC)\"\n                                class=\"error\">{{rowData.reETC| number: '1.0-2'}}</span>\n                            <span *ngIf=\"!validate(rowData.reETC)\"\n                                class=\"pass\">{{rowData.reETC| number: '1.0-2'}}</span>\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td class=\"{{rowData.reEAC>rowData.reBudgetDay?'text-danger':'text-success'}}\">\n                    {{rowData.reEAC| number: '1.0-2'}}</td>\n                <td class=\"{{rowData.variance>0?'text-danger':'text-success'}}\">{{rowData.variance| number: '1.0-2'}}%\n                </td>\n                <td class=\"{{rowData.complete>=0?'text-success':'text-danger'}}\">{{rowData.complete| number: '1.0-2'}}%\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"dropdown-divider  my-4\"></div>\n\n\n<div class=\"d-flex flex-wrap\">\n    <div class=\"card bg-light mb-3 mr-3\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Comment</h5>\n            <p class=\"card-text\">{{wpr.comment}}</p>\n        </div>\n    </div>\n    <div class=\"card bg-light mb-3 mr-3\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Work Accomplished This Period</h5>\n            <p class=\"card-text\">{{wpr.workAccomplished}}</p>\n        </div>\n    </div>\n    <div class=\"card bg-light mb-3 mr-3\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Work Planned Next Period</h5>\n            <p class=\"card-text\">{{wpr.workPlanned}}</p>\n        </div>\n    </div>\n    <div class=\"card bg-light mb-3 mr-3\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Problems This Period</h5>\n            <p class=\"card-text\">{{wpr.problemsThisPeriod}}</p>\n        </div>\n    </div>\n    <div class=\"card bg-light mb-3 mr-3\" style=\"width: 18rem;\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">Problems Anticipated</h5>\n            <p class=\"card-text\">{{wpr.problemsAnticipated}}</p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/project-report-list/project-report-list.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/project-report-list/project-report-list.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card mx-1\">\n    <div class=\"card-body\"> -->\n\n\n<div>\n    <!-- <h3 class=\"display-4\">Project Cost Performance Report List</h3> -->\n\n    <p-table [columns]=\"cols\" [value]=\"displayReports\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\n                        ariaLabelDesc=\"Activate to sort in descending order\"\n                        ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                </th>\n                <th></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td>{{rowData.endDate | date:'MMMM'}}</td>\n                <td>{{rowData.reportDate | date:'MMM d, y, h:mm:ss a'}}</td>\n                <td>{{rowData.startDate | date}}</td>\n                <td>{{rowData.endDate | date}}</td>\n\n                <td>\n                    <button type=\"button\" class=\"btn btn-link btn-sm\"\n                        [routerLink]=\"['reports/ProjectCostPerformanceReport/view/', rowData.projectReportId]\">View</button>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n\n\n<!-- </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/project-report-view/project-report-view.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/project-report-view/project-report-view.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Project Cost Performance Report</h3>\n\n        <!-- BODY -->\n\n\n        <div *ngIf=\"projectReport\">\n            <div class=\"dropdown-divider  my-3\"></div>\n\n            <div class=\"form-row\">\n                <div class=\"col-5\">\n                    <!-- Project Code -->\n                    <div class=\"input-group \">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Project Code</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"projectReport.projectCode\"\n                            [readOnly]=\"true\">\n                    </div>\n                </div>\n                <div class=\"col-5\">\n                    <!-- Report ID -->\n                    <div class=\"input-group \">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Report Number</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"projectReport.projectReportId\"\n                            [readOnly]=\"true\">\n                    </div>\n                </div>\n\n\n            </div>\n            <div class=\"  my-2\"></div>\n            <div class=\"form-row\">\n                <div class=\"col-5\">\n                    <!-- Project Name -->\n                    <div class=\"input-group \">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Project Name</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"projectReport.projectName\"\n                            [readOnly]=\"true\">\n                    </div>\n\n                </div>\n                <div class=\"col-5\">\n                    <!-- reportDate  -->\n                    <div class=\"input-group \">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Report Date</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\" value=\"{{projectReport.reportDate| date:'medium'}}\"\n                            [readOnly]=\"true\">\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"  my-2\"></div>\n            <div class=\"form-row\">\n                <div class=\"col-5\">\n                    <!-- PM Name -->\n                    <div class=\"input-group \">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Project Manager</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\"\n                            value=\"{{projectReport.projectManager.empFirstName + ' '+ projectReport.projectManager.empLastName}}\"\n                            [readOnly]=\"true\">\n                    </div>\n\n                </div>\n                <div class=\"col-5\">\n                    <!-- duriation  -->\n                    <div class=\"input-group \">\n                        <div class=\"input-group-prepend\">\n                            <span class=\"input-group-text\">Report Date</span>\n                        </div>\n                        <input type=\"text\" class=\"form-control\"\n                            value=\"{{projectReport.startDate| date}}  To  {{projectReport.endDate| date}}\"\n                            [readOnly]=\"true\">\n                    </div>\n                </div>\n\n            </div>\n            <div class=\"  my-2\"></div>\n\n            <div class=\"btn-group\" btnRadioGroup [(ngModel)]=\"viewMode\">\n                <label class=\"btn btn-info\" btnRadio=\"pm\" uncheckable tabindex=\"0\" role=\"button\">PM Estimates</label>\n                <label class=\"btn btn-info\" btnRadio=\"re\" uncheckable tabindex=\"0\" role=\"button\">RE Estimates</label>\n            </div>\n\n            <p-table [columns]=\"viewMode=='pm'? pmViewCols:reViewCols\" [value]=\"viewMode=='pm'? pmData:reData\">\n                <ng-template pTemplate=\"header\" let-columns>\n                    <tr>\n                        <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                            {{col.header}}\n                            <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\n                                ariaLabelDesc=\"Activate to sort in descending order\"\n                                ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n                        </th>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                    <tr>\n                        <td *ngFor=\"let col of columns\">\n                            {{rowData[col.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n                <ng-template pTemplate=\"footer\" let-columns>\n                    <tr>\n                        <td *ngFor=\"let col of columns\">\n                            <span *ngIf=\"col.field === 'workPackageCode'\">Totals</span>\n                            <!-- <p *ngIf=\"col.field === 'wpReBudget'\">{{projectReport.totals[col.field]}}</p> -->\n                            <!-- <p *ngIf=\"col.field === 'wpReBudget'\">{{projectReport.totals[col.field]}}</p> -->\n                            {{projectReport.totals[col.field]}}\n                        </td>\n                    </tr>\n                </ng-template>\n            </p-table>\n        </div>\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/reports.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/reports.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-wp-report-creation></app-wp-report-creation> -->\n<app-project-report-list></app-project-report-list>\n<app-wp-report-list></app-wp-report-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <app-wp-report-stepper-creation (submitEvent)=\"submitReport()\" (cancelEvent)=\"cancelEvent()\" [wpr]=\"wpr\">\n        </app-wp-report-stepper-creation>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card mx-1\">\n    <div class=\"card-body\"> -->\n<div class=\"d-flex justify-content-between\">\n    <h3 class=\"display-4\">Work Package Report List</h3>\n    <div>\n        <button type=\"button\" class=\"btn btn-primary my-2\" (click)=\"onCreatClick($event)\">Create</button>\n    </div>\n</div>\n<div class=\"dropdown-divider  my-3\"></div>\n\n<p-table [columns]=\"cols\" [value]=\"displayReports\" [paginator]=\"true\" [rows]=\"10\">\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                {{col.header}}\n                <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\n                    ariaLabelDesc=\"Activate to sort in descending order\"\n                    ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\n            </th>\n            <th></th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr>\n            <td>{{rowData.endDate | date:'w'}}</td>\n            <td>{{rowData.reportDate | date:'MMM d, y, h:mm:ss a'}}</td>\n            <td>{{rowData.startDate | date}}</td>\n            <td>{{rowData.endDate | date}}</td>\n\n            <td>\n                <button type=\"button\" class=\"btn btn-link btn-sm\"\n                    (click)=\"onWpReportClick(rowData.workPackageReportId)\">View</button>\n                <!-- [routerLink]=\"['reports/WorkPackageReport/view/', rowData.workPackageReportId]\" -->\n            </td>\n        </tr>\n    </ng-template>\n</p-table>\n\n<!-- </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Work Package Report Detail</h3>\n        <!-- alert -->\n        <app-wp-report [wpr]=\"wpr\" *ngIf=\"wpr\" [mode]=\"mode\"></app-wp-report>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/component/wp.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/component/wp.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dropdown-divider  my-3\"></div>\n\n<h5 class=\"lead\">Work Package Information</h5>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- project name -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Name</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wp.projectName\" [readOnly]=\"true\">\n\n        </div>\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n        <!-- project Id -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Project Code</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wp.projectCode\" [readOnly]=\"true\">\n        </div>\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-5\">\n\n        <!-- wp title -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">W.P. Title</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wp.workPackageTitle\"\n                [readOnly]=\"mode ==='read' || mode=='update'\">\n        </div>\n        <span *ngIf=\"alerts.wpTitle\" class=\"error my-2\"><small>{{alerts.wpTitle.msg}}</small></span>\n\n    </div>\n    <div class=\"col-1\">\n    </div>\n    <div class=\"col-5\">\n        <!-- wp Code -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">W.P. Code</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wp.workPackageCode\" (blur)=\"onChangeWpCode()\"\n                [readOnly]=\"mode ==='read'\">\n        </div>\n        <span *ngIf=\"alerts.wpCode\" class=\"error my-2\"><small>{{alerts.wpCode.msg}}</small></span>\n    </div>\n    <div class=\"col-1\">\n        <div *ngIf=\"(mode ==='create' || mode ==='update')\">\n            <i *ngIf=\"validWpCode\" class=\"material-icons pass my-2\">check_circle</i>\n            <i *ngIf=\"!validWpCode\" class=\"material-icons error  my-2\">error</i>\n        </div>\n    </div>\n</div>\n<div class=\"  my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- contractor -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Contractor</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"wp.contractor\"\n                [readOnly]=\"mode ==='read' || mode=='update'\">\n        </div>\n        <span *ngIf=\"alerts.contractor\" class=\"error my-2\"><small>{{alerts.contractor.msg}}</small></span>\n    </div>\n    <div class=\"col-1\">\n    </div>\n    <div class=\"col-5\">\n        <!-- issue date -->\n\n        <!-- <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Issue Date</span>\n            </div>\n            <input id=\"weekEnd\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                [outsideClick]=\"true\" [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\n                [isDisabled]=\"(mode == 'read' || mode =='update')\" value=\"{{ wp.issueDate | date:'yyyy-MM-dd' }}\"\n                [readonly]=\"(mode == 'read' || mode =='update')\" />\n        </div> -->\n\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Issue Date</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" value=\"{{ wp.issueDate | date:'yyyy-MM-dd' }}\" [readOnly]=\"true\">\n\n        </div>\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-5\">\n\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Responsible Engineer</span>\n            </div>\n            <input type=\"text\" class=\"form-control\"\n                value=\"{{ wp.responsibleEngineer ? wp.responsibleEngineer.empFirstName + ' ' + wp.responsibleEngineer.empLastName : '(Not Assigned)'}}\"\n                *ngIf=\"mode==='read'\" [readOnly]=\"true\">\n            <p-dropdown class=\"form-control\" [options]=\"engineerDropdown\" [(ngModel)]=\"selectedEngineer\"\n                *ngIf=\"mode ==='create' || mode==='update'\"\n                placeholder=\"{{wp.responsibleEngineer ? wp.responsibleEngineer.employeeId : 'choose a Responsible Engineer'}}\"\n                optionLabel=\"label\" [style]=\"{'border-width':'0px','padding':'0px','width':'100%'}\"></p-dropdown>\n        </div>\n        <!--<span *ngIf=\"alerts.labourGrade\" class=\"error my-2\"><small>{{alerts.labourGrade.msg}}</small></span>-->\n\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n\n        <!-- parent Wp -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Parent W.P.</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" value=\"{{wp.parentWorkPackageCode}}\" *ngIf=\"mode==='read'\"\n                [readOnly]=\"true\">\n            <p-dropdown class=\"form-control\" [options]=\"parentWPDropdown\" [(ngModel)]=\"wp.parentWorkPackageCode\"\n                (onChange)=\"onChangeParentWp()\" *ngIf=\"mode ==='create' || mode==='update'\"\n                placeholder=\"{{'choose a Parent WP'}}\" optionLabel=\"label\"\n                [style]=\"{'border-width':'0px','padding':'0px','width':'100%'}\"></p-dropdown>\n        </div>\n        <!--<span *ngIf=\"alerts.supervisor\" class=\"error my-2\"><small>{{alerts.supervisor.msg}}</small></span>-->\n\n\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"my-3\"></div>\n\n<div class=\"form-row\">\n    <div class=\"col-11\">\n\n        <!-- Team Members -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Team Members</span>\n            </div>\n            <!-- <input type=\"text\" class=\"form-control \" *ngIf=\"mode==='read'\" [readOnly]=\"true\"> -->\n            <div class=\"d-flex flex-row form-control\">\n                <div *ngFor=\"let x of wp.employees;let i = index;\">\n                    <h4>\n                        <span class=\"badge badge-pill badge-secondary mr-2 my-2\">\n                            {{x.empFirstName +' ' +x.empLastName}}\n                        </span>\n                    </h4>\n                </div>\n                <p-multiSelect *ngIf=\"mode ==='create' || mode==='update'\" [options]=\"workerDropdown\"\n                    [(ngModel)]=\"wp.employees\" [panelStyle]=\"{minWidth:'12em'}\" maxSelectedLabels=\"0\">\n                </p-multiSelect>\n            </div>\n        </div>\n\n        <!-- <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Workers</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" value=\"{{wp.workers.employeeId}}\" *ngIf=\"mode==='read'\"\n                [readOnly]=\"true\">\n                <p-listbox [options]=\"workerDropdown\" [(ngModel)]=\"employees\" multiple=\"multiple\" \n                    checkbox=\"checkbox\" filter=\"filter\" optionLabel=\"label\" [listStyle]=\"{'max-height':'250px'}\">\n                    <p-header>\n                        Employees\n                    </p-header>\n                </p-listbox>\n                <p style=\"margin-left: 10px;\">Selected Employees: <span *ngFor=\"let e of employees\" style=\"margin-right: 10px\">{{e.label}}</span></p>\n            </div>\n        <div class=\"col-1\"></div> -->\n\n    </div>\n</div>\n<div class=\" my-3\"></div>\n<div class=\"dropdown-divider  my-3\"></div>\n<h5 class=\"lead\">Project Manager Planning Information</h5>\n\n<p-table [value]=\"wp.pmPlannings\" (onEditComplete)=\"onEditComplete($event)\" [columns]=\"cols\"\n    [style]=\"{'max-width':'900px','min-width':'400px','text-align':'center'}\">\n    <div class=\"form-row\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th>Labour Grade</th>\n                <th>Project Manager EAC (days)</th>\n                <th>Responsible Engineer Budget (days)</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData>\n            <tr>\n                <td class=\"font-weight-bold\">{{allLabourGrade[rowData.labourGradeId]}}</td>\n                <td [pEditableColumn]=\"mode == 'create'|| mode == 'update'? '' : null\">\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.pmEAC\" style=\"text-align:center\"\n                                [disabled]=\"mode != 'create'&& mode != 'update'\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            <span>{{rowData.pmEAC}}</span>\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td [pEditableColumn]=\"mode == 'create'|| mode == 'update'? '' : null\">\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input pInputText type=\"text\" [(ngModel)]=\"rowData.reBudget\" style=\"text-align:center\"\n                                [disabled]=\"mode != 'create'&& mode != 'update'\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            <span>{{rowData.reBudget}}</span>\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n            </tr>\n        </ng-template>\n    </div>\n</p-table>\n<div class=\"dropdown-divider  my-3\"></div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-create/wp-create.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-create/wp-create.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card mx-1\">\n    <div class=\"card-body\">\n\n\n        <!-- Title -->\n        <h3 class=\"display-4\">Create Work Package</h3>\n        <!-- alert -->\n        <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\n\n\n        <app-wp [wp]=\"wp\" [mode]=\"mode\" [validWpCode]=\"validWpCode\" (fireValidateWPCode)=\"validateWpCode()\"\n            [alerts]=\"alerts\" [projectId]=\"project.projectId\"></app-wp>\n\n        <!-- Action section-->\n        <div class=\"dropdown-divider my-3\"></div>\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onCreate($event)\">Create</button>\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n        <div class=\"dropdown-divider my-3\"></div>\n\n\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-edit/wp-edit.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-edit/wp-edit.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card mx-1\">\n    <div class=\"card-body\"> -->\n<!-- Title -->\n<h3 class=\"display-4\">Edit Work Package</h3>\n<!-- alert -->\n<shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\n\n\n<app-wp *ngIf=\"wp\" [wp]=\"wp\" [mode]=\"mode\" [validWpCode]=\"validWpCode\" (changeWpCode)=\"validateWpCode()\"\n    (fireValidateWPCode)=\"validateWpCode()\" [alerts]=\"alerts\"></app-wp>\n\n<!-- Action section-->\n<div class=\"dropdown-divider my-3\"></div>\n<div class=\"d-flex flex-row-reverse\">\n    <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onUpdate()\">Update</button>\n    <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\n</div>\n<div class=\"dropdown-divider my-3\"></div>\n<!-- </div>\n\n\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-list/wp-list.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-list/wp-list.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card mx-1\">\n    <div class=\"card-body\"> -->\n\n\n<div class=\"d-flex justify-content-between\">\n    <!-- <h3 class=\"display-4\">Work Package List</h3> -->\n    <button type=\"button\" class=\"btn btn-primary mb-3\" routerLink=\"wp/createwp\">Create</button>\n</div>\n<p-table #dt [columns]=\"cols\" [value]=\"displayPackage\" [paginator]=\"true\" [rows]=\"10\" [style]=\"{'text-align':'center'}\">\n    <ng-template pTemplate=\"caption\">\n        <div style=\"text-align: right\">\n            <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n            <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n                (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n        </div>\n    </ng-template>\n    <ng-template pTemplate=\"header\" let-columns>\n        <tr>\n            <th *ngFor=\"let col of columns\">\n                {{col.header}}\n            </th>\n        </tr>\n        <tr>\n            <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                <input *ngSwitchCase=\"'projectCode'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                    (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                <input *ngSwitchCase=\"'projectName'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                    (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                <input *ngSwitchCase=\"'wpCode'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                    (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                <input *ngSwitchCase=\"'wpTitle'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                    (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                <input *ngSwitchCase=\"'responsibleEngineer'\" pInputText type=\"text\"\n                    style=\"margin-left:-6px;width: 100%;\"\n                    (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                <input *ngSwitchCase=\"'status'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                    (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n            </th>\n        </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n        <tr [pSelectableRow]=\"rowData\">\n            <td *ngFor=\"let col of columns\">\n                <span *ngIf=\"col.field !=='status' && col.field !=='button'\">{{rowData[col.field]}}</span>\n                <div *ngIf=\"col.field === 'status'\">\n            <td>\n                <h5>\n                    <span class=\"badge badge-success\" *ngIf=\"rowData.isClosed\">Open</span>\n                    <span class=\"badge badge-danger\" *ngIf=\"!rowData.isClosed\">Closed</span>\n                </h5>\n            </td>\n            </div>\n            <div *ngIf=\"col.field ==='button'\">\n                <button type=\"button\" class=\"btn btn-link btn-sm\" [routerLink]=\"['wp/viewwp', rowData.wpCode]\"\n                    (click)=\"firePageChangeEvent()\">View</button>\n                <button type=\"button\" class=\"btn btn-link btn-sm\"\n                    [routerLink]=\"['wp/editwp', rowData.wpCode]\">Edit</button>\n            </div>\n            </td>\n        </tr>\n    </ng-template>\n</p-table>\n\n\n<!-- </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-management/wp-management.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-management/wp-management.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p-tabView (onChange)=\"onChangeTab($event)\" [activeIndex]=\"activeIndex\">\n    <p-tabPanel header=\"...\">\n    </p-tabPanel>\n    <p-tabPanel header=\"View\" leftIcon=\"pi pi-eye\">\n        <app-wp-view></app-wp-view>\n    </p-tabPanel>\n    <p-tabPanel header=\"Edit\" leftIcon=\"pi pi-pencil\">\n        <!-- [disabled]=\"true\" -->\n        <app-wp-edit></app-wp-edit>\n    </p-tabPanel>\n    <p-tabPanel header=\"Work Package Reports\" leftIcon=\"pi pi-th-large\">\n        <app-wp-report-list [wpCode]=\"workPackageCode\" (goReportPage)=\"goReportPage($event)\"\n            (fireReportCreation)=\"goCreation($event)\"></app-wp-report-list>\n    </p-tabPanel>\n\n    <div *ngFor=\"let c of creationTab\">\n        <p-tabPanel header=\"Create Report\" leftIcon=\"pi pi-plus\" *ngIf=\"creationTab\" [closable]=\"true\">\n            <app-wp-report-creation [wpCode]=\"workPackageCode\" (taskComplete)=\"taskComplete($event)\">\n            </app-wp-report-creation>\n        </p-tabPanel>\n    </div>\n\n    <div *ngFor=\"let id of wpReportId\">\n        <p-tabPanel header=\"Work Package Report\" leftIcon=\"pi pi-bookmark\" [closable]=\"true\">\n            <app-wp-report-view [wpReportId]=\"id\" *ngIf=\"id\"></app-wp-report-view>\n        </p-tabPanel>\n    </div>\n</p-tabView>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-view/wp-view.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-view/wp-view.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"card mx-1\">\n    <div class=\"card-body\"> -->\n<!-- Title -->\n<h3 class=\"display-4\">Work Package</h3>\n<!-- alert -->\n<shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\n\n\n<app-wp *ngIf=\"wp\" [wp]=\"wp\" [mode]=\"mode\" [validWpCode]=\"validWpCode\" (changeWpCode)=\"validateWpCode()\"\n    [alerts]=\"alerts\"></app-wp>\n<!-- \n    </div>\n</div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alertPromp/alertPromp.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/alertPromp/alertPromp.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alertsToArray()\">\n    <alert [type]=\"alert.type\" [dismissOnTimeout]=\"alert.timeout\">\n        <i class=\"material-icons \">report</i>\n        {{ alert.msg }}\n    </alert>\n</div>\n\n<!-- validation error modal-->\n<ng-template #validationError>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Validation Error</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        This is a modal.\n    </div>\n</ng-template>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/breadcrumb/breadcrumb.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"true\" class=\"margine_5\">\n    <p-breadcrumb [model]=\"crumbs\" [home]=\"home\"></p-breadcrumb>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/message/message.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>message works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/timesheet/timesheet.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/timesheet/timesheet.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n    <div class=\"form-row\">\n\n        <div class=\"col-2\">\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Version</span>\n                </div>\n                <input type=\"text\" id=\"weekNum\" class=\"form-control\" [value]=\"timesheet.versionNumber\"\n                    [readonly]=\"true\">\n            </div>\n        </div>\n\n\n        <div class=\"col-2\">\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Week No.</span>\n                </div>\n                <input type=\"text\" id=\"weekNum\" class=\"form-control\" [value]=\"timesheet.weekNumber\" [readonly]=\"true\">\n            </div>\n        </div>\n\n        <div class=\"col-6\">\n            <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\" id=\"basic-addon1\">Week Ending</span>\n                </div>\n                <input id=\"weekEnd\" type=\"text\" placeholder=\"Datepicker\" class=\"form-control\" bsDatepicker\n                    [daysDisabled]=\"[6,2,4,3,1,0]\" [outsideClick]=\"true\"\n                    [bsConfig]=\"{selectWeek: true, dateInputFormat: 'YYYY-MM-DD' }\"\n                    (bsValueChange)=\"onValueChange($event)\" value=\"{{ timesheet.weekEndingIn | date:'yyyy-MM-dd' }}\"\n                    [readonly]=\"(mode == 'read' || mode =='update')\"\n                    [isDisabled]=\"(mode == 'read' || mode =='update')\" />\n            </div>\n        </div>\n        <div class=\"col-2\" *ngIf=\"mode == 'create'|| mode =='update'\">\n            <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"addRow($event)\">Add Row</button>\n        </div>\n    </div>\n</form>\n<div class=\"dropdown-divider \"></div>\n\n<!-- This is editable -->\n<div class=\"my-3\">\n    <p-table [value]=\"timesheet.timesheetRows\" (onEditComplete)=\"onEditComplete($event)\"\n        [style]=\"{'text-align':'center'}\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th style=\"width:20%\">Project Name</th>\n                <th style=\"width:17%\">W.P. Code</th>\n                <th>Total</th>\n\n                <th *ngFor=\"let day of days\">{{day.header}}</th>\n                <th></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-i=\"rowIndex\">\n            <tr>\n                <!-- <td [attr.pEditableColumn]=\"mode == 'create'|| mode == 'update' ? '' : null\">\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n\n                            <p-dropdown [options]=\"projectDropdown\" [(ngModel)]=\"rowData.projectId\"\n                                [style]=\"{'width':'170px'}\">\n                            </p-dropdown>\n\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            \n                            {{rowData.projectName}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td> -->\n                <td>\n                    <p-dropdown [options]=\"populateProject()\" [(ngModel)]=\"rowData.projectId\" [style]=\"{'width':'100%'}\"\n                        *ngIf=\"(mode == 'create'|| mode == 'update')\">\n                    </p-dropdown>\n                    <span *ngIf=\"mode == 'read'\">{{rowData.projectId}}</span>\n                </td>\n                <!-- <td [attr.pEditableColumn]=\"mode == 'create'|| mode == 'update'? '' : null\">\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n\n                            <p-dropdown [options]=\"populateWP(rowData.projectId)\" [(ngModel)]=\"rowData.workPackageId\"\n                                [style]=\"{'width':'170px'}\">\n                            </p-dropdown>\n\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.pwName}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td> -->\n                <td>\n                    <p-dropdown [options]=\"populateWps(rowData.projectId)\" [(ngModel)]=\"rowData.workPackageId\"\n                        [style]=\"{'width':'100%'}\" *ngIf=\"(mode == 'create'|| mode == 'update')\">\n                    </p-dropdown>\n                    <span *ngIf=\"mode == 'read'\">{{rowData.workPackageId}}</span>\n                </td>\n                <td>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"output\">\n                            <span><strong>{{rowTotal(rowData) | number}}</strong></span>\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n\n                <td [pEditableColumn]=\"mode == 'create'|| mode == 'update'? '' : null\" *ngFor=\"let day of days\">\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n\n                            <input pInputText type=\"number\" [(ngModel)]=\"rowData[day.value]\" style=\"text-align:center\"\n                                [disabled]=\"mode != 'create'&& mode != 'update'\">\n\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            <span *ngIf=\"invalidHr(rowData[day.value])\" class=\"error\">{{rowData[day.value]}}</span>\n                            <span *ngIf=\"!invalidHr(rowData[day.value])\" class=\"pass\">{{rowData[day.value]}}</span>\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n\n                <td class=\"p-1\">\n                    <button *ngIf=\"mode == 'create'|| mode == 'update'\" type=\"button\" class=\"btn-link-normal\"\n                        (click)=\"deleteRow(rowData,i)\">\n                        <i class=\"material-icons text-danger\">remove_circle_outline</i>\n                    </button>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"footer\">\n            <tr>\n                <td colspan=\"2\">\n                    <div class=\"form-row\">\n                        <div class=\"col\">\n                            <div class=\"input-group \">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Flex</span>\n                                </div>\n                                <input type=\"text\" id=\"flex\" class=\"form-control\" [(ngModel)]=\"timesheet.flexTime\"\n                                    style=\"text-align:center\" [disabled]=\"mode != 'create'&& mode != 'update'\">\n                            </div>\n                        </div>\n                        <div class=\"col\">\n                            <div class=\"input-group \">\n                                <div class=\"input-group-prepend\">\n                                    <span class=\"input-group-text\" id=\"basic-addon1\">Overtime</span>\n                                </div>\n                                <input type=\"text\" id=\"over\" class=\"form-control\" [(ngModel)]=\"timesheet.overTime\"\n                                    style=\"text-align:center\" [disabled]=\"mode != 'create'&& mode != 'update'\">\n                            </div>\n                        </div>\n                    </div>\n                </td>\n                <!-- <td>Total</td> -->\n                <td>{{timesheetTotal()}}</td>\n\n                <td *ngFor=\"let day of days\">{{colTotal(day.value)}}</td>\n                <td></td>\n            </tr>\n        </ng-template>\n    </p-table>\n    <div class=\"alert alert-danger my-3\" role=\"alert\" *ngIf=\"dispalyError()\">\n        <h4 class=\"alert-heading\">Validation Error</h4>\n        <ul>\n\n            <li *ngIf=\"validationError['flexTime']\">{{validationError['flexTime'].msgs}}</li>\n            <li *ngIf=\"validationError['projectId']\">{{validationError['projectId'].msgs}}</li>\n            <li *ngIf=\"validationError['hr']\">{{validationError['hr'].msgs}}</li>\n            <li *ngIf=\"validationError['workPackageId']\">{{validationError['workPackageId'].msgs}}</li>\n            <li *ngIf=\"validationError['weekEndingIn']\">{{validationError['weekEndingIn'].msgs}}</li>\n            <li *ngIf=\"validationError['row']\">{{validationError['row'].msgs}}</li>\n        </ul>\n        <hr>\n        <p class=\"mb-0\"></p>\n    </div>\n</div>");

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
                data: { breadcrumb: 'Timesheet List' },
                loadChildren: () => __webpack_require__.e(/*! import() | modules-timesheets-timesheets-module */ "modules-timesheets-timesheets-module").then(__webpack_require__.bind(null, /*! ./modules/timesheets/timesheets.module */ "./src/app/modules/timesheets/timesheets.module.ts")).then(m => m.TimesheetsModule)
            },
            {
                path: 'employees',
                data: { breadcrumb: 'Employee List' },
                loadChildren: () => __webpack_require__.e(/*! import() | modules-employee-employee-module */ "modules-employee-employee-module").then(__webpack_require__.bind(null, /*! ./modules/employee/employee.module */ "./src/app/modules/employee/employee.module.ts")).then(m => m.EmployeeModule)
            },
            {
                path: 'projects',
                data: { breadcrumb: 'Project List' },
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/projects/projects.module */ "./src/app/modules/projects/projects.module.ts"))
                    .then(p => p.ProjectsModule)
            },
            {
                path: 'reports',
                data: {
                    breadcrumb: null
                },
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/reports/reports.module */ "./src/app/modules/reports/reports.module.ts")).then(m => m.ReportsModule)
            },
            {
                path: 'wp',
                data: { breadcrumb: 'work package list' },
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/wp/wp.module */ "./src/app/modules/wp/wp.module.ts")).then(m => m.WpModule)
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
/* harmony default export */ __webpack_exports__["default"] = (".ui-table.ui-table-cars .ui-table-caption.ui-widget-header {\n    border: 0 none;\n    padding: 12px;\n    text-align: left;\n    font-size: 20px;\n}\n\n.ui-column-filter {\n    margin-top: 0em;\n}\n\n.ui-column-filter .ui-multiselect-label {\n    font-weight: 500;\n}\n\n.ui-table.ui-table-cars .ui-table-thead > tr > th {\n    border: 0 none;\n    text-align: left;\n}\n\n.ui-table-globalfilter-container {\n    float: right;\n    display: inline;\n}\n\n.ui-table.ui-table-cars .ui-table-tbody > tr > td {\n    border: 0 none;\n}\n\n.ui-table.ui-table-cars .ui-table-tbody .ui-column-title {\n    font-size: 16px;\n}\n\n.ui-table.ui-table-cars .ui-paginator {\n    border: 0 none;\n    padding: 1em;\n}\n\n>>>:focus{\n    outline: #FFE085 auto 5px !important;\n}\n\n>>>.smallTable-width{\n    min-width: 900px;\n    min-width: 400px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBS0E7SUFDSSxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudWktdGFibGUudWktdGFibGUtY2FycyAudWktdGFibGUtY2FwdGlvbi51aS13aWRnZXQtaGVhZGVyIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4udWktY29sdW1uLWZpbHRlciB7XG4gICAgbWFyZ2luLXRvcDogMGVtO1xufVxuXG4udWktY29sdW1uLWZpbHRlciAudWktbXVsdGlzZWxlY3QtbGFiZWwge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi51aS10YWJsZS51aS10YWJsZS1jYXJzIC51aS10YWJsZS10aGVhZCA+IHRyID4gdGgge1xuICAgIGJvcmRlcjogMCBub25lO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi51aS10YWJsZS1nbG9iYWxmaWx0ZXItY29udGFpbmVyIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgZGlzcGxheTogaW5saW5lO1xufVxuXG4udWktdGFibGUudWktdGFibGUtY2FycyAudWktdGFibGUtdGJvZHkgPiB0ciA+IHRkIHtcbiAgICBib3JkZXI6IDAgbm9uZTtcbn1cblxuLnVpLXRhYmxlLnVpLXRhYmxlLWNhcnMgLnVpLXRhYmxlLXRib2R5IC51aS1jb2x1bW4tdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLnVpLXRhYmxlLnVpLXRhYmxlLWNhcnMgLnVpLXBhZ2luYXRvciB7XG4gICAgYm9yZGVyOiAwIG5vbmU7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG5cblxuXG4+Pj46Zm9jdXN7XG4gICAgb3V0bGluZTogI0ZGRTA4NSBhdXRvIDVweCAhaW1wb3J0YW50O1xufVxuXG4+Pj4uc21hbGxUYWJsZS13aWR0aHtcbiAgICBtaW4td2lkdGg6IDkwMHB4O1xuICAgIG1pbi13aWR0aDogNDAwcHg7XG59XG5cbiJdfQ== */");

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
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");



























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
            primeng_table__WEBPACK_IMPORTED_MODULE_23__["TableModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_24__["InputTextModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_26__["DialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_25__["ButtonModule"],
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
/* harmony import */ var primeng_accordion__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/accordion */ "./node_modules/primeng/fesm2015/primeng-accordion.js");
/* harmony import */ var primeng_panelmenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/panelmenu */ "./node_modules/primeng/fesm2015/primeng-panelmenu.js");
/* harmony import */ var _layout_toast_display_toast_display_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./layout/toast-display/toast-display.component */ "./src/app/core/layout/toast-display/toast-display.component.ts");
/* harmony import */ var primeng_toast__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/toast */ "./node_modules/primeng/fesm2015/primeng-toast.js");
/* harmony import */ var primeng_messages__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/messages */ "./node_modules/primeng/fesm2015/primeng-messages.js");
/* harmony import */ var primeng_message__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/message */ "./node_modules/primeng/fesm2015/primeng-message.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





















let CoreModule = class CoreModule {
};
CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_3__["LoginLayoutComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
            _layout_toast_display_toast_display_component__WEBPACK_IMPORTED_MODULE_14__["ToastDisplayComponent"],
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
            primeng_accordion__WEBPACK_IMPORTED_MODULE_12__["AccordionModule"],
            primeng_panelmenu__WEBPACK_IMPORTED_MODULE_13__["PanelMenuModule"],
            primeng_toast__WEBPACK_IMPORTED_MODULE_15__["ToastModule"],
            primeng_messages__WEBPACK_IMPORTED_MODULE_16__["MessagesModule"],
            primeng_message__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
        ],
        exports: [
            _layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_3__["LoginLayoutComponent"],
            _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _layout_nav_nav_component__WEBPACK_IMPORTED_MODULE_7__["NavComponent"],
            _layout_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarComponent"],
            _layout_toast_display_toast_display_component__WEBPACK_IMPORTED_MODULE_14__["ToastDisplayComponent"],
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
/* harmony default export */ __webpack_exports__["default"] = ("/* .example-container {\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-events {\n  width: 300px;\n  height: 200px;\n  overflow: auto;\n  border: 1px solid #555;\n}\n.mat-sidenav-content{\n  padding: 10px;\n  min-height: 100vh;\n} */\n\n.example-container {\n  /* width: 100vw;\n  height:100%; */\n  /* border: 1px solid rgba(0, 0, 0, 0.5); */\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.example-sidenav-content {\n  /* display: flex; */\n  height: 100vh;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  /* padding: 10px; */\n  /* min-height: 90vh; */\n}\n\n.example-sidenav {\n  /* padding: 20px; */\n  position: absolute;\n  padding-right: 10px;\n  z-index: 100;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvY29udGVudC1sYXlvdXQvY29udGVudC1sYXlvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpQkc7O0FBRUg7RUFDRTtnQkFDYztFQUNkLDBDQUEwQztFQUMxQyxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtBQUNWOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L2NvbnRlbnQtbGF5b3V0L2NvbnRlbnQtbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuZXhhbXBsZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmV4YW1wbGUtZXZlbnRzIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgYm9yZGVyOiAxcHggc29saWQgIzU1NTtcbn1cbi5tYXQtc2lkZW5hdi1jb250ZW50e1xuICBwYWRkaW5nOiAxMHB4O1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn0gKi9cblxuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgLyogd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6MTAwJTsgKi9cbiAgLyogYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjUpOyAqL1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgLyogZGlzcGxheTogZmxleDsgKi9cbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIC8qIHBhZGRpbmc6IDEwcHg7ICovXG4gIC8qIG1pbi1oZWlnaHQ6IDkwdmg7ICovXG59XG5cbi5leGFtcGxlLXNpZGVuYXYge1xuICAvKiBwYWRkaW5nOiAyMHB4OyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuIl19 */");

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
        this.showFiller = false;
    }
    ngOnInit() {
    }
    mouseEnter(div) {
        this.showFiller = !this.showFiller;
    }
    mouseLeave(div) {
        this.showFiller = !this.showFiller;
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
/* harmony default export */ __webpack_exports__["default"] = (".position-bottom{\n    position: fixed;\n    bottom:0%;\n    width:100%;\n    background-color: black;\n    color:white\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCO0lBQ0EiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucG9zaXRpb24tYm90dG9te1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206MCU7XG4gICAgd2lkdGg6MTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjp3aGl0ZVxuICAgIH0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = ("\n>>>a:hover{\n    text-decoration:none !important;\n    color:white !important;\n}\n>>>.material-icons{\n    margin:15px;\n    margin-right: 0px;\n    margin-left: 5px;\n    visibility:visible !important;\n    opacity:1 !important;\n}\n.navText{\n    display: inline-block;\n    margin-left: 20px;\n    padding-right: 30px;\n}\n.button{\n    border-width: 0;\n    background-color: inherit;\n    /* color:#ffc621; */\n    color:grey;\n    padding: 0;\n}\n.button:hover{\n    color:#ffc621;\n}\n.noHMargin{\n    margin-top: 0 !important;\n    margin-bottom: 0 !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsMkJBQTJCO0VBQzdCIiwiZmlsZSI6InNyYy9hcHAvY29yZS9sYXlvdXQvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4+Pj5hOmhvdmVye1xuICAgIHRleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6d2hpdGUgIWltcG9ydGFudDtcbn1cbj4+Pi5tYXRlcmlhbC1pY29uc3tcbiAgICBtYXJnaW46MTVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHZpc2liaWxpdHk6dmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6MSAhaW1wb3J0YW50O1xufVxuXG4ubmF2VGV4dHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbn1cblxuLmJ1dHRvbntcbiAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICAvKiBjb2xvcjojZmZjNjIxOyAqL1xuICAgIGNvbG9yOmdyZXk7XG4gICAgcGFkZGluZzogMDtcbn1cbi5idXR0b246aG92ZXJ7XG4gICAgY29sb3I6I2ZmYzYyMTtcbn1cblxuLm5vSE1hcmdpbntcbiAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9Il19 */");

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
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");



let NavComponent = class NavComponent {
    constructor() { }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavComponent.prototype, "showFiller", void 0);
NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/nav/nav.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('enterAnimation', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)', opacity: 1 }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1000ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateX(0)', opacity: 0 }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    overflow: 'hidden',
                    height: '*',
                    width: '260px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                    opacity: '0',
                    overflow: 'hidden',
                    height: '*',
                    width: '65px'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('true => false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out')),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('false => true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('400ms ease-in-out'))
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav.component.css */ "./src/app/core/layout/nav/nav.component.css")).default]
    })
], NavComponent);



/***/ }),

/***/ "./src/app/core/layout/toast-display/toast-display.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/core/layout/toast-display/toast-display.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvbGF5b3V0L3RvYXN0LWRpc3BsYXkvdG9hc3QtZGlzcGxheS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/core/layout/toast-display/toast-display.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/core/layout/toast-display/toast-display.component.ts ***!
  \**********************************************************************/
/*! exports provided: ToastDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastDisplayComponent", function() { return ToastDisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/api */ "./node_modules/primeng/fesm2015/primeng-api.js");
/* harmony import */ var _service_my_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/my-toast.service */ "./src/app/core/service/my-toast.service.ts");




let ToastDisplayComponent = class ToastDisplayComponent {
    constructor(messageService, mytoastService) {
        this.messageService = messageService;
        this.mytoastService = mytoastService;
        this.subscription = mytoastService.message$.subscribe(t => messageService.add(t));
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    addSingle() {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    }
    addMultiple() {
        this.messageService.addAll([{ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' },
            { severity: 'info', summary: 'Info Message', detail: 'Via MessageService' }]);
    }
    clear() {
        this.messageService.clear();
    }
};
ToastDisplayComponent.ctorParameters = () => [
    { type: primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"] },
    { type: _service_my_toast_service__WEBPACK_IMPORTED_MODULE_3__["MyToastService"] }
];
ToastDisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-toast-display',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toast-display.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/core/layout/toast-display/toast-display.component.html")).default,
        providers: [primeng_api__WEBPACK_IMPORTED_MODULE_2__["MessageService"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./toast-display.component.css */ "./src/app/core/layout/toast-display/toast-display.component.css")).default]
    })
], ToastDisplayComponent);



/***/ }),

/***/ "./src/app/core/layout/toolbar/toolbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/core/layout/toolbar/toolbar.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-align-right{\n    display: -webkit-box;\n    display: flex;\n    padding: 21px 0;\n    -webkit-box-pack: end;\n            justify-content: flex-end;\n  }\n\n.title{\n  font-size: 1.75rem !important;\n  font-family: 'Signika', sans-serif !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9sYXlvdXQvdG9vbGJhci90b29sYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixlQUFlO0lBQ2YscUJBQXlCO1lBQXpCLHlCQUF5QjtFQUMzQjs7QUFFRjtFQUNFLDZCQUE2QjtFQUM3Qiw2Q0FBNkM7QUFDL0MiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2xheW91dC90b29sYmFyL3Rvb2xiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYWxpZ24tcmlnaHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAyMXB4IDA7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgfVxuXG4udGl0bGV7XG4gIGZvbnQtc2l6ZTogMS43NXJlbSAhaW1wb3J0YW50O1xuICBmb250LWZhbWlseTogJ1NpZ25pa2EnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG59Il19 */");

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
    changePW(credentialId, password, newPassword) {
        let baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].authUrl;
        let url = baseUrl + `api/Credentials/Authenticate/ChangePW`;
        let body = {
            "credentialId": credentialId,
            "password": password,
            "newPassword": newPassword
        };
        return this.http.post(url, body).pipe();
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
/* harmony import */ var _project_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project/project.service */ "./src/app/core/service/project/project.service.ts");








let EmployeeService = class EmployeeService {
    constructor(http, messageService, projectService) {
        this.http = http;
        this.messageService = messageService;
        this.projectService = projectService;
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
    getAllChildrenEmployees(empId) {
        let url = this.baseUrl + `api/employees/getChildren/${empId}`;
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
    getEmployeesWithinProject(projectId) {
        return this.projectService.getProject(projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(p => p.employees));
    }
    putEmployee(e) {
        let url = this.baseUrl + `api/employees/${e.employeeId}`;
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
            .put(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("postEmployee", e)));
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
        let url = this.baseUrl + `api/Employees/CheckEmployeeCodeAvailability/${empCode}`;
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
    { type: _message_service__WEBPACK_IMPORTED_MODULE_3__["MessageService"] },
    { type: _project_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"] }
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

/***/ "./src/app/core/service/my-toast.service.ts":
/*!**************************************************!*\
  !*** ./src/app/core/service/my-toast.service.ts ***!
  \**************************************************/
/*! exports provided: MyToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyToastService", function() { return MyToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let MyToastService = class MyToastService {
    constructor() {
        this.toasts = [];
        this.msgsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.message$ = this.msgsSubject.asObservable();
    }
    add(message) {
        this.msgsSubject.next(message);
    }
    addSuccess(summary, detail) {
        let msgs = { severity: 'success', summary: summary, detail: detail, life: 5000 };
        this.msgsSubject.next(msgs);
    }
    addWarning(summary, detail) {
        let msgs = { severity: 'warn', summary: summary, detail: detail, life: 5000 };
        this.msgsSubject.next(msgs);
    }
    addError(summary, detail) {
        let msgs = { severity: 'error', summary: summary, detail: detail, life: 5000 };
        this.msgsSubject.next(msgs);
    }
    addInfo(summary, detail) {
        let msgs = { severity: 'info', summary: summary, detail: detail, life: 5000 };
        this.msgsSubject.next(msgs);
    }
};
MyToastService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MyToastService);



/***/ }),

/***/ "./src/app/core/service/project/project.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/service/project/project.service.ts ***!
  \*********************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../message.service */ "./src/app/core/service/message.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");







let ProjectService = class ProjectService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
    }
    getProjectsByEmployee(empId) {
        let url = this.baseUrl + `api/projects/GetProjectsByEmpId/${empId}`;
        return this.http
            .get(url, this.httpOptions).pipe();
    }
    getProjectWpDropdown(empId) {
        let url = this.baseUrl + `api/Projects/GetAllProjectsAndLowerWpForEmp/${empId}`;
        return this.http
            .get(url, this.httpOptions).pipe();
    }
    putProject(p) {
        let url = this.baseUrl + `api/projects/${p.projectId}`;
        let employees = [];
        p.employees.forEach(e => {
            let emp = {
                "employeeId": e.employeeId,
                "empFirstName": e.empFirstName,
                "empLastName": e.empLastName
            };
            employees.push(emp);
        });
        let body = {
            "projectId": p.projectId,
            "projectName": p.projectName,
            "projectCode": p.projectCode,
            "budget": p.budget,
            "startDate": p.startDate,
            "endDate": p.endDate,
            "projectManager": {
                "employeeId": p.projectManager.employeeId,
                "empFirstName": p.projectManager.empFirstName,
                "empLastName": p.projectManager.empLastName
            },
            "isClosed": p.isClosed,
            "employees": employees,
            "description": p.description
        };
        console.log(JSON.stringify(body));
        return this.http
            .put(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("putProject", body)));
    }
    postProject(p) {
        let url = this.baseUrl + `api/projects`;
        let employees = [];
        p.employees.forEach(e => {
            let emp = {
                "employeeId": e.employeeId,
                "empFirstName": e.empFirstName,
                "empLastName": e.empLastName
            };
            employees.push(emp);
        });
        let body = {
            "projectName": p.projectName,
            "projectCode": p.projectCode,
            "budget": p.budget,
            "startDate": p.startDate,
            "endDate": p.endDate,
            "projectManager": {
                "employeeId": p.projectManager.employeeId,
                "empFirstName": p.projectManager.empFirstName,
                "empLastName": p.projectManager.empLastName
            },
            "isClosed": p.isClosed,
            "employees": employees,
            "description": p.description
        };
        console.log(JSON.stringify(body));
        return this.http
            .post(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("postProject", body)));
    }
    getProjects(empId) {
        let url = this.baseUrl + `api/projects/getProjectsByEmpId/${empId}`;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.projectList));
    }
    getProject(id) {
        let url = this.baseUrl + `api/projects/${id}`;
        return this.http
            .get(url)
            .pipe();
    }
    getAllOpenProject() {
        let url = this.baseUrl + `api/projects/getAllOpenProjects`;
        return this.http.get(url).pipe();
    }
    checkProjectCode(code) {
        let url = this.baseUrl + `api/projects/checkProjectCodeAvailability/${code}`;
        return this.http
            .get(url)
            .pipe();
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.alertUser(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(result);
        };
    }
    alertUser(message) {
        // this.messageService.add(`WeatherService: ${message}`);
    }
};
ProjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }
];
ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProjectService);



/***/ }),

/***/ "./src/app/core/service/report/report.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/core/service/report/report.service.ts ***!
  \*******************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/core/service/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let ReportService = class ReportService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
    }
    getReBudgetDays(wpCode, labourGradeId) {
        let url = this.baseUrl + `api/workpackagereports/${wpCode}/${labourGradeId}`;
        return this.http
            .get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data.reBudgetDay));
    }
    getWpReport(wpReportId) {
        console.log('call getWpReport');
        let url = this.baseUrl + `api/reports/wpReport/${wpReportId}`;
        return this.http
            .get(url, this.httpOptions).pipe();
    }
    calculateActual(wpCode, sd, ed, lgId) {
        let sds = this.formateDate(sd);
        let eds = this.formateDate(ed);
        let url = this.baseUrl + `api/WorkPackages/GetTotalHoursByWpIdRange/${wpCode}/${sds}/${eds}/${lgId}`;
        // TODO: change to post
        console.log(url);
        return this.http.get(url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(data => data.totalDays));
    }
    ;
    postWpReport(wpr) {
        let url = this.baseUrl + `api/reports/wpReport/`;
        var result = null;
        var body = {
            'workPackageCode': wpr.workPackageCode,
            "reportDate": wpr.reportDate,
            "startDate": wpr.startDate,
            "endDate": wpr.endDate,
            "comment": wpr.comment,
            "workAccomplished": wpr.workAccomplished,
            "workPlanned": wpr.workPlanned,
            "problemsThisPeriod": wpr.problemsThisPeriod,
            "problemsAnticipated": wpr.problemsAnticipated,
            "details": wpr.details
        };
        console.log('postWpReport');
        console.log(JSON.stringify(body));
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].fakeBackend)
            result = this.http.post(url, body, this.httpOptions);
        return result;
    }
    getProjectReport(pReportId) {
        let url = this.baseUrl + `api/reports/projectReport/${pReportId}`;
        return this.http
            .get(url, this.httpOptions).pipe();
    }
    getAllProjectReports(projectId) {
        let url = this.baseUrl + `api/reports/allprojectReports/${projectId}`;
        return this.http.get(url, this.httpOptions).pipe();
    }
    getAllWpReports(wpCode) {
        let url = this.baseUrl + `api/reports/wpReport/getAllWpReport/${wpCode}`;
        return this.http.get(url, this.httpOptions).pipe();
    }
    formateDate(date) {
        var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        return [year, month, day].join('-');
    }
};
ReportService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
ReportService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ReportService);



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

/***/ "./src/app/core/service/wp/wp.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/service/wp/wp.service.ts ***!
  \***********************************************/
/*! exports provided: WpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpService", function() { return WpService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../message.service */ "./src/app/core/service/message.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let WpService = class WpService {
    constructor(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].apiUrl;
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ "Content-Type": "application/json" })
        };
    }
    getLabourGrades() {
        let url = this.baseUrl + `api/LabourGrade`;
        return this.http.get(url).pipe();
    }
    getAllWp() {
        let url = this.baseUrl + `api/WorkPackages/getAllWp`;
        return this.http.get(url).pipe();
    }
    getAllWpByEmployeeId(id) {
        let url = this.baseUrl + `api/WorkPackages/getAllWpByEmployeeId/${id}`;
        return this.http.get(url).pipe();
    }
    getWpByWpCode(code) {
        let url = this.baseUrl + `api/WorkPackages/${code}`;
        return this.http.get(url).pipe();
    }
    getAllWpByProjectId(projectId) {
        let url = this.baseUrl + `api/WorkPackages/GetAllWorkPackagesByProjectId/${projectId}`;
        return this.http.get(url).pipe();
    }
    postWorkPackage(w) {
        let url = this.baseUrl + `api/WorkPackages`;
        let body = {
            "projectCode": w.projectCode,
            "projectName": w.projectName,
            "workPackageCode": w.workPackageCode,
            "workPackageTitle": w.workPackageTitle,
            "contractor": w.contractor,
            "issueDate": w.issueDate,
            "isClosed": w.isClosed,
            "responsibleEngineer": w.responsibleEngineer,
            "parentWorkPackageId": w.parentWorkPackageId,
            "employees": w.employees,
            "pmPlannings": w.pmPlannings
        };
        console.log('postWorkPackage');
        console.log(JSON.stringify(body));
        return this.http
            .post(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError("postWorkPackage", w)));
    }
    putWorkPackage(w) {
        let url = this.baseUrl + `api/WorkPackages`;
        let body = {
            "projectCode": w.projectCode,
            "projectName": w.projectName,
            "workPackageCode": w.workPackageCode,
            "workPackageTitle": w.workPackageTitle,
            "contractor": w.contractor,
            "issueDate": w.issueDate,
            "isClosed": w.isClosed,
            "responsibleEngineer": w.responsibleEngineer,
            "parentWorkPackageId": w.parentWorkPackageId,
            "employees": w.employees,
            "pmPlannings": w.pmPlannings
        };
        console.log('putWorkPackage');
        console.log(JSON.stringify(body));
        return this.http
            .put(url, body, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.handleError("putWorkPackage", w)));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.alertUser(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(result);
        };
    }
    alertUser(message) {
        // this.messageService.add(`WeatherService: ${message}`);
    }
};
WpService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _message_service__WEBPACK_IMPORTED_MODULE_2__["MessageService"] }
];
WpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], WpService);



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

/***/ "./src/app/modules/projects/components/project/project.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/projects/components/project/project.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pass{\n    color:green;\n    font-style: normal;\n}\n.error{\n    color:red;\n    font-style: normal;\n}\n.width500{\n    width: 500px;\n    background-color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9qZWN0cy9jb21wb25lbnRzL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvY29tcG9uZW50cy9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXNze1xuICAgIGNvbG9yOmdyZWVuO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5lcnJvcntcbiAgICBjb2xvcjpyZWQ7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLndpZHRoNTAwe1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/modules/projects/components/project/project.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/projects/components/project/project.component.ts ***!
  \**************************************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/authentication.service */ "./src/app/core/service/authentication.service.ts");






let ProjectComponent = class ProjectComponent {
    constructor(authService, projectService, employeeService) {
        this.authService = authService;
        this.projectService = projectService;
        this.employeeService = employeeService;
        this.isSupervisorView = false;
        this.employeeDropdown = null;
        this.changeProjectCode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.vlidatePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.mode !== src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read)
            this.populateEmployeeDropdown();
    }
    // Populates employee dropdown
    populateEmployeeDropdown() {
        this.employeeService
            .getAllChildrenEmployees(this.authService.currentUserValue.employeeId)
            .subscribe(employees => {
            this.employeeDropdown = [];
            employees.forEach(e => {
                // Not showing pm in the teamMembers dropdown list
                if (e.employeeId !== this.project.projectManager.employeeId)
                    this.employeeDropdown.push({ label: `${e.empFirstName} ${e.empLastName}`, value: e });
            });
            console.log(this.employeeDropdown);
        });
    }
    // Adds selected entries from employee dropdown list to project.teamMembers
    // teamMemberSelect() {
    //   var savedItems = [];
    //   if (this.project.teamMembers.length > 0) {
    //     savedItems = this.project.teamMembers;
    //   }
    //   var temp = [];
    //   for (var i = 0; i < this.employees.length; i++) {
    //     var label = this.employees[i].label.split(" ");
    //     var efn = label[0];
    //     var eln = label[1];
    //     var eid = this.employees[i].value;
    //     var tempJson = {
    //       "empFirstName": efn,
    //       "empLastName": eln,
    //       "employeeId": eid
    //     };
    //     temp.push(tempJson);
    //   }
    //   this.project.teamMembers = temp;
    // }
    onStartDateChange(value) {
        console.log(value);
        this.project.startDate = value;
        this.vlidatePage.emit('payload');
    }
    onEndDateChange(value) {
        console.log(value);
        this.project.endDate = value;
        this.vlidatePage.emit('payload');
    }
    // exit event of emp id field
    onExitProjectCode() {
        this.changeProjectCode.emit('payload');
        this.vlidatePage.emit('payload');
    }
    onFieldExit() {
        this.vlidatePage.emit('payload');
    }
};
ProjectComponent.ctorParameters = () => [
    { type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectComponent.prototype, "project", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectComponent.prototype, "alerts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectComponent.prototype, "validProjectCode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectComponent.prototype, "isSupervisorView", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProjectComponent.prototype, "changeProjectCode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ProjectComponent.prototype, "vlidatePage", void 0);
ProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/components/project/project.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project.component.css */ "./src/app/modules/projects/components/project/project.component.css")).default]
    })
], ProjectComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/empty/empty.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/projects/pages/empty/empty.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvZW1wdHkvZW1wdHkuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/projects/pages/empty/empty.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/projects/pages/empty/empty.component.ts ***!
  \*****************************************************************/
/*! exports provided: EmptyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmptyComponent", function() { return EmptyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EmptyComponent = class EmptyComponent {
    constructor() { }
    ngOnInit() {
    }
};
EmptyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empty',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./empty.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/empty/empty.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./empty.component.css */ "./src/app/modules/projects/pages/empty/empty.component.css")).default]
    })
], EmptyComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/project-creation/project-creation.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-creation/project-creation.component.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC1jcmVhdGlvbi9wcm9qZWN0LWNyZWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/projects/pages/project-creation/project-creation.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-creation/project-creation.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ProjectCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectCreationComponent", function() { return ProjectCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/Project */ "./src/app/shared/model/Project.ts");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/model/Alert */ "./src/app/shared/model/Alert.ts");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/authentication.service */ "./src/app/core/service/authentication.service.ts");
/* harmony import */ var src_app_shared_model_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/model/User */ "./src/app/shared/model/User.ts");
/* harmony import */ var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/core/service/my-toast.service */ "./src/app/core/service/my-toast.service.ts");










let ProjectCreationComponent = class ProjectCreationComponent {
    constructor(projectService, authService, myToastService, router) {
        this.projectService = projectService;
        this.authService = authService;
        this.myToastService = myToastService;
        this.router = router;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__["MODE"].Create;
        this.teamMembers = null;
        this.employeeDropdown = null;
        // project validation
        this.validProjectCode = false;
        this.validStartDate = false;
        this.alerts = [];
    }
    ngOnInit() {
        this.newProject = new src_app_shared_model_Project__WEBPACK_IMPORTED_MODULE_2__["Project"]();
        let currentUser = this.authService.currentUserValue;
        this.newProject.projectManager = Object(src_app_shared_model_User__WEBPACK_IMPORTED_MODULE_8__["convertToEmployee"])(currentUser);
    }
    onCreate(e) {
        if (!this.validatePage()) {
            this.myToastService.addError('Your data entry is rejected.', 'Please review the highlighted fields');
            console.log(this.alerts);
            // for (let key in this.alerts) {
            //   let value = this.alerts[key];
            //   this.myToastService.addError('Validation Error', `${value.msg}`);
            // }
            return;
        }
        console.log("POST project");
        this.projectService.postProject(this.newProject).subscribe(_ => {
            this.myToastService.addSuccess(`Project created Successfully`, `Project ${this.newProject.projectName} created.`);
            this.router.navigate([`/content/projects`]);
        });
    }
    //brings user back to projects list
    onCancel(e) {
        this.router.navigate(['/content/projects']);
    }
    validatePage() {
        this.alerts = [];
        var result = true;
        if (!this.newProject.projectName === null || this.newProject.projectName.match(/^ *$/) !== null) {
            this.alerts['projectName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `Project Name cannot be empty`);
            result = false;
        }
        if (isNaN(this.newProject.projectCode)) {
            this.alerts['projectCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `Project Code must be a number`);
            result = false;
        }
        if (this.newProject.startDate === null) {
            this.alerts['startDate'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `Start Date cannot be empty`);
            result = false;
        }
        if (this.newProject.endDate === null) {
            this.alerts['endDate'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `End Date cannot be empty`);
            result = false;
        }
        if (this.newProject.startDate > this.newProject.endDate) {
            this.alerts['endDate'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `End date must be after the start Date`);
            result = false;
        }
        if (!this.validProjectCode) {
            this.alerts['projectCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `Project Code : ${this.newProject.projectCode} is not allowed`);
            result = false;
        }
        return result;
    }
    // displayErrorMsg(fieldName: string) {
    //   return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
    // }
    // validates projectCode is unique
    validateProjectCode() {
        this.projectService.checkProjectCode(this.newProject.projectCode)
            .subscribe(response => {
            console.log(response);
            this.validProjectCode = response;
            console.log(this.validProjectCode);
        });
    }
};
ProjectCreationComponent.ctorParameters = () => [
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
    { type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"] },
    { type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_9__["MyToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
ProjectCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-creation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-creation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-creation/project-creation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-creation.component.css */ "./src/app/modules/projects/pages/project-creation/project-creation.component.css")).default]
    })
], ProjectCreationComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/project-edit/project-edit.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-edit/project-edit.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC1lZGl0L3Byb2plY3QtZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/projects/pages/project-edit/project-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-edit/project-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEditComponent", function() { return ProjectEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/model/Alert */ "./src/app/shared/model/Alert.ts");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/my-toast.service */ "./src/app/core/service/my-toast.service.ts");








let ProjectEditComponent = class ProjectEditComponent {
    constructor(route, projectService, myToastService, router) {
        this.route = route;
        this.projectService = projectService;
        this.myToastService = myToastService;
        this.router = router;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_5__["MODE"].Update;
        this.teamMembers = null;
        this.employeeDropdown = null;
        // project validation
        this.validStartDate = false;
        this.alerts = {};
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('projectId');
            this.projectService.getProject(id).subscribe(e => this.project = e);
        });
    }
    onUpdate() {
        if (!this.validatePage()) {
            this.myToastService.addError('Your data entry is rejected.', 'Please review the highlighted fields');
            return;
        }
        console.log("POST project");
        console.log(JSON.stringify(this.project));
        this.projectService.postProject(this.project).subscribe(_ => {
            this.myToastService.addSuccess(`Project Saved Successfully`, `Project ${this.project.projectName} saved ${new Date().toLocaleString}.`);
            this.router.navigate([`/content/projects/view/${this.project.projectId}`]);
        });
    }
    //brings user back to projects list
    onCancel(e) {
        this.router.navigate(['/content/projects']);
    }
    validatePage() {
        var result = true;
        if (!this.project.projectName === null || this.project.projectName.match(/^ *$/) !== null) {
            this.alerts['projectName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `Project Name cannot be empty`);
            result = false;
        }
        if (isNaN(this.project.projectCode)) {
            this.alerts['projectCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `Project Code must be a number`);
            result = false;
        }
        if (this.project.startDate === null) {
            this.alerts['startDate'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `Start Date cannot be empty`);
            result = false;
        }
        if (this.project.endDate === null) {
            this.alerts['endDate'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `End Date cannot be empty`);
            result = false;
        }
        if (this.project.startDate > this.project.endDate) {
            this.alerts['endDate'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `End date must be after the start Date`);
            result = false;
        }
        return result;
    }
    displayErrorMsg(fieldName) {
        return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
    }
};
ProjectEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] },
    { type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_6__["MyToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProjectEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-edit/project-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-edit.component.css */ "./src/app/modules/projects/pages/project-edit/project-edit.component.css")).default]
    })
], ProjectEditComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC1saXN0LXN1cGVydmlzb3IvcHJvamVjdC1saXN0LXN1cGVydmlzb3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProjectListSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListSupervisorComponent", function() { return ProjectListSupervisorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/authentication.service */ "./src/app/core/service/authentication.service.ts");





let ProjectListSupervisorComponent = class ProjectListSupervisorComponent {
    constructor(employeeService, projectService, authService) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.authService = authService;
        this.displayProject = [];
    }
    ngOnInit() {
        this.initProjects();
        this.initCols();
    }
    initProjects() {
        this.projectService
            .getAllOpenProject()
            .subscribe(res => {
            console.log(res);
            res.forEach(i => {
                console.log(i);
                this.displayProject.push({
                    "projectId": i.projectId,
                    "projectName": i.projectName,
                    "projectManager": i.projectManager.empFirstName + " " + i.projectManager.empLastName,
                    "startDate": i.startDate,
                    "endDate": i.endDate,
                    "isClosed": !i.isClosed
                });
            });
            console.log(this.displayProject);
        });
    }
    initCols() {
        this.cols = [
            { field: 'projectName', header: 'Project Name' },
            { field: 'projectManager', header: 'Project Manager' },
            { field: 'startDate', header: 'Start Date' },
            { field: 'endDate', header: 'End Date' },
            { field: 'isClosed', header: 'Status' },
            { field: 'button', header: '' },
        ];
    }
};
ProjectListSupervisorComponent.ctorParameters = () => [
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
    { type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ProjectListSupervisorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-list-supervisor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-list-supervisor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-list-supervisor.component.css */ "./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.css")).default]
    })
], ProjectListSupervisorComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/project-list/project-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-list/project-list.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/projects/pages/project-list/project-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-list/project-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/authentication.service */ "./src/app/core/service/authentication.service.ts");





let ProjectListComponent = class ProjectListComponent {
    constructor(employeeService, projectService, authService) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.authService = authService;
        this.displayProject = [];
    }
    ngOnInit() {
        this.initProjects();
        this.initCols();
    }
    initProjects() {
        this.projectService
            .getProjects(this.authService.currentUserValue.employeeId)
            .subscribe(res => {
            console.log(res);
            res.forEach(i => {
                console.log(i);
                let projectManagerName = ' ';
                if (i.projectManager) {
                    projectManagerName = i.projectManager.empFirstName + " " + i.projectManager.empLastName;
                }
                this.displayProject.push({
                    "projectId": i.projectId,
                    "projectName": i.projectName,
                    "projectManager": projectManagerName,
                    "startDate": i.startDate,
                    "endDate": i.endDate,
                    "isClosed": !i.isClosed
                });
            });
            console.log(this.displayProject);
        });
    }
    initCols() {
        this.cols = [
            { field: 'projectName', header: 'Project Name' },
            { field: 'projectManager', header: 'Project Manager' },
            { field: 'startDate', header: 'Start Date' },
            { field: 'endDate', header: 'End Date' },
            { field: 'isClosed', header: 'Status' },
            { field: 'button', header: '' },
        ];
    }
};
ProjectListComponent.ctorParameters = () => [
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] },
    { type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-list/project-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-list.component.css */ "./src/app/modules/projects/pages/project-list/project-list.component.css")).default]
    })
], ProjectListComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/project-management/project-management.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-management/project-management.component.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC1tYW5hZ2VtZW50L3Byb2plY3QtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/projects/pages/project-management/project-management.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-management/project-management.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ProjectManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectManagementComponent", function() { return ProjectManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");






let ProjectManagementComponent = class ProjectManagementComponent {
    constructor(router, location, route, projectService) {
        this.router = router;
        this.location = location;
        this.route = route;
        this.projectService = projectService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__["MODE"].Read;
        this.alerts = {};
        this.activeIndex = 1;
        let path = location.path();
        if (path.includes("wp") || path.includes("reports")) {
            this.toTab0();
        }
        ;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('projectId');
            this.projectService.getProject(id).subscribe(e => this.project = e);
        });
        this.router.events.subscribe((data) => {
            this.toTab0();
        });
    }
    toTab0() {
        this.activeIndex = 0;
    }
    onChangeTab(event) {
        this.activeIndex = event.index;
        console.log(this.activeIndex);
    }
};
ProjectManagementComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }
];
ProjectManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-management/project-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-management.component.css */ "./src/app/modules/projects/pages/project-management/project-management.component.css")).default]
    })
], ProjectManagementComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC12aWV3LXN1cGVydmlzb3IvcHJvamVjdC12aWV3LXN1cGVydmlzb3IuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ProjectViewSupervisorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewSupervisorComponent", function() { return ProjectViewSupervisorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/my-toast.service */ "./src/app/core/service/my-toast.service.ts");






let ProjectViewSupervisorComponent = class ProjectViewSupervisorComponent {
    constructor(route, projectService, myToastService, router) {
        this.route = route;
        this.projectService = projectService;
        this.myToastService = myToastService;
        this.router = router;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__["MODE"].Update;
        this.teamMembers = null;
        this.employeeDropdown = null;
        // project validation
        this.validStartDate = false;
        this.alerts = {};
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('projectId');
            this.projectService.getProject(id).subscribe(e => this.project = e);
        });
    }
    onUpdate() {
        console.log("POST project Member management");
        console.log(JSON.stringify(this.project));
        this.projectService.postProject(this.project).subscribe(_ => {
            this.myToastService.addSuccess(`Project Members Saved Successfully`, `${new Date().toLocaleString()}`);
            this.router.navigate([`/content/projects/view/${this.project.projectId}`]);
        });
    }
    //brings user back to projects list
    onCancel(e) {
        this.router.navigate(['/content/projects']);
    }
    validatePage() {
        return true;
    }
    displayErrorMsg(fieldName) {
        return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
    }
};
ProjectViewSupervisorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"] },
    { type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_5__["MyToastService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
ProjectViewSupervisorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-view-supervisor',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-view-supervisor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-view-supervisor.component.css */ "./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.css")).default]
    })
], ProjectViewSupervisorComponent);



/***/ }),

/***/ "./src/app/modules/projects/pages/project-view/project-view.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-view/project-view.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvamVjdHMvcGFnZXMvcHJvamVjdC12aWV3L3Byb2plY3Qtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/projects/pages/project-view/project-view.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/projects/pages/project-view/project-view.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProjectViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectViewComponent", function() { return ProjectViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let ProjectViewComponent = class ProjectViewComponent {
    constructor(route, projectService) {
        this.route = route;
        this.projectService = projectService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_3__["MODE"].Read;
        this.alerts = {};
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var id = params.get('projectId');
            this.projectService.getProject(id).subscribe(e => this.project = e);
        });
    }
};
ProjectViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }
];
ProjectViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/projects/pages/project-view/project-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-view.component.css */ "./src/app/modules/projects/pages/project-view/project-view.component.css")).default]
    })
], ProjectViewComponent);



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
/* harmony import */ var _pages_project_creation_project_creation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/project-creation/project-creation.component */ "./src/app/modules/projects/pages/project-creation/project-creation.component.ts");
/* harmony import */ var _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/project-list/project-list.component */ "./src/app/modules/projects/pages/project-list/project-list.component.ts");
/* harmony import */ var _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project-edit/project-edit.component */ "./src/app/modules/projects/pages/project-edit/project-edit.component.ts");
/* harmony import */ var _wp_pages_wp_view_wp_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../wp/pages/wp-view/wp-view.component */ "./src/app/modules/wp/pages/wp-view/wp-view.component.ts");
/* harmony import */ var _wp_pages_wp_edit_wp_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wp/pages/wp-edit/wp-edit.component */ "./src/app/modules/wp/pages/wp-edit/wp-edit.component.ts");
/* harmony import */ var _wp_pages_wp_create_wp_create_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../wp/pages/wp-create/wp-create.component */ "./src/app/modules/wp/pages/wp-create/wp-create.component.ts");
/* harmony import */ var _pages_project_management_project_management_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/project-management/project-management.component */ "./src/app/modules/projects/pages/project-management/project-management.component.ts");
/* harmony import */ var _pages_empty_empty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/empty/empty.component */ "./src/app/modules/projects/pages/empty/empty.component.ts");
/* harmony import */ var _reports_pages_project_report_view_project_report_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../reports/pages/project-report-view/project-report-view.component */ "./src/app/modules/reports/pages/project-report-view/project-report-view.component.ts");
/* harmony import */ var _reports_pages_wp_report_view_wp_report_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../reports/pages/wp-report-view/wp-report-view.component */ "./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.ts");
/* harmony import */ var _reports_pages_wp_report_creation_wp_report_creation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../reports/pages/wp-report-creation/wp-report-creation.component */ "./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.ts");
/* harmony import */ var _wp_pages_wp_management_wp_management_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../wp/pages/wp-management/wp-management.component */ "./src/app/modules/wp/pages/wp-management/wp-management.component.ts");
/* harmony import */ var _pages_project_list_supervisor_project_list_supervisor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/project-list-supervisor/project-list-supervisor.component */ "./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.ts");
/* harmony import */ var _pages_project_view_supervisor_project_view_supervisor_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/project-view-supervisor/project-view-supervisor.component */ "./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.ts");

















const routes = [
    { path: '', component: _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"], data: { breadcrumb: null } },
    { path: 'supervisor/projectlist', component: _pages_project_list_supervisor_project_list_supervisor_component__WEBPACK_IMPORTED_MODULE_15__["ProjectListSupervisorComponent"], data: { breadcrumb: 'Project List' } },
    { path: 'supervisor/projectlist/view/:projectId', component: _pages_project_view_supervisor_project_view_supervisor_component__WEBPACK_IMPORTED_MODULE_16__["ProjectViewSupervisorComponent"], data: { breadcrumb: 'Add Project Members' } },
    { path: 'edit/:projectId', component: _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEditComponent"], data: { breadcrumb: 'Project Edit' } },
    // { path: 'list', component: ProjectListComponent, data: { breadcrumb: 'Project List' } },
    { path: 'creation', component: _pages_project_creation_project_creation_component__WEBPACK_IMPORTED_MODULE_3__["ProjectCreationComponent"], data: { breadcrumb: 'Project Creation' } },
    {
        path: 'view/:projectId',
        component: _pages_project_management_project_management_component__WEBPACK_IMPORTED_MODULE_9__["ProjectManagementComponent"],
        data: { breadcrumb: 'Project' },
        children: [
            { path: '', component: _pages_empty_empty_component__WEBPACK_IMPORTED_MODULE_10__["EmptyComponent"], data: { breadcrumb: null } },
            // { path: 'wp/edit/:wpCode', component: WpEditComponent, data: { breadcrumb: 'Work Package Edit' } },
            // { path: 'wp/creation', component: WpCreateComponent, data: { breadcrumb: 'Work Package Creation' } },
            {
                path: 'wp/editwp/:wpCode',
                component: _wp_pages_wp_management_wp_management_component__WEBPACK_IMPORTED_MODULE_14__["WpManagementComponent"],
                data: { breadcrumb: 'Work Package Edit' },
                children: [
                    { path: '', component: _wp_pages_wp_edit_wp_edit_component__WEBPACK_IMPORTED_MODULE_7__["WpEditComponent"], data: { breadcrumb: '' } },
                ]
            },
            {
                path: 'wp/createwp',
                component: _wp_pages_wp_create_wp_create_component__WEBPACK_IMPORTED_MODULE_8__["WpCreateComponent"],
                data: { breadcrumb: 'Work Package creation' },
            },
            {
                path: 'wp/viewwp/:wpCode',
                component: _wp_pages_wp_management_wp_management_component__WEBPACK_IMPORTED_MODULE_14__["WpManagementComponent"],
                data: { breadcrumb: 'Work Package' },
                children: [
                    { path: '', component: _wp_pages_wp_view_wp_view_component__WEBPACK_IMPORTED_MODULE_6__["WpViewComponent"], data: { breadcrumb: '' } },
                ]
            },
            { path: 'reports/ProjectCostPerformanceReport/view/:projectReportId', component: _reports_pages_project_report_view_project_report_view_component__WEBPACK_IMPORTED_MODULE_11__["ProjectReportViewComponent"], data: { breadcrumb: 'Project Cost Performance Report' } },
            { path: 'reports/WorkPackageReport/view/:wpReportId', component: _reports_pages_wp_report_view_wp_report_view_component__WEBPACK_IMPORTED_MODULE_12__["WpReportViewComponent"], data: { breadcrumb: 'Work Package Report' } },
            { path: 'reports/WorkPackageReport/creation/:wpId/:projectId', component: _reports_pages_wp_report_creation_wp_report_creation_component__WEBPACK_IMPORTED_MODULE_13__["WpReportCreationComponent"], data: { breadcrumb: 'Create Work Package Report' } },
        ]
    },
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
/* harmony import */ var _pages_project_creation_project_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/project-creation/project-creation.component */ "./src/app/modules/projects/pages/project-creation/project-creation.component.ts");
/* harmony import */ var _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/project-edit/project-edit.component */ "./src/app/modules/projects/pages/project-edit/project-edit.component.ts");
/* harmony import */ var _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/project-list/project-list.component */ "./src/app/modules/projects/pages/project-list/project-list.component.ts");
/* harmony import */ var _pages_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/project-view/project-view.component */ "./src/app/modules/projects/pages/project-view/project-view.component.ts");
/* harmony import */ var _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/project/project.component */ "./src/app/modules/projects/components/project/project.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/fesm2015/primeng-calendar.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/fesm2015/primeng-listbox.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/fesm2015/primeng-multiselect.js");
/* harmony import */ var _wp_wp_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../wp/wp.module */ "./src/app/modules/wp/wp.module.ts");
/* harmony import */ var _pages_project_management_project_management_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/project-management/project-management.component */ "./src/app/modules/projects/pages/project-management/project-management.component.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");
/* harmony import */ var _pages_empty_empty_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/empty/empty.component */ "./src/app/modules/projects/pages/empty/empty.component.ts");
/* harmony import */ var _reports_reports_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../reports/reports.module */ "./src/app/modules/reports/reports.module.ts");
/* harmony import */ var _pages_project_list_supervisor_project_list_supervisor_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/project-list-supervisor/project-list-supervisor.component */ "./src/app/modules/projects/pages/project-list-supervisor/project-list-supervisor.component.ts");
/* harmony import */ var _pages_project_view_supervisor_project_view_supervisor_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/project-view-supervisor/project-view-supervisor.component */ "./src/app/modules/projects/pages/project-view-supervisor/project-view-supervisor.component.ts");































let ProjectsModule = class ProjectsModule {
};
ProjectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_project_creation_project_creation_component__WEBPACK_IMPORTED_MODULE_4__["ProjectCreationComponent"], _pages_project_edit_project_edit_component__WEBPACK_IMPORTED_MODULE_5__["ProjectEditComponent"], _pages_project_list_project_list_component__WEBPACK_IMPORTED_MODULE_6__["ProjectListComponent"], _pages_project_view_project_view_component__WEBPACK_IMPORTED_MODULE_7__["ProjectViewComponent"], _components_project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"], _pages_project_management_project_management_component__WEBPACK_IMPORTED_MODULE_25__["ProjectManagementComponent"], _pages_empty_empty_component__WEBPACK_IMPORTED_MODULE_27__["EmptyComponent"], _pages_project_list_supervisor_project_list_supervisor_component__WEBPACK_IMPORTED_MODULE_29__["ProjectListSupervisorComponent"], _pages_project_view_supervisor_project_view_supervisor_component__WEBPACK_IMPORTED_MODULE_30__["ProjectViewSupervisorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _projects_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_15__["SharedModule"],
            _wp_wp_module__WEBPACK_IMPORTED_MODULE_24__["WpModule"],
            _reports_reports_module__WEBPACK_IMPORTED_MODULE_28__["ReportsModule"],
            //material
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"],
            //primeng
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__["DropdownModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_18__["TableModule"],
            primeng_calendar__WEBPACK_IMPORTED_MODULE_11__["CalendarModule"],
            primeng_listbox__WEBPACK_IMPORTED_MODULE_12__["ListboxModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_20__["InputTextModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_21__["ButtonModule"],
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_23__["MultiSelectModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_26__["TabViewModule"],
            // bootstrap
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_14__["AlertModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_16__["ModalModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_22__["BsDatepickerModule"].forRoot(),
        ]
    })
], ProjectsModule);



/***/ }),

/***/ "./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.css":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.css ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21wb25lbnQvcHJvamVjdC1yZXBvcnQtcG0tdmlldy9wcm9qZWN0LXJlcG9ydC1wbS12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ProjectReportPmViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReportPmViewComponent", function() { return ProjectReportPmViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProjectReportPmViewComponent = class ProjectReportPmViewComponent {
    constructor() { }
    ngOnInit() {
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'vin', header: 'Vin' }
        ];
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectReportPmViewComponent.prototype, "projectReport", void 0);
ProjectReportPmViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-report-pm-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-report-pm-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-report-pm-view.component.css */ "./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.css")).default]
    })
], ProjectReportPmViewComponent);



/***/ }),

/***/ "./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.css ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21wb25lbnQvd3AtcmVwb3J0LXN0ZXBwZXItY3JlYXRpb24vd3AtcmVwb3J0LXN0ZXBwZXItY3JlYXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: WpReportStepperCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpReportStepperCreationComponent", function() { return WpReportStepperCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_validator_DateRangeValidator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/validator/DateRangeValidator */ "./src/app/shared/validator/DateRangeValidator.ts");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/report/report.service */ "./src/app/core/service/report/report.service.ts");






let WpReportStepperCreationComponent = class WpReportStepperCreationComponent {
    constructor(_formBuilder, employeeService, reportService) {
        this._formBuilder = _formBuilder;
        this.employeeService = employeeService;
        this.reportService = reportService;
        this.cancelEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.submitEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            startDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            endDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, { validators: src_app_shared_validator_DateRangeValidator__WEBPACK_IMPORTED_MODULE_3__["dateRangeValidator"] });
    }
    get f() { return this.firstFormGroup.controls; }
    onStepChange(event) {
        console.log(event);
        console.log(event.selectedIndex);
        if (event.selectedIndex === 1) {
            this.wpr.details.forEach(row => {
                this.reportService
                    .calculateActual(this.wpr.workPackageCode, this.f.startDate.value, this.f.endDate.value, row.labourGradeId)
                    .subscribe(result => {
                    console.log(result);
                    row.totalDays = result;
                    this.updateEAC(row);
                    this.updateComplete(row);
                    this.updateVariance(row);
                });
            });
        }
    }
    // (estimated - budget) / budget
    updateVariance(row) {
        if (isNaN(row.reETC))
            return;
        if (isNaN(row.reBudgetDay))
            return;
        let estimate = row.reEAC;
        let budget = row.reBudgetDay;
        row.variance = (estimate - budget) / budget * 100;
        if (isNaN(row.variance) || !isFinite(row.variance))
            row.variance = 0;
        return row.variance;
    }
    // (actual) / estimate
    updateComplete(row) {
        if (isNaN(row.totalDays))
            return;
        if (isNaN(row.reETC))
            return;
        let estimate = row.reEAC;
        let actual = row.totalDays;
        row.complete = actual / estimate * 100;
        if (isNaN(row.complete) || !isFinite(row.complete))
            row.complete = 0;
        return row.complete;
    }
    updateEAC(row) {
        if (isNaN(row.totalDays))
            return;
        if (isNaN(row.reETC))
            return;
        let estimate = row.reETC;
        let actual = row.totalDays;
        row.reEAC = 0 + estimate + actual;
    }
    onEditComplete(event) {
        console.log(event);
        let row = event.data;
        this.updateEAC(row);
        this.updateComplete(row);
        this.updateVariance(row);
    }
    onSubmit(event) {
        this.wpr.startDate = this.firstFormGroup.controls.startDate.value;
        this.wpr.endDate = this.firstFormGroup.controls.endDate.value;
        this.submitEvent.emit('payload');
    }
    onCancel(event) {
        this.cancelEvent.emit('payload');
    }
};
WpReportStepperCreationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] },
    { type: src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WpReportStepperCreationComponent.prototype, "cancelEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WpReportStepperCreationComponent.prototype, "submitEvent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpReportStepperCreationComponent.prototype, "wpr", void 0);
WpReportStepperCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-report-stepper-creation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-report-stepper-creation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-report-stepper-creation.component.css */ "./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.css")).default]
    })
], WpReportStepperCreationComponent);



/***/ }),

/***/ "./src/app/modules/reports/component/wp-report/wp-report.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/reports/component/wp-report/wp-report.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9jb21wb25lbnQvd3AtcmVwb3J0L3dwLXJlcG9ydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/reports/component/wp-report/wp-report.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/reports/component/wp-report/wp-report.component.ts ***!
  \****************************************************************************/
/*! exports provided: WpReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpReportComponent", function() { return WpReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WpReportComponent = class WpReportComponent {
    constructor() { }
    ngOnInit() {
    }
    /** exist edit field */
    onEditComplete(event) {
    }
    /** validate RE entry */
    validate(hr) {
        return true;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpReportComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpReportComponent.prototype, "wpr", void 0);
WpReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-report',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-report.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/component/wp-report/wp-report.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-report.component.css */ "./src/app/modules/reports/component/wp-report/wp-report.component.css")).default]
    })
], WpReportComponent);



/***/ }),

/***/ "./src/app/modules/reports/pages/project-report-list/project-report-list.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/reports/pages/project-report-list/project-report-list.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9wYWdlcy9wcm9qZWN0LXJlcG9ydC1saXN0L3Byb2plY3QtcmVwb3J0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/reports/pages/project-report-list/project-report-list.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/pages/project-report-list/project-report-list.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReportListComponent", function() { return ProjectReportListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/report/report.service */ "./src/app/core/service/report/report.service.ts");



let ProjectReportListComponent = class ProjectReportListComponent {
    constructor(reportService) {
        this.reportService = reportService;
        this.displayReports = [];
    }
    ngOnInit() {
        this.cols = [
            { field: 'endDate', header: 'Month' },
            { field: 'reportDate', header: 'Report Date' },
            { field: 'startDate', header: 'Start Date' },
            { field: 'endDate', header: 'End Date' },
        ];
        this.populateReports();
    }
    populateReports() {
        this.reportService.getAllProjectReports(this.projectId)
            .subscribe(res => {
            res.forEach(r => {
                this.displayReports.push({
                    'reportDate': new Date(r.reportDate),
                    'startDate': new Date(r.startDate),
                    'endDate': new Date(r.endDate),
                    'projectReportId': r.projectReportId
                });
            });
        });
    }
};
ProjectReportListComponent.ctorParameters = () => [
    { type: src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProjectReportListComponent.prototype, "projectId", void 0);
ProjectReportListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-report-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-report-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/project-report-list/project-report-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-report-list.component.css */ "./src/app/modules/reports/pages/project-report-list/project-report-list.component.css")).default]
    })
], ProjectReportListComponent);



/***/ }),

/***/ "./src/app/modules/reports/pages/project-report-view/project-report-view.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/reports/pages/project-report-view/project-report-view.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9wYWdlcy9wcm9qZWN0LXJlcG9ydC12aWV3L3Byb2plY3QtcmVwb3J0LXZpZXcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/reports/pages/project-report-view/project-report-view.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/reports/pages/project-report-view/project-report-view.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ProjectReportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectReportViewComponent", function() { return ProjectReportViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/report/report.service */ "./src/app/core/service/report/report.service.ts");



let ProjectReportViewComponent = class ProjectReportViewComponent {
    constructor(ReportService) {
        this.ReportService = ReportService;
        this.viewMode = 'pm';
    }
    ngOnInit() {
        this.ReportService.getProjectReport('ew').subscribe(r => {
            this.projectReport = r;
            console.log(this.projectReport);
            this.preparePmView(r);
            this.prepareReView(r);
        });
    }
    preparePmView(r) {
        let data = [];
        r.lowWpStatus.forEach(lw => {
            data.push(lw);
        });
        r.highWpStatus.forEach(hw => {
            data.push(hw);
        });
        this.pmData = data;
        this.pmViewCols = [
            { field: 'workPackageCode', header: 'Code' },
            { field: 'workPackageName', header: 'Name' },
            { field: 'wpReBudget', header: 'RE Budget' },
            { field: 'wpActualSepnds', header: 'ACWP' },
            { field: 'wpPmEAC', header: 'PM EAC' },
            { field: 'wpPmVariance', header: 'PM Variance' },
            { field: 'wpPmCompletion', header: 'PM Completion' },
            { field: 'isClosed', header: 'Status' },
            { field: 'engineersInitials', header: 'Members' },
        ];
    }
    prepareReView(r) {
        let data = [];
        r.lowWpStatus.forEach(lw => {
            data.push(lw);
        });
        this.reData = data;
        this.reViewCols = [
            { field: 'workPackageCode', header: 'Code' },
            { field: 'workPackageName', header: 'Name' },
            { field: 'wpReBudget', header: 'RE Budget' },
            { field: 'wpActualSepnds', header: 'ACWP' },
            { field: 'wpReEAC', header: 'RE EAC' },
            { field: 'wpReVariance', header: 'RE Variance' },
            { field: 'wpReCompletion', header: 'RE Completion' },
            { field: 'isClosed', header: 'Status' },
            { field: 'engineersInitials', header: 'Members' }
        ];
    }
};
ProjectReportViewComponent.ctorParameters = () => [
    { type: src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }
];
ProjectReportViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-project-report-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./project-report-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/project-report-view/project-report-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./project-report-view.component.css */ "./src/app/modules/reports/pages/project-report-view/project-report-view.component.css")).default]
    })
], ProjectReportViewComponent);



/***/ }),

/***/ "./src/app/modules/reports/pages/reports.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/reports/pages/reports.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9wYWdlcy9yZXBvcnRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/reports/pages/reports.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/reports/pages/reports.component.ts ***!
  \************************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReportsComponent = class ReportsComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReportsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reports',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reports.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/reports.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reports.component.css */ "./src/app/modules/reports/pages/reports.component.css")).default]
    })
], ReportsComponent);



/***/ }),

/***/ "./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.css ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9wYWdlcy93cC1yZXBvcnQtY3JlYXRpb24vd3AtcmVwb3J0LWNyZWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.ts ***!
  \******************************************************************************************/
/*! exports provided: WpReportCreationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpReportCreationComponent", function() { return WpReportCreationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var src_app_shared_model_WPReport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/model/WPReport */ "./src/app/shared/model/WPReport.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/service/report/report.service */ "./src/app/core/service/report/report.service.ts");
/* harmony import */ var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/service/project/project.service */ "./src/app/core/service/project/project.service.ts");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/core/service/wp/wp.service */ "./src/app/core/service/wp/wp.service.ts");









let WpReportCreationComponent = class WpReportCreationComponent {
    constructor(route, reportService, employeeService, projectService, wpService) {
        this.route = route;
        this.reportService = reportService;
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.wpService = wpService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__["MODE"].Create;
        this.dataReady = false;
        this.taskComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.fetchAllLabourGrades();
        this.prepareEmptyReport();
    }
    prepareEmptyReport() {
        this.route.paramMap.subscribe(params => {
            this.wpr = new src_app_shared_model_WPReport__WEBPACK_IMPORTED_MODULE_3__["WPReport"]();
            this.wpService.getWpByWpCode(this.wpCode).subscribe(wp => {
                this.wpr.copyWPinfo(wp);
                this.wpr.initData();
                this.updateReBugetDay();
            });
            //TODO: call projectService to get project info.
            // this.wpr.copyProjectInfo(p);
            //TODO: call wpService to get wp info.
            // this.wpr.copyWPinfo(wp);   
            //NOTE: below is the sample result of the previous call completed.
        });
    }
    fetchAllLabourGrades() {
        this.employeeService.getLabourGrades().subscribe(result => this.populateDetails(result));
    }
    populateDetails(labourGrades) {
        console.log(labourGrades);
        labourGrades.forEach(grade => {
            this.wpr.details.push({
                "labourGradeId": grade.labourGradeId,
                "labourGradeName": grade.labourGradeName,
                "reBudgetDay": 0,
                "totalDays": 0,
                "reETC": 0,
                "reEAC": 0,
                "variance": 0,
                "complete": 0
            });
        });
    }
    updateReBugetDay() {
        this.wpr.details.forEach(d => {
            this.reportService.getReBudgetDays(this.wpr.workPackageCode, d.labourGradeId).subscribe(res => d.reBudgetDay = res);
        });
    }
    submitReport() {
        this.reportService.postWpReport(this.wpr);
        this.taskComplete.emit('onSubmit');
    }
    cancelEvent() {
        this.taskComplete.emit('onSubmit');
    }
};
WpReportCreationComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_5__["ReportService"] },
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"] },
    { type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] },
    { type: src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_8__["WpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpReportCreationComponent.prototype, "wpCode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WpReportCreationComponent.prototype, "taskComplete", void 0);
WpReportCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-report-creation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-report-creation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-report-creation.component.css */ "./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.css")).default]
    })
], WpReportCreationComponent);



/***/ }),

/***/ "./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9wYWdlcy93cC1yZXBvcnQtbGlzdC93cC1yZXBvcnQtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WpReportListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpReportListComponent", function() { return WpReportListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/report/report.service */ "./src/app/core/service/report/report.service.ts");



let WpReportListComponent = class WpReportListComponent {
    constructor(reportService) {
        this.reportService = reportService;
        this.wpCode = 32; //MUST HAVE
        this.goReportPage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fireReportCreation = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.displayReports = [];
    }
    ngOnInit() {
        this.cols = [
            { field: 'endDate', header: 'Week Number' },
            { field: 'reportDate', header: 'Report Date' },
            { field: 'startDate', header: 'Start Date' },
            { field: 'endDate', header: 'End Date' },
        ];
        this.populateReports();
    }
    onWpReportClick(reportId) {
        this.goReportPage.emit(`${reportId}`);
    }
    onCreatClick(event) {
        this.fireReportCreation.emit('payload');
    }
    populateReports() {
        this.reportService.getAllWpReports(this.wpCode)
            .subscribe(res => {
            res.forEach(r => {
                this.displayReports.push({
                    'reportDate': new Date(r.reportDate),
                    'startDate': new Date(r.startDate),
                    'endDate': new Date(r.endDate),
                    'workPackageReportId': r.workPackageReportId
                });
            });
        });
    }
};
WpReportListComponent.ctorParameters = () => [
    { type: src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpReportListComponent.prototype, "wpCode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WpReportListComponent.prototype, "goReportPage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WpReportListComponent.prototype, "fireReportCreation", void 0);
WpReportListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-report-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-report-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-report-list.component.css */ "./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.css")).default]
    })
], WpReportListComponent);



/***/ }),

/***/ "./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVwb3J0cy9wYWdlcy93cC1yZXBvcnQtdmlldy93cC1yZXBvcnQtdmlldy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.ts ***!
  \**********************************************************************************/
/*! exports provided: WpReportViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpReportViewComponent", function() { return WpReportViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/report/report.service */ "./src/app/core/service/report/report.service.ts");





let WpReportViewComponent = class WpReportViewComponent {
    constructor(route, reportService) {
        this.route = route;
        this.reportService = reportService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__["MODE"].Read;
        this.wpr = null;
    }
    ngOnInit() {
        // this.route.paramMap.subscribe(params => {
        //   var wpReportId = params.get('wpReportId');
        //   
        // });
        this.reportService.getWpReport(this.wpReportId).subscribe(r => this.wpr = r);
    }
};
WpReportViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: src_app_core_service_report_report_service__WEBPACK_IMPORTED_MODULE_4__["ReportService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpReportViewComponent.prototype, "wpReportId", void 0);
WpReportViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-report-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-report-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-report-view.component.css */ "./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.css")).default]
    })
], WpReportViewComponent);



/***/ }),

/***/ "./src/app/modules/reports/reports-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/reports/reports-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ReportsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function() { return ReportsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/reports.component */ "./src/app/modules/reports/pages/reports.component.ts");
/* harmony import */ var _pages_wp_report_creation_wp_report_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/wp-report-creation/wp-report-creation.component */ "./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.ts");
/* harmony import */ var _pages_wp_report_view_wp_report_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/wp-report-view/wp-report-view.component */ "./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.ts");
/* harmony import */ var _pages_project_report_view_project_report_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/project-report-view/project-report-view.component */ "./src/app/modules/reports/pages/project-report-view/project-report-view.component.ts");







const routes = [
    { path: '', component: _pages_reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"], data: { breadcrumb: 'report list' } },
    { path: 'ProjectCostPerformanceReport/view/:projectReportId', component: _pages_project_report_view_project_report_view_component__WEBPACK_IMPORTED_MODULE_6__["ProjectReportViewComponent"], data: { breadcrumb: 'Project Cost Performance Report' } },
    { path: 'WorkPackageReport/view/:wprId', component: _pages_wp_report_view_wp_report_view_component__WEBPACK_IMPORTED_MODULE_5__["WpReportViewComponent"], data: { breadcrumb: 'View Work Package Report' } },
    { path: 'WorkPackageReport/creation/:wpId/:projectId', component: _pages_wp_report_creation_wp_report_creation_component__WEBPACK_IMPORTED_MODULE_4__["WpReportCreationComponent"], data: { breadcrumb: 'Create Work Package Report' } },
];
let ReportsRoutingModule = class ReportsRoutingModule {
};
ReportsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ReportsRoutingModule);



/***/ }),

/***/ "./src/app/modules/reports/reports.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/reports/reports.module.ts ***!
  \***************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reports-routing.module */ "./src/app/modules/reports/reports-routing.module.ts");
/* harmony import */ var _pages_reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reports.component */ "./src/app/modules/reports/pages/reports.component.ts");
/* harmony import */ var _pages_wp_report_creation_wp_report_creation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/wp-report-creation/wp-report-creation.component */ "./src/app/modules/reports/pages/wp-report-creation/wp-report-creation.component.ts");
/* harmony import */ var _component_wp_report_wp_report_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/wp-report/wp-report.component */ "./src/app/modules/reports/component/wp-report/wp-report.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _pages_wp_report_view_wp_report_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/wp-report-view/wp-report-view.component */ "./src/app/modules/reports/pages/wp-report-view/wp-report-view.component.ts");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var _component_wp_report_stepper_creation_wp_report_stepper_creation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/wp-report-stepper-creation/wp-report-stepper-creation.component */ "./src/app/modules/reports/component/wp-report-stepper-creation/wp-report-stepper-creation.component.ts");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm2015/stepper.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm2015/form-field.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _pages_project_report_list_project_report_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/project-report-list/project-report-list.component */ "./src/app/modules/reports/pages/project-report-list/project-report-list.component.ts");
/* harmony import */ var _pages_project_report_view_project_report_view_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/project-report-view/project-report-view.component */ "./src/app/modules/reports/pages/project-report-view/project-report-view.component.ts");
/* harmony import */ var _component_project_report_pm_view_project_report_pm_view_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/project-report-pm-view/project-report-pm-view.component */ "./src/app/modules/reports/component/project-report-pm-view/project-report-pm-view.component.ts");
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap/buttons */ "./node_modules/ngx-bootstrap/buttons/fesm2015/ngx-bootstrap-buttons.js");
/* harmony import */ var _pages_wp_report_list_wp_report_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/wp-report-list/wp-report-list.component */ "./src/app/modules/reports/pages/wp-report-list/wp-report-list.component.ts");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");

























let ReportsModule = class ReportsModule {
};
ReportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"],
            _pages_wp_report_creation_wp_report_creation_component__WEBPACK_IMPORTED_MODULE_5__["WpReportCreationComponent"],
            _component_wp_report_wp_report_component__WEBPACK_IMPORTED_MODULE_6__["WpReportComponent"],
            _pages_wp_report_view_wp_report_view_component__WEBPACK_IMPORTED_MODULE_11__["WpReportViewComponent"],
            _component_wp_report_stepper_creation_wp_report_stepper_creation_component__WEBPACK_IMPORTED_MODULE_13__["WpReportStepperCreationComponent"],
            _pages_project_report_list_project_report_list_component__WEBPACK_IMPORTED_MODULE_17__["ProjectReportListComponent"],
            _pages_project_report_view_project_report_view_component__WEBPACK_IMPORTED_MODULE_18__["ProjectReportViewComponent"],
            _component_project_report_pm_view_project_report_pm_view_component__WEBPACK_IMPORTED_MODULE_19__["ProjectReportPmViewComponent"],
            _pages_wp_report_list_wp_report_list_component__WEBPACK_IMPORTED_MODULE_21__["WpReportListComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"],
            _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            //material
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_14__["MatStepperModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
            //primeng
            primeng_table__WEBPACK_IMPORTED_MODULE_12__["TableModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_22__["InputTextModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_24__["DialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_23__["ButtonModule"],
            // bootstrap
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["AlertModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["ModalModule"].forRoot(),
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_9__["BsDatepickerModule"].forRoot(),
            ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_20__["ButtonsModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
        ],
        exports: [
            _pages_wp_report_creation_wp_report_creation_component__WEBPACK_IMPORTED_MODULE_5__["WpReportCreationComponent"],
            _pages_wp_report_view_wp_report_view_component__WEBPACK_IMPORTED_MODULE_11__["WpReportViewComponent"],
            _pages_project_report_list_project_report_list_component__WEBPACK_IMPORTED_MODULE_17__["ProjectReportListComponent"],
            _pages_project_report_view_project_report_view_component__WEBPACK_IMPORTED_MODULE_18__["ProjectReportViewComponent"],
            _pages_wp_report_list_wp_report_list_component__WEBPACK_IMPORTED_MODULE_21__["WpReportListComponent"]
        ]
    })
], ReportsModule);



/***/ }),

/***/ "./src/app/modules/wp/component/wp.component.css":
/*!*******************************************************!*\
  !*** ./src/app/modules/wp/component/wp.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".pass{\n    color:green;\n    font-style: normal;\n}\n.error{\n    color:red;\n    font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy93cC9jb21wb25lbnQvd3AuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3dwL2NvbXBvbmVudC93cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N7XG4gICAgY29sb3I6Z3JlZW47XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmVycm9ye1xuICAgIGNvbG9yOnJlZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59Il19 */");

/***/ }),

/***/ "./src/app/modules/wp/component/wp.component.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/wp/component/wp.component.ts ***!
  \******************************************************/
/*! exports provided: WpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpComponent", function() { return WpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/wp/wp.service */ "./src/app/core/service/wp/wp.service.ts");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");





let WpComponent = class WpComponent {
    constructor(wpService, empService) {
        this.wpService = wpService;
        this.empService = empService;
        this.projectId = 0; //must have an input for populating workers and wps
        this.employees = [];
        this.parentWPDropdown = null;
        this.engineerDropdown = null;
        this.workerDropdown = null;
        this.selectedWorkers = null;
        this.labourGrades = [];
        this.fireValidateWPCode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.allLabourGrade = [];
    }
    ngOnInit() {
        if (this.mode !== src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read)
            this.populateEngineerDropdown();
        if (this.mode !== src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read)
            this.populateParentDropdown();
        if (this.mode !== src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read)
            this.populateWorkerDropdown();
        this.initLabourGrades();
        this.initCols();
        this.AllLabourGrades();
    }
    AllLabourGrades() {
        this.allLabourGrade = [];
        this.empService.getLabourGrades().subscribe(grades => {
            // grades.forEach(g => {
            //   let line = {`${g.labourGradeId}`: g.labourGradeName};
            // })
            grades.forEach(g => this.allLabourGrade[g.labourGradeId] = g.labourGradeName);
        });
    }
    populateEngineerDropdown() {
        this.empService
            .getEmployeesWithinProject(this.projectId)
            .subscribe(employees => {
            this.engineerDropdown = [];
            employees.forEach(e => {
                this.engineerDropdown.push({
                    label: `${e.empFirstName} ${e.empLastName}`, value: {
                        "employeeId": e.employeeId,
                        "empFirstName": e.empFirstName,
                        "empLastName": e.empLastName
                    }
                });
            });
        });
    }
    populateParentDropdown() {
        this.wpService
            .getAllWpByProjectId(this.projectId)
            .subscribe(packages => {
            this.parentWPDropdown = [];
            this.parentWPDropdown.push({ label: `----`, value: null });
            packages.forEach(p => {
                this.parentWPDropdown.push({ label: `${p.workPackageCode} - ${p.workPackageTitle}`, value: p.workPackageCode });
            });
        });
    }
    populateWorkerDropdown() {
        this.empService
            .getEmployeesWithinProject(this.projectId)
            .subscribe(employees => {
            this.workerDropdown = [];
            employees.forEach(e => {
                this.workerDropdown.push({
                    label: `${e.empFirstName} ${e.empLastName}`, value: {
                        "employeeId": e.employeeId,
                        "empFirstName": e.empFirstName,
                        "empLastName": e.empLastName
                    }
                });
            });
        });
    }
    // teamMemberSelect() {
    //   var savedItems = [];
    //   if (this.wp.workers.length > 0) {
    //     savedItems = this.wp.workers;
    //   }
    //   var temp = [];
    //   for (var i = 0; i < this.employees.length; i++) {
    //     var label = this.employees[i].label.split(" ");
    //     var efn = label[0];
    //     var eln = label[1];
    //     var eid = this.employees[i].value;
    //     var tempJson = {
    //       "empFirstName": efn,
    //       "empLastName": eln,
    //       "employeeId": eid
    //     };
    //     temp.push(tempJson);
    //   }
    //   this.wp.workers = temp;
    // }
    numberOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
            return false;
        }
        return true;
    }
    initLabourGrades() {
        this.empService
            .getLabourGrades()
            .subscribe(grades => {
            this.labourGrades = [];
            grades.forEach(g => {
                this.labourGrades.push({ label: `${g.labourGradeName}`, value: g.labourGradeId });
            });
        });
    }
    initCols() {
        this.cols = [
            { field: 'labourGradeName', header: 'Labour Grade' },
            { field: 'pmEAC', header: 'Project Manager EAC' },
            { field: 'reBudget', header: 'Responsible Engineer Budget' }
        ];
    }
    onChangeWpCode() {
        this.fireValidateWPCode.emit('payload');
    }
    onChangeParentWp() {
        this.fireValidateWPCode.emit('payload');
    }
    /** exist edit field */
    onEditComplete(event) {
    }
};
WpComponent.ctorParameters = () => [
    { type: src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_2__["WpService"] },
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpComponent.prototype, "projectId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpComponent.prototype, "wp", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpComponent.prototype, "mode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpComponent.prototype, "employees", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpComponent.prototype, "validWpCode", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpComponent.prototype, "alerts", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], WpComponent.prototype, "fireValidateWPCode", void 0);
WpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/component/wp.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp.component.css */ "./src/app/modules/wp/component/wp.component.css")).default]
    })
], WpComponent);



/***/ }),

/***/ "./src/app/modules/wp/pages/wp-create/wp-create.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-create/wp-create.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd3AvcGFnZXMvd3AtY3JlYXRlL3dwLWNyZWF0ZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/wp/pages/wp-create/wp-create.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-create/wp-create.component.ts ***!
  \*******************************************************************/
/*! exports provided: WpCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpCreateComponent", function() { return WpCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_WorkPackage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/WorkPackage */ "./src/app/shared/model/WorkPackage.ts");
/* harmony import */ var src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/wp/wp.service */ "./src/app/core/service/wp/wp.service.ts");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/model/Alert */ "./src/app/shared/model/Alert.ts");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var src_app_shared_model_Project__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/model/Project */ "./src/app/shared/model/Project.ts");








let WpCreateComponent = class WpCreateComponent {
    constructor(wpService, employeeService) {
        this.wpService = wpService;
        this.employeeService = employeeService;
        this.employees = [];
        //wpCode validation
        this.validWpCode = false;
        this.alerts = {};
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__["MODE"].Create;
    }
    ngOnInit() {
        this.initWP();
        this.initLabourGradePlanning();
    }
    initWP() {
        // TODO: Remove this test sample
        this.project = new src_app_shared_model_Project__WEBPACK_IMPORTED_MODULE_7__["Project"]();
        this.project.projectCode = 21;
        this.project.projectName = "ds";
        this.project.projectId = 32;
        this.wp = new src_app_shared_model_WorkPackage__WEBPACK_IMPORTED_MODULE_2__["WorkPackage"]();
        this.wp.projectName = this.project.projectName;
        this.wp.projectCode = this.project.projectCode;
        const today = new Date();
        today.getTime();
        this.wp.issueDate = this.dateFormater(today);
        this.wp.isClosed = false;
    }
    // btn click event of creation
    onCreate(e) {
        if (!this.validatePage())
            return;
        console.log("POST wp");
        console.log(JSON.stringify(this.wp));
        this.wpService.postWorkPackage(this.wp).subscribe();
    }
    // btn click event of cancel
    onCancel(e) { }
    initLabourGradePlanning() {
        this.wp.pmPlannings = [];
        this.employeeService.getLabourGrades().subscribe(grades => {
            grades.forEach(grade => {
                let line = {
                    "labourGradeId": grade.labourGradeId,
                    "labourGradeName": grade.labourGradeName,
                    "pmEAC": 0,
                    "reBudget": 0
                };
                this.wp.pmPlannings.push(line);
            });
        });
    }
    validatePage() {
        var result = true;
        if (this.wp.workPackageTitle === null) {
            this.alerts['wpTitle'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `WP Title cannot be empty`);
            result = false;
        }
        if (!this.wp.contractor === null) {
            this.alerts['lastName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `Contractor cannot be empty`);
            result = false;
        }
        if (!this.validWpCode) {
            this.alerts['wpCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `WP Code: ${this.wp.workPackageCode} is not valid`);
            result = false;
        }
        /*if (!this.validEmployeeCode) {
           this.alerts['employeeCode'] = new Alert('danger', 5000, `Employee ID : ${this.employee.empCode} is not allowed`);
           result = false;
         } */
        this.employees.forEach(e => {
            var emp = e;
            this.wp.employees.push(emp);
        });
        return result;
    }
    displayErrorMsg(fieldName) {
        return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
    }
    validateWpCode() {
        this.validWpCode = true;
        this.alerts = {};
        this.wp.workPackageCode = this.wp.workPackageCode.toUpperCase();
        let code = this.wp.workPackageCode;
        var parentCode = null;
        if (this.wp.parentWorkPackageCode)
            parentCode = this.wp.parentWorkPackageCode['value'];
        // When there is no parent code
        if (!parentCode) {
            if (code.match(/^[A-Z]+$/) === null) {
                this.validWpCode = false;
                this.alerts['wpCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `Only allow alphabet characters if no parent work package code.`);
                return false;
            }
            this.validWpCode = true;
            return true;
        }
        // When there is parent code
        let regexp = new RegExp('\\b' + parentCode + '\\d{1}\\b');
        if (code.match(regexp) === null) {
            this.validWpCode = false;
            this.alerts['wpCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_5__["Alert"]('danger', 5000, `Only appending one more digits to parent code.`);
        }
    }
    onValueChange(value) {
        console.log(value);
        this.wp.issueDate = this.dateFormater(value);
    }
    dateFormater(d) {
        var yyyy = d.getFullYear();
        var MM = ("00" + (d.getMonth() + 1)).slice(-2);
        var dd = ("00" + (d.getDate())).slice(-2);
        return `${yyyy}-${MM}-${dd}`;
    }
    stringToDate(s) {
        var date = new Date(s);
        console.log(date);
        return date;
    }
};
WpCreateComponent.ctorParameters = () => [
    { type: src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_3__["WpService"] },
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpCreateComponent.prototype, "project", void 0);
WpCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-create',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-create/wp-create.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-create.component.css */ "./src/app/modules/wp/pages/wp-create/wp-create.component.css")).default]
    })
], WpCreateComponent);



/***/ }),

/***/ "./src/app/modules/wp/pages/wp-edit/wp-edit.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-edit/wp-edit.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd3AvcGFnZXMvd3AtZWRpdC93cC1lZGl0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/wp/pages/wp-edit/wp-edit.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-edit/wp-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: WpEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpEditComponent", function() { return WpEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/wp/wp.service */ "./src/app/core/service/wp/wp.service.ts");
/* harmony import */ var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/employee/employee.service */ "./src/app/core/service/employee/employee.service.ts");
/* harmony import */ var src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/model/Alert */ "./src/app/shared/model/Alert.ts");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let WpEditComponent = class WpEditComponent {
    constructor(route, wpService, employeeService) {
        this.route = route;
        this.wpService = wpService;
        this.employeeService = employeeService;
        this.employees = [];
        //wpCode validation
        this.validWpCode = false;
        this.alerts = {};
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_5__["MODE"].Create;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var code = params.get('wpCode');
            this.wpService.getWpByWpCode(code).subscribe(w => {
                this.wp = w;
                this.validateWpCode();
            });
        });
    }
    // btn click event of creation
    onUpdate(e) {
        if (!this.validatePage())
            return;
        console.log("POST employee");
        console.log(JSON.stringify(this.wp));
        this.wpService.postWorkPackage(this.wp).subscribe();
    }
    // btn click event of cancel
    onCancel(e) { }
    initLabourGradePlanning() {
        this.wp.pmPlannings = [];
        this.employeeService.getLabourGrades().subscribe(grades => {
            grades.forEach(grade => {
                let line = {
                    "labourGradeId": grade.labourGradeId,
                    "labourGradeName": grade.labourGradeName,
                    "pmEAC": 0,
                    "reBudget": 0
                };
                this.wp.pmPlannings.push(line);
            });
        });
    }
    validatePage() {
        var result = true;
        if (this.wp.workPackageTitle === null) {
            this.alerts['wpTitle'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `WP Title cannot be empty`);
            result = false;
        }
        if (!this.wp.contractor === null) {
            this.alerts['lastName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `Contractor cannot be empty`);
            result = false;
        }
        if (!this.validWpCode) {
            this.alerts['wpCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `WP Code: ${this.wp.workPackageCode} is not valid`);
            result = false;
        }
        /*if (!this.validEmployeeCode) {
           this.alerts['employeeCode'] = new Alert('danger', 5000, `Employee ID : ${this.employee.empCode} is not allowed`);
           result = false;
         } */
        this.employees.forEach(e => {
            var emp = e;
            this.wp.employees.push(emp);
        });
        console.log(this.wp.employees);
        return result;
    }
    displayErrorMsg(fieldName) {
        return (this.alerts[fieldName] != '') ? this.alerts[fieldName].msg : null;
    }
    validateWpCode() {
        this.validWpCode = true;
        this.alerts = {};
        this.wp.workPackageCode = this.wp.workPackageCode.toUpperCase();
        let code = this.wp.workPackageCode;
        var parentCode = null;
        if (this.wp.parentWorkPackageCode)
            parentCode = this.wp.parentWorkPackageCode['value'];
        // When there is no parent code
        if (!parentCode) {
            if (code.match(/^[A-Z]+$/) === null) {
                this.validWpCode = false;
                this.alerts['wpCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `Only allow alphabet characters if no parent work package code.`);
                return false;
            }
            this.validWpCode = true;
            return true;
        }
        // When there is parent code
        let regexp = new RegExp('\\b' + parentCode + '\\d{1}\\b');
        if (code.match(regexp) === null) {
            this.validWpCode = false;
            this.alerts['wpCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, `Only appending one more digits to parent code.`);
        }
    }
    onValueChange(value) {
        console.log(value);
        this.wp.issueDate = this.dateFormater(value);
    }
    dateFormater(d) {
        var yyyy = d.getFullYear();
        var MM = ("00" + (d.getMonth() + 1)).slice(-2);
        var dd = ("00" + (d.getDate())).slice(-2);
        return `${yyyy}-${MM}-${dd}`;
    }
    stringToDate(s) {
        var date = new Date(s);
        console.log(date);
        return date;
    }
};
WpEditComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_2__["WpService"] },
    { type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }
];
WpEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-edit/wp-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-edit.component.css */ "./src/app/modules/wp/pages/wp-edit/wp-edit.component.css")).default]
    })
], WpEditComponent);



/***/ }),

/***/ "./src/app/modules/wp/pages/wp-list/wp-list.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-list/wp-list.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd3AvcGFnZXMvd3AtbGlzdC93cC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/wp/pages/wp-list/wp-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-list/wp-list.component.ts ***!
  \***************************************************************/
/*! exports provided: WpListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpListComponent", function() { return WpListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/service/wp/wp.service */ "./src/app/core/service/wp/wp.service.ts");



let WpListComponent = class WpListComponent {
    constructor(wpService) {
        this.wpService = wpService;
        this.projectId = 30; // NOTE: MUST HAVE
        this.displayPackage = [];
    }
    ngOnInit() {
        this.initPackages();
        this.initCols();
    }
    initPackages() {
        this.wpService
            //TODO: FIX THE TEST NUMBER
            .getAllWpByProjectId(this.projectId)
            .subscribe(res => {
            res.forEach(i => {
                let reName = "(Not Assigned)";
                if (i.responsibleEngineer !== null)
                    reName = i.responsibleEngineer.empFirstName + " " + i.responsibleEngineer.empLastName;
                this.displayPackage.push({
                    "projectCode": i.projectCode,
                    "projectName": i.projectName,
                    "wpId": i.workPackageId,
                    "wpTitle": i.workPackageTitle,
                    "responsibleEngineer": reName,
                    "status": i.isClosed,
                    "wpCode": i.workPackageCode
                });
            });
        });
        console.log("display wps");
        console.log(this.displayPackage);
    }
    initCols() {
        this.cols = [
            { field: 'projectCode', header: 'Project Code' },
            { field: 'projectName', header: 'Project Name' },
            { field: 'wpCode', header: 'WP Code' },
            { field: 'wpTitle', header: 'WP Title' },
            { field: 'responsibleEngineer', header: 'Responsible Engineer' },
            { field: 'status', header: 'Status' },
            { field: 'button', header: '' },
        ];
    }
};
WpListComponent.ctorParameters = () => [
    { type: src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_2__["WpService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], WpListComponent.prototype, "projectId", void 0);
WpListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-list/wp-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-list.component.css */ "./src/app/modules/wp/pages/wp-list/wp-list.component.css")).default]
    })
], WpListComponent);



/***/ }),

/***/ "./src/app/modules/wp/pages/wp-management/wp-management.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-management/wp-management.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd3AvcGFnZXMvd3AtbWFuYWdlbWVudC93cC1tYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/wp/pages/wp-management/wp-management.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-management/wp-management.component.ts ***!
  \***************************************************************************/
/*! exports provided: WpManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpManagementComponent", function() { return WpManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let WpManagementComponent = class WpManagementComponent {
    constructor(location, router, route) {
        this.location = location;
        this.router = router;
        this.route = route;
        this.activeIndex = 1;
        this.workPackageCode = '';
        this.creationTab = [];
        this.wpReportId = [];
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            this.workPackageCode = params.get('wpCode');
        });
        this.refreshTab();
        this.router.events.subscribe((val) => {
            this.refreshTab();
        });
    }
    toTab0() {
        this.activeIndex = 0;
    }
    onChangeTab(event) {
        this.activeIndex = event.index;
        // let path = this.location.path();
        // let pathwp = path;
        // let regex = /viewwp|createwp|editwp/gi;
        // if (path.includes('reports'))
        //   pathwp = path.substring(0, path.indexOf('reports'));
        // if (event.index === 1) { this.router.navigate([`${pathwp.replace(regex, 'viewwp')}`]); }
        // else if (event.index === 2) { this.router.navigate([`${pathwp.replace(regex, 'editwp')}`]); }
        // else if (event.index === 4 && this.wpReportUrl) { this.router.navigate([this.wpReportUrl]); }
        // else if (event.index === 2) {
        //   path = path.replace(regex, 'createwp');
        //   this.router.navigate([`${path.substring(0)}`]);
        // }
    }
    refreshTab() {
        let path = this.location.path();
        // if (path.includes("WorkPackageReport")) { this.wpReportUrl = this.location.path(); this.activeIndex = 4; }
        if (path.includes("viewwp")) {
            this.activeIndex = 1;
        }
        else if (path.includes("editwp")) {
            this.activeIndex = 2;
        }
    }
    goReportPage(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(event);
            this.wpReportId.push(event);
            console.log(this.wpReportId);
            yield delay(300);
            this.activeIndex = this.wpReportId.length + 3 + this.creationTab.length;
        });
    }
    goCreation(event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.creationTab.push('creation');
            yield delay(300);
            this.activeIndex = this.creationTab.length + 3;
        });
    }
    taskComplete(event) {
        this.creationTab = [];
        this.activeIndex = 3;
    }
};
WpManagementComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
WpManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-management',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-management/wp-management.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-management.component.css */ "./src/app/modules/wp/pages/wp-management/wp-management.component.css")).default]
    })
], WpManagementComponent);

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


/***/ }),

/***/ "./src/app/modules/wp/pages/wp-view/wp-view.component.css":
/*!****************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-view/wp-view.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd3AvcGFnZXMvd3Atdmlldy93cC12aWV3LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/wp/pages/wp-view/wp-view.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/wp/pages/wp-view/wp-view.component.ts ***!
  \***************************************************************/
/*! exports provided: WpViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpViewComponent", function() { return WpViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/model/MODE */ "./src/app/shared/model/MODE.ts");
/* harmony import */ var src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/service/wp/wp.service */ "./src/app/core/service/wp/wp.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");






let WpViewComponent = class WpViewComponent {
    constructor(route, wpService, modalService) {
        this.route = route;
        this.wpService = wpService;
        this.modalService = modalService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__["MODE"].Read;
        this.alerts = {};
        this.validWpCode = true;
    }
    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            var code = params.get('wpCode');
            this.wpService.getWpByWpCode(code).subscribe(w => this.wp = w);
        });
    }
};
WpViewComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_core_service_wp_wp_service__WEBPACK_IMPORTED_MODULE_3__["WpService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"] }
];
WpViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-wp-view',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wp-view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/wp/pages/wp-view/wp-view.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wp-view.component.css */ "./src/app/modules/wp/pages/wp-view/wp-view.component.css")).default]
    })
], WpViewComponent);



/***/ }),

/***/ "./src/app/modules/wp/wp-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/wp/wp-routing.module.ts ***!
  \*************************************************/
/*! exports provided: WpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpRoutingModule", function() { return WpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
// { path: '', component: WpListComponent, data: { breadcrumb: null } },
// { path: 'view/:wpCode', component: WpViewComponent, data: { breadcrumb: 'Work Package View' } },
// { path: 'edit/:wpCode', component: WpEditComponent, data: { breadcrumb: 'Work Package Edit' } },
// { path: 'creation', component: WpCreateComponent, data: { breadcrumb: 'Work Package Creation' } }
];
let WpRoutingModule = class WpRoutingModule {
};
WpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WpRoutingModule);



/***/ }),

/***/ "./src/app/modules/wp/wp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/wp/wp.module.ts ***!
  \*****************************************/
/*! exports provided: WpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WpModule", function() { return WpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _wp_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wp-routing.module */ "./src/app/modules/wp/wp-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _component_wp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/wp.component */ "./src/app/modules/wp/component/wp.component.ts");
/* harmony import */ var _pages_wp_list_wp_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/wp-list/wp-list.component */ "./src/app/modules/wp/pages/wp-list/wp-list.component.ts");
/* harmony import */ var _pages_wp_create_wp_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/wp-create/wp-create.component */ "./src/app/modules/wp/pages/wp-create/wp-create.component.ts");
/* harmony import */ var _pages_wp_edit_wp_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/wp-edit/wp-edit.component */ "./src/app/modules/wp/pages/wp-edit/wp-edit.component.ts");
/* harmony import */ var _pages_wp_view_wp_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/wp-view/wp-view.component */ "./src/app/modules/wp/pages/wp-view/wp-view.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/fesm2015/primeng-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm2015/button-toggle.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/fesm2015/primeng-table.js");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm2015/ngx-bootstrap-datepicker.js");
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");
/* harmony import */ var primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/multiselect */ "./node_modules/primeng/fesm2015/primeng-multiselect.js");
/* harmony import */ var primeng_listbox__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/listbox */ "./node_modules/primeng/fesm2015/primeng-listbox.js");
/* harmony import */ var _reports_reports_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../reports/reports.module */ "./src/app/modules/reports/reports.module.ts");
/* harmony import */ var _pages_wp_management_wp_management_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/wp-management/wp-management.component */ "./src/app/modules/wp/pages/wp-management/wp-management.component.ts");
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! primeng/tabview */ "./node_modules/primeng/fesm2015/primeng-tabview.js");


























let WpModule = class WpModule {
};
WpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _component_wp_component__WEBPACK_IMPORTED_MODULE_5__["WpComponent"],
            _pages_wp_list_wp_list_component__WEBPACK_IMPORTED_MODULE_6__["WpListComponent"],
            _pages_wp_create_wp_create_component__WEBPACK_IMPORTED_MODULE_7__["WpCreateComponent"],
            _pages_wp_edit_wp_edit_component__WEBPACK_IMPORTED_MODULE_8__["WpEditComponent"],
            _pages_wp_view_wp_view_component__WEBPACK_IMPORTED_MODULE_9__["WpViewComponent"],
            _pages_wp_management_wp_management_component__WEBPACK_IMPORTED_MODULE_24__["WpManagementComponent"]
        ],
        imports: [
            //BrowserAnimationsModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            //SharedModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _wp_routing_module__WEBPACK_IMPORTED_MODULE_3__["WpRoutingModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _reports_reports_module__WEBPACK_IMPORTED_MODULE_23__["ReportsModule"],
            //material
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_12__["MatButtonToggleModule"],
            //primeng
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_10__["DropdownModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_16__["TableModule"],
            primeng_table__WEBPACK_IMPORTED_MODULE_16__["TableModule"],
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_18__["InputTextModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_19__["ButtonModule"],
            primeng_tabview__WEBPACK_IMPORTED_MODULE_25__["TabViewModule"],
            // bootstrap
            ngx_bootstrap__WEBPACK_IMPORTED_MODULE_13__["AlertModule"].forRoot(),
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"],
            ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_17__["BsDatepickerModule"].forRoot(),
            primeng_multiselect__WEBPACK_IMPORTED_MODULE_21__["MultiSelectModule"],
            primeng_listbox__WEBPACK_IMPORTED_MODULE_22__["ListboxModule"],
        ],
        exports: [
            _component_wp_component__WEBPACK_IMPORTED_MODULE_5__["WpComponent"],
            _pages_wp_list_wp_list_component__WEBPACK_IMPORTED_MODULE_6__["WpListComponent"],
            _pages_wp_create_wp_create_component__WEBPACK_IMPORTED_MODULE_7__["WpCreateComponent"],
            _pages_wp_edit_wp_edit_component__WEBPACK_IMPORTED_MODULE_8__["WpEditComponent"],
            _pages_wp_view_wp_view_component__WEBPACK_IMPORTED_MODULE_9__["WpViewComponent"],
            _pages_wp_management_wp_management_component__WEBPACK_IMPORTED_MODULE_24__["WpManagementComponent"]
        ]
    })
], WpModule);



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
/* harmony default export */ __webpack_exports__["default"] = (".margine_5{\n    margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2JyZWFkY3J1bWIvYnJlYWRjcnVtYi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcmdpbmVfNXtcbiAgICBtYXJnaW46IDVweDtcbn0iXX0= */");

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
/* harmony default export */ __webpack_exports__["default"] = (".pass{\n\n}\n.error{\n    /* display: block; */\n    padding-left: 5px;\n    padding-right: 5px;\n    color:red;\n    font-weight: bold;\n}\n.btn-link-normal{\n    background-color: transparent !important;\n    border-color: transparent !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7SUFDSSxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0FBQ3JCO0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsb0NBQW9DO0FBQ3hDIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZXNoZWV0L3RpbWVzaGVldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N7XG5cbn1cbi5lcnJvcntcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6cmVkO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnRuLWxpbmstbm9ybWFse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufSJdfQ== */");

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
        this.validationError = [];
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
    /** false means passed */
    invalidHr(hr) {
        var result = false;
        if (hr < 0 || hr >= 24) {
            this.validationError['hr'] = { msgs: 'Hour should be between 0 and 24', type: 'danger' };
            result = true;
        }
        // if (hr % 0.25 != 0 ) {
        //   this.validationError['hr'] = { msgs: 'Hour should in 0.25 unit', type: 'danger' };
        // }
        return result;
    }
    rowTotal(d) {
        let sum = 0;
        this.days.forEach(day => {
            if (d[day.value] === null) {
                d[day.value] = 0;
            }
            sum += +d[day.value];
        });
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
    deleteRow(p, index) {
        // console.log(p);
        // var temp = this.timesheet.timesheetRows
        // this.timesheet.timesheetRows = temp.filter(r => {
        //   if (r.workPackageId != p.workPackageId && r.projectId != p.projectId)
        //     return r;
        // })
        console.log(index);
        if (this.timesheet.timesheetRows.length > index) {
            this.timesheet.timesheetRows.splice(index, 1);
        }
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
    // onChangeInputDays(e){
    //   this.timesheet.timesheetRows.forEach(row=>{
    //     this.days.forEach(day=>{
    //       row
    //     })
    //   })
    // }
    onValueChange(value) {
        console.log(value);
        this.timesheet.weekEndingIn = this.dateFormater(value);
        this.timesheet.weekNumber = this.getWeek(value);
    }
    // getOvertime() {
    //   var total = this.timesheetTotal();
    //   if (total - 40 > 0)
    //     return total - 40;
    //   return 0;
    // }
    /** return true if pass */
    validatePage() {
        this.validationError = [];
        if (this.timesheet.weekEndingIn === null) {
            this.validationError['weekEndingIn'] = { msgs: 'Timesheet week cannot be empty', type: 'danger' };
        }
        // when timesheet over 40 hours
        let totalhrs = this.timesheetTotal();
        if (totalhrs > 40) {
            let flex = this.timesheet.flexTime;
            let overtime = this.timesheet.overTime;
            if ((40 - flex - overtime) !== 0) {
                this.validationError['flexTime'] = { msgs: 'You must allocate hours into flex or overtime', type: 'danger' };
            }
        }
        // not timesheet rows
        if (this.timesheet.timesheetRows.length == 0) {
            this.validationError['row'] = { msgs: 'You must have at least one timesheet row', type: 'danger' };
            return Object.keys(this.validationError).length == 0;
        }
        // row validation
        this.timesheet.timesheetRows.forEach(row => {
            if (row.projectId == 0) {
                this.validationError['projectId'] = { msgs: 'You must selected project', type: 'danger' };
            }
            if (row.workPackageId == 0) {
                this.validationError['workPackageId'] = { msgs: 'You must selected work page', type: 'danger' };
            }
            this.days.forEach(day => {
                this.invalidHr(row[day]);
            });
        });
        console.log(this.validationError);
        return Object.keys(this.validationError).length == 0;
    }
    dispalyError() {
        return Object.keys(this.validationError).length != 0;
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

/***/ "./src/app/shared/model/Alert.ts":
/*!***************************************!*\
  !*** ./src/app/shared/model/Alert.ts ***!
  \***************************************/
/*! exports provided: Alert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return Alert; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Alert {
    constructor(type, time, msg) {
        this.type = type;
        this.timeout = time;
        this.msg = msg;
    }
}


/***/ }),

/***/ "./src/app/shared/model/Employee.ts":
/*!******************************************!*\
  !*** ./src/app/shared/model/Employee.ts ***!
  \******************************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _LabourGrade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LabourGrade */ "./src/app/shared/model/LabourGrade.ts");


class Employee {
    constructor() {
        this.employeeId = null;
        this.empUsername = "";
        this.empPassword = "";
        this.empCode = 1;
        this.labourGrade = new _LabourGrade__WEBPACK_IMPORTED_MODULE_1__["LabourGrade"]();
        this.empFirstName = "";
        this.empLastName = "";
        this.timesheetApproverId = 1;
        this.supervisorId = 1;
        this.isProjectManager = false;
        this.isAdmin = false;
        this.isHumanResources = false;
        this.isActivated = true;
        this.timesheetApprover = null;
        this.supervisor = null;
        this.jobTitleId = 1;
    }
    ;
}


/***/ }),

/***/ "./src/app/shared/model/LabourGrade.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/LabourGrade.ts ***!
  \*********************************************/
/*! exports provided: LabourGrade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabourGrade", function() { return LabourGrade; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LabourGrade {
    constructor() {
        this.labourGradeId = 0;
        this.labourGradeName = '';
    }
}


/***/ }),

/***/ "./src/app/shared/model/MODE.ts":
/*!**************************************!*\
  !*** ./src/app/shared/model/MODE.ts ***!
  \**************************************/
/*! exports provided: MODE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MODE", function() { return MODE; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

var MODE;
(function (MODE) {
    MODE["Read"] = "read";
    MODE["Create"] = "create";
    MODE["Update"] = "update";
})(MODE || (MODE = {}));


/***/ }),

/***/ "./src/app/shared/model/Project.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/model/Project.ts ***!
  \*****************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ "./src/app/shared/model/Employee.ts");


class Project {
    constructor() {
        this.projectId = null;
        this.projectName = "";
        this.budget = 0;
        this.description = "";
        this.projectManager = new _Employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
        this.employees = [];
        this.startDate = null;
        this.endDate = null;
        this.isClosed = false;
    }
    ;
}


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

/***/ "./src/app/shared/model/User.ts":
/*!**************************************!*\
  !*** ./src/app/shared/model/User.ts ***!
  \**************************************/
/*! exports provided: convertToEmployee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToEmployee", function() { return convertToEmployee; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ "./src/app/shared/model/Employee.ts");


function convertToEmployee(user) {
    let emp = new _Employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
    emp.employeeId = user.employeeId;
    emp.empFirstName = user.firstName;
    emp.empLastName = user.lastName;
    emp.isActivated = user.isActive;
    return emp;
}


/***/ }),

/***/ "./src/app/shared/model/WPReport.ts":
/*!******************************************!*\
  !*** ./src/app/shared/model/WPReport.ts ***!
  \******************************************/
/*! exports provided: WPReport */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WPReport", function() { return WPReport; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WPReport {
    constructor() {
        this.details = [];
    }
    initData() {
        this.comment = '';
        this.workAccomplished = "";
        this.workPlanned = "";
        this.problemsThisPeriod = "";
        this.problemsAnticipated = "";
        this.startDate = "";
        this.endDate = "";
    }
    copyWPinfo(wp) {
        this.workPackageCode = wp.workPackageCode;
        this.workPackageId = wp.workPackageId;
        this.workPackageName = wp.name;
        this.responsibleEngineer = wp.responsibleEngineer;
        this.engineers = wp.employees;
    }
    copyProjectInfo(p) {
        this.projectId = p.projectId;
        this.projectCode = p.projectCode;
        this.projectName = p.projectName;
        this.projectManager = p.projectManager;
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

/***/ "./src/app/shared/model/WorkPackage.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/model/WorkPackage.ts ***!
  \*********************************************/
/*! exports provided: WorkPackage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPackage", function() { return WorkPackage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class WorkPackage {
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
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ "./node_modules/primeng/fesm2015/primeng-inputtext.js");
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/button */ "./node_modules/primeng/fesm2015/primeng-button.js");
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dialog */ "./node_modules/primeng/fesm2015/primeng-dialog.js");

















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
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__["InputTextModule"],
            primeng_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogModule"],
            primeng_button__WEBPACK_IMPORTED_MODULE_15__["ButtonModule"],
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

/***/ "./src/app/shared/validator/DateRangeValidator.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/validator/DateRangeValidator.ts ***!
  \********************************************************/
/*! exports provided: dateRangeValidator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dateRangeValidator", function() { return dateRangeValidator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const dateRangeValidator = (control) => {
    const startDate = control.get('startDate');
    const endDate = control.get('endDate');
    console.log(startDate.value <= endDate.value);
    return startDate && endDate && startDate.value <= endDate.value ? null : { 'dateRangeValidator': true };
};


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
    // apiUrl: 'http://localhost:4000/',
    // authUrl: 'http://localhost:4000/',
    // fakeBackend: true,
    // NOTE: 44318/5001 is the actual backend server that Perry is using.  
    // Keep this section commented out if you're not Perry
    // authUrl: 'https://localhost:44318/',
    // apiUrl: 'https://localhost:44318/',
    // fakeBackend: false,  //change this to true if you're not Perry 
    // // NOTE: Elaboration DEMO / Prod server -- only works if you are on BCIT Network
    // apiUrl: 'http://comp4911webapi-elaboration.apps.shift.infoteach.ca/',
    // authUrl: 'http://comp4911webapi-elaboration.apps.shift.infoteach.ca/',
    // fakeBackend: false
    // NOTE: deployed azure endpoints
    apiUrl: 'https://comp4911webapi-dev-as.azurewebsites.net/',
    authUrl: 'https://comp4911webapi-dev-as.azurewebsites.net/',
    fakeBackend: false,
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

module.exports = __webpack_require__(/*! /Users/Luke/Desktop/test/COMP4910FrontEnd/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map