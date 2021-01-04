(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-modal-ver-producto-modal-ver-producto-module"], {
    /***/
    "D9pO":
    /*!*******************************************************************************!*\
      !*** ./src/app/pages/modal-ver-producto/modal-ver-producto-routing.module.ts ***!
      \*******************************************************************************/

    /*! exports provided: ModalVerProductoPageRoutingModule */

    /***/
    function D9pO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalVerProductoPageRoutingModule", function () {
        return ModalVerProductoPageRoutingModule;
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


      var _modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal-ver-producto.page */
      "t0A7");

      var routes = [{
        path: '',
        component: _modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_3__["ModalVerProductoPage"]
      }];

      var ModalVerProductoPageRoutingModule = function ModalVerProductoPageRoutingModule() {
        _classCallCheck(this, ModalVerProductoPageRoutingModule);
      };

      ModalVerProductoPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ModalVerProductoPageRoutingModule);
      /***/
    },

    /***/
    "OVZS":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/modal-ver-producto/modal-ver-producto.page.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function OVZS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"salirConArgumentos()\" fill=\"clear\">\n        <ion-icon color=\"promoshop\" name=\"arrow-back-outline\" size=\"large\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <h3 class=\"ion-text-capitalize\">{{producto.nombre}}</h3>\n  <ion-slides mode=\"ios\" pager=\"ios\"  *ngIf=\"didInit\">\n    <ion-slide *ngFor=\"let imagen of producto.imagenes\">\n      <img src=\"{{imagen.imagen}}\" />\n    </ion-slide>\n  </ion-slides>\n  <h6><strong>$ </strong> {{producto.precio}}</h6>\n  <p>{{producto.descripcion}}</p>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-item lines=\"none\" class=\"catidad-item\">\n        <ion-label>Cantidad</ion-label>\n        <ion-select ok-text=\"Aceptar\" cancel-text=\"Cancelar\">\n          <ion-select-option value=\"1\">1</ion-select-option>\n          <ion-select-option value=\"2\">2</ion-select-option>\n          <ion-select-option value=\"3\">3</ion-select-option>\n          <ion-select-option value=\"4\">4</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n \n<div class=\"buttons-container\">\n  <ion-button color=\"promoshop\" expand=\"block\" (click)=\"addToCart(producto)\">Agregar al Carrito <ion-icon name=\"cart-outline\" slot=\"end\"></ion-icon></ion-button>\n  <ion-button color=\"promogreen\" expand=\"block\">Comprar ahora</ion-button>\n</div>\n \n</ion-content>";
      /***/
    },

    /***/
    "RlYN":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/modal-ver-producto/modal-ver-producto.module.ts ***!
      \***********************************************************************/

    /*! exports provided: ModalVerProductoPageModule */

    /***/
    function RlYN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalVerProductoPageModule", function () {
        return ModalVerProductoPageModule;
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


      var _modal_ver_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./modal-ver-producto-routing.module */
      "D9pO");
      /* harmony import */


      var _modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./modal-ver-producto.page */
      "t0A7");

      var ModalVerProductoPageModule = function ModalVerProductoPageModule() {
        _classCallCheck(this, ModalVerProductoPageModule);
      };

      ModalVerProductoPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _modal_ver_producto_routing_module__WEBPACK_IMPORTED_MODULE_5__["ModalVerProductoPageRoutingModule"]],
        declarations: [_modal_ver_producto_page__WEBPACK_IMPORTED_MODULE_6__["ModalVerProductoPage"]]
      })], ModalVerProductoPageModule);
      /***/
    },

    /***/
    "hSuy":
    /*!***********************************************************************!*\
      !*** ./src/app/pages/modal-ver-producto/modal-ver-producto.page.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function hSuy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content strong {\n  color: var(--ion-color-promoshop);\n}\n\n.catidad-item {\n  --background: var(--ion-color-light);\n  --border-radius:10px;\n}\n\n.catidad-item ion-label {\n  font-size: 15px;\n}\n\n.buttons-container {\n  text-align: center;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21vZGFsLXZlci1wcm9kdWN0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxpQ0FBQTtBQUFSOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxvQkFBQTtBQURKOztBQUVJO0VBQ0ksZUFBQTtBQUFSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQUFKIiwiZmlsZSI6Im1vZGFsLXZlci1wcm9kdWN0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBzdHJvbmd7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvbW9zaG9wKTtcbiAgICB9XG59XG5cbi5jYXRpZGFkLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAtLWJvcmRlci1yYWRpdXM6MTBweDtcbiAgICBpb24tbGFiZWx7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG59XG4uYnV0dG9ucy1jb250YWluZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */";
      /***/
    },

    /***/
    "t0A7":
    /*!*********************************************************************!*\
      !*** ./src/app/pages/modal-ver-producto/modal-ver-producto.page.ts ***!
      \*********************************************************************/

    /*! exports provided: ModalVerProductoPage */

    /***/
    function t0A7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalVerProductoPage", function () {
        return ModalVerProductoPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_modal_ver_producto_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./modal-ver-producto.page.html */
      "OVZS");
      /* harmony import */


      var _modal_ver_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./modal-ver-producto.page.scss */
      "hSuy");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_cart_marketplace_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../services/cart-marketplace.service */
      "u4O0");

      var ModalVerProductoPage = /*#__PURE__*/function () {
        function ModalVerProductoPage(modalCtrl, cartService) {
          _classCallCheck(this, ModalVerProductoPage);

          this.modalCtrl = modalCtrl;
          this.cartService = cartService;
          this.didInit = false;
          this.imagenSlide = {
            touchReleaseOnEdges: true
          };
        }

        _createClass(ModalVerProductoPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addToCart",
          value: function addToCart(producto) {
            this.cartService.addProduct(producto);
            this.salirConArgumentos(); // this.animateCSS('tada');
          } // async openCart() {
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

        }, {
          key: "salirConArgumentos",
          value: function salirConArgumentos() {
            this.modalCtrl.dismiss({
              nombres: 'Felipe',
              pais: 'España'
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.didInit = true;
          }
        }]);

        return ModalVerProductoPage;
      }();

      ModalVerProductoPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _services_cart_marketplace_service__WEBPACK_IMPORTED_MODULE_5__["CartMarketplaceService"]
        }];
      };

      ModalVerProductoPage.propDecorators = {
        producto: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ModalVerProductoPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-modal-ver-producto',
        template: _raw_loader_modal_ver_producto_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_modal_ver_producto_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ModalVerProductoPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-modal-ver-producto-modal-ver-producto-module-es5.js.map