(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-registrar-tarjeta-modal-registrar-tarjeta-module"], {
    /***/
    "Nch3":
    /*!***********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-registrar-tarjeta/modal-registrar-tarjeta.page.html ***!
      \***********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Nch3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-modal-header-back titulo=\"Añadir tarjeta\" icon_name=\"close-outline\"></app-modal-header-back>\n<ion-content>\n  <form>\n    <ion-item>\n      <ion-label position=\"floating\" [(ngModel)]=\"tarjeta.etiqueta\" name=\"etiqueta\">Número de tarjeta</ion-label>\n      <ion-input type=\"number\"></ion-input>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\" [(ngModel)]=\"tarjeta.etiqueta\" name=\"etiqueta\">Fecha de vto.</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">CVV</ion-label>\n          <ion-input type=\"number\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-button (click)=\"registrarTarjeta()\" expand=\"block\" shape=\"round\">\n      Registar\n    </ion-button>\n  </form>\n</ion-content>";
      /***/
    },

    /***/
    "VY6p":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/modal-registrar-tarjeta/modal-registrar-tarjeta.module.ts ***!
      \*********************************************************************************/

    /*! exports provided: ModalRegistrarTarjetaPageModule */

    /***/
    function VY6p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalRegistrarTarjetaPageModule", function () {
        return ModalRegistrarTarjetaPageModule;
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


      var _modal_registrar_tarjeta_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal-registrar-tarjeta-routing.module */
      "z8Iq");
      /* harmony import */


      var _modal_registrar_tarjeta_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal-registrar-tarjeta.page */
      "Z7JP");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var ModalRegistrarTarjetaPageModule = function ModalRegistrarTarjetaPageModule() {
        _classCallCheck(this, ModalRegistrarTarjetaPageModule);
      };

      ModalRegistrarTarjetaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_registrar_tarjeta_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalRegistrarTarjetaPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_modal_registrar_tarjeta_page__WEBPACK_IMPORTED_MODULE_6__["ModalRegistrarTarjetaPage"]]
      })], ModalRegistrarTarjetaPageModule);
      /***/
    },

    /***/
    "Z7JP":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/modal-registrar-tarjeta/modal-registrar-tarjeta.page.ts ***!
      \*******************************************************************************/

    /*! exports provided: ModalRegistrarTarjetaPage */

    /***/
    function Z7JP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalRegistrarTarjetaPage", function () {
        return ModalRegistrarTarjetaPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_registrar_tarjeta_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-registrar-tarjeta.page.html */
      "Nch3");
      /* harmony import */


      var _modal_registrar_tarjeta_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-registrar-tarjeta.page.scss */
      "bHZA");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ModalRegistrarTarjetaPage = /*#__PURE__*/function () {
        function ModalRegistrarTarjetaPage() {
          _classCallCheck(this, ModalRegistrarTarjetaPage);

          this.tarjeta = {
            etiqueta: '**123',
            marca: 'Visa'
          };
        }

        _createClass(ModalRegistrarTarjetaPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registrarTarjeta",
          value: function registrarTarjeta() {}
        }]);

        return ModalRegistrarTarjetaPage;
      }();

      ModalRegistrarTarjetaPage.ctorParameters = function () {
        return [];
      };

      ModalRegistrarTarjetaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-registrar-tarjeta',
        template: _raw_loader_modal_registrar_tarjeta_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_registrar_tarjeta_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalRegistrarTarjetaPage);
      /***/
    },

    /***/
    "bHZA":
    /*!*********************************************************************************!*\
      !*** ./src/app/pages/modal-registrar-tarjeta/modal-registrar-tarjeta.page.scss ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function bHZA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1yZWdpc3RyYXItdGFyamV0YS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "z8Iq":
    /*!*****************************************************************************************!*\
      !*** ./src/app/pages/modal-registrar-tarjeta/modal-registrar-tarjeta-routing.module.ts ***!
      \*****************************************************************************************/

    /*! exports provided: ModalRegistrarTarjetaPageRoutingModule */

    /***/
    function z8Iq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalRegistrarTarjetaPageRoutingModule", function () {
        return ModalRegistrarTarjetaPageRoutingModule;
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


      var _modal_registrar_tarjeta_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal-registrar-tarjeta.page */
      "Z7JP");

      var routes = [{
        path: '',
        component: _modal_registrar_tarjeta_page__WEBPACK_IMPORTED_MODULE_3__["ModalRegistrarTarjetaPage"]
      }];

      var ModalRegistrarTarjetaPageRoutingModule = function ModalRegistrarTarjetaPageRoutingModule() {
        _classCallCheck(this, ModalRegistrarTarjetaPageRoutingModule);
      };

      ModalRegistrarTarjetaPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModalRegistrarTarjetaPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-modal-registrar-tarjeta-modal-registrar-tarjeta-module-es5.js.map