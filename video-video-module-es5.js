function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["video-video-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/video/video.page.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/materi/video/video.page.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMateriVideoVideoPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Video</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n";
    /***/
  },

  /***/
  "./src/app/materi/video/video-routing.module.ts":
  /*!******************************************************!*\
    !*** ./src/app/materi/video/video-routing.module.ts ***!
    \******************************************************/

  /*! exports provided: VideoPageRoutingModule */

  /***/
  function srcAppMateriVideoVideoRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPageRoutingModule", function () {
      return VideoPageRoutingModule;
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


    var _video_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./video.page */
    "./src/app/materi/video/video.page.ts");

    var routes = [{
      path: '',
      component: _video_page__WEBPACK_IMPORTED_MODULE_3__["VideoPage"]
    }];

    var VideoPageRoutingModule = function VideoPageRoutingModule() {
      _classCallCheck(this, VideoPageRoutingModule);
    };

    VideoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], VideoPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/materi/video/video.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/materi/video/video.module.ts ***!
    \**********************************************/

  /*! exports provided: VideoPageModule */

  /***/
  function srcAppMateriVideoVideoModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPageModule", function () {
      return VideoPageModule;
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


    var _video_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./video-routing.module */
    "./src/app/materi/video/video-routing.module.ts");
    /* harmony import */


    var _video_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./video.page */
    "./src/app/materi/video/video.page.ts");

    var VideoPageModule = function VideoPageModule() {
      _classCallCheck(this, VideoPageModule);
    };

    VideoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _video_routing_module__WEBPACK_IMPORTED_MODULE_5__["VideoPageRoutingModule"]],
      declarations: [_video_page__WEBPACK_IMPORTED_MODULE_6__["VideoPage"]]
    })], VideoPageModule);
    /***/
  },

  /***/
  "./src/app/materi/video/video.page.scss":
  /*!**********************************************!*\
    !*** ./src/app/materi/video/video.page.scss ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMateriVideoVideoPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGVyaS92aWRlby92aWRlby5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/materi/video/video.page.ts":
  /*!********************************************!*\
    !*** ./src/app/materi/video/video.page.ts ***!
    \********************************************/

  /*! exports provided: VideoPage */

  /***/
  function srcAppMateriVideoVideoPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoPage", function () {
      return VideoPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var VideoPage = /*#__PURE__*/function () {
      function VideoPage() {
        _classCallCheck(this, VideoPage);
      }

      _createClass(VideoPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return VideoPage;
    }();

    VideoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-video',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./video.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/materi/video/video.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./video.page.scss */
      "./src/app/materi/video/video.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], VideoPage);
    /***/
  }
}]);
//# sourceMappingURL=video-video-module-es5.js.map