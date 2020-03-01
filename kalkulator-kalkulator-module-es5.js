function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kalkulator-kalkulator-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kalkulator/kalkulator.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kalkulator/kalkulator.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKalkulatorKalkulatorPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>kalkulator</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/kalkulator/kalkulator-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/kalkulator/kalkulator-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: KalkulatorPageRoutingModule */

  /***/
  function srcAppKalkulatorKalkulatorRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KalkulatorPageRoutingModule", function () {
      return KalkulatorPageRoutingModule;
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


    var _kalkulator_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kalkulator.page */
    "./src/app/kalkulator/kalkulator.page.ts");

    var routes = [{
      path: '',
      component: _kalkulator_page__WEBPACK_IMPORTED_MODULE_3__["KalkulatorPage"]
    }];

    var KalkulatorPageRoutingModule = function KalkulatorPageRoutingModule() {
      _classCallCheck(this, KalkulatorPageRoutingModule);
    };

    KalkulatorPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KalkulatorPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/kalkulator/kalkulator.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/kalkulator/kalkulator.module.ts ***!
    \*************************************************/

  /*! exports provided: KalkulatorPageModule */

  /***/
  function srcAppKalkulatorKalkulatorModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KalkulatorPageModule", function () {
      return KalkulatorPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _kalkulator_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kalkulator-routing.module */
    "./src/app/kalkulator/kalkulator-routing.module.ts");
    /* harmony import */


    var _kalkulator_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kalkulator.page */
    "./src/app/kalkulator/kalkulator.page.ts");

    var KalkulatorPageModule = function KalkulatorPageModule() {
      _classCallCheck(this, KalkulatorPageModule);
    };

    KalkulatorPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kalkulator_routing_module__WEBPACK_IMPORTED_MODULE_5__["KalkulatorPageRoutingModule"]],
      declarations: [_kalkulator_page__WEBPACK_IMPORTED_MODULE_6__["KalkulatorPage"]]
    })], KalkulatorPageModule);
    /***/
  },

  /***/
  "./src/app/kalkulator/kalkulator.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/kalkulator/kalkulator.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppKalkulatorKalkulatorPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2thbGt1bGF0b3Iva2Fsa3VsYXRvci5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/kalkulator/kalkulator.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/kalkulator/kalkulator.page.ts ***!
    \***********************************************/

  /*! exports provided: KalkulatorPage */

  /***/
  function srcAppKalkulatorKalkulatorPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KalkulatorPage", function () {
      return KalkulatorPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KalkulatorPage = /*#__PURE__*/function () {
      function KalkulatorPage() {
        _classCallCheck(this, KalkulatorPage);
      }

      _createClass(KalkulatorPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KalkulatorPage;
    }();

    KalkulatorPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kalkulator',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kalkulator.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kalkulator/kalkulator.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kalkulator.page.scss */
      "./src/app/kalkulator/kalkulator.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], KalkulatorPage);
    /***/
  }
}]);
//# sourceMappingURL=kalkulator-kalkulator-module-es5.js.map