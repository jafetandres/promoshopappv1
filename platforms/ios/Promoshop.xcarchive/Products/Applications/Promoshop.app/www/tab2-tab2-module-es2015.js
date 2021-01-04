(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "0Mug":
/*!***************************************************!*\
  !*** ./src/app/pages/tab2/tab2-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "AEsy");




const routes = [
    {
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_3__["Tab2Page"],
    }
];
let Tab2PageRoutingModule = class Tab2PageRoutingModule {
};
Tab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab2PageRoutingModule);



/***/ }),

/***/ "AEsy":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab2.page.html */ "iTLA");
/* harmony import */ var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab2.page.scss */ "Xbvs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Tab2Page = class Tab2Page {
    constructor() { }
    onClick() {
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab2Page);



/***/ }),

/***/ "HJ/b":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "AEsy");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "qtYk");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "0Mug");








let Tab2PageModule = class Tab2PageModule {
};
Tab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__["ExploreContainerComponentModule"],
            _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab2PageRoutingModule"]
        ],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_5__["Tab2Page"]]
    })
], Tab2PageModule);



/***/ }),

/***/ "Xbvs":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  width: 100%;\n  background-color: white;\n  border-radius: 50px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.navigation__list {\n  list-style: none;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n}\n.navigation__item {\n  perspective: 100px;\n}\n.navigation__link {\n  font-size: 12px;\n  text-decoration: none;\n  color: #c3cad6;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n  padding: 20px 30px;\n  overflow: hidden;\n  position: relative;\n  outline: none;\n}\n.navigation__link::before {\n  content: \"\";\n  width: 4px;\n  height: 4px;\n  border-radius: 15px;\n  background-color: #F6C89F;\n  position: absolute;\n  transform: translateY(60px) scale(0.4);\n  transition: all 0.35s cubic-bezier(0, 0.51, 0, 0.99);\n  opacity: 0;\n}\n.navigation__icon {\n  transition: all 0.35s ease;\n  will-change: opacity, transform, background-color;\n}\n.navigation__text {\n  position: absolute;\n  transform: translateY(60px) skewY(-20deg);\n  transform-origin: left bottom;\n  color: #4b8e8d;\n  font-weight: 700;\n  opacity: 0;\n  transition: all 0.35s ease;\n  will-change: opacity, transform, background-color;\n}\n.navigation__link.active .navigation__icon {\n  transform: translateY(-60px) rotateX(90deg) scale(0.4) skewY(-30deg);\n  opacity: 0;\n}\n.navigation__link.active .navigation__text {\n  opacity: 1;\n  transform: translateY(-3px) skewY(0deg);\n}\n.navigation__link.active::before {\n  transform: translateY(12px) scale(1);\n  transition: all 0.35s cubic-bezier(0, 0.51, 0, 0.99) 0.2s;\n  opacity: 1;\n}\n@-webkit-keyframes dotAnime {\n  0% {\n    transform: translateY(60px) scale(0.4);\n    opacity: 0;\n  }\n  75% {\n    transform: translateY(-3px) scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(12px);\n    opacity: 1;\n  }\n}\n@keyframes dotAnime {\n  0% {\n    transform: translateY(60px) scale(0.4);\n    opacity: 0;\n  }\n  75% {\n    transform: translateY(-3px) scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(12px);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes textAnime {\n  from {\n    transform-origin: right center;\n    transform: skewY(0) translateY(0);\n  }\n  25% {\n    transform: skewY(0) translateY(0);\n  }\n  60% {\n    transform: skewY(-12deg) translateY(-22px);\n  }\n  to {\n    transform: skewY(0) translateY(-3px);\n  }\n}\n@keyframes textAnime {\n  from {\n    transform-origin: right center;\n    transform: skewY(0) translateY(0);\n  }\n  25% {\n    transform: skewY(0) translateY(0);\n  }\n  60% {\n    transform: skewY(-12deg) translateY(-22px);\n  }\n  to {\n    transform: skewY(0) translateY(-3px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYjIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0MsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtBQU5EO0FBUUM7RUFDQyxnQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTkY7QUFVQztFQUVDLGtCQUFBO0FBVEY7QUFZQztFQUNDLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFWRjtBQWFFO0VBQ0MsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxvREFBQTtFQUNBLFVBQUE7QUFYSDtBQWVDO0VBQ0MsMEJBQUE7RUFDQSxpREFBQTtBQWJGO0FBZ0JDO0VBQ0Msa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDBCQUFBO0VBQ0EsaURBQUE7QUFkRjtBQWlCQztFQUNDLG9FQUFBO0VBQ0EsVUFBQTtBQWZGO0FBa0JDO0VBQ0MsVUFBQTtFQUNBLHVDQUFBO0FBaEJGO0FBbUJDO0VBQ0Msb0NBQUE7RUFDQyx5REFBQTtFQUNELFVBQUE7QUFqQkY7QUFzQkE7RUFDQztJQUNDLHNDQUFBO0lBQ0EsVUFBQTtFQW5CQTtFQXNCRDtJQUNDLG9DQUFBO0lBQ0EsVUFBQTtFQXBCQTtFQXNCRDtJQUNDLDJCQUFBO0lBQ0EsVUFBQTtFQXBCQTtBQUNGO0FBT0E7RUFDQztJQUNDLHNDQUFBO0lBQ0EsVUFBQTtFQW5CQTtFQXNCRDtJQUNDLG9DQUFBO0lBQ0EsVUFBQTtFQXBCQTtFQXNCRDtJQUNDLDJCQUFBO0lBQ0EsVUFBQTtFQXBCQTtBQUNGO0FBdUJBO0VBQ0M7SUFDQyw4QkFBQTtJQUNBLGlDQUFBO0VBckJBO0VBd0JEO0lBQ0MsaUNBQUE7RUF0QkE7RUF5QkQ7SUFDQywwQ0FBQTtFQXZCQTtFQTJCRDtJQUNDLG9DQUFBO0VBekJBO0FBQ0Y7QUFRQTtFQUNDO0lBQ0MsOEJBQUE7SUFDQSxpQ0FBQTtFQXJCQTtFQXdCRDtJQUNDLGlDQUFBO0VBdEJBO0VBeUJEO0lBQ0MsMENBQUE7RUF2QkE7RUEyQkQ7SUFDQyxvQ0FBQTtFQXpCQTtBQUNGIiwiZmlsZSI6InRhYjIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuXG5cblxuXG4ubmF2aWdhdGlvbiB7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblx0Ym9yZGVyLXJhZGl1czogNTBweDtcblx0Ym94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXHRcblx0Jl9fbGlzdCB7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHRcdG1hcmdpbjogMDtcblx0XHRwYWRkaW5nOiAwO1xuXHRcdFxuXHR9XG5cdFxuXHQmX19pdGVtIHtcblx0XHRcblx0XHRwZXJzcGVjdGl2ZTogMTAwcHhcblx0fVxuXHRcblx0Jl9fbGluayB7XG5cdFx0Zm9udC1zaXplOiAxMnB4O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0XHRjb2xvcjogI2MzY2FkNjtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRoZWlnaHQ6IDcwcHg7XG5cdFx0cGFkZGluZzogMjBweCAzMHB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG91dGxpbmU6IG5vbmU7XG5cdFx0XG5cdFx0XG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0d2lkdGg6IDRweDtcblx0XHRcdGhlaWdodDogNHB4O1xuXHRcdFx0Ym9yZGVyLXJhZGl1czogMTVweDtcblx0XHRcdGJhY2tncm91bmQtY29sb3I6ICNGNkM4OUY7XG5cdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCkgc2NhbGUoLjQpO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zNXMgY3ViaWMtYmV6aWVyKDAsIDAuNTEsIDAsIDAuOTkpO1xuXHRcdFx0b3BhY2l0eTogMDtcblx0XHR9XG5cdH1cblx0XG5cdCZfX2ljb24ge1xuXHRcdHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2U7XG5cdFx0d2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcblx0fVxuXHRcblx0Jl9fdGV4dCB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KSBza2V3WSgtMjBkZWcpO1xuXHRcdHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuXHRcdGNvbG9yOiAjNGI4ZThkO1xuXHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0b3BhY2l0eTogMDtcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlO1xuXHRcdHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm0sIGJhY2tncm91bmQtY29sb3I7XG5cdH1cblx0XG5cdCZfX2xpbmsuYWN0aXZlICZfX2ljb24ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNjBweCkgcm90YXRlWCg5MGRlZykgc2NhbGUoLjQpIHNrZXdZKC0zMGRlZyk7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxuXHRcblx0Jl9fbGluay5hY3RpdmUgJl9fdGV4dCB7XG5cdFx0b3BhY2l0eTogMTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCkgc2tld1koMGRlZyk7XG5cdH1cblx0XG5cdCZfX2xpbmsuYWN0aXZlOjpiZWZvcmUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KSBzY2FsZSgxKTtcblx0XHRcdHRyYW5zaXRpb246IGFsbCAuMzVzIGN1YmljLWJlemllcigwLCAwLjUxLCAwLCAwLjk5KSAwLjJzO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cbn1cblxuXG5Aa2V5ZnJhbWVzIGRvdEFuaW1lIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KSBzY2FsZSguNCk7XG5cdFx0b3BhY2l0eTogMFxuXHR9XG5cdFxuXHQ3NSUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBzY2FsZSgxKTtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdHRvIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTJweCk7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHRleHRBbmltZSB7XG5cdGZyb20ge1xuXHRcdHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcblx0XHR0cmFuc2Zvcm06IHNrZXdZKDApIHRyYW5zbGF0ZVkoMCk7XG5cdH1cblx0XG5cdDI1JSB7XG5cdFx0dHJhbnNmb3JtOiBza2V3WSgwKSB0cmFuc2xhdGVZKDApO1xuXHR9XG5cdFxuXHQ2MCUge1xuXHRcdHRyYW5zZm9ybTogc2tld1koLTEyZGVnKSB0cmFuc2xhdGVZKC0yMnB4KTtcblx0XHRcblx0fVxuXHRcblx0dG8ge1xuXHRcdHRyYW5zZm9ybTogc2tld1koMCkgdHJhbnNsYXRlWSgtM3B4KTtcblx0fVxuXHRcbn0iXX0= */");

/***/ }),

/***/ "iTLA":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\t\t<nav class=\"navigation\">\n\t\t\t<ul class=\"navigation__list\">\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link active\" href=\"#home\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"home-outline\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">HOME</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link\" href=\"#search\">\n\t\t\t\t\t\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"search\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">SEARCH</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link\" href=\"#categories\">\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"search\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">CATEGORIES</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link\" href=\"#likes\">\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"search\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">LIKES</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t</ul>\n\t\t</nav>\n");

/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map