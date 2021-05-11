(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"], {
    /***/
    "ADJJ":
    /*!***************************************************!*\
      !*** ./src/app/pages/tab3/tab3-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: Tab3PageRoutingModule */

    /***/
    function ADJJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function () {
        return Tab3PageRoutingModule;
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./tab3.page */
      "iBx5");

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"]
      }];

      var Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], Tab3PageRoutingModule);
      /***/
    },

    /***/
    "Praz":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab3/tab3.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function Praz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>\n      Tab 3\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n<ion-button (click)=\"abrirMapa()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n  Mapa\n</ion-button>\n\n\n</ion-content>\n";
      /***/
    },

    /***/
    "XgaQ":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab3/tab3.module.ts ***!
      \*******************************************/

    /*! exports provided: Tab3PageModule */

    /***/
    function XgaQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function () {
        return Tab3PageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./tab3.page */
      "iBx5");
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../explore-container/explore-container.module */
      "qtYk");
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./tab3-routing.module */
      "ADJJ");

      var Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_7__["ExploreContainerComponentModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"]],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
      })], Tab3PageModule);
      /***/
    },

    /***/
    "iBx5":
    /*!*****************************************!*\
      !*** ./src/app/pages/tab3/tab3.page.ts ***!
      \*****************************************/

    /*! exports provided: Tab3Page */

    /***/
    function iBx5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Tab3Page", function () {
        return Tab3Page;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./tab3.page.html */
      "Praz");
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3.page.scss */
      "yxfH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _modal_ver_pedido_modal_ver_pedido_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../modal-ver-pedido/modal-ver-pedido.page */
      "EKej");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/google-maps */
      "tBOM");

      var Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(loadingCtrl, toastCtrl, platform, modalCtrl) {
          _classCallCheck(this, Tab3Page);

          this.loadingCtrl = loadingCtrl;
          this.toastCtrl = toastCtrl;
          this.platform = platform;
          this.modalCtrl = modalCtrl;
          platform.ready().then(function () {
            if (document.URL.startsWith('http')) {
              _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["Environment"].setEnv({
                API_KEY_FOR_BROWSER_RELEASE: "AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k",
                API_KEY_FOR_BROWSER_DEBUG: "AIzaSyA9esa9PaJXtLN_vJLo1Uvgv3saFYh1n6k"
              });
            }
          });
        }

        _createClass(Tab3Page, [{
          key: "abrirMapa",
          value: function abrirMapa() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_ver_pedido_modal_ver_pedido_page__WEBPACK_IMPORTED_MODULE_4__["ModalVerPedidoPage"]
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.platform.ready();

                    case 2:
                      _context2.next = 4;
                      return this.loadMap();

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "loadMap",
          value: function loadMap() {
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
        }, {
          key: "localizar",
          value: function localizar() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      // Limpiamos todos los elementos de nuestro mapa
                      this.map.clear(); // Creamos un componente de Ionic para mostrar un mensaje
                      // mientras obtenemos esperamos que termine el proceso de
                      // obtener la ubicación

                      _context3.next = 3;
                      return this.loadingCtrl.create({
                        message: "Espera por favor..."
                      });

                    case 3:
                      this.loading = _context3.sent;
                      _context3.next = 6;
                      return this.loading.present();

                    case 6:
                      // Ejecutamos el método getMyLocation de nuestra propiedad de clase
                      // map
                      // para obtener nuestra ubicación actual
                      this.map.getMyLocation().then(function (location) {
                        // Una vez obtenida la ubicación cerramos el mensaje de diálogo
                        _this.loading.dismiss(); // Movemos la camara a nuestra ubicación con una pequeña animación


                        _this.map.animateCamera({
                          target: location.latLng,
                          zoom: 17,
                          tilt: 30
                        }); // Agregamos un nuevo marcador


                        var marker = _this.map.addMarkerSync({
                          title: "Estoy aquí!",
                          snippet: "This plugin is awesome!",
                          position: location.latLng,
                          animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsAnimation"].BOUNCE
                        }); // Mostramos un InfoWindow


                        marker.showInfoWindow(); // Podemos configurar un evento que se ejecute cuando
                        // se haya dado clic

                        marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_6__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
                          _this.showToast("clicked!");
                        });
                      })["catch"](function (error) {
                        // En caso de que haya un problema en obtener la
                        // ubicación
                        _this.loading.dismiss();

                        _this.showToast(error.error_message);
                      });

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          } // Función que muestra un Toast en la parte inferior
          // de la pantalla

        }, {
          key: "showToast",
          value: function showToast(mensaje) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var toast;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.toastCtrl.create({
                        message: mensaje,
                        duration: 2000,
                        position: "bottom"
                      });

                    case 2:
                      toast = _context4.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return Tab3Page;
      }();

      Tab3Page.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"]
        }];
      };

      Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], Tab3Page);
      /***/
    },

    /***/
    "yxfH":
    /*!*******************************************!*\
      !*** ./src/app/pages/tab3/tab3.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function yxfH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#map_canvas {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtYXBfY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH0iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=tab3-tab3-module-es5.js.map