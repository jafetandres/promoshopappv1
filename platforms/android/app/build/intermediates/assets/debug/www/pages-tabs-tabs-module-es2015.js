(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tabs-tabs-module"],{

/***/ "1vg1":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tabs/tabs.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n      <ion-label>Home</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"search-outline\"></ion-icon>\n      <ion-label>Buscar</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab3\">\n      <ion-icon name=\"bag-handle-outline\"></ion-icon>\n      <ion-label>Pedidos</ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cart-marketplace\">\n      <ion-badge color=\"promoshop\" class=\"cart-length\">{{ cartItemCount | async }}</ion-badge>\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-tab-button>\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"person-outline\"></ion-icon>\n      <ion-label>Cuenta</ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n\n\n\n\n");

/***/ }),

/***/ "Gg5j":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --color: var(--ion-color-medium);\n  --color-selected: var(--ion-color-promoshop);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQTtFQUNJLGdDQUFBO0VBQ0EsNENBQUE7QUFsQkoiLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdGFiLWJhciB7XG4vLyAgICAgYm90dG9tOiAxMHB4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuLy8gICAgIHdpZHRoOiA5MiU7XG4vLyAgICAgLy8gbWFyZ2luOiAwIGF1dG87XG4vLyAgICAgb3BhY2l0eTogMC45ICFpbXBvcnRhbnQ7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbi8vICAgICBtYXJnaW4tbGVmdDogYXV0bztcbi8vICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4vLyAgICAgbGVmdDogMDtcbi8vICAgICByaWdodDogMDtcbi8vICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4vLyB9XG4vLyBpb24taWNvbiB7XG4vLyAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xuLy8gfVxuaW9uLXRhYi1idXR0b24ge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgIC0tY29sb3Itc2VsZWN0ZWQ6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xufVxuXG4vLyAgICAgJjo6YmVmb3JlIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4vLyAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgICAgICBtYXJnaW46IDAgYXV0bztcbi8vICAgICAgICAgd2lkdGg6IDIwcHg7XG4vLyAgICAgICAgIGhlaWdodDogMnB4O1xuLy8gICAgIH1cblxuLy8gICAgICYudGFiLXNlbGVjdGVkOjpiZWZvcmUge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJvbW9zaG9wKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGlvbi10YWJzIHtcbi8vICAgICAtLWljb24tYWN0aXZlOiAjMjc1ZWZlO1xuLy8gICAgIC0taWNvbi1pbmFjdGl2ZTogIzZjNzQ4Njtcbi8vICAgICAtLWljb24taG92ZXI6ICM5OWEzYmE7XG5cbi8vICAgICAtLXRleHQ6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xuLy8gICAgIC0tY2lyY2xlOiAjZTRlY2ZhO1xuLy8gICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ3RoKTtcbi8vICAgICAtLXNoYWRvdzogcmdiYSgxOCwgMjIsIDMzLCAwLjEpO1xuXG4vLyBpb24tdGFicyB7XG4gXG4vLyAgICAgaW9uLXRhYi1iYXIge1xuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgICB0b3A6IDkwJTtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbi8vICAgICAgICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4vLyAgICAgICAgIGlvbi10YWItYnV0dG9uIHtcbi8vICAgICAgICAgICAgIHBlcnNwZWN0aXZlOiAxMDBweDtcbi8vICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgICAgXG4vLyAgICAgICAgICAgICBpb24tbGFiZWwge1xuLy8gICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNjBweCkgc2tld1koLTIwZGVnKTtcbi8vICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbi8vICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByb21vc2hvcCk7XG4vLyAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbi8vICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuLy8gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xuLy8gICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm0sIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICBpb24taWNvbiB7XG4vLyAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcm9tb3Nob3ApO1xuLy8gICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjM1cyBlYXNlO1xuLy8gICAgICAgICAgICAgICAgIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm0sIGJhY2tncm91bmQtY29sb3I7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICB9XG4vLyB9XG4vLyB9XG4vLyBpb24tdGFiLWJhciB7XG4vLyAtLWljb24tYWN0aXZlOiAjMjc1RUZFO1xuLy8gLS1pY29uLWluYWN0aXZlOiAjNkM3NDg2O1xuLy8gLS1pY29uLWhvdmVyOiAjOTlBM0JBO1xuLy8gLS10ZXh0OiB2YXIoLS1pb24tY29sb3ItcHJvbW9zaG9wKTtcbi8vIC0tY2lyY2xlOiAjRTRFQ0ZBO1xuLy8gLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItbGlndGgpO1xuLy8gLS1zaGFkb3c6IHJnYmEoMTgsIDIyLCAzMywgLjEpO1xuLy8gYm9yZGVyLXJhZGl1czogMCAwIDEycHggMTJweDtcbi8vIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuLy8gd2lkdGg6IDEwMCU7XG4vLyBoZWlnaHQ6IDY0cHg7XG4vLyBwYWRkaW5nOiAwIDEycHg7XG4vLyBib3gtc2hhZG93OiAwIDhweCAxNnB4IHZhcigtLXNoYWRvdyk7XG4vLyAgICAgdWwge1xuLy8gICAgICAgICBtYXJnaW46IDA7XG4vLyAgICAgICAgIHBhZGRpbmc6IDA7XG4vLyAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4vLyAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4vLyAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbi8vICAgICAgICAgei1pbmRleDogMTtcbi8vICAgICAgICAgbGkge1xuLy8gICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICAgICAgICAgICAgZmxleC1ncm93OiAxO1xuLy8gICAgICAgICAgICAgYSB7XG4vLyAgICAgICAgICAgICAgICAgLS1kOiAxO1xuLy8gICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbi8vICAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZTtcbi8vICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4vLyAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbi8vICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuLy8gICAgICAgICAgICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcbi8vICAgICAgICAgICAgICAgICBkaXYsXG4vLyAgICAgICAgICAgICAgICAgc3Bhbixcbi8vICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjBweDtcbi8vICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuLy8gICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbi8vICAgICAgICAgICAgICAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIGRpdiB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgdG9wOiA1MCU7XG4vLyAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTg0JSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDUwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45NCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTAwJTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZG93biAuM3MgbGluZWFyIGZvcndhcmRzO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAuM3MgZWFzZSwgc3Ryb2tlIC4zcyBlYXNlO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1pY29uKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1pY29uKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA1O1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuMjVzIGVhc2U7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYWN0aXZlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1hY3RpdmUpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICBzdHJvbmcge1xuLy8gICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4vLyAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4vLyAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcbi8vICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlO1xuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbi8vICAgICAgICAgICAgICAgICAgICAgZGl2IHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHNwYW4ge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0taG92ZXIpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1ob3Zlcik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAmLmFjdGl2ZSB7XG4vLyAgICAgICAgICAgICAgICAgYSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDU7XG4vLyAgICAgICAgICAgICAgICAgICAgIGRpdiB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzcGFuIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGhpZ2ggLjM1cyBsaW5lYXIgZm9yd2FyZHMgLjA1cztcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ZnIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWljb24tYi1hY3RpdmUpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Ryb2tlOiB2YXIoLS1pY29uLWItYWN0aXZlKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAuM3MgZWFzZSAuMjVzO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgICAgICBzdHJvbmcge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjYpO1xuLy8gICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIGVtIHtcbi8vICAgICAgICAgLS1vZmZzZXQ6IDA7XG4vLyAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbi8vICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4vLyAgICAgICAgIHdpZHRoOiA2cHg7XG4vLyAgICAgICAgIGhlaWdodDogNnB4O1xuLy8gICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4vLyAgICAgICAgIGJvdHRvbTogMTNweDtcbi8vICAgICAgICAgbGVmdDogNHB4O1xuLy8gICAgICAgICBtYXJnaW46IDAgMCAwIC0zcHg7XG4vLyAgICAgICAgIHotaW5kZXg6IDQ7XG4vLyAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNHMgZWFzZTtcbi8vICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZG90KTtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKHZhcigtLW9mZnNldCkpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gQGtleWZyYW1lcyBoaWdoIHtcbi8vICAgICAwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKC45NCk7XG4vLyAgICAgfVxuLy8gICAgIDMzJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKGNhbGModmFyKC0tZCkgKiAxMGRlZykpO1xuLy8gICAgIH1cbi8vICAgICA2NiUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKHZhcigtLWQpICogMTBkZWcpKSB0cmFuc2xhdGVZKC0xcHgpO1xuLy8gICAgIH1cbi8vICAgICAxMDAlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMSkgdHJhbnNsYXRlWSgtMXB4KTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgZG93biB7XG4vLyAgICAgMCUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGVZKC0xcHgpO1xuLy8gICAgIH1cbi8vICAgICAzMyUge1xuLy8gICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZShjYWxjKHZhcigtLWQpICogMTBkZWcpKTtcbi8vICAgICB9XG4vLyAgICAgNjYlIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoY2FsYyh2YXIoLS1kKSAqIDEwZGVnKSkgdHJhbnNsYXRlWSgwKTtcbi8vICAgICB9XG4vLyAgICAgMTAwJSB7XG4vLyAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKC45NCkgdHJhbnNsYXRlWSgwKTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGh0bWwge1xuLy8gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4vLyAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4vLyB9XG5cbi8vICoge1xuLy8gICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4vLyAgICAgJjpiZWZvcmUsXG4vLyAgICAgJjphZnRlciB7XG4vLyAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4vLyAgICAgfVxuLy8gfVxuIl19 */");

/***/ }),

/***/ "MM9G":
/*!***************************************************!*\
  !*** ./src/app/pages/tabs/tabs-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function() { return TabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ "TA0h");




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() | tab1-tab1-module */[__webpack_require__.e("default~pages-modal-metodos-pago-guardados-modal-metodos-pago-guardados-module~pages-modal-registrar~a84bc544"), __webpack_require__.e("common"), __webpack_require__.e("tab1-tab1-module")]).then(__webpack_require__.bind(null, /*! ../tab1/tab1.module */ "uMfO")).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() | tab2-tab2-module */[__webpack_require__.e("common"), __webpack_require__.e("tab2-tab2-module")]).then(__webpack_require__.bind(null, /*! ../tab2/tab2.module */ "HJ/b")).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() | tab3-tab3-module */[__webpack_require__.e("default~pages-modal-ver-pedido-modal-ver-pedido-module~tab3-tab3-module"), __webpack_require__.e("common"), __webpack_require__.e("tab3-tab3-module")]).then(__webpack_require__.bind(null, /*! ../tab3/tab3.module */ "XgaQ")).then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => __webpack_require__.e(/*! import() | tab4-tab4-module */ "tab4-tab4-module").then(__webpack_require__.bind(null, /*! ../tab4/tab4.module */ "GXrT")).then(m => m.Tab4PageModule)
            },
            {
                path: 'cart-marketplace',
                loadChildren: () => __webpack_require__.e(/*! import() | cart-marketplace-cart-marketplace-module */ "default~cart-marketplace-cart-marketplace-module~pages-cart-marketplace-cart-marketplace-module").then(__webpack_require__.bind(null, /*! ../cart-marketplace/cart-marketplace.module */ "/ZBB")).then(m => m.CartMarketplacePageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TabsPageRoutingModule);



/***/ }),

/***/ "TA0h":
/*!*****************************************!*\
  !*** ./src/app/pages/tabs/tabs.page.ts ***!
  \*****************************************/
/*! exports provided: TabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPage", function() { return TabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tabs.page.html */ "1vg1");
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss */ "Gg5j");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_cart_marketplace_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart-marketplace.service */ "u4O0");





let TabsPage = class TabsPage {
    constructor(cartMarketplaceService) {
        this.cartMarketplaceService = cartMarketplaceService;
        this.cartItemCount = this.cartMarketplaceService.getCartItemCount();
    }
};
TabsPage.ctorParameters = () => [
    { type: _services_cart_marketplace_service__WEBPACK_IMPORTED_MODULE_4__["CartMarketplaceService"] }
];
TabsPage.propDecorators = {
    fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },] }]
};
TabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TabsPage);



/***/ }),

/***/ "qiIP":
/*!*******************************************!*\
  !*** ./src/app/pages/tabs/tabs.module.ts ***!
  \*******************************************/
/*! exports provided: TabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsPageModule", function() { return TabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tabs-routing.module */ "MM9G");
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tabs.page */ "TA0h");







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"]
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })
], TabsPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-tabs-tabs-module-es2015.js.map