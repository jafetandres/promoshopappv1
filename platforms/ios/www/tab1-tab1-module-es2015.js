(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoria/categoria.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoria/categoria.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card>\n  <!-- <img *ngIf=\"categoria.id == 9\" src=\"/assets/comida-china.png\" /> -->\n  <img src=\"{{categoria.portada}}\" />\n  <ion-card-header>\n    <ion-card-subtitle>{{categoria.nombre}}</ion-card-subtitle>\n    <ion-card-title>41 Restaurantes</ion-card-title>\n  </ion-card-header>\n\n  <!-- <div class=\"card-title\"><strong></strong></div>\n  <div class=\"card-subtitle\"></div>  -->\n</ion-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/categorias.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/categorias.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-card-header>\n    <ion-card-title>{{categoria.nombre}}</ion-card-title>\n  </ion-card-header> -->\n<ion-slides [options]=\"slideOpts\">\n  <ng-container *ngFor=\"let categoria of categorias | async\">\n    <ion-slide *ngIf=\"categoria.categoria_padre == 5\">\n      <app-categoria [categoria]=\"categoria\"></app-categoria>\n    </ion-slide>\n  </ng-container>\n</ion-slides>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/empresa.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/empresa.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-card class=\"card-background-page\">\n  <!-- <img src=\"https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg\" alt=\"\">\n  <ion-card-header>\n    <ion-card-title>Comida Rapida</ion-card-title>\n  </ion-card-header> -->\n\n  <img src=\"https://scx2.b-cdn.net/gfx/news/hires/2016/howcuttingdo.jpg\"/>\n  <div class=\"card-title\"><strong>Comida Rapida</strong></div>\n  <div class=\"card-subtitle\">41 Restaurantes</div>\n</ion-card>\n  \n   \n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-chip >\n      <ion-icon name=\"navigate-circle-outline\"></ion-icon>\n      <ion-label>Av. Remigio Crespo 13-18</ion-label>\n    </ion-chip>\n    <ion-buttons slot=\"end\">\n      <ion-button id=\"changeText\" onClick=\"toggleText()\">\n        <ion-icon name=\"options-outline\" color=\"dark\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content color=\"light\">\n  <ion-card class=\"card-principal\">\n    <ion-card-header>\n      <ion-slides pager=\"ios\" [options]=\"publicidadSlide\">\n        <ion-slide>\n          <img src=\"/assets/slide1.jpeg\">\n        </ion-slide>\n        <ion-slide>\n          <img src=\"/assets/slide1.jpeg\">\n        </ion-slide>\n        <!-- <ion-slide>\n          <img src=\"/assets/slide2.png\" >\n        </ion-slide> -->\n      </ion-slides>\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <ion-slides mode=\"ios\" pager=\"false\" [options]=\"buttonsSlide\">\n        <ion-slide>\n          <ion-button (click)=\"onClick()\" fill=\"clear\">\n            <div>\n              <ion-icon src=\"/assets/icon/comida-icon.svg\"></ion-icon>\n              <small> Comida</small>\n            </div>\n          </ion-button>\n        </ion-slide>\n        <ion-slide>\n          <ion-button (click)=\"onClick()\" fill=\"clear\">\n            <div>\n              <ion-icon src=\"/assets/icon/express-icon.svg\"></ion-icon>\n              <small>Envio Express</small>\n            </div>\n          </ion-button>\n        </ion-slide>\n        <ion-slide>\n          <ion-button (click)=\"onClick()\" fill=\"clear\">\n            <div>\n              <ion-icon src=\"/assets/icon/raspa-gana-icon.svg\"></ion-icon>\n              <small>Raspa y Gana</small>\n            </div>\n          </ion-button>\n        </ion-slide>\n        <ion-slide>\n          <ion-button (click)=\"onClick()\" fill=\"clear\">\n            <div>\n              <ion-icon src=\"/assets/icon/ofertas-icon.svg\"></ion-icon>\n              <small> Ofertas</small>\n            </div>\n          </ion-button>\n        </ion-slide>\n        <ion-slide>\n          <ion-button (click)=\"onClick()\" fill=\"clear\" color=\"dark\">\n            <div>\n              <ion-icon src=\"/assets/icon/servicios-icon.svg\"></ion-icon>\n              <small> Servicios</small>\n            </div>\n          </ion-button>\n        </ion-slide>\n      </ion-slides>\n    </ion-card-content>\n  </ion-card>\n\n\n  <!-- Refresher -->\n\n\n  <!-- Categorias -->\n  <app-categorias [categorias]=\"categorias\"></app-categorias>\n\n  <ion-card class=\"card-container\">\n    <h4>Marketplace</h4>\n    <ion-slides mode=\"ios\" pager=\"false\" scrollbar=\"ios\" [options]=\"marketplaceSlide\">\n      <ion-slide>\n        <ion-card >\n          <img src=\"https://d500.epimg.net/cincodias/imagenes/2020/11/06/smartphones/1604648913_817311_1604648985_noticia_normal.jpg\" />\n          <ion-card-header>\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"6\">\n                  Touch Cell \n                </ion-col>\n            \n                <ion-col size=\"6\" style=\"text-align: right;\">\n                  <ion-label>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n           \n            \n          </ion-card-title>\n            <ion-card-subtitle>Costo de envio: $1.50</ion-card-subtitle>\n\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n      <ion-slide>\n        <ion-card >\n          <img src=\"https://ugolini.co.th/wp-content/uploads/9839/want-to-change-up-your-home-decor-enter-foerni-hong-kongs-first-luxe-furniture-subscription.jpg\" />\n          <ion-card-header>\n            <ion-card-title>\n              <ion-row>\n                <ion-col size=\"6\">\n                  Kikilla\n                </ion-col>\n            \n                <ion-col size=\"6\" style=\"text-align: right;\">\n                  <ion-label>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                    <ion-icon src=\"/assets/star.svg\" ></ion-icon>\n                  </ion-label>\n                </ion-col>\n              </ion-row>\n           \n            \n          </ion-card-title>\n            <ion-card-subtitle>Costo de envio: $0.85</ion-card-subtitle>\n\n          </ion-card-header>\n        </ion-card>\n      </ion-slide>\n    </ion-slides>\n   \n  </ion-card>\n\n\n  <!-- Infinite Scroll-->\n\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/components/categoria/categoria.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/categoria/categoria.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  margin-bottom: 10px;\n}\nion-card ion-card-header ion-card-title {\n  font-size: 20px;\n}\nion-card img {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jYXRlZ29yaWEvY2F0ZWdvcmlhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlEQTtFQUdDLG1CQUFBO0FBbEREO0FBb0RJO0VBQ0UsZUFBQTtBQWxETjtBQXFERTtFQUVFLGFBQUE7QUFwREoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NhdGVnb3JpYS9jYXRlZ29yaWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuY2F0ZWdvcmlhIHtcbi8vICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4vLyAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAxMHB4IC01cHggcmdiYSgwLDAsMCwwLjUpO1xuLy8gICAgIGJveC1zaGFkb3c6IDAgMnB4IDEwcHggLTVweCByZ2JhKDAsMCwwLDAuNSk7XG4vLyB9XG5cbi8vIC5pbWFnZS1zbGlkZSB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAyNTBweDtcblxuLy8gICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcblxuLy8gICAgIC8qIEZ1bGwgaGVpZ2h0ICovXG4vLyAgICAgLy8gaGVpZ2h0OiAxMDAlO1xuXG4vLyAgICAgLyogSW1hZ2VuIGNlbnRyYWRhIHkgY29sb2NhZGEgZGUgZm9ybWEgZWxlZ2FudGUgKi9cbi8vICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4vLyAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbi8vICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuLy8gfVxuXG4vLyBpb24tY2FyZHtcbi8vICAgICBib3JkZXItcmFkaXVzOiAwO1xuLy8gfVxuXG4vLyBpb24tY2FyZCB7XG4vLyAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbi8vICAgICBtYXJnaW4tdG9wOiAwcHg7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogMDtcbi8vICAgICAuY2FyZC10aXRsZSB7XG4vLyAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgdG9wOiAzNiU7XG4vLyAgICAgICAgIGZvbnQtc2l6ZTogMi4wZW07XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbi8vICAgICAgICAgY29sb3I6ICNmZmY7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5jYXJkLXN1YnRpdGxlIHtcbi8vICAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbi8vICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuLy8gICAgICAgICB0b3A6IDUyJTtcbi8vICAgICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgICAgIGNvbG9yOiAjZmZmO1xuLy8gICAgICAgfVxuLy8gICB9XG5cbmlvbi1jYXJkIHtcbiAgLy8gaGVpZ2h0OiAyMDBweDtcbiBcbiBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgaW9uLWNhcmQtdGl0bGV7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICB9XG4gIGltZ3tcbiAgICAvLyB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/categoria/categoria.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/categoria/categoria.component.ts ***!
  \*************************************************************/
/*! exports provided: CategoriaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriaComponent", function() { return CategoriaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CategoriaComponent = class CategoriaComponent {
    constructor() {
        this.categoria = {};
        console.log("entro a categoria");
    }
    ngOnInit() { }
};
CategoriaComponent.ctorParameters = () => [];
CategoriaComponent.propDecorators = {
    categoria: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
CategoriaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categoria',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categoria.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categoria/categoria.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categoria.component.scss */ "./src/app/components/categoria/categoria.component.scss")).default]
    })
], CategoriaComponent);



/***/ }),

/***/ "./src/app/components/categorias/categorias.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2F0ZWdvcmlhcy9jYXRlZ29yaWFzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/categorias/categorias.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/categorias/categorias.component.ts ***!
  \***************************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CategoriasComponent = class CategoriasComponent {
    constructor() {
        this.slideOpts = {
            slidesPerView: 1.7,
            freeMode: true
        };
    }
    ngOnInit() { }
};
CategoriasComponent.ctorParameters = () => [];
CategoriasComponent.propDecorators = {
    categorias: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
CategoriasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categorias',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categorias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/categorias/categorias.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categorias.component.scss */ "./src/app/components/categorias/categorias.component.scss")).default]
    })
], CategoriasComponent);



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categoria/categoria.component */ "./src/app/components/categoria/categoria.component.ts");
/* harmony import */ var _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categorias/categorias.component */ "./src/app/components/categorias/categorias.component.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./empresa/empresa.component */ "./src/app/components/empresa/empresa.component.ts");








let ComponentsModule = class ComponentsModule {
};
ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _categoria_categoria_component__WEBPACK_IMPORTED_MODULE_4__["CategoriaComponent"],
            _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_5__["CategoriasComponent"],
            _empresa_empresa_component__WEBPACK_IMPORTED_MODULE_7__["EmpresaComponent"]
        ],
        exports: [
            _categorias_categorias_component__WEBPACK_IMPORTED_MODULE_5__["CategoriasComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_6__["PipesModule"]
        ]
    })
], ComponentsModule);



/***/ }),

/***/ "./src/app/components/empresa/empresa.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/empresa/empresa.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  position: relative;\n  text-align: center;\n  margin-top: 0px;\n}\nion-card .card-title {\n  position: absolute;\n  top: 36%;\n  font-size: 2em;\n  width: 100%;\n  font-weight: bold;\n  color: #fff;\n}\nion-card .card-subtitle {\n  font-size: 1em;\n  position: absolute;\n  top: 52%;\n  width: 100%;\n  color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lbXByZXNhL2VtcHJlc2EuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0U7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQU5KO0FBT0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUxSO0FBUU07RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFOUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZW1wcmVzYS9lbXByZXNhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW9uLWNhcmR7XG4vLyAgICAgbWFyZ2luLXRvcDogMHB4O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbi8vIH1cblxuXG5cbiAgaW9uLWNhcmQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMHB4O1xuICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDM2JTtcbiAgICAgICAgZm9udC1zaXplOiAyLjBlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICBcbiAgICAgIC5jYXJkLXN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjBlbTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUyJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgfVxuICB9XG4gIFxuXG4gIFxuXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/empresa/empresa.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/empresa/empresa.component.ts ***!
  \*********************************************************/
/*! exports provided: EmpresaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaComponent", function() { return EmpresaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let EmpresaComponent = class EmpresaComponent {
    constructor() {
        this.categoria = {};
    }
    ngOnInit() { }
};
EmpresaComponent.ctorParameters = () => [];
EmpresaComponent.propDecorators = {
    categoria: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] }]
};
EmpresaComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-empresa',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./empresa.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/empresa/empresa.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./empresa.component.scss */ "./src/app/components/empresa/empresa.component.scss")).default]
    })
], EmpresaComponent);



/***/ }),

/***/ "./src/app/pages/tab1/tab1-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tab1/tab1-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.module.ts ***!
  \*******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "./src/app/pages/tab1/tab1.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab1-routing.module */ "./src/app/pages/tab1/tab1-routing.module.ts");









let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab1_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab1PageRoutingModule"],
        ],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]]
    })
], Tab1PageModule);



/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar {\n  margin: 10px 0;\n  --border-style: none;\n}\nion-header ion-toolbar ion-chip {\n  padding: 25px;\n  width: 90%;\n  margin-right: 10px;\n  border-radius: 50px;\n  --background: rgb(238, 238, 238);\n}\nion-header ion-toolbar ion-chip ion-icon {\n  font-size: 25px;\n  color: black;\n}\nion-slides {\n  --bullet-background: #ffff;\n  --bullet-background-active: #ffff;\n}\n.card-container {\n  border-radius: 0;\n  width: 100%;\n  padding: 0px;\n  margin-top: 0px;\n  margin-left: 0px;\n  margin-bottom: 10px;\n}\n.card-container h4 {\n  margin-left: 10px;\n  color: black;\n  margin-bottom: 0px;\n}\n.card-container ion-slides {\n  margin: 0;\n}\n.card-container ion-slides ion-slide ion-card img {\n  height: 150px;\n  width: 100%;\n}\n.card-container ion-slides ion-slide ion-card ion-card-header {\n  margin: 0;\n  padding: 5px;\n  text-align: left;\n}\n.card-container ion-slides ion-slide ion-card ion-card-header ion-card-title {\n  font-size: 15px;\n}\n.card-container ion-slides ion-slide ion-card ion-card-header ion-card-subtitle {\n  text-transform: initial;\n  font-weight: 500;\n}\n.card-principal {\n  border-radius: 0;\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n}\n.card-principal ion-card-header {\n  padding: 0;\n  margin: 0;\n}\n.card-principal ion-card-header ion-slides {\n  padding: 0;\n  margin: 0;\n  background-color: green;\n}\n.card-principal ion-card-header ion-slides ion-slide {\n  background-color: aqua;\n  padding: 0;\n  margin: 0;\n}\n.card-principal ion-card-header ion-slides ion-slide img {\n  width: 100% !important;\n  padding: 0;\n  margin: 0;\n  background-color: black;\n}\n.card-principal ion-card-content {\n  padding-right: 0px;\n  padding-left: 0px;\n  padding-bottom: 0;\n  color: var(--ion-color-dark);\n}\n.card-principal ion-card-content h4 {\n  font-size: 21pt;\n  margin: 5px;\n}\n.card-principal ion-card-content ion-slides {\n  height: 100% !important;\n  margin-left: 0;\n  margin-top: 20px;\n  margin-bottom: 5px;\n}\n.card-principal ion-card-content ion-slides ion-slide ion-button {\n  height: 100%;\n}\n.card-principal ion-card-content ion-slides ion-slide ion-button div {\n  display: flex;\n  flex-flow: column nowrap;\n  align-items: center;\n  color: var(--ion-color-dark);\n}\n.card-principal ion-card-content ion-slides ion-slide ion-button div ion-icon {\n  font-size: 36px;\n}\n.card-principal ion-card-content ion-slides ion-slide ion-button div small {\n  margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUVJLGNBQUE7RUFDQSxvQkFBQTtBQURSO0FBR1E7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQURaO0FBR1k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQURoQjtBQU9BO0VBQ0ksMEJBQUE7RUFDQSxpQ0FBQTtBQUpKO0FBT0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQUtJO0VBQ0ksaUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFIUjtBQUtJO0VBQ0ksU0FBQTtBQUhSO0FBTWdCO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFKcEI7QUFNZ0I7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBSnBCO0FBS29CO0VBQ0ksZUFBQTtBQUh4QjtBQUtvQjtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7QUFIeEI7QUFnQkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFJQSxZQUFBO0VBRUEsV0FBQTtBQWpCSjtBQWtCSTtFQUNJLFVBQUE7RUFDQSxTQUFBO0FBaEJSO0FBa0JRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtBQWhCWjtBQWtCWTtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFoQmhCO0FBa0JnQjtFQUNJLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFFQSx1QkFBQTtBQWpCcEI7QUF1Qkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFFQSw0QkFBQTtBQXRCUjtBQXVCUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0FBckJaO0FBd0JRO0VBQ0ksdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQXRCWjtBQWdDZ0I7RUFDSSxZQUFBO0FBOUJwQjtBQWdDb0I7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUVBLDRCQUFBO0FBL0J4QjtBQWdDd0I7RUFDSSxlQUFBO0FBOUI1QjtBQWdDd0I7RUFDSSxZQUFBO0FBOUI1QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taGVhZGVyIHtcbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC8vIC0tYmFja2dyb3VuZDogYXF1YTtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgICAgIC0tYm9yZGVyLXN0eWxlOiBub25lO1xuXG4gICAgICAgIGlvbi1jaGlwIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogcmdiKDIzOCwgMjM4LCAyMzgpO1xuXG4gICAgICAgICAgICBpb24taWNvbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogI2ZmZmY7XG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6ICNmZmZmO1xufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaDQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgfVxuICAgIGlvbi1zbGlkZXMge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGlvbi1zbGlkZSB7XG4gICAgICAgICAgICBpb24tY2FyZCB7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW9uLWNhcmQtaGVhZGVye1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgaW9uLWNhcmQtdGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaW9uLWNhcmQtc3VidGl0bGV7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTppbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBpb24taWNvbiB7XG4vLyAgICAgZm9udC1zaXplOiAzNXB4O1xuLy8gfVxuXG4uY2FyZC1wcmluY2lwYWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLy8gcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIC8vIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICAvLyBoZWlnaHQ6IDEwZW07XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaW9uLWNhcmQtaGVhZGVyIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuXG4gICAgICAgIGlvbi1zbGlkZXMge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xuXG4gICAgICAgICAgICBpb24tc2xpZGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGFxdWE7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaW9uLWNhcmQtY29udGVudCB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFwdDtcbiAgICAgICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaW9uLXNsaWRlcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgIC8vIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuXG4gICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xuICAgICAgICAgICAgaW9uLXNsaWRlIHtcbiAgICAgICAgICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcblxuICAgICAgICAgICAgICAgIC8vIHBhZGRpbmc6IDtcblxuICAgICAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWZsb3c6IGNvbHVtbiBub3dyYXA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhcmspO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNtYWxsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIC5jYXJkLXByaW5jaXBhbC1oZWFkZXIge1xuLy8gICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG5cbi8vIC5zbGlkZS1pbWFnZSB7XG4vLyAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG4vLyB9XG4iXX0= */");

/***/ }),

/***/ "./src/app/pages/tab1/tab1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab1/tab1.page.ts ***!
  \*****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_httpgenerico_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/httpgenerico.service */ "./src/app/services/httpgenerico.service.ts");
/* harmony import */ var _services_categorias_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/categorias.service */ "./src/app/services/categorias.service.ts");




let Tab1Page = class Tab1Page {
    constructor(categoriasService, httpgenerico) {
        this.categoriasService = categoriasService;
        this.httpgenerico = httpgenerico;
        this.buttonsSlide = {
            slidesPerView: 3.5
        };
        this.marketplaceSlide = {
            slidesPerView: 1.2
        };
        this.publicidadSlide = {
            touchReleaseOnEdges: true
        };
    }
    ngOnInit() {
        this.categorias = this.categoriasService.getCategorias();
        // this.subcategorias=this.categoriasService.getSubCategorias();
        let peticion = { pagina: 1, query: "todos" };
        console.log(this.httpgenerico.postAuth("procesador/getComprasUsuario", peticion));
    }
};
Tab1Page.ctorParameters = () => [
    { type: _services_categorias_service__WEBPACK_IMPORTED_MODULE_3__["CategoriasService"] },
    { type: src_app_services_httpgenerico_service__WEBPACK_IMPORTED_MODULE_2__["HttpgenericoService"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab1/tab1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab1.page.scss */ "./src/app/pages/tab1/tab1.page.scss")).default]
    })
], Tab1Page);



/***/ }),

/***/ "./src/app/pipes/imagen.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/pipes/imagen.pipe.ts ***!
  \**************************************/
/*! exports provided: ImagenPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagenPipe", function() { return ImagenPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const URL = '';
let ImagenPipe = class ImagenPipe {
    transform(img, size) {
        if (!img) {
            return;
        }
        const imgURL = `${URL}/${img}`;
        console.log('url', imgURL);
        return imgURL;
    }
};
ImagenPipe = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
        name: 'imagen'
    })
], ImagenPipe);



/***/ }),

/***/ "./src/app/pipes/pipes.module.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/pipes.module.ts ***!
  \***************************************/
/*! exports provided: PipesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesModule", function() { return PipesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./imagen.pipe */ "./src/app/pipes/imagen.pipe.ts");




let PipesModule = class PipesModule {
};
PipesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_imagen_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagenPipe"]],
        exports: [
            _imagen_pipe__WEBPACK_IMPORTED_MODULE_3__["ImagenPipe"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ]
    })
], PipesModule);



/***/ }),

/***/ "./src/app/services/categorias.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/categorias.service.ts ***!
  \************************************************/
/*! exports provided: CategoriasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasService", function() { return CategoriasService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
let CategoriasService = class CategoriasService {
    constructor(http) {
        this.http = http;
    }
    getCategorias() {
        return this.http.get(`http://192.168.100.12:8000/api/v1/categoriaEmpresaProducto/`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log));
    }
    getSubCategorias(id_categoria) {
        return this.http.get(`${URL}/categorias/recuperarSubcategorias`, id_categoria).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(console.log));
    }
};
CategoriasService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoriasService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoriasService);



/***/ }),

/***/ "./src/app/services/httpgenerico.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/httpgenerico.service.ts ***!
  \**************************************************/
/*! exports provided: HttpgenericoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpgenericoService", function() { return HttpgenericoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
let HttpgenericoService = class HttpgenericoService {
    constructor(http, storage) {
        this.http = http;
        this.storage = storage;
        this.token = "";
        this.storage.set("id_token", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJwcm9tb2Npb25lc2N1ZW5jYS5zaG9wQGdtYWlsLmNvbSIsImlzcyI6Imh0dHA6Ly9wcm9tb3Nob3AuYXBwL05HTkRpZ2l0YWxHdWlkZS9yZXN0L3VzdWFyaW9zL2xvZ2luIiwiaWF0IjoxNjA2NTc3MjY3LCJleHAiOjE2MDc3ODY4Njd9.qwUHMhkKuvRx0ty0DJrYMdbjvXORyP8QGiMPJCPE6EkWhSH1YFrz24q5pLANJyb4U51gs1nCQRZmUbjX5xBS1Q");
        this.storage.get("id_token").then((token) => {
            this.token = token;
        });
    }
    actualizarToken() {
        this.storage.get("id_token").then((token) => {
            this.token = token;
        });
    }
    postAuth(url, objeto) {
        console.log("Post...");
        this.actualizarToken();
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + this.token,
        });
        return new Promise(resolve => {
            // this.http.post(`${URL}`+ url, objeto, { headers })
            //   .subscribe( resp => {
            //   alert(resp);
            //     resolve(true);
            //   });
        });
        // return this.http.post(`${URL}`+ url, objeto, httpOptions).pipe();
    }
    getAuth(url) {
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(`Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])('Something bad happened; please try again later.');
    }
    ;
    post(url) {
    }
    get(url) {
    }
};
HttpgenericoService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
HttpgenericoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    })
], HttpgenericoService);



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module-es2015.js.map