(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jafetandresgalvezquezada/Dropbox/curso-ionic6/promoshop/promoshopappv1/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // url: 'https://promoshop.app/rest'
    // url: 'http://192.168.1.63:8080/NGNDigitalGuide/rest'
    url: 'http://192.168.1.23:8000/api/v1',
    dominio: 'http://192.168.100.8:8000'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H+l1":
/*!******************************************!*\
  !*** ./src/app/services/push.service.ts ***!
  \******************************************/
/*! exports provided: PushService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushService", function() { return PushService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");




let PushService = class PushService {
    constructor(oneSignal, storage) {
        this.oneSignal = oneSignal;
        this.storage = storage;
        this.mensajes = [
        // {
        //   title: 'Tutulo de la push',
        //   body: 'este es el body de la push',
        //   date: new Date
        // }
        ];
        this.pushListener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cargarMensajes();
    }
    getMensajes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cargarMensajes();
            return [...this.mensajes];
        });
    }
    configuracionInicial() {
        this.oneSignal.startInit('0603627e-f578-4f08-b7a8-48feb261c7c8', '226303211374');
        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
        this.oneSignal.handleNotificationReceived().subscribe((noti) => {
            console.log("notificacion recibida", noti);
            this.notificacionRecibida(noti);
        });
        this.oneSignal.handleNotificationOpened().subscribe((noti) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("notificacion abierta", noti);
            yield this.notificacionRecibida(noti.notification);
        }));
        // this.oneSignal.getIds().then(info => {
        //   this.userId = info.userId || 'bb4c4088-3427-44ff-8380-570aa6c1ce1a';
        //   console.log(this.userId);
        // });
        this.oneSignal.endInit();
    }
    getUserIdOneSignal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Cargando userId');
            // Obtener ID del suscriptor
            const info = yield this.oneSignal.getIds();
            this.userId = info.userId;
            return info.userId;
        });
    }
    notificacionRecibida(noti) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cargarMensajes();
            const payload = noti.payload;
            const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);
            if (existePush) {
                return;
            }
            this.mensajes.unshift(payload);
            this.pushListener.emit(payload);
            yield this.guardarMensajes();
        });
    }
    guardarMensajes() {
        this.storage.set('mensajes', this.mensajes);
    }
    cargarMensajes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.mensajes = (yield this.storage.get('mensaje')) || [];
            return this.mensajes;
        });
    }
    borrarMensajes() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.clear();
            this.mensajes = [];
            this.guardarMensajes();
        });
    }
};
PushService.ctorParameters = () => [
    { type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_2__["OneSignal"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] }
];
PushService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PushService);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _services_push_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/push.service */ "H+l1");








let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, pushService) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.pushService = pushService;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
            this.pushService.configuracionInicial();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"] },
    { type: _services_push_service__WEBPACK_IMPORTED_MODULE_7__["PushService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "54vc");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "VYYF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/onesignal/ngx */ "wljF");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "8BtL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "Sy1n");













let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_9__["IonicStorageModule"].forRoot()
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_8__["OneSignal"],
            _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_10__["FirebaseAuthentication"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "on2l":
/*!*********************************************!*\
  !*** ./src/app/services/usuario.service.ts ***!
  \*********************************************/
/*! exports provided: UsuarioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioService", function() { return UsuarioService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/firebase-authentication/ngx */ "8BtL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");








const URL = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].url;
let UsuarioService = class UsuarioService {
    constructor(http, storage, firebaseAuthentication, router, navCtrl) {
        this.http = http;
        this.storage = storage;
        this.firebaseAuthentication = firebaseAuthentication;
        this.router = router;
        this.navCtrl = navCtrl;
        this.token = null;
        this.usuario = {};
        this.ubicaciones = [];
    }
    enviarMensaje(number) {
        try {
            this.firebaseAuthentication.verifyPhoneNumber('+593' + number.toString(), 30000).then(verificationId => {
            });
        }
        catch (error) {
            alert(error);
        }
    }
    login(username, password) {
        const data = { username, password };
        return new Promise(resolve => {
            this.http.post(`${URL}/auth/login/`, data)
                .subscribe(resp => {
                if (resp['key'] != null) {
                    this.guardarToken(resp['key']);
                    resolve(true);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                }
            });
        });
    }
    guardarToken(token) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = token;
            yield this.storage.set('token', token);
        });
    }
    registro(usuario) {
        return new Promise(resolve => {
            this.http.post(`${URL}/auth/registration/`, usuario)
                .subscribe(resp => {
                if (resp['key'] != null) {
                    this.guardarToken(resp['key']);
                    resolve(true);
                }
                else {
                    this.token = null;
                    this.storage.clear();
                    resolve(false);
                }
            });
        });
    }
    getUsuario() {
        return Object.assign({}, this.usuario);
    }
    cargarToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.token = (yield this.storage.get('token')) || null;
        });
    }
    validaToken() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cargarToken();
            if (!this.token) {
                this.navCtrl.navigateRoot('/inicio', { animated: true });
                return Promise.resolve(false);
            }
            return new Promise(resolve => {
                const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Authorization': 'Token ' + this.token
                });
                this.http.get(`${URL}/usuario`, { headers })
                    .subscribe(resp => {
                    if (resp['ok']) {
                        this.usuario = resp['usuario'];
                        resolve(true);
                    }
                    else {
                        this.navCtrl.navigateRoot('/inicio', { animated: true });
                        resolve(false);
                    }
                }, error => {
                    if (error.status === 401) {
                        this.navCtrl.navigateRoot('/inicio', { animated: true });
                        resolve(false);
                    }
                });
            });
        });
    }
    getUbicacionesUsuario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cargarToken();
            if (!this.token) {
                this.navCtrl.navigateRoot('/inicio', { animated: true });
            }
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Token ' + this.token
            });
            return this.http.get(`${URL}/listarubicaciones`, { headers });
        });
    }
    getTarjetasUsuario() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cargarToken();
            if (!this.token) {
                this.navCtrl.navigateRoot('/inicio', { animated: true });
            }
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Token ' + this.token
            });
            return this.http.get(`${URL}/listartarjetas`, { headers });
        });
    }
    registrarTarjetasUsuario(tarjeta) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.cargarToken();
            if (!this.token) {
                this.navCtrl.navigateRoot('/inicio', { animated: true });
            }
            const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Authorization': 'Token ' + this.token
            });
            return this.http.post(`${URL}/registrartarjeta`, tarjeta, { headers });
        });
    }
};
UsuarioService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"] },
    { type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthentication"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] }
];
UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioService);



/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _guards_usuario_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/usuario.guard */ "xzTB");




const routes = [
    {
        path: 'main',
        loadChildren: () => Promise.all(/*! import() | pages-tabs-tabs-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-tabs-tabs-module")]).then(__webpack_require__.bind(null, /*! ./pages/tabs/tabs.module */ "qiIP")).then(m => m.TabsPageModule),
        canLoad: [_guards_usuario_guard__WEBPACK_IMPORTED_MODULE_3__["UsuarioGuard"]]
    },
    {
        path: 'modal-login',
        loadChildren: () => Promise.all(/*! import() | pages-modal-login-modal-login-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-modal-login-modal-login-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal-login/modal-login.module */ "D8OT")).then(m => m.ModalLoginPageModule)
    },
    {
        path: 'modal-signup',
        loadChildren: () => Promise.all(/*! import() | pages-modal-signup-modal-signup-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-modal-signup-modal-signup-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal-signup/modal-signup.module */ "6pdu")).then(m => m.ModalSignupPageModule)
    },
    {
        path: 'inicio',
        loadChildren: () => Promise.all(/*! import() | pages-inicio-inicio-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-inicio-inicio-module")]).then(__webpack_require__.bind(null, /*! ./pages/inicio/inicio.module */ "DdEe")).then(m => m.InicioPageModule)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'main/tabs/tab1'
    },
    {
        path: 'perfil-usuario',
        loadChildren: () => Promise.all(/*! import() | pages-perfil-usuario-perfil-usuario-module */[__webpack_require__.e("default~pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module~pages-modal-registrar~a84bc544"), __webpack_require__.e("common"), __webpack_require__.e("pages-perfil-usuario-perfil-usuario-module")]).then(__webpack_require__.bind(null, /*! ./pages/perfil-usuario/perfil-usuario.module */ "pMbb")).then(m => m.PerfilUsuarioPageModule)
    },
    {
        path: 'modal-ver-producto',
        loadChildren: () => Promise.all(/*! import() | pages-modal-ver-producto-modal-ver-producto-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-modal-ver-producto-modal-ver-producto-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal-ver-producto/modal-ver-producto.module */ "RlYN")).then(m => m.ModalVerProductoPageModule)
    },
    {
        path: 'cart-marketplace',
        loadChildren: () => Promise.all(/*! import() | pages-cart-marketplace-cart-marketplace-module */[__webpack_require__.e("default~cart-marketplace-cart-marketplace-module~pages-cart-marketplace-cart-marketplace-module"), __webpack_require__.e("common")]).then(__webpack_require__.bind(null, /*! ./pages/cart-marketplace/cart-marketplace.module */ "/ZBB")).then(m => m.CartMarketplacePageModule)
    },
    {
        path: 'modal-agregar-ubicacion',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-modal-agregar-ubicacion-modal-agregar-ubicacion-module */ "pages-modal-agregar-ubicacion-modal-agregar-ubicacion-module").then(__webpack_require__.bind(null, /*! ./pages/modal-agregar-ubicacion/modal-agregar-ubicacion.module */ "plgE")).then(m => m.ModalAgregarUbicacionPageModule)
    },
    {
        path: 'modal-ubicaciones-guardadas',
        loadChildren: () => __webpack_require__.e(/*! import() | pages-modal-ubicaciones-guardadas-modal-ubicaciones-guardadas-module */ "pages-modal-ubicaciones-guardadas-modal-ubicaciones-guardadas-module").then(__webpack_require__.bind(null, /*! ./pages/modal-ubicaciones-guardadas/modal-ubicaciones-guardadas.module */ "PcIG")).then(m => m.ModalUbicacionesGuardadasPageModule)
    },
    {
        path: 'modal-metodos-pago-guardados',
        loadChildren: () => Promise.all(/*! import() | pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module */[__webpack_require__.e("default~pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module~pages-modal-registrar~a84bc544"), __webpack_require__.e("common"), __webpack_require__.e("pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal-metodos-pago-guardados/modal-metodos-pago-guardados.module */ "nCwK")).then(m => m.ModalMetodosPagoGuardadosPageModule)
    },
    {
        path: 'modal-registrar-tarjeta',
        loadChildren: () => Promise.all(/*! import() | pages-modal-registrar-tarjeta-modal-registrar-tarjeta-module */[__webpack_require__.e("default~pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module~pages-modal-registrar~a84bc544"), __webpack_require__.e("common"), __webpack_require__.e("pages-modal-registrar-tarjeta-modal-registrar-tarjeta-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal-registrar-tarjeta/modal-registrar-tarjeta.module */ "VY6p")).then(m => m.ModalRegistrarTarjetaPageModule)
    },
    {
        path: 'ver-restaurantes',
        loadChildren: () => Promise.all(/*! import() | pages-ver-restaurantes-ver-restaurantes-module */[__webpack_require__.e("default~pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module~pages-modal-registrar~a84bc544"), __webpack_require__.e("common"), __webpack_require__.e("pages-ver-restaurantes-ver-restaurantes-module")]).then(__webpack_require__.bind(null, /*! ./pages/ver-restaurantes/ver-restaurantes.module */ "biCY")).then(m => m.VerRestaurantesPageModule)
    },
    {
        path: 'modal-ver-restaurante',
        loadChildren: () => Promise.all(/*! import() | pages-modal-ver-restaurante-modal-ver-restaurante-module */[__webpack_require__.e("default~pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module~pages-modal-registrar~a84bc544"), __webpack_require__.e("common"), __webpack_require__.e("pages-modal-ver-restaurante-modal-ver-restaurante-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal-ver-restaurante/modal-ver-restaurante.module */ "5YfY")).then(m => m.ModalVerRestaurantePageModule)
    },
    {
        path: 'modal-ver-pedido',
        loadChildren: () => Promise.all(/*! import() | pages-modal-ver-pedido-modal-ver-pedido-module */[__webpack_require__.e("default~pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module~pages-modal-registrar~a84bc544"), __webpack_require__.e("default~pages-modal-ver-pedido-modal-ver-pedido-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-modal-ver-pedido-modal-ver-pedido-module")]).then(__webpack_require__.bind(null, /*! ./pages/modal-ver-pedido/modal-ver-pedido.module */ "kG5z")).then(m => m.ModalVerPedidoPageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"], relativeLinkResolution: 'legacy' })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "xzTB":
/*!*****************************************!*\
  !*** ./src/app/guards/usuario.guard.ts ***!
  \*****************************************/
/*! exports provided: UsuarioGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioGuard", function() { return UsuarioGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/usuario.service */ "on2l");



let UsuarioGuard = class UsuarioGuard {
    constructor(usuarioService) {
        this.usuarioService = usuarioService;
    }
    canLoad() {
        return this.usuarioService.validaToken();
    }
};
UsuarioGuard.ctorParameters = () => [
    { type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioService"] }
];
UsuarioGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UsuarioGuard);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map