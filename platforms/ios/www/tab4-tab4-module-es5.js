(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab4-tab4-module"], {
    /***/
    "/x3L":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab4/tab4.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function x3L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-title class=\"ion-text-start\">Cuenta</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item lines=\"none\" routerLink=\"/perfil-usuario\">\n      <ion-avatar slot=\"start\">\n        <img src=\"{{usuario.foto}}\">\n      </ion-avatar>\n      <ion-label>\n        <h2 class=\"ion-text-capitalize\">{{usuario.nombres}} {{usuario.apellidos}}</h2>\n        <h3 color=\"promoshop\">Ver información</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Favoritos\n      </ion-label>\n      <ion-icon name=\"heart-circle-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Pago\n      </ion-label>\n      <ion-icon name=\"card-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Ubicaciones guardadas\n      </ion-label>\n      <ion-icon name=\"location\" slot=\"start\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Promo puntos\n      </ion-label>\n      <ion-icon name=\"wallet-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n    <ion-item>\n      <ion-label>\n        Ayuda\n      </ion-label>\n      <ion-icon name=\"help-circle-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n    <ion-item (click)=\"logout()\">\n      <ion-label>\n        Cerrar sesión\n      </ion-label>\n      <ion-icon name=\"exit-outline\" slot=\"start\"></ion-icon>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n";
      /***/
    },

    /***/
    "7iO/":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab4/tab4.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function iO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-header {\n  background-color: orange;\n}\nion-header ion-toolbar {\n  background-color: red;\n}\nion-header ion-toolbar ion-title {\n  padding-left: 10px;\n  font-size: 20px;\n}\nion-item {\n  padding-top: 15px;\n  padding-bottom: 15px;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7QUFDSjtBQUFJO0VBQ0kscUJBQUE7QUFFUjtBQURRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBR1o7QUFFQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtBQUNKIiwiZmlsZSI6InRhYjQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gICAgaW9uLXRvb2xiYXJ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAgICAgaW9uLXRpdGxle1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4IDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWl0ZW17XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xufSJdfQ== */";
      /***/
    },

    /***/
    "8Rjo":
    /*!***************************************************!*\
      !*** ./src/app/pages/tab4/tab4-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: Tab4PageRoutingModule */

    /***/
    function Rjo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageRoutingModule", function () {
        return Tab4PageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab4.page */
      "rcec");

      var routes = [{
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_3__["Tab4Page"]
      }];

      var Tab4PageRoutingModule = function Tab4PageRoutingModule() {
        _classCallCheck(this, Tab4PageRoutingModule);
      };

      Tab4PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab4PageRoutingModule);
      /***/
    },

    /***/
    "GXrT":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab4/tab4.module.ts ***!
      \*******************************************/

    /*! exports provided: Tab4PageModule */

    /***/
    function GXrT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4PageModule", function () {
        return Tab4PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./tab4-routing.module */
      "8Rjo");
      /* harmony import */


      var _tab4_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab4.page */
      "rcec");

      var Tab4PageModule = function Tab4PageModule() {
        _classCallCheck(this, Tab4PageModule);
      };

      Tab4PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _tab4_routing_module__WEBPACK_IMPORTED_MODULE_5__["Tab4PageRoutingModule"]],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_6__["Tab4Page"]]
      })], Tab4PageModule);
      /***/
    },

    /***/
    "rcec":
    /*!*****************************************!*\
      !*** ./src/app/pages/tab4/tab4.page.ts ***!
      \*****************************************/

    /*! exports provided: Tab4Page */

    /***/
    function rcec(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab4Page", function () {
        return Tab4Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab4.page.html */
      "/x3L");
      /* harmony import */


      var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab4.page.scss */
      "7iO/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/usuario.service */
      "on2l");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/environments/environment */
      "AytR");

      var DOMINIO = src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].dominio;

      var Tab4Page = /*#__PURE__*/function () {
        function Tab4Page(usuarioService, router) {
          _classCallCheck(this, Tab4Page);

          this.usuarioService = usuarioService;
          this.router = router;
          this.usuario = {};
        }

        _createClass(Tab4Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usuario = this.usuarioService.getUsuario();
            console.log(this.usuario);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.usuarioService.logout();
          }
        }]);

        return Tab4Page;
      }();

      Tab4Page.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      Tab4Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab4Page);
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab4-tab4-module-es5.js.map