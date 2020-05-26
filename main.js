(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_router_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/router/home/home.component */ "./src/app/components/router/home/home.component.ts");
/* harmony import */ var _components_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layouts/main/main.component */ "./src/app/components/layouts/main/main.component.ts");
/* harmony import */ var _components_common_colors_colors_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/common/colors/colors.module */ "./src/app/components/common/colors/colors.module.ts");
/* harmony import */ var _components_common_contact_contact_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/contact/contact.module */ "./src/app/components/common/contact/contact.module.ts");
/* harmony import */ var _components_router_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/router/contact-us/contact-us.component */ "./src/app/components/router/contact-us/contact-us.component.ts");
/* harmony import */ var _components_router_products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/router/products/products.component */ "./src/app/components/router/products/products.component.ts");









var routes = [
    { path: 'golyb.github.io', component: _components_layouts_main_main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"], children: [
            { path: '/', pathMatch: 'full', component: _components_router_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
            { path: '/products', pathMatch: 'full', component: _components_router_products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"] },
            { path: '/contact-us', pathMatch: 'full', component: _components_router_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_7__["ContactUsComponent"] },
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _components_router_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _components_common_colors_colors_module__WEBPACK_IMPORTED_MODULE_5__["ColorsModule"],
                _components_common_contact_contact_module__WEBPACK_IMPORTED_MODULE_6__["ContactModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'golub';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_layouts_main_main_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layouts/main/main.module */ "./src/app/components/layouts/main/main.module.ts");
/* harmony import */ var _components_common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/common/mobile-menu/mobile-menu.component */ "./src/app/components/common/mobile-menu/mobile-menu.component.ts");








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_common_mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_7__["MobileMenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _components_layouts_main_main_module__WEBPACK_IMPORTED_MODULE_6__["MainModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/common/colors/colors.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/colors/colors.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"color-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h3 class=\"title-section\">Разновидность цветовой гаммы RAINGUARD</h3>\n\n        <ul class=\"color-list\">\n          <li *ngFor=\"let item of colors\" [style.background]=\"item.color\" [ngClass]=\"{'white': item.white}\">\n            {{item.title}}\n          </li>\n        </ul>\n\n        <p class=\"text\">Водосточные системы</p>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/components/common/colors/colors.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/colors/colors.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".color-section {\n  padding: 40px 0; }\n  .color-section .color-list {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .color-section .color-list li {\n      height: 95px;\n      padding: 20px;\n      margin-bottom: 10px;\n      color: #fff;\n      font-weight: 600;\n      display: flex;\n      align-items: center; }\n  .color-section .color-list li.white {\n        border: 1px solid #eee;\n        color: #72777d; }\n  .color-section p {\n    font-size: 16px;\n    color: #72777d; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2dvbHliLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlLEVBQUE7RUFEakI7SUFJSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQixFQUFBO0VBTnBCO01BU00sWUFBWTtNQUNaLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixhQUFhO01BQ2IsbUJBQW1CLEVBQUE7RUFmekI7UUFrQlEsc0JBQXNCO1FBQ3RCLGNBQWMsRUFBQTtFQW5CdEI7SUF5QkksZUFBZTtJQUNmLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2NvbG9ycy9jb2xvcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sb3Itc2VjdGlvbntcbiAgcGFkZGluZzogNDBweCAwO1xuXG4gIC5jb2xvci1saXN0e1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG5cbiAgICBsaXtcbiAgICAgIGhlaWdodDogOTVweDtcbiAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICYud2hpdGV7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgICAgIGNvbG9yOiAjNzI3NzdkO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjNzI3NzdkO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/common/colors/colors.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/colors/colors.component.ts ***!
  \**************************************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ColorsComponent = /** @class */ (function () {
    function ColorsComponent() {
        this.colors = [
            {
                title: 'RAL 3005 — красное вино',
                color: '#8a1124'
            },
            {
                title: 'RAL 3009 — красный',
                color: '#952124'
            },
            {
                title: 'RAL 7024 — графит',
                color: '#29363e'
            },
            {
                title: 'RAL 6020 — военный зеленый',
                color: '#4a4e3f'
            },
            {
                title: 'RAL 8004 — кирпичный',
                color: '#b84e38'
            },
            {
                title: 'RAL 8017 — молочный шоколад',
                color: '#442e23'
            },
            {
                title: 'RAL 8019 — темный шоколад',
                color: '#322a27'
            },
            {
                title: 'RAL 9005 — черный (антрацит)',
                color: '#121212'
            },
            {
                title: 'RAL 9010 — чистый белый',
                color: '#fff',
                white: true
            },
        ];
    }
    ColorsComponent.prototype.ngOnInit = function () {
    };
    ColorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/components/common/colors/colors.component.html"),
            styles: [__webpack_require__(/*! ./colors.component.scss */ "./src/app/components/common/colors/colors.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/components/common/colors/colors.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/common/colors/colors.module.ts ***!
  \***********************************************************/
/*! exports provided: ColorsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsModule", function() { return ColorsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _colors_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./colors.component */ "./src/app/components/common/colors/colors.component.ts");




var ColorsModule = /** @class */ (function () {
    function ColorsModule() {
    }
    ColorsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [
                _colors_component__WEBPACK_IMPORTED_MODULE_3__["ColorsComponent"]
            ]
        })
    ], ColorsModule);
    return ColorsModule;
}());



/***/ }),

/***/ "./src/app/components/common/contact/contact.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-us\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <h4 class=\"title\">Наши контакты</h4>\n                <h5>Производство</h5>\n                <ul class=\"list\">\n                    <li>\n                        <span class=\"circle\">\n                            <i class=\"fas fa-map-marker-alt\"></i>\n                        </span>\n                        <p>Хмельницкий, ул Курчатова, 118</p>\n                    </li>\n                    <li>\n                        <span class=\"circle\">\n                            <i class=\"fas fa-mobile-alt\"></i>\n                        </span>\n                        <p><b>+38(067)492 3416</b></p>\n                    </li>\n                    <li>\n                        <span class=\"circle\">\n                            <i class=\"fas fa-mobile-alt\"></i>\n                        </span>\n                        <p><b>+38(067)009 9600</b></p>\n                    </li>\n                </ul>\n\n                <div class=\"contact-form\">\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Ваше имя*\" required>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Email почта\" required>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Телефон*\" required>\n                    <textarea class=\"form-control\" rows=\"4\" placeholder=\"Сообщение*\"></textarea>\n                </div>\n            </div>\n            <div class=\"col-md-8\">\n                <h4 class=\"title\">Наши координаты</h4>\n                <!-- Google map-->\n                <div class=\"map\">\n                    <iframe width=\"100%\" height=\"450\" id=\"gmap_canvas\" src=\"https://maps.google.com/maps?q=48.919363, 24.713279&t=&z=17&ie=UTF8&iwloc=&output=embed\" frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"></iframe>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/common/contact/contact.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-us {\n  background: #f4f4f4;\n  padding: 40px 0; }\n  .contact-us .list {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .contact-us .list li {\n      display: flex;\n      align-items: center;\n      margin-bottom: 15px; }\n  .contact-us .list li .circle {\n        background: #f75442;\n        width: 36px;\n        height: 36px;\n        border-radius: 50%;\n        display: inline-block;\n        margin-right: 15px;\n        flex: 0 0 auto;\n        text-align: center;\n        color: #fff;\n        line-height: 36px;\n        font-size: 20px; }\n  .contact-us .map {\n    border: 5px solid #f7f7f7; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2dvbHliLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7RUFGakI7SUFLSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGdCQUFnQixFQUFBO0VBUHBCO01BVU0sYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixtQkFBbUIsRUFBQTtFQVp6QjtRQWVRLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsV0FBVztRQUNYLGlCQUFpQjtRQUNqQixlQUFlLEVBQUE7RUF6QnZCO0lBK0JJLHlCQUF3QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3QtdXN7XG4gIGJhY2tncm91bmQ6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDQwcHggMDtcblxuICAubGlzdHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgbGl7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG5cbiAgICAgIC5jaXJjbGV7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmNzU0NDI7XG4gICAgICAgIHdpZHRoOiAzNnB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBsaW5lLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5tYXB7XG4gICAgYm9yZGVyOjVweCBzb2xpZCAjZjdmN2Y3O1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/common/contact/contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/common/contact/contact.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/common/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/common/contact/contact.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/common/contact/contact.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/common/contact/contact.module.ts ***!
  \*************************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.component */ "./src/app/components/common/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [
                _contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/components/common/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-4 d-flex justify-content-md-start justify-content-center align-items-center\">\n                <a routerLink=\"/\" class=\"logo\">\n                    <img src=\"../../../../assets/img/logo-white.png\" alt=\"rainguard\">\n                </a>\n            </div>\n            <div class=\"col-lg-8\">\n                <p class=\"copyright\">© 2020 RAINGUARD. Все права защищены.</p>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\n  background: #1c1c1c;\n  padding: 10px 0; }\n  .footer .copyright {\n    font-size: 12px;\n    line-height: 20px;\n    padding: 10px 0;\n    color: #72777d;\n    text-align: center; }\n  @media screen and (min-width: 768px) {\n    .footer {\n      text-align: right; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2dvbHliLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZSxFQUFBO0VBRmpCO0lBS0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsY0FBYztJQUNkLGtCQUFrQixFQUFBO0VBR3BCO0lBWkY7TUFhSSxpQkFBaUIsRUFBQSxFQUVwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVye1xuICBiYWNrZ3JvdW5kOiAjMWMxYzFjO1xuICBwYWRkaW5nOiAxMHB4IDA7XG5cbiAgLmNvcHlyaWdodHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGNvbG9yOiAjNzI3NzdkO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/common/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/common/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/common/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <div class=\"container\">\n    <div class=\"row justify-content-between align-items-center\">\n      <div class=\"col-lg-3 col-10\">\n        <a routerLink=\"/\">\n          <img src=\"../../../../assets/img/logo.png\" alt=\"rainguard\">\n        </a>\n      </div>\n      <div class=\"col-lg-6\" *ngIf=\"!isMobile\" >\n        <nav class=\"menu\">\n          <ul>\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">home</a></li>\n            <li><a routerLink=\"/products\" routerLinkActive=\"active\">Products</a></li>\n            <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact Us</a></li>\n          </ul>\n        </nav>\n      </div>\n      <div class=\"col-lg-3 col-2\">\n        <div class=\"contact\" *ngIf=\"!isMobile\">\n          <a href=\"tel:+38(067)000000000\">+38(067)0000 000</a>\n          <span class=\"text\">Oтдел продаж!</span>\n        </div>\n        <button *ngIf=\"isMobile\" type=\"button\" mat-icon-button (click)=\"toggleMenu()\">\n          <mat-icon>menu</mat-icon>\n        </button>\n      </div>\n    </div>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/components/common/header/header.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/common/header/header.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding: 15px 0;\n  background: #fff;\n  z-index: 100; }\n  .header .menu ul {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    list-style: none; }\n  .header .menu ul li {\n      padding: 0 7px; }\n  .header .menu ul li a {\n        font-size: 16px;\n        text-transform: uppercase;\n        text-decoration: none;\n        color: #000;\n        font-weight: 600;\n        line-height: 20px;\n        display: inline-block;\n        padding: 5px 10px;\n        border-radius: 3px; }\n  .header .menu ul li a:hover {\n          background: #eee; }\n  .header .menu ul li a.active {\n          background: #f75442;\n          color: #fff; }\n  .header .contact {\n    text-align: right; }\n  .header .contact a {\n      display: block;\n      color: #000;\n      text-decoration: none;\n      font-size: 18px;\n      line-height: 1;\n      font-weight: 600; }\n  .header .contact .text {\n      color: #f75442;\n      font-size: 14px;\n      display: block; }\n  @media screen and (min-width: 768px) {\n    .header {\n      padding: 30px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2dvbHliLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixZQUFZLEVBQUE7RUFQZDtJQVdNLFNBQVM7SUFDVCxVQUFVO0lBQ1YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixnQkFBZ0IsRUFBQTtFQWZ0QjtNQWtCUSxjQUFjLEVBQUE7RUFsQnRCO1FBcUJVLGVBQWU7UUFDZix5QkFBeUI7UUFDekIscUJBQXFCO1FBQ3JCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIsa0JBQWtCLEVBQUE7RUE3QjVCO1VBK0JZLGdCQUFnQixFQUFBO0VBL0I1QjtVQW1DWSxtQkFBbUI7VUFDbkIsV0FBVyxFQUFBO0VBcEN2QjtJQTRDSSxpQkFBaUIsRUFBQTtFQTVDckI7TUErQ00sY0FBYztNQUNkLFdBQVc7TUFDWCxxQkFBcUI7TUFDckIsZUFBZTtNQUNmLGNBQWM7TUFDZCxnQkFBZ0IsRUFBQTtFQXBEdEI7TUF3RE0sY0FBYztNQUNkLGVBQWU7TUFDZixjQUFjLEVBQUE7RUFJbEI7SUE5REY7TUErREksZUFBZSxFQUFBLEVBRWxCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21tb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMTVweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICB6LWluZGV4OiAxMDA7XG5cbiAgLm1lbnV7XG4gICAgdWx7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcblxuICAgICAgbGl7XG4gICAgICAgIHBhZGRpbmc6IDAgN3B4O1xuXG4gICAgICAgIGF7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICAmOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLmFjdGl2ZXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmNzU0NDI7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY29udGFjdHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgIGF7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC50ZXh0e1xuICAgICAgY29sb3I6ICNmNzU0NDI7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIH1cblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XG4gICAgcGFkZGluZzogMzBweCAwO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/common/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/common/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isMobile = window.innerWidth < 768;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.toggle.emit(true);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])('toggle'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HeaderComponent.prototype, "toggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/common/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/common/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/common/header/header.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/common/header/header.module.ts ***!
  \***********************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/components/common/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");







var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
            ],
            exports: [
                _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/components/common/mobile-menu/mobile-menu.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/mobile-menu/mobile-menu.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mobile-menu works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/common/mobile-menu/mobile-menu.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/components/common/mobile-menu/mobile-menu.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29tbW9uL21vYmlsZS1tZW51L21vYmlsZS1tZW51LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/common/mobile-menu/mobile-menu.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/common/mobile-menu/mobile-menu.component.ts ***!
  \************************************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent() {
    }
    MobileMenuComponent.prototype.ngOnInit = function () {
    };
    MobileMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mobile-menu',
            template: __webpack_require__(/*! ./mobile-menu.component.html */ "./src/app/components/common/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__(/*! ./mobile-menu.component.scss */ "./src/app/components/common/mobile-menu/mobile-menu.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/main/main.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/layouts/main/main.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<mat-sidenav-container class=\"example-container\" autosize [hasBackdrop]=\"true\">\n    <mat-sidenav #drawer class=\"mobile-munu\" mode=\"over\" [fixedInViewport]=\"true\">\n        <ul class=\"nav-menu\">\n            <li><a routerLink=\"/\" routerLinkActive=\"active\">home</a></li>\n            <li><a routerLink=\"/products\" routerLinkActive=\"active\">Products</a></li>\n            <li><a routerLink=\"/contact-us\" routerLinkActive=\"active\">Contact Us</a></li>\n        </ul>\n        <div class=\"contact\">\n            <a href=\"tel:+38(067)000000000\">+38(067)0000 000</a>\n            <span class=\"text\">Oтдел продаж!</span>\n        </div>\n    </mat-sidenav>\n\n    <main class=\"page\">\n        <app-header (toggle)=\"drawer.toggle()\"></app-header>\n\n        <router-outlet></router-outlet>\n\n        <app-footer></app-footer>\n    </main>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./src/app/components/layouts/main/main.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/layouts/main/main.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page {\n  margin-top: 70px; }\n  @media screen and (min-width: 768px) {\n    .page {\n      margin-top: 100px; } }\n  .mobile-munu {\n  background: #fff;\n  width: 300px;\n  padding: 20px; }\n  .mobile-munu .nav-menu {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n  .mobile-munu .nav-menu li a {\n      line-height: 30px;\n      font-size: 16px;\n      text-transform: uppercase;\n      border-bottom: 1px solid #eee;\n      color: #000;\n      display: block;\n      padding: 10px; }\n  .mobile-munu .contact {\n    text-align: right;\n    margin-top: 50px; }\n  .mobile-munu .contact a {\n      display: block;\n      color: #000;\n      text-decoration: none;\n      font-size: 18px;\n      line-height: 1;\n      font-weight: 600; }\n  .mobile-munu .contact .text {\n      color: #f75442;\n      font-size: 14px;\n      display: block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2dvbHliLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0cy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0IsRUFBQTtFQUVoQjtJQUhGO01BSUksaUJBQWlCLEVBQUEsRUFFcEI7RUFFRDtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osYUFBYSxFQUFBO0VBSGY7SUFLSSxnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFVBQVUsRUFBQTtFQVBkO01BV1EsaUJBQWlCO01BQ2pCLGVBQWU7TUFDZix5QkFBeUI7TUFDekIsNkJBQTZCO01BQzdCLFdBQVc7TUFDWCxjQUFjO01BQ2QsYUFBYSxFQUFBO0VBakJyQjtJQTJCSSxpQkFBaUI7SUFDakIsZ0JBQWdCLEVBQUE7RUE1QnBCO01BK0JNLGNBQWM7TUFDZCxXQUFXO01BQ1gscUJBQXFCO01BQ3JCLGVBQWU7TUFDZixjQUFjO01BQ2QsZ0JBQWdCLEVBQUE7RUFwQ3RCO01Bd0NNLGNBQWM7TUFDZCxlQUFlO01BQ2YsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXRzL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdle1xuICBtYXJnaW4tdG9wOiA3MHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgfVxufVxuXG4ubW9iaWxlLW11bnV7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHdpZHRoOiAzMDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgLm5hdi1tZW51e1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG5cbiAgICBsaXtcbiAgICAgIGF7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xuICAgICAgICBjb2xvcjogIzAwMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgICAgJjphY3RpdmV7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5jb250YWN0e1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICBhe1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBjb2xvcjogIzAwMDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICAudGV4dHtcbiAgICAgIGNvbG9yOiAjZjc1NDQyO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICB9XG5cblxufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/layouts/main/main.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/layouts/main/main.component.ts ***!
  \***********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/components/layouts/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/components/layouts/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/components/layouts/main/main.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/layouts/main/main.module.ts ***!
  \********************************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main.component */ "./src/app/components/layouts/main/main.component.ts");
/* harmony import */ var _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/footer/footer.component */ "./src/app/components/common/footer/footer.component.ts");
/* harmony import */ var _common_header_header_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/header/header.module */ "./src/app/components/common/header/header.module.ts");
/* harmony import */ var _router_products_products_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../router/products/products.module */ "./src/app/components/router/products/products.module.ts");
/* harmony import */ var _router_contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../router/contact-us/contact-us.module */ "./src/app/components/router/contact-us/contact-us.module.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");










var MainModule = /** @class */ (function () {
    function MainModule() {
    }
    MainModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
                _common_header_header_module__WEBPACK_IMPORTED_MODULE_6__["HeaderModule"],
                _router_products_products_module__WEBPACK_IMPORTED_MODULE_7__["ProductsModule"],
                _router_contact_us_contact_us_module__WEBPACK_IMPORTED_MODULE_8__["ContactUsModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"]
            ],
            exports: [
                _main_component__WEBPACK_IMPORTED_MODULE_4__["MainComponent"],
                _common_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]
            ]
        })
    ], MainModule);
    return MainModule;
}());



/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVyL2NvbnRhY3QtdXMvY29udGFjdC11cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.component.ts ***!
  \**********************************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/components/router/contact-us/contact-us.component.html"),
            styles: [__webpack_require__(/*! ./contact-us.component.scss */ "./src/app/components/router/contact-us/contact-us.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/components/router/contact-us/contact-us.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/router/contact-us/contact-us.module.ts ***!
  \*******************************************************************/
/*! exports provided: ContactUsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsModule", function() { return ContactUsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_us_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact-us.component */ "./src/app/components/router/contact-us/contact-us.component.ts");
/* harmony import */ var _common_contact_contact_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/contact/contact.module */ "./src/app/components/common/contact/contact.module.ts");





var ContactUsModule = /** @class */ (function () {
    function ContactUsModule() {
    }
    ContactUsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_contact_contact_module__WEBPACK_IMPORTED_MODULE_4__["ContactModule"]
            ],
            exports: [
                _contact_us_component__WEBPACK_IMPORTED_MODULE_3__["ContactUsComponent"]
            ],
        })
    ], ContactUsModule);
    return ContactUsModule;
}());



/***/ }),

/***/ "./src/app/components/router/home/home.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/router/home/home.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"intro\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12\">\n                <h1>Металлическая водосточная система </h1>\n\n                <h2>RAINGUARD</h2>\n\n                <ul class=\"list\">\n                    <li>\n                        <i class=\"fas fa-check\"></i>\n                        Долговечность продукции\n                    </li>\n                    <li>\n                         <i class=\"fas fa-check\"></i>\n                        Огнестойкость\n                    </li>\n                    <li>\n                         <i class=\"fas fa-check\"></i>\n                        Гарантия 50 лет\n                    </li>\n                    <li>\n                         <i class=\"fas fa-check\"></i>\n                        Устойчивость к серьезным нагрузкам\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"products\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 d-flex align-items-center justify-content-center\">\n                <img src=\"../../../../assets/img/product-350x350.png\" alt=\"\">\n            </div>\n            <div class=\"col-md-6\">\n                <h3 class=\"title-section\">Продукция RAINGUARD</h3>\n                <p>\n                    <b>Металл USS Cosice (Словакия)</b> — это высококачественный металл в котором используется\n                    толстослойный полиэстер с очень мелкой зернистой структурой, обеспечивающей оптимальное\n                    соотношение эластичности и твердости и отличается хорошей устойчивостью к атмосферным воздействиям\n                    и поверхностного износа);\n                    <br><br>\n                    Имеет двустороннее покрытие с толщиной 35 мкм. Слой цинкового покрытия 275 гр / м2, толщина\n                    0,6 мм. 9 цветов USS (3005, 3009, 6020, 7024, 8004, 8017, 8019, 9005, 9010), и 5 цветов SSAB ().\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<section class=\"benefits\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <h3 class=\"title-section\">Преимущества RAINGUARD</h3>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"far fa-hospital\"></i>\n                    </div>\n                    <p>Современное оборудование из Финляндии</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"fas fa-shield-alt\"></i>\n                    </div>\n                    <p>Гарантия 50 лет</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"fas fa-home\"></i>\n                    </div>\n                    <p>Простота монтажа</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"item\">\n                    <div class=\"icon\">\n                        <i class=\"fas fa-truck\"></i>\n                    </div>\n                    <p>Доставка по всей Украине</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<app-colors></app-colors>\n\n<app-contact></app-contact>\n"

/***/ }),

/***/ "./src/app/components/router/home/home.component.scss":
/*!************************************************************!*\
  !*** ./src/app/components/router/home/home.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".intro {\n  background: url('intro.png');\n  background-position: 50% 50%;\n  background-size: cover;\n  padding-top: 80px;\n  padding-bottom: 80px;\n  min-height: 600px; }\n  .intro h1 {\n    color: #ff3a2d;\n    font-size: 50px; }\n  .intro h2 {\n    font-size: 50px;\n    color: #fff;\n    font-weight: 300;\n    margin: 20px 0; }\n  .intro .list {\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n  .intro .list li {\n      color: #fff;\n      font-size: 18px;\n      margin-bottom: 10px; }\n  .intro .list li svg {\n        margin-right: 10px;\n        vertical-align: middle; }\n  .intro .list li svg ::ng-deep path {\n          fill: #ff3a2d; }\n  .products {\n  padding: 40px 0 65px; }\n  .benefits {\n  background: #f4f4f4;\n  padding: 30px 0 50px; }\n  .benefits .item {\n    display: flex;\n    align-items: center;\n    margin-bottom: 20px; }\n  .benefits .item .icon {\n      background: #ffffff;\n      border-color: #333333;\n      width: 50px;\n      height: 50px;\n      border-radius: 50%;\n      display: inline-block;\n      margin-right: 15px;\n      flex: 0 0 auto;\n      text-align: center;\n      color: #f75442;\n      line-height: 50px;\n      font-size: 30px; }\n  .benefits .item .icon .fa-truck {\n        font-size: 25px;\n        margin-left: 5px; }\n  .benefits .item p {\n      font-size: 18px;\n      line-height: 24px;\n      color: #3c3e45;\n      font-weight: 600; }\n  @media screen and (min-width: 768px) {\n    .benefits .item {\n      align-items: flex-start;\n      margin-bottom: 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2dvbHliLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvcm91dGVyL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFtRDtFQUNuRCw0QkFBNEI7RUFFNUIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsaUJBQWlCLEVBQUE7RUFQbkI7SUFVSSxjQUF1QjtJQUN2QixlQUFlLEVBQUE7RUFYbkI7SUFlSSxlQUFlO0lBQ2YsV0FBVTtJQUNWLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7RUFsQmxCO0lBc0JJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUyxFQUFBO0VBeEJiO01BMkJNLFdBQVc7TUFDWCxlQUFlO01BQ2YsbUJBQW1CLEVBQUE7RUE3QnpCO1FBZ0NRLGtCQUFrQjtRQUNsQixzQkFBc0IsRUFBQTtFQWpDOUI7VUFvQ1UsYUFBc0IsRUFBQTtFQVFoQztFQUNFLG9CQUFvQixFQUFBO0VBR3RCO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQixFQUFBO0VBRnRCO0lBS0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUIsRUFBQTtFQVB2QjtNQVVNLG1CQUFtQjtNQUNuQixxQkFBcUI7TUFDckIsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7TUFDbEIscUJBQXFCO01BQ3JCLGtCQUFrQjtNQUNsQixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsZUFBZSxFQUFBO0VBckJyQjtRQXdCUSxlQUFlO1FBQ2YsZ0JBQWdCLEVBQUE7RUF6QnhCO01BOEJNLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsY0FBYztNQUNkLGdCQUFnQixFQUFBO0VBSXBCO0lBckNGO01BdUNNLHVCQUF1QjtNQUN2QixnQkFBZ0IsRUFBQSxFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm91dGVyL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnRyb3tcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9pbnRyby5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG4gIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZy10b3A6IDgwcHg7XG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xuICBtaW4taGVpZ2h0OiA2MDBweDtcblxuICBoMXtcbiAgICBjb2xvcjogcmdiKDI1NSwgNTgsIDQ1KTtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gIH1cblxuICBoMntcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgY29sb3I6I2ZmZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG5cbiAgLmxpc3R7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcblxuICAgIGxpe1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuXG4gICAgICBzdmd7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICA6Om5nLWRlZXAgcGF0aHtcbiAgICAgICAgICBmaWxsOiByZ2IoMjU1LCA1OCwgNDUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cblxuLnByb2R1Y3Rze1xuICBwYWRkaW5nOiA0MHB4IDAgNjVweDtcbn1cblxuLmJlbmVmaXRze1xuICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xuICBwYWRkaW5nOiAzMHB4IDAgNTBweDtcblxuICAuaXRlbXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICAgIC5pY29ue1xuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1jb2xvcjogIzMzMzMzMztcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBjb2xvcjogI2Y3NTQ0MjtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgZm9udC1zaXplOiAzMHB4O1xuXG4gICAgICAuZmEtdHJ1Y2t7XG4gICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBwe1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICBjb2xvcjogIzNjM2U0NTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuaXRlbXtcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/router/home/home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/router/home/home.component.ts ***!
  \**********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/router/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/components/router/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/router/products/products.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/router/products/products.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <section class=\"specification row\">\n        <div class=\"col-lg-12\">\n            <div class=\"bg-products-image\"></div>\n            <div class=\"content\">\n                <h2 class=\"title-section\">Металлическая водосточная система RAINGUARD</h2>\n\n                <p>это новейшие финские технологии в сочетании с металлами мировых брендов.</p>\n\n                <h3>Характеристики:</h3>\n\n                <ul>\n                    <li>✔ Современное оборудование из Финляндии;</li>\n                    <li>✔ Металл USS Cosice (Словакия) - это высококачественный металл в котором используется толстослойный полиэстер с очень мелкой зернистой структурой, обеспечивающей оптимальное соотношение эластичности и твердости и отличается хорошей устойчивостью к атмосферным воздействиям и поверхностного износа);</li>\n                    <li>✔ Двустороннее покрытие с толщиной 35 мкм. Слой цинкового покрытия 275 гр / м2, толщина 0,6 мм;</li>\n                    <li>✔ Размер 125/87;</li>\n                    <li>✔ 50 лет гарантии;</li>\n                    <li>✔ 9 цветов USS (3005, 3009, 6020, 7024, 8004, 8017, 8019, 9005, 9010);</li>\n                    <li>✔ Тест на удар (J): ≥ 20</li>\n                    <li>✔ 5 цветов SSAB ();</li>\n                </ul>\n            </div>\n        </div>\n    </section>\n\n    <section class=\"products row\">\n        <div class=\"col-lg-12\">\n            <div class=\"list\">\n                <div class=\"item\" *ngFor=\"let product of products\">\n                    <div class=\"photo\">\n                        <img [src]=\"product.img\" [alt]=\"product.title\">\n                    </div>\n                    <div class=\"desctiption\">\n                        <p class=\"name\">{{product.title}}</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n\n<app-colors></app-colors>\n"

/***/ }),

/***/ "./src/app/components/router/products/products.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/router/products/products.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".specification .bg-products-image {\n  background: url('ral.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain;\n  height: 900px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1;\n  width: 100%; }\n\n.specification .content {\n  padding-top: 230px;\n  max-width: 700px; }\n\n.specification .content .title-section {\n    text-align: left;\n    margin-bottom: 30px; }\n\n.specification .content h3 {\n    font-size: 26px;\n    margin: 20px 0; }\n\n.specification .content p {\n    font-size: 16px;\n    line-height: 1.3; }\n\n.specification .content ul {\n    list-style: none;\n    margin: 0;\n    padding: 0; }\n\n.specification .content ul li {\n      font-size: 16px;\n      margin: 5px 0; }\n\n.products {\n  margin-top: 60px;\n  margin-bottom: 60px; }\n\n.products .list {\n    display: flex;\n    flex-wrap: wrap; }\n\n.products .list .item {\n      display: flex;\n      align-items: center;\n      border-bottom: 1px solid #eee;\n      padding: 15px;\n      width: calc(50% - 30px);\n      margin: 0 15px; }\n\n.products .list .item .photo {\n        flex: 0 0 auto;\n        width: 100px;\n        height: 100px;\n        margin-right: 30px;\n        display: flex;\n        justify-content: center;\n        align-items: center; }\n\n.products .list .item .photo img {\n          max-width: 100px;\n          max-height: 100px;\n          margin-right: 20px; }\n\n.products .list .desctiption .name {\n      font-size: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zZXJnaXkvRG9jdW1lbnRzL3Byb2plY3RzL2dvbHliLmdpdGh1Yi5pby9zcmMvYXBwL2NvbXBvbmVudHMvcm91dGVyL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksMEJBQWlEO0VBQ2pELDRCQUE0QjtFQUM1QiwyQkFBMkI7RUFDM0Isd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQVhmO0VBZUksa0JBQWtCO0VBQ2xCLGdCQUFnQixFQUFBOztBQWhCcEI7SUFtQk0sZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBOztBQXBCekI7SUF3Qk0sZUFBZTtJQUNmLGNBQWMsRUFBQTs7QUF6QnBCO0lBNkJNLGVBQWU7SUFDZixnQkFBZ0IsRUFBQTs7QUE5QnRCO0lBa0NNLGdCQUFnQjtJQUNoQixTQUFTO0lBQ1QsVUFBVSxFQUFBOztBQXBDaEI7TUF1Q1EsZUFBZTtNQUNmLGFBQWEsRUFBQTs7QUFNckI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBRnJCO0lBS0ksYUFBYTtJQUNiLGVBQWUsRUFBQTs7QUFObkI7TUFTTSxhQUFhO01BQ2IsbUJBQW1CO01BQ25CLDZCQUE2QjtNQUM3QixhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLGNBQWMsRUFBQTs7QUFkcEI7UUFpQlEsY0FBYztRQUNkLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CLEVBQUE7O0FBdkIzQjtVQTBCVSxnQkFBZ0I7VUFDaEIsaUJBQWlCO1VBQ2pCLGtCQUFrQixFQUFBOztBQTVCNUI7TUFtQ1EsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yb3V0ZXIvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3BlY2lmaWNhdGlvbntcbiAgLmJnLXByb2R1Y3RzLWltYWdle1xuICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmFsLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgaGVpZ2h0OiA5MDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuXG4gIC5jb250ZW50e1xuICAgIHBhZGRpbmctdG9wOiAyMzBweDtcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xuXG4gICAgLnRpdGxlLXNlY3Rpb257XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG5cbiAgICBoM3tcbiAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgIH1cblxuICAgIHB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgIH1cblxuICAgIHVse1xuICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgIGxpe1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wcm9kdWN0c3tcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuICAubGlzdHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5pdGVte1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICB3aWR0aDogY2FsYyg1MCUgLSAzMHB4KTtcbiAgICAgIG1hcmdpbjogMCAxNXB4O1xuXG4gICAgICAucGhvdG97XG4gICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgaW1ne1xuICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2N0aXB0aW9ue1xuICAgICAgLm5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/router/products/products.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/router/products/products.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.products = [
            {
                title: 'Заглушка желоба универсальная',
                img: '../../../../assets/img/products/11-768x767.jpg'
            },
            {
                title: 'Соединитель желоба',
                img: '../../../../assets/img/products/soedinital_zheloba-300x244.png'
            },
            {
                title: 'Лейка',
                img: '../../../../assets/img/products/leika.jpg'
            },
            {
                title: 'Колено',
                img: '../../../../assets/img/products/koleno.jpg'
            },
            {
                title: 'Труба 1м',
                img: '../../../../assets/img/products/truba-300x173.png'
            },
            {
                title: 'Труба 3м',
                img: '../../../../assets/img/products/truba-300x173.png'
            },
            {
                title: 'Желоб 1 м',
                img: '../../../../assets/img/products/rinva-300x122.png'
            },
            {
                title: 'Желоб 4 м',
                img: '../../../../assets/img/products/rinva-300x122.png'
            },
            {
                title: 'Внутренний угол желоба 90°',
                img: '../../../../assets/img/products/ugol_vnutri-300x158.png'
            },
            {
                title: 'Внешний угол желоба 90°',
                img: '../../../../assets/img/products/vnesh_ugol-300x158.png'
            },
            {
                title: 'Крюк торцевой',
                img: '../../../../assets/img/products/torcevoi.jpg'
            },
            {
                title: 'Крюк длинный',
                img: '../../../../assets/img/products/dlinnyi-177x300.jpg'
            },
            {
                title: 'Держатель трубы под камень',
                img: '../../../../assets/img/products/derzh_kamin.jpg'
            },
            {
                title: 'Держатель трубы под дерево',
                img: '../../../../assets/img/products/derzh_derevo.jpg'
            },
            {
                title: 'Сливное колено',
                img: '../../../../assets/img/products/sliv.jpg'
            }
        ];
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/components/router/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.scss */ "./src/app/components/router/products/products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/components/router/products/products.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/router/products/products.module.ts ***!
  \***************************************************************/
/*! exports provided: ProductsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsModule", function() { return ProductsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products.component */ "./src/app/components/router/products/products.component.ts");
/* harmony import */ var _common_colors_colors_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/colors/colors.module */ "./src/app/components/common/colors/colors.module.ts");





var ProductsModule = /** @class */ (function () {
    function ProductsModule() {
    }
    ProductsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _common_colors_colors_module__WEBPACK_IMPORTED_MODULE_4__["ColorsModule"]
            ],
            exports: [
                _products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"]
            ]
        })
    ], ProductsModule);
    return ProductsModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sergiy/Documents/projects/golyb.github.io/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map