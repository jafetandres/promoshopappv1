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


      __webpack_exports__["default"] = "ion-tab-button {\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-promoshop);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQkE7RUFDSSxnQ0FBQTtFQUNBLDRDQUFBO0FBbEJKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGlvbi10YWItYmFyIHtcbi8vICAgICBib3R0b206IDEwcHg7XG4vLyAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4vLyAgICAgd2lkdGg6IDkyJTtcbi8vICAgICAvLyBtYXJnaW46IDAgYXV0bztcbi8vICAgICBvcGFjaXR5OiAwLjkgIWltcG9ydGFudDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcblxuLy8gICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuLy8gICAgIG1hcmdpbi1yaWdodDogYXV0bztcbi8vICAgICBsZWZ0OiAwO1xuLy8gICAgIHJpZ2h0OiAwO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vIH1cbi8vIGlvbi1pY29uIHtcbi8vICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG4vLyB9XG5pb24tdGFiLWJ1dHRvbiB7XG4gICAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgLS1jb2xvci1zZWxlY3RlZDogdmFyKC0taW9uLWNvbG9yLXByb21vc2hvcCk7XG59XG5cbi8vICAgICAmOjpiZWZvcmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4vLyAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuLy8gICAgICAgICB3aWR0aDogMjBweDtcbi8vICAgICAgICAgaGVpZ2h0OiAycHg7XG4vLyAgICAgfVxuXG4vLyAgICAgJi50YWItc2VsZWN0ZWQ6OmJlZm9yZSB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gaW9uLXRhYnMge1xuLy8gICAgIC0taWNvbi1hY3RpdmU6ICMyNzVlZmU7XG4vLyAgICAgLS1pY29uLWluYWN0aXZlOiAjNmM3NDg2O1xuLy8gICAgIC0taWNvbi1ob3ZlcjogIzk5YTNiYTtcblxuLy8gICAgIC0tdGV4dDogdmFyKC0taW9uLWNvbG9yLXByb21vc2hvcCk7XG4vLyAgICAgLS1jaXJjbGU6ICNlNGVjZmE7XG4vLyAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlndGgpO1xuLy8gICAgIC0tc2hhZG93OiByZ2JhKDE4LCAyMiwgMzMsIDAuMSk7XG5cbi8vIGlvbi10YWJzIHtcbiBcbi8vICAgICBpb24tdGFiLWJhciB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIHRvcDogOTAlO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuLy8gICAgICAgICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4vLyAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbi8vICAgICAgICAgaW9uLXRhYi1idXR0b24ge1xuLy8gICAgICAgICAgICAgcGVyc3BlY3RpdmU6IDEwMHB4O1xuLy8gICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICBcbi8vICAgICAgICAgICAgIGlvbi1sYWJlbCB7XG4vLyAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KSBza2V3WSgtMjBkZWcpO1xuLy8gICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuLy8gICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvbW9zaG9wKTtcbi8vICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuLy8gICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4vLyAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XG4vLyAgICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIGlvbi1pY29uIHtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByb21vc2hvcCk7XG4vLyAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMzVzIGVhc2U7XG4vLyAgICAgICAgICAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfVxuLy8gICAgIH1cbi8vIH1cbi8vIH1cbi8vIGlvbi10YWItYmFyIHtcbi8vIC0taWNvbi1hY3RpdmU6ICMyNzVFRkU7XG4vLyAtLWljb24taW5hY3RpdmU6ICM2Qzc0ODY7XG4vLyAtLWljb24taG92ZXI6ICM5OUEzQkE7XG4vLyAtLXRleHQ6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xuLy8gLS1jaXJjbGU6ICNFNEVDRkE7XG4vLyAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWd0aCk7XG4vLyAtLXNoYWRvdzogcmdiYSgxOCwgMjIsIDMzLCAuMSk7XG4vLyBib3JkZXItcmFkaXVzOiAwIDAgMTJweCAxMnB4O1xuLy8gYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4vLyB3aWR0aDogMTAwJTtcbi8vIGhlaWdodDogNjRweDtcbi8vIHBhZGRpbmc6IDAgMTJweDtcbi8vIGJveC1zaGFkb3c6IDAgOHB4IDE2cHggdmFyKC0tc2hhZG93KTtcbi8vICAgICB1bCB7XG4vLyAgICAgICAgIG1hcmdpbjogMDtcbi8vICAgICAgICAgcGFkZGluZzogMDtcbi8vICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbi8vICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgICBsaSB7XG4vLyAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICBmbGV4LWdyb3c6IDE7XG4vLyAgICAgICAgICAgICBhIHtcbi8vICAgICAgICAgICAgICAgICAtLWQ6IDE7XG4vLyAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuLy8gICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuLy8gICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4vLyAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4vLyAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbi8vICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4vLyAgICAgICAgICAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDApO1xuLy8gICAgICAgICAgICAgICAgIGRpdixcbi8vICAgICAgICAgICAgICAgICBzcGFuLFxuLy8gICAgICAgICAgICAgICAgIHN2ZyB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgZGl2IHtcbi8vICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtODQlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk0KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAxMDAlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBkb3duIC4zcyBsaW5lYXIgZm9yd2FyZHM7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIC4zcyBlYXNlLCBzdHJva2UgLjNzIGVhc2U7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWljb24pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWljb24pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4yNXMgZWFzZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1hY3RpdmUpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWFjdGl2ZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIHN0cm9uZyB7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbi8vICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbi8vICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQpO1xuLy8gICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2U7XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICY6aG92ZXIge1xuLy8gICAgICAgICAgICAgICAgICAgICBkaXYge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN2ZyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1ob3Zlcik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWhvdmVyKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICYuYWN0aXZlIHtcbi8vICAgICAgICAgICAgICAgICBhIHtcbi8vICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogNTtcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogaGlnaCAuMzVzIGxpbmVhciBmb3J3YXJkcyAuMDVzO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0taWNvbi1iLWFjdGl2ZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJva2U6IHZhcigtLWljb24tYi1hY3RpdmUpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IC4zcyBlYXNlIC4yNXM7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIHN0cm9uZyB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSguNik7XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyAgICAgZW0ge1xuLy8gICAgICAgICAtLW9mZnNldDogMDtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuLy8gICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgd2lkdGg6IDZweDtcbi8vICAgICAgICAgaGVpZ2h0OiA2cHg7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgYm90dG9tOiAxM3B4O1xuLy8gICAgICAgICBsZWZ0OiA0cHg7XG4vLyAgICAgICAgIG1hcmdpbjogMCAwIDAgLTNweDtcbi8vICAgICAgICAgei1pbmRleDogNDtcbi8vICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC40cyBlYXNlO1xuLy8gICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kb3QpO1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgodmFyKC0tb2Zmc2V0KSk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBAa2V5ZnJhbWVzIGhpZ2gge1xuLy8gICAgIDAlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoLjk0KTtcbi8vICAgICB9XG4vLyAgICAgMzMlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoY2FsYyh2YXIoLS1kKSAqIDEwZGVnKSk7XG4vLyAgICAgfVxuLy8gICAgIDY2JSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tZCkgKiAxMGRlZykpIHRyYW5zbGF0ZVkoLTFweCk7XG4vLyAgICAgfVxuLy8gICAgIDEwMCUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xcHgpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyBkb3duIHtcbi8vICAgICAwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZVkoLTFweCk7XG4vLyAgICAgfVxuLy8gICAgIDMzJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tZCkgKiAxMGRlZykpO1xuLy8gICAgIH1cbi8vICAgICA2NiUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKHZhcigtLWQpICogMTBkZWcpKSB0cmFuc2xhdGVZKDApO1xuLy8gICAgIH1cbi8vICAgICAxMDAlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoLjk0KSB0cmFuc2xhdGVZKDApO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gaHRtbCB7XG4vLyAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbi8vICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbi8vIH1cblxuLy8gKiB7XG4vLyAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbi8vICAgICAmOmJlZm9yZSxcbi8vICAgICAmOmFmdGVyIHtcbi8vICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbi8vICAgICB9XG4vLyB9XG4iXX0= */";
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