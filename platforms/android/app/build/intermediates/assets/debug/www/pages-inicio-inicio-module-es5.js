(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inicio-inicio-module"], {
    /***/
    "5yII":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function yII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  margin-bottom: 2em;\n  height: 2em;\n  max-width: 50%;\n  font-size: 20px;\n  --border-radius: 5px;\n}\n\n.button-container {\n  align-items: center;\n}\n\n.myColor {\n  background-color: var(--ion-color-dark);\n  text-align: center;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.slides {\n  width: 100%;\n  height: 100%;\n}\n\n.img-slide {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.slide-hijo {\n  width: 100%;\n  padding: 0px;\n  margin: 0px;\n}\n\n.row-back {\n  margin: 0px !important;\n  padding: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2luaWNpby5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBSUU7RUFDRSxtQkFBQTtBQURKOztBQVdFO0VBQ0UsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBUko7O0FBV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVdFO0VBQ0Usb0JBQUE7S0FBQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBUko7O0FBWUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFUSjs7QUEwQkU7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FBdkJKIiwiZmlsZSI6ImluaWNpby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICAvLyBtYXJnaW46IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIG1heC13aWR0aDogNTAlO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAvLyAtLWJveC1zaGFkb3c6IDNweCA3cHggOXB4IC00cHggcmdiYSgyMzAsMTE3LDQxLDAuNjEpO1xuICB9XG4gIFxuICAuYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuICBcbiAgLy8gLnNsaWRlIHtcbiAgLy8gICBtYXJnaW46IDBweDtcbiAgLy8gICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgLy8gICB3aWR0aDogMTAwJTtcbiAgLy8gICBoZWlnaHQ6IDIwMCU7XG4gIC8vIH1cbiAgXG4gIC5teUNvbG9yIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG4gIFxuICAuc2xpZGVzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5pbWctc2xpZGUge1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgXG4gIC5zbGlkZS1oaWpvIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gIH1cbiAgXG4gIC8vIGltZyB7XG4gIC8vICAgICB3aWR0aDogMTIwcHg7XG4gIC8vIH1cbiAgXG4gIC8vIC5waWNrLWF2YXRhciB7XG4gIC8vICAgICB3aWR0aDogODBweDtcbiAgLy8gICAgIG9wYWNpdHk6IDAuMztcbiAgLy8gfVxuICBcbiAgLy8gLnBpY2stYXZhdGFyLXNlbGVjY2lvbmFkbyB7XG4gIC8vICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgbGluZWFyO1xuICAvLyAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuICAvLyB9XG4gIFxuICAucm93LWJhY2sge1xuICAgIG1hcmdpbjogMHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgIl19 */";
      /***/
    },

    /***/
    "9scE":
    /*!*********************************************!*\
      !*** ./src/app/pages/inicio/inicio.page.ts ***!
      \*********************************************/

    /*! exports provided: InicioPage */

    /***/
    function scE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPage", function () {
        return InicioPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inicio.page.html */
      "XlEN");
      /* harmony import */


      var _inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inicio.page.scss */
      "5yII");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/usuario.service */
      "on2l");
      /* harmony import */


      var _modal_login_modal_login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../modal-login/modal-login.page */
      "kJrH");
      /* harmony import */


      var _modal_signup_modal_signup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../modal-signup/modal-signup.page */
      "Jlcg");

      var InicioPage = /*#__PURE__*/function () {
        function InicioPage(usuarioService, modalCtrl) {
          _classCallCheck(this, InicioPage);

          this.usuarioService = usuarioService;
          this.modalCtrl = modalCtrl;
          this.avatars = [{
            img: 'av-1.png',
            seleccionado: true
          }, {
            img: 'av-2.png',
            seleccionado: false
          }, {
            img: 'av-3.png',
            seleccionado: false
          }, {
            img: 'av-4.png',
            seleccionado: false
          }, {
            img: 'av-5.png',
            seleccionado: false
          }, {
            img: 'av-6.png',
            seleccionado: false
          }, {
            img: 'av-7.png',
            seleccionado: false
          }, {
            img: 'av-8.png',
            seleccionado: false
          }];
          this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: {
              delay: 2000,
              stopOnLastSlide: true,
              disableOnInteraction: false
            },
            speed: 2000,
            allowTouchMove: false
          };
        }

        _createClass(InicioPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {// this.slides.lockSwipes(true);
          }
        }, {
          key: "ionViewDidEnter",
          value: function ionViewDidEnter() {// this.slides.lockSwipes(true);
          }
        }, {
          key: "registro",
          value: function registro(fRegistro) {
            console.log(fRegistro.valid);
          }
        }, {
          key: "onClick",
          value: function onClick() {
            this.usuarioService.enviarMensaje('958735596');
          } // mostrarRegistro() {
          //   this.slides.lockSwipes(false);
          //   this.slides.slideTo(1);
          //   this.slides.lockSwipes(true);
          // }
          // mostrarLogin() {
          //   this.slides.lockSwipes(false);
          //   this.slides.slideTo(0);
          //   this.slides.lockSwipes(true);
          // }

        }, {
          key: "mostrarModalLogin",
          value: function mostrarModalLogin() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal, resp;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_login_modal_login_page__WEBPACK_IMPORTED_MODULE_6__["ModalLoginPage"],
                        componentProps: {
                          nombres: 'ricardo'
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      _context.next = 5;
                      return modal.present();

                    case 5:
                      _context.next = 7;
                      return modal.onDidDismiss();

                    case 7:
                      resp = _context.sent;
                      console.log(resp);

                    case 9:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "mostrarModalSignUp",
          value: function mostrarModalSignUp() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var modal, resp;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalCtrl.create({
                        component: _modal_signup_modal_signup_page__WEBPACK_IMPORTED_MODULE_7__["ModalSignupPage"],
                        componentProps: {
                          telefono: '+593958735596'
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      _context2.next = 5;
                      return modal.present();

                    case 5:
                      _context2.next = 7;
                      return modal.onDidDismiss();

                    case 7:
                      resp = _context2.sent;
                      console.log(resp);

                    case 9:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return InicioPage;
      }();

      InicioPage.ctorParameters = function () {
        return [{
          type: _services_usuario_service__WEBPACK_IMPORTED_MODULE_5__["UsuarioService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      InicioPage.propDecorators = {
        slides: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['slidePrincipal']
        }]
      };
      InicioPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inicio',
        template: _raw_loader_inicio_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inicio_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InicioPage);
      /***/
    },

    /***/
    "DdEe":
    /*!***********************************************!*\
      !*** ./src/app/pages/inicio/inicio.module.ts ***!
      \***********************************************/

    /*! exports provided: InicioPageModule */

    /***/
    function DdEe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageModule", function () {
        return InicioPageModule;
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


      var _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inicio-routing.module */
      "vPJf");
      /* harmony import */


      var _inicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inicio.page */
      "9scE");

      var InicioPageModule = function InicioPageModule() {
        _classCallCheck(this, InicioPageModule);
      };

      InicioPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inicio_routing_module__WEBPACK_IMPORTED_MODULE_5__["InicioPageRoutingModule"]],
        declarations: [_inicio_page__WEBPACK_IMPORTED_MODULE_6__["InicioPage"]]
      })], InicioPageModule);
      /***/
    },

    /***/
    "XlEN":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function XlEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content scrollY=\"false\">\n  <ion-slides class=\"slides\" mode=\"ios\" [options]=\"slideOptsOne\" #slidePrincipal>\n    <ion-slide>\n      <ion-img class=\"img-slide\" src=\"/assets/1.svg\"></ion-img>\n    </ion-slide>\n    <ion-slide>\n      <ion-img class=\"img-slide\"  src=\"/assets/2.svg\"></ion-img>\n    </ion-slide>\n    <ion-slide>\n      <ion-img class=\"img-slide\"  src=\"/assets/3.svg\"></ion-img>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n<ion-footer class=\"myColor\">\n  <div class=\"ion-text-justify ion-padding\">\n    <h1>Bienvenido a promoshop. Lo quieres, lo tienes</h1>\n  </div>\n  <section>\n    <ion-button color=\"promoshop\" class=\"botones\" (click)=\"mostrarModalLogin()\">\n      INICIAR SESIÓN\n    </ion-button>\n    <ion-button color=\"promoshop\" fill=\"outline\" (click)=\"mostrarModalSignUp()\">\n      REGISTRARME\n    </ion-button>\n  </section>\n</ion-footer>";
      /***/
    },

    /***/
    "vPJf":
    /*!*******************************************************!*\
      !*** ./src/app/pages/inicio/inicio-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InicioPageRoutingModule */

    /***/
    function vPJf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InicioPageRoutingModule", function () {
        return InicioPageRoutingModule;
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


      var _inicio_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inicio.page */
      "9scE");

      var routes = [{
        path: '',
        component: _inicio_page__WEBPACK_IMPORTED_MODULE_3__["InicioPage"]
      }];

      var InicioPageRoutingModule = function InicioPageRoutingModule() {
        _classCallCheck(this, InicioPageRoutingModule);
      };

      InicioPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InicioPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-inicio-inicio-module-es5.js.map