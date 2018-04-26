webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-bootstrap.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBootstrapModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_collapse__ = __webpack_require__("./node_modules/ngx-bootstrap/collapse/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppBootstrapModule = /** @class */ (function () {
    function AppBootstrapModule() {
    }
    AppBootstrapModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_collapse__["a" /* CollapseModule */].forRoot()
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */], __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_collapse__["a" /* CollapseModule */]]
        })
    ], AppBootstrapModule);
    return AppBootstrapModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<metabar></metabar>\r\n<app-header></app-header>\r\n<app-nav></app-nav>\r\n<app-title></app-title>\r\n\r\n<div id=\"content\">\r\n    <app-aside></app-aside>\r\n    <app-article></app-article>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = "#content {\n  width: calc(100% - 120px);\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin: 15px 60px 30px; }\n  #content app-aside {\n    width: 25%;\n    margin-right: 20px; }\n  #content app-article {\n    width: calc(75% - 20px); }\n  app-footer {\n  width: 100%;\n  display: -ms-grid;\n  display: grid; }\n  @media screen and (max-width: 1000px) {\n  app-aside {\n    display: none; }\n  app-article {\n    width: 100% !important; } }\n  @media screen and (max-width: 740px) {\n  metabar {\n    display: none; } }\n  @media screen and (max-width: 625px) {\n  #content {\n    width: calc(100% - 40px);\n    margin: 15px 20px 30px; } }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_bootstrap_module__ = __webpack_require__("./src/app/app-bootstrap.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("./node_modules/ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__metabar_metabar_component__ = __webpack_require__("./src/app/metabar/metabar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__title_title_component__ = __webpack_require__("./src/app/title/title.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__aside_section_aside_aside_component__ = __webpack_require__("./src/app/aside-section/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__article_section_article_article_component__ = __webpack_require__("./src/app/article-section/article/article.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filter_pipe__ = __webpack_require__("./src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__aside_section_shop_by_shop_by_component__ = __webpack_require__("./src/app/aside-section/shop-by/shop-by.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__aside_section_best_sellers_best_sellers_component__ = __webpack_require__("./src/app/aside-section/best-sellers/best-sellers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__aside_section_custom_services_custom_services_component__ = __webpack_require__("./src/app/aside-section/custom-services/custom-services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__article_section_products_products_component__ = __webpack_require__("./src/app/article-section/products/products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__metabar_metabar_component__["a" /* MetabarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_9__title_title_component__["a" /* TitleComponent */],
                __WEBPACK_IMPORTED_MODULE_10__aside_section_aside_aside_component__["a" /* AsideComponent */],
                __WEBPACK_IMPORTED_MODULE_11__article_section_article_article_component__["a" /* ArticleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__aside_section_shop_by_shop_by_component__["a" /* ShopByComponent */],
                __WEBPACK_IMPORTED_MODULE_15__aside_section_best_sellers_best_sellers_component__["a" /* BestSellersComponent */],
                __WEBPACK_IMPORTED_MODULE_16__aside_section_custom_services_custom_services_component__["a" /* CustomServicesComponent */],
                __WEBPACK_IMPORTED_MODULE_17__article_section_products_products_component__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_18__footer_footer_component__["a" /* FooterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__app_bootstrap_module__["a" /* AppBootstrapModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__data_service__["a" /* DataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/article-section/article/article.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"../../../assets/banner.png\" alt=\"\">\n\n<div id=\"index\">\n  <p>\n    TV's & Entertainment > <span id=\"pageName\">Television</span>\n  </p>\n</div>\n\n<products></products>"

/***/ }),

/***/ "./src/app/article-section/article/article.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  width: 100%; }\n\n#index {\n  margin: 20px 0; }\n\n#index p {\n  font-size: 20px; }\n\n#index p #pageName {\n  color: #279bfe; }\n\nproducts {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n@media screen and (max-width: 270px) {\n  #index p {\n    font-size: 10px; } }\n"

/***/ }),

/***/ "./src/app/article-section/article/article.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArticleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () {
    };
    ArticleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-article',
            template: __webpack_require__("./src/app/article-section/article/article.component.html"),
            styles: [__webpack_require__("./src/app/article-section/article/article.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());



/***/ }),

/***/ "./src/app/article-section/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cardi\">\n  <div *ngFor=\"let product of products; let i = index\" class=\"product\">\n    <img [src]=\"product.imageUrl\" alt=\"\">\n    <div class=\"icons\">\n      <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n      <i class=\"fa fa-search\" aria-hidden=\"true\"></i>\n      <i class=\"fa fa-heart\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"info\">\n      <div class=\"heading\">\n        <h5>{{product.name}}</h5>\n        <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n      </div>\n      <p>{{product.desc}}</p>\n      <div class=\"price\">\n        <p class=\"oPrice\">EGP{{product.oPrice}}</p>\n        <p class=\"offer\">EGP{{product.offer}}</p>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/article-section/products/products.component.scss":
/***/ (function(module, exports) {

module.exports = ".cardi {\n  width: 100%; }\n  .cardi .product {\n    width: 30%;\n    display: inline-block;\n    margin: 10px 1.5%; }\n  .cardi img {\n    width: 100%;\n    height: 281px; }\n  .cardi .icons {\n    visibility: hidden;\n    position: relative;\n    top: -184px;\n    float: right;\n    display: -ms-grid;\n    display: grid; }\n  .cardi .icons i.fa-search {\n    margin: 10px 0; }\n  .cardi .icons i {\n    padding: 5px;\n    font-size: 18px;\n    color: #004a8f;\n    background: #ffd400;\n    cursor: pointer; }\n  .cardi .info {\n    padding: 10px 30px 0; }\n  .cardi .info .heading {\n    width: 100%;\n    display: inline-block; }\n  .cardi .info .heading h5,\n  .cardi .info .heading i {\n    color: #004a8f; }\n  .cardi .info .heading h5 {\n    float: left; }\n  .cardi .info .heading i {\n    padding-top: 4px;\n    float: right; }\n  .cardi .info p {\n    font-size: 11px;\n    color: #999; }\n  .cardi .info .price .oPrice {\n    float: left;\n    font-weight: 600;\n    text-decoration: line-through;\n    color: #000; }\n  .cardi .info .price .offer {\n    float: right;\n    margin-right: 30px;\n    font-size: 14px;\n    color: #000; }\n  .product:hover {\n  -webkit-box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);\n          box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);\n  background: #f4f4f4; }\n  .product:hover .icons {\n    visibility: visible; }\n  @media screen and (min-width: 391px) and (max-width: 580px) {\n  .cardi .product {\n    width: 47%; } }\n  @media screen and (max-width: 390px) {\n  .cardi .product {\n    width: 67%;\n    margin: 10px 16.5%; } }\n"

/***/ }),

/***/ "./src/app/article-section/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductsComponent = /** @class */ (function () {
    function ProductsComponent(data) {
        var _this = this;
        this.data = data;
        this.data.currentSharedProducts.subscribe(function (currentSharedProducts) {
            _this.products = currentSharedProducts;
        });
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'products',
            template: __webpack_require__("./src/app/article-section/products/products.component.html"),
            styles: [__webpack_require__("./src/app/article-section/products/products.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/aside-section/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"aside\">\n  <shop-by></shop-by>\n  <best-sellers></best-sellers>\n  <custom-services></custom-services>\n</div>"

/***/ }),

/***/ "./src/app/aside-section/aside/aside.component.scss":
/***/ (function(module, exports) {

module.exports = "shop-by {\n  width: 100%; }\n\nbest-sellers {\n  position: relative;\n  top: 30px; }\n\ncustom-services {\n  position: relative;\n  top: 60px; }\n"

/***/ }),

/***/ "./src/app/aside-section/aside/aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AsideComponent = /** @class */ (function () {
    function AsideComponent(data) {
        this.data = data;
        this.categories = data.categories;
        this.caKeys = Object.keys(this.categories);
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-aside',
            template: __webpack_require__("./src/app/aside-section/aside/aside.component.html"),
            styles: [__webpack_require__("./src/app/aside-section/aside/aside.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "./src/app/aside-section/best-sellers/best-sellers.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"bestSellers\">\n  <section>BEST SELLERS</section>\n  <div id=\"product\" *ngFor=\"let p of products; let i = index\">\n    <div id=\"info\">\n      <div id=\"rateNname\">\n        <div id=\"rate\">\n          <span *ngFor=\"let star of stars; let s = index\">\n            <i *ngIf=\"p.rate == s+.5; else full\" class=\"fa fa-star-half-o\" (click)=\"rateAs(i, s);\"></i>\n            <ng-template #full>\n              <ng-container *ngIf=\"p.rate >= s+1; else unfilled\">\n                <i class=\"fa fa-star\" (click)=\"rateAs(i, s);\"></i>\n              </ng-container>\n            </ng-template>\n            <ng-template #unfilled><i class=\"fa fa-star-o\" (click)=\"rateAs(i, s);\"></i></ng-template>\n          </span>\n        </div>\n        <p id=\"name\">{{p.name}}</p>\n      </div>\n      <img [src]=\"p.imageUrl\" [alt]=\"p.name\">\n    </div>\n    <div id=\"price\">\n      <span id=\"offer\">EGP{{p.offer}}</span>\n      <span id=\"oPrice\">EGP{{p.oPrice}}</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/aside-section/best-sellers/best-sellers.component.scss":
/***/ (function(module, exports) {

module.exports = "#bestSellers {\n  width: 100%;\n  border: .7px solid #b9b9b9; }\n  #bestSellers > section {\n    width: 100%;\n    margin-top: 5px;\n    font-family: 'Roboto Black';\n    font-size: 12px;\n    -webkit-transform: scale(1, 1.3);\n            transform: scale(1, 1.3);\n    padding: 8px 20px 9px;\n    background: #d6d6d6;\n    color: #1e2122; }\n  #bestSellers #product {\n    padding: 20px;\n    background: #f4f4f4;\n    border-bottom: 1px solid #b9b9b9; }\n  #bestSellers #product #info {\n      display: inline-block;\n      width: 100%; }\n  #bestSellers #product #info #rateNname {\n        display: block;\n        float: left; }\n  #bestSellers #product #info img {\n        float: right;\n        width: 80px; }\n  #bestSellers #product #rate i {\n      margin-bottom: 10px;\n      font-size: 12px;\n      color: #ffb610; }\n  #bestSellers #product #name {\n      margin-bottom: 10px;\n      font-size: 12px; }\n  #bestSellers #product #price {\n      display: inline-block;\n      width: 100%; }\n  #bestSellers #product #price #offer {\n        float: left;\n        font-size: 11px;\n        font-weight: 800; }\n  #bestSellers #product #price #oPrice {\n        float: left;\n        margin-left: 15px;\n        text-decoration: line-through;\n        font-size: 11px; }\n"

/***/ }),

/***/ "./src/app/aside-section/best-sellers/best-sellers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BestSellersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BestSellersComponent = /** @class */ (function () {
    function BestSellersComponent() {
        this.stars = [1, 2, 3, 4, 5];
        this.products = [
            { name: "Lorem Ipsum", rate: 4, offer: "899.99", oPrice: 1099.99, imageUrl: "../../../assets/tv.jpg" },
            { name: "Lorem Ipsum", rate: 2.7, offer: "929.99", oPrice: 1059.99, imageUrl: "../../../assets/tv.jpg" },
            { name: "Lorem Ipsum", rate: 3.8, offer: "900.99", oPrice: 1399.99, imageUrl: "../../../assets/tv.jpg" },
        ];
        for (var i = 0; i < this.products.length; i++) {
            this.products[i].rate = Math.round(this.products[i].rate * 2) / 2;
        }
        console.log(this.products);
    }
    BestSellersComponent.prototype.ngOnInit = function () {
    };
    BestSellersComponent.prototype.rateAs = function (i, s) {
        this.products[i].rate = s + 1;
        console.log(i, s + 1);
    };
    BestSellersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'best-sellers',
            template: __webpack_require__("./src/app/aside-section/best-sellers/best-sellers.component.html"),
            styles: [__webpack_require__("./src/app/aside-section/best-sellers/best-sellers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BestSellersComponent);
    return BestSellersComponent;
}());



/***/ }),

/***/ "./src/app/aside-section/custom-services/custom-services.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"customServices\">\n  <section>CUSTOME SERVICE</section>\n  <div class=\"service\" *ngFor=\"let service of services\">\n    <div id=\"img\">\n      <img [src]=\"service.img\" alt=\"service.name\">\n    </div>\n    <div class=\"desc\">\n      <p class=\"name\">{{service.name}}</p>\n      <p>{{service.desc}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/aside-section/custom-services/custom-services.component.scss":
/***/ (function(module, exports) {

module.exports = "#customServices {\n  width: 100%;\n  border: .7px solid #b9b9b9; }\n  #customServices > section {\n    width: 100%;\n    margin-top: 5px;\n    font-family: 'Roboto Black';\n    font-size: 12px;\n    -webkit-transform: scale(1, 1.3);\n            transform: scale(1, 1.3);\n    padding: 8px 20px 9px;\n    background: #d6d6d6;\n    color: #1e2122; }\n  #customServices .service {\n    width: 100%;\n    padding: 20px 30px;\n    display: inline-block;\n    background: #f4f4f4;\n    border-bottom: 1px solid #b9b9b9; }\n  #customServices .service #img {\n      width: 63px;\n      float: left;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      /* ADJUSTMENT */\n      -ms-flex-wrap: nowrap;\n          flex-wrap: nowrap; }\n  #customServices .service #img img {\n        margin: 0 auto; }\n  #customServices .service .desc {\n      width: calc(100% - 73px);\n      margin-left: 10px;\n      float: right; }\n  #customServices .service .desc p {\n        font-size: 12px; }\n  #customServices .service .desc .name {\n        margin-bottom: 10px;\n        font-weight: 800; }\n"

/***/ }),

/***/ "./src/app/aside-section/custom-services/custom-services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomServicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomServicesComponent = /** @class */ (function () {
    function CustomServicesComponent() {
        this.services = [
            { img: "../../../assets/shipping.png", name: "FREE DELIVERY", desc: "From $59.89" },
            { img: "../../../assets/support.png", name: "SUPPORT 24/7", desc: "Online 24 hours" },
            { img: "../../../assets/return.png", name: "FREE RETURN", desc: "14-day" }
        ];
    }
    CustomServicesComponent.prototype.ngOnInit = function () {
    };
    CustomServicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'custom-services',
            template: __webpack_require__("./src/app/aside-section/custom-services/custom-services.component.html"),
            styles: [__webpack_require__("./src/app/aside-section/custom-services/custom-services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CustomServicesComponent);
    return CustomServicesComponent;
}());



/***/ }),

/***/ "./src/app/aside-section/shop-by/shop-by.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"shopBy\">\n  <section>SHOP BY</section>\n  \n  <div class=\"filter\" (click)=\"toggleFilter(0)\">\n    <span>CATEGORIES</span>\n    <i [ngClass]=\"headingCaret[0]\"></i>\n  </div>\n  <div *ngIf=\"filter[0]\">\n    <div *ngFor=\"let key of caKeys; let i = index\">\n      <div class=\"key\" (click)=\"toggleShowSub(i)\">\n        <span>{{key}}</span>\n        <i [ngClass]=\"caret[i]\"></i>\n      </div>\n      <div *ngIf=\"showSub[i]\">\n        <ul class=\"subCat\">\n          <li *ngFor=\"let item of categories[key]\">\n            <a routerLink=\"\" (click)=\"return;\">{{item}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"filter\" (click)=\"toggleFilter(1)\">\n    <span>PRICE</span>\n    <i [ngClass]=\"headingCaret[2]\"></i>\n  </div>\n  <div id=\"priceDiv\" *ngIf=\"filter[1]\">\n    <nouislider [connect]=\"true\" [min]=\"2000\" [max]=\"50000\" [step]=\"1000\" [(ngModel)]=\"priceRange\" (ngModelChange)=\"priceChange($event)\"></nouislider>\n    <div id=\"priceDetected\">\n      <span id=\"start\">{{priceRange[0]}} EGP</span>\n      <span id=\"end\">{{priceRange[1]}} EGP</span>\n    </div>\n  </div>\n\n  <div class=\"filter\" (click)=\"toggleFilter(2)\">\n    <span>Color</span>\n    <i [ngClass]=\"headingCaret[2]\"></i>\n  </div>\n  <div id=\"colorDiv\" *ngIf=\"filter[2]\">\n    <li class=\"colorSpan\" *ngFor=\"let color of colors; let i = index\" (click)=\"selectColor(i)\" [ngStyle]=\"{'background': color}\"></li>\n  </div>\n\n  <div class=\"filter\" (click)=\"toggleFilter(3)\">\n    <span>SIZE</span>\n    <i [ngClass]=\"headingCaret[3]\"></i>\n  </div>\n  <div id=\"sizeDiv\" *ngIf=\"filter[3]\">\n    <nouislider [connect]=\"true\" [min]=\"5\" [max]=\"65\" [step]=\"1\" [(ngModel)]=\"sizeRange\" (ngModelChange)=\"sizeChange($event)\"></nouislider>\n    <div id=\"sizeDetected\">\n      <span id=\"startSize\">{{sizeRange[0]}} INCH</span>\n      <span id=\"endSize\">{{sizeRange[1]}} INCH</span>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/aside-section/shop-by/shop-by.component.scss":
/***/ (function(module, exports) {

module.exports = "#shopBy {\n  width: 100%;\n  border: .7px solid #b9b9b9; }\n  #shopBy > section,\n  #shopBy > .filter,\n  #shopBy > .filter > span {\n    width: 100%;\n    margin-top: 5px; }\n  #shopBy > section,\n  #shopBy > .filter > span {\n    font-family: 'Roboto Black';\n    font-size: 12px;\n    -webkit-transform: scale(1, 1.3);\n            transform: scale(1, 1.3); }\n  #shopBy > section {\n    padding: 8px 20px 9px;\n    background: #d6d6d6;\n    color: #1e2122; }\n  #shopBy > .filter {\n    background: #e8e8e8; }\n  #shopBy > .filter > span {\n    color: #5f5f5f; }\n  #shopBy > .filter, #shopBy .key {\n    display: inline-block;\n    padding: 8px 20px 9px;\n    border-bottom: 1px solid #b9b9b9;\n    cursor: pointer; }\n  #shopBy .key {\n    background: #f4f4f4; }\n  #shopBy * > div {\n    width: 100%;\n    display: inline-block;\n    cursor: pointer; }\n  #shopBy .key, #shopBy .key span {\n    width: 100%; }\n  #shopBy .key span, #shopBy .subCat li {\n    font-size: 12px; }\n  #shopBy > .filter > i, #shopBy .key i {\n    margin-top: 5px;\n    float: right; }\n  #shopBy .subCat {\n    margin: 0;\n    padding: 0 20px;\n    list-style-type: none;\n    cursor: pointer; }\n  #shopBy .subCat li {\n    padding: 10px 0;\n    border-bottom: .5px solid #b9b9b9; }\n  #shopBy .subCat li:hover {\n    background: #f7f7f7; }\n  #shopBy .subCat li:last-child {\n    border-bottom: 0; }\n  #priceDiv, #sizeDiv {\n  background: #f4f4f4; }\n  nouislider {\n  margin: 0 10px 10px;\n  padding: 15px 20px 0; }\n  #priceDetected, #sizeDetected {\n  display: inline-block;\n  width: 100%;\n  padding: 0 5px; }\n  #priceDetected span, #sizeDetected span {\n    font-size: 11px; }\n  #priceDetected #start, #priceDetected #startSize, #sizeDetected #start, #sizeDetected #startSize {\n    float: left; }\n  #priceDetected #end, #priceDetected #endSize, #sizeDetected #end, #sizeDetected #endSize {\n    float: right; }\n  #colorDiv {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  padding: 10px 20px;\n  background: #f4f4f4; }\n  #colorDiv > .colorSpan {\n    list-style-type: none;\n    width: 15px;\n    height: 15px;\n    margin: 0 5px;\n    border: 1px solid #000; }\n  #colorDiv > .colorSpan:first-child {\n    margin-left: 0; }\n  #colorDiv > .colorSpan:last-child {\n    margin-right: 0; }\n"

/***/ }),

/***/ "./src/app/aside-section/shop-by/shop-by.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShopByComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShopByComponent = /** @class */ (function () {
    function ShopByComponent(data) {
        var _this = this;
        this.data = data;
        this.filter = [true, true, true, true];
        this.showSub = [];
        this.headingCaret = ["fa fa-caret-down", "fa fa-caret-down", "fa fa-caret-down", "fa fa-caret-down"];
        this.caret = [];
        this.priceRange = [2000, 50000];
        this.mainPriceRange = [2000, 50000];
        this.sizeRange = [5, 65];
        this.mainSizeRange = [5, 65];
        this.colors = ["red", "green", "blue", "white"];
        data.currentSharedProducts.subscribe(function (currentSharedProducts) {
            _this.products = currentSharedProducts;
        });
        this.categories = data.categories;
        this.caKeys = Object.keys(this.categories);
        this.caKeys.map(function (key) { return _this.caret.push("fa fa-caret-left"); });
    }
    ShopByComponent.prototype.ngOnInit = function () {
    };
    ShopByComponent.prototype.toggleShowSub = function (i) {
        this.showSub[i] = !this.showSub[i];
        (this.caret[i] == "fa fa-caret-down") ? this.caret[i] = "fa fa-caret-left" : this.caret[i] = "fa fa-caret-down";
    };
    ShopByComponent.prototype.toggleFilter = function (i) {
        this.filter[i] = !this.filter[i];
        (this.headingCaret[i] == "fa fa-caret-down") ? this.headingCaret[i] = "fa fa-caret-left" : this.headingCaret[i] = "fa fa-caret-down";
    };
    ShopByComponent.prototype.clearPriceRangeEffect = function () {
        this.data.clearPriceRangeEffect();
    };
    ShopByComponent.prototype.priceChange = function (event) {
        this.products = this.data.products;
        if (event[0] == this.mainPriceRange[0] && event[1] == this.mainPriceRange[1]) {
            this.clearPriceRangeEffect();
            this.priceRange[0] = event[0];
            this.priceRange[1] = event[1];
            return;
        }
        this.priceRange[0] = event[0];
        this.priceRange[1] = event[1];
        this.productsCase = Object.values(this.products)
            .filter(function (x) {
            return x.offer >= event[0] && x.offer <= event[1];
        });
        this.data.pChangeSharedProducts(this.productsCase, event);
    };
    ShopByComponent.prototype.sizeChange = function (event) {
        this.sizeRange[0] = event[0];
        this.sizeRange[1] = event[1];
    };
    ShopByComponent.prototype.selectColor = function (i) {
        this.selectedColor = this.colors[i];
        console.log(this.selectedColor);
    };
    ShopByComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'shop-by',
            template: __webpack_require__("./src/app/aside-section/shop-by/shop-by.component.html"),
            styles: [__webpack_require__("./src/app/aside-section/shop-by/shop-by.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], ShopByComponent);
    return ShopByComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataService = /** @class */ (function () {
    function DataService() {
        this._categories = {
            "Mobiles & Tablets": ["iPhone 5", "Galaxy Note 5", "Oppo F5"],
            "TV's & Entertainment": ["XBOX", "Toshiba"],
            "Large Applicane": ["Refrigators", "Kitchen Machines"],
            "Kitchen Appliances": ["Dishes Washing Machine", "iCook"],
            "Air Conditioning": ["Carrier", "Bright Fresh"],
            "Personal Care": ["Women", "Men"],
            "Home Accessories": ["Tabels", "Oil Heater"]
        };
        this._products = [
            { name: "Lorem Ipsum", desc: "Loresm Ipsum lorem ipsum", offer: 89934.99, oPrice: 1099.99, imageUrl: "../../../assets/product.jpg" },
            { name: "Porem Ipsum", desc: "Loresm Ipsum lorem ipsum", offer: 9249.99, oPrice: 1059.99, imageUrl: "../../../assets/product.jpg" },
            { name: "Norem Ipsum", desc: "Loresm Ipsum lorem ipsum", offer: 35000.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg" },
            { name: "Toshiba Ium", desc: "Loresm Ipsum lorem ipsum", offer: 1900.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg" },
            { name: "Lorem Ipsum", desc: "Loresm Ipsum lorem ipsum", offer: 9300.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg" },
            { name: "Lorem Ipsum", desc: "Loresm Ipsum lorem ipsum", offer: 94400.99, oPrice: 1399.99, imageUrl: "../../../assets/product.jpg" },
        ];
        this.sharedProducts = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](this._products);
        this.searching = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.currentSharedProducts = this.sharedProducts.asObservable();
        this.currentSearching = this.searching.asObservable();
    }
    Object.defineProperty(DataService.prototype, "categories", {
        get: function () {
            return this._categories;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataService.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.nChangeSharedProducts = function (productsCase) {
        var current;
        if (this.pCurrent)
            current = this.pCurrent;
        else
            current = this._products;
        this.nCurrent = current.filter(function (x) { return x.name == productsCase[0].name; }); //productsCase in currentShared
        this.changeSharedProducts(this.nCurrent);
    };
    DataService.prototype.clearSearchEffect = function () {
        this.nCurrent = null;
        this.changeSharedProducts(this._products);
        this.pChangeSharedProducts(this.pCurrent, this.lastEvent);
    };
    DataService.prototype.pChangeSharedProducts = function (productsCase, event) {
        var _this = this;
        this.lastEvent = event;
        var current;
        if (this.nCurrent)
            current = this.nCurrent;
        else
            current = this._products;
        this.pCurrent = current.filter(function (x) { return x.offer >= _this.lastEvent[0] && x.offer <= _this.lastEvent[1]; }); //productsCase in currentShared
        this.changeSharedProducts(this.pCurrent);
    };
    DataService.prototype.clearPriceRangeEffect = function () {
        this.pCurrent = null;
        this.changeSharedProducts(this._products);
        this.nChangeSharedProducts(this.nCurrent);
    };
    DataService.prototype.changeSharedProducts = function (productsCase) {
        this.sharedProducts.next(productsCase);
    };
    DataService.prototype.changeCurrentSearching = function (searching) {
        this.searching.next(searching);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items)
            return [];
        if (!searchText)
            return items;
        searchText = searchText.toLowerCase();
        return items.filter(function (it) {
            return it.toLowerCase().includes(searchText);
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"footer\">\n  <p id=\"copyrights\">Copyright © 2017 - <a href=\"\">Business Boomers</a></p>\n  <div id=\"links\">\n    <a href=\"\">My Account</a>&nbsp;&nbsp;|&nbsp;\n    <a href=\"\">Terms</a>&nbsp;&nbsp;|&nbsp;\n    <a href=\"\">FAQ</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/footer/footer.component.scss":
/***/ (function(module, exports) {

module.exports = "#footer {\n  width: 100%;\n  display: inline-block;\n  margin-top: 100px;\n  padding: 10px 60px;\n  background: #00396f; }\n  #footer #copyrights {\n    float: left;\n    margin: 0;\n    margin-top: 3px;\n    font-size: 13px;\n    color: #fff; }\n  #footer #copyrights a {\n      color: inherit; }\n  #footer #links {\n    float: right;\n    color: #fff; }\n  #footer #links a {\n    font-size: 13px;\n    color: #fff; }\n  @media screen and (max-width: 625px) {\n  #footer {\n    padding: 10px 20px; }\n  #copyrights, #links {\n    width: 100%;\n    text-align: center; } }\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"large\" id=\"header\">\n  <div id=\"logo\">\n    <img src=\"../../assets/logo.png\" alt=\"Rizkalla\">\n  </div>\n  <div id=\"searchForm\">\n    <div id=\"form\">\n      <input #productName (keyup)=\"search(productName.value)\" (focusout)=\"result = false\" (keyup.enter)=\"result = false\" placeholder=\"Enter keyword here...\" id=\"productNameInput\">\n      <button id=\"search\"><i class=\"fa fa-search\"></i></button>\n    </div>\n    <ul class=\"list-group\" id=\"list\" *ngIf=\"result\">\n      <li class=\"list-group-item\" *ngFor=\"let p of productsCase\">\n        <a routerLink=\"\" (click)=\"return;\">{{p.name}}</a>\n      </li>\n    </ul>\n  </div>\n  <div id=\"cta\">\n    <div id=\"wrapper\">\n      <div id=\"cart\">\n        <span>{{inCart}}</span>\n        <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n      </div>\n      <div id=\"profile\">\n        <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n        <div id=\"registration\">\n          <div id=\"row1\">\n            <a routerLink=\"\" (click)=\"return;\">Sign In</a>\n            <span>&nbsp;/&nbsp;</span>\n            <a routerLink=\"\" (click)=\"return;\"> Join Free</a>\n          </div>\n          <div id=\"row2\">\n            <a routerLink=\"\" (click)=\"return;\">Welcome Guest</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/***/ (function(module, exports) {

module.exports = "#header {\n  width: calc(100% - 120px);\n  margin: 20px 60px; }\n\n.large {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n#logo, #searchForm, #cta {\n  width: 33.33%; }\n\n#logo img {\n  width: 190px; }\n\n#searchForm {\n  margin-top: 7px; }\n\n#form {\n  width: 100%;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\ninput {\n  width: 100%;\n  padding: 5px 0 5px 17px;\n  border: 1px solid #aaa;\n  border-right: 0;\n  background: #ededed; }\n\n#search {\n  position: relative;\n  right: 0;\n  border: 1px solid #aaa;\n  border-left: 0;\n  background: #ededed;\n  color: #aaa; }\n\n.list-group {\n  position: absolute;\n  width: 27.33%;\n  z-index: 9999; }\n\n.list-group-item {\n  cursor: pointer; }\n\n#cta > #wrapper {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  margin-left: 20%; }\n\n#cta i {\n  font-size: 26px;\n  color: #004a8f; }\n\n#cta #cart {\n  margin-top: 16px; }\n\n#cta #cart span {\n  position: relative;\n  padding: 4px 7px;\n  top: -21px;\n  right: -36px;\n  border-radius: 50%;\n  font-size: 10px;\n  background: #ffd400; }\n\n#cta #profile {\n  position: absolute;\n  right: 60px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n#cta #profile i {\n  margin: 10px 10px; }\n\n#cta #profile #registration #row1 {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n#cta #profile #registration #row1 a,\n#cta #profile #registration #row1 span {\n  font-weight: 600; }\n\n#cta #profile #registration #row1 span {\n  color: #004a8f; }\n\n#cta #profile #registration #row2 a {\n  margin-left: 6px; }\n\n#cta #profile #registration a {\n  cursor: pointer;\n  color: #004a8f; }\n\n@media screen and (max-width: 935px) {\n  #cta #profile {\n    display: none; }\n  #wrapper {\n    margin-left: 0 !important; }\n  #cta {\n    width: 59.74px;\n    position: absolute;\n    right: 53px; }\n  #searchForm {\n    position: absolute;\n    right: 113px; } }\n\n@media screen and (max-width: 700px) {\n  #header {\n    display: block; }\n  #cta {\n    top: 20px; }\n  #searchForm {\n    position: relative;\n    float: right;\n    top: 20px;\n    right: 0;\n    margin: 10px 0;\n    width: calc(100% - 64px);\n    padding: 0 1px; } }\n\n@media screen and (max-width: 380px) {\n  #header {\n    width: calc(100% - 40px);\n    margin: 20px; }\n  #cta {\n    right: 13px; } }\n\n@media screen and (max-width: 625px) {\n  #header {\n    width: calc(100% - 40px);\n    margin: 20px 20px; }\n  #cta {\n    right: 23px; } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data) {
        var _this = this;
        this.data = data;
        this.result = false;
        this.inCart = 0;
        this.stop = 1;
        this.data.currentSharedProducts.subscribe(function (currentSharedProducts) {
            _this.products = currentSharedProducts;
        });
    }
    HeaderComponent.prototype.clearSearchEffect = function () {
        this.data.clearSearchEffect();
    };
    HeaderComponent.prototype.search = function (productName) {
        this.products = this.data.products;
        if (productName === '' && this.stop == 0) {
            this.clearSearchEffect();
            this.stop = 1;
            return;
        }
        this.stop = 0;
        this.productsCase = Object.values(this.products)
            .filter(function (x) {
            return x.name.toLowerCase()
                .startsWith(productName.toLowerCase());
        });
        if (this.productsCase.length > 0)
            this.result = true;
        this.data.nChangeSharedProducts(this.productsCase);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/metabar/metabar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"metabar\">\n  <div id=\"left\">\n    <p>CALL US NOW: 022 222 222</p>\n    <div class=\"dropdown\" id=\"language\" dropdown>\n        <button dropdownToggle>\n          <span class=\"default\">{{language}}</span>\n        </button>\n        <ul class=\"dropdown-menu\" *dropdownMenu>\n          <li class=\"dropdown-item\" *ngFor=\"let lang of languages; let i = index\">\n            <a routerLink=\"\" (click)=\"changeLang(i)\">{{lang}}</a>\n          </li>\n        </ul>\n    </div>\n    <div class=\"dropdown\" id=\"country\" dropdown>\n      <button dropdownToggle>\n        <img id=\"flag\" [src]=\"flag\">\n        <span class=\"default\">{{country}}</span>\n      </button>\n      <ul class=\"dropdown-menu\" *dropdownMenu>\n        <li class=\"dropdown-item\" *ngFor=\"let country of countries; let i = index\">\n          <a routerLink=\"\" (click)=\"changeCountry(i)\">{{country.country}}</a>\n        </li>\n      </ul>\n    </div>\n  </div>\n  <div id=\"right\">\n    <ul>\n      <div class=\"dropdown\" dropdown>\n        <button dropdownToggle>\n          <span class=\"default\">My Account</span>\n        </button>\n        <ul class=\"dropdown-menu\" *dropdownMenu>\n          <li class=\"dropdown-item\">Login</li>\n          <li class=\"dropdown-item\">Signup</li>\n        </ul>\n      </div> |\n      <li><a routerLink=\"\" (click)=\"return;\">My Wishlist</a></li> |\n      <li><a routerLink=\"\" (click)=\"return;\">Checkout</a></li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/metabar/metabar.component.scss":
/***/ (function(module, exports) {

module.exports = "#metabar {\n  height: 38.4px;\n  padding: 10px 60px;\n  background: #dedede;\n  color: #848484;\n  font-size: 12px; }\n\n#left {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  float: left; }\n\n#country #flag {\n  width: 18px;\n  height: 16px;\n  margin-top: -1px; }\n\n.dropdown button {\n  border: 0;\n  color: inherit;\n  background: transparent;\n  cursor: pointer; }\n\n.dropdown button:active,\n.dropdown button:visited {\n  border: 0; }\n\n.dropdown button:after {\n  content: \"\\f0d7\";\n  font-family: \"FontAwesome\"; }\n\n#left > *,\n#right ul > * {\n  margin: 0 10px; }\n\n#left > *:first-child,\n#right ul > *:first-child {\n  margin-left: 0; }\n\n#left > *:last-child,\n#right ul > *:last-child {\n  margin-right: 0; }\n\n#right {\n  float: right;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n#right > ul {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  list-style-type: none;\n  cursor: pointer; }\n\n#right ul.dropdown-menu > * {\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/metabar/metabar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MetabarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MetabarComponent = /** @class */ (function () {
    function MetabarComponent() {
        this.flags = {
            egypt: "egypt",
            sa: "sa"
        };
        this.countries = [
            { country: "Egypt", flag: "egypt" },
            { country: "Saudi Arabia", flag: "sa" },
            { country: "United Arab Emirates", flag: "uae" }
        ];
        this.country = this.countries[0]["country"]; //default country
        this.languages = [
            "English",
            "Arabic",
            "French",
            "Italic"
        ];
        this.language = this.languages[0]; //default language
        this.countries.map(function (country) {
            country["flag"] = "../../assets/" + country["flag"] + ".svg";
        });
        this.flag = this.countries[0]["flag"]; //default flag
    }
    MetabarComponent.prototype.changeLang = function (i) {
        this.language = this.languages[i];
    };
    MetabarComponent.prototype.changeCountry = function (i) {
        this.country = this.countries[i]["country"];
        this.flag = this.countries[i]["flag"];
    };
    MetabarComponent.prototype.ngOnInit = function () {
    };
    MetabarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'metabar',
            template: __webpack_require__("./src/app/metabar/metabar.component.html"),
            styles: [__webpack_require__("./src/app/metabar/metabar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MetabarComponent);
    return MetabarComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"nav\">\n  <ul>\n    <div *ngFor=\"let key of caKeys\" class=\"dropdown\">\n      <button>\n        <span class=\"default\">{{key}}</span>\n      </button>\n      <ul class=\"dropdown-menu\">\n        <li *ngFor=\"let item of categories[key]\" class=\"dropdown-item\">{{item}}</li>\n      </ul>\n    </div>\n  </ul>\n  <button id=\"friday\"><a routerLink (click)=\"return;\">White Friday</a></button>\n  <button id=\"offers\"><a routerLink (click)=\"return;\">Special Offers</a></button>\n</div>\n\n<div id=\"menu\">\n  <ul>\n    <div class=\"dropdown\">\n      <button id=\"bars\" (click)=\"mainMenu = !mainMenu; open = !open\">\n          <span class=\"default\">\n            <i *ngIf=\"!open\" class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n            <i *ngIf=\"open\" class=\"fa fa-times\" aria-hidden=\"true\"></i>\n          </span>\n      </button>\n      <ul *ngIf=\"mainMenu\" class=\"dropdown-menu\">\n        <div *ngFor=\"let key of caKeys; let i =index\" class=\"dropdown\">\n          <button>\n            <span class=\"default\" (click)=\"subMenu[i] = !subMenu[i]\">{{key}}</span>\n          </button>\n          <ul *ngIf=\"subMenu[i]\" class=\"dropdown-menu inner\">\n            <li *ngFor=\"let item of categories[key]\" class=\"dropdown-item\">{{item}}</li>\n          </ul>\n        </div>\n      </ul>\n    </div>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/nav/nav.component.scss":
/***/ (function(module, exports) {

module.exports = "#nav {\n  width: calc(100% - 120px);\n  height: 64px;\n  margin: 0 60px;\n  padding: 20px 0 20px 15px;\n  display: inline-block;\n  background: #004a8f; }\n  #nav ul, #nav ul button {\n    cursor: pointer; }\n  #nav ul:first-child {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    padding: 0;\n    list-style-type: none; }\n  #nav ul:first-child .dropdown button:after {\n      content: \"\\f0d7\";\n      font-size: 10px;\n      font-family: \"FontAwesome\"; }\n  #nav ul:first-child button {\n      margin: 0 5px;\n      padding: 0;\n      border: 0;\n      font-size: 12px;\n      background: transparent;\n      color: white; }\n  #nav ul .dropdown:first-child button {\n    margin-left: 0; }\n  #nav ul .dropdown:last-child button {\n    margin-right: 0; }\n  #nav > button {\n    float: right;\n    height: calc(100% + 40px);\n    margin-top: -20px;\n    border: 0;\n    cursor: pointer;\n    font-size: 12px; }\n  #nav #offers {\n    background: transparent;\n    color: #ffd400; }\n  #nav #friday {\n    background: #000;\n    color: #fff; }\n  @media screen and (min-width: 981px) and (max-width: 1080px) {\n    #nav #friday {\n      display: none; }\n    #nav #offer {\n      width: 50px; } }\n  @media screen and (max-width: 980px) {\n    #nav #friday, #nav #offer {\n      display: none; } }\n  @media screen and (min-width: 979px) {\n    #nav .dropdown:hover > button, #nav .dropdown:hover button span {\n      color: #ffd400; }\n    #nav .dropdown:hover ul.dropdown-menu {\n      display: block; } }\n  @media (min-width: 981px) and (max-width: 1080px) {\n  #friday {\n    display: none !important; }\n  #offers {\n    width: 50px !important; } }\n  @media (max-width: 980px) {\n  #friday, #offers {\n    display: none !important; } }\n  @media (min-width: 799px) {\n  .dropdown:hover > button, .dropdown:hover button span {\n    color: #ffd400 !important; }\n  .dropdown:hover ul.dropdown-menu {\n    display: block !important; } }\n  @media (max-width: 979px) and (min-width: 800px) {\n  #nav {\n    height: 88px !important; } }\n  #menu {\n  display: none; }\n  @media screen and (max-width: 799px) {\n  #nav {\n    display: none; }\n  #menu {\n    display: block; } }\n  #menu {\n  width: calc(100% - 122px);\n  height: 56px;\n  margin: 0 61px;\n  padding: 9px 20px;\n  background: #004a8f; }\n  #menu ul, #menu ul button {\n    cursor: pointer; }\n  #menu #bars {\n    font-size: 27px; }\n  #menu ul:first-child {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    padding: 0;\n    list-style-type: none; }\n  #menu ul:first-child button {\n      margin: 0 5px;\n      padding: 0;\n      border: 0;\n      font-size: 13px;\n      background: #004a8f;\n      color: white; }\n  #menu ul .dropdown:first-child button {\n    margin-left: 0; }\n  #menu ul .dropdown:last-child button {\n    margin-right: 0; }\n  #menu ul.dropdown-menu {\n    top: 112%;\n    left: -21px;\n    display: block;\n    padding: 10px;\n    background-color: #004a8f; }\n  #menu ul.dropdown-menu button {\n    margin: 8px 0; }\n  #menu ul.inner {\n    position: static; }\n  #menu ul.inner li {\n    font-size: 13px;\n    color: #fff; }\n  #menu > button {\n    float: right;\n    height: calc(100% + 40px);\n    margin-top: -20px;\n    border: 0;\n    cursor: pointer;\n    font-size: 12px; }\n  @media screen and (max-width: 625px) {\n  #menu {\n    width: calc(100% - 42px);\n    margin: 0 21px; } }\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavComponent = /** @class */ (function () {
    function NavComponent(data) {
        var _this = this;
        this.data = data;
        this.mainMenu = false;
        this.subMenu = [];
        this.open = false;
        this.categories = data.categories;
        this.caKeys = Object.keys(this.categories);
        this.caKeys.map(function (x) { return _this.subMenu.push(false); });
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/title/title.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"title\">\n  <p id=\"category\">TV's & Entertainment</p>\n  <p id=\"product\">Television</p>\n</div>"

/***/ }),

/***/ "./src/app/title/title.component.scss":
/***/ (function(module, exports) {

module.exports = "#title {\n  width: calc(100% - 120px);\n  height: 56px;\n  margin: 0 60px;\n  padding: 15px 20px;\n  display: inline-block;\n  background: #d6d6d6; }\n  #title #category {\n    float: left;\n    font-weight: 800; }\n  #title #product {\n    float: right;\n    font-weight: 400; }\n  #title #category, #title #product {\n    font-size: 20px;\n    color: #000; }\n  @media screen and (max-width: 799px) {\n  #title {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TitleComponent = /** @class */ (function () {
    function TitleComponent() {
    }
    TitleComponent.prototype.ngOnInit = function () {
    };
    TitleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-title',
            template: __webpack_require__("./src/app/title/title.component.html"),
            styles: [__webpack_require__("./src/app/title/title.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map