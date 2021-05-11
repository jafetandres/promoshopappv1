(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "ADJJ":
/*!***************************************************!*\
  !*** ./src/app/pages/tab3/tab3-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "iBx5");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "Praz":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 3\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  \n<ion-button (click)=\"abrirMapa()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n  Mapa\n</ion-button>\n\n\n</ion-content>\n");

/***/ }),

/***/ "XgaQ":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.module.ts ***!
  \*******************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "iBx5");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "ADJJ");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
    })
], Tab3PageModule);



/***/ }),

/***/ "iBx5":
/*!*****************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.ts ***!
  \*****************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "Praz");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "yxfH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _modal_ver_pedido_modal_ver_pedido_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal-ver-pedido/modal-ver-pedido.page */ "EKej");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/google-maps */ "tBOM");








let Tab3Page = class Tab3Page {
    constructor(loadingCtrl, toastCtrl, platform, modalCtrl) {
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        platform.ready().then(() => {
            if (document.URL.startsWith('http')) {
                _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["Environment"].setEnv({
                    API_KEY_FOR_BROWSER_RELEASE: "AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k",
                    API_KEY_FOR_BROWSER_DEBUG: "AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k"
                });
            }
        });
    }
    abrirMapa() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _modal_ver_pedido_modal_ver_pedido_page__WEBPACK_IMPORTED_MODULE_4__["ModalVerPedidoPage"],
            });
            yield modal.present();
            // const resp = await modal.onDidDismiss();
            // console.log(resp);
        });
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.platform.ready();
            yield this.loadMap();
        });
    }
    loadMap() {
        // Esta función inicializa la propiedad de clase
        // map
        // que va a contener el control de nuestro mapa de google
        // Para crear nuestro mapa debemos enviar como parametros
        // el id del div en donde se va a renderizar el mapa (paso anterior)
        // y las opciones que configuran nuestro mapa
        // This code is necessary for browser
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMaps"].create("map_canvas", {
            camera: {
                target: {
                    lat: -2.1537488,
                    lng: -79.8883037
                },
                zoom: 18,
                tilt: 30
            }
        });
    }
    localizar() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Limpiamos todos los elementos de nuestro mapa
            this.map.clear();
            // Creamos un componente de Ionic para mostrar un mensaje
            // mientras obtenemos esperamos que termine el proceso de
            // obtener la ubicación
            this.loading = yield this.loadingCtrl.create({
                message: "Espera por favor..."
            });
            // Presentamos el componente creado en el paso anterior
            yield this.loading.present();
            // Ejecutamos el método getMyLocation de nuestra propiedad de clase
            // map
            // para obtener nuestra ubicación actual
            this.map
                .getMyLocation()
                .then((location) => {
                // Una vez obtenida la ubicación cerramos el mensaje de diálogo
                this.loading.dismiss();
                // Movemos la camara a nuestra ubicación con una pequeña animación
                this.map.animateCamera({
                    target: location.latLng,
                    zoom: 17,
                    tilt: 30
                });
                // Agregamos un nuevo marcador
                let marker = this.map.addMarkerSync({
                    title: "Estoy aquí!",
                    snippet: "This plugin is awesome!",
                    position: location.latLng,
                    animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsAnimation"].BOUNCE
                });
                // Mostramos un InfoWindow
                marker.showInfoWindow();
                // Podemos configurar un evento que se ejecute cuando
                // se haya dado clic
                marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MARKER_CLICK).subscribe(() => {
                    this.showToast("clicked!");
                });
            })
                .catch(error => {
                // En caso de que haya un problema en obtener la
                // ubicación
                this.loading.dismiss();
                this.showToast(error.error_message);
            });
        });
    }
    // Función que muestra un Toast en la parte inferior
    // de la pantalla
    showToast(mensaje) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let toast = yield this.toastCtrl.create({
                message: mensaje,
                duration: 2000,
                position: "bottom"
            });
            toast.present();
        });
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "yxfH":
/*!*******************************************!*\
  !*** ./src/app/pages/tab3/tab3.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH0iXX0= */");

/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module-es2015.js.map