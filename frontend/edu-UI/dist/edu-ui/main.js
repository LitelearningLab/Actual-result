"use strict";
(self["webpackChunkedu_UI"] = self["webpackChunkedu_UI"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);



const routes = [{
  path: '',
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 5055)).then(m => m.HomeModule)
}, {
  path: '**',
  redirectTo: ''
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/service/auth.service */ 2241);
/* harmony import */ var _shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/services/session.service */ 3202);
/* harmony import */ var _shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/services/global-institute-context.service */ 4769);
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/loader/loader.component */ 765);
/* harmony import */ var _shared_components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/navbar-main/navbar-main.component */ 4481);
/* harmony import */ var _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/components/side-nav/side-nav.component */ 8277);












function AppComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Skip to main content");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3)(4, "aside", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "app-side-nav");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 5)(7, "header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "app-navbar-main");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "main", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "app-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("global-institute-active", ctx_r0.globalInstituteContext.isGlobalFilterActive());
  }
}
function AppComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "main", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "app-loader", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
class AppComponent {
  constructor(auth, sessionService, globalInstituteContext, document) {
    this.auth = auth;
    this.sessionService = sessionService;
    this.globalInstituteContext = globalInstituteContext;
    this.document = document;
    this.title = 'edu-UI';
    this.isLoggedIn$ = this.auth.isLoggedIn$;
    this.sessionService.startListening();
    this.syncGlobalInstituteBodyClass(this.globalInstituteContext.isGlobalFilterActive());
    this.globalInstituteSub = this.globalInstituteContext.selectedInstitute$.subscribe(() => {
      this.syncGlobalInstituteBodyClass(this.globalInstituteContext.isGlobalFilterActive());
    });
  }
  ngOnDestroy() {
    try {
      this.globalInstituteSub.unsubscribe();
    } catch (e) {}
    this.syncGlobalInstituteBodyClass(false);
  }
  syncGlobalInstituteBodyClass(isActive) {
    try {
      this.document.body.classList.toggle('global-institute-active', isActive);
    } catch (e) {}
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_3__.GlobalInstituteContextService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.DOCUMENT));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 4,
      vars: 4,
      consts: [[4, "ngIf", "ngIfElse"], ["publicView", ""], ["href", "#main-content", 1, "skip-link"], [1, "app-layout"], ["role", "navigation", "aria-label", "Main navigation", 1, "app-sidenav"], [1, "app-main"], ["role", "banner", 1, "app-topbar"], ["id", "main-content", "role", "main", 1, "app-content"], ["aria-live", "polite", "aria-busy", "true"], [1, "public-layout"], ["role", "main"], ["aria-live", "polite"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 12, 2, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx.isLoggedIn$))("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _shared_components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_5__.NavbarMainComponent, _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__.SideNavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
      styles: ["@charset \"UTF-8\";\n[_ngcontent-%COMP%]:root {\n  --topbar-height: max(3.5rem, calc(var(--font-size-base) * 5)); \n\n  --sidenav-width: 16.25rem; \n\n  --sidenav-collapsed: 4.5rem; \n\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  min-height: 100%;\n  background-color: var(--theme-3);\n  overflow: auto;\n  position: relative;\n}\n\n\n\n\n\n.skip-link[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -3rem;\n  left: 1rem;\n  z-index: 99999;\n  padding: 0.75rem 1.25rem;\n  background: var(--button-1, #4f46e5);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  border-radius: 0 0 0.5rem 0.5rem;\n  text-decoration: none;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);\n  transition: top 0.2s ease-in-out;\n}\n.skip-link[_ngcontent-%COMP%]:focus {\n  top: 0;\n  outline: 0.1875rem solid var(--button-1, #4f46e5);\n  outline-offset: 0.125rem;\n}\n\n\n\n\n\n.public-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.app-layout[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh; \n\n  height: 100vh; \n\n  background: var(--theme-3);\n  gap: 0;\n  min-width: 0;\n  position: relative;\n}\n\n\n\n.app-main[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: var(--theme-1);\n  \n\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 100vh; \n\n  \n\n  width: calc(100% - var(--sidenav-width));\n  overflow: visible; \n\n}\n\n\n\n.app-topbar[_ngcontent-%COMP%] {\n  flex: 0 0 var(--topbar-height);\n  min-height: var(--topbar-height);\n  width: 100%;\n  background: var(--theme-2-bg-1);\n  display: grid;\n  align-items: center;\n  box-shadow: 0 0.125rem 0.625rem rgba(20, 30, 60, 0.06);\n  padding: 0.5rem 1.5rem;\n  border-bottom: 1px solid var(--theme-2-border);\n  font-size: var(--font-size-base);\n  line-height: var(--line-height-base);\n  position: relative;\n  z-index: 100; \n\n}\n\n\n\n.app-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: block;\n  min-height: 0;\n  width: 100%;\n  background: var(--theme-2);\n  padding: 1rem 1rem;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  height: auto;\n  position: relative;\n  \n\n}\n\n\n\n\n\n@media (max-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --topbar-height: 4rem;\n  }\n  .app-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100%;\n    background: var(--theme-3);\n    overflow: visible; \n\n  }\n  .app-main[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    min-height: 0;\n    width: calc(100% - var(--sidenav-collapsed));\n    overflow: visible; \n\n    background: var(--theme-1);\n    margin-left: var(--sidenav-collapsed);\n  }\n  \n\n  .sidenav-open[_ngcontent-%COMP%]   .app-main[_ngcontent-%COMP%] {\n    margin-left: var(--sidenav-width);\n    width: calc(100% - var(--sidenav-width));\n  }\n  .app-sidenav[_ngcontent-%COMP%] {\n    \n\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    height: auto;\n    width: var(--sidenav-collapsed);\n    transform: none;\n    flex: 0 0 var(--sidenav-collapsed);\n    z-index: 65;\n    background: var(--theme-1);\n    overflow: auto;\n  }\n  \n\n  .app-side-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    height: auto;\n    width: var(--sidenav-collapsed);\n    z-index: 65;\n    background: var(--theme-1);\n    overflow: auto;\n  }\n  \n\n  .sidenav-open[_ngcontent-%COMP%]   .app-sidenav[_ngcontent-%COMP%], .sidenav-open[_ngcontent-%COMP%]   .app-side-nav[_ngcontent-%COMP%] {\n    width: var(--sidenav-width);\n    flex: 0 0 var(--sidenav-width);\n  }\n}\n\n\n.app-sidenav[_ngcontent-%COMP%]::-webkit-scrollbar, .app-content[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5rem;\n  background: rgba(86, 91, 102, 0.09);\n}\n\n.app-sidenav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .app-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #b2bacb;\n  border-radius: 0.4375rem;\n}\n\n.global-institute-active[_ngcontent-%COMP%]   .local-institute-field[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.75rem;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%] {\n  min-height: 3.5rem;\n  padding-top: 0.9rem;\n  padding-bottom: 0.9rem;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%] {\n  min-height: 1.5rem;\n  display: flex;\n  align-items: center;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDZEQUFBLEVBQUEscUNBQUE7RUFDQSx5QkFBQSxFQUFBLDJCQUFBO0VBQ0EsMkJBQUEsRUFBQSwrQ0FBQTtBQUVGOztBQUNBLGVBQUE7QUFDQTtFQUFJLHNCQUFBO0FBR0o7O0FBREEsd0JBQUE7QUFDQTtFQUFhLFdBQUE7RUFBWSxTQUFBO0VBQVUsVUFBQTtFQUFXLGdCQUFBO0VBQWlCLGdDQUFBO0VBQWlDLGNBQUE7RUFBZSxrQkFBQTtBQVcvRzs7QUFUQTs7b0VBQUE7QUFHQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQ0FBQTtBQVlGO0FBVkU7RUFDRSxNQUFBO0VBQ0EsaURBQUE7RUFDQSx3QkFBQTtBQVlKOztBQVJBOztvRUFBQTtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFXRjs7QUFSQSwyQ0FBQTtBQUNBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQSxFQUFBLGdEQUFBO0VBQ0EsYUFBQSxFQUFBLHdEQUFBO0VBQ0EsMEJBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBV0Y7O0FBT0EsK0VBQUE7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtRUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQSxFQUFBLGdEQUFBO0VBQ0EsMkRBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBLEVBQUEsNENBQUE7QUFKRjs7QUFRQSw0QkFBQTtBQUNBO0VBQ0UsOEJBQUE7RUFDQSxnQ0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNEQUFBO0VBQ0Esc0JBQUE7RUFDQSw4Q0FBQTtFQUNBLGdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUEsRUFBQSxvREFBQTtBQUxGOztBQVNBLHFDQUFBO0FBQ0E7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnREFBQTtBQU5GOztBQVdBOzsrWEFBQTtBQUdBO0VBRUU7SUFDRSxxQkFBQTtFQVRGO0VBWUE7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSwwQkFBQTtJQUNBLGlCQUFBLEVBQUEsa0NBQUE7RUFWRjtFQWFBO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSw0Q0FBQTtJQUNBLGlCQUFBLEVBQUEsMkJBQUE7SUFDQSwwQkFBQTtJQUNBLHFDQUFBO0VBWEY7RUFjQSwwRkFBQTtFQUNBO0lBQ0UsaUNBQUE7SUFDQSx3Q0FBQTtFQVpGO0VBZ0JBO0lBQ0Usc0RBQUE7SUFDQSxlQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLCtCQUFBO0lBQ0EsZUFBQTtJQUNBLGtDQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0lBQ0EsY0FBQTtFQWRGO0VBaUJBLCtEQUFBO0VBQ0E7SUFDRSxlQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsWUFBQTtJQUNBLCtCQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0lBQ0EsY0FBQTtFQWZGO0VBa0JBLHFFQUFBO0VBQ0E7O0lBRUUsMkJBQUE7SUFDQSw4QkFBQTtFQWhCRjtBQUNGO0FBcUJBLHlDQUFBO0FBQ0U7O0VBRUUsYUFBQTtFQUNBLG1DQUFBO0FBbkJKOztBQXFCRTs7RUFFRSxtQkFBQTtFQUNBLHdCQUFBO0FBbEJKOztBQXFCQTtFQUNFLHdCQUFBO0FBbEJGOztBQXFCQTs4R0FBQTtBQUVBOzs7O0VBSUUsV0FBQTtBQWxCRjs7QUFxQkE7Ozs7RUFJRSxzQkFBQTtBQWxCRjs7QUFxQkE7Ozs7RUFJRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFsQkY7O0FBcUJBOzs7O0VBSUUsa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFsQkY7O0FBcUJBOzs7O0VBSUUsZUFBQTtBQWxCRiIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS10b3BiYXItaGVpZ2h0OiBtYXgoMy41cmVtLCBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDUpKTsgLyogcmVzcG9uc2l2ZSBub21pbmFsIHRvcGJhciBoZWlnaHQgKi9cbiAgLS1zaWRlbmF2LXdpZHRoOiAxNi4yNXJlbTsgLyogU2lkZSBuYXYgbm9taW5hbCB3aWR0aCAqL1xuICAtLXNpZGVuYXYtY29sbGFwc2VkOiA0LjVyZW07IC8qIGNvbGxhcHNlZCB3aWR0aCAoYXBwcm94IDcycHggYXQgMTZweCByb290KSAqL1xufVxuXG4vKiBib3ggc2l6aW5nICovXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4vKiBQcmV2ZW50IHJvb3Qgc2Nyb2xsICovXG5odG1sLCBib2R5IHsgd2lkdGg6MTAwJTsgbWFyZ2luOjA7IHBhZGRpbmc6MDsgbWluLWhlaWdodDoxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRoZW1lLTMpOyBvdmVyZmxvdzphdXRvOyBwb3NpdGlvbjpyZWxhdGl2ZSB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgQUNDRVNTSUJJTElUWSDDosKAwpQgU2tpcCBsaW5rIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5za2lwLWxpbmsge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogLTNyZW07XG4gIGxlZnQ6IDFyZW07XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xLCAjNGY0NmU1KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2UtaW4tb3V0O1xuICBcbiAgJjpmb2N1cyB7XG4gICAgdG9wOiAwO1xuICAgIG91dGxpbmU6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSwgIzRmNDZlNSk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDAuMTI1cmVtO1xuICB9XG59XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgUFVCTElDIFZJRVcgw6LCgMKUIExhbmRpbmcvTG9naW4gcGFnZXMgbGF5b3V0XG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5wdWJsaWMtbGF5b3V0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi8qIEZ1bGwgaGVpZ2h0IGFwcCBsYXlvdXQ6IGhvcml6b250YWwgcm93ICovXG4uYXBwLWxheW91dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBwcmVmZXIgbWluLWhlaWdodCBzbyB6b29tZWQgVUkgZG9lc24ndCBjbGlwICovXG4gIGhlaWdodDogMTAwdmg7IC8qIGZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWluLWhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zKTtcbiAgZ2FwOiAwO1xuICBtaW4td2lkdGg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLy8gLmFwcC1zaWRlbmF2IHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBmbGV4OiAwIDAgYXV0bztcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtMSk7XG4vLyAgIG92ZXJmbG93OiBpbmhlcml0O1xuLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbi8vICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcbi8vICAgbWluLXdpZHRoOiAwOyAvKiBhbGxvdyBzaHJpbmtpbmcgb2YgdGhlIGNvbHVtbiAqL1xuLy8gfVxuXG5cblxuLyogTWFpbiBhcmVhOiBzaWRlIG5hdiArIGNvbnRlbnQgLS0gYXBwLW1haW4gc2l0cyB0byB0aGUgcmlnaHQgb2YgYXBwLXNpZGVuYXYgKi9cbi5hcHAtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtMSk7XG4gIC8qIHotaW5kZXggcmVtb3ZlZCB0byBwcmV2ZW50IHN0YWNraW5nIGNvbnRleHQgaXNzdWVzIHdpdGggbW9kYWxzICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvOyAvLyBUYWtlIHJlbWFpbmluZyB3aWR0aFxuICBtaW4td2lkdGg6IDA7XG4gIGhlaWdodDogMTAwdmg7IC8qIHByZWZlciBtaW4taGVpZ2h0IHNvIHpvb21lZCBVSSBkb2Vzbid0IGNsaXAgKi9cbiAgLyogTWFrZSBtYWluIHdpZHRoIHRoZSByZW1haW5pbmcgc3BhY2UgYWZ0ZXIgdGhlIHNpZGUtbmF2ICovXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBBbGxvdyBtb2RhbHMgdG8gZXNjYXBlIHN0YWNraW5nIGNvbnRleHQgKi9cbn1cblxuXG4vKiBUb3AgYmFyIGluc2lkZSBhcHAtbWFpbiAqL1xuLmFwcC10b3BiYXIge1xuICBmbGV4OiAwIDAgdmFyKC0tdG9wYmFyLWhlaWdodCk7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLXRvcGJhci1oZWlnaHQpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMi1iZy0xKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjYyNXJlbSByZ2JhKDIwLCAzMCwgNjAsIDAuMDYpO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMi1ib3JkZXIpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDsgLyogQmVsb3cgbW9kYWwgYmFja2Ryb3BzICgxMDA1MCkgYnV0IGFib3ZlIGNvbnRlbnQgKi9cbn1cblxuXG4vKiBDb250ZW50OiBzY3JvbGxzIGludGVybmFsbHkgb25seSAqL1xuLmFwcC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMik7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogTm8gei1pbmRleCB0byBhdm9pZCBzdGFja2luZyBjb250ZXh0IGlzc3VlcyAqL1xufVxuXG4vLyBcblxuLyogXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXG4gICBSRVNQT05TSVZFIExBWU9VVCBcXHUyMDE0IE1vYmlsZSAmIFRhYmxldFxuICAgXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwXFx1MjU1MFxcdTI1NTBcXHUyNTUwICovXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcblxuICA6cm9vdCB7XG4gICAgLS10b3BiYXItaGVpZ2h0OiA0cmVtO1xuICB9XG5cbiAgLmFwcC1sYXlvdXQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zKTtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTsgLyogQWxsb3cgbW9kYWxzIHRvIHdvcmsgcHJvcGVybHkgKi9cbiAgfVxuXG4gIC5hcHAtbWFpbiB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIHZhcigtLXNpZGVuYXYtY29sbGFwc2VkKSk7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIEFsbG93IG1vZGFscyB0byBlc2NhcGUgKi9cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0xKTtcbiAgICBtYXJnaW4tbGVmdDogdmFyKC0tc2lkZW5hdi1jb2xsYXBzZWQpO1xuICB9XG5cbiAgLyogV2hlbiBzaWRlbmF2IGV4cGFuZGVkIHZpYSAuc2lkZW5hdi1vcGVuIGV4cGFuZCwgc2V0IG1haW4gd2lkdGggYW5kIG1hcmdpbiBhY2NvcmRpbmdseSAqL1xuICAuc2lkZW5hdi1vcGVuIC5hcHAtbWFpbiB7XG4gICAgbWFyZ2luLWxlZnQ6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG4gIH1cblxuIFxuICAuYXBwLXNpZGVuYXYge1xuICAgIC8qIG9uIG1vYmlsZSBrZWVwIGEgY29tcGFjdCBjb2xsYXBzZWQgbmF2IGJ5IGRlZmF1bHQgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogdmFyKC0tc2lkZW5hdi1jb2xsYXBzZWQpO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBmbGV4OiAwIDAgdmFyKC0tc2lkZW5hdi1jb2xsYXBzZWQpO1xuICAgIHotaW5kZXg6IDY1O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTEpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLyogYWxzbyBjb3ZlciBzaWRlLW5hdiB2YXJpYW50IGNsYXNzIHVzZWQgaW4gY29tcG9uZW50IHN0eWxlcyAqL1xuICAuYXBwLXNpZGUtbmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogdmFyKC0tc2lkZW5hdi1jb2xsYXBzZWQpO1xuICAgIHotaW5kZXg6IDY1O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTEpO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG5cbiAgLyogd2hlbiBwYXJlbnQgKGUuZy4sIHJvb3QpIGhhcyAuc2lkZW5hdi1vcGVuLCBleHBhbmQgdG8gZnVsbCB3aWR0aCAqL1xuICAuc2lkZW5hdi1vcGVuIC5hcHAtc2lkZW5hdixcbiAgLnNpZGVuYXYtb3BlbiAuYXBwLXNpZGUtbmF2IHtcbiAgICB3aWR0aDogdmFyKC0tc2lkZW5hdi13aWR0aCk7XG4gICAgZmxleDogMCAwIHZhcigtLXNpZGVuYXYtd2lkdGgpO1xuICB9XG5cblxufVxuXG4vKiBDdXN0b20gU2Nyb2xsYmFyIGZvciBzaWRlYmFyL2NvbnRlbnQgKi9cbiAgLmFwcC1zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhcixcbiAgLmFwcC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDg2LDkxLDEwMiwwLjA5KTtcbiAgfVxuICAuYXBwLXNpZGVuYXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuICAuYXBwLWNvbnRlbnQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICBiYWNrZ3JvdW5kOiAjYjJiYWNiO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuNDM3NXJlbTtcbiAgfVxuXG4uZ2xvYmFsLWluc3RpdHV0ZS1hY3RpdmUgLmxvY2FsLWluc3RpdHV0ZS1maWVsZCB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLyogU2hhcmVkIGZpbHRlciBmaWVsZCBjaHJvbWUgYWNyb3NzIGZpbHRlciBwYW5lbHMuXG4gICBUaGlzIG1ha2VzIHBsYWluIG1hdC1zZWxlY3QgZmllbGRzIHZpc3VhbGx5IGFsaWduIHdpdGggdGhlIHR5cGFibGUgYXV0b2NvbXBsZXRlIGZpZWxkcyB1c2VkIGluIFF1ZXN0aW9ucy4gKi9cbi5maWx0ZXJzLXBhbmVsIC5tYXQtbWRjLWZvcm0tZmllbGQsXG4ucXVlc3Rpb24tYmFuay1maWx0ZXItcGFuZWwgLm1hdC1tZGMtZm9ybS1maWVsZCxcbi5jYXRlZ29yeS1maWx0ZXJzLXBhbmVsIC5tYXQtbWRjLWZvcm0tZmllbGQsXG4uZ2xvYmFsLWZpbHRlci1zZWN0aW9uIC5tYXQtbWRjLWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxuLnF1ZXN0aW9uLWJhbmstZmlsdGVyLXBhbmVsIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlcixcbi5jYXRlZ29yeS1maWx0ZXJzLXBhbmVsIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlcixcbi5nbG9iYWwtZmlsdGVyLXNlY3Rpb24gLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbn1cblxuLmZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCxcbi5xdWVzdGlvbi1iYW5rLWZpbHRlci1wYW5lbCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4LFxuLmNhdGVnb3J5LWZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCxcbi5nbG9iYWwtZmlsdGVyLXNlY3Rpb24gLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7XG4gIG1pbi1oZWlnaHQ6IDMuNXJlbTtcbiAgcGFkZGluZy10b3A6IDAuOXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDAuOXJlbTtcbn1cblxuLmZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtc2VsZWN0LXRyaWdnZXIsXG4ucXVlc3Rpb24tYmFuay1maWx0ZXItcGFuZWwgLm1hdC1tZGMtc2VsZWN0LXRyaWdnZXIsXG4uY2F0ZWdvcnktZmlsdGVycy1wYW5lbCAubWF0LW1kYy1zZWxlY3QtdHJpZ2dlcixcbi5nbG9iYWwtZmlsdGVyLXNlY3Rpb24gLm1hdC1tZGMtc2VsZWN0LXRyaWdnZXIge1xuICBtaW4taGVpZ2h0OiAxLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5maWx0ZXJzLXBhbmVsIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSxcbi5xdWVzdGlvbi1iYW5rLWZpbHRlci1wYW5lbCAubWF0LW1kYy1zZWxlY3QtdmFsdWUsXG4uY2F0ZWdvcnktZmlsdGVycy1wYW5lbCAubWF0LW1kYy1zZWxlY3QtdmFsdWUsXG4uZ2xvYmFsLWZpbHRlci1zZWN0aW9uIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/interceptors/auth.interceptor */ 492);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _shared_date_indian_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/date/indian-date-adapter */ 3931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);










class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HTTP_INTERCEPTORS,
        useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_0__.AuthInterceptor,
        multi: true
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.DateAdapter,
        useClass: _shared_date_indian_date_adapter__WEBPACK_IMPORTED_MODULE_3__.IndianDateAdapter
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_FORMATS,
        useValue: _shared_date_indian_date_adapter__WEBPACK_IMPORTED_MODULE_3__.INDIAN_DATE_FORMATS
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_LOCALE,
        useValue: 'en-IN'
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, {
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule]
  });
})();

/***/ }),

/***/ 2241:
/*!**********************************************!*\
  !*** ./src/app/home/service/auth.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var D_Actula_result_production_Actual_result_frontend_edu_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 9204);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/api.config */ 1892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_shared_services_page_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/page-access.service */ 626);







class AuthService {
  get isLoggedIn() {
    return this._logged.value;
  }
  // synchronous accessor for current user value
  get currentUserValue() {
    return this._user.value;
  }
  constructor(http, pageAccess) {
    this.http = http;
    this.pageAccess = pageAccess;
    this._logged = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    this.isLoggedIn$ = this._logged.asObservable();
    this._user = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(null);
    this.user$ = this._user.asObservable();
    // Initialize from sessionStorage if available
    try {
      const token = sessionStorage.getItem('token');
      const raw = sessionStorage.getItem('user');
      if (token && raw) {
        const parsed = JSON.parse(raw);
        // normalize user shape so other code can rely on `id`
        if (parsed && !parsed.id && parsed.user_id) parsed.id = parsed.user_id;
        this._user.next(parsed);
        this._logged.next(true);
        sessionStorage.setItem('isLogin', 'true');
        // preload page access for persisted user (use normalized id)
        const uid = parsed && (parsed.id || parsed.user_id || parsed.userId);
        if (uid) {
          console.debug('[AuthService] constructor preloading page access for userId:', uid);
          this.pageAccess.fetchForUser(uid.toString()).subscribe(rows => console.debug('[AuthService] constructor fetched page access rows:', rows));
        }
      }
    } catch (e) {
      // Invalid persisted data is treated as unauthenticated without deleting it.
      this._user.next(null);
      this._logged.next(false);
    }
  }
  login(identifier, password) {
    var _this = this;
    return (0,D_Actula_result_production_Actual_result_frontend_edu_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_1__.API_BASE}/login`;
      try {
        const resp = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.http.post(url, {
          identifier,
          email: identifier,
          password
        }));
        // treat presence of token or status true/success as success
        const ok = !!(resp && (resp.token || resp.status === true || resp.status === 'success' || resp.status === 'true'));
        _this._logged.next(ok);
        if (ok) {
          try {
            if (resp.token) sessionStorage.setItem('token', resp.token);
            sessionStorage.setItem('isLogin', 'true');
            if (resp.user) {
              // normalize incoming user object: ensure `id` exists for compatibility
              try {
                const u = {
                  ...resp.user
                };
                if (!u.id && (u.user_id || u.userId)) u.id = u.user_id || u.userId;
                sessionStorage.setItem('user', JSON.stringify(u));
                _this._user.next(u);
                // also set username for legacy components
                if (u.name) sessionStorage.setItem('username', u.name);
                if (u.user_id) sessionStorage.setItem('user_id', u.user_id);
                if (u.role) sessionStorage.setItem('userRole', u.role);
                if (u.institute) sessionStorage.setItem('institute', u.institute);
                if (u.institute_id) sessionStorage.setItem('institute_id', u.institute_id.toString());
              } catch (e) {
                sessionStorage.setItem('user', JSON.stringify(resp.user));
                _this._user.next(resp.user);
              }
            }
            // fetch page access immediately for the logged in user
            try {
              // use the normalized user object from _user (ensures `id` present)
              const current = _this._user.value;
              const uid = current && (current.id || current.user_id || current.userId);
              if (uid) {
                console.debug('[AuthService] Fetching page access for userId (post-login):', uid);
                _this.pageAccess.fetchForUser(uid.toString()).subscribe(rows => {
                  console.debug('[AuthService] Fetched page access rows (post-login):', rows);
                });
              }
            } catch (e) {}
          } catch (e) {
            // ignore storage errors
          }
        }
        return ok;
      } catch (err) {
        _this._logged.next(false);
        _this._user.next(null);
        return false;
      }
    })();
  }
  logout() {
    // Capture the user before removing it so its permission cache can be cleared.
    const currentUser = this._user.value;
    this._logged.next(false);
    this._user.next(null);
    try {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('isLogin');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userRole');
      sessionStorage.removeItem('institute');
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('institute_id');
      sessionStorage.removeItem('launched_exam');
      sessionStorage.removeItem('test_result');
      sessionStorage.removeItem('last_submission');
      sessionStorage.removeItem('review_questions');
      // clear page access cache for current user
      try {
        const uid = currentUser && (currentUser.id || currentUser.user_id || currentUser.userId);
        if (uid) this.pageAccess.clearCache(uid.toString());
      } catch (e) {}
    } catch (e) {}
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_shared_services_page_access_service__WEBPACK_IMPORTED_MODULE_2__.PageAccessService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1892:
/*!**************************************!*\
  !*** ./src/app/shared/api.config.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   API_BASE: () => (/* binding */ API_BASE)
/* harmony export */ });
const LOCAL_API_BASE = 'http://127.0.0.1:5001/edu/api';
const LIVE_API_BASE = 'http://34.100.213.250:5001/edu/api';
// Change only this value while developing:
// true  = localhost frontend uses the local backend
// false = localhost frontend uses the live backend
const USE_LOCAL_BACKEND = true;
const frontendIsLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
// The deployed frontend always uses the live backend. The switch above only
// affects a frontend opened from localhost.
const API_BASE = frontendIsLocal && USE_LOCAL_BACKEND ? LOCAL_API_BASE : LIVE_API_BASE;

/***/ }),

/***/ 8709:
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConfirmDialogComponent: () => (/* binding */ ConfirmDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ 4175);




class ConfirmDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  static {
    this.ɵfac = function ConfirmDialogComponent_Factory(t) {
      return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmDialogComponent,
      selectors: [["app-confirm-dialog"]],
      decls: 14,
      vars: 5,
      consts: [[1, "dialog-container"], [1, "dialog-icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 8v4M12 16h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "dialog-title"], [1, "dialog-message"], [1, "dialog-actions"], ["mat-stroked-button", "", "mat-dialog-close", "", 1, "cancel-btn"], ["mat-flat-button", "", 1, "confirm-btn", 3, "mat-dialog-close"]],
      template: function ConfirmDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "circle", 3)(4, "path", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Confirm");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.cancelText || "Cancel", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.confirmText || "Confirm", " ");
        }
      },
      dependencies: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_button__WEBPACK_IMPORTED_MODULE_2__.MatButton],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 1.5rem 1rem 1rem;\n}\n\n.dialog-icon[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n\n.dialog-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  color: var(--button-1, #6366f1);\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--theme-3-text-1, #1e293b);\n  letter-spacing: -0.01em;\n  margin: 0 0 0.5rem 0;\n}\n\n.dialog-message[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3, #64748b);\n  line-height: 1.5;\n  \n\n  white-space: pre-line;\n  margin: 0 0 1.5rem 0;\n  font-size: 0.9375rem;\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 0.625rem;\n  padding: 0.625rem 1rem;\n  font-weight: 600;\n  border-color: var(--theme-3-border, #e2e8f0);\n  color: var(--theme-3-text-2, #475569);\n  transition: all 0.2s ease;\n}\n\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-2, #f8fafc);\n  border-color: var(--theme-3-text-3, #94a3b8);\n}\n\n.confirm-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.625rem;\n  padding: 0.625rem 1rem;\n  font-weight: 600;\n  border: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);\n}\n\n.confirm-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transform: translateY(-1px);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNVO0VBQ0ssY0FBQTtBQUFmOztBQUVVO0VBQ0ssYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ2Y7O0FBQ1U7RUFDSyxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkZBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRWY7O0FBQVU7RUFDSyxjQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBR2Y7O0FBRFU7RUFDSyxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FBSWY7O0FBRlU7RUFDSyxxQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUVBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFLZjs7QUFIVTtFQUNLLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU1mOztBQUpVO0VBQ0ssT0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtBQU9mOztBQUxVO0VBQ0ssZ0NBQUE7RUFDQSw0Q0FBQTtBQVFmOztBQU5VO0VBQ0ssT0FBQTtFQUNBLHNDQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw4Q0FBQTtBQVNmOztBQVBVO0VBQ0ssK0NBQUE7RUFDQSwyQkFBQTtBQVVmIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWFsb2ctY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWFsb2ctaWNvbiB7XG4gICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsMC4xKSAwJSwgcmdiYSgxMzksOTIsMjQ2LDAuMSkgMTAwJSk7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpYWxvZy1pY29uIHN2ZyB7XG4gICAgICAgICAgICAgICB3aWR0aDogMS43NXJlbTtcbiAgICAgICAgICAgICAgIGhlaWdodDogMS43NXJlbTtcbiAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzYzNjZmMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWFsb2ctdGl0bGUge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMSwgIzFlMjkzYik7XG4gICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlhbG9nLW1lc3NhZ2Uge1xuICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zLCAjNjQ3NDhiKTtcbiAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgICAgICAvKiBQcmVzZXJ2ZSBpbnRlbnRpb25hbCBwYXJhZ3JhcGggYnJlYWtzIGluIGxvbmdlciBjb25maXJtYXRpb25zLiAqL1xuICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDAuOTM3NXJlbTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpYWxvZy1hY3Rpb25zIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBnYXA6IDAuNzVyZW07XG4gICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhbmNlbC1idG4ge1xuICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgICAgICAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcbiAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLTMtYm9yZGVyLCAjZTJlOGYwKTtcbiAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMiwgIzQ3NTU2OSk7XG4gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FuY2VsLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0yLCAjZjhmYWZjKTtcbiAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM5NGEzYjgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29uZmlybS1idG4ge1xuICAgICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb25maXJtLWJ0bjpob3ZlciB7XG4gICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoOTksMTAyLDI0MSwwLjM1KTtcbiAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcbiAgICAgICAgICB9XG4gICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 7235:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DateRangePickerDialogComponent: () => (/* binding */ DateRangePickerDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 3840);





function DateRangePickerDialogComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r3);
  }
}
function DateRangePickerDialogComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_button_31_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const cell_r4 = restoredCtx.$implicit;
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.onDayClick(cell_r4.date));
    })("mouseenter", function DateRangePickerDialogComponent_button_31_Template_button_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const cell_r4 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.onDayHover(cell_r4.date));
    })("mouseleave", function DateRangePickerDialogComponent_button_31_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onDayHover(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cell_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("other-month", !cell_r4.isCurrentMonth)("range-start", cell_r4.isStart)("range-end", cell_r4.isEnd)("has-end", cell_r4.hasEnd)("in-range", cell_r4.isInRange)("range-preview", cell_r4.isPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r4.dayNumber);
  }
}
function DateRangePickerDialogComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Range : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r2.rangeDaysCount, " days");
  }
}
class DateRangePickerDialogComponent {
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.activePreset = null;
    this.selectedStart = null;
    this.selectedEnd = null;
    this.hoverDate = null;
    this.startDateInput = '';
    this.endDateInput = '';
    this.currentMonth = new Date();
    this.weekDays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    this.calendarGrid = [];
  }
  ngOnInit() {
    if (this.data) {
      if (this.data.startDate) {
        this.selectedStart = this.parseDate(this.data.startDate);
      }
      if (this.data.endDate) {
        this.selectedEnd = this.parseDate(this.data.endDate);
      }
    }
    if (this.selectedStart) {
      this.currentMonth = new Date(this.selectedStart.getFullYear(), this.selectedStart.getMonth(), 1);
    } else {
      const now = new Date();
      this.currentMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    }
    this.syncInputStrings();
    this.updateGrid();
  }
  trackByDate(index, cell) {
    return cell.date.getTime();
  }
  syncInputStrings() {
    this.startDateInput = this.formatDateStr(this.selectedStart);
    this.endDateInput = this.formatDateStr(this.selectedEnd);
  }
  parseDate(val) {
    if (!val) return null;
    if (val instanceof Date) return isNaN(val.getTime()) ? null : new Date(val.getFullYear(), val.getMonth(), val.getDate());
    const d = new Date(val);
    return isNaN(d.getTime()) ? null : new Date(d.getFullYear(), d.getMonth(), d.getDate());
  }
  get currentMonthTitle() {
    return this.currentMonth.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  }
  prevMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1);
    this.updateGrid();
  }
  nextMonth() {
    this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1);
    this.updateGrid();
  }
  selectPreset(preset) {
    this.activePreset = preset;
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    switch (preset) {
      case 'today':
        this.selectedStart = today;
        this.selectedEnd = today;
        break;
      case 'yesterday':
        {
          const y = new Date(today);
          y.setDate(today.getDate() - 1);
          this.selectedStart = y;
          this.selectedEnd = y;
          break;
        }
      case 'this_week':
        {
          const dayOfWeek = today.getDay(); // 0 is Sun, 1 is Mon
          const diffToMon = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
          const mon = new Date(today);
          mon.setDate(today.getDate() + diffToMon);
          const sun = new Date(mon);
          sun.setDate(mon.getDate() + 6);
          this.selectedStart = mon;
          this.selectedEnd = sun;
          break;
        }
      case 'last_week':
        {
          const dayOfWeek = today.getDay();
          const diffToMon = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
          const thisMon = new Date(today);
          thisMon.setDate(today.getDate() + diffToMon);
          const lastMon = new Date(thisMon);
          lastMon.setDate(thisMon.getDate() - 7);
          const lastSun = new Date(lastMon);
          lastSun.setDate(lastMon.getDate() + 6);
          this.selectedStart = lastMon;
          this.selectedEnd = lastSun;
          break;
        }
      case 'this_month':
        {
          const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
          const lastDay = new Date(today.getFullYear(), today.getMonth() + 1, 0);
          this.selectedStart = firstDay;
          this.selectedEnd = lastDay;
          break;
        }
      case 'last_month':
        {
          const firstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1);
          const lastDay = new Date(today.getFullYear(), today.getMonth(), 0);
          this.selectedStart = firstDay;
          this.selectedEnd = lastDay;
          break;
        }
      case 'this_year':
        {
          const firstDay = new Date(today.getFullYear(), 0, 1);
          const lastDay = new Date(today.getFullYear(), 11, 31);
          this.selectedStart = firstDay;
          this.selectedEnd = lastDay;
          break;
        }
      case 'last_year':
        {
          const firstDay = new Date(today.getFullYear() - 1, 0, 1);
          const lastDay = new Date(today.getFullYear() - 1, 11, 31);
          this.selectedStart = firstDay;
          this.selectedEnd = lastDay;
          break;
        }
    }
    if (this.selectedStart) {
      this.currentMonth = new Date(this.selectedStart.getFullYear(), this.selectedStart.getMonth(), 1);
    }
    this.syncInputStrings();
    this.updateGrid();
  }
  onDayClick(date) {
    if (!date) return;
    this.activePreset = 'custom';
    const clickDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    if (!this.selectedStart) {
      // 1. No start date set -> set start date
      this.selectedStart = clickDate;
      this.selectedEnd = null;
    } else if (!this.selectedEnd) {
      // 2. Start date set, no end date set
      if (clickDate.getTime() < this.selectedStart.getTime()) {
        // Clicked date is before start date -> update start date
        this.selectedStart = clickDate;
        this.selectedEnd = null;
      } else {
        // Clicked date is on or after start date -> set end date
        this.selectedEnd = clickDate;
      }
    } else {
      // 3. Both start and end dates are currently set
      if (clickDate.getTime() >= this.selectedStart.getTime()) {
        // Clicked date is on or after start date -> update/select end date!
        this.selectedEnd = clickDate;
      } else {
        // Clicked date is before start date -> set new start date and clear end date
        this.selectedStart = clickDate;
        this.selectedEnd = null;
      }
    }
    if (clickDate.getMonth() !== this.currentMonth.getMonth() || clickDate.getFullYear() !== this.currentMonth.getFullYear()) {
      this.currentMonth = new Date(clickDate.getFullYear(), clickDate.getMonth(), 1);
    }
    this.syncInputStrings();
    this.updateGrid();
  }
  onDayHover(date) {
    if (date) {
      this.hoverDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    } else {
      this.hoverDate = null;
    }
    if (this.selectedStart && !this.selectedEnd) {
      const startTime = this.selectedStart.getTime();
      const hoverTime = this.hoverDate ? this.hoverDate.getTime() : null;
      for (const cell of this.calendarGrid) {
        const time = cell.date.getTime();
        if (startTime !== null && hoverTime !== null) {
          const min = Math.min(startTime, hoverTime);
          const max = Math.max(startTime, hoverTime);
          cell.isPreview = time >= min && time <= max;
        } else {
          cell.isPreview = false;
        }
      }
    }
  }
  onStartDateInput(val) {
    this.startDateInput = val;
    const parsed = this.parseInputDateStr(val);
    if (parsed) {
      this.selectedStart = parsed;
      this.activePreset = 'custom';
      this.currentMonth = new Date(parsed.getFullYear(), parsed.getMonth(), 1);
      this.updateGrid();
    }
  }
  onEndDateInput(val) {
    this.endDateInput = val;
    const parsed = this.parseInputDateStr(val);
    if (parsed) {
      this.selectedEnd = parsed;
      this.activePreset = 'custom';
      this.updateGrid();
    }
  }
  onStartDateBlur() {
    const parsed = this.parseInputDateStr(this.startDateInput);
    if (parsed) {
      this.selectedStart = parsed;
      this.startDateInput = this.formatDateStr(parsed);
    } else if (!this.startDateInput.trim()) {
      this.selectedStart = null;
      this.startDateInput = '';
    } else {
      this.startDateInput = this.formatDateStr(this.selectedStart);
    }
    this.updateGrid();
  }
  onEndDateBlur() {
    const parsed = this.parseInputDateStr(this.endDateInput);
    if (parsed) {
      this.selectedEnd = parsed;
      this.endDateInput = this.formatDateStr(parsed);
    } else if (!this.endDateInput.trim()) {
      this.selectedEnd = null;
      this.endDateInput = '';
    } else {
      this.endDateInput = this.formatDateStr(this.selectedEnd);
    }
    this.updateGrid();
  }
  parseInputDateStr(val) {
    if (!val) return null;
    const clean = val.trim();
    // DD/MM/YYYY or DD-MM-YYYY or DD.MM.YYYY
    const ddmmyyyy = clean.match(/^(\d{1,2})[\/\-\.](\d{1,2})[\/\-\.](\d{4})$/);
    if (ddmmyyyy) {
      const d = parseInt(ddmmyyyy[1], 10);
      const m = parseInt(ddmmyyyy[2], 10) - 1;
      const y = parseInt(ddmmyyyy[3], 10);
      const dateObj = new Date(y, m, d);
      if (dateObj.getFullYear() === y && dateObj.getMonth() === m && dateObj.getDate() === d) {
        return dateObj;
      }
    }
    // YYYY-MM-DD
    const yyyymmdd = clean.match(/^(\d{4})[\/\-\.](\d{1,2})[\/\-\.](\d{1,2})$/);
    if (yyyymmdd) {
      const y = parseInt(yyyymmdd[1], 10);
      const m = parseInt(yyyymmdd[2], 10) - 1;
      const d = parseInt(yyyymmdd[3], 10);
      const dateObj = new Date(y, m, d);
      if (dateObj.getFullYear() === y && dateObj.getMonth() === m && dateObj.getDate() === d) {
        return dateObj;
      }
    }
    return null;
  }
  updateGrid() {
    const grid = [];
    const year = this.currentMonth.getFullYear();
    const month = this.currentMonth.getMonth();
    const firstOfMonth = new Date(year, month, 1);
    const lastOfMonth = new Date(year, month + 1, 0);
    // Monday-based indexing (0 = Mon, ..., 6 = Sun)
    let firstDayIndex = firstOfMonth.getDay() - 1;
    if (firstDayIndex === -1) firstDayIndex = 6;
    // Previous month padding
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const pDate = new Date(year, month - 1, prevMonthLastDay - i);
      grid.push(this.createCell(pDate, false));
    }
    // Current month days
    for (let i = 1; i <= lastOfMonth.getDate(); i++) {
      const cDate = new Date(year, month, i);
      grid.push(this.createCell(cDate, true));
    }
    // Next month padding to complete 42 cells (6 rows)
    const remaining = 42 - grid.length;
    for (let i = 1; i <= remaining; i++) {
      const nDate = new Date(year, month + 1, i);
      grid.push(this.createCell(nDate, false));
    }
    this.calendarGrid = grid;
  }
  createCell(date, isCurrentMonth) {
    const time = date.getTime();
    const startTime = this.selectedStart ? this.selectedStart.getTime() : null;
    const endTime = this.selectedEnd ? this.selectedEnd.getTime() : null;
    const hoverTime = this.hoverDate ? this.hoverDate.getTime() : null;
    const isStart = startTime !== null && time === startTime;
    const isEnd = endTime !== null && time === endTime;
    let isInRange = false;
    if (startTime !== null && endTime !== null) {
      isInRange = time >= startTime && time <= endTime;
    }
    let isPreview = false;
    if (startTime !== null && endTime === null && hoverTime !== null) {
      const min = Math.min(startTime, hoverTime);
      const max = Math.max(startTime, hoverTime);
      isPreview = time >= min && time <= max;
    }
    return {
      date,
      dayNumber: date.getDate(),
      isCurrentMonth,
      isStart,
      isEnd,
      hasEnd: endTime !== null,
      isInRange,
      isPreview
    };
  }
  get formattedStartDate() {
    return this.formatDateStr(this.selectedStart);
  }
  get formattedEndDate() {
    return this.formatDateStr(this.selectedEnd);
  }
  get rangeDaysCount() {
    if (!this.selectedStart || !this.selectedEnd) return 0;
    const diff = Math.abs(this.selectedEnd.getTime() - this.selectedStart.getTime());
    return Math.ceil(diff / (1000 * 3600 * 24)) + 1;
  }
  formatDateStr(date) {
    if (!date) return '';
    const dd = String(date.getDate()).padStart(2, '0');
    const mm = String(date.getMonth() + 1).padStart(2, '0');
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }
  onCancel() {
    this.dialogRef.close();
  }
  onApply() {
    this.dialogRef.close({
      startDate: this.selectedStart,
      endDate: this.selectedEnd
    });
  }
  static {
    this.ɵfac = function DateRangePickerDialogComponent_Factory(t) {
      return new (t || DateRangePickerDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MAT_DIALOG_DATA));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DateRangePickerDialogComponent,
      selectors: [["app-date-range-picker-dialog"]],
      decls: 44,
      vars: 23,
      consts: [[1, "date-range-modal-container", 3, "click"], [1, "presets-sidebar"], ["type", "button", 1, "preset-item", 3, "click"], [1, "calendar-main-panel"], [1, "month-nav-header"], ["type", "button", "aria-label", "Previous Month", 1, "nav-arrow-btn", 3, "click"], [1, "month-title-text"], ["type", "button", "aria-label", "Next Month", 1, "nav-arrow-btn", 3, "click"], [1, "weekdays-row"], ["class", "weekday-cell", 4, "ngFor", "ngForOf"], [1, "days-grid-container"], ["type", "button", "class", "day-grid-cell", 3, "other-month", "range-start", "range-end", "has-end", "in-range", "range-preview", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "picker-footer-bar"], [1, "footer-inputs-group"], ["type", "text", "placeholder", "DD/MM/YYYY", 1, "date-input-pill", 3, "value", "input", "blur"], [1, "range-dash"], ["class", "range-days-label", 4, "ngIf"], [1, "footer-action-buttons"], ["type", "button", 1, "btn-picker-cancel", 3, "click"], ["type", "button", 1, "btn-picker-apply", 3, "click"], [1, "weekday-cell"], ["type", "button", 1, "day-grid-cell", 3, "click", "mouseenter", "mouseleave"], [1, "day-number-label"], [1, "range-days-label"]],
      template: function DateRangePickerDialogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_div_click_0_listener($event) {
            return $event.stopPropagation();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_2_listener() {
            return ctx.selectPreset("today");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Today");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_4_listener() {
            return ctx.selectPreset("yesterday");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Yesterday");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_6_listener() {
            return ctx.selectPreset("this_week");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "This week");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_8_listener() {
            return ctx.selectPreset("last_week");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Last week");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_10_listener() {
            return ctx.selectPreset("this_month");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "This month");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_12_listener() {
            return ctx.selectPreset("last_month");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Last month");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_14_listener() {
            return ctx.selectPreset("this_year");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "This year");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_16_listener() {
            return ctx.selectPreset("last_year");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last year");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3)(19, "div", 4)(20, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_20_listener() {
            return ctx.prevMonth();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "chevron_left");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_25_listener() {
            return ctx.nextMonth();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "chevron_right");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, DateRangePickerDialogComponent_span_29_Template, 2, 1, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, DateRangePickerDialogComponent_button_31_Template, 3, 13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12)(33, "div", 13)(34, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DateRangePickerDialogComponent_Template_input_input_34_listener($event) {
            return ctx.onStartDateInput($event.target.value);
          })("blur", function DateRangePickerDialogComponent_Template_input_blur_34_listener() {
            return ctx.onStartDateBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DateRangePickerDialogComponent_Template_input_input_37_listener($event) {
            return ctx.onEndDateInput($event.target.value);
          })("blur", function DateRangePickerDialogComponent_Template_input_blur_37_listener() {
            return ctx.onEndDateBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, DateRangePickerDialogComponent_span_38_Template, 4, 1, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 17)(40, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_40_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_42_listener() {
            return ctx.onApply();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Apply");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "today");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "yesterday");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "this_week");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "last_week");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "this_month");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "last_month");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "this_year");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "last_year");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentMonthTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.weekDays);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.calendarGrid)("ngForTrackBy", ctx.trackByDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.startDateInput);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.endDateInput);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.rangeDaysCount > 0);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: [".date-range-modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  color: #334155;\n  -webkit-user-select: none;\n          user-select: none;\n}\n\n\n\n.presets-sidebar[_ngcontent-%COMP%] {\n  width: 140px;\n  padding: 16px 8px;\n  border-right: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #fafafa;\n}\n\nbutton.preset-item[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  text-align: left;\n  font-family: inherit;\n  width: 100%;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  padding: 8px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n}\nbutton.preset-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\nbutton.preset-item.active[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n  font-weight: 600;\n}\n\n\n\n.calendar-main-panel[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  min-width: 320px;\n}\n\n\n\n.month-nav-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n\n.month-title-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n  min-width: 120px;\n  text-align: center;\n}\n\n.nav-arrow-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #0284c7;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border-radius: 50%;\n  transition: background 0.15s ease;\n}\n.nav-arrow-btn[_ngcontent-%COMP%]:hover {\n  background: #e0f2fe;\n}\n.nav-arrow-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n\n\n\n.weekdays-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n  margin-bottom: 8px;\n}\n\n.weekday-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  padding: 4px 0;\n}\n\n\n\n.days-grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px 0;\n}\n\nbutton.day-grid-cell[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: inherit;\n  width: 100%;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  font-size: 13px;\n  font-weight: 500;\n  color: #334155;\n  box-sizing: border-box;\n  \n\n}\nbutton.day-grid-cell.other-month[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\nbutton.day-grid-cell[_ngcontent-%COMP%]:hover:not(.range-start):not(.range-end)   .day-number-label[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-radius: 50%;\n}\nbutton.day-grid-cell[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  z-index: 2;\n  pointer-events: none;\n  transition: background 0.15s ease, color 0.15s ease;\n}\nbutton.day-grid-cell.in-range[_ngcontent-%COMP%], button.day-grid-cell.range-preview[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\nbutton.day-grid-cell.in-range[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%], button.day-grid-cell.range-preview[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\nbutton.day-grid-cell.range-start[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  background: #0284c7;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 2px 4px rgba(2, 132, 199, 0.4);\n}\nbutton.day-grid-cell.range-start.has-end[_ngcontent-%COMP%], button.day-grid-cell.range-start.range-preview[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, transparent 50%, #e0f2fe 50%);\n}\nbutton.day-grid-cell.range-end[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, transparent 50%, #e0f2fe 50%);\n}\nbutton.day-grid-cell.range-end[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  background: #0284c7;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 2px 4px rgba(2, 132, 199, 0.4);\n}\nbutton.day-grid-cell.range-start.range-end[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n\n\n.picker-footer-bar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.footer-inputs-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.date-input-pill[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #334155;\n  background: #ffffff;\n  width: 96px;\n  text-align: center;\n  outline: none;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.date-input-pill[_ngcontent-%COMP%]:focus {\n  border-color: #0284c7;\n  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);\n}\n.date-input-pill[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n\n.range-dash[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n\n.range-days-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-left: 4px;\n}\n.range-days-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n\n.footer-action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.btn-picker-cancel[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #64748b;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-picker-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #334155;\n}\n\n.btn-picker-apply[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  border: none;\n  background: #0284c7;\n  color: #ffffff;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 2px 5px rgba(2, 132, 199, 0.3);\n  transition: background 0.15s ease, box-shadow 0.15s ease;\n}\n.btn-picker-apply[_ngcontent-%COMP%]:hover {\n  background: #0369a1;\n  box-shadow: 0 3px 8px rgba(2, 132, 199, 0.4);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZS1yYW5nZS1waWNrZXItZGlhbG9nL2RhdGUtcmFuZ2UtcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7QUFDRjs7QUFFQSxvQkFBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlDQUFBO0FBQ0Y7QUFDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUNKO0FBRUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBLHdCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUEscUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBREY7QUFHRTtFQUNFLG1CQUFBO0FBREo7QUFJRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZKOztBQU1BLG1CQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BLGNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQXlCQSxzREFBQTtBQTNCRjtBQUlFO0VBQ0UsY0FBQTtBQUZKO0FBTUk7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSk47QUFRRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1EQUFBO0FBTko7QUFVRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVJKO0FBVUk7RUFDRSxnQkFBQTtBQVJOO0FBYUk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBWE47QUFjSTtFQUNFLG1FQUFBO0FBWk47QUFnQkU7RUFDRSxrRUFBQTtBQWRKO0FBZ0JJO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0Q0FBQTtBQWROO0FBa0JFO0VBQ0Usa0NBQUE7QUFoQko7O0FBb0JBLGVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQWpCRjs7QUFvQkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMERBQUE7QUFqQkY7QUFtQkU7RUFDRSxxQkFBQTtFQUNBLDZDQUFBO0FBakJKO0FBb0JFO0VBQ0UsY0FBQTtBQWxCSjs7QUFzQkE7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFuQkY7O0FBc0JBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQW5CRjtBQXFCRTtFQUNFLGNBQUE7QUFuQko7O0FBdUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtBQXBCRjs7QUF1QkE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7QUFwQkY7QUFzQkU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFwQko7O0FBd0JBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSx3REFBQTtBQXJCRjtBQXVCRTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7QUFyQkoiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZS1yYW5nZS1tb2RhbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzM0MTU1O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLyogUHJlc2V0cyBTaWRlYmFyICovXG4ucHJlc2V0cy1zaWRlYmFyIHtcbiAgd2lkdGg6IDE0MHB4O1xuICBwYWRkaW5nOiAxNnB4IDhweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UyZThmMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XG59XG5cbmJ1dHRvbi5wcmVzZXQtaXRlbSB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzQ3NTU2OTtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZS1pbi1vdXQ7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICBjb2xvcjogIzFlMjkzYjtcbiAgfVxuXG4gICYuYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBmMmZlO1xuICAgIGNvbG9yOiAjMDI4NGM3O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLyogTWFpbiBDYWxlbmRhciBQYW5lbCAqL1xuLmNhbGVuZGFyLW1haW4tcGFuZWwge1xuICBwYWRkaW5nOiAxNnB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbi8qIE1vbnRoIE5hdmlnYXRpb24gKi9cbi5tb250aC1uYXYtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLm1vbnRoLXRpdGxlLXRleHQge1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWUyOTNiO1xuICBtaW4td2lkdGg6IDEyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXYtYXJyb3ctYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICMwMjg0Yzc7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2U7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2UwZjJmZTtcbiAgfVxuXG4gIG1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gICAgd2lkdGg6IDIycHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xuICB9XG59XG5cbi8qIFdlZWtkYXkgTGFiZWxzICovXG4ud2Vla2RheXMtcm93IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi53ZWVrZGF5LWNlbGwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjOTRhM2I4O1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLyogRGF5cyBHcmlkICovXG4uZGF5cy1ncmlkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDcsIDFmcik7XG4gIGdhcDogMnB4IDA7XG59XG5cbmJ1dHRvbi5kYXktZ3JpZC1jZWxsIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBvdXRsaW5lOiBub25lO1xuICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMzRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjMzM0MTU1O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICYub3RoZXItbW9udGgge1xuICAgIGNvbG9yOiAjY2JkNWUxO1xuICB9XG5cbiAgJjpob3Zlcjpub3QoLnJhbmdlLXN0YXJ0KTpub3QoLnJhbmdlLWVuZCkge1xuICAgIC5kYXktbnVtYmVyLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxuICB9XG5cbiAgLmRheS1udW1iZXItbGFiZWwge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyBlYXNlLCBjb2xvciAwLjE1cyBlYXNlO1xuICB9XG5cbiAgLyogUmFuZ2UgSGlnaGxpZ2h0cyBtYXRjaGluZyBJbWFnZSAxIGN5YW4vYmx1ZSB0aGVtZSAqL1xuICAmLmluLXJhbmdlLCAmLnJhbmdlLXByZXZpZXcge1xuICAgIGJhY2tncm91bmQ6ICNlMGYyZmU7XG4gICAgY29sb3I6ICMwMzY5YTE7XG5cbiAgICAuZGF5LW51bWJlci1sYWJlbCB7XG4gICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIH1cbiAgfVxuXG4gICYucmFuZ2Utc3RhcnQge1xuICAgIC5kYXktbnVtYmVyLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMjg0Yzc7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgyLCAxMzIsIDE5OSwgMC40KTtcbiAgICB9XG5cbiAgICAmLmhhcy1lbmQsICYucmFuZ2UtcHJldmlldyB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHRyYW5zcGFyZW50IDUwJSwgI2UwZjJmZSA1MCUpO1xuICAgIH1cbiAgfVxuXG4gICYucmFuZ2UtZW5kIHtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgdHJhbnNwYXJlbnQgNTAlLCAjZTBmMmZlIDUwJSk7XG5cbiAgICAuZGF5LW51bWJlci1sYWJlbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMDI4NGM3O1xuICAgICAgY29sb3I6ICNmZmZmZmY7XG4gICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMiwgMTMyLCAxOTksIDAuNCk7XG4gICAgfVxuICB9XG5cbiAgJi5yYW5nZS1zdGFydC5yYW5nZS1lbmQge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLyogRm9vdGVyIEJhciAqL1xuLnBpY2tlci1mb290ZXItYmFyIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbiAgcGFkZGluZy10b3A6IDE0cHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjFmNWY5O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMTJweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZm9vdGVyLWlucHV0cy1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4uZGF0ZS1pbnB1dC1waWxsIHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzNDE1NTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDk2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcblxuICAmOmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6ICMwMjg0Yzc7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMiwgMTMyLCAxOTksIDAuMTUpO1xuICB9XG5cbiAgJjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjOTRhM2I4O1xuICB9XG59XG5cbi5yYW5nZS1kYXNoIHtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5yYW5nZS1kYXlzLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgbWFyZ2luLWxlZnQ6IDRweDtcblxuICBzdHJvbmcge1xuICAgIGNvbG9yOiAjMDI4NGM3O1xuICB9XG59XG5cbi5mb290ZXItYWN0aW9uLWJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmJ0bi1waWNrZXItY2FuY2VsIHtcbiAgcGFkZGluZzogN3B4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xuICAgIGNvbG9yOiAjMzM0MTU1O1xuICB9XG59XG5cbi5idG4tcGlja2VyLWFwcGx5IHtcbiAgcGFkZGluZzogN3B4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzAyODRjNztcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjMpO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMDM2OWExO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDhweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjQpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 2893:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/heading/heading.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeadingComponent: () => (/* binding */ HeadingComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = ["*"];
class HeadingComponent {
  static {
    this.ɵfac = function HeadingComponent_Factory(t) {
      return new (t || HeadingComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeadingComponent,
      selectors: [["app-heading"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "app-heading"]],
      template: function HeadingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.app-heading[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin: 0.75rem 0;\n  color: var(--theme-3-text-1, #1e293b);\n  letter-spacing: -0.02em;\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.app-heading[_ngcontent-%COMP%]::before {\n  content: \"\";\n  width: 0.25rem;\n  height: 1.25rem;\n  background: linear-gradient(180deg, var(--button-1, #6366f1), var(--button-1-hover, #4f46e5));\n  border-radius: 0.125rem;\n  flex-shrink: 0;\n}\n.app-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .app-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .app-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .app-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .app-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .app-heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.3;\n}\n.app-heading[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n}\n.app-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.app-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.app-heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n}\n.app-heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.app-heading[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n.app-heading[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%], .app-heading[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.55);\n  margin-top: 0.125rem;\n  display: block;\n}\n\n.heading-lg[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.heading-md[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.55);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvaGVhZGluZy9oZWFkaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1BO0VBQ0UsY0FBQTtBQUxGOztBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFMRjtBQVFFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNkZBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFOSjtBQVVFO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FBUko7QUFXRTtFQUFLLGtCQUFBO0FBUlA7QUFTRTtFQUFLLGlCQUFBO0FBTlA7QUFPRTtFQUFLLGtCQUFBO0FBSlA7QUFLRTtFQUFLLG1CQUFBO0FBRlA7QUFHRTtFQUFLLGVBQUE7QUFBUDtBQUNFO0VBQUssbUJBQUE7QUFFUDtBQUNFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsMEJBQUE7QUFERiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyBTaGFyZWQgw6LCgMKTIEhlYWRpbmcgQ29tcG9uZW50ICh2Milcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiRlYXNlOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xuXG46aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYXBwLWhlYWRpbmcge1xuICBmb250LXdlaWdodDogNzAwO1xuICBtYXJnaW46IDAuNzVyZW0gMDtcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0xLCAjMWUyOTNiKTtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuXG4gIC8vIExlZnQgYWNjZW50IGJhclxuICAmOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHdpZHRoOiAwLjI1cmVtO1xuICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1idXR0b24tMSwgIzYzNjZmMSksIHZhcigtLWJ1dHRvbi0xLWhvdmVyLCAjNGY0NmU1KSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4xMjVyZW07XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAvLyBTaXplIHZhcmlhbnRzIHZpYSBuZy1jb250ZW50XG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xuICAgIG1hcmdpbjogMDtcbiAgICBsaW5lLWhlaWdodDogMS4zO1xuICB9XG5cbiAgaDEgeyBmb250LXNpemU6IDEuNzVyZW07IH1cbiAgaDIgeyBmb250LXNpemU6IDEuNXJlbTsgfVxuICBoMyB7IGZvbnQtc2l6ZTogMS4yNXJlbTsgfVxuICBoNCB7IGZvbnQtc2l6ZTogMS4xMjVyZW07IH1cbiAgaDUgeyBmb250LXNpemU6IDFyZW07IH1cbiAgaDYgeyBmb250LXNpemU6IDAuODc1cmVtOyB9XG5cbiAgLy8gU3VidGl0bGUgc3VwcG9ydFxuICAuc3VidGl0bGUsIHNtYWxsIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7XG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLy8gVXRpbGl0eSBjbGFzc2VzXG4uaGVhZGluZy1sZyB7XG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG59XG5cbi5oZWFkaW5nLW1kIHtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubXV0ZWQge1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 765:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderComponent: () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/loader.service */ 3657);




function LoaderComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div")(3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class LoaderComponent {
  constructor(loader) {
    this.loader = loader;
    this.loading$ = this.loader.loading$;
  }
  static {
    this.ɵfac = function LoaderComponent_Factory(t) {
      return new (t || LoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: LoaderComponent,
      selectors: [["app-loader"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
      decls: 2,
      vars: 3,
      consts: [["class", "app-loader", "role", "status", "aria-live", "polite", "aria-label", "Loading", 4, "ngIf"], ["role", "status", "aria-live", "polite", "aria-label", "Loading", 1, "app-loader"], ["aria-hidden", "true", 1, "lds-ripple"]],
      template: function LoaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LoaderComponent_div_0_Template, 4, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](1, "async");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](1, 1, ctx.loading$));
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.AsyncPipe],
      styles: ["@charset \"UTF-8\";\n.app-loader[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 2000;\n  background: rgba(15, 23, 42, 0.08);\n  backdrop-filter: blur(2px);\n}\n\n\n\n.oval-spinner[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  border: 3px solid transparent;\n  border-top-color: var(--theme-1, var(--button-1, #1e88e5));\n  border-right-color: rgba(30, 136, 229, 0.35);\n  animation: _ngcontent-%COMP%_oval-grow-spin 1.2s ease-in-out infinite;\n}\n\n\n\n@keyframes _ngcontent-%COMP%_oval-grow-spin {\n  0% {\n    transform: scale(0.35) rotate(0deg);\n    opacity: 0.4;\n  }\n  50% {\n    transform: scale(1) rotate(180deg);\n    opacity: 1;\n  }\n  100% {\n    transform: scale(0.35) rotate(360deg);\n    opacity: 0.4;\n  }\n}\n\n\n@media (prefers-reduced-motion: reduce) {\n  .oval-spinner[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.lds-ripple[_ngcontent-%COMP%], .lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n.lds-ripple[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: relative;\n  width: 80px;\n  height: 80px;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 4px solid currentColor;\n  opacity: 1;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;\n}\n\n.lds-ripple[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -0.5s;\n}\n\n@keyframes _ngcontent-%COMP%_lds-ripple {\n  0% {\n    top: 36px;\n    left: 36px;\n    width: 8px;\n    height: 8px;\n    opacity: 0;\n  }\n  4.9% {\n    top: 36px;\n    left: 36px;\n    width: 8px;\n    height: 8px;\n    opacity: 0;\n  }\n  5% {\n    top: 36px;\n    left: 36px;\n    width: 8px;\n    height: 8px;\n    opacity: 1;\n  }\n  100% {\n    top: 0;\n    left: 0;\n    width: 80px;\n    height: 80px;\n    opacity: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUErQ2hCO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxrQ0FBQTtFQUNBLDBCQUFBO0FBN0NGOztBQWdEQSxvREFBQTtBQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsMERBQUE7RUFDQSw0Q0FBQTtFQUNBLG1EQUFBO0FBN0NGOztBQWdEQSxtQ0FBQTtBQUNBO0VBQ0U7SUFDRSxtQ0FBQTtJQUNBLFlBQUE7RUE3Q0Y7RUErQ0E7SUFDRSxrQ0FBQTtJQUNBLFVBQUE7RUE3Q0Y7RUErQ0E7SUFDRSxxQ0FBQTtJQUNBLFlBQUE7RUE3Q0Y7QUFDRjtBQWdEQSxrQ0FBQTtBQUNBO0VBQ0U7SUFDRSxlQUFBO0VBOUNGO0FBQ0Y7QUFrREE7O0VBRUUsc0JBQUE7QUFoREY7O0FBbURBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBaERGOztBQWtEQTtFQUNFLGtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSw4REFBQTtBQS9DRjs7QUFpREE7RUFDRSxzQkFBQTtBQTlDRjs7QUFnREE7RUFDRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VBN0NGO0VBK0NBO0lBQ0UsU0FBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RUE3Q0Y7RUErQ0E7SUFDRSxTQUFBO0lBQ0EsVUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQTdDRjtFQStDQTtJQUNFLE1BQUE7SUFDQSxPQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxVQUFBO0VBN0NGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuYXBwLWxvYWRlciB7XG4vLyBcdHBvc2l0aW9uOiBmaXhlZDtcbi8vIFx0aW5zZXQ6IDA7IC8qIHRvcDowOyByaWdodDowOyBib3R0b206MDsgbGVmdDowICovXG4vLyBcdGRpc3BsYXk6IGZsZXg7XG4vLyBcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4vLyBcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuLy8gXHR6LWluZGV4OiAyMDAwO1xuLy8gXHRiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuMDgpOyAvKiBzdWJ0bGUgZGltICovXG4vLyBcdGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuLy8gfVxuXG4vLyAubG9hZGVyLXN2ZyB7XG4vLyBcdHdpZHRoOiAzcmVtOyAvKiBzY2FsYWJsZSAqL1xuLy8gXHRoZWlnaHQ6IDNyZW07XG4vLyBcdGRpc3BsYXk6IGJsb2NrO1xuLy8gfVxuXG4vLyAubG9hZGVyLXRyYWNrIHtcbi8vIFx0c3Ryb2tlOiB2YXIoLS1iZy0xLCAjZTZlZWY3KTtcbi8vIFx0b3BhY2l0eTogMC45O1xuLy8gfVxuXG4vLyAubG9hZGVyLWhlYWQge1xuLy8gXHRzdHJva2U6IHZhcigtLXRoZW1lLTEsICMxZTg4ZTUpO1xuLy8gXHRzdHJva2UtZGFzaGFycmF5OiA4NTtcbi8vIFx0c3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4vLyBcdHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG4vLyBcdGFuaW1hdGlvbjogbG9hZGVyLXJvdGF0ZSAxcyBsaW5lYXIgaW5maW5pdGUsIGxvYWRlci1kYXNoIDEuMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XG4vLyB9XG5cbi8vIEBrZXlmcmFtZXMgbG9hZGVyLXJvdGF0ZSB7IHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfSB9XG4vLyBAa2V5ZnJhbWVzIGxvYWRlci1kYXNoIHtcbi8vIFx0MCUgeyBzdHJva2UtZGFzaG9mZnNldDogODU7IH1cbi8vIFx0NTAlIHsgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIwOyB9XG4vLyBcdDEwMCUgeyBzdHJva2UtZGFzaG9mZnNldDogODU7IH1cbi8vIH1cblxuLy8gLyogUmVzcGVjdCB1c2VyIHByZWZlcmVuY2UgZm9yIHJlZHVjZWQgbW90aW9uICovXG4vLyBAbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuLy8gXHQubG9hZGVyLWhlYWQgeyBhbmltYXRpb246IG5vbmU7IH1cbi8vIFx0LmxvYWRlci1zdmcgeyB0cmFuc2l0aW9uOiBub25lOyB9XG4vLyB9XG5cbi8vIC8qIFNoYXJlZCBkZXNpZ24gaGVscGVycyAqL1xuLy8gLm11dGVkIHsgY29sb3I6ICM2Yjc4ODcgfVxuXG5cbi5hcHAtbG9hZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBpbnNldDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDIwMDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xufVxuXG4vKiA9PT0gT1BUSU9OIDE6IEluc2lkZSDDosKGwpIgT3V0c2lkZSBPdmFsIFNwaW5uZXIgPT09ICovXG4ub3ZhbC1zcGlubmVyIHtcbiAgd2lkdGg6IDNyZW07XG4gIGhlaWdodDogM3JlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDNweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogdmFyKC0tdGhlbWUtMSwgdmFyKC0tYnV0dG9uLTEsICMxZTg4ZTUpKTtcbiAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDMwLCAxMzYsIDIyOSwgMC4zNSk7XG4gIGFuaW1hdGlvbjogb3ZhbC1ncm93LXNwaW4gMS4ycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLyogSW5zaWRlIMOiwobCkiBPdXRzaWRlIGdyb3cgKyByb3RhdGUgKi9cbkBrZXlmcmFtZXMgb3ZhbC1ncm93LXNwaW4ge1xuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjM1KSByb3RhdGUoMGRlZyk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMTgwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zNSkgcm90YXRlKDM2MGRlZyk7XG4gICAgb3BhY2l0eTogMC40O1xuICB9XG59XG5cbi8qIEFjY2Vzc2liaWxpdHk6IHJlZHVjZWQgbW90aW9uICovXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xuICAub3ZhbC1zcGlubmVyIHtcbiAgICBhbmltYXRpb246IG5vbmU7XG4gIH1cbn1cblxuXG4ubGRzLXJpcHBsZSxcbi5sZHMtcmlwcGxlIGRpdiB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIFxufVxuLmxkcy1yaXBwbGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogODBweDtcbn1cbi5sZHMtcmlwcGxlIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyOiA0cHggc29saWQgY3VycmVudENvbG9yO1xuICBvcGFjaXR5OiAxO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGFuaW1hdGlvbjogbGRzLXJpcHBsZSAxcyBjdWJpYy1iZXppZXIoMCwgMC4yLCAwLjgsIDEpIGluZmluaXRlO1xufVxuLmxkcy1yaXBwbGUgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNXM7XG59XG5Aa2V5ZnJhbWVzIGxkcy1yaXBwbGUge1xuICAwJSB7XG4gICAgdG9wOiAzNnB4O1xuICAgIGxlZnQ6IDM2cHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDQuOSUge1xuICAgIHRvcDogMzZweDtcbiAgICBsZWZ0OiAzNnB4O1xuICAgIHdpZHRoOiA4cHg7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICA1JSB7XG4gICAgdG9wOiAzNnB4O1xuICAgIGxlZnQ6IDM2cHg7XG4gICAgd2lkdGg6IDhweDtcbiAgICBoZWlnaHQ6IDhweDtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDEwMCUge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4481:
/*!************************************************************************!*\
  !*** ./src/app/shared/components/navbar-main/navbar-main.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NavbarMainComponent: () => (/* binding */ NavbarMainComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/api.config */ 1892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../home/service/auth.service */ 2241);
/* harmony import */ var _services_page_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page-meta.service */ 3413);
/* harmony import */ var _services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/global-institute-context.service */ 4769);




















const _c0 = ["logoutConfirmationDialog"];
function NavbarMainComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18)(1, "div", 19)(2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 21)(5, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "notifications");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarMainComponent_div_6_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r4.openUserPanel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx_r0.instituteDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.instituteDisplayName);
  }
}
function NavbarMainComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarMainComponent_div_7_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r6.closeUserPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function NavbarMainComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25)(1, "div", 26)(2, "header", 27)(3, "div", 28)(4, "mat-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 30)(7, "h2", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "Sign out?");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "You will need to sign in again to access your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "footer", 33)(12, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarMainComponent_ng_template_34_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r8.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarMainComponent_ng_template_34_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r10.dialog.closeAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
}
class NavbarMainComponent {
  constructor(router, authService, pageMeta, _snackBar, dialog, http, globalInstituteContext) {
    this.router = router;
    this.authService = authService;
    this.pageMeta = pageMeta;
    this._snackBar = _snackBar;
    this.dialog = dialog;
    this.http = http;
    this.globalInstituteContext = globalInstituteContext;
    this.isUserPanelOpen = false;
    this.isLogin = false;
    this.moduleName = '';
    this.moduleData = '';
    this.instituteShortName = (() => {
      try {
        const userStr = sessionStorage.getItem('user');
        if (userStr) {
          const user = JSON.parse(userStr);
          return user?.institute_short_name || '';
        }
        return '';
      } catch (e) {
        return '';
      }
    })();
    this.username = sessionStorage.getItem('username') || 'Guest'; // Default to 'Guest' if username is not set
    this.userRole = sessionStorage.getItem('userRole') || 'unknown user role'; // Default to 'unknown user role' if not set
    this.displayName = this.getStoredDisplayName();
    this.displayInstitute = sessionStorage.getItem('institute') || '';
    this.instituteDisplayName = this.getStoredInstituteName();
    this.userObj = null;
    this.initials = this.username ? this.username.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase() : 'G';
    // subscribe to page meta service for dynamic module title/subtitle
    this.pageMetaSubscription = this.pageMeta.getMetaObservable().subscribe(m => {
      this.moduleName = m.title || '';
      this.moduleData = m.subtitle || '';
    });
    // subscribe to auth state so navbar updates immediately on login/logout
    this.authSubscription = this.authService.isLoggedIn$.subscribe(v => this.isLogin = !!v);
    this.userSubscription = this.authService.user$.subscribe(u => {
      if (u) {
        this.userObj = u;
        this.displayName = this.getUserDisplayName(u);
        this.displayInstitute = u.institute_name || u.institute || sessionStorage.getItem('institute') || '';
        this.instituteShortName = u.institute_short_name || this.instituteShortName;
        this.instituteDisplayName = this.getNavbarInstituteName(u.institute_name || u.institute || this.displayInstitute || this.instituteShortName);
        this.userRole = u.role || this.userRole;
        this.initials = (this.displayName || 'G').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
      } else {
        this.displayName = this.getStoredDisplayName();
        this.displayInstitute = sessionStorage.getItem('institute') || '';
        this.instituteDisplayName = this.getNavbarInstituteName();
        this.initials = (this.displayName || 'G').split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase();
      }
    });
    this.globalInstituteSubscription = this.globalInstituteContext.selectedInstitute$.subscribe(() => {
      this.instituteDisplayName = this.getNavbarInstituteName();
    });
    this.routerSubscription = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(() => {
      this.closeUserPanel();
    });
  }
  ngOnInit() {}
  getUserDisplayName(user, fallback = 'Guest') {
    const fullName = [user?.first_name, user?.last_name].filter(Boolean).join(' ').trim();
    return user?.full_name || user?.fullname || user?.fullName || user?.displayName || fullName || user?.user_name || user?.name || user?.email || fallback;
  }
  getStoredDisplayName() {
    try {
      const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
      if (raw) return this.getUserDisplayName(JSON.parse(raw), sessionStorage.getItem('username') || 'Guest');
    } catch (e) {/* ignore */}
    return sessionStorage.getItem('username') || 'Guest';
  }
  getStoredInstituteName() {
    try {
      const raw = sessionStorage.getItem('user') || sessionStorage.getItem('user_profile');
      if (raw) {
        const user = JSON.parse(raw);
        return user?.institute_name || user?.institute || user?.institute_short_name || sessionStorage.getItem('institute') || this.instituteShortName || '';
      }
    } catch (e) {/* ignore */}
    return sessionStorage.getItem('institute') || this.instituteShortName || '';
  }
  getNavbarInstituteName(fallback) {
    const activeInstitute = this.globalInstituteContext.activeContext;
    return activeInstitute?.institute_name || fallback || this.getStoredInstituteName();
  }
  openUserPanel(event) {
    if (event) event.stopPropagation();
    this.isUserPanelOpen = true;
  }
  closeUserPanel() {
    this.isUserPanelOpen = false;
  }
  updateLoginStatus() {
    // kept for compatibility; primary source of truth is AuthService
    this.isLogin = this.authService.isLoggedIn;
  }
  openSettings() {
    this.closeUserPanel();
    const role = String(this.userObj?.user_role || this.userObj?.role || sessionStorage.getItem('userRole') || '').toLowerCase();
    if (['admin', 'super_admin', 'superadmin', 'super-admin'].includes(role)) {
      this.router.navigate(['/admin/settings']);
    } else {
      this._snackBar.open('Settings are available to administrators only', 'Close', {
        duration: 3000
      });
    }
  }
  confirmLogout() {
    this.closeUserPanel();
    this.dialog.open(this.logoutConfirmationDialog, {
      width: '420px',
      panelClass: 'logout-dialog-panel'
    });
  }
  logout() {
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/logout`;
    // include token and user id from sessionStorage if available
    const payload = {};
    const token = sessionStorage.getItem('token');
    // parse user and attach user_id to payload if present
    let userId = null;
    // explicit saved key (some flows may write user_id separately)
    try {
      userId = sessionStorage.getItem('user_id') || null;
    } catch (e) {
      userId = null;
    }
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        // try a list of common id keys used by different backends
        const idKeys = ['id', 'user_id', 'userId', 'userid', '_id', 'uid'];
        for (const k of idKeys) {
          if (!userId && u && u[k] !== undefined && u[k] !== null) {
            userId = u[k];
            break;
          }
        }
      }
    } catch (e) {/* ignore parse errors */}
    // fallback: use username if no numeric id is available (server may accept this)
    if (!userId) {
      try {
        userId = sessionStorage.getItem('username') || null;
      } catch (e) {
        userId = null;
      }
    }
    if (userId) payload.user_id = userId;else console.warn('NavbarMainComponent.logout: user_id not found in sessionStorage; sending logout without user_id');
    // prepare headers: include Authorization only when token is present
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    this.http.post(url, payload, {
      headers,
      observe: 'response'
    }).subscribe({
      next: res => {
        // clear client session via AuthService so all subscribers update
        try {
          this.authService.logout();
        } catch (e) {
          try {
            sessionStorage.clear();
          } catch (e) {}
        }
        this.dialog.closeAll();
        this._snackBar.open('You have been logged out', 'Close', {
          duration: 3000
        });
        this.router.navigate(['/']);
      },
      error: err => {
        // Even if server logout failed, clear local session and notify user
        try {
          this.authService.logout();
        } catch (e) {
          try {
            sessionStorage.clear();
          } catch (e) {}
        }
        this.dialog.closeAll();
        this._snackBar.open('Logout completed locally (server not reachable).', 'Close', {
          duration: 4000
        });
        this.router.navigate(['/']);
      }
    });
  }
  ngOnDestroy() {
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
    if (this.authSubscription) this.authSubscription.unsubscribe();
    if (this.userSubscription) this.userSubscription.unsubscribe();
    if (this.pageMetaSubscription) this.pageMetaSubscription.unsubscribe();
    if (this.globalInstituteSubscription) this.globalInstituteSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function NavbarMainComponent_Factory(t) {
      return new (t || NavbarMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_page_meta_service__WEBPACK_IMPORTED_MODULE_2__.PageMetaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_3__.GlobalInstituteContextService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: NavbarMainComponent,
      selectors: [["app-navbar-main"]],
      viewQuery: function NavbarMainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.logoutConfirmationDialog = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      decls: 36,
      vars: 8,
      consts: [["role", "banner", 1, "navbar-main"], [1, "navbar-inner"], [1, "navbar-left"], [1, "app-title"], [1, "title"], ["class", "navbar-right", "role", "toolbar", "aria-label", "Top navigation actions", 4, "ngIf"], ["class", "user-panel-backdrop", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-label", "User menu", 1, "user-side-panel"], [1, "user-panel-header"], [1, "user-panel-identity"], ["aria-label", "Profile logo", 1, "profile-logo-inline", "profile-logo-inline--panel", 3, "title"], [1, "user-panel-title-block"], [1, "user-panel-eyebrow"], ["aria-label", "User menu options", 1, "user-panel-menu"], ["type", "button", 1, "user-panel-item", 3, "click"], ["fontSet", "material-icons-outlined"], [1, "user-panel-footer"], ["logoutConfirmationDialog", ""], ["role", "toolbar", "aria-label", "Top navigation actions", 1, "navbar-right"], ["role", "complementary", "aria-label", "Institute", 1, "institute-inline"], [1, "institute-inline-name", 3, "title"], ["mat-icon-button", "", "aria-label", "Show notifications", "title", "Notifications", 1, "navbar-icon-btn", "notifications-btn"], ["fontSet", "material-icons-outlined", 1, "navbar-icon"], ["mat-icon-button", "", "aria-label", "Open user menu", "title", "Menu", 1, "navbar-icon-btn", "user-menu-btn", 3, "click"], [1, "user-panel-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "logoutTitle", 1, "logout-modal-wrap"], ["tabindex", "-1", 1, "logout-card"], [1, "logout-header"], ["aria-hidden", "true", 1, "logout-graphic-wrap"], [1, "logout-graphic"], [1, "logout-titles"], ["id", "logoutTitle", 1, "logout-heading"], [1, "logout-sub"], ["role", "group", "aria-label", "Logout actions", 1, "modal-actions"], ["mat-flat-button", "", "aria-describedby", "logoutTitle", 1, "btn-logout", 3, "click"], ["mat-stroked-button", "", 1, "btn-cancel", 3, "click"]],
      template: function NavbarMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, NavbarMainComponent_div_6_Template, 10, 2, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, NavbarMainComponent_div_7_Template, 1, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "aside", 7)(9, "div", 8)(10, "div", 9)(11, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 11)(14, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Welcome");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "nav", 13)(19, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarMainComponent_Template_button_click_19_listener() {
            return ctx.openSettings();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "mat-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Settings");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavbarMainComponent_Template_button_click_24_listener() {
            return ctx.confirmLogout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16)(30, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, "v1.1.3");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "\u00A9 2026 Profluent Labs");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, NavbarMainComponent_ng_template_34_Template, 16, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.moduleName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogin);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isUserPanelOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("open", ctx.isUserPanelOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("title", ctx.displayName);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.initials);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.displayName);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatIconButton, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
      styles: [".navbar-main[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.97) 0%, rgba(248, 250, 252, 0.94) 100%);\n  backdrop-filter: blur(12px) saturate(180%);\n  color: var(--theme-2-text-1);\n  padding: 0.5rem 1.25rem;\n  position: relative;\n  z-index: 100;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.navbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  justify-content: space-between;\n  height: 100%;\n  max-width: 100%;\n}\n\n.navbar-left[_ngcontent-%COMP%] {\n  display: flow;\n  align-items: center;\n  gap: 2.5rem;\n  flex: 0 0 auto;\n  overflow: hidden;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(248, 250, 252, 0.18) 100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(99, 102, 241, 0.08) 100%);\n  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.08);\n  transform: translateY(-1px);\n}\n.app-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1rem;\n  line-height: 1.2;\n  background: linear-gradient(135deg, var(--theme-3-text-1) 0%, var(--theme-2-text-1) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-transform: capitalize;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  white-space: nowrap;\n  color: var(--theme-2-text-2);\n  text-transform: uppercase;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]::before {\n  content: \"//\";\n  font-weight: 700;\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  opacity: 1;\n  letter-spacing: 0.14em;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 0.35rem;\n  height: 0.35rem;\n  border-radius: 50%;\n  background: var(--button-1);\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);\n}\n.app-title[_ngcontent-%COMP%]:hover   .subtitle[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n}\n.app-title[_ngcontent-%COMP%]:hover   .subtitle[_ngcontent-%COMP%]::before {\n  transform: translateX(1px);\n}\n\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n\n.navbar-icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.625rem !important;\n  background: transparent;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: hidden;\n}\n.navbar-icon-btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.06) 100%);\n  border-radius: inherit;\n  opacity: 0;\n  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:hover   .navbar-icon[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  transform: scale(1.08);\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--button-1);\n  outline-offset: 2px;\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.97);\n}\n\n.navbar-icon[_ngcontent-%COMP%] {\n  font-family: \"Material Icons Outlined\" !important;\n  color: var(--theme-2-icon-1, #64748b);\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  z-index: 1;\n}\n\n.notifications-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0.25rem;\n  right: 0.25rem;\n  width: 0.75rem;\n  height: 0.75rem;\n  background: var(--button-1);\n  border-radius: 50%;\n  border: 2.5px solid var(--bg-1);\n  box-shadow: 0 2px 6px rgba(99, 102, 241, 0.4);\n  animation: _ngcontent-%COMP%_pulse-badge 2s ease-in-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-badge {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n}\n.user-menu-btn[_ngcontent-%COMP%]:hover::before {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%);\n}\n\n.user-panel-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(15, 23, 42, 0.58);\n  backdrop-filter: blur(1px);\n  animation: _ngcontent-%COMP%_backdropFadeIn 0.18s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.user-side-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1001;\n  width: min(20rem, 86vw);\n  height: 100vh;\n  background: var(--theme-1);\n  color: var(--theme-1-text-1);\n  border-left: 1px solid rgba(255, 255, 255, 0.06);\n  box-shadow: -18px 0 40px rgba(15, 23, 42, 0.28);\n  transform: translateX(100%);\n  transition: transform 0.24s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.user-side-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.user-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 6.25rem;\n  padding: 1.25rem;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.user-panel-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 0;\n}\n\n.user-panel-title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n\n.user-panel-eyebrow[_ngcontent-%COMP%] {\n  color: var(--theme-1-text-2);\n  opacity: 0.5;\n  font-size: 0.625rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  line-height: 1.4;\n}\n\n.user-panel-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-1-text-1);\n  font-size: 0.875rem;\n  font-weight: 600;\n  line-height: 1.4;\n  letter-spacing: 0.01em;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  overflow-wrap: anywhere;\n}\n\n.user-panel-menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  flex: 1 1 auto;\n  padding: 0.5rem;\n}\n\n.user-panel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  border: 0;\n  border-radius: 0.5rem;\n  background: transparent;\n  color: var(--theme-1-text-2);\n  padding: 0.5625rem 0.75rem;\n  text-align: left;\n  font: inherit;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.4;\n  letter-spacing: 0.01em;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-user-select: none;\n  user-select: none;\n}\n\n.user-panel-item[_ngcontent-%COMP%]:hover, .user-panel-item[_ngcontent-%COMP%]:focus-visible {\n  background: rgba(255, 255, 255, 0.07);\n  color: var(--theme-1-text-1);\n  transform: translateX(2px);\n  outline: none;\n}\n\n.user-panel-item[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n\n.user-panel-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.4375rem;\n  color: var(--theme-1-icon-1);\n  font-size: 1.1875rem;\n  flex-shrink: 0;\n  opacity: 0.6;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.user-panel-item[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .user-panel-item[_ngcontent-%COMP%]:focus-visible   mat-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--theme-1-text-1);\n  transform: scale(1.05);\n}\n\n.user-panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.15rem;\n  padding: 0.75rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n  color: var(--theme-1-text-2);\n  font-size: 0.625rem;\n  line-height: 1.5;\n  text-align: center;\n  opacity: 0.3;\n}\n\n@keyframes _ngcontent-%COMP%_backdropFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.user-profile-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 1.75rem;\n  background: linear-gradient(180deg, transparent 0%, var(--theme-3-text-3) 25%, var(--theme-3-text-3) 75%, transparent 100%);\n  margin: 0 0.375rem;\n  opacity: 0.4;\n}\n\n.institute-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-width: 0;\n  padding: 0.35rem 0.25rem;\n  background: transparent;\n  color: var(--theme-2-text-1);\n}\n\n.institute-inline-name[_ngcontent-%COMP%] {\n  color: var(--theme-2-text-1);\n  font-size: 1rem;\n  font-weight: 500;\n  line-height: 1.25;\n  white-space: normal;\n  overflow: visible;\n  text-overflow: clip;\n  max-width: min(52vw, 42rem);\n  text-align: right;\n}\n\n.profile-logo-inline[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.02em;\n  text-transform: uppercase;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);\n  position: relative;\n}\n\n.profile-logo-inline[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  bottom: -2px;\n  right: -2px;\n  width: 0.65rem;\n  height: 0.65rem;\n  background: var(--button-1);\n  border-radius: 50%;\n  border: 2.5px solid var(--bg-1);\n  box-shadow: 0 1px 3px rgba(99, 102, 241, 0.35);\n}\n\n.profile-logo-inline--panel[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  font-size: 0.875rem;\n  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.28);\n}\n\n.profile-logo-inline--panel[_ngcontent-%COMP%]::after {\n  border-color: var(--theme-1);\n}\n\n.logout-modal-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n\n.logout-card[_ngcontent-%COMP%] {\n  width: 360px;\n  max-width: 92vw;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 1.5rem;\n  box-shadow: 0 32px 64px -16px rgba(15, 23, 42, 0.18), 0 0 0 1px var(--theme-3-border), inset 0 1px 0 var(--bg-1);\n  padding: 2rem 1.75rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.5rem;\n  animation: _ngcontent-%COMP%_modalPopIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n@keyframes _ngcontent-%COMP%_modalPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.9) translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.logout-graphic-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.08);\n  position: relative;\n  animation: _ngcontent-%COMP%_pulseRing 2s ease-out infinite;\n}\n.logout-graphic-wrap[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: -6px;\n  border-radius: 50%;\n  border: 2px solid rgba(99, 102, 241, 0.15);\n}\n\n@keyframes _ngcontent-%COMP%_pulseRing {\n  0% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.2);\n  }\n  70% {\n    box-shadow: 0 0 0 12px rgba(99, 102, 241, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);\n  }\n}\n.logout-graphic[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--button-1);\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.logout-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.logout-titles[_ngcontent-%COMP%]   .logout-heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n}\n\n.logout-titles[_ngcontent-%COMP%]   .logout-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  line-height: 1.4;\n  font-weight: 500;\n  max-width: 280px;\n}\n\n.logout-body[_ngcontent-%COMP%] {\n  padding: 0.75rem 0 1rem;\n}\n\n.logout-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-3-text-2);\n  font-size: 0.875rem;\n  line-height: 1.6;\n  font-weight: 450;\n  max-width: 300px;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  width: 100%;\n  padding-top: 0.5rem;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2.75rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 0.75rem !important;\n  border: 1px solid var(--theme-3-border) !important;\n  color: var(--theme-3-text-2) !important;\n  background: var(--bg-2) !important;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn-cancel[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-logout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2.75rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 0.75rem !important;\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%) !important;\n  color: var(--button-text-1) !important;\n  border: none !important;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n  filter: brightness(1.05);\n}\n.btn-logout[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);\n}\n\n@media (max-width: 720px) {\n  .navbar-main[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem;\n  }\n  .navbar-inner[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .navbar-left[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .app-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .institute-inline-name[_ngcontent-%COMP%] {\n    max-width: 48vw;\n  }\n  .navbar-icon[_ngcontent-%COMP%] {\n    font-size: 1.125rem;\n    width: 1.125rem;\n    height: 1.125rem;\n  }\n}\n@media (max-width: 480px) {\n  .navbar-main[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.5rem;\n  }\n  .navbar-inner[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .navbar-left[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .navbar-right[_ngcontent-%COMP%] {\n    gap: 0.25rem;\n  }\n  .user-profile-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .institute-inline[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.2rem;\n  }\n  .institute-inline-name[_ngcontent-%COMP%] {\n    max-width: 54vw;\n    font-size: 0.875rem;\n  }\n  .navbar-icon-btn[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n  .navbar-icon[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 1rem;\n    height: 1rem;\n  }\n  .logout-icon[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 1rem;\n    height: 1rem;\n  }\n  .logout-card[_ngcontent-%COMP%] {\n    padding: 1.25rem;\n    gap: 1rem;\n    width: 90vw;\n  }\n  .logout-graphic[_ngcontent-%COMP%] {\n    width: 2.75rem;\n    height: 2.75rem;\n    padding: 0.625rem;\n    font-size: 1.25rem;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    gap: 0.5rem;\n  }\n  .btn-cancel[_ngcontent-%COMP%], .btn-logout[_ngcontent-%COMP%] {\n    min-width: auto;\n    flex: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyLW1haW4vbmF2YmFyLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxpR0FBQTtFQUVBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQVBGOztBQWFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVZGOztBQWFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUdBQUE7RUFDQSxtSkFBQTtBQVZKO0FBWUk7RUFDRSxnR0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7QUFWTjtBQWFFO0VBQ0ksZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQix5RkFBQTtFQUEyRiw2QkFBQTtFQUErQixvQ0FBQTtFQUFzQyxxQkFBQTtFQUF1Qix1QkFBQTtFQUF5QixtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix1QkFBQTtFQUF5QixrQkFBQTtFQUFvQixxQkFBQTtFQUF1Qix1QkFBQTtFQUFBLGtCQUFBO0VBQW9CLDBCQUFBO0VBQTJCLGlHQUFBO0FBSXJhO0FBQUU7RUFDSSxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0Isc0JBQUE7RUFBd0IsbUJBQUE7RUFBcUIsNEJBQUE7RUFBOEIseUJBQUE7RUFBMkIsa0dBQUE7QUFXMU07QUFWTTtFQUFZLGFBQUE7RUFBZSxnQkFBQTtFQUFrQixtRkFBQTtFQUFxRiw2QkFBQTtFQUErQixvQ0FBQTtFQUFzQyxxQkFBQTtFQUF1QixVQUFBO0VBQVksc0JBQUE7RUFBd0IsdURBQUE7QUFxQnhRO0FBcEJNO0VBQVcsV0FBQTtFQUFhLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixrQkFBQTtFQUFvQiwyQkFBQTtFQUE2Qiw4Q0FBQTtBQTRCaEg7QUF6Qkk7RUFBb0IsMEJBQUE7QUE0QnhCO0FBM0JJO0VBQTRCLDBCQUFBO0FBOEJoQzs7QUF4QkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBMkJGOztBQXJCQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0RBQUE7RUFDQSxnQkFBQTtBQXdCRjtBQXRCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw4RkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHNEQUFBO0FBd0JKO0FBckJFO0VBQ0UsMkJBQUE7QUF1Qko7QUFyQkk7RUFDRSxVQUFBO0FBdUJOO0FBcEJJO0VBQ0Usc0JBQUE7RUFDQSxzQkFBQTtBQXNCTjtBQWxCRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7QUFvQko7QUFqQkU7RUFDRSxvQ0FBQTtBQW1CSjs7QUFmQTtFQUNFLGlEQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsdURBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFrQkY7O0FBZEE7RUFBNEIsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLFlBQUE7RUFBYyxjQUFBO0VBQWdCLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQiwyQkFBQTtFQUE2QixrQkFBQTtFQUFvQiwrQkFBQTtFQUFpQyw2Q0FBQTtFQUErQyw4Q0FBQTtBQTRCN1A7O0FBMUJBO0VBQ0U7SUFBVyxtQkFBQTtFQThCWDtFQTdCQTtJQUFNLHNCQUFBO0VBZ0NOO0FBQ0Y7QUE3QnVCO0VBQVksK0ZBQUE7QUFnQ25DOztBQTlCQTtFQUNFLGVBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBRUEsMEJBQUE7RUFDQSw0REFBQTtBQWlDRjs7QUE5QkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtFQUNBLGdEQUFBO0VBQ0EsK0NBQUE7RUFDQSwyQkFBQTtFQUNBLHdEQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFpQ0Y7O0FBOUJBO0VBQXdCLHdCQUFBO0FBa0N4Qjs7QUFoQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0RBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQW1DRjs7QUFoQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFtQ0Y7O0FBaENBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFtQ0Y7O0FBaENBOztFQUVFLHFDQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7QUFtQ0Y7O0FBaENBO0VBQTBCLHNCQUFBO0FBb0MxQjs7QUFsQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxpREFBQTtBQXFDRjs7QUFsQ0E7O0VBRUUsVUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUFxQ0Y7O0FBbENBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsK0NBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFxQ0Y7O0FBbENBO0VBQ0U7SUFBTyxVQUFBO0VBc0NQO0VBckNBO0lBQUssVUFBQTtFQXdDTDtBQUNGO0FBcENBO0VBQXdCLFVBQUE7RUFBWSxlQUFBO0VBQWlCLDJIQUFBO0VBQTZILGtCQUFBO0VBQW9CLFlBQUE7QUEyQ3RNOztBQXZDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7QUEwQ0Y7O0FBdkNBO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QUEwQ0Y7O0FBdkNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1GQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7QUEwQ0Y7O0FBdkNBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhDQUFBO0FBMENGOztBQXZDQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtBQTBDRjs7QUF2Q0E7RUFDRSw0QkFBQTtBQTBDRjs7QUF0Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUF5Q0Y7O0FBdENBO0VBQWUsWUFBQTtFQUFjLGVBQUE7RUFBaUIscUVBQUE7RUFBdUUscUJBQUE7RUFBdUIsZ0hBQUE7RUFBa0gsNkJBQUE7RUFBK0IsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXFCLGtCQUFBO0VBQW9CLFdBQUE7RUFBYSxrRUFBQTtBQXFEMVg7O0FBbkRBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esc0NBQUE7RUFzREY7RUFwREE7SUFDRSxVQUFBO0lBQ0EsaUNBQUE7RUFzREY7QUFDRjtBQW5EQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQXFERjs7QUFsREE7RUFBdUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGFBQUE7RUFBZSxjQUFBO0VBQWdCLGtCQUFBO0VBQW9CLG9DQUFBO0VBQXNDLGtCQUFBO0VBQW9CLHlDQUFBO0FBOERqTTtBQTlENE87RUFBWSxXQUFBO0VBQWEsa0JBQUE7RUFBb0IsV0FBQTtFQUFhLGtCQUFBO0VBQW9CLDBDQUFBO0FBcUUxVDs7QUFuRUE7RUFBdUI7SUFBSywyQ0FBQTtFQXdFMUI7RUF4RXlFO0lBQU0sNENBQUE7RUEyRS9FO0VBM0UrSDtJQUFPLHlDQUFBO0VBOEV0STtBQUNGO0FBN0VBO0VBQWtCLHVCQUFBO0VBQXlCLHNCQUFBO0VBQXdCLGVBQUE7RUFBaUIsV0FBQTtFQUFhLFlBQUE7RUFBYyxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7QUF1Rm5KOztBQXJGQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQXdGRjs7QUFyRkE7RUFBaUMsU0FBQTtFQUFXLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLDRCQUFBO0VBQThCLGdCQUFBO0VBQWtCLHVCQUFBO0FBOEZuSTs7QUE1RkE7RUFBNkIsU0FBQTtFQUFXLG9CQUFBO0VBQXNCLDRCQUFBO0VBQThCLGdCQUFBO0VBQWtCLGdCQUFBO0VBQWtCLGdCQUFBO0FBcUdoSTs7QUFuR0E7RUFDRSx1QkFBQTtBQXNHRjs7QUFuR0E7RUFBZSxTQUFBO0VBQVcsNEJBQUE7RUFBOEIsbUJBQUE7RUFBcUIsZ0JBQUE7RUFBa0IsZ0JBQUE7RUFBa0IsZ0JBQUE7QUE0R2pIOztBQTFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUE2R0Y7O0FBMUdBO0VBQWMsV0FBQTtFQUFhLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIsa0RBQUE7RUFBNkIsaUNBQUE7RUFBbUMsa0RBQUE7RUFBb0QsdUNBQUE7RUFBeUMsa0NBQUE7QUFzSGhQO0FBdEhvUjtFQUFVLDJCQUFBO0FBeUg5UjtBQXpINlQ7RUFBVyx3QkFBQTtBQTRIeFU7O0FBMUhBO0VBQWMsV0FBQTtFQUFhLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIsa0RBQUE7RUFBNkIsaUNBQUE7RUFBbUMsOEZBQUE7RUFBZ0csc0NBQUE7RUFBd0MsdUJBQUE7RUFBeUIsK0NBQUE7QUF1SXBUO0FBdklxVztFQUFVLDJCQUFBO0VBQTZCLCtDQUFBO0VBQWlELHdCQUFBO0FBNEk3YjtBQTVJeWQ7RUFBVyx3QkFBQTtFQUEwQiw2Q0FBQTtBQWdKOWY7O0FBM0lBO0VBQ0U7SUFDRSx5QkFBQTtFQThJRjtFQTNJQTtJQUNFLFlBQUE7RUE2SUY7RUExSUE7SUFDRSxXQUFBO0VBNElGO0VBeklBO0lBQ0UsYUFBQTtFQTJJRjtFQXhJQTtJQUNFLGVBQUE7RUEwSUY7RUF2SUE7SUFDRSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXlJRjtBQUNGO0FBbklBO0VBQ0U7SUFDRSx3QkFBQTtFQXFJRjtFQWxJQTtJQUNFLFdBQUE7RUFvSUY7RUFqSUE7SUFDRSxhQUFBO0VBbUlGO0VBaElBO0lBQ0UsWUFBQTtFQWtJRjtFQS9IQTtJQUNFLGFBQUE7RUFpSUY7RUE5SEE7SUFDRSx1QkFBQTtFQWdJRjtFQTdIQTtJQUNFLGVBQUE7SUFDQSxtQkFBQTtFQStIRjtFQTVIQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0VBOEhGO0VBM0hBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBNkhGO0VBMUhBO0lBQ0UsZUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0VBNEhGO0VBekhBO0lBQ0UsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtFQTJIRjtFQXhIQTtJQUNFLGNBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQTBIRjtFQXZIQTtJQUNFLFdBQUE7RUF5SEY7RUF0SEE7O0lBRUUsZUFBQTtJQUNBLE9BQUE7RUF3SEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIiRlYXNlOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4kZWFzZS1zbW9vdGg6IGN1YmljLWJlemllcigwLjI1LCAwLjQ2LCAwLjQ1LCAwLjk0KTtcclxuJGVhc2UtYm91bmNlOiBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcbiRlYXNlLXNwcmluZzogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMiwgMS4yNzUpO1xyXG5cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vIE5BVkJBUiBNQUlOIMOiwoDClCBNb2Rlcm4gR2xhc3Ntb3JwaGlzbSBEZXNpZ25cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi5uYXZiYXItbWFpbiB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjk3KSAwJSwgcmdiYSgyNDgsIDI1MCwgMjUyLCAwLjk0KSAxMDAlKTtcclxuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTJweCkgc2F0dXJhdGUoMTgwJSk7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTItdGV4dC0xKTtcclxuICBwYWRkaW5nOiAwLjVyZW0gMS4yNXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzICRlYXNlO1xyXG59XHJcblxyXG4ubmF2YmFyLWlubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gTEVGVCBTRUNUSU9OIMOiwoDClCBUaXRsZS9Nb2R1bGUgSW5mb1xyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLm5hdmJhci1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbG93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAyLjVyZW07XHJcbiAgZmxleDogMCAwIGF1dG87XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmFwcC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIG1pbi13aWR0aDogMDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC44NzVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzIpIDAlLCByZ2JhKDI0OCwgMjUwLCAyNTIsIDAuMTgpIDEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2UsIGJhY2tncm91bmQgMC4zcyAkZWFzZSwgYm94LXNoYWRvdyAwLjNzICRlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTUpIDAlLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wOCkgMTAwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjA4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgfVxyXG5cclxuICAudGl0bGUge1xyXG4gICAgICBmb250LXdlaWdodDogODAwOyBmb250LXNpemU6IDFyZW07IGxpbmUtaGVpZ2h0OiAxLjI7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLTMtdGV4dC0xKSAwJSwgdmFyKC0tdGhlbWUtMi10ZXh0LTEpIDEwMCUpOyAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7IGxldHRlci1zcGFjaW5nOiAtMC4wMmVtOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiBmaXQtY29udGVudDsgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2UsIGZpbHRlciAwLjNzICRlYXNlO1xyXG4gICAgICAvLyAmOjphZnRlciB7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGJvdHRvbTogLTJweDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMi41cHg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgNTAlLCB2YXIoLS1idXR0b24tMSkgMTAwJSk7IGJvcmRlci1yYWRpdXM6IDFweDsgYm94LXNoYWRvdzogMCAwIDEycHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMzUpOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAkZWFzZSwgYm94LXNoYWRvdyAwLjNzICRlYXNlOyB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0OyB9XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjVyZW07IGZvbnQtc2l6ZTogMC43NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgbGV0dGVyLXNwYWNpbmc6IDAuMTJlbTsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgY29sb3I6IHZhcigtLXRoZW1lLTItdGV4dC0yKTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2UsIG9wYWNpdHkgMC4zcyAkZWFzZTtcclxuICAgICAgJjo6YmVmb3JlIHsgY29udGVudDogJy8vJzsgZm9udC13ZWlnaHQ6IDcwMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSk7IC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IGJhY2tncm91bmQtY2xpcDogdGV4dDsgb3BhY2l0eTogMTsgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2U7IH1cclxuICAgICAgJjo6YWZ0ZXIgeyBjb250ZW50OiAnJzsgd2lkdGg6IDAuMzVyZW07IGhlaWdodDogMC4zNXJlbTsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6IDAgMCAwIDRweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4xMik7IH1cclxuICB9XHJcblxyXG4gICAgJjpob3ZlciAuc3VidGl0bGUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTsgfVxyXG4gICAgJjpob3ZlciAuc3VidGl0bGU6OmJlZm9yZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XHJcbn1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBSSUdIVCBTRUNUSU9OIMOiwoDClCBBY3Rpb25zICYgVXNlclxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLm5hdmJhci1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4vLyBJY29uIEJ1dHRvbnMgw6LCgMKUIE1vZGVybiBHbG93IFN0eWxlXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ubmF2YmFyLWljb24tYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMSkgMCUsIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA2KSAxMDAlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjI1cyAkZWFzZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgwLjk3KTtcclxuICB9XHJcbn1cclxuXHJcbi5uYXZiYXItaWNvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyBPdXRsaW5lZCcgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMi1pY29uLTEsICM2NDc0OGIpO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB3aWR0aDogMS4yNXJlbTtcclxuICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlLWJvdW5jZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLy8gTm90aWZpY2F0aW9uIGJhZGdlIGFuaW1hdGlvblxyXG4ubm90aWZpY2F0aW9ucy1idG46OmFmdGVyIHsgY29udGVudDogJyc7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwLjI1cmVtOyByaWdodDogMC4yNXJlbTsgd2lkdGg6IDAuNzVyZW07IGhlaWdodDogMC43NXJlbTsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpOyBib3JkZXItcmFkaXVzOiA1MCU7IGJvcmRlcjogMi41cHggc29saWQgdmFyKC0tYmctMSk7IGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC40KTsgYW5pbWF0aW9uOiBwdWxzZS1iYWRnZSAycyBlYXNlLWluLW91dCBpbmZpbml0ZTsgfVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS1iYWRnZSB7XHJcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxyXG59XHJcblxyXG4vLyBVc2VyIHNpZGUgcGFuZWxcbi51c2VyLW1lbnUtYnRuOmhvdmVyIHsgJjo6YmVmb3JlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTIpIDAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4wOCkgMTAwJSk7IH0gfVxuXG4udXNlci1wYW5lbC1iYWNrZHJvcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaW5zZXQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC41OCk7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDFweCk7XG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxcHgpO1xuICBhbmltYXRpb246IGJhY2tkcm9wRmFkZUluIDAuMThzICRlYXNlO1xufVxuXG4udXNlci1zaWRlLXBhbmVsIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB6LWluZGV4OiAxMDAxO1xuICB3aWR0aDogbWluKDIwcmVtLCA4NnZ3KTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMSk7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcbiAgYm94LXNoYWRvdzogLTE4cHggMCA0MHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4yOCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjRzICRlYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udXNlci1zaWRlLXBhbmVsLm9wZW4geyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7IH1cblxuLnVzZXItcGFuZWwtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNi4yNXJlbTtcbiAgcGFkZGluZzogMS4yNXJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG59XG5cbi51c2VyLXBhbmVsLWlkZW50aXR5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi51c2VyLXBhbmVsLXRpdGxlLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjI1cmVtO1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi51c2VyLXBhbmVsLWV5ZWJyb3cge1xuICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTIpO1xuICBvcGFjaXR5OiAwLjU7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG59XG5cbi51c2VyLXBhbmVsLWhlYWRlciBoMiB7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0xKTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93LXdyYXA6IGFueXdoZXJlO1xufVxuXG4udXNlci1wYW5lbC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjE4NzVyZW07XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi51c2VyLXBhbmVsLWl0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNzVyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMik7XG4gIHBhZGRpbmc6IDAuNTYyNXJlbSAwLjc1cmVtO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250OiBpbmhlcml0O1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS40O1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLnVzZXItcGFuZWwtaXRlbTpob3Zlcixcbi51c2VyLXBhbmVsLWl0ZW06Zm9jdXMtdmlzaWJsZSB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNyk7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4udXNlci1wYW5lbC1pdGVtOmFjdGl2ZSB7IHRyYW5zZm9ybTogc2NhbGUoMC45OCk7IH1cblxuLnVzZXItcGFuZWwtaXRlbSBtYXQtaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW07XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLWljb24tMSk7XG4gIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgb3BhY2l0eTogMC42O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcbn1cblxuLnVzZXItcGFuZWwtaXRlbTpob3ZlciBtYXQtaWNvbixcbi51c2VyLXBhbmVsLWl0ZW06Zm9jdXMtdmlzaWJsZSBtYXQtaWNvbiB7XG4gIG9wYWNpdHk6IDE7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG59XG5cbi51c2VyLXBhbmVsLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMC4xNXJlbTtcbiAgcGFkZGluZzogMC43NXJlbTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNCk7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMik7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG5Aa2V5ZnJhbWVzIGJhY2tkcm9wRmFkZUluIHtcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgdG8geyBvcGFjaXR5OiAxOyB9XG59XG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLy8gRGl2aWRlciDDosKAwpQgR3JhZGllbnQgRmFkZVxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLnVzZXItcHJvZmlsZS1kaXZpZGVyIHsgd2lkdGg6IDFweDsgaGVpZ2h0OiAxLjc1cmVtOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB0cmFuc3BhcmVudCAwJSwgdmFyKC0tdGhlbWUtMy10ZXh0LTMpIDI1JSwgdmFyKC0tdGhlbWUtMy10ZXh0LTMpIDc1JSwgdHJhbnNwYXJlbnQgMTAwJSk7IG1hcmdpbjogMCAwLjM3NXJlbTsgb3BhY2l0eTogMC40OyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoBcclxuLy8gSW5zdGl0dXRlIEluZm9cbi5pbnN0aXR1dGUtaW5saW5lIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWluLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwLjM1cmVtIDAuMjVyZW07XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tdGhlbWUtMi10ZXh0LTEpO1xufVxuXG4uaW5zdGl0dXRlLWlubGluZS1uYW1lIHtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMi10ZXh0LTEpO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgdGV4dC1vdmVyZmxvdzogY2xpcDtcclxuICBtYXgtd2lkdGg6IG1pbig1MnZ3LCA0MnJlbSk7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cblxuLnByb2ZpbGUtbG9nby1pbmxpbmUge1xuICB3aWR0aDogMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJ1dHRvbi0xKSAwJSwgdmFyKC0tYnV0dG9uLTEtaG92ZXIpIDEwMCUpO1xuICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMyk7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLnByb2ZpbGUtbG9nby1pbmxpbmU6OmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMnB4O1xuICByaWdodDogLTJweDtcbiAgd2lkdGg6IDAuNjVyZW07XG4gIGhlaWdodDogMC42NXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMi41cHggc29saWQgdmFyKC0tYmctMSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zNSk7XG59XG5cbi5wcm9maWxlLWxvZ28taW5saW5lLS1wYW5lbCB7XG4gIHdpZHRoOiAyLjc1cmVtO1xuICBoZWlnaHQ6IDIuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJveC1zaGFkb3c6IDAgOHB4IDIwcHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMjgpO1xufVxuXG4ucHJvZmlsZS1sb2dvLWlubGluZS0tcGFuZWw6OmFmdGVyIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS0xKTtcbn1cbi8vIExPR09VVCBNT0RBTCDDosKAwpQgTW9kZXJuIENlbnRlcmVkIERlc2lnblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLmxvZ291dC1tb2RhbC13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG59XHJcblxyXG4ubG9nb3V0LWNhcmQgeyB3aWR0aDogMzYwcHg7IG1heC13aWR0aDogOTJ2dzsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXItcmFkaXVzOiAxLjVyZW07IGJveC1zaGFkb3c6IDAgMzJweCA2NHB4IC0xNnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4xOCksIDAgMCAwIDFweCB2YXIoLS10aGVtZS0zLWJvcmRlciksIGluc2V0IDAgMXB4IDAgdmFyKC0tYmctMSk7IHBhZGRpbmc6IDJyZW0gMS43NXJlbSAxLjc1cmVtOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBjZW50ZXI7IGdhcDogMC41cmVtOyBhbmltYXRpb246IG1vZGFsUG9wSW4gMC40cyAkZWFzZS1zcHJpbmc7IH1cclxuXHJcbkBrZXlmcmFtZXMgbW9kYWxQb3BJbiB7XHJcbiAgMCUge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KSB0cmFuc2xhdGVZKDEwcHgpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubG9nb3V0LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAxcmVtO1xyXG59XHJcblxyXG4ubG9nb3V0LWdyYXBoaWMtd3JhcCB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB3aWR0aDogNC41cmVtOyBoZWlnaHQ6IDQuNXJlbTsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wOCk7IHBvc2l0aW9uOiByZWxhdGl2ZTsgYW5pbWF0aW9uOiBwdWxzZVJpbmcgMnMgZWFzZS1vdXQgaW5maW5pdGU7ICY6OmJlZm9yZSB7IGNvbnRlbnQ6ICcnOyBwb3NpdGlvbjogYWJzb2x1dGU7IGluc2V0OiAtNnB4OyBib3JkZXItcmFkaXVzOiA1MCU7IGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOTksIDEwMiwgMjQxLCAwLjE1KTsgfSB9XHJcblxyXG5Aa2V5ZnJhbWVzIHB1bHNlUmluZyB7IDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4yKTsgfSA3MCUgeyBib3gtc2hhZG93OiAwIDAgMCAxMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwKTsgfSAxMDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDk5LCAxMDIsIDI0MSwgMCk7IH0gfVxyXG5cclxuLmxvZ291dC1ncmFwaGljIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGZvbnQtc2l6ZTogMnJlbTsgd2lkdGg6IDJyZW07IGhlaWdodDogMnJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuXHJcbi5sb2dvdXQtdGl0bGVzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMzc1cmVtO1xyXG59XHJcblxyXG4ubG9nb3V0LXRpdGxlcyAubG9nb3V0LWhlYWRpbmcgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMS4zNzVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMSk7IGxpbmUtaGVpZ2h0OiAxLjM7IGxldHRlci1zcGFjaW5nOiAtMC4wMmVtOyB9XHJcblxyXG4ubG9nb3V0LXRpdGxlcyAubG9nb3V0LXN1YiB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAwLjgxMjVyZW07IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IGxpbmUtaGVpZ2h0OiAxLjQ7IGZvbnQtd2VpZ2h0OiA1MDA7IG1heC13aWR0aDogMjgwcHg7IH1cclxuXHJcbi5sb2dvdXQtYm9keSB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwIDFyZW07XHJcbn1cclxuXHJcbi5sb2dvdXQtZGVzYyB7IG1hcmdpbjogMDsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTsgZm9udC1zaXplOiAwLjg3NXJlbTsgbGluZS1oZWlnaHQ6IDEuNjsgZm9udC13ZWlnaHQ6IDQ1MDsgbWF4LXdpZHRoOiAzMDBweDsgfVxyXG5cclxuLm1vZGFsLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbn1cclxuXHJcbi5idG4tY2FuY2VsIHsgd2lkdGg6IDEwMCU7IGhlaWdodDogMi43NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjg3NXJlbTsgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlOyBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7IGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpICFpbXBvcnRhbnQ7IGJhY2tncm91bmQ6IHZhcigtLWJnLTIpICFpbXBvcnRhbnQ7ICY6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7IH0gJjphY3RpdmUgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxyXG5cclxuLmJ0bi1sb2dvdXQgeyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAyLjc1cmVtOyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuODc1cmVtOyB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2U7IGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSkgIWltcG9ydGFudDsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpICFpbXBvcnRhbnQ7IGJvcmRlcjogbm9uZSAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjI1KTsgJjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zNSk7IGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTsgfSAmOmFjdGl2ZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjIpOyB9IH1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBSRVNQT05TSVZFIMOiwoDClCBUQUJMRVRcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5uYXZiYXItbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1pbm5lciB7XHJcbiAgICBnYXA6IDAuNzVyZW07XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWxlZnQge1xyXG4gICAgZ2FwOiAxLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYXBwLXRpdGxlIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuaW5zdGl0dXRlLWlubGluZS1uYW1lIHtcclxuICAgIG1heC13aWR0aDogNDh2dztcclxuICB9XHJcblxyXG4gIC5uYXZiYXItaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBSRVNQT05TSVZFIMOiwoDClCBNT0JJTEVcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5uYXZiYXItbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWlubmVyIHtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1sZWZ0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLXJpZ2h0IHtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICB9XHJcblxyXG4gIC51c2VyLXByb2ZpbGUtZGl2aWRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmluc3RpdHV0ZS1pbmxpbmUge1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjJyZW07XHJcbiAgfVxyXG5cclxuICAuaW5zdGl0dXRlLWlubGluZS1uYW1lIHtcclxuICAgIG1heC13aWR0aDogNTR2dztcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWljb24tYnRuIHtcclxuICAgIHdpZHRoOiAyLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dC1jYXJkIHtcclxuICAgIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICB3aWR0aDogOTB2dztcclxuICB9XHJcblxyXG4gIC5sb2dvdXQtZ3JhcGhpYyB7XHJcbiAgICB3aWR0aDogMi43NXJlbTtcclxuICAgIGhlaWdodDogMi43NXJlbTtcclxuICAgIHBhZGRpbmc6IDAuNjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWFjdGlvbnMge1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG5cclxuICAuYnRuLWNhbmNlbCxcclxuICAuYnRuLWxvZ291dCB7XHJcbiAgICBtaW4td2lkdGg6IGF1dG87XHJcbiAgICBmbGV4OiAxO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 8277:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/side-nav/side-nav.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SideNavComponent: () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/directives/directives.module */ 1445);
/* harmony import */ var _icons_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/icon.module */ 5594);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/service/auth.service */ 2241);
/* harmony import */ var _directives_has_access_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/has-access.directive */ 9191);















function SideNavComponent_aside_0_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 11);
  }
}
function SideNavComponent_aside_0_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "img", 12);
  }
}
function SideNavComponent_aside_0_ng_container_9_ng_container_1_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](m_r5.label);
  }
}
const _c0 = function () {
  return {
    exact: false
  };
};
const _c1 = function (a0) {
  return {
    "active": a0
  };
};
function SideNavComponent_aside_0_ng_container_9_ng_container_1_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SideNavComponent_aside_0_ng_container_9_ng_container_1_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);
      const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r12.onMenuClick(m_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SideNavComponent_aside_0_ng_container_9_ng_container_1_a_1_span_3_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", m_r5.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, ctx_r9.selectedMenu === m_r5.label))("matTooltip", m_r5.label)("matTooltipDisabled", !ctx_r9.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx_r9.selectedMenu === m_r5.label ? "page" : null)("data-tooltip", m_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("svgIcon", m_r5.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r9.collapsed);
  }
}
function SideNavComponent_aside_0_ng_container_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideNavComponent_aside_0_ng_container_9_ng_container_1_a_1_Template, 4, 12, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hasAccess", ctx_r6.permissionNameForMenu(m_r5.label))("hasAccessHasAccessAction", "view");
  }
}
function SideNavComponent_aside_0_ng_container_9_ng_template_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](m_r5.label);
  }
}
function SideNavComponent_aside_0_ng_container_9_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SideNavComponent_aside_0_ng_container_9_ng_template_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);
      const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.onMenuClick(m_r5));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SideNavComponent_aside_0_ng_container_9_ng_template_2_span_3_Template, 2, 1, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", m_r5.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](9, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c1, ctx_r8.selectedMenu === m_r5.label))("matTooltip", m_r5.label)("matTooltipDisabled", !ctx_r8.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-current", ctx_r8.selectedMenu === m_r5.label ? "page" : null)("data-tooltip", m_r5.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("svgIcon", m_r5.icon || "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r8.collapsed);
  }
}
const _c2 = function () {
  return ["Users", "Question Banks", "Questions", "Manage test", "Schedule Test"];
};
function SideNavComponent_aside_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, SideNavComponent_aside_0_ng_container_9_ng_container_1_Template, 2, 2, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, SideNavComponent_aside_0_ng_container_9_ng_template_2_Template, 4, 12, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](2, _c2).includes(m_r5.label))("ngIfElse", _r7);
  }
}
function SideNavComponent_aside_0_footer_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer", 21)(1, "p", 22)(2, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "v1.1.3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "\u00A9 2026 Profluent Labs");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
}
function SideNavComponent_aside_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "aside", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, SideNavComponent_aside_0_img_3_Template, 1, 0, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, SideNavComponent_aside_0_img_4_Template, 1, 0, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SideNavComponent_aside_0_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r23.toggleCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "nav", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, SideNavComponent_aside_0_ng_container_9_Template, 4, 3, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, SideNavComponent_aside_0_footer_10_Template, 6, 0, "footer", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("collapsed", ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matTooltip", ctx_r0.collapsed ? "Expand sidebar" : "Collapse sidebar")("matTooltipDisabled", !ctx_r0.collapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-expanded", !ctx_r0.collapsed)("aria-label", ctx_r0.collapsed ? "Expand sidebar" : "Collapse sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.collapsed ? "chevron_right" : "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r0.menus);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.collapsed);
  }
}
const _c3 = ["*"];
// export class SideNavComponent { }
class SideNavComponent {
  get hostCollapsed() {
    return this.collapsed;
  }
  constructor(router, authService) {
    this.router = router;
    this.authService = authService;
    // class bindings are handled in the template; no HostBinding needed
    this.isLogin = false;
    this.userRole = null;
    this.userName = sessionStorage.getItem('username') || '';
    this.userInstitute = sessionStorage.getItem('userInstitute') || '';
    this.menus = [];
    this.collapsed = false;
    // track last clicked menu label so it remains highlighted until another side-nav item is clicked
    this.selectedMenu = null;
    /** Route-to-menu mapping for related routes */
    this.routeToMenuMap = {
      '/user-register': 'Users',
      '/view-users': 'Users',
      '/category': 'Question Banks',
      '/category-create': 'Question Banks',
      '/view-questions': 'Questions',
      '/questions': 'Questions',
      '/exams': 'Manage test',
      '/create-exam': 'Manage test',
      '/view-schedule-exam': 'Schedule Test',
      '/schedule-exam': 'Schedule Test',
      '/view-institutes': 'Institutes',
      '/institute-register': 'Institutes',
      '/admin/exam-reports': 'Test Reports',
      '/user/exam/run': 'Test inbox'
    };
    // Check login status initially
    // Subscribe to AuthService so UI responds immediately to login/logout
    this.authSubscription = this.authService.isLoggedIn$.subscribe(v => {
      this.isLogin = !!v;
      this.setupMenus();
    });
    this.userSubscription = this.authService.user$.subscribe(u => {
      if (u) {
        this.userRole = u.role || this.userRole;
        this.userName = u.name || this.userName;
        this.userInstitute = u.institute_name || u.institute || this.userInstitute || '';
      } else {
        this.userRole = sessionStorage.getItem('userRole');
        this.userName = sessionStorage.getItem('username') || '';
      }
      this.setupMenus();
    });
    // Subscribe to router events to check login status after navigation
    this.routerSubscription = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd)).subscribe(event => {
      // keep previous route-change based checks
      this.setupMenus();
      // Update selectedMenu based on current URL
      this.updateSelectedMenuFromUrl(event.urlAfterRedirects || this.router.url);
    });
  }
  ngOnInit() {
    // Set initial selected menu based on current URL
    this.updateSelectedMenuFromUrl(this.router.url);
  }
  /** Updates selectedMenu by finding which menu path matches the current URL */
  updateSelectedMenuFromUrl(url) {
    if (!url || !this.menus.length) return;
    // Check the route mapping first
    for (const [route, menuLabel] of Object.entries(this.routeToMenuMap)) {
      if (url.startsWith(route)) {
        this.selectedMenu = menuLabel;
        return;
      }
    }
    // Fallback: find menu whose path is a prefix of the current URL
    const matched = this.menus.find(m => url.startsWith(m.path));
    this.selectedMenu = matched?.label || null;
  }
  onMenuClick(menu) {
    try {
      this.selectedMenu = menu?.label || null;
    } catch (e) {
      this.selectedMenu = null;
    }
  }
  permissionNameForMenu(label) {
    if (label === 'Question Banks') return 'Categories';
    if (label === 'Manage test') return 'Exams';
    if (label === 'Schedule Test') return 'Schedule Exam';
    if (label === 'Test Reports') return 'Exam Reports';
    return label;
  }
  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.updateParentSidenavClass();
  }
  updateParentSidenavClass() {
    try {
      const parent = document.querySelector('.app-sidenav');
      if (parent) {
        if (this.collapsed) parent.classList.add('sidenav-collapsed');else parent.classList.remove('sidenav-collapsed');
      }
    } catch (e) {/* no-op */}
  }
  // Method to update login status from sessionStorage
  // legacy method kept but primary sources are AuthService observables
  updateLoginStatus() {
    const loginStatus = sessionStorage.getItem('isLogin');
    this.isLogin = loginStatus === 'true';
    const raw = sessionStorage.getItem('user');
    if (raw) {
      try {
        this.userRole = JSON.parse(raw).role;
      } catch (e) {
        this.userRole = sessionStorage.getItem('userRole');
      }
    } else {
      this.userRole = sessionStorage.getItem('userRole');
    }
    try {
      const parsed = raw ? JSON.parse(raw) : null;
      this.userInstitute = parsed?.institute_name || parsed?.institute || sessionStorage.getItem('userInstitute') || '';
    } catch (e) {
      this.userInstitute = sessionStorage.getItem('userInstitute') || '';
    }
    this.setupMenus();
  }
  setupMenus() {
    // default empty
    this.menus = [];
    if (!this.isLogin) return;
    const role = (this.userRole || '').toLowerCase();
    if (role === 'super_admin' || role === 'super-admin') {
      this.menus.push({
        label: 'Super Admin Dashboard',
        path: '/super-admin-dashboard',
        icon: 'dashboard'
      });
      this.menus.push({
        label: 'Institutes',
        path: '/view-institutes',
        icon: 'institute'
      });
    }
    if (role === 'admin' || role === 'super_admin' || role === 'super-admin') {
      // admin and super-admin may see admin tools
      this.menus.push({
        label: 'Admin Dashboard',
        path: '/admin-dashboard',
        icon: 'admin'
      });
      this.menus.push({
        label: 'Users',
        path: '/view-users',
        icon: 'users'
      });
      this.menus.push({
        label: 'Question Banks',
        path: '/category',
        icon: 'category'
      });
      this.menus.push({
        label: 'Questions',
        path: '/view-questions',
        icon: 'quiz'
      });
      this.menus.push({
        label: 'Manage test',
        path: '/exams',
        icon: 'exam'
      });
      this.menus.push({
        label: 'Schedule Test',
        path: '/view-schedule-exam',
        icon: 'calendar'
      });
      this.menus.push({
        label: 'Test Reports',
        path: '/admin/exam-reports',
        icon: 'report'
      });
    }
    if (role === 'user' || role === 'candidate' || role === 'admin' || role === 'super_admin' || role === 'super-admin') {
      // Admins retain their management menus and also receive the candidate entry points.
      this.menus.push({
        label: 'User Dashboard',
        path: '/user-dashboard',
        icon: 'user'
      });
      this.menus.push({
        label: 'Test inbox',
        path: '/user/exam',
        icon: 'assignment'
      });
    }
    // After menus are set, update selected menu based on current URL
    this.updateSelectedMenuFromUrl(this.router.url);
  }
  ngOnDestroy() {
    if (this.routerSubscription) this.routerSubscription.unsubscribe();
    if (this.authSubscription) this.authSubscription.unsubscribe();
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }
  static {
    this.ɵfac = function SideNavComponent_Factory(t) {
      return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: SideNavComponent,
      selectors: [["app-side-nav"]],
      hostVars: 2,
      hostBindings: function SideNavComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("collapsed", ctx.hostCollapsed);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c3,
      decls: 1,
      vars: 1,
      consts: [["class", "app-side-nav", "role", "navigation", "aria-label", "Main navigation", 3, "collapsed", 4, "ngIf"], ["role", "navigation", "aria-label", "Main navigation", 1, "app-side-nav"], [1, "side-top"], [1, "logo-wrap"], ["class", "institute-logo institute-logo-expanded", "src", "/assets/images/logo-main.png", "alt", "Institute logo", "loading", "lazy", 4, "ngIf"], ["class", "institute-logo institute-logo-collapsed", "src", "/assets/images/logo.png", "alt", "", "loading", "lazy", 4, "ngIf"], ["matTooltipPosition", "right", "matTooltipClass", "sidenav-stylish-tooltip", "matTooltipShowDelay", "100", 1, "collapse-toggle", 3, "matTooltip", "matTooltipDisabled", "click"], [1, "collapse-icon"], ["role", "menubar", "aria-label", "Main menu", 1, "menu"], [4, "ngFor", "ngForOf"], ["class", "side-bottom", 4, "ngIf"], ["src", "/assets/images/logo-main.png", "alt", "Institute logo", "loading", "lazy", 1, "institute-logo", "institute-logo-expanded"], ["src", "/assets/images/logo.png", "alt", "", "loading", "lazy", 1, "institute-logo", "institute-logo-collapsed"], [4, "ngIf", "ngIfElse"], ["plainLink", ""], ["class", "menu-item", "role", "menuitem", "routerLinkActive", "active", "matTooltipPosition", "right", "matTooltipClass", "sidenav-stylish-tooltip", "matTooltipShowDelay", "100", 3, "routerLink", "routerLinkActiveOptions", "ngClass", "matTooltip", "matTooltipDisabled", "click", 4, "hasAccess", "hasAccessHasAccessAction"], ["role", "menuitem", "routerLinkActive", "active", "matTooltipPosition", "right", "matTooltipClass", "sidenav-stylish-tooltip", "matTooltipShowDelay", "100", 1, "menu-item", 3, "routerLink", "routerLinkActiveOptions", "ngClass", "matTooltip", "matTooltipDisabled", "click"], [1, "menu-icon-wrap"], [1, "menu-icon", 3, "svgIcon"], ["class", "menu-label", 4, "ngIf"], [1, "menu-label"], [1, "side-bottom"], [1, "app-version"], [1, "version-label"], [1, "copyright"]],
      template: function SideNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, SideNavComponent_aside_0_Template, 12, 11, "aside", 0);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__.MatIcon, src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _directives_has_access_directive__WEBPACK_IMPORTED_MODULE_3__.HasAccessDirective, _icons_icon_module__WEBPACK_IMPORTED_MODULE_1__.IconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_9__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__.MatTooltip],
      styles: [".app-side-nav[_ngcontent-%COMP%] {\n  background: var(--theme-1);\n  color: var(--theme-1-text-1);\n  height: 100vh;\n  width: var(--sidenav-width);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  z-index: 60;\n  overflow: hidden;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.side-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2.5rem 0.75rem;\n  height: var(--topbar-height, 3.5rem);\n  min-height: var(--topbar-height, 3.5rem);\n  flex-shrink: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.logo-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 0;\n  flex: 1;\n}\n\n.institute-logo[_ngcontent-%COMP%] {\n  display: block;\n  object-fit: contain;\n  opacity: 0.92;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.institute-logo[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.institute-logo-expanded[_ngcontent-%COMP%] {\n  max-width: 11rem;\n  max-height: 2.5rem;\n}\n\n.institute-logo-collapsed[_ngcontent-%COMP%] {\n  max-width: 1.75rem;\n  max-height: 1.75rem;\n}\n\n.collapse-toggle[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.375rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.collapse-toggle[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--theme-1-text-2);\n  opacity: 0.5;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.collapse-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: scale(1.1);\n}\n.collapse-toggle[_ngcontent-%COMP%]:hover   .collapse-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.collapse-toggle[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  flex: 1 1 auto;\n  padding: 0.5rem 0.5rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n}\n.menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 2px;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  color: var(--theme-1-text-2);\n  text-decoration: none;\n  padding: 0.5625rem 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 0.5rem;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: var(--theme-1-text-1);\n  transform: translateX(2px);\n}\n.menu-item[_ngcontent-%COMP%]:hover   .menu-icon-wrap[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.menu-item[_ngcontent-%COMP%]:hover   .menu-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.menu-item.active[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;\n}\n.menu-item.active[_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n}\n.menu-item.active[_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--button-text-1);\n}\n.menu-item.active[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--button-text-1);\n}\n.menu-item[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.menu-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--button-1);\n  outline-offset: 2px;\n}\n\n.menu-icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.4375rem;\n  flex-shrink: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  width: 1.1875rem;\n  height: 1.1875rem;\n  color: var(--theme-1-icon-1);\n  opacity: 0.6;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.menu-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.4;\n  letter-spacing: 0.01em;\n}\n\n.side-bottom[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n}\n\n.app-version[_ngcontent-%COMP%] {\n  color: var(--theme-1-text-2);\n  opacity: 0.3;\n  text-align: center;\n  font-size: 0.625rem;\n  margin: 0;\n  line-height: 1.5;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-version[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.version-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0.7;\n  margin-top: 1px;\n}\n\n.app-side-nav.collapsed[_ngcontent-%COMP%] {\n  width: 3.75rem;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .side-top[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  justify-content: center;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .logo-wrap[_ngcontent-%COMP%] {\n  justify-content: left;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .collapse-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.375rem;\n  top: 1rem;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.375rem;\n  align-items: center;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  gap: 0;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  left: calc(100% + 0.625rem);\n  top: 50%;\n  transform: translateY(-50%) translateX(-6px) scale(0.95);\n  background: var(--theme-1, #374151);\n  color: var(--theme-1-text-1, #ffffff);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.015em;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  z-index: 1000;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0) scale(1);\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%] {\n  width: 1.875rem;\n  height: 1.875rem;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .side-bottom[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 992px) {\n  .app-side-nav[_ngcontent-%COMP%] {\n    width: 3.75rem;\n    position: fixed;\n    left: 0;\n    top: 0;\n    height: 100vh;\n    z-index: 65;\n    box-shadow: 1px 0 6px rgba(0, 0, 0, 0.08);\n  }\n  .side-top[_ngcontent-%COMP%] {\n    padding: 0 0.5rem;\n    justify-content: center;\n  }\n  .menu-label[_ngcontent-%COMP%], .institute-logo-expanded[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .menu-item[_ngcontent-%COMP%] {\n    justify-content: center;\n    padding: 0.5rem;\n    width: 2.5rem;\n    height: 2.5rem;\n    gap: 0;\n  }\n  .menu-item[_ngcontent-%COMP%]::after {\n    content: attr(data-tooltip);\n    position: absolute;\n    left: calc(100% + 0.625rem);\n    top: 50%;\n    transform: translateY(-50%) translateX(-6px) scale(0.95);\n    background: var(--theme-1, #374151);\n    color: var(--theme-1-text-1, #ffffff);\n    padding: 0.375rem 0.75rem;\n    border-radius: 0.375rem;\n    font-size: 0.8125rem;\n    font-weight: 500;\n    letter-spacing: 0.015em;\n    white-space: nowrap;\n    pointer-events: none;\n    opacity: 0;\n    transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n    z-index: 1000;\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n    border: 1px solid rgba(255, 255, 255, 0.12);\n  }\n  .menu-item[_ngcontent-%COMP%]:hover::after {\n    opacity: 1;\n    transform: translateY(-50%) translateX(0) scale(1);\n  }\n  .menu-item[_ngcontent-%COMP%]:hover {\n    transform: none;\n  }\n  .menu[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.375rem;\n    align-items: center;\n  }\n  .menu-icon-wrap[_ngcontent-%COMP%] {\n    width: 1.875rem;\n    height: 1.875rem;\n  }\n  .collapse-toggle[_ngcontent-%COMP%] {\n    position: absolute;\n    right: 0.375rem;\n    top: 1rem;\n  }\n  .side-bottom[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%] {\n    width: var(--sidenav-width);\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%]   .side-top[_ngcontent-%COMP%] {\n    padding: 0 0.75rem;\n    justify-content: space-between;\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%], .app-side-nav.expanded[_ngcontent-%COMP%]   .institute-logo-expanded[_ngcontent-%COMP%] {\n    display: block !important;\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%]   .institute-logo-collapsed[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    padding: 0.5625rem 0.75rem;\n    width: auto;\n    height: auto;\n    gap: 0.75rem;\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    align-items: stretch;\n  }\n  .app-side-nav.expanded[_ngcontent-%COMP%]   .side-bottom[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FBUEY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxrREFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0FBUkY7QUFTRTtFQUFVLFVBQUE7QUFOWjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0FBTkY7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFOSjtBQVNFO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtBQVBKO0FBUUk7RUFBaUIsVUFBQTtBQUxyQjtBQVFFO0VBQ0UscUJBQUE7QUFOSjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFVRTtFQUF1QixVQUFBO0FBUHpCO0FBUUU7RUFBNkIsdUJBQUE7QUFML0I7QUFNRTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFTQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQU5GO0FBU0U7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUFQSjtBQVNJO0VBQ0Usc0JBQUE7QUFQTjtBQVVJO0VBQ0UsVUFBQTtBQVJOO0FBYUU7RUFFRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUZBQUE7QUFaSjtBQWVJO0VBQ0UscUNBQUE7QUFiTjtBQWNNO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FBWlI7QUFnQkk7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBZE47QUFtQkU7RUFDRSxzQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7QUFsQko7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0FBbkJGOztBQXNCQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FBbkJGOztBQXNCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBbkJGOztBQXVCQTtFQUNFLGdCQUFBO0VBQ0EsK0NBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQXBCRjtBQXFCRTtFQUFVLFlBQUE7QUFsQlo7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXNCQTtFQUNFLGNBQUE7QUFuQkY7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBbkJKO0FBc0JFO0VBQWEscUJBQUE7QUFuQmY7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBbkJKO0FBc0JFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXVCRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtBQXJCSjtBQXdCSTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSx3REFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxzREFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0FBdEJOO0FBeUJJO0VBQ0UsVUFBQTtFQUNBLGtEQUFBO0FBdkJOO0FBMEJJO0VBQ0UsZUFBQTtBQXhCTjtBQTRCRTtFQUFjLGFBQUE7QUF6QmhCO0FBMkJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBekJKO0FBNEJFO0VBQWUsYUFBQTtBQXpCakI7O0FBNkJBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsZUFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsYUFBQTtJQUNBLFdBQUE7SUFDQSx5Q0FBQTtFQTFCRjtFQTZCQTtJQUNFLGlCQUFBO0lBQ0EsdUJBQUE7RUEzQkY7RUE4QkE7O0lBRUUsd0JBQUE7RUE1QkY7RUErQkE7SUFDRSx1QkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtJQUNBLE1BQUE7RUE3QkY7RUErQkU7SUFDRSwyQkFBQTtJQUNBLGtCQUFBO0lBQ0EsMkJBQUE7SUFDQSxRQUFBO0lBQ0Esd0RBQUE7SUFDQSxtQ0FBQTtJQUNBLHFDQUFBO0lBQ0EseUJBQUE7SUFDQSx1QkFBQTtJQUNBLG9CQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtJQUNBLG1CQUFBO0lBQ0Esb0JBQUE7SUFDQSxVQUFBO0lBQ0Esc0RBQUE7SUFDQSxhQUFBO0lBQ0EseUNBQUE7SUFDQSwyQ0FBQTtFQTdCSjtFQWdDRTtJQUNFLFVBQUE7SUFDQSxrREFBQTtFQTlCSjtFQWlDRTtJQUNFLGVBQUE7RUEvQko7RUFtQ0E7SUFBUSx5QkFBQTtJQUEyQixtQkFBQTtFQS9CbkM7RUFnQ0E7SUFBa0IsZUFBQTtJQUFpQixnQkFBQTtFQTVCbkM7RUE2QkE7SUFBbUIsa0JBQUE7SUFBb0IsZUFBQTtJQUFpQixTQUFBO0VBeEJ4RDtFQXlCQTtJQUFlLGFBQUE7RUF0QmY7RUF3QkE7SUFDRSwyQkFBQTtFQXRCRjtFQXdCRTtJQUFZLGtCQUFBO0lBQW9CLDhCQUFBO0VBcEJsQztFQXFCRTtJQUF3Qyx5QkFBQTtFQWxCMUM7RUFtQkU7SUFBNEIsYUFBQTtFQWhCOUI7RUFpQkU7SUFDRSwyQkFBQTtJQUNBLDBCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7SUFDQSxZQUFBO0VBZko7RUFnQkk7SUFBVyxhQUFBO0VBYmY7RUFlRTtJQUFRLGVBQUE7SUFBaUIsb0JBQUE7RUFYM0I7RUFZRTtJQUFlLGNBQUE7RUFUakI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpZGUgTmF2aWdhdGlvbiDDosKAwpQgTW9kZXJuIFByZW1pdW0gRGVzaWduXG4vLyBDbGVhbi4gQW5pbWF0ZWQuIFBvbGlzaGVkLlxuXG4kZWFzZTogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRlYXNlLW91dDogY3ViaWMtYmV6aWVyKDAuMTYsIDEsIDAuMywgMSk7XG4kZWFzZS1zcHJpbmc6IGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcblxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJvb3Qgw6LClMKAw6LClMKAw6LClMKAXG4uYXBwLXNpZGUtbmF2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMSk7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyAkZWFzZS1vdXQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogNjA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBUb3AgU2VjdGlvbiDDosKUwoDDosKUwoDDosKUwoBcbi5zaWRlLXRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcGFkZGluZzogMi41cmVtIDAuNzVyZW07XG4gIGhlaWdodDogdmFyKC0tdG9wYmFyLWhlaWdodCwgMy41cmVtKTtcbiAgbWluLWhlaWdodDogdmFyKC0tdG9wYmFyLWhlaWdodCwgMy41cmVtKTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpO1xufVxuXG4ubG9nby13cmFwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMDtcbiAgZmxleDogMTtcbn1cblxuLmluc3RpdHV0ZS1sb2dvIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIG9wYWNpdHk6IDAuOTI7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgJGVhc2U7XG4gICY6aG92ZXIgeyBvcGFjaXR5OiAxOyB9XG59XG5cbi5pbnN0aXR1dGUtbG9nby1leHBhbmRlZCB7XG4gIG1heC13aWR0aDogMTFyZW07XG4gIG1heC1oZWlnaHQ6IDIuNXJlbTtcbn1cblxuLmluc3RpdHV0ZS1sb2dvLWNvbGxhcHNlZCB7XG4gIG1heC13aWR0aDogMS43NXJlbTtcbiAgbWF4LWhlaWdodDogMS43NXJlbTtcbn1cblxuLmNvbGxhcHNlLXRvZ2dsZSB7XG4gIHdpZHRoOiAxLjc1cmVtO1xuICBoZWlnaHQ6IDEuNzVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAwO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XG5cbiAgLmNvbGxhcHNlLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgd2lkdGg6IDEuMTI1cmVtO1xuICAgIGhlaWdodDogMS4xMjVyZW07XG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0yKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XG4gIH1cblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIC5jb2xsYXBzZS1pY29uIHsgb3BhY2l0eTogMTsgfVxuICB9XG5cbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgTWVudSDDosKUwoDDosKUwoDDosKUwoBcbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAwLjE4NzVyZW07XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG5cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyB3aWR0aDogMnB4OyB9XG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICB9XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBNZW51IEl0ZW0gw6LClMKAw6LClMKAw6LClMKAXG4ubWVudS1pdGVtIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0yKTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwLjU2MjVyZW0gMC43NXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjc1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG5cbiAgLy8gSG92ZXJcbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTEpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpO1xuXG4gICAgLm1lbnUtaWNvbi13cmFwIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gICAgfVxuXG4gICAgLm1lbnUtaWNvbiB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFjdGl2ZVxuICAmLmFjdGl2ZSxcbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSk7XG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcbiAgICAgICAgICAgICAgIDAgMCAwIDFweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpIGluc2V0O1xuXG4gICAgLm1lbnUtaWNvbi13cmFwIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xOCk7XG4gICAgICAubWVudS1pY29uIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5tZW51LWxhYmVsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7XG4gICAgfVxuICB9XG5cbiAgLy8gUHJlc3NcbiAgJjphY3RpdmUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45OCk7XG4gIH1cblxuICAmOmZvY3VzLXZpc2libGUge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1idXR0b24tMSk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcbiAgfVxufVxuXG4ubWVudS1pY29uLXdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtO1xuICBmbGV4LXNocmluazogMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XG59XG5cbi5tZW51LWljb24ge1xuICBmb250LXNpemU6IDEuMTg3NXJlbTtcbiAgd2lkdGg6IDEuMTg3NXJlbTtcbiAgaGVpZ2h0OiAxLjE4NzVyZW07XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLWljb24tMSk7XG4gIG9wYWNpdHk6IDAuNjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XG59XG5cbi5tZW51LWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG59XG5cbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBGb290ZXIgw6LClMKAw6LClMKAw6LClMKAXG4uc2lkZS1ib3R0b20ge1xuICBwYWRkaW5nOiAwLjc1cmVtO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA0KTtcbn1cblxuLmFwcC12ZXJzaW9uIHtcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0yKTtcbiAgb3BhY2l0eTogMC4zO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIG1hcmdpbjogMDtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZTtcbiAgJjpob3ZlciB7IG9wYWNpdHk6IDAuNTsgfVxufVxuXG4udmVyc2lvbi1sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xufVxuXG4uY29weXJpZ2h0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG9wYWNpdHk6IDAuNztcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgQ29sbGFwc2VkIMOiwpTCgMOiwpTCgMOiwpTCgFxuLmFwcC1zaWRlLW5hdi5jb2xsYXBzZWQge1xuICB3aWR0aDogMy43NXJlbTtcblxuICAuc2lkZS10b3Age1xuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgLmxvZ28td3JhcCB7IGp1c3RpZnktY29udGVudDpsZWZ0OyB9XG5cbiAgLmNvbGxhcHNlLXRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAwLjM3NXJlbTtcbiAgICB0b3A6IDFyZW07XG4gIH1cblxuICAubWVudSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjM3NXJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgLm1lbnUtaXRlbSB7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgZ2FwOiAwO1xuXG4gICAgLy8gVG9vbHRpcFxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10b29sdGlwKTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IGNhbGMoMTAwJSArIDAuNjI1cmVtKTtcbiAgICAgIHRvcDogNTAlO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoLTZweCkgc2NhbGUoMC45NSk7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0xLCAjMzc0MTUxKTtcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSwgI2ZmZmZmZik7XG4gICAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMTVlbTtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZS1zcHJpbmc7XG4gICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgYm94LXNoYWRvdzogMCA0cHggMTZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xuICAgIH1cblxuICAgICY6aG92ZXI6OmFmdGVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgwKSBzY2FsZSgxKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cblxuICAubWVudS1sYWJlbCB7IGRpc3BsYXk6IG5vbmU7IH1cblxuICAubWVudS1pY29uLXdyYXAge1xuICAgIHdpZHRoOiAxLjg3NXJlbTtcbiAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICB9XG5cbiAgLnNpZGUtYm90dG9tIHsgZGlzcGxheTogbm9uZTsgfVxufVxuXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoDDosKUwoBcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuYXBwLXNpZGUtbmF2IHtcbiAgICB3aWR0aDogMy43NXJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiA2NTtcbiAgICBib3gtc2hhZG93OiAxcHggMCA2cHggcmdiYSgwLCAwLCAwLCAwLjA4KTtcbiAgfVxuXG4gIC5zaWRlLXRvcCB7XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICAubWVudS1sYWJlbCxcbiAgLmluc3RpdHV0ZS1sb2dvLWV4cGFuZGVkIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cblxuICAubWVudS1pdGVtIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgd2lkdGg6IDIuNXJlbTtcbiAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICBnYXA6IDA7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtdG9vbHRpcCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiBjYWxjKDEwMCUgKyAwLjYyNXJlbSk7XG4gICAgICB0b3A6IDUwJTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKSB0cmFuc2xhdGVYKC02cHgpIHNjYWxlKDAuOTUpO1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMSwgIzM3NDE1MSk7XG4gICAgICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTEsICNmZmZmZmYpO1xuICAgICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1ZW07XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2Utc3ByaW5nO1xuICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcbiAgICB9XG5cbiAgICAmOmhvdmVyOjphZnRlciB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgLm1lbnUgeyBwYWRkaW5nOiAwLjI1cmVtIDAuMzc1cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5tZW51LWljb24td3JhcCB7IHdpZHRoOiAxLjg3NXJlbTsgaGVpZ2h0OiAxLjg3NXJlbTsgfVxuICAuY29sbGFwc2UtdG9nZ2xlIHsgcG9zaXRpb246IGFic29sdXRlOyByaWdodDogMC4zNzVyZW07IHRvcDogMXJlbTsgfVxuICAuc2lkZS1ib3R0b20geyBkaXNwbGF5OiBub25lOyB9XG5cbiAgLmFwcC1zaWRlLW5hdi5leHBhbmRlZCB7XG4gICAgd2lkdGg6IHZhcigtLXNpZGVuYXYtd2lkdGgpO1xuXG4gICAgLnNpZGUtdG9wIHsgcGFkZGluZzogMCAwLjc1cmVtOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cbiAgICAubWVudS1sYWJlbCwgLmluc3RpdHV0ZS1sb2dvLWV4cGFuZGVkIHsgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDsgfVxuICAgIC5pbnN0aXR1dGUtbG9nby1jb2xsYXBzZWQgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICBwYWRkaW5nOiAwLjU2MjVyZW0gMC43NXJlbTtcbiAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgZ2FwOiAwLjc1cmVtO1xuICAgICAgJjo6YWZ0ZXIgeyBkaXNwbGF5OiBub25lOyB9XG4gICAgfVxuICAgIC5tZW51IHsgcGFkZGluZzogMC41cmVtOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5zaWRlLWJvdHRvbSB7IGRpc3BsYXk6IGJsb2NrOyB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 4105:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/top-sticky/top-sticky.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopStickyComponent: () => (/* binding */ TopStickyComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);


const _c0 = ["*"];
class TopStickyComponent {
  static {
    this.ɵfac = function TopStickyComponent_Factory(t) {
      return new (t || TopStickyComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TopStickyComponent,
      selectors: [["app-top-sticky"]],
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c0,
      decls: 2,
      vars: 0,
      consts: [[1, "top-sticky"]],
      template: function TopStickyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n  position: sticky;\n  top: 0;\n  z-index: 100;\n}\n\n.top-sticky[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: var(--bg-1, #fff);\n  padding: 0.75rem 1rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.08);\n  box-shadow: 0 0.25rem 1rem rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(0.75rem);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.top-sticky[_ngcontent-%COMP%]   .sticky-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex: 1;\n  min-width: 0;\n}\n.top-sticky[_ngcontent-%COMP%]   .sticky-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.top-sticky[_ngcontent-%COMP%]   .sticky-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 700;\n  color: var(--theme-3-text-1, #1e293b);\n  letter-spacing: -0.01em;\n  margin: 0;\n}\n.top-sticky[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n.top-sticky[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--button-1, #6366f1);\n  text-decoration: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.top-sticky[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n}\n.top-sticky[_ngcontent-%COMP%]   .breadcrumb[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.3);\n}\n.top-sticky[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .top-sticky[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.top-sticky[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .top-sticky[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.0625rem);\n}\n\n.top-sticky.dark[_ngcontent-%COMP%] {\n  background: var(--theme-1, #1e293b);\n  border-bottom-color: rgba(255, 255, 255, 0.08);\n}\n.top-sticky.dark[_ngcontent-%COMP%]   .sticky-title[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.top-sticky.dark[_ngcontent-%COMP%]   .muted[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.heading-lg[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.55);\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdG9wLXN0aWNreS90b3Atc3RpY2t5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9BO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFORjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0RBQUE7RUFDQSw2Q0FoQmM7RUFrQmQsOEJBQUE7RUFDQSx3R0FBQTtFQUdBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7QUFSRjtBQVdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FBVEo7QUFZRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FBVko7QUFjRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQVpKO0FBZ0JFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFkSjtBQWdCSTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxxREFBQTtBQWROO0FBZ0JNO0VBQ0UsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsK0JBQUE7QUFkUjtBQWtCSTtFQUNFLHlCQUFBO0FBaEJOO0FBcUJFO0VBQ0UsbUpBQUE7QUFuQko7QUFxQkk7RUFDRSxpQ0FBQTtBQW5CTjs7QUF5QkE7RUFDRSxtQ0FBQTtFQUNBLDhDQUFBO0FBdEJGO0FBd0JFO0VBQ0UsV0FBQTtBQXRCSjtBQXlCRTtFQUNFLCtCQUFBO0FBdkJKOztBQTRCQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUF6QkY7O0FBNEJBO0VBQ0UsMEJBQUE7QUF6QkYiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gU2hhcmVkIMOiwoDCkyBUb3AgU3RpY2t5IENvbXBvbmVudCAodjIpXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4kZWFzZTogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcbiRzaGFkb3ctc3RpY2t5OiAwIDAuMjVyZW0gMXJlbSByZ2JhKDAsMCwwLDAuMSk7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xufVxuXG4udG9wLXN0aWNreSB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTAwO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xLCAjZmZmKTtcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA4KTtcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1zdGlja3k7XG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNzVyZW0pO1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC43NXJlbSk7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIGJhY2tncm91bmQgMC4yNXMgJGVhc2U7XG5cbiAgLy8gRmxleCBsYXlvdXQgZm9yIGNvbnRlbnRcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDFyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICAvLyBTdXBwb3J0IGZvciBsZWZ0L3JpZ2h0IHNlY3Rpb25zXG4gIC5zdGlja3ktbGVmdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMC43NXJlbTtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuXG4gIC5zdGlja3ktcmlnaHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDAuNXJlbTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgfVxuXG4gIC8vIFRpdGxlIHN0eWxpbmdcbiAgLnN0aWNreS10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMSwgIzFlMjkzYik7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgLy8gQnJlYWRjcnVtYiBzdXBwb3J0XG4gIC5icmVhZGNydW1iIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAwLjM3NXJlbTtcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcblxuICAgIGEge1xuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xLCAjNjM2NmYxKTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTI1cmVtO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZXBhcmF0b3Ige1xuICAgICAgY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcbiAgICB9XG4gIH1cblxuICAvLyBBY3Rpb24gYnV0dG9uc1xuICBidXR0b24sIC5idG4ge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZTtcblxuICAgICY6aG92ZXIge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA2MjVyZW0pO1xuICAgIH1cbiAgfVxufVxuXG4vLyBEYXJrIHZhcmlhbnRcbi50b3Atc3RpY2t5LmRhcmsge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0xLCAjMWUyOTNiKTtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjA4KTtcblxuICAuc3RpY2t5LXRpdGxlIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgfVxuXG4gIC5tdXRlZCB7XG4gICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC43KTtcbiAgfVxufVxuXG4vLyBVdGlsaXR5IGNsYXNzZXNcbi5oZWFkaW5nLWxnIHtcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ubXV0ZWQge1xuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 6727:
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/unauthorized/unauthorized.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UnauthorizedComponent: () => (/* binding */ UnauthorizedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../home/service/auth.service */ 2241);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 3840);






class UnauthorizedComponent {
  constructor(location, router, authService) {
    this.location = location;
    this.router = router;
    this.authService = authService;
  }
  goHome() {
    this.authService.logout();
    this.router.navigate(['/']);
  }
  goBack() {
    this.location.back();
  }
  static {
    this.ɵfac = function UnauthorizedComponent_Factory(t) {
      return new (t || UnauthorizedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: UnauthorizedComponent,
      selectors: [["app-unauthorized"]],
      decls: 25,
      vars: 0,
      consts: [[1, "unauthorized-page"], [1, "card"], [1, "icon-wrapper"], [1, "icon-bg"], [1, "icon"], [1, "subtitle"], [1, "actions"], ["mat-stroked-button", "", 1, "btn-home", 3, "click"], ["mat-flat-button", "", 1, "btn-back", 3, "click"], [1, "help"], [1, "help-icon"]],
      template: function UnauthorizedComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "shield");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Access Denied");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "You don't have permission to view this page.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6)(12, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnauthorizedComponent_Template_button_click_12_listener() {
            return ctx.goHome();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Go Home ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function UnauthorizedComponent_Template_button_click_16_listener() {
            return ctx.goBack();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "arrow_back");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Go Back ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 9)(21, "mat-icon", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "info");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "If you believe this is a mistake, contact your administrator or request access.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIcon],
      styles: [".unauthorized-page[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: calc(100vh - 7.5rem);\n  padding: 2rem;\n  background: linear-gradient(135deg, var(--bg-2, #f8fafc) 0%, var(--bg-1, #ffffff) 100%);\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  max-width: 28rem;\n  width: 100%;\n  background: var(--bg-1, #fff);\n  border-radius: 1rem;\n  box-shadow: 0 8px 32px rgba(18, 38, 63, 0.08), 0 0 0 1px var(--theme-3-border, rgba(0, 0, 0, 0.04));\n  padding: 2.5rem 2rem;\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  background: linear-gradient(90deg, #ef4444 0%, #f97316 50%, #eab308 100%);\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .icon-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 5rem;\n  height: 5rem;\n  margin: 0 auto 1.25rem;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .icon-bg[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(249, 115, 22, 0.1) 100%);\n  animation: _ngcontent-%COMP%_pulse-ring 2s ease-in-out infinite;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #ef4444 0%, #f97316 100%);\n  box-shadow: 0 4px 16px rgba(239, 68, 68, 0.3);\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: white;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--theme-3-text-1, #1e293b);\n  letter-spacing: -0.02em;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3, #64748b);\n  font-size: 0.9375rem;\n  line-height: 1.5;\n  margin: 0 0 1.5rem;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n  margin-bottom: 1.5rem;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .btn-home[_ngcontent-%COMP%] {\n  border-radius: 0.625rem;\n  padding: 0.625rem 1.25rem;\n  font-weight: 600;\n  border-color: var(--theme-3-border, #e2e8f0);\n  color: var(--theme-3-text-2, #475569);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.2s ease;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .btn-home[_ngcontent-%COMP%]:hover {\n  background: var(--bg-2, #f8fafc);\n  border-color: var(--theme-3-text-3, #94a3b8);\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .btn-home[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.625rem;\n  padding: 0.625rem 1.25rem;\n  font-weight: 600;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);\n  transition: all 0.2s ease;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transform: translateY(-1px);\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .btn-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  padding: 1rem;\n  background: var(--bg-2, #f8fafc);\n  border-radius: 0.75rem;\n  text-align: left;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .help-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--theme-3-text-3, #94a3b8);\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n\n.unauthorized-page[_ngcontent-%COMP%]   .help[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-3-text-3, #64748b);\n  font-size: 0.8125rem;\n  line-height: 1.5;\n}\n\n@keyframes _ngcontent-%COMP%_pulse-ring {\n  0%, 100% {\n    transform: scale(1);\n    opacity: 1;\n  }\n  50% {\n    transform: scale(1.1);\n    opacity: 0.6;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdW5hdXRob3JpemVkL3VuYXV0aG9yaXplZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsdUZBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtR0FBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EseUVBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSw0RkFBQTtFQUNBLDZDQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZEQUFBO0VBQ0EsNkNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0VBQ0EscUNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsNENBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDhDQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLCtDQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtFQUNBLHFDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0U7SUFBVyxtQkFBQTtJQUFxQixVQUFBO0VBR2hDO0VBRkE7SUFBTSxxQkFBQTtJQUF1QixZQUFBO0VBTTdCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIudW5hdXRob3JpemVkLXBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDcuNXJlbSk7XG4gIHBhZGRpbmc6IDJyZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJnLTIsICNmOGZhZmMpIDAlLCB2YXIoLS1iZy0xLCAjZmZmZmZmKSAxMDAlKTtcbn1cblxuLnVuYXV0aG9yaXplZC1wYWdlIC5jYXJkIHtcbiAgbWF4LXdpZHRoOiAyOHJlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEsICNmZmYpO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3gtc2hhZG93OiAwIDhweCAzMnB4IHJnYmEoMTgsIDM4LCA2MywgMC4wOCksIDAgMCAwIDFweCB2YXIoLS10aGVtZS0zLWJvcmRlciwgcmdiYSgwLDAsMCwwLjA0KSk7XG4gIHBhZGRpbmc6IDIuNXJlbSAycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnVuYXV0aG9yaXplZC1wYWdlIC5jYXJkOjpiZWZvcmUge1xuICBjb250ZW50OiAnJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZWY0NDQ0IDAlLCAjZjk3MzE2IDUwJSwgI2VhYjMwOCAxMDAlKTtcbn1cblxuLnVuYXV0aG9yaXplZC1wYWdlIC5pY29uLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiA1cmVtO1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMCBhdXRvIDEuMjVyZW07XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuaWNvbi1iZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaW5zZXQ6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgyMzksNjgsNjgsMC4xKSAwJSwgcmdiYSgyNDksMTE1LDIyLDAuMSkgMTAwJSk7XG4gIGFuaW1hdGlvbjogcHVsc2UtcmluZyAycyBlYXNlLWluLW91dCBpbmZpbml0ZTtcbn1cblxuLnVuYXV0aG9yaXplZC1wYWdlIC5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZWY0NDQ0IDAlLCAjZjk3MzE2IDEwMCUpO1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMjM5LDY4LDY4LDAuMyk7XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuaWNvbiBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgd2lkdGg6IDJyZW07XG4gIGhlaWdodDogMnJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udW5hdXRob3JpemVkLXBhZ2UgaDEge1xuICBtYXJnaW46IDAgMCAwLjVyZW07XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTEsICMxZTI5M2IpO1xuICBsZXR0ZXItc3BhY2luZzogLTAuMDJlbTtcbn1cblxuLnVuYXV0aG9yaXplZC1wYWdlIC5zdWJ0aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMywgIzY0NzQ4Yik7XG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDAgMCAxLjVyZW07XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogMC43NXJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbn1cblxuLnVuYXV0aG9yaXplZC1wYWdlIC5idG4taG9tZSB7XG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICBwYWRkaW5nOiAwLjYyNXJlbSAxLjI1cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xuICBib3JkZXItY29sb3I6IHZhcigtLXRoZW1lLTMtYm9yZGVyLCAjZTJlOGYwKTtcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjNDc1NTY5KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuYnRuLWhvbWU6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0yLCAjZjhmYWZjKTtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMywgIzk0YTNiOCk7XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuYnRuLWhvbWUgbWF0LWljb24ge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB3aWR0aDogMS4xMjVyZW07XG4gIGhlaWdodDogMS4xMjVyZW07XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuYnRuLWJhY2sge1xuICBiYWNrZ3JvdW5kOiAgdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbiAgcGFkZGluZzogMC42MjVyZW0gMS4yNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuYnRuLWJhY2s6aG92ZXIge1xuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoOTksMTAyLDI0MSwwLjM1KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xufVxuXG4udW5hdXRob3JpemVkLXBhZ2UgLmJ0bi1iYWNrIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgd2lkdGg6IDEuMTI1cmVtO1xuICBoZWlnaHQ6IDEuMTI1cmVtO1xufVxuXG4udW5hdXRob3JpemVkLXBhZ2UgLmhlbHAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiAwLjYyNXJlbTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMiwgI2Y4ZmFmYyk7XG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuaGVscC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgd2lkdGg6IDEuMTI1cmVtO1xuICBoZWlnaHQ6IDEuMTI1cmVtO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM5NGEzYjgpO1xuICBmbGV4LXNocmluazogMDtcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XG59XG5cbi51bmF1dGhvcml6ZWQtcGFnZSAuaGVscCBwIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM2NDc0OGIpO1xuICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuQGtleWZyYW1lcyBwdWxzZS1yaW5nIHtcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyBvcGFjaXR5OiAxOyB9XG4gIDUwJSB7IHRyYW5zZm9ybTogc2NhbGUoMS4xKTsgb3BhY2l0eTogMC42OyB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 3931:
/*!****************************************************!*\
  !*** ./src/app/shared/date/indian-date-adapter.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INDIAN_DATE_FORMATS: () => (/* binding */ INDIAN_DATE_FORMATS),
/* harmony export */   IndianDateAdapter: () => (/* binding */ IndianDateAdapter)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);



const INDIAN_DATE_FORMATS = {
  parse: {
    dateInput: 'dateInput'
  },
  display: {
    dateInput: 'dateInput',
    monthYearLabel: 'monthYearLabel',
    dateA11yLabel: 'dateA11yLabel',
    monthYearA11yLabel: 'monthYearA11yLabel'
  }
};
class IndianDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter {
  constructor(matDateLocale, platform) {
    super(matDateLocale, platform);
  }
  parse(value) {
    if (value instanceof Date) {
      return this.isValid(value) ? value : null;
    }
    if (typeof value === 'string') {
      const trimmed = value.trim();
      if (!trimmed) return null;
      // Date inputs use one unambiguous format throughout the UI.
      const match = trimmed.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
      if (match) {
        const day = Number(match[1]);
        const month = Number(match[2]) - 1;
        const year = Number(match[3]);
        const parsed = new Date(year, month, day);
        if (parsed.getFullYear() === year && parsed.getMonth() === month && parsed.getDate() === day) {
          return parsed;
        }
        return null;
      }
    }
    // Do not let the browser interpret free-form date strings differently by locale.
    if (typeof value === 'string') return null;
    const timestamp = typeof value === 'number' ? value : Date.parse(String(value));
    const date = new Date(timestamp);
    return this.isValid(date) ? date : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error('IndianDateAdapter: Cannot format invalid date.');
    }
    if (displayFormat === 'monthYearLabel') {
      return date.toLocaleDateString('en-IN', {
        month: 'short',
        year: 'numeric'
      });
    }
    if (displayFormat === 'monthYearA11yLabel') {
      return date.toLocaleDateString('en-IN', {
        month: 'long',
        year: 'numeric'
      });
    }
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
  static {
    this.ɵfac = function IndianDateAdapter_Factory(t) {
      return new (t || IndianDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: IndianDateAdapter,
      factory: IndianDateAdapter.ɵfac
    });
  }
}

/***/ }),

/***/ 1445:
/*!********************************************************!*\
  !*** ./src/app/shared/directives/directives.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DirectivesModule: () => (/* binding */ DirectivesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _has_access_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./has-access.directive */ 9191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);



class DirectivesModule {
  static {
    this.ɵfac = function DirectivesModule_Factory(t) {
      return new (t || DirectivesModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DirectivesModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DirectivesModule, {
    declarations: [_has_access_directive__WEBPACK_IMPORTED_MODULE_0__.HasAccessDirective],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
    exports: [_has_access_directive__WEBPACK_IMPORTED_MODULE_0__.HasAccessDirective]
  });
})();

/***/ }),

/***/ 9191:
/*!***********************************************************!*\
  !*** ./src/app/shared/directives/has-access.directive.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HasAccessDirective: () => (/* binding */ HasAccessDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_page_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/page-access.service */ 626);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../home/service/auth.service */ 2241);



class HasAccessDirective {
  // microsyntax desugaring creates an input name like 'hasAccessHasAccessAction'
  set _microAction(v) {
    if (v) this.action = v;
  }
  constructor(tpl, vcr, pageAccess, auth) {
    this.tpl = tpl;
    this.vcr = vcr;
    this.pageAccess = pageAccess;
    this.auth = auth;
    this.action = 'view';
    this.userId = null;
  }
  ngOnInit() {
    // react to authentication changes so directive works when user is set after login
    this.sub = this.auth.user$.subscribe(user => {
      this.userId = user && (user.id || user.user_id || user.userId) ? user.id || user.user_id || user.userId : null;
      console.debug('[HasAccessDirective] auth.user$ emitted userId:', this.userId, 'pageName:', this.pageName, 'action:', this.action);
      this.updateView();
    });
  }
  updateView() {
    this.vcr.clear();
    if (!this.pageName || !this.userId) {
      return;
    }
    this.pageAccess.hasPermission(this.userId, this.pageName, this.action).subscribe(has => {
      console.debug('[HasAccessDirective] permission check:', {
        userId: this.userId,
        pageName: this.pageName,
        action: this.action,
        result: has
      });
      this.vcr.clear();
      if (has) this.vcr.createEmbeddedView(this.tpl);
    });
  }
  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }
  static {
    this.ɵfac = function HasAccessDirective_Factory(t) {
      return new (t || HasAccessDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_page_access_service__WEBPACK_IMPORTED_MODULE_0__.PageAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService));
    };
  }
  static {
    this.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineDirective"]({
      type: HasAccessDirective,
      selectors: [["", "hasAccess", ""]],
      inputs: {
        pageName: ["hasAccess", "pageName"],
        action: ["hasAccessAction", "action"],
        _microAction: ["hasAccessHasAccessAction", "_microAction"]
      }
    });
  }
}

/***/ }),

/***/ 885:
/*!***************************************************!*\
  !*** ./src/app/shared/guards/permission.guard.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionGuard: () => (/* binding */ PermissionGuard)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_page_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/page-access.service */ 626);
/* harmony import */ var src_app_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/home/service/auth.service */ 2241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);






class PermissionGuard {
  constructor(pageAccess, auth, router) {
    this.pageAccess = pageAccess;
    this.auth = auth;
    this.router = router;
  }
  normalizePageName(pageName) {
    const aliases = {
      'test': 'Exam',
      'tests': 'Exams',
      'question bank': 'Categories',
      'question banks': 'Categories',
      'schedule test': 'Schedule Exam',
      'scheduled tests': 'Schedule Exam',
      'test reports': 'Exam Reports'
    };
    const key = (pageName || '').trim().toLowerCase();
    return aliases[key] || pageName;
  }
  canActivate(route) {
    const pageName = this.normalizePageName(route.data && route.data['pageName'] || route.data && route.data['page'] || '');
    const action = route.data && route.data['action'] || 'view';
    // optional role-based access: route.data.requiredRole can be string or array of strings
    const requiredRole = route.data && route.data['requiredRole'] || null;
    const user = this.auth.currentUserValue || null;
    if (!user) return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.router.createUrlTree(['/login']));
    // if requiredRole is specified, check user's role first
    if (requiredRole) {
      const userRole = (user.role || user.user_role || '').toString().toLowerCase();
      const allowed = Array.isArray(requiredRole) ? requiredRole.map(r => String(r).toLowerCase()) : [String(requiredRole).toLowerCase()];
      if (!allowed.includes(userRole)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.router.createUrlTree(['/unauthorized']));
      }
      // role matches — grant access immediately (role-based routes bypass page-permission checks)
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(true);
    }
    const userId = user.id || user.user_id || user.userId || null;
    if (!userId) return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.router.createUrlTree(['/login']));
    return this.pageAccess.hasPermission(userId.toString(), pageName, action).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(has => has ? true : this.router.createUrlTree(['/unauthorized'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(this.router.createUrlTree(['/unauthorized']))));
  }
  static {
    this.ɵfac = function PermissionGuard_Factory(t) {
      return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_services_page_access_service__WEBPACK_IMPORTED_MODULE_0__.PageAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](src_app_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: PermissionGuard,
      factory: PermissionGuard.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 5594:
/*!*********************************************!*\
  !*** ./src/app/shared/icons/icon.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IconModule: () => (/* binding */ IconModule)
/* harmony export */ });
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);




class IconModule {
  constructor(iconRegistry, sanitizer) {
    this.iconRegistry = iconRegistry;
    this.sanitizer = sanitizer;
    try {
      this.iconRegistry.addSvgIcon('view', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/visibility.svg'));
      this.iconRegistry.addSvgIcon('edit', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/edit.svg'));
      this.iconRegistry.addSvgIcon('delete', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/delete.svg'));
      this.iconRegistry.addSvgIcon('filter', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/filter.svg'));
      this.iconRegistry.addSvgIcon('refresh', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/refresh.svg'));
      this.iconRegistry.addSvgIcon('add', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/add.svg'));
      this.iconRegistry.addSvgIcon('admin', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/admin.svg'));
      this.iconRegistry.addSvgIcon('arrow_back', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_back.svg'));
      this.iconRegistry.addSvgIcon('arrow_forward', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow_forward.svg'));
      this.iconRegistry.addSvgIcon('apply', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/apply.svg'));
      this.iconRegistry.addSvgIcon('assignment', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/assignment.svg'));
      this.iconRegistry.addSvgIcon('calendar', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/calendar.svg'));
      this.iconRegistry.addSvgIcon('category', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/category.svg'));
      this.iconRegistry.addSvgIcon('dashboard', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/dashboard.svg'));
      this.iconRegistry.addSvgIcon('exam', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/exam.svg'));
      this.iconRegistry.addSvgIcon('institute', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/institute.svg'));
      this.iconRegistry.addSvgIcon('quiz', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/quiz.svg'));
      this.iconRegistry.addSvgIcon('report', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/report.svg'));
      this.iconRegistry.addSvgIcon('reset_settings', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/reset_settings.svg'));
      this.iconRegistry.addSvgIcon('save', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/save.svg'));
      this.iconRegistry.addSvgIcon('users', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/users.svg'));
      this.iconRegistry.addSvgIcon('user', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/user.svg'));
      this.iconRegistry.addSvgIcon('brain', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/brain.svg'));
      // upload icon
      this.iconRegistry.addSvgIcon('upload', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/upload.svg'));
      // cloud_upload icon
      this.iconRegistry.addSvgIcon('cloud_upload', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/cloud_upload.svg'));
      // download icon
      this.iconRegistry.addSvgIcon('download', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/download.svg'));
      // attach_file icon
      this.iconRegistry.addSvgIcon('attach_file', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/attach_file.svg'));
      // star icon
      this.iconRegistry.addSvgIcon('star', this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
    } catch (e) {
      // ignore if registry/sanitizer not available in certain test environments
    }
  }
  static {
    this.ɵfac = function IconModule_Factory(t) {
      return new (t || IconModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer));
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: IconModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](IconModule, {
    imports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule],
    exports: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIconModule]
  });
})();

/***/ }),

/***/ 492:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 8764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 7919);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/global-institute-context.service */ 4769);




class AuthInterceptor {
  constructor(instituteContext) {
    this.instituteContext = instituteContext;
  }
  intercept(req, next) {
    // endpoints that should not receive Authorization header or be auto-redirected
    const skipAuthPaths = ['/login', '/refresh-token', '/public'];
    const skipInstituteContextHeader = 'X-Skip-Institute-Context';
    const skipInstituteContextPaths = ['/superadmin-dashboard'];
    try {
      let token = null;
      try {
        token = sessionStorage.getItem('token');
      } catch (e) {
        token = null;
      }
      const url = req.url || '';
      const shouldSkip = skipAuthPaths.some(p => url.includes(p));
      const shouldSkipInstituteContext = shouldSkip || req.headers.has(skipInstituteContextHeader) || skipInstituteContextPaths.some(p => url.includes(p));
      if (req.headers.has(skipInstituteContextHeader)) {
        req = req.clone({
          headers: req.headers.delete(skipInstituteContextHeader)
        });
      }
      if (token && !req.headers.has('Authorization') && !shouldSkip) {
        console.debug('[AuthInterceptor] attaching token to request', url);
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      } else if (shouldSkip) {
        console.debug('[AuthInterceptor] skipping auth header for', url);
      } else {
        console.debug('[AuthInterceptor] no token available for', url);
      }
      if (!shouldSkipInstituteContext) {
        req = this.attachInstituteContext(req);
      }
    } catch (e) {
      console.debug('[AuthInterceptor] error reading token', e);
    }
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(event => {
      try {
        // some APIs return 200 with { status: false, statusMessage: 'Signature has expired' }
        const body = event && event.body ? event.body : null;
        if (body && (body.status === false || body.status === 'false')) {
          const msg = body.statusMessage || body.message || body.error || '';
          if (msg && /expire/i.test(msg)) {
            console.debug('[AuthInterceptor] detected expired token in 200 response:', msg);
            try {
              // Dispatch a sessionExpired event so the application can decide
              // whether to try a refresh/extend or to logout the user.
              window.dispatchEvent(new CustomEvent('sessionExpired', {
                detail: {
                  message: msg || 'Session expired'
                }
              }));
            } catch (e) {}
          }
        }
      } catch (e) {}
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(err => {
      try {
        const status = err && (err.status || err.statusCode);
        const body = err && err.error ? err.error : err;
        const message = body && (body.statusMessage || body.message || body.error);
        // If token expired or invalid, clear session and redirect to login
        if (status === 401 || message && /expire/i.test(message)) {
          try {
            // Notify the app that session expired - the app can then
            // prompt the user to extend the session or logout.
            window.dispatchEvent(new CustomEvent('sessionExpired', {
              detail: {
                message: message || 'Unauthorized - session expired'
              }
            }));
          } catch (e) {}
        } else {
          console.debug('[AuthInterceptor] non-auth error status:', status, 'message:', message);
        }
      } catch (e) {
        // ignore
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
    }));
  }
  attachInstituteContext(req) {
    const context = this.instituteContext.activeContext;
    const instituteId = context?.institute_id;
    if (!instituteId) return req;
    let nextReq = req;
    if (!nextReq.headers.has('X-Institute-Id')) {
      nextReq = nextReq.clone({
        setHeaders: {
          'X-Institute-Id': instituteId
        }
      });
    }
    const method = (nextReq.method || 'GET').toUpperCase();
    if (method === 'GET' || method === 'DELETE') {
      nextReq = nextReq.clone({
        params: nextReq.params.set('institute_id', instituteId).set('institute', instituteId)
      });
      return nextReq;
    }
    const body = nextReq.body;
    if (body instanceof FormData) {
      const formData = new FormData();
      body.forEach((value, key) => {
        if (key !== 'institute_id' && key !== 'institute') formData.append(key, value);
      });
      formData.append('institute_id', instituteId);
      formData.append('institute', instituteId);
      nextReq = nextReq.clone({
        body: formData
      });
      return nextReq;
    }
    if (body && typeof body === 'object' && !(body instanceof Blob) && !(body instanceof ArrayBuffer)) {
      nextReq = nextReq.clone({
        body: {
          ...body,
          institute_id: instituteId,
          institute: instituteId
        }
      });
      return nextReq;
    }
    return nextReq;
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_0__.GlobalInstituteContextService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 4769:
/*!*********************************************************************!*\
  !*** ./src/app/shared/services/global-institute-context.service.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalInstituteContextService: () => (/* binding */ GlobalInstituteContextService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


const STORAGE_KEY = 'super_admin_institute_context';
class GlobalInstituteContextService {
  constructor() {
    this.pendingInstituteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
    this.activeInstituteSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.readStoredContext());
    this.pendingInstitute$ = this.pendingInstituteSubject.asObservable();
    this.activeInstitute$ = this.activeInstituteSubject.asObservable();
    this.context$ = this.activeInstitute$;
    this.selectedInstitute$ = this.activeInstitute$;
  }
  get pendingInstitute() {
    return this.pendingInstituteSubject.value;
  }
  get activeContext() {
    return this.activeInstituteSubject.value;
  }
  get activeInstitute() {
    return this.activeContext;
  }
  get selectedInstitute() {
    return this.activeContext;
  }
  get activeInstituteId() {
    return this.activeContext?.institute_id || '';
  }
  isGlobalFilterActive() {
    return !!this.activeInstituteId;
  }
  setPendingInstitute(context) {
    this.pendingInstituteSubject.next(context ? this.normalizeContext(context) : null);
  }
  clearPendingInstitute() {
    this.pendingInstituteSubject.next(null);
  }
  applyPendingInstitute() {
    const pending = this.pendingInstitute;
    if (!pending?.institute_id) return;
    this.setContext(pending);
  }
  setInstitute(instituteId, instituteName = '', meta = {}) {
    this.setContext({
      ...meta,
      institute_id: instituteId,
      institute_name: instituteName || meta.institute_name || instituteId
    });
  }
  clearInstitute() {
    this.clearContext();
  }
  setContext(context) {
    const normalized = this.normalizeContext(context);
    if (!normalized.institute_id) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
      sessionStorage.setItem('global_institute_id', normalized.institute_id);
      sessionStorage.setItem('global_institute_name', normalized.institute_name);
    } catch (e) {}
    // Persist the complete context before emitting so synchronous subscribers cannot read stale scope.
    this.pendingInstituteSubject.next(normalized);
    this.activeInstituteSubject.next(normalized);
  }
  clearContext() {
    try {
      sessionStorage.removeItem(STORAGE_KEY);
      sessionStorage.removeItem('global_institute_id');
      sessionStorage.removeItem('global_institute_name');
    } catch (e) {}
    // Remove persisted scope before emitting so clear subscribers cannot read the old institute.
    this.pendingInstituteSubject.next(null);
    this.activeInstituteSubject.next(null);
  }
  normalizeContext(context) {
    return {
      ...context,
      institute_id: String(context.institute_id || ''),
      institute_name: String(context.institute_name || context.institute_id || ''),
      industry: context.industry || '',
      country: context.country || '',
      city: context.city || ''
    };
  }
  readStoredContext() {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      const parsed = JSON.parse(raw);
      if (!parsed?.institute_id) return null;
      return this.normalizeContext({
        institute_id: String(parsed.institute_id),
        institute_name: String(parsed.institute_name || parsed.name || parsed.institute_id),
        industry: parsed.industry || '',
        country: parsed.country || '',
        city: parsed.city || ''
      });
    } catch (e) {
      return null;
    }
  }
  static {
    this.ɵfac = function GlobalInstituteContextService_Factory(t) {
      return new (t || GlobalInstituteContextService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GlobalInstituteContextService,
      factory: GlobalInstituteContextService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3657:
/*!***************************************************!*\
  !*** ./src/app/shared/services/loader.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoaderService: () => (/* binding */ LoaderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class LoaderService {
  constructor() {
    this._loading = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.loading$ = this._loading.asObservable();
  }
  show() {
    this._loading.next(true);
  }
  hide() {
    this._loading.next(false);
  }
  toggle() {
    this._loading.next(!this._loading.value);
  }
  static {
    this.ɵfac = function LoaderService_Factory(t) {
      return new (t || LoaderService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LoaderService,
      factory: LoaderService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 626:
/*!********************************************************!*\
  !*** ./src/app/shared/services/page-access.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageAccessService: () => (/* binding */ PageAccessService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6301);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.config */ 1892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);





class PageAccessService {
  constructor(http) {
    this.http = http;
    // cache stores a shared Observable so multiple callers reuse the same in-flight request
    this.cache = new Map();
    this.permissionAliases = {
      'test': 'Exam',
      'tests': 'Exams',
      'question bank': 'Categories',
      'question banks': 'Categories',
      'schedule test': 'Schedule Exam',
      'scheduled tests': 'Schedule Exam',
      'test reports': 'Exam Reports'
    };
  }
  normalizePageName(pageName) {
    const key = (pageName || '').trim().toLowerCase();
    return this.permissionAliases[key] || pageName;
  }
  // fetch for a given user id (or use current user id)
  fetchForUser(userId) {
    if (!userId) {
      console.warn('[PageAccessService] No userId provided for fetchForUser');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }
    // If there's already a cached observable (or completed result wrapped as observable), return it
    if (this.cache.has(userId)) {
      console.debug('[PageAccessService] Returning cached observable for user:', userId);
      return this.cache.get(userId);
    }
    const url = `${_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-user-page-access/${userId}`;
    console.debug('[PageAccessService] Fetching page access from API:', url);
    const req$ = this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(res => {
      console.debug('[PageAccessService] API response:', res);
      return res && res.data ? res.data : [];
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(err => {
      console.error('[PageAccessService] Failed to fetch page access:', err);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)([]);
    }),
    // shareReplay ensures multiple subscribers share the same in-flight HTTP request
    (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    // store the shared observable immediately so concurrent callers get the same request
    this.cache.set(userId, req$);
    return req$;
  }
  // convenience: check access by page name
  hasPermission(userId, pageName, action) {
    return this.fetchForUser(userId).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(rows => {
      const permissionPageName = this.normalizePageName(pageName);
      const r = rows.find(x => x.page_name && x.page_name.toLowerCase() === (permissionPageName || '').toLowerCase());
      if (!r) return false;
      console.debug('[PageAccessService] Checking permission for page:', permissionPageName, 'requested:', pageName, 'action:', action);
      console.debug('[PageAccessService] Available rows:', rows);
      switch (action) {
        case 'add':
          return !!r.can_add;
        case 'edit':
          return !!r.can_edit;
        case 'delete':
          return !!r.can_delete;
        default:
          return !!r.can_view;
      }
    }));
  }
  // optional: clear cache for a user
  clearCache(userId) {
    this.cache.delete(userId);
  }
  static {
    this.ɵfac = function PageAccessService_Factory(t) {
      return new (t || PageAccessService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: PageAccessService,
      factory: PageAccessService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3413:
/*!******************************************************!*\
  !*** ./src/app/shared/services/page-meta.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PageMetaService: () => (/* binding */ PageMetaService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class PageMetaService {
  constructor() {
    this.meta$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({
      title: '',
      subtitle: ''
    });
  }
  setMeta(title, subtitle) {
    this.meta$.next({
      title,
      subtitle: subtitle || ''
    });
  }
  clear() {
    this.meta$.next({
      title: '',
      subtitle: ''
    });
  }
  getMetaObservable() {
    return this.meta$.asObservable();
  }
  static {
    this.ɵfac = function PageMetaService_Factory(t) {
      return new (t || PageMetaService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: PageMetaService,
      factory: PageMetaService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3202:
/*!****************************************************!*\
  !*** ./src/app/shared/services/session.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SessionService: () => (/* binding */ SessionService)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 2435);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.config */ 1892);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);







// const API_BASE = (window as any)['API_BASE'] || '';
class SessionService {
  constructor(dialog, http, router, ngZone) {
    this.dialog = dialog;
    this.http = http;
    this.router = router;
    this.ngZone = ngZone;
    this.idleTimeoutMs = 10 * 60 * 1000;
    this.activityEvents = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
    this.listening = false;
    this.lastActivityAt = Date.now();
    this.idleTimer = null;
    this.promptOpen = false;
    this.refreshInProgress = false;
  }
  startListening() {
    if (this.listening) return;
    this.listening = true;
    this.activityEvents.forEach(eventName => {
      window.addEventListener(eventName, () => this.recordActivity(), {
        passive: true
      });
    });
    window.addEventListener('sessionExpired', ev => {
      const msg = ev && ev.detail && ev.detail.message ? ev.detail.message : 'Your session has expired';
      if (this.hasBeenIdleForTenMinutes()) {
        this.ngZone.run(() => this.promptExtendOrLogout(msg));
      } else {
        // Active users should not be interrupted just because the current JWT expired.
        this.tryRefreshToken();
      }
    });
    this.scheduleIdleCheck();
  }
  promptExtendOrLogout(message) {
    if (this.promptOpen || !this.hasLoggedInSession()) return;
    this.promptOpen = true;
    const ref = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
      data: {
        title: 'Session Expired',
        message: message + '\nWould you like to extend your session?',
        confirmText: 'Extend',
        cancelText: 'Logout'
      },
      disableClose: true
    });
    ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe(ok => {
      this.promptOpen = false;
      if (ok) {
        this.recordActivity();
        this.tryRefreshToken();
      } else {
        this.doLogout();
      }
    });
  }
  tryRefreshToken() {
    if (this.refreshInProgress || !this.hasLoggedInSession()) return;
    this.refreshInProgress = true;
    const raw = sessionStorage.getItem('user');
    let userId = null;
    if (raw) {
      try {
        userId = JSON.parse(raw).user_id || JSON.parse(raw).userId || null;
      } catch (e) {
        userId = null;
      }
    }
    const url = `${_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/refresh-token`;
    const payload = {};
    if (userId) payload.user_id = userId;
    this.http.post(url, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
      next: res => {
        // Expecting { token, user } on success
        try {
          if (res && res.token) {
            sessionStorage.setItem('token', res.token);
          }
          if (res && res.user) {
            sessionStorage.setItem('user', JSON.stringify(res.user));
          }
        } catch (e) {}
        // Close any session-expired dialogs now that token was refreshed
        try {
          this.dialog.closeAll();
        } catch (e) {}
      },
      error: err => {
        this.refreshInProgress = false;
        // Only an explicit authentication rejection proves the session is no
        // longer valid. Keep browser state during outages and network errors.
        if (err && (err.status === 401 || err.status === 403)) {
          try {
            this.dialog.closeAll();
          } catch (e) {}
          this.doLogout();
        } else {
          console.warn('Unable to refresh the session; keeping the existing login state.', err);
        }
      },
      complete: () => {
        this.refreshInProgress = false;
      }
    });
  }
  recordActivity() {
    if (this.promptOpen) return;
    this.lastActivityAt = Date.now();
    if (!this.idleTimer) this.scheduleIdleCheck();
  }
  scheduleIdleCheck() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    const remainingMs = Math.max(0, this.idleTimeoutMs - (Date.now() - this.lastActivityAt));
    this.idleTimer = setTimeout(() => {
      this.idleTimer = null;
      if (!this.hasBeenIdleForTenMinutes()) {
        this.scheduleIdleCheck();
        return;
      }
      // The warning is exclusively an inactivity warning after 10 uninterrupted minutes.
      this.ngZone.run(() => this.promptExtendOrLogout('Your session has expired due to inactivity.'));
    }, remainingMs);
  }
  hasBeenIdleForTenMinutes() {
    return Date.now() - this.lastActivityAt >= this.idleTimeoutMs;
  }
  hasLoggedInSession() {
    try {
      return !!sessionStorage.getItem('token') && !!sessionStorage.getItem('user');
    } catch (e) {
      return false;
    }
  }
  doLogout() {
    // Attempt to notify backend about logout. If it fails (e.g. expired token), still clear client state.
    try {
      const raw = sessionStorage.getItem('user');
      let userId = null;
      if (raw) {
        try {
          userId = JSON.parse(raw).user_id || JSON.parse(raw).userId || null;
        } catch (e) {
          userId = null;
        }
      }
      const url = `${_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/logout`;
      const payload = {};
      if (userId) payload.user_id = userId;
      this.http.post(url, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.first)()).subscribe({
        next: () => {
          // ignore server response
        },
        error: () => {
          // ignore errors; we'll still clear client-side session
        },
        complete: () => {
          this.clearAndRedirect();
        }
      });
      // Safety: if the POST hangs, ensure we still clear after a short timeout
      setTimeout(() => this.clearAndRedirect(), 3000);
    } catch (e) {
      this.clearAndRedirect();
    }
  }
  clearAndRedirect() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = null;
    this.promptOpen = false;
    this.refreshInProgress = false;
    try {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('isLogin');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userRole');
      sessionStorage.removeItem('institute');
      sessionStorage.removeItem('institute_id');
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('launched_exam');
      sessionStorage.removeItem('test_result');
      sessionStorage.removeItem('last_submission');
      sessionStorage.removeItem('review_questions');
    } catch (e) {}
    try {
      this.router.navigate(['/login']);
    } catch (e) {
      try {
        window.location.href = '/login';
      } catch (e) {}
    }
  }
  static {
    this.ɵfac = function SessionService_Factory(t) {
      return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgZone));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: SessionService,
      factory: SessionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 3887:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading/heading.component */ 2893);
/* harmony import */ var _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/unauthorized/unauthorized.component */ 6727);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loader/loader.component */ 765);
/* harmony import */ var _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar-main/navbar-main.component */ 4481);
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ 8277);
/* harmony import */ var _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/top-sticky/top-sticky.component */ 4105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/directives.module */ 1445);
/* harmony import */ var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/permission.guard */ 885);
/* harmony import */ var _icons_icon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/icon.module */ 5594);
/* harmony import */ var _components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/date-range-picker-dialog/date-range-picker-dialog.component */ 7235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7580);




























class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
      providers: [_guards_permission_guard__WEBPACK_IMPORTED_MODULE_8__.PermissionGuard],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__.HeadingComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__.NavbarMainComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__.SideNavComponent, _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__.TopStickyComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule, _icons_icon_module__WEBPACK_IMPORTED_MODULE_9__.IconModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, _components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_10__.DateRangePickerDialogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__.HeadingComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__.NavbarMainComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__.SideNavComponent, _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__.TopStickyComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule, _icons_icon_module__WEBPACK_IMPORTED_MODULE_9__.IconModule],
    exports: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_15__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialogModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__.MatPaginatorModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__.HeadingComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__.NavbarMainComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__.SideNavComponent, _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__.TopStickyComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_20__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_21__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_23__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSortModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule, _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedComponent, _components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_10__.DateRangePickerDialogComponent]
  });
})();

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.component */ 92);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 635);




(0,_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.bootstrapApplication)(_app_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent, {
  providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.importProvidersFrom)(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)]
}).then(appRef => {
  try {
    const win = window;
    // expose injector so utility helpers can access Angular services
    const injector = appRef._injector || appRef.injector || null;
    if (injector) win.__rootInjector = injector;
    // drain any queued notifications created before injector was ready
    try {
      const queue = win.__notifyQueue || [];
      if (queue && queue.length && injector) {
        Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! @angular/material/snack-bar */ 3347)).then(mod => {
          try {
            const MatSnackBar = mod.MatSnackBar;
            const snack = injector.get(MatSnackBar);
            for (const item of queue) {
              try {
                clearTimeout(item.fallbackTimer);
              } catch (e) {}
              const config = {
                duration: item.severity === 'error' ? 6000 : 4000,
                horizontalPosition: 'right',
                verticalPosition: 'bottom'
              };
              snack.open(item.message, 'Close', config);
            }
          } catch (e) {/* ignore */}
        }).catch(e => {});
      }
      win.__notifyQueue = [];
    } catch (e) {/* ignore if material not available or errors during import */}
  } catch (e) {}
}).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map