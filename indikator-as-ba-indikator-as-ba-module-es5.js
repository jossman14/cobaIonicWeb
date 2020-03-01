function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indikator-as-ba-indikator-as-ba-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-as-ba/indikator-as-ba.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-as-ba/indikator-as-ba.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMateriIndikatorAsBaIndikatorAsBaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Indikator Asam Basa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Tabel Indikator Asam Basa</h4>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <table class=\"table table-striped\">\n          <thead>\n            <tr>\n              <th>Nama Indikator Buatan</th>\n              <th>Interval pH</th>\n              <th>Perubahan Warna</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>Metil hijau</td>\n              <td>0,2 – 1,8</td>\n              <td>Kuning – biru</td>\n            </tr>\n            <tr>\n              <td>Timol biru</td>\n              <td>1,2 – 2,8</td>\n              <td>Kuning – biru</td>\n            </tr>\n            <tr>\n              <td>Metil orange</td>\n              <td>3,2 – 4,4</td>\n              <td>Merah – kuning</td>\n            </tr>\n            <tr>\n              <td>Etil merah</td>\n              <td>4,0 – 5,8</td>\n              <td>Tak berwarna – merah</td>\n            </tr>\n            <tr>\n              <td>Metil ungu</td>\n              <td>4,8 – 5,4</td>\n              <td>Ungu – hijau</td>\n            </tr>\n            <tr>\n              <td>Bromokresol ungu</td>\n              <td>5,2 – 6,8</td>\n              <td>Kuning – ungu</td>\n            </tr>\n            <tr>\n              <td>Bromotimol biru</td>\n              <td>6,0 – 7,6</td>\n              <td>Kuning – biru</td>\n            </tr>\n            <tr>\n              <td>Fenol merah</td>\n              <td>6,4 – 8,2</td>\n              <td>Kuning – merah / violet</td>\n            </tr>\n            <tr>\n              <td>Lakmus</td>\n              <td>4,7 – 8,3</td>\n              <td>Merah – biru</td>\n            </tr>\n            <tr>\n              <td>Gresol merah</td>\n              <td>7,0 – 8,8</td>\n              <td>Kuning – merah</td>\n            </tr>\n            <tr>\n              <td>Timol biru</td>\n              <td>8,0 – 9,6</td>\n              <td>Kuning – biru</td>\n            </tr>\n            <tr>\n              <td>Fenolftalein</td>\n              <td>8,2 – 10,0</td>\n              <td>Tak berwarna – merah muda</td>\n            </tr>\n            <tr>\n              <td>Timolftalein</td>\n              <td>9,4 – 10,6</td>\n              <td>KTak berwarna – biru</td>\n            </tr>\n            <tr>\n              <td>Alizarin kuning</td>\n              <td>10,1 – 12,0</td>\n              <td>Kuning – merah</td>\n            </tr>\n            <tr>\n              <td>Claiton kuning</td>\n              <td>Kuning – kuning kecoklatan</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/materi/indikator-as-ba/indikator-as-ba-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/materi/indikator-as-ba/indikator-as-ba-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: IndikatorAsBaPageRoutingModule */

  /***/
  function srcAppMateriIndikatorAsBaIndikatorAsBaRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndikatorAsBaPageRoutingModule", function () {
      return IndikatorAsBaPageRoutingModule;
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


    var _indikator_as_ba_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./indikator-as-ba.page */
    "./src/app/materi/indikator-as-ba/indikator-as-ba.page.ts");

    var routes = [{
      path: '',
      component: _indikator_as_ba_page__WEBPACK_IMPORTED_MODULE_3__["IndikatorAsBaPage"]
    }];

    var IndikatorAsBaPageRoutingModule = function IndikatorAsBaPageRoutingModule() {
      _classCallCheck(this, IndikatorAsBaPageRoutingModule);
    };

    IndikatorAsBaPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndikatorAsBaPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/materi/indikator-as-ba/indikator-as-ba.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/materi/indikator-as-ba/indikator-as-ba.module.ts ***!
    \******************************************************************/

  /*! exports provided: IndikatorAsBaPageModule */

  /***/
  function srcAppMateriIndikatorAsBaIndikatorAsBaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndikatorAsBaPageModule", function () {
      return IndikatorAsBaPageModule;
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


    var _indikator_as_ba_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./indikator-as-ba-routing.module */
    "./src/app/materi/indikator-as-ba/indikator-as-ba-routing.module.ts");
    /* harmony import */


    var _indikator_as_ba_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./indikator-as-ba.page */
    "./src/app/materi/indikator-as-ba/indikator-as-ba.page.ts");

    var IndikatorAsBaPageModule = function IndikatorAsBaPageModule() {
      _classCallCheck(this, IndikatorAsBaPageModule);
    };

    IndikatorAsBaPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _indikator_as_ba_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndikatorAsBaPageRoutingModule"]],
      declarations: [_indikator_as_ba_page__WEBPACK_IMPORTED_MODULE_6__["IndikatorAsBaPage"]]
    })], IndikatorAsBaPageModule);
    /***/
  },

  /***/
  "./src/app/materi/indikator-as-ba/indikator-as-ba.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/materi/indikator-as-ba/indikator-as-ba.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMateriIndikatorAsBaIndikatorAsBaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS9pbmRpa2F0b3ItYXMtYmEvaW5kaWthdG9yLWFzLWJhLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/materi/indikator-as-ba/indikator-as-ba.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/materi/indikator-as-ba/indikator-as-ba.page.ts ***!
    \****************************************************************/

  /*! exports provided: IndikatorAsBaPage */

  /***/
  function srcAppMateriIndikatorAsBaIndikatorAsBaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndikatorAsBaPage", function () {
      return IndikatorAsBaPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IndikatorAsBaPage = /*#__PURE__*/function () {
      function IndikatorAsBaPage() {
        _classCallCheck(this, IndikatorAsBaPage);
      }

      _createClass(IndikatorAsBaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndikatorAsBaPage;
    }();

    IndikatorAsBaPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-indikator-as-ba',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./indikator-as-ba.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-as-ba/indikator-as-ba.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./indikator-as-ba.page.scss */
      "./src/app/materi/indikator-as-ba/indikator-as-ba.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IndikatorAsBaPage);
    /***/
  }
}]);
//# sourceMappingURL=indikator-as-ba-indikator-as-ba-module-es5.js.map