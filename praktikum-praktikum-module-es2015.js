(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["praktikum-praktikum-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/praktikum/praktikum.page.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/praktikum/praktikum.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Praktikum</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n");

/***/ }),

/***/ "./src/app/materi/praktikum/praktikum-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/materi/praktikum/praktikum-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: PraktikumPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraktikumPageRoutingModule", function() { return PraktikumPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _praktikum_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./praktikum.page */ "./src/app/materi/praktikum/praktikum.page.ts");




const routes = [
    {
        path: '',
        component: _praktikum_page__WEBPACK_IMPORTED_MODULE_3__["PraktikumPage"]
    }
];
let PraktikumPageRoutingModule = class PraktikumPageRoutingModule {
};
PraktikumPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PraktikumPageRoutingModule);



/***/ }),

/***/ "./src/app/materi/praktikum/praktikum.module.ts":
/*!******************************************************!*\
  !*** ./src/app/materi/praktikum/praktikum.module.ts ***!
  \******************************************************/
/*! exports provided: PraktikumPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraktikumPageModule", function() { return PraktikumPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _praktikum_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./praktikum-routing.module */ "./src/app/materi/praktikum/praktikum-routing.module.ts");
/* harmony import */ var _praktikum_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./praktikum.page */ "./src/app/materi/praktikum/praktikum.page.ts");







let PraktikumPageModule = class PraktikumPageModule {
};
PraktikumPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _praktikum_routing_module__WEBPACK_IMPORTED_MODULE_5__["PraktikumPageRoutingModule"]
        ],
        declarations: [_praktikum_page__WEBPACK_IMPORTED_MODULE_6__["PraktikumPage"]]
    })
], PraktikumPageModule);



/***/ }),

/***/ "./src/app/materi/praktikum/praktikum.page.scss":
/*!******************************************************!*\
  !*** ./src/app/materi/praktikum/praktikum.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS9wcmFrdGlrdW0vcHJha3Rpa3VtLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/materi/praktikum/praktikum.page.ts":
/*!****************************************************!*\
  !*** ./src/app/materi/praktikum/praktikum.page.ts ***!
  \****************************************************/
/*! exports provided: PraktikumPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PraktikumPage", function() { return PraktikumPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PraktikumPage = class PraktikumPage {
    constructor() { }
    ngOnInit() {
    }
};
PraktikumPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-praktikum',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./praktikum.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/praktikum/praktikum.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./praktikum.page.scss */ "./src/app/materi/praktikum/praktikum.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], PraktikumPage);



/***/ })

}]);
//# sourceMappingURL=praktikum-praktikum-module-es2015.js.map