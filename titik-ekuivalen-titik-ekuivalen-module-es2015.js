(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["titik-ekuivalen-titik-ekuivalen-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Titik Ekuivalen</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Titik Ekuivalen</h4>\n        <div class=\"row mt-3\">\n          <div class=\"col\">\n            <ion-img\n              src=\"https://cdn.imgpaste.net/2020/03/02/oYHRS.png\"\n              class=\"img-thumbnail\"\n            ></ion-img>\n            <h6 class=\"text-center\">video belum tak tambahin :D</h6>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col\">\n            <div class=\"card p-3\">\n              <p class=\"text-justify\">\n                Pada saat titik ekuivalen, maka mol-ekuivalent asam akan sama\n                dengan mol-ekuivalent basa, maka hal ini dapat kita tulis\n                sebagai berikut:\n                <span class=\"d-block alert alert-info text-center\"\n                  >n x M x V asam = n x M x V basa\n                  <a\n                    class=\"btn btn-primary \"\n                    routerLink=\"/kalkulator\"\n                    routerDirection=\"root\"\n                    >Kalkulator</a\n                  ></span\n                >\n                <span class=\"d-block alert alert-secondary\">\n                  keterangan : <br />\n                  V = Volume <br />\n                  M = Molaritas <br />\n                  n = jumlah ion H<sup>+</sup> (pada asam) atau OH<sup>-</sup>\n                  (pada basa)\n                </span>\n                Titik ekuivalen dapat ditentukan dengan menggunakan indikator\n                yang mempunyai trayek perubahan pH dengan titik ekuivalen\n                termasuk didalamnya (Supardi et al, 2014).\n              </p>\n              <p class=\"text-justify\">\n                Titrasi dihentikan tepat pada saat indikator asam-basa\n                menunjukkan perubahan warna. Saat indikator menunjukkan\n                perubahan warna disebut titik akhir titrasi (Brady et al, 2015).\n                Sangat sukar untuk menentukan berakhirnya titrasi tepat pada\n                titik ekuivalen, karena indikator tidak hanya mengalami\n                perubahan warna pada titik ekuivalen saya, melainkan pada daerah\n                yang disebut trayek perubahan warna. Oleh karena itu biasanya\n                titrasi diakhiri pada suatu pH tertentu yang diperbolehkan.\n                Pemilihan indikator menjadi hal yang sangat penting karena habis\n                mengalami perubahan warna pada titik ekuivalennya dan tidak\n                boleh mengalami perubahan warna diluar titik ekuivalennya\n                (Supardi et al, 2014).\n              </p>\n              <p class=\"text-justify\">\n                Indikator asam-basa merupakan zat atau substansi yang dapat\n                merubah warna. Titik akhir dari sebuah titrasi dapat dideteksi\n                ketika warna dari larutan tersebut berubah secara drastis\n                (terjadi perubahan warna). Kebanyakan pewarna yang digunakan\n                sebagai indikator asam-basa merupakan asam lemah (Brady et al,\n                2015). Indikator biasanya basa atau asam organik, yang mempunyai\n                warna berbeda dalam suasana asam atau basa (Supardi et al,\n                2014).\n                <span class=\"d-block alert alert-info text-center\">\n                  H In <em>(aq)</em> ⇌ H<sup>+</sup> <em>(aq)</em> + In\n                  <em>(aq)</em></span\n                >\n              </p>\n              <p class=\"text-justify\">\n                Indikator asam basa dibedakan menjadi dua, yaitu\n                <a\n                  class=\"btn btn-primary \"\n                  routerLink=\"/materi/indikator-alami\"\n                  routerDirection=\"root\"\n                  >Indikator Alami</a\n                >\n                dan\n                <a\n                  class=\"btn btn-primary mt-2 \"\n                  routerLink=\"/materi/indikator-buatan\"\n                  routerDirection=\"root\"\n                  >Indikator Buatan</a\n                >\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/materi/titik-ekuivalen/titik-ekuivalen-routing.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/materi/titik-ekuivalen/titik-ekuivalen-routing.module.ts ***!
  \**************************************************************************/
/*! exports provided: TitikEkuivalenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitikEkuivalenPageRoutingModule", function() { return TitikEkuivalenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _titik_ekuivalen_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./titik-ekuivalen.page */ "./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.ts");




const routes = [
    {
        path: '',
        component: _titik_ekuivalen_page__WEBPACK_IMPORTED_MODULE_3__["TitikEkuivalenPage"]
    }
];
let TitikEkuivalenPageRoutingModule = class TitikEkuivalenPageRoutingModule {
};
TitikEkuivalenPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TitikEkuivalenPageRoutingModule);



/***/ }),

/***/ "./src/app/materi/titik-ekuivalen/titik-ekuivalen.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/materi/titik-ekuivalen/titik-ekuivalen.module.ts ***!
  \******************************************************************/
/*! exports provided: TitikEkuivalenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitikEkuivalenPageModule", function() { return TitikEkuivalenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _titik_ekuivalen_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./titik-ekuivalen-routing.module */ "./src/app/materi/titik-ekuivalen/titik-ekuivalen-routing.module.ts");
/* harmony import */ var _titik_ekuivalen_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./titik-ekuivalen.page */ "./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.ts");







let TitikEkuivalenPageModule = class TitikEkuivalenPageModule {
};
TitikEkuivalenPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _titik_ekuivalen_routing_module__WEBPACK_IMPORTED_MODULE_5__["TitikEkuivalenPageRoutingModule"]
        ],
        declarations: [_titik_ekuivalen_page__WEBPACK_IMPORTED_MODULE_6__["TitikEkuivalenPage"]]
    })
], TitikEkuivalenPageModule);



/***/ }),

/***/ "./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.scss":
/*!******************************************************************!*\
  !*** ./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS90aXRpay1la3VpdmFsZW4vdGl0aWstZWt1aXZhbGVuLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.ts":
/*!****************************************************************!*\
  !*** ./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.ts ***!
  \****************************************************************/
/*! exports provided: TitikEkuivalenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitikEkuivalenPage", function() { return TitikEkuivalenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TitikEkuivalenPage = class TitikEkuivalenPage {
    constructor() { }
    ngOnInit() {
    }
};
TitikEkuivalenPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-titik-ekuivalen',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./titik-ekuivalen.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./titik-ekuivalen.page.scss */ "./src/app/materi/titik-ekuivalen/titik-ekuivalen.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TitikEkuivalenPage);



/***/ })

}]);
//# sourceMappingURL=titik-ekuivalen-titik-ekuivalen-module-es2015.js.map