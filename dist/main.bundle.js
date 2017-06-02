webpackJsonp([2,5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(185),
        styles: [__webpack_require__(165)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__frota_cadastro_cadastro_component__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modal_modal_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lista_frota_lista_frota_component__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_toasty__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_mask__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_currency_mask__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__resources_paginacao_paginacao_component__ = __webpack_require__(106);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__frota_cadastro_cadastro_component__["a" /* CadastroComponent */],
            __WEBPACK_IMPORTED_MODULE_8__modal_modal_component__["a" /* ModalComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_14__resources_paginacao_paginacao_component__["a" /* PaginacaoComponent */],
            __WEBPACK_IMPORTED_MODULE_10__lista_frota_lista_frota_component__["a" /* ListaFrotaComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_11_ng2_toasty__["a" /* ToastyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_12_ng2_mask__["a" /* Ng2MaskModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_currency_mask__["CurrencyMaskModule"],
            __WEBPACK_IMPORTED_MODULE_5_angular_2_local_storage__["LocalStorageModule"].withConfig({
                prefix: 'frotas',
                storageType: 'localStorage'
            })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_6__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CadastroService = (function () {
    function CadastroService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    CadastroService.prototype.addCarro = function (carro) {
        if (typeof carro !== 'object') {
            console.error('carro is not instanceof Carro', carro);
            return;
        }
        var frota = this.localStorageService.get('frota') || [];
        var edit = false;
        var novaFrota = frota.map(function (carr) {
            if (carr.placa.toUpperCase() === carro.placa.toUpperCase()) {
                edit = true;
                return carro;
            }
            return carr;
        });
        if (edit) {
            this.localStorageService.set('frota', novaFrota);
        }
        else {
            frota.push(carro);
            this.localStorageService.set('frota', frota);
        }
    };
    CadastroService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(error);
    };
    return CadastroService;
}());
CadastroService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular_2_local_storage__["LocalStorageService"]) === "function" && _a || Object])
], CadastroService);

var _a;
//# sourceMappingURL=cadastro.service.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__frota_cadastro_cadastro_component__ = __webpack_require__(62);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListaFrotaComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListaFrotaComponent = (function () {
    function ListaFrotaComponent(service) {
        this.service = service;
        this.frota = [];
        this.carros = {};
        this.checkedAll = false;
        this.selecteds = [];
        /**
         * Paginação
         */
        this.currentPage = 1;
        this.totalItems = 0;
        this.maxSize = 5;
        this.atualizaFrota();
    }
    Object.defineProperty(ListaFrotaComponent.prototype, "modal", {
        get: function () { return this._modal; },
        set: function (m) {
            this._modal = m;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Atualiza a frota buscando os dados salvos.
     */
    ListaFrotaComponent.prototype.atualizaFrota = function () {
        this.frota = this.service.getFrota();
        this.totalItems = this.frota.length;
    };
    /**
     * Seleciona todos os checkboxes da tabela.
     */
    ListaFrotaComponent.prototype.checkAll = function (e) {
        var _this = this;
        Object.keys(this.carros).map(function (k) { return _this.carros[k].patchValue(e.target.checked); });
        this.checkedAll = e.target.checked;
        this.setSelecteds();
    };
    /**
     * seleciona o control referente a posição (index).
     * caso não exista cria uma instância.
     * @param idx
     * @returns {FormControl}
     */
    ListaFrotaComponent.prototype.control = function (placa) {
        var _this = this;
        if (!placa)
            return;
        var ctrl;
        if (!this.carros[placa]) {
            ctrl = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormControl"](false);
            ctrl.valueChanges.subscribe(function (v) { return _this.selectItem(); });
            this.carros[placa] = ctrl;
        }
        else {
            ctrl = this.carros[placa];
        }
        return ctrl;
    };
    ListaFrotaComponent.prototype.selectItem = function () {
        if (this.checkedAll)
            this.checkedAll = false;
        this.setSelecteds();
    };
    ListaFrotaComponent.prototype.setSelecteds = function () {
        var _this = this;
        this.selecteds = Object.keys(this.carros).filter(function (c) { return (_this.carros[c].value === true); });
        this.selecteds = this.selecteds.map(function (s) { return s.toUpperCase(); });
    };
    ListaFrotaComponent.prototype.setPage = function (pageNo) {
        this.currentPage = pageNo;
    };
    ;
    ListaFrotaComponent.prototype.remove = function () {
        var _this = this;
        if (confirm('deseja remover o(s) item(ns) selecionado(s)?')) {
            var frota = Object.assign(this.frota);
            var novaFrota = frota.filter(function (carro) { return (_this.selecteds.indexOf(carro.placa.toUpperCase()) === -1); });
            this.service.setFrota(novaFrota);
            this.atualizaFrota();
            this.selecteds.map(function (placa) { return delete _this.carros[placa]; });
            this.selecteds = [];
            this.checkedAll = false;
        }
    };
    ListaFrotaComponent.prototype.edit = function () {
        var _this = this;
        this.modal.show();
        // const carro = this.carros[this.selecteds[0]];
        var arr = this.frota.filter(function (carro) { return carro.placa.toUpperCase() === _this.selecteds[0]; });
        var carro = arr[0];
        this.cadastroComponent.form.patchValue(carro);
    };
    ListaFrotaComponent.prototype.ngOnInit = function () {
    };
    return ListaFrotaComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('cadastro'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__frota_cadastro_cadastro_component__["a" /* CadastroComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__frota_cadastro_cadastro_component__["a" /* CadastroComponent */]) === "function" && _a || Object)
], ListaFrotaComponent.prototype, "cadastroComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__["a" /* ModalComponent */]) === "function" && _b || Object),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__modal_modal_component__["a" /* ModalComponent */]) === "function" && _c || Object])
], ListaFrotaComponent.prototype, "modal", null);
ListaFrotaComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-lista-frota',
        template: __webpack_require__(187),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _d || Object])
], ListaFrotaComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=lista-frota.component.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-menu',
        template: "\n    <header>\n      <div class=\"container\">\n        <div class=\"topbar row\">\n          <img src=\"../assets/contaazullogo.png\" height=\"19\" width=\"120\" />\n        </div>\n      </div>\n    </header>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginacaoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {NgIf, NgFor, NgClass} from "@angular/common";
var PaginacaoComponent = (function () {
    function PaginacaoComponent(pageChangedNgModel) {
        this.pageChangedNgModel = pageChangedNgModel;
        this.pageChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.pageList = [];
        this.pageChangedNgModel.valueAccessor = this;
    }
    PaginacaoComponent.prototype.ngOnInit = function () {
        this.doPaging();
    };
    PaginacaoComponent.prototype.doPaging = function () {
        this.pageList = [];
        var i, count;
        this.seletedPage = this.currentpage;
        var remaining = this.totalItems % this.pageSize;
        var totalSize = ((this.totalItems - remaining) / this.pageSize) + (remaining === 0 ? 0 : 1);
        for (i = (this.currentpage), count = 0; i <= totalSize && count < this.pageSize; i++, count++) {
            this.pageList.push(i);
        }
        // next validation
        if (i - 1 < totalSize) {
            this.nextItemValid = true;
            this.nextItem = i;
        }
        else {
            this.nextItemValid = false;
        }
        // previous validation
        if ((this.currentpage) > 1) {
            this.previousItemValid = true;
            this.previousItem = (this.currentpage * this.pageSize) - 1;
        }
        else {
            this.previousItemValid = false;
        }
    };
    PaginacaoComponent.prototype.setCurrentPage = function (pageNo) {
        this.currentpage = pageNo;
        this.pageChangedNgModel.viewToModelUpdate(pageNo);
        this.pageChageListner();
    };
    PaginacaoComponent.prototype.firstPage = function () {
        this.currentpage = 1;
        this.pageChangedNgModel.viewToModelUpdate(1);
        this.pageChageListner();
        this.doPaging();
    };
    PaginacaoComponent.prototype.lastPage = function () {
        var totalPages = (this.totalItems / this.pageSize);
        var lastPage = (totalPages) - (totalPages % this.pageSize === 0 ? this.pageSize : totalPages % this.pageSize) + 1;
        this.currentpage = lastPage;
        this.pageChangedNgModel.viewToModelUpdate(lastPage);
        this.pageChageListner();
        this.doPaging();
    };
    PaginacaoComponent.prototype.nextPage = function (pageNo) {
        this.currentpage = pageNo;
        this.pageChangedNgModel.viewToModelUpdate(pageNo);
        this.pageChageListner();
        this.doPaging();
    };
    PaginacaoComponent.prototype.previousPage = function (pageNo) {
        var temp = pageNo - this.pageSize;
        this.currentpage = temp > 0 ? temp : 1;
        this.pageChangedNgModel.viewToModelUpdate(this.currentpage);
        this.pageChageListner();
        this.doPaging();
    };
    PaginacaoComponent.prototype.writeValue = function (value) {
        if (!value && value != '0')
            return;
        this.setValue(value);
    };
    PaginacaoComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    PaginacaoComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    PaginacaoComponent.prototype.setValue = function (currentValue) {
        this.currentpage = currentValue;
        this.doPaging();
    };
    PaginacaoComponent.prototype.pageChageListner = function () {
        this.pageChanged.emit({
            itemsPerPage: this.currentpage
        });
    };
    return PaginacaoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("previous-text"),
    __metadata("design:type", String)
], PaginacaoComponent.prototype, "previousText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("next-text"),
    __metadata("design:type", String)
], PaginacaoComponent.prototype, "nextText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("first-text"),
    __metadata("design:type", String)
], PaginacaoComponent.prototype, "firstText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("last-text"),
    __metadata("design:type", String)
], PaginacaoComponent.prototype, "lastText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("totalItems"),
    __metadata("design:type", Number)
], PaginacaoComponent.prototype, "totalItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("currentPage"),
    __metadata("design:type", Number)
], PaginacaoComponent.prototype, "currentpage", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("maxSize"),
    __metadata("design:type", Number)
], PaginacaoComponent.prototype, "pageSize", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])("boundaryLinks"),
    __metadata("design:type", Boolean)
], PaginacaoComponent.prototype, "boundaryLinks", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])("pageChanged"),
    __metadata("design:type", Object)
], PaginacaoComponent.prototype, "pageChanged", void 0);
PaginacaoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paginacao',
        //  directives: [NgIf, NgFor, NgClass],
        template: "\n    <nav aria-label=\"Page navigation\">\n      <ul class=\"pagination\">\n        <li class=\"page-item\" *ngIf=\"previousItemValid && firstText\" (click)=\"firstPage()\">\n          <a class=\"page-link\" href=\"#\" [innerHTML]=\"firstText\">First</a>\n        </li>\n        <li class=\"page-item\"> \n          <a *ngIf=\"previousItemValid\" class=\"page-link\" (click)=\"previousPage(nextItem)\" aria-label=\"Previous\"> <span aria-hidden=\"true\">&laquo;</span> </a> \n        </li>\n        <li class=\"page-item\" *ngFor=\"let pageNo of pageList\" [ngClass]=\"{'active':currentpage === pageNo}\">\n          <a class=\"page-link\" (click)=\"setCurrentPage(pageNo)\">{{pageNo}}</a>\n        </li>\n        <li class=\"page-item\">\n          <a  *ngIf=\"nextItemValid\" class=\"page-link\" (click)=\"nextPage(nextItem)\" aria-label=\"Next\"> <span aria-hidden=\"true\">&raquo;</span> </a> \n        </li>\n        <li class=\"page-item\">\n          <a *ngIf=\"nextItemValid && lastText\" class=\"page-link\" (click)=\"lastPage()\" [innerHTML]=\"lastText\" >Last</a>\n        </li>\n      </ul>\n    </nav>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgModel"]) === "function" && _a || Object])
], PaginacaoComponent);

var _a;
//# sourceMappingURL=paginacao.component.js.map

/***/ }),

/***/ 107:
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

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 185:
/***/ (function(module, exports) {

module.exports = "<ng2-toasty></ng2-toasty>\n<app-menu></app-menu>\n<div class=\"container\">\n  <app-lista-frota #listaFrota [modal]=\"modal\" [cadastro]=\"cadastro\"></app-lista-frota>\n</div>\n\n<app-modal #modal [sizeBS]=\"'lg'\" [title]=\"'Novo carro'\">\n  <app-cadastro #cadastro class=\"body\" [modal]=\"modal\" (onUpdate)=\"listaFrota?.atualizaFrota()\"></app-cadastro>\n</app-modal>\n"

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" (ngSubmit)=\"salvar()\" [class.submitted]=\"submitted\" novalidate>\n  <div class=\"alert alert-danger\" [hidden]=\"form.valid || !submitted\">\n    <ul>\n      <li [hidden]=\"form.get('marca')?.valid\"><small>Preencha o campo \"Marca\"</small></li>\n      <li [hidden]=\"form.get('modelo')?.valid\"><small>preencha o campo \"Modelo\"</small></li>\n      <li [hidden]=\"form.get('combustivel')?.valid\"><small>preencha o campo \"Combustível\"</small></li>\n      <li [hidden]=\"form.get('placa')?.valid\"><small>preencha o campo \"Placa\" no padrão AAA-0000</small></li>\n      <li [hidden]=\"form.get('valor')?.valid\"><small>preencha o campo \"Valor\"</small></li>\n    </ul>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"marca\">Marca <i class=\"fa fa-asterisk text-danger\"></i></label>\n        <input type=\"text\" id=\"marca\" [formControl]=\"form.get('marca')\" class=\"form-control\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"modelo\">Modelo <i class=\"fa fa-asterisk text-danger\"></i></label>\n        <input type=\"text\" id=\"modelo\" [formControl]=\"form.get('modelo')\" class=\"form-control\">\n      </div>\n    </div>\n\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"combustivel\">Combustível <i class=\"fa fa-asterisk text-danger\"></i></label>\n        <select [formControl]=\"form.get('combustivel')\" id=\"combustivel\" class=\"form-control\">\n          <option value=\"Flex\">Flex</option>\n          <option value=\"Gasolina\">Gasolina</option>\n          <option value=\"Alcool\">Alcool</option>\n          <option value=\"Diesel\">Diesel</option>\n          <option value=\"GNV\">Gás Natural (GNV)</option>\n        </select>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"placa\">Placa <i class=\"fa fa-asterisk text-danger\"></i></label>\n        <input [formControl]=\"form.get('placa')\" type=\"text\" id=\"placa\" class=\"form-control text-uppercase\"\n                mask=\"SSS-0000\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"valor\">Valor <i class=\"fa fa-asterisk text-danger\"></i></label>\n        <input [formControl]=\"form.get('valor')\" type=\"text\" id=\"valor\" class=\"form-control\"\n               currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\" maxlength=\"17\">\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"form-group\">\n        <label for=\"foto\">Foto</label>\n        <input type=\"file\" (change)=\"setImage($event)\" id=\"foto\" class=\"form-control\">\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"footer\">\n    <button class=\"btn btn-default\" type=\"button\" (click)=\"cancelar()\">cancelar</button>\n    <button class=\"btn btn-primary\" type=\"submit\">Salvar</button>\n  </div>\n</form>\n"

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <button *ngIf=\"modal\" class=\"btn btn-success\" (click)=\"modal?.show()\">Novo carro</button>\n      <button class=\"btn btn-primary\" *ngIf=\"selecteds.length && cadastroComponent\" [hidden]=\"selecteds.length > 1\" (click)=\"edit()\">\n        Editar\n      </button>\n      <button class=\"btn btn-danger\" [hidden]=\"!selecteds.length\" (click)=\"remove()\">\n        Remover\n        <span class=\"badge badge-pill badge-danger\">{{ selecteds.length }}</span>\n      </button>\n    </div>\n    <div class=\"col-sm-6\">\n\n    </div>\n  </div>\n</div>\n\n<div class=\"wrap-table\">\n  <table class=\"table table-hover custom-table\">\n    <thead class=\"thead-default\">\n    <tr>\n      <th>\n        <label class=\"custom-check\">\n          <input type=\"checkbox\" [checked]=\"checkedAll\" (change)=\"checkAll($event)\">\n          <i class=\"fa\"></i>\n        </label>\n      </th>\n      <th>Placa</th>\n      <th>Modelo</th>\n      <th>Marca</th>\n      <th>Foto</th>\n      <th>Combustivel</th>\n      <th>Valor</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let carro of frota | slice:((currentPage-1)*maxSize):((currentPage-1)*maxSize+maxSize); let i = index\">\n      <td>\n        <label class=\"custom-check\">\n          <input type=\"checkbox\" [formControl]=\"control(carro.placa)\">\n          <i class=\"fa\"></i>\n        </label>\n      </td>\n      <td class=\"text-uppercase\">{{ carro.placa }}</td>\n      <td>{{ carro.modelo }}</td>\n      <td>{{ carro.marca }}</td>\n      <td>\n        <a *ngIf=\"carro.imagem\" [attr.href]=\"carro.imagem\" target=\"_blank\">imagem</a>\n        <span *ngIf=\"!carro.imagem\">Sem foto</span>\n      </td>\n      <td>{{ carro.combustivel }}</td>\n      <td>{{ carro.valor }}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n<app-paginacao [totalItems]=\"totalItems\" [(ngModel)]=\"currentPage\" [maxSize]=\"maxSize\" [boundaryLinks]=\"true\"\n               previous-text=\"&lsaquo;\" next-text=\"&rsaquo;\"\n               first-text=\"First\" last-text=\"Last\"></app-paginacao>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog\" [ngClass]=\"(sizeBS ? 'modal-'+sizeBS:'')\" role=\"document\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\" *ngIf=\"title\">\n      <h5 class=\"modal-title\">{{title}}</h5>\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ng-content select=\".body\"></ng-content>\n    </div>\n    <div #footer [class.modal-footer]=\"footer?.children?.length > 0\">\n      <ng-content select=\".footer\"></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(90);


/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalComponent = (function () {
    function ModalComponent(el) {
        this.el = el;
        this.options = {};
        this.classModal = true;
        this.classFade = true;
        this.showed = false;
    }
    ModalComponent.prototype.show = function () {
        this.showed = true;
        $(this.el.nativeElement).modal(this.options);
    };
    ModalComponent.prototype.hide = function () {
        this.showed = false;
        $(this.el.nativeElement).modal('hide');
    };
    ModalComponent.prototype.ngOnInit = function () {
        this.options = Object.assign({
            backdrop: 'static'
        }, this.options);
    };
    return ModalComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalComponent.prototype, "sizeBS", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], ModalComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.modal'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "classModal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.fade'),
    __metadata("design:type", Object)
], ModalComponent.prototype, "classFade", void 0);
ModalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal',
        template: __webpack_require__(188),
        styles: [__webpack_require__(167)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], ModalComponent);

var _a;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppService = (function () {
    function AppService(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.mock();
    }
    /**
     * Recupera o valor da frota armazenada no localStorage.
     */
    AppService.prototype.getFrota = function () {
        return this.localStorageService.get('frota');
    };
    /**
     * Monta a carga inicial de dados caso não haja valor no localStorage.
     */
    AppService.prototype.mock = function () {
        var frota = this.localStorageService.get('frota');
        if (!frota) {
            frota = [
                { 'combustivel': 'Flex',
                    'imagem': null,
                    'marca': 'Volkswagem',
                    'modelo': 'Gol',
                    'placa': 'FFF-5498',
                    'valor': '20000'
                },
                { 'combustivel': 'Gasolina',
                    'imagem': null,
                    'marca': 'Volkswagem',
                    'modelo': 'Fox',
                    'placa': 'FOX-4125',
                    'valor': '20000'
                },
                { 'combustivel': 'Alcool',
                    'imagem': 'http://carros.ig.com.br/fotos/2010/290_193/Fusca2_290_193.jpg',
                    'marca': 'Volkswagen',
                    'modelo': 'Fusca',
                    'placa': 'PAI-4121',
                    'valor': '20000'
                }
            ];
            this.localStorageService.set('frota', frota);
        }
    };
    AppService.prototype.setFrota = function (frota) {
        this.localStorageService.set('frota', frota);
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]) === "function" && _b || Object])
], AppService);

var _a, _b;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modal_modal_component__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cadastro_service__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CadastroComponent = (function () {
    function CadastroComponent(service, toasty) {
        this.service = service;
        this.toasty = toasty;
        this.submitted = false;
        this.onUpdate = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._veiculo = {};
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]().group({
            marca: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            modelo: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            combustivel: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required],
            imagem: [null],
            placa: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern('[a-zA-Z]{3}-[0-9]{4}')])],
            valor: [null, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]
        });
    }
    Object.defineProperty(CadastroComponent.prototype, "veiculo", {
        get: function () { return this._veiculo; },
        set: function (veiculo) {
            if (typeof veiculo === 'object') {
                this._veiculo = veiculo;
                this.setValues(veiculo);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CadastroComponent.prototype, "modal", {
        get: function () { return this._modal; },
        set: function (m) {
            this._modal = m;
        },
        enumerable: true,
        configurable: true
    });
    CadastroComponent.prototype.salvar = function () {
        this.submitted = true;
        if (this.form.invalid) {
            console.error('Formulário inválido.');
            this.toasty.error('Preencha os campos obrigatórios.');
            return;
        }
        this.service.addCarro(this.form.value);
        this.onUpdate.emit(true);
        this.submitted = false;
        this.clearForm();
        this.modal.hide();
    };
    CadastroComponent.prototype.cancelar = function () {
        this.clearForm();
        if (this.modal)
            this.modal.hide();
    };
    CadastroComponent.prototype.clearForm = function () {
        this.submitted = false;
        this.form.reset();
        __WEBPACK_IMPORTED_MODULE_5_jquery__('#placa').val('');
    };
    CadastroComponent.prototype.setValues = function (veiculo) {
        var data = {
            marca: veiculo.marca || null,
            modelo: veiculo.veiculo || null,
            ano: veiculo.ano_modelo || null,
            combustivel: veiculo.combustivel || null,
            valor: this.moneyToValue(veiculo.preco) || null
        };
        this.form.patchValue(data);
    };
    CadastroComponent.prototype.moneyToValue = function (v) {
        if (!v)
            return null;
        v = v.replace('R$ ', '');
        v = v.replace('\.', '');
        v = v.replace(',', '.');
        return v;
    };
    CadastroComponent.prototype.setImage = function (e) {
        var file = e.target.files[0];
        this.base64(file);
    };
    CadastroComponent.prototype.base64 = function (file) {
        var self = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            self.form.get('imagem').patchValue(reader.result);
        };
        reader.onerror = function (error) {
            console.error('Error: ', error);
        };
    };
    return CadastroComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _a || Object)
], CadastroComponent.prototype, "onUpdate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_modal_component__["a" /* ModalComponent */]) === "function" && _b || Object),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__modal_modal_component__["a" /* ModalComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modal_modal_component__["a" /* ModalComponent */]) === "function" && _c || Object])
], CadastroComponent.prototype, "modal", null);
CadastroComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-cadastro',
        template: __webpack_require__(186),
        styles: [__webpack_require__(166)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__cadastro_service__["a" /* CadastroService */]]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__cadastro_service__["a" /* CadastroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__cadastro_service__["a" /* CadastroService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _e || Object])
], CadastroComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=cadastro.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 89;


/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(107);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.bundle.js.map