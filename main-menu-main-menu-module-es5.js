function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-menu-main-menu-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMenuMainMenuPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Main Menu</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col class=\"text-center\">\n        <h3 id=\"judulMainMenu\">Chemistry is Fun</h3>\n      </ion-col>\n    </ion-row>\n    <div class=\"row\">\n      <div class=\"col-6\">\n        <div class=\"text-center border border-primary rounded p-4\">\n          <ion-button routerLink=\"/kd\" routerDirection=\"root\">KD</ion-button>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"text-center border border-primary rounded p-4\">\n          <ion-button routerLink=\"/ipk\" routerDirection=\"root\">IPK</ion-button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-2\">\n      <div class=\"col-6\">\n        <div class=\"text-center border border-primary rounded p-4\">\n          <ion-button routerLink=\"/materi\" routerDirection=\"root\"\n            >Materi</ion-button\n          >\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"text-center border border-primary rounded p-4\">\n          <ion-button routerLink=\"/uji\" routerDirection=\"root\">Uji</ion-button>\n        </div>\n      </div>\n    </div>\n    <div class=\"row mt-2\">\n      <div class=\"col-6\">\n        <div class=\"text-center border border-primary rounded p-4\">\n          <ion-button routerLink=\"/pengembang\" routerDirection=\"root\"\n            >dev\n          </ion-button>\n        </div>\n      </div>\n      <div class=\"col-6\">\n        <div class=\"text-center border border-primary rounded p-4\">\n          <ion-button routerLink=\"/kalkulator\" routerDirection=\"root\"\n            >kalkulator</ion-button\n          >\n        </div>\n      </div>\n    </div>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/main-menu/main-menu-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/main-menu/main-menu-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: MainMenuPageRoutingModule */

  /***/
  function srcAppMainMenuMainMenuRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuPageRoutingModule", function () {
      return MainMenuPageRoutingModule;
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


    var _main_menu_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./main-menu.page */
    "./src/app/main-menu/main-menu.page.ts");

    var routes = [{
      path: "",
      component: _main_menu_page__WEBPACK_IMPORTED_MODULE_3__["MainMenuPage"]
    }, {
      path: "folder",
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | folder-folder-module */
        "folder-folder-module").then(__webpack_require__.bind(null,
        /*! ../folder/folder.module */
        "./src/app/folder/folder.module.ts")).then(function (m) {
          return m.FolderPageModule;
        });
      }
    }];

    var MainMenuPageRoutingModule = function MainMenuPageRoutingModule() {
      _classCallCheck(this, MainMenuPageRoutingModule);
    };

    MainMenuPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MainMenuPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/main-menu/main-menu.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/main-menu/main-menu.module.ts ***!
    \***********************************************/

  /*! exports provided: MainMenuPageModule */

  /***/
  function srcAppMainMenuMainMenuModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuPageModule", function () {
      return MainMenuPageModule;
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


    var _main_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./main-menu-routing.module */
    "./src/app/main-menu/main-menu-routing.module.ts");
    /* harmony import */


    var _main_menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./main-menu.page */
    "./src/app/main-menu/main-menu.page.ts");

    var MainMenuPageModule = function MainMenuPageModule() {
      _classCallCheck(this, MainMenuPageModule);
    };

    MainMenuPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _main_menu_routing_module__WEBPACK_IMPORTED_MODULE_5__["MainMenuPageRoutingModule"]],
      declarations: [_main_menu_page__WEBPACK_IMPORTED_MODULE_6__["MainMenuPage"]]
    })], MainMenuPageModule);
    /***/
  },

  /***/
  "./src/app/main-menu/main-menu.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/main-menu/main-menu.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMenuMainMenuPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#judulMainMenu {\n  text-shadow: #474747 3px 5px 2px, 2px 2px 2px rgba(24, 124, 206, 0);\n  color: #091c33;\n  background: #ffffff;\n  font-size: 2rem;\n}\n\nion-menu-button {\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi1tZW51L0Q6XFxQcm9qZWtcXGlvbmljX2FwcFxcemVyQXBwcy9zcmNcXGFwcFxcbWFpbi1tZW51XFxtYWluLW1lbnUucGFnZS5zY3NzIiwic3JjL2FwcC9tYWluLW1lbnUvbWFpbi1tZW51LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1FQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsK0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL21haW4tbWVudS9tYWluLW1lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2p1ZHVsTWFpbk1lbnUge1xyXG4gIHRleHQtc2hhZG93OiAjNDc0NzQ3IDNweCA1cHggMnB4LCAycHggMnB4IDJweCByZ2JhKDI0LCAxMjQsIDIwNiwgMCk7XHJcbiAgY29sb3I6ICMwOTFjMzM7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbn1cclxuXHJcbmlvbi1tZW51LWJ1dHRvbiB7XHJcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcclxufVxyXG4iLCIjanVkdWxNYWluTWVudSB7XG4gIHRleHQtc2hhZG93OiAjNDc0NzQ3IDNweCA1cHggMnB4LCAycHggMnB4IDJweCByZ2JhKDI0LCAxMjQsIDIwNiwgMCk7XG4gIGNvbG9yOiAjMDkxYzMzO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBmb250LXNpemU6IDJyZW07XG59XG5cbmlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main-menu/main-menu.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/main-menu/main-menu.page.ts ***!
    \*********************************************/

  /*! exports provided: MainMenuPage */

  /***/
  function srcAppMainMenuMainMenuPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainMenuPage", function () {
      return MainMenuPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainMenuPage = /*#__PURE__*/function () {
      function MainMenuPage() {
        _classCallCheck(this, MainMenuPage);
      }

      _createClass(MainMenuPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainMenuPage;
    }();

    MainMenuPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-menu',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-menu.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main-menu/main-menu.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-menu.page.scss */
      "./src/app/main-menu/main-menu.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], MainMenuPage);
    /***/
  }
}]);
//# sourceMappingURL=main-menu-main-menu-module-es5.js.map