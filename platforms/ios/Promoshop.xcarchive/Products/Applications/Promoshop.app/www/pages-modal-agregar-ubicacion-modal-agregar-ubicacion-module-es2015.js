(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-agregar-ubicacion-modal-agregar-ubicacion-module"],{

/***/ "YMXl":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/modal-agregar-ubicacion/modal-agregar-ubicacion.page.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalAgregarUbicacionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAgregarUbicacionPage", function() { return ModalAgregarUbicacionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_agregar_ubicacion_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-agregar-ubicacion.page.html */ "hYIW");
/* harmony import */ var _modal_agregar_ubicacion_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-agregar-ubicacion.page.scss */ "l5hZ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let ModalAgregarUbicacionPage = class ModalAgregarUbicacionPage {
    constructor() { }
    ngOnInit() {
    }
};
ModalAgregarUbicacionPage.ctorParameters = () => [];
ModalAgregarUbicacionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-agregar-ubicacion',
        template: _raw_loader_modal_agregar_ubicacion_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_agregar_ubicacion_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalAgregarUbicacionPage);



/***/ }),

/***/ "hYIW":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-agregar-ubicacion/modal-agregar-ubicacion.page.html ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>modalAgregarUbicacion</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "j3Ni":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/modal-agregar-ubicacion/modal-agregar-ubicacion-routing.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalAgregarUbicacionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAgregarUbicacionPageRoutingModule", function() { return ModalAgregarUbicacionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_agregar_ubicacion_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-agregar-ubicacion.page */ "YMXl");




const routes = [
    {
        path: '',
        component: _modal_agregar_ubicacion_page__WEBPACK_IMPORTED_MODULE_3__["ModalAgregarUbicacionPage"]
    }
];
let ModalAgregarUbicacionPageRoutingModule = class ModalAgregarUbicacionPageRoutingModule {
};
ModalAgregarUbicacionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalAgregarUbicacionPageRoutingModule);



/***/ }),

/***/ "l5hZ":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/modal-agregar-ubicacion/modal-agregar-ubicacion.page.scss ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC1hZ3JlZ2FyLXViaWNhY2lvbi5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "plgE":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/modal-agregar-ubicacion/modal-agregar-ubicacion.module.ts ***!
  \*********************************************************************************/
/*! exports provided: ModalAgregarUbicacionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalAgregarUbicacionPageModule", function() { return ModalAgregarUbicacionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_agregar_ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-agregar-ubicacion-routing.module */ "j3Ni");
/* harmony import */ var _modal_agregar_ubicacion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-agregar-ubicacion.page */ "YMXl");







let ModalAgregarUbicacionPageModule = class ModalAgregarUbicacionPageModule {
};
ModalAgregarUbicacionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_agregar_ubicacion_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalAgregarUbicacionPageRoutingModule"]
        ],
        declarations: [_modal_agregar_ubicacion_page__WEBPACK_IMPORTED_MODULE_6__["ModalAgregarUbicacionPage"]]
    })
], ModalAgregarUbicacionPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-modal-agregar-ubicacion-modal-agregar-ubicacion-module-es2015.js.map