(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kurva-titrasi-kurva-titrasi-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/kurva-titrasi/kurva-titrasi.page.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/kurva-titrasi/kurva-titrasi.page.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Kurva Titrasi Asam Basa</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"text-container\">Kurva Titrasi</h4>\n      </div>\n      <div class=\"row\">\n        <div class=\"col\">\n          <div class=\"card m-3 p-3\">\n            <p class=\"text-justify\">\n              Anda tentu sudah mengetahui bahwa pH akan naik jika suatu larutan\n              asam ditetesi dengan basa. Sebaliknya, jika larutan basa ditetesi\n              dengan larutan asam, maka pH larutan akan turun.Grafik yang\n              menyatakan perubahan pH pada titrasi asam dengan basa dan\n              sebaliknya disebut kurva titrasi. Bagaimanakah bentuk kurva\n              titrasi tersebut?\n            </p>\n            <p class=\"text-justify\">\n              Bentuk kurva titrasi tergantung pada kekuatan asam dan basa yang\n              direaksikan. Ada tiga jenis titrasi, yaitu :\n              <a\n                class=\"btn btn-primary mt-2\"\n                routerLink=\"/materi/titrasi\"\n                routerDirection=\"root\"\n                >Titrasi asam kuat dengan basa kuat</a\n              >\n              <a\n                class=\"btn btn-primary mt-2\"\n                routerLink=\"/materi/titrasi\"\n                routerDirection=\"root\"\n                >Titrasi asam lemah dengan basa kuat</a\n              >\n              <a\n                class=\"btn btn-primary mt-2\"\n                routerLink=\"/materi/titrasi\"\n                routerDirection=\"root\"\n                >Titrasi asam kuat dengan basa lemah</a\n              >\n              <!-- <ion-button>Titrasi asam kuat dengan basa kuat</ion-button>\n              <ion-button>Titrasi asam lemah dengan basa kuat</ion-button>\n              <ion-button>Titrasi asam kuat dengan basa lemah</ion-button> -->\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/materi/kurva-titrasi/kurva-titrasi-routing.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/materi/kurva-titrasi/kurva-titrasi-routing.module.ts ***!
  \**********************************************************************/
/*! exports provided: KurvaTitrasiPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KurvaTitrasiPageRoutingModule", function() { return KurvaTitrasiPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _kurva_titrasi_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./kurva-titrasi.page */ "./src/app/materi/kurva-titrasi/kurva-titrasi.page.ts");




const routes = [
    {
        path: '',
        component: _kurva_titrasi_page__WEBPACK_IMPORTED_MODULE_3__["KurvaTitrasiPage"]
    }
];
let KurvaTitrasiPageRoutingModule = class KurvaTitrasiPageRoutingModule {
};
KurvaTitrasiPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], KurvaTitrasiPageRoutingModule);



/***/ }),

/***/ "./src/app/materi/kurva-titrasi/kurva-titrasi.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/materi/kurva-titrasi/kurva-titrasi.module.ts ***!
  \**************************************************************/
/*! exports provided: KurvaTitrasiPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KurvaTitrasiPageModule", function() { return KurvaTitrasiPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _kurva_titrasi_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./kurva-titrasi-routing.module */ "./src/app/materi/kurva-titrasi/kurva-titrasi-routing.module.ts");
/* harmony import */ var _kurva_titrasi_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kurva-titrasi.page */ "./src/app/materi/kurva-titrasi/kurva-titrasi.page.ts");







let KurvaTitrasiPageModule = class KurvaTitrasiPageModule {
};
KurvaTitrasiPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _kurva_titrasi_routing_module__WEBPACK_IMPORTED_MODULE_5__["KurvaTitrasiPageRoutingModule"]
        ],
        declarations: [_kurva_titrasi_page__WEBPACK_IMPORTED_MODULE_6__["KurvaTitrasiPage"]]
    })
], KurvaTitrasiPageModule);



/***/ }),

/***/ "./src/app/materi/kurva-titrasi/kurva-titrasi.page.scss":
/*!**************************************************************!*\
  !*** ./src/app/materi/kurva-titrasi/kurva-titrasi.page.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS9rdXJ2YS10aXRyYXNpL2t1cnZhLXRpdHJhc2kucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/materi/kurva-titrasi/kurva-titrasi.page.ts":
/*!************************************************************!*\
  !*** ./src/app/materi/kurva-titrasi/kurva-titrasi.page.ts ***!
  \************************************************************/
/*! exports provided: KurvaTitrasiPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KurvaTitrasiPage", function() { return KurvaTitrasiPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let KurvaTitrasiPage = class KurvaTitrasiPage {
    constructor() { }
    ngOnInit() {
    }
};
KurvaTitrasiPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-kurva-titrasi',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./kurva-titrasi.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/kurva-titrasi/kurva-titrasi.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./kurva-titrasi.page.scss */ "./src/app/materi/kurva-titrasi/kurva-titrasi.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], KurvaTitrasiPage);



/***/ })

}]);
//# sourceMappingURL=kurva-titrasi-kurva-titrasi-module-es2015.js.map