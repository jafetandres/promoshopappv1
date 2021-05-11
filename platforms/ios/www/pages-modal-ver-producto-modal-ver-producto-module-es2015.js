(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-ver-producto-modal-ver-producto-module"],{

/***/ "D9pO":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/modal-ver-producto/modal-ver-producto-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: ModalVerProductoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalVerProductoPageRoutingModule", function() { return ModalVerProductoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal-ver-producto.page */ "t0A7");




const routes = [
    {
        path: '',
        component: _modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_3__["ModalVerProductoPage"]
    }
];
let ModalVerProductoPageRoutingModule = class ModalVerProductoPageRoutingModule {
};
ModalVerProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ModalVerProductoPageRoutingModule);



/***/ }),

/***/ "OVZS":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-ver-producto/modal-ver-producto.page.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"salirConArgumentos()\" fill=\"clear\">\n        <ion-icon color=\"promoshop\" name=\"arrow-back-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h3 class=\"ion-text-capitalize\">{{producto.nombre}}</h3>\n  <ion-slides mode=\"ios\" pager=\"ios\" *ngIf=\"didInit\">\n    <ion-slide *ngFor=\"let imagen of producto.imagenes\">\n      <img src=\"{{imagen.imagen}}\" />\n    </ion-slide>\n  </ion-slides>\n  <h6><strong>$ </strong> {{producto.precio}}</h6>\n  <p>{{producto.descripcion}}</p>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item lines=\"none\" class=\"catidad-item\">\n        <ion-label>Cantidad</ion-label>\n        <ion-select value=\"1\" ok-text=\"Aceptar\" cancel-text=\"Cancelar\"  (ionChange)=\"cambiarCantidad( $event )\">\n            <ion-select-option *ngFor=\"let number of numbers\" value=\"{{number}}\">{{number}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <div class=\"buttons-container\">\n    <ion-button color=\"promoshop\" expand=\"block\" (click)=\"addToCart(producto)\">Agregar al Carrito <ion-icon\n        name=\"cart-outline\" slot=\"end\"></ion-icon>\n    </ion-button>\n    <ion-button color=\"promogreen\" expand=\"block\">Comprar ahora</ion-button>\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "RlYN":
/*!***********************************************************************!*\
  !*** ./src/app/pages/modal-ver-producto/modal-ver-producto.module.ts ***!
  \***********************************************************************/
/*! exports provided: ModalVerProductoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalVerProductoPageModule", function() { return ModalVerProductoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _modal_ver_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-ver-producto-routing.module */ "D9pO");
/* harmony import */ var _modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modal-ver-producto.page */ "t0A7");







let ModalVerProductoPageModule = class ModalVerProductoPageModule {
};
ModalVerProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _modal_ver_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalVerProductoPageRoutingModule"]
        ],
        declarations: [_modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_6__["ModalVerProductoPage"]]
    })
], ModalVerProductoPageModule);



/***/ }),

/***/ "hSuy":
/*!***********************************************************************!*\
  !*** ./src/app/pages/modal-ver-producto/modal-ver-producto.page.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content strong {\n  color: var(--ion-color-promoshop);\n}\n\n.catidad-item {\n  --background: var(--ion-color-light);\n  --border-radius: 10px;\n}\n\n.catidad-item ion-label {\n  font-size: 15px;\n}\n\n.buttons-container {\n  text-align: center;\n  margin-top: 15px;\n}\n\n.cantidad-container {\n  --padding-bottom: 0px;\n  --padding-top: 0px;\n  border-radius: 50px;\n  box-shadow: 0px 0px 7px -4px rgba(0, 0, 0, 0.53);\n}\n\n.cantidad-container ion-button {\n  --padding-start:0;\n  --padding-end:0;\n  --padding-top:0;\n  --padding-bottom:0;\n  height: 20px;\n}\n\n.cantidad-container ion-icon {\n  padding: 0px;\n  margin: 0px !important;\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGFsLXZlci1wcm9kdWN0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQ0FBQTtBQUFSOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxxQkFBQTtBQURKOztBQUVJO0VBQ0ksZUFBQTtBQUFSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBRUkscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBR0EsZ0RBQUE7QUFESjs7QUFFSTtFQUdJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFGUjs7QUFLSTtFQUVJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFKUiIsImZpbGUiOiJtb2RhbC12ZXItcHJvZHVjdG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIHN0cm9uZyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvbW9zaG9wKTtcbiAgICB9XG59XG5cbi5jYXRpZGFkLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaW9uLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cbn1cbi5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5jYW50aWRhZC1jb250YWluZXIge1xuICAgIC8vIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDdweCAtNHB4IHJnYmEoMCwwLDAsMC41Myk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDdweCAtNHB4IHJnYmEoMCwwLDAsMC41Myk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggLTRweCByZ2JhKDAsMCwwLDAuNTMpO1xuICAgIGlvbi1idXR0b24ge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xuICAgICAgICBcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjA7XG4gICAgICAgIC0tcGFkZGluZy1lbmQ6MDtcbiAgICAgICAgLS1wYWRkaW5nLXRvcDowO1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOjA7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgXG4gICAgfVxuICAgIGlvbi1pY29uIHtcbiAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG59XG4iXX0= */");

/***/ }),

/***/ "t0A7":
/*!*********************************************************************!*\
  !*** ./src/app/pages/modal-ver-producto/modal-ver-producto.page.ts ***!
  \*********************************************************************/
/*! exports provided: ModalVerProductoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalVerProductoPage", function() { return ModalVerProductoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_modal_ver_producto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./modal-ver-producto.page.html */ "OVZS");
/* harmony import */ var _modal_ver_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-ver-producto.page.scss */ "hSuy");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_cart_marketplace_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart-marketplace.service */ "u4O0");






let ModalVerProductoPage = class ModalVerProductoPage {
    constructor(modalCtrl, cartService) {
        this.modalCtrl = modalCtrl;
        this.cartService = cartService;
        this.didInit = false;
        this.cantidad = 1;
        this.imagenSlide = {
            touchReleaseOnEdges: true
        };
    }
    ngOnInit() {
        this.numbers = Array(this.producto.cantidad_max).fill(0).map((x, i) => i + 1);
    }
    cambiarCantidad(event) {
        this.cantidad = event.detail.value;
    }
    addToCart(producto) {
        producto.cantidad = this.cantidad;
        this.cartService.addProducto(producto);
        this.salirConArgumentos();
        // this.animateCSS('tada');
    }
    // async openCart() {
    //   this.animateCSS('bounceOutLeft', true);
    //   let modal = await this.modalCtrl.create({
    //     component: ModalCartMarketplacePage,
    //     cssClass: 'cart-modal'
    //   });
    //   modal.onWillDismiss().then(() => {
    //     this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft')
    //     this.animateCSS('bounceInLeft');
    //   });
    //   modal.present();
    // }
    // animateCSS(animationName, keepAnimated = false) {
    //   const node = this.fab.nativeElement;
    //   node.classList.add('animated', animationName)
    //   //https://github.com/daneden/animate.css
    //   function handleAnimationEnd() {
    //     if (!keepAnimated) {
    //       node.classList.remove('animated', animationName);
    //     }
    //     node.removeEventListener('animationend', handleAnimationEnd)
    //   }
    //   node.addEventListener('animationend', handleAnimationEnd)
    // }
    salirConArgumentos() {
        this.modalCtrl.dismiss({
            nombres: 'Felipe',
            pais: 'España'
        });
    }
    ngAfterViewInit() {
        this.didInit = true;
    }
};
ModalVerProductoPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _services_cart_marketplace_service__WEBPACK_IMPORTED_MODULE_5__["CartMarketplaceService"] }
];
ModalVerProductoPage.propDecorators = {
    producto: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
ModalVerProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-ver-producto',
        template: _raw_loader_modal_ver_producto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_ver_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ModalVerProductoPage);



/***/ })

}]);
//# sourceMappingURL=pages-modal-ver-producto-modal-ver-producto-module-es2015.js.map