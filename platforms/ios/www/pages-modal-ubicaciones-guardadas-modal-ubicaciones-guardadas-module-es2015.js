(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-ubicaciones-guardadas-modal-ubicaciones-guardadas-module"],{

/***/ "OtpR":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.page.ts ***!
  \***************************************************************************************/
/*! exports provided: ModalUbicacionesGuardadasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUbicacionesGuardadasPage", function() { return ModalUbicacionesGuardadasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_ubicaciones_guardadas_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-ubicaciones-guardadas.page.html */ "vOVW");
/* harmony import */ var _modal_ubicaciones_guardadas_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-ubicaciones-guardadas.page.scss */ "YTlR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let ModalUbicacionesGuardadasPage = class ModalUbicacionesGuardadasPage {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() {
    }
    salirConArgumentos() {
        this.modalCtrl.dismiss({
            nombres: 'Felipe',
            pais: 'España'
        });
    }
};
ModalUbicacionesGuardadasPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
ModalUbicacionesGuardadasPage.propDecorators = {
    ubicaciones: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalUbicacionesGuardadasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-ubicaciones-guardadas',
        template: _raw_loader_modal_ubicaciones_guardadas_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_ubicaciones_guardadas_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalUbicacionesGuardadasPage);



/***/ }),

/***/ "PcIG":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ModalUbicacionesGuardadasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUbicacionesGuardadasPageModule", function() { return ModalUbicacionesGuardadasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_ubicaciones_guardadas_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-ubicaciones-guardadas-routing.module */ "bOXV");
/* harmony import */ var _modal_ubicaciones_guardadas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-ubicaciones-guardadas.page */ "OtpR");







let ModalUbicacionesGuardadasPageModule = class ModalUbicacionesGuardadasPageModule {
};
ModalUbicacionesGuardadasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_ubicaciones_guardadas_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalUbicacionesGuardadasPageRoutingModule"]
        ],
        declarations: [_modal_ubicaciones_guardadas_page__WEBPACK_IMPORTED_MODULE_6__["ModalUbicacionesGuardadasPage"]]
    })
], ModalUbicacionesGuardadasPageModule);



/***/ }),

/***/ "YTlR":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.page.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtb2RhbC11YmljYWNpb25lcy1ndWFyZGFkYXMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "bOXV":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/modal-ubicaciones-guardadas/modal-ubicaciones-guardadas-routing.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ModalUbicacionesGuardadasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalUbicacionesGuardadasPageRoutingModule", function() { return ModalUbicacionesGuardadasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_ubicaciones_guardadas_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-ubicaciones-guardadas.page */ "OtpR");




const routes = [
    {
        path: '',
        component: _modal_ubicaciones_guardadas_page__WEBPACK_IMPORTED_MODULE_3__["ModalUbicacionesGuardadasPage"]
    }
];
let ModalUbicacionesGuardadasPageRoutingModule = class ModalUbicacionesGuardadasPageRoutingModule {
};
ModalUbicacionesGuardadasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalUbicacionesGuardadasPageRoutingModule);



/***/ }),

/***/ "vOVW":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.page.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"salirConArgumentos()\" fill=\"clear\">\n        <ion-icon color=\"promoshop\" name=\"arrow-back-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Ubicaciones guardadas</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor=\"let ubicacion of ubicaciones\">\n      <ion-icon name=\"home-outline\" slot=\"start\" *ngIf=\"ubicacion.etiqueta == 'casa'\"></ion-icon>\n      <ion-icon name=\"business-outline\" slot=\"start\" *ngIf=\"ubicacion.etiqueta == 'trabajo'\"></ion-icon>\n      <ion-label>\n        <h2>{{ubicacion.titulo}}</h2>\n        <p>{{ubicacion.referencia}}</p>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=pages-modal-ubicaciones-guardadas-modal-ubicaciones-guardadas-module-es2015.js.map