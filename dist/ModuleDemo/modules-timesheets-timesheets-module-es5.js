function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-timesheets-timesheets-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetApproverViewListTimesheetApproverViewListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\">\r\n        <h3 class=\"display-4\">Pending Timesheet List</h3>\r\n\r\n        <p-table #dt [columns]=\"cols\" [value]=\"displayTimesheet\" [paginator]=\"true\" [rows]=\"10\">\r\n            <ng-template pTemplate=\"caption\">\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\">\r\n                        {{col.header}}\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n                        <input *ngSwitchCase=\"'empName'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'supervisor'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'approver'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'weekNumber'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'versionNumber'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'weekEnding'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'status'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                    </th>\r\n                    <th></th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td *ngFor=\"let col of columns\">\r\n                        <span *ngIf=\"col.field !=='status'\">{{rowData[col.field]}}</span>\r\n                        <h5 *ngIf=\"col.field ==='status'\">\r\n                            <span [className]=\"colorStatus(rowData[col.field])\">{{rowData.status}}</span>\r\n                        </h5>\r\n                    </td>\r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                            [routerLink]=\"['/content/timesheets/approver/view/', rowData.timesheetId]\">View</button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetApproverViewTimesheetApproverViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\">\r\n        <h3>\r\n            <span class=\"display-4 mb-3 mr-3\">Pending Detail</span>\r\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\r\n        </h3>\r\n\r\n        <div class=\"dropdown-divider \"></div>\r\n\r\n        <shared-timesheet *ngIf=\"timesheet\" [mode]=\"mode\" [timesheet]=\"timesheet\">\r\n        </shared-timesheet>\r\n\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n        <h5 class=\"my-3\">Approver View</h5>\r\n\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Comment</span>\r\n            </div>\r\n            <textarea class=\"form-control\" aria-label=\"With textarea\" (change)=\"onTextareaChange($event)\"\r\n                *ngIf=\"timesheet\">{{timesheet.comment}}</textarea>\r\n            <!-- <input type=\"textarea\" class=\"form-control\" [(ngModel)]=\"timesheet.comment\" (blur)=\"onExitEmployeeId()\"> -->\r\n\r\n        </div>\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-outline-success  m-1 px-3\" (click)=\"onApprove($event)\">Approve</button>\r\n            <button type=\"button\" class=\"btn btn-outline-danger m-1 px-2\" (click)=\"onReject($event)\">Reject</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\">Cancel</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetCreationTimesheetCreationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\" *ngIf=\"dataReady\">\r\n    <div class=\"card-body\">\r\n        <h3 class=\"display-4 mb-3\">Create Timesheet</h3>\r\n\r\n        <div class=\"dropdown-divider \"></div>\r\n\r\n        <shared-timesheet [mode]=\"mode\" [timesheet]=\"timesheet\" [projectWp]=\"projectWp\"> </shared-timesheet>\r\n\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onSave($event)\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onSubmit($event)\">Submit</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetEditVersionTimesheetEditVersionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\" *ngIf=\"timesheet\">\r\n    <div class=\"card-body\">\r\n        <h3>\r\n            <span class=\"display-4 mb-3 mr-3\">Edit Rejected Timesheet</span>\r\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\r\n        </h3>\r\n        <p>Submiting or saving this edited timesheet will creation this timesheet as a new version.</p>\r\n\r\n        <div class=\"dropdown-divider \"></div>\r\n\r\n        <shared-timesheet [mode]=\"mode\" [timesheet]=\"timesheet\" [projectWp]=\"projectWp\"> </shared-timesheet>\r\n\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onSave($event)\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onSubmit($event)\">Submit</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetEditTimesheetEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\" *ngIf=\"timesheet\">\r\n    <div class=\"card-body\">\r\n        <h3>\r\n            <span class=\"display-4 mb-3 mr-3\">Edit Timesheet</span>\r\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\r\n        </h3>\r\n\r\n        <div class=\"dropdown-divider \"></div>\r\n\r\n        <shared-timesheet [mode]=\"mode\" [timesheet]=\"timesheet\" [projectWp]=\"projectWp\"> </shared-timesheet>\r\n\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onSave($event)\">Save</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onSubmit($event)\">Submit</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetListTimesheetListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\">\r\n        <h3 class=\"display-4 mb-3\">Timesheet List</h3>\r\n        <div class=\"dropdown-divider \"></div>\r\n\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary my-2\" routerLink=\"creation\">Create</button>\r\n        </div>\r\n\r\n        <!-- Table goes here -->\r\n        <p-table [columns]=\"cols\" [value]=\"timesheets\">\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\r\n                        {{col.header}}\r\n                        <p-sortIcon [field]=\"col.field\" ariaLabel=\"Activate to sort\"\r\n                            ariaLabelDesc=\"Activate to sort in descending order\"\r\n                            ariaLabelAsc=\"Activate to sort in ascending order\"></p-sortIcon>\r\n                    </th>\r\n                    <th>\r\n\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr>\r\n                    <td>\r\n                        {{rowData.weekNumber}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.versionNumber}}\r\n                    </td>\r\n                    <td>\r\n                        {{rowData.weekEndingIn | date:'yyyy-MM-dd' }}\r\n                    </td>\r\n                    <td>\r\n                        <h5><span [className]=\"colorStatus(rowData.status)\">{{rowData.status}}</span></h5>\r\n                    </td>\r\n\r\n                    <td>\r\n                        <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                            [routerLink]=\"['view', rowData.timesheetId]\">View</button>\r\n                        <button *ngIf=\"rowData.status==='Inprogress'\" type=\"button\" class=\"btn btn-link btn-sm\"\r\n                            [routerLink]=\"['edit', rowData.timesheetId]\">Edit</button>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n\r\n\r\n    </div>\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetViewTimesheetViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\" *ngIf=\"timesheet\">\r\n        <h3>\r\n            <span class=\"display-4 mb-3 mr-3\">Timesheet Detail</span>\r\n            <span *ngIf=\"timesheet\" [className]=\"colorStatus(timesheet.status)\">{{timesheet.status}}</span>\r\n        </h3>\r\n        <!-- alert content -->\r\n        <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\" *ngIf=\"timesheet.status == 'Rejected'\">\r\n            <h4 class=\"alert-heading\">Rejected!</h4>\r\n            <p>This timesheet is rejected based on the following reason. Please click Edit button to modifty this\r\n                timesheet.</p>\r\n            <hr>\r\n            <p class=\"mb-0\">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>\r\n        </div>\r\n\r\n        <div class=\"dropdown-divider \"></div>\r\n\r\n        <shared-timesheet *ngIf=\"timesheet\" [mode]=\"mode\" [timesheet]=\"timesheet\">\r\n        </shared-timesheet>\r\n\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" *ngIf=\"timesheet.status == 'Rejected'\"\r\n                [routerLink]=\"['/content/timesheets/editRejectedTimesheet', timesheet.timesheetId]\">\r\n                Create New Version</button>\r\n            <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" routerLink=\"/content/timesheets\">Cancel</button>\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheets.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheets.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesTimesheetsPagesTimesheetsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-timesheet-list></app-timesheet-list>";
    /***/
  },

  /***/
  "./src/app/core/service/timesheet/timesheet.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/core/service/timesheet/timesheet.service.ts ***!
    \*************************************************************/

  /*! exports provided: TimesheetService */

  /***/
  function srcAppCoreServiceTimesheetTimesheetServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetService", function () {
      return TimesheetService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../message.service */
    "./src/app/core/service/message.service.ts");

    var TimesheetService =
    /*#__PURE__*/
    function () {
      function TimesheetService(http, messageService) {
        _classCallCheck(this, TimesheetService);

        this.http = http;
        this.messageService = messageService;
        this.baseUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        /** headers in an httpOptions object that will be passed to every HttpClient save method. */

        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            "Content-Type": "application/json"
          })
        };
      }

      _createClass(TimesheetService, [{
        key: "postTimesheet",
        value: function postTimesheet(ts) {
          var url = this.baseUrl + "api/timesheets";
          return this.http.post(url, ts, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("postProject", ts)));
        }
      }, {
        key: "putTimesheet",
        value: function putTimesheet(ts) {
          var url = this.baseUrl + "api/timesheets/".concat(ts.timesheetId);
          return this.http.put(url, ts, this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(this.handleError("putProject", ts)));
        }
        /**
         *
         * @param id Timesheet ID
         */

      }, {
        key: "getTimesheet",
        value: function getTimesheet(id) {
          var url = this.baseUrl + "api/timesheets/".concat(id);
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "getPendingTimesheets",
        value: function getPendingTimesheets(aprId) {
          var url = this.baseUrl + "api/timesheets/getAllPendingTimesheet/".concat(aprId);
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "getAvaliableTimesheetId",
        value: function getAvaliableTimesheetId() {
          var url = this.baseUrl + "api/timesheets/availableTimesheetId";
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "getAllTimesheet",
        value: function getAllTimesheet(empId) {
          var url = this.baseUrl + "api/Timesheets/GetTimesheetsByEmpId/".concat(empId);
          return this.http.get(url, this.httpOptions).pipe();
        }
      }, {
        key: "handleError",
        value: function handleError() {
          var _this = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'operation';
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            _this.alertUser("".concat(operation, " failed: ").concat(error.message)); // Let the app keep running by returning an empty result.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(result);
          };
        }
      }, {
        key: "alertUser",
        value: function alertUser(message) {// this.messageService.add(`WeatherService: ${message}`);
        }
      }]);

      return TimesheetService;
    }();

    TimesheetService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"]
      }];
    };

    TimesheetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TimesheetService);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.css":
  /*!******************************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.css ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewListTimesheetApproverViewListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtYXBwcm92ZXItdmlldy1saXN0L3RpbWVzaGVldC1hcHByb3Zlci12aWV3LWxpc3QuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: TimesheetApproverViewListComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewListTimesheetApproverViewListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetApproverViewListComponent", function () {
      return TimesheetApproverViewListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");

    var TimesheetApproverViewListComponent =
    /*#__PURE__*/
    function () {
      function TimesheetApproverViewListComponent(timesheetService, authenticationService) {
        _classCallCheck(this, TimesheetApproverViewListComponent);

        this.timesheetService = timesheetService;
        this.authenticationService = authenticationService;
        this.displayTimesheet = [];
      }

      _createClass(TimesheetApproverViewListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [{
            field: 'empName',
            header: 'Employee'
          }, {
            field: 'supervisor',
            header: 'Supervisor'
          }, {
            field: 'approver',
            header: 'Approver'
          }, {
            field: 'weekNumber',
            header: 'Week'
          }, {
            field: 'versionNumber',
            header: 'Version'
          }, {
            field: 'weekEnding',
            header: 'week Ending'
          }, {
            field: 'status',
            header: 'Status'
          }];
          this.populateTimesheets();
        }
      }, {
        key: "populateTimesheets",
        value: function populateTimesheets() {
          var _this2 = this;

          var userId = this.authenticationService.currentUserValue.employeeId;
          this.timesheetService.getPendingTimesheets(userId).subscribe(function (res) {
            res.forEach(function (ts) {
              _this2.displayTimesheet.push({
                'empName': "".concat(ts.owner.empFirstName, " ").concat(ts.owner.empLastName),
                'approver': "".concat(ts.owner.timesheetApprover.empFirstName, " ").concat(ts.owner.timesheetApprover.empLastName),
                'supervisor': "".concat(ts.owner.supervisor.empFirstName, " ").concat(ts.owner.supervisor.empLastName),
                'weekNumber': ts.weekNumber,
                'versionNumber': ts.versionNumber,
                'weekEnding': ts.weekEnding,
                'status': ts.status,
                'timesheetId': ts.timesheetId
              });
            });
            console.log(_this2.displayTimesheet);
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-success';

            case 'Rejected':
              return 'badge badge-danger';

            case 'Pending':
              return 'badge badge-warning';

            case 'Inprogress':
              return 'badge badge-info';
          }
        }
      }]);

      return TimesheetApproverViewListComponent;
    }();

    TimesheetApproverViewListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    TimesheetApproverViewListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-approver-view-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-approver-view-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-approver-view-list.component.css */
      "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.css")).default]
    })], TimesheetApproverViewListComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewTimesheetApproverViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtYXBwcm92ZXItdmlldy90aW1lc2hlZXQtYXBwcm92ZXItdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: TimesheetApproverViewComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetApproverViewTimesheetApproverViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetApproverViewComponent", function () {
      return TimesheetApproverViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");

    var TimesheetApproverViewComponent =
    /*#__PURE__*/
    function () {
      function TimesheetApproverViewComponent(route, timesheetService) {
        _classCallCheck(this, TimesheetApproverViewComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read;
        this.rapidPageValue = "323djo";
      }

      _createClass(TimesheetApproverViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this3.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this3.timesheet = ts;
            });
          });
        }
      }, {
        key: "onTextareaChange",
        value: function onTextareaChange(e) {
          try {
            this.timesheet.comment = e.target.value;
          } catch (e) {
            console.info('could not set textarea-value');
          }
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          status = status.toLowerCase();

          switch (status) {
            case 'approved':
              return 'badge badge-pill badge-success';

            case 'rejected':
              return 'badge badge-pill badge-danger';

            case 'pending':
              return 'badge badge-pill badge-warning';

            case 'inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        }
      }, {
        key: "onReject",
        value: function onReject(e) {
          var _this4 = this;

          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_5__["TimesheetStatus"].rejected;
          this.timesheetService.putTimesheet(this.timesheet).subscribe(function (_) {
            return console.log(_this4.timesheet);
          });
        }
      }, {
        key: "onApprove",
        value: function onApprove(e) {
          var _this5 = this;

          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_5__["TimesheetStatus"].approved;
          this.timesheetService.putTimesheet(this.timesheet).subscribe(function (_) {
            return console.log(_this5.timesheet);
          });
        }
      }]);

      return TimesheetApproverViewComponent;
    }();

    TimesheetApproverViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
      }];
    };

    TimesheetApproverViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-approver-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-approver-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-approver-view.component.css */
      "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.css")).default]
    })], TimesheetApproverViewComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetCreationTimesheetCreationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtY3JlYXRpb24vdGltZXNoZWV0LWNyZWF0aW9uLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: TimesheetCreationComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetCreationTimesheetCreationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetCreationComponent", function () {
      return TimesheetCreationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_Timesheet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/Timesheet */
    "./src/app/shared/model/Timesheet.ts");
    /* harmony import */


    var src_app_shared_model_TimesheetRow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetRow */
    "./src/app/shared/model/TimesheetRow.ts");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");
    /* harmony import */


    var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/service/project/project.service */
    "./src/app/core/service/project/project.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");

    var TimesheetCreationComponent =
    /*#__PURE__*/
    function () {
      function TimesheetCreationComponent(timesheetService, projectService, authenticationService) {
        _classCallCheck(this, TimesheetCreationComponent);

        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.dataReady = false;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_8__["MODE"].Create;
        this.timesheet = null;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(TimesheetCreationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.setEmptyTimesheetData();
          this.prepareprojectWp();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(e) {
          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_4__["TimesheetStatus"].pending;
          this.timesheetService.postTimesheet(this.timesheet).subscribe();
        }
      }, {
        key: "onSave",
        value: function onSave(e) {
          console.log("post timesheet:");
          console.log(JSON.stringify(this.timesheet));
          this.timesheetService.postTimesheet(this.timesheet).subscribe();
        }
      }, {
        key: "setEmptyTimesheetData",
        value: function setEmptyTimesheetData() {
          var _this6 = this;

          this.timesheetService.getAvaliableTimesheetId().subscribe(function (result) {
            var newTimesheet = new src_app_shared_model_Timesheet__WEBPACK_IMPORTED_MODULE_2__["Timesheet"]();
            var weekending = new Date();
            var shit = 5 - weekending.getDay();
            weekending.setDate(weekending.getDate() + shit);
            newTimesheet.weekEnding = _this6.dateFormater(weekending);
            newTimesheet.weekNumber = _this6.getWeek(weekending);
            console.log(result); // init attirbutes

            newTimesheet.timesheetId = result.id;
            newTimesheet.employeeId = _this6.currentUser.employeeId;
            newTimesheet.versionNumber = 1;
            newTimesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_4__["TimesheetStatus"].inProgress; // Create 5 empty rows at page load.

            for (var i = 0; i < 5; i++) {
              newTimesheet.timesheetRows.push(new src_app_shared_model_TimesheetRow__WEBPACK_IMPORTED_MODULE_3__["TimesheetRow"](newTimesheet.timesheetId, newTimesheet.versionNumber, 0, 0));
            }

            _this6.timesheet = newTimesheet;
            _this6.dataReady = true;
          });
        }
      }, {
        key: "prepareprojectWp",
        value: function prepareprojectWp() {
          var _this7 = this;

          this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(function (result) {
            _this7.projectWp = [];
            result.forEach(function (p) {
              p.workPackages.forEach(function (wp) {
                _this7.projectWp.push({
                  'projectId': p.projectId,
                  'projectName': p.projectName,
                  'wpId': wp.workPackageId,
                  'wpCode': wp.workPackageCode
                });
              });
            });
          });
        } // helper functions

      }, {
        key: "getWeek",
        value: function getWeek(date) {
          var today = new Date();
          var firstDayOfYear = new Date(today.getFullYear(), 0, 1);
          var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
          return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        }
      }, {
        key: "dateFormater",
        value: function dateFormater(d) {
          var yyyy = d.getFullYear();
          var MM = ("00" + (d.getMonth() + 1)).slice(-2);
          var dd = ("00" + (d.getDate() + 1)).slice(-2);
          return "".concat(yyyy, "-").concat(MM, "-").concat(dd);
        }
        /**
        *
        * @param s with format "2020-10-11"
        */

      }, {
        key: "stringToDate",
        value: function stringToDate(s) {
          var date = new Date(s);
          console.log(date);
          return date;
        }
      }]);

      return TimesheetCreationComponent;
    }();

    TimesheetCreationComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_5__["TimesheetService"]
      }, {
        type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    TimesheetCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-creation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-creation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-creation.component.css */
      "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.css")).default]
    })], TimesheetCreationComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditVersionTimesheetEditVersionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtZWRpdC12ZXJzaW9uL3RpbWVzaGVldC1lZGl0LXZlcnNpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: TimesheetEditVersionComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditVersionTimesheetEditVersionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetEditVersionComponent", function () {
      return TimesheetEditVersionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/service/project/project.service */
    "./src/app/core/service/project/project.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TimesheetEditVersionComponent =
    /*#__PURE__*/
    function () {
      function TimesheetEditVersionComponent(route, timesheetService, projectService, authenticationService) {
        _classCallCheck(this, TimesheetEditVersionComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__["MODE"].Update;
        this.timesheet = null;
        this.projectDropdown = null;
        this.employeeWPs = null;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(TimesheetEditVersionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this8.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this8.timesheet = ts;
            });
          });
          this.prepareprojectWp();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(e) {
          // increment the version. since it is using the old timesheet to create a new one
          this.timesheet.versionNumber += 1;
          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__["TimesheetStatus"].pending;
          this.timesheetService.putTimesheet(this.timesheet).subscribe(function (_) {// TODO : nagvigate to this page "/content/timesheets"
          });
        }
      }, {
        key: "onSave",
        value: function onSave(e) {
          // increment the version. since it is using the old timesheet to create a new one
          this.timesheet.versionNumber += 1;
          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__["TimesheetStatus"].inProgress;
          console.log("post timesheet:");
          console.log(JSON.stringify(this.timesheet));
          this.timesheetService.putTimesheet(this.timesheet).subscribe(function (_) {// TODO : nagvigate to this page "/content/timesheets"
          });
        }
      }, {
        key: "prepareprojectWp",
        value: function prepareprojectWp() {
          var _this9 = this;

          this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(function (result) {
            _this9.projectWp = [];
            result.forEach(function (p) {
              p.workPackages.forEach(function (wp) {
                _this9.projectWp.push({
                  'projectId': p.projectId,
                  'projectName': p.projectName,
                  'wpId': wp.workPackageId,
                  'wpCode': wp.workPackageCode
                });
              });
            });
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-pill badge-success';

            case 'Rejected':
              return 'badge badge-pill badge-danger';

            case 'Pending':
              return 'badge badge-pill badge-warning';

            case 'Inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        } // helper functions

      }, {
        key: "getWeek",
        value: function getWeek(date) {
          var today = new Date();
          var firstDayOfYear = new Date(today.getFullYear(), 0, 1);
          var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
          return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        }
      }, {
        key: "dateFormater",
        value: function dateFormater(d) {
          var yyyy = d.getFullYear();
          var MM = ("00" + (d.getMonth() + 1)).slice(-2);
          var dd = ("00" + (d.getDate() + 1)).slice(-2);
          return "".concat(yyyy, "-").concat(MM, "-").concat(dd);
        }
        /**
        *
        * @param s with format "2020-10-11"
        */

      }, {
        key: "stringToDate",
        value: function stringToDate(s) {
          var date = new Date(s);
          console.log(date);
          return date;
        }
      }]);

      return TimesheetEditVersionComponent;
    }();

    TimesheetEditVersionComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]
      }, {
        type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    TimesheetEditVersionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-edit-version',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-edit-version.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-edit-version.component.css */
      "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.css")).default]
    })], TimesheetEditVersionComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditTimesheetEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtZWRpdC90aW1lc2hlZXQtZWRpdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TimesheetEditComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetEditTimesheetEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetEditComponent", function () {
      return TimesheetEditComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/TimesheetStatus */
    "./src/app/shared/model/TimesheetStatus.ts");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/service/project/project.service */
    "./src/app/core/service/project/project.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var TimesheetEditComponent =
    /*#__PURE__*/
    function () {
      function TimesheetEditComponent(route, timesheetService, projectService, authenticationService) {
        _classCallCheck(this, TimesheetEditComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.projectService = projectService;
        this.authenticationService = authenticationService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_6__["MODE"].Update;
        this.timesheet = null;
        this.projectDropdown = null;
        this.employeeWPs = null;
        this.currentUser = this.authenticationService.currentUserValue;
      }

      _createClass(TimesheetEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this10 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this10.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this10.timesheet = ts;
            });
          });
          this.prepareprojectWp();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(e) {
          this.timesheet.status = src_app_shared_model_TimesheetStatus__WEBPACK_IMPORTED_MODULE_2__["TimesheetStatus"].pending;
          this.timesheetService.postTimesheet(this.timesheet).subscribe();
        }
      }, {
        key: "onSave",
        value: function onSave(e) {
          console.log("post timesheet:");
          console.log(JSON.stringify(this.timesheet));
          this.timesheetService.postTimesheet(this.timesheet).subscribe();
        }
      }, {
        key: "prepareprojectWp",
        value: function prepareprojectWp() {
          var _this11 = this;

          this.projectService.getProjectWpDropdown(this.currentUser.employeeId).subscribe(function (result) {
            _this11.projectWp = [];
            result.forEach(function (p) {
              p.workPackages.forEach(function (wp) {
                _this11.projectWp.push({
                  'projectId': p.projectId,
                  'projectName': p.projectName,
                  'wpId': wp.workPackageId,
                  'wpCode': wp.workPackageCode
                });
              });
            });
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-pill badge-success';

            case 'Rejected':
              return 'badge badge-pill badge-danger';

            case 'Pending':
              return 'badge badge-pill badge-warning';

            case 'Inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        } // helper functions

      }, {
        key: "getWeek",
        value: function getWeek(date) {
          var today = new Date();
          var firstDayOfYear = new Date(today.getFullYear(), 0, 1);
          var pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86400000;
          return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
        }
      }, {
        key: "dateFormater",
        value: function dateFormater(d) {
          var yyyy = d.getFullYear();
          var MM = ("00" + (d.getMonth() + 1)).slice(-2);
          var dd = ("00" + (d.getDate() + 1)).slice(-2);
          return "".concat(yyyy, "-").concat(MM, "-").concat(dd);
        }
        /**
        *
        * @param s with format "2020-10-11"
        */

      }, {
        key: "stringToDate",
        value: function stringToDate(s) {
          var date = new Date(s);
          console.log(date);
          return date;
        }
      }]);

      return TimesheetEditComponent;
    }();

    TimesheetEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]
      }, {
        type: src_app_core_service_project_project_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"]
      }];
    };

    TimesheetEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-edit.component.css */
      "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.css")).default]
    })], TimesheetEditComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetListTimesheetListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtbGlzdC90aW1lc2hlZXQtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TimesheetListComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetListTimesheetListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetListComponent", function () {
      return TimesheetListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");

    var TimesheetListComponent =
    /*#__PURE__*/
    function () {
      function TimesheetListComponent(timesheetService, authenticationService) {
        _classCallCheck(this, TimesheetListComponent);

        this.timesheetService = timesheetService;
        this.authenticationService = authenticationService;
        this.timesheets = null;
      }

      _createClass(TimesheetListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.cols = [{
            field: 'weekNumber',
            header: 'Week'
          }, {
            field: 'versionNumber',
            header: 'Version'
          }, {
            field: 'weekEndingIn',
            header: 'week Ending'
          }, {
            field: 'status',
            header: 'Status'
          }];
          this.populateTimesheets();
        }
      }, {
        key: "populateTimesheets",
        value: function populateTimesheets() {
          var _this12 = this;

          var userId = this.authenticationService.currentUserValue.employeeId;
          this.timesheetService.getAllTimesheet(userId).subscribe(function (res) {
            _this12.timesheets = res;
            console.log(res);
          });
        }
      }, {
        key: "dataReady",
        value: function dataReady() {
          if (this.timesheets !== null) return true;
          return false;
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-success';

            case 'Rejected':
              return 'badge badge-danger';

            case 'Pending':
              return 'badge badge-warning';

            case 'Inprogress':
              return 'badge badge-info';
          }
        }
      }]);

      return TimesheetListComponent;
    }();

    TimesheetListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_2__["TimesheetService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    TimesheetListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-list.component.css */
      "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.css")).default]
    })], TimesheetListComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetViewTimesheetViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXQtdmlldy90aW1lc2hlZXQtdmlldy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: TimesheetViewComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetViewTimesheetViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetViewComponent", function () {
      return TimesheetViewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/timesheet/timesheet.service */
    "./src/app/core/service/timesheet/timesheet.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");

    var TimesheetViewComponent =
    /*#__PURE__*/
    function () {
      function TimesheetViewComponent(route, timesheetService) {
        _classCallCheck(this, TimesheetViewComponent);

        this.route = route;
        this.timesheetService = timesheetService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_4__["MODE"].Read;
      }

      _createClass(TimesheetViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('timesheetId');
            console.log("current timesheet id is  ".concat(id));

            _this13.timesheetService.getTimesheet(id).subscribe(function (ts) {
              return _this13.timesheet = ts;
            });
          });
        }
      }, {
        key: "colorStatus",
        value: function colorStatus(status) {
          switch (status) {
            case 'Approved':
              return 'badge badge-pill badge-success';

            case 'Rejected':
              return 'badge badge-pill badge-danger';

            case 'Pending':
              return 'badge badge-pill badge-warning';

            case 'Inprogress':
              return 'badge badge-pill badge-info';

            default:
              return 'badge badge-pill badge-dark';
          }
        }
      }]);

      return TimesheetViewComponent;
    }();

    TimesheetViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_core_service_timesheet_timesheet_service__WEBPACK_IMPORTED_MODULE_3__["TimesheetService"]
      }];
    };

    TimesheetViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheet-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheet-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheet-view.component.css */
      "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.css")).default]
    })], TimesheetViewComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheets.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheets.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdGltZXNoZWV0cy9wYWdlcy90aW1lc2hlZXRzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/timesheets/pages/timesheets.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/timesheets/pages/timesheets.component.ts ***!
    \******************************************************************/

  /*! exports provided: TimesheetsComponent */

  /***/
  function srcAppModulesTimesheetsPagesTimesheetsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetsComponent", function () {
      return TimesheetsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var TimesheetsComponent =
    /*#__PURE__*/
    function () {
      function TimesheetsComponent() {
        _classCallCheck(this, TimesheetsComponent);
      }

      _createClass(TimesheetsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TimesheetsComponent;
    }();

    TimesheetsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-timesheets',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./timesheets.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/timesheets/pages/timesheets.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./timesheets.component.css */
      "./src/app/modules/timesheets/pages/timesheets.component.css")).default]
    })], TimesheetsComponent);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/timesheets-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/timesheets/timesheets-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: TimesheetsRoutingModule */

  /***/
  function srcAppModulesTimesheetsTimesheetsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetsRoutingModule", function () {
      return TimesheetsRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_timesheets_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/timesheets.component */
    "./src/app/modules/timesheets/pages/timesheets.component.ts");
    /* harmony import */


    var _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/timesheet-creation/timesheet-creation.component */
    "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/timesheet-view/timesheet-view.component */
    "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/timesheet-edit/timesheet-edit.component */
    "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view-list/timesheet-approver-view-list.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view/timesheet-approver-view.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/timesheet-edit-version/timesheet-edit-version.component */
    "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts");

    var routes = [{
      path: '',
      component: _pages_timesheets_component__WEBPACK_IMPORTED_MODULE_3__["TimesheetsComponent"],
      data: {
        breadcrumb: null
      }
    }, {
      path: 'creation',
      component: _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetCreationComponent"],
      data: {
        breadcrumb: 'Creation'
      }
    }, {
      path: 'view/:timesheetId',
      component: _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_6__["TimesheetViewComponent"],
      data: {
        breadcrumb: 'Detail'
      }
    }, {
      path: 'edit/:timesheetId',
      component: _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_7__["TimesheetEditComponent"],
      data: {
        breadcrumb: 'Edit'
      }
    }, {
      path: 'editRejectedTimesheet/:timesheetId',
      component: _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_10__["TimesheetEditVersionComponent"],
      data: {
        breadcrumb: 'Edit Rejected Timesheet'
      }
    }, {
      path: 'approver/view/list',
      component: _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_8__["TimesheetApproverViewListComponent"],
      data: {
        breadcrumb: 'Pending List'
      }
    }, {
      path: 'approver/view/:timesheetId',
      component: _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_9__["TimesheetApproverViewComponent"],
      data: {
        breadcrumb: 'Pending Detail'
      }
    }];

    var TimesheetsRoutingModule = function TimesheetsRoutingModule() {
      _classCallCheck(this, TimesheetsRoutingModule);
    };

    TimesheetsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TimesheetsRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/timesheets/timesheets.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/timesheets/timesheets.module.ts ***!
    \*********************************************************/

  /*! exports provided: TimesheetsModule */

  /***/
  function srcAppModulesTimesheetsTimesheetsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetsModule", function () {
      return TimesheetsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _timesheets_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./timesheets-routing.module */
    "./src/app/modules/timesheets/timesheets-routing.module.ts");
    /* harmony import */


    var _pages_timesheets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/timesheets.component */
    "./src/app/modules/timesheets/pages/timesheets.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/timesheet-creation/timesheet-creation.component */
    "./src/app/modules/timesheets/pages/timesheet-creation/timesheet-creation.component.ts");
    /* harmony import */


    var _pages_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/timesheet-list/timesheet-list.component */
    "./src/app/modules/timesheets/pages/timesheet-list/timesheet-list.component.ts");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");
    /* harmony import */


    var _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/timesheet-view/timesheet-view.component */
    "./src/app/modules/timesheets/pages/timesheet-view/timesheet-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/timesheet-edit/timesheet-edit.component */
    "./src/app/modules/timesheets/pages/timesheet-edit/timesheet-edit.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view-list/timesheet-approver-view-list.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view-list/timesheet-approver-view-list.component.ts");
    /* harmony import */


    var _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/timesheet-approver-view/timesheet-approver-view.component */
    "./src/app/modules/timesheets/pages/timesheet-approver-view/timesheet-approver-view.component.ts");
    /* harmony import */


    var _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/timesheet-edit-version/timesheet-edit-version.component */
    "./src/app/modules/timesheets/pages/timesheet-edit-version/timesheet-edit-version.component.ts");

    var TimesheetsModule = function TimesheetsModule() {
      _classCallCheck(this, TimesheetsModule);
    };

    TimesheetsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_timesheets_component__WEBPACK_IMPORTED_MODULE_4__["TimesheetsComponent"], _pages_timesheet_creation_timesheet_creation_component__WEBPACK_IMPORTED_MODULE_6__["TimesheetCreationComponent"], _pages_timesheet_list_timesheet_list_component__WEBPACK_IMPORTED_MODULE_7__["TimesheetListComponent"], _pages_timesheet_view_timesheet_view_component__WEBPACK_IMPORTED_MODULE_9__["TimesheetViewComponent"], _pages_timesheet_edit_timesheet_edit_component__WEBPACK_IMPORTED_MODULE_10__["TimesheetEditComponent"], _pages_timesheet_approver_view_list_timesheet_approver_view_list_component__WEBPACK_IMPORTED_MODULE_11__["TimesheetApproverViewListComponent"], _pages_timesheet_approver_view_timesheet_approver_view_component__WEBPACK_IMPORTED_MODULE_12__["TimesheetApproverViewComponent"], _pages_timesheet_edit_version_timesheet_edit_version_component__WEBPACK_IMPORTED_MODULE_13__["TimesheetEditVersionComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _timesheets_routing_module__WEBPACK_IMPORTED_MODULE_3__["TimesheetsRoutingModule"], // primeng
      primeng_table__WEBPACK_IMPORTED_MODULE_8__["TableModule"]]
    })], TimesheetsModule);
    /***/
  },

  /***/
  "./src/app/shared/model/MODE.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/model/MODE.ts ***!
    \**************************************/

  /*! exports provided: MODE */

  /***/
  function srcAppSharedModelMODETs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MODE", function () {
      return MODE;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var MODE;

    (function (MODE) {
      MODE["Read"] = "read";
      MODE["Create"] = "create";
      MODE["Update"] = "update";
    })(MODE || (MODE = {}));
    /***/

  },

  /***/
  "./src/app/shared/model/Timesheet.ts":
  /*!*******************************************!*\
    !*** ./src/app/shared/model/Timesheet.ts ***!
    \*******************************************/

  /*! exports provided: Timesheet */

  /***/
  function srcAppSharedModelTimesheetTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Timesheet", function () {
      return Timesheet;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** this class is for Timesheet component model */


    var Timesheet = function Timesheet() {
      _classCallCheck(this, Timesheet);

      this.timesheetRows = [];
      this.signature = null;
      this.comment = '';
    };
    /***/

  },

  /***/
  "./src/app/shared/model/TimesheetStatus.ts":
  /*!*************************************************!*\
    !*** ./src/app/shared/model/TimesheetStatus.ts ***!
    \*************************************************/

  /*! exports provided: TimesheetStatus */

  /***/
  function srcAppSharedModelTimesheetStatusTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimesheetStatus", function () {
      return TimesheetStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /** this represents timesheet status */


    var TimesheetStatus;

    (function (TimesheetStatus) {
      TimesheetStatus["approved"] = "Approved";
      TimesheetStatus["rejected"] = "Rejected";
      TimesheetStatus["pending"] = "Pending";
      TimesheetStatus["inProgress"] = "inprogress";
    })(TimesheetStatus || (TimesheetStatus = {}));
    /***/

  }
}]);
//# sourceMappingURL=modules-timesheets-timesheets-module-es5.js.map