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


    __webpack_exports__["default"] = "<div class=\"dropdown-divider  my-3\"></div>\n\n<h5 class=\"my-3\">Employee Information</h5>\n\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- first name -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">First Name</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empFirstName\" [readOnly]=\"mode ==='read'\">\n\n        </div>\n        <span *ngIf=\"alerts.firstName\" class=\"error my-2\"><small>{{alerts.firstName.msg}}</small></span>\n\n\n\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n\n        <!-- last name -->\n        <div class=\"input-group \">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Last Name</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empLastName\" [readOnly]=\"mode ==='read'\">\n        </div>\n        <span *ngIf=\"alerts.lastName\" class=\"error my-2\"><small>{{alerts.lastName.msg}}</small></span>\n\n\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-5\">\n\n        <!-- user name -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">User Name</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empUsername\" (blur)=\"onExitUserName()\"\n                [readOnly]=\"mode ==='read' || mode=='update'\">\n        </div>\n\n    </div>\n    <div class=\"col-1\">\n        <div *ngIf=\"(mode ==='create' || mode ==='update')\">\n            <i *ngIf=\"validUsername\" class=\"material-icons pass my-2\">check_circle</i>\n            <i *ngIf=\"!validUsername\" class=\"material-icons error  my-2\">error</i>\n        </div>\n    </div>\n    <div class=\"col-5\">\n        <!-- password -->\n        <div class=\"input-group\" *ngIf=\"mode==='create'\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Password</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empPassword\" [readOnly]=\"true\">\n        </div>\n        <button *ngIf=\"mode==='update'\" type=\"button\" class=\"btn btn-outline-secondary  m-1 px-3\"\n            (click)=\"onRestPw()\">Reset\n            Password</button>\n\n\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-5\">\n        <!-- employe ID -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Employee ID</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"employee.empCode\" (blur)=\"onExitEmployeeId()\"\n                [readOnly]=\"mode ==='read' || mode=='update'\">\n        </div>\n\n    </div>\n    <div class=\"col-1\">\n        <div *ngIf=\"(mode ==='create' || mode ==='update')\">\n            <i *ngIf=\"validEmployeeCode\" class=\"material-icons pass my-2\">check_circle</i>\n            <i *ngIf=\"!validEmployeeCode\" class=\"material-icons error  my-2\">error</i>\n        </div>\n    </div>\n    <div class=\"col-6\"></div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-3\"></div>\n<div class=\"form-row\">\n    <div class=\"col-5\">\n\n        <!-- labour grade -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Labour Grade</span>\n            </div>\n            <input type=\"text\" class=\"form-control\" value=\"{{employee.labourGrade.labourGradeName}}\"\n                *ngIf=\"mode==='read'\" [readOnly]=\"true\">\n            <p-dropdown class=\"form-control\" [options]=\"greadeDropdown\" [(ngModel)]=\"selectedGrade\"\n                *ngIf=\"mode ==='create' || mode==='update'\"\n                placeholder=\"{{employee.labourGrade ? employee.labourGrade.labourGradeName : 'choose a Labour Grade'}}\"\n                optionLabel=\"label\" [style]=\"{'border-width':'0px','padding':'0px','width':'100%'}\"></p-dropdown>\n        </div>\n        <span *ngIf=\"alerts.labourGrade\" class=\"error my-2\"><small>{{alerts.labourGrade.msg}}</small></span>\n\n    </div>\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n\n        <!-- supervisor -->\n        <div class=\"input-group\">\n            <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">Supervisor</span>\n            </div>\n            <input type=\"text\" class=\"form-control\"\n                value=\"{{employee.supervisor.empFirstName}} {{employee.supervisor.empLastName}}\" *ngIf=\"mode==='read'\"\n                [readOnly]=\"true\">\n            <p-dropdown class=\"form-control\" [options]=\"employeeDropdown\" [(ngModel)]=\"selectedSupervisor\"\n                *ngIf=\"mode ==='create' || mode==='update'\"\n                placeholder=\"{{employee.supervisor ? employee.supervisor.empFirstName + ' ' + employee.supervisor.empLastName : 'choose a supervisor'}}\"\n                optionLabel=\"label\" [style]=\"{'border-width':'0px','padding':'0px','width':'100%'}\"></p-dropdown>\n        </div>\n        <span *ngIf=\"alerts.supervisor\" class=\"error my-2\"><small>{{alerts.supervisor.msg}}</small></span>\n\n\n    </div>\n    <div class=\"col-1\"></div>\n</div>\n<div class=\"  my-3\"></div>\n\n<div class=\"dropdown-divider  my-3\"></div>\n<h5 class=\"my-3\">Activation</h5>\n<div class=\"form-row\">\n    <div class=\"col-12\">\n\n        <!-- active/deactive -->\n        <div class=\"input-group\">\n            <!-- <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Activation</span>\n                    </div> -->\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                <label\n                    [className]=\"employee.isActivated ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\n                    <input type=\"radio\" name=\"activation\" id=\"active\" [value]=true [(ngModel)]=\"employee.isActivated\"\n                        [disabled]=\"mode==='read'\">\n                    Active\n                </label>\n                <label\n                    [className]=\"employee.isActivated ? 'btn btn-outline-secondary' : 'btn btn-outline-secondary active'\">\n                    <!--  [className]=\"employee.isActivated ? 'btn btn-outline-secondary' : 'btn btn-outline-secondary active'\" -->\n                    <input type=\"radio\" name=\"activation\" id=\"deactive\" [value]=false [(ngModel)]=\"employee.isActivated\"\n                        [disabled]=\"mode==='read'\"> Deactive\n                </label>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\" my-3\"></div>\n<div class=\"dropdown-divider  my-3\"></div>\n<h5 class=\"my-3\">Permissions</h5>\n<div class=\"form-row\">\n    <div class=\"col-12\">\n\n        <!-- permission -->\n        <div class=\"input-group\">\n            <!-- <div class=\"input-group-prepend\">\n                        <span class=\"input-group-text\">Permissions</span>\n                    </div> -->\n            <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n                <label\n                    [className]=\"employee.isAdmin ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\n                    <input type=\"checkbox\" autocomplete=\"off\" [value]=\"!employee.isAdmin\" [disabled]=\"mode==='read'\"\n                        [(ngModel)]=\"employee.isAdmin\">\n                    Administrator Permission\n                </label>\n                <label\n                    [className]=\"employee.isProjectManager ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\n                    <input type=\"checkbox\" autocomplete=\"off\" [value]=\"!employee.isProjectManager\"\n                        [disabled]=\"mode==='read'\" [(ngModel)]=\"employee.isProjectManager\"> PM/EM?? Manager\n                    Permission\n                </label>\n                <label\n                    [className]=\"employee.isHumanResources ? 'btn btn-outline-secondary active' : 'btn btn-outline-secondary'\">\n                    <input type=\"checkbox\" autocomplete=\"off\" [value]=\"!employee.isHumanResources \"\n                        [disabled]=\"mode==='read'\" [(ngModel)]=\"employee.isHumanResources\"> Humane Resource Permission\n                </label>\n            </div>\n\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.html":
  /*!***********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.html ***!
    \***********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmployeePagesEmployeeChangeApproverEmployeeChangeApproverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h3 class=\"display-4\">Chanage Timesheet Approver</h3>\n        <div class=\"dropdown-divider \"></div>\n        <p class=\"lead\">The table below lists all your employees that you supervise.</p>\n\n        <p-table #dt [columns]=\"cols\" [value]=\"displayEmployee\" [paginator]=\"true\" [rows]=\"10\"\n            [style]=\"{'text-align':'center'}\">\n            <ng-template pTemplate=\"caption\">\n                <div>\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                </div>\n            </ng-template>\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th style=\"width: 120px;\">Employee ID</th>\n                    <th>Employee Name</th>\n                    <th>Approver</th>\n                    <th>Activation</th>\n                    <th style=\"width: 250px;\"></th>\n                </tr>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                        <input *ngSwitchCase=\"'empCode'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'empName'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'empUsername'\" pInputText type=\"text\"\n                            style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'approverName'\" pInputText type=\"text\"\n                            style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                <tr [pSelectableRow]=\"rowData\">\n                    <td *ngFor=\"let col of columns\">\n                        <span *ngIf=\"col.field !=='activation' && col.field !=='button'\">{{rowData[col.field]}}</span>\n                        <h5 *ngIf=\"col.field ==='activation'\">\n                            <span class=\"badge badge-success\" *ngIf=\"rowData[col.field]\">Activated</span>\n                            <span class=\"badge badge-danger\" *ngIf=\"!rowData[col.field]\">Deactivated</span>\n                        </h5>\n                        <div *ngIf=\"col.field ==='button'\">\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\n                                (click)=\"openModal(rowData[employeeId],template)\">Change Timesheet Approver</button>\n                        </div>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>\n\n<!-- rest pw confirmation window -->\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Change Timesheet Approver</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        <span class=\"lead\">Employee Information</span>\n        <table class=\"container\">\n            <tr class=\"row\">\n                <td class=\"col-6\"><strong>Employee Name:</strong>\n                    {{selectedEmp.empFirstName}} {{selectedEmp.empLastName}}</td>\n                <td class=\"col-6\"><strong>Employee Id:</strong>\n                    {{selectedEmp.employeeId}}</td>\n            </tr>\n        </table>\n        <div class=\"dropdown-divider \"></div>\n        <span class=\"lead\">New Timesheet Approver</span>\n        <p-dropdown [options]=\"employeeDropdown\" [(ngModel)]=\"selectedEmp.timesheetApprover\" filter=\"true\"\n            placeholder=\"{{selectedEmp.timesheetApprover ? (selectedEmp.timesheetApprover.empFirstName + ' ' + selectedEmp.timesheetApprover.empLastName) : 'choose an employee'}}\"\n            optionLabel=\"label\" [style]=\"{'padding':'0px','width':'100%'}\"></p-dropdown>\n    </div>\n\n    <!-- 'border-width':'0px', -->\n\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"modalRef.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger  m-1 px-3\" (click)=\"onSaveChange()\">Save Change</button>\n    </div>\n</ng-template>";
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


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Create Employee</h3>\n        <!-- alert -->\n        <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\n\n\n        <app-employee [employee]=\"employee\" [mode]=\"mode\" [validUsername]=\"validUsername\"\n            (changeEmpCode)=\"validateEmployeeCode()\" (changeUsername)=\"validateUserName()\"\n            [validEmployeeCode]=\"validEmployeeCode\" [alerts]=\"alerts\"></app-employee>\n\n        <!-- Action section-->\n        <div class=\"dropdown-divider my-3\"></div>\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onCreate($event)\">Create</button>\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n        <div class=\"dropdown-divider my-3\"></div>\n    </div>\n\n\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Employee Edit</h3>\n        <!-- alert -->\n        <shared-alertPromp [alerts]=\"alerts\"></shared-alertPromp>\n\n        <app-employee [employee]=\"employee\" [mode]=\"mode\" [alerts]=\"alerts\" *ngIf=\"employee\"\n            [validUsername]=\"validUsername\" [validEmployeeCode]=\"validEmployeeCode\" (restPw)=\"openModal(template)\">\n        </app-employee>\n\n\n        <!-- Action section-->\n        <div class=\"dropdown-divider my-3\"></div>\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary  m-1 px-3\" (click)=\"onUpdate()\">Update</button>\n            <button type=\"button\" class=\"btn btn-primary m-1 px-2\" (click)=\"onCancel($event)\">Cancel</button>\n        </div>\n\n    </div>\n</div>\n\n<!-- rest pw confirmation window -->\n<ng-template #template *ngIf=\"selectedEmp\">\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Reset {{employee.empFirstName}}'s Password</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n            <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\">\n        Are you sure reset the password of <strong> {{employee.empFirstName}} {{employee.empLastName}} </strong> to\n        default?\n    </div>\n    <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\" (click)=\"modalRef.hide()\">Cancel</button>\n        <button type=\"button\" class=\"btn btn-danger  m-1 px-3\" (click)=\"resetPw()\">Reset</button>\n    </div>\n</ng-template>";
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


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <h3 class=\"display-4\">Employee List</h3>\n        <div class=\"dropdown-divider \"></div>\n\n        <div class=\"d-flex flex-row-reverse\">\n            <button type=\"button\" class=\"btn btn-primary my-2\" routerLink=\"creation\">Create</button>\n        </div>\n\n        <p-table #dt [columns]=\"cols\" [value]=\"displayEmployee\" [paginator]=\"true\" [rows]=\"10\"\n            [style]=\"{'text-align':'center'}\">\n            <ng-template pTemplate=\"caption\">\n                <div style=\"text-align: right\">\n                    <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                    <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\"\n                        (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n                </div>\n            </ng-template>\n            <ng-template pTemplate=\"header\" let-columns>\n                <tr>\n                    <th *ngFor=\"let col of columns\">\n                        {{col.header}}\n                    </th>\n                </tr>\n                <tr>\n                    <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                        <input *ngSwitchCase=\"'empCode'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'empName'\" pInputText type=\"text\" style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'empUsername'\" pInputText type=\"text\"\n                            style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'supervisorName'\" pInputText type=\"text\"\n                            style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                        <input *ngSwitchCase=\"'approverName'\" pInputText type=\"text\"\n                            style=\"margin-left:-6px;width: 100%;\"\n                            (input)=\"dt.filter($event.target.value, col.field, 'contains')\">\n                    </th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n                <tr [pSelectableRow]=\"rowData\">\n                    <td *ngFor=\"let col of columns\">\n                        <span *ngIf=\"col.field !=='activation' && col.field !=='button'\">{{rowData[col.field]}}</span>\n                        <h5 *ngIf=\"col.field ==='activation'\">\n                            <span class=\"badge badge-success\" *ngIf=\"rowData[col.field]\">Activated</span>\n                            <span class=\"badge badge-danger\" *ngIf=\"!rowData[col.field]\">Deactivated</span>\n                        </h5>\n                        <div *ngIf=\"col.field ==='button'\">\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\n                                [routerLink]=\"['view', rowData.employeeId]\">View</button>\n                            <button type=\"button\" class=\"btn btn-link btn-sm\"\n                                [routerLink]=\"['edit', rowData.employeeId]\">Edit</button>\n                        </div>\n                    </td>\n                </tr>\n            </ng-template>\n        </p-table>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesEmployeePagesEmployeeResetPwEmployeeResetPwComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex justify-content-center align-items-center height70vh\">\n    <div class=\"card\" style=\"width:400px\">\n        <h4 class=\"card-header\">Change Your Password</h4>\n        <div class=\"card-body\">\n            <form [formGroup]=\"changPwForm\" (ngSubmit)=\"onSubmit()\">\n                <div class=\"form-group\">\n                    <label for=\"username\">Username</label>\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" readonly />\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"password\">Old Password</label>\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.password.errors.required\">Old Password is required</div>\n                        <div *ngIf=\"f.password.errors.minLength\">minLength Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"passwordNew\">New Password</label>\n                    <input type=\"password\" formControlName=\"passwordNew\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.passwordNew.errors }\" />\n                    <div *ngIf=\"submitted && f.passwordNew.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.passwordNew.errors.required\">New Password is required</div>\n                    </div>\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"passwordNewRe\">Confirm New Password</label>\n                    <input type=\"password\" formControlName=\"passwordNewRe\" class=\"form-control\"\n                        [ngClass]=\"{ 'is-invalid': submitted && f.passwordNewRe.errors }\" />\n                    <div *ngIf=\"submitted && f.passwordNewRe.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.passwordNewRe.errors.required\">Confirm Password is required</div>\n                    </div>\n                </div>\n                <div *ngIf=\"changPwForm.errors?.passwordMatch && (changPwForm.touched || changPwForm.dirty)\"\n                    class=\"cross-validation-error-message alert alert-danger\">\n                    New Password is not matched.\n                </div>\n\n                <button type=\"button\" class=\"btn btn-secondary  m-1 px-3\"\n                    routerLink=\"/content/dashboard\">Cancel</button>\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\n                    Submit\n                </button>\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error.message}}</div>\n            </form>\n        </div>\n    </div>\n</div>";
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


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Employee</h3>\n\n        <app-employee [employee]=\"employee\" [mode]=\"mode\" [alerts]=\"alerts\" *ngIf=\"employee\"></app-employee>\n\n        <!-- Action section-->\n        <div class=\"dropdown-divider my-3\"></div>\n\n    </div>\n\n\n</div>";
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


    __webpack_exports__["default"] = ".pass{\n    color:green;\n    font-style: normal;\n}\n.error{\n    color:red;\n    font-style: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9jb21wb25lbnQvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2VtcGxveWVlL2NvbXBvbmVudC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhc3N7XG4gICAgY29sb3I6Z3JlZW47XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLmVycm9ye1xuICAgIGNvbG9yOnJlZDtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG59Il19 */";
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
    /* harmony import */


    var _pages_employee_change_approver_employee_change_approver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/employee-change-approver/employee-change-approver.component */
    "./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.ts");
    /* harmony import */


    var _pages_employee_reset_pw_employee_reset_pw_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/employee-reset-pw/employee-reset-pw.component */
    "./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.ts");

    var routes = [{
      path: '',
      component: _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeListComponent"],
      data: {
        breadcrumb: null
      }
    }, {
      path: 'changePassword',
      component: _pages_employee_reset_pw_employee_reset_pw_component__WEBPACK_IMPORTED_MODULE_8__["EmployeeResetPWComponent"],
      data: {
        breadcrumb: 'Change Password'
      }
    }, {
      path: 'supervisor/changeTimesheetApprover',
      component: _pages_employee_change_approver_employee_change_approver_component__WEBPACK_IMPORTED_MODULE_7__["EmployeeChangeApproverComponent"],
      data: {
        breadcrumb: 'Change Timesheet Approver'
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
    /* harmony import */


    var primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! primeng/inputtext */
    "./node_modules/primeng/fesm2015/primeng-inputtext.js");
    /* harmony import */


    var primeng_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! primeng/button */
    "./node_modules/primeng/fesm2015/primeng-button.js");
    /* harmony import */


    var primeng_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! primeng/dialog */
    "./node_modules/primeng/fesm2015/primeng-dialog.js");
    /* harmony import */


    var primeng_toast__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! primeng/toast */
    "./node_modules/primeng/fesm2015/primeng-toast.js");
    /* harmony import */


    var primeng_messages__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! primeng/messages */
    "./node_modules/primeng/fesm2015/primeng-messages.js");
    /* harmony import */


    var primeng_message__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! primeng/message */
    "./node_modules/primeng/fesm2015/primeng-message.js");
    /* harmony import */


    var _pages_employee_change_approver_employee_change_approver_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./pages/employee-change-approver/employee-change-approver.component */
    "./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.ts");
    /* harmony import */


    var _pages_employee_reset_pw_employee_reset_pw_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./pages/employee-reset-pw/employee-reset-pw.component */
    "./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.ts");

    var EmployeeModule = function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    };

    EmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_component_employee_employee_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeComponent"], _pages_employee_creation_employee_creation_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeCreationComponent"], _pages_employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_10__["EmployeeListComponent"], _pages_employee_view_employee_view_component__WEBPACK_IMPORTED_MODULE_12__["EmployeeViewComponent"], _pages_employee_edit_employee_edit_component__WEBPACK_IMPORTED_MODULE_13__["EmployeeEditComponent"], _pages_employee_change_approver_employee_change_approver_component__WEBPACK_IMPORTED_MODULE_23__["EmployeeChangeApproverComponent"], _pages_employee_reset_pw_employee_reset_pw_component__WEBPACK_IMPORTED_MODULE_24__["EmployeeResetPWComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _employee_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_11__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], //material
      _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"], //primeng
      primeng_dropdown__WEBPACK_IMPORTED_MODULE_5__["DropdownModule"], primeng_table__WEBPACK_IMPORTED_MODULE_16__["TableModule"], primeng_inputtext__WEBPACK_IMPORTED_MODULE_17__["InputTextModule"], primeng_dialog__WEBPACK_IMPORTED_MODULE_19__["DialogModule"], primeng_button__WEBPACK_IMPORTED_MODULE_18__["ButtonModule"], primeng_toast__WEBPACK_IMPORTED_MODULE_20__["ToastModule"], primeng_messages__WEBPACK_IMPORTED_MODULE_21__["MessagesModule"], primeng_message__WEBPACK_IMPORTED_MODULE_22__["MessageModule"], // bootstrap
      ngx_bootstrap__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(), ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_14__["ModalModule"].forRoot(), _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]]
    })], EmployeeModule);
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.css":
  /*!********************************************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.css ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmployeePagesEmployeeChangeApproverEmployeeChangeApproverComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWUvcGFnZXMvZW1wbG95ZWUtY2hhbmdlLWFwcHJvdmVyL2VtcGxveWVlLWNoYW5nZS1hcHByb3Zlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.ts":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.ts ***!
    \*******************************************************************************************************/

  /*! exports provided: EmployeeChangeApproverComponent */

  /***/
  function srcAppModulesEmployeePagesEmployeeChangeApproverEmployeeChangeApproverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeChangeApproverComponent", function () {
      return EmployeeChangeApproverComponent;
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


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");
    /* harmony import */


    var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-bootstrap */
    "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
    /* harmony import */


    var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/service/my-toast.service */
    "./src/app/core/service/my-toast.service.ts");

    var EmployeeChangeApproverComponent =
    /*#__PURE__*/
    function () {
      function EmployeeChangeApproverComponent(employeeService, modalService, myToastService, authService) {
        _classCallCheck(this, EmployeeChangeApproverComponent);

        this.employeeService = employeeService;
        this.modalService = modalService;
        this.myToastService = myToastService;
        this.authService = authService;
        this.displayEmployee = [];
        this.selectedEmp = null;
        this.employeeDropdown = null;
      }

      _createClass(EmployeeChangeApproverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.initEmployees();
          this.initCols();
          this.populateEmployeeDropdown();
        }
      }, {
        key: "initEmployees",
        value: function initEmployees() {
          var _this3 = this;

          this.employeeService.getAllChildrenEmployees(this.authService.currentUserValue.employeeId).subscribe(function (res) {
            console.log(res);
            res.forEach(function (i) {
              console.log(i);

              _this3.displayEmployee.push({
                "employeeId": i.employeeId,
                "empCode": i.empCode,
                "empName": "".concat(i.empFirstName, " ").concat(i.empLastName),
                'approverName': "".concat(i.timesheetApprover.empFirstName, " ").concat(i.timesheetApprover.empLastName),
                'activation': i.isActivated
              });
            });
            console.log(_this3.displayEmployee);
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
      }, {
        key: "populateEmployeeDropdown",
        value: function populateEmployeeDropdown() {
          var _this4 = this;

          this.employeeService.getEmployees().subscribe(function (employees) {
            _this4.employeeDropdown = []; // this.employeeDropdown.push({ label: `-----`, value: null });

            employees.forEach(function (e) {
              _this4.employeeDropdown.push({
                label: "".concat(e.empFirstName, " ").concat(e.empLastName),
                value: e
              });
            });
            console.log(_this4.employeeDropdown);
          });
        }
      }, {
        key: "openModal",
        value: function openModal(id, template) {
          var _this5 = this;

          this.employeeService.getEmployee(id).subscribe(function (emp) {
            _this5.selectedEmp = emp;
            _this5.modalRef = _this5.modalService.show(template);
          });
        }
      }, {
        key: "onSaveChange",
        value: function onSaveChange() {
          var _this6 = this;

          this.employeeService.putEmployee(this.selectedEmp).subscribe(function (_) {
            _this6.modalRef.hide();

            _this6.myToastService.addSuccess('Successfully changed Timesheet Approver', "".concat(new Date().toLocaleString()));
          });
        }
      }]);

      return EmployeeChangeApproverComponent;
    }();

    EmployeeChangeApproverComponent.ctorParameters = function () {
      return [{
        type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]
      }, {
        type: ngx_bootstrap__WEBPACK_IMPORTED_MODULE_4__["BsModalService"]
      }, {
        type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_5__["MyToastService"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
      }];
    };

    EmployeeChangeApproverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-change-approver',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-change-approver.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-change-approver.component.css */
      "./src/app/modules/employee/pages/employee-change-approver/employee-change-approver.component.css")).default]
    })], EmployeeChangeApproverComponent);
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
          var _this7 = this;

          this.employeeService.checkUserEmployeeCodeOK(this.employee.empCode).subscribe(function (response) {
            console.log(response);
            _this7.validEmployeeCode = response;
          });
        } // exit event of user name

      }, {
        key: "validateUserName",
        value: function validateUserName() {
          var _this8 = this;

          this.employeeService.checkUserNameOK(this.employee.empUsername).subscribe(function (response) {
            console.log(response);
            _this8.validUsername = response;
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
    /* harmony import */


    var src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/core/service/my-toast.service */
    "./src/app/core/service/my-toast.service.ts");

    var EmployeeEditComponent =
    /*#__PURE__*/
    function () {
      function EmployeeEditComponent(route, router, employeeService, modalService, myToastService) {
        _classCallCheck(this, EmployeeEditComponent);

        this.route = route;
        this.router = router;
        this.employeeService = employeeService;
        this.modalService = modalService;
        this.myToastService = myToastService;
        this.mode = src_app_shared_model_MODE__WEBPACK_IMPORTED_MODULE_2__["MODE"].Update;
        this.alerts = {};
        this.validUsername = true;
        this.validEmployeeCode = true;
      }

      _createClass(EmployeeEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('empId');

            _this9.employeeService.getEmployee(id).subscribe(function (e) {
              return _this9.employee = e;
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
          var _this10 = this;

          this.employee.empPassword = '01234';
          this.employeeService.getEmployee(this.employee.employeeId).subscribe(function (emp) {
            emp.empPassword = '01234';

            _this10.employeeService.putEmployee(emp);

            _this10.modalRef.hide();

            _this10.myToastService.addSuccess('Password Changed', 'Reset to defaul password.');
          }); //TODO: SHOW MESSAGE.
        } // btn click event of creation

      }, {
        key: "onUpdate",
        value: function onUpdate() {
          var _this11 = this;

          if (!this.validatePage()) return;
          console.log("POST employee");
          console.log(JSON.stringify(this.employee));
          this.employeeService.postEmployee(this.employee).subscribe(function (_) {
            _this11.myToastService.addSuccess('Update successfully', "".concat(_this11.employee.empFirstName + ' ' + _this11.employee.empLastName, " is updated."));

            _this11.router.navigate(["/content/employees/view/".concat(_this11.employee.employeeId)]);
          });
        } // btn click event of cancel

      }, {
        key: "onCancel",
        value: function onCancel(e) {
          this.router.navigate(["/content/employees"]);
        }
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
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_core_service_employee_employee_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]
      }, {
        type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"]
      }, {
        type: src_app_core_service_my_toast_service__WEBPACK_IMPORTED_MODULE_7__["MyToastService"]
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
          var _this12 = this;

          this.employeeService.getEmployees().subscribe(function (res) {
            console.log(res);
            res.forEach(function (i) {
              console.log(i);

              _this12.displayEmployee.push({
                "employeeId": i.employeeId,
                "empCode": i.empCode,
                "empName": "".concat(i.empFirstName, " ").concat(i.empLastName),
                "empUsername": i.empUsername,
                'supervisorName': "".concat(i.supervisor.empFirstName, " ").concat(i.supervisor.empLastName),
                'approverName': "".concat(i.timesheetApprover.empFirstName, " ").concat(i.timesheetApprover.empLastName),
                'activation': i.isActivated
              });
            });
            console.log(_this12.displayEmployee);
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
  "./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesEmployeePagesEmployeeResetPwEmployeeResetPwComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".height70vh{\n    height: 70vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9lbXBsb3llZS9wYWdlcy9lbXBsb3llZS1yZXNldC1wdy9lbXBsb3llZS1yZXNldC1wdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1wbG95ZWUvcGFnZXMvZW1wbG95ZWUtcmVzZXQtcHcvZW1wbG95ZWUtcmVzZXQtcHcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWlnaHQ3MHZoe1xuICAgIGhlaWdodDogNzB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: EmployeeResetPWComponent, passwordMatch */

  /***/
  function srcAppModulesEmployeePagesEmployeeResetPwEmployeeResetPwComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeResetPWComponent", function () {
      return EmployeeResetPWComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "passwordMatch", function () {
      return passwordMatch;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/service/authentication.service */
    "./src/app/core/service/authentication.service.ts");

    var EmployeeResetPWComponent =
    /*#__PURE__*/
    function () {
      function EmployeeResetPWComponent(formBuilder, route, router, authenticationService) {
        _classCallCheck(this, EmployeeResetPWComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = null;
        this.currentUserId = '';
      }

      _createClass(EmployeeResetPWComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.changPwForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordNew: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            passwordNewRe: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          }, {
            validator: passwordMatch
          });
          this.currentUserId = this.authenticationService.currentUserValue.credentialId;
          this.f.username.setValue(this.currentUserId);
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this13 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.changPwForm.invalid) {
            return;
          }

          this.loading = true;
          this.authenticationService.changePW(this.currentUserId, this.f.password.value, this.f.passwordNew.value).subscribe(function (result) {
            if (result) {
              _this13.authenticationService.logout();
            }

            if (!result) {
              _this13.error = 'We cannot change your Password. Please Make sure your old password is correct.';
            }
          }, function (error) {
            console.log(error);
            _this13.error = error.error;
            _this13.loading = false;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.changPwForm.controls;
        }
      }]);

      return EmployeeResetPWComponent;
    }();

    EmployeeResetPWComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    EmployeeResetPWComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-employee-reset-pw',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./employee-reset-pw.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./employee-reset-pw.component.css */
      "./src/app/modules/employee/pages/employee-reset-pw/employee-reset-pw.component.css")).default]
    })], EmployeeResetPWComponent); // export function passwordMatch(newPw:string): ValidatorFn {
    //   return (control: AbstractControl): {[key: string]: any} | null => {
    //     const result = (newPw===control.value);
    //     return result ? {'passwordMatch': {value: control.value}} : null;
    //   };
    // }

    var passwordMatch = function passwordMatch(control) {
      var pw = control.get('passwordNew');
      var pwRe = control.get('passwordNewRe');
      return pw && pwRe && pw.value === pwRe.value ? null : {
        'passwordMatch': true
      };
    };
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
          var _this14 = this;

          this.route.paramMap.subscribe(function (params) {
            var id = params.get('empId');

            _this14.employeeService.getEmployee(id).subscribe(function (e) {
              return _this14.employee = e;
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
  }
}]);
//# sourceMappingURL=modules-employee-employee-module-es5.js.map