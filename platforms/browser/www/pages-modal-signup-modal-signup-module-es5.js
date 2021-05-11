(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-signup-modal-signup-module"], {
    /***/
    "6pdu":
    /*!***********************************************************!*\
      !*** ./src/app/pages/modal-signup/modal-signup.module.ts ***!
      \***********************************************************/

    /*! exports provided: ModalSignupPageModule */

    /***/
    function pdu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSignupPageModule", function () {
        return ModalSignupPageModule;
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


      var _modal_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal-signup-routing.module */
      "FQ/k");
      /* harmony import */


      var _modal_signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal-signup.page */
      "Jlcg");

      var ModalSignupPageModule = function ModalSignupPageModule() {
        _classCallCheck(this, ModalSignupPageModule);
      };

      ModalSignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_signup_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalSignupPageRoutingModule"]],
        declarations: [_modal_signup_page__WEBPACK_IMPORTED_MODULE_6__["ModalSignupPage"]]
      })], ModalSignupPageModule);
      /***/
    },

    /***/
    "FQ/k":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/modal-signup/modal-signup-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: ModalSignupPageRoutingModule */

    /***/
    function FQK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalSignupPageRoutingModule", function () {
        return ModalSignupPageRoutingModule;
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


      var _modal_signup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal-signup.page */
      "Jlcg");

      var routes = [{
        path: '',
        component: _modal_signup_page__WEBPACK_IMPORTED_MODULE_3__["ModalSignupPage"]
      }];

      var ModalSignupPageRoutingModule = function ModalSignupPageRoutingModule() {
        _classCallCheck(this, ModalSignupPageRoutingModule);
      };

      ModalSignupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModalSignupPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-modal-signup-modal-signup-module-es5.js.map