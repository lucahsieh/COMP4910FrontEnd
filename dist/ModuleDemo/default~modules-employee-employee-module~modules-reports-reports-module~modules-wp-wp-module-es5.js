function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-employee-employee-module~modules-reports-reports-module~modules-wp-wp-module"], {
  /***/
  "./node_modules/@angular/material/esm2015/button-toggle.js":
  /*!*****************************************************************!*\
    !*** ./node_modules/@angular/material/esm2015/button-toggle.js ***!
    \*****************************************************************/

  /*! exports provided: MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS, MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, MatButtonToggleGroupMultiple, MatButtonToggleChange, MatButtonToggleGroup, MatButtonToggle, MatButtonToggleModule */

  /***/
  function node_modulesAngularMaterialEsm2015ButtonToggleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS", function () {
      return MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR", function () {
      return MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroupMultiple", function () {
      return MatButtonToggleGroupMultiple;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleChange", function () {
      return MatButtonToggleChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleGroup", function () {
      return MatButtonToggleGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggle", function () {
      return MatButtonToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatButtonToggleModule", function () {
      return MatButtonToggleModule;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/esm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/collections */
    "./node_modules/@angular/cdk/esm2015/collections.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to configure the
     * default options for all button toggles within an app.
     * @type {?}
     */


    var MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS');
    /**
     * Provider Expression that allows mat-button-toggle-group to register as a ControlValueAccessor.
     * This allows it to support [(ngModel)].
     * \@docs-private
     * @type {?}
     */

    var MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatButtonToggleGroup;
      }),
      multi: true
    };
    /**
     * @deprecated Use `MatButtonToggleGroup` instead.
     * \@breaking-change 8.0.0
     */

    var MatButtonToggleGroupMultiple = function MatButtonToggleGroupMultiple() {
      _classCallCheck(this, MatButtonToggleGroupMultiple);
    };
    /** @type {?} */


    var _uniqueIdCounter = 0;
    /**
     * Change event object emitted by MatButtonToggle.
     */

    var MatButtonToggleChange =
    /**
     * @param {?} source
     * @param {?} value
     */
    function MatButtonToggleChange(source, value) {
      _classCallCheck(this, MatButtonToggleChange);

      this.source = source;
      this.value = value;
    };
    /**
     * Exclusive selection button toggle group that behaves like a radio-button group.
     */


    var MatButtonToggleGroup =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetector
       * @param {?=} defaultOptions
       */
      function MatButtonToggleGroup(_changeDetector, defaultOptions) {
        _classCallCheck(this, MatButtonToggleGroup);

        this._changeDetector = _changeDetector;
        this._vertical = false;
        this._multiple = false;
        this._disabled = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */

        this._controlValueAccessorChangeFn =
        /**
        * @return {?}
        */
        function () {};
        /**
         * onTouch function registered via registerOnTouch (ControlValueAccessor).
         */


        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._name = "mat-button-toggle-group-".concat(_uniqueIdCounter++);
        /**
         * Event that emits whenever the value of the group changes.
         * Used to facilitate two-way data binding.
         * \@docs-private
         */

        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /**
         * Event emitted when the group's value changes.
         */

        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
      }
      /**
       * `name` attribute for the underlying `input` element.
       * @return {?}
       */


      _createClass(MatButtonToggleGroup, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._selectionModel = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_2__["SelectionModel"](this.multiple, undefined, false);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this$_selectionModel;

          (_this$_selectionModel = this._selectionModel).select.apply(_this$_selectionModel, _toConsumableArray(this._buttonToggles.filter(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.checked;
          })));
        }
        /**
         * Sets the model value. Implemented as part of ControlValueAccessor.
         * @param {?} value Value to be set to the model.
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;

          this._changeDetector.markForCheck();
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._controlValueAccessorChangeFn = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * Dispatch change event with current selection and group value.
         * @return {?}
         */

      }, {
        key: "_emitChangeEvent",
        value: function _emitChangeEvent() {
          /** @type {?} */
          var selected = this.selected;
          /** @type {?} */

          var source = Array.isArray(selected) ? selected[selected.length - 1] : selected;
          /** @type {?} */

          var event = new MatButtonToggleChange(
          /** @type {?} */
          source, this.value);

          this._controlValueAccessorChangeFn(event.value);

          this.change.emit(event);
        }
        /**
         * Syncs a button toggle's selected state with the model value.
         * @param {?} toggle Toggle to be synced.
         * @param {?} select Whether the toggle should be selected.
         * @param {?=} isUserInput Whether the change was a result of a user interaction.
         * @param {?=} deferEvents Whether to defer emitting the change events.
         * @return {?}
         */

      }, {
        key: "_syncButtonToggle",
        value: function _syncButtonToggle(toggle, select) {
          var isUserInput = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
          var deferEvents = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

          // Deselect the currently-selected toggle, if we're in single-selection
          // mode and the button being toggled isn't selected at the moment.
          if (!this.multiple && this.selected && !toggle.checked) {
            /** @type {?} */
            this.selected.checked = false;
          }

          if (this._selectionModel) {
            if (select) {
              this._selectionModel.select(toggle);
            } else {
              this._selectionModel.deselect(toggle);
            }
          } else {
            deferEvents = true;
          } // We need to defer in some cases in order to avoid "changed after checked errors", however
          // the side-effect is that we may end up updating the model value out of sequence in others
          // The `deferEvents` flag allows us to decide whether to do it on a case-by-case basis.


          if (deferEvents) {} else {
            this._updateModelValue(isUserInput);
          }
        }
        /**
         * Checks whether a button toggle is selected.
         * @param {?} toggle
         * @return {?}
         */

      }, {
        key: "_isSelected",
        value: function _isSelected(toggle) {
          return this._selectionModel && this._selectionModel.isSelected(toggle);
        }
        /**
         * Determines whether a button toggle should be checked on init.
         * @param {?} toggle
         * @return {?}
         */

      }, {
        key: "_isPrechecked",
        value: function _isPrechecked(toggle) {
          if (typeof this._rawValue === 'undefined') {
            return false;
          }

          if (this.multiple && Array.isArray(this._rawValue)) {
            return this._rawValue.some(
            /**
            * @param {?} value
            * @return {?}
            */
            function (value) {
              return toggle.value != null && value === toggle.value;
            });
          }

          return toggle.value === this._rawValue;
        }
        /**
         * Updates the selection state of the toggles in the group based on a value.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_setSelectionByValue",
        value: function _setSelectionByValue(value) {
          var _this = this;

          this._rawValue = value;

          if (!this._buttonToggles) {
            return;
          }

          if (this.multiple && value) {
            if (!Array.isArray(value)) {
              throw Error('Value must be an array in multiple-selection mode.');
            }

            this._clearSelection();

            value.forEach(
            /**
            * @param {?} currentValue
            * @return {?}
            */
            function (currentValue) {
              return _this._selectValue(currentValue);
            });
          } else {
            this._clearSelection();

            this._selectValue(value);
          }
        }
        /**
         * Clears the selected toggles.
         * @private
         * @return {?}
         */

      }, {
        key: "_clearSelection",
        value: function _clearSelection() {
          this._selectionModel.clear();

          this._buttonToggles.forEach(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.checked = false;
          });
        }
        /**
         * Selects a value if there's a toggle that corresponds to it.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_selectValue",
        value: function _selectValue(value) {
          /** @type {?} */
          var correspondingOption = this._buttonToggles.find(
          /**
          * @param {?} toggle
          * @return {?}
          */
          function (toggle) {
            return toggle.value != null && toggle.value === value;
          });

          if (correspondingOption) {
            correspondingOption.checked = true;

            this._selectionModel.select(correspondingOption);
          }
        }
        /**
         * Syncs up the group's value with the model and emits the change event.
         * @private
         * @param {?} isUserInput
         * @return {?}
         */

      }, {
        key: "_updateModelValue",
        value: function _updateModelValue(isUserInput) {
          // Only emit the change event for user input.
          if (isUserInput) {
            this._emitChangeEvent();
          } // Note: we emit this one no matter whether it was a user interaction, because
          // it is used by Angular to sync up the two-way data binding.


          this.valueChange.emit(this.value);
        }
      }, {
        key: "name",
        get: function get() {
          return this._name;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this2 = this;

          this._name = value;

          if (this._buttonToggles) {
            this._buttonToggles.forEach(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              toggle.name = _this2._name;

              toggle._markForCheck();
            });
          }
        }
        /**
         * Whether the toggle group is vertical.
         * @return {?}
         */

      }, {
        key: "vertical",
        get: function get() {
          return this._vertical;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._vertical = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Value of the toggle group.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          /** @type {?} */
          var selected = this._selectionModel ? this._selectionModel.selected : [];

          if (this.multiple) {
            return selected.map(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle.value;
            });
          }

          return selected[0] ? selected[0].value : undefined;
        }
        /**
         * @param {?} newValue
         * @return {?}
         */
        ,
        set: function set(newValue) {
          this._setSelectionByValue(newValue);

          this.valueChange.emit(this.value);
        }
        /**
         * Selected button toggles in the group.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          /** @type {?} */
          var selected = this._selectionModel ? this._selectionModel.selected : [];
          return this.multiple ? selected : selected[0] || null;
        }
        /**
         * Whether multiple button toggles can be selected.
         * @return {?}
         */

      }, {
        key: "multiple",
        get: function get() {
          return this._multiple;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._multiple = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether multiple button toggle group is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (this._buttonToggles) {
            this._buttonToggles.forEach(
            /**
            * @param {?} toggle
            * @return {?}
            */
            function (toggle) {
              return toggle._markForCheck();
            });
          }
        }
      }]);

      return MatButtonToggleGroup;
    }();

    MatButtonToggleGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
      args: [{
        selector: 'mat-button-toggle-group',
        providers: [MAT_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR, {
          provide: MatButtonToggleGroupMultiple,
          useExisting: MatButtonToggleGroup
        }],
        host: {
          'role': 'group',
          'class': 'mat-button-toggle-group',
          '[attr.aria-disabled]': 'disabled',
          '[class.mat-button-toggle-vertical]': 'vertical',
          '[class.mat-button-toggle-group-appearance-standard]': 'appearance === "standard"'
        },
        exportAs: 'matButtonToggleGroup'
      }]
    }];
    /** @nocollapse */

    MatButtonToggleGroup.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatButtonToggleGroup.propDecorators = {
      _buttonToggles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChildren"],
        args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(
        /**
        * @return {?}
        */
        function () {
          return MatButtonToggle;
        })]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      vertical: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      valueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }],
      multiple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    }; // Boilerplate for applying mixins to the MatButtonToggle class.

    /**
     * \@docs-private
     */

    var MatButtonToggleBase = function MatButtonToggleBase() {
      _classCallCheck(this, MatButtonToggleBase);
    };
    /** @type {?} */


    var _MatButtonToggleMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinDisableRipple"])(MatButtonToggleBase);
    /**
     * Single button inside of a toggle group.
     */


    var MatButtonToggle =
    /*#__PURE__*/
    function (_MatButtonToggleMixin) {
      _inherits(MatButtonToggle, _MatButtonToggleMixin);

      /**
       * @param {?} toggleGroup
       * @param {?} _changeDetectorRef
       * @param {?} _elementRef
       * @param {?} _focusMonitor
       * @param {?} defaultTabIndex
       * @param {?=} defaultOptions
       */
      function MatButtonToggle(toggleGroup, _changeDetectorRef, _elementRef, _focusMonitor, // @breaking-change 8.0.0 `defaultTabIndex` to be made a required parameter.
      defaultTabIndex, defaultOptions) {
        var _this3;

        _classCallCheck(this, MatButtonToggle);

        _this3 = _possibleConstructorReturn(this, _getPrototypeOf(MatButtonToggle).call(this));
        _this3._changeDetectorRef = _changeDetectorRef;
        _this3._elementRef = _elementRef;
        _this3._focusMonitor = _focusMonitor;
        _this3._isSingleSelector = false;
        _this3._checked = false;
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */

        _this3.ariaLabelledby = null;
        _this3._disabled = false;
        /**
         * Event emitted when the group value changes.
         */

        _this3.change = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        /** @type {?} */

        var parsedTabIndex = Number(defaultTabIndex);
        _this3.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
        _this3.buttonToggleGroup = toggleGroup;
        _this3.appearance = defaultOptions && defaultOptions.appearance ? defaultOptions.appearance : 'standard';
        return _this3;
      }
      /**
       * Unique ID for the underlying `button` element.
       * @return {?}
       */


      _createClass(MatButtonToggle, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          this._isSingleSelector = this.buttonToggleGroup && !this.buttonToggleGroup.multiple;
          this._type = this._isSingleSelector ? 'radio' : 'checkbox';
          this.id = this.id || "mat-button-toggle-".concat(_uniqueIdCounter++);

          if (this._isSingleSelector) {
            this.name = this.buttonToggleGroup.name;
          }

          if (this.buttonToggleGroup && this.buttonToggleGroup._isPrechecked(this)) {
            this.checked = true;
          }

          this._focusMonitor.monitor(this._elementRef, true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var group = this.buttonToggleGroup;

          this._focusMonitor.stopMonitoring(this._elementRef); // Remove the toggle from the selection once it's destroyed. Needs to happen
          // on the next tick in order to avoid "changed after checked" errors.


          if (group && group._isSelected(this)) {
            group._syncButtonToggle(this, false, false, true);
          }
        }
        /**
         * Focuses the button.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._buttonElement.nativeElement.focus(options);
        }
        /**
         * Checks the button toggle due to an interaction with the underlying native button.
         * @return {?}
         */

      }, {
        key: "_onButtonClick",
        value: function _onButtonClick() {
          /** @type {?} */
          var newChecked = this._isSingleSelector ? true : !this._checked;

          if (newChecked !== this._checked) {
            this._checked = newChecked;

            if (this.buttonToggleGroup) {
              this.buttonToggleGroup._syncButtonToggle(this, this._checked, true);

              this.buttonToggleGroup._onTouched();
            }
          } // Emit a change event when it's the single selector


          this.change.emit(new MatButtonToggleChange(this, this.value));
        }
        /**
         * Marks the button toggle as needing checking for change detection.
         * This method is exposed because the parent button toggle group will directly
         * update bound properties of the radio button.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          // When the group value changes, the button will not be notified.
          // Use `markForCheck` to explicit update button toggle's status.
          this._changeDetectorRef.markForCheck();
        }
      }, {
        key: "buttonId",
        get: function get() {
          return "".concat(this.id, "-button");
        }
        /**
         * The appearance style of the button.
         * @return {?}
         */

      }, {
        key: "appearance",
        get: function get() {
          return this.buttonToggleGroup ? this.buttonToggleGroup.appearance : this._appearance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._appearance = value;
        }
        /**
         * Whether the button is checked.
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this.buttonToggleGroup ? this.buttonToggleGroup._isSelected(this) : this._checked;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);

          if (newValue !== this._checked) {
            this._checked = newValue;

            if (this.buttonToggleGroup) {
              this.buttonToggleGroup._syncButtonToggle(this, this._checked);
            }

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Whether the button is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled || this.buttonToggleGroup && this.buttonToggleGroup.disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_1__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatButtonToggle;
    }(_MatButtonToggleMixinBase);

    MatButtonToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'mat-button-toggle',
        template: "<button #button class=\"mat-button-toggle-button\" type=\"button\" [id]=\"buttonId\" [attr.tabindex]=\"disabled ? -1 : tabIndex\" [attr.aria-pressed]=\"checked\" [disabled]=\"disabled || null\" [attr.name]=\"name || null\" [attr.aria-label]=\"ariaLabel\" [attr.aria-labelledby]=\"ariaLabelledby\" (click)=\"_onButtonClick()\"><div class=\"mat-button-toggle-label-content\"><ng-content></ng-content></div></button><div class=\"mat-button-toggle-focus-overlay\"></div><div class=\"mat-button-toggle-ripple\" matRipple [matRippleTrigger]=\"button\" [matRippleDisabled]=\"this.disableRipple || this.disabled\"></div>",
        styles: [".mat-button-toggle-group,.mat-button-toggle-standalone{position:relative;display:inline-flex;flex-direction:row;white-space:nowrap;overflow:hidden;border-radius:2px;-webkit-tap-highlight-color:transparent}@media (-ms-high-contrast:active){.mat-button-toggle-group,.mat-button-toggle-standalone{outline:solid 1px}}.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{border-radius:4px}@media (-ms-high-contrast:active){.mat-button-toggle-group-appearance-standard,.mat-button-toggle-standalone.mat-button-toggle-appearance-standard{outline:0}}.mat-button-toggle-vertical{flex-direction:column}.mat-button-toggle-vertical .mat-button-toggle-label-content{display:block}.mat-button-toggle{white-space:nowrap;position:relative}.mat-button-toggle .mat-icon svg{vertical-align:top}.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:1}@media (-ms-high-contrast:active){.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay{opacity:.5}}.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{opacity:.04}.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.12}@media (-ms-high-contrast:active){.mat-button-toggle-appearance-standard.cdk-keyboard-focused:not(.mat-button-toggle-disabled) .mat-button-toggle-focus-overlay{opacity:.5}}@media (hover:none){.mat-button-toggle-appearance-standard:not(.mat-button-toggle-disabled):hover .mat-button-toggle-focus-overlay{display:none}}.mat-button-toggle-label-content{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:inline-block;line-height:36px;padding:0 16px;position:relative}.mat-button-toggle-appearance-standard .mat-button-toggle-label-content{line-height:48px;padding:0 12px}.mat-button-toggle-label-content>*{vertical-align:middle}.mat-button-toggle-focus-overlay{border-radius:inherit;pointer-events:none;opacity:0;top:0;left:0;right:0;bottom:0;position:absolute}.mat-button-toggle-checked .mat-button-toggle-focus-overlay{border-bottom:solid 36px}@media (-ms-high-contrast:active){.mat-button-toggle-checked .mat-button-toggle-focus-overlay{opacity:.5;height:0}}@media (-ms-high-contrast:active){.mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay{border-bottom:solid 48px}}.mat-button-toggle .mat-button-toggle-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-button-toggle-button{border:0;background:0 0;color:inherit;padding:0;margin:0;font:inherit;outline:0;width:100%;cursor:pointer}.mat-button-toggle-disabled .mat-button-toggle-button{cursor:default}.mat-button-toggle-button::-moz-focus-inner{border:0}"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        exportAs: 'matButtonToggle',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        inputs: ['disableRipple'],
        host: {
          '[class.mat-button-toggle-standalone]': '!buttonToggleGroup',
          '[class.mat-button-toggle-checked]': 'checked',
          '[class.mat-button-toggle-disabled]': 'disabled',
          '[class.mat-button-toggle-appearance-standard]': 'appearance === "standard"',
          'class': 'mat-button-toggle',
          // Always reset the tabindex to -1 so it doesn't conflict with the one on the `button`,
          // but can still receive focus from things like cdkFocusInitial.
          '[attr.tabindex]': '-1',
          '[attr.id]': 'id',
          '[attr.name]': 'null',
          '(focus)': 'focus()'
        }
      }]
    }];
    /** @nocollapse */

    MatButtonToggle.ctorParameters = function () {
      return [{
        type: MatButtonToggleGroup,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["FocusMonitor"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Attribute"],
          args: ['tabindex']
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS]
        }]
      }];
    };

    MatButtonToggle.propDecorators = {
      ariaLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-label']
      }],
      ariaLabelledby: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['aria-labelledby']
      }],
      _buttonElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: ['button', {
          static: false
        }]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      checked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
      }],
      change: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MatButtonToggleModule = function MatButtonToggleModule() {
      _classCallCheck(this, MatButtonToggleModule);
    };

    MatButtonToggleModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatRippleModule"]],
        exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatCommonModule"], MatButtonToggleGroup, MatButtonToggle],
        declarations: [MatButtonToggleGroup, MatButtonToggle]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=button-toggle.js.map

    /***/
  },

  /***/
  "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js":
  /*!**************************************************************************!*\
    !*** ./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js ***!
    \**************************************************************************/

  /*! exports provided: ModalDismissReasons, NgbAccordion, NgbAccordionConfig, NgbAccordionModule, NgbActiveModal, NgbAlert, NgbAlertConfig, NgbAlertModule, NgbButtonLabel, NgbButtonsModule, NgbCalendar, NgbCalendarGregorian, NgbCalendarHebrew, NgbCalendarIslamicCivil, NgbCalendarIslamicUmalqura, NgbCalendarPersian, NgbCarousel, NgbCarouselConfig, NgbCarouselModule, NgbCheckBox, NgbCollapse, NgbCollapseModule, NgbDate, NgbDateAdapter, NgbDateNativeAdapter, NgbDateNativeUTCAdapter, NgbDateParserFormatter, NgbDatepicker, NgbDatepickerConfig, NgbDatepickerI18n, NgbDatepickerI18nHebrew, NgbDatepickerKeyboardService, NgbDatepickerModule, NgbDropdown, NgbDropdownAnchor, NgbDropdownConfig, NgbDropdownItem, NgbDropdownMenu, NgbDropdownModule, NgbDropdownToggle, NgbHighlight, NgbInputDatepicker, NgbInputDatepickerConfig, NgbModal, NgbModalConfig, NgbModalModule, NgbModalRef, NgbModule, NgbNav, NgbNavConfig, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavModule, NgbNavOutlet, NgbNavbar, NgbPagination, NgbPaginationConfig, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationModule, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious, NgbPanel, NgbPanelContent, NgbPanelHeader, NgbPanelTitle, NgbPanelToggle, NgbPopover, NgbPopoverConfig, NgbPopoverModule, NgbProgressbar, NgbProgressbarConfig, NgbProgressbarModule, NgbRadio, NgbRadioGroup, NgbRating, NgbRatingConfig, NgbRatingModule, NgbSlide, NgbSlideEventDirection, NgbSlideEventSource, NgbTab, NgbTabContent, NgbTabTitle, NgbTabset, NgbTabsetConfig, NgbTabsetModule, NgbTimeAdapter, NgbTimepicker, NgbTimepickerConfig, NgbTimepickerI18n, NgbTimepickerModule, NgbToast, NgbToastConfig, NgbToastHeader, NgbToastModule, NgbTooltip, NgbTooltipConfig, NgbTooltipModule, NgbTypeahead, NgbTypeaheadConfig, NgbTypeaheadModule, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

  /***/
  function node_modulesNgBootstrapNgBootstrapFesm2015NgBootstrapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDismissReasons", function () {
      return ModalDismissReasons;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbAccordion", function () {
      return NgbAccordion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbAccordionConfig", function () {
      return NgbAccordionConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbAccordionModule", function () {
      return NgbAccordionModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbActiveModal", function () {
      return NgbActiveModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbAlert", function () {
      return NgbAlert;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbAlertConfig", function () {
      return NgbAlertConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbAlertModule", function () {
      return NgbAlertModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbButtonLabel", function () {
      return NgbButtonLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbButtonsModule", function () {
      return NgbButtonsModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCalendar", function () {
      return NgbCalendar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCalendarGregorian", function () {
      return NgbCalendarGregorian;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCalendarHebrew", function () {
      return NgbCalendarHebrew;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicCivil", function () {
      return NgbCalendarIslamicCivil;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCalendarIslamicUmalqura", function () {
      return NgbCalendarIslamicUmalqura;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCalendarPersian", function () {
      return NgbCalendarPersian;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCarousel", function () {
      return NgbCarousel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCarouselConfig", function () {
      return NgbCarouselConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCarouselModule", function () {
      return NgbCarouselModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCheckBox", function () {
      return NgbCheckBox;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCollapse", function () {
      return NgbCollapse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbCollapseModule", function () {
      return NgbCollapseModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDate", function () {
      return NgbDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDateAdapter", function () {
      return NgbDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDateNativeAdapter", function () {
      return NgbDateNativeAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDateNativeUTCAdapter", function () {
      return NgbDateNativeUTCAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDateParserFormatter", function () {
      return NgbDateParserFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDatepicker", function () {
      return NgbDatepicker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDatepickerConfig", function () {
      return NgbDatepickerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18n", function () {
      return NgbDatepickerI18n;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDatepickerI18nHebrew", function () {
      return NgbDatepickerI18nHebrew;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDatepickerKeyboardService", function () {
      return NgbDatepickerKeyboardService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDatepickerModule", function () {
      return NgbDatepickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDropdown", function () {
      return NgbDropdown;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDropdownAnchor", function () {
      return NgbDropdownAnchor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDropdownConfig", function () {
      return NgbDropdownConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDropdownItem", function () {
      return NgbDropdownItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDropdownMenu", function () {
      return NgbDropdownMenu;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDropdownModule", function () {
      return NgbDropdownModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbDropdownToggle", function () {
      return NgbDropdownToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbHighlight", function () {
      return NgbHighlight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbInputDatepicker", function () {
      return NgbInputDatepicker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbInputDatepickerConfig", function () {
      return NgbInputDatepickerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbModal", function () {
      return NgbModal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbModalConfig", function () {
      return NgbModalConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbModalModule", function () {
      return NgbModalModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbModalRef", function () {
      return NgbModalRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbModule", function () {
      return NgbModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNav", function () {
      return NgbNav;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNavConfig", function () {
      return NgbNavConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNavContent", function () {
      return NgbNavContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNavItem", function () {
      return NgbNavItem;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNavLink", function () {
      return NgbNavLink;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNavModule", function () {
      return NgbNavModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNavOutlet", function () {
      return NgbNavOutlet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbNavbar", function () {
      return NgbNavbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPagination", function () {
      return NgbPagination;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationConfig", function () {
      return NgbPaginationConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationEllipsis", function () {
      return NgbPaginationEllipsis;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationFirst", function () {
      return NgbPaginationFirst;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationLast", function () {
      return NgbPaginationLast;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationModule", function () {
      return NgbPaginationModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationNext", function () {
      return NgbPaginationNext;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationNumber", function () {
      return NgbPaginationNumber;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPaginationPrevious", function () {
      return NgbPaginationPrevious;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPanel", function () {
      return NgbPanel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPanelContent", function () {
      return NgbPanelContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPanelHeader", function () {
      return NgbPanelHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPanelTitle", function () {
      return NgbPanelTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPanelToggle", function () {
      return NgbPanelToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPopover", function () {
      return NgbPopover;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPopoverConfig", function () {
      return NgbPopoverConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbPopoverModule", function () {
      return NgbPopoverModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbProgressbar", function () {
      return NgbProgressbar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbProgressbarConfig", function () {
      return NgbProgressbarConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbProgressbarModule", function () {
      return NgbProgressbarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbRadio", function () {
      return NgbRadio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbRadioGroup", function () {
      return NgbRadioGroup;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbRating", function () {
      return NgbRating;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbRatingConfig", function () {
      return NgbRatingConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbRatingModule", function () {
      return NgbRatingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbSlide", function () {
      return NgbSlide;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbSlideEventDirection", function () {
      return NgbSlideEventDirection;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbSlideEventSource", function () {
      return NgbSlideEventSource;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTab", function () {
      return NgbTab;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTabContent", function () {
      return NgbTabContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTabTitle", function () {
      return NgbTabTitle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTabset", function () {
      return NgbTabset;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTabsetConfig", function () {
      return NgbTabsetConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTabsetModule", function () {
      return NgbTabsetModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTimeAdapter", function () {
      return NgbTimeAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTimepicker", function () {
      return NgbTimepicker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTimepickerConfig", function () {
      return NgbTimepickerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTimepickerI18n", function () {
      return NgbTimepickerI18n;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTimepickerModule", function () {
      return NgbTimepickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbToast", function () {
      return NgbToast;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbToastConfig", function () {
      return NgbToastConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbToastHeader", function () {
      return NgbToastHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbToastModule", function () {
      return NgbToastModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTooltip", function () {
      return NgbTooltip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTooltipConfig", function () {
      return NgbTooltipConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTooltipModule", function () {
      return NgbTooltipModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTypeahead", function () {
      return NgbTypeahead;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTypeaheadConfig", function () {
      return NgbTypeaheadConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NgbTypeaheadModule", function () {
      return NgbTypeaheadModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return NGB_CAROUSEL_DIRECTIVES;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return NGB_DATEPICKER_CALENDAR_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵba", function () {
      return Live;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbb", function () {
      return NgbCalendarHijri;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵbc", function () {
      return ContentRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return NgbDatepickerMonthView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return NgbDatepickerDayView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return NgbDatepickerNavigation;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return NgbDatepickerNavigationSelect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return NGB_DATEPICKER_18N_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵh", function () {
      return NgbDatepickerI18nDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵi", function () {
      return NGB_DATEPICKER_DATE_ADAPTER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵj", function () {
      return NgbDateStructAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵk", function () {
      return NGB_DATEPICKER_PARSER_FORMATTER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵl", function () {
      return NgbDateISOParserFormatter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵm", function () {
      return NgbPopoverWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵn", function () {
      return NGB_DATEPICKER_TIME_ADAPTER_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵo", function () {
      return NgbTimeStructAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵp", function () {
      return NGB_TIMEPICKER_I18N_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵq", function () {
      return NgbTimepickerI18nDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵr", function () {
      return NgbTooltipWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵs", function () {
      return NgbTypeaheadWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵt", function () {
      return NgbDatepickerService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵu", function () {
      return NgbModalBackdrop;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵv", function () {
      return NgbModalWindow;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵw", function () {
      return NgbModalStack;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵx", function () {
      return ScrollBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵy", function () {
      return ARIA_LIVE_DELAY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵz", function () {
      return ARIA_LIVE_DELAY_FACTORY;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} value
     * @return {?}
     */


    function toInteger(value) {
      return parseInt("".concat(value), 10);
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function toString(value) {
      return value !== undefined && value !== null ? "".concat(value) : '';
    }
    /**
     * @param {?} value
     * @param {?} max
     * @param {?=} min
     * @return {?}
     */


    function getValueInRange(value, max) {
      var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return Math.max(Math.min(value, max), min);
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isString(value) {
      return typeof value === 'string';
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isNumber(value) {
      return !isNaN(toInteger(value));
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isInteger(value) {
      return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function isDefined(value) {
      return value !== undefined && value !== null;
    }
    /**
     * @param {?} value
     * @return {?}
     */


    function padNumber(value) {
      if (isNumber(value)) {
        return "0".concat(value).slice(-2);
      } else {
        return '';
      }
    }
    /**
     * @param {?} text
     * @return {?}
     */


    function regExpEscape(text) {
      return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }
    /**
     * @param {?} element
     * @param {?} className
     * @return {?}
     */


    function hasClassName(element, className) {
      return element && element.className && element.className.split && element.className.split(/\s+/).indexOf(className) >= 0;
    }

    if (typeof Element !== 'undefined' && !Element.prototype.closest) {
      // Polyfill for ie10+
      if (!Element.prototype.matches) {
        // IE uses the non-standard name: msMatchesSelector
        Element.prototype.matches =
        /** @type {?} */
        Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
      }

      Element.prototype.closest =
      /**
      * @param {?} s
      * @return {?}
      */
      function (s) {
        /** @type {?} */
        var el = this;

        if (!document.documentElement.contains(el)) {
          return null;
        }

        do {
          if (el.matches(s)) {
            return el;
          }

          el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);

        return null;
      };
    }
    /**
     * @param {?} element
     * @param {?} selector
     * @return {?}
     */


    function closest(element, selector) {
      if (!selector) {
        return null;
      }

      return element.closest(selector);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [NgbAccordion](#/components/accordion/api#NgbAccordion) component.
     *
     * You can inject this service, typically in your root component, and customize its properties
     * to provide default values for all accordions used in the application.
     */


    var NgbAccordionConfig = function NgbAccordionConfig() {
      _classCallCheck(this, NgbAccordionConfig);

      this.closeOthers = false;
    };

    NgbAccordionConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbAccordionConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbAccordionConfig_Factory() {
        return new NgbAccordionConfig();
      },
      token: NgbAccordionConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nextId = 0;
    /**
     * A directive that wraps an accordion panel header with any HTML markup and a toggling button
     * marked with [`NgbPanelToggle`](#/components/accordion/api#NgbPanelToggle).
     * See the [header customization demo](#/components/accordion/examples#header) for more details.
     *
     * You can also use [`NgbPanelTitle`](#/components/accordion/api#NgbPanelTitle) to customize only the panel title.
     *
     * \@since 4.1.0
     */

    var NgbPanelHeader =
    /**
     * @param {?} templateRef
     */
    function NgbPanelHeader(templateRef) {
      _classCallCheck(this, NgbPanelHeader);

      this.templateRef = templateRef;
    };

    NgbPanelHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPanelHeader]'
      }]
    }];
    /** @nocollapse */

    NgbPanelHeader.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive that wraps only the panel title with HTML markup inside.
     *
     * You can also use [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader) to customize the full panel header.
     */


    var NgbPanelTitle =
    /**
     * @param {?} templateRef
     */
    function NgbPanelTitle(templateRef) {
      _classCallCheck(this, NgbPanelTitle);

      this.templateRef = templateRef;
    };

    NgbPanelTitle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPanelTitle]'
      }]
    }];
    /** @nocollapse */

    NgbPanelTitle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive that wraps the accordion panel content.
     */


    var NgbPanelContent =
    /**
     * @param {?} templateRef
     */
    function NgbPanelContent(templateRef) {
      _classCallCheck(this, NgbPanelContent);

      this.templateRef = templateRef;
    };

    NgbPanelContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPanelContent]'
      }]
    }];
    /** @nocollapse */

    NgbPanelContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive that wraps an individual accordion panel with title and collapsible content.
     */


    var NgbPanel =
    /*#__PURE__*/
    function () {
      function NgbPanel() {
        _classCallCheck(this, NgbPanel);

        /**
         *  If `true`, the panel is disabled an can't be toggled.
         */
        this.disabled = false;
        /**
         *  An optional id for the panel that must be unique on the page.
         *
         *  If not provided, it will be auto-generated in the `ngb-panel-xxx` format.
         */

        this.id = "ngb-panel-".concat(nextId++);
        this.isOpen = false;
      }
      /**
       * @return {?}
       */


      _createClass(NgbPanel, [{
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
          // only @ContentChildren allows us to specify the {descendants: false} option.
          // Without {descendants: false} we are hitting bugs described in:
          // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
          this.titleTpl = this.titleTpls.first;
          this.headerTpl = this.headerTpls.first;
          this.contentTpl = this.contentTpls.first;
        }
      }]);

      return NgbPanel;
    }();

    NgbPanel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ngb-panel'
      }]
    }];
    NgbPanel.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleTpls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbPanelTitle, {
          descendants: false
        }]
      }],
      headerTpls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbPanelHeader, {
          descendants: false
        }]
      }],
      contentTpls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbPanelContent, {
          descendants: false
        }]
      }]
    };
    /**
     * Accordion is a collection of collapsible panels (bootstrap cards).
     *
     * It can ensure only one panel is opened at a time and allows to customize panel
     * headers.
     */

    var NgbAccordion =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       */
      function NgbAccordion(config) {
        _classCallCheck(this, NgbAccordion);

        /**
         * An array or comma separated strings of panel ids that should be opened **initially**.
         *
         * For subsequent changes use methods like `expand()`, `collapse()`, etc. and
         * the `(panelChange)` event.
         */
        this.activeIds = [];
        /**
         * If `true`, panel content will be detached from DOM and not simply hidden when the panel is collapsed.
         */

        this.destroyOnHide = true;
        /**
         * Event emitted right before the panel toggle happens.
         *
         * See [NgbPanelChangeEvent](#/components/accordion/api#NgbPanelChangeEvent) for payload details.
         */

        this.panelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.closeOtherPanels = config.closeOthers;
      }
      /**
       * Checks if a panel with a given id is expanded.
       * @param {?} panelId
       * @return {?}
       */


      _createClass(NgbAccordion, [{
        key: "isExpanded",
        value: function isExpanded(panelId) {
          return this.activeIds.indexOf(panelId) > -1;
        }
        /**
         * Expands a panel with a given id.
         *
         * Has no effect if the panel is already expanded or disabled.
         * @param {?} panelId
         * @return {?}
         */

      }, {
        key: "expand",
        value: function expand(panelId) {
          this._changeOpenState(this._findPanelById(panelId), true);
        }
        /**
         * Expands all panels, if `[closeOthers]` is `false`.
         *
         * If `[closeOthers]` is `true`, it will expand the first panel, unless there is already a panel opened.
         * @return {?}
         */

      }, {
        key: "expandAll",
        value: function expandAll() {
          var _this4 = this;

          if (this.closeOtherPanels) {
            if (this.activeIds.length === 0 && this.panels.length) {
              this._changeOpenState(this.panels.first, true);
            }
          } else {
            this.panels.forEach(
            /**
            * @param {?} panel
            * @return {?}
            */
            function (panel) {
              return _this4._changeOpenState(panel, true);
            });
          }
        }
        /**
         * Collapses a panel with the given id.
         *
         * Has no effect if the panel is already collapsed or disabled.
         * @param {?} panelId
         * @return {?}
         */

      }, {
        key: "collapse",
        value: function collapse(panelId) {
          this._changeOpenState(this._findPanelById(panelId), false);
        }
        /**
         * Collapses all opened panels.
         * @return {?}
         */

      }, {
        key: "collapseAll",
        value: function collapseAll() {
          var _this5 = this;

          this.panels.forEach(
          /**
          * @param {?} panel
          * @return {?}
          */
          function (panel) {
            _this5._changeOpenState(panel, false);
          });
        }
        /**
         * Toggles a panel with the given id.
         *
         * Has no effect if the panel is disabled.
         * @param {?} panelId
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle(panelId) {
          /** @type {?} */
          var panel = this._findPanelById(panelId);

          if (panel) {
            this._changeOpenState(panel, !panel.isOpen);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          var _this6 = this;

          // active id updates
          if (isString(this.activeIds)) {
            this.activeIds = this.activeIds.split(/\s*,\s*/);
          } // update panels open states


          this.panels.forEach(
          /**
          * @param {?} panel
          * @return {?}
          */
          function (panel) {
            return panel.isOpen = !panel.disabled && _this6.activeIds.indexOf(panel.id) > -1;
          }); // closeOthers updates

          if (this.activeIds.length > 1 && this.closeOtherPanels) {
            this._closeOthers(this.activeIds[0]);

            this._updateActiveIds();
          }
        }
        /**
         * @private
         * @param {?} panel
         * @param {?} nextState
         * @return {?}
         */

      }, {
        key: "_changeOpenState",
        value: function _changeOpenState(panel, nextState) {
          if (panel && !panel.disabled && panel.isOpen !== nextState) {
            /** @type {?} */
            var defaultPrevented = false;
            this.panelChange.emit({
              panelId: panel.id,
              nextState: nextState,
              preventDefault:
              /**
              * @return {?}
              */
              function preventDefault() {
                defaultPrevented = true;
              }
            });

            if (!defaultPrevented) {
              panel.isOpen = nextState;

              if (nextState && this.closeOtherPanels) {
                this._closeOthers(panel.id);
              }

              this._updateActiveIds();
            }
          }
        }
        /**
         * @private
         * @param {?} panelId
         * @return {?}
         */

      }, {
        key: "_closeOthers",
        value: function _closeOthers(panelId) {
          this.panels.forEach(
          /**
          * @param {?} panel
          * @return {?}
          */
          function (panel) {
            if (panel.id !== panelId) {
              panel.isOpen = false;
            }
          });
        }
        /**
         * @private
         * @param {?} panelId
         * @return {?}
         */

      }, {
        key: "_findPanelById",
        value: function _findPanelById(panelId) {
          return this.panels.find(
          /**
          * @param {?} p
          * @return {?}
          */
          function (p) {
            return p.id === panelId;
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateActiveIds",
        value: function _updateActiveIds() {
          this.activeIds = this.panels.filter(
          /**
          * @param {?} panel
          * @return {?}
          */
          function (panel) {
            return panel.isOpen && !panel.disabled;
          }).map(
          /**
          * @param {?} panel
          * @return {?}
          */
          function (panel) {
            return panel.id;
          });
        }
      }]);

      return NgbAccordion;
    }();

    NgbAccordion.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-accordion',
        exportAs: 'ngbAccordion',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          'class': 'accordion',
          'role': 'tablist',
          '[attr.aria-multiselectable]': '!closeOtherPanels'
        },
        template: "\n    <ng-template #t ngbPanelHeader let-panel>\n      <button class=\"btn btn-link\" [ngbPanelToggle]=\"panel\">\n        {{panel.title}}<ng-template [ngTemplateOutlet]=\"panel.titleTpl?.templateRef\"></ng-template>\n      </button>\n    </ng-template>\n    <ng-template ngFor let-panel [ngForOf]=\"panels\">\n      <div class=\"card\">\n        <div role=\"tab\" id=\"{{panel.id}}-header\" [class]=\"'card-header ' + (panel.type ? 'bg-'+panel.type: type ? 'bg-'+type : '')\">\n          <ng-template [ngTemplateOutlet]=\"panel.headerTpl?.templateRef || t\"\n                       [ngTemplateOutletContext]=\"{$implicit: panel, opened: panel.isOpen}\"></ng-template>\n        </div>\n        <div id=\"{{panel.id}}\" role=\"tabpanel\" [attr.aria-labelledby]=\"panel.id + '-header'\"\n             class=\"collapse\" [class.show]=\"panel.isOpen\" *ngIf=\"!destroyOnHide || panel.isOpen\">\n          <div class=\"card-body\">\n               <ng-template [ngTemplateOutlet]=\"panel.contentTpl?.templateRef\"></ng-template>\n          </div>\n        </div>\n      </div>\n    </ng-template>\n  "
      }]
    }];
    /** @nocollapse */

    NgbAccordion.ctorParameters = function () {
      return [{
        type: NgbAccordionConfig
      }];
    };

    NgbAccordion.propDecorators = {
      panels: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbPanel]
      }],
      activeIds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeOtherPanels: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['closeOthers']
      }],
      destroyOnHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      panelChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * A directive to put on a button that toggles panel opening and closing.
     *
     * To be used inside the [`NgbPanelHeader`](#/components/accordion/api#NgbPanelHeader)
     *
     * \@since 4.1.0
     */

    var NgbPanelToggle =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} accordion
       * @param {?} panel
       */
      function NgbPanelToggle(accordion, panel) {
        _classCallCheck(this, NgbPanelToggle);

        this.accordion = accordion;
        this.panel = panel;
      }
      /**
       * @param {?} panel
       * @return {?}
       */


      _createClass(NgbPanelToggle, [{
        key: "ngbPanelToggle",
        set: function set(panel) {
          if (panel) {
            this.panel = panel;
          }
        }
      }]);

      return NgbPanelToggle;
    }();

    NgbPanelToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'button[ngbPanelToggle]',
        host: {
          'type': 'button',
          '[disabled]': 'panel.disabled',
          '[class.collapsed]': '!panel.isOpen',
          '[attr.aria-expanded]': 'panel.isOpen',
          '[attr.aria-controls]': 'panel.id',
          '(click)': 'accordion.toggle(panel.id)'
        }
      }]
    }];
    /** @nocollapse */

    NgbPanelToggle.ctorParameters = function () {
      return [{
        type: NgbAccordion
      }, {
        type: NgbPanel,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Host"]
        }]
      }];
    };

    NgbPanelToggle.propDecorators = {
      ngbPanelToggle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_ACCORDION_DIRECTIVES = [NgbAccordion, NgbPanel, NgbPanelTitle, NgbPanelContent, NgbPanelHeader, NgbPanelToggle];

    var NgbAccordionModule = function NgbAccordionModule() {
      _classCallCheck(this, NgbAccordionModule);
    };

    NgbAccordionModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: NGB_ACCORDION_DIRECTIVES,
        exports: NGB_ACCORDION_DIRECTIVES,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [NgbAlert](#/components/alert/api#NgbAlert) component.
     *
     * You can inject this service, typically in your root component, and customize its properties
     * to provide default values for all alerts used in the application.
     */

    var NgbAlertConfig = function NgbAlertConfig() {
      _classCallCheck(this, NgbAlertConfig);

      this.dismissible = true;
      this.type = 'warning';
    };

    NgbAlertConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbAlertConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbAlertConfig_Factory() {
        return new NgbAlertConfig();
      },
      token: NgbAlertConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Alert is a component to provide contextual feedback messages for user.
     *
     * It supports several alert types and can be dismissed.
     */

    var NgbAlert =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} _renderer
       * @param {?} _element
       */
      function NgbAlert(config, _renderer, _element) {
        _classCallCheck(this, NgbAlert);

        this._renderer = _renderer;
        this._element = _element;
        /**
         * An event emitted when the close button is clicked. It has no payload and only relevant for dismissible alerts.
         */

        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dismissible = config.dismissible;
        this.type = config.type;
      }
      /**
       * @return {?}
       */


      _createClass(NgbAlert, [{
        key: "closeHandler",
        value: function closeHandler() {
          this.close.emit(null);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var typeChange = changes['type'];

          if (typeChange && !typeChange.firstChange) {
            this._renderer.removeClass(this._element.nativeElement, "alert-".concat(typeChange.previousValue));

            this._renderer.addClass(this._element.nativeElement, "alert-".concat(typeChange.currentValue));
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._renderer.addClass(this._element.nativeElement, "alert-".concat(this.type));
        }
      }]);

      return NgbAlert;
    }();

    NgbAlert.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-alert',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          'role': 'alert',
          'class': 'alert',
          '[class.alert-dismissible]': 'dismissible'
        },
        template: "\n    <ng-content></ng-content>\n    <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.alert.close\"\n      (click)=\"closeHandler()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    ",
        styles: ["ngb-alert{display:block}"]
      }]
    }];
    /** @nocollapse */

    NgbAlert.ctorParameters = function () {
      return [{
        type: NgbAlertConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgbAlert.propDecorators = {
      dismissible: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      close: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbAlertModule = function NgbAlertModule() {
      _classCallCheck(this, NgbAlertModule);
    };

    NgbAlertModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbAlert],
        exports: [NgbAlert],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        entryComponents: [NgbAlert]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbButtonLabel = function NgbButtonLabel() {
      _classCallCheck(this, NgbButtonLabel);
    };

    NgbButtonLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbButtonLabel]',
        host: {
          '[class.btn]': 'true',
          '[class.active]': 'active',
          '[class.disabled]': 'disabled',
          '[class.focus]': 'focused'
        }
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_CHECKBOX_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbCheckBox;
      }),
      multi: true
    };
    /**
     * Allows to easily create Bootstrap-style checkbox buttons.
     *
     * Integrates with forms, so the value of a checked button is bound to the underlying form control
     * either in a reactive or template-driven way.
     */

    var NgbCheckBox =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _label
       * @param {?} _cd
       */
      function NgbCheckBox(_label, _cd) {
        _classCallCheck(this, NgbCheckBox);

        this._label = _label;
        this._cd = _cd;
        /**
         * If `true`, the checkbox button will be disabled
         */

        this.disabled = false;
        /**
         * The form control value when the checkbox is checked.
         */

        this.valueChecked = true;
        /**
         * The form control value when the checkbox is unchecked.
         */

        this.valueUnChecked = false;

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * @param {?} isFocused
       * @return {?}
       */


      _createClass(NgbCheckBox, [{
        key: "onInputChange",

        /**
         * @param {?} $event
         * @return {?}
         */
        value: function onInputChange($event) {
          /** @type {?} */
          var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
          this.onChange(modelToPropagate);
          this.onTouched();
          this.writeValue(modelToPropagate);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
          this._label.disabled = isDisabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.checked = value === this.valueChecked;
          this._label.active = this.checked; // label won't be updated, if it is inside the OnPush component when [ngModel] changes

          this._cd.markForCheck();
        }
      }, {
        key: "focused",
        set: function set(isFocused) {
          this._label.focused = isFocused;

          if (!isFocused) {
            this.onTouched();
          }
        }
      }]);

      return NgbCheckBox;
    }();

    NgbCheckBox.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbButton][type=checkbox]',
        host: {
          '[checked]': 'checked',
          '[disabled]': 'disabled',
          '(change)': 'onInputChange($event)',
          '(focus)': 'focused = true',
          '(blur)': 'focused = false'
        },
        providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    NgbCheckBox.ctorParameters = function () {
      return [{
        type: NgbButtonLabel
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    NgbCheckBox.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      valueChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      valueUnChecked: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_RADIO_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbRadioGroup;
      }),
      multi: true
    };
    /** @type {?} */

    var nextId$1 = 0;
    /**
     * Allows to easily create Bootstrap-style radio buttons.
     *
     * Integrates with forms, so the value of a checked button is bound to the underlying form control
     * either in a reactive or template-driven way.
     */

    var NgbRadioGroup =
    /*#__PURE__*/
    function () {
      function NgbRadioGroup() {
        _classCallCheck(this, NgbRadioGroup);

        this._radios = new Set();
        this._value = null;
        /**
         * Name of the radio group applied to radio input elements.
         *
         * Will be applied to all radio input elements inside the group,
         * unless [`NgbRadio`](#/components/buttons/api#NgbRadio)'s specify names themselves.
         *
         * If not provided, will be generated in the `ngb-radio-xx` format.
         */

        this.name = "ngb-radio-".concat(nextId$1++);

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};
      }
      /**
       * @return {?}
       */


      _createClass(NgbRadioGroup, [{
        key: "onRadioChange",

        /**
         * @param {?} radio
         * @return {?}
         */
        value: function onRadioChange(radio) {
          this.writeValue(radio.value);
          this.onChange(radio.value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onRadioValueUpdate",
        value: function onRadioValueUpdate() {
          this._updateRadiosValue();
        }
        /**
         * @param {?} radio
         * @return {?}
         */

      }, {
        key: "register",
        value: function register(radio) {
          this._radios.add(radio);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._disabled = isDisabled;

          this._updateRadiosDisabled();
        }
        /**
         * @param {?} radio
         * @return {?}
         */

      }, {
        key: "unregister",
        value: function unregister(radio) {
          this._radios.delete(radio);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._value = value;

          this._updateRadiosValue();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRadiosValue",
        value: function _updateRadiosValue() {
          var _this7 = this;

          this._radios.forEach(
          /**
          * @param {?} radio
          * @return {?}
          */
          function (radio) {
            return radio.updateValue(_this7._value);
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updateRadiosDisabled",
        value: function _updateRadiosDisabled() {
          this._radios.forEach(
          /**
          * @param {?} radio
          * @return {?}
          */
          function (radio) {
            return radio.updateDisabled();
          });
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        ,
        set: function set(isDisabled) {
          this.setDisabledState(isDisabled);
        }
      }]);

      return NgbRadioGroup;
    }();

    NgbRadioGroup.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbRadioGroup]',
        host: {
          'role': 'radiogroup'
        },
        providers: [NGB_RADIO_VALUE_ACCESSOR]
      }]
    }];
    NgbRadioGroup.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * A directive that marks an input of type "radio" as a part of the
     * [`NgbRadioGroup`](#/components/buttons/api#NgbRadioGroup).
     */

    var NgbRadio =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _group
       * @param {?} _label
       * @param {?} _renderer
       * @param {?} _element
       * @param {?} _cd
       */
      function NgbRadio(_group, _label, _renderer, _element, _cd) {
        _classCallCheck(this, NgbRadio);

        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._cd = _cd;
        this._value = null;

        this._group.register(this);

        this.updateDisabled();
      }
      /**
       * The form control value when current radio button is checked.
       * @param {?} value
       * @return {?}
       */


      _createClass(NgbRadio, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._group.unregister(this);
        }
        /**
         * @return {?}
         */

      }, {
        key: "onChange",
        value: function onChange() {
          this._group.onRadioChange(this);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "updateValue",
        value: function updateValue(value) {
          // label won't be updated, if it is inside the OnPush component when [ngModel] changes
          if (this.value !== value) {
            this._cd.markForCheck();
          }

          this._checked = this.value === value;
          this._label.active = this._checked;
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateDisabled",
        value: function updateDisabled() {
          this._label.disabled = this.disabled;
        }
      }, {
        key: "value",
        set: function set(value) {
          this._value = value;
          /** @type {?} */

          var stringValue = value ? value.toString() : '';

          this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);

          this._group.onRadioValueUpdate();
        }
        /**
         * If `true`, current radio button will be disabled.
         * @param {?} isDisabled
         * @return {?}
         */
        ,

        /**
         * @return {?}
         */
        get: function get() {
          return this._value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "disabled",
        set: function set(isDisabled) {
          this._disabled = isDisabled !== false;
          this.updateDisabled();
        }
        /**
         * @param {?} isFocused
         * @return {?}
         */
        ,

        /**
         * @return {?}
         */
        get: function get() {
          return this._group.disabled || this._disabled;
        }
      }, {
        key: "focused",
        set: function set(isFocused) {
          if (this._label) {
            this._label.focused = isFocused;
          }

          if (!isFocused) {
            this._group.onTouched();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "checked",
        get: function get() {
          return this._checked;
        }
      }, {
        key: "nameAttr",
        get: function get() {
          return this.name || this._group.name;
        }
      }]);

      return NgbRadio;
    }();

    NgbRadio.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbButton][type=radio]',
        host: {
          '[checked]': 'checked',
          '[disabled]': 'disabled',
          '[name]': 'nameAttr',
          '(change)': 'onChange()',
          '(focus)': 'focused = true',
          '(blur)': 'focused = false'
        }
      }]
    }];
    /** @nocollapse */

    NgbRadio.ctorParameters = function () {
      return [{
        type: NgbRadioGroup
      }, {
        type: NgbButtonLabel
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    NgbRadio.propDecorators = {
      name: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['value']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['disabled']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_BUTTON_DIRECTIVES = [NgbButtonLabel, NgbCheckBox, NgbRadioGroup, NgbRadio];

    var NgbButtonsModule = function NgbButtonsModule() {
      _classCallCheck(this, NgbButtonsModule);
    };

    NgbButtonsModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: NGB_BUTTON_DIRECTIVES,
        exports: NGB_BUTTON_DIRECTIVES
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [NgbCarousel](#/components/carousel/api#NgbCarousel) component.
     *
     * You can inject this service, typically in your root component, and customize its properties
     * to provide default values for all carousels used in the application.
     */

    var NgbCarouselConfig = function NgbCarouselConfig() {
      _classCallCheck(this, NgbCarouselConfig);

      this.interval = 5000;
      this.wrap = true;
      this.keyboard = true;
      this.pauseOnHover = true;
      this.showNavigationArrows = true;
      this.showNavigationIndicators = true;
    };

    NgbCarouselConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbCarouselConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbCarouselConfig_Factory() {
        return new NgbCarouselConfig();
      },
      token: NgbCarouselConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nextId$2 = 0;
    /**
     * A directive that wraps the individual carousel slide.
     */

    var NgbSlide =
    /**
     * @param {?} tplRef
     */
    function NgbSlide(tplRef) {
      _classCallCheck(this, NgbSlide);

      this.tplRef = tplRef;
      /**
       * Slide id that must be unique for the entire document.
       *
       * If not provided, will be generated in the `ngb-slide-xx` format.
       */

      this.id = "ngb-slide-".concat(nextId$2++);
    };

    NgbSlide.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbSlide]'
      }]
    }];
    /** @nocollapse */

    NgbSlide.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };

    NgbSlide.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * Carousel is a component to easily create and control slideshows.
     *
     * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
     */

    var NgbCarousel =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} _platformId
       * @param {?} _ngZone
       * @param {?} _cd
       */
      function NgbCarousel(config, _platformId, _ngZone, _cd) {
        _classCallCheck(this, NgbCarousel);

        this._platformId = _platformId;
        this._ngZone = _ngZone;
        this._cd = _cd;
        this.NgbSlideEventSource = NgbSlideEventSource;
        this._destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._interval$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](0);
        this._mouseHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this._pauseOnHover$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this._pause$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this._wrap$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        /**
         * An event emitted right after the slide transition is completed.
         *
         * See [`NgbSlideEvent`](#/components/carousel/api#NgbSlideEvent) for payload details.
         */

        this.slide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.interval = config.interval;
        this.wrap = config.wrap;
        this.keyboard = config.keyboard;
        this.pauseOnHover = config.pauseOnHover;
        this.showNavigationArrows = config.showNavigationArrows;
        this.showNavigationIndicators = config.showNavigationIndicators;
      }
      /**
       * Time in milliseconds before the next slide is shown.
       * @param {?} value
       * @return {?}
       */


      _createClass(NgbCarousel, [{
        key: "mouseEnter",

        /**
         * @return {?}
         */
        value: function mouseEnter() {
          this._mouseHover$.next(true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "mouseLeave",
        value: function mouseLeave() {
          this._mouseHover$.next(false);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this8 = this;

          // setInterval() doesn't play well with SSR and protractor,
          // so we should run it in the browser and outside Angular
          if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this._platformId)) {
            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var hasNextSlide$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this8.slide.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} slideEvent
              * @return {?}
              */
              function (slideEvent) {
                return slideEvent.current;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(_this8.activeId)), _this8._wrap$, _this8.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref) {
                var _ref2 = _slicedToArray(_ref, 2),
                    currentSlideId = _ref2[0],
                    wrap = _ref2[1];

                /** @type {?} */
                var slideArr = _this8.slides.toArray();
                /** @type {?} */


                var currentSlideIdx = _this8._getSlideIdxById(currentSlideId);

                return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])());
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this8._pause$, _this8._pauseOnHover$, _this8._mouseHover$, _this8._interval$, hasNextSlide$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
              /**
              * @param {?} __0
              * @return {?}
              */
              function (_ref3) {
                var _ref4 = _slicedToArray(_ref3, 5),
                    pause = _ref4[0],
                    pauseOnHover = _ref4[1],
                    mouseHover = _ref4[2],
                    interval = _ref4[3],
                    hasNextSlide = _ref4[4];

                return pause || pauseOnHover && mouseHover || !hasNextSlide ? 0 : interval;
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
              /**
              * @param {?} interval
              * @return {?}
              */
              function (interval) {
                return interval > 0 ? Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(interval, interval) : rxjs__WEBPACK_IMPORTED_MODULE_3__["NEVER"];
              }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this8._destroy$)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this8._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this8.next(NgbSlideEventSource.TIMER);
                });
              });
            });
          }

          this.slides.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroy$)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this8._cd.markForCheck();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          /** @type {?} */
          var activeSlide = this._getSlideById(this.activeId);

          this.activeId = activeSlide ? activeSlide.id : this.slides.length ? this.slides.first.id : null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroy$.next();
        }
        /**
         * Navigates to a slide with the specified identifier.
         * @param {?} slideId
         * @param {?=} source
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(slideId, source) {
          this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
        }
        /**
         * Navigates to the previous slide.
         * @param {?=} source
         * @return {?}
         */

      }, {
        key: "prev",
        value: function prev(source) {
          this._cycleToSelected(this._getPrevSlide(this.activeId), NgbSlideEventDirection.RIGHT, source);
        }
        /**
         * Navigates to the next slide.
         * @param {?=} source
         * @return {?}
         */

      }, {
        key: "next",
        value: function next(source) {
          this._cycleToSelected(this._getNextSlide(this.activeId), NgbSlideEventDirection.LEFT, source);
        }
        /**
         * Pauses cycling through the slides.
         * @return {?}
         */

      }, {
        key: "pause",
        value: function pause() {
          this._pause$.next(true);
        }
        /**
         * Restarts cycling through the slides from left to right.
         * @return {?}
         */

      }, {
        key: "cycle",
        value: function cycle() {
          this._pause$.next(false);
        }
        /**
         * @private
         * @param {?} slideIdx
         * @param {?} direction
         * @param {?=} source
         * @return {?}
         */

      }, {
        key: "_cycleToSelected",
        value: function _cycleToSelected(slideIdx, direction, source) {
          /** @type {?} */
          var selectedSlide = this._getSlideById(slideIdx);

          if (selectedSlide && selectedSlide.id !== this.activeId) {
            this.slide.emit({
              prev: this.activeId,
              current: selectedSlide.id,
              direction: direction,
              paused: this._pause$.value,
              source: source
            });
            this.activeId = selectedSlide.id;
          } // we get here after the interval fires or any external API call like next(), prev() or select()


          this._cd.markForCheck();
        }
        /**
         * @private
         * @param {?} currentActiveSlideId
         * @param {?} nextActiveSlideId
         * @return {?}
         */

      }, {
        key: "_getSlideEventDirection",
        value: function _getSlideEventDirection(currentActiveSlideId, nextActiveSlideId) {
          /** @type {?} */
          var currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
          /** @type {?} */


          var nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);

          return currentActiveSlideIdx > nextActiveSlideIdx ? NgbSlideEventDirection.RIGHT : NgbSlideEventDirection.LEFT;
        }
        /**
         * @private
         * @param {?} slideId
         * @return {?}
         */

      }, {
        key: "_getSlideById",
        value: function _getSlideById(slideId) {
          return this.slides.find(
          /**
          * @param {?} slide
          * @return {?}
          */
          function (slide) {
            return slide.id === slideId;
          });
        }
        /**
         * @private
         * @param {?} slideId
         * @return {?}
         */

      }, {
        key: "_getSlideIdxById",
        value: function _getSlideIdxById(slideId) {
          return this.slides.toArray().indexOf(this._getSlideById(slideId));
        }
        /**
         * @private
         * @param {?} currentSlideId
         * @return {?}
         */

      }, {
        key: "_getNextSlide",
        value: function _getNextSlide(currentSlideId) {
          /** @type {?} */
          var slideArr = this.slides.toArray();
          /** @type {?} */

          var currentSlideIdx = this._getSlideIdxById(currentSlideId);
          /** @type {?} */


          var isLastSlide = currentSlideIdx === slideArr.length - 1;
          return isLastSlide ? this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id : slideArr[currentSlideIdx + 1].id;
        }
        /**
         * @private
         * @param {?} currentSlideId
         * @return {?}
         */

      }, {
        key: "_getPrevSlide",
        value: function _getPrevSlide(currentSlideId) {
          /** @type {?} */
          var slideArr = this.slides.toArray();
          /** @type {?} */

          var currentSlideIdx = this._getSlideIdxById(currentSlideId);
          /** @type {?} */


          var isFirstSlide = currentSlideIdx === 0;
          return isFirstSlide ? this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id : slideArr[currentSlideIdx - 1].id;
        }
      }, {
        key: "interval",
        set: function set(value) {
          this._interval$.next(value);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._interval$.value;
        }
        /**
         * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "wrap",
        set: function set(value) {
          this._wrap$.next(value);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._wrap$.value;
        }
        /**
         * If `true`, will pause slide switching when mouse cursor hovers the slide.
         *
         * \@since 2.2.0
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "pauseOnHover",
        set: function set(value) {
          this._pauseOnHover$.next(value);
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._pauseOnHover$.value;
        }
      }]);

      return NgbCarousel;
    }();

    NgbCarousel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-carousel',
        exportAs: 'ngbCarousel',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          'class': 'carousel slide',
          '[style.display]': '"block"',
          'tabIndex': '0',
          '(keydown.arrowLeft)': 'keyboard && prev(NgbSlideEventSource.ARROW_LEFT)',
          '(keydown.arrowRight)': 'keyboard && next(NgbSlideEventSource.ARROW_RIGHT)'
        },
        template: "\n    <ol class=\"carousel-indicators\" *ngIf=\"showNavigationIndicators\">\n      <li *ngFor=\"let slide of slides\" [id]=\"slide.id\" [class.active]=\"slide.id === activeId\"\n          (click)=\"select(slide.id, NgbSlideEventSource.INDICATOR)\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div *ngFor=\"let slide of slides\" class=\"carousel-item\" [class.active]=\"slide.id === activeId\">\n        <ng-template [ngTemplateOutlet]=\"slide.tplRef\"></ng-template>\n      </div>\n    </div>\n    <a class=\"carousel-control-prev\" role=\"button\" (click)=\"prev(NgbSlideEventSource.ARROW_LEFT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.previous\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" role=\"button\" (click)=\"next(NgbSlideEventSource.ARROW_RIGHT)\" *ngIf=\"showNavigationArrows\">\n      <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n      <span class=\"sr-only\" i18n=\"@@ngb.carousel.next\">Next</span>\n    </a>\n  "
      }]
    }];
    /** @nocollapse */

    NgbCarousel.ctorParameters = function () {
      return [{
        type: NgbCarouselConfig
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    NgbCarousel.propDecorators = {
      slides: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbSlide]
      }],
      activeId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      interval: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      wrap: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      keyboard: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pauseOnHover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showNavigationArrows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showNavigationIndicators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      slide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      mouseEnter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseenter']
      }],
      mouseLeave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mouseleave']
      }]
    };
    /** @enum {string} */

    var NgbSlideEventDirection = {
      LEFT:
      /** @type {?} */
      'left',
      RIGHT:
      /** @type {?} */
      'right'
    };
    /** @enum {string} */

    var NgbSlideEventSource = {
      TIMER: 'timer',
      ARROW_LEFT: 'arrowLeft',
      ARROW_RIGHT: 'arrowRight',
      INDICATOR: 'indicator'
    };
    /** @type {?} */

    var NGB_CAROUSEL_DIRECTIVES = [NgbCarousel, NgbSlide];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbCarouselModule = function NgbCarouselModule() {
      _classCallCheck(this, NgbCarouselModule);
    };

    NgbCarouselModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: NGB_CAROUSEL_DIRECTIVES,
        exports: NGB_CAROUSEL_DIRECTIVES,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A directive to provide a simple way of hiding and showing elements on the page.
     */

    var NgbCollapse = function NgbCollapse() {
      _classCallCheck(this, NgbCollapse);

      /**
       * If `true`, will collapse the element or show it otherwise.
       */
      this.collapsed = false;
    };

    NgbCollapse.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbCollapse]',
        exportAs: 'ngbCollapse',
        host: {
          '[class.collapse]': 'true',
          '[class.show]': '!collapsed'
        }
      }]
    }];
    NgbCollapse.propDecorators = {
      collapsed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngbCollapse']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbCollapseModule = function NgbCollapseModule() {
      _classCallCheck(this, NgbCollapseModule);
    };

    NgbCollapseModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbCollapse],
        exports: [NgbCollapse]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A simple class that represents a date that datepicker also uses internally.
     *
     * It is the implementation of the `NgbDateStruct` interface that adds some convenience methods,
     * like `.equals()`, `.before()`, etc.
     *
     * All datepicker APIs consume `NgbDateStruct`, but return `NgbDate`.
     *
     * In many cases it is simpler to manipulate these objects together with
     * [`NgbCalendar`](#/components/datepicker/api#NgbCalendar) than native JS Dates.
     *
     * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
     *
     * \@since 3.0.0
     */

    var NgbDate =
    /*#__PURE__*/
    function () {
      _createClass(NgbDate, null, [{
        key: "from",

        /**
         * A **static method** that creates a new date object from the `NgbDateStruct`,
         *
         * ex. `NgbDate.from({year: 2000, month: 5, day: 1})`.
         *
         * If the `date` is already of `NgbDate` type, the method will return the same object.
         * @param {?} date
         * @return {?}
         */
        value: function from(date) {
          if (date instanceof NgbDate) {
            return date;
          }

          return date ? new NgbDate(date.year, date.month, date.day) : null;
        }
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} day
         */

      }]);

      function NgbDate(year, month, day) {
        _classCallCheck(this, NgbDate);

        this.year = isInteger(year) ? year : null;
        this.month = isInteger(month) ? month : null;
        this.day = isInteger(day) ? day : null;
      }
      /**
       * Checks if the current date is equal to another date.
       * @param {?} other
       * @return {?}
       */


      _createClass(NgbDate, [{
        key: "equals",
        value: function equals(other) {
          return other && this.year === other.year && this.month === other.month && this.day === other.day;
        }
        /**
         * Checks if the current date is before another date.
         * @param {?} other
         * @return {?}
         */

      }, {
        key: "before",
        value: function before(other) {
          if (!other) {
            return false;
          }

          if (this.year === other.year) {
            if (this.month === other.month) {
              return this.day === other.day ? false : this.day < other.day;
            } else {
              return this.month < other.month;
            }
          } else {
            return this.year < other.year;
          }
        }
        /**
         * Checks if the current date is after another date.
         * @param {?} other
         * @return {?}
         */

      }, {
        key: "after",
        value: function after(other) {
          if (!other) {
            return false;
          }

          if (this.year === other.year) {
            if (this.month === other.month) {
              return this.day === other.day ? false : this.day > other.day;
            } else {
              return this.month > other.month;
            }
          } else {
            return this.year > other.year;
          }
        }
      }]);

      return NgbDate;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} jsDate
     * @return {?}
     */


    function fromJSDate(jsDate) {
      return new NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function toJSDate(date) {
      /** @type {?} */
      var jsDate = new Date(date.year, date.month - 1, date.day, 12); // this is done avoid 30 -> 1930 conversion

      if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
      }

      return jsDate;
    }
    /**
     * @return {?}
     */


    function NGB_DATEPICKER_CALENDAR_FACTORY() {
      return new NgbCalendarGregorian();
    }
    /**
     * A service that represents the calendar used by the datepicker.
     *
     * The default implementation uses the Gregorian calendar. You can inject it in your own
     * implementations if necessary to simplify `NgbDate` calculations.
     * @abstract
     */


    var NgbCalendar = function NgbCalendar() {
      _classCallCheck(this, NgbCalendar);
    };

    NgbCalendar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root',
        useFactory: NGB_DATEPICKER_CALENDAR_FACTORY
      }]
    }];
    /** @nocollapse */

    NgbCalendar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: NGB_DATEPICKER_CALENDAR_FACTORY,
      token: NgbCalendar,
      providedIn: "root"
    });

    var NgbCalendarGregorian =
    /*#__PURE__*/
    function (_NgbCalendar) {
      _inherits(NgbCalendarGregorian, _NgbCalendar);

      function NgbCalendarGregorian() {
        _classCallCheck(this, NgbCalendarGregorian);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbCalendarGregorian).apply(this, arguments));
      }

      _createClass(NgbCalendarGregorian, [{
        key: "getDaysPerWeek",

        /**
         * @return {?}
         */
        value: function getDaysPerWeek() {
          return 7;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMonths",
        value: function getMonths() {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getWeeksPerMonth",
        value: function getWeeksPerMonth() {
          return 6;
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getNext",
        value: function getNext(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

          /** @type {?} */
          var jsDate = toJSDate(date);
          /** @type {?} */

          var checkMonth = true;
          /** @type {?} */

          var expectedMonth = jsDate.getMonth();

          switch (period) {
            case 'y':
              jsDate.setFullYear(jsDate.getFullYear() + number);
              break;

            case 'm':
              expectedMonth += number;
              jsDate.setMonth(expectedMonth);
              expectedMonth = expectedMonth % 12;

              if (expectedMonth < 0) {
                expectedMonth = expectedMonth + 12;
              }

              break;

            case 'd':
              jsDate.setDate(jsDate.getDate() + number);
              checkMonth = false;
              break;

            default:
              return date;
          }

          if (checkMonth && jsDate.getMonth() !== expectedMonth) {
            // this means the destination month has less days than the initial month
            // let's go back to the end of the previous month:
            jsDate.setDate(0);
          }

          return fromJSDate(jsDate);
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getPrev",
        value: function getPrev(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return this.getNext(date, period, -number);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getWeekday",
        value: function getWeekday(date) {
          /** @type {?} */
          var jsDate = toJSDate(date);
          /** @type {?} */

          var day = jsDate.getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

          return day === 0 ? 7 : day;
        }
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */

      }, {
        key: "getWeekNumber",
        value: function getWeekNumber(week, firstDayOfWeek) {
          // in JS Date Sun=0, in ISO 8601 Sun=7
          if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
          }
          /** @type {?} */


          var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
          /** @type {?} */

          var date = week[thursdayIndex];
          /** @type {?} */

          var jsDate = toJSDate(date);
          jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
          // Thursday

          /** @type {?} */

          var time = jsDate.getTime();
          jsDate.setMonth(0); // Compare with Jan 1

          jsDate.setDate(1);
          return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getToday",
        value: function getToday() {
          return fromJSDate(new Date());
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          if (!date || !isInteger(date.year) || !isInteger(date.month) || !isInteger(date.day)) {
            return false;
          } // year 0 doesn't exist in Gregorian calendar


          if (date.year === 0) {
            return false;
          }
          /** @type {?} */


          var jsDate = toJSDate(date);
          return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
        }
      }]);

      return NgbCalendarGregorian;
    }(NgbCalendar);

    NgbCalendarGregorian.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} prev
     * @param {?} next
     * @return {?}
     */

    function isChangedDate(prev, next) {
      return !dateComparator(prev, next);
    }
    /**
     * @param {?} prev
     * @param {?} next
     * @return {?}
     */


    function isChangedMonth(prev, next) {
      return !prev && !next ? false : !prev || !next ? true : prev.year !== next.year || prev.month !== next.month;
    }
    /**
     * @param {?} prev
     * @param {?} next
     * @return {?}
     */


    function dateComparator(prev, next) {
      return !prev && !next || !!prev && !!next && prev.equals(next);
    }
    /**
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function checkMinBeforeMax(minDate, maxDate) {
      if (maxDate && minDate && maxDate.before(minDate)) {
        throw new Error("'maxDate' ".concat(maxDate, " should be greater than 'minDate' ").concat(minDate));
      }
    }
    /**
     * @param {?} date
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function checkDateInRange(date, minDate, maxDate) {
      if (date && minDate && date.before(minDate)) {
        return minDate;
      }

      if (date && maxDate && date.after(maxDate)) {
        return maxDate;
      }

      return date;
    }
    /**
     * @param {?} date
     * @param {?} state
     * @return {?}
     */


    function isDateSelectable(date, state) {
      var minDate = state.minDate,
          maxDate = state.maxDate,
          disabled = state.disabled,
          markDisabled = state.markDisabled; // clang-format off

      return !(!isDefined(date) || disabled || markDisabled && markDisabled(date, {
        year: date.year,
        month: date.month
      }) || minDate && date.before(minDate) || maxDate && date.after(maxDate)); // clang-format on
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function generateSelectBoxMonths(calendar, date, minDate, maxDate) {
      if (!date) {
        return [];
      }
      /** @type {?} */


      var months = calendar.getMonths(date.year);

      if (minDate && date.year === minDate.year) {
        /** @type {?} */
        var index = months.findIndex(
        /**
        * @param {?} month
        * @return {?}
        */
        function (month) {
          return month === minDate.month;
        });
        months = months.slice(index);
      }

      if (maxDate && date.year === maxDate.year) {
        /** @type {?} */
        var _index = months.findIndex(
        /**
        * @param {?} month
        * @return {?}
        */
        function (month) {
          return month === maxDate.month;
        });

        months = months.slice(0, _index + 1);
      }

      return months;
    }
    /**
     * @param {?} date
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function generateSelectBoxYears(date, minDate, maxDate) {
      if (!date) {
        return [];
      }
      /** @type {?} */


      var start = minDate ? Math.max(minDate.year, date.year - 500) : date.year - 10;
      /** @type {?} */

      var end = maxDate ? Math.min(maxDate.year, date.year + 500) : date.year + 10;
      /** @type {?} */

      var length = end - start + 1;
      /** @type {?} */

      var numbers = Array(length);

      for (var i = 0; i < length; i++) {
        numbers[i] = start + i;
      }

      return numbers;
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} maxDate
     * @return {?}
     */


    function nextMonthDisabled(calendar, date, maxDate) {
      /** @type {?} */
      var nextDate = Object.assign(calendar.getNext(date, 'm'), {
        day: 1
      });
      return maxDate && nextDate.after(maxDate);
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} minDate
     * @return {?}
     */


    function prevMonthDisabled(calendar, date, minDate) {
      /** @type {?} */
      var prevDate = Object.assign(calendar.getPrev(date, 'm'), {
        day: 1
      });
      return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month || prevDate.year < minDate.year && minDate.month === 1);
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} state
     * @param {?} i18n
     * @param {?} force
     * @return {?}
     */


    function buildMonths(calendar, date, state, i18n, force) {
      var displayMonths = state.displayMonths,
          months = state.months; // move old months to a temporary array

      /** @type {?} */

      var monthsToReuse = months.splice(0, months.length); // generate new first dates, nullify or reuse months

      /** @type {?} */

      var firstDates = Array.from({
        length: displayMonths
      },
      /**
      * @param {?} _
      * @param {?} i
      * @return {?}
      */
      function (_, i) {
        /** @type {?} */
        var firstDate = Object.assign(calendar.getNext(date, 'm', i), {
          day: 1
        });
        months[i] = null;

        if (!force) {
          /** @type {?} */
          var reusedIndex = monthsToReuse.findIndex(
          /**
          * @param {?} month
          * @return {?}
          */
          function (month) {
            return month.firstDate.equals(firstDate);
          }); // move reused month back to months

          if (reusedIndex !== -1) {
            months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
          }
        }

        return firstDate;
      }); // rebuild nullified months

      firstDates.forEach(
      /**
      * @param {?} firstDate
      * @param {?} i
      * @return {?}
      */
      function (firstDate, i) {
        if (months[i] === null) {
          months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() ||
          /** @type {?} */
          {});
        }
      });
      return months;
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} state
     * @param {?} i18n
     * @param {?=} month
     * @return {?}
     */


    function buildMonth(calendar, date, state, i18n) {
      var month = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] :
      /** @type {?} */
      {};
      var dayTemplateData = state.dayTemplateData,
          minDate = state.minDate,
          maxDate = state.maxDate,
          firstDayOfWeek = state.firstDayOfWeek,
          markDisabled = state.markDisabled,
          outsideDays = state.outsideDays;
      /** @type {?} */

      var calendarToday = calendar.getToday();
      month.firstDate = null;
      month.lastDate = null;
      month.number = date.month;
      month.year = date.year;
      month.weeks = month.weeks || [];
      month.weekdays = month.weekdays || [];
      date = getFirstViewDate(calendar, date, firstDayOfWeek); // month has weeks

      for (var week = 0; week < calendar.getWeeksPerMonth(); week++) {
        /** @type {?} */
        var weekObject = month.weeks[week];

        if (!weekObject) {
          weekObject = month.weeks[week] = {
            number: 0,
            days: [],
            collapsed: true
          };
        }
        /** @type {?} */


        var days = weekObject.days; // week has days

        for (var day = 0; day < calendar.getDaysPerWeek(); day++) {
          if (week === 0) {
            month.weekdays[day] = calendar.getWeekday(date);
          }
          /** @type {?} */


          var newDate = new NgbDate(date.year, date.month, date.day);
          /** @type {?} */

          var nextDate = calendar.getNext(newDate);
          /** @type {?} */

          var ariaLabel = i18n.getDayAriaLabel(newDate); // marking date as disabled

          /** @type {?} */

          var disabled = !!(minDate && newDate.before(minDate) || maxDate && newDate.after(maxDate));

          if (!disabled && markDisabled) {
            disabled = markDisabled(newDate, {
              month: month.number,
              year: month.year
            });
          } // today

          /** @type {?} */


          var today = newDate.equals(calendarToday); // adding user-provided data to the context

          /** @type {?} */

          var contextUserData = dayTemplateData ? dayTemplateData(newDate, {
            month: month.number,
            year: month.year
          }) : undefined; // saving first date of the month

          if (month.firstDate === null && newDate.month === month.number) {
            month.firstDate = newDate;
          } // saving last date of the month


          if (newDate.month === month.number && nextDate.month !== month.number) {
            month.lastDate = newDate;
          }
          /** @type {?} */


          var dayObject = days[day];

          if (!dayObject) {
            dayObject = days[day] =
            /** @type {?} */
            {};
          }

          dayObject.date = newDate;
          dayObject.context = Object.assign(dayObject.context || {}, {
            $implicit: newDate,
            date: newDate,
            data: contextUserData,
            currentMonth: month.number,
            currentYear: month.year,
            disabled: disabled,
            focused: false,
            selected: false,
            today: today
          });
          dayObject.tabindex = -1;
          dayObject.ariaLabel = ariaLabel;
          dayObject.hidden = false;
          date = nextDate;
        }

        weekObject.number = calendar.getWeekNumber(days.map(
        /**
        * @param {?} day
        * @return {?}
        */
        function (day) {
          return day.date;
        }), firstDayOfWeek); // marking week as collapsed

        weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number && days[days.length - 1].date.month !== month.number;
      }

      return month;
    }
    /**
     * @param {?} calendar
     * @param {?} date
     * @param {?} firstDayOfWeek
     * @return {?}
     */


    function getFirstViewDate(calendar, date, firstDayOfWeek) {
      /** @type {?} */
      var daysPerWeek = calendar.getDaysPerWeek();
      /** @type {?} */

      var firstMonthDate = new NgbDate(date.year, date.month, 1);
      /** @type {?} */

      var dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
      return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} locale
     * @return {?}
     */


    function NGB_DATEPICKER_18N_FACTORY(locale) {
      return new NgbDatepickerI18nDefault(locale);
    }
    /**
     * A service supplying i18n data to the datepicker component.
     *
     * The default implementation of this service uses the Angular locale and registered locale data for
     * weekdays and month names (as explained in the Angular i18n guide).
     *
     * It also provides a way to i18n data that depends on calendar calculations, like aria labels, day, week and year
     * numerals. For other static labels the datepicker uses the default Angular i18n.
     *
     * See the [i18n demo](#/components/datepicker/examples#i18n) and
     * [Hebrew calendar demo](#/components/datepicker/calendars#hebrew) on how to extend this class and define
     * a custom provider for i18n.
     * @abstract
     */


    var NgbDatepickerI18n =
    /*#__PURE__*/
    function () {
      function NgbDatepickerI18n() {
        _classCallCheck(this, NgbDatepickerI18n);
      }

      _createClass(NgbDatepickerI18n, [{
        key: "getDayNumerals",

        /**
         * Returns the textual representation of a day that is rendered in a day cell.
         *
         * \@since 3.0.0
         * @param {?} date
         * @return {?}
         */
        value: function getDayNumerals(date) {
          return "".concat(date.day);
        }
        /**
         * Returns the textual representation of a week number rendered by datepicker.
         *
         * \@since 3.0.0
         * @param {?} weekNumber
         * @return {?}
         */

      }, {
        key: "getWeekNumerals",
        value: function getWeekNumerals(weekNumber) {
          return "".concat(weekNumber);
        }
        /**
         * Returns the textual representation of a year that is rendered in the datepicker year select box.
         *
         * \@since 3.0.0
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "getYearNumerals",
        value: function getYearNumerals(year) {
          return "".concat(year);
        }
      }]);

      return NgbDatepickerI18n;
    }();

    NgbDatepickerI18n.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root',
        useFactory: NGB_DATEPICKER_18N_FACTORY,
        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
      }]
    }];
    /** @nocollapse */

    NgbDatepickerI18n.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbDatepickerI18n_Factory() {
        return NGB_DATEPICKER_18N_FACTORY(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      },
      token: NgbDatepickerI18n,
      providedIn: "root"
    });

    var NgbDatepickerI18nDefault =
    /*#__PURE__*/
    function (_NgbDatepickerI18n) {
      _inherits(NgbDatepickerI18nDefault, _NgbDatepickerI18n);

      /**
       * @param {?} _locale
       */
      function NgbDatepickerI18nDefault(_locale) {
        var _this9;

        _classCallCheck(this, NgbDatepickerI18nDefault);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(NgbDatepickerI18nDefault).call(this));
        _this9._locale = _locale;
        /** @type {?} */

        var weekdaysStartingOnSunday = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Short);
        _this9._weekdaysShort = weekdaysStartingOnSunday.map(
        /**
        * @param {?} day
        * @param {?} index
        * @return {?}
        */
        function (day, index) {
          return weekdaysStartingOnSunday[(index + 1) % 7];
        });
        _this9._monthsShort = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Abbreviated);
        _this9._monthsFull = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleMonthNames"])(_locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Wide);
        return _this9;
      }
      /**
       * @param {?} weekday
       * @return {?}
       */


      _createClass(NgbDatepickerI18nDefault, [{
        key: "getWeekdayShortName",
        value: function getWeekdayShortName(weekday) {
          return this._weekdaysShort[weekday - 1];
        }
        /**
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "getMonthShortName",
        value: function getMonthShortName(month) {
          return this._monthsShort[month - 1];
        }
        /**
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "getMonthFullName",
        value: function getMonthFullName(month) {
          return this._monthsFull[month - 1];
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayAriaLabel",
        value: function getDayAriaLabel(date) {
          /** @type {?} */
          var jsDate = new Date(date.year, date.month - 1, date.day);
          return Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(jsDate, 'fullDate', this._locale);
        }
      }]);

      return NgbDatepickerI18nDefault;
    }(NgbDatepickerI18n);

    NgbDatepickerI18nDefault.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NgbDatepickerI18nDefault.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgbDatepickerService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _calendar
       * @param {?} _i18n
       */
      function NgbDatepickerService(_calendar, _i18n) {
        var _this10 = this;

        _classCallCheck(this, NgbDatepickerService);

        this._calendar = _calendar;
        this._i18n = _i18n;
        this._VALIDATORS = {
          dayTemplateData:
          /**
          * @param {?} dayTemplateData
          * @return {?}
          */
          function dayTemplateData(_dayTemplateData) {
            if (_this10._state.dayTemplateData !== _dayTemplateData) {
              return {
                dayTemplateData: _dayTemplateData
              };
            }
          },
          displayMonths:
          /**
          * @param {?} displayMonths
          * @return {?}
          */
          function displayMonths(_displayMonths) {
            _displayMonths = toInteger(_displayMonths);

            if (isInteger(_displayMonths) && _displayMonths > 0 && _this10._state.displayMonths !== _displayMonths) {
              return {
                displayMonths: _displayMonths
              };
            }
          },
          disabled:
          /**
          * @param {?} disabled
          * @return {?}
          */
          function disabled(_disabled) {
            if (_this10._state.disabled !== _disabled) {
              return {
                disabled: _disabled
              };
            }
          },
          firstDayOfWeek:
          /**
          * @param {?} firstDayOfWeek
          * @return {?}
          */
          function firstDayOfWeek(_firstDayOfWeek) {
            _firstDayOfWeek = toInteger(_firstDayOfWeek);

            if (isInteger(_firstDayOfWeek) && _firstDayOfWeek >= 0 && _this10._state.firstDayOfWeek !== _firstDayOfWeek) {
              return {
                firstDayOfWeek: _firstDayOfWeek
              };
            }
          },
          focusVisible:
          /**
          * @param {?} focusVisible
          * @return {?}
          */
          function focusVisible(_focusVisible) {
            if (_this10._state.focusVisible !== _focusVisible && !_this10._state.disabled) {
              return {
                focusVisible: _focusVisible
              };
            }
          },
          markDisabled:
          /**
          * @param {?} markDisabled
          * @return {?}
          */
          function markDisabled(_markDisabled) {
            if (_this10._state.markDisabled !== _markDisabled) {
              return {
                markDisabled: _markDisabled
              };
            }
          },
          maxDate:
          /**
          * @param {?} date
          * @return {?}
          */
          function maxDate(date) {
            /** @type {?} */
            var maxDate = _this10.toValidDate(date, null);

            if (isChangedDate(_this10._state.maxDate, maxDate)) {
              return {
                maxDate: maxDate
              };
            }
          },
          minDate:
          /**
          * @param {?} date
          * @return {?}
          */
          function minDate(date) {
            /** @type {?} */
            var minDate = _this10.toValidDate(date, null);

            if (isChangedDate(_this10._state.minDate, minDate)) {
              return {
                minDate: minDate
              };
            }
          },
          navigation:
          /**
          * @param {?} navigation
          * @return {?}
          */
          function navigation(_navigation) {
            if (_this10._state.navigation !== _navigation) {
              return {
                navigation: _navigation
              };
            }
          },
          outsideDays:
          /**
          * @param {?} outsideDays
          * @return {?}
          */
          function outsideDays(_outsideDays) {
            if (_this10._state.outsideDays !== _outsideDays) {
              return {
                outsideDays: _outsideDays
              };
            }
          }
        };
        this._model$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._dateSelect$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._state = {
          disabled: false,
          displayMonths: 1,
          firstDayOfWeek: 1,
          focusVisible: false,
          months: [],
          navigation: 'select',
          outsideDays: 'visible',
          prevDisabled: false,
          nextDisabled: false,
          selectBoxes: {
            years: [],
            months: []
          },
          selectedDate: null
        };
      }
      /**
       * @return {?}
       */


      _createClass(NgbDatepickerService, [{
        key: "set",

        /**
         * @param {?} options
         * @return {?}
         */
        value: function set(options) {
          var _this11 = this;

          /** @type {?} */
          var patch = Object.keys(options).map(
          /**
          * @param {?} key
          * @return {?}
          */
          function (key) {
            return _this11._VALIDATORS[key](options[key]);
          }).reduce(
          /**
          * @param {?} obj
          * @param {?} part
          * @return {?}
          */
          function (obj, part) {
            return Object.assign({}, obj, part);
          }, {});

          if (Object.keys(patch).length > 0) {
            this._nextState(patch);
          }
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(date) {
          if (!this._state.disabled && this._calendar.isValid(date) && isChangedDate(this._state.focusDate, date)) {
            this._nextState({
              focusDate: date
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "focusSelect",
        value: function focusSelect() {
          if (isDateSelectable(this._state.focusDate, this._state)) {
            this.select(this._state.focusDate, {
              emitEvent: true
            });
          }
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(date) {
          /** @type {?} */
          var firstDate = this.toValidDate(date, this._calendar.getToday());

          if (!this._state.disabled && (!this._state.firstDate || isChangedMonth(this._state.firstDate, date))) {
            this._nextState({
              firstDate: firstDate
            });
          }
        }
        /**
         * @param {?} date
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(date) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          var selectedDate = this.toValidDate(date, null);

          if (!this._state.disabled) {
            if (isChangedDate(this._state.selectedDate, selectedDate)) {
              this._nextState({
                selectedDate: selectedDate
              });
            }

            if (options.emitEvent && isDateSelectable(selectedDate, this._state)) {
              this._dateSelect$.next(selectedDate);
            }
          }
        }
        /**
         * @param {?} date
         * @param {?=} defaultValue
         * @return {?}
         */

      }, {
        key: "toValidDate",
        value: function toValidDate(date, defaultValue) {
          /** @type {?} */
          var ngbDate = NgbDate.from(date);

          if (defaultValue === undefined) {
            defaultValue = this._calendar.getToday();
          }

          return this._calendar.isValid(ngbDate) ? ngbDate : defaultValue;
        }
        /**
         * @private
         * @param {?} patch
         * @return {?}
         */

      }, {
        key: "_nextState",
        value: function _nextState(patch) {
          /** @type {?} */
          var newState = this._updateState(patch);

          this._patchContexts(newState);

          this._state = newState;

          this._model$.next(this._state);
        }
        /**
         * @private
         * @param {?} state
         * @return {?}
         */

      }, {
        key: "_patchContexts",
        value: function _patchContexts(state) {
          var months = state.months,
              displayMonths = state.displayMonths,
              selectedDate = state.selectedDate,
              focusDate = state.focusDate,
              focusVisible = state.focusVisible,
              disabled = state.disabled,
              outsideDays = state.outsideDays;
          state.months.forEach(
          /**
          * @param {?} month
          * @return {?}
          */
          function (month) {
            month.weeks.forEach(
            /**
            * @param {?} week
            * @return {?}
            */
            function (week) {
              week.days.forEach(
              /**
              * @param {?} day
              * @return {?}
              */
              function (day) {
                // patch focus flag
                if (focusDate) {
                  day.context.focused = focusDate.equals(day.date) && focusVisible;
                } // calculating tabindex


                day.tabindex = !disabled && day.date.equals(focusDate) && focusDate.month === month.number ? 0 : -1; // override context disabled

                if (disabled === true) {
                  day.context.disabled = true;
                } // patch selection flag


                if (selectedDate !== undefined) {
                  day.context.selected = selectedDate !== null && selectedDate.equals(day.date);
                } // visibility


                if (month.number !== day.date.month) {
                  day.hidden = outsideDays === 'hidden' || outsideDays === 'collapsed' || displayMonths > 1 && day.date.after(months[0].firstDate) && day.date.before(months[displayMonths - 1].lastDate);
                }
              });
            });
          });
        }
        /**
         * @private
         * @param {?} patch
         * @return {?}
         */

      }, {
        key: "_updateState",
        value: function _updateState(patch) {
          // patching fields

          /** @type {?} */
          var state = Object.assign({}, this._state, patch);
          /** @type {?} */

          var startDate = state.firstDate; // min/max dates changed

          if ('minDate' in patch || 'maxDate' in patch) {
            checkMinBeforeMax(state.minDate, state.maxDate);
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.focusDate;
          } // disabled


          if ('disabled' in patch) {
            state.focusVisible = false;
          } // initial rebuild via 'select()'


          if ('selectedDate' in patch && this._state.months.length === 0) {
            startDate = state.selectedDate;
          } // terminate early if only focus visibility was changed


          if ('focusVisible' in patch) {
            return state;
          } // focus date changed


          if ('focusDate' in patch) {
            state.focusDate = checkDateInRange(state.focusDate, state.minDate, state.maxDate);
            startDate = state.focusDate; // nothing to rebuild if only focus changed and it is still visible

            if (state.months.length !== 0 && !state.focusDate.before(state.firstDate) && !state.focusDate.after(state.lastDate)) {
              return state;
            }
          } // first date changed


          if ('firstDate' in patch) {
            state.firstDate = checkDateInRange(state.firstDate, state.minDate, state.maxDate);
            startDate = state.firstDate;
          } // rebuilding months


          if (startDate) {
            /** @type {?} */
            var forceRebuild = 'dayTemplateData' in patch || 'firstDayOfWeek' in patch || 'markDisabled' in patch || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch || 'outsideDays' in patch;
            /** @type {?} */

            var months = buildMonths(this._calendar, startDate, state, this._i18n, forceRebuild); // updating months and boundary dates

            state.months = months;
            state.firstDate = months.length > 0 ? months[0].firstDate : undefined;
            state.lastDate = months.length > 0 ? months[months.length - 1].lastDate : undefined; // reset selected date if 'markDisabled' returns true

            if ('selectedDate' in patch && !isDateSelectable(state.selectedDate, state)) {
              state.selectedDate = null;
            } // adjusting focus after months were built


            if ('firstDate' in patch) {
              if (state.focusDate === undefined || state.focusDate.before(state.firstDate) || state.focusDate.after(state.lastDate)) {
                state.focusDate = startDate;
              }
            } // adjusting months/years for the select box navigation

            /** @type {?} */


            var yearChanged = !this._state.firstDate || this._state.firstDate.year !== state.firstDate.year;
            /** @type {?} */

            var monthChanged = !this._state.firstDate || this._state.firstDate.month !== state.firstDate.month;

            if (state.navigation === 'select') {
              // years ->  boundaries (min/max were changed)
              if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.years.length === 0 || yearChanged) {
                state.selectBoxes.years = generateSelectBoxYears(state.firstDate, state.minDate, state.maxDate);
              } // months -> when current year or boundaries change


              if ('minDate' in patch || 'maxDate' in patch || state.selectBoxes.months.length === 0 || yearChanged) {
                state.selectBoxes.months = generateSelectBoxMonths(this._calendar, state.firstDate, state.minDate, state.maxDate);
              }
            } else {
              state.selectBoxes = {
                years: [],
                months: []
              };
            } // updating navigation arrows -> boundaries change (min/max) or month/year changes


            if ((state.navigation === 'arrows' || state.navigation === 'select') && (monthChanged || yearChanged || 'minDate' in patch || 'maxDate' in patch || 'disabled' in patch)) {
              state.prevDisabled = state.disabled || prevMonthDisabled(this._calendar, state.firstDate, state.minDate);
              state.nextDisabled = state.disabled || nextMonthDisabled(this._calendar, state.lastDate, state.maxDate);
            }
          }

          return state;
        }
      }, {
        key: "model$",
        get: function get() {
          return this._model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} model
          * @return {?}
          */
          function (model) {
            return model.months.length > 0;
          }));
        }
        /**
         * @return {?}
         */

      }, {
        key: "dateSelect$",
        get: function get() {
          return this._dateSelect$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} date
          * @return {?}
          */
          function (date) {
            return date !== null;
          }));
        }
      }]);

      return NgbDatepickerService;
    }();

    NgbDatepickerService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NgbDatepickerService.ctorParameters = function () {
      return [{
        type: NgbCalendar
      }, {
        type: NgbDatepickerI18n
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var Key = {
      Tab: 9,
      Enter: 13,
      Escape: 27,
      Space: 32,
      PageUp: 33,
      PageDown: 34,
      End: 35,
      Home: 36,
      ArrowLeft: 37,
      ArrowUp: 38,
      ArrowRight: 39,
      ArrowDown: 40
    };
    Key[Key.Tab] = 'Tab';
    Key[Key.Enter] = 'Enter';
    Key[Key.Escape] = 'Escape';
    Key[Key.Space] = 'Space';
    Key[Key.PageUp] = 'PageUp';
    Key[Key.PageDown] = 'PageDown';
    Key[Key.End] = 'End';
    Key[Key.Home] = 'Home';
    Key[Key.ArrowLeft] = 'ArrowLeft';
    Key[Key.ArrowUp] = 'ArrowUp';
    Key[Key.ArrowRight] = 'ArrowRight';
    Key[Key.ArrowDown] = 'ArrowDown';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A service that represents the keyboard navigation.
     *
     * Default keyboard shortcuts [are documented in the overview](#/components/datepicker/overview#keyboard-shortcuts)
     *
     * \@since 5.2.0
     */

    var NgbDatepickerKeyboardService =
    /*#__PURE__*/
    function () {
      function NgbDatepickerKeyboardService() {
        _classCallCheck(this, NgbDatepickerKeyboardService);
      }

      _createClass(NgbDatepickerKeyboardService, [{
        key: "processKey",

        /**
         * Processes a keyboard event.
         * @param {?} event
         * @param {?} datepicker
         * @param {?} calendar
         * @return {?}
         */
        value: function processKey(event, datepicker, calendar) {
          /** @type {?} */
          var state = datepicker.state; // tslint:disable-next-line:deprecation

          switch (event.which) {
            case Key.PageUp:
              datepicker.focusDate(calendar.getPrev(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
              break;

            case Key.PageDown:
              datepicker.focusDate(calendar.getNext(state.focusedDate, event.shiftKey ? 'y' : 'm', 1));
              break;

            case Key.End:
              datepicker.focusDate(event.shiftKey ? state.maxDate : state.lastDate);
              break;

            case Key.Home:
              datepicker.focusDate(event.shiftKey ? state.minDate : state.firstDate);
              break;

            case Key.ArrowLeft:
              datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', 1));
              break;

            case Key.ArrowUp:
              datepicker.focusDate(calendar.getPrev(state.focusedDate, 'd', calendar.getDaysPerWeek()));
              break;

            case Key.ArrowRight:
              datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', 1));
              break;

            case Key.ArrowDown:
              datepicker.focusDate(calendar.getNext(state.focusedDate, 'd', calendar.getDaysPerWeek()));
              break;

            case Key.Enter:
            case Key.Space:
              datepicker.focusSelect();
              break;

            default:
              return;
          }

          event.preventDefault();
          event.stopPropagation();
        }
      }]);

      return NgbDatepickerKeyboardService;
    }();

    NgbDatepickerKeyboardService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbDatepickerKeyboardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbDatepickerKeyboardService_Factory() {
        return new NgbDatepickerKeyboardService();
      },
      token: NgbDatepickerKeyboardService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */

    var NavigationEvent = {
      PREV: 0,
      NEXT: 1
    };
    NavigationEvent[NavigationEvent.PREV] = 'PREV';
    NavigationEvent[NavigationEvent.NEXT] = 'NEXT';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbDatepicker`](#/components/datepicker/api#NgbDatepicker) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the datepickers used in the application.
     */

    var NgbDatepickerConfig = function NgbDatepickerConfig() {
      _classCallCheck(this, NgbDatepickerConfig);

      this.displayMonths = 1;
      this.firstDayOfWeek = 1;
      this.navigation = 'select';
      this.outsideDays = 'visible';
      this.showWeekdays = true;
      this.showWeekNumbers = false;
    };

    NgbDatepickerConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbDatepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbDatepickerConfig_Factory() {
        return new NgbDatepickerConfig();
      },
      token: NgbDatepickerConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */

    function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
      return new NgbDateStructAdapter();
    }
    /**
     * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
     * any provided user date model `D`, ex. a string, a native date, etc.
     *
     * The adapter is used **only** for conversion when binding datepicker to a form control,
     * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
     *
     * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
     *
     * See the [date format overview](#/components/datepicker/overview#date-model) for more details
     * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
     * @abstract
     * @template D
     */


    var NgbDateAdapter = function NgbDateAdapter() {
      _classCallCheck(this, NgbDateAdapter);
    };

    NgbDateAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root',
        useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY
      }]
    }];
    /** @nocollapse */

    NgbDateAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY,
      token: NgbDateAdapter,
      providedIn: "root"
    });

    var NgbDateStructAdapter =
    /*#__PURE__*/
    function (_NgbDateAdapter) {
      _inherits(NgbDateStructAdapter, _NgbDateAdapter);

      function NgbDateStructAdapter() {
        _classCallCheck(this, NgbDateStructAdapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbDateStructAdapter).apply(this, arguments));
      }

      _createClass(NgbDateStructAdapter, [{
        key: "fromModel",

        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param {?} date
         * @return {?}
         */
        value: function fromModel(date) {
          return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
            year: date.year,
            month: date.month,
            day: date.day
          } : null;
        }
        /**
         * Converts a NgbDateStruct value into NgbDateStruct value
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toModel",
        value: function toModel(date) {
          return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? {
            year: date.year,
            month: date.month,
            day: date.day
          } : null;
        }
      }]);

      return NgbDateStructAdapter;
    }(NgbDateAdapter);

    NgbDateStructAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_DATEPICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbDatepicker;
      }),
      multi: true
    };
    /**
     * A highly configurable component that helps you with selecting calendar dates.
     *
     * `NgbDatepicker` is meant to be displayed inline on a page or put inside a popup.
     */

    var NgbDatepicker =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _service
       * @param {?} _calendar
       * @param {?} i18n
       * @param {?} config
       * @param {?} _keyboardService
       * @param {?} cd
       * @param {?} _elementRef
       * @param {?} _ngbDateAdapter
       * @param {?} _ngZone
       */
      function NgbDatepicker(_service, _calendar, i18n, config, _keyboardService, cd, _elementRef, _ngbDateAdapter, _ngZone) {
        var _this12 = this;

        _classCallCheck(this, NgbDatepicker);

        this._service = _service;
        this._calendar = _calendar;
        this.i18n = i18n;
        this._keyboardService = _keyboardService;
        this._elementRef = _elementRef;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._ngZone = _ngZone;
        this._destroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._publicState =
        /** @type {?} */
        {};
        /**
         * An event emitted right before the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */

        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * \@since 5.2.0
         */

        this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * Please use 'dateSelect' output instead, this will be deprecated in version 6.0 due to collision with native
         * 'select' event.
         */

        this.select = this.dateSelect;

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate'].forEach(
        /**
        * @param {?} input
        * @return {?}
        */
        function (input) {
          return _this12[input] = config[input];
        });

        _service.dateSelect$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroyed$)).subscribe(
        /**
        * @param {?} date
        * @return {?}
        */
        function (date) {
          _this12.dateSelect.emit(date);
        });

        _service.model$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._destroyed$)).subscribe(
        /**
        * @param {?} model
        * @return {?}
        */
        function (model) {
          /** @type {?} */
          var newDate = model.firstDate;
          /** @type {?} */

          var oldDate = _this12.model ? _this12.model.firstDate : null; // update public state

          _this12._publicState = {
            maxDate: model.maxDate,
            minDate: model.minDate,
            firstDate: model.firstDate,
            lastDate: model.lastDate,
            focusedDate: model.focusDate
          };
          /** @type {?} */

          var navigationPrevented = false; // emitting navigation event if the first month changes

          if (!newDate.equals(oldDate)) {
            _this12.navigate.emit({
              current: oldDate ? {
                year: oldDate.year,
                month: oldDate.month
              } : null,
              next: {
                year: newDate.year,
                month: newDate.month
              },
              preventDefault:
              /**
              * @return {?}
              */
              function preventDefault() {
                return navigationPrevented = true;
              }
            }); // can't prevent the very first navigation


            if (navigationPrevented && oldDate !== null) {
              _this12._service.open(oldDate);

              return;
            }
          }
          /** @type {?} */


          var newSelectedDate = model.selectedDate;
          /** @type {?} */

          var newFocusedDate = model.focusDate;
          /** @type {?} */

          var oldFocusedDate = _this12.model ? _this12.model.focusDate : null;
          _this12.model = model; // handling selection change

          if (isChangedDate(newSelectedDate, _this12._controlValue)) {
            _this12._controlValue = newSelectedDate;

            _this12.onTouched();

            _this12.onChange(_this12._ngbDateAdapter.toModel(newSelectedDate));
          } // handling focus change


          if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
            _this12.focus();
          }

          cd.markForCheck();
        });
      }
      /**
       *  Returns the readonly public state of the datepicker
       *
       * \@since 5.2.0
       * @return {?}
       */


      _createClass(NgbDatepicker, [{
        key: "focusDate",

        /**
         *  Focuses on given date.
         * @param {?} date
         * @return {?}
         */
        value: function focusDate(date) {
          this._service.focus(NgbDate.from(date));
        }
        /**
         *  Selects focused date.
         * @return {?}
         */

      }, {
        key: "focusSelect",
        value: function focusSelect() {
          this._service.focusSelect();
        }
        /**
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus() {
          var _this13 = this;

          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var elementToFocus = _this13._elementRef.nativeElement.querySelector('div.ngb-dp-day[tabindex="0"]');

            if (elementToFocus) {
              elementToFocus.focus();
            }
          });
        }
        /**
         * Navigates to the provided date.
         *
         * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         *
         * Use the `[startDate]` input as an alternative.
         * @param {?=} date
         * @return {?}
         */

      }, {
        key: "navigateTo",
        value: function navigateTo(date) {
          this._service.open(NgbDate.from(date ? date.day ?
          /** @type {?} */
          date : Object.assign({}, date, {
            day: 1
          }) : null));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this14 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var focusIns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this14._monthsEl.nativeElement, 'focusin');
            /** @type {?} */

            var focusOuts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this14._monthsEl.nativeElement, 'focusout');
            var nativeElement = _this14._elementRef.nativeElement; // we're changing 'focusVisible' only when entering or leaving months view
            // and ignoring all focus events where both 'target' and 'related' target are day cells

            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(focusIns$, focusOuts$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref5) {
              var target = _ref5.target,
                  relatedTarget = _ref5.relatedTarget;
              return !(hasClassName(target, 'ngb-dp-day') && hasClassName(relatedTarget, 'ngb-dp-day') && nativeElement.contains(
              /** @type {?} */
              target) && nativeElement.contains(
              /** @type {?} */
              relatedTarget));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this14._destroyed$)).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref6) {
              var type = _ref6.type;
              return _this14._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return _this14._service.set({
                  focusVisible: type === 'focusin'
                });
              });
            });
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed$.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this15 = this;

          if (this.model === undefined) {
            /** @type {?} */
            var inputs = {};
            ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays'].forEach(
            /**
            * @param {?} name
            * @return {?}
            */
            function (name) {
              return inputs[name] = _this15[name];
            });

            this._service.set(inputs);

            this.navigateTo(this.startDate);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this16 = this;

          /** @type {?} */
          var inputs = {};
          ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate', 'outsideDays'].filter(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            return name in changes;
          }).forEach(
          /**
          * @param {?} name
          * @return {?}
          */
          function (name) {
            return inputs[name] = _this16[name];
          });

          this._service.set(inputs);

          if ('startDate' in changes) {
            var _changes$startDate = changes.startDate,
                currentValue = _changes$startDate.currentValue,
                previousValue = _changes$startDate.previousValue;

            if (isChangedMonth(previousValue, currentValue)) {
              this.navigateTo(this.startDate);
            }
          }
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "onDateSelect",
        value: function onDateSelect(date) {
          this._service.focus(date);

          this._service.select(date, {
            emitEvent: true
          });
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          this._keyboardService.processKey(event, this, this._calendar);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "onNavigateDateSelect",
        value: function onNavigateDateSelect(date) {
          this._service.open(date);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onNavigateEvent",
        value: function onNavigateEvent(event) {
          switch (event) {
            case NavigationEvent.PREV:
              this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));

              break;

            case NavigationEvent.NEXT:
              this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));

              break;
          }
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} disabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(disabled) {
          this._service.set({
            disabled: disabled
          });
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._controlValue = NgbDate.from(this._ngbDateAdapter.fromModel(value));

          this._service.select(this._controlValue);
        }
      }, {
        key: "state",
        get: function get() {
          return this._publicState;
        }
      }]);

      return NgbDatepicker;
    }();

    NgbDatepicker.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        exportAs: 'ngbDatepicker',
        selector: 'ngb-datepicker',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <ng-template #dt let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\" let-focused=\"focused\">\n      <div ngbDatepickerDayView\n        [date]=\"date\"\n        [currentMonth]=\"currentMonth\"\n        [selected]=\"selected\"\n        [disabled]=\"disabled\"\n        [focused]=\"focused\">\n      </div>\n    </ng-template>\n\n    <div class=\"ngb-dp-header\">\n      <ngb-datepicker-navigation *ngIf=\"navigation !== 'none'\"\n        [date]=\"model.firstDate\"\n        [months]=\"model.months\"\n        [disabled]=\"model.disabled\"\n        [showSelect]=\"model.navigation === 'select'\"\n        [prevDisabled]=\"model.prevDisabled\"\n        [nextDisabled]=\"model.nextDisabled\"\n        [selectBoxes]=\"model.selectBoxes\"\n        (navigate)=\"onNavigateEvent($event)\"\n        (select)=\"onNavigateDateSelect($event)\">\n      </ngb-datepicker-navigation>\n    </div>\n\n    <div #months class=\"ngb-dp-months\" (keydown)=\"onKeyDown($event)\">\n      <ng-template ngFor let-month [ngForOf]=\"model.months\" let-i=\"index\">\n        <div class=\"ngb-dp-month\">\n          <div *ngIf=\"navigation === 'none' || (displayMonths > 1 && navigation === 'select')\"\n                class=\"ngb-dp-month-name\">\n            {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n          </div>\n          <ngb-datepicker-month-view\n            [month]=\"month\"\n            [dayTemplate]=\"dayTemplate || dt\"\n            [showWeekdays]=\"showWeekdays\"\n            [showWeekNumbers]=\"showWeekNumbers\"\n            (select)=\"onDateSelect($event)\">\n          </ngb-datepicker-month-view>\n        </div>\n      </ng-template>\n    </div>\n\n    <ng-template [ngTemplateOutlet]=\"footerTemplate\"></ng-template>\n  ",
        providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NgbDatepickerService],
        styles: ["ngb-datepicker{border:1px solid #dfdfdf;border-radius:.25rem;display:inline-block}ngb-datepicker-month-view{pointer-events:auto}ngb-datepicker.dropdown-menu{padding:0}.ngb-dp-body{z-index:1050}.ngb-dp-header{border-bottom:0;border-radius:.25rem .25rem 0 0;padding-top:.25rem;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-months{display:-ms-flexbox;display:flex}.ngb-dp-month{pointer-events:none}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-month+.ngb-dp-month .ngb-dp-month-name,.ngb-dp-month+.ngb-dp-month .ngb-dp-week{padding-left:1rem}.ngb-dp-month:last-child .ngb-dp-week{padding-right:.25rem}.ngb-dp-month:first-child .ngb-dp-week{padding-left:.25rem}.ngb-dp-month .ngb-dp-week:last-child{padding-bottom:.25rem}"]
      }]
    }];
    /** @nocollapse */

    NgbDatepicker.ctorParameters = function () {
      return [{
        type: NgbDatepickerService
      }, {
        type: NgbCalendar
      }, {
        type: NgbDatepickerI18n
      }, {
        type: NgbDatepickerConfig
      }, {
        type: NgbDatepickerKeyboardService
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: NgbDateAdapter
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    NgbDatepicker.propDecorators = {
      _monthsEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['months', {
          static: true
        }]
      }],
      dayTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayTemplateData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      displayMonths: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      firstDayOfWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outsideDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeekdays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeekNumbers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      startDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      dateSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      select: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbDatepickerMonthView =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} i18n
       */
      function NgbDatepickerMonthView(i18n) {
        _classCallCheck(this, NgbDatepickerMonthView);

        this.i18n = i18n;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} day
       * @return {?}
       */


      _createClass(NgbDatepickerMonthView, [{
        key: "doSelect",
        value: function doSelect(day) {
          if (!day.context.disabled && !day.hidden) {
            this.select.emit(day.date);
          }
        }
      }]);

      return NgbDatepickerMonthView;
    }();

    NgbDatepickerMonthView.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-datepicker-month-view',
        host: {
          'role': 'grid'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays\" role=\"row\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small\" role=\"columnheader\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!week.collapsed\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ i18n.getWeekNumerals(week.number) }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day); $event.preventDefault()\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"day.hidden\"\n          [class.ngb-dp-today]=\"day.context.today\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!day.hidden\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  ",
        styles: ["ngb-datepicker-month-view{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default}.ngb-dp-day[tabindex=\"0\"]{z-index:1}"]
      }]
    }];
    /** @nocollapse */

    NgbDatepickerMonthView.ctorParameters = function () {
      return [{
        type: NgbDatepickerI18n
      }];
    };

    NgbDatepickerMonthView.propDecorators = {
      dayTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      month: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeekdays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeekNumbers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      select: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbDatepickerNavigation =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} i18n
       */
      function NgbDatepickerNavigation(i18n) {
        _classCallCheck(this, NgbDatepickerNavigation);

        this.i18n = i18n;
        this.navigation = NavigationEvent;
        this.months = [];
        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} event
       * @return {?}
       */


      _createClass(NgbDatepickerNavigation, [{
        key: "onClickPrev",
        value: function onClickPrev(event) {
          /** @type {?} */
          event.currentTarget.focus();
          this.navigate.emit(this.navigation.PREV);
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onClickNext",
        value: function onClickNext(event) {
          /** @type {?} */
          event.currentTarget.focus();
          this.navigate.emit(this.navigation.NEXT);
        }
      }]);

      return NgbDatepickerNavigation;
    }();

    NgbDatepickerNavigation.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-datepicker-navigation',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <div class=\"ngb-dp-arrow\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickPrev($event)\" [disabled]=\"prevDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.previous-month\" aria-label=\"Previous month\"\n              i18n-title=\"@@ngb.datepicker.previous-month\" title=\"Previous month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [disabled] = \"disabled\"\n      [months]=\"selectBoxes.months\"\n      [years]=\"selectBoxes.years\"\n      (select)=\"select.emit($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name\">\n        {{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n      <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\" (click)=\"onClickNext($event)\" [disabled]=\"nextDisabled\"\n              i18n-aria-label=\"@@ngb.datepicker.next-month\" aria-label=\"Next month\"\n              i18n-title=\"@@ngb.datepicker.next-month\" title=\"Next month\">\n        <span class=\"ngb-dp-navigation-chevron\"></span>\n      </button>\n    </div>\n    ",
        styles: ["ngb-datepicker-navigation{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-dp-navigation-chevron{border-style:solid;border-width:.2em .2em 0 0;display:inline-block;width:.75em;height:.75em;margin-left:.25em;margin-right:.15em;-webkit-transform:rotate(-135deg);transform:rotate(-135deg)}.right .ngb-dp-navigation-chevron{-webkit-transform:rotate(45deg);transform:rotate(45deg);margin-left:.15em;margin-right:.25em}.ngb-dp-arrow{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;padding-right:0;padding-left:0;margin:0;width:2rem;height:2rem}.ngb-dp-arrow.right{-ms-flex-pack:end;justify-content:flex-end}.ngb-dp-arrow-btn{padding:0 .25rem;margin:0 .5rem;border:none;background-color:transparent;z-index:1}.ngb-dp-arrow-btn:focus{outline-width:1px;outline-style:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.ngb-dp-arrow-btn:focus{outline-style:solid}}.ngb-dp-month-name{font-size:larger;height:2rem;line-height:2rem;text-align:center}.ngb-dp-navigation-select{display:-ms-flexbox;display:flex;-ms-flex:1 1 9rem;flex:1 1 9rem}"]
      }]
    }];
    /** @nocollapse */

    NgbDatepickerNavigation.ctorParameters = function () {
      return [{
        type: NgbDatepickerI18n
      }];
    };

    NgbDatepickerNavigation.propDecorators = {
      date: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      months: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      prevDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nextDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectBoxes: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      select: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var isContainedIn =
    /**
    * @param {?} element
    * @param {?=} array
    * @return {?}
    */
    function isContainedIn(element, array) {
      return array ? array.some(
      /**
      * @param {?} item
      * @return {?}
      */
      function (item) {
        return item.contains(element);
      }) : false;
    };
    /** @type {?} */


    var matchesSelectorIfAny =
    /**
    * @param {?} element
    * @param {?=} selector
    * @return {?}
    */
    function matchesSelectorIfAny(element, selector) {
      return !selector || closest(element, selector) != null;
    }; // we have to add a more significant delay to avoid re-opening when handling (click) on a toggling element
    // TODO: use proper Angular platform detection when NgbAutoClose becomes a service and we can inject PLATFORM_ID

    /** @type {?} */


    var isMobile =
    /**
    * @return {?}
    */
    function isMobile() {
      return typeof navigator !== 'undefined' ? !!navigator.userAgent && /iPad|iPhone|iPod|Android/.test(navigator.userAgent) : false;
    }; // setting 'ngbAutoClose' synchronously on mobile results in immediate popup closing
    // when tapping on the triggering element

    /** @type {?} */


    var wrapAsyncForMobile =
    /**
    * @param {?} fn
    * @return {?}
    */
    function wrapAsyncForMobile(fn) {
      return isMobile() ?
      /**
      * @return {?}
      */
      function () {
        return setTimeout(
        /**
        * @return {?}
        */
        function () {
          return fn();
        }, 100);
      } : fn;
    };
    /**
     * @param {?} zone
     * @param {?} document
     * @param {?} type
     * @param {?} close
     * @param {?} closed$
     * @param {?} insideElements
     * @param {?=} ignoreElements
     * @param {?=} insideSelector
     * @return {?}
     */


    function ngbAutoClose(zone, document, type, close, closed$, insideElements, ignoreElements, insideSelector) {
      // closing on ESC and outside clicks
      if (type) {
        zone.runOutsideAngular(wrapAsyncForMobile(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var shouldCloseOnClick =
          /**
          * @param {?} event
          * @return {?}
          */
          function shouldCloseOnClick(event) {
            /** @type {?} */
            var element =
            /** @type {?} */
            event.target;

            if (event.button === 2 || isContainedIn(element, ignoreElements)) {
              return false;
            }

            if (type === 'inside') {
              return isContainedIn(element, insideElements) && matchesSelectorIfAny(element, insideSelector);
            } else if (type === 'outside') {
              return !isContainedIn(element, insideElements);
            } else
              /* if (type === true) */
              {
                return matchesSelectorIfAny(element, insideSelector) || !isContainedIn(element, insideElements);
              }
          };
          /** @type {?} */


          var escapes$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(closed$), // tslint:disable-next-line:deprecation
          Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e.which === Key.Escape;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return e.preventDefault();
          })); // we have to pre-calculate 'shouldCloseOnClick' on 'mousedown',
          // because on 'mouseup' DOM nodes might be detached

          /** @type {?} */

          var mouseDowns$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(shouldCloseOnClick), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(closed$));
          /** @type {?} */

          var closeableClicks$ =
          /** @type {?} */
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(document, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(mouseDowns$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} __0
          * @return {?}
          */
          function (_ref7) {
            var _ref8 = _slicedToArray(_ref7, 2),
                _ = _ref8[0],
                shouldClose = _ref8[1];

            return shouldClose;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(closed$));
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["race"])([escapes$, closeableClicks$]).subscribe(
          /**
          * @return {?}
          */
          function () {
            return zone.run(close);
          });
        }));
      }
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var FOCUSABLE_ELEMENTS_SELECTOR = ['a[href]', 'button:not([disabled])', 'input:not([disabled]):not([type="hidden"])', 'select:not([disabled])', 'textarea:not([disabled])', '[contenteditable]', '[tabindex]:not([tabindex="-1"])'].join(', ');
    /**
     * Returns first and last focusable elements inside of a given element based on specific CSS selector
     * @param {?} element
     * @return {?}
     */

    function getFocusableBoundaryElements(element) {
      /** @type {?} */
      var list = Array.from(
      /** @type {?} */
      element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)).filter(
      /**
      * @param {?} el
      * @return {?}
      */
      function (el) {
        return el.tabIndex !== -1;
      });
      return [list[0], list[list.length - 1]];
    }
    /**
     * Function that enforces browser focus to be trapped inside a DOM element.
     *
     * Works only for clicks inside the element and navigation with 'Tab', ignoring clicks outside of the element
     *
     * \@param zone Angular zone
     * \@param element The element around which focus will be trapped inside
     * \@param stopFocusTrap$ The observable stream. When completed the focus trap will clean up listeners
     * and free internal resources
     * \@param refocusOnClick Put the focus back to the last focused element whenever a click occurs on element (default to
     * false)
     * @type {?}
     */


    var ngbFocusTrap =
    /**
    * @param {?} zone
    * @param {?} element
    * @param {?} stopFocusTrap$
    * @param {?=} refocusOnClick
    * @return {?}
    */
    function ngbFocusTrap(zone, element, stopFocusTrap$) {
      var refocusOnClick = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      zone.runOutsideAngular(
      /**
      * @return {?}
      */
      function () {
        // last focused element

        /** @type {?} */
        var lastFocusedElement$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'focusin').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
        /**
        * @param {?} e
        * @return {?}
        */
        function (e) {
          return e.target;
        })); // 'tab' / 'shift+tab' stream

        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stopFocusTrap$), // tslint:disable:deprecation
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
        /**
        * @param {?} e
        * @return {?}
        */
        function (e) {
          return e.which === Key.Tab;
        }), // tslint:enable:deprecation
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(lastFocusedElement$)).subscribe(
        /**
        * @param {?} __0
        * @return {?}
        */
        function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
              tabEvent = _ref10[0],
              focusedElement = _ref10[1];

          var _getFocusableBoundary = getFocusableBoundaryElements(element),
              _getFocusableBoundary2 = _slicedToArray(_getFocusableBoundary, 2),
              first = _getFocusableBoundary2[0],
              last = _getFocusableBoundary2[1];

          if ((focusedElement === first || focusedElement === element) && tabEvent.shiftKey) {
            last.focus();
            tabEvent.preventDefault();
          }

          if (focusedElement === last && !tabEvent.shiftKey) {
            first.focus();
            tabEvent.preventDefault();
          }
        }); // inside click

        if (refocusOnClick) {
          Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(element, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(stopFocusTrap$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(lastFocusedElement$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} arr
          * @return {?}
          */
          function (arr) {
            return (
              /** @type {?} */
              arr[1]
            );
          })).subscribe(
          /**
          * @param {?} lastFocusedElement
          * @return {?}
          */
          function (lastFocusedElement) {
            return lastFocusedElement.focus();
          });
        }
      });
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // previous version:
    // https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js


    var Positioning =
    /*#__PURE__*/
    function () {
      function Positioning() {
        _classCallCheck(this, Positioning);
      }

      _createClass(Positioning, [{
        key: "getAllStyles",

        /**
         * @private
         * @param {?} element
         * @return {?}
         */
        value: function getAllStyles(element) {
          return window.getComputedStyle(element);
        }
        /**
         * @private
         * @param {?} element
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "getStyle",
        value: function getStyle(element, prop) {
          return this.getAllStyles(element)[prop];
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "isStaticPositioned",
        value: function isStaticPositioned(element) {
          return (this.getStyle(element, 'position') || 'static') === 'static';
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "offsetParent",
        value: function offsetParent(element) {
          /** @type {?} */
          var offsetParentEl =
          /** @type {?} */
          element.offsetParent || document.documentElement;

          while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl =
            /** @type {?} */
            offsetParentEl.offsetParent;
          }

          return offsetParentEl || document.documentElement;
        }
        /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */

      }, {
        key: "position",
        value: function position(element) {
          var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var elPosition;
          /** @type {?} */

          var parentOffset = {
            width: 0,
            height: 0,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0
          };

          if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
            elPosition = {
              top: elPosition.top,
              bottom: elPosition.bottom,
              left: elPosition.left,
              right: elPosition.right,
              height: elPosition.height,
              width: elPosition.width
            };
          } else {
            /** @type {?} */
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);

            if (offsetParentEl !== document.documentElement) {
              parentOffset = this.offset(offsetParentEl, false);
            }

            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
          }

          elPosition.top -= parentOffset.top;
          elPosition.bottom -= parentOffset.top;
          elPosition.left -= parentOffset.left;
          elPosition.right -= parentOffset.left;

          if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
          }

          return elPosition;
        }
        /**
         * @param {?} element
         * @param {?=} round
         * @return {?}
         */

      }, {
        key: "offset",
        value: function offset(element) {
          var round = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var elBcr = element.getBoundingClientRect();
          /** @type {?} */

          var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
          };
          /** @type {?} */

          var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
          };

          if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
          }

          return elOffset;
        }
        /*
            Return false if the element to position is outside the viewport
          */

        /**
         * @param {?} hostElement
         * @param {?} targetElement
         * @param {?} placement
         * @param {?=} appendToBody
         * @return {?}
         */

      }, {
        key: "positionElements",
        value: function positionElements(hostElement, targetElement, placement, appendToBody) {
          var _placement$split = placement.split('-'),
              _placement$split2 = _slicedToArray(_placement$split, 2),
              _placement$split2$ = _placement$split2[0],
              placementPrimary = _placement$split2$ === void 0 ? 'top' : _placement$split2$,
              _placement$split2$2 = _placement$split2[1],
              placementSecondary = _placement$split2$2 === void 0 ? 'center' : _placement$split2$2;
          /** @type {?} */


          var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
          /** @type {?} */

          var targetElStyles = this.getAllStyles(targetElement);
          /** @type {?} */

          var marginTop = parseFloat(targetElStyles.marginTop);
          /** @type {?} */

          var marginBottom = parseFloat(targetElStyles.marginBottom);
          /** @type {?} */

          var marginLeft = parseFloat(targetElStyles.marginLeft);
          /** @type {?} */

          var marginRight = parseFloat(targetElStyles.marginRight);
          /** @type {?} */

          var topPosition = 0;
          /** @type {?} */

          var leftPosition = 0;

          switch (placementPrimary) {
            case 'top':
              topPosition = hostElPosition.top - (targetElement.offsetHeight + marginTop + marginBottom);
              break;

            case 'bottom':
              topPosition = hostElPosition.top + hostElPosition.height;
              break;

            case 'left':
              leftPosition = hostElPosition.left - (targetElement.offsetWidth + marginLeft + marginRight);
              break;

            case 'right':
              leftPosition = hostElPosition.left + hostElPosition.width;
              break;
          }

          switch (placementSecondary) {
            case 'top':
              topPosition = hostElPosition.top;
              break;

            case 'bottom':
              topPosition = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
              break;

            case 'left':
              leftPosition = hostElPosition.left;
              break;

            case 'right':
              leftPosition = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
              break;

            case 'center':
              if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                leftPosition = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
              } else {
                topPosition = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
              }

              break;
          } /// The translate3d/gpu acceleration render a blurry text on chrome, the next line is commented until a browser fix
          // targetElement.style.transform = `translate3d(${Math.round(leftPosition)}px, ${Math.floor(topPosition)}px, 0px)`;


          targetElement.style.transform = "translate(".concat(Math.round(leftPosition), "px, ").concat(Math.round(topPosition), "px)"); // Check if the targetElement is inside the viewport

          /** @type {?} */

          var targetElBCR = targetElement.getBoundingClientRect();
          /** @type {?} */

          var html = document.documentElement;
          /** @type {?} */

          var windowHeight = window.innerHeight || html.clientHeight;
          /** @type {?} */

          var windowWidth = window.innerWidth || html.clientWidth;
          return targetElBCR.left >= 0 && targetElBCR.top >= 0 && targetElBCR.right <= windowWidth && targetElBCR.bottom <= windowHeight;
        }
      }]);

      return Positioning;
    }();
    /** @type {?} */


    var placementSeparator = /\s+/;
    /** @type {?} */

    var positionService = new Positioning();
    /*
     * Accept the placement array and applies the appropriate placement dependent on the viewport.
     * Returns the applied placement.
     * In case of auto placement, placements are selected in order
     *   'top', 'bottom', 'left', 'right',
     *   'top-left', 'top-right',
     *   'bottom-left', 'bottom-right',
     *   'left-top', 'left-bottom',
     *   'right-top', 'right-bottom'.
     * */

    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @param {?=} baseClass
     * @return {?}
     */

    function positionElements(hostElement, targetElement, placement, appendToBody, baseClass) {
      /** @type {?} */
      var placementVals = Array.isArray(placement) ? placement :
      /** @type {?} */
      placement.split(placementSeparator);
      /** @type {?} */

      var allowedPlacements = ['top', 'bottom', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right', 'left-top', 'left-bottom', 'right-top', 'right-bottom'];
      /** @type {?} */

      var classList = targetElement.classList;
      /** @type {?} */

      var addClassesToTarget =
      /**
      * @param {?} targetPlacement
      * @return {?}
      */
      function addClassesToTarget(targetPlacement) {
        var _targetPlacement$spli = targetPlacement.split('-'),
            _targetPlacement$spli2 = _slicedToArray(_targetPlacement$spli, 2),
            primary = _targetPlacement$spli2[0],
            secondary = _targetPlacement$spli2[1];
        /** @type {?} */


        var classes = [];

        if (baseClass) {
          classes.push("".concat(baseClass, "-").concat(primary));

          if (secondary) {
            classes.push("".concat(baseClass, "-").concat(primary, "-").concat(secondary));
          }

          classes.forEach(
          /**
          * @param {?} classname
          * @return {?}
          */
          function (classname) {
            classList.add(classname);
          });
        }

        return classes;
      }; // Remove old placement classes to avoid issues


      if (baseClass) {
        allowedPlacements.forEach(
        /**
        * @param {?} placementToRemove
        * @return {?}
        */
        function (placementToRemove) {
          classList.remove("".concat(baseClass, "-").concat(placementToRemove));
        });
      } // replace auto placement with other placements

      /** @type {?} */


      var hasAuto = placementVals.findIndex(
      /**
      * @param {?} val
      * @return {?}
      */
      function (val) {
        return val === 'auto';
      });

      if (hasAuto >= 0) {
        allowedPlacements.forEach(
        /**
        * @param {?} obj
        * @return {?}
        */
        function (obj) {
          if (placementVals.find(
          /**
          * @param {?} val
          * @return {?}
          */
          function (val) {
            return val.search('^' + obj) !== -1;
          }) == null) {
            placementVals.splice(hasAuto++, 1,
            /** @type {?} */
            obj);
          }
        });
      } // coordinates where to position
      // Required for transform:

      /** @type {?} */


      var style = targetElement.style;
      style.position = 'absolute';
      style.top = '0';
      style.left = '0';
      style['will-change'] = 'transform';
      /** @type {?} */

      var testPlacement;
      /** @type {?} */

      var isInViewport = false;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = placementVals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          testPlacement = _step.value;

          /** @type {?} */
          var addedClasses = addClassesToTarget(testPlacement);

          if (positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody)) {
            isInViewport = true;
            break;
          } // Remove the baseClasses for further calculation


          if (baseClass) {
            addedClasses.forEach(
            /**
            * @param {?} classname
            * @return {?}
            */
            function (classname) {
              classList.remove(classname);
            });
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (!isInViewport) {
        // If nothing match, the first placement is the default one
        testPlacement = placementVals[0];
        addClassesToTarget(testPlacement);
        positionService.positionElements(hostElement, targetElement, testPlacement, appendToBody);
      }

      return testPlacement;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */


    function NGB_DATEPICKER_PARSER_FORMATTER_FACTORY() {
      return new NgbDateISOParserFormatter();
    }
    /**
     * An abstract service for parsing and formatting dates for the
     * [`NgbInputDatepicker`](#/components/datepicker/api#NgbInputDatepicker) directive.
     * Converts between the internal `NgbDateStruct` model presentation and a `string` that is displayed in the
     * input element.
     *
     * When user types something in the input this service attempts to parse it into a `NgbDateStruct` object.
     * And vice versa, when users selects a date in the calendar with the mouse, it must be displayed as a `string`
     * in the input.
     *
     * Default implementation uses the ISO 8601 format, but you can provide another implementation via DI
     * to use an alternative string format or a custom parsing logic.
     *
     * See the [date format overview](#/components/datepicker/overview#date-model) for more details.
     * @abstract
     */


    var NgbDateParserFormatter = function NgbDateParserFormatter() {
      _classCallCheck(this, NgbDateParserFormatter);
    };

    NgbDateParserFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root',
        useFactory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY
      }]
    }];
    /** @nocollapse */

    NgbDateParserFormatter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: NGB_DATEPICKER_PARSER_FORMATTER_FACTORY,
      token: NgbDateParserFormatter,
      providedIn: "root"
    });

    var NgbDateISOParserFormatter =
    /*#__PURE__*/
    function (_NgbDateParserFormatt) {
      _inherits(NgbDateISOParserFormatter, _NgbDateParserFormatt);

      function NgbDateISOParserFormatter() {
        _classCallCheck(this, NgbDateISOParserFormatter);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbDateISOParserFormatter).apply(this, arguments));
      }

      _createClass(NgbDateISOParserFormatter, [{
        key: "parse",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function parse(value) {
          if (value) {
            /** @type {?} */
            var dateParts = value.trim().split('-');

            if (dateParts.length === 1 && isNumber(dateParts[0])) {
              return {
                year: toInteger(dateParts[0]),
                month: null,
                day: null
              };
            } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
              return {
                year: toInteger(dateParts[0]),
                month: toInteger(dateParts[1]),
                day: null
              };
            } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
              return {
                year: toInteger(dateParts[0]),
                month: toInteger(dateParts[1]),
                day: toInteger(dateParts[2])
              };
            }
          }

          return null;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date) {
          return date ? "".concat(date.year, "-").concat(isNumber(date.month) ? padNumber(date.month) : '', "-").concat(isNumber(date.day) ? padNumber(date.day) : '') : '';
        }
      }]);

      return NgbDateISOParserFormatter;
    }(NgbDateParserFormatter);

    NgbDateISOParserFormatter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbDatepickerInput`](#/components/datepicker/api#NgbDatepicker) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the datepicker inputs used in the application.
     *
     * \@since 5.2.0
     */

    var NgbInputDatepickerConfig =
    /*#__PURE__*/
    function (_NgbDatepickerConfig) {
      _inherits(NgbInputDatepickerConfig, _NgbDatepickerConfig);

      function NgbInputDatepickerConfig() {
        var _this17;

        _classCallCheck(this, NgbInputDatepickerConfig);

        _this17 = _possibleConstructorReturn(this, _getPrototypeOf(NgbInputDatepickerConfig).apply(this, arguments));
        _this17.autoClose = true;
        _this17.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
        _this17.restoreFocus = true;
        return _this17;
      }

      return NgbInputDatepickerConfig;
    }(NgbDatepickerConfig);

    NgbInputDatepickerConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbInputDatepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbInputDatepickerConfig_Factory() {
        return new NgbInputDatepickerConfig();
      },
      token: NgbInputDatepickerConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_DATEPICKER_VALUE_ACCESSOR$1 = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbInputDatepicker;
      }),
      multi: true
    };
    /** @type {?} */

    var NGB_DATEPICKER_VALIDATOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbInputDatepicker;
      }),
      multi: true
    };
    /**
     * A directive that allows to stick a datepicker popup to an input field.
     *
     * Manages interaction with the input field itself, does value formatting and provides forms integration.
     */

    var NgbInputDatepicker =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _parserFormatter
       * @param {?} _elRef
       * @param {?} _vcRef
       * @param {?} _renderer
       * @param {?} _cfr
       * @param {?} _ngZone
       * @param {?} _calendar
       * @param {?} _dateAdapter
       * @param {?} _document
       * @param {?} _changeDetector
       * @param {?} config
       */
      function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, _ngZone, _calendar, _dateAdapter, _document, _changeDetector, config) {
        var _this18 = this;

        _classCallCheck(this, NgbInputDatepicker);

        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._ngZone = _ngZone;
        this._calendar = _calendar;
        this._dateAdapter = _dateAdapter;
        this._document = _document;
        this._changeDetector = _changeDetector;
        this._cRef = null;
        this._disabled = false;
        this._elWithFocus = null;
        /**
         * An event emitted when user selects a date using keyboard or mouse.
         *
         * The payload of the event is currently selected `NgbDate`.
         *
         * \@since 1.1.1
         */

        this.dateSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitted right after the navigation happens and displayed month changes.
         *
         * See [`NgbDatepickerNavigateEvent`](#/components/datepicker/api#NgbDatepickerNavigateEvent) for the payload info.
         */

        this.navigate = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event fired after closing datepicker window.
         *
         * \@since 4.2.0
         */

        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        this._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._validatorChange =
        /**
        * @return {?}
        */
        function () {};

        ['autoClose', 'container', 'positionTarget', 'placement'].forEach(
        /**
        * @param {?} input
        * @return {?}
        */
        function (input) {
          return _this18[input] = config[input];
        });
        this._zoneSubscription = _ngZone.onStable.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this18._updatePopupPosition();
        });
      }
      /**
       * @return {?}
       */


      _createClass(NgbInputDatepicker, [{
        key: "registerOnChange",

        /**
         * @param {?} fn
         * @return {?}
         */
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._validatorChange = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @param {?} c
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(c) {
          /** @type {?} */
          var value = c.value;

          if (value === null || value === undefined) {
            return null;
          }
          /** @type {?} */


          var ngbDate = this._fromDateStruct(this._dateAdapter.fromModel(value));

          if (!this._calendar.isValid(ngbDate)) {
            return {
              'ngbDate': {
                invalid: c.value
              }
            };
          }

          if (this.minDate && ngbDate.before(NgbDate.from(this.minDate))) {
            return {
              'ngbDate': {
                requiredBefore: this.minDate
              }
            };
          }

          if (this.maxDate && ngbDate.after(NgbDate.from(this.maxDate))) {
            return {
              'ngbDate': {
                requiredAfter: this.maxDate
              }
            };
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._model = this._fromDateStruct(this._dateAdapter.fromModel(value));

          this._writeModelValue(this._model);
        }
        /**
         * @param {?} value
         * @param {?=} updateView
         * @return {?}
         */

      }, {
        key: "manualDateChange",
        value: function manualDateChange(value) {
          var updateView = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          /** @type {?} */
          var inputValueChanged = value !== this._inputValue;

          if (inputValueChanged) {
            this._inputValue = value;
            this._model = this._fromDateStruct(this._parserFormatter.parse(value));
          }

          if (inputValueChanged || !updateView) {
            this._onChange(this._model ? this._dateAdapter.toModel(this._model) : value === '' ? null : value);
          }

          if (updateView && this._model) {
            this._writeModelValue(this._model);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isOpen",
        value: function isOpen() {
          return !!this._cRef;
        }
        /**
         * Opens the datepicker popup.
         *
         * If the related form control contains a valid date, the corresponding month will be opened.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          var _this19 = this;

          if (!this.isOpen()) {
            /** @type {?} */
            var cf = this._cfr.resolveComponentFactory(NgbDatepicker);

            this._cRef = this._vcRef.createComponent(cf);

            this._applyPopupStyling(this._cRef.location.nativeElement);

            this._applyDatepickerInputs(this._cRef.instance);

            this._subscribeForDatepickerOutputs(this._cRef.instance);

            this._cRef.instance.ngOnInit();

            this._cRef.instance.writeValue(this._dateAdapter.toModel(this._model)); // date selection event handling


            this._cRef.instance.registerOnChange(
            /**
            * @param {?} selectedDate
            * @return {?}
            */
            function (selectedDate) {
              _this19.writeValue(selectedDate);

              _this19._onChange(selectedDate);

              _this19._onTouched();
            });

            this._cRef.changeDetectorRef.detectChanges();

            this._cRef.instance.setDisabledState(this.disabled);

            if (this.container === 'body') {
              window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
            } // focus handling


            this._elWithFocus = this._document.activeElement;
            ngbFocusTrap(this._ngZone, this._cRef.location.nativeElement, this.closed, true);

            this._cRef.instance.focus();

            ngbAutoClose(this._ngZone, this._document, this.autoClose,
            /**
            * @return {?}
            */
            function () {
              return _this19.close();
            }, this.closed, [], [this._elRef.nativeElement, this._cRef.location.nativeElement]);
          }
        }
        /**
         * Closes the datepicker popup.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));

            this._cRef = null;
            this.closed.emit();

            this._changeDetector.markForCheck(); // restore focus

            /** @type {?} */


            var elementToFocus = this._elWithFocus;

            if (isString(this.restoreFocus)) {
              elementToFocus = this._document.querySelector(this.restoreFocus);
            } else if (this.restoreFocus !== undefined) {
              elementToFocus = this.restoreFocus;
            } // in IE document.activeElement can contain an object without 'focus()' sometimes


            if (elementToFocus && elementToFocus['focus']) {
              elementToFocus.focus();
            } else {
              this._document.body.focus();
            }
          }
        }
        /**
         * Toggles the datepicker popup.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isOpen()) {
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * Navigates to the provided date.
         *
         * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
         * If nothing or invalid date provided calendar will open current month.
         *
         * Use the `[startDate]` input as an alternative.
         * @param {?=} date
         * @return {?}
         */

      }, {
        key: "navigateTo",
        value: function navigateTo(date) {
          if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "onBlur",
        value: function onBlur() {
          this._onTouched();
        }
        /**
         * @return {?}
         */

      }, {
        key: "onFocus",
        value: function onFocus() {
          this._elWithFocus = this._elRef.nativeElement;
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();

            if (this.isOpen()) {
              if (changes['minDate']) {
                this._cRef.instance.minDate = this._dateAdapter.toModel(changes.minDate.currentValue);
              }

              if (changes['maxDate']) {
                this._cRef.instance.maxDate = this._dateAdapter.toModel(changes.maxDate.currentValue);
              }

              this._cRef.instance.ngOnChanges(changes);
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.close();

          this._zoneSubscription.unsubscribe();
        }
        /**
         * @private
         * @param {?} datepickerInstance
         * @return {?}
         */

      }, {
        key: "_applyDatepickerInputs",
        value: function _applyDatepickerInputs(datepickerInstance) {
          var _this20 = this;

          ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers'].forEach(
          /**
          * @param {?} optionName
          * @return {?}
          */
          function (optionName) {
            if (_this20[optionName] !== undefined) {
              datepickerInstance[optionName] = _this20[optionName];
            }
          });
          datepickerInstance.startDate = this.startDate || this._model;
        }
        /**
         * @private
         * @param {?} nativeElement
         * @return {?}
         */

      }, {
        key: "_applyPopupStyling",
        value: function _applyPopupStyling(nativeElement) {
          this._renderer.addClass(nativeElement, 'dropdown-menu');

          this._renderer.addClass(nativeElement, 'show');

          if (this.container === 'body') {
            this._renderer.addClass(nativeElement, 'ngb-dp-body');
          }
        }
        /**
         * @private
         * @param {?} datepickerInstance
         * @return {?}
         */

      }, {
        key: "_subscribeForDatepickerOutputs",
        value: function _subscribeForDatepickerOutputs(datepickerInstance) {
          var _this21 = this;

          datepickerInstance.navigate.subscribe(
          /**
          * @param {?} navigateEvent
          * @return {?}
          */
          function (navigateEvent) {
            return _this21.navigate.emit(navigateEvent);
          });
          datepickerInstance.dateSelect.subscribe(
          /**
          * @param {?} date
          * @return {?}
          */
          function (date) {
            _this21.dateSelect.emit(date);

            if (_this21.autoClose === true || _this21.autoClose === 'inside') {
              _this21.close();
            }
          });
        }
        /**
         * @private
         * @param {?} model
         * @return {?}
         */

      }, {
        key: "_writeModelValue",
        value: function _writeModelValue(model) {
          /** @type {?} */
          var value = this._parserFormatter.format(model);

          this._inputValue = value;

          this._renderer.setProperty(this._elRef.nativeElement, 'value', value);

          if (this.isOpen()) {
            this._cRef.instance.writeValue(this._dateAdapter.toModel(model));

            this._onTouched();
          }
        }
        /**
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_fromDateStruct",
        value: function _fromDateStruct(date) {
          /** @type {?} */
          var ngbDate = date ? new NgbDate(date.year, date.month, date.day) : null;
          return this._calendar.isValid(ngbDate) ? ngbDate : null;
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePopupPosition",
        value: function _updatePopupPosition() {
          if (!this._cRef) {
            return;
          }
          /** @type {?} */


          var hostElement;

          if (isString(this.positionTarget)) {
            hostElement = this._document.querySelector(this.positionTarget);
          } else if (this.positionTarget instanceof HTMLElement) {
            hostElement = this.positionTarget;
          } else {
            hostElement = this._elRef.nativeElement;
          }

          if (this.positionTarget && !hostElement) {
            throw new Error('ngbDatepicker could not find element declared in [positionTarget] to position against.');
          }

          positionElements(hostElement, this._cRef.location.nativeElement, this.placement, this.container === 'body');
        }
      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = value === '' || value && value !== 'false';

          if (this.isOpen()) {
            this._cRef.instance.setDisabledState(this._disabled);
          }
        }
      }]);

      return NgbInputDatepicker;
    }();

    NgbInputDatepicker.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[ngbDatepicker]',
        exportAs: 'ngbDatepicker',
        host: {
          '(input)': 'manualDateChange($event.target.value)',
          '(change)': 'manualDateChange($event.target.value, true)',
          '(focus)': 'onFocus()',
          '(blur)': 'onBlur()',
          '[disabled]': 'disabled'
        },
        providers: [NGB_DATEPICKER_VALUE_ACCESSOR$1, NGB_DATEPICKER_VALIDATOR, {
          provide: NgbDatepickerConfig,
          useExisting: NgbInputDatepickerConfig
        }]
      }]
    }];
    /** @nocollapse */

    NgbInputDatepicker.ctorParameters = function () {
      return [{
        type: NgbDateParserFormatter
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: NgbCalendar
      }, {
        type: NgbDateAdapter
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: NgbInputDatepickerConfig
      }];
    };

    NgbInputDatepicker.propDecorators = {
      autoClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dayTemplateData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      displayMonths: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      firstDayOfWeek: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      footerTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      markDisabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      navigation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      outsideDays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      restoreFocus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeekdays: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showWeekNumbers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      startDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      positionTarget: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dateSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      navigate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      closed: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbDatepickerDayView =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} i18n
       */
      function NgbDatepickerDayView(i18n) {
        _classCallCheck(this, NgbDatepickerDayView);

        this.i18n = i18n;
      }
      /**
       * @return {?}
       */


      _createClass(NgbDatepickerDayView, [{
        key: "isMuted",
        value: function isMuted() {
          return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
        }
      }]);

      return NgbDatepickerDayView;
    }();

    NgbDatepickerDayView.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: '[ngbDatepickerDayView]',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          'class': 'btn-light',
          '[class.bg-primary]': 'selected',
          '[class.text-white]': 'selected',
          '[class.text-muted]': 'isMuted()',
          '[class.outside]': 'isMuted()',
          '[class.active]': 'focused'
        },
        template: "{{ i18n.getDayNumerals(date) }}",
        styles: ["[ngbDatepickerDayView]{text-align:center;width:2rem;height:2rem;line-height:2rem;border-radius:.25rem;background:0 0}[ngbDatepickerDayView].outside{opacity:.5}"]
      }]
    }];
    /** @nocollapse */

    NgbDatepickerDayView.ctorParameters = function () {
      return [{
        type: NgbDatepickerI18n
      }];
    };

    NgbDatepickerDayView.propDecorators = {
      currentMonth: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      date: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focused: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbDatepickerNavigationSelect =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} i18n
       * @param {?} _renderer
       */
      function NgbDatepickerNavigationSelect(i18n, _renderer) {
        _classCallCheck(this, NgbDatepickerNavigationSelect);

        this.i18n = i18n;
        this._renderer = _renderer;
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._month = -1;
        this._year = -1;
      }
      /**
       * @param {?} month
       * @return {?}
       */


      _createClass(NgbDatepickerNavigationSelect, [{
        key: "changeMonth",
        value: function changeMonth(month) {
          this.select.emit(new NgbDate(this.date.year, toInteger(month), 1));
        }
        /**
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "changeYear",
        value: function changeYear(year) {
          this.select.emit(new NgbDate(toInteger(year), this.date.month, 1));
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this.date) {
            if (this.date.month !== this._month) {
              this._month = this.date.month;

              this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
            }

            if (this.date.year !== this._year) {
              this._year = this.date.year;

              this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
            }
          }
        }
      }]);

      return NgbDatepickerNavigationSelect;
    }();

    NgbDatepickerNavigationSelect.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-datepicker-navigation-select',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <select #month\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-month\" aria-label=\"Select month\"\n      i18n-title=\"@@ngb.datepicker.select-month\" title=\"Select month\"\n      (change)=\"changeMonth($event.target.value)\">\n        <option *ngFor=\"let m of months\" [attr.aria-label]=\"i18n.getMonthFullName(m, date?.year)\"\n                [value]=\"m\">{{ i18n.getMonthShortName(m, date?.year) }}</option>\n    </select><select #year\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-year\" aria-label=\"Select year\"\n      i18n-title=\"@@ngb.datepicker.select-year\" title=\"Select year\"\n      (change)=\"changeYear($event.target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ i18n.getYearNumerals(y) }}</option>\n    </select>\n  ",
        styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"]
      }]
    }];
    /** @nocollapse */

    NgbDatepickerNavigationSelect.ctorParameters = function () {
      return [{
        type: NgbDatepickerI18n
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    NgbDatepickerNavigationSelect.propDecorators = {
      date: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      months: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      years: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      select: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      monthSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['month', {
          static: true,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }],
      yearSelect: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['year', {
          static: true,
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @abstract
     */

    var NgbCalendarHijri =
    /*#__PURE__*/
    function (_NgbCalendar2) {
      _inherits(NgbCalendarHijri, _NgbCalendar2);

      function NgbCalendarHijri() {
        _classCallCheck(this, NgbCalendarHijri);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbCalendarHijri).apply(this, arguments));
      }

      _createClass(NgbCalendarHijri, [{
        key: "getDaysPerWeek",

        /**
         * @return {?}
         */
        value: function getDaysPerWeek() {
          return 7;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMonths",
        value: function getMonths() {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getWeeksPerMonth",
        value: function getWeeksPerMonth() {
          return 6;
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getNext",
        value: function getNext(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          date = new NgbDate(date.year, date.month, date.day);

          switch (period) {
            case 'y':
              date = this._setYear(date, date.year + number);
              date.month = 1;
              date.day = 1;
              return date;

            case 'm':
              date = this._setMonth(date, date.month + number);
              date.day = 1;
              return date;

            case 'd':
              return this._setDay(date, date.day + number);

            default:
              return date;
          }
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getPrev",
        value: function getPrev(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return this.getNext(date, period, -number);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getWeekday",
        value: function getWeekday(date) {
          /** @type {?} */
          var day = this.toGregorian(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

          return day === 0 ? 7 : day;
        }
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */

      }, {
        key: "getWeekNumber",
        value: function getWeekNumber(week, firstDayOfWeek) {
          // in JS Date Sun=0, in ISO 8601 Sun=7
          if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
          }
          /** @type {?} */


          var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
          /** @type {?} */

          var date = week[thursdayIndex];
          /** @type {?} */

          var jsDate = this.toGregorian(date);
          jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
          // Thursday

          /** @type {?} */

          var time = jsDate.getTime();
          /** @type {?} */

          var MuhDate = this.toGregorian(new NgbDate(date.year, 1, 1));
          return Math.floor(Math.round((time - MuhDate.getTime()) / 86400000) / 7) + 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getToday",
        value: function getToday() {
          return this.fromGregorian(new Date());
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day) && !isNaN(this.toGregorian(date).getTime());
        }
        /**
         * @private
         * @param {?} date
         * @param {?} day
         * @return {?}
         */

      }, {
        key: "_setDay",
        value: function _setDay(date, day) {
          day = +day;
          /** @type {?} */

          var mDays = this.getDaysPerMonth(date.month, date.year);

          if (day <= 0) {
            while (day <= 0) {
              date = this._setMonth(date, date.month - 1);
              mDays = this.getDaysPerMonth(date.month, date.year);
              day += mDays;
            }
          } else if (day > mDays) {
            while (day > mDays) {
              day -= mDays;
              date = this._setMonth(date, date.month + 1);
              mDays = this.getDaysPerMonth(date.month, date.year);
            }
          }

          date.day = day;
          return date;
        }
        /**
         * @private
         * @param {?} date
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_setMonth",
        value: function _setMonth(date, month) {
          month = +month;
          date.year = date.year + Math.floor((month - 1) / 12);
          date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
          return date;
        }
        /**
         * @private
         * @param {?} date
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_setYear",
        value: function _setYear(date, year) {
          date.year = +year;
          return date;
        }
      }]);

      return NgbCalendarHijri;
    }(NgbCalendar);

    NgbCalendarHijri.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Checks if islamic year is a leap year
     * @param {?} hYear
     * @return {?}
     */

    function isIslamicLeapYear(hYear) {
      return (14 + 11 * hYear) % 30 < 11;
    }
    /**
     * Checks if gregorian years is a leap year
     * @param {?} gDate
     * @return {?}
     */


    function isGregorianLeapYear(gDate) {
      /** @type {?} */
      var year = gDate.getFullYear();
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    /**
     * Returns the start of Hijri Month.
     * `hMonth` is 0 for Muharram, 1 for Safar, etc.
     * `hYear` is any Hijri hYear.
     * @param {?} hYear
     * @param {?} hMonth
     * @return {?}
     */


    function getIslamicMonthStart(hYear, hMonth) {
      return Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30.0);
    }
    /**
     * Returns the start of Hijri year.
     * `year` is any Hijri year.
     * @param {?} year
     * @return {?}
     */


    function getIslamicYearStart(year) {
      return (year - 1) * 354 + Math.floor((3 + 11 * year) / 30.0);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function mod(a, b) {
      return a - b * Math.floor(a / b);
    }
    /**
     * The civil calendar is one type of Hijri calendars used in islamic countries.
     * Uses a fixed cycle of alternating 29- and 30-day months,
     * with a leap day added to the last month of 11 out of every 30 years.
     * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
     * All the calculations here are based on the equations from "Calendrical Calculations" By Edward M. Reingold, Nachum
     * Dershowitz.
     * @type {?}
     */


    var GREGORIAN_EPOCH = 1721425.5;
    /** @type {?} */

    var ISLAMIC_EPOCH = 1948439.5;

    var NgbCalendarIslamicCivil =
    /*#__PURE__*/
    function (_NgbCalendarHijri) {
      _inherits(NgbCalendarIslamicCivil, _NgbCalendarHijri);

      function NgbCalendarIslamicCivil() {
        _classCallCheck(this, NgbCalendarIslamicCivil);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbCalendarIslamicCivil).apply(this, arguments));
      }

      _createClass(NgbCalendarIslamicCivil, [{
        key: "fromGregorian",

        /**
         * Returns the equivalent islamic(civil) date value for a give input Gregorian date.
         * `gDate` is a JS Date to be converted to Hijri.
         * @param {?} gDate
         * @return {?}
         */
        value: function fromGregorian(gDate) {
          /** @type {?} */
          var gYear = gDate.getFullYear();
          /** @type {?} */

          var gMonth = gDate.getMonth();
          /** @type {?} */

          var gDay = gDate.getDate();
          /** @type {?} */

          var julianDay = GREGORIAN_EPOCH - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) + -Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear(gDate) ? -1 : -2) + gDay);
          julianDay = Math.floor(julianDay) + 0.5;
          /** @type {?} */

          var days = julianDay - ISLAMIC_EPOCH;
          /** @type {?} */

          var hYear = Math.floor((30 * days + 10646) / 10631.0);
          /** @type {?} */

          var hMonth = Math.ceil((days - 29 - getIslamicYearStart(hYear)) / 29.5);
          hMonth = Math.min(hMonth, 11);
          /** @type {?} */

          var hDay = Math.ceil(days - getIslamicMonthStart(hYear, hMonth)) + 1;
          return new NgbDate(hYear, hMonth + 1, hDay);
        }
        /**
         * Returns the equivalent JS date value for a give input islamic(civil) date.
         * `hDate` is an islamic(civil) date to be converted to Gregorian.
         * @param {?} hDate
         * @return {?}
         */

      }, {
        key: "toGregorian",
        value: function toGregorian(hDate) {
          /** @type {?} */
          var hYear = hDate.year;
          /** @type {?} */

          var hMonth = hDate.month - 1;
          /** @type {?} */

          var hDay = hDate.day;
          /** @type {?} */

          var julianDay = hDay + Math.ceil(29.5 * hMonth) + (hYear - 1) * 354 + Math.floor((3 + 11 * hYear) / 30) + ISLAMIC_EPOCH - 1;
          /** @type {?} */

          var wjd = Math.floor(julianDay - 0.5) + 0.5;
          /** @type {?} */

          var depoch = wjd - GREGORIAN_EPOCH;
          /** @type {?} */

          var quadricent = Math.floor(depoch / 146097);
          /** @type {?} */

          var dqc = mod(depoch, 146097);
          /** @type {?} */

          var cent = Math.floor(dqc / 36524);
          /** @type {?} */

          var dcent = mod(dqc, 36524);
          /** @type {?} */

          var quad = Math.floor(dcent / 1461);
          /** @type {?} */

          var dquad = mod(dcent, 1461);
          /** @type {?} */

          var yindex = Math.floor(dquad / 365);
          /** @type {?} */

          var year = quadricent * 400 + cent * 100 + quad * 4 + yindex;

          if (!(cent === 4 || yindex === 4)) {
            year++;
          }
          /** @type {?} */


          var gYearStart = GREGORIAN_EPOCH + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400);
          /** @type {?} */

          var yearday = wjd - gYearStart;
          /** @type {?} */

          var tjd = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor(739 / 12 + (isGregorianLeapYear(new Date(year, 3, 1)) ? -1 : -2) + 1);
          /** @type {?} */

          var leapadj = wjd < tjd ? 0 : isGregorianLeapYear(new Date(year, 3, 1)) ? 1 : 2;
          /** @type {?} */

          var month = Math.floor(((yearday + leapadj) * 12 + 373) / 367);
          /** @type {?} */

          var tjd2 = GREGORIAN_EPOCH - 1 + 365 * (year - 1) + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400) + Math.floor((367 * month - 362) / 12 + (month <= 2 ? 0 : isGregorianLeapYear(new Date(year, month - 1, 1)) ? -1 : -2) + 1);
          /** @type {?} */

          var day = wjd - tjd2 + 1;
          return new Date(year, month - 1, day);
        }
        /**
         * Returns the number of days in a specific Hijri month.
         * `month` is 1 for Muharram, 2 for Safar, etc.
         * `year` is any Hijri year.
         * @param {?} month
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "getDaysPerMonth",
        value: function getDaysPerMonth(month, year) {
          year = year + Math.floor(month / 13);
          month = (month - 1) % 12 + 1;
          /** @type {?} */

          var length = 29 + month % 2;

          if (month === 12 && isIslamicLeapYear(year)) {
            length++;
          }

          return length;
        }
      }]);

      return NgbCalendarIslamicCivil;
    }(NgbCalendarHijri);

    NgbCalendarIslamicCivil.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Umalqura calendar is one type of Hijri calendars used in islamic countries.
     * This Calendar is used by Saudi Arabia for administrative purpose.
     * Unlike tabular calendars, the algorithm involves astronomical calculation, but it's still deterministic.
     * http://cldr.unicode.org/development/development-process/design-proposals/islamic-calendar-types
     * @type {?}
     */

    var GREGORIAN_FIRST_DATE = new Date(1882, 10, 12);
    /** @type {?} */

    var GREGORIAN_LAST_DATE = new Date(2174, 10, 25);
    /** @type {?} */

    var HIJRI_BEGIN = 1300;
    /** @type {?} */

    var HIJRI_END = 1600;
    /** @type {?} */

    var ONE_DAY = 1000 * 60 * 60 * 24;
    /** @type {?} */

    var MONTH_LENGTH = [// 1300-1304
    '101010101010', '110101010100', '111011001001', '011011010100', '011011101010', // 1305-1309
    '001101101100', '101010101101', '010101010101', '011010101001', '011110010010', // 1310-1314
    '101110101001', '010111010100', '101011011010', '010101011100', '110100101101', // 1315-1319
    '011010010101', '011101001010', '101101010100', '101101101010', '010110101101', // 1320-1324
    '010010101110', '101001001111', '010100010111', '011010001011', '011010100101', // 1325-1329
    '101011010101', '001011010110', '100101011011', '010010011101', '101001001101', // 1330-1334
    '110100100110', '110110010101', '010110101100', '100110110110', '001010111010', // 1335-1339
    '101001011011', '010100101011', '101010010101', '011011001010', '101011101001', // 1340-1344
    '001011110100', '100101110110', '001010110110', '100101010110', '101011001010', // 1345-1349
    '101110100100', '101111010010', '010111011001', '001011011100', '100101101101', // 1350-1354
    '010101001101', '101010100101', '101101010010', '101110100101', '010110110100', // 1355-1359
    '100110110110', '010101010111', '001010010111', '010101001011', '011010100011', // 1360-1364
    '011101010010', '101101100101', '010101101010', '101010101011', '010100101011', // 1365-1369
    '110010010101', '110101001010', '110110100101', '010111001010', '101011010110', // 1370-1374
    '100101010111', '010010101011', '100101001011', '101010100101', '101101010010', // 1375-1379
    '101101101010', '010101110101', '001001110110', '100010110111', '010001011011', // 1380-1384
    '010101010101', '010110101001', '010110110100', '100111011010', '010011011101', // 1385-1389
    '001001101110', '100100110110', '101010101010', '110101010100', '110110110010', // 1390-1394
    '010111010101', '001011011010', '100101011011', '010010101011', '101001010101', // 1395-1399
    '101101001001', '101101100100', '101101110001', '010110110100', '101010110101', // 1400-1404
    '101001010101', '110100100101', '111010010010', '111011001001', '011011010100', // 1405-1409
    '101011101001', '100101101011', '010010101011', '101010010011', '110101001001', // 1410-1414
    '110110100100', '110110110010', '101010111001', '010010111010', '101001011011', // 1415-1419
    '010100101011', '101010010101', '101100101010', '101101010101', '010101011100', // 1420-1424
    '010010111101', '001000111101', '100100011101', '101010010101', '101101001010', // 1425-1429
    '101101011010', '010101101101', '001010110110', '100100111011', '010010011011', // 1430-1434
    '011001010101', '011010101001', '011101010100', '101101101010', '010101101100', // 1435-1439
    '101010101101', '010101010101', '101100101001', '101110010010', '101110101001', // 1440-1444
    '010111010100', '101011011010', '010101011010', '101010101011', '010110010101', // 1445-1449
    '011101001001', '011101100100', '101110101010', '010110110101', '001010110110', // 1450-1454
    '101001010110', '111001001101', '101100100101', '101101010010', '101101101010', // 1455-1459
    '010110101101', '001010101110', '100100101111', '010010010111', '011001001011', // 1460-1464
    '011010100101', '011010101100', '101011010110', '010101011101', '010010011101', // 1465-1469
    '101001001101', '110100010110', '110110010101', '010110101010', '010110110101', // 1470-1474
    '001011011010', '100101011011', '010010101101', '010110010101', '011011001010', // 1475-1479
    '011011100100', '101011101010', '010011110101', '001010110110', '100101010110', // 1480-1484
    '101010101010', '101101010100', '101111010010', '010111011001', '001011101010', // 1485-1489
    '100101101101', '010010101101', '101010010101', '101101001010', '101110100101', // 1490-1494
    '010110110010', '100110110101', '010011010110', '101010010111', '010101000111', // 1495-1499
    '011010010011', '011101001001', '101101010101', '010101101010', '101001101011', // 1500-1504
    '010100101011', '101010001011', '110101000110', '110110100011', '010111001010', // 1505-1509
    '101011010110', '010011011011', '001001101011', '100101001011', '101010100101', // 1510-1514
    '101101010010', '101101101001', '010101110101', '000101110110', '100010110111', // 1515-1519
    '001001011011', '010100101011', '010101100101', '010110110100', '100111011010', // 1520-1524
    '010011101101', '000101101101', '100010110110', '101010100110', '110101010010', // 1525-1529
    '110110101001', '010111010100', '101011011010', '100101011011', '010010101011', // 1530-1534
    '011001010011', '011100101001', '011101100010', '101110101001', '010110110010', // 1535-1539
    '101010110101', '010101010101', '101100100101', '110110010010', '111011001001', // 1540-1544
    '011011010010', '101011101001', '010101101011', '010010101011', '101001010101', // 1545-1549
    '110100101001', '110101010100', '110110101010', '100110110101', '010010111010', // 1550-1554
    '101000111011', '010010011011', '101001001101', '101010101010', '101011010101', // 1555-1559
    '001011011010', '100101011101', '010001011110', '101000101110', '110010011010', // 1560-1564
    '110101010101', '011010110010', '011010111001', '010010111010', '101001011101', // 1565-1569
    '010100101101', '101010010101', '101101010010', '101110101000', '101110110100', // 1570-1574
    '010110111001', '001011011010', '100101011010', '101101001010', '110110100100', // 1575-1579
    '111011010001', '011011101000', '101101101010', '010101101101', '010100110101', // 1580-1584
    '011010010101', '110101001010', '110110101000', '110111010100', '011011011010', // 1585-1589
    '010101011011', '001010011101', '011000101011', '101100010101', '101101001010', // 1590-1594
    '101110010101', '010110101010', '101010101110', '100100101110', '110010001111', // 1595-1599
    '010100100111', '011010010101', '011010101010', '101011010110', '010101011101', // 1600
    '001010011101'];
    /**
     * @param {?} date1
     * @param {?} date2
     * @return {?}
     */

    function getDaysDiff(date1, date2) {
      // Ignores the time part in date1 and date2:

      /** @type {?} */
      var time1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
      /** @type {?} */

      var time2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
      /** @type {?} */

      var diff = Math.abs(time1 - time2);
      return Math.round(diff / ONE_DAY);
    }

    var NgbCalendarIslamicUmalqura =
    /*#__PURE__*/
    function (_NgbCalendarIslamicCi) {
      _inherits(NgbCalendarIslamicUmalqura, _NgbCalendarIslamicCi);

      function NgbCalendarIslamicUmalqura() {
        _classCallCheck(this, NgbCalendarIslamicUmalqura);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbCalendarIslamicUmalqura).apply(this, arguments));
      }

      _createClass(NgbCalendarIslamicUmalqura, [{
        key: "fromGregorian",

        /**
         * Returns the equivalent islamic(Umalqura) date value for a give input Gregorian date.
         * `gdate` is s JS Date to be converted to Hijri.
         * @param {?} gDate
         * @return {?}
         */
        value: function fromGregorian(gDate) {
          /** @type {?} */
          var hDay = 1;
          /** @type {?} */

          var hMonth = 0;
          /** @type {?} */

          var hYear = 1300;
          /** @type {?} */

          var daysDiff = getDaysDiff(gDate, GREGORIAN_FIRST_DATE);

          if (gDate.getTime() - GREGORIAN_FIRST_DATE.getTime() >= 0 && gDate.getTime() - GREGORIAN_LAST_DATE.getTime() <= 0) {
            /** @type {?} */
            var year = 1300;

            for (var i = 0; i < MONTH_LENGTH.length; i++, year++) {
              for (var j = 0; j < 12; j++) {
                /** @type {?} */
                var numOfDays = +MONTH_LENGTH[i][j] + 29;

                if (daysDiff <= numOfDays) {
                  hDay = daysDiff + 1;

                  if (hDay > numOfDays) {
                    hDay = 1;
                    j++;
                  }

                  if (j > 11) {
                    j = 0;
                    year++;
                  }

                  hMonth = j;
                  hYear = year;
                  return new NgbDate(hYear, hMonth + 1, hDay);
                }

                daysDiff = daysDiff - numOfDays;
              }
            }
          } else {
            return _get(_getPrototypeOf(NgbCalendarIslamicUmalqura.prototype), "fromGregorian", this).call(this, gDate);
          }
        }
        /**
         * Converts the current Hijri date to Gregorian.
         * @param {?} hDate
         * @return {?}
         */

      }, {
        key: "toGregorian",
        value: function toGregorian(hDate) {
          /** @type {?} */
          var hYear = hDate.year;
          /** @type {?} */

          var hMonth = hDate.month - 1;
          /** @type {?} */

          var hDay = hDate.day;
          /** @type {?} */

          var gDate = new Date(GREGORIAN_FIRST_DATE);
          /** @type {?} */

          var dayDiff = hDay - 1;

          if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            for (var y = 0; y < hYear - HIJRI_BEGIN; y++) {
              for (var m = 0; m < 12; m++) {
                dayDiff += +MONTH_LENGTH[y][m] + 29;
              }
            }

            for (var _m = 0; _m < hMonth; _m++) {
              dayDiff += +MONTH_LENGTH[hYear - HIJRI_BEGIN][_m] + 29;
            }

            gDate.setDate(GREGORIAN_FIRST_DATE.getDate() + dayDiff);
          } else {
            gDate = _get(_getPrototypeOf(NgbCalendarIslamicUmalqura.prototype), "toGregorian", this).call(this, hDate);
          }

          return gDate;
        }
        /**
         * Returns the number of days in a specific Hijri hMonth.
         * `hMonth` is 1 for Muharram, 2 for Safar, etc.
         * `hYear` is any Hijri hYear.
         * @param {?} hMonth
         * @param {?} hYear
         * @return {?}
         */

      }, {
        key: "getDaysPerMonth",
        value: function getDaysPerMonth(hMonth, hYear) {
          if (hYear >= HIJRI_BEGIN && hYear <= HIJRI_END) {
            /** @type {?} */
            var pos = hYear - HIJRI_BEGIN;
            return +MONTH_LENGTH[pos][hMonth - 1] + 29;
          }

          return _get(_getPrototypeOf(NgbCalendarIslamicUmalqura.prototype), "getDaysPerMonth", this).call(this, hMonth, hYear);
        }
      }]);

      return NgbCalendarIslamicUmalqura;
    }(NgbCalendarIslamicCivil);

    NgbCalendarIslamicUmalqura.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Returns the equivalent JS date value for a give input Jalali date.
     * `jalaliDate` is an Jalali date to be converted to Gregorian.
     * @param {?} jalaliDate
     * @return {?}
     */

    function toGregorian(jalaliDate) {
      /** @type {?} */
      var jdn = jalaliToJulian(jalaliDate.year, jalaliDate.month, jalaliDate.day);
      /** @type {?} */

      var date = julianToGregorian(jdn);
      date.setHours(6, 30, 3, 200);
      return date;
    }
    /**
     * Returns the equivalent jalali date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to jalali.
     * utc to local
     * @param {?} gdate
     * @return {?}
     */


    function fromGregorian(gdate) {
      /** @type {?} */
      var g2d = gregorianToJulian(gdate.getFullYear(), gdate.getMonth() + 1, gdate.getDate());
      return julianToJalali(g2d);
    }
    /**
     * @param {?} date
     * @param {?} yearValue
     * @return {?}
     */


    function setJalaliYear(date, yearValue) {
      date.year = +yearValue;
      return date;
    }
    /**
     * @param {?} date
     * @param {?} month
     * @return {?}
     */


    function setJalaliMonth(date, month) {
      month = +month;
      date.year = date.year + Math.floor((month - 1) / 12);
      date.month = Math.floor(((month - 1) % 12 + 12) % 12) + 1;
      return date;
    }
    /**
     * @param {?} date
     * @param {?} day
     * @return {?}
     */


    function setJalaliDay(date, day) {
      /** @type {?} */
      var mDays = getDaysPerMonth(date.month, date.year);

      if (day <= 0) {
        while (day <= 0) {
          date = setJalaliMonth(date, date.month - 1);
          mDays = getDaysPerMonth(date.month, date.year);
          day += mDays;
        }
      } else if (day > mDays) {
        while (day > mDays) {
          day -= mDays;
          date = setJalaliMonth(date, date.month + 1);
          mDays = getDaysPerMonth(date.month, date.year);
        }
      }

      date.day = day;
      return date;
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function mod$1(a, b) {
      return a - b * Math.floor(a / b);
    }
    /**
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function div(a, b) {
      return Math.trunc(a / b);
    }
    /*
     This function determines if the Jalali (Persian) year is
     leap (366-day long) or is the common year (365 days), and
     finds the day in March (Gregorian calendar) of the first
     day of the Jalali year (jalaliYear).
     @param jalaliYear Jalali calendar year (-61 to 3177)
     @return
     leap: number of years since the last leap year (0 to 4)
     gYear: Gregorian year of the beginning of Jalali year
     march: the March day of Farvardin the 1st (1st day of jalaliYear)
     @see: http://www.astro.uni.torun.pl/~kb/Papers/EMP/PersianC-EMP.htm
     @see: http://www.fourmilab.ch/documents/calendar/
     */

    /**
     * @param {?} jalaliYear
     * @return {?}
     */


    function jalCal(jalaliYear) {
      // Jalali years starting the 33-year rule.

      /** @type {?} */
      var breaks = [-61, 9, 38, 199, 426, 686, 756, 818, 1111, 1181, 1210, 1635, 2060, 2097, 2192, 2262, 2324, 2394, 2456, 3178];
      /** @type {?} */

      var breaksLength = breaks.length;
      /** @type {?} */

      var gYear = jalaliYear + 621;
      /** @type {?} */

      var leapJ = -14;
      /** @type {?} */

      var jp = breaks[0];

      if (jalaliYear < jp || jalaliYear >= breaks[breaksLength - 1]) {
        throw new Error('Invalid Jalali year ' + jalaliYear);
      } // Find the limiting years for the Jalali year jalaliYear.

      /** @type {?} */


      var jump;

      for (var i = 1; i < breaksLength; i += 1) {
        /** @type {?} */
        var jm = breaks[i];
        jump = jm - jp;

        if (jalaliYear < jm) {
          break;
        }

        leapJ = leapJ + div(jump, 33) * 8 + div(mod$1(jump, 33), 4);
        jp = jm;
      }
      /** @type {?} */


      var n = jalaliYear - jp; // Find the number of leap years from AD 621 to the beginning
      // of the current Jalali year in the Persian calendar.

      leapJ = leapJ + div(n, 33) * 8 + div(mod$1(n, 33) + 3, 4);

      if (mod$1(jump, 33) === 4 && jump - n === 4) {
        leapJ += 1;
      } // And the same in the Gregorian calendar (until the year gYear).

      /** @type {?} */


      var leapG = div(gYear, 4) - div((div(gYear, 100) + 1) * 3, 4) - 150; // Determine the Gregorian date of Farvardin the 1st.

      /** @type {?} */

      var march = 20 + leapJ - leapG; // Find how many years have passed since the last leap year.

      if (jump - n < 6) {
        n = n - jump + div(jump + 4, 33) * 33;
      }
      /** @type {?} */


      var leap = mod$1(mod$1(n + 1, 33) - 1, 4);

      if (leap === -1) {
        leap = 4;
      }

      return {
        leap: leap,
        gy: gYear,
        march: march
      };
    }
    /*
     Calculates Gregorian and Julian calendar dates from the Julian Day number
     (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
     calendars) to some millions years ahead of the present.
     @param jdn Julian Day number
     @return
     gYear: Calendar year (years BC numbered 0, -1, -2, ...)
     gMonth: Calendar month (1 to 12)
     gDay: Calendar day of the month M (1 to 28/29/30/31)
     */

    /**
     * @param {?} julianDayNumber
     * @return {?}
     */


    function julianToGregorian(julianDayNumber) {
      /** @type {?} */
      var j = 4 * julianDayNumber + 139361631;
      j = j + div(div(4 * julianDayNumber + 183187720, 146097) * 3, 4) * 4 - 3908;
      /** @type {?} */

      var i = div(mod$1(j, 1461), 4) * 5 + 308;
      /** @type {?} */

      var gDay = div(mod$1(i, 153), 5) + 1;
      /** @type {?} */

      var gMonth = mod$1(div(i, 153), 12) + 1;
      /** @type {?} */

      var gYear = div(j, 1461) - 100100 + div(8 - gMonth, 6);
      return new Date(gYear, gMonth - 1, gDay);
    }
    /*
     Converts a date of the Jalali calendar to the Julian Day number.
     @param jy Jalali year (1 to 3100)
     @param jm Jalali month (1 to 12)
     @param jd Jalali day (1 to 29/31)
     @return Julian Day number
     */

    /**
     * @param {?} gy
     * @param {?} gm
     * @param {?} gd
     * @return {?}
     */


    function gregorianToJulian(gy, gm, gd) {
      /** @type {?} */
      var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4) + div(153 * mod$1(gm + 9, 12) + 2, 5) + gd - 34840408;
      d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752;
      return d;
    }
    /*
     Converts the Julian Day number to a date in the Jalali calendar.
     @param julianDayNumber Julian Day number
     @return
     jalaliYear: Jalali year (1 to 3100)
     jalaliMonth: Jalali month (1 to 12)
     jalaliDay: Jalali day (1 to 29/31)
     */

    /**
     * @param {?} julianDayNumber
     * @return {?}
     */


    function julianToJalali(julianDayNumber) {
      /** @type {?} */
      var gy = julianToGregorian(julianDayNumber).getFullYear() // Calculate Gregorian year (gy).
      ;
      /** @type {?} */

      var jalaliYear = gy - 621;
      /** @type {?} */

      var r = jalCal(jalaliYear);
      /** @type {?} */

      var gregorianDay = gregorianToJulian(gy, 3, r.march);
      /** @type {?} */

      var jalaliDay;
      /** @type {?} */

      var jalaliMonth;
      /** @type {?} */

      var numberOfDays; // Find number of days that passed since 1 Farvardin.

      numberOfDays = julianDayNumber - gregorianDay;

      if (numberOfDays >= 0) {
        if (numberOfDays <= 185) {
          // The first 6 months.
          jalaliMonth = 1 + div(numberOfDays, 31);
          jalaliDay = mod$1(numberOfDays, 31) + 1;
          return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
        } else {
          // The remaining months.
          numberOfDays -= 186;
        }
      } else {
        // Previous Jalali year.
        jalaliYear -= 1;
        numberOfDays += 179;

        if (r.leap === 1) {
          numberOfDays += 1;
        }
      }

      jalaliMonth = 7 + div(numberOfDays, 30);
      jalaliDay = mod$1(numberOfDays, 30) + 1;
      return new NgbDate(jalaliYear, jalaliMonth, jalaliDay);
    }
    /*
     Converts a date of the Jalali calendar to the Julian Day number.
     @param jYear Jalali year (1 to 3100)
     @param jMonth Jalali month (1 to 12)
     @param jDay Jalali day (1 to 29/31)
     @return Julian Day number
     */

    /**
     * @param {?} jYear
     * @param {?} jMonth
     * @param {?} jDay
     * @return {?}
     */


    function jalaliToJulian(jYear, jMonth, jDay) {
      /** @type {?} */
      var r = jalCal(jYear);
      return gregorianToJulian(r.gy, 3, r.march) + (jMonth - 1) * 31 - div(jMonth, 7) * (jMonth - 7) + jDay - 1;
    }
    /**
     * Returns the number of days in a specific jalali month.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */


    function getDaysPerMonth(month, year) {
      if (month <= 6) {
        return 31;
      }

      if (month <= 11) {
        return 30;
      }

      if (jalCal(year).leap === 0) {
        return 30;
      }

      return 29;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var NgbCalendarPersian =
    /*#__PURE__*/
    function (_NgbCalendar3) {
      _inherits(NgbCalendarPersian, _NgbCalendar3);

      function NgbCalendarPersian() {
        _classCallCheck(this, NgbCalendarPersian);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbCalendarPersian).apply(this, arguments));
      }

      _createClass(NgbCalendarPersian, [{
        key: "getDaysPerWeek",

        /**
         * @return {?}
         */
        value: function getDaysPerWeek() {
          return 7;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getMonths",
        value: function getMonths() {
          return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getWeeksPerMonth",
        value: function getWeeksPerMonth() {
          return 6;
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getNext",
        value: function getNext(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          date = new NgbDate(date.year, date.month, date.day);

          switch (period) {
            case 'y':
              date = setJalaliYear(date, date.year + number);
              date.month = 1;
              date.day = 1;
              return date;

            case 'm':
              date = setJalaliMonth(date, date.month + number);
              date.day = 1;
              return date;

            case 'd':
              return setJalaliDay(date, date.day + number);

            default:
              return date;
          }
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getPrev",
        value: function getPrev(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return this.getNext(date, period, -number);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getWeekday",
        value: function getWeekday(date) {
          /** @type {?} */
          var day = toGregorian(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

          return day === 0 ? 7 : day;
        }
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */

      }, {
        key: "getWeekNumber",
        value: function getWeekNumber(week, firstDayOfWeek) {
          // in JS Date Sun=0, in ISO 8601 Sun=7
          if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
          }
          /** @type {?} */


          var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
          /** @type {?} */

          var date = week[thursdayIndex];
          /** @type {?} */

          var jsDate = toGregorian(date);
          jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
          // Thursday

          /** @type {?} */

          var time = jsDate.getTime();
          /** @type {?} */

          var startDate = toGregorian(new NgbDate(date.year, 1, 1));
          return Math.floor(Math.round((time - startDate.getTime()) / 86400000) / 7) + 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getToday",
        value: function getToday() {
          return fromGregorian(new Date());
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) && !isNaN(toGregorian(date).getTime());
        }
      }]);

      return NgbCalendarPersian;
    }(NgbCalendar);

    NgbCalendarPersian.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var PARTS_PER_HOUR = 1080;
    /** @type {?} */

    var PARTS_PER_DAY = 24 * PARTS_PER_HOUR;
    /** @type {?} */

    var PARTS_FRACTIONAL_MONTH = 12 * PARTS_PER_HOUR + 793;
    /** @type {?} */

    var PARTS_PER_MONTH = 29 * PARTS_PER_DAY + PARTS_FRACTIONAL_MONTH;
    /** @type {?} */

    var BAHARAD = 11 * PARTS_PER_HOUR + 204;
    /** @type {?} */

    var HEBREW_DAY_ON_JAN_1_1970 = 2092591;
    /** @type {?} */

    var GREGORIAN_EPOCH$1 = 1721425.5;
    /**
     * @param {?} year
     * @return {?}
     */

    function isGregorianLeapYear$1(year) {
      return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
    }
    /**
     * @param {?} year
     * @return {?}
     */


    function numberOfFirstDayInYear(year) {
      /** @type {?} */
      var monthsBeforeYear = Math.floor((235 * year - 234) / 19);
      /** @type {?} */

      var fractionalMonthsBeforeYear = monthsBeforeYear * PARTS_FRACTIONAL_MONTH + BAHARAD;
      /** @type {?} */

      var dayNumber = monthsBeforeYear * 29 + Math.floor(fractionalMonthsBeforeYear / PARTS_PER_DAY);
      /** @type {?} */

      var timeOfDay = fractionalMonthsBeforeYear % PARTS_PER_DAY;
      /** @type {?} */

      var dayOfWeek = dayNumber % 7;

      if (dayOfWeek === 2 || dayOfWeek === 4 || dayOfWeek === 6) {
        dayNumber++;
        dayOfWeek = dayNumber % 7;
      }

      if (dayOfWeek === 1 && timeOfDay > 15 * PARTS_PER_HOUR + 204 && !isHebrewLeapYear(year)) {
        dayNumber += 2;
      } else if (dayOfWeek === 0 && timeOfDay > 21 * PARTS_PER_HOUR + 589 && isHebrewLeapYear(year - 1)) {
        dayNumber++;
      }

      return dayNumber;
    }
    /**
     * @param {?} month
     * @param {?} year
     * @return {?}
     */


    function getDaysInGregorianMonth(month, year) {
      /** @type {?} */
      var days = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

      if (isGregorianLeapYear$1(year)) {
        days[1]++;
      }

      return days[month - 1];
    }
    /**
     * @param {?} year
     * @return {?}
     */


    function getHebrewMonths(year) {
      return isHebrewLeapYear(year) ? 13 : 12;
    }
    /**
     * Returns the number of days in a specific Hebrew year.
     * `year` is any Hebrew year.
     * @param {?} year
     * @return {?}
     */


    function getDaysInHebrewYear(year) {
      return numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
    }
    /**
     * @param {?} year
     * @return {?}
     */


    function isHebrewLeapYear(year) {
      /** @type {?} */
      var b = (year * 12 + 17) % 19;
      return b >= (b < 0 ? -7 : 12);
    }
    /**
     * Returns the number of days in a specific Hebrew month.
     * `month` is 1 for Nisan, 2 for Iyar etc. Note: Hebrew leap year contains 13 months.
     * `year` is any Hebrew year.
     * @param {?} month
     * @param {?} year
     * @return {?}
     */


    function getDaysInHebrewMonth(month, year) {
      /** @type {?} */
      var yearLength = numberOfFirstDayInYear(year + 1) - numberOfFirstDayInYear(year);
      /** @type {?} */

      var yearType = (yearLength <= 380 ? yearLength : yearLength - 30) - 353;
      /** @type {?} */

      var leapYear = isHebrewLeapYear(year);
      /** @type {?} */

      var daysInMonth = leapYear ? [30, 29, 29, 29, 30, 30, 29, 30, 29, 30, 29, 30, 29] : [30, 29, 29, 29, 30, 29, 30, 29, 30, 29, 30, 29];

      if (yearType > 0) {
        daysInMonth[2]++; // Kislev gets an extra day in normal or complete years.
      }

      if (yearType > 1) {
        daysInMonth[1]++; // Heshvan gets an extra day in complete years only.
      }

      return daysInMonth[month - 1];
    }
    /**
     * @param {?} date
     * @return {?}
     */


    function getDayNumberInHebrewYear(date) {
      /** @type {?} */
      var numberOfDay = 0;

      for (var i = 1; i < date.month; i++) {
        numberOfDay += getDaysInHebrewMonth(i, date.year);
      }

      return numberOfDay + date.day;
    }
    /**
     * @param {?} date
     * @param {?} val
     * @return {?}
     */


    function setHebrewMonth(date, val) {
      /** @type {?} */
      var after = val >= 0;

      if (!after) {
        val = -val;
      }

      while (val > 0) {
        if (after) {
          if (val > getHebrewMonths(date.year) - date.month) {
            val -= getHebrewMonths(date.year) - date.month + 1;
            date.year++;
            date.month = 1;
          } else {
            date.month += val;
            val = 0;
          }
        } else {
          if (val >= date.month) {
            date.year--;
            val -= date.month;
            date.month = getHebrewMonths(date.year);
          } else {
            date.month -= val;
            val = 0;
          }
        }
      }

      return date;
    }
    /**
     * @param {?} date
     * @param {?} val
     * @return {?}
     */


    function setHebrewDay(date, val) {
      /** @type {?} */
      var after = val >= 0;

      if (!after) {
        val = -val;
      }

      while (val > 0) {
        if (after) {
          if (val > getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date)) {
            val -= getDaysInHebrewYear(date.year) - getDayNumberInHebrewYear(date) + 1;
            date.year++;
            date.month = 1;
            date.day = 1;
          } else if (val > getDaysInHebrewMonth(date.month, date.year) - date.day) {
            val -= getDaysInHebrewMonth(date.month, date.year) - date.day + 1;
            date.month++;
            date.day = 1;
          } else {
            date.day += val;
            val = 0;
          }
        } else {
          if (val >= date.day) {
            val -= date.day;
            date.month--;

            if (date.month === 0) {
              date.year--;
              date.month = getHebrewMonths(date.year);
            }

            date.day = getDaysInHebrewMonth(date.month, date.year);
          } else {
            date.day -= val;
            val = 0;
          }
        }
      }

      return date;
    }
    /**
     * Returns the equivalent Hebrew date value for a give input Gregorian date.
     * `gdate` is a JS Date to be converted to Hebrew date.
     * @param {?} gdate
     * @return {?}
     */


    function fromGregorian$1(gdate) {
      /** @type {?} */
      var date = new Date(gdate);
      /** @type {?} */

      var gYear = date.getFullYear();
      /** @type {?} */

      var gMonth = date.getMonth();
      /** @type {?} */

      var gDay = date.getDate();
      /** @type {?} */

      var julianDay = GREGORIAN_EPOCH$1 - 1 + 365 * (gYear - 1) + Math.floor((gYear - 1) / 4) - Math.floor((gYear - 1) / 100) + Math.floor((gYear - 1) / 400) + Math.floor((367 * (gMonth + 1) - 362) / 12 + (gMonth + 1 <= 2 ? 0 : isGregorianLeapYear$1(gYear) ? -1 : -2) + gDay);
      julianDay = Math.floor(julianDay + 0.5);
      /** @type {?} */

      var daysSinceHebEpoch = julianDay - 347997;
      /** @type {?} */

      var monthsSinceHebEpoch = Math.floor(daysSinceHebEpoch * PARTS_PER_DAY / PARTS_PER_MONTH);
      /** @type {?} */

      var hYear = Math.floor((monthsSinceHebEpoch * 19 + 234) / 235) + 1;
      /** @type {?} */

      var firstDayOfThisYear = numberOfFirstDayInYear(hYear);
      /** @type {?} */

      var dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;

      while (dayOfYear < 1) {
        hYear--;
        firstDayOfThisYear = numberOfFirstDayInYear(hYear);
        dayOfYear = daysSinceHebEpoch - firstDayOfThisYear;
      }
      /** @type {?} */


      var hMonth = 1;
      /** @type {?} */

      var hDay = dayOfYear;

      while (hDay > getDaysInHebrewMonth(hMonth, hYear)) {
        hDay -= getDaysInHebrewMonth(hMonth, hYear);
        hMonth++;
      }

      return new NgbDate(hYear, hMonth, hDay);
    }
    /**
     * Returns the equivalent JS date value for a given Hebrew date.
     * `hebrewDate` is an Hebrew date to be converted to Gregorian.
     * @param {?} hebrewDate
     * @return {?}
     */


    function toGregorian$1(hebrewDate) {
      /** @type {?} */
      var hYear = hebrewDate.year;
      /** @type {?} */

      var hMonth = hebrewDate.month;
      /** @type {?} */

      var hDay = hebrewDate.day;
      /** @type {?} */

      var days = numberOfFirstDayInYear(hYear);

      for (var i = 1; i < hMonth; i++) {
        days += getDaysInHebrewMonth(i, hYear);
      }

      days += hDay;
      /** @type {?} */

      var diffDays = days - HEBREW_DAY_ON_JAN_1_1970;
      /** @type {?} */

      var after = diffDays >= 0;

      if (!after) {
        diffDays = -diffDays;
      }
      /** @type {?} */


      var gYear = 1970;
      /** @type {?} */

      var gMonth = 1;
      /** @type {?} */

      var gDay = 1;

      while (diffDays > 0) {
        if (after) {
          if (diffDays >= (isGregorianLeapYear$1(gYear) ? 366 : 365)) {
            diffDays -= isGregorianLeapYear$1(gYear) ? 366 : 365;
            gYear++;
          } else if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
            diffDays -= getDaysInGregorianMonth(gMonth, gYear);
            gMonth++;
          } else {
            gDay += diffDays;
            diffDays = 0;
          }
        } else {
          if (diffDays >= (isGregorianLeapYear$1(gYear - 1) ? 366 : 365)) {
            diffDays -= isGregorianLeapYear$1(gYear - 1) ? 366 : 365;
            gYear--;
          } else {
            if (gMonth > 1) {
              gMonth--;
            } else {
              gMonth = 12;
              gYear--;
            }

            if (diffDays >= getDaysInGregorianMonth(gMonth, gYear)) {
              diffDays -= getDaysInGregorianMonth(gMonth, gYear);
            } else {
              gDay = getDaysInGregorianMonth(gMonth, gYear) - diffDays + 1;
              diffDays = 0;
            }
          }
        }
      }

      return new Date(gYear, gMonth - 1, gDay);
    }
    /**
     * @param {?} numerals
     * @return {?}
     */


    function hebrewNumerals(numerals) {
      if (!numerals) {
        return '';
      }
      /** @type {?} */


      var hArray0_9 = ['', "\u05D0", "\u05D1", "\u05D2", "\u05D3", "\u05D4", "\u05D5", "\u05D6", "\u05D7", "\u05D8"];
      /** @type {?} */

      var hArray10_19 = ["\u05D9", "\u05D9\u05D0", "\u05D9\u05D1", "\u05D9\u05D2", "\u05D9\u05D3", "\u05D8\u05D5", "\u05D8\u05D6", "\u05D9\u05D6", "\u05D9\u05D7", "\u05D9\u05D8"];
      /** @type {?} */

      var hArray20_90 = ['', '', "\u05DB", "\u05DC", "\u05DE", "\u05E0", "\u05E1", "\u05E2", "\u05E4", "\u05E6"];
      /** @type {?} */

      var hArray100_900 = ['', "\u05E7", "\u05E8", "\u05E9", "\u05EA", "\u05EA\u05E7", "\u05EA\u05E8", "\u05EA\u05E9", "\u05EA\u05EA", "\u05EA\u05EA\u05E7"];
      /** @type {?} */

      var hArray1000_9000 = ['', "\u05D0", "\u05D1", "\u05D1\u05D0", "\u05D1\u05D1", "\u05D4", "\u05D4\u05D0", "\u05D4\u05D1", "\u05D4\u05D1\u05D0", "\u05D4\u05D1\u05D1"];
      /** @type {?} */

      var geresh = "\u05F3";
      /** @type {?} */

      var gershaim = "\u05F4";
      /** @type {?} */

      var mem = 0;
      /** @type {?} */

      var result = [];
      /** @type {?} */

      var step = 0;

      while (numerals > 0) {
        /** @type {?} */
        var m = numerals % 10;

        if (step === 0) {
          mem = m;
        } else if (step === 1) {
          if (m !== 1) {
            result.unshift(hArray20_90[m], hArray0_9[mem]);
          } else {
            result.unshift(hArray10_19[mem]);
          }
        } else if (step === 2) {
          result.unshift(hArray100_900[m]);
        } else {
          if (m !== 5) {
            result.unshift(hArray1000_9000[m], geresh, ' ');
          }

          break;
        }

        numerals = Math.floor(numerals / 10);

        if (step === 0 && numerals === 0) {
          result.unshift(hArray0_9[m]);
        }

        step++;
      }

      result = result.join('').split('');

      if (result.length === 1) {
        result.push(geresh);
      } else if (result.length > 1) {
        result.splice(result.length - 1, 0, gershaim);
      }

      return result.join('');
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@since 3.2.0
     */


    var NgbCalendarHebrew =
    /*#__PURE__*/
    function (_NgbCalendar4) {
      _inherits(NgbCalendarHebrew, _NgbCalendar4);

      function NgbCalendarHebrew() {
        _classCallCheck(this, NgbCalendarHebrew);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbCalendarHebrew).apply(this, arguments));
      }

      _createClass(NgbCalendarHebrew, [{
        key: "getDaysPerWeek",

        /**
         * @return {?}
         */
        value: function getDaysPerWeek() {
          return 7;
        }
        /**
         * @param {?=} year
         * @return {?}
         */

      }, {
        key: "getMonths",
        value: function getMonths(year) {
          if (year && isHebrewLeapYear(year)) {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
          } else {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "getWeeksPerMonth",
        value: function getWeeksPerMonth() {
          return 6;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          /** @type {?} */
          var b = date && isNumber(date.year) && isNumber(date.month) && isNumber(date.day);
          b = b && date.month > 0 && date.month <= (isHebrewLeapYear(date.year) ? 13 : 12);
          b = b && date.day > 0 && date.day <= getDaysInHebrewMonth(date.month, date.year);
          return b && !isNaN(toGregorian$1(date).getTime());
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getNext",
        value: function getNext(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          date = new NgbDate(date.year, date.month, date.day);

          switch (period) {
            case 'y':
              date.year += number;
              date.month = 1;
              date.day = 1;
              return date;

            case 'm':
              date = setHebrewMonth(date, number);
              date.day = 1;
              return date;

            case 'd':
              return setHebrewDay(date, number);

            default:
              return date;
          }
        }
        /**
         * @param {?} date
         * @param {?=} period
         * @param {?=} number
         * @return {?}
         */

      }, {
        key: "getPrev",
        value: function getPrev(date) {
          var period = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'd';
          var number = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
          return this.getNext(date, period, -number);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getWeekday",
        value: function getWeekday(date) {
          /** @type {?} */
          var day = toGregorian$1(date).getDay(); // in JS Date Sun=0, in ISO 8601 Sun=7

          return day === 0 ? 7 : day;
        }
        /**
         * @param {?} week
         * @param {?} firstDayOfWeek
         * @return {?}
         */

      }, {
        key: "getWeekNumber",
        value: function getWeekNumber(week, firstDayOfWeek) {
          /** @type {?} */
          var date = week[week.length - 1];
          return Math.ceil(getDayNumberInHebrewYear(date) / 7);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getToday",
        value: function getToday() {
          return fromGregorian$1(new Date());
        }
        /**
         * \@since 3.4.0
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toGregorian",
        value: function toGregorian(date) {
          return fromJSDate(toGregorian$1(date));
        }
        /**
         * \@since 3.4.0
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "fromGregorian",
        value: function fromGregorian(date) {
          return fromGregorian$1(toJSDate(date));
        }
      }]);

      return NgbCalendarHebrew;
    }(NgbCalendar);

    NgbCalendarHebrew.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var WEEKDAYS = ['שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת', 'ראשון'];
    /** @type {?} */

    var MONTHS = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    /** @type {?} */

    var MONTHS_LEAP = ['תשרי', 'חשון', 'כסלו', 'טבת', 'שבט', 'אדר א׳', 'אדר ב׳', 'ניסן', 'אייר', 'סיון', 'תמוז', 'אב', 'אלול'];
    /**
     * \@since 3.2.0
     */

    var NgbDatepickerI18nHebrew =
    /*#__PURE__*/
    function (_NgbDatepickerI18n2) {
      _inherits(NgbDatepickerI18nHebrew, _NgbDatepickerI18n2);

      function NgbDatepickerI18nHebrew() {
        _classCallCheck(this, NgbDatepickerI18nHebrew);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbDatepickerI18nHebrew).apply(this, arguments));
      }

      _createClass(NgbDatepickerI18nHebrew, [{
        key: "getMonthShortName",

        /**
         * @param {?} month
         * @param {?=} year
         * @return {?}
         */
        value: function getMonthShortName(month, year) {
          return this.getMonthFullName(month, year);
        }
        /**
         * @param {?} month
         * @param {?=} year
         * @return {?}
         */

      }, {
        key: "getMonthFullName",
        value: function getMonthFullName(month, year) {
          return isHebrewLeapYear(year) ? MONTHS_LEAP[month - 1] : MONTHS[month - 1];
        }
        /**
         * @param {?} weekday
         * @return {?}
         */

      }, {
        key: "getWeekdayShortName",
        value: function getWeekdayShortName(weekday) {
          return WEEKDAYS[weekday - 1];
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayAriaLabel",
        value: function getDayAriaLabel(date) {
          return "".concat(hebrewNumerals(date.day), " ").concat(this.getMonthFullName(date.month, date.year), " ").concat(hebrewNumerals(date.year));
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayNumerals",
        value: function getDayNumerals(date) {
          return hebrewNumerals(date.day);
        }
        /**
         * @param {?} weekNumber
         * @return {?}
         */

      }, {
        key: "getWeekNumerals",
        value: function getWeekNumerals(weekNumber) {
          return hebrewNumerals(weekNumber);
        }
        /**
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "getYearNumerals",
        value: function getYearNumerals(year) {
          return hebrewNumerals(year);
        }
      }]);

      return NgbDatepickerI18nHebrew;
    }(NgbDatepickerI18n);

    NgbDatepickerI18nHebrew.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * [`NgbDateAdapter`](#/components/datepicker/api#NgbDateAdapter) implementation that uses
     * native javascript dates as a user date model.
     */

    var NgbDateNativeAdapter =
    /*#__PURE__*/
    function (_NgbDateAdapter2) {
      _inherits(NgbDateNativeAdapter, _NgbDateAdapter2);

      function NgbDateNativeAdapter() {
        _classCallCheck(this, NgbDateNativeAdapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbDateNativeAdapter).apply(this, arguments));
      }

      _createClass(NgbDateNativeAdapter, [{
        key: "fromModel",

        /**
         * Converts a native `Date` to a `NgbDateStruct`.
         * @param {?} date
         * @return {?}
         */
        value: function fromModel(date) {
          return date instanceof Date && !isNaN(date.getTime()) ? this._fromNativeDate(date) : null;
        }
        /**
         * Converts a `NgbDateStruct` to a native `Date`.
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toModel",
        value: function toModel(date) {
          return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) : null;
        }
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_fromNativeDate",
        value: function _fromNativeDate(date) {
          return {
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate()
          };
        }
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_toNativeDate",
        value: function _toNativeDate(date) {
          /** @type {?} */
          var jsDate = new Date(date.year, date.month - 1, date.day, 12); // avoid 30 -> 1930 conversion

          jsDate.setFullYear(date.year);
          return jsDate;
        }
      }]);

      return NgbDateNativeAdapter;
    }(NgbDateAdapter);

    NgbDateNativeAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Same as [`NgbDateNativeAdapter`](#/components/datepicker/api#NgbDateNativeAdapter), but with UTC dates.
     *
     * \@since 3.2.0
     */

    var NgbDateNativeUTCAdapter =
    /*#__PURE__*/
    function (_NgbDateNativeAdapter) {
      _inherits(NgbDateNativeUTCAdapter, _NgbDateNativeAdapter);

      function NgbDateNativeUTCAdapter() {
        _classCallCheck(this, NgbDateNativeUTCAdapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbDateNativeUTCAdapter).apply(this, arguments));
      }

      _createClass(NgbDateNativeUTCAdapter, [{
        key: "_fromNativeDate",

        /**
         * @protected
         * @param {?} date
         * @return {?}
         */
        value: function _fromNativeDate(date) {
          return {
            year: date.getUTCFullYear(),
            month: date.getUTCMonth() + 1,
            day: date.getUTCDate()
          };
        }
        /**
         * @protected
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_toNativeDate",
        value: function _toNativeDate(date) {
          /** @type {?} */
          var jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day)); // avoid 30 -> 1930 conversion

          jsDate.setUTCFullYear(date.year);
          return jsDate;
        }
      }]);

      return NgbDateNativeUTCAdapter;
    }(NgbDateNativeAdapter);

    NgbDateNativeUTCAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbDatepickerModule = function NgbDatepickerModule() {
      _classCallCheck(this, NgbDatepickerModule);
    };

    NgbDatepickerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbDatepicker, NgbDatepickerMonthView, NgbDatepickerNavigation, NgbDatepickerNavigationSelect, NgbDatepickerDayView, NgbInputDatepicker],
        exports: [NgbDatepicker, NgbInputDatepicker],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
        entryComponents: [NgbDatepicker]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbDropdown`](#/components/dropdown/api#NgbDropdown) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the dropdowns used in the application.
     */

    var NgbDropdownConfig = function NgbDropdownConfig() {
      _classCallCheck(this, NgbDropdownConfig);

      this.autoClose = true;
      this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    };

    NgbDropdownConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbDropdownConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbDropdownConfig_Factory() {
        return new NgbDropdownConfig();
      },
      token: NgbDropdownConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbNavbar = function NgbNavbar() {
      _classCallCheck(this, NgbNavbar);
    };

    NgbNavbar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '.navbar'
      }]
    }];
    /**
     * A directive you should put on a dropdown item to enable keyboard navigation.
     * Arrow keys will move focus between items marked with this directive.
     *
     * \@since 4.1.0
     */

    var NgbDropdownItem =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} elementRef
       */
      function NgbDropdownItem(elementRef) {
        _classCallCheck(this, NgbDropdownItem);

        this.elementRef = elementRef;
        this._disabled = false;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      _createClass(NgbDropdownItem, [{
        key: "disabled",
        set: function set(value) {
          this._disabled =
          /** @type {?} */
          value === '' || value === true; // accept an empty attribute as true
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._disabled;
        }
      }]);

      return NgbDropdownItem;
    }();

    NgbDropdownItem.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbDropdownItem]',
        host: {
          'class': 'dropdown-item',
          '[class.disabled]': 'disabled'
        }
      }]
    }];
    /** @nocollapse */

    NgbDropdownItem.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgbDropdownItem.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * A directive that wraps dropdown menu content and dropdown items.
     */

    var NgbDropdownMenu =
    /**
     * @param {?} dropdown
     */
    function NgbDropdownMenu(dropdown) {
      _classCallCheck(this, NgbDropdownMenu);

      this.dropdown = dropdown;
      this.placement = 'bottom';
      this.isOpen = false;
    };

    NgbDropdownMenu.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbDropdownMenu]',
        host: {
          '[class.dropdown-menu]': 'true',
          '[class.show]': 'dropdown.isOpen()',
          '[attr.x-placement]': 'placement',
          '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
          '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
          '(keydown.Home)': 'dropdown.onKeyDown($event)',
          '(keydown.End)': 'dropdown.onKeyDown($event)',
          '(keydown.Enter)': 'dropdown.onKeyDown($event)',
          '(keydown.Space)': 'dropdown.onKeyDown($event)'
        }
      }]
    }];
    /** @nocollapse */

    NgbDropdownMenu.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgbDropdown;
          })]
        }]
      }];
    };

    NgbDropdownMenu.propDecorators = {
      menuItems: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbDropdownItem]
      }]
    };
    /**
     * A directive to mark an element to which dropdown menu will be anchored.
     *
     * This is a simple version of the `NgbDropdownToggle` directive.
     * It plays the same role, but doesn't listen to click events to toggle dropdown menu thus enabling support
     * for events other than click.
     *
     * \@since 1.1.0
     */

    var NgbDropdownAnchor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} dropdown
       * @param {?} _elementRef
       */
      function NgbDropdownAnchor(dropdown, _elementRef) {
        _classCallCheck(this, NgbDropdownAnchor);

        this.dropdown = dropdown;
        this._elementRef = _elementRef;
        this.anchorEl = _elementRef.nativeElement;
      }
      /**
       * @return {?}
       */


      _createClass(NgbDropdownAnchor, [{
        key: "getNativeElement",
        value: function getNativeElement() {
          return this._elementRef.nativeElement;
        }
      }]);

      return NgbDropdownAnchor;
    }();

    NgbDropdownAnchor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbDropdownAnchor]',
        host: {
          'class': 'dropdown-toggle',
          'aria-haspopup': 'true',
          '[attr.aria-expanded]': 'dropdown.isOpen()'
        }
      }]
    }];
    /** @nocollapse */

    NgbDropdownAnchor.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgbDropdown;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * A directive to mark an element that will toggle dropdown via the `click` event.
     *
     * You can also use `NgbDropdownAnchor` as an alternative.
     */


    var NgbDropdownToggle =
    /*#__PURE__*/
    function (_NgbDropdownAnchor) {
      _inherits(NgbDropdownToggle, _NgbDropdownAnchor);

      /**
       * @param {?} dropdown
       * @param {?} elementRef
       */
      function NgbDropdownToggle(dropdown, elementRef) {
        _classCallCheck(this, NgbDropdownToggle);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbDropdownToggle).call(this, dropdown, elementRef));
      }

      return NgbDropdownToggle;
    }(NgbDropdownAnchor);

    NgbDropdownToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbDropdownToggle]',
        host: {
          'class': 'dropdown-toggle',
          'aria-haspopup': 'true',
          '[attr.aria-expanded]': 'dropdown.isOpen()',
          '(click)': 'dropdown.toggle()',
          '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
          '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
          '(keydown.Home)': 'dropdown.onKeyDown($event)',
          '(keydown.End)': 'dropdown.onKeyDown($event)'
        },
        providers: [{
          provide: NgbDropdownAnchor,
          useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgbDropdownToggle;
          })
        }]
      }]
    }];
    /** @nocollapse */

    NgbDropdownToggle.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgbDropdown;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };
    /**
     * A directive that provides contextual overlays for displaying lists of links and more.
     */


    var NgbDropdown =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetector
       * @param {?} config
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} ngbNavbar
       */
      function NgbDropdown(_changeDetector, config, _document, _ngZone, _elementRef, _renderer, ngbNavbar) {
        var _this22 = this;

        _classCallCheck(this, NgbDropdown);

        this._changeDetector = _changeDetector;
        this._document = _document;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * Defines whether or not the dropdown menu is opened initially.
         */

        this._open = false;
        /**
         * An event fired when the dropdown is opened or closed.
         *
         * The event payload is a `boolean`:
         * * `true` - the dropdown was opened
         * * `false` - the dropdown was closed
         */

        this.openChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.placement = config.placement;
        this.container = config.container;
        this.autoClose = config.autoClose;
        this.display = ngbNavbar ? 'static' : 'dynamic';
        this._zoneSubscription = _ngZone.onStable.subscribe(
        /**
        * @return {?}
        */
        function () {
          _this22._positionMenu();
        });
      }
      /**
       * @return {?}
       */


      _createClass(NgbDropdown, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this23 = this;

          this._ngZone.onStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this23._applyPlacementClasses();

            if (_this23._open) {
              _this23._setCloseHandlers();
            }
          });
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.container && this._open) {
            this._applyContainer(this.container);
          }

          if (changes.placement && !changes.placement.isFirstChange) {
            this._applyPlacementClasses();
          }
        }
        /**
         * Checks if the dropdown menu is open.
         * @return {?}
         */

      }, {
        key: "isOpen",
        value: function isOpen() {
          return this._open;
        }
        /**
         * Opens the dropdown menu.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (!this._open) {
            this._open = true;

            this._applyContainer(this.container);

            this.openChange.emit(true);

            this._setCloseHandlers();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_setCloseHandlers",
        value: function _setCloseHandlers() {
          var _this24 = this;

          /** @type {?} */
          var anchor = this._anchor;
          ngbAutoClose(this._ngZone, this._document, this.autoClose,
          /**
          * @return {?}
          */
          function () {
            return _this24.close();
          }, this._closed$, this._menu ? [this._menuElement.nativeElement] : [], anchor ? [anchor.getNativeElement()] : [], '.dropdown-item,.dropdown-divider');
        }
        /**
         * Closes the dropdown menu.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this._open) {
            this._open = false;

            this._resetContainer();

            this._closed$.next();

            this.openChange.emit(false);

            this._changeDetector.markForCheck();
          }
        }
        /**
         * Toggles the dropdown menu.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this.isOpen()) {
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._resetContainer();

          this._closed$.next();

          this._zoneSubscription.unsubscribe();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onKeyDown",
        value: function onKeyDown(event) {
          var _this25 = this;

          // tslint:disable-next-line:deprecation

          /** @type {?} */
          var key = event.which;
          /** @type {?} */

          var itemElements = this._getMenuElements();
          /** @type {?} */


          var position = -1;
          /** @type {?} */

          var isEventFromItems = false;
          /** @type {?} */

          var itemElement = null;
          /** @type {?} */

          var isEventFromToggle = this._isEventFromToggle(event);

          if (!isEventFromToggle && itemElements.length) {
            itemElements.forEach(
            /**
            * @param {?} item
            * @param {?} index
            * @return {?}
            */
            function (item, index) {
              if (item.contains(
              /** @type {?} */
              event.target)) {
                isEventFromItems = true;
                itemElement = item;
              }

              if (item === _this25._document.activeElement) {
                position = index;
              }
            });
          } // closing on Enter / Space


          if (key === Key.Space || key === Key.Enter) {
            if (isEventFromItems && (this.autoClose === true || this.autoClose === 'inside')) {
              // Item is either a button or a link, so click will be triggered by the browser on Enter or Space.
              // So we have to register a one-time click handler that will fire after any user defined click handlers
              // to close the dropdown
              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(itemElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this25.close();
              });
            }

            return;
          } // opening / navigating


          if (isEventFromToggle || isEventFromItems) {
            this.open();

            if (itemElements.length) {
              switch (key) {
                case Key.ArrowDown:
                  position = Math.min(position + 1, itemElements.length - 1);
                  break;

                case Key.ArrowUp:
                  if (this._isDropup() && position === -1) {
                    position = itemElements.length - 1;
                    break;
                  }

                  position = Math.max(position - 1, 0);
                  break;

                case Key.Home:
                  position = 0;
                  break;

                case Key.End:
                  position = itemElements.length - 1;
                  break;
              }

              itemElements[position].focus();
            }

            event.preventDefault();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_isDropup",
        value: function _isDropup() {
          return this._elementRef.nativeElement.classList.contains('dropup');
        }
        /**
         * @private
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_isEventFromToggle",
        value: function _isEventFromToggle(event) {
          return this._anchor.getNativeElement().contains(
          /** @type {?} */
          event.target);
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_getMenuElements",
        value: function _getMenuElements() {
          /** @type {?} */
          var menu = this._menu;

          if (menu == null) {
            return [];
          }

          return menu.menuItems.filter(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return !item.disabled;
          }).map(
          /**
          * @param {?} item
          * @return {?}
          */
          function (item) {
            return item.elementRef.nativeElement;
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_positionMenu",
        value: function _positionMenu() {
          /** @type {?} */
          var menu = this._menu;

          if (this.isOpen() && menu) {
            this._applyPlacementClasses(this.display === 'dynamic' ? positionElements(this._anchor.anchorEl, this._bodyContainer || this._menuElement.nativeElement, this.placement, this.container === 'body') : this._getFirstPlacement(this.placement));
          }
        }
        /**
         * @private
         * @param {?} placement
         * @return {?}
         */

      }, {
        key: "_getFirstPlacement",
        value: function _getFirstPlacement(placement) {
          return Array.isArray(placement) ? placement[0] :
          /** @type {?} */
          placement.split(' ')[0];
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_resetContainer",
        value: function _resetContainer() {
          /** @type {?} */
          var renderer = this._renderer;
          /** @type {?} */

          var menuElement = this._menuElement;

          if (menuElement) {
            /** @type {?} */
            var dropdownElement = this._elementRef.nativeElement;
            /** @type {?} */

            var dropdownMenuElement = menuElement.nativeElement;
            renderer.appendChild(dropdownElement, dropdownMenuElement);
            renderer.removeStyle(dropdownMenuElement, 'position');
            renderer.removeStyle(dropdownMenuElement, 'transform');
          }

          if (this._bodyContainer) {
            renderer.removeChild(this._document.body, this._bodyContainer);
            this._bodyContainer = null;
          }
        }
        /**
         * @private
         * @param {?=} container
         * @return {?}
         */

      }, {
        key: "_applyContainer",
        value: function _applyContainer() {
          var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

          this._resetContainer();

          if (container === 'body') {
            /** @type {?} */
            var renderer = this._renderer;
            /** @type {?} */

            var dropdownMenuElement = this._menuElement.nativeElement;
            /** @type {?} */

            var bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div'); // Override some styles to have the positionning working

            renderer.setStyle(bodyContainer, 'position', 'absolute');
            renderer.setStyle(dropdownMenuElement, 'position', 'static');
            renderer.setStyle(bodyContainer, 'z-index', '1050');
            renderer.appendChild(bodyContainer, dropdownMenuElement);
            renderer.appendChild(this._document.body, bodyContainer);
          }
        }
        /**
         * @private
         * @param {?=} placement
         * @return {?}
         */

      }, {
        key: "_applyPlacementClasses",
        value: function _applyPlacementClasses(placement) {
          /** @type {?} */
          var menu = this._menu;

          if (menu) {
            if (!placement) {
              placement = this._getFirstPlacement(this.placement);
            }
            /** @type {?} */


            var renderer = this._renderer;
            /** @type {?} */

            var dropdownElement = this._elementRef.nativeElement; // remove the current placement classes

            renderer.removeClass(dropdownElement, 'dropup');
            renderer.removeClass(dropdownElement, 'dropdown');
            menu.placement = this.display === 'static' ? null : placement;
            /*
                  * apply the new placement
                  * in case of top use up-arrow or down-arrow otherwise
                  */

            /** @type {?} */

            var dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
            renderer.addClass(dropdownElement, dropdownClass);
            /** @type {?} */

            var bodyContainer = this._bodyContainer;

            if (bodyContainer) {
              renderer.removeClass(bodyContainer, 'dropup');
              renderer.removeClass(bodyContainer, 'dropdown');
              renderer.addClass(bodyContainer, dropdownClass);
            }
          }
        }
      }]);

      return NgbDropdown;
    }();

    NgbDropdown.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbDropdown]',
        exportAs: 'ngbDropdown',
        host: {
          '[class.show]': 'isOpen()'
        }
      }]
    }];
    /** @nocollapse */

    NgbDropdown.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: NgbDropdownConfig
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: NgbNavbar,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }]
      }];
    };

    NgbDropdown.propDecorators = {
      _menu: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbDropdownMenu, {
          static: false
        }]
      }],
      _menuElement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbDropdownMenu, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
          static: false
        }]
      }],
      _anchor: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbDropdownAnchor, {
          static: false
        }]
      }],
      autoClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _open: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['open']
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      display: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_DROPDOWN_DIRECTIVES = [NgbDropdown, NgbDropdownAnchor, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownItem, NgbNavbar];

    var NgbDropdownModule = function NgbDropdownModule() {
      _classCallCheck(this, NgbDropdownModule);
    };

    NgbDropdownModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: NGB_DROPDOWN_DIRECTIVES,
        exports: NGB_DROPDOWN_DIRECTIVES
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbModal`](#/components/modal/api#NgbModal) service.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all modals used in the application.
     *
     * \@since 3.1.0
     */

    var NgbModalConfig = function NgbModalConfig() {
      _classCallCheck(this, NgbModalConfig);

      this.backdrop = true;
      this.keyboard = true;
    };

    NgbModalConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbModalConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbModalConfig_Factory() {
        return new NgbModalConfig();
      },
      token: NgbModalConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var ContentRef =
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(nodes, viewRef, componentRef) {
      _classCallCheck(this, ContentRef);

      this.nodes = nodes;
      this.viewRef = viewRef;
      this.componentRef = componentRef;
    };
    /**
     * @template T
     */


    var PopupService =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _type
       * @param {?} _injector
       * @param {?} _viewContainerRef
       * @param {?} _renderer
       * @param {?} _componentFactoryResolver
       * @param {?} _applicationRef
       */
      function PopupService(_type, _injector, _viewContainerRef, _renderer, _componentFactoryResolver, _applicationRef) {
        _classCallCheck(this, PopupService);

        this._type = _type;
        this._injector = _injector;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._applicationRef = _applicationRef;
      }
      /**
       * @param {?=} content
       * @param {?=} context
       * @return {?}
       */


      _createClass(PopupService, [{
        key: "open",
        value: function open(content, context) {
          if (!this._windowRef) {
            this._contentRef = this._getContentRef(content, context);
            this._windowRef = this._viewContainerRef.createComponent(this._componentFactoryResolver.resolveComponentFactory(this._type), 0, this._injector, this._contentRef.nodes);
          }

          return this._windowRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this._windowRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._windowRef.hostView));

            this._windowRef = null;

            if (this._contentRef.viewRef) {
              this._applicationRef.detachView(this._contentRef.viewRef);

              this._contentRef.viewRef.destroy();

              this._contentRef = null;
            }
          }
        }
        /**
         * @private
         * @param {?} content
         * @param {?=} context
         * @return {?}
         */

      }, {
        key: "_getContentRef",
        value: function _getContentRef(content, context) {
          if (!content) {
            return new ContentRef([]);
          } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            /** @type {?} */
            var viewRef = content.createEmbeddedView(context);

            this._applicationRef.attachView(viewRef);

            return new ContentRef([viewRef.rootNodes], viewRef);
          } else {
            return new ContentRef([[this._renderer.createText("".concat(content))]]);
          }
        }
      }]);

      return PopupService;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var noop =
    /**
    * @return {?}
    */
    function noop() {};
    /**
     * Utility to handle the scrollbar.
     *
     * It allows to compensate the lack of a vertical scrollbar by adding an
     * equivalent padding on the right of the body, and to remove this compensation.
     */


    var ScrollBar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _document
       */
      function ScrollBar(_document) {
        _classCallCheck(this, ScrollBar);

        this._document = _document;
      }
      /**
       * To be called right before a potential vertical scrollbar would be removed:
       *
       * - if there was a scrollbar, adds some compensation padding to the body
       * to keep the same layout as when the scrollbar is there
       * - if there was none, there is nothing to do
       *
       * @return {?} a callback used to revert the compensation (noop if there was none,
       * otherwise a function removing the padding)
       */


      _createClass(ScrollBar, [{
        key: "compensate",
        value: function compensate() {
          /** @type {?} */
          var width = this._getWidth();

          return !this._isPresent(width) ? noop : this._adjustBody(width);
        }
        /**
         * Adds a padding of the given width on the right of the body.
         *
         * @private
         * @param {?} scrollbarWidth
         * @return {?} a callback used to revert the padding to its previous value
         */

      }, {
        key: "_adjustBody",
        value: function _adjustBody(scrollbarWidth) {
          /** @type {?} */
          var body = this._document.body;
          /** @type {?} */

          var userSetPaddingStyle = body.style.paddingRight;
          /** @type {?} */

          var actualPadding = parseFloat(window.getComputedStyle(body)['padding-right']);
          body.style['padding-right'] = "".concat(actualPadding + scrollbarWidth, "px");
          return (
            /**
            * @return {?}
            */
            function () {
              return body.style['padding-right'] = userSetPaddingStyle;
            }
          );
        }
        /**
         * Tells whether a scrollbar is currently present on the body.
         *
         * @private
         * @param {?} scrollbarWidth
         * @return {?} true if scrollbar is present, false otherwise
         */

      }, {
        key: "_isPresent",
        value: function _isPresent(scrollbarWidth) {
          /** @type {?} */
          var rect = this._document.body.getBoundingClientRect();
          /** @type {?} */


          var bodyToViewportGap = window.innerWidth - (rect.left + rect.right);
          /** @type {?} */

          var uncertainty = 0.1 * scrollbarWidth;
          return bodyToViewportGap >= scrollbarWidth - uncertainty;
        }
        /**
         * Calculates and returns the width of a scrollbar.
         *
         * @private
         * @return {?} the width of a scrollbar on this page
         */

      }, {
        key: "_getWidth",
        value: function _getWidth() {
          /** @type {?} */
          var measurer = this._document.createElement('div');

          measurer.className = 'modal-scrollbar-measure';
          /** @type {?} */

          var body = this._document.body;
          body.appendChild(measurer);
          /** @type {?} */

          var width = measurer.getBoundingClientRect().width - measurer.clientWidth;
          body.removeChild(measurer);
          return width;
        }
      }]);

      return ScrollBar;
    }();

    ScrollBar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ScrollBar.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }];
    };
    /** @nocollapse */


    ScrollBar.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function ScrollBar_Factory() {
        return new ScrollBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      },
      token: ScrollBar,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbModalBackdrop = function NgbModalBackdrop() {
      _classCallCheck(this, NgbModalBackdrop);
    };

    NgbModalBackdrop.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-modal-backdrop',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: '',
        host: {
          '[class]': '"modal-backdrop fade show" + (backdropClass ? " " + backdropClass : "")',
          'style': 'z-index: 1050'
        }
      }]
    }];
    NgbModalBackdrop.propDecorators = {
      backdropClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A reference to the currently opened (active) modal.
     *
     * Instances of this class can be injected into your component passed as modal content.
     * So you can `.close()` or `.dismiss()` the modal window from your component.
     */

    var NgbActiveModal =
    /*#__PURE__*/
    function () {
      function NgbActiveModal() {
        _classCallCheck(this, NgbActiveModal);
      }

      _createClass(NgbActiveModal, [{
        key: "close",

        /**
         * Closes the modal with an optional `result` value.
         *
         * The `NgbMobalRef.result` promise will be resolved with the provided value.
         * @param {?=} result
         * @return {?}
         */
        value: function close(result) {}
        /**
         * Dismisses the modal with an optional `reason` value.
         *
         * The `NgbModalRef.result` promise will be rejected with the provided value.
         * @param {?=} reason
         * @return {?}
         */

      }, {
        key: "dismiss",
        value: function dismiss(reason) {}
      }]);

      return NgbActiveModal;
    }();
    /**
     * A reference to the newly opened modal returned by the `NgbModal.open()` method.
     */


    var NgbModalRef =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _windowCmptRef
       * @param {?} _contentRef
       * @param {?=} _backdropCmptRef
       * @param {?=} _beforeDismiss
       */
      function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this26 = this;

        _classCallCheck(this, NgbModalRef);

        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;

        _windowCmptRef.instance.dismissEvent.subscribe(
        /**
        * @param {?} reason
        * @return {?}
        */
        function (reason) {
          _this26.dismiss(reason);
        });

        this.result = new Promise(
        /**
        * @param {?} resolve
        * @param {?} reject
        * @return {?}
        */
        function (resolve, reject) {
          _this26._resolve = resolve;
          _this26._reject = reject;
        });
        this.result.then(null,
        /**
        * @return {?}
        */
        function () {});
      }
      /**
       * The instance of a component used for the modal content.
       *
       * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
       * @return {?}
       */


      _createClass(NgbModalRef, [{
        key: "close",

        /**
         * Closes the modal with an optional `result` value.
         *
         * The `NgbMobalRef.result` promise will be resolved with the provided value.
         * @param {?=} result
         * @return {?}
         */
        value: function close(result) {
          if (this._windowCmptRef) {
            this._resolve(result);

            this._removeModalElements();
          }
        }
        /**
         * @private
         * @param {?=} reason
         * @return {?}
         */

      }, {
        key: "_dismiss",
        value: function _dismiss(reason) {
          this._reject(reason);

          this._removeModalElements();
        }
        /**
         * Dismisses the modal with an optional `reason` value.
         *
         * The `NgbModalRef.result` promise will be rejected with the provided value.
         * @param {?=} reason
         * @return {?}
         */

      }, {
        key: "dismiss",
        value: function dismiss(reason) {
          var _this27 = this;

          if (this._windowCmptRef) {
            if (!this._beforeDismiss) {
              this._dismiss(reason);
            } else {
              /** @type {?} */
              var dismiss = this._beforeDismiss();

              if (dismiss && dismiss.then) {
                dismiss.then(
                /**
                * @param {?} result
                * @return {?}
                */
                function (result) {
                  if (result !== false) {
                    _this27._dismiss(reason);
                  }
                },
                /**
                * @return {?}
                */
                function () {});
              } else if (dismiss !== false) {
                this._dismiss(reason);
              }
            }
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_removeModalElements",
        value: function _removeModalElements() {
          /** @type {?} */
          var windowNativeEl = this._windowCmptRef.location.nativeElement;
          windowNativeEl.parentNode.removeChild(windowNativeEl);

          this._windowCmptRef.destroy();

          if (this._backdropCmptRef) {
            /** @type {?} */
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);

            this._backdropCmptRef.destroy();
          }

          if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
          }

          this._windowCmptRef = null;
          this._backdropCmptRef = null;
          this._contentRef = null;
        }
      }, {
        key: "componentInstance",
        get: function get() {
          if (this._contentRef && this._contentRef.componentRef) {
            return this._contentRef.componentRef.instance;
          }
        }
      }]);

      return NgbModalRef;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @enum {number} */


    var ModalDismissReasons = {
      BACKDROP_CLICK: 0,
      ESC: 1
    };
    ModalDismissReasons[ModalDismissReasons.BACKDROP_CLICK] = 'BACKDROP_CLICK';
    ModalDismissReasons[ModalDismissReasons.ESC] = 'ESC';
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbModalWindow =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _document
       * @param {?} _elRef
       * @param {?} _zone
       */
      function NgbModalWindow(_document, _elRef, _zone) {
        _classCallCheck(this, NgbModalWindow);

        this._document = _document;
        this._elRef = _elRef;
        this._zone = _zone;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.backdrop = true;
        this.keyboard = true;
        this.dismissEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @param {?} reason
       * @return {?}
       */


      _createClass(NgbModalWindow, [{
        key: "dismiss",
        value: function dismiss(reason) {
          this.dismissEvent.emit(reason);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._elWithFocus = this._document.activeElement;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this28 = this;

          var nativeElement = this._elRef.nativeElement;

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(nativeElement, 'keydown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this28._closed$), // tslint:disable-next-line:deprecation
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return e.which === Key.Escape && _this28.keyboard;
            })).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              return requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                if (!event.defaultPrevented) {
                  _this28._zone.run(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this28.dismiss(ModalDismissReasons.ESC);
                  });
                }
              });
            }); // We're listening to 'mousedown' and 'mouseup' to prevent modal from closing when pressing the mouse
            // inside the modal dialog and releasing it outside

            /** @type {?} */

            var preventClose = false;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_this28._dialogEl.nativeElement, 'mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this28._closed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
            /**
            * @return {?}
            */
            function () {
              return preventClose = false;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
            /**
            * @return {?}
            */
            function () {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(nativeElement, 'mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this28._closed$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref11) {
              var target = _ref11.target;
              return nativeElement === target;
            })).subscribe(
            /**
            * @return {?}
            */
            function () {
              preventClose = true;
            }); // We're listening to 'click' to dismiss modal on modal window click, except when:
            // 1. clicking on modal dialog itself
            // 2. closing was prevented by mousedown/up handlers
            // 3. clicking on scrollbar when the viewport is too small and modal doesn't fit (click is not triggered at all)

            Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(nativeElement, 'click').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this28._closed$)).subscribe(
            /**
            * @param {?} __0
            * @return {?}
            */
            function (_ref12) {
              var target = _ref12.target;

              if (_this28.backdrop === true && nativeElement === target && !preventClose) {
                _this28._zone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this28.dismiss(ModalDismissReasons.BACKDROP_CLICK);
                });
              }

              preventClose = false;
            });
          });

          if (!nativeElement.contains(document.activeElement)) {
            /** @type {?} */
            var autoFocusable =
            /** @type {?} */
            nativeElement.querySelector("[ngbAutofocus]");
            /** @type {?} */

            var firstFocusable = getFocusableBoundaryElements(nativeElement)[0];
            /** @type {?} */

            var elementToFocus = autoFocusable || firstFocusable || nativeElement;
            elementToFocus.focus();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this29 = this;

          /** @type {?} */
          var body = this._document.body;
          /** @type {?} */

          var elWithFocus = this._elWithFocus;
          /** @type {?} */

          var elementToFocus;

          if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
            elementToFocus = elWithFocus;
          } else {
            elementToFocus = body;
          }

          this._zone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            setTimeout(
            /**
            * @return {?}
            */
            function () {
              return elementToFocus.focus();
            });
            _this29._elWithFocus = null;
          });

          this._closed$.next();
        }
      }]);

      return NgbModalWindow;
    }();

    NgbModalWindow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-modal-window',
        host: {
          '[class]': '"modal fade show d-block" + (windowClass ? " " + windowClass : "")',
          'role': 'dialog',
          'tabindex': '-1',
          '[attr.aria-modal]': 'true',
          '[attr.aria-labelledby]': 'ariaLabelledBy'
        },
        template: "\n    <div #dialog [class]=\"'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') +\n     (scrollable ? ' modal-dialog-scrollable' : '')\" role=\"document\">\n        <div class=\"modal-content\"><ng-content></ng-content></div>\n    </div>\n    ",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        styles: ["ngb-modal-window .component-host-scrollable{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}"]
      }]
    }];
    /** @nocollapse */

    NgbModalWindow.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };

    NgbModalWindow.propDecorators = {
      _dialogEl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['dialog', {
          static: true
        }]
      }],
      ariaLabelledBy: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      backdrop: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      centered: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      keyboard: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      scrollable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      windowClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      dismissEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['dismiss']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbModalStack =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _applicationRef
       * @param {?} _injector
       * @param {?} _document
       * @param {?} _scrollBar
       * @param {?} _rendererFactory
       * @param {?} _ngZone
       */
      function NgbModalStack(_applicationRef, _injector, _document, _scrollBar, _rendererFactory, _ngZone) {
        var _this30 = this;

        _classCallCheck(this, NgbModalStack);

        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._document = _document;
        this._scrollBar = _scrollBar;
        this._rendererFactory = _rendererFactory;
        this._ngZone = _ngZone;
        this._activeWindowCmptHasChanged = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._ariaHiddenValues = new Map();
        this._backdropAttributes = ['backdropClass'];
        this._modalRefs = [];
        this._windowAttributes = ['ariaLabelledBy', 'backdrop', 'centered', 'keyboard', 'scrollable', 'size', 'windowClass'];
        this._windowCmpts = []; // Trap focus on active WindowCmpt

        this._activeWindowCmptHasChanged.subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this30._windowCmpts.length) {
            /** @type {?} */
            var activeWindowCmpt = _this30._windowCmpts[_this30._windowCmpts.length - 1];
            ngbFocusTrap(_this30._ngZone, activeWindowCmpt.location.nativeElement, _this30._activeWindowCmptHasChanged);

            _this30._revertAriaHidden();

            _this30._setAriaHidden(activeWindowCmpt.location.nativeElement);
          }
        });
      }
      /**
       * @param {?} moduleCFR
       * @param {?} contentInjector
       * @param {?} content
       * @param {?} options
       * @return {?}
       */


      _createClass(NgbModalStack, [{
        key: "open",
        value: function open(moduleCFR, contentInjector, content, options) {
          var _this31 = this;

          /** @type {?} */
          var containerEl = isDefined(options.container) ? this._document.querySelector(options.container) : this._document.body;
          /** @type {?} */

          var renderer = this._rendererFactory.createRenderer(null, null);
          /** @type {?} */


          var revertPaddingForScrollBar = this._scrollBar.compensate();
          /** @type {?} */


          var removeBodyClass =
          /**
          * @return {?}
          */
          function removeBodyClass() {
            if (!_this31._modalRefs.length) {
              renderer.removeClass(_this31._document.body, 'modal-open');

              _this31._revertAriaHidden();
            }
          };

          if (!containerEl) {
            throw new Error("The specified modal container \"".concat(options.container || 'body', "\" was not found in the DOM."));
          }
          /** @type {?} */


          var activeModal = new NgbActiveModal();
          /** @type {?} */

          var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal, options);
          /** @type {?} */


          var backdropCmptRef = options.backdrop !== false ? this._attachBackdrop(moduleCFR, containerEl) : null;
          /** @type {?} */

          var windowCmptRef = this._attachWindowComponent(moduleCFR, containerEl, contentRef);
          /** @type {?} */


          var ngbModalRef = new NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);

          this._registerModalRef(ngbModalRef);

          this._registerWindowCmpt(windowCmptRef);

          ngbModalRef.result.then(revertPaddingForScrollBar, revertPaddingForScrollBar);
          ngbModalRef.result.then(removeBodyClass, removeBodyClass);

          activeModal.close =
          /**
          * @param {?} result
          * @return {?}
          */
          function (result) {
            ngbModalRef.close(result);
          };

          activeModal.dismiss =
          /**
          * @param {?} reason
          * @return {?}
          */
          function (reason) {
            ngbModalRef.dismiss(reason);
          };

          this._applyWindowOptions(windowCmptRef.instance, options);

          if (this._modalRefs.length === 1) {
            renderer.addClass(this._document.body, 'modal-open');
          }

          if (backdropCmptRef && backdropCmptRef.instance) {
            this._applyBackdropOptions(backdropCmptRef.instance, options);
          }

          return ngbModalRef;
        }
        /**
         * @param {?=} reason
         * @return {?}
         */

      }, {
        key: "dismissAll",
        value: function dismissAll(reason) {
          this._modalRefs.forEach(
          /**
          * @param {?} ngbModalRef
          * @return {?}
          */
          function (ngbModalRef) {
            return ngbModalRef.dismiss(reason);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasOpenModals",
        value: function hasOpenModals() {
          return this._modalRefs.length > 0;
        }
        /**
         * @private
         * @param {?} moduleCFR
         * @param {?} containerEl
         * @return {?}
         */

      }, {
        key: "_attachBackdrop",
        value: function _attachBackdrop(moduleCFR, containerEl) {
          /** @type {?} */
          var backdropFactory = moduleCFR.resolveComponentFactory(NgbModalBackdrop);
          /** @type {?} */

          var backdropCmptRef = backdropFactory.create(this._injector);

          this._applicationRef.attachView(backdropCmptRef.hostView);

          containerEl.appendChild(backdropCmptRef.location.nativeElement);
          return backdropCmptRef;
        }
        /**
         * @private
         * @param {?} moduleCFR
         * @param {?} containerEl
         * @param {?} contentRef
         * @return {?}
         */

      }, {
        key: "_attachWindowComponent",
        value: function _attachWindowComponent(moduleCFR, containerEl, contentRef) {
          /** @type {?} */
          var windowFactory = moduleCFR.resolveComponentFactory(NgbModalWindow);
          /** @type {?} */

          var windowCmptRef = windowFactory.create(this._injector, contentRef.nodes);

          this._applicationRef.attachView(windowCmptRef.hostView);

          containerEl.appendChild(windowCmptRef.location.nativeElement);
          return windowCmptRef;
        }
        /**
         * @private
         * @param {?} windowInstance
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyWindowOptions",
        value: function _applyWindowOptions(windowInstance, options) {
          this._windowAttributes.forEach(
          /**
          * @param {?} optionName
          * @return {?}
          */
          function (optionName) {
            if (isDefined(options[optionName])) {
              windowInstance[optionName] = options[optionName];
            }
          });
        }
        /**
         * @private
         * @param {?} backdropInstance
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_applyBackdropOptions",
        value: function _applyBackdropOptions(backdropInstance, options) {
          this._backdropAttributes.forEach(
          /**
          * @param {?} optionName
          * @return {?}
          */
          function (optionName) {
            if (isDefined(options[optionName])) {
              backdropInstance[optionName] = options[optionName];
            }
          });
        }
        /**
         * @private
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} activeModal
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_getContentRef",
        value: function _getContentRef(moduleCFR, contentInjector, content, activeModal, options) {
          if (!content) {
            return new ContentRef([]);
          } else if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            return this._createFromTemplateRef(content, activeModal);
          } else if (isString(content)) {
            return this._createFromString(content);
          } else {
            return this._createFromComponent(moduleCFR, contentInjector, content, activeModal, options);
          }
        }
        /**
         * @private
         * @param {?} content
         * @param {?} activeModal
         * @return {?}
         */

      }, {
        key: "_createFromTemplateRef",
        value: function _createFromTemplateRef(content, activeModal) {
          /** @type {?} */
          var context = {
            $implicit: activeModal,

            /**
             * @param {?} result
             * @return {?}
             */
            close: function close(result) {
              activeModal.close(result);
            },

            /**
             * @param {?} reason
             * @return {?}
             */
            dismiss: function dismiss(reason) {
              activeModal.dismiss(reason);
            }
          };
          /** @type {?} */

          var viewRef = content.createEmbeddedView(context);

          this._applicationRef.attachView(viewRef);

          return new ContentRef([viewRef.rootNodes], viewRef);
        }
        /**
         * @private
         * @param {?} content
         * @return {?}
         */

      }, {
        key: "_createFromString",
        value: function _createFromString(content) {
          /** @type {?} */
          var component = this._document.createTextNode("".concat(content));

          return new ContentRef([[component]]);
        }
        /**
         * @private
         * @param {?} moduleCFR
         * @param {?} contentInjector
         * @param {?} content
         * @param {?} context
         * @param {?} options
         * @return {?}
         */

      }, {
        key: "_createFromComponent",
        value: function _createFromComponent(moduleCFR, contentInjector, content, context, options) {
          /** @type {?} */
          var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
          /** @type {?} */

          var modalContentInjector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [{
              provide: NgbActiveModal,
              useValue: context
            }],
            parent: contentInjector
          });
          /** @type {?} */


          var componentRef = contentCmptFactory.create(modalContentInjector);
          /** @type {?} */

          var componentNativeEl = componentRef.location.nativeElement;

          if (options.scrollable) {
            /** @type {?} */
            componentNativeEl.classList.add('component-host-scrollable');
          }

          this._applicationRef.attachView(componentRef.hostView); // FIXME: we should here get rid of the component nativeElement
          // and use `[Array.from(componentNativeEl.childNodes)]` instead and remove the above CSS class.


          return new ContentRef([[componentNativeEl]], componentRef.hostView, componentRef);
        }
        /**
         * @private
         * @param {?} element
         * @return {?}
         */

      }, {
        key: "_setAriaHidden",
        value: function _setAriaHidden(element) {
          var _this32 = this;

          /** @type {?} */
          var parent = element.parentElement;

          if (parent && element !== this._document.body) {
            Array.from(parent.children).forEach(
            /**
            * @param {?} sibling
            * @return {?}
            */
            function (sibling) {
              if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
                _this32._ariaHiddenValues.set(sibling, sibling.getAttribute('aria-hidden'));

                sibling.setAttribute('aria-hidden', 'true');
              }
            });

            this._setAriaHidden(parent);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_revertAriaHidden",
        value: function _revertAriaHidden() {
          this._ariaHiddenValues.forEach(
          /**
          * @param {?} value
          * @param {?} element
          * @return {?}
          */
          function (value, element) {
            if (value) {
              element.setAttribute('aria-hidden', value);
            } else {
              element.removeAttribute('aria-hidden');
            }
          });

          this._ariaHiddenValues.clear();
        }
        /**
         * @private
         * @param {?} ngbModalRef
         * @return {?}
         */

      }, {
        key: "_registerModalRef",
        value: function _registerModalRef(ngbModalRef) {
          var _this33 = this;

          /** @type {?} */
          var unregisterModalRef =
          /**
          * @return {?}
          */
          function unregisterModalRef() {
            /** @type {?} */
            var index = _this33._modalRefs.indexOf(ngbModalRef);

            if (index > -1) {
              _this33._modalRefs.splice(index, 1);
            }
          };

          this._modalRefs.push(ngbModalRef);

          ngbModalRef.result.then(unregisterModalRef, unregisterModalRef);
        }
        /**
         * @private
         * @param {?} ngbWindowCmpt
         * @return {?}
         */

      }, {
        key: "_registerWindowCmpt",
        value: function _registerWindowCmpt(ngbWindowCmpt) {
          var _this34 = this;

          this._windowCmpts.push(ngbWindowCmpt);

          this._activeWindowCmptHasChanged.next();

          ngbWindowCmpt.onDestroy(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var index = _this34._windowCmpts.indexOf(ngbWindowCmpt);

            if (index > -1) {
              _this34._windowCmpts.splice(index, 1);

              _this34._activeWindowCmptHasChanged.next();
            }
          });
        }
      }]);

      return NgbModalStack;
    }();

    NgbModalStack.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbModalStack.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: ScrollBar
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    NgbModalStack.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbModalStack_Factory() {
        return new NgbModalStack(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ScrollBar), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: NgbModalStack,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A service for opening modal windows.
     *
     * Creating a modal is straightforward: create a component or a template and pass it as an argument to
     * the `.open()` method.
     */

    var NgbModal =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _moduleCFR
       * @param {?} _injector
       * @param {?} _modalStack
       * @param {?} _config
       */
      function NgbModal(_moduleCFR, _injector, _modalStack, _config) {
        _classCallCheck(this, NgbModal);

        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
        this._config = _config;
      }
      /**
       * Opens a new modal window with the specified content and supplied options.
       *
       * Content can be provided as a `TemplateRef` or a component type. If you pass a component type as content,
       * then instances of those components can be injected with an instance of the `NgbActiveModal` class. You can then
       * use `NgbActiveModal` methods to close / dismiss modals from "inside" of your component.
       *
       * Also see the [`NgbModalOptions`](#/components/modal/api#NgbModalOptions) for the list of supported options.
       * @param {?} content
       * @param {?=} options
       * @return {?}
       */


      _createClass(NgbModal, [{
        key: "open",
        value: function open(content) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          /** @type {?} */
          var combinedOptions = Object.assign({}, this._config, options);
          return this._modalStack.open(this._moduleCFR, this._injector, content, combinedOptions);
        }
        /**
         * Dismisses all currently displayed modal windows with the supplied reason.
         *
         * \@since 3.1.0
         * @param {?=} reason
         * @return {?}
         */

      }, {
        key: "dismissAll",
        value: function dismissAll(reason) {
          this._modalStack.dismissAll(reason);
        }
        /**
         * Indicates if there are currently any open modal windows in the application.
         *
         * \@since 3.3.0
         * @return {?}
         */

      }, {
        key: "hasOpenModals",
        value: function hasOpenModals() {
          return this._modalStack.hasOpenModals();
        }
      }]);

      return NgbModal;
    }();

    NgbModal.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbModal.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: NgbModalStack
      }, {
        type: NgbModalConfig
      }];
    };
    /** @nocollapse */


    NgbModal.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbModal_Factory() {
        return new NgbModal(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgbModalStack), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(NgbModalConfig));
      },
      token: NgbModal,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbModalModule = function NgbModalModule() {
      _classCallCheck(this, NgbModalModule);
    };

    NgbModalModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbModalBackdrop, NgbModalWindow],
        entryComponents: [NgbModalBackdrop, NgbModalWindow],
        providers: [NgbModal]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbNav`](#/components/nav/api#NgbNav) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the navs used in the application.
     *
     * \@since 5.2.0
     */

    var NgbNavConfig = function NgbNavConfig() {
      _classCallCheck(this, NgbNavConfig);

      this.destroyOnHide = true;
      this.orientation = 'horizontal';
      this.roles = 'tablist';
    };

    NgbNavConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbNavConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbNavConfig_Factory() {
        return new NgbNavConfig();
      },
      token: NgbNavConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var isValidNavId =
    /**
    * @param {?} id
    * @return {?}
    */
    function isValidNavId(id) {
      return isDefined(id) && id !== '';
    };
    /** @type {?} */


    var navCounter = 0;
    /**
     * This directive must be used to wrap content to be displayed in the nav.
     *
     * \@since 5.2.0
     */

    var NgbNavContent =
    /**
     * @param {?} templateRef
     */
    function NgbNavContent(templateRef) {
      _classCallCheck(this, NgbNavContent);

      this.templateRef = templateRef;
    };

    NgbNavContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbNavContent]'
      }]
    }];
    /** @nocollapse */

    NgbNavContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * The directive used to group nav link and related nav content. As well as set nav identifier and some options.
     *
     * \@since 5.2.0
     */


    var NgbNavItem =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} nav
       * @param {?} elementRef
       */
      function NgbNavItem(nav, elementRef) {
        _classCallCheck(this, NgbNavItem);

        this.elementRef = elementRef;
        /**
         * If `true`, the current nav item is disabled and can't be toggled by user.
         *
         * Nevertheless disabled nav can be selected programmatically via the `.select()` method and the `[activeId]` binding.
         */

        this.disabled = false; // TODO: cf https://github.com/angular/angular/issues/30106

        this._nav = nav;
      }
      /**
       * @return {?}
       */


      _createClass(NgbNavItem, [{
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
          // only @ContentChildren allows us to specify the {descendants: false} option.
          // Without {descendants: false} we are hitting bugs described in:
          // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
          this.contentTpl = this.contentTpls.first;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!isDefined(this.domId)) {
            this.domId = "ngb-nav-".concat(navCounter++);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "isPanelInDom",

        /**
         * @return {?}
         */
        value: function isPanelInDom() {
          return (isDefined(this.destroyOnHide) ? !this.destroyOnHide : !this._nav.destroyOnHide) || this.active;
        }
      }, {
        key: "active",
        get: function get() {
          return this._nav.activeId === this.id;
        }
        /**
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return isValidNavId(this._id) ? this._id : this.domId;
        }
        /**
         * @return {?}
         */

      }, {
        key: "panelDomId",
        get: function get() {
          return "".concat(this.domId, "-panel");
        }
      }]);

      return NgbNavItem;
    }();

    NgbNavItem.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbNavItem]',
        exportAs: 'ngbNavItem',
        host: {
          '[class.nav-item]': 'true'
        }
      }]
    }];
    /** @nocollapse */

    NgbNavItem.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return NgbNav;
          })]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }];
    };

    NgbNavItem.propDecorators = {
      destroyOnHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      domId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      _id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngbNavItem']
      }],
      contentTpls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbNavContent, {
          descendants: false
        }]
      }]
    };
    /**
     * A nav directive that helps with implementing tabbed navigation components.
     *
     * \@since 5.2.0
     */

    var NgbNav =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} role
       * @param {?} config
       * @param {?} _cd
       */
      function NgbNav(role, config, _cd) {
        _classCallCheck(this, NgbNav);

        this.role = role;
        this._cd = _cd;
        /**
         * The event emitted after the active nav changes
         * The payload of the event is the newly active nav id
         *
         * If you want to prevent nav change, you should use `(navChange)` event
         */

        this.activeIdChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * The nav change event emitted right before the nav change happens on user click.
         *
         * This event won't be emitted if nav is changed programmatically via `[activeId]` or `.select()`.
         *
         * See [`NgbNavChangeEvent`](#/components/nav/api#NgbNavChangeEvent) for payload details.
         */

        this.navChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.destroyOnHide = config.destroyOnHide;
        this.orientation = config.orientation;
        this.roles = config.roles;
      }
      /**
       * @param {?} item
       * @return {?}
       */


      _createClass(NgbNav, [{
        key: "click",
        value: function click(item) {
          if (!item.disabled) {
            this._updateActiveId(item.id);
          }
        }
        /**
         * Selects the nav with the given id and shows its associated pane.
         * Any other nav that was previously selected becomes unselected and its associated pane is hidden.
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(id) {
          this._updateActiveId(id, false);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          if (!isDefined(this.activeId)) {
            /** @type {?} */
            var _nextId = this.items.first ? this.items.first.id : null;

            if (isValidNavId(_nextId)) {
              this._updateActiveId(_nextId, false);

              this._cd.detectChanges();
            }
          }
        }
        /**
         * @private
         * @param {?} nextId
         * @param {?=} emitNavChange
         * @return {?}
         */

      }, {
        key: "_updateActiveId",
        value: function _updateActiveId(nextId) {
          var emitNavChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (this.activeId !== nextId) {
            /** @type {?} */
            var defaultPrevented = false;

            if (emitNavChange) {
              this.navChange.emit({
                activeId: this.activeId,
                nextId: nextId,
                preventDefault:
                /**
                * @return {?}
                */
                function preventDefault() {
                  defaultPrevented = true;
                }
              });
            }

            if (!defaultPrevented) {
              this.activeId = nextId;
              this.activeIdChange.emit(nextId);
            }
          }
        }
      }]);

      return NgbNav;
    }();

    NgbNav.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbNav]',
        exportAs: 'ngbNav',
        host: {
          '[class.nav]': 'true',
          '[class.flex-column]': "orientation === 'vertical'",
          '[attr.aria-orientation]': "orientation === 'vertical' && roles === 'tablist' ? 'vertical' : undefined",
          '[attr.role]': "role ? role : roles ? 'tablist' : undefined"
        }
      }]
    }];
    /** @nocollapse */

    NgbNav.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['role']
        }]
      }, {
        type: NgbNavConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    NgbNav.propDecorators = {
      activeId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      activeIdChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      destroyOnHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      roles: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      items: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbNavItem]
      }],
      navChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * A directive to put on the nav link.
     *
     * \@since 5.2.0
     */

    var NgbNavLink =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} role
       * @param {?} navItem
       * @param {?} nav
       */
      function NgbNavLink(role, navItem, nav) {
        _classCallCheck(this, NgbNavLink);

        this.role = role;
        this.navItem = navItem;
        this.nav = nav;
      }
      /**
       * @return {?}
       */


      _createClass(NgbNavLink, [{
        key: "hasNavItemClass",
        value: function hasNavItemClass() {
          // with alternative markup we have to add `.nav-item` class, because `ngbNavItem` is on the ng-container
          return this.navItem.elementRef.nativeElement.nodeType === Node.COMMENT_NODE;
        }
      }]);

      return NgbNavLink;
    }();

    NgbNavLink.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'a[ngbNavLink]',
        host: {
          '[id]': 'navItem.domId',
          '[class.nav-link]': 'true',
          '[class.nav-item]': 'hasNavItemClass()',
          '[attr.role]': "role ? role : nav.roles ? 'tab' : undefined",
          'href': '',
          '[class.active]': 'navItem.active',
          '[class.disabled]': 'navItem.disabled',
          '[attr.tabindex]': 'navItem.disabled ? -1 : undefined',
          '[attr.aria-controls]': 'navItem.isPanelInDom() ? navItem.panelDomId : null',
          '[attr.aria-selected]': 'navItem.active',
          '[attr.aria-disabled]': 'navItem.disabled',
          '(click)': 'nav.click(navItem); $event.preventDefault()'
        }
      }]
    }];
    /** @nocollapse */

    NgbNavLink.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['role']
        }]
      }, {
        type: NgbNavItem
      }, {
        type: NgbNav
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The outlet where currently active nav content will be displayed.
     *
     * \@since 5.2.0
     */


    var NgbNavOutlet = function NgbNavOutlet() {
      _classCallCheck(this, NgbNavOutlet);
    };

    NgbNavOutlet.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: '[ngbNavOutlet]',
        host: {
          '[class.tab-content]': 'true'
        },
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n      <ng-template ngFor let-item [ngForOf]=\"nav.items\">\n          <div class=\"tab-pane\"\n               *ngIf=\"item.isPanelInDom()\"\n               [id]=\"item.panelDomId\"\n               [class.active]=\"item.active\"\n               [attr.role]=\"paneRole ? paneRole : nav.roles ? 'tabpanel' : undefined\"\n               [attr.aria-labelledby]=\"item.domId\">\n              <ng-template [ngTemplateOutlet]=\"item.contentTpl?.templateRef\" [ngTemplateOutletContext]=\"{$implicit: item.active}\"></ng-template>\n          </div>\n      </ng-template>\n  "
      }]
    }];
    NgbNavOutlet.propDecorators = {
      paneRole: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      nav: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['ngbNavOutlet']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_NAV_DIRECTIVES = [NgbNavContent, NgbNav, NgbNavItem, NgbNavLink, NgbNavOutlet];

    var NgbNavModule = function NgbNavModule() {
      _classCallCheck(this, NgbNavModule);
    };

    NgbNavModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: NGB_NAV_DIRECTIVES,
        exports: NGB_NAV_DIRECTIVES,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbPagination`](#/components/pagination/api#NgbPagination) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the paginations used in the application.
     */

    var NgbPaginationConfig = function NgbPaginationConfig() {
      _classCallCheck(this, NgbPaginationConfig);

      this.disabled = false;
      this.boundaryLinks = false;
      this.directionLinks = true;
      this.ellipses = true;
      this.maxSize = 0;
      this.pageSize = 10;
      this.rotate = false;
    };

    NgbPaginationConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbPaginationConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbPaginationConfig_Factory() {
        return new NgbPaginationConfig();
      },
      token: NgbPaginationConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A directive to match the 'ellipsis' link template
     *
     * \@since 4.1.0
     */

    var NgbPaginationEllipsis =
    /**
     * @param {?} templateRef
     */
    function NgbPaginationEllipsis(templateRef) {
      _classCallCheck(this, NgbPaginationEllipsis);

      this.templateRef = templateRef;
    };

    NgbPaginationEllipsis.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPaginationEllipsis]'
      }]
    }];
    /** @nocollapse */

    NgbPaginationEllipsis.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive to match the 'first' link template
     *
     * \@since 4.1.0
     */


    var NgbPaginationFirst =
    /**
     * @param {?} templateRef
     */
    function NgbPaginationFirst(templateRef) {
      _classCallCheck(this, NgbPaginationFirst);

      this.templateRef = templateRef;
    };

    NgbPaginationFirst.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPaginationFirst]'
      }]
    }];
    /** @nocollapse */

    NgbPaginationFirst.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive to match the 'last' link template
     *
     * \@since 4.1.0
     */


    var NgbPaginationLast =
    /**
     * @param {?} templateRef
     */
    function NgbPaginationLast(templateRef) {
      _classCallCheck(this, NgbPaginationLast);

      this.templateRef = templateRef;
    };

    NgbPaginationLast.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPaginationLast]'
      }]
    }];
    /** @nocollapse */

    NgbPaginationLast.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive to match the 'next' link template
     *
     * \@since 4.1.0
     */


    var NgbPaginationNext =
    /**
     * @param {?} templateRef
     */
    function NgbPaginationNext(templateRef) {
      _classCallCheck(this, NgbPaginationNext);

      this.templateRef = templateRef;
    };

    NgbPaginationNext.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPaginationNext]'
      }]
    }];
    /** @nocollapse */

    NgbPaginationNext.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive to match the page 'number' link template
     *
     * \@since 4.1.0
     */


    var NgbPaginationNumber =
    /**
     * @param {?} templateRef
     */
    function NgbPaginationNumber(templateRef) {
      _classCallCheck(this, NgbPaginationNumber);

      this.templateRef = templateRef;
    };

    NgbPaginationNumber.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPaginationNumber]'
      }]
    }];
    /** @nocollapse */

    NgbPaginationNumber.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive to match the 'previous' link template
     *
     * \@since 4.1.0
     */


    var NgbPaginationPrevious =
    /**
     * @param {?} templateRef
     */
    function NgbPaginationPrevious(templateRef) {
      _classCallCheck(this, NgbPaginationPrevious);

      this.templateRef = templateRef;
    };

    NgbPaginationPrevious.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbPaginationPrevious]'
      }]
    }];
    /** @nocollapse */

    NgbPaginationPrevious.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A component that displays page numbers and allows to customize them in several ways.
     */


    var NgbPagination =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       */
      function NgbPagination(config) {
        _classCallCheck(this, NgbPagination);

        this.pageCount = 0;
        this.pages = [];
        /**
         *  The current page.
         *
         *  Page numbers start with `1`.
         */

        this.page = 1;
        /**
         *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
         *
         *  Event payload is the number of the newly selected page.
         *
         *  Page numbers start with `1`.
         */

        this.pageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);
        this.disabled = config.disabled;
        this.boundaryLinks = config.boundaryLinks;
        this.directionLinks = config.directionLinks;
        this.ellipses = config.ellipses;
        this.maxSize = config.maxSize;
        this.pageSize = config.pageSize;
        this.rotate = config.rotate;
        this.size = config.size;
      }
      /**
       * @return {?}
       */


      _createClass(NgbPagination, [{
        key: "hasPrevious",
        value: function hasPrevious() {
          return this.page > 1;
        }
        /**
         * @return {?}
         */

      }, {
        key: "hasNext",
        value: function hasNext() {
          return this.page < this.pageCount;
        }
        /**
         * @return {?}
         */

      }, {
        key: "nextDisabled",
        value: function nextDisabled() {
          return !this.hasNext() || this.disabled;
        }
        /**
         * @return {?}
         */

      }, {
        key: "previousDisabled",
        value: function previousDisabled() {
          return !this.hasPrevious() || this.disabled;
        }
        /**
         * @param {?} pageNumber
         * @return {?}
         */

      }, {
        key: "selectPage",
        value: function selectPage(pageNumber) {
          this._updatePages(pageNumber);
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this._updatePages(this.page);
        }
        /**
         * @param {?} pageNumber
         * @return {?}
         */

      }, {
        key: "isEllipsis",
        value: function isEllipsis(pageNumber) {
          return pageNumber === -1;
        }
        /**
         * Appends ellipses and first/last page number to the displayed pages
         * @private
         * @param {?} start
         * @param {?} end
         * @return {?}
         */

      }, {
        key: "_applyEllipses",
        value: function _applyEllipses(start, end) {
          if (this.ellipses) {
            if (start > 0) {
              // The first page will always be included. If the displayed range
              // starts after the third page, then add ellipsis. But if the range
              // starts on the third page, then add the second page instead of
              // an ellipsis, because the ellipsis would only hide a single page.
              if (start > 2) {
                this.pages.unshift(-1);
              } else if (start === 2) {
                this.pages.unshift(2);
              }

              this.pages.unshift(1);
            }

            if (end < this.pageCount) {
              // The last page will always be included. If the displayed range
              // ends before the third-last page, then add ellipsis. But if the range
              // ends on third-last page, then add the second-last page instead of
              // an ellipsis, because the ellipsis would only hide a single page.
              if (end < this.pageCount - 2) {
                this.pages.push(-1);
              } else if (end === this.pageCount - 2) {
                this.pages.push(this.pageCount - 1);
              }

              this.pages.push(this.pageCount);
            }
          }
        }
        /**
         * Rotates page numbers based on maxSize items visible.
         * Currently selected page stays in the middle:
         *
         * Ex. for selected page = 6:
         * [5,*6*,7] for maxSize = 3
         * [4,5,*6*,7] for maxSize = 4
         * @private
         * @return {?}
         */

      }, {
        key: "_applyRotation",
        value: function _applyRotation() {
          /** @type {?} */
          var start = 0;
          /** @type {?} */

          var end = this.pageCount;
          /** @type {?} */

          var leftOffset = Math.floor(this.maxSize / 2);
          /** @type {?} */

          var rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

          if (this.page <= leftOffset) {
            // very beginning, no rotation -> [0..maxSize]
            end = this.maxSize;
          } else if (this.pageCount - this.page < leftOffset) {
            // very end, no rotation -> [len-maxSize..len]
            start = this.pageCount - this.maxSize;
          } else {
            // rotate
            start = this.page - leftOffset - 1;
            end = this.page + rightOffset;
          }

          return [start, end];
        }
        /**
         * Paginates page numbers based on maxSize items per page.
         * @private
         * @return {?}
         */

      }, {
        key: "_applyPagination",
        value: function _applyPagination() {
          /** @type {?} */
          var page = Math.ceil(this.page / this.maxSize) - 1;
          /** @type {?} */

          var start = page * this.maxSize;
          /** @type {?} */

          var end = start + this.maxSize;
          return [start, end];
        }
        /**
         * @private
         * @param {?} newPageNo
         * @return {?}
         */

      }, {
        key: "_setPageInRange",
        value: function _setPageInRange(newPageNo) {
          /** @type {?} */
          var prevPageNo = this.page;
          this.page = getValueInRange(newPageNo, this.pageCount, 1);

          if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
            this.pageChange.emit(this.page);
          }
        }
        /**
         * @private
         * @param {?} newPage
         * @return {?}
         */

      }, {
        key: "_updatePages",
        value: function _updatePages(newPage) {
          this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

          if (!isNumber(this.pageCount)) {
            this.pageCount = 0;
          } // fill-in model needed to render pages


          this.pages.length = 0;

          for (var i = 1; i <= this.pageCount; i++) {
            this.pages.push(i);
          } // set page within 1..max range


          this._setPageInRange(newPage); // apply maxSize if necessary


          if (this.maxSize > 0 && this.pageCount > this.maxSize) {
            /** @type {?} */
            var start = 0;
            /** @type {?} */

            var end = this.pageCount; // either paginating or rotating page numbers

            if (this.rotate) {
              var _this$_applyRotation = this._applyRotation();

              var _this$_applyRotation2 = _slicedToArray(_this$_applyRotation, 2);

              start = _this$_applyRotation2[0];
              end = _this$_applyRotation2[1];
            } else {
              var _this$_applyPaginatio = this._applyPagination();

              var _this$_applyPaginatio2 = _slicedToArray(_this$_applyPaginatio, 2);

              start = _this$_applyPaginatio2[0];
              end = _this$_applyPaginatio2[1];
            }

            this.pages = this.pages.slice(start, end); // adding ellipses

            this._applyEllipses(start, end);
          }
        }
      }]);

      return NgbPagination;
    }();

    NgbPagination.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-pagination',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        host: {
          'role': 'navigation'
        },
        template: "\n    <ng-template #first><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.first\">&laquo;&laquo;</span></ng-template>\n    <ng-template #previous><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.previous\">&laquo;</span></ng-template>\n    <ng-template #next><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.next\">&raquo;</span></ng-template>\n    <ng-template #last><span aria-hidden=\"true\" i18n=\"@@ngb.pagination.last\">&raquo;&raquo;</span></ng-template>\n    <ng-template #ellipsis>...</ng-template>\n    <ng-template #defaultNumber let-page let-currentPage=\"currentPage\">\n      {{ page }}\n      <span *ngIf=\"page === currentPage\" class=\"sr-only\">(current)</span>\n    </ng-template>\n    <ul [class]=\"'pagination' + (size ? ' pagination-' + size : '')\">\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"First\" i18n-aria-label=\"@@ngb.pagination.first-aria\" class=\"page-link\" href\n          (click)=\"selectPage(1); $event.preventDefault()\" [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplFirst?.templateRef || first\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"directionLinks\" class=\"page-item\"\n        [class.disabled]=\"previousDisabled()\">\n        <a aria-label=\"Previous\" i18n-aria-label=\"@@ngb.pagination.previous-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page-1); $event.preventDefault()\" [attr.tabindex]=\"previousDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"previousDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplPrevious?.templateRef || previous\"\n                       [ngTemplateOutletContext]=\"{disabled: previousDisabled()}\"></ng-template>\n        </a>\n      </li>\n      <li *ngFor=\"let pageNumber of pages\" class=\"page-item\" [class.active]=\"pageNumber === page\"\n        [class.disabled]=\"isEllipsis(pageNumber) || disabled\" [attr.aria-current]=\"(pageNumber === page ? 'page' : null)\">\n        <a *ngIf=\"isEllipsis(pageNumber)\" class=\"page-link\" tabindex=\"-1\" aria-disabled=\"true\">\n          <ng-template [ngTemplateOutlet]=\"tplEllipsis?.templateRef || ellipsis\"\n                       [ngTemplateOutletContext]=\"{disabled: true, currentPage: page}\"></ng-template>\n        </a>\n        <a *ngIf=\"!isEllipsis(pageNumber)\" class=\"page-link\" href (click)=\"selectPage(pageNumber); $event.preventDefault()\" [attr.tabindex]=\"disabled ? '-1' : null\"\n          [attr.aria-disabled]=\"disabled ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplNumber?.templateRef || defaultNumber\"\n                       [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pageNumber, currentPage: page}\"></ng-template>\n        </a>\n      </li>\n      <li *ngIf=\"directionLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Next\" i18n-aria-label=\"@@ngb.pagination.next-aria\" class=\"page-link\" href\n          (click)=\"selectPage(page+1); $event.preventDefault()\" [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplNext?.templateRef || next\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n\n      <li *ngIf=\"boundaryLinks\" class=\"page-item\" [class.disabled]=\"nextDisabled()\">\n        <a aria-label=\"Last\" i18n-aria-label=\"@@ngb.pagination.last-aria\" class=\"page-link\" href\n          (click)=\"selectPage(pageCount); $event.preventDefault()\" [attr.tabindex]=\"nextDisabled() ? '-1' : null\"\n          [attr.aria-disabled]=\"nextDisabled() ? 'true' : null\">\n          <ng-template [ngTemplateOutlet]=\"tplLast?.templateRef || last\"\n                       [ngTemplateOutletContext]=\"{disabled: nextDisabled(), currentPage: page}\"></ng-template>\n        </a>\n      </li>\n    </ul>\n  "
      }]
    }];
    /** @nocollapse */

    NgbPagination.ctorParameters = function () {
      return [{
        type: NgbPaginationConfig
      }];
    };

    NgbPagination.propDecorators = {
      tplEllipsis: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbPaginationEllipsis, {
          static: false
        }]
      }],
      tplFirst: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbPaginationFirst, {
          static: false
        }]
      }],
      tplLast: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbPaginationLast, {
          static: false
        }]
      }],
      tplNext: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbPaginationNext, {
          static: false
        }]
      }],
      tplNumber: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbPaginationNumber, {
          static: false
        }]
      }],
      tplPrevious: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbPaginationPrevious, {
          static: false
        }]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      boundaryLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      directionLinks: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ellipses: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rotate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      collectionSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      maxSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      page: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageSize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      pageChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var DIRECTIVES = [NgbPagination, NgbPaginationEllipsis, NgbPaginationFirst, NgbPaginationLast, NgbPaginationNext, NgbPaginationNumber, NgbPaginationPrevious];

    var NgbPaginationModule = function NgbPaginationModule() {
      _classCallCheck(this, NgbPaginationModule);
    };

    NgbPaginationModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: DIRECTIVES,
        exports: DIRECTIVES,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var Trigger =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} open
       * @param {?=} close
       */
      function Trigger(open, close) {
        _classCallCheck(this, Trigger);

        this.open = open;
        this.close = close;

        if (!close) {
          this.close = open;
        }
      }
      /**
       * @return {?}
       */


      _createClass(Trigger, [{
        key: "isManual",
        value: function isManual() {
          return this.open === 'manual' || this.close === 'manual';
        }
      }]);

      return Trigger;
    }();
    /** @type {?} */


    var DEFAULT_ALIASES = {
      'hover': ['mouseenter', 'mouseleave'],
      'focus': ['focusin', 'focusout']
    };
    /**
     * @param {?} triggers
     * @param {?=} aliases
     * @return {?}
     */

    function parseTriggers(triggers) {
      var aliases = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_ALIASES;

      /** @type {?} */
      var trimmedTriggers = (triggers || '').trim();

      if (trimmedTriggers.length === 0) {
        return [];
      }
      /** @type {?} */


      var parsedTriggers = trimmedTriggers.split(/\s+/).map(
      /**
      * @param {?} trigger
      * @return {?}
      */
      function (trigger) {
        return trigger.split(':');
      }).map(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        /** @type {?} */
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
      });
      /** @type {?} */

      var manualTriggers = parsedTriggers.filter(
      /**
      * @param {?} triggerPair
      * @return {?}
      */
      function (triggerPair) {
        return triggerPair.isManual();
      });

      if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
      }

      if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
      }

      return parsedTriggers;
    }
    /**
     * @param {?} renderer
     * @param {?} nativeElement
     * @param {?} triggers
     * @param {?} isOpenedFn
     * @return {?}
     */


    function observeTriggers(renderer, nativeElement, triggers, isOpenedFn) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](
      /**
      * @param {?} subscriber
      * @return {?}
      */
      function (subscriber) {
        /** @type {?} */
        var listeners = [];
        /** @type {?} */

        var openFn =
        /**
        * @return {?}
        */
        function openFn() {
          return subscriber.next(true);
        };
        /** @type {?} */


        var closeFn =
        /**
        * @return {?}
        */
        function closeFn() {
          return subscriber.next(false);
        };
        /** @type {?} */


        var toggleFn =
        /**
        * @return {?}
        */
        function toggleFn() {
          return subscriber.next(!isOpenedFn());
        };

        triggers.forEach(
        /**
        * @param {?} trigger
        * @return {?}
        */
        function (trigger) {
          if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(nativeElement, trigger.open, toggleFn));
          } else {
            listeners.push(renderer.listen(nativeElement, trigger.open, openFn), renderer.listen(nativeElement, trigger.close, closeFn));
          }
        });
        return (
          /**
          * @return {?}
          */
          function () {
            listeners.forEach(
            /**
            * @param {?} unsubscribeFn
            * @return {?}
            */
            function (unsubscribeFn) {
              return unsubscribeFn();
            });
          }
        );
      });
    }
    /** @type {?} */


    var delayOrNoop =
    /**
    * @template T
    * @param {?} time
    * @return {?}
    */
    function delayOrNoop(time) {
      return time > 0 ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(time) :
      /**
      * @param {?} a
      * @return {?}
      */
      function (a) {
        return a;
      };
    };
    /**
     * @param {?} openDelay
     * @param {?} closeDelay
     * @param {?} isOpenedFn
     * @return {?}
     */


    function triggerDelay(openDelay, closeDelay, isOpenedFn) {
      return (
        /**
        * @param {?} input$
        * @return {?}
        */
        function (input$) {
          /** @type {?} */
          var pending = null;
          /** @type {?} */

          var filteredInput$ = input$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} open
          * @return {?}
          */
          function (open) {
            return {
              open: open
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            /** @type {?} */
            var currentlyOpen = isOpenedFn();

            if (currentlyOpen !== event.open && (!pending || pending.open === currentlyOpen)) {
              pending = event;
              return true;
            }

            if (pending && pending.open !== event.open) {
              pending = null;
            }

            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
          /** @type {?} */

          var delayedOpen$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.open;
          }), delayOrNoop(openDelay));
          /** @type {?} */

          var delayedClose$ = filteredInput$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return !event.open;
          }), delayOrNoop(closeDelay));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(delayedOpen$, delayedClose$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event === pending) {
              pending = null;
              return event.open !== isOpenedFn();
            }

            return false;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return event.open;
          }));
        }
      );
    }
    /**
     * @param {?} renderer
     * @param {?} nativeElement
     * @param {?} triggers
     * @param {?} isOpenedFn
     * @param {?} openFn
     * @param {?} closeFn
     * @param {?=} openDelay
     * @param {?=} closeDelay
     * @return {?}
     */


    function listenToTriggers(renderer, nativeElement, triggers, isOpenedFn, openFn, closeFn) {
      var openDelay = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;
      var closeDelay = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : 0;

      /** @type {?} */
      var parsedTriggers = parseTriggers(triggers);

      if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return (
          /**
          * @return {?}
          */
          function () {}
        );
      }
      /** @type {?} */


      var subscription = observeTriggers(renderer, nativeElement, parsedTriggers, isOpenedFn).pipe(triggerDelay(openDelay, closeDelay, isOpenedFn)).subscribe(
      /**
      * @param {?} open
      * @return {?}
      */
      function (open) {
        return open ? openFn() : closeFn();
      });
      return (
        /**
        * @return {?}
        */
        function () {
          return subscription.unsubscribe();
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbPopover`](#/components/popover/api#NgbPopover) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the popovers used in the application.
     */


    var NgbPopoverConfig = function NgbPopoverConfig() {
      _classCallCheck(this, NgbPopoverConfig);

      this.autoClose = true;
      this.placement = 'auto';
      this.triggers = 'click';
      this.disablePopover = false;
      this.openDelay = 0;
      this.closeDelay = 0;
    };

    NgbPopoverConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbPopoverConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbPopoverConfig_Factory() {
        return new NgbPopoverConfig();
      },
      token: NgbPopoverConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nextId$3 = 0;

    var NgbPopoverWindow =
    /*#__PURE__*/
    function () {
      function NgbPopoverWindow() {
        _classCallCheck(this, NgbPopoverWindow);
      }

      _createClass(NgbPopoverWindow, [{
        key: "isTitleTemplate",

        /**
         * @return {?}
         */
        value: function isTitleTemplate() {
          return this.title instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"];
        }
      }]);

      return NgbPopoverWindow;
    }();

    NgbPopoverWindow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-popover-window',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          '[class]': '"popover" + (popoverClass ? " " + popoverClass : "")',
          'role': 'tooltip',
          '[id]': 'id'
        },
        template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\" *ngIf=\"title != null\">\n      <ng-template #simpleTitle>{{title}}</ng-template>\n      <ng-template [ngTemplateOutlet]=\"isTitleTemplate() ? title : simpleTitle\" [ngTemplateOutletContext]=\"context\"></ng-template>\n    </h3>\n    <div class=\"popover-body\"><ng-content></ng-content></div>",
        styles: ["ngb-popover-window.bs-popover-bottom>.arrow,ngb-popover-window.bs-popover-top>.arrow{left:50%;margin-left:-.5rem}ngb-popover-window.bs-popover-bottom-left>.arrow,ngb-popover-window.bs-popover-top-left>.arrow{left:2em}ngb-popover-window.bs-popover-bottom-right>.arrow,ngb-popover-window.bs-popover-top-right>.arrow{left:auto;right:2em}ngb-popover-window.bs-popover-left>.arrow,ngb-popover-window.bs-popover-right>.arrow{top:50%;margin-top:-.5rem}ngb-popover-window.bs-popover-left-top>.arrow,ngb-popover-window.bs-popover-right-top>.arrow{top:.7em}ngb-popover-window.bs-popover-left-bottom>.arrow,ngb-popover-window.bs-popover-right-bottom>.arrow{top:auto;bottom:.7em}"]
      }]
    }];
    NgbPopoverWindow.propDecorators = {
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      popoverClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      context: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * A lightweight and extensible directive for fancy popover creation.
     */

    var NgbPopover =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} injector
       * @param {?} componentFactoryResolver
       * @param {?} viewContainerRef
       * @param {?} config
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _changeDetector
       * @param {?} applicationRef
       */
      function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        var _this35 = this;

        _classCallCheck(this, NgbPopover);

        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        /**
         * An event emitted when the popover is shown. Contains no payload.
         */

        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the popover is hidden. Contains no payload.
         */

        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbPopoverWindowId = "ngb-popover-".concat(nextId$3++);
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disablePopover = config.disablePopover;
        this.popoverClass = config.popoverClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this35._windowRef) {
            positionElements(_this35._elementRef.nativeElement, _this35._windowRef.location.nativeElement, _this35.placement, _this35.container === 'body', 'bs-popover');
          }
        });
      }
      /**
       * @private
       * @return {?}
       */


      _createClass(NgbPopover, [{
        key: "_isDisabled",
        value: function _isDisabled() {
          if (this.disablePopover) {
            return true;
          }

          if (!this.ngbPopover && !this.popoverTitle) {
            return true;
          }

          return false;
        }
        /**
         * Opens the popover.
         *
         * This is considered to be a "manual" triggering.
         * The `context` is an optional value to be injected into the popover template when it is created.
         * @param {?=} context
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(context) {
          var _this36 = this;

          if (!this._windowRef && !this._isDisabled()) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.context = context;
            this._windowRef.instance.popoverClass = this.popoverClass;
            this._windowRef.instance.id = this._ngbPopoverWindowId;

            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);

            if (this.container === 'body') {
              this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            } // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening popover from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception


            this._windowRef.changeDetectorRef.detectChanges(); // We need to mark for check, because popover won't work inside the OnPush component.
            // Ex. when we use expression like `{{ popover.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the popover from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.


            this._windowRef.changeDetectorRef.markForCheck();

            ngbAutoClose(this._ngZone, this._document, this.autoClose,
            /**
            * @return {?}
            */
            function () {
              return _this36.close();
            }, this.hidden, [this._windowRef.location.nativeElement]);
            this.shown.emit();
          }
        }
        /**
         * Closes the popover.
         *
         * This is considered to be a "manual" triggering of the popover.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');

            this._popupService.close();

            this._windowRef = null;
            this.hidden.emit();

            this._changeDetector.markForCheck();
          }
        }
        /**
         * Toggles the popover.
         *
         * This is considered to be a "manual" triggering of the popover.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this._windowRef) {
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * Returns `true`, if the popover is currently shown.
         * @return {?}
         */

      }, {
        key: "isOpen",
        value: function isOpen() {
          return this._windowRef != null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(_ref13) {
          var ngbPopover = _ref13.ngbPopover,
              popoverTitle = _ref13.popoverTitle,
              disablePopover = _ref13.disablePopover,
              popoverClass = _ref13.popoverClass;

          if (popoverClass && this.isOpen()) {
            this._windowRef.instance.popoverClass = popoverClass.currentValue;
          } // close popover if title and content become empty, or disablePopover set to true


          if ((ngbPopover || popoverTitle || disablePopover) && this._isDisabled()) {
            this.close();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.close(); // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
          // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199

          if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
          }

          this._zoneSubscription.unsubscribe();
        }
      }]);

      return NgbPopover;
    }();

    NgbPopover.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbPopover]',
        exportAs: 'ngbPopover'
      }]
    }];
    /** @nocollapse */

    NgbPopover.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: NgbPopoverConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }];
    };

    NgbPopover.propDecorators = {
      autoClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ngbPopover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      popoverTitle: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      triggers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disablePopover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      popoverClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbPopoverModule = function NgbPopoverModule() {
      _classCallCheck(this, NgbPopoverModule);
    };

    NgbPopoverModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbPopover, NgbPopoverWindow],
        exports: [NgbPopover],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        entryComponents: [NgbPopoverWindow]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbProgressbar`](#/components/progressbar/api#NgbProgressbar) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the progress bars used in the application.
     */

    var NgbProgressbarConfig = function NgbProgressbarConfig() {
      _classCallCheck(this, NgbProgressbarConfig);

      this.max = 100;
      this.animated = false;
      this.striped = false;
      this.showValue = false;
    };

    NgbProgressbarConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbProgressbarConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbProgressbarConfig_Factory() {
        return new NgbProgressbarConfig();
      },
      token: NgbProgressbarConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A directive that provides feedback on the progress of a workflow or an action.
     */

    var NgbProgressbar =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       */
      function NgbProgressbar(config) {
        _classCallCheck(this, NgbProgressbar);

        /**
         * The current value for the progress bar.
         *
         * Should be in the `[0, max]` range.
         */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.textType = config.textType;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
      }
      /**
       * The maximal value to be displayed in the progress bar.
       *
       * Should be a positive number. Will default to 100 otherwise.
       * @param {?} max
       * @return {?}
       */


      _createClass(NgbProgressbar, [{
        key: "getValue",

        /**
         * @return {?}
         */
        value: function getValue() {
          return getValueInRange(this.value, this.max);
        }
        /**
         * @return {?}
         */

      }, {
        key: "getPercentValue",
        value: function getPercentValue() {
          return 100 * this.getValue() / this.max;
        }
      }, {
        key: "max",
        set: function set(max) {
          this._max = !isNumber(max) || max <= 0 ? 100 : max;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._max;
        }
      }]);

      return NgbProgressbar;
    }();

    NgbProgressbar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-progressbar',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{textType ? ' text-' + textType : ''}}\n      {{animated ? ' progress-bar-animated' : ''}}{{striped ? ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n      [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\" i18n=\"@@ngb.progressbar.value\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    NgbProgressbar.ctorParameters = function () {
      return [{
        type: NgbProgressbarConfig
      }];
    };

    NgbProgressbar.propDecorators = {
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      animated: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      striped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      textType: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      height: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbProgressbarModule = function NgbProgressbarModule() {
      _classCallCheck(this, NgbProgressbarModule);
    };

    NgbProgressbarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbProgressbar],
        exports: [NgbProgressbar],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbRating`](#/components/rating/api#NgbRating) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the ratings used in the application.
     */

    var NgbRatingConfig = function NgbRatingConfig() {
      _classCallCheck(this, NgbRatingConfig);

      this.max = 10;
      this.readonly = false;
      this.resettable = false;
    };

    NgbRatingConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbRatingConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbRatingConfig_Factory() {
        return new NgbRatingConfig();
      },
      token: NgbRatingConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_RATING_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbRating;
      }),
      multi: true
    };
    /**
     * A directive that helps visualising and interacting with a star rating bar.
     */

    var NgbRating =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       * @param {?} _changeDetectorRef
       */
      function NgbRating(config, _changeDetectorRef) {
        _classCallCheck(this, NgbRating);

        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
         * An event emitted when the user is hovering over a given rating.
         *
         * Event payload equals to the rating being hovered over.
         */

        this.hover = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the user stops hovering over a given rating.
         *
         * Event payload equals to the rating of the last item being hovered over.
         */

        this.leave = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the user selects a new rating.
         *
         * Event payload equals to the newly selected rating.
         */

        this.rateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"](true);

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.max = config.max;
        this.readonly = config.readonly;
      }
      /**
       * @return {?}
       */


      _createClass(NgbRating, [{
        key: "ariaValueText",
        value: function ariaValueText() {
          return "".concat(this.nextRate, " out of ").concat(this.max);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter(value) {
          if (!this.readonly && !this.disabled) {
            this._updateState(value);
          }

          this.hover.emit(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this.onTouched();
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "handleClick",
        value: function handleClick(value) {
          if (!this.readonly && !this.disabled) {
            this.update(this.resettable && this.rate === value ? 0 : value);
          }
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          // tslint:disable-next-line:deprecation
          switch (event.which) {
            case Key.ArrowDown:
            case Key.ArrowLeft:
              this.update(this.rate - 1);
              break;

            case Key.ArrowUp:
            case Key.ArrowRight:
              this.update(this.rate + 1);
              break;

            case Key.Home:
              this.update(0);
              break;

            case Key.End:
              this.update(this.max);
              break;

            default:
              return;
          } // note 'return' in default case


          event.preventDefault();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes['rate']) {
            this.update(this.rate);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.contexts = Array.from({
            length: this.max
          },
          /**
          * @param {?} v
          * @param {?} k
          * @return {?}
          */
          function (v, k) {
            return {
              fill: 0,
              index: k
            };
          });

          this._updateState(this.rate);
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          this.leave.emit(this.nextRate);

          this._updateState(this.rate);
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @param {?} value
         * @param {?=} internalChange
         * @return {?}
         */

      }, {
        key: "update",
        value: function update(value) {
          var internalChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          /** @type {?} */
          var newRate = getValueInRange(value, this.max, 0);

          if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
          }

          if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
          }

          this._updateState(this.rate);
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.update(value, false);

          this._changeDetectorRef.markForCheck();
        }
        /**
         * @private
         * @param {?} index
         * @return {?}
         */

      }, {
        key: "_getFillValue",
        value: function _getFillValue(index) {
          /** @type {?} */
          var diff = this.nextRate - index;

          if (diff >= 1) {
            return 100;
          }

          if (diff < 1 && diff > 0) {
            return parseInt((diff * 100).toFixed(2), 10);
          }

          return 0;
        }
        /**
         * @private
         * @param {?} nextValue
         * @return {?}
         */

      }, {
        key: "_updateState",
        value: function _updateState(nextValue) {
          var _this37 = this;

          this.nextRate = nextValue;
          this.contexts.forEach(
          /**
          * @param {?} context
          * @param {?} index
          * @return {?}
          */
          function (context, index) {
            return context.fill = _this37._getFillValue(index);
          });
        }
      }]);

      return NgbRating;
    }();

    NgbRating.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-rating',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          'class': 'd-inline-flex',
          '[tabindex]': 'disabled ? -1 : 0',
          'role': 'slider',
          'aria-valuemin': '0',
          '[attr.aria-valuemax]': 'max',
          '[attr.aria-valuenow]': 'nextRate',
          '[attr.aria-valuetext]': 'ariaValueText()',
          '[attr.aria-disabled]': 'readonly ? true : null',
          '(blur)': 'handleBlur()',
          '(keydown)': 'handleKeyDown($event)',
          '(mouseleave)': 'reset()'
        },
        template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || starTemplateFromContent || t\" [ngTemplateOutletContext]=\"contexts[index]\">\n        </ng-template>\n      </span>\n    </ng-template>\n  ",
        providers: [NGB_RATING_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    NgbRating.ctorParameters = function () {
      return [{
        type: NgbRatingConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }];
    };

    NgbRating.propDecorators = {
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      rate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resettable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      starTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      starTemplateFromContent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], {
          static: false
        }]
      }],
      hover: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      leave: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      rateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbRatingModule = function NgbRatingModule() {
      _classCallCheck(this, NgbRatingModule);
    };

    NgbRatingModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbRating],
        exports: [NgbRating],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbTabset`](#/components/tabset/api#NgbTabset) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the tabsets used in the application.
     */

    var NgbTabsetConfig = function NgbTabsetConfig() {
      _classCallCheck(this, NgbTabsetConfig);

      this.justify = 'start';
      this.orientation = 'horizontal';
      this.type = 'tabs';
    };

    NgbTabsetConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbTabsetConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbTabsetConfig_Factory() {
        return new NgbTabsetConfig();
      },
      token: NgbTabsetConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nextId$4 = 0;
    /**
     * A directive to wrap tab titles that need to contain HTML markup or other directives.
     *
     * Alternatively you could use the `NgbTab.title` input for string titles.
     */

    var NgbTabTitle =
    /**
     * @param {?} templateRef
     */
    function NgbTabTitle(templateRef) {
      _classCallCheck(this, NgbTabTitle);

      this.templateRef = templateRef;
    };

    NgbTabTitle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbTabTitle]'
      }]
    }];
    /** @nocollapse */

    NgbTabTitle.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive to wrap content to be displayed in a tab.
     */


    var NgbTabContent =
    /**
     * @param {?} templateRef
     */
    function NgbTabContent(templateRef) {
      _classCallCheck(this, NgbTabContent);

      this.templateRef = templateRef;
    };

    NgbTabContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ng-template[ngbTabContent]'
      }]
    }];
    /** @nocollapse */

    NgbTabContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]
      }];
    };
    /**
     * A directive representing an individual tab.
     */


    var NgbTab =
    /*#__PURE__*/
    function () {
      function NgbTab() {
        _classCallCheck(this, NgbTab);

        /**
         * The tab identifier.
         *
         * Must be unique for the entire document for proper accessibility support.
         */
        this.id = "ngb-tab-".concat(nextId$4++);
        /**
         * If `true`, the current tab is disabled and can't be toggled.
         */

        this.disabled = false;
      }
      /**
       * @return {?}
       */


      _createClass(NgbTab, [{
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
          // only @ContentChildren allows us to specify the {descendants: false} option.
          // Without {descendants: false} we are hitting bugs described in:
          // https://github.com/ng-bootstrap/ng-bootstrap/issues/2240
          this.titleTpl = this.titleTpls.first;
          this.contentTpl = this.contentTpls.first;
        }
      }]);

      return NgbTab;
    }();

    NgbTab.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'ngb-tab'
      }]
    }];
    NgbTab.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      title: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      titleTpls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbTabTitle, {
          descendants: false
        }]
      }],
      contentTpls: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbTabContent, {
          descendants: false
        }]
      }]
    };
    /**
     * A component that makes it easy to create tabbed interface.
     */

    var NgbTabset =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} config
       */
      function NgbTabset(config) {
        _classCallCheck(this, NgbTabset);

        /**
         * If `true`, non-visible tabs content will be removed from DOM. Otherwise it will just be hidden.
         */
        this.destroyOnHide = true;
        /**
         * A tab change event emitted right before the tab change happens.
         *
         * See [`NgbTabChangeEvent`](#/components/tabset/api#NgbTabChangeEvent) for payload details.
         */

        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
      }
      /**
       * The horizontal alignment of the tabs with flexbox utilities.
       * @param {?} className
       * @return {?}
       */


      _createClass(NgbTabset, [{
        key: "select",

        /**
         * Selects the tab with the given id and shows its associated content panel.
         *
         * Any other tab that was previously selected becomes unselected and its associated pane is removed from DOM or
         * hidden depending on the `destroyOnHide` value.
         * @param {?} tabId
         * @return {?}
         */
        value: function select(tabId) {
          /** @type {?} */
          var selectedTab = this._getTabById(tabId);

          if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            /** @type {?} */
            var defaultPrevented = false;
            this.tabChange.emit({
              activeId: this.activeId,
              nextId: selectedTab.id,
              preventDefault:
              /**
              * @return {?}
              */
              function preventDefault() {
                defaultPrevented = true;
              }
            });

            if (!defaultPrevented) {
              this.activeId = selectedTab.id;
            }
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          // auto-correct activeId that might have been set incorrectly as input

          /** @type {?} */
          var activeTab = this._getTabById(this.activeId);

          this.activeId = activeTab ? activeTab.id : this.tabs.length ? this.tabs.first.id : null;
        }
        /**
         * @private
         * @param {?} id
         * @return {?}
         */

      }, {
        key: "_getTabById",
        value: function _getTabById(id) {
          /** @type {?} */
          var tabsWithId = this.tabs.filter(
          /**
          * @param {?} tab
          * @return {?}
          */
          function (tab) {
            return tab.id === id;
          });
          return tabsWithId.length ? tabsWithId[0] : null;
        }
      }, {
        key: "justify",
        set: function set(className) {
          if (className === 'fill' || className === 'justified') {
            this.justifyClass = "nav-".concat(className);
          } else {
            this.justifyClass = "justify-content-".concat(className);
          }
        }
      }]);

      return NgbTabset;
    }();

    NgbTabset.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-tabset',
        exportAs: 'ngbTabset',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"select(tab.id); $event.preventDefault()\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-selected]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl?.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
      }]
    }];
    /** @nocollapse */

    NgbTabset.ctorParameters = function () {
      return [{
        type: NgbTabsetConfig
      }];
    };

    NgbTabset.propDecorators = {
      tabs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChildren"],
        args: [NgbTab]
      }],
      activeId: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      destroyOnHide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      justify: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      orientation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tabChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_TABSET_DIRECTIVES = [NgbTabset, NgbTab, NgbTabContent, NgbTabTitle];

    var NgbTabsetModule = function NgbTabsetModule() {
      _classCallCheck(this, NgbTabsetModule);
    };

    NgbTabsetModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: NGB_TABSET_DIRECTIVES,
        exports: NGB_TABSET_DIRECTIVES,
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], NgbNavModule]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbTime =
    /*#__PURE__*/
    function () {
      /**
       * @param {?=} hour
       * @param {?=} minute
       * @param {?=} second
       */
      function NgbTime(hour, minute, second) {
        _classCallCheck(this, NgbTime);

        this.hour = toInteger(hour);
        this.minute = toInteger(minute);
        this.second = toInteger(second);
      }
      /**
       * @param {?=} step
       * @return {?}
       */


      _createClass(NgbTime, [{
        key: "changeHour",
        value: function changeHour() {
          var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
        }
        /**
         * @param {?} hour
         * @return {?}
         */

      }, {
        key: "updateHour",
        value: function updateHour(hour) {
          if (isNumber(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
          } else {
            this.hour = NaN;
          }
        }
        /**
         * @param {?=} step
         * @return {?}
         */

      }, {
        key: "changeMinute",
        value: function changeMinute() {
          var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
        }
        /**
         * @param {?} minute
         * @return {?}
         */

      }, {
        key: "updateMinute",
        value: function updateMinute(minute) {
          if (isNumber(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
          } else {
            this.minute = NaN;
          }
        }
        /**
         * @param {?=} step
         * @return {?}
         */

      }, {
        key: "changeSecond",
        value: function changeSecond() {
          var step = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
        }
        /**
         * @param {?} second
         * @return {?}
         */

      }, {
        key: "updateSecond",
        value: function updateSecond(second) {
          if (isNumber(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
          } else {
            this.second = NaN;
          }
        }
        /**
         * @param {?=} checkSecs
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid() {
          var checkSecs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
          return isNumber(this.hour) && isNumber(this.minute) && (checkSecs ? isNumber(this.second) : true);
        }
        /**
         * @return {?}
         */

      }, {
        key: "toString",
        value: function toString() {
          return "".concat(this.hour || 0, ":").concat(this.minute || 0, ":").concat(this.second || 0);
        }
      }]);

      return NgbTime;
    }();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbTimepicker`](#/components/timepicker/api#NgbTimepicker) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the timepickers used in the application.
     */


    var NgbTimepickerConfig = function NgbTimepickerConfig() {
      _classCallCheck(this, NgbTimepickerConfig);

      this.meridian = false;
      this.spinners = true;
      this.seconds = false;
      this.hourStep = 1;
      this.minuteStep = 1;
      this.secondStep = 1;
      this.disabled = false;
      this.readonlyInputs = false;
      this.size = 'medium';
    };

    NgbTimepickerConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbTimepickerConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbTimepickerConfig_Factory() {
        return new NgbTimepickerConfig();
      },
      token: NgbTimepickerConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @return {?}
     */

    function NGB_DATEPICKER_TIME_ADAPTER_FACTORY() {
      return new NgbTimeStructAdapter();
    }
    /**
     * An abstract service that does the conversion between the internal timepicker `NgbTimeStruct` model and
     * any provided user time model `T`, ex. a string, a native date, etc.
     *
     * The adapter is used **only** for conversion when binding timepicker to a form control,
     * ex. `[(ngModel)]="userTimeModel"`. Here `userTimeModel` can be of any type.
     *
     * The default timepicker implementation assumes we use `NgbTimeStruct` as a user model.
     *
     * See the [custom time adapter demo](#/components/timepicker/examples#adapter) for an example.
     *
     * \@since 2.2.0
     * @abstract
     * @template T
     */


    var NgbTimeAdapter = function NgbTimeAdapter() {
      _classCallCheck(this, NgbTimeAdapter);
    };

    NgbTimeAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root',
        useFactory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY
      }]
    }];
    /** @nocollapse */

    NgbTimeAdapter.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: NGB_DATEPICKER_TIME_ADAPTER_FACTORY,
      token: NgbTimeAdapter,
      providedIn: "root"
    });

    var NgbTimeStructAdapter =
    /*#__PURE__*/
    function (_NgbTimeAdapter) {
      _inherits(NgbTimeStructAdapter, _NgbTimeAdapter);

      function NgbTimeStructAdapter() {
        _classCallCheck(this, NgbTimeStructAdapter);

        return _possibleConstructorReturn(this, _getPrototypeOf(NgbTimeStructAdapter).apply(this, arguments));
      }

      _createClass(NgbTimeStructAdapter, [{
        key: "fromModel",

        /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         * @param {?} time
         * @return {?}
         */
        value: function fromModel(time) {
          return time && isInteger(time.hour) && isInteger(time.minute) ? {
            hour: time.hour,
            minute: time.minute,
            second: isInteger(time.second) ? time.second : null
          } : null;
        }
        /**
         * Converts a NgbTimeStruct value into NgbTimeStruct value
         * @param {?} time
         * @return {?}
         */

      }, {
        key: "toModel",
        value: function toModel(time) {
          return time && isInteger(time.hour) && isInteger(time.minute) ? {
            hour: time.hour,
            minute: time.minute,
            second: isInteger(time.second) ? time.second : null
          } : null;
        }
      }]);

      return NgbTimeStructAdapter;
    }(NgbTimeAdapter);

    NgbTimeStructAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @param {?} locale
     * @return {?}
     */

    function NGB_TIMEPICKER_I18N_FACTORY(locale) {
      return new NgbTimepickerI18nDefault(locale);
    }
    /**
     * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
     * The default implementation of this service honors the Angular locale, and uses the registered locale data,
     * as explained in the Angular i18n guide.
     * @abstract
     */


    var NgbTimepickerI18n = function NgbTimepickerI18n() {
      _classCallCheck(this, NgbTimepickerI18n);
    };

    NgbTimepickerI18n.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root',
        useFactory: NGB_TIMEPICKER_I18N_FACTORY,
        deps: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
      }]
    }];
    /** @nocollapse */

    NgbTimepickerI18n.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbTimepickerI18n_Factory() {
        return NGB_TIMEPICKER_I18N_FACTORY(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]));
      },
      token: NgbTimepickerI18n,
      providedIn: "root"
    });

    var NgbTimepickerI18nDefault =
    /*#__PURE__*/
    function (_NgbTimepickerI18n) {
      _inherits(NgbTimepickerI18nDefault, _NgbTimepickerI18n);

      /**
       * @param {?} locale
       */
      function NgbTimepickerI18nDefault(locale) {
        var _this38;

        _classCallCheck(this, NgbTimepickerI18nDefault);

        _this38 = _possibleConstructorReturn(this, _getPrototypeOf(NgbTimepickerI18nDefault).call(this));
        _this38._periods = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["getLocaleDayPeriods"])(locale, _angular_common__WEBPACK_IMPORTED_MODULE_1__["FormStyle"].Standalone, _angular_common__WEBPACK_IMPORTED_MODULE_1__["TranslationWidth"].Narrow);
        return _this38;
      }
      /**
       * @return {?}
       */


      _createClass(NgbTimepickerI18nDefault, [{
        key: "getMorningPeriod",
        value: function getMorningPeriod() {
          return this._periods[0];
        }
        /**
         * @return {?}
         */

      }, {
        key: "getAfternoonPeriod",
        value: function getAfternoonPeriod() {
          return this._periods[1];
        }
      }]);

      return NgbTimepickerI18nDefault;
    }(NgbTimepickerI18n);

    NgbTimepickerI18nDefault.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    NgbTimepickerI18nDefault.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]
        }]
      }];
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var FILTER_REGEX = /[^0-9]/g;
    /** @type {?} */

    var NGB_TIMEPICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbTimepicker;
      }),
      multi: true
    };
    /**
     * A directive that helps with wth picking hours, minutes and seconds.
     */

    var NgbTimepicker =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _config
       * @param {?} _ngbTimeAdapter
       * @param {?} _cd
       * @param {?} i18n
       */
      function NgbTimepicker(_config, _ngbTimeAdapter, _cd, i18n) {
        _classCallCheck(this, NgbTimepicker);

        this._config = _config;
        this._ngbTimeAdapter = _ngbTimeAdapter;
        this._cd = _cd;
        this.i18n = i18n;

        this.onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.onTouched =
        /**
        * @return {?}
        */
        function () {};

        this.meridian = _config.meridian;
        this.spinners = _config.spinners;
        this.seconds = _config.seconds;
        this.hourStep = _config.hourStep;
        this.minuteStep = _config.minuteStep;
        this.secondStep = _config.secondStep;
        this.disabled = _config.disabled;
        this.readonlyInputs = _config.readonlyInputs;
        this.size = _config.size;
      }
      /**
       * The number of hours to add/subtract when clicking hour spinners.
       * @param {?} step
       * @return {?}
       */


      _createClass(NgbTimepicker, [{
        key: "writeValue",

        /**
         * @param {?} value
         * @return {?}
         */
        value: function writeValue(value) {
          /** @type {?} */
          var structValue = this._ngbTimeAdapter.fromModel(value);

          this.model = structValue ? new NgbTime(structValue.hour, structValue.minute, structValue.second) : new NgbTime();

          if (!this.seconds && (!structValue || !isNumber(structValue.second))) {
            this.model.second = 0;
          }

          this._cd.markForCheck();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @param {?} step
         * @return {?}
         */

      }, {
        key: "changeHour",
        value: function changeHour(step) {
          this.model.changeHour(step);
          this.propagateModelChange();
        }
        /**
         * @param {?} step
         * @return {?}
         */

      }, {
        key: "changeMinute",
        value: function changeMinute(step) {
          this.model.changeMinute(step);
          this.propagateModelChange();
        }
        /**
         * @param {?} step
         * @return {?}
         */

      }, {
        key: "changeSecond",
        value: function changeSecond(step) {
          this.model.changeSecond(step);
          this.propagateModelChange();
        }
        /**
         * @param {?} newVal
         * @return {?}
         */

      }, {
        key: "updateHour",
        value: function updateHour(newVal) {
          /** @type {?} */
          var isPM = this.model.hour >= 12;
          /** @type {?} */

          var enteredHour = toInteger(newVal);

          if (this.meridian && (isPM && enteredHour < 12 || !isPM && enteredHour === 12)) {
            this.model.updateHour(enteredHour + 12);
          } else {
            this.model.updateHour(enteredHour);
          }

          this.propagateModelChange();
        }
        /**
         * @param {?} newVal
         * @return {?}
         */

      }, {
        key: "updateMinute",
        value: function updateMinute(newVal) {
          this.model.updateMinute(toInteger(newVal));
          this.propagateModelChange();
        }
        /**
         * @param {?} newVal
         * @return {?}
         */

      }, {
        key: "updateSecond",
        value: function updateSecond(newVal) {
          this.model.updateSecond(toInteger(newVal));
          this.propagateModelChange();
        }
        /**
         * @return {?}
         */

      }, {
        key: "toggleMeridian",
        value: function toggleMeridian() {
          if (this.meridian) {
            this.changeHour(12);
          }
        }
        /**
         * @param {?} input
         * @return {?}
         */

      }, {
        key: "formatInput",
        value: function formatInput(input) {
          input.value = input.value.replace(FILTER_REGEX, '');
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "formatHour",
        value: function formatHour(value) {
          if (isNumber(value)) {
            if (this.meridian) {
              return padNumber(value % 12 === 0 ? 12 : value % 12);
            } else {
              return padNumber(value % 24);
            }
          } else {
            return padNumber(NaN);
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "formatMinSec",
        value: function formatMinSec(value) {
          return padNumber(value);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes['seconds'] && !this.seconds && this.model && !isNumber(this.model.second)) {
            this.model.second = 0;
            this.propagateModelChange(false);
          }
        }
        /**
         * @private
         * @param {?=} touched
         * @return {?}
         */

      }, {
        key: "propagateModelChange",
        value: function propagateModelChange() {
          var touched = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

          if (touched) {
            this.onTouched();
          }

          if (this.model.isValid(this.seconds)) {
            this.onChange(this._ngbTimeAdapter.toModel({
              hour: this.model.hour,
              minute: this.model.minute,
              second: this.model.second
            }));
          } else {
            this.onChange(this._ngbTimeAdapter.toModel(null));
          }
        }
      }, {
        key: "hourStep",
        set: function set(step) {
          this._hourStep = isInteger(step) ? step : this._config.hourStep;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._hourStep;
        }
        /**
         * The number of minutes to add/subtract when clicking minute spinners.
         * @param {?} step
         * @return {?}
         */

      }, {
        key: "minuteStep",
        set: function set(step) {
          this._minuteStep = isInteger(step) ? step : this._config.minuteStep;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._minuteStep;
        }
        /**
         * The number of seconds to add/subtract when clicking second spinners.
         * @param {?} step
         * @return {?}
         */

      }, {
        key: "secondStep",
        set: function set(step) {
          this._secondStep = isInteger(step) ? step : this._config.secondStep;
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._secondStep;
        }
      }, {
        key: "isSmallSize",
        get: function get() {
          return this.size === 'small';
        }
        /**
         * @return {?}
         */

      }, {
        key: "isLargeSize",
        get: function get() {
          return this.size === 'large';
        }
      }]);

      return NgbTimepicker;
    }();

    NgbTimepicker.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-timepicker',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "\n    <fieldset [disabled]=\"disabled\" [class.disabled]=\"disabled\">\n      <div class=\"ngb-tp\">\n        <div class=\"ngb-tp-input-container ngb-tp-hour\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-hours\">Increment hours</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\"\n            [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" inputmode=\"numeric\" placeholder=\"HH\" i18n-placeholder=\"@@ngb.timepicker.HH\"\n            [value]=\"formatHour(model?.hour)\" (change)=\"updateHour($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Hours\" i18n-aria-label=\"@@ngb.timepicker.hours\"\n            (input)=\"formatInput($event.target)\"\n            (keydown.ArrowUp)=\"changeHour(hourStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeHour(-hourStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeHour(-hourStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-hours\">Decrement hours</span>\n          </button>\n        </div>\n        <div class=\"ngb-tp-spacer\">:</div>\n        <div class=\"ngb-tp-input-container ngb-tp-minute\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-minutes\">Increment minutes</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" inputmode=\"numeric\" placeholder=\"MM\" i18n-placeholder=\"@@ngb.timepicker.MM\"\n            [value]=\"formatMinSec(model?.minute)\" (change)=\"updateMinute($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Minutes\" i18n-aria-label=\"@@ngb.timepicker.minutes\"\n            (input)=\"formatInput($event.target)\"\n            (keydown.ArrowUp)=\"changeMinute(minuteStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeMinute(-minuteStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeMinute(-minuteStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\"  i18n=\"@@ngb.timepicker.decrement-minutes\">Decrement minutes</span>\n          </button>\n        </div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-spacer\">:</div>\n        <div *ngIf=\"seconds\" class=\"ngb-tp-input-container ngb-tp-second\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\" [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.increment-seconds\">Increment seconds</span>\n          </button>\n          <input type=\"text\" class=\"ngb-tp-input form-control\" [class.form-control-sm]=\"isSmallSize\" [class.form-control-lg]=\"isLargeSize\"\n            maxlength=\"2\" inputmode=\"numeric\" placeholder=\"SS\" i18n-placeholder=\"@@ngb.timepicker.SS\"\n            [value]=\"formatMinSec(model?.second)\" (change)=\"updateSecond($event.target.value)\"\n            [readOnly]=\"readonlyInputs\" [disabled]=\"disabled\" aria-label=\"Seconds\" i18n-aria-label=\"@@ngb.timepicker.seconds\"\n            (input)=\"formatInput($event.target)\"\n            (keydown.ArrowUp)=\"changeSecond(secondStep); $event.preventDefault()\"\n            (keydown.ArrowDown)=\"changeSecond(-secondStep); $event.preventDefault()\">\n          <button *ngIf=\"spinners\" tabindex=\"-1\" type=\"button\" (click)=\"changeSecond(-secondStep)\"\n            class=\"btn btn-link\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"  [class.disabled]=\"disabled\"\n            [disabled]=\"disabled\">\n            <span class=\"chevron ngb-tp-chevron bottom\"></span>\n            <span class=\"sr-only\" i18n=\"@@ngb.timepicker.decrement-seconds\">Decrement seconds</span>\n          </button>\n        </div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-spacer\"></div>\n        <div *ngIf=\"meridian\" class=\"ngb-tp-meridian\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" [class.btn-sm]=\"isSmallSize\" [class.btn-lg]=\"isLargeSize\"\n            [disabled]=\"disabled\" [class.disabled]=\"disabled\"\n                  (click)=\"toggleMeridian()\">\n            <ng-container *ngIf=\"model?.hour >= 12; else am\" i18n=\"@@ngb.timepicker.PM\">{{ i18n.getAfternoonPeriod() }}</ng-container>\n            <ng-template #am i18n=\"@@ngb.timepicker.AM\">{{ i18n.getMorningPeriod() }}</ng-template>\n          </button>\n        </div>\n      </div>\n    </fieldset>\n  ",
        providers: [NGB_TIMEPICKER_VALUE_ACCESSOR],
        styles: ["ngb-timepicker{font-size:1rem}.ngb-tp{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.ngb-tp-input-container{width:4em}.ngb-tp-chevron::before{border-style:solid;border-width:.29em .29em 0 0;content:\"\";display:inline-block;height:.69em;left:.05em;position:relative;top:.15em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);vertical-align:middle;width:.69em}.ngb-tp-chevron.bottom:before{top:-.3em;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.ngb-tp-input{text-align:center}.ngb-tp-hour,.ngb-tp-meridian,.ngb-tp-minute,.ngb-tp-second{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around}.ngb-tp-spacer{width:1em;text-align:center}"]
      }]
    }];
    /** @nocollapse */

    NgbTimepicker.ctorParameters = function () {
      return [{
        type: NgbTimepickerConfig
      }, {
        type: NgbTimeAdapter
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: NgbTimepickerI18n
      }];
    };

    NgbTimepicker.propDecorators = {
      meridian: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      spinners: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      seconds: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      hourStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      minuteStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      secondStep: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      readonlyInputs: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      size: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbTimepickerModule = function NgbTimepickerModule() {
      _classCallCheck(this, NgbTimepickerModule);
    };

    NgbTimepickerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbTimepicker],
        exports: [NgbTimepicker],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Configuration service for the NgbToast component. You can inject this service, typically in your root component,
     * and customize the values of its properties in order to provide default values for all the toasts used in the
     * application.
     *
     * \@since 5.0.0
     */

    var NgbToastConfig = function NgbToastConfig() {
      _classCallCheck(this, NgbToastConfig);

      this.autohide = true;
      this.delay = 500;
      this.ariaLive = 'polite';
    };

    NgbToastConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbToastConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbToastConfig_Factory() {
        return new NgbToastConfig();
      },
      token: NgbToastConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This directive allows the usage of HTML markup or other directives
     * inside of the toast's header.
     *
     * \@since 5.0.0
     */

    var NgbToastHeader = function NgbToastHeader() {
      _classCallCheck(this, NgbToastHeader);
    };

    NgbToastHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbToastHeader]'
      }]
    }];
    /**
     * Toasts provide feedback messages as notifications to the user.
     * Goal is to mimic the push notifications available both on mobile and desktop operating systems.
     *
     * \@since 5.0.0
     */

    var NgbToast =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} ariaLive
       * @param {?} config
       */
      function NgbToast(ariaLive, config) {
        _classCallCheck(this, NgbToast);

        this.ariaLive = ariaLive;
        /**
         * A template like `<ng-template ngbToastHeader></ng-template>` can be
         * used in the projected content to allow markup usage.
         */

        this.contentHeaderTpl = null;
        /**
         * An event fired immediately when toast's `hide()` method has been called.
         * It can only occur in 2 different scenarios:
         * - `autohide` timeout fires
         * - user clicks on a closing cross (&times)
         *
         * Additionally this output is purely informative. The toast won't disappear. It's up to the user to take care of
         * that.
         */

        this.hideOutput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();

        if (this.ariaLive == null) {
          this.ariaLive = config.ariaLive;
        }

        this.delay = config.delay;
        this.autohide = config.autohide;
      }
      /**
       * @return {?}
       */


      _createClass(NgbToast, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._init();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if ('autohide' in changes) {
            this._clearTimeout();

            this._init();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          this._clearTimeout();

          this.hideOutput.emit();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          var _this39 = this;

          if (this.autohide && !this._timeoutID) {
            this._timeoutID = setTimeout(
            /**
            * @return {?}
            */
            function () {
              return _this39.hide();
            }, this.delay);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_clearTimeout",
        value: function _clearTimeout() {
          if (this._timeoutID) {
            clearTimeout(this._timeoutID);
            this._timeoutID = null;
          }
        }
      }]);

      return NgbToast;
    }();

    NgbToast.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-toast',
        exportAs: 'ngbToast',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          'role': 'alert',
          '[attr.aria-live]': 'ariaLive',
          'aria-atomic': 'true',
          '[class.toast]': 'true',
          '[class.show]': 'true'
        },
        template: "\n    <ng-template #headerTpl>\n      <strong class=\"mr-auto\">{{header}}</strong>\n    </ng-template>\n    <ng-template [ngIf]=\"contentHeaderTpl || header\">\n      <div class=\"toast-header\">\n        <ng-template [ngTemplateOutlet]=\"contentHeaderTpl || headerTpl\"></ng-template>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" i18n-aria-label=\"@@ngb.toast.close-aria\" (click)=\"hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n    </ng-template>\n    <div class=\"toast-body\">\n      <ng-content></ng-content>\n    </div>\n  ",
        styles: [".ngb-toasts{position:fixed;top:0;right:0;margin:.5em;z-index:1200}ngb-toast .toast-header .close{margin-left:auto;margin-bottom:.25rem}"]
      }]
    }];
    /** @nocollapse */

    NgbToast.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Attribute"],
          args: ['aria-live']
        }]
      }, {
        type: NgbToastConfig
      }];
    };

    NgbToast.propDecorators = {
      delay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      autohide: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      header: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      contentHeaderTpl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"],
        args: [NgbToastHeader, {
          read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"],
          static: true
        }]
      }],
      hideOutput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['hide']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbToastModule = function NgbToastModule() {
      _classCallCheck(this, NgbToastModule);
    };

    NgbToastModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbToast, NgbToastHeader],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        exports: [NgbToast, NgbToastHeader]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbTooltip`](#/components/tooltip/api#NgbTooltip) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the tooltips used in the application.
     */

    var NgbTooltipConfig = function NgbTooltipConfig() {
      _classCallCheck(this, NgbTooltipConfig);

      this.autoClose = true;
      this.placement = 'auto';
      this.triggers = 'hover focus';
      this.disableTooltip = false;
      this.openDelay = 0;
      this.closeDelay = 0;
    };

    NgbTooltipConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbTooltipConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbTooltipConfig_Factory() {
        return new NgbTooltipConfig();
      },
      token: NgbTooltipConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nextId$5 = 0;

    var NgbTooltipWindow = function NgbTooltipWindow() {
      _classCallCheck(this, NgbTooltipWindow);
    };

    NgbTooltipWindow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-tooltip-window',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          '[class]': '"tooltip show" + (tooltipClass ? " " + tooltipClass : "")',
          'role': 'tooltip',
          '[id]': 'id'
        },
        template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
        styles: ["ngb-tooltip-window.bs-tooltip-bottom .arrow,ngb-tooltip-window.bs-tooltip-top .arrow{left:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-bottom-left .arrow,ngb-tooltip-window.bs-tooltip-top-left .arrow{left:1em}ngb-tooltip-window.bs-tooltip-bottom-right .arrow,ngb-tooltip-window.bs-tooltip-top-right .arrow{left:auto;right:.8rem}ngb-tooltip-window.bs-tooltip-left .arrow,ngb-tooltip-window.bs-tooltip-right .arrow{top:calc(50% - .4rem)}ngb-tooltip-window.bs-tooltip-left-top .arrow,ngb-tooltip-window.bs-tooltip-right-top .arrow{top:.4rem}ngb-tooltip-window.bs-tooltip-left-bottom .arrow,ngb-tooltip-window.bs-tooltip-right-bottom .arrow{top:auto;bottom:.4rem}"]
      }]
    }];
    NgbTooltipWindow.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * A lightweight and extensible directive for fancy tooltip creation.
     */

    var NgbTooltip =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _renderer
       * @param {?} injector
       * @param {?} componentFactoryResolver
       * @param {?} viewContainerRef
       * @param {?} config
       * @param {?} _ngZone
       * @param {?} _document
       * @param {?} _changeDetector
       * @param {?} applicationRef
       */
      function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, _ngZone, _document, _changeDetector, applicationRef) {
        var _this40 = this;

        _classCallCheck(this, NgbTooltip);

        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._ngZone = _ngZone;
        this._document = _document;
        this._changeDetector = _changeDetector;
        /**
         * An event emitted when the tooltip is shown. Contains no payload.
         */

        this.shown = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * An event emitted when the popover is hidden. Contains no payload.
         */

        this.hidden = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._ngbTooltipWindowId = "ngb-tooltip-".concat(nextId$5++);
        this.autoClose = config.autoClose;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this.disableTooltip = config.disableTooltip;
        this.tooltipClass = config.tooltipClass;
        this.openDelay = config.openDelay;
        this.closeDelay = config.closeDelay;
        this._popupService = new PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, applicationRef);
        this._zoneSubscription = _ngZone.onStable.subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this40._windowRef) {
            positionElements(_this40._elementRef.nativeElement, _this40._windowRef.location.nativeElement, _this40.placement, _this40.container === 'body', 'bs-tooltip');
          }
        });
      }
      /**
       * The string content or a `TemplateRef` for the content to be displayed in the tooltip.
       *
       * If the content if falsy, the tooltip won't open.
       * @param {?} value
       * @return {?}
       */


      _createClass(NgbTooltip, [{
        key: "open",

        /**
         * Opens the tooltip.
         *
         * This is considered to be a "manual" triggering.
         * The `context` is an optional value to be injected into the tooltip template when it is created.
         * @param {?=} context
         * @return {?}
         */
        value: function open(context) {
          var _this41 = this;

          if (!this._windowRef && this._ngbTooltip && !this.disableTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.tooltipClass = this.tooltipClass;
            this._windowRef.instance.id = this._ngbTooltipWindowId;

            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);

            if (this.container === 'body') {
              this._document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            } // We need to detect changes, because we don't know where .open() might be called from.
            // Ex. opening tooltip from one of lifecycle hooks that run after the CD
            // (say from ngAfterViewInit) will result in 'ExpressionHasChanged' exception


            this._windowRef.changeDetectorRef.detectChanges(); // We need to mark for check, because tooltip won't work inside the OnPush component.
            // Ex. when we use expression like `{{ tooltip.isOpen() : 'opened' : 'closed' }}`
            // inside the template of an OnPush component and we change the tooltip from
            // open -> closed, the expression in question won't be updated unless we explicitly
            // mark the parent component to be checked.


            this._windowRef.changeDetectorRef.markForCheck();

            ngbAutoClose(this._ngZone, this._document, this.autoClose,
            /**
            * @return {?}
            */
            function () {
              return _this41.close();
            }, this.hidden, [this._windowRef.location.nativeElement]);
            this.shown.emit();
          }
        }
        /**
         * Closes the tooltip.
         *
         * This is considered to be a "manual" triggering of the tooltip.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');

            this._popupService.close();

            this._windowRef = null;
            this.hidden.emit();

            this._changeDetector.markForCheck();
          }
        }
        /**
         * Toggles the tooltip.
         *
         * This is considered to be a "manual" triggering of the tooltip.
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          if (this._windowRef) {
            this.close();
          } else {
            this.open();
          }
        }
        /**
         * Returns `true`, if the popover is currently shown.
         * @return {?}
         */

      }, {
        key: "isOpen",
        value: function isOpen() {
          return this._windowRef != null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this._unregisterListenersFn = listenToTriggers(this._renderer, this._elementRef.nativeElement, this.triggers, this.isOpen.bind(this), this.open.bind(this), this.close.bind(this), +this.openDelay, +this.closeDelay);
        }
        /**
         * @param {?} __0
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(_ref14) {
          var tooltipClass = _ref14.tooltipClass;

          if (tooltipClass && this.isOpen()) {
            this._windowRef.instance.tooltipClass = tooltipClass.currentValue;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.close(); // This check is needed as it might happen that ngOnDestroy is called before ngOnInit
          // under certain conditions, see: https://github.com/ng-bootstrap/ng-bootstrap/issues/2199

          if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
          }

          this._zoneSubscription.unsubscribe();
        }
      }, {
        key: "ngbTooltip",
        set: function set(value) {
          this._ngbTooltip = value;

          if (!value && this._windowRef) {
            this.close();
          }
        }
        /**
         * @return {?}
         */
        ,
        get: function get() {
          return this._ngbTooltip;
        }
      }]);

      return NgbTooltip;
    }();

    NgbTooltip.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: '[ngbTooltip]',
        exportAs: 'ngbTooltip'
      }]
    }];
    /** @nocollapse */

    NgbTooltip.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: NgbTooltipConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }];
    };

    NgbTooltip.propDecorators = {
      autoClose: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      triggers: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      disableTooltip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      tooltipClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      openDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      closeDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      shown: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      hidden: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      ngbTooltip: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbTooltipModule = function NgbTooltipModule() {
      _classCallCheck(this, NgbTooltipModule);
    };

    NgbTooltipModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbTooltip, NgbTooltipWindow],
        exports: [NgbTooltip],
        entryComponents: [NgbTooltipWindow]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A component that helps with text highlighting.
     *
     * If splits the `result` text into parts that contain the searched `term` and generates the HTML markup to simplify
     * highlighting:
     *
     * Ex. `result="Alaska"` and `term="as"` will produce `Al<span class="ngb-highlight">as</span>ka`.
     */

    var NgbHighlight =
    /*#__PURE__*/
    function () {
      function NgbHighlight() {
        _classCallCheck(this, NgbHighlight);

        /**
         * The CSS class for `<span>` elements wrapping the `term` inside the `result`.
         */
        this.highlightClass = 'ngb-highlight';
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass(NgbHighlight, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var result = toString(this.result);
          /** @type {?} */

          var terms = Array.isArray(this.term) ? this.term : [this.term];
          /** @type {?} */

          var escapedTerms = terms.map(
          /**
          * @param {?} term
          * @return {?}
          */
          function (term) {
            return regExpEscape(toString(term));
          }).filter(
          /**
          * @param {?} term
          * @return {?}
          */
          function (term) {
            return term;
          });
          this.parts = escapedTerms.length ? result.split(new RegExp("(".concat(escapedTerms.join('|'), ")"), 'gmi')) : [result];
        }
      }]);

      return NgbHighlight;
    }();

    NgbHighlight.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-highlight',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" + "<span *ngIf=\"isOdd; else even\" [class]=\"highlightClass\">{{part}}</span><ng-template #even>{{part}}</ng-template>" + "</ng-template>",
        styles: [".ngb-highlight{font-weight:700}"]
      }]
    }];
    NgbHighlight.propDecorators = {
      highlightClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      result: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      term: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbTypeaheadWindow =
    /*#__PURE__*/
    function () {
      function NgbTypeaheadWindow() {
        _classCallCheck(this, NgbTypeaheadWindow);

        this.activeIdx = 0;
        /**
         * Flag indicating if the first row should be active initially
         */

        this.focusFirst = true;
        /**
         * A function used to format a given result before display. This function should return a formatted string without any
         * HTML markup
         */

        this.formatter = toString;
        /**
         * Event raised when user selects a particular result row
         */

        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.activeChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(NgbTypeaheadWindow, [{
        key: "hasActive",
        value: function hasActive() {
          return this.activeIdx > -1 && this.activeIdx < this.results.length;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getActive",
        value: function getActive() {
          return this.results[this.activeIdx];
        }
        /**
         * @param {?} activeIdx
         * @return {?}
         */

      }, {
        key: "markActive",
        value: function markActive(activeIdx) {
          this.activeIdx = activeIdx;

          this._activeChanged();
        }
        /**
         * @return {?}
         */

      }, {
        key: "next",
        value: function next() {
          if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
          } else {
            this.activeIdx++;
          }

          this._activeChanged();
        }
        /**
         * @return {?}
         */

      }, {
        key: "prev",
        value: function prev() {
          if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
          } else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
          } else {
            this.activeIdx--;
          }

          this._activeChanged();
        }
        /**
         * @return {?}
         */

      }, {
        key: "resetActive",
        value: function resetActive() {
          this.activeIdx = this.focusFirst ? 0 : -1;

          this._activeChanged();
        }
        /**
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(item) {
          this.selectEvent.emit(item);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.resetActive();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_activeChanged",
        value: function _activeChanged() {
          this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
        }
      }]);

      return NgbTypeaheadWindow;
    }();

    NgbTypeaheadWindow.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngb-typeahead-window',
        exportAs: 'ngbTypeaheadWindow',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        host: {
          '(mousedown)': '$event.preventDefault()',
          'class': 'dropdown-menu show',
          'role': 'listbox',
          '[id]': 'id'
        },
        template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
      }]
    }];
    NgbTypeaheadWindow.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focusFirst: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      results: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      term: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      formatter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resultTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['select']
      }],
      activeChangeEvent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
        args: ['activeChange']
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var ARIA_LIVE_DELAY = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('live announcer delay', {
      providedIn: 'root',
      factory: ARIA_LIVE_DELAY_FACTORY
    });
    /**
     * @return {?}
     */

    function ARIA_LIVE_DELAY_FACTORY() {
      return 100;
    }
    /**
     * @param {?} document
     * @param {?=} lazyCreate
     * @return {?}
     */


    function getLiveElement(document) {
      var lazyCreate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      /** @type {?} */
      var element =
      /** @type {?} */
      document.body.querySelector('#ngb-live');

      if (element == null && lazyCreate) {
        element = document.createElement('div');
        element.setAttribute('id', 'ngb-live');
        element.setAttribute('aria-live', 'polite');
        element.setAttribute('aria-atomic', 'true');
        element.classList.add('sr-only');
        document.body.appendChild(element);
      }

      return element;
    }

    var Live =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _document
       * @param {?} _delay
       */
      function Live(_document, _delay) {
        _classCallCheck(this, Live);

        this._document = _document;
        this._delay = _delay;
      }
      /**
       * @return {?}
       */


      _createClass(Live, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var element = getLiveElement(this._document);

          if (element) {
            element.parentElement.removeChild(element);
          }
        }
        /**
         * @param {?} message
         * @return {?}
         */

      }, {
        key: "say",
        value: function say(message) {
          /** @type {?} */
          var element = getLiveElement(this._document, true);
          /** @type {?} */

          var delay = this._delay;
          element.textContent = '';
          /** @type {?} */

          var setText =
          /**
          * @return {?}
          */
          function setText() {
            return element.textContent = message;
          };

          if (delay === null) {
            setText();
          } else {
            setTimeout(setText, delay);
          }
        }
      }]);

      return Live;
    }();

    Live.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    Live.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [ARIA_LIVE_DELAY]
        }]
      }];
    };
    /** @nocollapse */


    Live.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function Live_Factory() {
        return new Live(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(ARIA_LIVE_DELAY));
      },
      token: Live,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A configuration service for the [`NgbTypeahead`](#/components/typeahead/api#NgbTypeahead) component.
     *
     * You can inject this service, typically in your root component, and customize the values of its properties in
     * order to provide default values for all the typeaheads used in the application.
     */

    var NgbTypeaheadConfig = function NgbTypeaheadConfig() {
      _classCallCheck(this, NgbTypeaheadConfig);

      this.editable = true;
      this.focusFirst = true;
      this.showHint = false;
      this.placement = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
    };

    NgbTypeaheadConfig.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    NgbTypeaheadConfig.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function NgbTypeaheadConfig_Factory() {
        return new NgbTypeaheadConfig();
      },
      token: NgbTypeaheadConfig,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_TYPEAHEAD_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return NgbTypeahead;
      }),
      multi: true
    };
    /** @type {?} */

    var nextWindowId = 0;
    /**
     * A directive providing a simple way of creating powerful typeaheads from any text input.
     */

    var NgbTypeahead =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} viewContainerRef
       * @param {?} _renderer
       * @param {?} injector
       * @param {?} componentFactoryResolver
       * @param {?} config
       * @param {?} ngZone
       * @param {?} _live
       * @param {?} _document
       * @param {?} _ngZone
       * @param {?} _changeDetector
       * @param {?} applicationRef
       */
      function NgbTypeahead(_elementRef, viewContainerRef, _renderer, injector, componentFactoryResolver, config, ngZone, _live, _document, _ngZone, _changeDetector, applicationRef) {
        var _this42 = this;

        _classCallCheck(this, NgbTypeahead);

        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._live = _live;
        this._document = _document;
        this._ngZone = _ngZone;
        this._changeDetector = _changeDetector;
        this._closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * The value for the `autocomplete` attribute for the `<input>` element.
         *
         * Defaults to `"off"` to disable the native browser autocomplete, but you can override it if necessary.
         *
         * \@since 2.1.0
         */

        this.autocomplete = 'off';
        /**
         * The preferred placement of the typeahead.
         *
         * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
         * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
         * `"right-bottom"`
         *
         * Accepts an array of strings or a string with space separated possible values.
         *
         * The default order of preference is `"bottom-left bottom-right top-left top-right"`
         *
         * Please see the [positioning overview](#/positioning) for more details.
         */

        this.placement = 'bottom-left';
        /**
         * An event emitted right before an item is selected from the result list.
         *
         * Event payload is of type [`NgbTypeaheadSelectItemEvent`](#/components/typeahead/api#NgbTypeaheadSelectItemEvent).
         */

        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.popupId = "ngb-typeahead-".concat(nextWindowId++);

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._onChange =
        /**
        * @param {?} _
        * @return {?}
        */
        function (_) {};

        this.container = config.container;
        this.editable = config.editable;
        this.focusFirst = config.focusFirst;
        this.showHint = config.showHint;
        this.placement = config.placement;
        this._valueChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(_elementRef.nativeElement, 'input').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(
        /**
        * @param {?} $event
        * @return {?}
        */
        function ($event) {
          return (
            /** @type {?} */
            $event.target.value
          );
        }));
        this._resubscribeTypeahead = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this._popupService = new PopupService(NgbTypeaheadWindow, injector, viewContainerRef, _renderer, componentFactoryResolver, applicationRef);
        this._zoneSubscription = ngZone.onStable.subscribe(
        /**
        * @return {?}
        */
        function () {
          if (_this42.isPopupOpen()) {
            positionElements(_this42._elementRef.nativeElement, _this42._windowRef.location.nativeElement, _this42.placement, _this42.container === 'body');
          }
        });
      }
      /**
       * @return {?}
       */


      _createClass(NgbTypeahead, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this43 = this;

          /** @type {?} */
          var inputValues$ = this._valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            _this43._inputValueBackup = _this43.showHint ? value : null;

            _this43._onChange(_this43.editable ? value : undefined);
          }));
          /** @type {?} */


          var results$ = inputValues$.pipe(this.ngbTypeahead);
          /** @type {?} */

          var userInput$ = this._resubscribeTypeahead.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(
          /**
          * @return {?}
          */
          function () {
            return results$;
          }));

          this._subscription = this._subscribeToUserInput(userInput$);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._closePopup();

          this._unsubscribeFromUserInput();

          this._zoneSubscription.unsubscribe();
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._writeInputValue(this._formatItemForInput(value));

          if (this.showHint) {
            this._inputValueBackup = value;
          }
        }
        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'disabled', isDisabled);
        }
        /**
         * Dismisses typeahead popup window
         * @return {?}
         */

      }, {
        key: "dismissPopup",
        value: function dismissPopup() {
          if (this.isPopupOpen()) {
            this._resubscribeTypeahead.next(null);

            this._closePopup();

            if (this.showHint && this._inputValueBackup !== null) {
              this._writeInputValue(this._inputValueBackup);
            }

            this._changeDetector.markForCheck();
          }
        }
        /**
         * Returns true if the typeahead popup window is displayed
         * @return {?}
         */

      }, {
        key: "isPopupOpen",
        value: function isPopupOpen() {
          return this._windowRef != null;
        }
        /**
         * @return {?}
         */

      }, {
        key: "handleBlur",
        value: function handleBlur() {
          this._resubscribeTypeahead.next(null);

          this._onTouched();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "handleKeyDown",
        value: function handleKeyDown(event) {
          if (!this.isPopupOpen()) {
            return;
          } // tslint:disable-next-line:deprecation


          switch (event.which) {
            case Key.ArrowDown:
              event.preventDefault();

              this._windowRef.instance.next();

              this._showHint();

              break;

            case Key.ArrowUp:
              event.preventDefault();

              this._windowRef.instance.prev();

              this._showHint();

              break;

            case Key.Enter:
            case Key.Tab:
              /** @type {?} */
              var result = this._windowRef.instance.getActive();

              if (isDefined(result)) {
                event.preventDefault();
                event.stopPropagation();

                this._selectResult(result);
              }

              this._closePopup();

              break;
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_openPopup",
        value: function _openPopup() {
          var _this44 = this;

          if (!this.isPopupOpen()) {
            this._inputValueBackup = this._elementRef.nativeElement.value;
            this._windowRef = this._popupService.open();
            this._windowRef.instance.id = this.popupId;

            this._windowRef.instance.selectEvent.subscribe(
            /**
            * @param {?} result
            * @return {?}
            */
            function (result) {
              return _this44._selectResultClosePopup(result);
            });

            this._windowRef.instance.activeChangeEvent.subscribe(
            /**
            * @param {?} activeId
            * @return {?}
            */
            function (activeId) {
              return _this44.activeDescendant = activeId;
            });

            if (this.container === 'body') {
              window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }

            this._changeDetector.markForCheck();

            ngbAutoClose(this._ngZone, this._document, 'outside',
            /**
            * @return {?}
            */
            function () {
              return _this44.dismissPopup();
            }, this._closed$, [this._elementRef.nativeElement, this._windowRef.location.nativeElement]);
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_closePopup",
        value: function _closePopup() {
          this._closed$.next();

          this._popupService.close();

          this._windowRef = null;
          this.activeDescendant = undefined;
        }
        /**
         * @private
         * @param {?} result
         * @return {?}
         */

      }, {
        key: "_selectResult",
        value: function _selectResult(result) {
          /** @type {?} */
          var defaultPrevented = false;
          this.selectItem.emit({
            item: result,
            preventDefault:
            /**
            * @return {?}
            */
            function preventDefault() {
              defaultPrevented = true;
            }
          });

          this._resubscribeTypeahead.next(null);

          if (!defaultPrevented) {
            this.writeValue(result);

            this._onChange(result);
          }
        }
        /**
         * @private
         * @param {?} result
         * @return {?}
         */

      }, {
        key: "_selectResultClosePopup",
        value: function _selectResultClosePopup(result) {
          this._selectResult(result);

          this._closePopup();
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_showHint",
        value: function _showHint() {
          if (this.showHint && this._windowRef.instance.hasActive() && this._inputValueBackup != null) {
            /** @type {?} */
            var userInputLowerCase = this._inputValueBackup.toLowerCase();
            /** @type {?} */


            var formattedVal = this._formatItemForInput(this._windowRef.instance.getActive());

            if (userInputLowerCase === formattedVal.substr(0, this._inputValueBackup.length).toLowerCase()) {
              this._writeInputValue(this._inputValueBackup + formattedVal.substr(this._inputValueBackup.length));

              this._elementRef.nativeElement['setSelectionRange'].apply(this._elementRef.nativeElement, [this._inputValueBackup.length, formattedVal.length]);
            } else {
              this._writeInputValue(formattedVal);
            }
          }
        }
        /**
         * @private
         * @param {?} item
         * @return {?}
         */

      }, {
        key: "_formatItemForInput",
        value: function _formatItemForInput(item) {
          return item != null && this.inputFormatter ? this.inputFormatter(item) : toString(item);
        }
        /**
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_writeInputValue",
        value: function _writeInputValue(value) {
          this._renderer.setProperty(this._elementRef.nativeElement, 'value', toString(value));
        }
        /**
         * @private
         * @param {?} userInput$
         * @return {?}
         */

      }, {
        key: "_subscribeToUserInput",
        value: function _subscribeToUserInput(userInput$) {
          var _this45 = this;

          return userInput$.subscribe(
          /**
          * @param {?} results
          * @return {?}
          */
          function (results) {
            if (!results || results.length === 0) {
              _this45._closePopup();
            } else {
              _this45._openPopup();

              _this45._windowRef.instance.focusFirst = _this45.focusFirst;
              _this45._windowRef.instance.results = results;
              _this45._windowRef.instance.term = _this45._elementRef.nativeElement.value;

              if (_this45.resultFormatter) {
                _this45._windowRef.instance.formatter = _this45.resultFormatter;
              }

              if (_this45.resultTemplate) {
                _this45._windowRef.instance.resultTemplate = _this45.resultTemplate;
              }

              _this45._windowRef.instance.resetActive(); // The observable stream we are subscribing to might have async steps
              // and if a component containing typeahead is using the OnPush strategy
              // the change detection turn wouldn't be invoked automatically.


              _this45._windowRef.changeDetectorRef.detectChanges();

              _this45._showHint();
            } // live announcer

            /** @type {?} */


            var count = results ? results.length : 0;

            _this45._live.say(count === 0 ? 'No results available' : "".concat(count, " result").concat(count === 1 ? '' : 's', " available"));
          });
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_unsubscribeFromUserInput",
        value: function _unsubscribeFromUserInput() {
          if (this._subscription) {
            this._subscription.unsubscribe();
          }

          this._subscription = null;
        }
      }]);

      return NgbTypeahead;
    }();

    NgbTypeahead.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
      args: [{
        selector: 'input[ngbTypeahead]',
        exportAs: 'ngbTypeahead',
        host: {
          '(blur)': 'handleBlur()',
          '[class.open]': 'isPopupOpen()',
          '(keydown)': 'handleKeyDown($event)',
          '[autocomplete]': 'autocomplete',
          'autocapitalize': 'off',
          'autocorrect': 'off',
          'role': 'combobox',
          'aria-multiline': 'false',
          '[attr.aria-autocomplete]': 'showHint ? "both" : "list"',
          '[attr.aria-activedescendant]': 'activeDescendant',
          '[attr.aria-owns]': 'isPopupOpen() ? popupId : null',
          '[attr.aria-expanded]': 'isPopupOpen()'
        },
        providers: [NGB_TYPEAHEAD_VALUE_ACCESSOR]
      }]
    }];
    /** @nocollapse */

    NgbTypeahead.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]
      }, {
        type: NgbTypeaheadConfig
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: Live
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]
      }];
    };

    NgbTypeahead.propDecorators = {
      autocomplete: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      container: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      editable: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focusFirst: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      inputFormatter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      ngbTypeahead: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resultFormatter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      resultTemplate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      showHint: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      placement: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      selectItem: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var NgbTypeaheadModule = function NgbTypeaheadModule() {
      _classCallCheck(this, NgbTypeaheadModule);
    };

    NgbTypeaheadModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        declarations: [NgbTypeahead, NgbHighlight, NgbTypeaheadWindow],
        exports: [NgbTypeahead, NgbHighlight],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
        entryComponents: [NgbTypeaheadWindow]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var NGB_MODULES = [NgbAccordionModule, NgbAlertModule, NgbButtonsModule, NgbCarouselModule, NgbCollapseModule, NgbDatepickerModule, NgbDropdownModule, NgbModalModule, NgbNavModule, NgbPaginationModule, NgbPopoverModule, NgbProgressbarModule, NgbRatingModule, NgbTabsetModule, NgbTimepickerModule, NgbToastModule, NgbTooltipModule, NgbTypeaheadModule];

    var NgbModule = function NgbModule() {
      _classCallCheck(this, NgbModule);
    };

    NgbModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: NGB_MODULES,
        exports: NGB_MODULES
      }]
    }]; //# sourceMappingURL=ng-bootstrap.js.map

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

  }
}]);
//# sourceMappingURL=default~modules-employee-employee-module~modules-reports-reports-module~modules-wp-wp-module-es5.js.map