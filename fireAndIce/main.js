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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".head{\r\n  /* background-color: gray; */\r\n  padding: 1em;  \r\n}\r\n\r\nh1{\r\n  text-align: center;\r\n  color:black;\r\n  text-shadow: 2px 2px 4px #000000;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<body>\n<div class=\"head\">\n<h1>Game of Thrones</h1>\n</div>\n\n<router-outlet></router-outlet>\n\n</body>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fireAndIce';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./got-http.service */ "./src/app/got-http.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./book-view/book-view.component */ "./src/app/book-view/book-view.component.ts");
/* harmony import */ var _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./character-view/character-view.component */ "./src/app/character-view/character-view.component.ts");
/* harmony import */ var _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./house-view/house-view.component */ "./src/app/house-view/house-view.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_10__["BookViewComponent"],
                _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_11__["CharacterViewComponent"],
                _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_12__["HouseViewComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: 'characters/:id', component: _character_view_character_view_component__WEBPACK_IMPORTED_MODULE_11__["CharacterViewComponent"] },
                    { path: 'houses/:id', component: _house_view_house_view_component__WEBPACK_IMPORTED_MODULE_12__["HouseViewComponent"] },
                    { path: 'books/:id', component: _book_view_book_view_component__WEBPACK_IMPORTED_MODULE_10__["BookViewComponent"] },
                    { path: '**', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"] }
                ])
            ],
            providers: [_got_http_service__WEBPACK_IMPORTED_MODULE_7__["GotHttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-view/book-view.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-view/book-view.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\r\n    border-color: black;\r\n    border-radius: 5px;\r\n    background-color: turquoise;\r\n} \r\n\r\n.list-group-item{\r\n    padding: 3rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/book-view/book-view.component.html":
/*!****************************************************!*\
  !*** ./src/app/book-view/book-view.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" style=\"text-align: center; padding: 3rem\" *ngIf=\"currentBook\">\n        <ul class=\"list-group list-group-flush\" >\n          <li class=\"list-group-item\" style=\"word-wrap: break-word\"><b>Url : </b>{{currentBook.url}}</li>\n          <li class=\"list-group-item\"><b>Name : </b>{{currentBook.name}}</li>\n          <li class=\"list-group-item\"><b>ISBN : </b>{{currentBook.isbn}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.authors!=''\"><b>Authors : </b>\n          <span *ngFor=\"let author of currentBook.authors;let first=first;let last=last\">{{author}}{{last ? '' : ', '}}</span></li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.numberOfPages.length!=0\"><b>Pages : </b>{{currentBook.numberOfPages}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.publisher.length!=0\"><b>Publisher : </b>{{currentBook.publisher}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.country.length!=0\"><b>Country : </b>{{currentBook.country}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.mediaType.length!=0\"><b>MediaType : </b>{{currentBook.mediaType}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.released.length!=0\"><b>Released : </b>{{currentBook.released|date}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.characters!=''\"><div><b>Characters : </b></div>\n          <span style=\"word-wrap: break-word\" *ngFor=\"let character of currentBook.characters;let first=first;let last=last\"><a [routerLink]=\"['/characters',character.split('characters/').pop()]\">{{character}}</a>{{last ? '' : ', '}}</span></li>\n          <li class=\"list-group-item\" *ngIf=\"currentBook.povCharacters!=''\"><div><b>Pov Characters : </b></div>\n            <span style=\"word-wrap: break-word\" *ngFor=\"let pov of currentBook.povCharacters;let first=first;let last=last\"><a [routerLink]=\"['/characters',pov.split('characters/').pop()]\">{{pov}}</a>{{last ? '' : ', '}}</span></li>\n          <li class=\"list-group-item\"><a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg active\" role=\"button\" aria-pressed=\"true\" style=\"height: 4rem;padding: 8px\">Back</a></li>\n        </ul>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/book-view/book-view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-view/book-view.component.ts ***!
  \**************************************************/
/*! exports provided: BookViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookViewComponent", function() { return BookViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookViewComponent = /** @class */ (function () {
    function BookViewComponent(_route, router, gotService) {
        this._route = _route;
        this.router = router;
        this.gotService = gotService;
        console.log('Book view constructor called');
    }
    BookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Book view component onit called');
        var id = this._route.snapshot.paramMap.get('id');
        this.gotService.singleBookInfo(id).subscribe(function (data) {
            //console.log(data);
            _this.currentBook = data;
            console.log('CurrentHouseInfo');
            console.log(_this.currentBook);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    BookViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-view',
            template: __webpack_require__(/*! ./book-view.component.html */ "./src/app/book-view/book-view.component.html"),
            styles: [__webpack_require__(/*! ./book-view.component.css */ "./src/app/book-view/book-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _got_http_service__WEBPACK_IMPORTED_MODULE_2__["GotHttpService"]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "./src/app/character-view/character-view.component.css":
/*!*************************************************************!*\
  !*** ./src/app/character-view/character-view.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\r\n    border-color: black;\r\n    border-radius: 5px;\r\n    background-color:whitesmoke;\r\n} \r\n\r\n.list-group-item{\r\n    padding: 3rem;\r\n} \r\n\r\na.link{\r\n    color:black;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/character-view/character-view.component.html":
/*!**************************************************************!*\
  !*** ./src/app/character-view/character-view.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mb-3\" style=\"text-align: center; padding: 3rem\" *ngIf=\"currentCharacter\">\n        <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\" style=\"word-wrap: break-word;\"><b>Url : </b>{{currentCharacter.url}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentCharacter.name.length!=0\"><b>Name : </b>{{currentCharacter.name}}</li>\n          <li class=\"list-group-item\"><b>Gender : </b>{{currentCharacter.gender}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentCharacter.culture.length!=0\"><b>Culture : </b>{{currentCharacter.culture}}</li>\n          <li class=\"list-group-item\" *ngIf=\"currentCharacter.aliases!=''\"><b>Aliases : </b>\n          <span style=\"word-wrap: break-word\" *ngFor=\"let alias of currentCharacter.aliases;let first=first;let last=last\">{{alias}}{{last ? '' : ', '}}</span></li>\n          <li class=\"list-group-item\" *ngIf=\"currentCharacter.books!=''\"><div><b>Books : </b></div>\n            <span style=\"word-wrap: break-word\" *ngFor=\"let book of currentCharacter.books;let first=first;let last=last\"><a [routerLink]=\"['/books',book.split('books/').pop()]\">{{book}}</a>{{last ? '' : ', '}}</span></li>\n            <li class=\"list-group-item\"><a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg active\" role=\"button\" aria-pressed=\"true\" style=\"height: 4rem;padding: 8px\">Back</a></li>  \n        </ul>\n    </div>\n\n    \n    \n"

/***/ }),

/***/ "./src/app/character-view/character-view.component.ts":
/*!************************************************************!*\
  !*** ./src/app/character-view/character-view.component.ts ***!
  \************************************************************/
/*! exports provided: CharacterViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterViewComponent", function() { return CharacterViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterViewComponent = /** @class */ (function () {
    function CharacterViewComponent(_route, router, gotService) {
        this._route = _route;
        this.router = router;
        this.gotService = gotService;
        console.log('Character View Constructor called');
    }
    CharacterViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('Character view component onit called');
        var id = this._route.snapshot.paramMap.get('id');
        this.gotService.singleCharacterInfo(id).subscribe(function (data) {
            //console.log(data);
            _this.currentCharacter = data;
            console.log('CurrentCharacter');
            console.log(_this.currentCharacter);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    CharacterViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-character-view',
            template: __webpack_require__(/*! ./character-view.component.html */ "./src/app/character-view/character-view.component.html"),
            styles: [__webpack_require__(/*! ./character-view.component.css */ "./src/app/character-view/character-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _got_http_service__WEBPACK_IMPORTED_MODULE_2__["GotHttpService"]])
    ], CharacterViewComponent);
    return CharacterViewComponent;
}());



/***/ }),

/***/ "./src/app/got-http.service.ts":
/*!*************************************!*\
  !*** ./src/app/got-http.service.ts ***!
  \*************************************/
/*! exports provided: GotHttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GotHttpService", function() { return GotHttpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import "rxjs/Rx";
var GotHttpService = /** @class */ (function () {
    function GotHttpService(_http) {
        this._http = _http;
        this.characters_url = 'https://www.anapioficeandfire.com/api/characters';
        this.books_url = 'https://www.anapioficeandfire.com/api/books';
        this.houses_url = 'https://anapioficeandfire.com/api/houses';
    }
    GotHttpService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    GotHttpService.prototype.getAllCharacters = function () {
        var myResponse = this._http.get(this.characters_url);
        console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is', myResponse);
        return myResponse;
    };
    GotHttpService.prototype.getAllBooks = function () {
        var myResponse = this._http.get(this.books_url);
        console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is', myResponse);
        return myResponse;
    };
    GotHttpService.prototype.singleHouseInfo = function (id) {
        var myResponse = this._http.get(this.houses_url + '/' + id);
        console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is', myResponse);
        return myResponse;
    };
    GotHttpService.prototype.singleCharacterInfo = function (id) {
        var myResponse = this._http.get(this.characters_url + '/' + id);
        console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is', myResponse);
        return myResponse;
    };
    GotHttpService.prototype.singleBookInfo = function (id) {
        var myResponse = this._http.get(this.books_url + '/' + id);
        console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is', myResponse);
        return myResponse;
    };
    GotHttpService.prototype.getAllHouses = function () {
        var myResponse = this._http.get(this.houses_url);
        console.log('Hiiiiiiiiiiiiiiiiiiiiiiiiiiii My response is', myResponse);
        return myResponse;
    };
    GotHttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GotHttpService);
    return GotHttpService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center; padding-bottom: 2rem\" *ngIf=\"allItems\">\n    <div *ngFor=\"let item of allItems\" class=\"col-sm-6 col-md-4\">\n      <div *ngIf=\"item.aliases\">\n        <div class=\"card text-white bg-info mb-3\" style=\"height: 30rem;border-radius: 25px\">\n            <div class=\"card-body\">\n              <div style=\"height: 8rem\">\n              <h3 class=\"card-title\" style=\"font-weight: bold;padding: 10px;\">{{item.name}}</h3>\n              </div>\n              <div style=\"height: 7rem\">\n              <h4 class=\"card-title\">Aliases : {{item.aliases}}</h4>\n              </div>\n              <div style=\"height: 7rem\">\n              <h4 class=\"card-title\">Gender : {{item.gender}}</h4>\n              </div>\n              <div style=\"height: 8rem\">\n              <a [routerLink]=\"['/characters',item.url.slice(49)]\" class=\"btn btn-success btn-lg active\" role=\"button\" aria-pressed=\"true\" style=\"height: 4rem;padding: 8px\">More</a>\n              </div>\n            </div>\n        </div>\n      </div>\n        <div *ngIf=\"item.region\">\n          <div class=\"card text-white bg-primary mb-3\" style=\"height: 30rem;border-radius: 25px\">\n              <div class=\"card-body\">\n                <div style=\"height: 8rem\">\n                <h3 class=\"card-title\" style=\"font-weight: bold;padding: 10px;\">{{item.name}}</h3>\n                </div>\n                <div style=\"height: 7rem\">\n                <h4 class=\"card-title\">Region : {{item.region}}</h4>\n                </div>\n                <div style=\"height: 7rem\">\n                <h4 class=\"card-title\">Coat : {{item.coatOfArms}}</h4>\n                </div>\n                <div style=\"height: 8rem\">\n                <a [routerLink]=\"['/houses',item.url.slice(41)]\" class=\"btn btn-success btn-lg active\" role=\"button\" aria-pressed=\"true\" style=\"height: 4rem;padding: 8px\">More</a>\n                </div>\n              </div>\n          </div>\n        </div>\n          <div *ngIf=\"item.numberOfPages\">\n            <div class=\"card text-white mb-3\" style=\"height: 30rem; background-color:turquoise;border-radius: 25px\">\n                <div class=\"card-body\">\n                  <div style=\"height: 10rem\">\n                  <h3 class=\"card-title\" style=\"font-weight: bold;padding: 10px;\">{{item.name}}</h3>\n                  <h4 class=\"card-title\">({{item.mediaType}})</h4>\n                  </div>\n                  <div style=\"height: 6rem\">\n                  <h4 class=\"card-title\">Pages : {{item.numberOfPages}}</h4>\n                  </div>\n                  <div style=\"height: 6rem\">\n                  <h4 class=\"card-title\">Released : {{item.released|date}}</h4>\n                  </div>\n                  <div style=\"height: 8rem\">\n                  <a [routerLink]=\"['/books',item.url.slice(44)]\" class=\"btn btn-success btn-lg active\" role=\"button\" aria-pressed=\"true\" style=\"height: 4rem;padding: 8px\">More</a>\n                  </div>\n                </div>\n            </div>\n          </div>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(gotHttpService) {
        this.gotHttpService = gotHttpService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.allCharacters = this.gotHttpService.getAllCharacters().subscribe(function (data) {
            _this.allCharacters = data;
            console.log('From Characters--->');
            console.log(_this.allCharacters);
            _this.allBooks = _this.gotHttpService.getAllBooks().subscribe(function (data1) {
                _this.allBooks = data1;
                console.log('From Books---->');
                console.log(_this.allBooks);
                //console.log(error.errorMessage);
                // }
                _this.allHouses = _this.gotHttpService.getAllHouses().subscribe(function (data2) {
                    _this.allHouses = data2;
                    console.log('From Houses---->');
                    console.log(_this.allHouses);
                    _this.allItems = _this.allBooks.concat(_this.allCharacters, _this.allHouses);
                    // console.log('All Items...........>')
                    // console.log(this.allItems);
                    for (var i = 0; i < _this.allItems.length; i++) {
                        if (_this.allItems[i].name == '') {
                            _this.allItems[i].name = 'N/A';
                        }
                        if (_this.allItems[i].coatOfArms == "") {
                            _this.allItems[i].coatOfArms = 'N/A';
                        }
                    }
                    _this.allItems.sort(function (a, b) { return a.name.localeCompare(b.name); });
                    console.log(_this.allItems);
                }, function (error2) {
                    console.log('house service terminated');
                });
            }, function (error1) {
                console.log('book service terminated');
            });
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_got_http_service__WEBPACK_IMPORTED_MODULE_1__["GotHttpService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/house-view/house-view.component.css":
/*!*****************************************************!*\
  !*** ./src/app/house-view/house-view.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".list-group-item{\r\n    border-color: black;\r\n    border-width: 1px;\r\n    border-radius: 5px;\r\n    background-color: #ebebe0;\r\n    padding: 15px;\r\n}"

/***/ }),

/***/ "./src/app/house-view/house-view.component.html":
/*!******************************************************!*\
  !*** ./src/app/house-view/house-view.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" style=\"width: 100%;text-align: center;padding: 5rem;\" *ngIf=\"currentHouse\">\n    <ul class=\"list-group list-group-flush\">\n        <li class=\"list-group-item\" style=\"word-wrap: break-word\"><b>Url : </b>{{currentHouse.url}}</li>\n      <li class=\"list-group-item\"><b>Name : </b>{{currentHouse.name}}</li>\n      <li class=\"list-group-item\"><b>Region : </b>{{currentHouse.region}}</li>\n      <li class=\"list-group-item\" *ngIf=\"currentHouse.words.length!=0\"><b>Words : </b>{{currentHouse.words}}</li>\n      <li class=\"list-group-item\" *ngIf=\"currentHouse.coatOfArms.length!=0\"><b>CoatofArms : </b>{{currentHouse.coatOfArms}}</li>\n      <li class=\"list-group-item\" style=\"word-wrap: break-word\" *ngIf=\"currentHouse.overlord.length!=0\"><b>Overlord : </b><a [routerLink]=\"['/houses',currentHouse.overlord.split('houses/').pop()]\">{{currentHouse.overlord}}</a></li>\n      <li class=\"list-group-item\"  *ngIf=\"currentHouse.titles!=''\"><b>Titles : </b>\n      <span *ngFor=\"let title of currentHouse.titles;let first=first;let last=last\">{{title}}{{last ? '' : ', '}}</span></li>\n      <li class=\"list-group-item\" *ngIf=\"currentHouse.swornMembers!=''\"><div><b>Sworn Members : </b></div>\n        <span *ngFor=\"let member of currentHouse.swornMembers;let first=first;let last=last\"><a [routerLink]=\"['/characters',member.split('characters/').pop()]\">{{member}}</a>{{last ? '' : ', '}}</span></li>\n      <li class=\"list-group-item\"><a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg active\" role=\"button\" aria-pressed=\"true\" style=\"height: 4rem;padding: 8px\">Back</a></li>\n    </ul>\n</div>\n\n"

/***/ }),

/***/ "./src/app/house-view/house-view.component.ts":
/*!****************************************************!*\
  !*** ./src/app/house-view/house-view.component.ts ***!
  \****************************************************/
/*! exports provided: HouseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HouseViewComponent", function() { return HouseViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _got_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../got-http.service */ "./src/app/got-http.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HouseViewComponent = /** @class */ (function () {
    function HouseViewComponent(_route, router, gotService) {
        this._route = _route;
        this.router = router;
        this.gotService = gotService;
        console.log('House view constructor called');
    }
    HouseViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('House view component onit called');
        var id = this._route.snapshot.paramMap.get('id');
        this.gotService.singleHouseInfo(id).subscribe(function (data) {
            //console.log(data);
            _this.currentHouse = data;
            console.log('CurrentHouseInfo');
            console.log(_this.currentHouse);
        }, function (error) {
            console.log(error.errorMessage);
        });
    };
    HouseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-house-view',
            template: __webpack_require__(/*! ./house-view.component.html */ "./src/app/house-view/house-view.component.html"),
            styles: [__webpack_require__(/*! ./house-view.component.css */ "./src/app/house-view/house-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _got_http_service__WEBPACK_IMPORTED_MODULE_2__["GotHttpService"]])
    ], HouseViewComponent);
    return HouseViewComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    color: #f44336;\r\n}"

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n    <h1>The content you are looking for was not found. Please try again !</h1>\n    <div style=\"text-align: center\"><a [routerLink]=\"['/home']\" class=\"btn btn-primary btn-lg active\" role=\"button\" aria-pressed=\"true\" style=\"height: 4rem;padding: 8px\">Go To Home Page</a></div>\n</div>\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Arko roy choudhury\Desktop\Shiladitya_updated\Assignments\Assignment8 - Basic Angular\fireAndIce\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map