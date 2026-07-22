"use strict";
(self["webpackChunkedu_UI"] = self["webpackChunkedu_UI"] || []).push([["src_app_userrole_admin_exam-reports_exam-reports_module_ts"],{

/***/ 6654:
/*!***********************************************************************!*\
  !*** ./src/app/userrole/admin/exam-reports/exam-reports.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamReportsComponent: () => (/* binding */ ExamReportsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/api.config */ 1892);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/loader.service */ 3657);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var src_app_shared_services_page_meta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/page-meta.service */ 3413);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_shared_services_confirm_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/confirm.service */ 5302);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);


























const _c0 = ["filtersBtn"];
const _c1 = ["filtersPanel"];
function ExamReportsComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inst_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", inst_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](inst_r38.name);
  }
}
function ExamReportsComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 72)(1, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const exam_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", exam_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](exam_r39.title || exam_r39.name);
  }
}
function ExamReportsComponent_ng_template_27_mat_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r47.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r47.name, " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", c_r48.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", c_r48.name, " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_27_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cp_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", cp_r49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", cp_r49, " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_34_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", d_r50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", d_r50, " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-option", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r51 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", t_r51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", t_r51, " ");
  }
}
function ExamReportsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 75)(2, "h4")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, " Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 76)(7, "mat-form-field", 77)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-select", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r53.userFilters.country_id = $event);
    })("selectionChange", function ExamReportsComponent_ng_template_27_Template_mat_select_selectionChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r55.onCountryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExamReportsComponent_ng_template_27_mat_option_13_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field", 77)(15, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "mat-select", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_17_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r56.userFilters.city_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ExamReportsComponent_ng_template_27_mat_option_20_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-form-field", 77)(22, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "mat-select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r57.userFilters.campus_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ExamReportsComponent_ng_template_27_mat_option_27_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "mat-form-field", 77)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "mat-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r58.userFilters.department_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](34, ExamReportsComponent_ng_template_27_mat_option_34_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "mat-form-field", 77)(36, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "mat-select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_38_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r59.userFilters.teams_id = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ExamReportsComponent_ng_template_27_mat_option_41_Template, 2, 2, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "mat-form-field", 77)(43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, "Test schedule after");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "input", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r60.userFilters.joined_after = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](46, "mat-datepicker-toggle", 85)(47, "mat-datepicker", null, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "mat-form-field", 77)(50, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Test schedule before");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "input", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_input_ngModelChange_52_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r61.userFilters.joined_before = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](53, "mat-datepicker-toggle", 85)(54, "mat-datepicker", null, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 89)(57, "button", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_button_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      ctx_r62.loadScheduledTest();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r62.closeFiltersOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](58, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "button", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_button_click_60_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r54);
      const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r63.resetFiltersAndReload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](61, "mat-icon", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](48);
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](55);
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.userFilters.country_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.countries);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.userFilters.city_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.cities);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.campusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.userFilters.department_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.departmentList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx_r6.userFilters.teams_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.teamList);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r45)("ngModel", ctx_r6.userFilters.joined_after);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matDatepicker", _r46)("ngModel", ctx_r6.userFilters.joined_before);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("for", _r46);
  }
}
function ExamReportsComponent_div_96_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_96_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r78 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 102)(1, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_96_td_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r78);
      const row_r76 = restoredCtx.$implicit;
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r77.openUserReview(row_r76));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r76 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((row_r76.student_name || row_r76.name || "S").charAt(0).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r76.student_name || row_r76.name || "Student");
  }
}
function ExamReportsComponent_div_96_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Marks / Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_96_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106)(1, "span", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r79 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", row_r79.marks_obtained, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", row_r79.total_marks, "");
  }
}
function ExamReportsComponent_div_96_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_96_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106)(1, "span", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r80.percentage);
  }
}
function ExamReportsComponent_div_96_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Manual Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_96_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106)(1, "span", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r81 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("review-pending", row_r81.manual_review === "pending" || row_r81.manual_review === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r81.manual_review);
  }
}
function ExamReportsComponent_div_96_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_96_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106)(1, "span", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("result-pass", (row_r82.result || "").toLowerCase() === "pass" || (row_r82.result || "").toLowerCase() === "passed")("result-fail", (row_r82.result || "").toLowerCase() === "fail" || (row_r82.result || "").toLowerCase() === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](row_r82.result);
  }
}
function ExamReportsComponent_div_96_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 112);
  }
}
function ExamReportsComponent_div_96_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 113);
  }
}
const _c2 = function () {
  return ["student_name", "questions_attempted", "correct_answers", "wrong_answers", "result"];
};
function ExamReportsComponent_div_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 53)(1, "table", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_96_th_3_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_96_td_4_Template, 6, 2, "td", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](5, 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExamReportsComponent_div_96_th_6_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_96_td_7_Template, 6, 2, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](8, 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_96_th_9_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExamReportsComponent_div_96_td_10_Template, 3, 1, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](11, 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExamReportsComponent_div_96_th_12_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExamReportsComponent_div_96_td_13_Template, 3, 3, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](14, 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ExamReportsComponent_div_96_th_15_Template, 2, 0, "th", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ExamReportsComponent_div_96_td_16_Template, 3, 5, "td", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ExamReportsComponent_div_96_tr_17_Template, 1, 0, "tr", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ExamReportsComponent_div_96_tr_18_Template, 1, 0, "tr", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 99)(20, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_96_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r85);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r84.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "button", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_96_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r85);
      const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r86.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx_r7.userReportData);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r7.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Page ", ctx_r7.currentPage, " of ", ctx_r7.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r7.currentPage >= ctx_r7.totalPages);
  }
}
function ExamReportsComponent_div_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading user report...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_th_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Question Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_152_Template(rf, ctx) {
  if (rf & 1) {
    const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 102)(1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_td_152_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r89);
      const c_r87 = restoredCtx.$implicit;
      const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r88.openCategoryQuestionSummary(c_r87));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const c_r87 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((c_r87.category_name || c_r87.name || "?").charAt(0).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r87.category_name || c_r87.name);
  }
}
function ExamReportsComponent_th_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r90.total_questions || c_r90.questions_count);
  }
}
function ExamReportsComponent_th_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r91 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r91.no_of_students || c_r91.users_attempted);
  }
}
function ExamReportsComponent_th_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r92 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r92.total_attempts);
  }
}
function ExamReportsComponent_th_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_164_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r93 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r93.wrong_answers || c_r93.mistakes || c_r93.wrong_count);
  }
}
function ExamReportsComponent_th_166_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Error %");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_167_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](c_r94.error_percentage || c_r94.error_pct);
  }
}
function ExamReportsComponent_tr_168_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 112);
  }
}
function ExamReportsComponent_tr_169_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 113);
  }
}
function ExamReportsComponent_th_175_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_176_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r96 = ctx.$implicit;
    const i_r97 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", q_r96.sno || i_r97 + 1, " ");
  }
}
function ExamReportsComponent_th_178_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_179_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", q_r98.question_text || q_r98.text, " ");
  }
}
function ExamReportsComponent_th_181_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_182_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r99 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r99.user_attempts);
  }
}
function ExamReportsComponent_th_184_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_185_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r100.attempts);
  }
}
function ExamReportsComponent_th_187_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_td_188_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_td_188_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r105);
      const q_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r103.openWrongAnswerSummary(q_r101));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r101.mistakes);
  }
}
function ExamReportsComponent_td_188_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_td_188_a_1_Template, 2, 1, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r101 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r101.mistakes || 0) > 0);
  }
}
function ExamReportsComponent_tr_189_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 112);
  }
}
function ExamReportsComponent_tr_190_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tr", 113);
  }
}
function ExamReportsComponent_div_191_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Loading review...");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"]("", q_r116.marks_awarded, "/", q_r116.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 3, q_r116.marks_awarded / (q_r116.question_marks || 1) * 100, "1.2-2"), "%)");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r129 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_10_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r129);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r127.toggleManualReview(q_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Manual Check ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", q_r116.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("aria-pressed", !!q_r116.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.manual_review_required ? "check_circle" : "radio_button_unchecked");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "mat-icon", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_10_button_5_Template, 4, 4, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", q_r116.marks_awarded, "/", q_r116.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 5, q_r116.marks_awarded / (q_r116.question_marks || 1) * 100, "1.2-2"), "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", "AI Confidence: " + (q_r116.ai_confidence != null ? q_r116.ai_confidence + "%" : "N/A"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.needs_manual_review);
  }
}
const _c3 = function (a0, a1, a2) {
  return {
    "mark-positive": a0,
    "mark-negative": a1,
    "mark-mid": a2
  };
};
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 162)(1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_1_Template_button_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r136);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r134.startEditMarks(q_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](3, _c3, (q_r116.marks_awarded || 0) == (q_r116.question_marks || 0), (q_r116.marks_awarded || 0) == 0, (q_r116.marks_awarded || 0) > 0 && (q_r116.marks_awarded || 0) < (q_r116.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", q_r116.marks_awarded != null ? q_r116.marks_awarded : 0, "/", q_r116.question_marks != null ? q_r116.question_marks : 0, "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 165)(1, "div", 166)(2, "input", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](q_r116._editedMarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "textarea", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](q_r116._marksEditReason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 170)(7, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r143.saveMarks(q_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template_button_click_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r145.cancelEditMarks(q_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", q_r116._editedMarks)("min", 0)("max", q_r116.question_marks || 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/ ", q_r116.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", q_r116._marksEditReason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !(q_r116._marksEditReason == null ? null : q_r116._marksEditReason.trim()));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_1_Template, 6, 7, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template, 13, 6, "div", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !q_r116._editingMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116._editingMarks);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](3, _c3, (q_r116.marks_awarded || 0) == (q_r116.question_marks || 0), (q_r116.marks_awarded || 0) == 0, (q_r116.marks_awarded || 0) > 0 && (q_r116.marks_awarded || 0) < (q_r116.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", q_r116.marks_awarded != null ? q_r116.marks_awarded : 0, "/", q_r116.question_marks != null ? q_r116.question_marks : 0, "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Correct Answer: ", q_r116.options[0].option_text || q_r116.options[0], "");
  }
}
const _c4 = function () {
  return [];
};
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 173)(1, "div", 174)(2, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_17_div_4_Template, 2, 1, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("selected", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c4)).length)("correct", q_r116.is_correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" Student Answer: ", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c4)).join(", ") || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.marks_awarded === 0);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 206)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "AI evaluation could not be completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_12_Template_button_click_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r162);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const att_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r160.retryEvaluation(q_r116, att_r114));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.evaluation_error);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", q_r116._retryingEvaluation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r116._retryingEvaluation ? "Retrying\u2026" : "Retry evaluation", " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r167 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 209)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "AI evaluation is not available for this answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r167);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const att_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r165.retryEvaluation(q_r116, att_r114));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", q_r116._retryingEvaluation);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", q_r116._retryingEvaluation ? "Evaluating\u2026" : "Run evaluation", " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 210)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "High-level Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.feedback || "No high-level feedback was returned for this answer.");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No missed points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 232)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const rc_r177 = ctx_r193.$implicit;
    const rci_r178 = ctx_r193.index;
    const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r177.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r178 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r186.is_deleted == 1 || h_r186.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r188.toTitleCase(h_r186.comment_text || h_r186.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 236)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r197);
      const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](h_r186._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const rci_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r178 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", h_r186._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", h_r186.updated_by || h_r186.created_by || h_r186.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", h_r186.updated_by || h_r186.created_by, " On ", h_r186.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r208);
      const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r206 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r206.startEditComment(h_r186));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r211);
      const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r209.confirmDeleteComment(h_r186));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r214);
      const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r212.saveReviewComment(h_r186));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r217);
      const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r215.cancelEditComment(h_r186));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_1_Template, 4, 0, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_2_Template, 4, 0, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_3_Template, 4, 0, "a", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_a_4_Template, 4, 0, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r186._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r186._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r186._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r186._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_2_Template, 6, 6, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_3_Template, 5, 2, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_span_5_Template, 2, 1, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_span_6_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_div_7_Template, 5, 4, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r186 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r186.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r186._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r186._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r186.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r186.is_deleted != 1 && (h_r186.updated_by || h_r186.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r186.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_div_1_Template, 8, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rc_r177.history);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 232)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rc_r177 = ctx_r220.$implicit;
    const rci_r178 = ctx_r220.index;
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r177.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r178 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r177.is_deleted == 1 || rc_r177.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r180.toTitleCase(rc_r177.comment_text || rc_r177.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r223 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 236)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r223);
      const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r177._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rci_r178 = ctx_r224.index;
    const rc_r177 = ctx_r224.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r178 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r177._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", rc_r177.updated_by || rc_r177.created_by || rc_r177.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", rc_r177.updated_by || rc_r177.created_by, " On ", rc_r177.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r233 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r233);
      const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r231.startEditComment(rc_r177));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r236 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r236);
      const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r234.confirmDeleteComment(rc_r177));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r239 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r239);
      const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r237.saveReviewComment(rc_r177));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r242);
      const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r240.cancelEditComment(rc_r177));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_1_Template, 4, 0, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_2_Template, 4, 0, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_3_Template, 4, 0, "a", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_a_4_Template, 4, 0, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r177._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r177._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r177._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r177._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 222)(2, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_3_Template, 2, 1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_4_Template, 6, 6, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_5_Template, 5, 2, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_span_7_Template, 2, 1, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_span_8_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_div_9_Template, 5, 4, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r177 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r177.history && rc_r177.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r177._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r177._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r177.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r177.is_deleted != 1 && (rc_r177.updated_by || rc_r177.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r177.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No incorrect points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 232)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const h_r254 = ctx_r261.$implicit;
    const hi_r255 = ctx_r261.index;
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r254.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](hi_r255 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r254.is_deleted == 1 || h_r254.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r256.toTitleCase(h_r254.comment_text || h_r254.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 236)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r264);
      const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](h_r254._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const rci_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r245 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", h_r254._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", h_r254.updated_by || h_r254.created_by || h_r254.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", h_r254.updated_by || h_r254.created_by, " On ", h_r254.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r275);
      const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r273.startEditComment(h_r254));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r278 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r278);
      const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r276.confirmDeleteComment(h_r254));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r281);
      const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r279.saveReviewComment(h_r254));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r284 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r284);
      const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r282.cancelEditComment(h_r254));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_1_Template, 4, 0, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_2_Template, 4, 0, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_3_Template, 4, 0, "a", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_a_4_Template, 4, 0, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r254._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r254._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r254._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r254._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_2_Template, 6, 6, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_3_Template, 5, 2, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_span_5_Template, 2, 1, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_span_6_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_div_7_Template, 5, 4, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r254 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r254.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r254._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r254._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r254.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r254.is_deleted != 1 && (h_r254.updated_by || h_r254.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r254.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_div_1_Template, 8, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rc_r244.history);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 251)(1, "div", 233)(2, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rc_r244 = ctx_r287.$implicit;
    const rci_r245 = ctx_r287.index;
    const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r244.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r245 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r244.is_deleted == 1 || rc_r244.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r247.toTitleCase(rc_r244.comment_text || rc_r244.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r290 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 253)(1, "div", 233)(2, "span", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r290);
      const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r244._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "textarea", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_5_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r290);
      const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r244._editReason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rci_r245 = ctx_r293.index;
    const rc_r244 = ctx_r293.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r245 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r244._editedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r244._editReason);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", rc_r244.updated_by || rc_r244.reviewer_id || rc_r244.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", rc_r244.edited_by || rc_r244.updated_by, " ", ctx_r250.formatDate(rc_r244.edited_at || rc_r244.updated_date), "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Reason: ", rc_r244.edit_reason, "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r303);
      const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r301.startEditComment(rc_r244));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r306 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r306);
      const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r304.confirmDeleteComment(rc_r244));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r309 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r309);
      const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r307.saveReviewComment(rc_r244));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r299.requiresEditReason(rc_r244) && !(rc_r244._editReason == null ? null : rc_r244._editReason.trim()));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r313);
      const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r311.cancelEditComment(rc_r244));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_1_Template, 4, 0, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_2_Template, 4, 0, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_3_Template, 4, 2, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_a_4_Template, 4, 0, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r244._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r244._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r244._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r244._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 222)(2, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_3_Template, 2, 1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_4_Template, 6, 6, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_5_Template, 6, 3, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_span_7_Template, 2, 1, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_span_8_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_span_9_Template, 2, 1, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_div_10_Template, 5, 4, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r244 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r244.history && rc_r244.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r244._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r244._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r244.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r244.is_deleted != 1 && (rc_r244.edited_by || rc_r244.updated_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r244.edit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r244.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No incomplete points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 232)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r332 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const h_r325 = ctx_r332.$implicit;
    const hi_r326 = ctx_r332.index;
    const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r325.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](hi_r326 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r325.is_deleted == 1 || h_r325.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r327.toTitleCase(h_r325.comment_text || h_r325.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 236)(1, "div", 233)(2, "span", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r335);
      const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](h_r325._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const rci_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r316 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", h_r325._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", h_r325.updated_by || h_r325.created_by || h_r325.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", h_r325.updated_by || h_r325.created_by, " On ", h_r325.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r346);
      const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r344 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r344.startEditComment(h_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r349);
      const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r347.confirmDeleteComment(h_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r352 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r352);
      const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r350.saveReviewComment(h_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r355 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r355);
      const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r353.cancelEditComment(h_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_1_Template, 4, 0, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_2_Template, 4, 0, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_3_Template, 4, 0, "a", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_a_4_Template, 4, 0, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r325._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_2_Template, 6, 6, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_3_Template, 5, 2, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_span_5_Template, 2, 1, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_span_6_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_div_7_Template, 5, 4, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r325 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r325.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r325.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r325.is_deleted != 1 && (h_r325.updated_by || h_r325.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r325.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_div_1_Template, 8, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rc_r315.history);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 259)(1, "div", 233)(2, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rc_r315 = ctx_r358.$implicit;
    const rci_r316 = ctx_r358.index;
    const ctx_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r315.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r316 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r315.is_deleted == 1 || rc_r315.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r318.toTitleCase(rc_r315.comment_text || rc_r315.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_5_textarea_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r362 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "textarea", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_5_textarea_5_Template_textarea_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r362);
      const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r315._editReason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r315._editReason);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 261)(1, "div", 233)(2, "span", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r366);
      const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r315._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_5_textarea_5_Template, 1, 1, "textarea", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rci_r316 = ctx_r367.index;
    const rc_r315 = ctx_r367.$implicit;
    const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r316 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r315._editedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r319.requiresEditReason(rc_r315));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", rc_r315.updated_by || rc_r315.reviewer_id || rc_r315.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", rc_r315.edited_by || rc_r315.updated_by, " ", ctx_r321.formatDate(rc_r315.edited_at || rc_r315.updated_date), "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Reason: ", rc_r315.edit_reason, "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r377 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r377);
      const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r375.startEditComment(rc_r315));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r380);
      const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r378.confirmDeleteComment(rc_r315));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r383);
      const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r381.saveReviewComment(rc_r315));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r373.requiresEditReason(rc_r315) && !(rc_r315._editReason == null ? null : rc_r315._editReason.trim()));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r387);
      const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r385.cancelEditComment(rc_r315));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_1_Template, 4, 0, "a", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_2_Template, 4, 0, "a", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_3_Template, 4, 2, "a", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_a_4_Template, 4, 0, "a", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r315._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r315._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r315._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r315._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 222)(2, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_3_Template, 2, 1, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_4_Template, 6, 6, "div", 257);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_5_Template, 6, 3, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_span_7_Template, 2, 1, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_span_8_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_span_9_Template, 2, 1, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_div_10_Template, 5, 4, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r315 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r315.history && rc_r315.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r315._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r315._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r315.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r315.is_deleted != 1 && (rc_r315.edited_by || rc_r315.updated_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r315.edit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r315.updated_by);
  }
}
const _c5 = function () {
  return ["incorrct", "incorrect", "incor"];
};
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 211)(1, "div", 212)(2, "div", 213)(3, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Points Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_7_Template, 2, 0, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_8_Template, 10, 6, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 217)(10, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Points Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_14_Template, 2, 0, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_15_Template, 11, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 219)(17, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "span", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Points Incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_21_Template, 2, 0, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_div_22_Template, 11, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r156.reviewComments(q_r116, "missing").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r156.reviewComments(q_r116, "missing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r156.reviewComments(q_r116, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](6, _c5)).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r156.reviewComments(q_r116, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](7, _c5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r156.reviewComments(q_r116, "incomplete").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r156.reviewComments(q_r116, "incomplete"));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 263);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 264)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.updated_date);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 263);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_41_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 269)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Reason:");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mh_r391 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", mh_r391.edit_reason, "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 265)(1, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_41_div_3_Template, 1, 0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 197)(5, "div", 267)(6, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 202)(11, "span", 203)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 264)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_41_div_19_Template, 4, 1, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const mh_r391 = ctx.$implicit;
    const isLast_r393 = ctx.last;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !isLast_r393);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", mh_r391.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/ ", q_r116.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mh_r391.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mh_r391.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", mh_r391.edit_reason);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 178)(1, "div", 179)(2, "div", 180)(3, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Student's Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 183)(8, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Model Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_12_Template, 8, 3, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_Template, 6, 2, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_14_Template, 5, 1, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_15_Template, 23, 8, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 190)(17, "div", 191)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Marks History");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 192)(23, "div", 193)(24, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_26_Template, 1, 0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 197)(28, "div", 198)(29, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 202)(36, "span", 203)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](40, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_span_40_Template, 4, 1, "span", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_41_Template, 20, 6, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](12, _c4)).join(" ") || "No answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.correct_option || q_r116.options && q_r116.options[0] && (q_r116.options[0].option_text || q_r116.options[0]) || q_r116.correct_answer || "No model answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.evaluation_status === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.evaluation_status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.question_type || q_r116.type) === "descriptive" && q_r116.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.question_type || q_r116.type) === "descriptive" && q_r116.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.marks_history && q_r116.marks_history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", q_r116.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/ ", q_r116.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", q_r116.marks_history);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Student Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_1_Template, 2, 0, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_2_Template, 2, 0, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_3_Template, 2, 0, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4)).indexOf(opt_r400.option_text || opt_r400) !== -1 && !(opt_r400.is_correct == 1 || opt_r400.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c4)).indexOf(opt_r400.option_text || opt_r400) !== -1 && (opt_r400.is_correct == 1 || opt_r400.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", opt_r400.is_correct && (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c4)).indexOf(opt_r400.option_text || opt_r400) === -1);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Student Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Missed Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_1_Template, 2, 0, "span", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_2_Template, 2, 0, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_3_Template, 2, 0, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4)).indexOf(opt_r400.option_text || opt_r400) !== -1 && (opt_r400.is_correct == 1 || opt_r400.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c4)).indexOf(opt_r400.option_text || opt_r400) !== -1 && !(opt_r400.is_correct == 1 || opt_r400.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", opt_r400.is_correct && (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c4)).indexOf(opt_r400.option_text || opt_r400) === -1);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 272)(1, "div", 273)(2, "span", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 275)(5, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_Template, 4, 6, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_Template, 4, 6, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r400 = ctx.$implicit;
    const oi_r401 = ctx.index;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r399 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("correct", opt_r400.is_correct == 1 || opt_r400.is_correct === true)("selected", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c4)).indexOf(opt_r400.option_text || opt_r400) !== -1)("missed", opt_r400.is_correct && (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c4)).indexOf(opt_r400.option_text || opt_r400) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r399.getOptionLetter(oi_r401));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](opt_r400.option_text || opt_r400);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.question_type == "choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.question_type == "multi");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_Template, 9, 12, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", q_r116.options || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c4));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 140)(1, "div", 141)(2, "div", 142)(3, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 144)(6, "div", 145)(7, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_9_Template, 3, 6, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_10_Template, 6, 8, "div", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 148)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_Template, 3, 2, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_16_Template, 2, 7, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_17_Template, 5, 8, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_Template, 42, 13, "div", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_Template, 2, 2, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r116 = ctx.$implicit;
    const qi_r117 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.sno || q_r116.qno ? q_r116.sno || q_r116.qno : qi_r117 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((q_r116.question_type || q_r116.type || "").toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.question_type != "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.question_type === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.question_text || q_r116.text || q_r116.title || "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.question_type || q_r116.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.question_type || q_r116.type) !== "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.question_type || q_r116.type) === "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.question_type || q_r116.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.question_type || q_r116.type) == "choose" || (q_r116.question_type || q_r116.type) == "multi");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_Template, 20, 10, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const att_r114 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", att_r114.review || att_r114.questions || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](1, _c4));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_Template, 3, 2, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r110.userReviewAttempts);
  }
}
function ExamReportsComponent_div_191_div_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No review data available for this user.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_Template, 2, 1, "div", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_ng_template_2_Template, 2, 0, "ng-template", null, 136, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r109.userReviewAttempts && ctx_r109.userReviewAttempts.length)("ngIfElse", _r111);
  }
}
const _c6 = function (a0, a1) {
  return {
    "pass": a0,
    "fail": a1
  };
};
function ExamReportsComponent_div_191_Template(rf, ctx) {
  if (rf & 1) {
    const _r417 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r417);
      const ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r416.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 121)(3, "div", 122)(4, "div", 123)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 124)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h3")(11, "span", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r417);
      const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r419.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "mat-icon", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ExamReportsComponent_div_191_div_19_Template, 2, 0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](20, ExamReportsComponent_div_191_div_20_Template, 4, 2, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 132)(22, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r417);
      const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r420.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Answer Sheet - ", ctx_r35.selectedUserName || "User", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Score: ", ctx_r35.selectedUserScore || "-", " / ", ctx_r35.totalMarks || "-", " \u00A0|\u00A0Result: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c6, (ctx_r35.selectedUserResult || "").toLowerCase() === "pass", (ctx_r35.selectedUserResult || "").toLowerCase() === "fail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r35.selectedUserResult || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r35.userReviewLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r35.userReviewLoading);
  }
}
function ExamReportsComponent_div_192_div_17_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 291)(2, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_div_17_tr_13_Template_a_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r426);
      const wa_r424 = restoredCtx.$implicit;
      const ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r425.openResourcesForWrongAnswer(ctx_r425.selectedQuestionForWrongSummary, wa_r424));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 293)(5, "a", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_div_17_tr_13_Template_a_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r426);
      const wa_r424 = restoredCtx.$implicit;
      const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r427.openResourcesForWrongAnswer(ctx_r427.selectedQuestionForWrongSummary, wa_r424));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wa_r424 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](wa_r424.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](wa_r424.count || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](wa_r424.pct || "-");
  }
}
function ExamReportsComponent_div_192_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No wrong answer data available for this question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_192_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 290)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Wrong Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "No. of times selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Occurrence %");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExamReportsComponent_div_192_div_17_tr_13_Template, 9, 3, "tr", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, ExamReportsComponent_div_192_div_17_div_14_Template, 2, 0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 132)(16, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_div_17_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r429);
      const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r428.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question: ", ctx_r421.selectedQuestionForWrongSummary.question_text || ctx_r421.selectedQuestionForWrongSummary.text || ctx_r421.selectedQuestionForWrongSummary.name || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r421.selectedWrongAnswers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r421.selectedWrongAnswers || !ctx_r421.selectedWrongAnswers.length);
  }
}
function ExamReportsComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    const _r431 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r431);
      const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r430.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 121)(3, "div", 122)(4, "div", 124)(5, "div", 123)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "rule_folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 286)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Wrong Answer Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Details for selected question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r431);
      const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r433.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ExamReportsComponent_div_192_div_17_Template, 18, 3, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r36.selectedQuestionForWrongSummary);
  }
}
function ExamReportsComponent_div_193_div_17_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r437 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r437.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r437.email || "");
  }
}
function ExamReportsComponent_div_193_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ul", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_193_div_17_li_2_Template, 5, 2, "li", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r434 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r434.selectedResources);
  }
}
function ExamReportsComponent_div_193_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "No resources linked for this wrong answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_193_Template(rf, ctx) {
  if (rf & 1) {
    const _r439 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_193_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r439);
      const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r438.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_193_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 121)(3, "div", 122)(4, "div", 124)(5, "div", 123)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "folder_shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 286)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Resources related to the selected wrong answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_193_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r439);
      const ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r441.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, ExamReportsComponent_div_193_div_17_Template, 3, 1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ExamReportsComponent_div_193_div_18_Template, 2, 0, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 132)(20, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_193_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r439);
      const ctx_r442 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r442.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r37.selectedResources && ctx_r37.selectedResources.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r37.selectedResources || !ctx_r37.selectedResources.length);
  }
}
const _c7 = function () {
  return ["category", "questions", "users_attempted", "total_attempts", "mistakes", "error_pct"];
};
const _c8 = function () {
  return ["sno", "question", "user_attempts", "attempts", "mistakes"];
};
class ExamReportsComponent {
  get totalPages() {
    return Math.max(1, Math.ceil((this.userReportTotal || 0) / this.pageSize));
  }
  get userAverageScore() {
    const scores = (this.userReportData || []).map(row => this.toMetricNumber(row.marks_obtained ?? row.score ?? row.marks)).filter(value => value > 0);
    return scores.length ? scores.reduce((sum, value) => sum + value, 0) / scores.length : 0;
  }
  get userPassRate() {
    const rows = this.userReportData || [];
    const passed = rows.filter(row => String(row.result || row.status || '').toLowerCase() === 'pass').length;
    return rows.length ? passed / rows.length * 100 : 0;
  }
  get analyticsTotalAttempts() {
    return (this.categoryAnalytics || []).reduce((sum, item) => sum + this.toMetricNumber(item.total_attempts ?? item.attempts), 0);
  }
  get analyticsMistakeCount() {
    return (this.categoryAnalytics || []).reduce((sum, item) => sum + this.toMetricNumber(item.wrong_answers ?? item.mistakes ?? item.wrong_count), 0);
  }
  get activeQuestionCount() {
    return (this.filteredQuestionSummary && this.filteredQuestionSummary.length ? this.filteredQuestionSummary : this.questionSummary || []).length;
  }
  /**
   * Open question summary filtered to a specific category. If analytics data isn't loaded yet,
   * request it first and apply a pending filter.
   */
  openCategoryQuestionSummary(category) {
    if (!category) return;
    const cid = String(category.category_id || category.id || category._id || category.categoryId || '');
    if (!cid) return;
    // ensure main tab is analytics
    this.activeMainTabIndex = 1;
    // if question summary already loaded, filter immediately
    if (this.questionSummary && this.questionSummary.length) {
      this.filteredQuestionSummary = (this.questionSummary || []).filter(q => this._getQuestionCategoryId(q) === cid);
      this.innerAnalyticsTabIndex = 1; // switch inner tab to Question Summary
      return;
    }
    // otherwise, request analytics and apply filter after load
    this._pendingCategoryFilter = cid;
    this.loadAnalytics();
  }
  constructor(http, loading, overlay, vcr, pageMeta, _snack, confirm) {
    this.http = http;
    this.loading = loading;
    this.overlay = overlay;
    this.vcr = vcr;
    this.pageMeta = pageMeta;
    this._snack = _snack;
    this.confirm = confirm;
    this.reportsApplied = false;
    this.appliedFilters = null;
    this.categoryAnalytics = [];
    this.questionSummary = [];
    this.filteredQuestionSummary = [];
    this.wrongDistribution = [];
    // wrong answer modal state
    this.showWrongAnswerSummary = false;
    this.selectedQuestionForWrongSummary = null;
    this.selectedWrongAnswers = [];
    // resources modal state
    this.showResourcePanel = false;
    this.selectedResources = [];
    this.selectedResourceContext = null; // { question, wrongAnswer }
    // user report state
    this.userReportData = [];
    this.userReportTotal = 0;
    // user review panel state
    this.showUserReviewPanel = false;
    this.userReviewAttempts = [];
    this.userReviewLoading = false;
    this.selectedUserName = null;
    this.selectedUserScore = null;
    this.selectedUserResult = null;
    this.currentReviewParams = null;
    this.totalQuestions = null;
    this.totalMarks = null;
    this.pageSize = 25;
    this.currentPage = 1;
    this.searchQuery = '';
    this.commentEdit = false;
    this.updatedBy = '';
    // placeholders for template bindings
    this.examCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.instituteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('');
    this.filteredInstitutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
    this.allTests = [];
    this.selectedExam = null;
    this.activeMainTabIndex = 0;
    this.innerAnalyticsTabIndex = 0;
    this.userFilterOpen = false;
    this.userFilters = {
      department_id: '',
      teams_id: '',
      country_id: '',
      city_id: '',
      campus_id: ''
    };
    this.countries = [];
    this.cities = [];
    this.campusList = [];
    this.departmentList = [];
    this.teamList = [];
    this.institutes = [];
    this.selectedInstituteId = null;
    // simple pagination controls without MatPaginator binding
    this.loadingUserReport = false;
    this.filtersOverlayRef = null;
    this._subs = null;
    this.resetFilters = {};
    this._pendingCategoryFilter = null;
  }
  // Robustly extract a category id from different question shapes.
  _getQuestionCategoryId(q) {
    if (!q) return '';
    // If question has a nested `category` object, try common id fields
    const cat = q.category;
    if (cat && typeof cat === 'object') {
      return String(cat.id || cat._id || cat.category_id || cat.categoryId || cat.cat_id || '').trim();
    }
    // If category_id is an array, take first element
    if (Array.isArray(q.category_id) && q.category_id.length) return String(q.category_id[0]).trim();
    // Try several flat fields
    return String(q.category_id ?? q.category ?? q.categoryId ?? q.cat_id ?? q.catId ?? '').trim();
  }
  toMetricNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  // Normalize selected_option into an array of trimmed strings.
  _normalizeSelectedOption(selected) {
    try {
      if (!selected && selected !== 0) return [];
      if (Array.isArray(selected)) {
        // flatten items that might be comma-separated strings
        return selected.flatMap(it => {
          if (typeof it === 'string') return it.split(',').map(s => s.trim()).filter(Boolean);
          return [String(it)];
        });
      }
      if (typeof selected === 'string') {
        return selected.split(',').map(s => s.trim()).filter(Boolean);
      }
      // fallback to single value
      return [String(selected)];
    } catch (e) {
      return [];
    }
  }
  // Return review comments for a question filtered by one or more categories.
  // `categories` can be a string or an array of strings. Comparison is case-insensitive.
  reviewComments(q, categories) {
    try {
      const comments = q && q.review_comment && Array.isArray(q.review_comment.comments) ? q.review_comment.comments : [];
      if (!comments || !comments.length) return [];
      const cats = Array.isArray(categories) ? categories.map(String) : [String(categories)];
      const normalized = cats.map(c => (c || '').toString().toLowerCase());
      return (comments || []).filter(c => normalized.includes((c && c.category || '').toString().toLowerCase()));
    } catch (e) {
      return [];
    }
  }
  // Open user review by calling backend API /review-user-exam
  openUserReview(row) {
    if (!row) return;
    // set header fields used in template
    try {
      this.selectedUserName = row.student_name || row.name || row.user_name || row.full_name || null;
      this.selectedUserScore = row.marks_obtained ?? row.score ?? row.marks ?? null;
      this.selectedUserResult = row.result ?? row.status ?? null;
      this.totalQuestions = row.total_questions || row.total || null;
      this.totalMarks = row.total_marks || row.totalMarks || null;
    } catch (e) {
      this.selectedUserName = null;
      this.selectedUserScore = null;
      this.selectedUserResult = null;
      this.totalQuestions = null;
      this.totalMarks = null;
    }
    const userId = row.user_id || row.student_id || row.id || row.userId || null;
    const scheduleId = String(this.selectedExam?.schedule_id || this.selectedExam?.id || this.selectedExam?.scheduleId || '');
    if (!userId || !scheduleId) return;
    const params = {
      user_id: String(userId),
      scheduler_id: scheduleId
    };
    this.currentReviewParams = params;
    // if browser is offline, show a retry snackbar instead of firing the request
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      const snack = this._snack.open('You appear to be offline. Retry?', 'Retry', {
        duration: 10000
      });
      snack.onAction().subscribe(() => this.fetchUserReview(params));
      return;
    }
    this.fetchUserReview(params);
  }
  retryEvaluation(q, attempt) {
    const attemptId = attempt?.attempt_id;
    if (!attemptId || q?._retryingEvaluation) return;
    q._retryingEvaluation = true;
    this.http.post(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/validate-answers/${attemptId}`, {}).subscribe({
      next: res => {
        const message = res?.status === false ? res?.statusMessage || 'AI evaluation could not be completed.' : 'AI evaluation completed.';
        this._snack.open(message, 'Close', {
          duration: res?.status === false ? 5000 : 3000
        });
        if (this.currentReviewParams) this.fetchUserReview(this.currentReviewParams);
      },
      error: err => {
        q._retryingEvaluation = false;
        const message = err?.error?.statusMessage || 'AI evaluation could not be completed.';
        this._snack.open(message, 'Close', {
          duration: 5000
        });
      }
    });
  }
  fetchUserReview(params) {
    this.userReviewLoading = true;
    this.loading.show();
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/review-user-exam`, {
      params
    }).subscribe({
      next: res => {
        try {
          const body = res || {};
          // backend returns { data: [ attemptObj, ... ] }
          let attempts = [];
          if (Array.isArray(body.data)) {
            attempts = body.data;
          } else if (Array.isArray(body)) {
            attempts = body;
          } else if (Array.isArray(body?.data?.data)) {
            attempts = body.data.data;
          } else if (Array.isArray(body?.attempts)) {
            attempts = body.attempts;
          }
          // normalize each attempt: ensure review/questions array exists and normalize selected options
          this.userReviewAttempts = (attempts || []).map(a => {
            const reviewList = a.review || a.questions || a.attempt_review || [];
            const normalizedReview = (Array.isArray(reviewList) ? reviewList : []).map(q => {
              try {
                // normalize selected_option into array of values
                q.selected_option = this._normalizeSelectedOption(q.selected_option || q.selected_options || q.selected || []);
                // also ensure options is an array
                if (!Array.isArray(q.options) && q.options && typeof q.options === 'object') {
                  // sometimes options come as an object map, convert to array
                  q.options = Object.keys(q.options).map(k => q.options[k]);
                }
              } catch (e) {}
              return q;
            });
            return {
              ...a,
              review: normalizedReview
            };
          });
          // If total marks not set from the row, try to take it from the first attempt returned
          if ((this.totalMarks === null || this.totalMarks === undefined) && this.userReviewAttempts && this.userReviewAttempts.length) {
            const first = this.userReviewAttempts[0] || {};
            this.totalMarks = first.total_marks ?? first.totalMarks ?? first.total ?? null;
            // also set selectedUserScore fallback if not available from the row
            if ((this.selectedUserScore === null || this.selectedUserScore === undefined) && (first.score || first.marks || first.marks_obtained || first.percentage !== undefined)) {
              this.selectedUserScore = first.score ?? first.marks ?? first.marks_obtained ?? null;
            }
            // ensure totalQuestions if missing
            if ((this.totalQuestions === null || this.totalQuestions === undefined) && (first.total_questions || first.totalQuestions || first.totalQuestionsCount)) {
              this.totalQuestions = first.total_questions ?? first.totalQuestions ?? null;
            }
          }
        } catch (e) {
          console.warn('Failed to parse review-user-exam response', e);
          this.userReviewAttempts = [];
        }
        this.loading.hide();
        this.userReviewLoading = false;
        if (!this.userReviewAttempts || !this.userReviewAttempts.length) {
          this._snack.open('No review data available for this user.', 'Close', {
            duration: 4000
          });
          this.showUserReviewPanel = false;
        } else {
          this.showUserReviewPanel = true;
        }
      },
      error: err => {
        console.error('[TestReports] review-user-exam failed', err);
        this.userReviewLoading = false;
        this.userReviewAttempts = [];
        if (err && err.status === 0) {
          const snack = this._snack.open('Network or server unreachable — check backend and network.', 'Retry', {
            duration: 8000
          });
          snack.onAction().subscribe(() => {
            // retry once
            this.fetchUserReview(params);
          });
        } else {
          const msg = err && err.error && err.error.statusMessage ? err.error.statusMessage : err && err.message ? err.message : 'Failed to load review data.';
          this._snack.open(msg, 'Close', {
            duration: 5000
          });
        }
        this.showUserReviewPanel = false;
        this.loading.hide();
      }
    });
  }
  closeUserReview() {
    this.showUserReviewPanel = false;
    this.userReviewAttempts = [];
    this.selectedUserName = null;
    this.selectedUserScore = null;
    this.selectedUserResult = null;
    this.totalQuestions = null;
    this.totalMarks = null;
  }
  // Marks editing helpers for descriptive questions
  startEditMarks(q) {
    if (!q) return;
    q._editingMarks = true;
    q._editedMarks = q.marks_awarded ?? 0;
    q._marksEditReason = '';
  }
  cancelEditMarks(q) {
    if (!q) return;
    q._editingMarks = false;
    q._editedMarks = undefined;
    q._marksEditReason = undefined;
  }
  saveMarks(q, row) {
    if (!q) return;
    const newMarks = parseFloat(q._editedMarks);
    if (isNaN(newMarks) || newMarks < 0) {
      this._snack.open('Please enter a valid mark value', 'Close', {
        duration: 3000
      });
      return;
    }
    const maxMarks = q.question_marks || q.marks || 0;
    if (newMarks > maxMarks) {
      this._snack.open(`Marks cannot exceed ${maxMarks}`, 'Close', {
        duration: 3000
      });
      return;
    }
    const editReason = String(q._marksEditReason || '').trim();
    if (!editReason) {
      this._snack.open('Please enter a reason for changing the marks', 'Close', {
        duration: 3000
      });
      return;
    }
    // Get required IDs
    const answerID = q.answer_id || null;
    // Get user ID from current context
    const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
    let updatedBy = '';
    let updatedByName = 'System';
    if (raw) {
      const u = JSON.parse(raw);
      updatedBy = u.user_id || u.id || u.userId || u._id || '';
      updatedByName = u.full_name || u.fullName || u.name || u.user_name || updatedBy || 'System';
    }
    if (!answerID) {
      console.warn('[saveMarks] Missing answer ID:', {
        answerID
      });
      this._snack.open('Missing answer ID', 'Close', {
        duration: 3000
      });
      return;
    }
    const payload = {
      answer_id: String(answerID),
      marks_awarded: newMarks,
      updated_by: updatedBy,
      edit_reason: editReason
    };
    this.loading.show();
    this.http.post(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/update-descriptive-marks`, payload).subscribe({
      next: res => {
        this.loading.hide();
        // Update local state
        const oldMarks = q.marks_awarded || 0;
        q.marks_history = Array.isArray(q.marks_history) ? q.marks_history : [];
        q.marks_history.unshift({
          marks_awarded: oldMarks,
          updated_by: q.updated_by || 'System',
          updated_date: q.updated_date,
          edit_reason: editReason
        });
        q.marks_awarded = newMarks;
        q.updated_by = updatedByName;
        q.updated_date = new Date().toUTCString();
        q._editingMarks = false;
        q._editedMarks = undefined;
        q._marksEditReason = undefined;
        // Update total score if available
        if (this.selectedUserScore !== null && typeof this.selectedUserScore === 'number') {
          this.selectedUserScore = this.selectedUserScore - oldMarks + newMarks;
        }
        this._snack.open('Marks updated successfully', 'Close', {
          duration: 3000
        });
      },
      error: err => {
        this.loading.hide();
        console.error('Failed to update marks', err);
        const msg = err?.error?.statusMessage || err?.message || 'Failed to update marks.';
        this._snack.open(msg, 'Close', {
          duration: 5000
        });
      }
    });
  }
  // Begin review comment editing helpers
  startEditComment(rc) {
    if (!rc) return;
    // mark this comment as being edited and store original text
    rc._editing = true;
    rc._editedText = rc.comment_text || rc.comment || '';
    rc._editReason = '';
    this.commentEdit = true;
  }
  cancelEditComment(rc) {
    if (!rc) return;
    rc._editing = false;
    rc._editedText = undefined;
    rc._editReason = undefined;
    // if no other comment is being edited, clear global flag
    this.commentEdit = !!this.userReviewAttempts?.some(att => (att.review || []).some(q => (q.review_comment?.comments || []).some(c => c._editing)));
  }
  saveReviewComment(rc) {
    if (!rc) return;
    const newText = (rc._editedText || '').toString().trim();
    if (newText.length === 0) {
      this._snack.open('Comment cannot be empty', 'Close', {
        duration: 3000
      });
      return;
    }
    const reason = (rc._editReason || '').toString().trim();
    if (this.requiresEditReason(rc) && !reason) {
      this._snack.open('Reason for change is required', 'Close', {
        duration: 3000
      });
      return;
    }
    this.updateReviewComment('edit', rc, newText, reason);
  }
  requiresEditReason(rc) {
    const category = String(rc?.category || '').toLowerCase();
    return ['incorrct', 'incorrect', 'incor', 'incomplete'].includes(category);
  }
  confirmDeleteComment(rc) {
    if (!rc) return;
    this.confirm.confirm({
      title: 'Delete comment',
      message: 'Are you sure you want to delete this review comment?'
    }).subscribe(confirmed => {
      if (confirmed) this.updateReviewComment('delete', rc, rc._editedText || rc.comment_text || rc.comment || '');
    });
  }
  updateReviewComment(action, rc, text, editReason = '') {
    if (!rc) return;
    const commentId = rc.comment_id || rc.id || rc._id || rc.commentId || rc.cid || null;
    if (!commentId) {
      this._snack.open('Comment id not found', 'Close', {
        duration: 3000
      });
      return;
    }
    const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user');
    // history_id required for delete action
    const historyId = rc.history_id || rc.hid || rc._hid || null;
    if (raw) {
      const u = JSON.parse(raw);
      this.updatedBy = u.user_id || u.id || u.userId || u._id || '';
    }
    const payload = {
      comment_id: String(commentId),
      history_id: historyId ? String(historyId) : '',
      text: text || '',
      updated_by: this.updatedBy,
      edit_reason: editReason
    };
    this.loading.show();
    this.http.post(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/update-review-comments/${action}`, payload).subscribe({
      next: res => {
        this.loading.hide();
        // apply changes locally
        if (action === 'edit') {
          rc.comment_text = text;
          rc.updated_by = this.updatedBy;
          rc.edited_by = this.updatedBy;
          rc.edited_at = new Date().toISOString();
          rc.edit_reason = editReason;
          rc._editing = false;
          rc._editedText = undefined;
          rc._editReason = undefined;
          this._snack.open('Comment updated', 'Close', {
            duration: 3000
          });
        } else if (action === 'delete') {
          rc.is_deleted = 1;
          rc.updated_by = this.updatedBy;
          this._snack.open('Comment deleted', 'Close', {
            duration: 3000
          });
        }
        // clear global edit flag if no edits remain
        this.commentEdit = !!this.userReviewAttempts?.some(att => (att.review || []).some(q => (q.review_comment?.comments || []).some(c => c._editing)));
      },
      error: err => {
        this.loading.hide();
        console.error('Failed to update review comment', err);
        const msg = err && err.error && err.error.statusMessage ? err.error.statusMessage : err && err.message ? err.message : 'Failed to update comment.';
        this._snack.open(msg, 'Close', {
          duration: 5000
        });
      }
    });
  }
  toggleManualReview(q) {
    if (!q?.answer_id) return;
    const previous = !!q.manual_review_required;
    q.manual_review_required = !previous;
    this.http.put(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/update-manual-review-status`, {
      answer_id: q.answer_id,
      manual_review_required: q.manual_review_required
    }).subscribe({
      error: err => {
        q.manual_review_required = previous;
        this._snack.open(err?.error?.statusMessage || 'Failed to update manual check', 'Close', {
          duration: 4000
        });
      }
    });
  }
  onApply(payload) {
    this.appliedFilters = payload;
    this.reportsApplied = true;
  }
  onReset() {
    this.appliedFilters = null;
    this.reportsApplied = false;
    this.categoryAnalytics = [];
    this.questionSummary = [];
    this.wrongDistribution = [];
  }
  // Reset filters to empty and reload scheduled tests, then close overlay.
  resetFiltersAndReload() {
    this.resetFilters = {
      department_id: '',
      teams_id: '',
      country_id: '',
      city_id: '',
      campus_id: ''
    };
    try {
      this.loadScheduledTest();
    } catch (e) {}
    try {
      this.closeFiltersOverlay();
    } catch (e) {}
  }
  displayTest(exam) {
    return exam ? exam.title || exam.name || '' : '';
  }
  onTestAutocompleteSelected(exam) {
    this.selectedExam = exam;
    // auto-load report for the currently active main tab
    if (this.activeMainTabIndex === 0) {
      this.loadUserReport(1);
    } else if (this.activeMainTabIndex === 1) {
      this.loadAnalytics();
    }
  }
  closeUserFilter() {
    this.userFilterOpen = false;
  }
  loadInstitutes() {
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/institutes/list`;
    this.http.get(url).subscribe({
      next: res => {
        const list = Array.isArray(res) ? res : res?.institutes || res?.data || [];
        this.institutes = (list || []).map(i => ({
          id: String(i.id || i.institute_id || i._id || ''),
          name: i.name || i.institute || 'Institute'
        }));
        // setup filtered institutes observable
        try {
          this.filteredInstitutes$ = this.instituteCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(val => {
            const q = (typeof val === 'string' ? val : val?.name || '').toLowerCase();
            return (this.institutes || []).filter(it => (it.name || '').toLowerCase().includes(q));
          }));
        } catch (e) {
          this.filteredInstitutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.institutes || []);
        }
        const loginInst = sessionStorage.getItem('global_institute_id') || sessionStorage.getItem('institute_id') || sessionStorage.getItem('instituteId');
        if (loginInst) this.selectedInstituteId = String(loginInst);else if (this.institutes.length) this.selectedInstituteId = this.institutes[0].id;
        // set instituteCtrl display value
        const selected = this.institutes.find(i => i.id === this.selectedInstituteId);
        if (selected) {
          try {
            this.instituteCtrl.setValue(selected);
            this.onInstituteChange(this.selectedInstituteId);
          } catch (e) {}
        }
      },
      error: err => console.warn('Failed to load institutes', err)
    });
  }
  onInstituteSelected(inst) {
    if (!inst) return;
    this.selectedInstituteId = inst.id;
    // populate dependent filter lists then load exams
    try {
      this.loadDepartmentList(this.selectedInstituteId);
    } catch (e) {}
    try {
      this.loadTeamsList(this.selectedInstituteId);
    } catch (e) {}
    try {
      this.loadCampusList(this.selectedInstituteId);
    } catch (e) {}
    try {
      this.loadCountries();
    } catch (e) {}
    this.loadScheduledTest();
  }
  displayInstitute(i) {
    return i ? i.name : '';
  }
  onInstituteChange(id) {
    this.selectedInstituteId = id;
    try {
      this.loadDepartmentList(this.selectedInstituteId);
    } catch (e) {}
    try {
      this.loadTeamsList(this.selectedInstituteId);
    } catch (e) {}
    try {
      this.loadCampusList(this.selectedInstituteId);
    } catch (e) {}
    try {
      this.loadCountries();
    } catch (e) {}
    this.loadScheduledTest();
  }
  loadCountries() {
    // reuse location-hierarchy endpoint used elsewhere
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/location-hierarchy`;
    this.http.get(url).subscribe({
      next: res => {
        try {
          const countries = res?.data?.countries || res?.countries || res?.data || [];
          this.countries = countries.map(c => ({
            code: c.country_code || c.code || c.id,
            name: c.country_name || c.name || c.country
          }));
        } catch (e) {
          this.countries = [];
        }
      },
      error: () => {
        this.countries = [];
      }
    });
  }
  onCountryChange() {
    this.cities = [];
    if (!this.userFilters.country_id) return;
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/location-hierarchy`;
    this.http.get(url, {
      params: {
        country: this.userFilters.country_id
      }
    }).subscribe({
      next: res => {
        try {
          let allCities = [];
          const countries = res?.data?.countries || res?.countries || [];
          if (Array.isArray(countries)) {
            countries.forEach(c => {
              if (Array.isArray(c.cities)) allCities = allCities.concat(c.cities);
              if (Array.isArray(c.states)) c.states.forEach(s => {
                if (Array.isArray(s.cities)) allCities = allCities.concat(s.cities);
              });
            });
          }
          if (allCities.length === 0 && (res?.data?.cities || res?.cities)) allCities = res?.data?.cities || res?.cities || [];
          this.cities = (allCities || []).map(c => ({
            code: c.city_code || c.code || c.id,
            name: c.city_name || c.name || c.city
          }));
        } catch (e) {
          this.cities = [];
        }
      },
      error: () => {
        this.cities = [];
      }
    });
  }
  // load department list for a specific institute
  loadDepartmentList(instituteId) {
    this.departmentList = [];
    if (!instituteId) return;
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-department-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get(url).subscribe({
      next: res => {
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.departmentList = arr.map(d => (d.name || d.department_name || d.department || d).toString()).filter(s => !!s);
      },
      error: err => {
        console.warn('Failed to load department list', err);
        this.departmentList = [];
      }
    });
  }
  // load teams list for a specific institute
  loadTeamsList(instituteId) {
    this.teamList = [];
    if (!instituteId) return;
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-teams-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get(url).subscribe({
      next: res => {
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.teamList = arr.map(t => (t.name || t.team_name || t.team || t).toString()).filter(s => !!s);
      },
      error: err => {
        console.warn('Failed to load teams list', err);
        this.teamList = [];
      }
    });
  }
  // load campus list for a specific institute
  loadCampusList(instituteId) {
    this.campusList = [];
    if (!instituteId) return;
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-campus-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get(url).subscribe({
      next: res => {
        console.debug('[TestReports] get-campus-list response for', instituteId, res);
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.campusList = arr.map(c => (c.name || c.campus_name || c.campus || c).toString()).filter(s => !!s);
      },
      error: err => {
        console.warn('Failed to load campus list', err);
        this.campusList = [];
      }
    });
  }
  loadScheduledTest() {
    // call API (use API_BASE) and populate filteredTests$
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-exam-schedule-details`;
    this.loading.show();
    this.http.get(url, {
      params: {
        institute_id: this.selectedInstituteId || '',
        country_id: this.userFilters.country_id || '',
        city_id: this.userFilters.city_id || '',
        campus_id: this.userFilters.campus_id || ''
      }
    }).subscribe({
      next: res => {
        try {
          const items = Array.isArray(res) ? res : res?.data || res?.schedules || [];
          this.allTests = items || [];
          // set up filtered observable to react to user typing
          try {
            this.filteredTests$ = this.examCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.map)(val => {
              const q = (typeof val === 'string' ? val : val?.title || val?.name || '').toLowerCase();
              return (this.allTests || []).filter(it => (it.title || it.name || '').toLowerCase().includes(q));
            }));
          } catch (e) {
            this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(this.allTests || []);
          }
        } catch (e) {
          this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
          console.warn('Failed to load schedules', e);
        }
        try {
          this.loading.hide();
        } catch (e) {}
      },
      error: err => {
        this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)([]);
        console.warn('Failed to load schedules', err);
        try {
          this.loading.hide();
        } catch (e) {}
      }
    });
  }
  ngOnInit() {
    try {
      this.pageMeta.setMeta('Test Reports', 'Reports for scheduled tests');
    } catch (e) {}
    this.loadInstitutes();
    // load countries for filter dropdowns
    try {
      this.loadCountries();
    } catch (e) {}
  }
  // Helper to convert option index to letter (0 -> A, 1 -> B, ...)
  getOptionLetter(i) {
    try {
      return String.fromCharCode(65 + (Number(i) || 0));
    } catch (e) {
      return '' + i;
    }
  }
  openFiltersOverlay() {
    if (!this.filtersBtn) return;
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) {}
      ;
      this.filtersOverlayRef = null;
    }
    const positionStrategy = this.overlay.position().flexibleConnectedTo(this.filtersBtn).withPositions([{
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
      offsetY: 8
    }, {
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
      offsetY: 8
    }]).withPush(true);
    this.filtersOverlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition()
    });
    this.filtersOverlayRef.backdropClick().subscribe(() => this.closeFiltersOverlay());
    this.filtersOverlayRef.keydownEvents().subscribe(ev => {
      if (ev.key === 'Escape') this.closeFiltersOverlay();
    });
    const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_9__.TemplatePortal(this.filtersPanelTpl, this.vcr);
    this.filtersOverlayRef.attach(portal);
  }
  closeFiltersOverlay() {
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) {}
      ;
      this.filtersOverlayRef = null;
    }
  }
  ngOnDestroy() {
    try {
      this._subs?.unsubscribe();
    } catch (e) {}
    try {
      this.closeFiltersOverlay();
    } catch (e) {}
  }
  onTabChange(event) {
    const idx = event.index;
    // 0 => User Report, 1 => Category Report
    if (!this.selectedExam) {
      // nothing selected
      return;
    }
    if (idx === 0) {
      this.loadUserReport(1);
    } else if (idx === 1) {
      this.loadAnalytics();
    }
  }
  loadUserReport(page = 1) {
    if (!this.selectedExam) return;
    this.currentPage = page || 1;
    const params = {
      schedule_id: String(this.selectedExam.schedule_id || this.selectedExam.id || this.selectedExam.scheduleId || ''),
      page: String(this.currentPage),
      page_size: String(this.pageSize)
    };
    if (this.searchQuery) params.q = this.searchQuery;
    this.loadingUserReport = true;
    try {
      this.loading.show();
    } catch (e) {}
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-exam-user-report`, {
      params
    }).subscribe({
      next: res => {
        console.debug('[TestReports] get-exam-user-report response:', res);
        try {
          const body = res || {};
          const payload = body.data || body; // support responses with { data: { items: [...] } }
          if (payload && Array.isArray(payload.items)) {
            this.userReportData = payload.items;
            this.userReportTotal = Number(payload.total ?? payload.count ?? (payload.items || []).length);
          } else if (Array.isArray(payload)) {
            this.userReportData = payload;
            this.userReportTotal = this.userReportData.length;
          } else {
            // fallback
            this.userReportData = [];
            this.userReportTotal = 0;
          }
        } catch (e) {
          console.warn('Error parsing user report response', e);
          this.userReportData = [];
          this.userReportTotal = 0;
        } finally {
          this.loadingUserReport = false;
          try {
            this.loading.hide();
          } catch (e) {}
        }
      },
      error: err => {
        console.error('[TestReports] Failed to load user report', err);
        this.userReportData = [];
        this.userReportTotal = 0;
        this.loadingUserReport = false;
        try {
          this.loading.hide();
        } catch (e) {}
      },
      complete: () => {
        try {
          this.loading.hide();
        } catch (e) {}
      }
    });
  }
  prevPage() {
    if (this.currentPage > 1) this.loadUserReport(this.currentPage - 1);
  }
  nextPage() {
    const totalPages = Math.ceil((this.userReportTotal || 0) / this.pageSize);
    if (this.currentPage < totalPages) this.loadUserReport(this.currentPage + 1);
  }
  exportUserCSV() {
    if (!this.userReportData || !this.userReportData.length) return;
    const headers = ['Student Name', 'Questions Attempted', 'Total Marks', 'Correct Answers', 'Wrong Answers', 'Marks Obtained', 'Result'];
    const rows = this.userReportData.map(r => [r.student_name, r.questions_attempted, r.total_marks, r.correct_answers, r.wrong_answers, r.marks_obtained, r.result]);
    const csv = [headers.join(','), ...rows.map(r => r.map(v => `"${String(v || '').replace(/"/g, '""')}"`).join(','))].join('\n');
    const blob = new Blob([csv], {
      type: 'text/csv;charset=utf-8;'
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `exam_user_report_${this.selectedExam ? this.selectedExam.schedule_id || this.selectedExam.id : 'report'}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }
  loadAnalytics() {
    if (!this.selectedExam) return;
    const params = {
      schedule_id: String(this.selectedExam.schedule_id || this.selectedExam.id || '')
    };
    try {
      this.loading.show();
    } catch (e) {}
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-exam-analytics`, {
      params
    }).subscribe({
      next: res => {
        console.debug('[TestReports] get-exam-analytics response:', res);
        try {
          const body = res || {};
          const payload = body.data || body;
          this.categoryAnalytics = Array.isArray(payload.category_report) ? payload.category_report : payload.category_report || payload.categories || [];
          this.questionSummary = Array.isArray(payload.question_summary) ? payload.question_summary : payload.question_summary || payload.questions || [];
          this.wrongDistribution = Array.isArray(payload.wrong_answer_distribution) ? payload.wrong_answer_distribution : payload.wrong_answer_distribution || payload.distribution || [];
          // If a category filter was requested while loading, apply it now
          if (this._pendingCategoryFilter) {
            const cid = String(this._pendingCategoryFilter);
            this.filteredQuestionSummary = (this.questionSummary || []).filter(q => this._getQuestionCategoryId(q) === cid);
            this._pendingCategoryFilter = null;
            // ensure UI switches to analytics -> Question Summary tab
            try {
              this.activeMainTabIndex = 1;
              this.innerAnalyticsTabIndex = 1;
            } catch (e) {}
          } else {
            this.filteredQuestionSummary = [];
          }
        } catch (e) {
          console.error('[TestReports] Error parsing analytics response', e);
          this.categoryAnalytics = [];
          this.questionSummary = [];
          this.wrongDistribution = [];
        } finally {
          try {
            this.loading.hide();
          } catch (e) {}
        }
      },
      error: err => {
        console.error('[TestReports] Failed to load analytics', err);
        this.categoryAnalytics = [];
        this.questionSummary = [];
        this.wrongDistribution = [];
        try {
          this.loading.hide();
        } catch (e) {}
      },
      complete: () => {
        try {
          this.loading.hide();
        } catch (e) {}
      }
    });
  }
  // Open a small modal-like inline panel to show wrong answer summary for a question
  openWrongAnswerSummary(question) {
    if (!question) return;
    this.selectedQuestionForWrongSummary = question;
    // Find wrong answers for the question from wrongDistribution
    // wrongDistribution may be an array of { question_id, wrong_answers: [{ answer, count, pct }] }
    const qid = question.id || question.question_id || question.sno || question.qid || null;
    let entries = [];
    try {
      if (Array.isArray(this.wrongDistribution) && this.wrongDistribution.length) {
        // try multiple shapes
        // shape1: [{ question_id: '123', wrong_answers: [{ answer: 'A', count: 3, pct: '11%' }, ...] }, ...]
        const byQ = this.wrongDistribution.find(d => String(d.question_id || d.qid || d.id || d.sno || '') === String(qid));
        if (byQ) {
          entries = byQ.wrong_answers || byQ.wrong || byQ.answers || byQ.distribution || [];
        } else {
          // shape2: flat list of wrong answers with question ref
          entries = (this.wrongDistribution || []).filter(d => String(d.question_id || d.qid || d.schedule_question_id || '') === String(qid));
        }
      }
    } catch (e) {
      entries = [];
    }
    // Normalize entries to { answer, count, pct }
    this.selectedWrongAnswers = (entries || []).map((en, idx) => {
      if (typeof en === 'string') return {
        answer: en,
        count: null,
        pct: null
      };
      return {
        id: en.id || en._id || null,
        answer: en.option_text || en.text || en.wrong_answer || en.name || en.label || en.option || 'Answer ' + (idx + 1),
        option_id: en.option_id || en.options_id || en.optionId || en.optionId || null,
        answer_id: en.answer_id || en.answerId || null,
        count: en.count || en.times || en.selected_count || en.selected || en.num || null,
        pct: en.pct || en.percentage || en.percent || en.pct_str || (en.count && this.selectedQuestionForWrongSummary && this.selectedQuestionForWrongSummary.attempts ? (Number(en.count) / Number(this.selectedQuestionForWrongSummary.attempts || 1) * 100).toFixed(0) + '%' : null)
      };
    });
    // If no entries found locally, attempt to fetch per-question distribution from backend
    if (!this.selectedWrongAnswers.length) {
      const params = {
        schedule_id: String(this.selectedExam?.schedule_id || this.selectedExam?.id || ''),
        question_id: String(question.question_id || question.id || question.qid || '')
      };
      if (params.schedule_id && params.question_id) {
        this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-question-wrong-answers`, {
          params
        }).subscribe({
          next: res => {
            const body = res || {};
            const payload = body.data || body;
            const dist = payload?.distribution || [];
            this.selectedWrongAnswers = (dist || []).map(d => ({
              answer: d.option_text || d.option || d.answer || d.text || 'Answer',
              option_id: d.option_id || d.options_id || d.optionId || null,
              answer_id: d.answer_id || d.answerId || null,
              count: d.count || d.selected_count || 0,
              pct: d.percentage !== undefined ? String(d.percentage) + '%' : d.pct || null
            }));
            if (!this.selectedWrongAnswers.length) {
              // fallback to raw list
              const raw = payload?.raw || [];
              this.selectedWrongAnswers = (raw || []).map(r => ({
                answer: r.text || r.option_text || 'Answer',
                count: r.count || 0,
                pct: null
              }));
            }
            this.showWrongAnswerSummary = true;
          },
          error: err => {
            console.warn('Failed to load question wrong answers', err);
            this.showWrongAnswerSummary = true; // show panel even if empty
          }
        });

        return;
      }
      const possible = question.wrong_answers || question.wrong || question.mistakes_detail || question.mistakes || question.wrong_distribution;
      if (possible && Array.isArray(possible)) {
        this.selectedWrongAnswers = possible.map((en, i) => ({
          answer: en.answer || en.text || en || 'Answer ' + (i + 1),
          count: en.count || en.times || null,
          pct: en.pct || null
        }));
      }
    }
    this.showWrongAnswerSummary = true;
  }
  closeWrongAnswerSummary() {
    this.showWrongAnswerSummary = false;
    this.selectedQuestionForWrongSummary = null;
    this.selectedWrongAnswers = [];
  }
  // Fetch resources for a specific wrong answer (option) and show central panel
  openResourcesForWrongAnswer(question, wa) {
    if (!question || !wa) return;
    this.selectedResourceContext = {
      question,
      wa
    };
    this.selectedResources = [];
    // build params including schedule and answer identifiers
    const params = {
      schedule_id: String(this.selectedExam?.schedule_id || this.selectedExam?.id || '')
    };
    if (wa.option_id) params.option_id = wa.option_id;else if (wa.optionId) params.option_id = wa.optionId;
    if (wa.answer_id) params.answer_id = wa.answer_id;else if (wa.answerId) params.answer_id = wa.answerId;
    // if written/free-text answer value is present, send it as answer_value
    if (wa.answer && typeof wa.answer === 'string' && !params.answer_id) {
      params.answer_value = wa.answer;
    }
    // ensure question_id fallback
    if (!params.question_id) params.question_id = String(question.question_id || question.id || question.qid || '');
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-answer-resources`, {
      params
    }).subscribe({
      next: res => {
        const body = res || {};
        const payload = body.data || body;
        // backend returns either an array or an object with data/context
        if (Array.isArray(payload)) this.selectedResources = payload;else if (Array.isArray(body.data)) this.selectedResources = body.data;else if (Array.isArray(payload.resources)) this.selectedResources = payload.resources;else if (Array.isArray(body.data?.data)) this.selectedResources = body.data.data;else this.selectedResources = payload || [];
        // optional context
        if (body.context) this.selectedResourceContext = body.context;
        this.showResourcePanel = true;
      },
      error: err => {
        console.warn('Failed to fetch resources', err);
        this.showResourcePanel = true;
      }
    });
  }
  closeResourcePanel() {
    this.showResourcePanel = false;
    this.selectedResources = [];
    this.selectedResourceContext = null;
  }
  // Format a date like 'On DD-MMM-YYYY HH:MM'
  formatDate(dateLike) {
    if (!dateLike) return '';
    try {
      const d = new Date(dateLike);
      if (isNaN(d.getTime())) return '';
      const dd = String(d.getDate()).padStart(2, '0');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const m = months[d.getMonth()] || '';
      const yyyy = d.getFullYear();
      const hh = String(d.getHours()).padStart(2, '0');
      const min = String(d.getMinutes()).padStart(2, '0');
      return `On ${dd}-${m}-${yyyy} ${hh}:${min}`;
    } catch (e) {
      return '';
    }
  }
  // Convert string to Title Case
  toTitleCase(str) {
    if (!str) return '';
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
  static {
    this.ɵfac = function ExamReportsComponent_Factory(t) {
      return new (t || ExamReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_1__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_page_meta_service__WEBPACK_IMPORTED_MODULE_2__.PageMetaService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_confirm_service__WEBPACK_IMPORTED_MODULE_3__.ConfirmService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
      type: ExamReportsComponent,
      selectors: [["app-exam-reports"]],
      viewQuery: function ExamReportsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.filtersBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.filtersPanelTpl = _t.first);
        }
      },
      decls: 194,
      vars: 48,
      consts: [[1, "page", "exam-reports"], [1, "toolbar"], [1, "selections"], ["appearance", "outline", 1, "local-institute-field"], ["matPrefix", "", "svgIcon", "institute"], ["matInput", "", "placeholder", "Pick an institute", "aria-label", "Institute", 3, "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["instAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matPrefix", "", "svgIcon", "exam"], ["type", "text", "matInput", "", "placeholder", "Pick a scheduled test", "aria-label", "Scheduled test", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [1, "controls"], [1, "action-row"], ["mat-stroked-button", "", "color", "primary", "type", "button", 1, "button-one", 3, "click"], ["svgIcon", "refresh"], ["mat-flat-button", "", "type", "button", 1, "button-one", 3, "click"], ["filtersBtn", ""], ["svgIcon", "filter"], ["filtersPanel", ""], [1, "list-card"], [1, "list-wrapper"], [1, "exam-tabs", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["label", "User Report"], [1, "report-summary-grid"], [1, "summary-card"], [1, "summary-icon", "summary-icon--students"], [1, "summary-copy"], [1, "summary-label"], [1, "summary-value"], [1, "summary-meta"], [1, "summary-icon", "summary-icon--page"], [1, "summary-icon", "summary-icon--score"], [1, "summary-icon", "summary-icon--pass"], [1, "tab-actions"], [1, "search"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by student name", "aria-label", "Search by student name", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["class", "table-wrap", 4, "ngIf"], ["class", "loader-placeholder", 4, "ngIf"], ["label", "Analytics Report"], [1, "analytics-section"], [1, "report-summary-grid", "analytics-summary-grid"], [1, "summary-icon", "summary-icon--categories"], [1, "summary-icon", "summary-icon--questions"], [1, "summary-icon", "summary-icon--attempts"], [1, "summary-icon", "summary-icon--mistakes"], [1, "inner-analytics-tabs", 3, "selectedIndex", "selectedIndexChange"], ["label", "Question Bank Report"], [1, "table-wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", "compact", "premium-table", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-primary", 4, "matCellDef"], ["matColumnDef", "questions"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "users_attempted"], ["matColumnDef", "total_attempts"], ["matColumnDef", "mistakes"], ["matColumnDef", "error_pct"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Question Summary"], ["matColumnDef", "sno"], ["matColumnDef", "question"], ["matColumnDef", "user_attempts"], ["matColumnDef", "attempts"], ["class", "wrong-summary-backdrop", 3, "click", 4, "ngIf"], [3, "value"], [1, "option-main"], [1, "filters-panel", 3, "click"], [1, "filters-panel-header"], [1, "filter-block"], ["appearance", "outline", 1, "filter-item"], ["name", "filterCountry", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["name", "filterCity", 3, "ngModel", "ngModelChange"], ["name", "filterCampus", 3, "ngModel", "ngModelChange"], ["name", "filterDepartment", 3, "ngModel", "ngModelChange"], ["name", "filterTeam", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Test schedule after", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["joinAfter", ""], ["matInput", "", "placeholder", "Test schedule before", 3, "matDatepicker", "ngModel", "ngModelChange"], ["joinBefore", ""], [1, "filter-actions"], ["mat-flat-button", "", 1, "filter-apply-btn", 3, "click"], ["svgIcon", "apply"], ["mat-flat-button", "", 1, "filter-reset-btn", 3, "click"], ["svgIcon", "reset_settings"], ["matColumnDef", "student_name"], ["matColumnDef", "questions_attempted"], ["matColumnDef", "correct_answers"], ["matColumnDef", "wrong_answers"], ["matColumnDef", "result"], [1, "pager"], ["mat-button", "", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-primary"], [1, "student-cell", 3, "click"], [1, "student-avatar"], [1, "student-name"], ["mat-cell", ""], [1, "marks-inline"], [1, "marks-sep"], [1, "pct-badge"], [1, "review-status"], [1, "result-pill"], ["mat-header-row", ""], ["mat-row", ""], [1, "loader-placeholder"], [1, "category-cell", 3, "click"], [1, "category-avatar"], ["href", "javascript:void(0)", "class", "wrong-summary-link", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "wrong-summary-link", 3, "click"], [1, "wrong-summary-backdrop", 3, "click"], [1, "wrong-summary-panel", "user-review-panel", 3, "click"], [1, "card"], [1, "panel-header"], [1, "header-icon"], [1, "header-info"], [1, "score"], [1, "result", 3, "ngClass"], ["mat-icon-button", "", "aria-label", "Close answer sheet", "type", "button", 1, "review-close-btn", 3, "click"], ["aria-hidden", "true"], [1, "panel-body"], ["class", "muted", 4, "ngIf"], [4, "ngIf"], [1, "summary-actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "muted"], [4, "ngIf", "ngIfElse"], ["noUserReview", ""], [4, "ngFor", "ngForOf"], [1, "questions-list"], ["class", "question-review-card", 4, "ngFor", "ngForOf"], [1, "question-review-card"], [1, "q-head-row"], [1, "q-left"], [1, "q-index"], [1, "q-body"], [1, "q-meta"], [1, "q-badge"], ["class", "q-info", 4, "ngIf"], [1, "q-text"], [1, "q-right"], ["class", "marks-container", 4, "ngIf"], ["class", "q-marks small-muted", 3, "ngClass", 4, "ngIf"], ["class", "q-fill", 4, "ngIf"], ["class", "q-descriptive", 4, "ngIf"], ["class", "q-options two-col", 4, "ngIf"], [1, "q-info"], ["svgIcon", "brain"], ["type", "button", "class", "manual-check-chip", 3, "selected", "click", 4, "ngIf"], ["type", "button", 1, "manual-check-chip", 3, "click"], [1, "marks-container"], ["class", "marks-display", 4, "ngIf"], ["class", "marks-edit", 4, "ngIf"], [1, "marks-display"], [1, "q-marks", "small-muted", 3, "ngClass"], ["mat-icon-button", "", "type", "button", "title", "Edit marks", 1, "edit-marks-btn", 3, "click"], [1, "marks-edit"], [1, "marks-edit-row"], ["type", "number", "step", "0.5", 1, "marks-input", 3, "ngModel", "min", "max", "ngModelChange"], [1, "marks-max"], ["rows", "3", "maxlength", "1000", "placeholder", "Describe why you are changing the marks *", 1, "marks-reason-input", 3, "ngModel", "ngModelChange"], [1, "marks-edit-actions"], ["mat-icon-button", "", "type", "button", "title", "Save marks", 1, "save-marks-btn", 3, "disabled", "click"], ["mat-icon-button", "", "type", "button", "title", "Cancel", 1, "cancel-marks-btn", 3, "click"], [1, "q-fill"], [1, "fill-row"], [1, "fill-option"], ["class", "fill-correct", 4, "ngIf"], [1, "fill-correct"], [1, "q-descriptive"], [1, "descriptive-answers"], [1, "desc-student"], [1, "student-label"], [1, "answer-text"], [1, "desc-model"], [1, "model-label"], [1, "model-text"], ["class", "q-evaluation-state failed", 4, "ngIf"], ["class", "q-evaluation-state pending", 4, "ngIf"], ["class", "q-feedback", 4, "ngIf"], ["class", "q-review-comments", 4, "ngIf"], [1, "marks-history-section"], [1, "marks-history-header"], [1, "marks-history-timeline"], [1, "history-item", "current"], [1, "history-indicator"], [1, "dot", "current"], ["class", "line", 4, "ngIf"], [1, "history-content"], [1, "history-card", "current"], [1, "history-badge"], [1, "history-marks"], [1, "marks-total"], [1, "history-meta"], [1, "updated-by"], ["class", "updated-date", 4, "ngIf"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "failed"], [1, "feedback-text"], ["type", "button", 1, "retry-evaluation-btn", 3, "disabled", "click"], [1, "q-evaluation-state", "pending"], [1, "q-feedback"], [1, "q-review-comments"], [1, "review-columns"], [1, "col", "missed"], [1, "col-header"], [1, "dot", "red"], ["class", "review-empty", 4, "ngIf"], [1, "col", "incorrect"], [1, "dot", "orange"], [1, "col", "incomplete"], [1, "dot", "yellow"], [1, "review-empty"], [1, "review-item"], [1, "ri-body"], ["class", "review-text-history", 4, "ngIf"], ["class", "review-text-missed", 3, "deleted", 4, "ngIf"], ["class", "review-text-missed editing", 4, "ngIf"], [1, "review-meta", "small-muted"], ["class", "deleted-by", 4, "ngIf"], ["class", "review-actions", 4, "ngIf"], [1, "review-text-history"], [1, "history-entry"], [1, "review-text-missed"], [1, "ri-left"], [1, "ri-icon", "missed"], [1, "review-text"], [1, "review-text-missed", "editing"], ["rows", "2", 1, "edit-comment-text", 3, "ngModel", "ngModelChange"], [1, "deleted-by"], [1, "review-actions"], ["class", "edit-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "delete-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "save-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "cancel-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "edit-link", 3, "click"], ["href", "javascript:void(0)", 1, "delete-link", 3, "click"], ["href", "javascript:void(0)", 1, "save-link", 3, "click"], ["href", "javascript:void(0)", 1, "cancel-link", 3, "click"], ["class", "review-text-incorrect", 3, "deleted", 4, "ngIf"], ["class", "review-text-incorrect editing", 4, "ngIf"], ["class", "edit-reason", 4, "ngIf"], [1, "review-text-incorrect"], [1, "ri-icon", "incorrect"], [1, "review-text-incorrect", "editing"], ["rows", "2", "placeholder", "Reason for change", "required", "", 1, "edit-comment-reason", 3, "ngModel", "ngModelChange"], [1, "edit-reason"], ["class", "save-link", "href", "javascript:void(0)", 3, "disabled", "click", 4, "ngIf"], ["class", "review-text-incomplete", 3, "deleted", 4, "ngIf"], ["class", "review-text-incomplete editing", 4, "ngIf"], [1, "review-text-incomplete"], [1, "ri-icon", "incomplete"], [1, "review-text-incomplete", "editing"], ["class", "edit-comment-reason", "rows", "2", "placeholder", "Reason for change", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "line"], [1, "updated-date"], [1, "history-item"], [1, "dot", "past"], [1, "history-card", "past"], ["class", "history-reason", 4, "ngIf"], [1, "history-reason"], [1, "q-options", "two-col"], ["class", "q-option", 3, "correct", "selected", "missed", 4, "ngFor", "ngForOf"], [1, "q-option"], [1, "opt-left"], [1, "opt-mark"], [1, "opt-body"], [1, "opt-text"], ["class", "opt-badge", 4, "ngIf"], [1, "opt-badge"], ["class", "badge your-answer", 4, "ngIf"], ["class", "badge correct", 4, "ngIf"], ["class", "badge missed", 4, "ngIf"], [1, "badge", "your-answer"], [1, "badge", "correct"], [1, "badge", "missed"], [1, "wrong-summary-panel", 3, "click"], [1, "header-copy"], [1, "panel-sub"], ["mat-icon-button", "", "aria-label", "Close", "type", "button", 3, "click"], [1, "question-title"], [1, "summary-table"], ["data-label", "Wrong Answer"], ["href", "javascript:void(0)", 1, "wa-answer-link", 3, "click"], ["data-label", "Selected Count"], ["href", "javascript:void(0)", 1, "wa-count-link", 3, "click"], ["data-label", "Occurrence %"], [1, "panel-sub", "small-muted"], ["mat-icon-button", "", "aria-label", "Close resources", "type", "button", 3, "click"], [1, "resource-list"], [1, "res-title"], [1, "res-desc", "small-muted"]],
      template: function ExamReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "mat-icon", 4)(5, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "mat-autocomplete", 6, 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function ExamReportsComponent_Template_mat_autocomplete_optionSelected_6_listener($event) {
            return ctx.onInstituteSelected($event.option.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_mat_option_8_Template, 2, 2, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-form-field", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "mat-icon", 10)(12, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "mat-autocomplete", 6, 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("optionSelected", function ExamReportsComponent_Template_mat_autocomplete_optionSelected_13_listener($event) {
            return ctx.onTestAutocompleteSelected($event.option.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, ExamReportsComponent_mat_option_15_Template, 3, 2, "mat-option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "async");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13)(18, "div", 14)(19, "button", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_19_listener() {
            return ctx.loadAnalytics();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 17, 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_22_listener($event) {
            $event.stopPropagation();
            return ctx.openFiltersOverlay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "mat-icon", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Filter Test Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](27, ExamReportsComponent_ng_template_27_Template, 63, 16, "ng-template", null, 20, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 21)(30, "div", 22)(31, "mat-tab-group", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedTabChange", function ExamReportsComponent_Template_mat_tab_group_selectedTabChange_31_listener($event) {
            return ctx.onTabChange($event);
          })("selectedIndexChange", function ExamReportsComponent_Template_mat_tab_group_selectedIndexChange_31_listener($event) {
            return ctx.activeMainTabIndex = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "mat-tab", 24)(33, "div", 25)(34, "div", 26)(35, "div", 27)(36, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "div", 28)(39, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Students");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 26)(46, "div", 32)(47, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "article");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 28)(50, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, "Current Page");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](55, "Paginated user report results");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 26)(57, "div", 33)(58, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "military_tech");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 28)(61, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, "Average Score");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](65, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](67, "Average marks from loaded users");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 26)(69, "div", 34)(70, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "task_alt");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 28)(73, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74, "Pass Rate");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](77, "number");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](79, "Success ratio in current view");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 35)(81, "div", 36)(82, "mat-form-field", 37)(83, "mat-icon", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "input", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_Template_input_ngModelChange_85_listener($event) {
            return ctx.searchQuery = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](86, "div", 13)(87, "div", 14)(88, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_88_listener() {
            return ctx.loadUserReport(1);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, "search");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](91, " Search");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](92, "button", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_92_listener() {
            return ctx.exportUserCSV();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](93, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](94, "download");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, " Export CSV");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](96, ExamReportsComponent_div_96_Template, 26, 9, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](97, ExamReportsComponent_div_97_Template, 2, 0, "div", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](98, "mat-tab", 44)(99, "div", 45)(100, "div", 46)(101, "div", 26)(102, "div", 47)(103, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104, "grid_view");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](105, "div", 28)(106, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Question Banks");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](109);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](110, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, "Performance groups in analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 26)(113, "div", 48)(114, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](115, "quiz");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 28)(117, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Questions");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](119, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](120);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](122);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](123, "div", 26)(124, "div", 49)(125, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, "stacked_line_chart");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 28)(128, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](129, "Total Attempts");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](130, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](131);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](132, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](133, "Attempts recorded across categories");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](134, "div", 26)(135, "div", 50)(136, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](137, "warning_amber");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](138, "div", 28)(139, "div", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](140, "Mistakes");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](141, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](142);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](143, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](144, "Wrong answers identified in analytics");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](145, "mat-tab-group", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedIndexChange", function ExamReportsComponent_Template_mat_tab_group_selectedIndexChange_145_listener($event) {
            return ctx.innerAnalyticsTabIndex = $event;
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](146, "mat-tab", 52)(147, "div", 45)(148, "div", 53)(149, "table", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](150, 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](151, ExamReportsComponent_th_151_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](152, ExamReportsComponent_td_152_Template, 6, 2, "td", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](153, 58);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](154, ExamReportsComponent_th_154_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](155, ExamReportsComponent_td_155_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](156, 60);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](157, ExamReportsComponent_th_157_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](158, ExamReportsComponent_td_158_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](159, 61);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](160, ExamReportsComponent_th_160_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](161, ExamReportsComponent_td_161_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](162, 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](163, ExamReportsComponent_th_163_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](164, ExamReportsComponent_td_164_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](165, 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](166, ExamReportsComponent_th_166_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](167, ExamReportsComponent_td_167_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](168, ExamReportsComponent_tr_168_Template, 1, 0, "tr", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](169, ExamReportsComponent_tr_169_Template, 1, 0, "tr", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](170, "mat-tab", 66)(171, "div", 45)(172, "div", 53)(173, "table", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](174, 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](175, ExamReportsComponent_th_175_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](176, ExamReportsComponent_td_176_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](177, 68);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](178, ExamReportsComponent_th_178_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](179, ExamReportsComponent_td_179_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](180, 69);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](181, ExamReportsComponent_th_181_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](182, ExamReportsComponent_td_182_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](183, 70);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](184, ExamReportsComponent_th_184_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](185, ExamReportsComponent_td_185_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](186, 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](187, ExamReportsComponent_th_187_Template, 2, 0, "th", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](188, ExamReportsComponent_td_188_Template, 2, 1, "td", 59);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](189, ExamReportsComponent_tr_189_Template, 1, 0, "tr", 64);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](190, ExamReportsComponent_tr_190_Template, 1, 0, "tr", 65);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](191, ExamReportsComponent_div_191_Template, 24, 10, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](192, ExamReportsComponent_div_192_Template, 18, 1, "div", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](193, ExamReportsComponent_div_193_Template, 22, 2, "div", 71);
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
          const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](14);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.instituteCtrl)("matAutocomplete", _r0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayInstitute);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 34, ctx.filteredInstitutes$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formControl", ctx.examCtrl)("matAutocomplete", _r2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("displayWith", ctx.displayTest.bind(ctx));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 36, ctx.filteredTests$));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.activeMainTabIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.userReportTotal || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.userReportData.length || 0, " visible for ", (ctx.selectedExam == null ? null : ctx.selectedExam.title) || (ctx.selectedExam == null ? null : ctx.selectedExam.name) || "selected test", "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx.currentPage, "/", ctx.totalPages, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](65, 38, ctx.userAverageScore, "1.0-1"));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](77, 41, ctx.userPassRate, "1.0-0"), "%");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.searchQuery);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.loadingUserReport);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.loadingUserReport);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.categoryAnalytics.length || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.activeQuestionCount || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.filteredQuestionSummary.length ? "Filtered question summary view" : "Complete question summary view");
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.analyticsTotalAttempts || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.analyticsMistakeCount || 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedIndex", ctx.innerAnalyticsTabIndex);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.categoryAnalytics);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](44, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](45, _c7));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dataSource", ctx.filteredQuestionSummary && ctx.filteredQuestionSummary.length ? ctx.filteredQuestionSummary : ctx.questionSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](46, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](47, _c8));
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showUserReviewPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showWrongAnswerSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showResourcePanel);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  --green-bg: #e8f9ef;\n  --red-bg: #fff2f4;\n  --yellow-bg: #fff8e6;\n  --orange-bg: #fff4e1;\n  --blue-bg: #e6f0ff;\n  --green-text: #166534;\n  --red-text: #b91c1c;\n  --yellow-text: #b45309;\n  --orange-text: #c2410c;\n  --blue-text: #0b66d0;\n  --bgreen-border: #86efac;\n  --bred-border: #e7d6d6;\n  --byellow-border: #fde68a;\n  --borange-border: #faeedf;\n  --bblue-border: #93c5fd;\n  --score-color: #f39c12;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 3rem;\n}\n\n.exam-reports[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.875rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.selections[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  flex: 1 1 28rem;\n  min-width: 16rem;\n  max-width: 36rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field {\n  position: relative;\n  min-width: 14rem;\n  max-width: 18rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 0 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-flex {\n  height: 2.75rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-infix {\n  padding: 0.5rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label {\n  top: 1.375rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label.mdc-floating-label--float-above {\n  transform: translateY(-1.5rem) scale(0.75);\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field mat-icon[matPrefix] {\n  color: #94a3b8;\n  margin-right: 0.5rem;\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover mat-icon[matPrefix] {\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12), 0 4px 16px rgba(31, 123, 255, 0.08);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n  transform: scale(1.05);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel {\n  border-radius: 0.75rem !important;\n  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.03) !important;\n  border: none !important;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option {\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  min-height: 2.75rem;\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active {\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.1) 0%, rgba(31, 123, 255, 0.06) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-main {\n  font-weight: 500;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.125rem;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.button-one[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.button-one[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  color: var(--button-text-2) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filters-panel[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-height: 75vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1rem;\n  box-shadow: 0 1.25rem 3rem rgba(15, 23, 42, 0.16), 0 0.375rem 1rem rgba(15, 23, 42, 0.06);\n  animation: _ngcontent-%COMP%_slideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.filters-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.125rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--button-1);\n}\n\n.filter-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  padding: 1rem 1.125rem;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.filter-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.625rem;\n  padding: 0 0.75rem;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-flex {\n  height: 2.5rem;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label {\n  top: 1.25rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label.mdc-floating-label--float-above {\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item input, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-value-text {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-arrow, [_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle .mat-icon {\n  color: #94a3b8;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 0.25rem 0.625rem rgba(15, 23, 42, 0.06);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle button {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n\n.filter-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  grid-column: span 1;\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  padding: 0.875rem 1.125rem;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #475569 !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .filter-reset-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.list-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid #e2e8f0;\n  border-radius: 0.75rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.exam-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inner-analytics-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-header {\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.5rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-labels {\n  min-height: 3rem;\n  gap: 0.125rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0 1.25rem;\n  min-height: 3rem;\n  border-radius: 0.75rem 0.75rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab:hover {\n  background: var(--bg-1);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active {\n  background: var(--bg-1);\n  color: var(--button-1);\n  box-shadow: inset 0 -0.125rem 0 var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-body-wrapper {\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-header {\n  background: var(--bg-1);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.75rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-labels {\n  min-height: 2.625rem;\n  gap: 0.25rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.8125rem;\n  padding: 0 1rem;\n  min-height: 2.625rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab:hover {\n  background: var(--bg-2);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active {\n  background: var(--bg-2);\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n.report-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.875rem;\n  padding: 1.25rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n}\n\n.analytics-summary-grid[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 1rem;\n  background: transparent;\n  border-bottom: none;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  min-width: 0;\n  padding: 1rem 1.125rem;\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 0.25rem 0.75rem var(--theme-3-hanover-bg);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.1875rem);\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: var(--theme-2-hanover-bg);\n  color: var(--button-1);\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.summary-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.summary-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n.summary-icon--students[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--page[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--score[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n\n.summary-icon--pass[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n\n.summary-icon--categories[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n}\n\n.summary-icon--questions[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--attempts[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--mistakes[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n\n.summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-3);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.25rem, 1.05rem + 0.7vw, 1.75rem);\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: var(--theme-3-text-1);\n}\n\n.summary-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-xsm);\n  font-weight: 500;\n  color: var(--theme-3-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tab-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1rem 1rem;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n  margin: 0;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 20rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  padding: 0 0.75rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-flex {\n  height: 2.375rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-floating-label {\n  top: 1.1875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input::placeholder {\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-icon[matPrefix] {\n  color: var(--theme-3-icon-1);\n  margin-right: 0.5rem;\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-focused .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px var(--theme-2-hanover-bg);\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 0.875rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  border-radius: 0.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%], .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  color: var(--theme-3-text-2);\n  border: 1px solid var(--theme-3-border);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover, .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover {\n  background: var(--bg-1);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1);\n  border: none;\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--button-1-hover) 0%, var(--button-1) 100%);\n  box-shadow: 0 1rem 2rem var(--theme-2-hanover-bg);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 1rem 1rem;\n}\n\n.premium-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--table-header-bg, #f8fafc);\n  font-weight: 700;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--table-header-text, #475569);\n  padding: 0.75rem 0.875rem;\n  border-bottom: 0.125rem solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 0.1875rem solid var(--button-1);\n}\n\n.premium-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-2, #334155);\n  border-bottom: 0.0625rem solid #f1f5f9;\n  vertical-align: middle;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.5);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.045);\n  box-shadow: inset 0.1875rem 0 0 var(--button-1);\n}\n\n.student-name[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: var(--font-md);\n  letter-spacing: -0.01em;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.student-name[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  transform: translateX(0.0625rem);\n}\n\n.student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.student-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.category-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n\n.marks-inline[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-1);\n}\n\n.marks-sep[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  margin: 0 0.125rem;\n}\n\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366f1;\n}\n\n.review-status[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n\n.review-status.review-pending[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  font-weight: 600;\n}\n\n.result-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--theme-3-text-3);\n}\n\n.result-pill.result-pass[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.result-pill.result-fail[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.2) transparent;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.2);\n  border-radius: 0.1875rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(99, 102, 241, 0.35);\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.analytics-section[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow: auto;\n  border-radius: 0.625rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  color: var(--theme-3-text-2);\n}\n\n.pager[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.375rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  padding: 0.375rem 1rem !important;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n  background: var(--bg-2) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.loader-placeholder[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.02) 25%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.02) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%] {\n  margin-left: 0.375rem;\n  font-size: 0.85rem;\n  color: var(--button-1);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  font-weight: 600;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateX(0.125rem);\n}\n\n.wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  cursor: pointer;\n  font-weight: 700;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.wa-answer-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(0.0625rem);\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.85rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_subtlePulse {\n  0%, 100% {\n    box-shadow: 0 1.5rem 3.75rem var(--theme-3-hanover-bg);\n  }\n  50% {\n    box-shadow: 0 1.75rem 4rem var(--theme-2-hanover-bg);\n  }\n}\n.wrong-summary-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.55) 0%, rgba(30, 41, 59, 0.75) 100%);\n  backdrop-filter: blur(0.75rem) saturate(140%);\n  z-index: 10050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(56rem, 92vw);\n  max-height: 88vh;\n  z-index: 10060;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 1.25rem;\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  overflow: hidden;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  min-width: 0;\n  flex: 1;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n}\n\n.panel-header[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  margin-top: 0;\n  line-height: 1.4;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  transform: rotate(90deg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: 1.125rem 1.375rem;\n  overflow: auto;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.875rem;\n  font-size: 0.9375rem;\n  letter-spacing: -0.01em;\n  color: var(--theme-3-text-1);\n  padding: 0.875rem 1rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: var(--bg-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .small-muted[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  padding-left: 0;\n  color: var(--theme-3-text-3);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  margin: 0 auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-1-text-1);\n  background: var(--table-header-bg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent;\n  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.125rem);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n  text-align: center;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--theme-3-text-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  border-color: var(--button-1);\n  background: var(--bg-2);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg);\n}\n\n.wa-answer-link[_ngcontent-%COMP%], .wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover, .wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%], .summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.875rem 1.375rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.625rem !important;\n  font-weight: 700 !important;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.0625rem);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg) !important;\n}\n\n.resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 0.875rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2rem var(--theme-3-hanover-bg);\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n}\n\n.res-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  letter-spacing: -0.01em;\n}\n\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n  width: 0.375rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--theme-3-border);\n  border-radius: 0.1875rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%] {\n  width: min(72rem, 94vw);\n  max-height: 90vh;\n  margin: auto;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border-radius: 1.25rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  border: 0.0625rem solid var(--theme-3-border);\n  overflow: hidden;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-3);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.5rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  letter-spacing: 0.01em;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 62.5rem;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 0.125rem 0.5rem rgba(15, 23, 42, 0.08);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.pass[_ngcontent-%COMP%] {\n  color: var(--button-text-1);\n  background: var(--button-1);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.fail[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 2.75rem;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--theme-3-text-2);\n  line-height: 1;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex: 0 0 2.75rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.375rem 0.875rem var(--theme-3-hanover-bg);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.125rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.875rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  max-height: calc(90vh - 10rem);\n  padding: 1.5rem;\n}\n\n.attempt-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.75rem 0;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  margin-bottom: 0.875rem;\n}\n\n.attempt-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.attempt-header[_ngcontent-%COMP%]   .score-badge[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #0a8043;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.875rem;\n  margin-left: auto;\n  letter-spacing: 0.01em;\n}\n\n.attempt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-size: 0.8125rem;\n}\n\n.questions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.question-review-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-1);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.125rem 0.375rem rgba(15, 23, 42, 0.03);\n  overflow: hidden;\n}\n\n.question-review-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1) 0%, rgba(99, 102, 241, 0.4) 100%);\n}\n\n.question-review-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem rgba(15, 23, 42, 0.08);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--theme-3-text-1);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .mark-badge[_ngcontent-%COMP%] {\n  float: right;\n  background: #fff3f3;\n  color: var(--red-text);\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.q-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem dashed var(--theme-3-border);\n}\n\n.q-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-index[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0.06) 100%);\n  border: 0.0625rem solid rgba(99, 102, 241, 0.18);\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.875rem;\n  color: var(--button-1);\n  flex-shrink: 0;\n}\n\n.q-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n}\n\n.q-badge[_ngcontent-%COMP%] {\n  background: var(--theme-2-hanover-bg);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--button-1);\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.6875rem;\n  line-height: 1rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.q-info[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.8125rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n\n.q-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  width: 0.9375rem;\n  height: 0.9375rem;\n  color: var(--button-1);\n}\n\n.q-marks.small-muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n}\n\n.q-options.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.q-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.875rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.1);\n  background: #f8fbff;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.opt-left[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.opt-left[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.opt-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 0.75rem;\n  align-self: center;\n  line-height: 1.45;\n}\n\n.opt-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n}\n\n.badge.your-answer[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.badge.correct[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.badge.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border-color: var(--bred-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.1);\n}\n\n.q-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border-color: var(--bgreen-border);\n}\n\n.q-option.correct[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.1);\n}\n\n.q-option.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border-color: var(--bblue-border);\n}\n\n.q-option.missed[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(11, 102, 208, 0.1);\n}\n\n.q-selected[_ngcontent-%COMP%], .q-marks[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.q-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  background: rgba(240, 248, 255, 0.6);\n  padding: 0.625rem 0.75rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-evaluation-state[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  padding: 0.75rem;\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.q-evaluation-state.failed[_ngcontent-%COMP%] {\n  color: #8a1c1c;\n  background: #fff2f2;\n  border: 0.0625rem solid #efb4b4;\n}\n\n.q-evaluation-state.pending[_ngcontent-%COMP%] {\n  color: #6c4a00;\n  background: #fff8e6;\n  border: 0.0625rem solid #e7ca7a;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%] {\n  border: 0.0625rem solid currentColor;\n  border-radius: 0.375rem;\n  padding: 0.4rem 0.7rem;\n  color: inherit;\n  background: #fff;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.6;\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-style: italic;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%], .q-marks.mark-negative[_ngcontent-%COMP%], .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.25rem;\n  height: 2rem;\n  margin-top: 0;\n  padding: 0 0.625rem;\n  display: inline-grid !important;\n  place-items: center;\n  border-radius: 0.375rem;\n  font-weight: 800 !important;\n  font-size: 0.8125rem;\n  line-height: normal;\n  letter-spacing: 0.01em;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: #0b8a45;\n}\n\n.q-marks.mark-negative[_ngcontent-%COMP%] {\n  background: #fff2f4;\n  color: #b02a37;\n}\n\n.q-marks.mark-mid[_ngcontent-%COMP%] {\n  background: #fff8e6;\n  color: #b36a00;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  background: #fff7ed;\n  border: 0.0625rem solid rgba(245, 166, 35, 0.1);\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.selected[_ngcontent-%COMP%] {\n  background: #e8f6ff;\n  border-color: rgba(2, 112, 255, 0.15);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  border-color: var(--bgreen-border);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-correct[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.8125rem;\n  background-color: var(--green-bg);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.875rem;\n}\n\n.descriptive-answers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.875rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-question[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #8c6ad6;\n  background: rgba(140, 106, 214, 0.08);\n  display: inline-block;\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  flex: 0 0 8.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #f39c12;\n  background: #fff;\n  padding: 0.75rem 0.5rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  margin-top: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--theme-2);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--green-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bgreen-border);\n  border-left: 0.1875rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-label[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .student-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-text[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.55;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  padding: 0.625rem;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0b66d0;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .q-feedback[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-review-comments[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem dashed var(--theme-3-border);\n}\n\n.review-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.875rem;\n}\n\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  padding: 0.875rem;\n  border-radius: 0.75rem;\n  min-height: 4rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.06);\n  transform: translateY(-0.125rem);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.875rem;\n}\n\n.review-columns[_ngcontent-%COMP%]   .col.missed[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--red-bg) 0%, #fff 90%);\n  border-color: var(--bred-border);\n  border-top: 0.1875rem solid var(--red-text);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col.incorrect[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--orange-bg) 0%, #fff 90%);\n  border-color: var(--borange-border);\n  border-top: 0.1875rem solid var(--orange-text);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col.incomplete[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--yellow-bg) 0%, #fff 90%);\n  border-color: var(--byellow-border);\n  border-top: 0.1875rem solid var(--yellow-text);\n}\n\n.col-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.col-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-2);\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0.1875rem rgba(0, 0, 0, 0.04);\n}\n\n.dot.red[_ngcontent-%COMP%] {\n  background: var(--red-text);\n}\n\n.dot.orange[_ngcontent-%COMP%] {\n  background: var(--orange-text);\n}\n\n.dot.yellow[_ngcontent-%COMP%] {\n  background: var(--yellow-text);\n}\n\n.review-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: flex-start;\n}\n\n.ri-left[_ngcontent-%COMP%] {\n  width: 2rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-shrink: 0;\n}\n\n.ri-icon[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.ri-icon.missed[_ngcontent-%COMP%] {\n  color: var(--red-text);\n  background: rgba(185, 28, 28, 0.08);\n}\n\n.ri-icon.incorrect[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  background: rgba(194, 65, 12, 0.08);\n}\n\n.ri-icon.incomplete[_ngcontent-%COMP%] {\n  color: var(--yellow-text);\n  background: rgba(180, 83, 9, 0.08);\n}\n\n.ri-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.review-text.deleted[_ngcontent-%COMP%] {\n  color: gray;\n  text-decoration: line-through;\n}\n\n.deleted-by[_ngcontent-%COMP%] {\n  color: #c0392b;\n  font-style: italic;\n  display: block;\n  margin-top: 0.375rem;\n  font-size: 0.75rem;\n}\n\n.review-text-missed[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--theme-3);\n  font-weight: 400;\n  padding: 0.625rem 0.75rem;\n  border: 0.0625rem solid var(--bred-border);\n  border-radius: 0.5rem;\n  line-height: 1.45;\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-text-missed[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.review-text-incorrect[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--theme-3);\n  font-weight: 400;\n  padding: 0.625rem 0.75rem;\n  border: 0.0625rem solid var(--borange-border);\n  border-radius: 0.5rem;\n  line-height: 1.45;\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-text-incorrect[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.review-text-incomplete[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--theme-3);\n  font-weight: 400;\n  padding: 0.625rem 0.75rem;\n  border: 0.0625rem solid var(--byellow-border);\n  border-radius: 0.5rem;\n  line-height: 1.45;\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-text-incomplete[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.review-meta[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: rgba(0, 0, 0, 0.5);\n  margin-top: 0.375rem;\n  letter-spacing: 0.01em;\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.125rem;\n}\n\n.review-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: initial !important;\n}\n\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%], .save-link[_ngcontent-%COMP%], .cancel-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  margin-right: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.1875rem;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%]:hover, .save-link[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.06);\n}\n\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%] {\n  color: #d33;\n}\n\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%]:hover {\n  background: rgba(221, 51, 51, 0.06);\n}\n\n.cancel-link[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.edit-comment-text[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  padding: 0.375rem 0.5rem;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  resize: vertical;\n}\n\n.edit-comment-text[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n\n.marks-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  min-height: 2.25rem;\n}\n\n.marks-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.edit-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  line-height: 1.75rem !important;\n  opacity: 0.6;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.edit-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(99, 102, 241, 0.08);\n}\n\n.marks-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  gap: 0.375rem;\n  background: #fff;\n  padding: 0.1875rem 0.375rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid var(--button-1);\n  box-shadow: 0 0.125rem 0.5rem rgba(99, 102, 241, 0.15);\n}\n\n.marks-input[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  padding: 0.25rem 0.375rem;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.marks-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n.marks-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .marks-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.marks-max[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 500;\n}\n\n.save-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  line-height: 1.75rem !important;\n  color: var(--green-text) !important;\n  background: var(--green-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.save-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.save-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.cancel-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  line-height: 1.75rem !important;\n  color: var(--red-text) !important;\n  background: var(--red-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cancel-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.cancel-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.marks-history-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(59, 130, 246, 0.02) 100%);\n  border-radius: 0.75rem;\n  border: 0.0625rem solid rgba(99, 102, 241, 0.1);\n}\n\n.marks-history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(99, 102, 241, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--button-1);\n}\n.marks-history-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.marks-history-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n}\n\n.history-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1.5rem;\n  flex-shrink: 0;\n}\n.history-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 0 0 0.1875rem rgb(255, 255, 255);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  box-shadow: 0 0 0 0.1875rem rgba(16, 185, 129, 0.15), 0 0.125rem 0.375rem rgba(16, 185, 129, 0.25);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.past[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #94a3b8, #64748b);\n  box-shadow: 0 0 0 0.1875rem rgba(148, 163, 184, 0.15);\n}\n.history-indicator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  flex: 1;\n  background: linear-gradient(180deg, rgba(148, 163, 184, 0.4) 0%, rgba(148, 163, 184, 0.1) 100%);\n  margin: 0.25rem 0;\n  min-height: 1rem;\n}\n\n.history-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 0.875rem;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.history-card.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%);\n  border: 0.0625rem solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 0.125rem 0.5rem rgba(16, 185, 129, 0.1);\n}\n.history-card.current[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.375rem 1rem rgba(16, 185, 129, 0.18);\n  transform: translateY(-0.1875rem);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.history-card.past[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.8);\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.history-card.past[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.history-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  margin-bottom: 0.375rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(16, 185, 129, 0.3);\n}\n\n.history-marks[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n}\n.history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.45);\n}\n\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  opacity: 0.6;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.history-card.current[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  color: var(--green-text);\n}\n\n@media (max-width: 55rem) {\n  .page[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem 2rem;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-bottom: 0.625rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 1 1 100%;\n  }\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tab-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-options.two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .user-review-panel[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 0.625rem;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n    margin-top: 0.5rem;\n  }\n  .descriptive-answers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-head-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .q-right[_ngcontent-%COMP%] {\n    margin-left: 3.125rem;\n  }\n}\n.marks-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.marks-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.25rem;\n}\n\n.marks-reason-input[_ngcontent-%COMP%] {\n  width: 18rem;\n  max-width: 100%;\n  padding: 0.5rem;\n  border: 0.0625rem solid var(--border-color, #d3d9e2);\n  border-radius: 0.375rem;\n  font: inherit;\n  resize: vertical;\n}\n\n.marks-reason-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color, #267cff);\n  box-shadow: 0 0 0 0.125rem rgba(38, 124, 255, 0.12);\n}\n\n.history-reason[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  color: rgba(0, 0, 0, 0.68);\n  line-height: 1.4;\n}\n\n@media (max-width: 45rem) {\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0.875rem;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .summary-meta[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    border-radius: 0.625rem;\n    overflow: hidden;\n    border: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: left;\n    border-radius: 0;\n    border: none;\n    border-bottom: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 700;\n    color: var(--theme-3-text-2);\n    margin-right: 0.5rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.manual-check-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 8px;\n  padding: 3px 9px;\n  border: 1px solid #d97706;\n  border-radius: 16px;\n  background: #fff7ed;\n  color: #9a3412;\n  cursor: pointer;\n  font: inherit;\n}\n\n.manual-check-chip.selected[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  font-weight: 600;\n}\n\n.manual-check-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n\n.edit-comment-reason[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 8px;\n}\n\n.review-meta[_ngcontent-%COMP%]   .edit-reason[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n}\n\n.save-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnJvbGUvYWRtaW4vZXhhbS1yZXBvcnRzL2V4YW0tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBZEY7O0FBa0JBO0VBQXdELGFBQUE7QUFkeEQ7O0FBaUJBO0VBQVEsNEJBQUE7QUFiUjs7QUFjQTtFQUFnQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsYUFBQTtBQVJ2RDs7QUFTQTtFQUFXLGFBQUE7RUFBZSxlQUFBO0VBQWlCLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixrREFBQTtBQUN4STs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsNkRBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFBMkUsd0JBQUE7QUFHM0U7O0FBRkE7RUFBK0UsZUFBQTtBQU0vRTs7QUFMQTtFQUFnRixpQkFBQTtFQUFtQixpQkFBQTtBQVVuRzs7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBOztFQUVFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFD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QyIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVudGVycHJpc2Ugw6LCgMKTIEV4YW0gUmVwb3J0cyAgKGVuaGFuY2VkIHYyKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJGVhc2U6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiRlYXNlLXNtb290aDogY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzUsIDEpO1xyXG4kZWFzZS1ib3VuY2U6IGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcclxuJHJhZGl1czogMC43NXJlbTtcclxuJHNoYWRvdy1zbTogMCAwLjA2MjVyZW0gMC4xODc1cmVtIHJnYmEoMCwwLDAsMC4wNCksIDAgMC4wNjI1cmVtIDAuMTI1cmVtIHJnYmEoMCwwLDAsMC4wMyk7XHJcbiRzaGFkb3ctbWQ6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMCwwLDAsMC4wNik7XHJcbiRzaGFkb3ctbGc6IDAgMS4yNXJlbSAyLjVyZW0gcmdiYSgwLDAsMCwwLjEpLCAwIDAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsMC4wNik7XHJcbiRzaGFkb3ctcGFuZWw6IDAgMS41cmVtIDMuNzVyZW0gcmdiYSg1LDE4LDQwLDAuMjIpLCAwIDAuMzc1cmVtIDFyZW0gcmdiYSg1LDE4LDQwLDAuMDgpO1xyXG4kc2hhZG93LWhvdmVyOiAwIDAuNXJlbSAxLjI1cmVtIHJnYmEoMCwwLDAsMC4wOCk7XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSG9zdCB0b2tlbnMgw6LClMKAw6LClMKAXHJcbjpob3N0IHtcclxuICAtLWdyZWVuLWJnOiAjZThmOWVmO1xyXG4gIC0tcmVkLWJnOiAjZmZmMmY0O1xyXG4gIC0teWVsbG93LWJnOiAjZmZmOGU2O1xyXG4gIC0tb3JhbmdlLWJnOiAjZmZmNGUxO1xyXG4gIC0tYmx1ZS1iZzogI2U2ZjBmZjtcclxuICAtLWdyZWVuLXRleHQ6ICMxNjY1MzQ7XHJcbiAgLS1yZWQtdGV4dDogI2I5MWMxYztcclxuICAtLXllbGxvdy10ZXh0OiAjYjQ1MzA5O1xyXG4gIC0tb3JhbmdlLXRleHQ6ICNjMjQxMGM7XHJcbiAgLS1ibHVlLXRleHQ6ICMwYjY2ZDA7XHJcbiAgLS1iZ3JlZW4tYm9yZGVyOiAjODZlZmFjO1xyXG4gIC0tYnJlZC1ib3JkZXI6ICNlN2Q2ZDY7XHJcbiAgLS1ieWVsbG93LWJvcmRlcjogI2ZkZTY4YTtcclxuICAtLWJvcmFuZ2UtYm9yZGVyOiAjZmFlZWRmO1xyXG4gIC0tYmJsdWUtYm9yZGVyOiAjOTNjNWZkO1xyXG4gIC0tc2NvcmUtY29sb3I6ICNmMzljMTI7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXRlcmlhbCBvdmVycmlkZXMgw6LClMKAw6LClMKAXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhZ2UgJiB0b29sYmFyIMOiwpTCgMOiwpTCgFxyXG4ucGFnZSB7IHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtIDNyZW07IH1cclxuLmV4YW0tcmVwb3J0cyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMS4xMjVyZW07IH1cclxuLnRvb2xiYXIgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAwLjg3NXJlbTsgcGFkZGluZy1ib3R0b206IDAuNzVyZW07IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpOyB9XHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBTRUxFQ1RJT05TIMOiwoDClCBQcmVtaXVtIEF1dG9jb21wbGV0ZSBJbnB1dHNcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi5zZWxlY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4OiAxIDEgMjhyZW07XHJcbiAgbWluLXdpZHRoOiAxNnJlbTtcclxuICBtYXgtd2lkdGg6IDM2cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDE0cmVtO1xyXG4gIG1heC13aWR0aDogMThyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2ZhZmJmYyAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMCAwLjg3NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4IHsgaGVpZ2h0OiAyLjc1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC41cmVtIDA7IG1pbi1oZWlnaHQ6IHVuc2V0OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7IFxyXG4gIHRvcDogMS4zNzVyZW07IFxyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwsXHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbC5tZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSkgc2NhbGUoMC43NSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIgeyBcclxuICBjb2xvcjogIzk0YTNiODsgXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDsgXHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIG1hdC1pY29uW21hdFByZWZpeF0ge1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB3aWR0aDogMS4yNXJlbTtcclxuICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZDpob3ZlciAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZDpob3ZlciBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6ICM2NDc0OGI7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjEyKSwgMCA0cHggMTZweCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4wOCk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLy8gQXV0b2NvbXBsZXRlIHBhbmVsIHN0eWxpbmdcclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wMykgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBtaW4taGVpZ2h0OiAyLjc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyAkZWFzZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDYpIDAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4wNCkgMTAwJSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24ubWF0LW1kYy1vcHRpb24tYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xKSAwJSwgcmdiYSgzMSwgMTIzLCAyNTUsIDAuMDYpIDEwMCUpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uIC5vcHRpb24tbWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbiAub3B0aW9uLXN1YiB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xyXG59XHJcbi5jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC41cmVtOyB9XHJcbi5hY3Rpb24tcm93IHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjVyZW07IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuLmJ1dHRvbi1vbmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSkgIWltcG9ydGFudDsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50OyBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7IGxldHRlci1zcGFjaW5nOiAwLjAxZW07IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZSAhaW1wb3J0YW50OyB9XHJcbi5idXR0b24tb25lOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIpICFpbXBvcnRhbnQ7IGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0yKSAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAkc2hhZG93LW1kICFpbXBvcnRhbnQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNjI1cmVtKTsgfVxyXG5cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vIEZJTFRFUlMgT1ZFUkxBWSBQQU5FTCDDosKAwpQgTW9kZXJuIGZpZWxkIGRlc2lnblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLmZpbHRlcnMtcGFuZWwge1xyXG4gIHdpZHRoOiAyNHJlbTtcclxuICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmYWZiZmMgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMS4yNXJlbSAzcmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4xNiksIDAgMC4zNzVyZW0gMXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjI4cyAkZWFzZS1ib3VuY2U7XHJcbn1cclxuXHJcbi5maWx0ZXJzLXBhbmVsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxcmVtIDEuMTI1cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWZiZmMgMCUsICNmZmZmZmYgMTAwJSk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLmZpbHRlcnMtcGFuZWwtaGVhZGVyIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuLmZpbHRlcnMtcGFuZWwtaGVhZGVyIGg0IG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIHdpZHRoOiAxLjEyNXJlbTtcclxuICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbn1cclxuXHJcbi5maWx0ZXItYmxvY2sge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDEuMTI1cmVtO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgZmxleDogMTtcclxufVxyXG4uZmlsdGVyLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLy8gRmlsdGVyIGZpZWxkIDo6bmctZGVlcCBvdmVycmlkZXMgw6LCgMKUIG1vZGVybiBjb21wYWN0IGxvb2tcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZSwgYmFja2dyb3VuZCAwLjJzICRlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDMpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1kYy1ub3RjaGVkLW91dGxpbmUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggeyBoZWlnaHQ6IDIuNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjM3NXJlbSAwOyBtaW4taGVpZ2h0OiB1bnNldDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHtcclxuICB0b3A6IDEuMjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtLm1hdC1mb2N1c2VkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLm1kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUge1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIGlucHV0LFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtc2VsZWN0LWFycm93LFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUgLm1hdC1pY29uIHsgY29sb3I6ICM5NGEzYjg7IH1cclxuXHJcbi8vIEhvdmVyXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW06aG92ZXIgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNjI1cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbn1cclxuLy8gRm9jdXNcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbS5tYXQtZm9jdXNlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcbi8vIERhdGVwaWNrZXIgdG9nZ2xlIGJ1dHRvbiBhbGlnbm1lbnRcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEuNzVyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8vIFNwYW4gZGF0ZSBwaWNrZXJzIGZ1bGwgd2lkdGggb24gbmFycm93IGdyaWRzXHJcbi5maWx0ZXItaXRlbTpudGgtbGFzdC1jaGlsZCgtbisyKSB7IGdyaWQtY29sdW1uOiBzcGFuIDE7IH1cclxuXHJcbi5maWx0ZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMTI1cmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWZiZmMgMCUsICNmZmZmZmYgMTAwJSk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLmZpbHRlci1hcHBseS1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODEyNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpbHRlci1hcHBseS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctbWQgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDYyNXJlbSk7XHJcbn1cclxuLmZpbHRlci1yZXNldC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzQ3NTU2OSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDFyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3JkZXItY29sb3IgMC4ycyAkZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5maWx0ZXItcmVzZXQtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpbHRlci1hcHBseS1idG4gbWF0LWljb24sXHJcbi5maWx0ZXItcmVzZXQtYnRuIG1hdC1pY29uIHsgZm9udC1zaXplOiAxcmVtOyB3aWR0aDogMXJlbTsgaGVpZ2h0OiAxcmVtOyBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07IH1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41cmVtKTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTGlzdCBjYXJkICsgdGFicyB3cmFwcGVyIMOiwpTCgMOiwpTCgFxyXG4ubGlzdC1jYXJkIHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogJHJhZGl1czsgYm94LXNoYWRvdzogJHNoYWRvdy1tZDsgb3ZlcmZsb3c6IGhpZGRlbjsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzICRlYXNlLCBib3JkZXItY29sb3IgMC4zcyAkZWFzZTsgfVxyXG4ubGlzdC1jYXJkOmhvdmVyIHsgYm94LXNoYWRvdzogJHNoYWRvdy1ob3ZlcjsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IH1cclxuLmxpc3Qtd3JhcHBlciB7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuLmV4YW0tdGFicyB7IHdpZHRoOiAxMDAlOyB9XHJcbi5pbm5lci1hbmFseXRpY3MtdGFicyB7IHdpZHRoOiAxMDAlOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFpbiB0YWJzIChVc2VyIFJlcG9ydCAvIEFuYWx5dGljcyBSZXBvcnQpIMOiwpTCgMOiwpTCgFxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWF0LW1kYy10YWItaGVhZGVyIHsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGJvcmRlci1ib3R0b206MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgcGFkZGluZzowIDAuNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWF0LW1kYy10YWItbGFiZWxzIHsgbWluLWhlaWdodDozcmVtOyBnYXA6MC4xMjVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWIgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOjAuODc1cmVtOyBwYWRkaW5nOjAgMS4yNXJlbTsgbWluLWhlaWdodDozcmVtOyBib3JkZXItcmFkaXVzOiRyYWRpdXMgJHJhZGl1cyAwIDA7IHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjJzICRlYXNlLCBjb2xvciAwLjJzICRlYXNlOyBsZXR0ZXItc3BhY2luZzowLjAxZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWI6aG92ZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWItLWFjdGl2ZSB7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzppbnNldCAwIC0wLjEyNXJlbSAwIHZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX190ZXh0LWxhYmVsIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiX190ZXh0LWxhYmVsIHsgZm9udC13ZWlnaHQ6NjAwOyBsZXR0ZXItc3BhY2luZzowLjAxZW07IHRyYW5zaXRpb246Y29sb3IgMC4ycyAkZWFzZTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWF0LW1kYy10YWItYm9keS13cmFwcGVyIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJvcmRlci13aWR0aDowLjEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIElubmVyIGFuYWx5dGljcyB0YWJzIChDYXRlZ29yeSBSZXBvcnQgLyBRdWVzdGlvbiBTdW1tYXJ5KSDDosKUwoDDosKUwoBcclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWF0LW1kYy10YWItaGVhZGVyIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBwYWRkaW5nOjAgMC43NXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tYXQtbWRjLXRhYi1sYWJlbHMgeyBtaW4taGVpZ2h0OjIuNjI1cmVtOyBnYXA6MC4yNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXdlaWdodDo2MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IHBhZGRpbmc6MCAxcmVtOyBtaW4taGVpZ2h0OjIuNjI1cmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbSAwLjVyZW0gMCAwOyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0yKTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWItLWFjdGl2ZSB7IGJhY2tncm91bmQ6dmFyKC0tYmctMik7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB0cmFuc2l0aW9uOmNvbG9yIDAuMnMgJGVhc2U7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJvcmRlci13aWR0aDowLjEyNXJlbTsgfVxyXG5cclxuLnJlcG9ydC1zdW1tYXJ5LWdyaWQgeyBkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpOyBnYXA6MC44NzVyZW07IHBhZGRpbmc6MS4yNXJlbSAxcmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5hbmFseXRpY3Mtc3VtbWFyeS1ncmlkIHsgcGFkZGluZzowLjI1cmVtIDAgMXJlbTsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTpub25lOyB9XHJcbi5zdW1tYXJ5LWNhcmQgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7IGdhcDowLjg3NXJlbTsgbWluLXdpZHRoOjA7IHBhZGRpbmc6MXJlbSAxLjEyNXJlbTsgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3gtc2hhZG93OjAgMC4yNXJlbSAwLjc1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IHRyYW5zaXRpb246dHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlLCBib3gtc2hhZG93IDAuMjVzICRlYXNlOyB9XHJcbi5zdW1tYXJ5LWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4xODc1cmVtKTsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzowIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IH1cclxuLnN1bW1hcnktaWNvbiB7IHdpZHRoOjIuNzVyZW07IGhlaWdodDoyLjc1cmVtOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZmxleC1zaHJpbms6MDsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDp2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IHRyYW5zaXRpb246dHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlOyB9XHJcbi5zdW1tYXJ5LWljb246aG92ZXIgeyB0cmFuc2Zvcm06c2NhbGUoMS4wNSk7IH1cclxuLnN1bW1hcnktaWNvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxLjI1cmVtOyB3aWR0aDoxLjI1cmVtOyBoZWlnaHQ6MS4yNXJlbTsgfVxyXG4vLyBJY29uIGNvbG9yIHZhcmlhbnRzXHJcbi5zdW1tYXJ5LWljb24tLXN0dWRlbnRzIHsgYmFja2dyb3VuZDpyZ2JhKDk5LDEwMiwyNDEsMC4xKTsgY29sb3I6IzYzNjZmMTsgfVxyXG4uc3VtbWFyeS1pY29uLS1wYWdlIHsgYmFja2dyb3VuZDpyZ2JhKDU5LDEzMCwyNDYsMC4xKTsgY29sb3I6IzNiODJmNjsgfVxyXG4uc3VtbWFyeS1pY29uLS1zY29yZSB7IGJhY2tncm91bmQ6cmdiYSgyNDUsMTU4LDExLDAuMSk7IGNvbG9yOiNmNTllMGI7IH1cclxuLnN1bW1hcnktaWNvbi0tcGFzcyB7IGJhY2tncm91bmQ6cmdiYSgxNiwxODUsMTI5LDAuMSk7IGNvbG9yOiMxMGI5ODE7IH1cclxuLnN1bW1hcnktaWNvbi0tY2F0ZWdvcmllcyB7IGJhY2tncm91bmQ6cmdiYSgxMzksOTIsMjQ2LDAuMSk7IGNvbG9yOiM4YjVjZjY7IH1cclxuLnN1bW1hcnktaWNvbi0tcXVlc3Rpb25zIHsgYmFja2dyb3VuZDpyZ2JhKDU5LDEzMCwyNDYsMC4xKTsgY29sb3I6IzNiODJmNjsgfVxyXG4uc3VtbWFyeS1pY29uLS1hdHRlbXB0cyB7IGJhY2tncm91bmQ6cmdiYSg5OSwxMDIsMjQxLDAuMSk7IGNvbG9yOiM2MzY2ZjE7IH1cclxuLnN1bW1hcnktaWNvbi0tbWlzdGFrZXMgeyBiYWNrZ3JvdW5kOnJnYmEoMjM5LDY4LDY4LDAuMSk7IGNvbG9yOiNlZjQ0NDQ7IH1cclxuLnN1bW1hcnktY29weSB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC4yNXJlbTsgbWluLXdpZHRoOjA7IH1cclxuLnN1bW1hcnktbGFiZWwgeyBmb250LXNpemU6dmFyKC0tZm9udC14cyk7IGZvbnQtd2VpZ2h0OjcwMDsgbGV0dGVyLXNwYWNpbmc6MC4wOGVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4uc3VtbWFyeS12YWx1ZSB7IGZvbnQtc2l6ZTpjbGFtcCgxLjI1cmVtLCAxLjA1cmVtICsgMC43dncsIDEuNzVyZW0pOyBmb250LXdlaWdodDo4MDA7IGxpbmUtaGVpZ2h0OjE7IGxldHRlci1zcGFjaW5nOi0wLjAzZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4uc3VtbWFyeS1tZXRhIHsgZm9udC1zaXplOnZhcigtLWZvbnQteHNtKTsgZm9udC13ZWlnaHQ6NTAwOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMik7IHdoaXRlLXNwYWNlOm5vd3JhcDsgb3ZlcmZsb3c6aGlkZGVuOyB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzOyB9XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gVEFCIEFDVElPTlMgw6LCgMKUIENvbXBhY3QgU2VhcmNoICYgQWN0aW9uIEJhciAoSW5zaWRlIFRhYnMpXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4udGFiLWFjdGlvbnMgeyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDoxcmVtOyBwYWRkaW5nOjAuODc1cmVtIDFyZW0gMXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgbWFyZ2luOjA7IH1cclxuXHJcbi8vIENvbXBhY3QgU2VhcmNoXHJcbi50YWItYWN0aW9ucyAuc2VhcmNoIHsgZmxleDoxOyBtYXgtd2lkdGg6MjByZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIG1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJvcmRlcjoxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOjAuNzVyZW07IHBhZGRpbmc6MCAwLjc1cmVtOyB0cmFuc2l0aW9uOmFsbCAwLjJzICRlYXNlOyBib3gtc2hhZG93OjAgMC41cmVtIDFyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1kYy1ub3RjaGVkLW91dGxpbmUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtbWRjLWZvcm0tZmllbGQtZmxleCB7IGhlaWdodDogMi4zNzVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjM3NXJlbSAwOyBtaW4taGVpZ2h0OiB1bnNldDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwgeyB0b3A6MS4xODc1cmVtOyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIGlucHV0IHsgZm9udC1zaXplOjAuODEyNXJlbTsgZm9udC13ZWlnaHQ6NTAwOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIGlucHV0OjpwbGFjZWhvbGRlciB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWljb25bbWF0UHJlZml4XSB7IGNvbG9yOnZhcigtLXRoZW1lLTMtaWNvbi0xKTsgbWFyZ2luLXJpZ2h0OjAuNXJlbTsgZm9udC1zaXplOjEuMTI1cmVtOyB3aWR0aDoxLjEyNXJlbTsgaGVpZ2h0OjEuMTI1cmVtOyB0cmFuc2l0aW9uOmFsbCAwLjJzICRlYXNlOyB9XHJcbi50YWItYWN0aW9ucyAuc2VhcmNoOmhvdmVyIDo6bmctZGVlcCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIgeyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OjAgMC43NXJlbSAxLjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfVxyXG4udGFiLWFjdGlvbnMgLnNlYXJjaDpob3ZlciA6Om5nLWRlZXAgbWF0LWljb25bbWF0UHJlZml4XSB7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1mb2N1c2VkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlcixcclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIG1hdC1pY29uW21hdFByZWZpeF0ge1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vLyBDb21wYWN0IEFjdGlvbiBCdXR0b25zXHJcbi50YWItYWN0aW9ucyAuY29udHJvbHMgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNXJlbTsgfVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgeyBkaXNwbGF5OmZsZXg7IGdhcDowLjM3NXJlbTsgYWxpZ24taXRlbXM6Y2VudGVyOyB9XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b24geyBoZWlnaHQ6Mi4yNXJlbTsgcGFkZGluZzowIDAuODc1cmVtOyBmb250LXNpemU6MC43NXJlbTsgZm9udC13ZWlnaHQ6NjAwOyBsZXR0ZXItc3BhY2luZzotMC4wMWVtOyBib3JkZXItcmFkaXVzOjAuNjI1cmVtOyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGdhcDowLjM3NXJlbTsgdHJhbnNpdGlvbjphbGwgMC4ycyAkZWFzZTsgfVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uIG1hdC1pY29uIHsgZm9udC1zaXplOjFyZW07IHdpZHRoOjFyZW07IGhlaWdodDoxcmVtOyB9XHJcbi8vIFNlY29uZGFyeSBidXR0b24gc3R5bGUgKFNlYXJjaCwgRXhwb3J0KVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1zdHJva2VkLWJ1dHRvbl0sXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWJ1dHRvbl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxuICBib3gtc2hhZG93OiAwIDAuNXJlbSAxcmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7XHJcbn1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtc3Ryb2tlZC1idXR0b25dOmhvdmVyLFxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1idXR0b25dOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC43NXJlbSAxLjVyZW0gdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxufVxyXG4vLyBQcmltYXJ5IGJ1dHRvbiBzdHlsZVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1mbGF0LWJ1dHRvbl0ge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJ1dHRvbi0xKSAwJSwgdmFyKC0tYnV0dG9uLTEtaG92ZXIpIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG59XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWZsYXQtYnV0dG9uXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEtaG92ZXIpIDAlLCB2YXIoLS1idXR0b24tMSkgMTAwJSk7XHJcbiAgYm94LXNoYWRvdzogMCAxcmVtIDJyZW0gdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFByZW1pdW0gdGFibGUgw6LClMKAw6LClMKAXHJcbi50YWJsZS13cmFwIHsgb3ZlcmZsb3cteDphdXRvOyBwYWRkaW5nOjAgMXJlbSAxcmVtOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHsgd2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IGJvcmRlci1yYWRpdXM6MC41cmVtOyBvdmVyZmxvdzpoaWRkZW47IH1cclxuLnByZW1pdW0tdGFibGUgdGgubWF0LWhlYWRlci1jZWxsIHsgcG9zaXRpb246IHN0aWNreTsgdG9wOiAwOyB6LWluZGV4OiAyOyBiYWNrZ3JvdW5kOiB2YXIoLS10YWJsZS1oZWFkZXItYmcsICNmOGZhZmMpOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODEyNXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci10ZXh0LCAjNDc1NTY5KTsgcGFkZGluZzogMC43NXJlbSAwLjg3NXJlbTsgYm9yZGVyLWJvdHRvbTogMC4xMjVyZW0gc29saWQgI2UyZThmMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQgeyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucHJlbWl1bS10YWJsZSB0ZC5tYXQtY2VsbCB7IHBhZGRpbmc6IDAuNjI1cmVtIDAuODc1cmVtOyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjMzM0MTU1KTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkICNmMWY1Zjk7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRyLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHRkIHsgYmFja2dyb3VuZDogcmdiYSgyNDgsMjUwLDI1MiwwLjUpOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRyLm1hdC1yb3c6aG92ZXIgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wNDUpOyBib3gtc2hhZG93OiBpbnNldCAwLjE4NzVyZW0gMCAwIHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4uc3R1ZGVudC1uYW1lIHsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IHZhcigtLWZvbnQtbWQpOyBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4uc3R1ZGVudC1uYW1lOmhvdmVyIHsgb3BhY2l0eTogMC44NTsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xMjVyZW07IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjA2MjVyZW0pOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3R1ZGVudCAvIENhdGVnb3J5IGF2YXRhciBjZWxscyDDosKUwoDDosKUwoBcclxuLnN0dWRlbnQtY2VsbCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC42MjVyZW07IGN1cnNvcjpwb2ludGVyOyB9XHJcbi5zdHVkZW50LWF2YXRhciB7IHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6I2ZmZjsgZmxleC1zaHJpbms6MDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpOyB9XHJcbi5jYXRlZ29yeS1jZWxsIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjYyNXJlbTsgY3Vyc29yOnBvaW50ZXI7IH1cclxuLmNhdGVnb3J5LWF2YXRhciB7IHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6I2ZmZjsgZmxleC1zaHJpbms6MDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgaW5saW5lIMOiwpTCgMOiwpTCgFxyXG4ubWFya3MtaW5saW5lIHsgZm9udC13ZWlnaHQ6NjAwOyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLm1hcmtzLXNlcCB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgbWFyZ2luOjAgMC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQZXJjZW50YWdlIGJhZGdlIMOiwpTCgMOiwpTCgFxyXG4ucGN0LWJhZGdlIHsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBwYWRkaW5nOjAuMTg3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6MC4zNzVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBmb250LXdlaWdodDo3MDA7IGJhY2tncm91bmQ6cmdiYSg5OSwxMDIsMjQxLDAuMDgpOyBjb2xvcjojNjM2NmYxOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFudWFsIHJldmlldyBzdGF0dXMgw6LClMKAw6LClMKAXHJcbi5yZXZpZXctc3RhdHVzIHsgZm9udC1zaXplOjAuODEyNXJlbTsgZm9udC13ZWlnaHQ6NTAwOyB9XHJcbi5yZXZpZXctc3RhdHVzLnJldmlldy1wZW5kaW5nIHsgY29sb3I6dmFyKC0tb3JhbmdlLXRleHQpOyBmb250LXdlaWdodDo2MDA7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXN1bHQgcGlsbHMgw6LClMKAw6LClMKAXHJcbi5yZXN1bHQtcGlsbCB7IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowLjE4NzVyZW0gMC42MjVyZW07IGJvcmRlci1yYWRpdXM6MXJlbTsgZm9udC1zaXplOjAuNjg3NXJlbTsgZm9udC13ZWlnaHQ6NzAwOyBsZXR0ZXItc3BhY2luZzowLjAzZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMDQpOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuLnJlc3VsdC1waWxsLnJlc3VsdC1wYXNzIHsgYmFja2dyb3VuZDp2YXIoLS1ncmVlbi1iZyk7IGNvbG9yOnZhcigtLWdyZWVuLXRleHQpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5yZXN1bHQtcGlsbC5yZXN1bHQtZmFpbCB7IGJhY2tncm91bmQ6dmFyKC0tcmVkLWJnKTsgY29sb3I6dmFyKC0tcmVkLXRleHQpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFRhYmxlIHdyYXAgc2Nyb2xsYmFyIMOiwpTCgMOiwpTCgFxyXG4udGFibGUtd3JhcCB7XHJcbiAgc2Nyb2xsYmFyLXdpZHRoOiB0aGluO1xyXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMikgdHJhbnNwYXJlbnQ7XHJcbiAgXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBoZWlnaHQ6IDAuMzc1cmVtOyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMik7IGJvcmRlci1yYWRpdXM6IDAuMTg3NXJlbTsgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMzUpOyB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBBbmFseXRpY3Mgc2VjdGlvbiDDosKUwoDDosKUwoBcclxuLmFuYWx5dGljcy1zZWN0aW9uIHsgcGFkZGluZzoxLjI1cmVtOyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjEuMTI1cmVtOyB9XHJcbi5hbmFseXRpY3Mtc2VjdGlvbiAudGFibGUtd3JhcCB7IG1heC1oZWlnaHQ6NjB2aDsgb3ZlcmZsb3c6YXV0bzsgYm9yZGVyLXJhZGl1czowLjYyNXJlbTsgYm94LXNoYWRvdzokc2hhZG93LXNtOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhZ2VyIMOiwpTCgMOiwpTCgFxyXG4ucGFnZXIgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZ2FwOjFyZW07IHBhZGRpbmc6MC44NzVyZW0gMS4yNXJlbTsgYm9yZGVyLXRvcDowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0yKTsgfVxyXG4ucGFnZXIgc3BhbiB7IHBhZGRpbmc6MC4yNXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOjAuMzc1cmVtOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ucGFnZXIgYnV0dG9uIHsgYm9yZGVyLXJhZGl1czowLjVyZW0gIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7IHBhZGRpbmc6MC4zNzVyZW0gMXJlbSAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2UgIWltcG9ydGFudDsgfVxyXG4ucGFnZXIgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7IGJveC1zaGFkb3c6JHNoYWRvdy1tZCAhaW1wb3J0YW50OyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4wNjI1cmVtKTsgYmFja2dyb3VuZDp2YXIoLS1iZy0yKSAhaW1wb3J0YW50OyB9XHJcbi5wYWdlciBidXR0b25bZGlzYWJsZWRdIHsgb3BhY2l0eTowLjQ7IH1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxyXG59XHJcblxyXG4ubG9hZGVyLXBsYWNlaG9sZGVyIHsgXHJcbiAgcGFkZGluZzogMi41cmVtOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IFxyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07IFxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDAuMDIpIDI1JSwgcmdiYSgwLDAsMCwwLjA1KSA1MCUsIHJnYmEoMCwwLDAsMC4wMikgNzUlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICBhbmltYXRpb246IHNoaW1tZXIgMS41cyBpbmZpbml0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgV3JvbmctYW5zd2VyIGxpbmsgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LWxpbmsgeyBtYXJnaW4tbGVmdDogMC4zNzVyZW07IGZvbnQtc2l6ZTogMC44NXJlbTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgY3Vyc29yOiBwb2ludGVyOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjEyNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4ud3Jvbmctc3VtbWFyeS1saW5rOmhvdmVyIHsgb3BhY2l0eTogMC44OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4xMjVyZW0pOyB9XHJcbi53YS1jb3VudC1saW5rIHsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xMjVyZW07IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDcwMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCBjb2xvciAwLjJzICRlYXNlOyB9XHJcbi53YS1jb3VudC1saW5rOmhvdmVyIHsgb3BhY2l0eTogMC44NTsgfVxyXG4ud2EtYW5zd2VyLWxpbmsgeyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBmb250LXdlaWdodDogNzAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLndhLWFuc3dlci1saW5rOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMDYyNXJlbSk7IH1cclxuLm11dGVkIHsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC1zaXplOiAwLjg1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU2hhcmVkIGJhY2tkcm9wICsgcGFuZWwgw6LClMKAw6LClMKAXHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6IDAgfSB0byB7IG9wYWNpdHk6IDEgfSB9XHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS4yNXJlbSkgc2NhbGUoMC45NikgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSB9IH1cclxuQGtleWZyYW1lcyBzdWJ0bGVQdWxzZSB7IDAlLCAxMDAlIHsgYm94LXNoYWRvdzogMCAxLjVyZW0gMy43NXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9IDUwJSB7IGJveC1zaGFkb3c6IDAgMS43NXJlbSA0cmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7IH0gfVxyXG5cclxuLndyb25nLXN1bW1hcnktYmFja2Ryb3AgeyBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwOyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMTUsIDIzLCA0MiwgMC41NSkgMCUsIHJnYmEoMzAsIDQxLCA1OSwgMC43NSkgMTAwJSk7IC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNzVyZW0pIHNhdHVyYXRlKDE0MCUpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC43NXJlbSkgc2F0dXJhdGUoMTQwJSk7IHotaW5kZXg6IDEwMDUwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgcGFkZGluZzogMS41cmVtOyBhbmltYXRpb246IGZhZGVJbiAwLjI1cyAkZWFzZTsgfVxyXG5cclxuLndyb25nLXN1bW1hcnktcGFuZWwsXHJcbi5yZXNvdXJjZS1wYW5lbCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IG1pbig1NnJlbSwgOTJ2dyk7IG1heC1oZWlnaHQ6IDg4dmg7IHotaW5kZXg6IDEwMDYwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbmltYXRpb246IHNsaWRlVXAgMC4zNXMgJGVhc2UtYm91bmNlOyBtYXJnaW46IGF1dG87IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLmNhcmQsXHJcbi5yZXNvdXJjZS1wYW5lbCAuY2FyZCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IG1heC1oZWlnaHQ6IDg4dmg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAxLjI1cmVtOyBib3gtc2hhZG93OiAwIDJyZW0gNC41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4yOCksIDAgMC43NXJlbSAxLjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhbmVsIGhlYWRlciDDosKUwoDDosKUwoBcclxuLnBhbmVsLWhlYWRlciB7IHBvc2l0aW9uOnJlbGF0aXZlOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGdhcDoxcmVtOyBwYWRkaW5nOjEuMjVyZW0gMS41cmVtOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBmbGV4LXNocmluazowOyB9XHJcbi5wYW5lbC1oZWFkZXI6OmJlZm9yZSB7IGNvbnRlbnQ6Jyc7IHBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBib3R0b206MDsgd2lkdGg6MC4xODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJ1dHRvbi0xKSwgdHJhbnNwYXJlbnQpOyBib3JkZXItcmFkaXVzOjAgMC4xODc1cmVtIDAuMTg3NXJlbSAwOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1pbmZvIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjg3NXJlbTsgbWluLXdpZHRoOjA7IGZsZXg6MTsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItY29weSB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC4xODc1cmVtOyBtaW4td2lkdGg6MDsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiB7IHdpZHRoOjNyZW07IGhlaWdodDozcmVtOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZmxleC1zaHJpbms6MDsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OjAgMC41cmVtIDEuMjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKSwgaW5zZXQgMCAwIDAgMC4wNjI1cmVtIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxLjM3NXJlbTsgd2lkdGg6MS4zNzVyZW07IGhlaWdodDoxLjM3NXJlbTsgfVxyXG4ucGFuZWwtaGVhZGVyIGg0IHsgbWFyZ2luOjA7IGZvbnQtc2l6ZToxLjA2MjVyZW07IGZvbnQtd2VpZ2h0OjgwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5wYW5lbC1oZWFkZXIgLnBhbmVsLXN1YiB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgbWFyZ2luLXRvcDowOyBsaW5lLWhlaWdodDoxLjQ7IH1cclxuLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXSB7IHdpZHRoOjIuNXJlbTsgaGVpZ2h0OjIuNXJlbTsgYm9yZGVyLXJhZGl1czowLjc1cmVtOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7IGZsZXgtc2hyaW5rOjA7IH1cclxuLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXTpob3ZlciB7IGJhY2tncm91bmQ6dmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB0cmFuc2Zvcm06cm90YXRlKDkwZGVnKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhbmVsIGJvZHkgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5IHsgcGFkZGluZzoxLjEyNXJlbSAxLjM3NXJlbTsgb3ZlcmZsb3c6YXV0bzsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnF1ZXN0aW9uLXRpdGxlIHsgZm9udC13ZWlnaHQ6NzAwOyBtYXJnaW4tYm90dG9tOjAuODc1cmVtOyBmb250LXNpemU6MC45Mzc1cmVtOyBsZXR0ZXItc3BhY2luZzotMC4wMWVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IHBhZGRpbmc6MC44NzVyZW0gMXJlbTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnNtYWxsLW11dGVkIHsgZm9udC1zaXplOjAuNjg3NXJlbTsgcGFkZGluZy1sZWZ0OjA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFN1bW1hcnkgdGFibGUgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHsgd2lkdGg6MTAwJTsgYm9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlOyBib3JkZXItc3BhY2luZzowIDAuNXJlbTsgbWFyZ2luOjAgYXV0bzsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB0aCB7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOjAuNzVyZW0gMXJlbTsgZm9udC13ZWlnaHQ6NzAwOyBmb250LXNpemU6MC43NXJlbTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzowLjA2ZW07IGNvbG9yOnZhcigtLXRoZW1lLTEtdGV4dC0xKTsgYmFja2dyb3VuZDp2YXIoLS10YWJsZS1oZWFkZXItYmcpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowLjYyNXJlbSAwIDAgMC42MjVyZW07IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQgdGg6bGFzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6MCAwLjYyNXJlbSAwLjYyNXJlbSAwOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRyIHsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4xNXMgJGVhc2U7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdHI6aG92ZXIgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4xMjVyZW0pOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkIHsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IHRleHQtYWxpZ246Y2VudGVyOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgdHJhbnNpdGlvbjpib3JkZXItY29sb3IgMC4xNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgJGVhc2UsIGJhY2tncm91bmQgMC4xNXMgJGVhc2U7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAuNjI1cmVtIDAgMCAwLjYyNXJlbTsgdGV4dC1hbGlnbjpsZWZ0OyBmb250LXdlaWdodDo2MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpsYXN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowIDAuNjI1cmVtIDAuNjI1cmVtIDA7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdHI6aG92ZXIgdGQgeyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTIpOyBib3gtc2hhZG93OjAgMC41cmVtIDEuMjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfVxyXG4ud2EtYW5zd2VyLWxpbmssIC53YS1jb3VudC1saW5rIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBmb250LXdlaWdodDo2MDA7IHRyYW5zaXRpb246b3BhY2l0eSAwLjE1cyAkZWFzZTsgfVxyXG4ud2EtYW5zd2VyLWxpbms6aG92ZXIsIC53YS1jb3VudC1saW5rOmhvdmVyIHsgb3BhY2l0eTowLjc1OyB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6MC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTdW1tYXJ5IGFjdGlvbnMgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LWFjdGlvbnMsXHJcbi5zdW1tYXJ5LWFjdGlvbnMgeyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpmbGV4LWVuZDsgZ2FwOjAuNXJlbTsgcGFkZGluZzowLjg3NXJlbSAxLjM3NXJlbTsgYm9yZGVyLXRvcDowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgfVxyXG4uc3VtbWFyeS1hY3Rpb25zIGJ1dHRvbiB7IGJvcmRlci1yYWRpdXM6MC42MjVyZW0gIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6NzAwICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjE1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjE1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMTVzICRlYXNlICFpbXBvcnRhbnQ7IH1cclxuLnN1bW1hcnktYWN0aW9ucyBidXR0b246aG92ZXIgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4wNjI1cmVtKTsgYm94LXNoYWRvdzowIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZykgIWltcG9ydGFudDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFJlc291cmNlIHBhbmVsIMOiwpTCgMOiwpTCgFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHksIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5yZXNvdXJjZS1saXN0IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjc1cmVtOyB9XHJcbi5yZXNvdXJjZS1saXN0IHsgbGlzdC1zdHlsZTpub25lOyBwYWRkaW5nOjA7IG1hcmdpbjowOyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuNzVyZW07IH1cclxuLnJlc291cmNlLWxpc3QgbGkgeyBwYWRkaW5nOjAuODc1cmVtIDFyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjc1cmVtOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgdHJhbnNpdGlvbjpib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2U7IH1cclxuLnJlc291cmNlLWxpc3QgbGk6aG92ZXIgeyBib3gtc2hhZG93OjAgMXJlbSAycmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuLnJlcy10aXRsZSB7IGZvbnQtd2VpZ2h0OjcwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyBsZXR0ZXItc3BhY2luZzotMC4wMWVtOyB9XHJcbi5yZXMtZGVzYyB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4ucmVzLWFjdGlvbnMgYSB7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKTsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXNpemU6IDAuODEyNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjE1cyAkZWFzZTsgfVxyXG4ucmVzLWFjdGlvbnMgYTpob3ZlciB7IG9wYWNpdHk6IDAuOTsgYm94LXNoYWRvdzogJHNoYWRvdy1zbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFNjcm9sbGJhciDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHksXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keSxcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5IHsgb3ZlcmZsb3c6IGF1dG87IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgaGVpZ2h0OiAwLjM3NXJlbTsgd2lkdGg6IDAuMzc1cmVtOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFVzZXIgUmV2aWV3IFBhbmVsIMOiwpTCgMOiwpTCgFxyXG4udXNlci1yZXZpZXctcGFuZWwgeyB3aWR0aDogbWluKDcycmVtLCA5NHZ3KTsgbWF4LWhlaWdodDogOTB2aDsgbWFyZ2luOiBhdXRvOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAuY2FyZCB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBtYXgtaGVpZ2h0Ojkwdmg7IGJvcmRlci1yYWRpdXM6MS4yNXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJveC1zaGFkb3c6MCAycmVtIDQuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMjgpLCAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBvdmVyZmxvdzpoaWRkZW47IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBnYXA6MXJlbTsgcGFkZGluZzoxLjI1cmVtIDEuNXJlbTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgZmxleC1zaHJpbms6MDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlcjo6YmVmb3JlIHsgY29udGVudDonJzsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDowLjE4NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYnV0dG9uLTEpLCB0cmFuc3BhcmVudCk7IGJvcmRlci1yYWRpdXM6MCAwLjE4NzVyZW0gMC4xODc1cmVtIDA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pbmZvIHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjVyZW07IGZsZXg6MTsgbWluLXdpZHRoOjA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIHsgd2lkdGg6M3JlbTsgaGVpZ2h0OjNyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZykgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjVyZW0gMS4yNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpLCBpbnNldCAwIDAgMCAwLjA2MjVyZW0gdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBmbGV4LXNocmluazowOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxLjM3NXJlbTsgd2lkdGg6MS4zNzVyZW07IGhlaWdodDoxLjM3NXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciBoNCB7IG1hcmdpbjowOyBmb250LXNpemU6MS4xMjVyZW07IGZvbnQtd2VpZ2h0OjgwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciBoMyB7IG1hcmdpbjowOyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyBmbGV4LXdyYXA6d3JhcDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuc2NvcmUgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMik7IGZvbnQtd2VpZ2h0OjYwMDsgcGFkZGluZzowLjI1cmVtIDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0IHsgZm9udC13ZWlnaHQ6NzAwOyBwYWRkaW5nOjAuMjVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czo2Mi41cmVtOyBmb250LXNpemU6MC43NXJlbTsgbGV0dGVyLXNwYWNpbmc6MC4wNGVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGJveC1zaGFkb3c6MCAwLjEyNXJlbSAwLjVyZW0gcmdiYSgxNSwyMyw0MiwwLjA4KTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0LnBhc3MgeyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0LmZhaWwgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXZpZXctY2xvc2UtYnRuIHtcclxuICB3aWR0aDogMi43NXJlbTtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgbWluLXdpZHRoOiAyLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZTtcclxuICBmbGV4OiAwIDAgMi43NXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0biBtYXQtaWNvbiB7XHJcbiAgd2lkdGg6IDEuMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuMzc1cmVtIDAuODc1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG46Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogMC4xMjVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwLjEyNXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLXN1YiB7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5IHsgZmxleDoxOyBvdmVyZmxvdzphdXRvOyBtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAxMHJlbSk7IHBhZGRpbmc6IDEuNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEF0dGVtcHQgaGVhZGVyIMOiwpTCgMOiwpTCgFxyXG4uYXR0ZW1wdC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDAuMzc1cmVtOyBwYWRkaW5nOiAwLjc1cmVtIDA7IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpOyBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTsgfVxyXG4uYXR0ZW1wdC1oZWFkZXIgaDUgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjc1cmVtOyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTsgfVxyXG4uYXR0ZW1wdC1oZWFkZXIgLnNjb3JlLWJhZGdlIHsgYmFja2dyb3VuZDogI2U5ZjdlZjsgY29sb3I6ICMwYTgwNDM7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44NzVyZW07IG1hcmdpbi1sZWZ0OiBhdXRvOyBsZXR0ZXItc3BhY2luZzogMC4wMWVtOyB9XHJcbi5hdHRlbXB0LW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNzVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpOyBmb250LXNpemU6IDAuODEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFF1ZXN0aW9uIHJldmlldyBjYXJkcyDDosKUwoDDosKUwoBcclxuLnF1ZXN0aW9ucy1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxcmVtOyBtYXJnaW4tdG9wOiAwLjVyZW07IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIHsgcG9zaXRpb246cmVsYXRpdmU7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC44NzVyZW07IHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlOyBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMzc1cmVtIHJnYmEoMTUsMjMsNDIsMC4wMyk7IG92ZXJmbG93OmhpZGRlbjsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQ6OmJlZm9yZSB7IGNvbnRlbnQ6Jyc7IHBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBib3R0b206MDsgd2lkdGg6MC4xODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJ1dHRvbi0xKSAwJSwgcmdiYSg5OSwxMDIsMjQxLDAuNCkgMTAwJSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkOmhvdmVyIHsgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNzVyZW0gcmdiYSgxNSwyMyw0MiwwLjA4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMjUpOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZCAucS10ZXh0IHsgZm9udC13ZWlnaHQ6IDUwMDsgbGluZS1oZWlnaHQ6IDEuNTU7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIC5tYXJrLWJhZGdlIHsgZmxvYXQ6IHJpZ2h0OyBiYWNrZ3JvdW5kOiAjZmZmM2YzOyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjc1cmVtOyB9XHJcblxyXG4ucS1oZWFkLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogMXJlbTsgcGFkZGluZy1ib3R0b206IDFyZW07IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBkYXNoZWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5xLWxlZnQgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuODc1cmVtOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XHJcbi5xLWJvZHkgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDAuNXJlbTsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XHJcbi5xLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XHJcbi5xLWluZGV4IHsgd2lkdGg6IDIuMjVyZW07IGhlaWdodDogMi4yNXJlbTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwxMDIsMjQxLDAuMTgpIDAlLCByZ2JhKDk5LDEwMiwyNDEsMC4wNikgMTAwJSk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjE4KTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXdlaWdodDogODAwOyBmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBmbGV4LXNocmluazogMDsgfVxyXG4ucS1yaWdodCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC42MjVyZW07IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IGZsZXgtc2hyaW5rOiAwOyB9XG4ucS1iYWRnZSB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBwYWRkaW5nOiAwLjI1cmVtIDAuNjI1cmVtOyBmb250LXNpemU6IDAuNjg3NXJlbTsgbGluZS1oZWlnaHQ6IDFyZW07IHdpZHRoOiBmaXQtY29udGVudDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG4ucS1pbmZvIHsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC1zaXplOiAwLjgxMjVyZW07IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuMzc1cmVtOyBmb250LXdlaWdodDogNTAwOyB9XHJcbi5xLWluZm8gbWF0LWljb24geyBmb250LXNpemU6IDAuOTM3NXJlbTsgd2lkdGg6IDAuOTM3NXJlbTsgaGVpZ2h0OiAwLjkzNzVyZW07IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IH1cclxuLnEtbWFya3Muc21hbGwtbXV0ZWQgeyBjb2xvcjogcmdiYSgwLDAsMCwwLjYpOyBmb250LXNpemU6IDAuODc1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUXVlc3Rpb24gb3B0aW9ucyAoY2hvb3NlIC8gbXVsdGkpIMOiwpTCgMOiwpTCgFxyXG4ucS1vcHRpb25zIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDAuNjI1cmVtOyB9XHJcbi5xLW9wdGlvbnMudHdvLWNvbCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAwLjc1cmVtOyB9XHJcbi5xLW9wdGlvbiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC43NXJlbTsgcGFkZGluZzogMC43NXJlbSAwLjg3NXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7IGJhY2tncm91bmQ6ICNmOGZiZmY7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIGJhY2tncm91bmQgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2UsIGJvcmRlci1jb2xvciAwLjI1cyAkZWFzZTsgfVxyXG4ucS1vcHRpb246aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LW1kOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IH1cclxuLm9wdC1sZWZ0IHsgd2lkdGg6IDIuNXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5vcHQtbGVmdCAub3B0LW1hcmsgeyB3aWR0aDogMnJlbTsgaGVpZ2h0OiAycmVtOyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAwLjgxMjVyZW07IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgJGVhc2U7IH1cclxuLm9wdC1ib2R5IHsgZmxleDogMTsgcGFkZGluZy1yaWdodDogMC43NXJlbTsgYWxpZ24tc2VsZjogY2VudGVyOyBsaW5lLWhlaWdodDogMS40NTsgfVxyXG4ub3B0LWJhZGdlIHsgbWFyZ2luLWxlZnQ6IGF1dG87IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4zNzVyZW07IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5iYWRnZSB7IHBhZGRpbmc6IDAuMjVyZW0gMC42MjVyZW07IGJvcmRlci1yYWRpdXM6IDFyZW07IGZvbnQtc2l6ZTogMC42ODc1cmVtOyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsZXR0ZXItc3BhY2luZzogMC4wMmVtOyB9XHJcbi5iYWRnZS55b3VyLWFuc3dlciB7IGJhY2tncm91bmQ6IHZhcigtLXJlZC1iZyk7IGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG4uYmFkZ2UuY29ycmVjdCB7IGJhY2tncm91bmQ6ICNlOGY5ZWY7IGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLmJhZGdlLm1pc3NlZCB7IGJhY2tncm91bmQ6IHZhcigtLWJsdWUtYmcpOyBjb2xvcjogdmFyKC0tYmJsdWUtdGV4dCk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtb3B0aW9uLnNlbGVjdGVkIHsgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJnKTsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmVkLWJvcmRlcik7IH1cclxuLnEtb3B0aW9uLnNlbGVjdGVkIC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMTg1LDI4LDI4LDAuMSk7IH1cclxuLnEtb3B0aW9uLmNvcnJlY3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZyk7IGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uY29ycmVjdCAub3B0LW1hcmsgeyBiYWNrZ3JvdW5kOiByZ2JhKDIyLDEwMSw1MiwwLjEpOyB9XHJcbi5xLW9wdGlvbi5taXNzZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWJnKTsgY29sb3I6IHZhcigtLWJibHVlLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtb3B0aW9uLm1pc3NlZCAub3B0LW1hcmsgeyBiYWNrZ3JvdW5kOiByZ2JhKDExLDEwMiwyMDgsMC4xKTsgfVxyXG5cclxuLnEtc2VsZWN0ZWQsIC5xLW1hcmtzIHsgbWFyZ2luLXRvcDogMC41cmVtOyBmb250LXNpemU6IDAuODc1cmVtOyB9XHJcbi5xLWZlZWRiYWNrIHsgbWFyZ2luLXRvcDogMC42MjVyZW07IGJhY2tncm91bmQ6IHJnYmEoMjQwLDI0OCwyNTUsMC42KTsgcGFkZGluZzogMC42MjVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjc1KTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBsaW5lLWhlaWdodDogMS41OyB9XG4ucS1ldmFsdWF0aW9uLXN0YXRlIHsgbWFyZ2luLXRvcDogMC42MjVyZW07IHBhZGRpbmc6IDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMXJlbTsgfVxuLnEtZXZhbHVhdGlvbi1zdGF0ZS5mYWlsZWQgeyBjb2xvcjogIzhhMWMxYzsgYmFja2dyb3VuZDogI2ZmZjJmMjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2VmYjRiNDsgfVxuLnEtZXZhbHVhdGlvbi1zdGF0ZS5wZW5kaW5nIHsgY29sb3I6ICM2YzRhMDA7IGJhY2tncm91bmQ6ICNmZmY4ZTY7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNlN2NhN2E7IH1cbi5yZXRyeS1ldmFsdWF0aW9uLWJ0biB7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIGN1cnJlbnRDb2xvcjsgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IHBhZGRpbmc6IDAuNHJlbSAwLjdyZW07IGNvbG9yOiBpbmhlcml0OyBiYWNrZ3JvdW5kOiAjZmZmOyBjdXJzb3I6IHBvaW50ZXI7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbi5yZXRyeS1ldmFsdWF0aW9uLWJ0bjpkaXNhYmxlZCB7IGN1cnNvcjogd2FpdDsgb3BhY2l0eTogMC42OyB9XG4ucmV2aWV3LWVtcHR5IHsgcGFkZGluZzogMC43NXJlbSAwLjI1cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTsgZm9udC1zdHlsZTogaXRhbGljOyB9XG5cclxuLy8gw6LClMKAw6LClMKAIE1hcmtzIGJhZGdlIHN0YXRlcyDDosKUwoDDosKUwoBcclxuLnEtbWFya3MubWFyay1wb3NpdGl2ZSxcclxuLnEtbWFya3MubWFyay1uZWdhdGl2ZSxcclxuLnEtbWFya3MubWFyay1taWQge1xyXG4gIG1pbi13aWR0aDogMy4yNXJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5xLW1hcmtzLm1hcmstcG9zaXRpdmUgeyBiYWNrZ3JvdW5kOiAjZThmOWVmOyBjb2xvcjogIzBiOGE0NTsgfVxyXG4ucS1tYXJrcy5tYXJrLW5lZ2F0aXZlIHsgYmFja2dyb3VuZDogI2ZmZjJmNDsgY29sb3I6ICNiMDJhMzc7IH1cclxuLnEtbWFya3MubWFyay1taWQgeyBiYWNrZ3JvdW5kOiAjZmZmOGU2OyBjb2xvcjogI2IzNmEwMDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEZpbGwgcXVlc3Rpb24gw6LClMKAw6LClMKAXHJcbi5xLWZpbGwgLmZpbGwtcm93IHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjc1cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb24geyBwYWRkaW5nOiAwLjYyNXJlbSAwLjg3NXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBiYWNrZ3JvdW5kOiAjZmZmN2VkOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDI0NSwxNjYsMzUsMC4xKTsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyAkZWFzZTsgfVxyXG4ucS1maWxsIC5maWxsLW9wdGlvbjpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctc207IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb24uc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZThmNmZmOyBib3JkZXItY29sb3I6IHJnYmEoMiwxMTIsMjU1LDAuMTUpOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uLmNvcnJlY3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZyk7IGJvcmRlci1jb2xvcjogdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLnEtZmlsbCAuZmlsbC1jb3JyZWN0IHsgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgZm9udC1zaXplOiAwLjgxMjVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWJnKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBEZXNjcmlwdGl2ZSByZXZpZXcgw6LClMKAw6LClMKAXHJcbi5xLWRlc2NyaXB0aXZlIHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAwLjg3NXJlbTsgfVxuLmRlc2NyaXB0aXZlLWFuc3dlcnMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpOyBnYXA6IDAuODc1cmVtOyB9XG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMC43NXJlbTsgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYmcpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLmRlc2MtcXVlc3Rpb24geyBmbGV4OiAxIDEgYXV0bzsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnF1ZXN0aW9uLWxhYmVsIHsgZm9udC1zaXplOiAwLjY4NzVyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjA2ZW07IGNvbG9yOiAjOGM2YWQ2OyBiYWNrZ3JvdW5kOiByZ2JhKDE0MCwxMDYsMjE0LDAuMDgpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnF1ZXN0aW9uLXZhbHVlIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5kZXNjLXNjb3JlIHsgd2lkdGg6IDguNzVyZW07IGZsZXg6IDAgMCA4Ljc1cmVtOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuc2NvcmUtbGFiZWwgeyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5zY29yZS12YWx1ZSB7IGZvbnQtc2l6ZTogMS4xMjVyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjZjM5YzEyOyBiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNCk7IG1hcmdpbi10b3A6IDAuMzc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLW1vZGVsIHsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtMik7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc3R1ZGVudCB7IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWJnKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLW1vZGVsIC5tb2RlbC1sYWJlbCxcclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc3R1ZGVudCAuc3R1ZGVudC1sYWJlbCB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7IG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyBmb250LXNpemU6IDAuNzVyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjA0ZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtbW9kZWwgLm1vZGVsLXRleHQsXHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXN0dWRlbnQgLmFuc3dlci10ZXh0IHsgY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7IGxpbmUtaGVpZ2h0OiAxLjU1OyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXNjb3JlIHsgd2lkdGg6IDguNzVyZW07IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNCk7IHBhZGRpbmc6IDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5zY29yZS1sYWJlbCB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5zY29yZS12YWx1ZSB7IGZvbnQtc2l6ZTogMXJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMwYjY2ZDA7IH1cclxuLnEtZGVzY3JpcHRpdmUgLnEtZmVlZGJhY2sgeyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWJnKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgbGluZS1oZWlnaHQ6IDEuNTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFJldmlldyBjb21tZW50IGNvbHVtbnMgw6LClMKAw6LClMKAXHJcbi5xLXJldmlldy1jb21tZW50cyB7IG1hcmdpbi10b3A6IDFyZW07IHBhZGRpbmctdG9wOiAxcmVtOyBib3JkZXItdG9wOiAwLjA2MjVyZW0gZGFzaGVkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ucmV2aWV3LWNvbHVtbnMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyBnYXA6IDAuODc1cmVtOyB9XHJcbi5yZXZpZXctY29sdW1ucyAuY29sIHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA2KTsgcGFkZGluZzogMC44NzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNzVyZW07IG1pbi1oZWlnaHQ6IDRyZW07IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2U7IH1cclxuLnJldmlldy1jb2x1bW5zIC5jb2w6aG92ZXIgeyBib3gtc2hhZG93OiAwIDAuNXJlbSAxLjI1cmVtIHJnYmEoMTUsMjMsNDIsMC4wNik7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xMjVyZW0pOyB9XHJcbi5yZXZpZXctY29sdW1ucyAuY29sIGg0IHsgbWFyZ2luOiAwIDAgMC41cmVtOyBmb250LXNpemU6IDAuODc1cmVtOyB9XHJcbi5yZXZpZXctY29sdW1ucyAuY29sLm1pc3NlZCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXJlZC1iZykgMCUsICNmZmYgOTAlKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmVkLWJvcmRlcik7IGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1yZWQtdGV4dCk7IH1cclxuLnJldmlldy1jb2x1bW5zIC5jb2wuaW5jb3JyZWN0IHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tb3JhbmdlLWJnKSAwJSwgI2ZmZiA5MCUpOyBib3JkZXItY29sb3I6IHZhcigtLWJvcmFuZ2UtYm9yZGVyKTsgYm9yZGVyLXRvcDogMC4xODc1cmVtIHNvbGlkIHZhcigtLW9yYW5nZS10ZXh0KTsgfVxyXG4ucmV2aWV3LWNvbHVtbnMgLmNvbC5pbmNvbXBsZXRlIHsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0teWVsbG93LWJnKSAwJSwgI2ZmZiA5MCUpOyBib3JkZXItY29sb3I6IHZhcigtLWJ5ZWxsb3ctYm9yZGVyKTsgYm9yZGVyLXRvcDogMC4xODc1cmVtIHNvbGlkIHZhcigtLXllbGxvdy10ZXh0KTsgfVxyXG5cclxuLmNvbC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNXJlbTsgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsgcGFkZGluZy1ib3R0b206IDAuNXJlbTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7IH1cclxuLmNvbC1oZWFkZXIgaDQgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpOyB9XHJcbi5kb3QgeyB3aWR0aDogMC41cmVtOyBoZWlnaHQ6IDAuNXJlbTsgYm9yZGVyLXJhZGl1czogNTAlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZsZXgtc2hyaW5rOiAwOyBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgwLDAsMCwwLjA0KTsgfVxyXG4uZG90LnJlZCB7IGJhY2tncm91bmQ6IHZhcigtLXJlZC10ZXh0KTsgfVxyXG4uZG90Lm9yYW5nZSB7IGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS10ZXh0KTsgfVxyXG4uZG90LnllbGxvdyB7IGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy10ZXh0KTsgfVxyXG5cclxuLnJldmlldy1pdGVtIHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjYyNXJlbTsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cclxuLnJpLWxlZnQgeyB3aWR0aDogMnJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDsgZmxleC1zaHJpbms6IDA7IH1cclxuLnJpLWljb24geyB3aWR0aDogMS42MjVyZW07IGhlaWdodDogMS42MjVyZW07IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IGZvbnQtc2l6ZTogMC43NXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgfVxyXG4ucmktaWNvbi5taXNzZWQgeyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBiYWNrZ3JvdW5kOiByZ2JhKDE4NSwyOCwyOCwwLjA4KTsgfVxyXG4ucmktaWNvbi5pbmNvcnJlY3QgeyBjb2xvcjogdmFyKC0tb3JhbmdlLXRleHQpOyBiYWNrZ3JvdW5kOiByZ2JhKDE5NCw2NSwxMiwwLjA4KTsgfVxyXG4ucmktaWNvbi5pbmNvbXBsZXRlIHsgY29sb3I6IHZhcigtLXllbGxvdy10ZXh0KTsgYmFja2dyb3VuZDogcmdiYSgxODAsODMsOSwwLjA4KTsgfVxyXG4ucmktYm9keSB7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxyXG5cclxuLnJldmlldy10ZXh0LmRlbGV0ZWQgeyBjb2xvcjogZ3JheTsgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7IH1cclxuLmRlbGV0ZWQtYnkgeyBjb2xvcjogI2MwMzkyYjsgZm9udC1zdHlsZTogaXRhbGljOyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogMC4zNzVyZW07IGZvbnQtc2l6ZTogMC43NXJlbTsgfVxyXG4ucmV2aWV3LXRleHQtbWlzc2VkIHsgZGlzcGxheTogZmxleDsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMyk7IGZvbnQtd2VpZ2h0OiA0MDA7IHBhZGRpbmc6IDAuNjI1cmVtIDAuNzVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJyZWQtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBsaW5lLWhlaWdodDogMS40NTsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyAkZWFzZTsgfVxyXG4ucmV2aWV3LXRleHQtbWlzc2VkOmhvdmVyIHsgYm94LXNoYWRvdzogJHNoYWRvdy1zbTsgfVxyXG4ucmV2aWV3LXRleHQtaW5jb3JyZWN0IHsgZGlzcGxheTogZmxleDsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMyk7IGZvbnQtd2VpZ2h0OiA0MDA7IHBhZGRpbmc6IDAuNjI1cmVtIDAuNzVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJvcmFuZ2UtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBsaW5lLWhlaWdodDogMS40NTsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyAkZWFzZTsgfVxyXG4ucmV2aWV3LXRleHQtaW5jb3JyZWN0OmhvdmVyIHsgYm94LXNoYWRvdzogJHNoYWRvdy1zbTsgfVxyXG4ucmV2aWV3LXRleHQtaW5jb21wbGV0ZSB7IGRpc3BsYXk6IGZsZXg7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMpOyBmb250LXdlaWdodDogNDAwOyBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ieWVsbG93LWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNDU7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgJGVhc2U7IH1cclxuLnJldmlldy10ZXh0LWluY29tcGxldGU6aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LXNtOyB9XHJcbi5yZXZpZXctbWV0YSB7IGZvbnQtc2l6ZTogMC42ODc1cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjUpOyBtYXJnaW4tdG9wOiAwLjM3NXJlbTsgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTsgfVxyXG5cclxuLnJldmlldy1hY3Rpb25zIHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjEyNXJlbTsgfVxyXG4ucmV2aWV3LWFjdGlvbnMgbWF0LWljb24geyBmb250LXNpemU6IGluaXRpYWwgIWltcG9ydGFudDsgfVxyXG4ucmV2aWV3LWFjdGlvbnMgLmVkaXQtbGluayxcclxuLnJldmlldy1hY3Rpb25zIC5kZWxldGUtbGluayxcclxuLnNhdmUtbGluayxcclxuLmNhbmNlbC1saW5rIHsgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IG1hcmdpbi1yaWdodDogMC4zNzVyZW07IGN1cnNvcjogcG9pbnRlcjsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjE4NzVyZW07IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzICRlYXNlLCBvcGFjaXR5IDAuMTVzICRlYXNlOyB9XHJcbi5yZXZpZXctYWN0aW9ucyAuZWRpdC1saW5rOmhvdmVyLFxyXG4uc2F2ZS1saW5rOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDYpOyB9XHJcbi5yZXZpZXctYWN0aW9ucyAuZGVsZXRlLWxpbmsgeyBjb2xvcjogI2QzMzsgfVxyXG4ucmV2aWV3LWFjdGlvbnMgLmRlbGV0ZS1saW5rOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgyMjEsNTEsNTEsMC4wNik7IH1cclxuLmNhbmNlbC1saW5rOmhvdmVyIHsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA0KTsgfVxyXG4uZWRpdC1jb21tZW50LXRleHQgeyB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYm9yZGVyLTEpOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgcGFkZGluZzogMC4zNzVyZW0gMC41cmVtOyBmb250LXNpemU6IDAuODEyNXJlbTsgbGluZS1oZWlnaHQ6IDEuNDU7IHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzICRlYXNlOyByZXNpemU6IHZlcnRpY2FsOyB9XHJcbi5lZGl0LWNvbW1lbnQtdGV4dDpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OiAwIDAgMCAwLjEyNXJlbSByZ2JhKDk5LDEwMiwyNDEsMC4xKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hcmtzIGVkaXRpbmcgZm9yIGRlc2NyaXB0aXZlIHF1ZXN0aW9ucyDDosKUwoDDosKUwoBcclxuLm1hcmtzLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC4zNzVyZW07XG4gIG1pbi1oZWlnaHQ6IDIuMjVyZW07XG59XG5cclxuLm1hcmtzLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMzc1cmVtO1xyXG59XHJcblxyXG4uZWRpdC1tYXJrcy1idG4ge1xyXG4gIHdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA4KTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJrcy1lZGl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdhcDogMC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAwLjE4NzVyZW0gMC4zNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xyXG59XHJcblxyXG4ubWFya3MtaW5wdXQge1xyXG4gIHdpZHRoOiAzLjVyZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjM3NXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtbWF4IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2F2ZS1tYXJrcy1idG4ge1xyXG4gIHdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICB9XHJcbn1cclxuXHJcbi5jYW5jZWwtbWFya3MtYnRuIHtcclxuICB3aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXJlZC10ZXh0KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBIaXN0b3J5IFNlY3Rpb24gw6LClMKAw6LClMKAXHJcbi5tYXJrcy1oaXN0b3J5LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsMC4wMykgMCUsIHJnYmEoNTksMTMwLDI0NiwwLjAyKSAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjEpO1xyXG59XHJcblxyXG4ubWFya3MtaGlzdG9yeS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJrcy1oaXN0b3J5LXRpbWVsaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwO1xyXG59XHJcblxyXG4uaGlzdG9yeS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC44NzVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGlzdG9yeS1pbmRpY2F0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgXHJcbiAgLmRvdCB7XHJcbiAgICB3aWR0aDogMC43NXJlbTtcclxuICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIFxyXG4gICAgJi5jdXJyZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xNSksIDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnBhc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTRhM2I4LCAjNjQ3NDhiKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMTQ4LDE2MywxODQsMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiAwLjEyNXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE0OCwxNjMsMTg0LDAuNCkgMCUsIHJnYmEoMTQ4LDE2MywxODQsMC4xKSAxMDAlKTtcclxuICAgIG1hcmdpbjogMC4yNXJlbSAwO1xyXG4gICAgbWluLWhlaWdodDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuODc1cmVtO1xyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlO1xyXG4gIFxyXG4gICYuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LDE4NSwxMjksMC4wOCkgMCUsIHJnYmEoNSwxNTAsMTA1LDAuMDQpIDEwMCUpO1xyXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xKTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4zNzVyZW0gMXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xOCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xODc1cmVtKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LDE4NSwxMjksMC4zKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5wYXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LDI1MCwyNTIsMC44KTtcclxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAkc2hhZG93LW1kO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMzc1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1cmVtIDAuMjVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMyk7XHJcbn1cclxuXHJcbi5oaXN0b3J5LW1hcmtzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIFxyXG4gIC5tYXJrcy10b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC40NSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkLnBhc3QgLmhpc3RvcnktbWFya3Mge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICBcclxuICAubWFya3MtdG90YWwge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuICBcclxuICAudXBkYXRlZC1ieSxcclxuICAudXBkYXRlZC1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAwLjg3NXJlbTtcclxuICAgICAgaGVpZ2h0OiAwLjg3NXJlbTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudXBkYXRlZC1ieSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNhcmQuY3VycmVudCAuaGlzdG9yeS1tZXRhIHtcclxuICAudXBkYXRlZC1ieSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCk7XHJcbiAgfVxyXG59XHJcbi8vIMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgFxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVyZW0pIHtcclxuICAucGFnZSB7IHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbSAycmVtOyB9XHJcbiAgLnRvb2xiYXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtOyB9XHJcbiAgLnNlbGVjdGlvbnMgeyBtYXgtd2lkdGg6IDEwMCU7IGZsZXg6IDEgMSAxMDAlOyB9XHJcbiAgLnJlcG9ydC1zdW1tYXJ5LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7IH1cclxuICAudGFiLWFjdGlvbnMgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxyXG4gIC50YWItYWN0aW9ucyAuc2VhcmNoIHsgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbiAgLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IHsgZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgLnJldmlldy1jb2x1bW5zIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAucS1vcHRpb25zLnR3by1jb2wgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC51c2VyLXJldmlldy1wYW5lbCB7IHdpZHRoOiA5NiU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCwgLnJlc291cmNlLXBhbmVsIHsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogMTAwJTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5jYXJkLCAucmVzb3VyY2UtcGFuZWwgLmNhcmQgeyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5IHsgcGFkZGluZzogMC43NXJlbTsgfVxyXG4gIC5xLWRlc2NyaXB0aXZlIC5kZXNjLXJvdyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1zY29yZSB7IHdpZHRoOiAxMDAlOyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLmRlc2Mtc2NvcmUgeyB3aWR0aDogMTAwJTsgZmxleDogbm9uZTsgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gIC5kZXNjcmlwdGl2ZS1hbnN3ZXJzIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLnEtaGVhZC1yb3cgeyBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgLnEtcmlnaHQgeyBtYXJnaW4tbGVmdDogMy4xMjVyZW07IH1cbn1cbi5tYXJrcy1lZGl0LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4zNzVyZW07IH1cbi5tYXJrcy1lZGl0LWFjdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBnYXA6IDAuMjVyZW07IH1cbi5tYXJrcy1yZWFzb24taW5wdXQgeyB3aWR0aDogMThyZW07IG1heC13aWR0aDogMTAwJTsgcGFkZGluZzogMC41cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNkM2Q5ZTIpOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgZm9udDogaW5oZXJpdDsgcmVzaXplOiB2ZXJ0aWNhbDsgfVxuLm1hcmtzLXJlYXNvbi1pbnB1dDpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzI2N2NmZik7IGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1cmVtIHJnYmEoMzgsMTI0LDI1NSwwLjEyKTsgfVxuLmhpc3RvcnktcmVhc29uIHsgbWFyZ2luLXRvcDogMC40cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjY4KTsgbGluZS1oZWlnaHQ6IDEuNDsgfVxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NXJlbSkge1xyXG4gIC5yZXBvcnQtc3VtbWFyeS1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IHBhZGRpbmc6IDAuODc1cmVtOyB9XHJcbiAgLnN1bW1hcnktY2FyZCB7IHBhZGRpbmc6IDAuODc1cmVtOyB9XHJcbiAgLnN1bW1hcnktbWV0YSB7IHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0cixcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aCxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0ZCB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRyIHsgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBsZWZ0OyBib3JkZXItcmFkaXVzOiAwOyBib3JkZXI6IG5vbmU7IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOjpiZWZvcmUgeyBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpOyBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxyXG4gIC5zZWxlY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG59XHJcbi5tYW51YWwtY2hlY2stY2hpcCB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgcGFkZGluZzogM3B4IDlweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5NzcwNjtcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgYmFja2dyb3VuZDogI2ZmZjdlZDtcbiAgY29sb3I6ICM5YTM0MTI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udDogaW5oZXJpdDtcbn1cblxuLm1hbnVhbC1jaGVjay1jaGlwLnNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2ZmZWRkNTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxuLm1hbnVhbC1jaGVjay1jaGlwIG1hdC1pY29uIHsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZm9udC1zaXplOiAxNnB4OyB9XG4uZWRpdC1jb21tZW50LXJlYXNvbiB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogOHB4OyB9XG4ucmV2aWV3LW1ldGEgLmVkaXQtcmVhc29uIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDJweDsgfVxuLnNhdmUtbGluay5kaXNhYmxlZCB7IG9wYWNpdHk6IC40NTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 5441:
/*!********************************************************************!*\
  !*** ./src/app/userrole/admin/exam-reports/exam-reports.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExamReportsModule: () => (/* binding */ ExamReportsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/paginator */ 4624);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 9771);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var _exam_reports_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exam-reports.component */ 6654);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);






















class ExamReportsModule {
  static {
    this.ɵfac = function ExamReportsModule_Factory(t) {
      return new (t || ExamReportsModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ExamReportsModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__.PortalModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forChild([{
        path: '',
        component: _exam_reports_component__WEBPACK_IMPORTED_MODULE_0__.ExamReportsComponent
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExamReportsModule, {
    declarations: [_exam_reports_component__WEBPACK_IMPORTED_MODULE_0__.ExamReportsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__.HttpClientModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_17__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_18__.PortalModule, _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_userrole_admin_exam-reports_exam-reports_module_ts.js.map