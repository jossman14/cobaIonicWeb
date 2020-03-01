function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kd-kd-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/kd/kd.page.html":
  /*!***********************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/kd/kd.page.html ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppKdKdPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>KD</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"text-center\">Kompetensi Dasar</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"text-justify bg-primary text-white p-2 border rounded\">\n          <span>3.13 </span>Menentukan konsentrasi larutan asam atau basa\n          berdasarkan hasil titrasi asam basa\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <p class=\"text-justify bg-primary text-white p-2 border rounded\">\n          <span>4.13 </span>Merancang, melakukan dan menyimpulkan serta\n          meyajikan hasil percobaan titrasi asam basa\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/kd/kd-routing.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/kd/kd-routing.module.ts ***!
    \*****************************************/

  /*! exports provided: KDPageRoutingModule */

  /***/
  function srcAppKdKdRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KDPageRoutingModule", function () {
      return KDPageRoutingModule;
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


    var _kd_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./kd.page */
    "./src/app/kd/kd.page.ts");

    var routes = [{
      path: '',
      component: _kd_page__WEBPACK_IMPORTED_MODULE_3__["KDPage"]
    }];

    var KDPageRoutingModule = function KDPageRoutingModule() {
      _classCallCheck(this, KDPageRoutingModule);
    };

    KDPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], KDPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/kd/kd.module.ts":
  /*!*********************************!*\
    !*** ./src/app/kd/kd.module.ts ***!
    \*********************************/

  /*! exports provided: KDPageModule */

  /***/
  function srcAppKdKdModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KDPageModule", function () {
      return KDPageModule;
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


    var _kd_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./kd-routing.module */
    "./src/app/kd/kd-routing.module.ts");
    /* harmony import */


    var _kd_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./kd.page */
    "./src/app/kd/kd.page.ts");

    var KDPageModule = function KDPageModule() {
      _classCallCheck(this, KDPageModule);
    };

    KDPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _kd_routing_module__WEBPACK_IMPORTED_MODULE_5__["KDPageRoutingModule"]],
      declarations: [_kd_page__WEBPACK_IMPORTED_MODULE_6__["KDPage"]]
    })], KDPageModule);
    /***/
  },

  /***/
  "./src/app/kd/kd.page.scss":
  /*!*********************************!*\
    !*** ./src/app/kd/kd.page.scss ***!
    \*********************************/

  /*! exports provided: default */

  /***/
  function srcAppKdKdPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu-button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAva2QvRDpcXFByb2pla1xcaW9uaWNfYXBwXFx6ZXJBcHBzL3NyY1xcYXBwXFxrZFxca2QucGFnZS5zY3NzIiwic3JjL2FwcC9rZC9rZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAva2Qva2QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUtYnV0dG9uIHtcclxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG59XHJcbiIsImlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/kd/kd.page.ts":
  /*!*******************************!*\
    !*** ./src/app/kd/kd.page.ts ***!
    \*******************************/

  /*! exports provided: KDPage */

  /***/
  function srcAppKdKdPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KDPage", function () {
      return KDPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var KDPage = /*#__PURE__*/function () {
      function KDPage() {
        _classCallCheck(this, KDPage);
      }

      _createClass(KDPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return KDPage;
    }();

    KDPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-kd',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./kd.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/kd/kd.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./kd.page.scss */
      "./src/app/kd/kd.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], KDPage);
    /***/
  }
}]);
//# sourceMappingURL=kd-kd-module-es5.js.map