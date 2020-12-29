(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\t\t<nav class=\"navigation\">\n\t\t\t<ul class=\"navigation__list\">\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link active\" href=\"#home\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"home-outline\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">HOME</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link\" href=\"#search\">\n\t\t\t\t\t\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"search\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">SEARCH</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link\" href=\"#categories\">\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"search\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">CATEGORIES</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t<li class=\"navigation__item\">\n\t\t\t\t\t<a class=\"navigation__link\" href=\"#likes\">\n\t\t\t\t\t\t<ion-icon class=\"navigation__icon\" name=\"search\"></ion-icon>\n\t\t\t\t\t\t<span class=\"navigation__text\">LIKES</span>\n\t\t\t\t\t</a>\n\t\t\t\t</li>\n\t\t\t\t\n\t\t\t</ul>\n\t\t</nav>\n");

/***/ }),

/***/ "./src/app/pages/tab2/tab2-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/tab2/tab2-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Tab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageRoutingModule", function() { return Tab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");




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

/***/ "./src/app/pages/tab2/tab2.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.module.ts ***!
  \*******************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab2.page */ "./src/app/pages/tab2/tab2.page.ts");
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../explore-container/explore-container.module */ "./src/app/explore-container/explore-container.module.ts");
/* harmony import */ var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab2-routing.module */ "./src/app/pages/tab2/tab2-routing.module.ts");








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

/***/ "./src/app/pages/tab2/tab2.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".navigation {\n  width: 100%;\n  background-color: white;\n  border-radius: 50px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);\n}\n.navigation__list {\n  list-style: none;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 0;\n  padding: 0;\n}\n.navigation__item {\n  perspective: 100px;\n}\n.navigation__link {\n  font-size: 12px;\n  text-decoration: none;\n  color: #c3cad6;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 70px;\n  padding: 20px 30px;\n  overflow: hidden;\n  position: relative;\n  outline: none;\n}\n.navigation__link::before {\n  content: \"\";\n  width: 4px;\n  height: 4px;\n  border-radius: 15px;\n  background-color: #F6C89F;\n  position: absolute;\n  transform: translateY(60px) scale(0.4);\n  transition: all 0.35s cubic-bezier(0, 0.51, 0, 0.99);\n  opacity: 0;\n}\n.navigation__icon {\n  transition: all 0.35s ease;\n  will-change: opacity, transform, background-color;\n}\n.navigation__text {\n  position: absolute;\n  transform: translateY(60px) skewY(-20deg);\n  transform-origin: left bottom;\n  color: #4b8e8d;\n  font-weight: 700;\n  opacity: 0;\n  transition: all 0.35s ease;\n  will-change: opacity, transform, background-color;\n}\n.navigation__link.active .navigation__icon {\n  transform: translateY(-60px) rotateX(90deg) scale(0.4) skewY(-30deg);\n  opacity: 0;\n}\n.navigation__link.active .navigation__text {\n  opacity: 1;\n  transform: translateY(-3px) skewY(0deg);\n}\n.navigation__link.active::before {\n  transform: translateY(12px) scale(1);\n  transition: all 0.35s cubic-bezier(0, 0.51, 0, 0.99) 0.2s;\n  opacity: 1;\n}\n@-webkit-keyframes dotAnime {\n  0% {\n    transform: translateY(60px) scale(0.4);\n    opacity: 0;\n  }\n  75% {\n    transform: translateY(-3px) scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(12px);\n    opacity: 1;\n  }\n}\n@keyframes dotAnime {\n  0% {\n    transform: translateY(60px) scale(0.4);\n    opacity: 0;\n  }\n  75% {\n    transform: translateY(-3px) scale(1);\n    opacity: 1;\n  }\n  to {\n    transform: translateY(12px);\n    opacity: 1;\n  }\n}\n@-webkit-keyframes textAnime {\n  from {\n    transform-origin: right center;\n    transform: skewY(0) translateY(0);\n  }\n  25% {\n    transform: skewY(0) translateY(0);\n  }\n  60% {\n    transform: skewY(-12deg) translateY(-22px);\n  }\n  to {\n    transform: skewY(0) translateY(-3px);\n  }\n}\n@keyframes textAnime {\n  from {\n    transform-origin: right center;\n    transform: skewY(0) translateY(0);\n  }\n  25% {\n    transform: skewY(0) translateY(0);\n  }\n  60% {\n    transform: skewY(-12deg) translateY(-22px);\n  }\n  to {\n    transform: skewY(0) translateY(-3px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQTtFQUNDLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7QUFORDtBQVFDO0VBQ0MsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQU5GO0FBVUM7RUFFQyxrQkFBQTtBQVRGO0FBWUM7RUFDQyxlQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBVkY7QUFhRTtFQUNDLFdBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0Esb0RBQUE7RUFDQSxVQUFBO0FBWEg7QUFlQztFQUNDLDBCQUFBO0VBQ0EsaURBQUE7QUFiRjtBQWdCQztFQUNDLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSwwQkFBQTtFQUNBLGlEQUFBO0FBZEY7QUFpQkM7RUFDQyxvRUFBQTtFQUNBLFVBQUE7QUFmRjtBQWtCQztFQUNDLFVBQUE7RUFDQSx1Q0FBQTtBQWhCRjtBQW1CQztFQUNDLG9DQUFBO0VBQ0MseURBQUE7RUFDRCxVQUFBO0FBakJGO0FBc0JBO0VBQ0M7SUFDQyxzQ0FBQTtJQUNBLFVBQUE7RUFuQkE7RUFzQkQ7SUFDQyxvQ0FBQTtJQUNBLFVBQUE7RUFwQkE7RUFzQkQ7SUFDQywyQkFBQTtJQUNBLFVBQUE7RUFwQkE7QUFDRjtBQU9BO0VBQ0M7SUFDQyxzQ0FBQTtJQUNBLFVBQUE7RUFuQkE7RUFzQkQ7SUFDQyxvQ0FBQTtJQUNBLFVBQUE7RUFwQkE7RUFzQkQ7SUFDQywyQkFBQTtJQUNBLFVBQUE7RUFwQkE7QUFDRjtBQXVCQTtFQUNDO0lBQ0MsOEJBQUE7SUFDQSxpQ0FBQTtFQXJCQTtFQXdCRDtJQUNDLGlDQUFBO0VBdEJBO0VBeUJEO0lBQ0MsMENBQUE7RUF2QkE7RUEyQkQ7SUFDQyxvQ0FBQTtFQXpCQTtBQUNGO0FBUUE7RUFDQztJQUNDLDhCQUFBO0lBQ0EsaUNBQUE7RUFyQkE7RUF3QkQ7SUFDQyxpQ0FBQTtFQXRCQTtFQXlCRDtJQUNDLDBDQUFBO0VBdkJBO0VBMkJEO0lBQ0Msb0NBQUE7RUF6QkE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RhYjIvdGFiMi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5cblxuXG5cbi5uYXZpZ2F0aW9uIHtcblx0d2lkdGg6IDEwMCU7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXHRib3JkZXItcmFkaXVzOiA1MHB4O1xuXHRib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cdFxuXHQmX19saXN0IHtcblx0XHRsaXN0LXN0eWxlOiBub25lO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0bWFyZ2luOiAwO1xuXHRcdHBhZGRpbmc6IDA7XG5cdFx0XG5cdH1cblx0XG5cdCZfX2l0ZW0ge1xuXHRcdFxuXHRcdHBlcnNwZWN0aXZlOiAxMDBweFxuXHR9XG5cdFxuXHQmX19saW5rIHtcblx0XHRmb250LXNpemU6IDEycHg7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGNvbG9yOiAjYzNjYWQ2O1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0XHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdGhlaWdodDogNzBweDtcblx0XHRwYWRkaW5nOiAyMHB4IDMwcHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0XHRcblx0XHRcblx0XHQmOjpiZWZvcmUge1xuXHRcdFx0Y29udGVudDogJyc7XG5cdFx0XHR3aWR0aDogNHB4O1xuXHRcdFx0aGVpZ2h0OiA0cHg7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxNXB4O1xuXHRcdFx0YmFja2dyb3VuZC1jb2xvcjogI0Y2Qzg5Rjtcblx0XHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg2MHB4KSBzY2FsZSguNCk7XG5cdFx0XHR0cmFuc2l0aW9uOiBhbGwgLjM1cyBjdWJpYy1iZXppZXIoMCwgMC41MSwgMCwgMC45OSk7XG5cdFx0XHRvcGFjaXR5OiAwO1xuXHRcdH1cblx0fVxuXHRcblx0Jl9faWNvbiB7XG5cdFx0dHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZTtcblx0XHR3aWxsLWNoYW5nZTogb3BhY2l0eSwgdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yO1xuXHR9XG5cdFxuXHQmX190ZXh0IHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpIHNrZXdZKC0yMGRlZyk7XG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG5cdFx0Y29sb3I6ICM0YjhlOGQ7XG5cdFx0Zm9udC13ZWlnaHQ6IDcwMDtcblx0XHRvcGFjaXR5OiAwO1xuXHRcdHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2U7XG5cdFx0d2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvcjtcblx0fVxuXHRcblx0Jl9fbGluay5hY3RpdmUgJl9faWNvbiB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC02MHB4KSByb3RhdGVYKDkwZGVnKSBzY2FsZSguNCkgc2tld1koLTMwZGVnKTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdFxuXHQmX19saW5rLmFjdGl2ZSAmX190ZXh0IHtcblx0XHRvcGFjaXR5OiAxO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM3B4KSBza2V3WSgwZGVnKTtcblx0fVxuXHRcblx0Jl9fbGluay5hY3RpdmU6OmJlZm9yZSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEycHgpIHNjYWxlKDEpO1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4zNXMgY3ViaWMtYmV6aWVyKDAsIDAuNTEsIDAsIDAuOTkpIDAuMnM7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxufVxuXG5cbkBrZXlmcmFtZXMgZG90QW5pbWUge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDYwcHgpIHNjYWxlKC40KTtcblx0XHRvcGFjaXR5OiAwXG5cdH1cblx0XG5cdDc1JSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zcHgpIHNjYWxlKDEpO1xuXHRcdG9wYWNpdHk6IDE7XG5cdH1cblx0dG8ge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMnB4KTtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgdGV4dEFuaW1lIHtcblx0ZnJvbSB7XG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuXHRcdHRyYW5zZm9ybTogc2tld1koMCkgdHJhbnNsYXRlWSgwKTtcblx0fVxuXHRcblx0MjUlIHtcblx0XHR0cmFuc2Zvcm06IHNrZXdZKDApIHRyYW5zbGF0ZVkoMCk7XG5cdH1cblx0XG5cdDYwJSB7XG5cdFx0dHJhbnNmb3JtOiBza2V3WSgtMTJkZWcpIHRyYW5zbGF0ZVkoLTIycHgpO1xuXHRcdFxuXHR9XG5cdFxuXHR0byB7XG5cdFx0dHJhbnNmb3JtOiBza2V3WSgwKSB0cmFuc2xhdGVZKC0zcHgpO1xuXHR9XG5cdFxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tab2/tab2.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/tab2/tab2.page.ts ***!
  \*****************************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Tab2Page = class Tab2Page {
    constructor() { }
    onClick() {
    }
};
Tab2Page.ctorParameters = () => [];
Tab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tab2',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./tab2.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tab2/tab2.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./tab2.page.scss */ "./src/app/pages/tab2/tab2.page.scss")).default]
    })
], Tab2Page);



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module-es2015.js.map