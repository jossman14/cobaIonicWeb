(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["titrasi-titrasi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/titrasi/titrasi.page.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/titrasi/titrasi.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Titrasi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-center\">\n          Titrasi\n        </h4>\n        <div class=\"card  p-3\">\n          <p class=\"text-justify\">\n            Titrasi adalah suatu cara untuk menentukan konsentrasi larutan asam\n            atau basa, dengan penambahan terkontrol dan mengukur jumlah volume\n            larutan yang diketahui konsentrasinya (larutan standar) untuk\n            bereaksi sepenuhnya dengan larutan yang telah terukur volumenya\n            namun tidak diketahui konsentrasinya (Davis et al, 2006). Larutan\n            standar dapat berupa asam atau basa yang telah diketahui\n            konsentrasinya dengan teliti. Larutan standar asam diperlukan, untuk\n            menetapkan konsentrasi basa dan larutan standar basa diperlukan,\n            untuk menetapkan konsentrasi asam. Keadaan dengan jumlah ekuivalen\n            asam sama dengan basa disebut\n            <a\n              class=\"btn btn-primary d-inline\"\n              routerLink=\"/materi/titik-ekuivalen\"\n              routerDirection=\"root\"\n              >Titik Ekuivalen</a\n            >\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-3\">\n      <div class=\"col\">\n        <ion-img\n          src=\"https://cdn.imgpaste.net/2020/03/02/oYHRS.png\"\n          class=\"img-thumbnail\"\n        ></ion-img>\n        <h5 class=\"text-center\">Gambar Alat Titrasi</h5>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/materi/titrasi/titrasi-routing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/materi/titrasi/titrasi-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: TitrasiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitrasiPageRoutingModule", function() { return TitrasiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _titrasi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./titrasi.page */ "./src/app/materi/titrasi/titrasi.page.ts");




const routes = [
    {
        path: '',
        component: _titrasi_page__WEBPACK_IMPORTED_MODULE_3__["TitrasiPage"]
    }
];
let TitrasiPageRoutingModule = class TitrasiPageRoutingModule {
};
TitrasiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TitrasiPageRoutingModule);



/***/ }),

/***/ "./src/app/materi/titrasi/titrasi.module.ts":
/*!**************************************************!*\
  !*** ./src/app/materi/titrasi/titrasi.module.ts ***!
  \**************************************************/
/*! exports provided: TitrasiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitrasiPageModule", function() { return TitrasiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _titrasi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./titrasi-routing.module */ "./src/app/materi/titrasi/titrasi-routing.module.ts");
/* harmony import */ var _titrasi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./titrasi.page */ "./src/app/materi/titrasi/titrasi.page.ts");







let TitrasiPageModule = class TitrasiPageModule {
};
TitrasiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _titrasi_routing_module__WEBPACK_IMPORTED_MODULE_5__["TitrasiPageRoutingModule"]
        ],
        declarations: [_titrasi_page__WEBPACK_IMPORTED_MODULE_6__["TitrasiPage"]]
    })
], TitrasiPageModule);



/***/ }),

/***/ "./src/app/materi/titrasi/titrasi.page.scss":
/*!**************************************************!*\
  !*** ./src/app/materi/titrasi/titrasi.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS90aXRyYXNpL3RpdHJhc2kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/materi/titrasi/titrasi.page.ts":
/*!************************************************!*\
  !*** ./src/app/materi/titrasi/titrasi.page.ts ***!
  \************************************************/
/*! exports provided: TitrasiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitrasiPage", function() { return TitrasiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TitrasiPage = class TitrasiPage {
    constructor() { }
    ngOnInit() {
    }
};
TitrasiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-titrasi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./titrasi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/titrasi/titrasi.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./titrasi.page.scss */ "./src/app/materi/titrasi/titrasi.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], TitrasiPage);



/***/ })

}]);
//# sourceMappingURL=titrasi-titrasi-module-es2015.js.map