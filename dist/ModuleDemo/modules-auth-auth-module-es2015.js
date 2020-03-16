(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"col-md-6 offset-md-3 mt-5\">\r\n    <div class=\"alert alert-info\">\r\n        Fake Backend<br />\r\n        Username: A123 Password: master<br />\r\n        Username: A456 Password: regular<br />\r\n        Username: A789 Password: lower<br />\r\n        Real Backend<br />\r\n        Username: A100001 Password: password<br />\r\n\r\n    </div>\r\n    <div class=\"card\">\r\n        <h4 class=\"card-header\">Angular 8 JWT Login Example</h4>\r\n        <div class=\"card-body\">\r\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"username\">Username</label>\r\n                    <input type=\"text\" formControlName=\"username\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\r\n                    <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"password\">Password</label>\r\n                    <input type=\"password\" formControlName=\"password\" class=\"form-control\"\r\n                        [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                </div>\r\n                <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n                    <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                    Login\r\n                </button>\r\n                <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">{{error}}</div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/reset-password/reset-password.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/reset-password/reset-password.component.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>reset-password works!</p>\r\n");

/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/modules/auth/pages/reset-password/reset-password.component.ts");





const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'resetpassword',
        component: _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]
    }
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/reset-password/reset-password.component */ "./src/app/modules/auth/pages/reset-password/reset-password.component.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");







let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _pages_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_4__["ResetPasswordComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/service/authentication.service */ "./src/app/core/service/authentication.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, route, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        if (this.authenticationService.currentUserValue) {
            // this.router.navigate(['/']);
        }
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(data => {
            this.router.navigate([this.returnUrl]);
        }, error => {
            console.log(error);
            this.error = error;
            this.loading = false;
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_core_service_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/modules/auth/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/modules/auth/pages/reset-password/reset-password.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/pages/reset-password/reset-password.component.css ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9wYWdlcy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/reset-password/reset-password.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/auth/pages/reset-password/reset-password.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResetPasswordComponent = class ResetPasswordComponent {
    constructor() { }
    ngOnInit() {
    }
};
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/reset-password/reset-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reset-password.component.css */ "./src/app/modules/auth/pages/reset-password/reset-password.component.css")).default]
    })
], ResetPasswordComponent);



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map