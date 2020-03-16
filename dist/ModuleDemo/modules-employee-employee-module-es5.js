function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-employee-employee-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/component/employee/employee.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/component/employee/employee.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmployeeComponentEmployeeEmployeeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"dropdown-divider  my-3\"></div>\r\n\r\n<h5 class=\"my-3\">Employee Information</h5>\r\n\r\n<div class=\"form-row\">\r\n    <div class=\"col-5\">\r\n        <!-- first name -->\r\n        <div class=\"input-group \">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">First Name</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empFirstName\" [readOnly]=\"mode ==='read'\">\r\n\r\n        </div>\r\n        <span *ngIf=\"alerts.firstName\" class=\"error my-2\"><small>{{alerts.firstName.msg}}</small></span>\r\n\r\n\r\n\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-5\">\r\n\r\n        <!-- last name -->\r\n        <div class=\"input-group \">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Last Name</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empLastName\" [readOnly]=\"mode ==='read'\">\r\n        </div>\r\n        <span *ngIf=\"alerts.lastName\" class=\"error my-2\"><small>{{alerts.lastName.msg}}</small></span>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n</div>\r\n<div class=\"  my-3\"></div>\r\n<div class=\"form-row\">\r\n    <div class=\"col-5\">\r\n\r\n        <!-- user name -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">User Name</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empUsername\" (blur)=\"onExitUserName()\"\r\n                [readOnly]=\"mode ==='read' || mode=='update'\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"col-1\">\r\n        <div *ngIf=\"(mode ==='create' || mode ==='update')\">\r\n            <i *ngIf=\"validUsername\" class=\"material-icons pass my-2\">check_circle</i>\r\n            <i *ngIf=\"!validUsername\" class=\"material-icons error  my-2\">error</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-5\">\r\n        <!-- password -->\r\n        <div class=\"input-group\" *ngIf=\"mode==='create'\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Password</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empPassword\" [readOnly]=\"true\">\r\n        </div>\r\n        <button *ngIf=\"mode==='update'\" type=\"button\" class=\"btn btn-outline-secondary  m-1 px-3\"\r\n            (click)=\"onRestPw()\">Reset\r\n            Password</button>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n</div>\r\n<div class=\"  my-3\"></div>\r\n<div class=\"form-row\">\r\n    <div class=\"col-5\">\r\n        <!-- employe ID -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Employee ID</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empCode\" (blur)=\"onExitEmployeeId()\"\r\n                [readOnly]=\"mode ==='read' || mode=='update'\">\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"col-1\">\r\n        <div *ngIf=\"(mode ==='create' || mode ==='update')\">\r\n            <i *ngIf=\"validEmployeeCode\" class=\"material-icons pass my-2\">check_circle</i>\r\n            <i *ngIf=\"!validEmployeeCode\" class=\"material-icons error  my-2\">error</i>\r\n        </div>\r\n    </div>\r\n    <div class=\"col-6\"></div>\r\n    <div class=\"col-1\"></div>\r\n</div>\r\n<div class=\"  my-3\"></div>\r\n<div class=\"form-row\">\r\n    <div class=\"col-5\">\r\n\r\n        <!-- labour grade -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Labour Grade</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\" value=\"{{employee.labourGrade.labourGradeName}}\"\r\n                *ngIf=\"mode==='read'\" [readOnly]=\"true\">\r\n            <p-dropdown class=\"form-control\" [options]=\"greadeDropdown\" [(ngModel)]=\"selectedGrade\"\r\n                *ngIf=\"mode ==='create' || mode==='update'\"\r\n                placeholder=\"{{employee.labourGrade ? employee.labourGrade.labourGradeName : 'choose a Labour Grade'}}\"\r\n                optionLabel=\"label\" [style]=\"{'border-width':'0px','padding':'0px'}\"></p-dropdown>\r\n        </div>\r\n        <span *ngIf=\"alerts.labourGrade\" class=\"error my-2\"><small>{{alerts.labourGrade.msg}}</small></span>\r\n\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-5\">\r\n\r\n        <!-- supervisor -->\r\n        <div class=\"input-group\">\r\n            <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\">Supervisor</span>\r\n            </div>\r\n            <input type=\"text\" class=\"form-control\"\r\n                value=\"{{employee.supervisor.empFirstName}} {{employee.supervisor.empLastName}}\" *ngIf=\"mode==='read'\"\r\n                [readOnly]=\"true\">\r\n            <p-dropdown class=\"form-control\" [options]=\"employeeDropdown\" [(ngModel)]=\"selectedSupervisor\"\r\n                *ngIf=\"mode ==='create' || mode==='update'\"\r\n                placeholder=\"{{employee.supervisor ? employee.supervisor.empFirstName + ' ' + employee.supervisor.empLastName : 'choose a supervisor'}}\"\r\n                optionLabel=\"label\" [style]=\"{'border-width':'0px','padding':'0px'}\"></p-dropdown>\r\n        </div>\r\n        <span *ngIf=\"alerts.supervisor\" class=\"error my-2\"><small>{{alerts.supervisor.msg}}</small></span>\r\n\r\n\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n</div>\r\n<div class=\"  my-3\"></div>\r\n\r\n<div class=\"dropdown-divider  my-3\"></div>\r\n<h5 class=\"my-3\">Activation</h5>\r\n<div class=\"form-row\">\r\n    <div class=\"col-12\">\r\n\r\n        <!-- active/deactive -->\r\n        <div class=\"input-group\">\r\n            <!-- <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\">Activation</span>\r\n                    </div> -->\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label\r\n                    [className]=\"employee.isActivated ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\r\n                    <input type=\"radio\" name=\"activation\" id=\"active\" [value]=true [(ngModel)]=\"employee.isActivated\"\r\n                        [disabled]=\"mode==='read'\">\r\n                    Active\r\n                </label>\r\n                <label\r\n                    [className]=\"employee.isActivated ? 'btn btn-outline-secondary' : 'btn btn-outline-secondary active'\">\r\n                    <!--  [className]=\"employee.isActivated ? 'btn btn-outline-secondary' : 'btn btn-outline-secondary active'\" -->\r\n                    <input type=\"radio\" name=\"activation\" id=\"deactive\" [value]=false [(ngModel)]=\"employee.isActivated\"\r\n                        [disabled]=\"mode==='read'\"> Deactive\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<div class=\" my-3\"></div>\r\n<div class=\"dropdown-divider  my-3\"></div>\r\n<h5 class=\"my-3\">Permissions</h5>\r\n<div class=\"form-row\">\r\n    <div class=\"col-12\">\r\n\r\n        <!-- permission -->\r\n        <div class=\"input-group\">\r\n            <!-- <div class=\"input-group-prepend\">\r\n                        <span class=\"input-group-text\">Permissions</span>\r\n                    </div> -->\r\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\r\n                <label\r\n                    [className]=\"employee.isAdmin ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\r\n                    <input type=\"checkbox\" autocomplete=\"off\" [value]=\"!employee.isAdmin\" [disabled]=\"mode==='read'\"\r\n                        [(ngModel)]=\"employee.isAdmin\">\r\n                    Administrator Permission\r\n                </label>\r\n                <label\r\n                    [className]=\"employee.isProjectManager ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\r\n                    <input type=\"checkbox\" autocomplete=\"off\" [value]=\"!employee.isProjectManager\"\r\n                        [disabled]=\"mode==='read'\" [(ngModel)]=\"employee.isProjectManager\"> PM/EM?? Manager\r\n                    Permission\r\n                </label>\r\n                <label\r\n                    [className]=\"employee.isHumanResources ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\r\n                    <input type=\"checkbox\" autocomplete=\"off\" [value]=\"!employee.isHumanResources \"\r\n                        [disabled]=\"mode==='read'\" [(ngModel)]=\"employee.isHumanResources\"> Humane Resource Permission\r\n                </label>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-creation/employee-creation.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-creation/employee-creation.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmployeePagesEmployeeCreationEmployeeCreationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\">\r\n        <!-- Title -->\r\n        <h3 class=\"display-4\">Create Employee</h3>\r\n        <!-- alert -->\r\n        <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\r\n\r\n\r\n        <app-employee [employee]=\"employee\" [mode]=\"mode\" [validUsername]=\"validUsername\"\r\n            (changeEmpCode)=\"validateEmployeeCode()\" (changeUsername)=\"validateUserName()\"\r\n            [validEmployeeCode]=\"validEmployeeCode\" [alerts]=\"alerts\"></app-employee>\r\n\r\n        <!-- Action section-->\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onCreate($event)\">Create</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\r\n        </div>\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n    </div>\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-edit/employee-edit.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-edit/employee-edit.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmployeePagesEmployeeEditEmployeeEditComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\">\r\n        <!-- Title -->\r\n        <h3 class=\"display-4\">Employee Edit</h3>\r\n        <!-- alert -->\r\n        <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\r\n\r\n        <app-employee [employee]=\"employee\" [mode]=\"mode\" [alerts]=\"alerts\" *ngIf=\"employee\"\r\n            [validUsername]=\"validUsername\" [validEmployeeCode]=\"validEmployeeCode\" (restPw)=\"openModal(template)\">\r\n        </app-employee>\r\n\r\n\r\n        <!-- Action section-->\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onUpdate()\">Update</button>\r\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!-- rest pw confirmation window -->\r\n<ng-template #template>\r\n    <div class=\"modal-header\">\r\n        <h4 class=\"modal-title pull-left\">Reset {{employee.empFirstName}}'s Password</h4>\r\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        Are you sure reset the password of <strong> {{employee.empFirstName}} {{employee.empLastName}} </strong> to\r\n        default?\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"modalRef.hide()\">Cancel</button>\r\n        <button type=\"button\" class=\"btn btn-danger  m-1 px-3\" (click)=\"resetPw()\">Reset</button>\r\n    </div>\r\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-list/employee-list.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-list/employee-list.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmployeePagesEmployeeListEmployeeListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\">\r\n        <h3 class=\"display-4\">Employee List</h3>\r\n        <div class=\"dropdown-divider \"></div>\r\n\r\n        <div class=\"d-flex flex-row-reverse\">\r\n            <button type=\"button\" class=\"btn btn-primary my-2\" routerLink=\"creation\">Create</button>\r\n        </div>\r\n\r\n        <p-table #dt [columns]=\"cols\" [value]=\"displayEmployee\" [paginator]=\"true\" [rows]=\"10\">\r\n            <ng-template pTemplate=\"caption\">\r\n                <div style=\"text-align: right\">\r\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\r\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\r\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\r\n                </div>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"header\" let-columns>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\">\r\n                        {{col.header}}\r\n                    </th>\r\n                </tr>\r\n                <tr>\r\n                    <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\r\n                        <input *ngSwitchCase=\"'empCode'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'empName'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'empUsername'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'supervisorName'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                        <input *ngSwitchCase=\"'approverName'\" pInputText type=\"text\"\r\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\r\n                    </th>\r\n                </tr>\r\n            </ng-template>\r\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\r\n                <tr [pSelectableRow]=\"rowData\">\r\n                    <td *ngFor=\"let col of columns\">\r\n                        <span *ngIf=\"col.field !=='activation' && col.field !=='button'\">{{rowData[col.field]}}</span>\r\n                        <h5 *ngIf=\"col.field ==='activation'\">\r\n                            <span class=\"badge badge-success\" *ngIf=\"rowData[col.field]\">Activated</span>\r\n                            <span class=\"badge badge-danger\" *ngIf=\"!rowData[col.field]\">Deactivated</span>\r\n                        </h5>\r\n                        <div *ngIf=\"col.field ==='button'\">\r\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                                [routerLink]=\"['view', rowData.employeeId]\">View</button>\r\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\r\n                                [routerLink]=\"['edit', rowData.employeeId]\">Edit</button>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n            </ng-template>\r\n        </p-table>\r\n    </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-view/employee-view.component.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-view/employee-view.component.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmployeePagesEmployeeViewEmployeeViewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\r\n    <div class=\"card-body\">\r\n        <!-- Title -->\r\n        <h3 class=\"display-4\">Employee</h3>\r\n\r\n        <app-employee [employee]=\"employee\" [mode]=\"mode\" [alerts]=\"alerts\" *ngIf=\"employee\"></app-employee>\r\n\r\n        <!-- Action section-->\r\n        <div class=\"dropdown-divider my-3\"></div>\r\n\r\n    </div>\r\n\r\n\r\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/employee/component/employee/employee.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/modules/employee/component/employee/employee.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmployeeComponentEmployeeEmployeeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pass{\r\n    color:green;\r\n    font-style: normal;\r\n}\r\n.error{\r\n    color:red;\r\n    font-style: normal;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9jb21wb25lbnQvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VtcGxveWVlL2NvbXBvbmVudC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N7XHJcbiAgICBjb2xvcjpncmVlbjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxufVxyXG4uZXJyb3J7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/employee/component/employee/employee.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/employee/component/employee/employee.component.ts ***!
    \***************************************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppModulesEmployeeComponentEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
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


    var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/employee/employee.service */
    "./src/app/core/service/employee/employee.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");

    var EmployeeComponent =
    /*#__PURE__*/
    function () {
      function EmployeeComponent(employeeService) {
        _classCallCheck(this, EmployeeComponent);

        this.employeeService = employeeService;
        this.greadeDropdown = null;
        this.employeeDropdown = null;
        this.restPw = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeUsername = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeEmpCode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.mode !== src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_3__["MODE"].Read) this.populateEmployeeDropdown();
          if (this.mode !== src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_3__["MODE"].Read) this.populateLabourGradeDropdown();
        }
      }, {
        key: "populateLabourGradeDropdown",
        value: function populateLabourGradeDropdown() {
          var _this = this;

          this.employeeService.getLabourGrades().subscribe(function (greades) {
            _this.greadeDropdown = [];
            console.log(greades);
            greades.forEach(function (g) {
              console.log(g);

              _this.greadeDropdown.push({
                label: "".concat(g.labourGradeName),
                value: g.labourGradeId
              });
            });
            console.log(_this.greadeDropdown);
          });
        }
      }, {
        key: "populateEmployeeDropdown",
        value: function populateEmployeeDropdown() {
          var _this2 = this;

          this.employeeService.getEmployees().subscribe(function (employees) {
            _this2.employeeDropdown = [];
            console.log(employees);
            employees.forEach(function (e) {
              console.log(e);

              _this2.employeeDropdown.push({
                label: "".concat(e.empFirstName, " ").concat(e.empLastName),
                value: e.employeeId
              });
            });
            console.log(_this2.employeeDropdown);
          });
        } // exit event of emp id field

      }, {
        key: "onExitEmployeeId",
        value: function onExitEmployeeId() {
          this.changeEmpCode.emit('payload');
        } // exit event of user name

      }, {
        key: "onExitUserName",
        value: function onExitUserName() {
          this.changeUsername.emit('payload');
        } // click reset password btn

      }, {
        key: "onRestPw",
        value: function onRestPw() {
          this.restPw.emit('payload');
        }
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmployeeComponent.prototype, "employee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmployeeComponent.prototype, "mode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmployeeComponent.prototype, "validUsername", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmployeeComponent.prototype, "validEmployeeCode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], EmployeeComponent.prototype, "alerts", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EmployeeComponent.prototype, "restPw", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EmployeeComponent.prototype, "changeUsername", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], EmployeeComponent.prototype, "changeEmpCode", void 0);
    EmployeeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/component/employee/employee.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee.component.css */
      "./src/app/modules/employee/component/employee/employee.component.css")).default]
    })], EmployeeComponent);
    /***/
  },

  /***/
  "./src/app/modules/employee/employee-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/employee/employee-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: EmployeeRoutingModule */

  /***/
  function srcAppModulesEmployeeEmployeeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutingModule", function () {
      return EmployeeRoutingModule;
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


    var _pages_employee_creation_employee_creation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/employee-creation/employee-creation.component */
    "./src/app/modules/employee/pages/employee-creation/employee-creation.component.ts");
    /* harmony import */


    var _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/employee-list/employee-list.component */
    "./src/app/modules/employee/pages/employee-list/employee-list.component.ts");
    /* harmony import */


    var _pages_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/employee-view/employee-view.component */
    "./src/app/modules/employee/pages/employee-view/employee-view.component.ts");
    /* harmony import */


    var _pages_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/employee-edit/employee-edit.component */
    "./src/app/modules/employee/pages/employee-edit/employee-edit.component.ts");

    var routes = [{
      path: '',
      component: _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"],
      data: {
        breadcrumb: null
      }
    }, {
      path: 'view/:empId',
      component: _pages_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeViewComponent"],
      data: {
        breadcrumb: 'Employee View'
      }
    }, {
      path: 'edit/:empId',
      component: _pages_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_6__["EmployeeEditComponent"],
      data: {
        breadcrumb: 'Employee Edit'
      }
    }, {
      path: 'creation',
      component: _pages_employee_creation_employee_creation_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeCreationComponent"],
      data: {
        breadcrumb: 'Employee Creation'
      }
    }];

    var EmployeeRoutingModule = function EmployeeRoutingModule() {
      _classCallCheck(this, EmployeeRoutingModule);
    };

    EmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmployeeRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/employee/employee.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/modules/employee/employee.module.ts ***!
    \*****************************************************/

  /*! exports provided: EmployeeModule */

  /***/
  function srcAppModulesEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
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


    var _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./employee-routing.module */
    "./src/app/modules/employee/employee-routing.module.ts");
    /* harmony import */


    var _pages_employee_creation_employee_creation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/employee-creation/employee-creation.component */
    "./src/app/modules/employee/pages/employee-creation/employee-creation.component.ts");
    /* harmony import */


    var primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! primeng/dropdown */
    "./node_modules/primeng/fesm2015/primeng-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var _component_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./component/employee/employee.component */
    "./src/app/modules/employee/component/employee/employee.component.ts");
    /* harmony import */


    var _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/employee-list/employee-list.component */
    "./src/app/modules/employee/pages/employee-list/employee-list.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _pages_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./pages/employee-view/employee-view.component */
    "./src/app/modules/employee/pages/employee-view/employee-view.component.ts");
    /* harmony import */


    var _pages_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./pages/employee-edit/employee-edit.component */
    "./src/app/modules/employee/pages/employee-edit/employee-edit.component.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var primeng_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! primeng/table */
    "./node_modules/primeng/fesm2015/primeng-table.js");

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"], _pages_employee_creation_employee_creation_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeCreationComponent"], _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"], _pages_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeViewComponent"], _pages_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeEditComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], //material
      _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], //primeng
      primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_16__["TableModule"], // bootstrap
      ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]]
    })], EmployeeModule);
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-creation/employee-creation.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-creation/employee-creation.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmployeePagesEmployeeCreationEmployeeCreationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWUvcGFnZXMvZW1wbG95ZWUtY3JlYXRpb24vZW1wbG95ZWUtY3JlYXRpb24uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-creation/employee-creation.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-creation/employee-creation.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: EmployeeCreationComponent */

  /***/
  function srcAppModulesEmployeePagesEmployeeCreationEmployeeCreationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeCreationComponent", function () {
      return EmployeeCreationComponent;
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


    var src_app_shared_model_Employee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/Employee */
    "./src/app/shared/model/Employee.ts");
    /* harmony import */


    var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/employee/employee.service */
    "./src/app/core/service/employee/employee.service.ts");
    /* harmony import */


    var src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/model/Alert */
    "./src/app/shared/model/Alert.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");

    var EmployeeCreationComponent =
    /*#__PURE__*/
    function () {
      function EmployeeCreationComponent(employeeService) {
        _classCallCheck(this, EmployeeCreationComponent);

        this.employeeService = employeeService;
        this.grade = null;
        this.employeeDropdown = null; // userName validation

        this.validUsername = false;
        this.validEmployeeCode = false;
        this.alerts = {};
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_5__["MODE"].Create;
      }

      _createClass(EmployeeCreationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.employee = new src_app_shared_model_Employee__WEBPACK_IMPORTED_MODULE_2__["Employee"]();
          this.employee.isActivated = true;
          this.employee.empPassword = "01234";
        } // btn click event of creation

      }, {
        key: "onCreate",
        value: function onCreate(e) {
          if (!this.validatePage()) return;
          console.log("POST employee");
          console.log(JSON.stringify(this.employee));
          this.employeeService.postEmployee(this.employee).subscribe();
        } // btn click event of cancel

      }, {
        key: "onCancel",
        value: function onCancel(e) {}
      }, {
        key: "validatePage",
        value: function validatePage() {
          var result = true;

          if (!this.employee.empFirstName === null || this.employee.empFirstName.match(/^ *$/) !== null) {
            this.alerts['firstName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, "First Name cannot be empty");
            result = false;
          }

          if (!this.employee.empLastName === null || this.employee.empLastName.match(/^ *$/) !== null) {
            this.alerts['lastName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, "Last Name cannot be empty");
            result = false;
          }

          if (!this.validUsername) {
            this.alerts['userName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, "User Name: ".concat(this.employee.empUsername, " is not allowed"));
            result = false;
          }

          if (!this.validEmployeeCode) {
            this.alerts['employeeCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_4__["Alert"]('danger', 5000, "Employee ID : ".concat(this.employee.empCode, " is not allowed"));
            result = false;
          }

          return result;
        }
      }, {
        key: "displayErrorMsg",
        value: function displayErrorMsg(fieldName) {
          return this.alerts[fieldName] != '' ? this.alerts[fieldName].msg : null;
        } // exit event of emp id field

      }, {
        key: "validateEmployeeCode",
        value: function validateEmployeeCode() {
          var _this3 = this;

          this.employeeService.checkUserEmployeeCodeOK(this.employee.empCode).subscribe(function (response) {
            console.log(response);
            _this3.validEmployeeCode = response;
          });
        } // exit event of user name

      }, {
        key: "validateUserName",
        value: function validateUserName() {
          var _this4 = this;

          this.employeeService.checkUserNameOK(this.employee.empUsername).subscribe(function (response) {
            console.log(response);
            _this4.validUsername = response;
          });
        }
      }]);

      return EmployeeCreationComponent;
    }();

    EmployeeCreationComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"]
      }];
    };

    EmployeeCreationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-creation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-creation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-creation/employee-creation.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-creation.component.css */
      "./src/app/modules/employee/pages/employee-creation/employee-creation.component.css")).default]
    })], EmployeeCreationComponent);
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-edit/employee-edit.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-edit/employee-edit.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmployeePagesEmployeeEditEmployeeEditComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWUvcGFnZXMvZW1wbG95ZWUtZWRpdC9lbXBsb3llZS1lZGl0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-edit/employee-edit.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-edit/employee-edit.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EmployeeEditComponent */

  /***/
  function srcAppModulesEmployeePagesEmployeeEditEmployeeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeEditComponent", function () {
      return EmployeeEditComponent;
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


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/service/employee/employee.service */
    "./src/app/core/service/employee/employee.service.ts");
    /* harmony import */


    var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-bootstrap/modal */
    "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
    /* harmony import */


    var src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/model/Alert */
    "./src/app/shared/model/Alert.ts");

    var EmployeeEditComponent =
    /*#__PURE__*/
    function () {
      function EmployeeEditComponent(route, employeeService, modalService) {
        _classCallCheck(this, EmployeeEditComponent);

        this.route = route;
        this.employeeService = employeeService;
        this.modalService = modalService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__["MODE"].Update;
        this.alerts = {};
        this.validUsername = true;
        this.validEmployeeCode = true;
      }

      _createClass(EmployeeEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('empId');

            _this5.employeeService.getEmployee(id).subscribe(function (e) {
              return _this5.employee = e;
            });
          });
        }
      }, {
        key: "openModal",
        value: function openModal(template) {
          console.log('opne');
          console.log(template);
          this.modalRef = this.modalService.show(template);
        }
      }, {
        key: "resetPw",
        value: function resetPw() {
          this.employee.empPassword = '01234';
        } // btn click event of creation

      }, {
        key: "onUpdate",
        value: function onUpdate() {
          if (!this.validatePage()) return;
          console.log("POST employee");
          console.log(JSON.stringify(this.employee));
          this.employeeService.postEmployee(this.employee).subscribe();
        } // btn click event of cancel

      }, {
        key: "onCancel",
        value: function onCancel(e) {}
      }, {
        key: "validatePage",
        value: function validatePage() {
          var result = true;

          if (!this.employee.empFirstName === null || this.employee.empFirstName.match(/^ *$/) !== null) {
            this.alerts['firstName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_6__["Alert"]('danger', 5000, "First Name cannot be empty");
            result = false;
          }

          if (!this.employee.empLastName === null || this.employee.empLastName.match(/^ *$/) !== null) {
            this.alerts['lastName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_6__["Alert"]('danger', 5000, "Last Name cannot be empty");
            result = false;
          }

          if (!this.validUsername) {
            this.alerts['userName'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_6__["Alert"]('danger', 5000, "User Name: ".concat(this.employee.empUsername, " is not allowed"));
            result = false;
          }

          if (!this.validEmployeeCode) {
            this.alerts['employeeCode'] = new src_app_shared_model_Alert__WEBPACK_IMPORTED_MODULE_6__["Alert"]('danger', 5000, "Employee ID : ".concat(this.employee.empCode, " is not allowed"));
            result = false;
          }

          return result;
        }
      }]);

      return EmployeeEditComponent;
    }();

    EmployeeEditComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
      }];
    };

    EmployeeEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-edit.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-edit/employee-edit.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-edit.component.css */
      "./src/app/modules/employee/pages/employee-edit/employee-edit.component.css")).default]
    })], EmployeeEditComponent);
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-list/employee-list.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-list/employee-list.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmployeePagesEmployeeListEmployeeListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWUvcGFnZXMvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-list/employee-list.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-list/employee-list.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EmployeeListComponent */

  /***/
  function srcAppModulesEmployeePagesEmployeeListEmployeeListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function () {
      return EmployeeListComponent;
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


    var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/employee/employee.service */
    "./src/app/core/service/employee/employee.service.ts");

    var EmployeeListComponent =
    /*#__PURE__*/
    function () {
      function EmployeeListComponent(employeeService) {
        _classCallCheck(this, EmployeeListComponent);

        this.employeeService = employeeService;
        this.displayEmployee = [];
      }

      _createClass(EmployeeListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initEmployees();
          this.initCols();
        }
      }, {
        key: "initEmployees",
        value: function initEmployees() {
          var _this6 = this;

          this.employeeService.getEmployees().subscribe(function (res) {
            console.log(res);
            res.forEach(function (i) {
              console.log(i);

              _this6.displayEmployee.push({
                "employeeId": i.employeeId,
                "empCode": i.empCode,
                "empName": "".concat(i.empFirstName, " ").concat(i.empLastName),
                "empUsername": i.empUsername,
                'supervisorName': "".concat(i.supervisor.empFirstName, " ").concat(i.supervisor.empLastName),
                'approverName': "".concat(i.timesheetApprover.empFirstName, " ").concat(i.timesheetApprover.empLastName),
                'activation': i.isActivated
              });
            });
            console.log(_this6.displayEmployee);
          });
        }
      }, {
        key: "initCols",
        value: function initCols() {
          this.cols = [{
            field: 'empCode',
            header: 'Employee ID'
          }, {
            field: 'empName',
            header: 'Employee Name'
          }, {
            field: 'empUsername',
            header: 'User Name'
          }, {
            field: 'supervisorName',
            header: 'Supervisor'
          }, {
            field: 'approverName',
            header: 'Approver'
          }, {
            field: 'activation',
            header: 'Activation'
          }, {
            field: 'button',
            header: ''
          }];
        }
      }]);

      return EmployeeListComponent;
    }();

    EmployeeListComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    EmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-list/employee-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-list.component.css */
      "./src/app/modules/employee/pages/employee-list/employee-list.component.css")).default]
    })], EmployeeListComponent);
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-view/employee-view.component.css":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-view/employee-view.component.css ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmployeePagesEmployeeViewEmployeeViewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWUvcGFnZXMvZW1wbG95ZWUtdmlldy9lbXBsb3llZS12aWV3LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-view/employee-view.component.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-view/employee-view.component.ts ***!
    \*********************************************************************************/

  /*! exports provided: EmployeeViewComponent */

  /***/
  function srcAppModulesEmployeePagesEmployeeViewEmployeeViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeViewComponent", function () {
      return EmployeeViewComponent;
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


    var src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/service/employee/employee.service */
    "./src/app/core/service/employee/employee.service.ts");
    /* harmony import */


    var src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/model/MODE */
    "./src/app/shared/model/MODE.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EmployeeViewComponent =
    /*#__PURE__*/
    function () {
      function EmployeeViewComponent(route, employeeService) {
        _classCallCheck(this, EmployeeViewComponent);

        this.route = route;
        this.employeeService = employeeService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_3__["MODE"].Read;
        this.alerts = {};
      }

      _createClass(EmployeeViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('empId');

            _this7.employeeService.getEmployee(id).subscribe(function (e) {
              return _this7.employee = e;
            });
          });
        }
      }]);

      return EmployeeViewComponent;
    }();

    EmployeeViewComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }];
    };

    EmployeeViewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-view',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-view.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-view/employee-view.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-view.component.css */
      "./src/app/modules/employee/pages/employee-view/employee-view.component.css")).default]
    })], EmployeeViewComponent);
    /***/
  },

  /***/
  "./src/app/shared/model/Alert.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/model/Alert.ts ***!
    \***************************************/

  /*! exports provided: Alert */

  /***/
  function srcAppSharedModelAlertTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Alert", function () {
      return Alert;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Alert = function Alert(type, time, msg) {
      _classCallCheck(this, Alert);

      this.type = type;
      this.timeout = time;
      this.msg = msg;
    };
    /***/

  },

  /***/
  "./src/app/shared/model/Employee.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/model/Employee.ts ***!
    \******************************************/

  /*! exports provided: Employee */

  /***/
  function srcAppSharedModelEmployeeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Employee", function () {
      return Employee;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _LabourGrade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./LabourGrade */
    "./src/app/shared/model/LabourGrade.ts");

    var Employee = function Employee() {
      _classCallCheck(this, Employee);

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
    };
    /***/

  },

  /***/
  "./src/app/shared/model/LabourGrade.ts":
  /*!*********************************************!*\
    !*** ./src/app/shared/model/LabourGrade.ts ***!
    \*********************************************/

  /*! exports provided: LabourGrade */

  /***/
  function srcAppSharedModelLabourGradeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LabourGrade", function () {
      return LabourGrade;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var LabourGrade = function LabourGrade() {
      _classCallCheck(this, LabourGrade);

      this.labourGradeId = 0;
      this.labourGradeName = '';
    };
    /***/

  }
}]);
//# sourceMappingURL=modules-employee-employee-module-es5.js.map