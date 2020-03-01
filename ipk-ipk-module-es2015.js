(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ipk-ipk-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ipk/ipk.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ipk/ipk.page.html ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Indikator Pemahaman Kompetensi</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h2 class=\"text-center\">Indikator Pencapaian Kompetensi</h2>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col card bg-primary text-white m-2 p-2\">\n        <p>3.13.1 Menjelaskan pengertian titrasi asam basa</p>\n        <p>3.13.2 Menentukan Indikator dalam titrasi asam basa</p>\n        <p>3.13.3 Menunjukkan titik ekuivalen titrasi dan titik akhir basa</p>\n        <p>\n          3.13.4. Menghitung konsentrasi larutan asam atau basa berdasarkan data\n          hasil titrasi asam basa\n        </p>\n        <p>\n          3.13.5. Membedakan jenis titrasi asam basa berdasarkan kurva titrasi\n        </p>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col card bg-primary text-white m-2 p-2\">\n        <p>\n          Merancang desain percobaan titrasi asam basa\n        </p>\n        <p>\n          Melakukan percobaan titrasi asam basa\n        </p>\n        <p>\n          Menggambarkan kurva titrasi berdasarkan data hasil percobaan\n        </p>\n        <p>\n          Menyimpulkan hasil percobaan titrasi asam basa\n        </p>\n        <p>\n          Menyajikan hasil percobaan titrasi asam basa\n        </p>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ipk/ipk-routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/ipk/ipk-routing.module.ts ***!
  \*******************************************/
/*! exports provided: IPKPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPKPageRoutingModule", function() { return IPKPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ipk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ipk.page */ "./src/app/ipk/ipk.page.ts");




const routes = [
    {
        path: '',
        component: _ipk_page__WEBPACK_IMPORTED_MODULE_3__["IPKPage"]
    }
];
let IPKPageRoutingModule = class IPKPageRoutingModule {
};
IPKPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], IPKPageRoutingModule);



/***/ }),

/***/ "./src/app/ipk/ipk.module.ts":
/*!***********************************!*\
  !*** ./src/app/ipk/ipk.module.ts ***!
  \***********************************/
/*! exports provided: IPKPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPKPageModule", function() { return IPKPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ipk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ipk-routing.module */ "./src/app/ipk/ipk-routing.module.ts");
/* harmony import */ var _ipk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ipk.page */ "./src/app/ipk/ipk.page.ts");







let IPKPageModule = class IPKPageModule {
};
IPKPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ipk_routing_module__WEBPACK_IMPORTED_MODULE_5__["IPKPageRoutingModule"]
        ],
        declarations: [_ipk_page__WEBPACK_IMPORTED_MODULE_6__["IPKPage"]]
    })
], IPKPageModule);



/***/ }),

/***/ "./src/app/ipk/ipk.page.scss":
/*!***********************************!*\
  !*** ./src/app/ipk/ipk.page.scss ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2lway9pcGsucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/ipk/ipk.page.ts":
/*!*********************************!*\
  !*** ./src/app/ipk/ipk.page.ts ***!
  \*********************************/
/*! exports provided: IPKPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPKPage", function() { return IPKPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IPKPage = class IPKPage {
    constructor() { }
    ngOnInit() {
    }
};
IPKPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ipk',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./ipk.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ipk/ipk.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./ipk.page.scss */ "./src/app/ipk/ipk.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IPKPage);



/***/ })

}]);
//# sourceMappingURL=ipk-ipk-module-es2015.js.map