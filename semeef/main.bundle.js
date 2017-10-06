webpackJsonp([1],{

/***/ "./src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".about {\r\n    min-width: 100%;\r\n    min-height: 100vh;\r\n    background: white;\r\n    text-align: justify;\r\n    text-justify: auto;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    color: #666;\r\n}\r\n\r\n.about h3 {\r\n    margin: 0;\r\n    padding: 15px;\r\n    text-align: center;\r\n    background-color: #00A6FB;\r\n    color: white;\r\n}\r\n\r\narticle {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\narticle > * {\r\n    -webkit-box-ordinal-group: 101;\r\n        -ms-flex-order: 100;\r\n            order: 100;\r\n}\r\n\r\narticle aside {\r\n    width: 40%;\r\n    padding: 10px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 320px;\r\n            flex: 1 1 320px;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\naside .stat {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    width: 100%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n}\r\n\r\n.icon {\r\n    color: #00A6FB;\r\n}\r\n\r\n.stat .item {\r\n    width: 50%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 170px;\r\n            flex: 1 1 170px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n@media all and (max-width: 500px){\r\n    .stat .item {\r\n        width: 50%;\r\n        -webkit-box-flex: 1;\r\n            -ms-flex: 1 1 240px;\r\n                flex: 1 1 240px;\r\n    }\r\n}\r\n\r\n.item .text{\r\n    font-size: 1.2rem;\r\n    font-style: italic;\r\n    word-wrap: break-word;\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n.fa-4x {\r\n    margin: 1.3rem;;\r\n    padding: 0;\r\n}\r\n\r\naside img {\r\n    max-width: calc(100% - 20px);\r\n}\r\n\r\n.last {\r\n    -webkit-box-ordinal-group: 6;\r\n        -ms-flex-order: 5;\r\n            order: 5;\r\n}\r\n\r\naside h3 {\r\n    color: #00A6FB;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 900;\r\n}\r\n\r\narticle .content {\r\n    width: 60%;\r\n    line-height: 1.3;\r\n    letter-spacing: 0.05rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    font-size: 0.85rem;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 550px;\r\n            flex: 1 1 550px;\r\n    padding: 1rem;\r\n}\r\n\r\n.vision {\r\n    background: linear-gradient(to bottom, rgba(0,166,251,1) 0%, rgba(37,136,186,1) 100%);\r\n    min-height: 250px;\r\n    color: white;\r\n    /*background: #00A6FB;*/\r\n}\r\n\r\n.vision .item {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 300px;\r\n            flex: 1 1 300px;\r\n}\r\n\r\n\r\n.item h3 {\r\n    margin: 0;\r\n    text-align: left;\r\n}\r\n\r\n.item .text{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    font-family: 'Montserrat';\r\n    text-align: center;\r\n}\r\n\r\n.text p {\r\n    padding: 1.5rem;\r\n    margin: 0;\r\n    text-align: center;\r\n    font-size: 0.9rem;\r\n    font-style: italic;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"about\">\n\n  <h3 class=\"heading\">About Us</h3>\n\n  <article>\n      <aside>\n        <img src=\"http://wp1.themexlab.com/2017/factory/images/resource/1.png\">\n\n        <div class=\"stat\">\n          <div class=\"item\">\n            <p class=\"fa icon fa-4x fa-user-plus\" aria-hidden=\"true\"></p>\n            <p class=\"text\">1000</p> <p class=\"text\">satisfied clients</p>\n          </div>\n\n          <div class=\"item\">\n            <p class=\"fa icon fa-4x fa-trophy\" aria-hidden=\"true\"></p>\n            <p class=\"text\">20</p> <p class=\"text\">Awards</p>\n          </div>\n        </div>\n\n      </aside>\n\n  \n      <div class=\"content\" [innerHTML]=\"content | safe: 'html'\">\n      </div>\n\n  </article>\n\n  <article class=\"vision\">\n    <section class=\"item\">\n      <h3>Vision</h3>\n      <div class=\"text\">\n        <p>{{vmv.vision}}</p>\n      </div>\n    </section>\n\n    <section class=\"item\">\n        <h3>Mission</h3>\n        <div class=\"text\">\n            <p>{{vmv.mission}} </p>\n          </div>\n      </section>\n\n      <section class=\"item\">\n          <h3>Values</h3>\n          <div class=\"text\">\n              <p>{{vmv.values}}</p>\n            </div>\n        </section>\n  </article>\n\n</section>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    return AboutUsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], AboutUsComponent.prototype, "vmv", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], AboutUsComponent.prototype, "content", void 0);
AboutUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-about-us',
        template: __webpack_require__("./src/app/about-us/about-us.component.html"),
        styles: [__webpack_require__("./src/app/about-us/about-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* nav breakpoint is 670px.. */\r\n\r\nnav {\r\n    height: 60px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    position: fixed;\r\n    left: 0;\r\n    top: 0;\r\n    z-index: 1000;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    background: rgba(0,0,0,0.1);\r\n}\r\n\r\n.scroll{\r\n    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.75);\r\n    background: #191D32;\r\n    height: 65px;\r\n}\r\n\r\n.icon {\r\n    margin-left: 1.4rem;\r\n}\r\n\r\nnav .brand{\r\n    font-family: 'Archivo Black', sans-serif;\r\n    font-size: 1.4rem;\r\n    color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    color: #fff;\r\n}\r\n\r\n.brand span{\r\n    color: #00A6FB /*#00A7E1;*/\r\n}\r\n\r\n\r\nnav .right {\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    margin-left: auto;\r\n    height: 100%;\r\n}\r\n\r\n.right .item{\r\n    min-width: 5rem;\r\n    width: auto;\r\n    height: 100%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -ms-flex-wrap: nowrap;\r\n        flex-wrap: nowrap;\r\n    font-size: 0.65rem;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.right .lg {\r\n    min-width: 5.3rem;\r\n}\r\n\r\n\r\n.right .item:hover{\r\n    background: #00A7E1;\r\n    cursor: pointer;\r\n}\r\n\r\n.item:hover .fa{\r\n    color: #ec971f;\r\n}\r\n\r\n.item > .fa {\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.fa-cog {\r\n    margin-right: 1.5rem;\r\n    color: #fff;\r\n}\r\n\r\n.fa-bars {\r\n    font-size: 1.5rem;\r\n    color: #fff;\r\n}\r\n\r\n\r\n/***********88Footer********************/\r\nfooter { \r\n    text-align: center;\r\n    background: #343434;\r\n    min-height: 1.5rem;\r\n    width: 100%;\r\n    margin-top: auto;\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    font-family: Lato;\r\n    font-size: .6rem;\r\n    color: white;\r\n}\r\n\r\n.highlight {\r\n    color: #00A6FB;\r\n}\r\n\r\n\r\n.heading {\r\n    color: #00A6FB; /*#00A7E1;*/\r\n    text-align: center;\r\n    margin: 0;\r\n}\r\n\r\n.third {\r\n    background: #3A3335;\r\n    color: white;\r\n}\r\n\r\nbutton {\r\n    border: 1px solid transparent;\r\n    color: #fff;\r\n    background-color: #ec971f;\r\n    border-color: #eb9316;\r\n    border-radius: .25rem;\r\n    min-height: 60px;\r\n    min-width: 200px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav [ngClass]=\"{'scroll': scroll}\">\n  <i class=\"fa fa-cog fa-spin fa-fw icon\"></i>\n\n  <div class=\"brand\">\n    <span>Sem</span>Eef\n  </div>\n\n  <div *ngIf=\"!collapsed\" class=\"right\">\n    <div class=\"item\"><p><i class=\"fa fa-users\" aria-hidden=\"true\"></i> ABOUT</p></div>\n    <div class=\"item\"><p><i class=\"fa fa-wrench\" aria-hidden=\"true\"></i> SERVICES</p></div>\n    <div class=\"item\"><p><i class=\"fa fa-handshake-o\" aria-hidden=\"true\"></i>  TEAM</p></div>\n    <div class=\"item lg\"><p><i class=\"fa fa-home\" aria-hidden=\"true\">  </i>  CONTACT</p></div>\n  </div>\n\n  <div *ngIf=\"collapsed\" class=\"right\">\n    <div class=\"item menu\">\n      <p><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></p>\n    </div>\n  </div>\n</nav>\n\n<main>\n  <image-slider [slides]=\"slides\" [timer] = \"5000\"></image-slider>\n  <app-about-us [vmv]=\"vmv\" [content]=\"content\"></app-about-us>\n  <app-services [services]=\"services\"></app-services>\n  <app-team [team]=\"team\"></app-team>\n  <app-mail-list></app-mail-list>\n  <app-contact></app-contact>\n  <app-find-us></app-find-us>\n\n</main>\n\n<footer>\n  <p>&copy; {{date}} Semeef <span class=\"highlight\">11908754</span></p>\n</footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data__ = __webpack_require__("./src/app/data.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    //data for services component
    function AppComponent(d) {
        this.date = new Date().getFullYear();
        this.slides = d.slides;
        this.vmv = d.vmv;
        this.content = d.content;
        this.services = d.services;
        this.team = d.team;
    }
    AppComponent.prototype.ngOnInit = function () {
        if (window.innerWidth < 671) {
            this.collapsed = true;
        }
        if (window.pageYOffset > 150) {
            this.scroll = true;
        }
        else
            this.scroll = false;
    };
    AppComponent.prototype.resizer = function (e) {
        if (window.innerWidth < 670) {
            this.collapsed = true;
        }
        else {
            this.collapsed = false;
        }
    };
    AppComponent.prototype.scrollspy = function (e) {
        if (window.pageYOffset > 150) {
            this.scroll = true;
        }
        else
            this.scroll = false;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "resizer", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* HostListener */])('window:scroll', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "scrollspy", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__data__["a" /* data */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__data__["a" /* data */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__image_slider_image_slider_component__ = __webpack_require__("./src/app/image-slider/image-slider.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_services_component__ = __webpack_require__("./src/app/services/services.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_view_service_view_service_component__ = __webpack_require__("./src/app/services/view-service/view-service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__about_us_about_us_component__ = __webpack_require__("./src/app/about-us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__data__ = __webpack_require__("./src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pipes_safe_pipe__ = __webpack_require__("./src/app/pipes/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mail_list_mail_list_component__ = __webpack_require__("./src/app/mail-list/mail-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__team_team_component__ = __webpack_require__("./src/app/team/team.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__blog_blog_component__ = __webpack_require__("./src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__find_us_find_us_component__ = __webpack_require__("./src/app/find-us/find-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__image_slider_image_slider_component__["a" /* ImageSlider */],
            __WEBPACK_IMPORTED_MODULE_6__services_services_component__["a" /* ServicesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__about_us_about_us_component__["a" /* AboutUsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__pipes_safe_pipe__["a" /* SafePipe */],
            __WEBPACK_IMPORTED_MODULE_7__services_view_service_view_service_component__["a" /* ViewServiceComponent */],
            __WEBPACK_IMPORTED_MODULE_11__mail_list_mail_list_component__["a" /* MailListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__team_team_component__["a" /* TeamComponent */],
            __WEBPACK_IMPORTED_MODULE_13__blog_blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_14__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_15__find_us_find_us_component__["a" /* FindUsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_16__agm_core__["a" /* AgmCoreModule */].forRoot({
                apiKey: 'AIzaSyBs8vqqwKY6xHppzBw5JzlDnLUSU4PL7aA'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__data__["a" /* data */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/blog/blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blog{\r\n    color: #666 !important;\r\n    background: #f3f3f3;\r\n    min-height: 100vh;\r\n    margin: 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: start;\r\n        -ms-flex-align: start;\r\n            align-items: flex-start;   \r\n}\r\n\r\n.blog h3 {\r\n    min-width: 100%;\r\n    text-align: center;\r\n    color: black;\r\n    margin: 0;\r\n    padding: .8rem;\r\n}\r\n\r\n.blog .item {\r\n    width: 20rem;\r\n    margin: 1rem;\r\n    min-height: 21.8rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    background: white;\r\n    box-shadow: 0px 2px 20px -10px #000;\r\n}\r\n\r\n\r\n@media all and (max-width: 688px) {\r\n    .blog .item {\r\n        -webkit-box-flex: 1;\r\n            -ms-flex: 1 1 18rem;\r\n                flex: 1 1 18rem;\r\n        margin: 1.5rem;\r\n    }\r\n}\r\n\r\n.item img{\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.item h4 {\r\n    color: black;\r\n    margin: 0;\r\n    padding: .7rem;\r\n}\r\n\r\n.item p {\r\n    padding: .6rem;\r\n    margin: 0;\r\n    font-size: .9rem;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"blog\">\n  <h3>Blog</h3>\n  <div class=\"item\">\n    <img src=\"http://1.bp.blogspot.com/-TFHqtptu5K4/VTXyuZ0SawI/AAAAAAAABM0/Nn__7idc1QA/s720/image_191-e1422727989131.jpg\">\n    <h4>Blog Title</h4>\n    <p>This is a sample blog post and is meant to be an example headline.</p>\n  </div>\n  <div class=\"item\">\n    <img src=\"http://2.bp.blogspot.com/-1lsvyEZ_-tc/VTXyt7LXGuI/AAAAAAAABMU/DYAY_BS8J8I/s720/DeathtoStock_Wired4-1000x666.jpg\">\n  </div>\n  <div class=\"item\"></div>\n  <div class=\"item\">\n      <img src=\"http://2.bp.blogspot.com/-1lsvyEZ_-tc/VTXyt7LXGuI/AAAAAAAABMU/DYAY_BS8J8I/s720/DeathtoStock_Wired4-1000x666.jpg\">\n  </div>\n  <div class=\"item\">\n      <img src=\"http://1.bp.blogspot.com/-TFHqtptu5K4/VTXyuZ0SawI/AAAAAAAABM0/Nn__7idc1QA/s720/image_191-e1422727989131.jpg\">\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("./src/app/blog/blog.component.html"),
        styles: [__webpack_require__("./src/app/blog/blog.component.css")]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".contact{\r\n    min-height: 80vh;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\n.contact h3{\r\n    text-align: center;\r\n    min-width: 100%;\r\n    color: #a9a9a9;\r\n}\r\n\r\n.contact .form-group {\r\n    width: 50%;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 350px;\r\n            flex: 1 1 350px;\r\n    padding: 1.8rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n.form-group input{\r\n    margin: 0;\r\n    min-height: 2.4rem;\r\n    border: 1px solid #a9a9a9;\r\n    border-bottom: 0 !important;\r\n    color: #a9a9a9;\r\n}\r\n\r\ninput:focus {\r\n    border-color:#9F9F9F !important;\r\n}\r\n\r\n.form-group button{\r\n    margin: 0;\r\n    min-height: 2.4rem;\r\n    background: transparent;\r\n    border: 1px solid #a9a9a9;\r\n    transition: color 0.2s ease-in;\r\n}\r\n\r\n.form-group button:hover {\r\n    background: #a9a9a9;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"contact\">\n\n  <h3>Contact Us</h3>\n  <div class=\"form-group\">\n    <input type=\"text\" placeholder=\"Name\">\n    <input type=\"text\" placeholder=\"Email\">\n    <input type=\"text\" placeholder=\"Subject\">\n    <textarea name=\"\" id=\"\" cols=\"30\" rows=\"10\" placeholder=\"Message\"></textarea>\n    <button>Send</button>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("./src/app/contact/contact.component.html"),
        styles: [__webpack_require__("./src/app/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "./src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return data; });
var data = (function () {
    function data() {
        // data for slide component
        this.slides = [
            {
                url: '../../assets/pictures/img1.jpg',
                head: "We're SemEef",
                text: "You Imagine, We create. Or we can imagine for you as well, Just tell us your story"
            },
            {
                url: '../../assets/pictures/img2.jpg',
                head: "Solution at it's best",
                text: "It's the Computer age, We'll add a software to the solutions provided."
            },
            {
                url: '../../assets/pictures/img3.jpg',
                head: "Amazing Team",
                text: "We have an amazing team of engineers to suit your needs"
            },
            {
                url: 'http://moncherieflowers-shanklin.co.uk/wp-content/uploads/2016/02/images-of-flowers-and-butterflies-5.jpg',
                head: "Flowers are nice",
                text: "We have an amazing team of engineers to suit your needs"
            }
        ];
        // data for about us compoent
        this.vmv = {
            vision: "If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.",
            mission: "If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.",
            values: "If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful.\n    If your beauty is not defined by things as temporary as looks then you're truly beautiful."
        };
        this.content = "<p>\n  Astek has been providing IT and Engineering solutions for more than 25 years to some of the \n  world\u2019s largest industrial and services groups in the Aerospace, Defence, Energy, Ground \n  Transportation, Finance, Healthcare, Travel and Telecoms sectors. Designing and developing\n  the products and services of tomorrow, building and ensuring the optimum use of their\n    investments throughout their life cycle, coordinating and executing the realization \n    of their projects and infrastructure: our 2500 Engineers are committed to address\n    these challenges with their creative vision, know-how, methodologies and conviction. \n    An international group, located as close as possible to its clients, Astek operates \n    in over 12 countries throughout Europe, APAC, Middle East and the Americas. As a \n    strategic partner, Astek offers its clients global project support while guaranteeing \n    a consistent level of service alongside a commitment to excellence\n  </p>\n\n  <p>\n      Astek has been providing IT and Engineering solutions for more than 25 years to some of the \n      world\u2019s largest industrial and services groups in the Aerospace, Defence, Energy, Ground \n      Transportation, Finance, Healthcare, Travel and Telecoms sectors. Designing and developing\n      the products and services of tomorrow, building and ensuring the optimum use of their\n        investments throughout their life cycle, coordinating and executing the realization \n        of their projects and infrastructure: our 2500 Engineers are committed to address\n        these challenges with their creative vision, know-how, methodologies and conviction. \n        An international group, located as close as possible to its clients, Astek operates \n        in over 12 countries throughout Europe, APAC, Middle East and the Americas. As a \n        strategic partner, Astek offers its clients global project support while guaranteeing \n        a consistent level of service alongside a commitment to excellence\n      </p>";
        this.services = [
            {
                img: 'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2013/10/Engineer.jpg',
                name: 'Engineering breakthroughs',
                headline: "We provide core engineering breakthroughs to power the future",
                content: "<p> This is a sample engineering service page, full of mock data</p>\n              <p>\n              Astek has been providing IT and Engineering solutions for more than 25 years to some of the \n              world\u2019s largest industrial and services groups in the Aerospace, Defence, Energy, Ground \n              Transportation, Finance, Healthcare, Travel and Telecoms sectors. Designing and developing\n              the products and services of tomorrow, building and ensuring the optimum use of their\n                investments throughout their life cycle, coordinating and executing the realization \n                of their projects and infrastructure: our 2500 Engineers are committed to address\n                these challenges with their creative vision, know-how, methodologies and conviction. \n                An international group, located as close as possible to its clients, Astek operates \n                in over 12 countries throughout Europe, APAC, Middle East and the Americas. As a \n                strategic partner, Astek offers its clients global project support while guaranteeing \n                a consistent level of service alongside a commitment to excellence\n              </p> \n              <ul>\n                <li>Omena</li>\n                <li>Popo</li>\n                <li>Emma</li>\n                <li>Zino</li>\n              </ul>\n              <p>\n              Astek has been providing IT and Engineering solutions for more than 25 years to some of the \n              world\u2019s largest industrial and services groups in the Aerospace, Defence, Energy, Ground \n              Transportation, Finance, Healthcare, Travel and Telecoms sectors. Designing and developing\n              the products and services of tomorrow, building and ensuring the optimum use of their\n                investments throughout their life cycle, coordinating and executing the realization \n                of their projects and infrastructure: our 2500 Engineers are committed to address\n                these challenges with their creative vision, know-how, methodologies and conviction. \n                An international group, located as close as possible to its clients, Astek operates \n                in over 12 countries throughout Europe, APAC, Middle East and the Americas. As a \n                strategic partner, Astek offers its clients global project support while guaranteeing \n                a consistent level of service alongside a commitment to excellence\n              </p> \n      ",
            },
            {
                img: 'https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/standards4--tojpeg_1417011399485_x2.jpg',
                name: 'Engineering breakthroughs',
                headline: "We provide core engineering breakthroughs to power the future",
                content: "<p> This is a sample engineering service page, full of mock data</p>\n              <p>\n              Astek has been providing IT and Engineering solutions for more than 25 years to some of the \n              world\u2019s largest industrial and services groups in the Aerospace, Defence, Energy, Ground \n              Transportation, Finance, Healthcare, Travel and Telecoms sectors. Designing and developing\n              the products and services of tomorrow, building and ensuring the optimum use of their\n                investments throughout their life cycle, coordinating and executing the realization \n                of their projects and infrastructure: our 2500 Engineers are committed to address\n                these challenges with their creative vision, know-how, methodologies and conviction. \n                An international group, located as close as possible to its clients, Astek operates \n                in over 12 countries throughout Europe, APAC, Middle East and the Americas. As a \n                strategic partner, Astek offers its clients global project support while guaranteeing \n                a consistent level of service alongside a commitment to excellence\n              </p> \n              <ul>\n                <li>Omena</li>\n                <li>Popo</li>\n                <li>Emma</li>\n                <li>Zino</li>\n              </ul>\n      ",
            }
        ];
        this.team = [
            {
                img: "https://media.licdn.com/media/AAEAAQAAAAAAAAf0AAAAJGFmMGM1YWU1LTVhZmEtNDVjZi04OGEzLWUxMzQzMmIwMTE4Yw.jpg",
                name: "Samuel Enwenede CFSP CEng",
                role: "Founder and Director",
                linkedin: "https://www.linkedin.com/in/samuel-enwenede-cfsp-ceng-miet-43423137/"
            },
            {
                img: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAzuAAAAJDMyMzFiOThiLWRkNjEtNDAzNi1iN2Y3LTdhZWI0MzNkNWE0MA.jpg",
                name: "Enwenede Emmanuel",
                role: "CTO & Administration",
                linkedin: "https://www.linkedin.com/in/emmanuel-enwenede-9b5b183b/",
                facebook: "https://www.facebook.com/noelenwenede",
                twitter: "https://twitter.com/tips4ten"
            },
            {
                img: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16174626_1357968117558892_2855609325257417399_n.jpg?oh=6386548b756fb15369a809d61ba40494&oe=5A5AAE5E",
                name: "Kome Enwenede CFSP",
                role: "Business Development"
            },
            {
                img: "https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/19894913_1988152587865175_2209088400135286887_n.jpg?oh=970649e1afc79c69383bf39f2b25d721&oe=5A12C711",
                name: "Jennifer Enwenede ICAN",
                role: "Accountant",
                linkedin: "https://www.linkedin.com/in/jennifer-omena-enwenede-aa40093b/",
                facebook: "https://www.facebook.com/jen.enwenede"
            }
        ];
    }
    return data;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ "./src/app/find-us/find-us.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".find-us{\r\n    min-height: 400px;\r\n    min-width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n}\r\n\r\nagm-map {\r\n    height: 400px;\r\n    -webkit-box-flex: 2;\r\n        -ms-flex: 2 1 320px;\r\n            flex: 2 1 320px;\r\n}\r\n\r\n.address{\r\n    background: #343434;\r\n    width: 320px;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1 1 320px;\r\n            flex: 1 1 320px;\r\n    color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-height: 200px;\r\n}\r\n\r\n.address h4{\r\n    text-align: center;\r\n}\r\n\r\naddress{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    line-height: 1.4;\r\n    font-style: initial;\r\n    font-family: Lato;\r\n}\r\n\r\n.fa-map-marker{\r\n    color: #00a7e1;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/find-us/find-us.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"find-us\">\n    <div class=\"address\">\n        <h4><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i> Find Us</h4>\n        <address>\n            2nd Floor Trinity Gardens <br>\n            Entrepreneurial Spark,<br>\n            Quayside, NEwcastle,<br>\n            NE1 2HF,<br>\n            United Kingdom\n        </address>\n    </div>\n\n\n    <agm-map class=\"map\" [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"16\">\n        <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n    </agm-map>\n    \n</section>\n"

/***/ }),

/***/ "./src/app/find-us/find-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindUsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FindUsComponent = (function () {
    function FindUsComponent() {
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    FindUsComponent.prototype.ngOnInit = function () {
    };
    return FindUsComponent;
}());
FindUsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-find-us',
        template: __webpack_require__("./src/app/find-us/find-us.component.html"),
        styles: [__webpack_require__("./src/app/find-us/find-us.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FindUsComponent);

//# sourceMappingURL=find-us.component.js.map

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".view {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    min-height: 100vh;\r\n    width: 100%;\r\n    max-width: 100%;\r\n    position: relative;\r\n    overflow-x: hidden;\r\n}\r\n\r\n.view h1 {\r\n    font-size: 2.8rem;\r\n    padding: 0.7rem;\r\n    margin: 0;\r\n}\r\n\r\n.view p {\r\n    font-size: 1.3rem;\r\n    padding: 0.7rem;\r\n    margin: 0;\r\n}\r\n\r\n\r\n.slider {\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    min-width: 100%;\r\n    max-width: 100%;\r\n    min-height: 100%; \r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n\r\n\r\n.content {\r\n    height: 100%;\r\n    width: 100%;\r\n    background: rgba(0,0,0,0.4);\r\n    color: white;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    text-align: center;\r\n}\r\n\r\n.controller {\r\n    z-index: 20;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 0;\r\n    color: white /*#1A1818*/;\r\n}\r\n\r\n.controller nav{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n}\r\n\r\n.right, .left {\r\n    z-index: 20;\r\n    position: absolute;\r\n    color: white;\r\n    top: 50%;\r\n}\r\n\r\n.right {\r\n    right: 0.5rem;\r\n}\r\n\r\n.left {\r\n    left: 0.5rem;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/* button styling */\r\nbutton {\r\n    border: 1px solid transparent;\r\n    color: #fff;\r\n    background-color: #ec971f;\r\n    border-color: #eb9316;\r\n    border-radius: .25rem;\r\n    min-height: 3.75rem;\r\n    min-width: 12.5rem;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"view\">\r\n    <ng-container *ngFor=\"let slide of slides\">\r\n        <div [@inout]=\"anime\" class=\"slider\" *ngIf=\"index === slides.indexOf(slide)\" [ngStyle]=\"{'background': urlmaker(slide.url)}\">\r\n            <div class=\"content\">\r\n                <h1 [@ltr]=\"anime\">{{slide.head}}</h1>\r\n                <p [@rtl]=\"anime\">{{slide.text}}</p>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <i *ngIf=\"index !== 0\" class=\"fa fa-chevron-circle-left left\" aria-hidden=\"true\" (click)=\"left(); called = true;\"></i>\r\n    <i  *ngIf=\"index !== slides.length - 1\" class=\"fa fa-chevron-circle-right right\" aria-hidden=\"true\"(click)=\"right(); called = true;\"></i>\r\n</section>"

/***/ }),

/***/ "./src/app/image-slider/image-slider.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageSlider; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImageSlider = (function () {
    function ImageSlider() {
        this.index = 0;
        this.anime = 'in';
    }
    ImageSlider.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            if (_this.called) {
                clearInterval(2000);
                _this.called = false;
            }
            else {
                _this.right();
            }
        }, this.timer);
    };
    ImageSlider.prototype.right = function () {
        if (this.index + 1 >= this.slides.length) {
            this.index = 0;
        }
        else {
            this.index += 1;
        }
    };
    ImageSlider.prototype.left = function () {
        if (this.index - 1 < 0) {
            this.index = this.slides.length - 1;
        }
        else {
            this.index -= 1;
        }
    };
    ImageSlider.prototype.urlmaker = function (url) {
        return "url(" + url + ")";
    };
    return ImageSlider;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ImageSlider.prototype, "slides", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ImageSlider.prototype, "timer", void 0);
ImageSlider = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: "image-slider",
        template: __webpack_require__("./src/app/image-slider/image-slider.component.html"),
        styles: [__webpack_require__("./src/app/image-slider/image-slider.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('inout', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: '1',
                    'z-index': '2'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: '0.5'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)' }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('500ms ease-in')]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('* => void', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('500ms ease-in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(100%)' }))])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('rtl', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(100%)', opacity: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('500ms 650ms ease-in')])
            ]),
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* trigger */])('ltr', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* state */])('in', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                    opacity: 1,
                    transform: 'translateX(0)'
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* transition */])('void => *', [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({ transform: 'translateX(-100%)', opacity: 0 }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* animate */])('500ms 650ms ease-in')])
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], ImageSlider);

//# sourceMappingURL=image-slider.component.js.map

/***/ }),

/***/ "./src/app/mail-list/mail-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mail {\r\n    background: #0A2463;\r\n    min-height: 6rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    color: white;\r\n    min-width: 100%;\r\n}\r\n\r\n.mail h4{\r\n    text-align: center;\r\n    font-family: Montserrat,'Helvetica Neue',Helvetica,Arial,sans-serif;\r\n    margin-top: 1.56rem;\r\n    margin-bottom: 0;\r\n    text-transform: none;\r\n}\r\n\r\n.mail p {\r\n    text-align: center;\r\n}\r\n\r\ninput {\r\n    height: 2rem;\r\n    /*border-radius: .25rem;*/\r\n    border: 0;\r\n    margin-right: .4rem;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n::-moz-placeholder{\r\n    padding-left: 0.5rem;\r\n} \r\n\r\n::-ms-input-placeholder{\r\n    padding-left: 0.5rem;\r\n} \r\n\r\n:-moz-placeholder{\r\n    padding-left: 0.5rem;\r\n}\r\n\r\nbutton {\r\n    border: 1px solid transparent;\r\n    color: #fff;\r\n    background-color: #00A7E1;\r\n    border: 0;\r\n    border-color: #eb9316;\r\n    /*border-radius: .25rem;*/\r\n    height: 2.2rem;\r\n}\r\n\r\nbutton:hover {\r\n    cursor: pointer;\r\n    -webkit-transform: scale(1.05);\r\n            transform: scale(1.05);\r\n}\r\n\r\n.inline-input {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    width: 100%;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    min-height: 4rem;\r\n}\r\n\r\n\r\n ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/mail-list/mail-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"mail\">\n  <h4>Want to know what we are up to?</h4>\n  <p>Join our mailing list, we don't send spam emails.</p>\n  <div class=\"inline-input\">\n      <input type=\"text\" placeholder=\"email\"> \n      <button>Subscribe</button>\n  </div>\n\n</section>\n "

/***/ }),

/***/ "./src/app/mail-list/mail-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MailListComponent = (function () {
    function MailListComponent() {
    }
    MailListComponent.prototype.ngOnInit = function () {
    };
    return MailListComponent;
}());
MailListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-mail-list',
        template: __webpack_require__("./src/app/mail-list/mail-list.component.html"),
        styles: [__webpack_require__("./src/app/mail-list/mail-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MailListComponent);

//# sourceMappingURL=mail-list.component.js.map

/***/ }),

/***/ "./src/app/pipes/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SafePipe.prototype.transform = function (value, type) {
        switch (type) {
            case 'html':
                return this._sanitizer.bypassSecurityTrustHtml(value);
            case 'style':
                return this._sanitizer.bypassSecurityTrustStyle(value);
            case 'script':
                return this._sanitizer.bypassSecurityTrustScript(value);
            case 'url':
                return this._sanitizer.bypassSecurityTrustUrl(value);
            case 'resourceUrl':
                return this._sanitizer.bypassSecurityTrustResourceUrl(value);
            default:
                throw new Error("Unable to bypass security for invalid type: " + type);
        }
    };
    return SafePipe;
}());
SafePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Pipe */])({
        name: 'safe'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _a || Object])
], SafePipe);

var _a;
//# sourceMappingURL=safe.pipe.js.map

/***/ }),

/***/ "./src/app/services/services.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".services { \r\n    background: white; /*#343434;*/\r\n    min-height: 100vh;\r\n    width: 100%;\r\n    margin-top: auto;\r\n    -ms-flex-item-align: end;\r\n        align-self: flex-end;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    border-bottom: 1px solid white;\r\n    color: #282424;\r\n    border-bottom: 1px solid rgba(0,0,0,0.08);;\r\n}\r\n\r\n.services h3 {\r\n    text-align: center;\r\n    margin: 0.6rem;\r\n}\r\n\r\n.services .entry{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-width: 100%;\r\n    height: auto;\r\n    -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n            flex: 1;\r\n    margin: 0;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -ms-flex-pack: distribute;\r\n        justify-content: space-around;\r\n}\r\n\r\n.entry .item{\r\n    margin: 1.3rem;\r\n    width: calc(33.33% - 2.6rem);\r\n    min-height: 300px;\r\n    min-width: 310px;\r\n}\r\n\r\n.item img{\r\n    width: 100%;\r\n    min-height: 11.5rem;\r\n}\r\n\r\n@media all and (max-width: 1088px) {\r\n    .entry .item{\r\n        margin: 1.3rem;\r\n        width: calc(42% - 2.6rem);\r\n    }\r\n}\r\n\r\n@media all and (max-width: 710px) {\r\n    .entry .item{\r\n        -webkit-box-flex: 1;\r\n            -ms-flex: 1;\r\n                flex: 1;\r\n        margin: 1.3rem;\r\n        width: calc(42% - 2.6rem);\r\n    }\r\n}\r\n\r\n.item h4 {\r\n    margin: 3px;\r\n}\r\n\r\n.item p {\r\n    margin: 0.4rem;\r\n    color: #666;\r\n}\r\n\r\n.item button {\r\n    border: 1px solid transparent;\r\n    color: #fff;\r\n    background-color: #ec971f;\r\n    border-color: #eb9316;\r\n    border-radius: .25rem;\r\n    float: right;\r\n    padding: 0.4rem;\r\n}\r\n\r\n.item button:hover {\r\n    -webkit-transform: scale(1.2);\r\n            transform: scale(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/services/services.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"services\">\n  <h3>Services</h3>\n  <div class=\"entry\">\n\n    <div class=\"item\" *ngFor=\"let service of services\">\n       <img src=\"{{service.img}}\">\n       <h4>{{service.name}}</h4>\n       <p>{{service.headline}}</p>\n       <button (click)=\"select(service)\">read more</button>\n    </div>\n  </div>\n  <view-service [service]=\"selected\" *ngIf=\"selected\" (close)=\"select($event)\"></view-service>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/services/services.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent.prototype.select = function (e) {
        this.selected = e;
    };
    return ServicesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ServicesComponent.prototype, "services", void 0);
ServicesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-services',
        template: __webpack_require__("./src/app/services/services.component.html"),
        styles: [__webpack_require__("./src/app/services/services.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ServicesComponent);

//# sourceMappingURL=services.component.js.map

/***/ }),

/***/ "./src/app/services/view-service/view-service.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".service-view {\r\n    position: fixed;\r\n    z-index: 1000;\r\n    left: 0;\r\n    top: 60px;\r\n    height: 100% ;\r\n    width: 100%;\r\n    max-width: 100vw;\r\n    background: white;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    overflow-y: scroll;\r\n    margin-bottom: 2.5rem;\r\n}\r\n\r\n.close {\r\n    position: absolute;\r\n    right: 0.75rem;\r\n    top: 0.75rem;\r\n    height: 1rem;\r\n    width: 1rem;\r\n    z-index: 70;\r\n}\r\n\r\n.close:hover {\r\n    color: white;\r\n}\r\n\r\n\r\n.service-view img {\r\n    max-height: 23rem;\r\n    width: 100%;\r\n}\r\n\r\n.service-view .content{\r\n    width: calc(100% - 1.4rem);\r\n    height: auto;\r\n    margin: 0.7rem;\r\n    text-align: justify;\r\n    padding-bottom: 2rem;\r\n}\r\n\r\n.service-view h3 {\r\n    margin: 0;\r\n}\r\n\r\nbutton {\r\n    border: 1px solid transparent;\r\n    color: #fff;\r\n    background-color: #ec971f;\r\n    border-color: #eb9316;\r\n    border-radius: .25rem;\r\n    float: right;\r\n    padding: 0.4rem;\r\n    margin-bottom: 2rem;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/services/view-service/view-service.component.html":
/***/ (function(module, exports) {

module.exports = "<Section class=\"service-view\">\r\n    <i class=\"fa fa-times close\" aria-hidden=\"true\" (click)=\"closewindow()\"></i>\r\n\r\n    <img class=\"service-img\" src=\"{{service.img}}\">\r\n    <div class=\"content\">\r\n        <h3>{{service.name}}</h3> \r\n        <div [innerHTML]=\"service.content\"></div>\r\n        <button (click)=\"closewindow()\">close</button>\r\n    </div>\r\n</Section>"

/***/ }),

/***/ "./src/app/services/view-service/view-service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewServiceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewServiceComponent = (function () {
    function ViewServiceComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* EventEmitter */]();
    }
    ViewServiceComponent.prototype.ngOnInit = function () {
    };
    ViewServiceComponent.prototype.closewindow = function () {
        this.close.emit(null);
    };
    return ViewServiceComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])(),
    __metadata("design:type", Object)
], ViewServiceComponent.prototype, "close", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], ViewServiceComponent.prototype, "service", void 0);
ViewServiceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'view-service',
        template: __webpack_require__("./src/app/services/view-service/view-service.component.html"),
        styles: [__webpack_require__("./src/app/services/view-service/view-service.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ViewServiceComponent);

//# sourceMappingURL=view-service.component.js.map

/***/ }),

/***/ "./src/app/team/team.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".team {\r\n    min-height: 100vh;\r\n    background: #f8f9fa; /* rgba(0,0,0,0.08);*/\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-width: 100%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -ms-flex-wrap: wrap;\r\n        flex-wrap: wrap;\r\n    box-shadow: 0px -1px 12px -1px rgba(0,0,0,0.46);\r\n}\r\n\r\n.team h3 {\r\n    text-align: center;\r\n    margin: 0.6rem;\r\n    min-width: 100%;\r\n}\r\n\r\n.team .item{\r\n    min-width: calc(20rem - 2.8rem);\r\n    min-height: 25rem;\r\n    margin: 1.4rem;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n}\r\n\r\n.item img{\r\n    width: 17.2rem;\r\n    height: 17.2rem;\r\n    border: 7px solid #fff;\r\n    border-radius: 100%;\r\n}\r\n\r\n.item h4 {\r\n    font-family: Montserrat,'Helvetica Neue',Helvetica,Arial,sans-serif;\r\n    margin-top: 1.56rem;\r\n    margin-bottom: 0;\r\n    text-transform: none;\r\n}\r\n\r\n.item p {\r\n    color: #868e96!important;\r\n    line-height: 1.75;\r\n    margin-top: 0;\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.fa-facebook-square{\r\n    color: #3b5998;\r\n}\r\n\r\n.fa-twitter-square{\r\n    color: #55acee;\r\n}\r\n\r\n.fa-linkedin-square{\r\n    color: #0976b4;\r\n}\r\n\r\n.social {\r\n    display: inline-block;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/team/team.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"team\">\n  <h3>Team</h3>\n  <div *ngFor=\"let entry of team\" class=\"item\">\n    <img src=\"{{entry.img}}\">\n    <h4>{{entry.name}}</h4>\n    <p>{{entry.role}}</p>\n    <p class=\"social\"> \n        <a *ngIf=\"entry.facebook\" class=\"fa fa-2x fa-facebook-square\" aria-hidden=\"true\" href=\"{{formatlink(entry.facebook)}}\" target=\"_blank\"></a>\n        <a  *ngIf=\"entry.twitter\" class=\"fa fa-2x fa-twitter-square\" aria-hidden=\"true\" href=\"{{formatlink(entry.twitter)}}\"  target=\"_blank\"></a>\n        <a  *ngIf=\"entry.linkedin\" class=\"fa fa-2x fa-linkedin-square\" aria-hidden=\"true\" href=\"{{formatlink(entry.linkedin)}}\"  target=\"_blank\"></a>\n    </p>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/team/team.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamComponent = (function () {
    function TeamComponent() {
    }
    TeamComponent.prototype.formatlink = function (link) {
        var e = link.toLowerCase();
        if (e[0] === 'h' && e[1] === 't') {
            return e;
        }
        else {
            return "http://" + e;
        }
    };
    return TeamComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* Input */])(),
    __metadata("design:type", Object)
], TeamComponent.prototype, "team", void 0);
TeamComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Component */])({
        selector: 'app-team',
        template: __webpack_require__("./src/app/team/team.component.html"),
        styles: [__webpack_require__("./src/app/team/team.component.css")]
    }),
    __metadata("design:paramtypes", [])
], TeamComponent);

//# sourceMappingURL=team.component.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map