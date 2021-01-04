(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-perfil-usuario-perfil-usuario-module"], {
    /***/
    "3j2m":
    /*!*****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/perfil-usuario/perfil-usuario.page.html ***!
      \*****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function j2m(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header-back titulo=\"Perfil\" href=\"/tab4\"></app-header-back>\n\n\n<ion-content>\n  <ion-avatar>\n    <img src=\"{{usuario.foto}}\">\n  </ion-avatar>\n  <ion-list class=\"ion-no-margin\">\n\n    <!-- <ion-list-header lines=\"full\" class=\"ion-no-border\">\n      <ion-label>\n        Informacion\n      </ion-label>\n    </ion-list-header> -->\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Nombres</ion-label>\n          <ion-input name=\"nombres\" type=\"text\" [(ngModel)]=\"usuario.nombres\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Apellidos</ion-label>\n          <ion-input name=\"apellidos\" type=\"text\" [(ngModel)]=\"usuario.apellidos\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-label position=\"floating\">Correo electrónico</ion-label>\n      <ion-input name=\"email\" type=\"email\" [(ngModel)]=\"usuario.email\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Fecha de nacimiento</ion-label>\n      <ion-datetime name=\"fecha_nacimiento\" [(ngModel)]=\"usuario.fecha_nacimiento\" placeholder=\"Seleccionar fecha\"></ion-datetime>\n    </ion-item>\n   \n\n    <!-- <ion-item>\n      <ion-label position=\"floating\">Fecha de nacimiento</ion-label>\n      <ion-input name=\"fecha_nacimiento\" type=\"date\" [(ngModel)]=\"usuario.fecha_nacimiento\"></ion-input>\n    </ion-item> -->\n  </ion-list>\n</ion-content>";
      /***/
    },

    /***/
    "IeM3":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/perfil-usuario/perfil-usuario-routing.module.ts ***!
      \***********************************************************************/

    /*! exports provided: PerfilUsuarioPageRoutingModule */

    /***/
    function IeM3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilUsuarioPageRoutingModule", function () {
        return PerfilUsuarioPageRoutingModule;
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


      var _perfil_usuario_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./perfil-usuario.page */
      "hLiu");

      var routes = [{
        path: '',
        component: _perfil_usuario_page__WEBPACK_IMPORTED_MODULE_3__["PerfilUsuarioPage"]
      }];

      var PerfilUsuarioPageRoutingModule = function PerfilUsuarioPageRoutingModule() {
        _classCallCheck(this, PerfilUsuarioPageRoutingModule);
      };

      PerfilUsuarioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], PerfilUsuarioPageRoutingModule);
      /***/
    },

    /***/
    "hLiu":
    /*!*************************************************************!*\
      !*** ./src/app/pages/perfil-usuario/perfil-usuario.page.ts ***!
      \*************************************************************/

    /*! exports provided: PerfilUsuarioPage */

    /***/
    function hLiu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilUsuarioPage", function () {
        return PerfilUsuarioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_perfil_usuario_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./perfil-usuario.page.html */
      "3j2m");
      /* harmony import */


      var _perfil_usuario_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./perfil-usuario.page.scss */
      "ltyn");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/usuario.service */
      "on2l");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../environments/environment */
      "AytR");

      var DOMINIO = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].dominio;

      var PerfilUsuarioPage = /*#__PURE__*/function () {
        function PerfilUsuarioPage(usuarioService) {
          _classCallCheck(this, PerfilUsuarioPage);

          this.usuarioService = usuarioService;
          this.usuario = {};
        }

        _createClass(PerfilUsuarioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.usuario = this.usuarioService.getUsuario();
          }
        }]);

        return PerfilUsuarioPage;
      }();

      PerfilUsuarioPage.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
        }];
      };

      PerfilUsuarioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-perfil-usuario',
        template: _raw_loader_perfil_usuario_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_perfil_usuario_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PerfilUsuarioPage);
      /***/
    },

    /***/
    "ltyn":
    /*!***************************************************************!*\
      !*** ./src/app/pages/perfil-usuario/perfil-usuario.page.scss ***!
      \***************************************************************/

    /*! exports provided: default */

    /***/
    function ltyn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content ion-avatar {\n  margin: 0 auto;\n  background-color: rebeccapurple;\n  width: 200px;\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3BlcmZpbC11c3VhcmlvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGNBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBRFIiLCJmaWxlIjoicGVyZmlsLXVzdWFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICBcbiAgICBpb24tYXZhdGFye1xuICAgICAgICBtYXJnaW4gOiAwIGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlYmVjY2FwdXJwbGU7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgLy8gZGlzcGxheTogZmxleDtcbiAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICAvLyBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICAgICAgLy8gd2lkdGg6IDI1MHB4O1xuICAgICAgICAgICAgLy8gYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIC8vIGJveC1zaGFkb3c6IDAgMCA1cHggZ3JheTtcbiAgICAgICAgICAgIC8vIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
      /***/
    },

    /***/
    "pMbb":
    /*!***************************************************************!*\
      !*** ./src/app/pages/perfil-usuario/perfil-usuario.module.ts ***!
      \***************************************************************/

    /*! exports provided: PerfilUsuarioPageModule */

    /***/
    function pMbb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PerfilUsuarioPageModule", function () {
        return PerfilUsuarioPageModule;
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


      var _perfil_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./perfil-usuario-routing.module */
      "IeM3");
      /* harmony import */


      var _perfil_usuario_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./perfil-usuario.page */
      "hLiu");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var PerfilUsuarioPageModule = function PerfilUsuarioPageModule() {
        _classCallCheck(this, PerfilUsuarioPageModule);
      };

      PerfilUsuarioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _perfil_usuario_routing_module__WEBPACK_IMPORTED_MODULE_5__["PerfilUsuarioPageRoutingModule"]],
        declarations: [_perfil_usuario_page__WEBPACK_IMPORTED_MODULE_6__["PerfilUsuarioPage"]]
      })], PerfilUsuarioPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-perfil-usuario-perfil-usuario-module-es5.js.map