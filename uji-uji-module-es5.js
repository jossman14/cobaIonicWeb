function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["uji-uji-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/uji/uji.page.html":
  /*!*************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/uji/uji.page.html ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUjiUjiPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Uji Pemahaman</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/uji/uji-routing.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/uji/uji-routing.module.ts ***!
    \*******************************************/

  /*! exports provided: UjiPageRoutingModule */

  /***/
  function srcAppUjiUjiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UjiPageRoutingModule", function () {
      return UjiPageRoutingModule;
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


    var _uji_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./uji.page */
    "./src/app/uji/uji.page.ts");

    var routes = [{
      path: '',
      component: _uji_page__WEBPACK_IMPORTED_MODULE_3__["UjiPage"]
    }];

    var UjiPageRoutingModule = function UjiPageRoutingModule() {
      _classCallCheck(this, UjiPageRoutingModule);
    };

    UjiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UjiPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/uji/uji.module.ts":
  /*!***********************************!*\
    !*** ./src/app/uji/uji.module.ts ***!
    \***********************************/

  /*! exports provided: UjiPageModule */

  /***/
  function srcAppUjiUjiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UjiPageModule", function () {
      return UjiPageModule;
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


    var _uji_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./uji-routing.module */
    "./src/app/uji/uji-routing.module.ts");
    /* harmony import */


    var _uji_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./uji.page */
    "./src/app/uji/uji.page.ts");

    var UjiPageModule = function UjiPageModule() {
      _classCallCheck(this, UjiPageModule);
    };

    UjiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _uji_routing_module__WEBPACK_IMPORTED_MODULE_5__["UjiPageRoutingModule"]],
      declarations: [_uji_page__WEBPACK_IMPORTED_MODULE_6__["UjiPage"]]
    })], UjiPageModule);
    /***/
  },

  /***/
  "./src/app/uji/uji.page.scss":
  /*!***********************************!*\
    !*** ./src/app/uji/uji.page.scss ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppUjiUjiPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VqaS91amkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/uji/uji.page.ts":
  /*!*********************************!*\
    !*** ./src/app/uji/uji.page.ts ***!
    \*********************************/

  /*! exports provided: UjiPage */

  /***/
  function srcAppUjiUjiPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UjiPage", function () {
      return UjiPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UjiPage = /*#__PURE__*/function () {
      function UjiPage() {
        _classCallCheck(this, UjiPage);
      }

      _createClass(UjiPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return UjiPage;
    }();

    UjiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-uji',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./uji.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/uji/uji.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./uji.page.scss */
      "./src/app/uji/uji.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], UjiPage);
    /***/
  }
}]);
//# sourceMappingURL=uji-uji-module-es5.js.map