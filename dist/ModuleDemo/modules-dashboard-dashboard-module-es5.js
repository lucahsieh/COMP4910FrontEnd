function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/pages/dashboard.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/pages/dashboard.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesDashboardPagesDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card mx-1\">\n    <div class=\"card-body\">\n        <!-- Title -->\n        <h3 class=\"display-4\">Welcome to Gerg's Beans</h3>\n        <div class=\"dropdown-divider my-3\"></div>\n        <h4 class=\"lead\">Title</h4>\n\n        <p>Lorem ipsum dolor sit amet, ut aliquet, sed suscipit amet ut maecenas. Id ac mi. Sociis vulputate amet,\n            aliquam in donec arcu nullam, nunc integer praesent vitae nunc sit nullam. Natoque malesuada nunc diam,\n            laoreet in ipsum quisque ut egestas, litora rutrum vel dolor consequat consectetuer, nulla in sodales\n            fringilla eros lacus. Nulla per et nullam. Congue nulla erat, turpis felis consectetuer per fames neque,\n            consequat fusce placerat velit ut posuere sollicitudin, pretium at. Wisi pellentesque, tempus massa mi velit\n            eu condimentum magnis. Nec id iusto, elit condimentum luctus aliquam aliquam molestie cursus, viverra ante,\n            dui egestas. Lorem ut, facilisis sapien quis, turpis eget, urna at volutpat nulla mauris, vitae erat. Id\n            imperdiet nulla, eu nunc ac erat dolor, dictumst arcu odio erat nullam libero convallis, eget eros duis\n            vitae. Hic nunc integer aliquam a, repudiandae tempor lectus nec vestibulum aliquam litora, quis arcu,\n            adipiscing sodales vel porttitor congue mus integer, cursus feugiat in quam turpis.</p>\n\n    </div>\n\n\n</div>";
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppModulesDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _pages_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/dashboard.component */
    "./src/app/modules/dashboard/pages/dashboard.component.ts");

    var routes = [{
      path: '',
      data: {
        breadcrumb: 'dashboard'
      },
      component: _pages_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/dashboard.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppModulesDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/modules/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _pages_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/dashboard.component */
    "./src/app/modules/dashboard/pages/dashboard.component.ts");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"]]
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/modules/dashboard/pages/dashboard.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/dashboard/pages/dashboard.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesDashboardPagesDashboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL3BhZ2VzL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/dashboard/pages/dashboard.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/dashboard/pages/dashboard.component.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesDashboardPagesDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent() {
        _classCallCheck(this, DashboardComponent);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToEmployeePage",
        value: function goToEmployeePage() {
          console.log("inside dashboard go to employee page");
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/pages/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.css */
      "./src/app/modules/dashboard/pages/dashboard.component.css")).default]
    })], DashboardComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-dashboard-dashboard-module-es5.js.map