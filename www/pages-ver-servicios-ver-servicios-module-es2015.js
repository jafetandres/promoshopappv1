(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ver-servicios-ver-servicios-module"],{

/***/ "/ORG":
/*!*********************************************************************!*\
  !*** ./src/app/pages/ver-servicios/ver-servicios-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: VerServiciosPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerServiciosPageRoutingModule", function() { return VerServiciosPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ver_servicios_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ver-servicios.page */ "DFIm");




const routes = [
    {
        path: '',
        component: _ver_servicios_page__WEBPACK_IMPORTED_MODULE_3__["VerServiciosPage"]
    }
];
let VerServiciosPageRoutingModule = class VerServiciosPageRoutingModule {
};
VerServiciosPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], VerServiciosPageRoutingModule);



/***/ }),

/***/ "DFIm":
/*!***********************************************************!*\
  !*** ./src/app/pages/ver-servicios/ver-servicios.page.ts ***!
  \***********************************************************/
/*! exports provided: VerServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerServiciosPage", function() { return VerServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_ver_servicios_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./ver-servicios.page.html */ "ZMLY");
/* harmony import */ var _ver_servicios_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ver-servicios.page.scss */ "ndZa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_servicio_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/servicio.service */ "uRoB");






let VerServiciosPage = class VerServiciosPage {
    constructor(servicioService) {
        this.servicioService = servicioService;
        this.servicios = [];
        this.habilitado = true;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.getCategorias();
            // this.segment.value = ""+22;
            this.cargarServicios('todas');
        });
    }
    getCategorias() {
        this.servicioService.getCategoriasServicios().subscribe(resp => {
            this.categorias = resp;
            console.log(this.categorias[0].id);
        });
    }
    recargar(event) {
        this.cargarServicios(this.segment.value, event, true);
        this.servicios = [];
        this.habilitado = true;
    }
    // getServiciosPorCategoria(event, pull: boolean = false) {
    //   console.log(event.detail.value);
    //   this.servicioService.getListaServiciosPorCategoria(pull,event.detail.value).subscribe(resp => {
    //     this.servicios.push(...resp['results']);
    //     if (event) {
    //       event.target.complete();
    //       if (resp['next'] === null) {
    //         this.habilitado = false;
    //       }
    //     }
    //   });
    // }
    // siguientes(event?, pull: boolean = false) {
    //     this.servicioService.getListaServicios(pull).subscribe(resp => {
    //       this.servicios.push(...resp['results']);
    //       if (event) {
    //         event.target.complete();
    //         if (resp['next'] === null) {
    //           this.habilitado = false;
    //         }
    //       }
    //     });
    // }
    cambioCategoria(event) {
        this.servicios = [];
        this.cargarServicios(event.detail.value);
        this.habilitado = true;
    }
    cargarServicios(categoria, event, pull = false) {
        this.servicioService.getListaServiciosPorCategoria(categoria, pull).subscribe(resp => {
            this.servicios.push(...resp['results']);
            if (event) {
                event.target.complete();
                if (resp['next'] === null) {
                    this.habilitado = false;
                }
            }
        }, error => {
            this.habilitado = false;
        });
    }
    loadData(event) {
        this.cargarServicios(this.segment.value, event);
    }
};
VerServiciosPage.ctorParameters = () => [
    { type: _services_servicio_service__WEBPACK_IMPORTED_MODULE_5__["ServicioService"] }
];
VerServiciosPage.propDecorators = {
    segment: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonSegment"],] }]
};
VerServiciosPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-ver-servicios',
        template: _raw_loader_ver_servicios_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_ver_servicios_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], VerServiciosPage);



/***/ }),

/***/ "ZMLY":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/ver-servicios/ver-servicios.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/main\" \n      text=\"\" \n      color=\"promoshop\"\n      mode=\"ios\"\n      ></ion-back-button>\n    </ion-buttons>\n    <ion-title>Servicios</ion-title>\n  </ion-toolbar>\n  <ion-segment scrollable (ionChange)=\"cambioCategoria($event)\" mode=\"md\" color=\"promoshop\" value=\"todas\">\n    <ion-segment-button  value=\"todas\" mode=\"md\">\n      <ion-label>Todas</ion-label>\n    </ion-segment-button>\n    <ion-segment-button *ngFor=\"let categoria of categorias\" value=\"{{categoria.id}}\" mode=\"md\">\n      <ion-label>{{categoria.nombre}}</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n<ion-content>\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"recargar($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <app-empresa-horizontal *ngFor=\"let servicio of servicios\" [empresa]=\"servicio\">\n  </app-empresa-horizontal>\n  <ion-infinite-scroll threshold=\"25%\" [disabled]=\"!habilitado\" position=\"bottom\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content loadingSpinner=\"bubbles\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>");

/***/ }),

/***/ "if8f":
/*!*************************************************************!*\
  !*** ./src/app/pages/ver-servicios/ver-servicios.module.ts ***!
  \*************************************************************/
/*! exports provided: VerServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerServiciosPageModule", function() { return VerServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ver_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ver-servicios-routing.module */ "/ORG");
/* harmony import */ var _ver_servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ver-servicios.page */ "DFIm");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/components.module */ "j1ZV");








let VerServiciosPageModule = class VerServiciosPageModule {
};
VerServiciosPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ver_servicios_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerServiciosPageRoutingModule"],
            _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_ver_servicios_page__WEBPACK_IMPORTED_MODULE_6__["VerServiciosPage"]]
    })
], VerServiciosPageModule);



/***/ }),

/***/ "ndZa":
/*!*************************************************************!*\
  !*** ./src/app/pages/ver-servicios/ver-servicios.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2ZXItc2VydmljaW9zLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "uRoB":
/*!**********************************************!*\
  !*** ./src/app/services/servicio.service.ts ***!
  \**********************************************/
/*! exports provided: ServicioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioService", function() { return ServicioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].url;
let ServicioService = class ServicioService {
    constructor(http) {
        this.http = http;
        this.paginaServicios = 0;
        this.categoriaActual = '';
    }
    // getListaServicios(pull: boolean = false,categoria_id='todas') {
    //   if (pull) {
    //     this.paginaServicios = 0;
    //   }
    //   this.paginaServicios++;
    //   return this.http.get(`${URL}/listaserviciosporcategoria/${categoria_id}?page=${this.paginaServicios}`);
    // }
    getListaServicios(categoria_id = 'todas') {
        // if (pull) {
        //   this.paginaServicios = 0;
        // }
        this.paginaServicios++;
        return this.http.get(`${URL}/listaserviciosporcategoria/${categoria_id}?page=${this.paginaServicios}`);
    }
    getListaServiciosPorCategoria(categoria, pull) {
        if (pull) {
            this.paginaServicios = 0;
        }
        // this.paginaServicios++;
        if (this.categoriaActual === categoria) {
            this.paginaServicios++;
        }
        else {
            this.paginaServicios = 1;
            this.categoriaActual = categoria;
        }
        return this.http.get(`${URL}/listaserviciosporcategoria/${categoria}?page=${this.paginaServicios}`);
    }
    getCategoriasServicios() {
        return this.http.get(`${URL}/listacategoriasservicios`);
    }
};
ServicioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ServicioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServicioService);



/***/ })

}]);
//# sourceMappingURL=pages-ver-servicios-ver-servicios-module-es2015.js.map