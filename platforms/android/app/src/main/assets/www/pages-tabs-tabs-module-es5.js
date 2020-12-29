(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"], {
    /***/
    "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function node_modulesRawLoaderDistCjsJsSrcAppPagesTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Buscar</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Pedidos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Cuenta</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n\n\n\n";
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs-routing.module.ts":
    /*!***************************************************!*\
      !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: TabsPageRoutingModule */

    /***/
    function srcAppPagesTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
        return TabsPageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/tabs/tabs.page.ts");

      var routes = [{
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [{
          path: 'tab1',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab1-tab1-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null,
            /*! ../tab1/tab1.module */
            "./src/app/pages/tab1/tab1.module.ts")).then(function (m) {
              return m.Tab1PageModule;
            });
          }
        }, {
          path: 'tab2',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab2-tab2-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null,
            /*! ../tab2/tab2.module */
            "./src/app/pages/tab2/tab2.module.ts")).then(function (m) {
              return m.Tab2PageModule;
            });
          }
        }, {
          path: 'tab3',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | tab3-tab3-module */
            [__webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null,
            /*! ../tab3/tab3.module */
            "./src/app/pages/tab3/tab3.module.ts")).then(function (m) {
              return m.Tab3PageModule;
            });
          }
        }, {
          path: 'tab4',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | tab4-tab4-module */
            "tab4-tab4-module").then(__webpack_require__.bind(null,
            /*! ../tab4/tab4.module */
            "./src/app/pages/tab4/tab4.module.ts")).then(function (m) {
              return m.Tab4PageModule;
            });
          }
        }, {
          path: '',
          redirectTo: '/tabs/tab1',
          pathMatch: 'full'
        }]
      }, {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
      }];

      var TabsPageRoutingModule = function TabsPageRoutingModule() {
        _classCallCheck(this, TabsPageRoutingModule);
      };

      TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], TabsPageRoutingModule);
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.module.ts":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.module.ts ***!
      \*******************************************/

    /*! exports provided: TabsPageModule */

    /***/
    function srcAppPagesTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
        return TabsPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tabs-routing.module */
      "./src/app/pages/tabs/tabs-routing.module.ts");
      /* harmony import */


      var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tabs.page */
      "./src/app/pages/tabs/tabs.page.ts");

      var TabsPageModule = function TabsPageModule() {
        _classCallCheck(this, TabsPageModule);
      };

      TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
      })], TabsPageModule);
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.page.scss":
    /*!*******************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function srcAppPagesTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-tabs ion-tab-bar {\n  position: absolute;\n  width: 100%;\n  top: 90%;\n  border-radius: 50px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n  margin-bottom: 15px;\n}\nion-tabs ion-tab-bar ion-tab-button {\n  perspective: 100px;\n  border-radius: 50px;\n}\nion-tabs ion-tab-bar ion-tab-button ion-label {\n  position: absolute;\n  transform: translateY(60px) skewY(-20deg);\n  transform-origin: left bottom;\n  color: var(--ion-color-promoshop);\n  font-weight: 700;\n  opacity: 0;\n  transition: all 0.35s ease;\n  will-change: opacity, transform, background-color;\n}\nion-tabs ion-tab-bar ion-tab-button ion-icon {\n  color: var(--ion-color-promoshop);\n  transition: all 0.35s ease;\n  will-change: opacity, transform, background-color;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnREk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0FBL0NSO0FBaURRO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtBQS9DWjtBQWlEWTtFQUNJLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsMEJBQUE7RUFDQSxpREFBQTtBQS9DaEI7QUFpRFk7RUFDSSxpQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7QUEvQ2hCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10YWItYmFyIHtcbi8vICAgICBib3R0b206IDEwcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDkyJTtcbi8vICAgICAvLyBtYXJnaW46IDAgYXV0bztcbi8vICAgICBvcGFjaXR5OiAwLjkgIWltcG9ydGFudDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gICAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cbi8vIGlvbi1pY29uIHtcbi8vICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4vLyB9XG4vLyBpb24tdGFiLWJ1dHRvbiB7XG4vLyAgICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4vLyAgICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByb21vc2hvcCk7XG5cbi8vICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgICAgICB3aWR0aDogMjBweDtcbi8vICAgICAgICAgaGVpZ2h0OiAycHg7XG4vLyAgICAgfVxuXG4vLyAgICAgJi50YWItc2VsZWN0ZWQ6OmJlZm9yZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gaW9uLXRhYnMge1xuLy8gICAgIC0taWNvbi1hY3RpdmU6ICMyNzVlZmU7XG4vLyAgICAgLS1pY29uLWluYWN0aXZlOiAjNmM3NDg2O1xuLy8gICAgIC0taWNvbi1ob3ZlcjogIzk5YTNiYTtcbi8vICAgICAtLXRleHQ6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xuLy8gICAgIC0tY2lyY2xlOiAjZTRlY2ZhO1xuLy8gICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ3RoKTtcbi8vICAgICAtLXNoYWRvdzogcmdiYSgxOCwgMjIsIDMzLCAwLjEpO1xuXG5pb24tdGFicyB7XG4gXG4gICAgaW9uLXRhYi1iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB0b3A6IDkwJTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgIGlvbi10YWItYnV0dG9uIHtcbiAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgXG4gICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCkgc2tld1koLTIwZGVnKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByb21vc2hvcCk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xuICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm0sIGJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xuICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm0sIGJhY2tncm91bmQtY29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyB9XG4vLyBpb24tdGFiLWJhciB7XG4vLyAtLWljb24tYWN0aXZlOiAjMjc1RUZFO1xuLy8gLS1pY29uLWluYWN0aXZlOiAjNkM3NDg2O1xuLy8gLS1pY29uLWhvdmVyOiAjOTlBM0JBO1xuLy8gLS10ZXh0OiB2YXIoLS1pb24tY29sb3ItcHJvbW9zaG9wKTtcbi8vIC0tY2lyY2xlOiAjRTRFQ0ZBO1xuLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlndGgpO1xuLy8gLS1zaGFkb3c6IHJnYmEoMTgsIDIyLCAzMywgLjEpO1xuLy8gYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcbi8vIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuLy8gd2lkdGg6IDEwMCU7XG4vLyBoZWlnaHQ6IDY0cHg7XG4vLyBwYWRkaW5nOiAwIDEycHg7XG4vLyBib3gtc2hhZG93OiAwIDhweCAxNnB4IHZhcigtLXNoYWRvdyk7XG4vLyAgICAgdWwge1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgei1pbmRleDogMTtcbi8vICAgICAgICAgbGkge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuLy8gICAgICAgICAgICAgYSB7XG4vLyAgICAgICAgICAgICAgICAgLS1kOiAxO1xuLy8gICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuLy8gICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgICAgICAgICAgICAgICBkaXYsXG4vLyAgICAgICAgICAgICAgICAgc3Bhbixcbi8vICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGRpdiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTg0JSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45NCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZG93biAuM3MgbGluZWFyIGZvcndhcmRzO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAuM3MgZWFzZSwgc3Ryb2tlIC4zcyBlYXNlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1pY29uKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1pY29uKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuMjVzIGVhc2U7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYWN0aXZlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1hY3RpdmUpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBzdHJvbmcge1xuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0taG92ZXIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1ob3Zlcik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4vLyAgICAgICAgICAgICAgICAgYSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGhpZ2ggLjM1cyBsaW5lYXIgZm9yd2FyZHMgLjA1cztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWljb24tYi1hY3RpdmUpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1pY29uLWItYWN0aXZlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZSAuMjVzO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJvbmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjYpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGVtIHtcbi8vICAgICAgICAgLS1vZmZzZXQ6IDA7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIHdpZHRoOiA2cHg7XG4vLyAgICAgICAgIGhlaWdodDogNnB4O1xuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgIGJvdHRvbTogMTNweDtcbi8vICAgICAgICAgbGVmdDogNHB4O1xuLy8gICAgICAgICBtYXJnaW46IDAgMCAwIC0zcHg7XG4vLyAgICAgICAgIHotaW5kZXg6IDQ7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZTtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZG90KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLW9mZnNldCkpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyBoaWdoIHtcbi8vICAgICAwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKC45NCk7XG4vLyAgICAgfVxuLy8gICAgIDMzJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tZCkgKiAxMGRlZykpO1xuLy8gICAgIH1cbi8vICAgICA2NiUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKHZhcigtLWQpICogMTBkZWcpKSB0cmFuc2xhdGVZKC0xcHgpO1xuLy8gICAgIH1cbi8vICAgICAxMDAlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlWSgtMXB4KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgZG93biB7XG4vLyAgICAgMCUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xcHgpO1xuLy8gICAgIH1cbi8vICAgICAzMyUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKHZhcigtLWQpICogMTBkZWcpKTtcbi8vICAgICB9XG4vLyAgICAgNjYlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoY2FsYyh2YXIoLS1kKSAqIDEwZGVnKSkgdHJhbnNsYXRlWSgwKTtcbi8vICAgICB9XG4vLyAgICAgMTAwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKC45NCkgdHJhbnNsYXRlWSgwKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGh0bWwge1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4vLyB9XG5cbi8vICoge1xuLy8gICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4vLyAgICAgJjpiZWZvcmUsXG4vLyAgICAgJjphZnRlciB7XG4vLyAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4vLyAgICAgfVxuLy8gfVxuIl19 */";
      /***/
    },

    /***/
    "./src/app/pages/tabs/tabs.page.ts":
    /*!*****************************************!*\
      !*** ./src/app/pages/tabs/tabs.page.ts ***!
      \*****************************************/

    /*! exports provided: TabsPage */

    /***/
    function srcAppPagesTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
        return TabsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var TabsPage = function TabsPage() {
        _classCallCheck(this, TabsPage);
      };

      TabsPage.ctorParameters = function () {
        return [];
      };

      TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tabs',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! raw-loader!./tabs.page.html */
        "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html"))["default"],
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
        /*! ./tabs.page.scss */
        "./src/app/pages/tabs/tabs.page.scss"))["default"]]
      })], TabsPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-tabs-tabs-module-es5.js.map