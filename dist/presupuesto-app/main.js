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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-cabecero></app-cabecero>\r\n    \r\n<app-formulario></app-formulario>\r\n    \r\n<div class=\"contenedor limpiarEstilos\">\r\n    <app-ticket></app-ticket>\r\n </div> "

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
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formulario/formulario.component */ "./src/app/formulario/formulario.component.ts");
/* harmony import */ var _cabecero_cabecero_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cabecero/cabecero.component */ "./src/app/cabecero/cabecero.component.ts");
/* harmony import */ var _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ticket/ticket.component */ "./src/app/ticket/ticket.component.ts");
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-scroll-event */ "./node_modules/ngx-scroll-event/index.js");
/* harmony import */ var ngx_scroll_event__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ngx_scroll_event__WEBPACK_IMPORTED_MODULE_8__);









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _formulario_formulario_component__WEBPACK_IMPORTED_MODULE_5__["FormularioComponent"],
                _cabecero_cabecero_component__WEBPACK_IMPORTED_MODULE_6__["CabeceroComponent"],
                _ticket_ticket_component__WEBPACK_IMPORTED_MODULE_7__["TicketComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_scroll_event__WEBPACK_IMPORTED_MODULE_8__["ScrollEventModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cabecero/cabecero.component.css":
/*!*************************************************!*\
  !*** ./src/app/cabecero/cabecero.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-light-trasparent{\r\n    background: rgba(0, 0, 0, .2);\r\n}\r\n.bg-light-trasparent-btn{\r\n    background: rgba(0, 0, 0, 0);\r\n    color: white;\r\n    transition-duration: 1s;\r\n    cursor: pointer;\r\n}\r\n.bg-light-trasparent-btn:hover{\r\n    background: rgba(0, 0, 0, .5);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FiZWNlcm8vY2FiZWNlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtDQUNqQztBQUNEO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsZ0JBQWdCO0NBQ25CO0FBQ0Q7SUFDSSw4QkFBOEI7Q0FDakMiLCJmaWxlIjoic3JjL2FwcC9jYWJlY2Vyby9jYWJlY2Vyby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWxpZ2h0LXRyYXNwYXJlbnR7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIC4yKTtcclxufVxyXG4uYmctbGlnaHQtdHJhc3BhcmVudC1idG57XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJnLWxpZ2h0LXRyYXNwYXJlbnQtYnRuOmhvdmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAuNSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/cabecero/cabecero.component.html":
/*!**************************************************!*\
  !*** ./src/app/cabecero/cabecero.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light-trasparent text-right\" style=\"position:fixed; z-index: 1;\">\r\n    <div class=\"container p-0\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <img id=\"img-menu\" src=\"assets/ITIL_bg.png\" width=\"100px\" height=\"50\" class=\"m-0\" style=\"float:left;\">\r\n            </div>\r\n            <div class=\"col-6\">\r\n                <div class=\"row\" style=\"height:100%;\">\r\n                    <div class=\"col-6 p-0\">\r\n                        <div class=\"pt-2 btn btn-block rounded-0 bg-light-trasparent-btn border-0\" style=\"height:100%;\">Nuevo Ticket</div>\r\n                    </div>\r\n                    <div class=\"col-6 p-0\">\r\n                        <div class=\"pt-2 btn btn-block rounded-0 bg-light-trasparent-btn border-0\" style=\"height:100%;\" data-toggle=\"modal\" data-target=\"#estadisticas\">Estadísticas</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"cabecero\">\r\n    <div class=\"presupuesto mt-4\">\r\n        <div class=\"presupuesto_titulo mt-4\">\r\n            <img src=\"assets/ITIL_bg.png\" width=\"300px\" height=\"auto\" class=\"mt-4\">\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n  <!-- Modal ESTADISTICAS -->\r\n  <div class=\"modal fade\" id=\"estadisticas\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"estadisticasModalLabel\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-xl\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"estadisticasModalLabel\">Estadísticas</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <img src=\"assets/tickets.png\" class=\"m-0 p-0\" style=\"width:100%; height:auto;\">\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>"

/***/ }),

/***/ "./src/app/cabecero/cabecero.component.ts":
/*!************************************************!*\
  !*** ./src/app/cabecero/cabecero.component.ts ***!
  \************************************************/
/*! exports provided: CabeceroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CabeceroComponent", function() { return CabeceroComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CabeceroComponent = /** @class */ (function () {
    function CabeceroComponent() {
    }
    CabeceroComponent.prototype.handleScroll = function (event) {
    };
    CabeceroComponent.prototype.ngOnInit = function () {
    };
    CabeceroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cabecero',
            template: __webpack_require__(/*! ./cabecero.component.html */ "./src/app/cabecero/cabecero.component.html"),
            styles: [__webpack_require__(/*! ./cabecero.component.css */ "./src/app/cabecero/cabecero.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CabeceroComponent);
    return CabeceroComponent;
}());



/***/ }),

/***/ "./src/app/formulario/formulario.component.css":
/*!*****************************************************!*\
  !*** ./src/app/formulario/formulario.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvcm11bGFyaW8vZm9ybXVsYXJpby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/formulario/formulario.component.html":
/*!******************************************************!*\
  !*** ./src/app/formulario/formulario.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid bg-light p-3 shadow-sm text-monospace\">\r\n\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-6\">\r\n                <h5>Sistemas de Calidad en TI</h5>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n                <h5>Brian Alejandro Ochoa Duran</h5>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/formulario/formulario.component.ts":
/*!****************************************************!*\
  !*** ./src/app/formulario/formulario.component.ts ***!
  \****************************************************/
/*! exports provided: FormularioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormularioComponent", function() { return FormularioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormularioComponent = /** @class */ (function () {
    function FormularioComponent() {
    }
    FormularioComponent.prototype.ngOnInit = function () {
    };
    FormularioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-formulario',
            template: __webpack_require__(/*! ./formulario.component.html */ "./src/app/formulario/formulario.component.html"),
            styles: [__webpack_require__(/*! ./formulario.component.css */ "./src/app/formulario/formulario.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FormularioComponent);
    return FormularioComponent;
}());



/***/ }),

/***/ "./src/app/ticket/ticket.component.css":
/*!*********************************************!*\
  !*** ./src/app/ticket/ticket.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RpY2tldC90aWNrZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/ticket/ticket.component.html":
/*!**********************************************!*\
  !*** ./src/app/ticket/ticket.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container shadow-sm rounded\">\r\n  <div class=\"row p-4 mb-3\">\r\n    <div class=\"col-8\">\r\n      <h2>Ticket</h2>\r\n    </div>\r\n    <div class=\"col-4\" style=\"text-align:right;\">\r\n      <h4>No. 0001</h4>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container shadow-sm rounded\">\r\n  <div class=\"row p-4\">\r\n    <div class=\"col-12\">\r\n      <h6 style=\"text-align:right;\"><a href=\"#\" data-toggle=\"modal\" data-target=\"#calificar\">Calificar proceso</a> | <a href=\"#\">Re-Abrir ticket</a></h6>\r\n    </div>\r\n    <div class=\"col align-self-center\">\r\n      <form class=\"needs-validation\">\r\n        <h3 class=\"mt-3\">Información de cliente</h3>\r\n        <hr>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-8 mb-3\">\r\n            <label for=\"nombrecliente\">Nombre de Cliente</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"nombrecliente\" placeholder=\"Nombre de cliente\">\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"fechaticket\">Fecha de ticket</label>\r\n            <input type=\"datetime-local\" class=\"form-control\" id=\"fechaticket\" placeholder=\"0\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"correo\">Correo</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"correo\" placeholder=\"Correo\">\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"numerocel\">Numero celular</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"numerocel\" placeholder=\"3310800159\">\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"numerotel\">Numero telefono</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"numerotel\" placeholder=\"3310800159\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-4 mb-3\">\r\n              <label for=\"prioridad\">Prioridad</label>\r\n              <select class=\"form-control\" id=\"prioridad\">\r\n                <option>Baja</option>\r\n                <option>Media</option>\r\n                <option>Alta</option>\r\n                <option>Critica</option>\r\n              </select>\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"estado\">Estado</label>\r\n            <select class=\"form-control\" id=\"estado\">\r\n              <option>Abierto</option>\r\n              <option>En proceso</option>\r\n              <option>Escalado</option>\r\n              <option>En espera por usuario</option>\r\n              <option>Cerrado</option>\r\n            </select>\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"tipo\">Tipo</label>\r\n            <select class=\"form-control\" id=\"tipo\">\r\n                <option>Incidente</option>\r\n                <option>Solicitud</option>\r\n              </select>\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-12 mb-3\">\r\n            <label for=\"descripcionproblema\">Descripción de problema</label>\r\n            <textarea class=\"form-control\" id=\"descripcionproblema\" rows=\"3\"></textarea>\r\n          </div>\r\n        </div>\r\n        <h3 class=\"mt-3\">Información de soporte</h3>\r\n        <hr>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-8 mb-3\">\r\n            <label for=\"nombretecnico\">Nombre de técnico</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"nombretecnico\" placeholder=\"Nombre de técnico\">\r\n          </div>\r\n          <div class=\"col-md-2 mb-3\">\r\n            <label for=\"tiemporespuesta\">Tiempo respuesta</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"tiemporespuesta\" placeholder=\"0\">\r\n          </div>\r\n          <div class=\"col-md-2 mb-3\">\r\n            <label for=\"tiempoproceso\">Tiempo proceso</label>\r\n            <input type=\"number\" class=\"form-control\" id=\"tiempoproceso\" placeholder=\"0\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"fechaactua\">Fecha de actualización</label>\r\n            <input type=\"datetime-local\" class=\"form-control\" id=\"fechaactua\" >\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"fechainicio\">Fecha de inicio</label>\r\n            <input type=\"datetime-local\" class=\"form-control\" id=\"fechainicio\" >\r\n          </div>\r\n          <div class=\"col-md-4 mb-3\">\r\n            <label for=\"fechatermino\">Fecha de termino</label>\r\n            <input type=\"datetime-local\" class=\"form-control\" id=\"fechatermino\" >\r\n          </div>\r\n        </div>\r\n        <div class=\"form-row\">\r\n            <div class=\"col-md-12 mb-3\">\r\n              <label for=\"solucion\">Solución</label>\r\n              <textarea class=\"form-control\" id=\"solucion\" rows=\"5\"></textarea>\r\n            </div>\r\n          </div>        \r\n        <div class=\"form-row\">\r\n          <div class=\"col-md-12 mb-3\">\r\n            <label for=\"comentarios\">Comentarios</label>\r\n            <textarea class=\"form-control\" id=\"comentarios\" rows=\"5\"></textarea>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n        <div class=\"col-6\">\r\n          <button class=\"btn btn-block btn-primary mt-3\" type=\"submit\">Cerrar Ticket</button>\r\n        </div>\r\n        <div class=\"col-6\">\r\n          <button class=\"btn btn-block btn-primary mt-3\" type=\"submit\">Crear Ticket</button>\r\n        </div>\r\n      </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<!-- Modal CALIFICAR -->\r\n<div class=\"modal fade\" id=\"calificar\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"calificarModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"calificarModalLabel\">Califica el servicio</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <label for=\"satisfaccion\">¿Qué tan satisfecho se encuentra con el servicio?</label>\r\n            <div class=\"row\">\r\n              <div class=\"col-6\">\r\n                Poco\r\n              </div>\r\n              <div class=\"col-6 text-right\">\r\n                Mucho\r\n              </div>\r\n            </div>\r\n            <input type=\"range\" class=\"custom-range\" min=\"0\" max=\"5\" step=\"1\" id=\"satisfaccion\">\r\n            <label for=\"satisfaccion\">¿Su problema fue resuelto?</label>\r\n            <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" id=\"customRadio1\" name=\"customRadio\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"customRadio1\">Si</label>\r\n              </div>\r\n              <div class=\"custom-control custom-radio\">\r\n                <input type=\"radio\" id=\"customRadio2\" name=\"customRadio\" class=\"custom-control-input\">\r\n                <label class=\"custom-control-label\" for=\"customRadio2\">No</label>\r\n              </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cerrar</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Guardar cambios</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ticket/ticket.component.ts":
/*!********************************************!*\
  !*** ./src/app/ticket/ticket.component.ts ***!
  \********************************************/
/*! exports provided: TicketComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TicketComponent", function() { return TicketComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TicketComponent = /** @class */ (function () {
    function TicketComponent() {
    }
    TicketComponent.prototype.ngOnInit = function () { };
    TicketComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ticket',
            template: __webpack_require__(/*! ./ticket.component.html */ "./src/app/ticket/ticket.component.html"),
            styles: [__webpack_require__(/*! ./ticket.component.css */ "./src/app/ticket/ticket.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TicketComponent);
    return TicketComponent;
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

module.exports = __webpack_require__(/*! C:\Users\BrianAlejandroOchoaD\Documents\GitHub\Support_Tickets_ITIL_Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map