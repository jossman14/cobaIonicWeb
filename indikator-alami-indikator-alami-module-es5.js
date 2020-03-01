function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indikator-alami-indikator-alami-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-alami/indikator-alami.page.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-alami/indikator-alami.page.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMateriIndikatorAlamiIndikatorAlamiPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Indikator Alami</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Indikator Alami</h4>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <ion-img\n          src=\"https://cdn.imgpaste.net/2020/03/02/oYGhs.png\"\n          class=\"img-thumbnail\"\n        ></ion-img>\n        <h6 class=\"text-center text-capitalize\">Gambar indikator alami</h6>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card p-3\">\n          <p class=\"text-justify\">\n            Indikator alami dapat kita peroleh di sekitar kita. Hampir semua\n            bahan alam mengandung senyawa flavonoid, salah satunya adalah\n            antosianin. Antosianin merupakan kelompok pigmen yang memiliki warna\n            merah sampai biru yang tersebar luas pada tanaman, penampilan ini\n            menunjukkan adanya pewarna alami. Pewarna alami dapat digunakan\n            sebagai indikator karena dapat merubah warna pada suasana asam dan\n            basa meskipun kadang-kadang perubahan warnanya kurang jelas atau\n            hampir mirip untuk perubahan pH tertentu. Hal ini dikarenakan\n            perubahan warna dipengaruh oleh kestabilan antosianin.\n          </p>\n          <p class=\"text-justify\">\n            Faktor-faktor yang mempengaruhi kestabilan antosianin adalah kondisi\n            pH, cahaya, suhu dan kodisi pelarut saat ekstraksi. Oleh karena itu,\n            hanya beberapa bahan alam saja yang sering digunakan, seperti\n            kunyit, bunga sepatu, kol merah dan bunga hydrangea. Bahan-bahan\n            alam tersebut diekstrak sampai diperoleh sarinya untuk dipakai\n            sebagai indikator. Indikator alami dapat dibuat dari bagian tanaman\n            yang berwarna, baik itu bagian daun, batang maupun bunga. Indikator\n            alami termasuk indikator tunggal yang hanya dapat membedakan larutan\n            bersifat asam atau basa, namun tidak dapat menentukan pH dan pOH.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/materi/indikator-alami/indikator-alami-routing.module.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/materi/indikator-alami/indikator-alami-routing.module.ts ***!
    \**************************************************************************/

  /*! exports provided: IndikatorAlamiPageRoutingModule */

  /***/
  function srcAppMateriIndikatorAlamiIndikatorAlamiRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndikatorAlamiPageRoutingModule", function () {
      return IndikatorAlamiPageRoutingModule;
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


    var _indikator_alami_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./indikator-alami.page */
    "./src/app/materi/indikator-alami/indikator-alami.page.ts");

    var routes = [{
      path: '',
      component: _indikator_alami_page__WEBPACK_IMPORTED_MODULE_3__["IndikatorAlamiPage"]
    }];

    var IndikatorAlamiPageRoutingModule = function IndikatorAlamiPageRoutingModule() {
      _classCallCheck(this, IndikatorAlamiPageRoutingModule);
    };

    IndikatorAlamiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], IndikatorAlamiPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/materi/indikator-alami/indikator-alami.module.ts":
  /*!******************************************************************!*\
    !*** ./src/app/materi/indikator-alami/indikator-alami.module.ts ***!
    \******************************************************************/

  /*! exports provided: IndikatorAlamiPageModule */

  /***/
  function srcAppMateriIndikatorAlamiIndikatorAlamiModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndikatorAlamiPageModule", function () {
      return IndikatorAlamiPageModule;
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


    var _indikator_alami_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./indikator-alami-routing.module */
    "./src/app/materi/indikator-alami/indikator-alami-routing.module.ts");
    /* harmony import */


    var _indikator_alami_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./indikator-alami.page */
    "./src/app/materi/indikator-alami/indikator-alami.page.ts");

    var IndikatorAlamiPageModule = function IndikatorAlamiPageModule() {
      _classCallCheck(this, IndikatorAlamiPageModule);
    };

    IndikatorAlamiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _indikator_alami_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndikatorAlamiPageRoutingModule"]],
      declarations: [_indikator_alami_page__WEBPACK_IMPORTED_MODULE_6__["IndikatorAlamiPage"]]
    })], IndikatorAlamiPageModule);
    /***/
  },

  /***/
  "./src/app/materi/indikator-alami/indikator-alami.page.scss":
  /*!******************************************************************!*\
    !*** ./src/app/materi/indikator-alami/indikator-alami.page.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMateriIndikatorAlamiIndikatorAlamiPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS9pbmRpa2F0b3ItYWxhbWkvaW5kaWthdG9yLWFsYW1pLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/materi/indikator-alami/indikator-alami.page.ts":
  /*!****************************************************************!*\
    !*** ./src/app/materi/indikator-alami/indikator-alami.page.ts ***!
    \****************************************************************/

  /*! exports provided: IndikatorAlamiPage */

  /***/
  function srcAppMateriIndikatorAlamiIndikatorAlamiPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IndikatorAlamiPage", function () {
      return IndikatorAlamiPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var IndikatorAlamiPage = /*#__PURE__*/function () {
      function IndikatorAlamiPage() {
        _classCallCheck(this, IndikatorAlamiPage);
      }

      _createClass(IndikatorAlamiPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return IndikatorAlamiPage;
    }();

    IndikatorAlamiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-indikator-alami',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./indikator-alami.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-alami/indikator-alami.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./indikator-alami.page.scss */
      "./src/app/materi/indikator-alami/indikator-alami.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], IndikatorAlamiPage);
    /***/
  }
}]);
//# sourceMappingURL=indikator-alami-indikator-alami-module-es5.js.map