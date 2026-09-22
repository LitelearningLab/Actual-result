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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/shared.module */ 3887);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 1567);
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
  constructor(auth, sessionService, globalInstituteContext, router, document) {
    this.auth = auth;
    this.sessionService = sessionService;
    this.globalInstituteContext = globalInstituteContext;
    this.router = router;
    this.document = document;
    this.title = 'edu-UI';
    this.isAuthRoute = false;
    this.isExamRunningRoute = false;
    this.isLoggedIn$ = this.auth.isLoggedIn$;
    this.sessionService.startListening();
    this.syncGlobalInstituteBodyClass(this.globalInstituteContext.isGlobalFilterActive());
    this.globalInstituteSub = this.globalInstituteContext.selectedInstitute$.subscribe(() => {
      this.syncGlobalInstituteBodyClass(this.globalInstituteContext.isGlobalFilterActive());
    });
    this.checkIsAuthRoute(this.router.url);
    this.routerSub = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd)).subscribe(event => {
      this.checkIsAuthRoute(event.urlAfterRedirects || event.url);
    });
  }
  checkIsAuthRoute(url) {
    const urlString = url || '';
    const cleanUrl = urlString.split('?')[0].split('#')[0];
    const isOpenSheetRoute = urlString.includes('open_sheet=true') || urlString.includes('answer_sheet=true');
    this.isAuthRoute = cleanUrl === '/' || cleanUrl.endsWith('/login') || cleanUrl === '/login' || cleanUrl === '/home/login' || cleanUrl === '/register';
    this.isExamRunningRoute = cleanUrl === '/user/exam/run' || cleanUrl === '/user-exam' || cleanUrl.startsWith('/user/exam/run') || isOpenSheetRoute;
  }
  ngOnDestroy() {
    try {
      this.globalInstituteSub?.unsubscribe();
    } catch (e) {}
    try {
      this.routerSub?.unsubscribe();
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
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_session_service__WEBPACK_IMPORTED_MODULE_2__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_3__.GlobalInstituteContextService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT));
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
      consts: [[4, "ngIf", "ngIfElse"], ["fullScreenView", ""], ["href", "#main-content", 1, "skip-link"], [1, "app-layout"], ["role", "navigation", "aria-label", "Main navigation", 1, "app-sidenav"], [1, "app-main"], ["role", "banner", 1, "app-topbar"], ["id", "main-content", "role", "main", 1, "app-content"], ["aria-live", "polite", "aria-busy", "true"], [1, "public-layout", "exam-runner-fullscreen"], ["role", "main"], ["aria-live", "polite"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, AppComponent_ng_container_0_Template, 12, 2, "ng-container", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AppComponent_ng_template_2_Template, 4, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx.isLoggedIn$) && !ctx.isAuthRoute && !ctx.isExamRunningRoute)("ngIfElse", _r1);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__.LoaderComponent, _shared_components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_5__.NavbarMainComponent, _shared_components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_6__.SideNavComponent, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet],
      styles: ["@charset \"UTF-8\";\n[_ngcontent-%COMP%]:root {\n  --topbar-height: max(3.5rem, calc(var(--font-size-base) * 5)); \n\n  --sidenav-width: 16.25rem; \n\n  --sidenav-collapsed: 4.5rem; \n\n}\n\n\n\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n\n\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n  min-height: 100%;\n  background-color: var(--theme-3);\n  overflow: auto;\n  position: relative;\n}\n\n\n\n\n\n.skip-link[_ngcontent-%COMP%] {\n  position: fixed;\n  top: -3rem;\n  left: 1rem;\n  z-index: 99999;\n  padding: 0.75rem 1.25rem;\n  background: var(--button-1, #4f46e5);\n  color: #fff;\n  font-weight: 600;\n  font-size: 0.875rem;\n  border-radius: 0 0 0.5rem 0.5rem;\n  text-decoration: none;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);\n  transition: top 0.2s ease-in-out;\n}\n.skip-link[_ngcontent-%COMP%]:focus {\n  top: 0;\n  outline: 0.1875rem solid var(--button-1, #4f46e5);\n  outline-offset: 0.125rem;\n}\n\n\n\n\n\n.public-layout[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n\n.exam-runner-fullscreen[_ngcontent-%COMP%] {\n  height: 100vh;\n  max-height: 100vh;\n  overflow-y: auto !important;\n  overflow-x: hidden;\n}\n.exam-runner-fullscreen[_ngcontent-%COMP%]    > main[_ngcontent-%COMP%] {\n  flex: 1 0 auto;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n\n\n.app-layout[_ngcontent-%COMP%] {\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  min-height: 100vh; \n\n  height: 100vh; \n\n  background: var(--theme-3);\n  gap: 0;\n  min-width: 0;\n  position: relative;\n}\n\n\n\n.app-main[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: var(--theme-1);\n  \n\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  min-width: 0;\n  height: 100vh; \n\n  \n\n  width: calc(100% - var(--sidenav-width));\n  overflow: visible; \n\n}\n\n\n\n.app-topbar[_ngcontent-%COMP%] {\n  flex: 0 0 var(--topbar-height);\n  min-height: var(--topbar-height);\n  width: 100%;\n  background: var(--theme-2-bg-1);\n  display: grid;\n  align-items: center;\n  box-shadow: 0 0.125rem 0.625rem rgba(20, 30, 60, 0.06);\n  padding: 0.5rem 1.5rem;\n  border-bottom: 1px solid var(--theme-2-border);\n  font-size: var(--font-size-base);\n  line-height: var(--line-height-base);\n  position: relative;\n  z-index: 100; \n\n}\n\n\n\n.app-content[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  display: block;\n  min-height: 0;\n  width: 100%;\n  background: var(--theme-2);\n  padding: 1rem 1rem;\n  overflow-y: auto;\n  -ms-overflow-style: none;\n  height: auto;\n  position: relative;\n  \n\n}\n\n\n\n\n\n@media (max-width: 992px) {\n  [_ngcontent-%COMP%]:root {\n    --topbar-height: 3.5rem;\n  }\n  .app-layout[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    width: 100%;\n    background: var(--theme-3);\n    overflow: visible;\n  }\n  .app-main[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    display: flex;\n    flex-direction: column;\n    min-height: 0;\n    width: 100% !important;\n    margin-left: 0 !important;\n    overflow: visible;\n    background: var(--theme-1);\n  }\n  .app-sidenav[_ngcontent-%COMP%], .app-side-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    height: 100vh;\n    z-index: 1050;\n  }\n}\n@media (max-width: 768px) {\n  .app-topbar[_ngcontent-%COMP%] {\n    padding: 0.375rem 0.75rem;\n  }\n  .app-content[_ngcontent-%COMP%] {\n    padding: 0 0.5rem 0.5rem;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n@media (max-width: 480px) {\n  .app-topbar[_ngcontent-%COMP%] {\n    padding: 0.25rem 0.375rem;\n  }\n  .app-content[_ngcontent-%COMP%] {\n    padding: 0 0.25rem 0.25rem;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n  }\n}\n\n\n.app-sidenav[_ngcontent-%COMP%]::-webkit-scrollbar, .app-content[_ngcontent-%COMP%]::-webkit-scrollbar, .public-layout[_ngcontent-%COMP%]::-webkit-scrollbar, .exam-runner-fullscreen[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.5rem;\n  background: rgba(86, 91, 102, 0.09);\n}\n\n.app-sidenav[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .app-content[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .public-layout[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .exam-runner-fullscreen[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #b2bacb;\n  border-radius: 0.4375rem;\n}\n\n.global-institute-active[_ngcontent-%COMP%]   .local-institute-field[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n\n\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-text-field-wrapper[_ngcontent-%COMP%] {\n  border-radius: 0.625rem;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-form-field-infix[_ngcontent-%COMP%] {\n  min-height: unset;\n  padding: 0;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-select-trigger[_ngcontent-%COMP%] {\n  min-height: unset;\n  display: inline-flex;\n  align-items: center;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%], .question-bank-filter-panel[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%], .category-filters-panel[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%], .global-filter-section[_ngcontent-%COMP%]   .mat-mdc-select-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNFLDZEQUFBLEVBQUEscUNBQUE7RUFDQSx5QkFBQSxFQUFBLDJCQUFBO0VBQ0EsMkJBQUEsRUFBQSwrQ0FBQTtBQUVGOztBQUNBLGVBQUE7QUFDQTtFQUFJLHNCQUFBO0FBR0o7O0FBREEsd0JBQUE7QUFDQTtFQUFhLFdBQUE7RUFBWSxTQUFBO0VBQVUsVUFBQTtFQUFXLGdCQUFBO0VBQWlCLGdDQUFBO0VBQWlDLGNBQUE7RUFBZSxrQkFBQTtBQVcvRzs7QUFUQTs7b0VBQUE7QUFHQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG9DQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsaURBQUE7RUFDQSxnQ0FBQTtBQVlGO0FBVkU7RUFDRSxNQUFBO0VBQ0EsaURBQUE7RUFDQSx3QkFBQTtBQVlKOztBQVJBOztvRUFBQTtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBV0Y7O0FBUkE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FBV0Y7QUFURTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVdKOztBQVBBLDJDQUFBO0FBQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBLEVBQUEsZ0RBQUE7RUFDQSxhQUFBLEVBQUEsd0RBQUE7RUFDQSwwQkFBQTtFQUNBLE1BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFVRjs7QUFRQSwrRUFBQTtBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQ0FBQTtFQUNBLG1FQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBLEVBQUEsZ0RBQUE7RUFDQSwyREFBQTtFQUNBLHdDQUFBO0VBQ0EsaUJBQUEsRUFBQSw0Q0FBQTtBQUxGOztBQVNBLDRCQUFBO0FBQ0E7RUFDRSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQSxFQUFBLG9EQUFBO0FBTkY7O0FBVUEscUNBQUE7QUFDQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdEQUFBO0FBUEY7O0FBWUE7O29FQUFBO0FBR0E7RUFDRTtJQUNFLHVCQUFBO0VBVEY7RUFZQTtJQUNFLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0lBQ0EsaUJBQUE7RUFWRjtFQWFBO0lBQ0UsY0FBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLGFBQUE7SUFDQSxzQkFBQTtJQUNBLHlCQUFBO0lBQ0EsaUJBQUE7SUFDQSwwQkFBQTtFQVhGO0VBY0E7O0lBRUUsZUFBQTtJQUNBLE9BQUE7SUFDQSxNQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7SUFDQSxhQUFBO0VBWkY7QUFDRjtBQWVBO0VBQ0U7SUFDRSx5QkFBQTtFQWJGO0VBZ0JBO0lBQ0Usd0JBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0VBZEY7QUFDRjtBQWlCQTtFQUNFO0lBQ0UseUJBQUE7RUFmRjtFQWtCQTtJQUNFLDBCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtFQWhCRjtBQUNGO0FBbUJBLHVEQUFBO0FBQ0U7Ozs7RUFJRSxhQUFBO0VBQ0EsbUNBQUE7QUFqQko7O0FBbUJFOzs7O0VBSUUsbUJBQUE7RUFDQSx3QkFBQTtBQWhCSjs7QUFtQkE7RUFDRSx3QkFBQTtBQWhCRjs7QUFtQkE7OEdBQUE7QUFFQTs7OztFQUlFLFdBQUE7QUFoQkY7O0FBbUJBOzs7O0VBSUUsdUJBQUE7QUFoQkY7O0FBbUJBOzs7O0VBSUUsaUJBQUE7RUFDQSxVQUFBO0FBaEJGOztBQW1CQTs7OztFQUlFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtBQWhCRjs7QUFtQkE7Ozs7RUFJRSxtQkFBQTtBQWhCRiIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcbiAgLS10b3BiYXItaGVpZ2h0OiBtYXgoMy41cmVtLCBjYWxjKHZhcigtLWZvbnQtc2l6ZS1iYXNlKSAqIDUpKTsgLyogcmVzcG9uc2l2ZSBub21pbmFsIHRvcGJhciBoZWlnaHQgKi9cbiAgLS1zaWRlbmF2LXdpZHRoOiAxNi4yNXJlbTsgLyogU2lkZSBuYXYgbm9taW5hbCB3aWR0aCAqL1xuICAtLXNpZGVuYXYtY29sbGFwc2VkOiA0LjVyZW07IC8qIGNvbGxhcHNlZCB3aWR0aCAoYXBwcm94IDcycHggYXQgMTZweCByb290KSAqL1xufVxuXG4vKiBib3ggc2l6aW5nICovXG4qIHsgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuXG4vKiBQcmV2ZW50IHJvb3Qgc2Nyb2xsICovXG5odG1sLCBib2R5IHsgd2lkdGg6MTAwJTsgbWFyZ2luOjA7IHBhZGRpbmc6MDsgbWluLWhlaWdodDoxMDAlOyBiYWNrZ3JvdW5kLWNvbG9yOnZhcigtLXRoZW1lLTMpOyBvdmVyZmxvdzphdXRvOyBwb3NpdGlvbjpyZWxhdGl2ZSB9XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgQUNDRVNTSUJJTElUWSDDosKAwpQgU2tpcCBsaW5rIGZvciBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5za2lwLWxpbmsge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogLTNyZW07XG4gIGxlZnQ6IDFyZW07XG4gIHotaW5kZXg6IDk5OTk5O1xuICBwYWRkaW5nOiAwLjc1cmVtIDEuMjVyZW07XG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xLCAjNGY0NmU1KTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAwLjVyZW0gMC41cmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIHRyYW5zaXRpb246IHRvcCAwLjJzIGVhc2UtaW4tb3V0O1xuICBcbiAgJjpmb2N1cyB7XG4gICAgdG9wOiAwO1xuICAgIG91dGxpbmU6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSwgIzRmNDZlNSk7XG4gICAgb3V0bGluZS1vZmZzZXQ6IDAuMTI1cmVtO1xuICB9XG59XG5cbi8qIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxuICAgUFVCTElDIFZJRVcgw6LCgMKUIExhbmRpbmcvTG9naW4vRXhhbSBSdW5uZXIgcGFnZXMgbGF5b3V0XG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbi5wdWJsaWMtbGF5b3V0IHtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG4uZXhhbS1ydW5uZXItZnVsbHNjcmVlbiB7XG4gIGhlaWdodDogMTAwdmg7XG4gIG1heC1oZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcblxuICA+IG1haW4ge1xuICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5cbi8qIEZ1bGwgaGVpZ2h0IGFwcCBsYXlvdXQ6IGhvcml6b250YWwgcm93ICovXG4uYXBwLWxheW91dCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoOyAvKiBwcmVmZXIgbWluLWhlaWdodCBzbyB6b29tZWQgVUkgZG9lc24ndCBjbGlwICovXG4gIGhlaWdodDogMTAwdmg7IC8qIGZhbGxiYWNrIGZvciBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgbWluLWhlaWdodCAqL1xuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zKTtcbiAgZ2FwOiAwO1xuICBtaW4td2lkdGg6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLy8gLmFwcC1zaWRlbmF2IHtcbi8vICAgcG9zaXRpb246IHJlbGF0aXZlO1xuLy8gICBmbGV4OiAwIDAgYXV0bztcbi8vICAgd2lkdGg6IGF1dG87XG4vLyAgIGhlaWdodDogMTAwJTtcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtMSk7XG4vLyAgIG92ZXJmbG93OiBpbmhlcml0O1xuLy8gICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbi8vICAgLy8gYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbi8vICAgLy8gYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcbi8vICAgbWluLXdpZHRoOiAwOyAvKiBhbGxvdyBzaHJpbmtpbmcgb2YgdGhlIGNvbHVtbiAqL1xuLy8gfVxuXG5cblxuLyogTWFpbiBhcmVhOiBzaWRlIG5hdiArIGNvbnRlbnQgLS0gYXBwLW1haW4gc2l0cyB0byB0aGUgcmlnaHQgb2YgYXBwLXNpZGVuYXYgKi9cbi5hcHAtbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtMSk7XG4gIC8qIHotaW5kZXggcmVtb3ZlZCB0byBwcmV2ZW50IHN0YWNraW5nIGNvbnRleHQgaXNzdWVzIHdpdGggbW9kYWxzICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXg6IDEgMSBhdXRvOyAvLyBUYWtlIHJlbWFpbmluZyB3aWR0aFxuICBtaW4td2lkdGg6IDA7XG4gIGhlaWdodDogMTAwdmg7IC8qIHByZWZlciBtaW4taGVpZ2h0IHNvIHpvb21lZCBVSSBkb2Vzbid0IGNsaXAgKi9cbiAgLyogTWFrZSBtYWluIHdpZHRoIHRoZSByZW1haW5pbmcgc3BhY2UgYWZ0ZXIgdGhlIHNpZGUtbmF2ICovXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSB2YXIoLS1zaWRlbmF2LXdpZHRoKSk7XG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiBBbGxvdyBtb2RhbHMgdG8gZXNjYXBlIHN0YWNraW5nIGNvbnRleHQgKi9cbn1cblxuXG4vKiBUb3AgYmFyIGluc2lkZSBhcHAtbWFpbiAqL1xuLmFwcC10b3BiYXIge1xuICBmbGV4OiAwIDAgdmFyKC0tdG9wYmFyLWhlaWdodCk7XG4gIG1pbi1oZWlnaHQ6IHZhcigtLXRvcGJhci1oZWlnaHQpO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMi1iZy0xKTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjYyNXJlbSByZ2JhKDIwLCAzMCwgNjAsIDAuMDYpO1xuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMi1ib3JkZXIpO1xuICBmb250LXNpemU6IHZhcigtLWZvbnQtc2l6ZS1iYXNlKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWxpbmUtaGVpZ2h0LWJhc2UpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDEwMDsgLyogQmVsb3cgbW9kYWwgYmFja2Ryb3BzICgxMDA1MCkgYnV0IGFib3ZlIGNvbnRlbnQgKi9cbn1cblxuXG4vKiBDb250ZW50OiBzY3JvbGxzIGludGVybmFsbHkgb25seSAqL1xuLmFwcC1jb250ZW50IHtcbiAgZmxleDogMSAxIGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtaW4taGVpZ2h0OiAwO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMik7XG4gIHBhZGRpbmc6IDFyZW0gMXJlbTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IGF1dG87XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLyogTm8gei1pbmRleCB0byBhdm9pZCBzdGFja2luZyBjb250ZXh0IGlzc3VlcyAqL1xufVxuXG4vLyBcblxuLyogw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXG4gICBSRVNQT05TSVZFIExBWU9VVCDDosKAwpQgTW9iaWxlICYgVGFibGV0XG4gICDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICA6cm9vdCB7XG4gICAgLS10b3BiYXItaGVpZ2h0OiAzLjVyZW07XG4gIH1cblxuICAuYXBwLWxheW91dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMpO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICB9XG5cbiAgLmFwcC1tYWluIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLWhlaWdodDogMDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMSk7XG4gIH1cblxuICAuYXBwLXNpZGVuYXYsXG4gIC5hcHAtc2lkZS1uYXYge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB6LWluZGV4OiAxMDUwO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuYXBwLXRvcGJhciB7XG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgfVxuXG4gIC5hcHAtY29udGVudCB7XG4gICAgcGFkZGluZzogMCAwLjVyZW0gMC41cmVtO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuYXBwLXRvcGJhciB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjM3NXJlbTtcbiAgfVxuXG4gIC5hcHAtY29udGVudCB7XG4gICAgcGFkZGluZzogMCAwLjI1cmVtIDAuMjVyZW07XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIH1cbn1cblxuLyogQ3VzdG9tIFNjcm9sbGJhciBmb3Igc2lkZWJhci9jb250ZW50L3B1YmxpYy1sYXlvdXQgKi9cbiAgLmFwcC1zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhcixcbiAgLmFwcC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhcixcbiAgLnB1YmxpYy1sYXlvdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLFxuICAuZXhhbS1ydW5uZXItZnVsbHNjcmVlbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAwLjVyZW07XG4gICAgYmFja2dyb3VuZDogcmdiYSg4Niw5MSwxMDIsMC4wOSk7XG4gIH1cbiAgLmFwcC1zaWRlbmF2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcbiAgLmFwcC1jb250ZW50Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcbiAgLnB1YmxpYy1sYXlvdXQ6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxuICAuZXhhbS1ydW5uZXItZnVsbHNjcmVlbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJhY2tncm91bmQ6ICNiMmJhY2I7XG4gICAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtO1xuICB9XG5cbi5nbG9iYWwtaW5zdGl0dXRlLWFjdGl2ZSAubG9jYWwtaW5zdGl0dXRlLWZpZWxkIHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKiBTaGFyZWQgZmlsdGVyIGZpZWxkIGNocm9tZSBhY3Jvc3MgZmlsdGVyIHBhbmVscy5cbiAgIFRoaXMgbWFrZXMgcGxhaW4gbWF0LXNlbGVjdCBmaWVsZHMgdmlzdWFsbHkgYWxpZ24gd2l0aCB0aGUgdHlwYWJsZSBhdXRvY29tcGxldGUgZmllbGRzIHVzZWQgaW4gUXVlc3Rpb25zLiAqL1xuLmZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtZm9ybS1maWVsZCxcbi5xdWVzdGlvbi1iYW5rLWZpbHRlci1wYW5lbCAubWF0LW1kYy1mb3JtLWZpZWxkLFxuLmNhdGVnb3J5LWZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtZm9ybS1maWVsZCxcbi5nbG9iYWwtZmlsdGVyLXNlY3Rpb24gLm1hdC1tZGMtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsdGVycy1wYW5lbCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIsXG4ucXVlc3Rpb24tYmFuay1maWx0ZXItcGFuZWwgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxuLmNhdGVnb3J5LWZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxuLmdsb2JhbC1maWx0ZXItc2VjdGlvbiAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcbn1cblxuLmZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCxcbi5xdWVzdGlvbi1iYW5rLWZpbHRlci1wYW5lbCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4LFxuLmNhdGVnb3J5LWZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCxcbi5nbG9iYWwtZmlsdGVyLXNlY3Rpb24gLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZmlsdGVycy1wYW5lbCAubWF0LW1kYy1zZWxlY3QtdHJpZ2dlcixcbi5xdWVzdGlvbi1iYW5rLWZpbHRlci1wYW5lbCAubWF0LW1kYy1zZWxlY3QtdHJpZ2dlcixcbi5jYXRlZ29yeS1maWx0ZXJzLXBhbmVsIC5tYXQtbWRjLXNlbGVjdC10cmlnZ2VyLFxuLmdsb2JhbC1maWx0ZXItc2VjdGlvbiAubWF0LW1kYy1zZWxlY3QtdHJpZ2dlciB7XG4gIG1pbi1oZWlnaHQ6IHVuc2V0O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZpbHRlcnMtcGFuZWwgLm1hdC1tZGMtc2VsZWN0LXZhbHVlLFxuLnF1ZXN0aW9uLWJhbmstZmlsdGVyLXBhbmVsIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSxcbi5jYXRlZ29yeS1maWx0ZXJzLXBhbmVsIC5tYXQtbWRjLXNlbGVjdC12YWx1ZSxcbi5nbG9iYWwtZmlsdGVyLXNlY3Rpb24gLm1hdC1tZGMtc2VsZWN0LXZhbHVlIHtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _shared_date_localized_date_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/date/localized-date-adapter */ 4297);
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
        useClass: _shared_date_localized_date_adapter__WEBPACK_IMPORTED_MODULE_3__.LocalizedDateAdapter
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_6__.MAT_DATE_FORMATS,
        useValue: _shared_date_localized_date_adapter__WEBPACK_IMPORTED_MODULE_3__.LOCALIZED_DATE_FORMATS
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 6196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/api.config */ 1892);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_shared_services_page_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/page-access.service */ 626);
/* harmony import */ var src_app_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/global-institute-context.service */ 4769);








class AuthService {
  get isLoggedIn() {
    return this._logged.value;
  }
  // synchronous accessor for current user value
  get currentUserValue() {
    return this._user.value;
  }
  constructor(http, pageAccess, instituteContext) {
    this.http = http;
    this.pageAccess = pageAccess;
    this.instituteContext = instituteContext;
    this._logged = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.isLoggedIn$ = this._logged.asObservable();
    this._authReady = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(false);
    this.authReady$ = this._authReady.asObservable();
    this._user = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
    this.user$ = this._user.asObservable();
    this.heartbeatTimer = null;
    this.visibilityListener = null;
    this.restoreSession();
  }
  sendHeartbeatPing() {
    let token = null;
    try {
      token = sessionStorage.getItem('token');
    } catch (e) {}
    if (!token) {
      console.debug('[HEARTBEAT] No token');
      this.stopHeartbeat();
      return;
    }
    console.debug('[HEARTBEAT] Sending token:', token.substring(0, 12));
    this.http.post(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_1__.API_BASE}/session/heartbeat`, {}).subscribe({
      next: resp => {
        console.debug('[HEARTBEAT] SUCCESS:', resp);
      },
      error: err => {
        console.error('[HEARTBEAT] FAILED', {
          status: err?.status,
          error: err?.error,
          token: token?.substring(0, 12)
        });
        if (err?.status === 401) {
          console.error('[HEARTBEAT] SERVER SAYS THIS SESSION IS INVALID');
          this.clearLocalSession();
        }
      }
    });
  }
  startHeartbeat() {
    this.stopHeartbeat();
    this.sendHeartbeatPing();
    this.heartbeatTimer = setInterval(() => {
      this.sendHeartbeatPing();
    }, 25000);
    if (!this.visibilityListener && typeof document !== 'undefined') {
      this.visibilityListener = () => {
        if (document.visibilityState === 'visible') {
          this.sendHeartbeatPing();
        }
      };
      document.addEventListener('visibilitychange', this.visibilityListener);
    }
  }
  stopHeartbeat() {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.visibilityListener && typeof document !== 'undefined') {
      document.removeEventListener('visibilitychange', this.visibilityListener);
      this.visibilityListener = null;
    }
  }
  restoreSession() {
    let token = null;
    try {
      token = sessionStorage.getItem('token');
    } catch (e) {}
    if (!token) {
      this.clearLocalSession();
      this._authReady.next(true);
      return;
    }
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_1__.API_BASE}/session/validate`).subscribe({
      next: resp => {
        if (resp?.status === true && resp.user) {
          const user = {
            ...resp.user
          };
          if (!user.id && (user.user_id || user.userId)) user.id = user.user_id || user.userId;
          this._user.next(user);
          this._logged.next(true);
          sessionStorage.setItem('user', JSON.stringify(user));
          sessionStorage.setItem('isLogin', 'true');
          if (user.role) sessionStorage.setItem('userRole', user.role);
          if (user.locale) sessionStorage.setItem('locale', user.locale);
          if (user.country_code) sessionStorage.setItem('country_code', user.country_code);
          if (user.country_name) sessionStorage.setItem('country_name', user.country_name);
          if (user.country_id) sessionStorage.setItem('country_id', user.country_id);
          const uid = user.id || user.user_id || user.userId;
          if (uid) this.pageAccess.fetchForUser(uid.toString()).subscribe();
          this.startHeartbeat();
        } else {
          this.clearLocalSession();
        }
        this._authReady.next(true);
      },
      error: () => {
        this.clearLocalSession();
        this._authReady.next(true);
      }
    });
  }
  login(identifier, password) {
    var _this = this;
    return (0,D_Actula_result_production_Actual_result_frontend_edu_UI_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_1__.API_BASE}/login`;
      try {
        const resp = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.firstValueFrom)(_this.http.post(url, {
          identifier,
          email: identifier,
          password
        }));
        const ok = resp?.status === true && typeof resp.token === 'string' && resp.token.length > 0 && !!resp.user;
        if (ok) {
          try {
            _this._logged.next(true);
            if (resp.token) sessionStorage.setItem('token', resp.token);
            sessionStorage.setItem('isLogin', 'true');
            if (resp.user) {
              try {
                const u = {
                  ...resp.user
                };
                if (!u.id && (u.user_id || u.userId)) u.id = u.user_id || u.userId;
                sessionStorage.setItem('user', JSON.stringify(u));
                _this._user.next(u);
                if (u.name) sessionStorage.setItem('username', u.name);
                if (u.user_id) sessionStorage.setItem('user_id', u.user_id);
                if (u.role) sessionStorage.setItem('userRole', u.role);
                if (u.institute) sessionStorage.setItem('institute', u.institute);
                if (u.institute_id) sessionStorage.setItem('institute_id', u.institute_id.toString());
                if (u.locale) sessionStorage.setItem('locale', u.locale);
                if (u.country_code) sessionStorage.setItem('country_code', u.country_code);
                if (u.country_name) sessionStorage.setItem('country_name', u.country_name);
                if (u.country_id) sessionStorage.setItem('country_id', u.country_id);
              } catch (e) {
                sessionStorage.setItem('user', JSON.stringify(resp.user));
                _this._user.next(resp.user);
              }
            }
            try {
              const current = _this._user.value;
              const uid = current && (current.id || current.user_id || current.userId);
              if (uid) {
                _this.pageAccess.fetchForUser(uid.toString()).subscribe();
              }
            } catch (e) {}
            _this.startHeartbeat();
          } catch (e) {}
          return {
            ok: true
          };
        } else {
          _this._logged.next(false);
          return {
            ok: false,
            remainingSeconds: resp?.remaining_seconds,
            isLocked: resp?.is_locked,
            lockType: resp?.lock_type,
            statusMessage: resp?.statusMessage
          };
        }
      } catch (err) {
        let errResp = err?.error || err;
        if (typeof errResp === 'string') {
          try {
            errResp = JSON.parse(errResp);
          } catch (e) {}
        }
        const lockType = errResp?.lock_type || errResp?.lockType || (errResp?.is_locked ? 'active_session' : undefined);
        const isLocked = errResp?.is_locked ?? errResp?.isLocked ?? (lockType ? true : false);
        const remainingSeconds = errResp?.remaining_seconds ?? errResp?.remainingSeconds ?? 0;
        const statusMessage = errResp?.statusMessage || errResp?.message || (typeof errResp === 'string' ? errResp : 'Login failed. Please check your credentials.');
        // 409 means another session is active. Do NOT clear an existing local session.
        if (err?.status === 409 && isLocked) {
          return {
            ok: false,
            remainingSeconds: remainingSeconds,
            isLocked: true,
            lockType: lockType,
            statusMessage: statusMessage
          };
        }
        _this._logged.next(false);
        _this._user.next(null);
        return {
          ok: false,
          remainingSeconds: remainingSeconds,
          isLocked: isLocked,
          lockType: lockType,
          statusMessage: statusMessage
        };
      }
    })();
  }
  logout() {
    const currentUser = this._user.value;
    try {
      this.http.post(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_1__.API_BASE}/logout`, {}).subscribe({
        error: () => {}
      });
    } catch (e) {}
    this.clearLocalSession(currentUser);
  }
  clearLocalSession(currentUser = this._user.value) {
    this.stopHeartbeat();
    this._logged.next(false);
    this._user.next(null);
    try {
      if (this.instituteContext) {
        this.instituteContext.clearContext();
      }
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('isLogin');
      sessionStorage.removeItem('username');
      sessionStorage.removeItem('userRole');
      sessionStorage.removeItem('institute');
      sessionStorage.removeItem('user_id');
      sessionStorage.removeItem('institute_id');
      sessionStorage.removeItem('locale');
      sessionStorage.removeItem('country_code');
      sessionStorage.removeItem('country_name');
      sessionStorage.removeItem('country_id');
      sessionStorage.removeItem('launched_exam');
      sessionStorage.removeItem('test_result');
      sessionStorage.removeItem('last_submission');
      sessionStorage.removeItem('review_questions');
      sessionStorage.removeItem('edit_exam');
      sessionStorage.removeItem('view_exam');
      sessionStorage.removeItem('edit_category');
      sessionStorage.removeItem('view_user');
      sessionStorage.removeItem('edit_user');
      sessionStorage.removeItem('edit_question');
      sessionStorage.removeItem('view_question');
      sessionStorage.removeItem('super_admin_institute_context');
      sessionStorage.removeItem('global_institute_id');
      sessionStorage.removeItem('global_institute_name');
      try {
        const uid = currentUser && (currentUser.id || currentUser.user_id || currentUser.userId);
        if (uid) this.pageAccess.clearCache(uid.toString());
      } catch (e) {}
    } catch (e) {}
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_shared_services_page_access_service__WEBPACK_IMPORTED_MODULE_2__.PageAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_3__.GlobalInstituteContextService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
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
const hostname = window.location.hostname;
// Detect local environment (localhost, 127.0.0.1, or local Wi-Fi/LAN IP address)
const frontendIsLocal = hostname === 'localhost' || hostname === '127.0.0.1' || hostname.startsWith('192.168.') || hostname.startsWith('10.') || hostname.startsWith('172.');
const LOCAL_API_BASE = `http://${hostname}:5001/edu/api`;
const LIVE_API_BASE = 'http://34.100.213.250:5001/edu/api';
// Change only this value while developing:
// true  = frontend uses the local backend
// false = frontend uses the live backend
const USE_LOCAL_BACKEND = false;
const API_BASE = frontendIsLocal ? LOCAL_API_BASE : LIVE_API_BASE;

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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ 4175);





function ConfirmDialogComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.data.countdown);
  }
}
function ConfirmDialogComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.data.cancelText || "Cancel", " ");
  }
}
function ConfirmDialogComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.data.confirmText || "Confirm", " ");
  }
}
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
      decls: 13,
      vars: 7,
      consts: [[1, "dialog-container"], [1, "dialog-icon"], ["viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["cx", "12", "cy", "12", "r", "10", "stroke", "currentColor", "stroke-width", "2"], ["d", "M12 8v4M12 16h.01", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round"], [1, "dialog-title"], [1, "dialog-message"], ["class", "countdown-badge", 4, "ngIf"], [1, "dialog-actions"], ["mat-stroked-button", "", "class", "cancel-btn", 3, "mat-dialog-close", 4, "ngIf"], ["mat-flat-button", "", "class", "confirm-btn", 3, "mat-dialog-close", 4, "ngIf"], [1, "countdown-badge"], [1, "countdown-time"], ["mat-stroked-button", "", 1, "cancel-btn", 3, "mat-dialog-close"], ["mat-flat-button", "", 1, "confirm-btn", 3, "mat-dialog-close"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ConfirmDialogComponent_div_9_Template, 3, 1, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConfirmDialogComponent_button_11_Template, 2, 2, "button", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ConfirmDialogComponent_button_12_Template, 2, 2, "button", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("warning-icon", !!ctx.data.countdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Confirm");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.countdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.cancelText !== "");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.data.confirmText !== "");
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__.MatDialogClose, _angular_material_button__WEBPACK_IMPORTED_MODULE_3__.MatButton],
      styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\n.dialog-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  padding: 1.75rem 1.25rem 1.25rem;\n  background: var(--bg-1, #ffffff);\n  border-radius: 1.25rem;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.25);\n  border: 1px solid var(--theme-3-border, #e2e8f0);\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.dialog-icon[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  height: 3.5rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n\n.dialog-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  color: var(--button-1, #6366f1);\n}\n\n.warning-icon[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(239, 68, 68, 0.12) 0%, rgba(245, 158, 11, 0.12) 100%) !important;\n}\n\n.warning-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  color: #dc2626 !important;\n}\n\n.dialog-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: var(--theme-3-text-1, #1e293b);\n  letter-spacing: -0.01em;\n  margin: 0 0 0.5rem 0;\n}\n\n.dialog-message[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3, #64748b);\n  line-height: 1.5;\n  white-space: pre-line;\n  margin: 0 0 1rem 0;\n  font-size: 0.9375rem;\n}\n\n.countdown-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0.25rem 0 1.25rem 0;\n  padding: 0.5rem 1.5rem;\n  background: #fef2f2;\n  border: 1.5px dashed #fca5a5;\n  border-radius: 0.75rem;\n}\n\n.countdown-time[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 800;\n  color: #dc2626;\n  font-family: monospace, monospace;\n  letter-spacing: 0.1em;\n}\n\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  width: 100%;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 0.625rem;\n  padding: 0.625rem 1rem;\n  font-weight: 600;\n  border-color: var(--theme-3-border, #e2e8f0);\n  color: var(--theme-3-text-2, #475569);\n  transition: all 0.2s ease;\n}\n\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background: var(--bg-2, #f8fafc);\n  border-color: var(--theme-3-text-3, #94a3b8);\n}\n\n.confirm-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.625rem;\n  padding: 0.625rem 1rem;\n  font-weight: 600;\n  border: none;\n  transition: all 0.2s ease;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.25);\n}\n\n.confirm-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);\n  transform: translateY(-1px);\n}\n\n@media (max-width: 480px) {\n  .dialog-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 0.625rem;\n  }\n  .cancel-btn[_ngcontent-%COMP%], .confirm-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNVO0VBQ0ssY0FBQTtBQUFmOztBQUVVO0VBQ0ssYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFDZjs7QUFDVTtFQUNLLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw2RkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFFZjs7QUFBVTtFQUNLLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFHZjs7QUFEVTtFQUNLLHlHQUFBO0FBSWY7O0FBRlU7RUFDSyx5QkFBQTtBQUtmOztBQUhVO0VBQ0ssa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFDQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQU1mOztBQUpVO0VBQ0sscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQU9mOztBQUxVO0VBQ0ssYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FBUWY7O0FBTlU7RUFDSyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQkFBQTtBQVNmOztBQVBVO0VBQ0ssYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBVWY7O0FBUlU7RUFDSyxPQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxxQ0FBQTtFQUNBLHlCQUFBO0FBV2Y7O0FBVFU7RUFDSyxnQ0FBQTtFQUNBLDRDQUFBO0FBWWY7O0FBVlU7RUFDSyxPQUFBO0VBQ0Esc0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDhDQUFBO0FBYWY7O0FBWFU7RUFDSywrQ0FBQTtFQUNBLDJCQUFBO0FBY2Y7O0FBWlU7RUFDSztJQUNLLDhCQUFBO0lBQ0EsYUFBQTtFQWVsQjtFQWJhO0lBQ0ssV0FBQTtJQUNBLGdCQUFBO0VBZWxCO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpYWxvZy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgcGFkZGluZzogMS43NXJlbSAxLjI1cmVtIDEuMjVyZW07XG4gICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xLCAjZmZmZmZmKTtcbiAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMjVyZW07XG4gICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggNTBweCByZ2JhKDE1LCAyMywgNDIsIDAuMjUpO1xuICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIsICNlMmU4ZjApO1xuICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlhbG9nLWljb24ge1xuICAgICAgICAgICAgICAgd2lkdGg6IDMuNXJlbTtcbiAgICAgICAgICAgICAgIGhlaWdodDogMy41cmVtO1xuICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwxMDIsMjQxLDAuMSkgMCUsIHJnYmEoMTM5LDkyLDI0NiwwLjEpIDEwMCUpO1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWFsb2ctaWNvbiBzdmcge1xuICAgICAgICAgICAgICAgd2lkdGg6IDEuNzVyZW07XG4gICAgICAgICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLTEsICM2MzY2ZjEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud2FybmluZy1pY29uIHtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjM5LDY4LDY4LDAuMTIpIDAlLCByZ2JhKDI0NSwxNTgsMTEsMC4xMikgMTAwJSkgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndhcm5pbmctaWNvbiBzdmcge1xuICAgICAgICAgICAgICAgY29sb3I6ICNkYzI2MjYgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmRpYWxvZy10aXRsZSB7XG4gICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0xLCAjMWUyOTNiKTtcbiAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xuICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5kaWFsb2ctbWVzc2FnZSB7XG4gICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM2NDc0OGIpO1xuICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbiAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcbiAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY291bnRkb3duLWJhZGdlIHtcbiAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICBtYXJnaW46IDAuMjVyZW0gMCAxLjI1cmVtIDA7XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZlZjJmMjtcbiAgICAgICAgICAgICAgIGJvcmRlcjogMS41cHggZGFzaGVkICNmY2E1YTU7XG4gICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY291bnRkb3duLXRpbWUge1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgICAgICAgIGNvbG9yOiAjZGMyNjI2O1xuICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZGlhbG9nLWFjdGlvbnMge1xuICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgIGdhcDogMC43NXJlbTtcbiAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FuY2VsLWJ0biB7XG4gICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XG4gICAgICAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xuICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tdGhlbWUtMy1ib3JkZXIsICNlMmU4ZjApO1xuICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjNDc1NTY5KTtcbiAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYW5jZWwtYnRuOmhvdmVyIHtcbiAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnLTIsICNmOGZhZmMpO1xuICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMywgIzk0YTNiOCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb25maXJtLWJ0biB7XG4gICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xuICAgICAgICAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcbiAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoOTksMTAyLDI0MSwwLjI1KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbmZpcm0tYnRuOmhvdmVyIHtcbiAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSg5OSwxMDIsMjQxLDAuMzUpO1xuICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAgICAgIC5kaWFsb2ctYWN0aW9ucyB7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgICAgICAgICAgICAgICAgICAgZ2FwOiAwLjYyNXJlbTtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgIC5jYW5jZWwtYnRuLCAuY29uZmlybS1idG4ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDRweDtcbiAgICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICJdLCJzb3VyY2VSb290IjoiIn0= */"]
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





function DateRangePickerDialogComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const day_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](day_r4);
  }
}
function DateRangePickerDialogComponent_button_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_button_35_Template_button_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const cell_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.onDayClick(cell_r5.date));
    })("mouseenter", function DateRangePickerDialogComponent_button_35_Template_button_mouseenter_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const cell_r5 = restoredCtx.$implicit;
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.onDayHover(cell_r5.date));
    })("mouseleave", function DateRangePickerDialogComponent_button_35_Template_button_mouseleave_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.onDayHover(null));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const cell_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("other-month", !cell_r5.isCurrentMonth)("range-start", cell_r5.isStart)("range-end", cell_r5.isEnd)("has-end", cell_r5.hasEnd)("in-range", cell_r5.isInRange)("range-preview", cell_r5.isPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cell_r5.dayNumber);
  }
}
function DateRangePickerDialogComponent_span_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
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
function DateRangePickerDialogComponent_button_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_button_44_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r10.onClear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
    if (this.dialogRef && typeof this.dialogRef.addPanelClass === 'function') {
      this.dialogRef.addPanelClass('date-range-dialog-panel');
    }
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
      case 'last_3_months':
        {
          const start = new Date(today);
          start.setMonth(today.getMonth() - 3);
          this.selectedStart = start;
          this.selectedEnd = today;
          break;
        }
      case 'last_6_months':
        {
          const start = new Date(today);
          start.setMonth(today.getMonth() - 6);
          this.selectedStart = start;
          this.selectedEnd = today;
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
  onClear() {
    this.selectedStart = null;
    this.selectedEnd = null;
    this.activePreset = null;
    this.startDateInput = '';
    this.endDateInput = '';
    this.updateGrid();
    this.dialogRef.close({
      startDate: null,
      endDate: null
    });
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
      decls: 49,
      vars: 28,
      consts: [[1, "date-range-modal-container", 3, "click"], [1, "presets-sidebar"], ["type", "button", 1, "preset-item", 3, "click"], [1, "calendar-main-panel"], [1, "month-nav-header"], ["type", "button", "aria-label", "Previous Month", 1, "nav-arrow-btn", 3, "click"], [1, "month-title-text"], ["type", "button", "aria-label", "Next Month", 1, "nav-arrow-btn", 3, "click"], [1, "weekdays-row"], ["class", "weekday-cell", 4, "ngFor", "ngForOf"], [1, "days-grid-container"], ["type", "button", "class", "day-grid-cell", 3, "other-month", "range-start", "range-end", "has-end", "in-range", "range-preview", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "picker-footer-bar"], [1, "footer-inputs-group"], ["type", "text", "placeholder", "DD/MM/YYYY", 1, "date-input-pill", 3, "value", "input", "blur"], [1, "range-dash"], ["class", "range-days-label", 4, "ngIf"], [1, "footer-action-buttons"], ["type", "button", "class", "btn-picker-clear", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn-picker-cancel", 3, "click"], ["type", "button", 1, "btn-picker-apply", 3, "click"], [1, "weekday-cell"], ["type", "button", 1, "day-grid-cell", 3, "click", "mouseenter", "mouseleave"], [1, "day-number-label"], [1, "range-days-label"], ["type", "button", 1, "btn-picker-clear", 3, "click"]],
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
            return ctx.selectPreset("last_3_months");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Last 3 months");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_16_listener() {
            return ctx.selectPreset("last_6_months");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Last 6 months");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_18_listener() {
            return ctx.selectPreset("this_year");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "This year");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_20_listener() {
            return ctx.selectPreset("last_year");
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Last year");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3)(23, "div", 4)(24, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_24_listener() {
            return ctx.prevMonth();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "chevron_left");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_29_listener() {
            return ctx.nextMonth();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "chevron_right");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, DateRangePickerDialogComponent_span_33_Template, 2, 1, "span", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, DateRangePickerDialogComponent_button_35_Template, 3, 13, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 12)(37, "div", 13)(38, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DateRangePickerDialogComponent_Template_input_input_38_listener($event) {
            return ctx.onStartDateInput($event.target.value);
          })("blur", function DateRangePickerDialogComponent_Template_input_blur_38_listener() {
            return ctx.onStartDateBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "-");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function DateRangePickerDialogComponent_Template_input_input_41_listener($event) {
            return ctx.onEndDateInput($event.target.value);
          })("blur", function DateRangePickerDialogComponent_Template_input_blur_41_listener() {
            return ctx.onEndDateBlur();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, DateRangePickerDialogComponent_span_42_Template, 4, 1, "span", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DateRangePickerDialogComponent_button_44_Template, 2, 0, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_45_listener() {
            return ctx.onCancel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DateRangePickerDialogComponent_Template_button_click_47_listener() {
            return ctx.onApply();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Apply");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "last_3_months");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.activePreset === "last_6_months");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedStart || ctx.selectedEnd);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon],
      styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  max-width: 100%;\n}\n\n.date-range-modal-container[_ngcontent-%COMP%] {\n  display: flex;\n  background: #ffffff;\n  border-radius: 12px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  font-family: Roboto, -apple-system, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n  color: #334155;\n  -webkit-user-select: none;\n          user-select: none;\n  max-width: 100%;\n  box-sizing: border-box;\n}\n\n\n\n.presets-sidebar[_ngcontent-%COMP%] {\n  width: 140px;\n  padding: 16px 8px;\n  border-right: 1px solid #e2e8f0;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #fafafa;\n  flex-shrink: 0;\n  min-width: 0;\n  box-sizing: border-box;\n}\n\nbutton.preset-item[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  outline: none;\n  text-align: left;\n  font-family: inherit;\n  width: 100%;\n  font-size: 13px;\n  font-weight: 500;\n  color: #475569;\n  padding: 8px 12px;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n  white-space: nowrap;\n}\nbutton.preset-item[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  color: #1e293b;\n}\nbutton.preset-item.active[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0284c7;\n  font-weight: 600;\n}\n\n\n\n.calendar-main-panel[_ngcontent-%COMP%] {\n  padding: 16px 20px;\n  display: flex;\n  flex-direction: column;\n  min-width: 320px;\n  flex: 1;\n  box-sizing: border-box;\n}\n\n\n\n.month-nav-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  margin-bottom: 12px;\n}\n\n.month-title-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1e293b;\n  min-width: 120px;\n  text-align: center;\n}\n\n.nav-arrow-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  color: #0284c7;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 4px;\n  border-radius: 50%;\n  transition: background 0.15s ease;\n}\n.nav-arrow-btn[_ngcontent-%COMP%]:hover {\n  background: #e0f2fe;\n}\n.nav-arrow-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n\n\n\n.weekdays-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  text-align: center;\n  margin-bottom: 8px;\n}\n\n.weekday-cell[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #94a3b8;\n  padding: 4px 0;\n}\n\n\n\n.days-grid-container[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n  gap: 2px 0;\n}\n\nbutton.day-grid-cell[_ngcontent-%COMP%] {\n  background: transparent;\n  border: none;\n  padding: 0;\n  margin: 0;\n  outline: none;\n  font-family: inherit;\n  width: 100%;\n  height: 34px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  position: relative;\n  font-size: 13px;\n  font-weight: 500;\n  color: #334155;\n  box-sizing: border-box;\n  \n\n}\nbutton.day-grid-cell.other-month[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n}\nbutton.day-grid-cell[_ngcontent-%COMP%]:hover:not(.range-start):not(.range-end)   .day-number-label[_ngcontent-%COMP%] {\n  background: #f1f5f9;\n  border-radius: 50%;\n}\nbutton.day-grid-cell[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  z-index: 2;\n  pointer-events: none;\n  transition: background 0.15s ease, color 0.15s ease;\n}\nbutton.day-grid-cell.in-range[_ngcontent-%COMP%], button.day-grid-cell.range-preview[_ngcontent-%COMP%] {\n  background: #e0f2fe;\n  color: #0369a1;\n}\nbutton.day-grid-cell.in-range[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%], button.day-grid-cell.range-preview[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\nbutton.day-grid-cell.range-start[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  background: #0284c7;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 2px 4px rgba(2, 132, 199, 0.4);\n}\nbutton.day-grid-cell.range-start.has-end[_ngcontent-%COMP%], button.day-grid-cell.range-start.range-preview[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, transparent 50%, #e0f2fe 50%);\n}\nbutton.day-grid-cell.range-end[_ngcontent-%COMP%] {\n  background: linear-gradient(to left, transparent 50%, #e0f2fe 50%);\n}\nbutton.day-grid-cell.range-end[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n  background: #0284c7;\n  color: #ffffff;\n  font-weight: 700;\n  box-shadow: 0 2px 4px rgba(2, 132, 199, 0.4);\n}\nbutton.day-grid-cell.range-start.range-end[_ngcontent-%COMP%] {\n  background: transparent !important;\n}\n\n\n\n.picker-footer-bar[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px solid #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  min-width: 0;\n  box-sizing: border-box;\n}\n\n.footer-inputs-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.date-input-pill[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: 1px solid #cbd5e1;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #334155;\n  background: #ffffff;\n  width: 96px;\n  text-align: center;\n  outline: none;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n  min-width: 0;\n  box-sizing: border-box;\n}\n.date-input-pill[_ngcontent-%COMP%]:focus {\n  border-color: #0284c7;\n  box-shadow: 0 0 0 3px rgba(2, 132, 199, 0.15);\n}\n.date-input-pill[_ngcontent-%COMP%]::placeholder {\n  color: #94a3b8;\n}\n\n.range-dash[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n\n.range-days-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #64748b;\n  margin-left: 4px;\n}\n.range-days-label[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0284c7;\n}\n\n.footer-action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n}\n\n.btn-picker-clear[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #ef4444;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-picker-clear[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n  border-color: #fca5a5;\n  color: #dc2626;\n}\n\n.btn-picker-cancel[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  border: 1px solid #cbd5e1;\n  background: #ffffff;\n  color: #64748b;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n.btn-picker-cancel[_ngcontent-%COMP%]:hover {\n  background: #f8fafc;\n  color: #334155;\n}\n\n.btn-picker-apply[_ngcontent-%COMP%] {\n  padding: 7px 20px;\n  border: none;\n  background: #0284c7;\n  color: #ffffff;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  box-shadow: 0 2px 5px rgba(2, 132, 199, 0.3);\n  transition: background 0.15s ease, box-shadow 0.15s ease;\n}\n.btn-picker-apply[_ngcontent-%COMP%]:hover {\n  background: #0369a1;\n  box-shadow: 0 3px 8px rgba(2, 132, 199, 0.4);\n}\n\n\n\n\n\n@media (max-width: 600px) {\n  .date-range-modal-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    width: 100%;\n    max-width: 100%;\n    border-radius: 14px;\n  }\n  \n\n  .presets-sidebar[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: 0;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    overflow-y: hidden;\n    padding: 8px 10px;\n    border-right: none;\n    border-bottom: 1px solid #e2e8f0;\n    gap: 6px;\n    background: #f8fafc;\n    -webkit-overflow-scrolling: touch;\n    scrollbar-width: none; \n\n  }\n  .presets-sidebar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none; \n\n  }\n  button.preset-item[_ngcontent-%COMP%] {\n    flex-shrink: 0;\n    width: auto;\n    white-space: nowrap;\n    padding: 5px 12px;\n    font-size: 12px;\n    font-weight: 500;\n    border-radius: 20px;\n    background: #ffffff;\n    color: #475569;\n    border: 1px solid #e2e8f0;\n    text-align: center;\n  }\n  button.preset-item[_ngcontent-%COMP%]:hover {\n    background: #f1f5f9;\n    color: #1e293b;\n  }\n  button.preset-item.active[_ngcontent-%COMP%] {\n    background: #0284c7;\n    color: #ffffff;\n    border-color: #0284c7;\n    font-weight: 600;\n    box-shadow: 0 2px 4px rgba(2, 132, 199, 0.25);\n  }\n  \n\n  .calendar-main-panel[_ngcontent-%COMP%] {\n    padding: 10px 12px 14px;\n    min-width: 0;\n    width: 100%;\n    align-items: center;\n  }\n  .month-nav-header[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    margin-bottom: 8px;\n    justify-content: space-between;\n    gap: 8px;\n  }\n  .month-title-text[_ngcontent-%COMP%] {\n    font-size: 14px;\n    min-width: 0;\n  }\n  .weekdays-row[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n    margin-bottom: 4px;\n  }\n  .weekday-cell[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 2px 0;\n  }\n  .days-grid-container[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 300px;\n  }\n  button.day-grid-cell[_ngcontent-%COMP%] {\n    height: 34px;\n    min-width: 0;\n  }\n  button.day-grid-cell[_ngcontent-%COMP%]   .day-number-label[_ngcontent-%COMP%] {\n    width: 32px;\n    height: 32px;\n    font-size: 12.5px;\n  }\n  \n\n  .picker-footer-bar[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    padding-top: 10px;\n    width: 100%;\n    max-width: 300px;\n    flex-direction: column;\n    gap: 10px;\n    align-items: stretch;\n  }\n  .footer-inputs-group[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n    gap: 6px;\n    flex-wrap: wrap;\n    min-width: 0;\n  }\n  .date-input-pill[_ngcontent-%COMP%] {\n    width: 90px;\n    padding: 5px 6px;\n    font-size: 11.5px;\n    min-width: 0;\n  }\n  .range-dash[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .range-days-label[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n    margin-left: 0;\n    margin-top: 2px;\n    font-size: 11px;\n  }\n  .footer-action-buttons[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: stretch;\n    gap: 8px;\n    min-width: 0;\n  }\n  .btn-picker-clear[_ngcontent-%COMP%], .btn-picker-cancel[_ngcontent-%COMP%], .btn-picker-apply[_ngcontent-%COMP%] {\n    flex: 1;\n    text-align: center;\n    justify-content: center;\n    padding: 7px 8px;\n    font-size: 12.5px;\n    min-width: 0;\n    box-sizing: border-box;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZGF0ZS1yYW5nZS1waWNrZXItZGlhbG9nL2RhdGUtcmFuZ2UtcGlja2VyLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtFQUNBLDhFQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO1VBQUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQSxzQ0FBQTtBQUNBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQ0FBQTtFQUNBLG1CQUFBO0FBRUY7QUFBRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQUVKO0FBQ0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBLHdCQUFBO0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FBQUY7O0FBR0EscUJBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBQUY7QUFFRTtFQUNFLG1CQUFBO0FBQUo7QUFHRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUtBLG1CQUFBO0FBQ0E7RUFDRSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBLGNBQUE7QUFDQTtFQUNFLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLFVBQUE7QUFGRjs7QUFLQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQXlCQSxxQkFBQTtBQTFCRjtBQUdFO0VBQ0UsY0FBQTtBQURKO0FBS0k7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBSE47QUFPRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1EQUFBO0FBTEo7QUFTRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQVBKO0FBU0k7RUFDRSxnQkFBQTtBQVBOO0FBWUk7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLDRDQUFBO0FBVk47QUFhSTtFQUNFLG1FQUFBO0FBWE47QUFlRTtFQUNFLGtFQUFBO0FBYko7QUFlSTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7QUFiTjtBQWlCRTtFQUNFLGtDQUFBO0FBZko7O0FBbUJBLGVBQUE7QUFDQTtFQUNFLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDBEQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBaEJGO0FBa0JFO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQWhCSjtBQW1CRTtFQUNFLGNBQUE7QUFqQko7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBbEJGOztBQXFCQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFsQkY7QUFvQkU7RUFDRSxjQUFBO0FBbEJKOztBQXNCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0FBbkJGOztBQXNCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQW5CRjtBQXFCRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBbkJKOztBQXVCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtBQXBCRjtBQXNCRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQXBCSjs7QUF3QkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw0Q0FBQTtFQUNBLHdEQUFBO0FBckJGO0FBdUJFO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtBQXJCSjs7QUF5QkE7O2tFQUFBO0FBR0E7RUFDRTtJQUNFLHNCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtFQXRCRjtFQXlCQSwwQ0FBQTtFQUNBO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxnQ0FBQTtJQUNBLFFBQUE7SUFDQSxtQkFBQTtJQUNBLGlDQUFBO0lBQ0EscUJBQUEsRUFBQSxZQUFBO0VBdkJGO0VBd0JFO0lBQ0UsYUFBQSxFQUFBLGtCQUFBO0VBdEJKO0VBMEJBO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7SUFDQSx5QkFBQTtJQUNBLGtCQUFBO0VBeEJGO0VBMEJFO0lBQ0UsbUJBQUE7SUFDQSxjQUFBO0VBeEJKO0VBMkJFO0lBQ0UsbUJBQUE7SUFDQSxjQUFBO0lBQ0EscUJBQUE7SUFDQSxnQkFBQTtJQUNBLDZDQUFBO0VBekJKO0VBNkJBLGlDQUFBO0VBQ0E7SUFDRSx1QkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUEzQkY7RUE4QkE7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLDhCQUFBO0lBQ0EsUUFBQTtFQTVCRjtFQStCQTtJQUNFLGVBQUE7SUFDQSxZQUFBO0VBN0JGO0VBZ0NBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7RUE5QkY7RUFpQ0E7SUFDRSxlQUFBO0lBQ0EsY0FBQTtFQS9CRjtFQWtDQTtJQUNFLFdBQUE7SUFDQSxnQkFBQTtFQWhDRjtFQW1DQTtJQUNFLFlBQUE7SUFDQSxZQUFBO0VBakNGO0VBbUNFO0lBQ0UsV0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtFQWpDSjtFQXFDQSxxQ0FBQTtFQUNBO0lBQ0UsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLHNCQUFBO0lBQ0EsU0FBQTtJQUNBLG9CQUFBO0VBbkNGO0VBc0NBO0lBQ0UsV0FBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0VBcENGO0VBdUNBO0lBQ0UsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUJBQUE7SUFDQSxZQUFBO0VBckNGO0VBd0NBO0lBQ0UsZUFBQTtFQXRDRjtFQXlDQTtJQUNFLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZUFBQTtFQXZDRjtFQTBDQTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0Esd0JBQUE7SUFDQSxRQUFBO0lBQ0EsWUFBQTtFQXhDRjtFQTJDQTs7O0lBR0UsT0FBQTtJQUNBLGtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQkFBQTtJQUNBLGlCQUFBO0lBQ0EsWUFBQTtJQUNBLHNCQUFBO0VBekNGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uZGF0ZS1yYW5nZS1tb2RhbC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICBib3gtc2hhZG93OiAwIDEwcHggMzBweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LWZhbWlseTogUm9ib3RvLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIHNhbnMtc2VyaWY7XG4gIGNvbG9yOiAjMzM0MTU1O1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBQcmVzZXRzIFNpZGViYXIgKERlc2t0b3AgZGVmYXVsdCkgKi9cbi5wcmVzZXRzLXNpZGViYXIge1xuICB3aWR0aDogMTQwcHg7XG4gIHBhZGRpbmc6IDE2cHggOHB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTJlOGYwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZhZmFmYTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIG1pbi13aWR0aDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYnV0dG9uLnByZXNldC1pdGVtIHtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjNDc1NTY5O1xuICBwYWRkaW5nOiA4cHggMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlLWluLW91dDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgIGNvbG9yOiAjMWUyOTNiO1xuICB9XG5cbiAgJi5hY3RpdmUge1xuICAgIGJhY2tncm91bmQ6ICNlMGYyZmU7XG4gICAgY29sb3I6ICMwMjg0Yzc7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxufVxuXG4vKiBNYWluIENhbGVuZGFyIFBhbmVsICovXG4uY2FsZW5kYXItbWFpbi1wYW5lbCB7XG4gIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMjBweDtcbiAgZmxleDogMTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLyogTW9udGggTmF2aWdhdGlvbiAqL1xuLm1vbnRoLW5hdi1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xufVxuXG4ubW9udGgtdGl0bGUtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMxZTI5M2I7XG4gIG1pbi13aWR0aDogMTIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5hdi1hcnJvdy1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzAyODRjNztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogNHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZTBmMmZlO1xuICB9XG5cbiAgbWF0LWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB3aWR0aDogMjJweDtcbiAgICBoZWlnaHQ6IDIycHg7XG4gIH1cbn1cblxuLyogV2Vla2RheSBMYWJlbHMgKi9cbi53ZWVrZGF5cy1yb3cge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLndlZWtkYXktY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICM5NGEzYjg7XG4gIHBhZGRpbmc6IDRweCAwO1xufVxuXG4vKiBEYXlzIEdyaWQgKi9cbi5kYXlzLWdyaWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbiAgZ2FwOiAycHggMDtcbn1cblxuYnV0dG9uLmRheS1ncmlkLWNlbGwge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY29sb3I6ICMzMzQxNTU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJi5vdGhlci1tb250aCB7XG4gICAgY29sb3I6ICNjYmQ1ZTE7XG4gIH1cblxuICAmOmhvdmVyOm5vdCgucmFuZ2Utc3RhcnQpOm5vdCgucmFuZ2UtZW5kKSB7XG4gICAgLmRheS1udW1iZXItbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB9XG4gIH1cblxuICAuZGF5LW51bWJlci1sYWJlbCB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgei1pbmRleDogMjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzIGVhc2UsIGNvbG9yIDAuMTVzIGVhc2U7XG4gIH1cblxuICAvKiBSYW5nZSBIaWdobGlnaHRzICovXG4gICYuaW4tcmFuZ2UsICYucmFuZ2UtcHJldmlldyB7XG4gICAgYmFja2dyb3VuZDogI2UwZjJmZTtcbiAgICBjb2xvcjogIzAzNjlhMTtcblxuICAgIC5kYXktbnVtYmVyLWxhYmVsIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxuICB9XG5cbiAgJi5yYW5nZS1zdGFydCB7XG4gICAgLmRheS1udW1iZXItbGFiZWwge1xuICAgICAgYmFja2dyb3VuZDogIzAyODRjNztcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjQpO1xuICAgIH1cblxuICAgICYuaGFzLWVuZCwgJi5yYW5nZS1wcmV2aWV3IHtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgdHJhbnNwYXJlbnQgNTAlLCAjZTBmMmZlIDUwJSk7XG4gICAgfVxuICB9XG5cbiAgJi5yYW5nZS1lbmQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCB0cmFuc3BhcmVudCA1MCUsICNlMGYyZmUgNTAlKTtcblxuICAgIC5kYXktbnVtYmVyLWxhYmVsIHtcbiAgICAgIGJhY2tncm91bmQ6ICMwMjg0Yzc7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgyLCAxMzIsIDE5OSwgMC40KTtcbiAgICB9XG4gIH1cblxuICAmLnJhbmdlLXN0YXJ0LnJhbmdlLWVuZCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgfVxufVxuXG4vKiBGb290ZXIgQmFyICovXG4ucGlja2VyLWZvb3Rlci1iYXIge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nLXRvcDogMTRweDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMWY1Zjk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAxMnB4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1pbi13aWR0aDogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmZvb3Rlci1pbnB1dHMtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uZGF0ZS1pbnB1dC1waWxsIHtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzMzNDE1NTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgd2lkdGg6IDk2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMTVzIGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgZWFzZTtcbiAgbWluLXdpZHRoOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogIzAyODRjNztcbiAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgyLCAxMzIsIDE5OSwgMC4xNSk7XG4gIH1cblxuICAmOjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6ICM5NGEzYjg7XG4gIH1cbn1cblxuLnJhbmdlLWRhc2gge1xuICBjb2xvcjogIzY0NzQ4YjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnJhbmdlLWRheXMtbGFiZWwge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjNjQ3NDhiO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuXG4gIHN0cm9uZyB7XG4gICAgY29sb3I6ICMwMjg0Yzc7XG4gIH1cbn1cblxuLmZvb3Rlci1hY3Rpb24tYnV0dG9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xuICBtaW4td2lkdGg6IDA7XG59XG5cbi5idG4tcGlja2VyLWNsZWFyIHtcbiAgcGFkZGluZzogN3B4IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjZWY0NDQ0O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmVmMmYyO1xuICAgIGJvcmRlci1jb2xvcjogI2ZjYTVhNTtcbiAgICBjb2xvcjogI2RjMjYyNjtcbiAgfVxufVxuXG4uYnRuLXBpY2tlci1jYW5jZWwge1xuICBwYWRkaW5nOiA3cHggMTZweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgY29sb3I6ICM2NDc0OGI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgY29sb3I6ICMzMzQxNTU7XG4gIH1cbn1cblxuLmJ0bi1waWNrZXItYXBwbHkge1xuICBwYWRkaW5nOiA3cHggMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjMDI4NGM3O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMiwgMTMyLCAxOTksIDAuMyk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgZWFzZSwgYm94LXNoYWRvdyAwLjE1cyBlYXNlO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICMwMzY5YTE7XG4gICAgYm94LXNoYWRvdzogMCAzcHggOHB4IHJnYmEoMiwgMTMyLCAxOTksIDAuNCk7XG4gIH1cbn1cblxuLyogw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAXG4gKiBNT0JJTEUgUkVTUE9OU0lWRSBTVFlMSU5HICg8PSA2MDBweClcbiAqIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5kYXRlLXJhbmdlLW1vZGFsLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgfVxuXG4gIC8qIFRvcCBQcmVzZXRzIEhvcml6b250YWwgU2Nyb2xsYWJsZSBCYXIgKi9cbiAgLnByZXNldHMtc2lkZWJhciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLXdpZHRoOiAwO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgcGFkZGluZzogOHB4IDEwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xuICAgIGdhcDogNnB4O1xuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTsgLyogRmlyZWZveCAqL1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IC8qIENocm9tZS9TYWZhcmkgKi9cbiAgICB9XG4gIH1cblxuICBidXR0b24ucHJlc2V0LWl0ZW0ge1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgcGFkZGluZzogNXB4IDEycHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGNvbG9yOiAjNDc1NTY5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xuICAgICAgY29sb3I6ICMxZTI5M2I7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZDogIzAyODRjNztcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDI4NGM3O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDIsIDEzMiwgMTk5LCAwLjI1KTtcbiAgICB9XG4gIH1cblxuICAvKiBNYWluIENhbGVuZGFyIFBhbmVsIENlbnRlcmVkICovXG4gIC5jYWxlbmRhci1tYWluLXBhbmVsIHtcbiAgICBwYWRkaW5nOiAxMHB4IDEycHggMTRweDtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIC5tb250aC1uYXYtaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgZ2FwOiA4cHg7XG4gIH1cblxuICAubW9udGgtdGl0bGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuXG4gIC53ZWVrZGF5cy1yb3cge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICB9XG5cbiAgLndlZWtkYXktY2VsbCB7XG4gICAgZm9udC1zaXplOiAxMXB4O1xuICAgIHBhZGRpbmc6IDJweCAwO1xuICB9XG5cbiAgLmRheXMtZ3JpZC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gIH1cblxuICBidXR0b24uZGF5LWdyaWQtY2VsbCB7XG4gICAgaGVpZ2h0OiAzNHB4O1xuICAgIG1pbi13aWR0aDogMDtcblxuICAgIC5kYXktbnVtYmVyLWxhYmVsIHtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgZm9udC1zaXplOiAxMi41cHg7XG4gICAgfVxuICB9XG5cbiAgLyogRm9vdGVyIEJhciBSZXNwb25zaXZlICYgQ2VudGVyZWQgKi9cbiAgLnBpY2tlci1mb290ZXItYmFyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIH1cblxuICAuZm9vdGVyLWlucHV0cy1ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiA2cHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuXG4gIC5kYXRlLWlucHV0LXBpbGwge1xuICAgIHdpZHRoOiA5MHB4O1xuICAgIHBhZGRpbmc6IDVweCA2cHg7XG4gICAgZm9udC1zaXplOiAxMS41cHg7XG4gICAgbWluLXdpZHRoOiAwO1xuICB9XG5cbiAgLnJhbmdlLWRhc2gge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgfVxuXG4gIC5yYW5nZS1kYXlzLWxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgfVxuXG4gIC5mb290ZXItYWN0aW9uLWJ1dHRvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgIGdhcDogOHB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgfVxuXG4gIC5idG4tcGlja2VyLWNsZWFyLFxuICAuYnRuLXBpY2tlci1jYW5jZWwsXG4gIC5idG4tcGlja2VyLWFwcGx5IHtcbiAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA3cHggOHB4O1xuICAgIGZvbnQtc2l6ZTogMTIuNXB4O1xuICAgIG1pbi13aWR0aDogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/api.config */ 1892);
/* harmony import */ var _environments_version__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/version */ 3653);
/* harmony import */ var _services_institute_terminology_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/institute-terminology.service */ 275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/service/auth.service */ 2241);
/* harmony import */ var _services_page_meta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/page-meta.service */ 3413);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/global-institute-context.service */ 4769);
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/sidenav.service */ 546);






















const _c0 = ["logoutConfirmationDialog"];
function NavbarMainComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.toggleMobileNav());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function NavbarMainComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 34)(1, "div", 35)(2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_div_7_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r8.openUserPanel($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-icon", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx_r1.instituteDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.instituteDisplayName);
  }
}
function NavbarMainComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.closeUserPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function NavbarMainComponent_button_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_button_93_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.openSettings());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function NavbarMainComponent_ng_template_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 39)(1, "div", 40)(2, "header", 41)(3, "div", 42)(4, "mat-icon", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 44)(7, "h2", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Sign out?");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "p", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "You will need to sign in again to access your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "footer", 47)(12, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_ng_template_99_Template_button_click_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r14.logout());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Sign out");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_ng_template_99_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.dialog.closeAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
}
class NavbarMainComponent {
  get isAdminUser() {
    let sessionUserRole = '';
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        sessionUserRole = u?.role || u?.user_role || '';
      }
    } catch (e) {/* ignore */}
    const role = String(this.userObj?.user_role || this.userObj?.role || sessionUserRole || this.userRole || sessionStorage.getItem('userRole') || '').toLowerCase().trim();
    return ['admin', 'super_admin', 'superadmin', 'super-admin'].some(r => role === r || role.includes(r));
  }
  get isSuperAdmin() {
    let sessionUserRole = '';
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        sessionUserRole = u?.role || u?.user_role || '';
      }
    } catch (e) {/* ignore */}
    const role = String(this.userObj?.user_role || this.userObj?.role || sessionUserRole || this.userRole || sessionStorage.getItem('userRole') || '').toLowerCase().trim();
    return ['super_admin', 'superadmin', 'super-admin'].some(r => role === r || role.includes('super'));
  }
  get terminology() {
    const industryType = this.userObj?.industry_type || this.userObj?.industry || this.globalInstituteContext?.activeInstitute?.industry_type || this.globalInstituteContext?.activeInstitute?.industry || '';
    return (0,_services_institute_terminology_service__WEBPACK_IMPORTED_MODULE_2__.getInstituteTerminology)(industryType);
  }
  get deptLabel() {
    return this.isSuperAdmin ? 'Department' : this.terminology.deptLabel;
  }
  get teamLabel() {
    return this.isSuperAdmin ? 'Team' : this.terminology.teamLabel;
  }
  get userInstituteDisplay() {
    const inst = this.userObj?.institute_name || this.userObj?.institute || this.instituteDisplayName || this.displayInstitute || this.instituteShortName || sessionStorage.getItem('institute') || '—';
    return inst && String(inst).trim() ? String(inst).trim() : '—';
  }
  get userEmailDisplay() {
    const email = this.userObj?.email || sessionStorage.getItem('email') || '';
    return email && String(email).trim() ? String(email).trim() : '—';
  }
  get roleDisplay() {
    let sessionUserRole = '';
    try {
      const rawUser = sessionStorage.getItem('user');
      if (rawUser) {
        const u = JSON.parse(rawUser);
        sessionUserRole = u?.role || u?.user_role || '';
      }
    } catch (e) {/* ignore */}
    const rawRole = this.userObj?.user_role || this.userObj?.role || sessionUserRole || this.userRole || sessionStorage.getItem('userRole') || '';
    const r = String(rawRole).toLowerCase().trim();
    if (['super_admin', 'superadmin', 'super-admin'].some(role => r === role || r.includes('super'))) return 'Super Admin';
    if (r === 'admin') return 'Admin';
    if (r === 'user' || r === 'student') return 'User';
    if (rawRole && String(rawRole).trim()) {
      const str = String(rawRole).trim();
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return '—';
  }
  get teamDisplay() {
    const team = this.userObj?.team_name || this.userObj?.team || (typeof this.userObj?.team === 'object' ? this.userObj?.team?.team_name : '') || sessionStorage.getItem('team') || '—';
    return team && String(team).trim() ? String(team).trim() : '—';
  }
  get departmentDisplay() {
    const dept = this.userObj?.department_name || this.userObj?.department || (typeof this.userObj?.department === 'object' ? this.userObj?.department?.department_name : '') || sessionStorage.getItem('department') || '—';
    return dept && String(dept).trim() ? String(dept).trim() : '—';
  }
  get campusDisplay() {
    const campus = this.userObj?.campus_name || this.userObj?.campus || (typeof this.userObj?.campus === 'object' ? this.userObj?.campus?.campus_name : '') || sessionStorage.getItem('campus') || '—';
    return campus && String(campus).trim() ? String(campus).trim() : '—';
  }
  get cityDisplay() {
    const city = this.userObj?.city_name || this.userObj?.city || (typeof this.userObj?.city === 'object' ? this.userObj?.city?.city_name : '') || sessionStorage.getItem('city') || '—';
    return city && String(city).trim() ? String(city).trim() : '—';
  }
  constructor(router, authService, pageMeta, _snackBar, dialog, http, globalInstituteContext, sidenavService) {
    this.router = router;
    this.authService = authService;
    this.pageMeta = pageMeta;
    this._snackBar = _snackBar;
    this.dialog = dialog;
    this.http = http;
    this.globalInstituteContext = globalInstituteContext;
    this.sidenavService = sidenavService;
    this.isUserPanelOpen = false;
    this.isLogin = false;
    this.appVersion = _environments_version__WEBPACK_IMPORTED_MODULE_1__.APP_VERSION;
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
    this.username = sessionStorage.getItem('username') || 'Guest';
    this.userRole = sessionStorage.getItem('userRole') || 'unknown user role';
    this.displayName = this.getStoredDisplayName();
    this.displayInstitute = sessionStorage.getItem('institute') || '';
    this.instituteDisplayName = this.getStoredInstituteName();
    this.userObj = (() => {
      try {
        const rawUser = sessionStorage.getItem('user');
        return rawUser ? JSON.parse(rawUser) : null;
      } catch (e) {
        return null;
      }
    })();
    this.initials = this.username ? this.username.split(' ').map(s => s[0]).slice(0, 2).join('').toUpperCase() : 'G';
    this.pageMetaSubscription = this.pageMeta.getMetaObservable().subscribe(m => {
      this.moduleName = m.title || '';
      this.moduleData = m.subtitle || '';
    });
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
    this.routerSubscription = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd)).subscribe(() => {
      this.closeUserPanel();
    });
  }
  toggleMobileNav() {
    this.sidenavService.toggleMobile();
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
      return new (t || NavbarMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_page_meta_service__WEBPACK_IMPORTED_MODULE_4__.PageMetaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_5__.GlobalInstituteContextService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_6__.SidenavService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: NavbarMainComponent,
      selectors: [["app-navbar-main"]],
      viewQuery: function NavbarMainComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.logoutConfirmationDialog = _t.first);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵStandaloneFeature"]],
      decls: 101,
      vars: 25,
      consts: [["role", "banner", 1, "navbar-main"], [1, "navbar-inner"], [1, "navbar-left"], ["mat-icon-button", "", "type", "button", "aria-label", "Toggle navigation menu", "class", "navbar-icon-btn mobile-menu-btn", "title", "Toggle side menu", 3, "click", 4, "ngIf"], [1, "app-title"], [1, "title"], ["class", "navbar-right", "role", "toolbar", "aria-label", "Top navigation actions", 4, "ngIf"], ["class", "user-panel-backdrop", 3, "click", 4, "ngIf"], ["role", "dialog", "aria-modal", "true", "aria-label", "User profile", 1, "user-side-panel"], [1, "user-panel-header"], [1, "user-panel-identity"], ["aria-label", "Profile logo", 1, "profile-avatar", 3, "title"], [1, "user-panel-title-block"], [1, "user-panel-eyebrow"], [1, "user-panel-name"], ["type", "button", "aria-label", "Close profile menu", "title", "Close", 1, "user-panel-close-btn", 3, "click"], ["fontSet", "material-icons-outlined"], [1, "user-panel-body"], [1, "profile-section-header"], ["fontSet", "material-icons-outlined", 1, "profile-section-icon"], [1, "profile-section-title"], [1, "profile-info-list"], [1, "profile-info-row"], [1, "profile-row-icon-wrap"], [1, "profile-row-content"], [1, "profile-row-label"], [1, "profile-row-value", 3, "title"], [1, "profile-row-value"], ["aria-label", "User menu options", 1, "user-panel-footer"], ["type", "button", "class", "user-panel-action-btn", 3, "click", 4, "ngIf"], ["type", "button", 1, "user-panel-action-btn", 3, "click"], ["logoutConfirmationDialog", ""], ["mat-icon-button", "", "type", "button", "aria-label", "Toggle navigation menu", "title", "Toggle side menu", 1, "navbar-icon-btn", "mobile-menu-btn", 3, "click"], ["fontSet", "material-icons-outlined", 1, "navbar-icon"], ["role", "toolbar", "aria-label", "Top navigation actions", 1, "navbar-right"], ["role", "complementary", "aria-label", "Institute", 1, "institute-inline"], [1, "institute-inline-name", 3, "title"], ["mat-icon-button", "", "aria-label", "Open user menu", "title", "User Profile Menu", 1, "navbar-icon-btn", "user-menu-btn", 3, "click"], [1, "user-panel-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "logoutTitle", 1, "logout-modal-wrap"], ["tabindex", "-1", 1, "logout-card"], [1, "logout-header"], ["aria-hidden", "true", 1, "logout-graphic-wrap"], [1, "logout-graphic"], [1, "logout-titles"], ["id", "logoutTitle", 1, "logout-heading"], [1, "logout-sub"], ["role", "group", "aria-label", "Logout actions", 1, "modal-actions"], ["mat-flat-button", "", "aria-describedby", "logoutTitle", 1, "btn-logout", 3, "click"], ["mat-stroked-button", "", 1, "btn-cancel", 3, "click"]],
      template: function NavbarMainComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, NavbarMainComponent_button_3_Template, 3, 0, "button", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, NavbarMainComponent_div_7_Template, 7, 2, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, NavbarMainComponent_div_8_Template, 1, 0, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "aside", 8)(10, "div", 9)(11, "div", 10)(12, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 12)(15, "span", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "WELCOME");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "h2", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_Template_button_click_19_listener() {
            return ctx.closeUserPanel();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "close");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 17)(23, "div", 18)(24, "mat-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "person_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Profile Information");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 21)(29, "div", 22)(30, "div", 23)(31, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "apartment");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 24)(34, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Institute Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 22)(39, "div", 23)(40, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41, "mail_outline");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](42, "div", 24)(43, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](44, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 22)(48, "div", 23)(49, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "shield");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 24)(52, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](53, "Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](54, "span", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "div", 22)(57, "div", 23)(58, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](59, "groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 24)(61, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](62);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](65, "div", 22)(66, "div", 23)(67, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](68, "school");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](69, "div", 24)(70, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "div", 22)(75, "div", 23)(76, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](77, "location_city");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](78, "div", 24)(79, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](80, "Campus");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](81, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](82);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](83, "div", 22)(84, "div", 23)(85, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](86, "place");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](87, "div", 24)(88, "span", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](89, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](90, "span", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](91);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](92, "footer", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](93, NavbarMainComponent_button_93_Template, 5, 0, "button", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](94, "button", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavbarMainComponent_Template_button_click_94_listener() {
            return ctx.confirmLogout();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](95, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](96, "logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](97, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](98, "Logout");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](99, NavbarMainComponent_ng_template_99_Template, 16, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLogin);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.moduleName);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLogin);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isUserPanelOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("open", ctx.isUserPanelOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.displayName);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.initials);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.displayName);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.userInstituteDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userInstituteDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.userEmailDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.userEmailDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.roleDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.teamLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.teamDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.teamDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.deptLabel);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.departmentDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.departmentDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.campusDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.campusDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", ctx.cityDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.cityDisplay);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isAdminUser);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__.MatSnackBarModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatIconButton],
      styles: [".navbar-main[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.97) 0%, rgba(248, 250, 252, 0.94) 100%);\n  backdrop-filter: blur(12px) saturate(180%);\n  color: var(--theme-2-text-1);\n  padding: 0.5rem 1.25rem;\n  position: relative;\n  z-index: 100;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.navbar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  justify-content: space-between;\n  height: 100%;\n}\n\n.navbar-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-width: 0;\n}\n\n.app-title[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  min-width: 0;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.72) 0%, rgba(248, 250, 252, 0.18) 100%);\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), background 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(99, 102, 241, 0.08) 100%);\n  box-shadow: 0 10px 24px rgba(99, 102, 241, 0.08);\n  transform: translateY(-1px);\n}\n.app-title[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1rem;\n  line-height: 1.2;\n  background: linear-gradient(135deg, var(--theme-3-text-1) 0%, var(--theme-2-text-1) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  letter-spacing: -0.02em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  position: relative;\n  display: inline-block;\n  width: -moz-fit-content;\n  width: fit-content;\n  text-transform: capitalize;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), filter 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: 0.12em;\n  white-space: nowrap;\n  color: var(--theme-2-text-2);\n  text-transform: uppercase;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]::before {\n  content: \"//\";\n  font-weight: 700;\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  opacity: 1;\n  letter-spacing: 0.14em;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 0.35rem;\n  height: 0.35rem;\n  border-radius: 50%;\n  background: var(--button-1);\n  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.12);\n}\n.app-title[_ngcontent-%COMP%]:hover   .subtitle[_ngcontent-%COMP%] {\n  transform: translateX(2px);\n}\n.app-title[_ngcontent-%COMP%]:hover   .subtitle[_ngcontent-%COMP%]::before {\n  transform: translateX(1px);\n}\n\n.navbar-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  justify-content: flex-end;\n  flex-shrink: 0;\n}\n\n.navbar-icon-btn[_ngcontent-%COMP%] {\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.375rem;\n  height: 2.375rem;\n  border-radius: 0.625rem !important;\n  background: #f1f5f9;\n  border: 1px solid #cbd5e1;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n}\n.navbar-icon-btn[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%);\n  border-radius: inherit;\n  opacity: 0;\n  transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  background: #ffffff;\n  border-color: #94a3b8;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:hover::before {\n  opacity: 1;\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:hover   .navbar-icon[_ngcontent-%COMP%] {\n  color: var(--button-1, #1f7bff);\n  transform: scale(1.08);\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--button-1);\n  outline-offset: 2px;\n}\n.navbar-icon-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0) scale(0.97);\n}\n\n.navbar-icon[_ngcontent-%COMP%] {\n  font-family: \"Material Icons Outlined\" !important;\n  color: #1e293b;\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  line-height: 1 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  overflow: visible !important;\n  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n  position: relative;\n  z-index: 1;\n}\n\n.notifications-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  top: 0.15rem;\n  right: 0.15rem;\n  width: 0.65rem;\n  height: 0.65rem;\n  background: #2563eb;\n  border-radius: 50%;\n  border: 2px solid #ffffff;\n  box-shadow: 0 2px 6px rgba(37, 99, 235, 0.4);\n  animation: _ngcontent-%COMP%_pulse-badge 2s ease-in-out infinite;\n}\n\n.mobile-menu-btn[_ngcontent-%COMP%] {\n  display: none !important;\n}\n\n.user-menu-btn[_ngcontent-%COMP%]:hover::before {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(139, 92, 246, 0.08) 100%);\n}\n\n.user-panel-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 1000;\n  background: rgba(15, 23, 42, 0.58);\n  backdrop-filter: blur(2px);\n  animation: _ngcontent-%COMP%_backdropFadeIn 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.user-side-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 1001;\n  width: min(390px, 90vw);\n  height: 100vh;\n  height: 100dvh;\n  max-height: 100dvh;\n  background: var(--theme-1);\n  color: var(--theme-1-text-1);\n  border-left: 1px solid var(--theme-1-border, rgba(255, 255, 255, 0.08));\n  box-shadow: -18px 0 40px rgba(15, 23, 42, 0.28);\n  transform: translateX(100%);\n  transition: transform 0.26s cubic-bezier(0.4, 0, 0.2, 1);\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n}\n\n.user-side-panel.open[_ngcontent-%COMP%] {\n  transform: translateX(0);\n}\n\n.user-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 1px solid var(--theme-1-border, rgba(255, 255, 255, 0.08));\n  flex-shrink: 0;\n}\n\n.user-panel-identity[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  min-width: 0;\n}\n\n.profile-avatar[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 2.75rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1, #ffffff);\n  font-weight: 700;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 10px rgba(31, 123, 255, 0.35);\n}\n\n.user-panel-title-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n}\n\n.user-panel-eyebrow[_ngcontent-%COMP%] {\n  color: var(--theme-1-text-2);\n  opacity: 0.75;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  line-height: 1.2;\n}\n\n.user-panel-name[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-1-text-1);\n  font-size: 1.0625rem;\n  font-weight: 700;\n  line-height: 1.3;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.user-panel-close-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  background: transparent;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--theme-1-text-2);\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex-shrink: 0;\n}\n.user-panel-close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.user-panel-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-1-hanover-bg, rgba(255, 255, 255, 0.08));\n  color: var(--theme-1-text-1);\n  transform: scale(1.06);\n}\n\n.user-panel-body[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  overflow-x: hidden;\n  padding: 1.25rem 1.5rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n  -webkit-overflow-scrolling: touch;\n  overscroll-behavior: contain;\n}\n.user-panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n.user-panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.user-panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.15);\n  border-radius: 4px;\n}\n.user-panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n\n.profile-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  padding-bottom: 0.625rem;\n  border-bottom: 1px solid var(--theme-1-border, rgba(255, 255, 255, 0.08));\n  color: var(--theme-1-text-1);\n}\n.profile-section-header[_ngcontent-%COMP%]   .profile-section-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  color: var(--theme-1-text-1);\n}\n.profile-section-header[_ngcontent-%COMP%]   .profile-section-title[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  color: var(--theme-1-text-1);\n}\n\n.profile-info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding-bottom: 1.5rem;\n}\n\n.profile-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid var(--theme-1-border, rgba(255, 255, 255, 0.06));\n}\n.profile-info-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.profile-info-row[_ngcontent-%COMP%]   .profile-row-icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 1.75rem;\n  height: 1.75rem;\n  margin-top: 0.125rem;\n  flex-shrink: 0;\n}\n.profile-info-row[_ngcontent-%COMP%]   .profile-row-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: var(--theme-1-text-2);\n}\n.profile-info-row[_ngcontent-%COMP%]   .profile-row-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.2rem;\n  min-width: 0;\n  flex: 1;\n}\n.profile-info-row[_ngcontent-%COMP%]   .profile-row-content[_ngcontent-%COMP%]   .profile-row-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--theme-1-text-2);\n  font-weight: 500;\n  line-height: 1.2;\n}\n.profile-info-row[_ngcontent-%COMP%]   .profile-row-content[_ngcontent-%COMP%]   .profile-row-value[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: var(--theme-1-text-1);\n  font-weight: 500;\n  line-height: 1.35;\n  word-break: break-word;\n}\n\n.user-panel-footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.875rem 1.25rem;\n  padding-bottom: calc(0.875rem + env(safe-area-inset-bottom, 0px));\n  border-top: 1px solid var(--theme-1-border, rgba(255, 255, 255, 0.08));\n  background: rgba(0, 0, 0, 0.12);\n  margin-top: auto;\n  flex-shrink: 0;\n  position: relative;\n  z-index: 2;\n}\n\n.user-panel-action-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.75rem 0.875rem;\n  border: none;\n  border-radius: 0.625rem;\n  background: transparent;\n  color: var(--theme-1-text-1);\n  font-size: 0.875rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: left;\n}\n.user-panel-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  color: var(--theme-1-text-2);\n  transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.user-panel-action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-1-hanover-bg, rgba(255, 255, 255, 0.08));\n  color: var(--theme-1-text-1);\n}\n.user-panel-action-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: var(--theme-1-text-1);\n  transform: scale(1.06);\n}\n.user-panel-action-btn[_ngcontent-%COMP%]:active {\n  transform: scale(0.99);\n}\n\n.institute-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.35rem 0.75rem;\n  border-radius: 0.625rem;\n  background: rgba(99, 102, 241, 0.06);\n  border: 1px solid rgba(99, 102, 241, 0.12);\n}\n\n.institute-inline-name[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 15rem;\n}\n\n.profile-logo-inline[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0.875rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.3);\n}\n\n.logout-modal-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n}\n\n.logout-card[_ngcontent-%COMP%] {\n  width: 360px;\n  max-width: 92vw;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 1.5rem;\n  box-shadow: 0 32px 64px -16px rgba(15, 23, 42, 0.18), 0 0 0 1px var(--theme-3-border);\n  padding: 2rem 1.75rem 1.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  gap: 0.5rem;\n  animation: _ngcontent-%COMP%_modalPopIn 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n\n@keyframes _ngcontent-%COMP%_modalPopIn {\n  0% {\n    opacity: 0;\n    transform: scale(0.9) translateY(10px);\n  }\n  100% {\n    opacity: 1;\n    transform: scale(1) translateY(0);\n  }\n}\n.logout-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n}\n\n.logout-graphic-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 4.5rem;\n  height: 4.5rem;\n  border-radius: 50%;\n  background: rgba(99, 102, 241, 0.08);\n  position: relative;\n  animation: _ngcontent-%COMP%_pulseRing 2s ease-out infinite;\n}\n\n@keyframes _ngcontent-%COMP%_pulseRing {\n  0% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.2);\n  }\n  70% {\n    box-shadow: 0 0 0 12px rgba(99, 102, 241, 0);\n  }\n  100% {\n    box-shadow: 0 0 0 0 rgba(99, 102, 241, 0);\n  }\n}\n.logout-graphic[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--button-1);\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.logout-titles[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.logout-titles[_ngcontent-%COMP%]   .logout-heading[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.375rem;\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  line-height: 1.3;\n  letter-spacing: -0.02em;\n}\n\n.logout-titles[_ngcontent-%COMP%]   .logout-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  line-height: 1.4;\n  font-weight: 500;\n  max-width: 280px;\n}\n\n.logout-body[_ngcontent-%COMP%] {\n  padding: 0.75rem 0 1rem;\n}\n\n.logout-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--theme-3-text-2);\n  font-size: 0.875rem;\n  line-height: 1.6;\n  font-weight: 450;\n  max-width: 300px;\n}\n\n.modal-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n  width: 100%;\n  padding-top: 0.5rem;\n}\n\n.btn-cancel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2.75rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 0.75rem !important;\n  border: 1px solid var(--theme-3-border) !important;\n  color: var(--theme-3-text-2) !important;\n  background: var(--bg-2) !important;\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n}\n.btn-cancel[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n.btn-logout[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2.75rem;\n  font-weight: 600;\n  font-size: 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  border-radius: 0.75rem !important;\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%) !important;\n  color: var(--button-text-1) !important;\n  border: none !important;\n  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);\n  cursor: pointer;\n}\n.btn-logout[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.35);\n  filter: brightness(1.05);\n}\n.btn-logout[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.2);\n}\n\n@keyframes _ngcontent-%COMP%_backdropFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_pulse-badge {\n  0%, 100% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(1.15);\n  }\n}\n@media (max-width: 992px) {\n  .mobile-menu-btn[_ngcontent-%COMP%] {\n    display: inline-flex !important;\n  }\n  .navbar-main[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem;\n  }\n  .navbar-inner[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .navbar-left[_ngcontent-%COMP%] {\n    gap: 1.5rem;\n  }\n  .app-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .institute-inline[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .navbar-icon-btn[_ngcontent-%COMP%] {\n    width: 2.375rem;\n    height: 2.375rem;\n    background: #f1f5f9;\n    border: 1px solid #cbd5e1;\n  }\n  .logout-icon[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    width: 1rem;\n    height: 1rem;\n  }\n  .logout-card[_ngcontent-%COMP%] {\n    padding: 1.5rem 1.25rem 1.25rem;\n    gap: 1rem;\n    width: 100%;\n    max-width: 100%;\n    box-sizing: border-box;\n  }\n  .logout-graphic[_ngcontent-%COMP%] {\n    width: 3.5rem;\n    height: 3.5rem;\n    padding: 0.625rem;\n    font-size: 1.5rem;\n  }\n  .modal-actions[_ngcontent-%COMP%] {\n    gap: 0.625rem;\n    width: 100%;\n  }\n  .btn-cancel[_ngcontent-%COMP%], .btn-logout[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 2.75rem;\n    min-height: 44px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmF2YmFyLW1haW4vbmF2YmFyLW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSxpR0FBQTtFQUVBLDBDQUFBO0VBQ0EsNEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0FBUEY7O0FBVUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQVBGOztBQVVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUdBQUE7RUFDQSxtSkFBQTtBQVBGO0FBU0U7RUFDRSxnR0FBQTtFQUNBLGdEQUFBO0VBQ0EsMkJBQUE7QUFQSjtBQVVFO0VBQ0UsZ0JBQUE7RUFBa0IsZUFBQTtFQUFpQixnQkFBQTtFQUFrQix5RkFBQTtFQUEyRiw2QkFBQTtFQUErQixvQ0FBQTtFQUFzQyxxQkFBQTtFQUF1Qix1QkFBQTtFQUF5QixtQkFBQTtFQUFxQixnQkFBQTtFQUFrQix1QkFBQTtFQUF5QixrQkFBQTtFQUFvQixxQkFBQTtFQUF1Qix1QkFBQTtFQUFBLGtCQUFBO0VBQW9CLDBCQUFBO0VBQTJCLGlHQUFBO0FBT25hO0FBSkU7RUFDRSxvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixXQUFBO0VBQWEsa0JBQUE7RUFBb0IsZ0JBQUE7RUFBa0Isc0JBQUE7RUFBd0IsbUJBQUE7RUFBcUIsNEJBQUE7RUFBOEIseUJBQUE7RUFBMkIsa0dBQUE7QUFleE07QUFkSTtFQUFZLGFBQUE7RUFBZSxnQkFBQTtFQUFrQixtRkFBQTtFQUFxRiw2QkFBQTtFQUErQixvQ0FBQTtFQUFzQyxxQkFBQTtFQUF1QixVQUFBO0VBQVksc0JBQUE7RUFBd0IsdURBQUE7QUF5QnRRO0FBeEJJO0VBQVcsV0FBQTtFQUFhLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQixrQkFBQTtFQUFvQiwyQkFBQTtFQUE2Qiw4Q0FBQTtBQWdDOUc7QUE3QkU7RUFBb0IsMEJBQUE7QUFnQ3RCO0FBL0JFO0VBQTRCLDBCQUFBO0FBa0M5Qjs7QUE1QkE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBK0JGOztBQXpCQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0RBQUE7RUFDQSx5Q0FBQTtBQTRCRjtBQTFCRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSwrRkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLHNEQUFBO0FBNEJKO0FBekJFO0VBQ0UsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7QUEyQko7QUF6Qkk7RUFDRSxVQUFBO0FBMkJOO0FBeEJJO0VBQ0UsK0JBQUE7RUFDQSxzQkFBQTtBQTBCTjtBQXRCRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7QUF3Qko7QUFyQkU7RUFDRSxvQ0FBQTtBQXVCSjs7QUFuQkE7RUFDRSxpREFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSw0QkFBQTtFQUNBLHVEQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBc0JGOztBQWxCQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLDhDQUFBO0FBcUJGOztBQWxCQTtFQUNFLHdCQUFBO0FBcUJGOztBQWpCdUI7RUFBWSwrRkFBQTtBQXFCbkM7O0FBbkJBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esa0NBQUE7RUFFQSwwQkFBQTtFQUNBLDJEQUFBO0FBc0JGOztBQW5CQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsdUVBQUE7RUFDQSwrQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esd0RBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQXNCRjs7QUFuQkE7RUFBd0Isd0JBQUE7QUF1QnhCOztBQXJCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5RUFBQTtFQUNBLGNBQUE7QUF3QkY7O0FBckJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUF3QkY7O0FBckJBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUZBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7QUF3QkY7O0FBckJBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF3QkY7O0FBckJBO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtBQXdCRjs7QUFyQkE7RUFDRSxTQUFBO0VBQ0EsNEJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUF3QkY7O0FBckJBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxjQUFBO0FBd0JGO0FBdEJFO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXdCSjtBQXJCRTtFQUNFLGdFQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQXVCSjs7QUFuQkE7RUFDRSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxpQ0FBQTtFQUNBLDRCQUFBO0FBc0JGO0FBcEJFO0VBQ0UsVUFBQTtBQXNCSjtBQXBCRTtFQUNFLHVCQUFBO0FBc0JKO0FBcEJFO0VBQ0UscUNBQUE7RUFDQSxrQkFBQTtBQXNCSjtBQXJCSTtFQUNFLHFDQUFBO0FBdUJOOztBQWxCQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHlFQUFBO0VBQ0EsNEJBQUE7QUFxQkY7QUFuQkU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7QUFxQko7QUFsQkU7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtBQW9CSjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtBQW1CRjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSx5RUFBQTtBQW1CRjtBQWpCRTtFQUNFLG1CQUFBO0FBbUJKO0FBaEJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQWtCSjtBQWhCSTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSw0QkFBQTtBQWtCTjtBQWRFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0FBZ0JKO0FBZEk7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWdCTjtBQWJJO0VBQ0UsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQWVOOztBQVZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUVBQUE7RUFDQSxzRUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBYUY7O0FBVkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaURBQUE7RUFDQSxnQkFBQTtBQWFGO0FBWEU7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSxnR0FBQTtBQWFKO0FBVkU7RUFDRSxnRUFBQTtFQUNBLDRCQUFBO0FBWUo7QUFWSTtFQUNFLDRCQUFBO0VBQ0Esc0JBQUE7QUFZTjtBQVJFO0VBQ0Usc0JBQUE7QUFVSjs7QUFOQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0FBU0Y7O0FBTkE7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQVNGOztBQU5BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG1GQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0FBU0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFRRjs7QUFMQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUVBQUE7RUFDQSxxQkFBQTtFQUNBLHFGQUFBO0VBQ0EsNkJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGtFQUFBO0FBUUY7O0FBTEE7RUFDRTtJQUFLLFVBQUE7SUFBWSxzQ0FBQTtFQVVqQjtFQVRBO0lBQU8sVUFBQTtJQUFZLGlDQUFBO0VBYW5CO0FBQ0Y7QUFYQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQWFGOztBQVZBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLHlDQUFBO0FBYUY7O0FBVkE7RUFDRTtJQUFLLDJDQUFBO0VBY0w7RUFiQTtJQUFNLDRDQUFBO0VBZ0JOO0VBZkE7SUFBTyx5Q0FBQTtFQWtCUDtBQUNGO0FBaEJBO0VBQ0UsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBa0JGOztBQWZBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBa0JGOztBQWZBO0VBQ0UsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFrQkY7O0FBZkE7RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQWtCRjs7QUFmQTtFQUNFLHVCQUFBO0FBa0JGOztBQWZBO0VBQ0UsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFrQkY7O0FBZkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBa0JGOztBQWZBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7RUFDQSxpQ0FBQTtFQUNBLGtEQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7QUFrQkY7QUFqQkU7RUFBVSwyQkFBQTtBQW9CWjtBQW5CRTtFQUFXLHdCQUFBO0FBc0JiOztBQW5CQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EsaUNBQUE7RUFDQSw4RkFBQTtFQUNBLHNDQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLGVBQUE7QUFzQkY7QUFyQkU7RUFBVSwyQkFBQTtFQUE2QiwrQ0FBQTtFQUFpRCx3QkFBQTtBQTBCMUY7QUF6QkU7RUFBVyx3QkFBQTtFQUEwQiw2Q0FBQTtBQTZCdkM7O0FBMUJBO0VBQ0U7SUFBTyxVQUFBO0VBOEJQO0VBN0JBO0lBQUssVUFBQTtFQWdDTDtBQUNGO0FBOUJBO0VBQ0U7SUFBVyxtQkFBQTtFQWlDWDtFQWhDQTtJQUFNLHNCQUFBO0VBbUNOO0FBQ0Y7QUE5QkE7RUFDRTtJQUNFLCtCQUFBO0VBZ0NGO0VBN0JBO0lBQ0UseUJBQUE7RUErQkY7RUE1QkE7SUFDRSxZQUFBO0VBOEJGO0VBM0JBO0lBQ0UsV0FBQTtFQTZCRjtFQTFCQTtJQUNFLGFBQUE7RUE0QkY7RUF6QkE7SUFDRSx3QkFBQTtFQTJCRjtFQXhCQTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EseUJBQUE7RUEwQkY7RUF2QkE7SUFDRSxlQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUF5QkY7RUF0QkE7SUFDRSwrQkFBQTtJQUNBLFNBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0VBd0JGO0VBckJBO0lBQ0UsYUFBQTtJQUNBLGNBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBdUJGO0VBcEJBO0lBQ0UsYUFBQTtJQUNBLFdBQUE7RUFzQkY7RUFuQkE7O0lBRUUsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXFCRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiJGVhc2U6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiRlYXNlLXNtb290aDogY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpO1xyXG4kZWFzZS1ib3VuY2U6IGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcclxuJGVhc2Utc3ByaW5nOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gTkFWQkFSIE1BSU4gw6LCgMKUIE1vZGVybiBHbGFzc21vcnBoaXNtIERlc2lnblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLm5hdmJhci1tYWluIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOTcpIDAlLCByZ2JhKDI0OCwgMjUwLCAyNTIsIDAuOTQpIDEwMCUpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEycHgpIHNhdHVyYXRlKDE4MCUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxMnB4KSBzYXR1cmF0ZSgxODAlKTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMi10ZXh0LTEpO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjI1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgJGVhc2U7XHJcbn1cclxuXHJcbi5uYXZiYXItaW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hdmJhci1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLmFwcC10aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC4xMjVyZW07XHJcbiAgbWluLXdpZHRoOiAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuODc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43MikgMCUsIHJnYmEoMjQ4LCAyNTAsIDI1MiwgMC4xOCkgMTAwJSk7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2UsIGJhY2tncm91bmQgMC4zcyAkZWFzZSwgYm94LXNoYWRvdyAwLjNzICRlYXNlO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC45NSkgMCUsIHJnYmEoOTksIDEwMiwgMjQxLCAwLjA4KSAxMDAlKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMTBweCAyNHB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjA4KTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXdlaWdodDogODAwOyBmb250LXNpemU6IDFyZW07IGxpbmUtaGVpZ2h0OiAxLjI7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLTMtdGV4dC0xKSAwJSwgdmFyKC0tdGhlbWUtMi10ZXh0LTEpIDEwMCUpOyAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDsgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7IGxldHRlci1zcGFjaW5nOiAtMC4wMmVtOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBvdmVyZmxvdzogaGlkZGVuOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgcG9zaXRpb246IHJlbGF0aXZlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHdpZHRoOiBmaXQtY29udGVudDsgdGV4dC10cmFuc2Zvcm06Y2FwaXRhbGl6ZTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2UsIGZpbHRlciAwLjNzICRlYXNlO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNXJlbTsgZm9udC1zaXplOiAwLjc1cmVtOyBmb250LXdlaWdodDogNjAwOyBsZXR0ZXItc3BhY2luZzogMC4xMmVtOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBjb2xvcjogdmFyKC0tdGhlbWUtMi10ZXh0LTIpOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAkZWFzZSwgb3BhY2l0eSAwLjNzICRlYXNlO1xyXG4gICAgJjo6YmVmb3JlIHsgY29udGVudDogJy8vJzsgZm9udC13ZWlnaHQ6IDcwMDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSk7IC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0OyAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7IGJhY2tncm91bmQtY2xpcDogdGV4dDsgb3BhY2l0eTogMTsgbGV0dGVyLXNwYWNpbmc6IDAuMTRlbTsgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2U7IH1cclxuICAgICY6OmFmdGVyIHsgY29udGVudDogJyc7IHdpZHRoOiAwLjM1cmVtOyBoZWlnaHQ6IDAuMzVyZW07IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OiAwIDAgMCA0cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTIpOyB9XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIC5zdWJ0aXRsZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgycHgpOyB9XHJcbiAgJjpob3ZlciAuc3VidGl0bGU6OmJlZm9yZSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxcHgpOyB9XHJcbn1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBSSUdIVCBTRUNUSU9OIMOiwoDClCBBY3Rpb25zICYgVXNlclxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLm5hdmJhci1yaWdodCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4vLyBJY29uIEJ1dHRvbnMgw6LCgMKUIE1vZGVybiBHbG93IFN0eWxlXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ubmF2YmFyLWljb24tYnRuIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMi4zNzVyZW07XHJcbiAgaGVpZ2h0OiAyLjM3NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4gICY6OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGluc2V0OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTIpIDAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4wOCkgMTAwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4yNXMgJGVhc2U7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItY29sb3I6ICM5NGEzYjg7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4wOCk7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWljb24ge1xyXG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLTEsICMxZjdiZmYpO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDJweCBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMnB4O1xyXG4gIH1cclxuXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDAuOTcpO1xyXG4gIH1cclxufVxyXG5cclxuLm5hdmJhci1pY29uIHtcclxuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zIE91dGxpbmVkJyAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB3aWR0aDogMS4yNXJlbTtcclxuICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlLWJvdW5jZTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLy8gTm90aWZpY2F0aW9uIGJhZGdlIGFuaW1hdGlvblxyXG4ubm90aWZpY2F0aW9ucy1idG46OmFmdGVyIHtcclxuICBjb250ZW50OiAnJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwLjE1cmVtO1xyXG4gIHJpZ2h0OiAwLjE1cmVtO1xyXG4gIHdpZHRoOiAwLjY1cmVtO1xyXG4gIGhlaWdodDogMC42NXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjMjU2M2ViO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmZmZmO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDM3LCA5OSwgMjM1LCAwLjQpO1xyXG4gIGFuaW1hdGlvbjogcHVsc2UtYmFkZ2UgMnMgZWFzZS1pbi1vdXQgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5tb2JpbGUtbWVudS1idG4ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gVXNlciBzaWRlIHBhbmVsXHJcbi51c2VyLW1lbnUtYnRuOmhvdmVyIHsgJjo6YmVmb3JlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMTIpIDAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4wOCkgMTAwJSk7IH0gfVxyXG5cclxuLnVzZXItcGFuZWwtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogMDtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTUsIDIzLCA0MiwgMC41OCk7XHJcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMnB4KTtcclxuICBhbmltYXRpb246IGJhY2tkcm9wRmFkZUluIDAuMnMgJGVhc2U7XHJcbn1cclxuXHJcbi51c2VyLXNpZGUtcGFuZWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTAwMTtcclxuICB3aWR0aDogbWluKDM5MHB4LCA5MHZ3KTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGhlaWdodDogMTAwZHZoO1xyXG4gIG1heC1oZWlnaHQ6IDEwMGR2aDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0xKTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTEpO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tdGhlbWUtMS1ib3JkZXIsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkpO1xyXG4gIGJveC1zaGFkb3c6IC0xOHB4IDAgNDBweCByZ2JhKDE1LCAyMywgNDIsIDAuMjgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNnMgJGVhc2U7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi51c2VyLXNpZGUtcGFuZWwub3BlbiB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgfVxyXG5cclxuLnVzZXItcGFuZWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10aGVtZS0xLWJvcmRlciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsLWlkZW50aXR5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjg3NXJlbTtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi5wcm9maWxlLWF2YXRhciB7XHJcbiAgd2lkdGg6IDIuNzVyZW07XHJcbiAgaGVpZ2h0OiAyLjc1cmVtO1xyXG4gIG1pbi13aWR0aDogMi43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEsICNmZmZmZmYpO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDJweCAxMHB4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjM1KTtcclxufVxyXG5cclxuLnVzZXItcGFuZWwtdGl0bGUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuMnJlbTtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsLWV5ZWJyb3cge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMik7XHJcbiAgb3BhY2l0eTogMC43NTtcclxuICBmb250LXNpemU6IDAuNjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjA4ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG59XHJcblxyXG4udXNlci1wYW5lbC1uYW1lIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0xKTtcclxuICBmb250LXNpemU6IDEuMDYyNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG59XHJcblxyXG4udXNlci1wYW5lbC1jbG9zZS1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMnJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTIpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgd2lkdGg6IDEuMjVyZW07XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTEtaGFub3Zlci1iZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTEpO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA2KTtcclxuICB9XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsLWJvZHkge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIG1pbi1oZWlnaHQ6IDA7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW0gMS41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuODc1cmVtO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBjb250YWluO1xyXG5cclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogNXB4O1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGUtc2VjdGlvbi1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNjI1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMS1ib3JkZXIsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkpO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XHJcblxyXG4gIC5wcm9maWxlLXNlY3Rpb24taWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICB3aWR0aDogMS4yNXJlbTtcclxuICAgIGhlaWdodDogMS4yNXJlbTtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1zZWN0aW9uLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTEpO1xyXG4gIH1cclxufVxyXG5cclxuLnByb2ZpbGUtaW5mby1saXN0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcclxufVxyXG5cclxuLnByb2ZpbGUtaW5mby1yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAwLjg3NXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTEtYm9yZGVyLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDYpKTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1yb3ctaWNvbi13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMS43NXJlbTtcclxuICAgIGhlaWdodDogMS43NXJlbTtcclxuICAgIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgd2lkdGg6IDEuMnJlbTtcclxuICAgICAgaGVpZ2h0OiAxLjJyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucHJvZmlsZS1yb3ctY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC4ycmVtO1xyXG4gICAgbWluLXdpZHRoOiAwO1xyXG4gICAgZmxleDogMTtcclxuXHJcbiAgICAucHJvZmlsZS1yb3ctbGFiZWwge1xyXG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMik7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2ZpbGUtcm93LXZhbHVlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0xKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4udXNlci1wYW5lbC1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuMzc1cmVtO1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IGNhbGMoMC44NzVyZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSwgMHB4KSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTEtYm9yZGVyLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpKTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsLWFjdGlvbi1idG4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMC43NXJlbSAwLjg3NXJlbTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0xKTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIHdpZHRoOiAxLjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0yKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzICRlYXNlLCBjb2xvciAwLjJzICRlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0xLWhhbm92ZXItYmcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkpO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0xKTtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTkpO1xyXG4gIH1cclxufVxyXG5cclxuLmluc3RpdHV0ZS1pbmxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDYpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoOTksIDEwMiwgMjQxLCAwLjEyKTtcclxufVxyXG5cclxuLmluc3RpdHV0ZS1pbmxpbmUtbmFtZSB7XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTEpO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICBtYXgtd2lkdGg6IDE1cmVtO1xyXG59XHJcblxyXG4ucHJvZmlsZS1sb2dvLWlubGluZSB7XHJcbiAgd2lkdGg6IDIuMjVyZW07XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1idXR0b24tMSkgMCUsIHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAxMDAlKTtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zKTtcclxufVxyXG5cclxuLy8gTE9HT1VUIE1PREFMXHJcbi5sb2dvdXQtbW9kYWwtd3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEuNXJlbTtcclxufVxyXG5cclxuLmxvZ291dC1jYXJkIHtcclxuICB3aWR0aDogMzYwcHg7XHJcbiAgbWF4LXdpZHRoOiA5MnZ3O1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAxLjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAzMnB4IDY0cHggLTE2cHggcmdiYSgxNSwgMjMsIDQyLCAwLjE4KSwgMCAwIDAgMXB4IHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxuICBwYWRkaW5nOiAycmVtIDEuNzVyZW0gMS43NXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgYW5pbWF0aW9uOiBtb2RhbFBvcEluIDAuNHMgJGVhc2Utc3ByaW5nO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIG1vZGFsUG9wSW4ge1xyXG4gIDAlIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiBzY2FsZSgwLjkpIHRyYW5zbGF0ZVkoMTBweCk7IH1cclxuICAxMDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKSB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbi5sb2dvdXQtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDFyZW07XHJcbn1cclxuXHJcbi5sb2dvdXQtZ3JhcGhpYy13cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDQuNXJlbTtcclxuICBoZWlnaHQ6IDQuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDgpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBhbmltYXRpb246IHB1bHNlUmluZyAycyBlYXNlLW91dCBpbmZpbml0ZTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZVJpbmcge1xyXG4gIDAlIHsgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4yKTsgfVxyXG4gIDcwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDEycHggcmdiYSg5OSwgMTAyLCAyNDEsIDApOyB9XHJcbiAgMTAwJSB7IGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSg5OSwgMTAyLCAyNDEsIDApOyB9XHJcbn1cclxuXHJcbi5sb2dvdXQtZ3JhcGhpYyB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgd2lkdGg6IDJyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ291dC10aXRsZXMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4zNzVyZW07XHJcbn1cclxuXHJcbi5sb2dvdXQtdGl0bGVzIC5sb2dvdXQtaGVhZGluZyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4zNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTEpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAyZW07XHJcbn1cclxuXHJcbi5sb2dvdXQtdGl0bGVzIC5sb2dvdXQtc3ViIHtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTtcclxuICBsaW5lLWhlaWdodDogMS40O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWF4LXdpZHRoOiAyODBweDtcclxufVxyXG5cclxuLmxvZ291dC1ib2R5IHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDAgMXJlbTtcclxufVxyXG5cclxuLmxvZ291dC1kZXNjIHtcclxuICBtYXJnaW46IDA7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4ubW9kYWwtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC42MjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxufVxyXG5cclxuLmJ0bi1jYW5jZWwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMi43NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcikgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMikgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMXB4KTsgfVxyXG4gICY6YWN0aXZlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9XHJcbn1cclxuXHJcbi5idG4tbG9nb3V0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyAkZWFzZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoOTksIDEwMiwgMjQxLCAwLjI1KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgJjpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTsgYm94LXNoYWRvdzogMCA4cHggMjRweCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4zNSk7IGZpbHRlcjogYnJpZ2h0bmVzcygxLjA1KTsgfVxyXG4gICY6YWN0aXZlIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSg5OSwgMTAyLCAyNDEsIDAuMik7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWNrZHJvcEZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuQGtleWZyYW1lcyBwdWxzZS1iYWRnZSB7XHJcbiAgMCUsIDEwMCUgeyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XHJcbiAgNTAlIHsgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTsgfVxyXG59XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gUkVTUE9OU0lWRSDDosKAwpQgVEFCTEVUICYgTU9CSUxFXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAubW9iaWxlLW1lbnUtYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLW1haW4ge1xyXG4gICAgcGFkZGluZzogMC42MjVyZW0gMC43NXJlbTtcclxuICB9XHJcblxyXG4gIC5uYXZiYXItaW5uZXIge1xyXG4gICAgZ2FwOiAwLjc1cmVtO1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1sZWZ0IHtcclxuICAgIGdhcDogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmFwcC10aXRsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmluc3RpdHV0ZS1pbmxpbmUge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1pY29uLWJ0biB7XHJcbiAgICB3aWR0aDogMi4zNzVyZW07XHJcbiAgICBoZWlnaHQ6IDIuMzc1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgfVxyXG5cclxuICAubG9nb3V0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG5cclxuICAubG9nb3V0LWNhcmQge1xyXG4gICAgcGFkZGluZzogMS41cmVtIDEuMjVyZW0gMS4yNXJlbTtcclxuICAgIGdhcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC5sb2dvdXQtZ3JhcGhpYyB7XHJcbiAgICB3aWR0aDogMy41cmVtO1xyXG4gICAgaGVpZ2h0OiAzLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1vZGFsLWFjdGlvbnMge1xyXG4gICAgZ2FwOiAwLjYyNXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmJ0bi1jYW5jZWwsXHJcbiAgLmJ0bi1sb2dvdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 1567);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tooltip */ 640);
/* harmony import */ var src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/directives/directives.module */ 1445);
/* harmony import */ var _icons_icon_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../icons/icon.module */ 5594);
/* harmony import */ var _environments_version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../environments/version */ 3653);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/service/auth.service */ 2241);
/* harmony import */ var _services_sidenav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sidenav.service */ 546);
















function SideNavComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_div_0_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.closeMobile());
    })("touchstart", function SideNavComponent_div_0_Template_div_touchstart_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.closeMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
}
function SideNavComponent_aside_1_img_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 15);
  }
}
function SideNavComponent_aside_1_img_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 16);
  }
}
function SideNavComponent_aside_1_ng_container_12_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const m_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](m_r9.label);
  }
}
const _c0 = function () {
  return {
    exact: false
  };
};
const _c1 = function (a0) {
  return {
    active: a0
  };
};
function SideNavComponent_aside_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_aside_1_ng_container_12_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const m_r9 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.onMenuClick(m_r9));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SideNavComponent_aside_1_ng_container_12_span_4_Template, 2, 1, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const m_r9 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", m_r9.path)("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](9, _c0))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](10, _c1, ctx_r7.selectedMenu === m_r9.label))("matTooltip", m_r9.label)("matTooltipDisabled", !ctx_r7.collapsed || ctx_r7.isMobileOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-current", ctx_r7.selectedMenu === m_r9.label ? "page" : null)("data-tooltip", m_r9.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("svgIcon", m_r9.icon || "menu");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r7.collapsed || ctx_r7.isMobileOpen);
  }
}
function SideNavComponent_aside_1_footer_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "footer", 22)(1, "p", 23)(2, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00A9 2026 Profluent Labs");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("v", ctx_r8.appVersion, "");
  }
}
function SideNavComponent_aside_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "aside", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("touchstart", function SideNavComponent_aside_1_Template_aside_touchstart_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r14.onTouchStart($event));
    })("touchmove", function SideNavComponent_aside_1_Template_aside_touchmove_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r16.onTouchMove($event));
    })("touchend", function SideNavComponent_aside_1_Template_aside_touchend_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r17.onTouchEnd($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 4)(2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, SideNavComponent_aside_1_img_3_Template, 1, 0, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, SideNavComponent_aside_1_img_4_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_aside_1_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r18.toggleCollapse());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function SideNavComponent_aside_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r19.closeMobile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "mat-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "nav", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, SideNavComponent_aside_1_ng_container_12_Template, 5, 12, "ng-container", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, SideNavComponent_aside_1_footer_13_Template, 6, 1, "footer", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojection"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("transform", ctx_r1.drawerTransform);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("collapsed", ctx_r1.collapsed)("mobile-open", ctx_r1.isMobileOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed || ctx_r1.isMobileOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.collapsed && !ctx_r1.isMobileOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("matTooltip", ctx_r1.collapsed ? "Expand sidebar" : "Collapse sidebar")("matTooltipDisabled", !ctx_r1.collapsed || ctx_r1.isMobileOpen);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵattribute"]("aria-expanded", !ctx_r1.collapsed)("aria-label", ctx_r1.collapsed ? "Expand sidebar" : "Collapse sidebar");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.collapsed ? "chevron_right" : "chevron_left");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r1.menus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r1.collapsed || ctx_r1.isMobileOpen);
  }
}
const _c2 = ["*"];
class SideNavComponent {
  get hostCollapsed() {
    return this.collapsed;
  }
  constructor(router, authService, sidenavService) {
    this.router = router;
    this.authService = authService;
    this.sidenavService = sidenavService;
    this.appVersion = _environments_version__WEBPACK_IMPORTED_MODULE_2__.APP_VERSION;
    this.isLogin = false;
    this.userRole = null;
    this.userName = sessionStorage.getItem('username') || '';
    this.userInstitute = sessionStorage.getItem('userInstitute') || '';
    this.menus = [];
    this.collapsed = false;
    this.isMobileOpen = false;
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
      '/user/exam/run': 'Test Inbox'
    };
    // ── Swipe-left gesture handler for mobile drawer ──
    this.touchStartX = 0;
    this.touchStartY = 0;
    this.currentTouchX = 0;
    this.touchDeltaX = 0;
    this.isSwiping = false;
    this.mobileSub = this.sidenavService.isMobileOpen$.subscribe(open => {
      this.isMobileOpen = open;
    });
    this.collapseSub = this.sidenavService.isCollapsed$.subscribe(collapsed => {
      this.collapsed = collapsed;
    });
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
    this.routerSubscription = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_6__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd)).subscribe(event => {
      this.setupMenus();
      this.updateSelectedMenuFromUrl(event.urlAfterRedirects || this.router.url);
      this.sidenavService.closeMobile();
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
    this.closeMobile();
  }
  closeMobile() {
    this.isSwiping = false;
    this.touchDeltaX = 0;
    this.sidenavService.closeMobile();
  }
  get drawerTransform() {
    if (this.isMobileOpen && this.isSwiping && this.touchDeltaX < 0) {
      return `translateX(${this.touchDeltaX}px)`;
    }
    return null;
  }
  onTouchStart(event) {
    if (!this.isMobileOpen) return;
    const touch = event.touches[0];
    this.touchStartX = touch.clientX;
    this.touchStartY = touch.clientY;
    this.currentTouchX = touch.clientX;
    this.touchDeltaX = 0;
    this.isSwiping = false;
  }
  onTouchMove(event) {
    if (!this.isMobileOpen) return;
    const touch = event.touches[0];
    this.currentTouchX = touch.clientX;
    const deltaX = this.currentTouchX - this.touchStartX;
    const deltaY = touch.clientY - this.touchStartY;
    if (Math.abs(deltaX) > Math.abs(deltaY) && deltaX < 0) {
      this.isSwiping = true;
      this.touchDeltaX = deltaX;
    }
  }
  onTouchEnd(event) {
    if (!this.isMobileOpen) return;
    if (this.isSwiping && this.touchDeltaX < -40) {
      this.closeMobile();
    } else {
      this.isSwiping = false;
      this.touchDeltaX = 0;
    }
  }
  permissionNameForMenu(label) {
    return label;
  }
  toggleCollapse() {
    this.sidenavService.toggleCollapse();
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
      // this.menus.push({ label: 'User Dashboard', path: '/user-dashboard', icon: 'user' });
      this.menus.push({
        label: 'Test Inbox',
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
    if (this.mobileSub) this.mobileSub.unsubscribe();
    if (this.collapseSub) this.collapseSub.unsubscribe();
  }
  static {
    this.ɵfac = function SideNavComponent_Factory(t) {
      return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_sidenav_service__WEBPACK_IMPORTED_MODULE_4__.SidenavService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: SideNavComponent,
      selectors: [["app-side-nav"]],
      hostVars: 2,
      hostBindings: function SideNavComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("collapsed", ctx.hostCollapsed);
        }
      },
      standalone: true,
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵStandaloneFeature"]],
      ngContentSelectors: _c2,
      decls: 2,
      vars: 2,
      consts: [["class", "mobile-nav-backdrop", "aria-hidden", "true", 3, "click", "touchstart", 4, "ngIf"], ["class", "app-side-nav", "role", "navigation", "aria-label", "Main navigation", 3, "collapsed", "mobile-open", "transform", "touchstart", "touchmove", "touchend", 4, "ngIf"], ["aria-hidden", "true", 1, "mobile-nav-backdrop", 3, "click", "touchstart"], ["role", "navigation", "aria-label", "Main navigation", 1, "app-side-nav", 3, "touchstart", "touchmove", "touchend"], [1, "side-top"], [1, "logo-wrap"], ["class", "institute-logo institute-logo-expanded", "src", "/assets/images/logo-main.png", "alt", "Institute logo", "loading", "lazy", 4, "ngIf"], ["class", "institute-logo institute-logo-collapsed", "src", "/assets/images/logo.png", "alt", "", "loading", "lazy", 4, "ngIf"], ["matTooltipPosition", "right", "matTooltipClass", "sidenav-stylish-tooltip", "matTooltipShowDelay", "100", 1, "collapse-toggle", "desktop-toggle", 3, "matTooltip", "matTooltipDisabled", "click"], [1, "collapse-icon"], ["type", "button", "aria-label", "Close menu", 1, "mobile-close-btn", 3, "click"], [1, "close-icon"], ["role", "menubar", "aria-label", "Main menu", 1, "menu"], [4, "ngFor", "ngForOf"], ["class", "side-bottom", 4, "ngIf"], ["src", "/assets/images/logo-main.png", "alt", "Institute logo", "loading", "lazy", 1, "institute-logo", "institute-logo-expanded"], ["src", "/assets/images/logo.png", "alt", "", "loading", "lazy", 1, "institute-logo", "institute-logo-collapsed"], ["role", "menuitem", "routerLinkActive", "active", "matTooltipPosition", "right", "matTooltipClass", "sidenav-stylish-tooltip", "matTooltipShowDelay", "100", 1, "menu-item", 3, "routerLink", "routerLinkActiveOptions", "ngClass", "matTooltip", "matTooltipDisabled", "click"], [1, "menu-icon-wrap"], [1, "menu-icon", 3, "svgIcon"], ["class", "menu-label", 4, "ngIf"], [1, "menu-label"], [1, "side-bottom"], [1, "app-version"], [1, "version-label"], [1, "copyright"]],
      template: function SideNavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵprojectionDef"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, SideNavComponent_div_0_Template, 1, 0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, SideNavComponent_aside_1_Template, 15, 15, "aside", 1);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isMobileOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isLogin);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIcon, src_app_shared_directives_directives_module__WEBPACK_IMPORTED_MODULE_0__.DirectivesModule, _icons_icon_module__WEBPACK_IMPORTED_MODULE_1__.IconModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButtonModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltipModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_11__.MatTooltip],
      styles: [".app-side-nav[_ngcontent-%COMP%] {\n  background: var(--theme-1);\n  color: var(--theme-1-text-1);\n  height: 100vh;\n  width: var(--sidenav-width);\n  display: flex;\n  flex-direction: column;\n  transition: width 0.2s cubic-bezier(0.16, 1, 0.3, 1);\n  position: relative;\n  z-index: 60;\n  overflow: hidden;\n  border-right: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.side-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 2.2rem 0.75rem;\n  height: var(--topbar-height, 3.5rem);\n  min-height: var(--topbar-height, 3.5rem);\n  flex-shrink: 0;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.06);\n}\n\n.logo-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 0;\n  flex: 1;\n}\n\n.institute-logo[_ngcontent-%COMP%] {\n  display: block;\n  object-fit: contain;\n  opacity: 0.92;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.institute-logo[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n\n.institute-logo-expanded[_ngcontent-%COMP%] {\n  max-width: 11rem;\n  max-height: 2.5rem;\n}\n\n.institute-logo-collapsed[_ngcontent-%COMP%] {\n  max-width: 1.75rem;\n  max-height: 1.75rem;\n}\n\n.collapse-toggle[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.375rem;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.collapse-toggle[_ngcontent-%COMP%]   .collapse-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--theme-1-text-2);\n  opacity: 0.5;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.collapse-toggle[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1);\n  transform: scale(1.1);\n}\n.collapse-toggle[_ngcontent-%COMP%]:hover   .collapse-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.collapse-toggle[_ngcontent-%COMP%]:active {\n  transform: scale(0.9);\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  flex: 1 1 auto;\n  padding: 0.5rem 0.5rem;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.menu[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 2px;\n}\n.menu[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.menu[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(255, 255, 255, 0.08);\n  border-radius: 2px;\n}\n\n.menu-item[_ngcontent-%COMP%] {\n  color: var(--theme-1-text-2);\n  text-decoration: none;\n  padding: 0.5625rem 0.75rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  border-radius: 0.5rem;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  -webkit-user-select: none;\n  user-select: none;\n}\n.menu-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.07);\n  color: var(--theme-1-text-1);\n  transform: translateX(2px);\n}\n.menu-item[_ngcontent-%COMP%]:hover   .menu-icon-wrap[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.menu-item[_ngcontent-%COMP%]:hover   .menu-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.menu-item.active[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;\n}\n.menu-item.active[_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.18);\n}\n.menu-item.active[_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%]   .menu-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n  color: var(--button-text-1);\n}\n.menu-item.active[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%], .menu-item[aria-current=page][_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: var(--button-text-1);\n}\n.menu-item[_ngcontent-%COMP%]:active {\n  transform: scale(0.98);\n}\n.menu-item[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid var(--button-1);\n  outline-offset: 2px;\n}\n\n.menu-icon-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.4375rem;\n  flex-shrink: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.menu-icon[_ngcontent-%COMP%] {\n  font-size: 1.1875rem;\n  width: 1.1875rem;\n  height: 1.1875rem;\n  color: var(--theme-1-icon-1);\n  opacity: 0.6;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.menu-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-height: 1.4;\n  letter-spacing: 0.01em;\n}\n\n.side-bottom[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.04);\n}\n\n.app-version[_ngcontent-%COMP%] {\n  color: var(--theme-1-text-2);\n  opacity: 0.3;\n  text-align: center;\n  font-size: 0.625rem;\n  margin: 0;\n  line-height: 1.5;\n  -webkit-user-select: none;\n  user-select: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.app-version[_ngcontent-%COMP%]:hover {\n  opacity: 0.5;\n}\n\n.version-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n}\n\n.copyright[_ngcontent-%COMP%] {\n  display: block;\n  opacity: 0.7;\n  margin-top: 1px;\n}\n\n.app-side-nav.collapsed[_ngcontent-%COMP%] {\n  width: 3.75rem;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .side-top[_ngcontent-%COMP%] {\n  padding: 0 0.5rem;\n  justify-content: center;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .logo-wrap[_ngcontent-%COMP%] {\n  justify-content: left;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .collapse-toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0.375rem;\n  top: 1rem;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.375rem;\n  align-items: center;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding: 0.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  gap: 0;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]::after {\n  content: attr(data-tooltip);\n  position: absolute;\n  left: calc(100% + 0.625rem);\n  top: 50%;\n  transform: translateY(-50%) translateX(-6px) scale(0.95);\n  background: var(--theme-1, #374151);\n  color: var(--theme-1-text-1, #ffffff);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  letter-spacing: 0.015em;\n  white-space: nowrap;\n  pointer-events: none;\n  opacity: 0;\n  transition: all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  z-index: 1000;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);\n  border: 1px solid rgba(255, 255, 255, 0.12);\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover::after {\n  opacity: 1;\n  transform: translateY(-50%) translateX(0) scale(1);\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-label[_ngcontent-%COMP%] {\n  display: none;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .menu-icon-wrap[_ngcontent-%COMP%] {\n  width: 1.875rem;\n  height: 1.875rem;\n}\n.app-side-nav.collapsed[_ngcontent-%COMP%]   .side-bottom[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mobile-nav-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.72);\n  backdrop-filter: blur(4px);\n  z-index: 1040;\n  animation: _ngcontent-%COMP%_backdropFadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;\n}\n\n@keyframes _ngcontent-%COMP%_backdropFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n.mobile-close-btn[_ngcontent-%COMP%] {\n  display: none !important;\n  width: 44px !important;\n  height: 44px !important;\n  min-width: 44px !important;\n  min-height: 44px !important;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, 0.08);\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  flex-shrink: 0;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mobile-close-btn[_ngcontent-%COMP%]   .close-icon[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  width: 1.35rem;\n  height: 1.35rem;\n  color: var(--theme-1-text-1, #ffffff);\n  opacity: 0.85;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.mobile-close-btn[_ngcontent-%COMP%]:hover, .mobile-close-btn[_ngcontent-%COMP%]:active {\n  background: rgba(255, 255, 255, 0.16);\n}\n.mobile-close-btn[_ngcontent-%COMP%]:hover   .close-icon[_ngcontent-%COMP%], .mobile-close-btn[_ngcontent-%COMP%]:active   .close-icon[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n.desktop-toggle[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media (max-width: 992px) {\n  .desktop-toggle[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .mobile-close-btn[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n  .app-side-nav[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    height: 100vh;\n    height: 100dvh;\n    width: min(18.5rem, 85vw) !important;\n    z-index: 1050;\n    background: var(--theme-1);\n    box-shadow: 4px 0 24px rgba(0, 0, 0, 0.4);\n    border-right: 1px solid rgba(255, 255, 255, 0.08);\n    transform: translateX(-100%);\n    transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1);\n    display: flex;\n    flex-direction: column;\n    touch-action: pan-y;\n  }\n  .app-side-nav.mobile-open[_ngcontent-%COMP%] {\n    transform: translateX(0) !important;\n  }\n  .side-top[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    height: 4rem;\n    min-height: 4rem;\n    justify-content: space-between;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.08);\n  }\n  .logo-wrap[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .institute-logo-expanded[_ngcontent-%COMP%] {\n    display: block !important;\n    max-width: 10rem;\n    max-height: 2.25rem;\n  }\n  .institute-logo-collapsed[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n  .menu[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem;\n    padding-bottom: calc(1.5rem + env(safe-area-inset-bottom, 0px));\n    align-items: stretch;\n    flex: 1 1 auto;\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch;\n    overscroll-behavior: contain;\n  }\n  .menu-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    min-height: 48px; \n\n    padding: 0.75rem 1rem;\n    margin-bottom: 0.25rem;\n    width: 100%;\n    height: auto;\n    gap: 0.875rem;\n    border-radius: 0.625rem;\n  }\n  .menu-item[_ngcontent-%COMP%]::after {\n    display: none !important;\n  }\n  .menu-icon-wrap[_ngcontent-%COMP%] {\n    width: 2.25rem;\n    height: 2.25rem;\n  }\n  .menu-label[_ngcontent-%COMP%] {\n    display: block !important;\n    font-size: 0.9375rem;\n    font-weight: 500;\n  }\n  .side-bottom[_ngcontent-%COMP%] {\n    display: block !important;\n    padding: 1rem 1rem calc(1.25rem + env(safe-area-inset-bottom, 0px)) 1rem;\n    border-top: 1px solid rgba(255, 255, 255, 0.06);\n    flex-shrink: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUE7RUFDRSwwQkFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0RBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlEQUFBO0FBUEY7O0FBV0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0NBQUE7RUFDQSx3Q0FBQTtFQUNBLGNBQUE7RUFDQSxrREFBQTtBQVJGOztBQVdBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtBQVJGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHNEQUFBO0FBUkY7QUFTRTtFQUFVLFVBQUE7QUFOWjs7QUFTQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFORjs7QUFTQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0FBTkY7QUFRRTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsaURBQUE7QUFOSjtBQVNFO0VBQ0Usb0NBQUE7RUFDQSxxQkFBQTtBQVBKO0FBUUk7RUFBaUIsVUFBQTtBQUxyQjtBQVFFO0VBQ0UscUJBQUE7QUFOSjs7QUFXQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUkY7QUFVRTtFQUF1QixVQUFBO0FBUHpCO0FBUUU7RUFBNkIsdUJBQUE7QUFML0I7QUFNRTtFQUNFLHFDQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFTQTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlEQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtBQU5GO0FBU0U7RUFDRSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0EsMEJBQUE7QUFQSjtBQVNJO0VBQ0Usc0JBQUE7QUFQTjtBQVVJO0VBQ0UsVUFBQTtBQVJOO0FBYUU7RUFFRSwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EscUZBQUE7QUFaSjtBQWVJO0VBQ0UscUNBQUE7QUFiTjtBQWNNO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0FBWlI7QUFnQkk7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0FBZE47QUFtQkU7RUFDRSxzQkFBQTtBQWpCSjtBQW9CRTtFQUNFLGtDQUFBO0VBQ0EsbUJBQUE7QUFsQko7O0FBc0JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0FBbkJGOztBQXNCQTtFQUNFLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtFQUNBLGlEQUFBO0FBbkJGOztBQXNCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBbkJGOztBQXVCQTtFQUNFLGdCQUFBO0VBQ0EsK0NBQUE7QUFwQkY7O0FBdUJBO0VBQ0UsNEJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxxREFBQTtBQXBCRjtBQXFCRTtFQUFVLFlBQUE7QUFsQlo7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFsQkY7O0FBcUJBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBbEJGOztBQXNCQTtFQUNFLGNBQUE7QUFuQkY7QUFxQkU7RUFDRSxpQkFBQTtFQUNBLHVCQUFBO0FBbkJKO0FBc0JFO0VBQWEscUJBQUE7QUFuQmY7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBbkJKO0FBc0JFO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQXBCSjtBQXVCRTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsTUFBQTtBQXJCSjtBQXdCSTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSx3REFBQTtFQUNBLG1DQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFVBQUE7RUFDQSxzREFBQTtFQUNBLGFBQUE7RUFDQSx5Q0FBQTtFQUNBLDJDQUFBO0FBdEJOO0FBeUJJO0VBQ0UsVUFBQTtFQUNBLGtEQUFBO0FBdkJOO0FBMEJJO0VBQ0UsZUFBQTtBQXhCTjtBQTRCRTtFQUFjLGFBQUE7QUF6QmhCO0FBMkJFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBekJKO0FBNEJFO0VBQWUsYUFBQTtBQXpCakI7O0FBOEJBO0VBQ0UsZUFBQTtFQUNBLFFBQUE7RUFDQSxrQ0FBQTtFQUVBLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLHNFQUFBO0FBM0JGOztBQThCQTtFQUNFO0lBQU8sVUFBQTtFQTFCUDtFQTJCQTtJQUFLLFVBQUE7RUF4Qkw7QUFDRjtBQTBCQTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtBQXhCRjtBQTBCRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUNBLGFBQUE7RUFDQSxxREFBQTtBQXhCSjtBQTJCRTtFQUNFLHFDQUFBO0FBekJKO0FBMEJJO0VBQWMsVUFBQTtBQXZCbEI7O0FBMkJBO0VBQ0UsYUFBQTtBQXhCRjs7QUE0QkE7RUFDRTtJQUNFLHdCQUFBO0VBekJGO0VBNEJBO0lBQ0Usd0JBQUE7RUExQkY7RUE2QkE7SUFDRSxlQUFBO0lBQ0EsT0FBQTtJQUNBLE1BQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtJQUNBLGNBQUE7SUFDQSxvQ0FBQTtJQUNBLGFBQUE7SUFDQSwwQkFBQTtJQUNBLHlDQUFBO0lBQ0EsaURBQUE7SUFDQSw0QkFBQTtJQUNBLHlEQUFBO0lBQ0EsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7RUEzQkY7RUE4QkE7SUFDRSxtQ0FBQTtFQTVCRjtFQStCQTtJQUNFLHFCQUFBO0lBQ0EsWUFBQTtJQUNBLGdCQUFBO0lBQ0EsOEJBQUE7SUFDQSxrREFBQTtFQTdCRjtFQWdDQTtJQUNFLDJCQUFBO0VBOUJGO0VBaUNBO0lBQ0UseUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0VBL0JGO0VBa0NBO0lBQ0Usd0JBQUE7RUFoQ0Y7RUFtQ0E7SUFDRSx3QkFBQTtJQUNBLCtEQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtJQUNBLDRCQUFBO0VBakNGO0VBb0NBO0lBQ0UsMkJBQUE7SUFDQSxnQkFBQSxFQUFBLCtCQUFBO0lBQ0EscUJBQUE7SUFDQSxzQkFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EsYUFBQTtJQUNBLHVCQUFBO0VBbENGO0VBb0NFO0lBQ0Usd0JBQUE7RUFsQ0o7RUFzQ0E7SUFDRSxjQUFBO0lBQ0EsZUFBQTtFQXBDRjtFQXVDQTtJQUNFLHlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtFQXJDRjtFQXdDQTtJQUNFLHlCQUFBO0lBQ0Esd0VBQUE7SUFDQSwrQ0FBQTtJQUNBLGNBQUE7RUF0Q0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNpZGUgTmF2aWdhdGlvbiDDosKAwpQgTW9kZXJuIFByZW1pdW0gRGVzaWduXHJcbi8vIENsZWFuLiBBbmltYXRlZC4gUG9saXNoZWQuXHJcblxyXG4kZWFzZTogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuJGVhc2Utb3V0OiBjdWJpYy1iZXppZXIoMC4xNiwgMSwgMC4zLCAxKTtcclxuJGVhc2Utc3ByaW5nOiBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcblxyXG4vLyDDosKUwoDDosKUwoDDosKUwoAgUm9vdCDDosKUwoDDosKUwoDDosKUwoBcclxuLmFwcC1zaWRlLW5hdiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMSk7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0xKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiB2YXIoLS1zaWRlbmF2LXdpZHRoKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyAkZWFzZS1vdXQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDYwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFRvcCBTZWN0aW9uIMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4uc2lkZS10b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMi4ycmVtIDAuNzVyZW07XHJcbiAgaGVpZ2h0OiB2YXIoLS10b3BiYXItaGVpZ2h0LCAzLjVyZW0pO1xyXG4gIG1pbi1oZWlnaHQ6IHZhcigtLXRvcGJhci1oZWlnaHQsIDMuNXJlbSk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNik7XHJcbn1cclxuXHJcbi5sb2dvLXdyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLmluc3RpdHV0ZS1sb2dvIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIG9wYWNpdHk6IDAuOTI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyAkZWFzZTtcclxuICAmOmhvdmVyIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcblxyXG4uaW5zdGl0dXRlLWxvZ28tZXhwYW5kZWQge1xyXG4gIG1heC13aWR0aDogMTFyZW07XHJcbiAgbWF4LWhlaWdodDogMi41cmVtO1xyXG59XHJcblxyXG4uaW5zdGl0dXRlLWxvZ28tY29sbGFwc2VkIHtcclxuICBtYXgtd2lkdGg6IDEuNzVyZW07XHJcbiAgbWF4LWhlaWdodDogMS43NXJlbTtcclxufVxyXG5cclxuLmNvbGxhcHNlLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDEuNzVyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XHJcblxyXG4gIC5jb2xsYXBzZS1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB3aWR0aDogMS4xMjVyZW07XHJcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0yKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XHJcbiAgICAuY29sbGFwc2UtaWNvbiB7IG9wYWNpdHk6IDE7IH1cclxuICB9XHJcblxyXG4gICY6YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgMOiwpTCgCBNZW51IMOiwpTCgMOiwpTCgMOiwpTCgFxyXG4ubWVudSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMC4xODc1cmVtO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgd2lkdGg6IDJweDsgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1lbnUgSXRlbSDDosKUwoDDosKUwoDDosKUwoBcclxuLm1lbnUtaXRlbSB7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtdGV4dC0yKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMC41NjI1cmVtIDAuNzVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcclxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG5cclxuICAvLyBIb3ZlclxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA3KTtcclxuICAgIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KTtcclxuXHJcbiAgICAubWVudS1pY29uLXdyYXAge1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51LWljb24ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQWN0aXZlXHJcbiAgJi5hY3RpdmUsXHJcbiAgJlthcmlhLWN1cnJlbnQ9XCJwYWdlXCJdIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjE1KSxcclxuICAgICAgICAgICAgICAgMCAwIDAgMXB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCkgaW5zZXQ7XHJcblxyXG4gICAgLm1lbnUtaWNvbi13cmFwIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjE4KTtcclxuICAgICAgLm1lbnUtaWNvbiB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubWVudS1sYWJlbCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFByZXNzXHJcbiAgJjphY3RpdmUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk4KTtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAycHggc29saWQgdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDJweDtcclxuICB9XHJcbn1cclxuXHJcbi5tZW51LWljb24td3JhcCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIHdpZHRoOiAycmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XHJcbn1cclxuXHJcbi5tZW51LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xyXG4gIHdpZHRoOiAxLjE4NzVyZW07XHJcbiAgaGVpZ2h0OiAxLjE4NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTEtaWNvbi0xKTtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XHJcbn1cclxuXHJcbi5tZW51LWxhYmVsIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIEZvb3RlciDDosKUwoDDosKUwoDDosKUwoBcclxuLnNpZGUtYm90dG9tIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDQpO1xyXG59XHJcblxyXG4uYXBwLXZlcnNpb24ge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMik7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNjI1cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlO1xyXG4gICY6aG92ZXIgeyBvcGFjaXR5OiAwLjU7IH1cclxufVxyXG5cclxuLnZlcnNpb24tbGFiZWwge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxufVxyXG5cclxuLmNvcHlyaWdodCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIENvbGxhcHNlZCDDosKUwoDDosKUwoDDosKUwoBcclxuLmFwcC1zaWRlLW5hdi5jb2xsYXBzZWQge1xyXG4gIHdpZHRoOiAzLjc1cmVtO1xyXG5cclxuICAuc2lkZS10b3Age1xyXG4gICAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sb2dvLXdyYXAgeyBqdXN0aWZ5LWNvbnRlbnQ6bGVmdDsgfVxyXG5cclxuICAuY29sbGFwc2UtdG9nZ2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwLjM3NXJlbTtcclxuICAgIHRvcDogMXJlbTtcclxuICB9XHJcblxyXG4gIC5tZW51IHtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC4zNzVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUtaXRlbSB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHdpZHRoOiAyLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIGdhcDogMDtcclxuXHJcbiAgICAvLyBUb29sdGlwXHJcbiAgICAmOjphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10b29sdGlwKTtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiBjYWxjKDEwMCUgKyAwLjYyNXJlbSk7XHJcbiAgICAgIHRvcDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgdHJhbnNsYXRlWCgtNnB4KSBzY2FsZSgwLjk1KTtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMSwgIzM3NDE1MSk7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0xLXRleHQtMSwgI2ZmZmZmZik7XHJcbiAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1ZW07XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZS1zcHJpbmc7XHJcbiAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDE2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTIpO1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXI6OmFmdGVyIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpIHRyYW5zbGF0ZVgoMCkgc2NhbGUoMSk7XHJcbiAgICB9XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tZW51LWxhYmVsIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuICAubWVudS1pY29uLXdyYXAge1xyXG4gICAgd2lkdGg6IDEuODc1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjg3NXJlbTtcclxuICB9XHJcblxyXG4gIC5zaWRlLWJvdHRvbSB7IGRpc3BsYXk6IG5vbmU7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1vYmlsZSBEcmF3ZXIgJiBCYWNrZHJvcCDDosKUwoDDosKUwoDDosKUwoBcclxuLy8gw6LClMKAw6LClMKAw6LClMKAIE1vYmlsZSBEcmF3ZXIgJiBCYWNrZHJvcCDDosKUwoDDosKUwoDDosKUwoBcclxuLm1vYmlsZS1uYXYtYmFja2Ryb3Age1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBpbnNldDogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1LCAyMywgNDIsIDAuNzIpO1xyXG4gIC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgei1pbmRleDogMTA0MDtcclxuICBhbmltYXRpb246IGJhY2tkcm9wRmFkZUluIDAuMjVzICRlYXNlLW91dCBmb3J3YXJkcztcclxufVxyXG5cclxuQGtleWZyYW1lcyBiYWNrZHJvcEZhZGVJbiB7XHJcbiAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cclxuICB0byB7IG9wYWNpdHk6IDE7IH1cclxufVxyXG5cclxuLm1vYmlsZS1jbG9zZS1idG4ge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB3aWR0aDogNDRweCAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDRweCAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogNDRweCAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDQ0cHggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBmbGV4LXNocmluazogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcclxuXHJcbiAgLmNsb3NlLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xyXG4gICAgd2lkdGg6IDEuMzVyZW07XHJcbiAgICBoZWlnaHQ6IDEuMzVyZW07XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMS10ZXh0LTEsICNmZmZmZmYpO1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZTtcclxuICB9XHJcblxyXG4gICY6aG92ZXIsICY6YWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNik7XHJcbiAgICAuY2xvc2UtaWNvbiB7IG9wYWNpdHk6IDE7IH1cclxuICB9XHJcbn1cclxuXHJcbi5kZXNrdG9wLXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgKE1vYmlsZSAmIFRhYmxldCA8PSA5OTJweCkgw6LClMKAw6LClMKAw6LClMKAXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5kZXNrdG9wLXRvZ2dsZSB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubW9iaWxlLWNsb3NlLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuYXBwLXNpZGUtbmF2IHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgaGVpZ2h0OiAxMDBkdmg7XHJcbiAgICB3aWR0aDogbWluKDE4LjVyZW0sIDg1dncpICFpbXBvcnRhbnQ7XHJcbiAgICB6LWluZGV4OiAxMDUwO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMSk7XHJcbiAgICBib3gtc2hhZG93OiA0cHggMCAyNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwMCUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjhzICRlYXNlLW91dDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teTtcclxuICB9XHJcblxyXG4gIC5hcHAtc2lkZS1uYXYubW9iaWxlLW9wZW4ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2lkZS10b3Age1xyXG4gICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gICAgbWluLWhlaWdodDogNHJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xyXG4gIH1cclxuXHJcbiAgLmxvZ28td3JhcCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAuaW5zdGl0dXRlLWxvZ28tZXhwYW5kZWQge1xyXG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogMTByZW07XHJcbiAgICBtYXgtaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmluc3RpdHV0ZS1sb2dvLWNvbGxhcHNlZCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWVudSB7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDAuNzVyZW07XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjVyZW0gKyBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSwgMHB4KSk7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IGNvbnRhaW47XHJcbiAgfVxyXG5cclxuICAubWVudS1pdGVtIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIG1pbi1oZWlnaHQ6IDQ4cHg7IC8qIFN0YW5kYXJkIDQ4cHggdG91Y2ggdGFyZ2V0ICovXHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBnYXA6IDAuODc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWVudS1pY29uLXdyYXAge1xyXG4gICAgd2lkdGg6IDIuMjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgfVxyXG5cclxuICAubWVudS1sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxuXHJcbiAgLnNpZGUtYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gY2FsYygxLjI1cmVtICsgZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20sIDBweCkpIDFyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA2KTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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

/***/ 4297:
/*!*******************************************************!*\
  !*** ./src/app/shared/date/localized-date-adapter.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INDIAN_DATE_FORMATS: () => (/* binding */ INDIAN_DATE_FORMATS),
/* harmony export */   IndianDateAdapter: () => (/* binding */ IndianDateAdapter),
/* harmony export */   LOCALIZED_DATE_FORMATS: () => (/* binding */ LOCALIZED_DATE_FORMATS),
/* harmony export */   LocalizedDateAdapter: () => (/* binding */ LocalizedDateAdapter),
/* harmony export */   getLocaleDateFormat: () => (/* binding */ getLocaleDateFormat),
/* harmony export */   getUserLocale: () => (/* binding */ getUserLocale)
/* harmony export */ });
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ 7699);



const LOCALIZED_DATE_FORMATS = {
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
// Backwards-compatibility alias
const INDIAN_DATE_FORMATS = LOCALIZED_DATE_FORMATS;
function getUserLocale() {
  try {
    const storedLocale = sessionStorage.getItem('locale');
    if (storedLocale && storedLocale.trim()) {
      return storedLocale.trim();
    }
    const countryCode = sessionStorage.getItem('country_code');
    if (countryCode && countryCode.trim()) {
      const code = countryCode.trim().toUpperCase();
      const countryLocaleMap = {
        US: 'en-US',
        IN: 'en-IN',
        GB: 'en-GB',
        UK: 'en-GB',
        AU: 'en-AU',
        CA: 'en-CA',
        NZ: 'en-NZ',
        SG: 'en-SG',
        AE: 'ar-AE',
        SA: 'ar-SA',
        DE: 'de-DE',
        FR: 'fr-FR',
        ES: 'es-ES',
        IT: 'it-IT',
        JP: 'ja-JP',
        CN: 'zh-CN',
        KR: 'ko-KR',
        BR: 'pt-BR',
        MX: 'es-MX',
        NL: 'nl-NL',
        SE: 'sv-SE',
        NO: 'nb-NO',
        DK: 'da-DK',
        FI: 'fi-FI',
        PL: 'pl-PL',
        RU: 'ru-RU',
        ZA: 'en-ZA',
        PH: 'en-PH',
        MY: 'ms-MY',
        ID: 'id-ID',
        TH: 'th-TH',
        VN: 'vi-VN'
      };
      if (countryLocaleMap[code]) {
        return countryLocaleMap[code];
      }
      return `en-${code}`;
    }
    const countryName = (sessionStorage.getItem('country_name') || '').trim().toLowerCase();
    if (countryName) {
      if (countryName.includes('united states') || countryName === 'usa' || countryName === 'us') return 'en-US';
      if (countryName.includes('india')) return 'en-IN';
      if (countryName.includes('united kingdom') || countryName.includes('britain') || countryName === 'uk') return 'en-GB';
      if (countryName.includes('canada')) return 'en-CA';
      if (countryName.includes('australia')) return 'en-AU';
      if (countryName.includes('germany')) return 'de-DE';
      if (countryName.includes('france')) return 'fr-FR';
      if (countryName.includes('japan')) return 'ja-JP';
      if (countryName.includes('china')) return 'zh-CN';
    }
  } catch (e) {}
  return typeof navigator !== 'undefined' && navigator.language ? navigator.language : 'en-IN';
}
function getLocaleDateFormat(locale) {
  const activeLocale = locale || getUserLocale();
  try {
    const sampleDate = new Date(2026, 11, 25); // Dec 25, 2026
    const formatter = new Intl.DateTimeFormat(activeLocale, {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    const parts = formatter.formatToParts(sampleDate);
    const pattern = parts.map(part => {
      if (part.type === 'day') return 'DD';
      if (part.type === 'month') return 'MM';
      if (part.type === 'year') return 'YYYY';
      return part.value;
    }).join('');
    return pattern || 'DD/MM/YYYY';
  } catch (e) {
    return 'DD/MM/YYYY';
  }
}
class LocalizedDateAdapter extends _angular_material_core__WEBPACK_IMPORTED_MODULE_0__.NativeDateAdapter {
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
      const locale = getUserLocale();
      const pattern = getLocaleDateFormat(locale);
      const parts = trimmed.split(/\D+/).filter(Boolean);
      if (parts.length === 3) {
        const patternParts = pattern.split(/[^A-Za-z]+/).filter(Boolean);
        const dayIdx = patternParts.findIndex(p => p.toUpperCase().startsWith('D'));
        const monthIdx = patternParts.findIndex(p => p.toUpperCase().startsWith('M'));
        const yearIdx = patternParts.findIndex(p => p.toUpperCase().startsWith('Y'));
        if (dayIdx >= 0 && monthIdx >= 0 && yearIdx >= 0) {
          const day = Number(parts[dayIdx]);
          const month = Number(parts[monthIdx]) - 1;
          let year = Number(parts[yearIdx]);
          if (year < 100) year += 2000;
          const parsed = new Date(year, month, day);
          if (parsed.getFullYear() === year && parsed.getMonth() === month && parsed.getDate() === day) {
            return parsed;
          }
        }
      }
    }
    if (typeof value === 'string') return null;
    const timestamp = typeof value === 'number' ? value : Date.parse(String(value));
    const date = new Date(timestamp);
    return this.isValid(date) ? date : null;
  }
  format(date, displayFormat) {
    if (!this.isValid(date)) {
      throw Error('LocalizedDateAdapter: Cannot format invalid date.');
    }
    const locale = getUserLocale();
    if (displayFormat === 'monthYearLabel') {
      return date.toLocaleDateString(locale, {
        month: 'short',
        year: 'numeric'
      });
    }
    if (displayFormat === 'monthYearA11yLabel') {
      return date.toLocaleDateString(locale, {
        month: 'long',
        year: 'numeric'
      });
    }
    try {
      return new Intl.DateTimeFormat(locale, {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).format(date);
    } catch (e) {
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
  }
  static {
    this.ɵfac = function LocalizedDateAdapter_Factory(t) {
      return new (t || LocalizedDateAdapter)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_0__.MAT_DATE_LOCALE, 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__.Platform));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: LocalizedDateAdapter,
      factory: LocalizedDateAdapter.ɵfac
    });
  }
}
// Backwards-compatibility alias
const IndianDateAdapter = LocalizedDateAdapter;

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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 1567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 4334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 6647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services_page_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/page-access.service */ 626);
/* harmony import */ var src_app_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/home/service/auth.service */ 2241);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);






class PermissionGuard {
  constructor(pageAccess, auth, router) {
    this.pageAccess = pageAccess;
    this.auth = auth;
    this.router = router;
  }
  normalizePageName(pageName) {
    const aliases = {
      'category': 'Question Banks',
      'categories': 'Question Banks',
      'question bank': 'Question Banks',
      'question banks': 'Question Banks',
      'exam': 'Manage test',
      'exams': 'Manage test',
      'test': 'Manage test',
      'tests': 'Manage test',
      'manage test': 'Manage test',
      'schedule exam': 'Schedule Test',
      'schedule': 'Schedule Test',
      'schedule test': 'Schedule Test',
      'scheduled tests': 'Schedule Test',
      'exam reports': 'Test Reports',
      'test reports': 'Test Reports',
      'users': 'Users',
      'user': 'Users',
      'questions': 'Questions',
      'question': 'Questions'
    };
    const key = (pageName || '').trim().toLowerCase();
    return aliases[key] || pageName;
  }
  canActivate(route) {
    return this.auth.authReady$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.filter)(ready => ready), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.switchMap)(() => this.checkAccess(route)));
  }
  checkAccess(route) {
    const pageName = this.normalizePageName(route.data && route.data['pageName'] || route.data && route.data['page'] || '');
    const action = route.data && route.data['action'] || 'view';
    // optional role-based access: route.data.requiredRole can be string or array of strings
    const requiredRole = route.data && route.data['requiredRole'] || null;
    const user = this.auth.currentUserValue || null;
    if (!user) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.router.createUrlTree(['/login']));
    // if requiredRole is specified, check user's role first
    if (requiredRole) {
      const userRole = (user.role || user.user_role || '').toString().toLowerCase();
      const allowed = Array.isArray(requiredRole) ? requiredRole.map(r => String(r).toLowerCase()) : [String(requiredRole).toLowerCase()];
      if (!allowed.includes(userRole)) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.router.createUrlTree(['/unauthorized']));
      }
      // role matches — grant access immediately (role-based routes bypass page-permission checks)
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(true);
    }
    const userId = user.id || user.user_id || user.userId || null;
    if (!userId) return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.router.createUrlTree(['/login']));
    return this.pageAccess.hasPermission(userId.toString(), pageName, action).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(has => has ? true : this.router.createUrlTree(['/unauthorized'])), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(this.router.createUrlTree(['/unauthorized']))));
  }
  static {
    this.ɵfac = function PermissionGuard_Factory(t) {
      return new (t || PermissionGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_page_access_service__WEBPACK_IMPORTED_MODULE_0__.PageAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](src_app_home_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
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
    const skipAuthPaths = ['/login', '/public'];
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
        const url = req.url || '';
        if (skipAuthPaths.some(p => url.includes(p))) return;
        // some APIs return 200 with { status: false, statusMessage: 'Signature has expired' }
        const body = event && event.body ? event.body : null;
        if (body && (body.status === false || body.status === 'false')) {
          const msg = body.statusMessage || body.message || body.error || '';
          if (msg && /expire|not active|unauthorized/i.test(msg)) {
            console.debug('[AuthInterceptor] detected session invalidation in 200 response:', msg);
            try {
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
        const url = req.url || '';
        if (skipAuthPaths.some(p => url.includes(p))) {
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(() => err);
        }
        const status = err && (err.status || err.statusCode);
        const body = err && err.error ? err.error : err;
        const message = body && (body.statusMessage || body.message || body.error);
        // If token expired, invalid, or revoked due to another device login
        if (status === 401 || message && /expire|not active|unauthorized/i.test(message)) {
          try {
            window.dispatchEvent(new CustomEvent('sessionExpired', {
              detail: {
                message: message || 'Session is no longer active'
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

/***/ 742:
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/localized-date.pipe.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalizedDatePipe: () => (/* binding */ LocalizedDatePipe)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class LocalizedDatePipe {
  transform(value, format = 'date') {
    if (!value) return '';
    let date;
    if (value instanceof Date) {
      date = value;
    } else if (typeof value === 'number') {
      date = new Date(value);
    } else {
      // Handle string format
      const strVal = String(value).trim();
      if (!strVal) return '';
      date = new Date(strVal);
    }
    if (isNaN(date.getTime())) {
      return '';
    }
    // Retrieve active user locale or default to 'en-IN' (or 'en-US')
    let locale = 'en-IN';
    try {
      const stored = sessionStorage.getItem('locale');
      if (stored && stored.trim()) {
        locale = stored.trim();
      }
    } catch (e) {}
    let options;
    if (typeof format === 'object' && format !== null) {
      options = format;
    } else {
      switch (format) {
        case 'datetime':
          options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          };
          break;
        case 'time':
          options = {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
          };
          break;
        case 'full':
          options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          };
          break;
        case 'monthYear':
          options = {
            month: 'short',
            year: 'numeric'
          };
          break;
        case 'short':
        case 'date':
        default:
          options = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
          };
          break;
      }
    }
    try {
      return new Intl.DateTimeFormat(locale, options).format(date);
    } catch (e) {
      // Fallback in case of locale compatibility issue
      return new Intl.DateTimeFormat('en-IN', options).format(date);
    }
  }
  static {
    this.ɵfac = function LocalizedDatePipe_Factory(t) {
      return new (t || LocalizedDatePipe)();
    };
  }
  static {
    this.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "localizedDate",
      type: LocalizedDatePipe,
      pure: false
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

/***/ 275:
/*!******************************************************************!*\
  !*** ./src/app/shared/services/institute-terminology.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstituteTerminologyService: () => (/* binding */ InstituteTerminologyService),
/* harmony export */   getInstituteTerminology: () => (/* binding */ getInstituteTerminology)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

function getInstituteTerminology(industryType) {
  const norm = (industryType || '').trim().toLowerCase();
  if (norm === 'school' || norm.includes('school')) {
    return {
      industryType: 'School',
      isSchool: true,
      isCollege: false,
      deptLabel: 'Class',
      deptPlural: 'Classes',
      deptPluralLabel: 'Classes',
      teamLabel: 'Section',
      teamPlural: 'Sections',
      teamPluralLabel: 'Sections',
      selectDeptPlaceholder: 'Select class',
      selectDeptPluralPlaceholder: 'Select classes',
      selectTeamPlaceholder: 'Select section',
      selectTeamPluralPlaceholder: 'Select sections',
      searchDeptPlaceholder: 'Search class',
      searchTeamPlaceholder: 'Search section',
      loadingDepts: 'Loading classes...',
      loadingTeams: 'Loading sections...',
      noDeptsFound: 'No classes found',
      noTeamsFound: 'No sections found',
      noTeamsForDept: 'No sections found for selected class',
      deptRequired: 'Class is required',
      teamRequired: 'Section is required',
      selectDeptFirst: 'Select class first',
      allDepts: 'All Classes',
      allTeams: 'All Sections',
      filterDeptPrefix: 'Class',
      filterTeamPrefix: 'Section',
      setDeptAndTeamsHeading: 'Set Classes and Sections',
      deptAndTeamsDesc: 'Select classes and sections for this question bank.'
    };
  }
  if (norm === 'college' || norm.includes('college')) {
    return {
      industryType: 'College',
      isSchool: false,
      isCollege: true,
      deptLabel: 'Department',
      deptPlural: 'Departments',
      deptPluralLabel: 'Departments',
      teamLabel: 'Year',
      teamPlural: 'Years',
      teamPluralLabel: 'Years',
      selectDeptPlaceholder: 'Select department',
      selectDeptPluralPlaceholder: 'Select departments',
      selectTeamPlaceholder: 'Select year',
      selectTeamPluralPlaceholder: 'Select years',
      searchDeptPlaceholder: 'Search department',
      searchTeamPlaceholder: 'Search year',
      loadingDepts: 'Loading departments...',
      loadingTeams: 'Loading years...',
      noDeptsFound: 'No departments found',
      noTeamsFound: 'No years found',
      noTeamsForDept: 'No years found for selected department',
      deptRequired: 'Department is required',
      teamRequired: 'Year is required',
      selectDeptFirst: 'Select department first',
      allDepts: 'All Departments',
      allTeams: 'All Years',
      filterDeptPrefix: 'Department',
      filterTeamPrefix: 'Year',
      setDeptAndTeamsHeading: 'Set Departments and Years',
      deptAndTeamsDesc: 'Select departments and years for this question bank.'
    };
  }
  return {
    industryType: industryType || 'Other',
    isSchool: false,
    isCollege: false,
    deptLabel: 'Department',
    deptPlural: 'Departments',
    deptPluralLabel: 'Departments',
    teamLabel: 'Team',
    teamPlural: 'Teams',
    teamPluralLabel: 'Teams',
    selectDeptPlaceholder: 'Select department',
    selectDeptPluralPlaceholder: 'Select departments',
    selectTeamPlaceholder: 'Select team',
    selectTeamPluralPlaceholder: 'Select teams',
    searchDeptPlaceholder: 'Search department',
    searchTeamPlaceholder: 'Search team',
    loadingDepts: 'Loading departments...',
    loadingTeams: 'Loading teams...',
    noDeptsFound: 'No departments found',
    noTeamsFound: 'No teams found',
    noTeamsForDept: 'No teams found for selected department',
    deptRequired: 'Department is required',
    teamRequired: 'Team is required',
    selectDeptFirst: 'Select department first',
    allDepts: 'All Departments',
    allTeams: 'All Teams',
    filterDeptPrefix: 'Department',
    filterTeamPrefix: 'Team',
    setDeptAndTeamsHeading: 'Set Dept and Teams',
    deptAndTeamsDesc: 'Select departments and teams for this question bank.'
  };
}
class InstituteTerminologyService {
  getTerminology(industryType) {
    return getInstituteTerminology(industryType);
  }
  static {
    this.ɵfac = function InstituteTerminologyService_Factory(t) {
      return new (t || InstituteTerminologyService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: InstituteTerminologyService,
      factory: InstituteTerminologyService.ɵfac,
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
      'category': 'Question Banks',
      'categories': 'Question Banks',
      'question bank': 'Question Banks',
      'question banks': 'Question Banks',
      'exam': 'Manage test',
      'exams': 'Manage test',
      'test': 'Manage test',
      'tests': 'Manage test',
      'manage test': 'Manage test',
      'schedule exam': 'Schedule Test',
      'schedule': 'Schedule Test',
      'schedule test': 'Schedule Test',
      'scheduled tests': 'Schedule Test',
      'exam reports': 'Test Reports',
      'test reports': 'Test Reports',
      'users': 'Users',
      'user': 'Users',
      'questions': 'Questions',
      'question': 'Questions'
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
      const targetNorm = this.normalizePageName(pageName).toLowerCase();
      const r = rows.find(x => {
        const rowNorm = this.normalizePageName(x.page_name || '').toLowerCase();
        return rowNorm === targetNorm || x.page_name && x.page_name.toLowerCase() === (pageName || '').toLowerCase();
      });
      if (!r) return false;
      console.debug('[PageAccessService] Checking permission for page:', targetNorm, 'requested:', pageName, 'action:', action);
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2435);
/* harmony import */ var _api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api.config */ 1892);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _home_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/service/auth.service */ 2241);








class SessionService {
  constructor(dialog, http, router, ngZone, auth) {
    this.dialog = dialog;
    this.http = http;
    this.router = router;
    this.ngZone = ngZone;
    this.auth = auth;
    this.idleTimeoutMs = 30 * 60 * 1000; // 30 minutes of inactivity before warning
    this.adminWarningTimeoutMs = 5 * 60 * 1000; // 5-minute countdown grace period for Admin
    this.activityEvents = ['mousemove', 'mousedown', 'keydown', 'scroll', 'touchstart'];
    this.listening = false;
    this.lastActivityAt = Date.now();
    this.idleTimer = null;
    this.countdownInterval = null;
    this.adminDialogRef = null;
    this.promptOpen = false;
    this.refreshInProgress = false;
    this.isLoggingOut = false;
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
      if (this.isLoggingOut || !this.hasLoggedInSession()) return;
      const msg = ev && ev.detail && ev.detail.message ? ev.detail.message : 'Your session has expired';
      if (/another device|logged in from another|active on another/i.test(msg)) {
        this.ngZone.run(() => this.promptSingleDeviceLogout('Your account was logged in from another device. Please log in again if needed.'));
      } else {
        this.ngZone.run(() => this.promptExtendOrLogout(msg));
      }
    });
    this.scheduleIdleCheck();
  }
  promptSingleDeviceLogout(message) {
    if (this.isLoggingOut || this.promptOpen || !this.hasLoggedInSession()) return;
    this.stopAdminCountdown();
    this.promptOpen = true;
    const ref = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
      data: {
        title: 'Logged Out',
        message: message,
        confirmText: 'OK',
        cancelText: ''
      },
      disableClose: true
    });
    ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe(() => {
      this.promptOpen = false;
      this.clearAndRedirect();
    });
  }
  promptExtendOrLogout(message) {
    if (this.isLoggingOut || this.promptOpen || !this.hasLoggedInSession()) return;
    this.stopAdminCountdown();
    this.promptOpen = true;
    const ref = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
      data: {
        title: 'Session Expired',
        message: message + '\nWould you like to continue your session?',
        confirmText: 'Continue',
        cancelText: 'Logout'
      },
      disableClose: true
    });
    ref.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe(ok => {
      this.promptOpen = false;
      if (ok === true) {
        this.lastActivityAt = Date.now();
        this.tryRefreshToken();
        this.scheduleIdleCheck();
      } else {
        this.doLogout();
      }
    });
  }
  promptAdminWarning() {
    if (this.isLoggingOut || this.promptOpen || !this.hasLoggedInSession()) return;
    this.promptOpen = true;
    const logoutTime = Date.now() + this.adminWarningTimeoutMs;
    const dialogData = {
      title: 'Session Expiring',
      message: 'You have been inactive. You will be logged out in:',
      confirmText: 'Stay Logged In',
      cancelText: 'Logout',
      countdown: '05:00'
    };
    this.updateAdminCountdownDisplay(dialogData, logoutTime);
    this.adminDialogRef = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__.ConfirmDialogComponent, {
      data: dialogData,
      disableClose: true
    });
    this.countdownInterval = setInterval(() => {
      const remainingSec = Math.ceil((logoutTime - Date.now()) / 1000);
      if (remainingSec <= 0) {
        this.stopAdminCountdown();
        this.ngZone.run(() => {
          if (this.adminDialogRef) {
            try {
              this.adminDialogRef.close(false);
            } catch (e) {}
          }
          this.doLogout();
        });
      } else {
        this.ngZone.run(() => {
          this.updateAdminCountdownDisplay(dialogData, logoutTime);
        });
      }
    }, 1000);
    this.adminDialogRef.afterClosed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe(stayLoggedIn => {
      this.stopAdminCountdown();
      this.adminDialogRef = null;
      this.promptOpen = false;
      if (stayLoggedIn === true) {
        this.lastActivityAt = Date.now();
        this.tryRefreshToken();
        this.scheduleIdleCheck();
      } else {
        this.doLogout();
      }
    });
  }
  updateAdminCountdownDisplay(dialogData, logoutTime) {
    const remainingSec = Math.max(0, Math.ceil((logoutTime - Date.now()) / 1000));
    const minutes = Math.floor(remainingSec / 60);
    const seconds = remainingSec % 60;
    const mm = minutes < 10 ? '0' + minutes : '' + minutes;
    const ss = seconds < 10 ? '0' + seconds : '' + seconds;
    dialogData.countdown = `${mm}:${ss}`;
  }
  stopAdminCountdown() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
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
    this.http.post(url, payload).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.first)()).subscribe({
      next: res => {
        try {
          if (res && res.token) {
            console.debug('[SessionService] Token refreshed successfully. Updated sessionStorage token:', res.token.substring(0, 8) + '...');
            sessionStorage.setItem('token', res.token);
          }
          if (res && res.user) {
            sessionStorage.setItem('user', JSON.stringify(res.user));
          }
        } catch (e) {}
      },
      error: err => {
        this.refreshInProgress = false;
        if (err && (err.status === 401 || err.status === 403)) {
          const msg = err.error && (err.error.statusMessage || err.error.message) ? err.error.statusMessage || err.error.message : 'Your session could not be renewed. Please log in again.';
          this.ngZone.run(() => this.promptSingleDeviceLogout(msg));
        } else {
          console.warn('Unable to refresh the session; keeping existing login state.', err);
        }
      },
      complete: () => {
        this.refreshInProgress = false;
      }
    });
  }
  recordActivity() {
    if (this.promptOpen || this.isLoggingOut) return;
    this.lastActivityAt = Date.now();
    if (!this.idleTimer) this.scheduleIdleCheck();
  }
  scheduleIdleCheck() {
    if (this.idleTimer) clearTimeout(this.idleTimer);
    if (this.isLoggingOut) return;
    const remainingMs = Math.max(0, this.idleTimeoutMs - (Date.now() - this.lastActivityAt));
    this.idleTimer = setTimeout(() => {
      this.idleTimer = null;
      if (this.isLoggingOut) return;
      if (!this.hasBeenIdleForFifteenMinutes()) {
        this.scheduleIdleCheck();
        return;
      }
      this.ngZone.run(() => {
        if (this.isAdminOrSuperAdmin()) {
          this.promptAdminWarning();
        } else {
          this.promptExtendOrLogout('Your session has expired due to inactivity.');
        }
      });
    }, remainingMs);
  }
  isAdminOrSuperAdmin() {
    try {
      const raw = sessionStorage.getItem('user');
      let role = '';
      if (raw) {
        const user = JSON.parse(raw);
        role = String(user.role || user.user_role || sessionStorage.getItem('userRole') || '').toLowerCase();
      } else {
        const u = this.auth?.currentUserValue;
        if (u) role = String(u.role || u.user_role || '').toLowerCase();
      }
      return ['admin', 'super_admin', 'superadmin', 'super-admin'].includes(role);
    } catch (e) {
      return false;
    }
  }
  hasBeenIdleForFifteenMinutes() {
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
    if (this.isLoggingOut) return;
    this.clearAndRedirect();
  }
  clearAndRedirect() {
    this.isLoggingOut = true;
    this.stopAdminCountdown();
    if (this.idleTimer) clearTimeout(this.idleTimer);
    this.idleTimer = null;
    this.promptOpen = false;
    this.refreshInProgress = false;
    try {
      this.auth.logout();
    } catch (e) {
      try {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('isLogin');
        sessionStorage.removeItem('userRole');
      } catch (e) {}
    }
    this.ngZone.run(() => {
      try {
        this.dialog.closeAll();
      } catch (e) {}
      this.router.navigate(['/login']).then(navigated => {
        if (!navigated) {
          window.location.href = '/login';
        }
      }).catch(() => {
        window.location.href = '/login';
      });
    });
  }
  static {
    this.ɵfac = function SessionService_Factory(t) {
      return new (t || SessionService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_home_service_auth_service__WEBPACK_IMPORTED_MODULE_2__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: SessionService,
      factory: SessionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 546:
/*!****************************************************!*\
  !*** ./src/app/shared/services/sidenav.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SidenavService: () => (/* binding */ SidenavService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 5797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);


class SidenavService {
  get isMobileOpen() {
    return this.isMobileOpenSubject.value;
  }
  constructor() {
    this.isMobileOpenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isMobileOpen$ = this.isMobileOpenSubject.asObservable();
    this.isCollapsedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
    this.isCollapsed$ = this.isCollapsedSubject.asObservable();
    this.isMobileOpen$.subscribe(open => {
      try {
        if (open) {
          document.body.classList.add('mobile-nav-open');
        } else {
          document.body.classList.remove('mobile-nav-open');
        }
      } catch (e) {/* SSR or test guard */}
    });
  }
  get isCollapsed() {
    return this.isCollapsedSubject.value;
  }
  toggleMobile() {
    this.isMobileOpenSubject.next(!this.isMobileOpenSubject.value);
  }
  openMobile() {
    this.isMobileOpenSubject.next(true);
  }
  closeMobile() {
    this.isMobileOpenSubject.next(false);
  }
  toggleCollapse() {
    this.isCollapsedSubject.next(!this.isCollapsedSubject.value);
  }
  setCollapsed(collapsed) {
    this.isCollapsedSubject.next(collapsed);
  }
  static {
    this.ɵfac = function SidenavService_Factory(t) {
      return new (t || SidenavService)();
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: SidenavService,
      factory: SidenavService.ɵfac,
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading/heading.component */ 2893);
/* harmony import */ var _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/unauthorized/unauthorized.component */ 6727);
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ 8709);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/loader/loader.component */ 765);
/* harmony import */ var _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/navbar-main/navbar-main.component */ 4481);
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/side-nav/side-nav.component */ 8277);
/* harmony import */ var _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/top-sticky/top-sticky.component */ 4105);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ 2772);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/directives.module */ 1445);
/* harmony import */ var _guards_permission_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/permission.guard */ 885);
/* harmony import */ var _icons_icon_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/icon.module */ 5594);
/* harmony import */ var _components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/date-range-picker-dialog/date-range-picker-dialog.component */ 7235);
/* harmony import */ var _pipes_localized_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pipes/localized-date.pipe */ 742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7580);





























class SharedModule {
  static {
    this.ɵfac = function SharedModule_Factory(t) {
      return new (t || SharedModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
      type: SharedModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
      providers: [_guards_permission_guard__WEBPACK_IMPORTED_MODULE_8__.PermissionGuard],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__.HeadingComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__.NavbarMainComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__.SideNavComponent, _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__.TopStickyComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule, _icons_icon_module__WEBPACK_IMPORTED_MODULE_9__.IconModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedComponent, _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__.ConfirmDialogComponent, _components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_10__.DateRangePickerDialogComponent, _pipes_localized_date_pipe__WEBPACK_IMPORTED_MODULE_11__.LocalizedDatePipe],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.CommonModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule, _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__.HeadingComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__.NavbarMainComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__.SideNavComponent, _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__.TopStickyComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule, _icons_icon_module__WEBPACK_IMPORTED_MODULE_9__.IconModule],
    exports: [_angular_material_chips__WEBPACK_IMPORTED_MODULE_16__.MatChipsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__.MatIconModule, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_17__.MatSnackBarModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_18__.MatDialogModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__.MatPaginatorModule, _components_heading_heading_component__WEBPACK_IMPORTED_MODULE_0__.HeadingComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__.LoaderComponent, _components_navbar_main_navbar_main_component__WEBPACK_IMPORTED_MODULE_4__.NavbarMainComponent, _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__.SideNavComponent, _components_top_sticky_top_sticky_component__WEBPACK_IMPORTED_MODULE_6__.TopStickyComponent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_20__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInputModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButtonModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_23__.MatTableModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_24__.MatSelectModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_25__.MatSlideToggleModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_26__.MatSortModule, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormsModule, _directives_directives_module__WEBPACK_IMPORTED_MODULE_7__.DirectivesModule, _components_unauthorized_unauthorized_component__WEBPACK_IMPORTED_MODULE_1__.UnauthorizedComponent, _components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_10__.DateRangePickerDialogComponent, _pipes_localized_date_pipe__WEBPACK_IMPORTED_MODULE_11__.LocalizedDatePipe]
  });
})();

/***/ }),

/***/ 3653:
/*!*************************************!*\
  !*** ./src/environments/version.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APP_VERSION: () => (/* binding */ APP_VERSION)
/* harmony export */ });
const APP_VERSION = '1.2.5';

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