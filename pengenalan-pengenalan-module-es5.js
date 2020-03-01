function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pengenalan-pengenalan-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/pengenalan/pengenalan.page.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/pengenalan/pengenalan.page.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMateriPengenalanPengenalanPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Pengenalan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-center text-capitalize\">\n          Pengenalan Titrasi Asam Basa\n        </h4>\n        <ion-img\n          src=\"https://cdn.imgpaste.net/2020/03/02/oYNQN.png\"\n          class=\"img-thumbnail\"\n        ></ion-img>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card m-3 p-2\">\n            <p class=\"text-justify\">\n              Pernahkah Anda memperhatikan label yang tertera pada botol cuka?\n              Selain merek dan nama perusahaan yang memproduksi, umumnya\n              dicantumkan pula kadar asam asetat dalam cuka makan tersebut. Jika\n              Anda diminta memeriksa kebenaran dari kadar yang dicantumkan,\n              bagaimana Anda melakukannya? Penetapan kadar larutan asam dan basa\n              dapat dilakukan melalui suatu prosedur percobaan yang disebut\n              <a\n                class=\"btn btn-primary\"\n                routerLink=\"/materi/titrasi\"\n                routerDirection=\"root\"\n                >titrasi asam basa</a\n              >\n              (Purba et al, 2017).\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/materi/pengenalan/pengenalan-routing.module.ts":
  /*!****************************************************************!*\
    !*** ./src/app/materi/pengenalan/pengenalan-routing.module.ts ***!
    \****************************************************************/

  /*! exports provided: PengenalanPageRoutingModule */

  /***/
  function srcAppMateriPengenalanPengenalanRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengenalanPageRoutingModule", function () {
      return PengenalanPageRoutingModule;
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


    var _pengenalan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pengenalan.page */
    "./src/app/materi/pengenalan/pengenalan.page.ts");

    var routes = [{
      path: '',
      component: _pengenalan_page__WEBPACK_IMPORTED_MODULE_3__["PengenalanPage"]
    }];

    var PengenalanPageRoutingModule = function PengenalanPageRoutingModule() {
      _classCallCheck(this, PengenalanPageRoutingModule);
    };

    PengenalanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PengenalanPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/materi/pengenalan/pengenalan.module.ts":
  /*!********************************************************!*\
    !*** ./src/app/materi/pengenalan/pengenalan.module.ts ***!
    \********************************************************/

  /*! exports provided: PengenalanPageModule */

  /***/
  function srcAppMateriPengenalanPengenalanModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengenalanPageModule", function () {
      return PengenalanPageModule;
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


    var _pengenalan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pengenalan-routing.module */
    "./src/app/materi/pengenalan/pengenalan-routing.module.ts");
    /* harmony import */


    var _pengenalan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pengenalan.page */
    "./src/app/materi/pengenalan/pengenalan.page.ts");

    var PengenalanPageModule = function PengenalanPageModule() {
      _classCallCheck(this, PengenalanPageModule);
    };

    PengenalanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _pengenalan_routing_module__WEBPACK_IMPORTED_MODULE_5__["PengenalanPageRoutingModule"]],
      declarations: [_pengenalan_page__WEBPACK_IMPORTED_MODULE_6__["PengenalanPage"]]
    })], PengenalanPageModule);
    /***/
  },

  /***/
  "./src/app/materi/pengenalan/pengenalan.page.scss":
  /*!********************************************************!*\
    !*** ./src/app/materi/pengenalan/pengenalan.page.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMateriPengenalanPengenalanPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS9wZW5nZW5hbGFuL3BlbmdlbmFsYW4ucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/materi/pengenalan/pengenalan.page.ts":
  /*!******************************************************!*\
    !*** ./src/app/materi/pengenalan/pengenalan.page.ts ***!
    \******************************************************/

  /*! exports provided: PengenalanPage */

  /***/
  function srcAppMateriPengenalanPengenalanPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PengenalanPage", function () {
      return PengenalanPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PengenalanPage = /*#__PURE__*/function () {
      function PengenalanPage() {
        _classCallCheck(this, PengenalanPage);
      }

      _createClass(PengenalanPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PengenalanPage;
    }();

    PengenalanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pengenalan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pengenalan.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/pengenalan/pengenalan.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pengenalan.page.scss */
      "./src/app/materi/pengenalan/pengenalan.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], PengenalanPage);
    /***/
  }
}]);
//# sourceMappingURL=pengenalan-pengenalan-module-es5.js.map