function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["materi-materi-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/materi.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/materi.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMateriMateriPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Materi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Materi</h4>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col text-center\">\n        <ion-button routerLink=\"/materi/pengenalan\" routerDirection=\"root\"\n          >Pengenalan</ion-button\n        >\n      </div>\n      <div class=\"col text-center\">\n        <ion-button routerLink=\"/materi/indikator-as-ba\" routerDirection=\"root\"\n          >Indikator Asam Basa</ion-button\n        >\n      </div>\n      <div class=\"col text-center\">\n        <ion-button routerLink=\"/materi/kurva-titrasi\" routerDirection=\"root\"\n          >Kurva itrasi Asam Basa</ion-button\n        >\n      </div>\n      <div class=\"col text-center\">\n        <ion-button routerLink=\"/materi/praktikum\" routerDirection=\"root\"\n          >Praktikum</ion-button\n        >\n      </div>\n    </div>\n    <div class=\"col text-center\">\n      <ion-button routerLink=\"/materi/video\" routerDirection=\"root\"\n        >Video</ion-button\n      >\n    </div>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/materi/materi-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/materi/materi-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: MateriPageRoutingModule */

  /***/
  function srcAppMateriMateriRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MateriPageRoutingModule", function () {
      return MateriPageRoutingModule;
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


    var _materi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./materi.page */
    "./src/app/materi/materi.page.ts");

    var routes = [{
      path: '',
      component: _materi_page__WEBPACK_IMPORTED_MODULE_3__["MateriPage"]
    }, {
      path: 'pengenalan',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pengenalan-pengenalan-module */
        "pengenalan-pengenalan-module").then(__webpack_require__.bind(null,
        /*! ./pengenalan/pengenalan.module */
        "./src/app/materi/pengenalan/pengenalan.module.ts")).then(function (m) {
          return m.PengenalanPageModule;
        });
      }
    }, {
      path: 'indikator-as-ba',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | indikator-as-ba-indikator-as-ba-module */
        "indikator-as-ba-indikator-as-ba-module").then(__webpack_require__.bind(null,
        /*! ./indikator-as-ba/indikator-as-ba.module */
        "./src/app/materi/indikator-as-ba/indikator-as-ba.module.ts")).then(function (m) {
          return m.IndikatorAsBaPageModule;
        });
      }
    }, {
      path: 'kurva-titrasi',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | kurva-titrasi-kurva-titrasi-module */
        "kurva-titrasi-kurva-titrasi-module").then(__webpack_require__.bind(null,
        /*! ./kurva-titrasi/kurva-titrasi.module */
        "./src/app/materi/kurva-titrasi/kurva-titrasi.module.ts")).then(function (m) {
          return m.KurvaTitrasiPageModule;
        });
      }
    }, {
      path: 'praktikum',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | praktikum-praktikum-module */
        "praktikum-praktikum-module").then(__webpack_require__.bind(null,
        /*! ./praktikum/praktikum.module */
        "./src/app/materi/praktikum/praktikum.module.ts")).then(function (m) {
          return m.PraktikumPageModule;
        });
      }
    }, {
      path: 'video',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | video-video-module */
        "video-video-module").then(__webpack_require__.bind(null,
        /*! ./video/video.module */
        "./src/app/materi/video/video.module.ts")).then(function (m) {
          return m.VideoPageModule;
        });
      }
    }, {
      path: 'titrasi',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | titrasi-titrasi-module */
        "titrasi-titrasi-module").then(__webpack_require__.bind(null,
        /*! ./titrasi/titrasi.module */
        "./src/app/materi/titrasi/titrasi.module.ts")).then(function (m) {
          return m.TitrasiPageModule;
        });
      }
    }, {
      path: 'titik-ekuivalen',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | titik-ekuivalen-titik-ekuivalen-module */
        "titik-ekuivalen-titik-ekuivalen-module").then(__webpack_require__.bind(null,
        /*! ./titik-ekuivalen/titik-ekuivalen.module */
        "./src/app/materi/titik-ekuivalen/titik-ekuivalen.module.ts")).then(function (m) {
          return m.TitikEkuivalenPageModule;
        });
      }
    }, {
      path: 'indikator-alami',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | indikator-alami-indikator-alami-module */
        "indikator-alami-indikator-alami-module").then(__webpack_require__.bind(null,
        /*! ./indikator-alami/indikator-alami.module */
        "./src/app/materi/indikator-alami/indikator-alami.module.ts")).then(function (m) {
          return m.IndikatorAlamiPageModule;
        });
      }
    }, {
      path: 'indikator-buatan',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | indikator-buatan-indikator-buatan-module */
        "indikator-buatan-indikator-buatan-module").then(__webpack_require__.bind(null,
        /*! ./indikator-buatan/indikator-buatan.module */
        "./src/app/materi/indikator-buatan/indikator-buatan.module.ts")).then(function (m) {
          return m.IndikatorBuatanPageModule;
        });
      }
    }];

    var MateriPageRoutingModule = function MateriPageRoutingModule() {
      _classCallCheck(this, MateriPageRoutingModule);
    };

    MateriPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MateriPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/materi/materi.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/materi/materi.module.ts ***!
    \*****************************************/

  /*! exports provided: MateriPageModule */

  /***/
  function srcAppMateriMateriModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MateriPageModule", function () {
      return MateriPageModule;
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


    var _materi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./materi-routing.module */
    "./src/app/materi/materi-routing.module.ts");
    /* harmony import */


    var _materi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./materi.page */
    "./src/app/materi/materi.page.ts");

    var MateriPageModule = function MateriPageModule() {
      _classCallCheck(this, MateriPageModule);
    };

    MateriPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _materi_routing_module__WEBPACK_IMPORTED_MODULE_5__["MateriPageRoutingModule"]],
      declarations: [_materi_page__WEBPACK_IMPORTED_MODULE_6__["MateriPage"]]
    })], MateriPageModule);
    /***/
  },

  /***/
  "./src/app/materi/materi.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/materi/materi.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppMateriMateriPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS9tYXRlcmkucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/materi/materi.page.ts":
  /*!***************************************!*\
    !*** ./src/app/materi/materi.page.ts ***!
    \***************************************/

  /*! exports provided: MateriPage */

  /***/
  function srcAppMateriMateriPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MateriPage", function () {
      return MateriPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MateriPage = /*#__PURE__*/function () {
      function MateriPage() {
        _classCallCheck(this, MateriPage);
      }

      _createClass(MateriPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MateriPage;
    }();

    MateriPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-materi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./materi.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/materi.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./materi.page.scss */
      "./src/app/materi/materi.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MateriPage);
    /***/
  }
}]);
//# sourceMappingURL=materi-materi-module-es5.js.map