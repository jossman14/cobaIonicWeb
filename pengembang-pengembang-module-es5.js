function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pengembang-pengembang-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pengembang/pengembang.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pengembang/pengembang.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPengembangPengembangPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pengembang</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"text-center\">Pengembang</h2>\n      </div>\n    </div>\n    <div class=\"card\">\n      <img\n        class=\"card-img-top\"\n        src=\"https://i.pinimg.com/originals/fd/cb/07/fdcb078e7c6ccb7989ee7b806cb41991.png\"\n        alt=\"Card image cap\"\n      />\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Zerlinda Febriana</h4>\n        <h5 class=\"card-subtitle\">Penyusun Makalah</h5>\n        <p class=\"card-text\">\n          Mahasiswa Program Studi Pendidikan Kimia Unnes tahun 2019\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card mt-3\">\n          <h3 class=\"text-center\">Kontak</h3>\n          <ul class=\"list-group\">\n            <li class=\"list-group-item\">\n              Email : zerlindafebriana51@gmail.com\n            </li>\n            <li class=\"list-group-item\">nstagram : zerlinda_febriana</li>\n            <li class=\"list-group-item\">Facebook : zerlinda febriana</li>\n            <li class=\"list-group-item\">Wa : 08990131301</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pengembang/pengembang-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pengembang/pengembang-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PengembangPageRoutingModule */

  /***/
  function srcAppPengembangPengembangRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengembangPageRoutingModule", function () {
      return PengembangPageRoutingModule;
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


    var _pengembang_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pengembang.page */
    "./src/app/pengembang/pengembang.page.ts");

    var routes = [{
      path: '',
      component: _pengembang_page__WEBPACK_IMPORTED_MODULE_3__["PengembangPage"]
    }];

    var PengembangPageRoutingModule = function PengembangPageRoutingModule() {
      _classCallCheck(this, PengembangPageRoutingModule);
    };

    PengembangPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PengembangPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pengembang/pengembang.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pengembang/pengembang.module.ts ***!
    \*************************************************/

  /*! exports provided: PengembangPageModule */

  /***/
  function srcAppPengembangPengembangModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengembangPageModule", function () {
      return PengembangPageModule;
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


    var _pengembang_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pengembang-routing.module */
    "./src/app/pengembang/pengembang-routing.module.ts");
    /* harmony import */


    var _pengembang_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pengembang.page */
    "./src/app/pengembang/pengembang.page.ts");

    var PengembangPageModule = function PengembangPageModule() {
      _classCallCheck(this, PengembangPageModule);
    };

    PengembangPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pengembang_routing_module__WEBPACK_IMPORTED_MODULE_5__["PengembangPageRoutingModule"]],
      declarations: [_pengembang_page__WEBPACK_IMPORTED_MODULE_6__["PengembangPage"]]
    })], PengembangPageModule);
    /***/
  },

  /***/
  "./src/app/pengembang/pengembang.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pengembang/pengembang.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPengembangPengembangPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BlbmdlbWJhbmcvcGVuZ2VtYmFuZy5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pengembang/pengembang.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pengembang/pengembang.page.ts ***!
    \***********************************************/

  /*! exports provided: PengembangPage */

  /***/
  function srcAppPengembangPengembangPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengembangPage", function () {
      return PengembangPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PengembangPage = /*#__PURE__*/function () {
      function PengembangPage() {
        _classCallCheck(this, PengembangPage);
      }

      _createClass(PengembangPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PengembangPage;
    }();

    PengembangPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pengembang',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pengembang.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pengembang/pengembang.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pengembang.page.scss */
      "./src/app/pengembang/pengembang.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PengembangPage);
    /***/
  }
}]);
//# sourceMappingURL=pengembang-pengembang-module-es5.js.map