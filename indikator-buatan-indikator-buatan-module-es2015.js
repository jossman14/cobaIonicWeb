(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indikator-buatan-indikator-buatan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-buatan/indikator-buatan.page.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-buatan/indikator-buatan.page.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Indikator Buatan</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">Indikator Alami</h4>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col\">\n        <div class=\"card p-3\">\n          <p class=\"text-justify\">\n            Indikator buatan, yaitu kertas lakmus dan pH meter. Lakmus merupakan\n            salah satu indikator yang praktis untuk digunakan. Lakmus berasal\n            dari spesies lumut kerak yang berbentuk larutan atau kertas. Lakmus\n            yang sering digunakan berbentuk kertas, karena dapat menghasilkan\n            perubahan warna yang jelas dan lebih sukar teroksidasi. Lakmus juga\n            termasuk indikator tunggal yang hanya dapat membedakan larutan yang\n            bersifat asam atau basa, tetapi tidak dapat menentukan harga pH atau\n            pOH. Kertas lakmus ada dua macam, yaitu lakmus merah dan lakmus\n            biru.\n          </p>\n          <p class=\"text-justify\">\n            Kertas lakmus merah berubah menjadi biru dalam larutan basa dan pada\n            larutan asam atau netral warnanya tidak berubah (tetap merah).\n            Sedangkan kertas lakmus biru berubah menjadi warna merah dalam\n            larutan asam dan pada larutan basa atau netral warnanya tidak\n            berubah (tetap biru). Berbeda dengan menggunakan kertas lakmus,\n            kertas indikator universal dan indikator cair bisa digunakan untuk\n            mengetahui sifat asam atau basa dan pH suatu zat. pH meter merupakan\n            suatu alat elektronik yang digunakan untuk mengukur pH dalam suatu\n            cairan.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col\">\n        <ion-img\n          src=\"https://cdn.imgpaste.net/2020/03/02/oYBuE.png\"\n          class=\"img-thumbnail\"\n        ></ion-img>\n        <h6 class=\"text-center text-capitalize\">kertas lakmus</h6>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <ion-img\n          src=\"https://cdn.imgpaste.net/2020/03/02/oYwmm.png\"\n          class=\"img-thumbnail\"\n        ></ion-img>\n        <h6 class=\"text-center text-capitalize\">indikator universal</h6>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col\">\n        <ion-img\n          src=\"https://cdn.imgpaste.net/2020/03/02/oYldq.png\"\n          class=\"img-thumbnail\"\n        ></ion-img>\n        <h6 class=\"text-center\">pH meter</h6>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/materi/indikator-buatan/indikator-buatan-routing.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/materi/indikator-buatan/indikator-buatan-routing.module.ts ***!
  \****************************************************************************/
/*! exports provided: IndikatorBuatanPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndikatorBuatanPageRoutingModule", function() { return IndikatorBuatanPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _indikator_buatan_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./indikator-buatan.page */ "./src/app/materi/indikator-buatan/indikator-buatan.page.ts");




const routes = [
    {
        path: '',
        component: _indikator_buatan_page__WEBPACK_IMPORTED_MODULE_3__["IndikatorBuatanPage"]
    }
];
let IndikatorBuatanPageRoutingModule = class IndikatorBuatanPageRoutingModule {
};
IndikatorBuatanPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IndikatorBuatanPageRoutingModule);



/***/ }),

/***/ "./src/app/materi/indikator-buatan/indikator-buatan.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/materi/indikator-buatan/indikator-buatan.module.ts ***!
  \********************************************************************/
/*! exports provided: IndikatorBuatanPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndikatorBuatanPageModule", function() { return IndikatorBuatanPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _indikator_buatan_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indikator-buatan-routing.module */ "./src/app/materi/indikator-buatan/indikator-buatan-routing.module.ts");
/* harmony import */ var _indikator_buatan_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indikator-buatan.page */ "./src/app/materi/indikator-buatan/indikator-buatan.page.ts");







let IndikatorBuatanPageModule = class IndikatorBuatanPageModule {
};
IndikatorBuatanPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _indikator_buatan_routing_module__WEBPACK_IMPORTED_MODULE_5__["IndikatorBuatanPageRoutingModule"]
        ],
        declarations: [_indikator_buatan_page__WEBPACK_IMPORTED_MODULE_6__["IndikatorBuatanPage"]]
    })
], IndikatorBuatanPageModule);



/***/ }),

/***/ "./src/app/materi/indikator-buatan/indikator-buatan.page.scss":
/*!********************************************************************!*\
  !*** ./src/app/materi/indikator-buatan/indikator-buatan.page.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS9pbmRpa2F0b3ItYnVhdGFuL2luZGlrYXRvci1idWF0YW4ucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/materi/indikator-buatan/indikator-buatan.page.ts":
/*!******************************************************************!*\
  !*** ./src/app/materi/indikator-buatan/indikator-buatan.page.ts ***!
  \******************************************************************/
/*! exports provided: IndikatorBuatanPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndikatorBuatanPage", function() { return IndikatorBuatanPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndikatorBuatanPage = class IndikatorBuatanPage {
    constructor() { }
    ngOnInit() {
    }
};
IndikatorBuatanPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-indikator-buatan',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./indikator-buatan.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/indikator-buatan/indikator-buatan.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./indikator-buatan.page.scss */ "./src/app/materi/indikator-buatan/indikator-buatan.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IndikatorBuatanPage);



/***/ })

}]);
//# sourceMappingURL=indikator-buatan-indikator-buatan-module-es2015.js.map