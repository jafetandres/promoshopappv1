(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ver-restaurantes-ver-restaurantes-module"], {
    /***/
    "MtL+":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/ver-restaurantes/ver-restaurantes.page.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function MtL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXItcmVzdGF1cmFudGVzLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "Q+AR":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ver-restaurantes/ver-restaurantes.page.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function QAR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<app-header-back href=\"/main\" titulo=\"Comida\"></app-header-back>\n<ion-content>\n    <app-restaurante-horizontal *ngFor=\"let restaurante of restaurantes\" [restaurante]=\"restaurante\"></app-restaurante-horizontal>\n</ion-content>";
      /***/
    },

    /***/
    "biCY":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/ver-restaurantes/ver-restaurantes.module.ts ***!
      \*******************************************************************/

    /*! exports provided: VerRestaurantesPageModule */

    /***/
    function biCY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerRestaurantesPageModule", function () {
        return VerRestaurantesPageModule;
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


      var _ver_restaurantes_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./ver-restaurantes-routing.module */
      "oMHf");
      /* harmony import */


      var _ver_restaurantes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./ver-restaurantes.page */
      "biOV");
      /* harmony import */


      var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../components/components.module */
      "j1ZV");

      var VerRestaurantesPageModule = function VerRestaurantesPageModule() {
        _classCallCheck(this, VerRestaurantesPageModule);
      };

      VerRestaurantesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _ver_restaurantes_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerRestaurantesPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
        declarations: [_ver_restaurantes_page__WEBPACK_IMPORTED_MODULE_6__["VerRestaurantesPage"]]
      })], VerRestaurantesPageModule);
      /***/
    },

    /***/
    "biOV":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/ver-restaurantes/ver-restaurantes.page.ts ***!
      \*****************************************************************/

    /*! exports provided: VerRestaurantesPage */

    /***/
    function biOV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerRestaurantesPage", function () {
        return VerRestaurantesPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_ver_restaurantes_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./ver-restaurantes.page.html */
      "Q+AR");
      /* harmony import */


      var _ver_restaurantes_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./ver-restaurantes.page.scss */
      "MtL+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _services_restaurante_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../services/restaurante.service */
      "LqXF");

      var VerRestaurantesPage = /*#__PURE__*/function () {
        function VerRestaurantesPage(restauranteService) {
          _classCallCheck(this, VerRestaurantesPage);

          this.restauranteService = restauranteService;
        }

        _createClass(VerRestaurantesPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.restauranteService.getListaRestaurantes().subscribe(function (resp) {
              _this.restaurantes = resp;
            });
          }
        }]);

        return VerRestaurantesPage;
      }();

      VerRestaurantesPage.ctorParameters = function () {
        return [{
          type: _services_restaurante_service__WEBPACK_IMPORTED_MODULE_4__["RestauranteService"]
        }];
      };

      VerRestaurantesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ver-restaurantes',
        template: _raw_loader_ver_restaurantes_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ver_restaurantes_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VerRestaurantesPage);
      /***/
    },

    /***/
    "oMHf":
    /*!***************************************************************************!*\
      !*** ./src/app/pages/ver-restaurantes/ver-restaurantes-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: VerRestaurantesPageRoutingModule */

    /***/
    function oMHf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerRestaurantesPageRoutingModule", function () {
        return VerRestaurantesPageRoutingModule;
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


      var _ver_restaurantes_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./ver-restaurantes.page */
      "biOV");

      var routes = [{
        path: '',
        component: _ver_restaurantes_page__WEBPACK_IMPORTED_MODULE_3__["VerRestaurantesPage"]
      }];

      var VerRestaurantesPageRoutingModule = function VerRestaurantesPageRoutingModule() {
        _classCallCheck(this, VerRestaurantesPageRoutingModule);
      };

      VerRestaurantesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerRestaurantesPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-ver-restaurantes-ver-restaurantes-module-es5.js.map