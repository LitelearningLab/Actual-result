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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 165)(1, "input", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](q_r116._editedMarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r141.saveMarks(q_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template_button_click_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r140);
      const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r143.cancelEditMarks(q_r116));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", q_r116._editedMarks)("min", 0)("max", q_r116.question_marks || 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/ ", q_r116.question_marks || "-", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_1_Template, 6, 7, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_15_div_2_Template, 10, 4, "div", 161);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 174);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 170)(1, "div", 171)(2, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_17_div_4_Template, 2, 1, "div", 173);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 201)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "High-level Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.feedback);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 222)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r176 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const rc_r160 = ctx_r176.$implicit;
    const rci_r161 = ctx_r176.index;
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r160.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r161 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r169.is_deleted == 1 || h_r169.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r171.toTitleCase(h_r169.comment_text || h_r169.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 226)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r180);
      const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](h_r169._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const rci_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r161 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", h_r169._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", h_r169.updated_by || h_r169.created_by || h_r169.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", h_r169.updated_by || h_r169.created_by, " On ", h_r169.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r191 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r191);
      const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r189.startEditComment(h_r169));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r194 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r194);
      const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r192.confirmDeleteComment(h_r169));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r197 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r197);
      const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r195.saveReviewComment(h_r169));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r200);
      const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r198.cancelEditComment(h_r169));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_1_Template, 4, 0, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_2_Template, 4, 0, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_3_Template, 4, 0, "a", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_a_4_Template, 4, 0, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r169._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r169._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r169._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r169._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_2_Template, 6, 6, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_3_Template, 5, 2, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_span_5_Template, 2, 1, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_span_6_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_div_7_Template, 5, 4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r169 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r169.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r169._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r169._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r169.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r169.is_deleted != 1 && (h_r169.updated_by || h_r169.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r169.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_div_1_Template, 8, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rc_r160.history);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 222)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rc_r160 = ctx_r203.$implicit;
    const rci_r161 = ctx_r203.index;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r160.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r161 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r160.is_deleted == 1 || rc_r160.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r163.toTitleCase(rc_r160.comment_text || rc_r160.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 226)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r206);
      const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r160._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rci_r161 = ctx_r207.index;
    const rc_r160 = ctx_r207.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r161 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r160._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", rc_r160.updated_by || rc_r160.created_by || rc_r160.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", rc_r160.updated_by || rc_r160.created_by, " On ", rc_r160.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r216);
      const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r214.startEditComment(rc_r160));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r219);
      const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r217.confirmDeleteComment(rc_r160));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r222);
      const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r220.saveReviewComment(rc_r160));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r225);
      const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r223.cancelEditComment(rc_r160));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_1_Template, 4, 0, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_2_Template, 4, 0, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_3_Template, 4, 0, "a", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_a_4_Template, 4, 0, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r160._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r160._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r160._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r160._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 212)(2, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_3_Template, 2, 1, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_4_Template, 6, 6, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_5_Template, 5, 2, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_span_7_Template, 2, 1, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_span_8_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_div_9_Template, 5, 4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r160 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r160.history && rc_r160.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r160._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r160._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r160.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r160.is_deleted != 1 && (rc_r160.updated_by || rc_r160.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r160.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 222)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const h_r237 = ctx_r244.$implicit;
    const hi_r238 = ctx_r244.index;
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r237.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](hi_r238 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r237.is_deleted == 1 || h_r237.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r239.toTitleCase(h_r237.comment_text || h_r237.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 226)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r247);
      const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](h_r237._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const rci_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r228 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", h_r237._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", h_r237.updated_by || h_r237.created_by || h_r237.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", h_r237.updated_by || h_r237.created_by, " On ", h_r237.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r258);
      const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r256.startEditComment(h_r237));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r261);
      const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r259.confirmDeleteComment(h_r237));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r264 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r264);
      const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r262.saveReviewComment(h_r237));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r267);
      const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r265.cancelEditComment(h_r237));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_1_Template, 4, 0, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_2_Template, 4, 0, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_3_Template, 4, 0, "a", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_a_4_Template, 4, 0, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r237 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r237._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r237._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r237._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r237._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_2_Template, 6, 6, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_3_Template, 5, 2, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_span_5_Template, 2, 1, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_span_6_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_div_7_Template, 5, 4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r237 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r237.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r237._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r237._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r237.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r237.is_deleted != 1 && (h_r237.updated_by || h_r237.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r237.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_div_1_Template, 8, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rc_r227.history);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 241)(1, "div", 223)(2, "span", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rc_r227 = ctx_r270.$implicit;
    const rci_r228 = ctx_r270.index;
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r227.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r228 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r227.is_deleted == 1 || rc_r227.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r230.toTitleCase(rc_r227.comment_text || rc_r227.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 243)(1, "div", 223)(2, "span", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r273);
      const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r227._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "textarea", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_5_Template_textarea_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r273);
      const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r227._editReason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rci_r228 = ctx_r276.index;
    const rc_r227 = ctx_r276.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r228 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r227._editedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r227._editReason);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", rc_r227.updated_by || rc_r227.reviewer_id || rc_r227.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", rc_r227.edited_by || rc_r227.updated_by, " ", ctx_r233.formatDate(rc_r227.edited_at || rc_r227.updated_date), "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Reason: ", rc_r227.edit_reason, "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r286);
      const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r284.startEditComment(rc_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r289 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r289);
      const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r287 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r287.confirmDeleteComment(rc_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r292 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r292);
      const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r290.saveReviewComment(rc_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r282.requiresEditReason(rc_r227) && !(rc_r227._editReason == null ? null : rc_r227._editReason.trim()));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r296 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r296);
      const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r294 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r294.cancelEditComment(rc_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_1_Template, 4, 0, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_2_Template, 4, 0, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_3_Template, 4, 2, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_a_4_Template, 4, 0, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r227._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r227._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r227._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r227._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 212)(2, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_3_Template, 2, 1, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_4_Template, 6, 6, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_5_Template, 6, 3, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_span_7_Template, 2, 1, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_span_8_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_span_9_Template, 2, 1, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_div_10_Template, 5, 4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r227 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r227.history && rc_r227.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r227._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r227._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r227.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r227.is_deleted != 1 && (rc_r227.edited_by || rc_r227.updated_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r227.edit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r227.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 222)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r315 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const h_r308 = ctx_r315.$implicit;
    const hi_r309 = ctx_r315.index;
    const ctx_r310 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r308.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](hi_r309 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r308.is_deleted == 1 || h_r308.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r310.toTitleCase(h_r308.comment_text || h_r308.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 226)(1, "div", 223)(2, "span", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r318);
      const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](h_r308._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const rci_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r299 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", h_r308._editedText);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", h_r308.updated_by || h_r308.created_by || h_r308.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", h_r308.updated_by || h_r308.created_by, " On ", h_r308.updated_date, " ");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r329 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r329);
      const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r327.startEditComment(h_r308));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r332 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r332);
      const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r330 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r330.confirmDeleteComment(h_r308));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r335 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r335);
      const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r333.saveReviewComment(h_r308));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r338 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r338);
      const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r336.cancelEditComment(h_r308));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_1_Template, 4, 0, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_2_Template, 4, 0, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_3_Template, 4, 0, "a", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_a_4_Template, 4, 0, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r308 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r308._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r308._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r308._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r308._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_2_Template, 6, 6, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_3_Template, 5, 2, "div", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_span_5_Template, 2, 1, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_span_6_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_div_7_Template, 5, 4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r308 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", h_r308.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r308._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r308._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r308.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", h_r308.is_deleted != 1 && (h_r308.updated_by || h_r308.edited_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !h_r308.updated_by);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 220);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_div_1_Template, 8, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", rc_r298.history);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 249)(1, "div", 223)(2, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r341 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rc_r298 = ctx_r341.$implicit;
    const rci_r299 = ctx_r341.index;
    const ctx_r301 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r298.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r299 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("deleted", rc_r298.is_deleted == 1 || rc_r298.updated_by);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r301.toTitleCase(rc_r298.comment_text || rc_r298.comment || ""));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_5_textarea_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r345 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "textarea", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_5_textarea_5_Template_textarea_ngModelChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r345);
      const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r298._editReason = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r298._editReason);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r349 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 251)(1, "div", 223)(2, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "textarea", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r349);
      const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](rc_r298._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_5_textarea_5_Template, 1, 1, "textarea", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const rci_r299 = ctx_r350.index;
    const rc_r298 = ctx_r350.$implicit;
    const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](rci_r299 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", rc_r298._editedText);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r302.requiresEditReason(rc_r298));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Deleted by ", rc_r298.updated_by || rc_r298.reviewer_id || rc_r298.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r304 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Edited by ", rc_r298.edited_by || rc_r298.updated_by, " ", ctx_r304.formatDate(rc_r298.edited_at || rc_r298.updated_date), "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Reason: ", rc_r298.edit_reason, "");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r360 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r360);
      const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r358.startEditComment(rc_r298));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r363);
      const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r361.confirmDeleteComment(rc_r298));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r366);
      const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r364.saveReviewComment(rc_r298));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("disabled", ctx_r356.requiresEditReason(rc_r298) && !(rc_r298._editReason == null ? null : rc_r298._editReason.trim()));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r370);
      const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
      const ctx_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r368.cancelEditComment(rc_r298));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_1_Template, 4, 0, "a", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_2_Template, 4, 0, "a", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_3_Template, 4, 2, "a", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_a_4_Template, 4, 0, "a", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r298._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r298._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r298._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r298._editing);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 212)(2, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_3_Template, 2, 1, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_4_Template, 6, 6, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_5_Template, 6, 3, "div", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_span_7_Template, 2, 1, "span", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_span_8_Template, 2, 2, "span", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_span_9_Template, 2, 1, "span", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_div_10_Template, 5, 4, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r298 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r298.history && rc_r298.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r298._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r298._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r298.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r298.is_deleted != 1 && (rc_r298.edited_by || rc_r298.updated_by));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", rc_r298.edit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !rc_r298.updated_by);
  }
}
const _c5 = function () {
  return ["incorrct", "incorrect", "incor"];
};
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 203)(1, "div", 204)(2, "div", 205)(3, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "span", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Points Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_7_Template, 10, 6, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 208)(9, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "span", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Points Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_13_Template, 11, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 210)(15, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](16, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Points Incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_div_19_Template, 11, 7, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r152.reviewComments(q_r116, "missing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r152.reviewComments(q_r116, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c5)));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r152.reviewComments(q_r116, "incomplete"));
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 253);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_span_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 254)(1, "mat-icon");
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
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "div", 253);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 255)(1, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 256);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_39_div_3_Template, 1, 0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 192)(5, "div", 257)(6, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 197)(11, "span", 198)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "span", 254)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const mh_r374 = ctx.$implicit;
    const isLast_r376 = ctx.last;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !isLast_r376);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", mh_r374.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("/ ", q_r116.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mh_r374.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](mh_r374.updated_date);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 175)(1, "div", 176)(2, "div", 177)(3, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Student's Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 180)(8, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Model Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_12_Template, 5, 1, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_13_Template, 20, 4, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 185)(15, "div", 186)(16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Marks History");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 187)(21, "div", 188)(22, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](23, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_24_Template, 1, 0, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 192)(26, "div", 193)(27, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "span", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 197)(34, "span", 198)(35, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](38, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_span_38_Template, 4, 1, "span", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](39, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_div_39_Template, 19, 5, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"]((q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c4)).join(" ") || "No answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](q_r116.correct_option || q_r116.options && q_r116.options[0] && (q_r116.options[0].option_text || q_r116.options[0]) || q_r116.correct_answer || "No model answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.feedback);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.review_comment && q_r116.review_comment.comments && q_r116.review_comment.comments.length);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Student Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_1_Template, 2, 0, "span", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_2_Template, 2, 0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_span_3_Template, 2, 0, "span", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4)).indexOf(opt_r381.option_text || opt_r381) !== -1 && !(opt_r381.is_correct == 1 || opt_r381.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c4)).indexOf(opt_r381.option_text || opt_r381) !== -1 && (opt_r381.is_correct == 1 || opt_r381.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", opt_r381.is_correct && (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c4)).indexOf(opt_r381.option_text || opt_r381) === -1);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Student Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Missed Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_1_Template, 2, 0, "span", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_2_Template, 2, 0, "span", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_span_3_Template, 2, 0, "span", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](3, _c4)).indexOf(opt_r381.option_text || opt_r381) !== -1 && (opt_r381.is_correct == 1 || opt_r381.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c4)).indexOf(opt_r381.option_text || opt_r381) !== -1 && !(opt_r381.is_correct == 1 || opt_r381.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", opt_r381.is_correct && (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](5, _c4)).indexOf(opt_r381.option_text || opt_r381) === -1);
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 260)(1, "div", 261)(2, "span", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 263)(5, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_7_Template, 4, 6, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_div_8_Template, 4, 6, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r381 = ctx.$implicit;
    const oi_r382 = ctx.index;
    const q_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r380 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("correct", opt_r381.is_correct == 1 || opt_r381.is_correct === true)("selected", (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c4)).indexOf(opt_r381.option_text || opt_r381) !== -1)("missed", opt_r381.is_correct && (q_r116.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](11, _c4)).indexOf(opt_r381.option_text || opt_r381) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r380.getOptionLetter(oi_r382));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](opt_r381.option_text || opt_r381);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.question_type == "choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", q_r116.question_type == "multi");
  }
}
function ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_19_div_1_Template, 9, 12, "div", 259);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ExamReportsComponent_div_191_div_20_div_1_div_1_div_2_div_18_Template, 40, 11, "div", 153);
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
    const _r398 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_191_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r398);
      const ctx_r397 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r397.closeUserReview());
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r398);
      const ctx_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r400.closeUserReview());
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r398);
      const ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r401.closeUserReview());
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
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 279)(2, "a", 280);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_div_17_tr_13_Template_a_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r407);
      const wa_r405 = restoredCtx.$implicit;
      const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r406.openResourcesForWrongAnswer(ctx_r406.selectedQuestionForWrongSummary, wa_r405));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "td", 281)(5, "a", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_div_17_tr_13_Template_a_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r407);
      const wa_r405 = restoredCtx.$implicit;
      const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r408.openResourcesForWrongAnswer(ctx_r408.selectedQuestionForWrongSummary, wa_r405));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wa_r405 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](wa_r405.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](wa_r405.count || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](wa_r405.pct || "-");
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
    const _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 278)(4, "thead")(5, "tr")(6, "th");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r410);
      const ctx_r409 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r409.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Question: ", ctx_r402.selectedQuestionForWrongSummary.question_text || ctx_r402.selectedQuestionForWrongSummary.text || ctx_r402.selectedQuestionForWrongSummary.name || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r402.selectedWrongAnswers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r402.selectedWrongAnswers || !ctx_r402.selectedWrongAnswers.length);
  }
}
function ExamReportsComponent_div_192_Template(rf, ctx) {
  if (rf & 1) {
    const _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r412);
      const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r411.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 121)(3, "div", 122)(4, "div", 124)(5, "div", 123)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "rule_folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 274)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Wrong Answer Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Details for selected question");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_192_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r412);
      const ctx_r414 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r414.closeWrongAnswerSummary());
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
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li")(1, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r418 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r418.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](r_r418.email || "");
  }
}
function ExamReportsComponent_div_193_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div")(1, "ul", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, ExamReportsComponent_div_193_div_17_li_2_Template, 5, 2, "li", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r415.selectedResources);
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
    const _r420 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_193_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r420);
      const ctx_r419 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r419.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_193_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 121)(3, "div", 122)(4, "div", 124)(5, "div", 123)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "folder_shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 274)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Resources related to the selected wrong answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "button", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ExamReportsComponent_div_193_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r420);
      const ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r422.closeResourcePanel());
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
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r420);
      const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r423.closeResourcePanel());
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
  }
  cancelEditMarks(q) {
    if (!q) return;
    q._editingMarks = false;
    q._editedMarks = undefined;
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
      updated_by: updatedBy
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
          updated_date: q.updated_date
        });
        q.marks_awarded = newMarks;
        q.updated_by = updatedByName;
        q.updated_date = new Date().toUTCString();
        q._editingMarks = false;
        q._editedMarks = undefined;
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
      consts: [[1, "page", "exam-reports"], [1, "toolbar"], [1, "selections"], ["appearance", "outline", 1, "local-institute-field"], ["matPrefix", "", "svgIcon", "institute"], ["matInput", "", "placeholder", "Pick an institute", "aria-label", "Institute", 3, "formControl", "matAutocomplete"], [3, "displayWith", "optionSelected"], ["instAuto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline"], ["matPrefix", "", "svgIcon", "exam"], ["type", "text", "matInput", "", "placeholder", "Pick a scheduled test", "aria-label", "Scheduled test", 3, "formControl", "matAutocomplete"], ["auto", "matAutocomplete"], [1, "controls"], [1, "action-row"], ["mat-stroked-button", "", "color", "primary", "type", "button", 1, "button-one", 3, "click"], ["svgIcon", "refresh"], ["mat-flat-button", "", "type", "button", 1, "button-one", 3, "click"], ["filtersBtn", ""], ["svgIcon", "filter"], ["filtersPanel", ""], [1, "list-card"], [1, "list-wrapper"], [1, "exam-tabs", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["label", "User Report"], [1, "report-summary-grid"], [1, "summary-card"], [1, "summary-icon", "summary-icon--students"], [1, "summary-copy"], [1, "summary-label"], [1, "summary-value"], [1, "summary-meta"], [1, "summary-icon", "summary-icon--page"], [1, "summary-icon", "summary-icon--score"], [1, "summary-icon", "summary-icon--pass"], [1, "tab-actions"], [1, "search"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by student name", "aria-label", "Search by student name", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["class", "table-wrap", 4, "ngIf"], ["class", "loader-placeholder", 4, "ngIf"], ["label", "Analytics Report"], [1, "analytics-section"], [1, "report-summary-grid", "analytics-summary-grid"], [1, "summary-icon", "summary-icon--categories"], [1, "summary-icon", "summary-icon--questions"], [1, "summary-icon", "summary-icon--attempts"], [1, "summary-icon", "summary-icon--mistakes"], [1, "inner-analytics-tabs", 3, "selectedIndex", "selectedIndexChange"], ["label", "Question Bank Report"], [1, "table-wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", "compact", "premium-table", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-primary", 4, "matCellDef"], ["matColumnDef", "questions"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "users_attempted"], ["matColumnDef", "total_attempts"], ["matColumnDef", "mistakes"], ["matColumnDef", "error_pct"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Question Summary"], ["matColumnDef", "sno"], ["matColumnDef", "question"], ["matColumnDef", "user_attempts"], ["matColumnDef", "attempts"], ["class", "wrong-summary-backdrop", 3, "click", 4, "ngIf"], [3, "value"], [1, "option-main"], [1, "filters-panel", 3, "click"], [1, "filters-panel-header"], [1, "filter-block"], ["appearance", "outline", 1, "filter-item"], ["name", "filterCountry", 3, "ngModel", "ngModelChange", "selectionChange"], ["value", ""], ["name", "filterCity", 3, "ngModel", "ngModelChange"], ["name", "filterCampus", 3, "ngModel", "ngModelChange"], ["name", "filterDepartment", 3, "ngModel", "ngModelChange"], ["name", "filterTeam", 3, "ngModel", "ngModelChange"], ["matInput", "", "placeholder", "Test schedule after", 3, "matDatepicker", "ngModel", "ngModelChange"], ["matSuffix", "", 3, "for"], ["joinAfter", ""], ["matInput", "", "placeholder", "Test schedule before", 3, "matDatepicker", "ngModel", "ngModelChange"], ["joinBefore", ""], [1, "filter-actions"], ["mat-flat-button", "", 1, "filter-apply-btn", 3, "click"], ["svgIcon", "apply"], ["mat-flat-button", "", 1, "filter-reset-btn", 3, "click"], ["svgIcon", "reset_settings"], ["matColumnDef", "student_name"], ["matColumnDef", "questions_attempted"], ["matColumnDef", "correct_answers"], ["matColumnDef", "wrong_answers"], ["matColumnDef", "result"], [1, "pager"], ["mat-button", "", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-primary"], [1, "student-cell", 3, "click"], [1, "student-avatar"], [1, "student-name"], ["mat-cell", ""], [1, "marks-inline"], [1, "marks-sep"], [1, "pct-badge"], [1, "review-status"], [1, "result-pill"], ["mat-header-row", ""], ["mat-row", ""], [1, "loader-placeholder"], [1, "category-cell", 3, "click"], [1, "category-avatar"], ["href", "javascript:void(0)", "class", "wrong-summary-link", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "wrong-summary-link", 3, "click"], [1, "wrong-summary-backdrop", 3, "click"], [1, "wrong-summary-panel", "user-review-panel", 3, "click"], [1, "card"], [1, "panel-header"], [1, "header-icon"], [1, "header-info"], [1, "score"], [1, "result", 3, "ngClass"], ["mat-icon-button", "", "aria-label", "Close answer sheet", "type", "button", 1, "review-close-btn", 3, "click"], ["aria-hidden", "true"], [1, "panel-body"], ["class", "muted", 4, "ngIf"], [4, "ngIf"], [1, "summary-actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "muted"], [4, "ngIf", "ngIfElse"], ["noUserReview", ""], [4, "ngFor", "ngForOf"], [1, "questions-list"], ["class", "question-review-card", 4, "ngFor", "ngForOf"], [1, "question-review-card"], [1, "q-head-row"], [1, "q-left"], [1, "q-index"], [1, "q-body"], [1, "q-meta"], [1, "q-badge"], ["class", "q-info", 4, "ngIf"], [1, "q-text"], [1, "q-right"], ["class", "marks-container", 4, "ngIf"], ["class", "q-marks small-muted", 3, "ngClass", 4, "ngIf"], ["class", "q-fill", 4, "ngIf"], ["class", "q-descriptive", 4, "ngIf"], ["class", "q-options two-col", 4, "ngIf"], [1, "q-info"], ["svgIcon", "brain"], ["type", "button", "class", "manual-check-chip", 3, "selected", "click", 4, "ngIf"], ["type", "button", 1, "manual-check-chip", 3, "click"], [1, "marks-container"], ["class", "marks-display", 4, "ngIf"], ["class", "marks-edit", 4, "ngIf"], [1, "marks-display"], [1, "q-marks", "small-muted", 3, "ngClass"], ["mat-icon-button", "", "type", "button", "title", "Edit marks", 1, "edit-marks-btn", 3, "click"], [1, "marks-edit"], ["type", "number", "step", "0.5", 1, "marks-input", 3, "ngModel", "min", "max", "ngModelChange"], [1, "marks-max"], ["mat-icon-button", "", "type", "button", "title", "Save marks", 1, "save-marks-btn", 3, "click"], ["mat-icon-button", "", "type", "button", "title", "Cancel", 1, "cancel-marks-btn", 3, "click"], [1, "q-fill"], [1, "fill-row"], [1, "fill-option"], ["class", "fill-correct", 4, "ngIf"], [1, "fill-correct"], [1, "q-descriptive"], [1, "descriptive-answers"], [1, "desc-student"], [1, "student-label"], [1, "answer-text"], [1, "desc-model"], [1, "model-label"], [1, "model-text"], ["class", "q-feedback", 4, "ngIf"], ["class", "q-review-comments", 4, "ngIf"], [1, "marks-history-section"], [1, "marks-history-header"], [1, "marks-history-timeline"], [1, "history-item", "current"], [1, "history-indicator"], [1, "dot", "current"], ["class", "line", 4, "ngIf"], [1, "history-content"], [1, "history-card", "current"], [1, "history-badge"], [1, "history-marks"], [1, "marks-total"], [1, "history-meta"], [1, "updated-by"], ["class", "updated-date", 4, "ngIf"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "q-feedback"], [1, "feedback-text"], [1, "q-review-comments"], [1, "review-columns"], [1, "col", "missed"], [1, "col-header"], [1, "dot", "red"], [1, "col", "incorrect"], [1, "dot", "orange"], [1, "col", "incomplete"], [1, "dot", "yellow"], [1, "review-item"], [1, "ri-body"], ["class", "review-text-history", 4, "ngIf"], ["class", "review-text-missed", 3, "deleted", 4, "ngIf"], ["class", "review-text-missed editing", 4, "ngIf"], [1, "review-meta", "small-muted"], ["class", "deleted-by", 4, "ngIf"], ["class", "review-actions", 4, "ngIf"], [1, "review-text-history"], [1, "history-entry"], [1, "review-text-missed"], [1, "ri-left"], [1, "ri-icon", "missed"], [1, "review-text"], [1, "review-text-missed", "editing"], ["rows", "2", 1, "edit-comment-text", 3, "ngModel", "ngModelChange"], [1, "deleted-by"], [1, "review-actions"], ["class", "edit-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "delete-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "save-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "cancel-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "edit-link", 3, "click"], ["href", "javascript:void(0)", 1, "delete-link", 3, "click"], ["href", "javascript:void(0)", 1, "save-link", 3, "click"], ["href", "javascript:void(0)", 1, "cancel-link", 3, "click"], ["class", "review-text-incorrect", 3, "deleted", 4, "ngIf"], ["class", "review-text-incorrect editing", 4, "ngIf"], ["class", "edit-reason", 4, "ngIf"], [1, "review-text-incorrect"], [1, "ri-icon", "incorrect"], [1, "review-text-incorrect", "editing"], ["rows", "2", "placeholder", "Reason for change", "required", "", 1, "edit-comment-reason", 3, "ngModel", "ngModelChange"], [1, "edit-reason"], ["class", "save-link", "href", "javascript:void(0)", 3, "disabled", "click", 4, "ngIf"], ["class", "review-text-incomplete", 3, "deleted", 4, "ngIf"], ["class", "review-text-incomplete editing", 4, "ngIf"], [1, "review-text-incomplete"], [1, "ri-icon", "incomplete"], [1, "review-text-incomplete", "editing"], ["class", "edit-comment-reason", "rows", "2", "placeholder", "Reason for change", "required", "", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "line"], [1, "updated-date"], [1, "history-item"], [1, "dot", "past"], [1, "history-card", "past"], [1, "q-options", "two-col"], ["class", "q-option", 3, "correct", "selected", "missed", 4, "ngFor", "ngForOf"], [1, "q-option"], [1, "opt-left"], [1, "opt-mark"], [1, "opt-body"], [1, "opt-text"], ["class", "opt-badge", 4, "ngIf"], [1, "opt-badge"], ["class", "badge your-answer", 4, "ngIf"], ["class", "badge correct", 4, "ngIf"], ["class", "badge missed", 4, "ngIf"], [1, "badge", "your-answer"], [1, "badge", "correct"], [1, "badge", "missed"], [1, "wrong-summary-panel", 3, "click"], [1, "header-copy"], [1, "panel-sub"], ["mat-icon-button", "", "aria-label", "Close", "type", "button", 3, "click"], [1, "question-title"], [1, "summary-table"], ["data-label", "Wrong Answer"], ["href", "javascript:void(0)", 1, "wa-answer-link", 3, "click"], ["data-label", "Selected Count"], ["href", "javascript:void(0)", 1, "wa-count-link", 3, "click"], ["data-label", "Occurrence %"], [1, "panel-sub", "small-muted"], ["mat-icon-button", "", "aria-label", "Close resources", "type", "button", 3, "click"], [1, "resource-list"], [1, "res-title"], [1, "res-desc", "small-muted"]],
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
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_18__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_19__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_20__.MatSort, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_21__.MatTabGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_22__.MatIcon, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_23__.MatAutocompleteTrigger, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_24__.MatDatepickerToggle, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_13__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  --green-bg: #e8f9ef;\n  --red-bg: #fff2f4;\n  --yellow-bg: #fff8e6;\n  --orange-bg: #fff4e1;\n  --blue-bg: #e6f0ff;\n  --green-text: #166534;\n  --red-text: #b91c1c;\n  --yellow-text: #b45309;\n  --orange-text: #c2410c;\n  --blue-text: #0b66d0;\n  --bgreen-border: #86efac;\n  --bred-border: #e7d6d6;\n  --byellow-border: #fde68a;\n  --borange-border: #faeedf;\n  --bblue-border: #93c5fd;\n  --score-color: #f39c12;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 3rem;\n}\n\n.exam-reports[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.875rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.selections[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  flex: 1 1 28rem;\n  min-width: 16rem;\n  max-width: 36rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field {\n  position: relative;\n  min-width: 14rem;\n  max-width: 18rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 0 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-flex {\n  height: 2.75rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-infix {\n  padding: 0.5rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label {\n  top: 1.375rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label.mdc-floating-label--float-above {\n  transform: translateY(-1.5rem) scale(0.75);\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field mat-icon[matPrefix] {\n  color: #94a3b8;\n  margin-right: 0.5rem;\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover mat-icon[matPrefix] {\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12), 0 4px 16px rgba(31, 123, 255, 0.08);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n  transform: scale(1.05);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel {\n  border-radius: 0.75rem !important;\n  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.03) !important;\n  border: none !important;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option {\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  min-height: 2.75rem;\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active {\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.1) 0%, rgba(31, 123, 255, 0.06) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-main {\n  font-weight: 500;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.125rem;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.button-one[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.button-one[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  color: var(--button-text-2) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filters-panel[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-height: 75vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1rem;\n  box-shadow: 0 1.25rem 3rem rgba(15, 23, 42, 0.16), 0 0.375rem 1rem rgba(15, 23, 42, 0.06);\n  animation: _ngcontent-%COMP%_slideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.filters-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.125rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--button-1);\n}\n\n.filter-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  padding: 1rem 1.125rem;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.filter-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.625rem;\n  padding: 0 0.75rem;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-flex {\n  height: 2.5rem;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label {\n  top: 1.25rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label.mdc-floating-label--float-above {\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item input, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-value-text {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-arrow, [_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle .mat-icon {\n  color: #94a3b8;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 0.25rem 0.625rem rgba(15, 23, 42, 0.06);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle button {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n\n.filter-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  grid-column: span 1;\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  padding: 0.875rem 1.125rem;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #475569 !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .filter-reset-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.list-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid #e2e8f0;\n  border-radius: 0.75rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n\n.exam-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inner-analytics-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-header {\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.5rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-labels {\n  min-height: 3rem;\n  gap: 0.125rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0 1.25rem;\n  min-height: 3rem;\n  border-radius: 0.75rem 0.75rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab:hover {\n  background: var(--bg-1);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active {\n  background: var(--bg-1);\n  color: var(--button-1);\n  box-shadow: inset 0 -0.125rem 0 var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-body-wrapper {\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-header {\n  background: var(--bg-1);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.75rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-labels {\n  min-height: 2.625rem;\n  gap: 0.25rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.8125rem;\n  padding: 0 1rem;\n  min-height: 2.625rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab:hover {\n  background: var(--bg-2);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active {\n  background: var(--bg-2);\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n.report-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.875rem;\n  padding: 1.25rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n}\n\n.analytics-summary-grid[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 1rem;\n  background: transparent;\n  border-bottom: none;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n  min-width: 0;\n  padding: 1rem 1.125rem;\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 0.25rem 0.75rem var(--theme-3-hanover-bg);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.1875rem);\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: var(--theme-2-hanover-bg);\n  color: var(--button-1);\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.summary-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.summary-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n\n.summary-icon--students[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--page[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--score[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n\n.summary-icon--pass[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n\n.summary-icon--categories[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n}\n\n.summary-icon--questions[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--attempts[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--mistakes[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n\n.summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  min-width: 0;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-3);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.25rem, 1.05rem + 0.7vw, 1.75rem);\n  font-weight: 800;\n  line-height: 1;\n  letter-spacing: -0.03em;\n  color: var(--theme-3-text-1);\n}\n\n.summary-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-xsm);\n  font-weight: 500;\n  color: var(--theme-3-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tab-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1rem 1rem;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n  margin: 0;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 20rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  padding: 0 0.75rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-flex {\n  height: 2.375rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-floating-label {\n  top: 1.1875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input::placeholder {\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-icon[matPrefix] {\n  color: var(--theme-3-icon-1);\n  margin-right: 0.5rem;\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-focused .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px var(--theme-2-hanover-bg);\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 0.875rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  border-radius: 0.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%], .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  color: var(--theme-3-text-2);\n  border: 1px solid var(--theme-3-border);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover, .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover {\n  background: var(--bg-1);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1);\n  border: none;\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--button-1-hover) 0%, var(--button-1) 100%);\n  box-shadow: 0 1rem 2rem var(--theme-2-hanover-bg);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 0 1rem 1rem;\n}\n\n.premium-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  border-radius: 0.5rem;\n  overflow: hidden;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--table-header-bg, #f8fafc);\n  font-weight: 700;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--table-header-text, #475569);\n  padding: 0.75rem 0.875rem;\n  border-bottom: 0.125rem solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 0.1875rem solid var(--button-1);\n}\n\n.premium-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-2, #334155);\n  border-bottom: 0.0625rem solid #f1f5f9;\n  vertical-align: middle;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.5);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.045);\n  box-shadow: inset 0.1875rem 0 0 var(--button-1);\n}\n\n.student-name[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: var(--font-md);\n  letter-spacing: -0.01em;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.student-name[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  transform: translateX(0.0625rem);\n}\n\n.student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.student-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.category-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n\n.marks-inline[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-1);\n}\n\n.marks-sep[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  margin: 0 0.125rem;\n}\n\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366f1;\n}\n\n.review-status[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n\n.review-status.review-pending[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  font-weight: 600;\n}\n\n.result-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--theme-3-text-3);\n}\n\n.result-pill.result-pass[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.result-pill.result-fail[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  scrollbar-width: thin;\n  scrollbar-color: rgba(99, 102, 241, 0.2) transparent;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: rgba(99, 102, 241, 0.2);\n  border-radius: 0.1875rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: rgba(99, 102, 241, 0.35);\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.analytics-section[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  overflow: auto;\n  border-radius: 0.625rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  color: var(--theme-3-text-2);\n}\n\n.pager[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.375rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  padding: 0.375rem 1rem !important;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n  background: var(--bg-2) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.loader-placeholder[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.02) 25%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.02) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%] {\n  margin-left: 0.375rem;\n  font-size: 0.85rem;\n  color: var(--button-1);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  font-weight: 600;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateX(0.125rem);\n}\n\n.wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  cursor: pointer;\n  font-weight: 700;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.wa-answer-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(0.0625rem);\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.85rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_subtlePulse {\n  0%, 100% {\n    box-shadow: 0 1.5rem 3.75rem var(--theme-3-hanover-bg);\n  }\n  50% {\n    box-shadow: 0 1.75rem 4rem var(--theme-2-hanover-bg);\n  }\n}\n.wrong-summary-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.55) 0%, rgba(30, 41, 59, 0.75) 100%);\n  backdrop-filter: blur(0.75rem) saturate(140%);\n  z-index: 10050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(56rem, 92vw);\n  max-height: 88vh;\n  z-index: 10060;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 1.25rem;\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  overflow: hidden;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  min-width: 0;\n  flex: 1;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n}\n\n.panel-header[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  margin-top: 0;\n  line-height: 1.4;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  transform: rotate(90deg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: 1.125rem 1.375rem;\n  overflow: auto;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.875rem;\n  font-size: 0.9375rem;\n  letter-spacing: -0.01em;\n  color: var(--theme-3-text-1);\n  padding: 0.875rem 1rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: var(--bg-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .small-muted[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  padding-left: 0;\n  color: var(--theme-3-text-3);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  margin: 0 auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-1-text-1);\n  background: var(--table-header-bg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent;\n  transition: transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.125rem);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n  text-align: center;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--theme-3-text-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover   td[_ngcontent-%COMP%] {\n  border-color: var(--button-1);\n  background: var(--bg-2);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg);\n}\n\n.wa-answer-link[_ngcontent-%COMP%], .wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover, .wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%], .summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.875rem 1.375rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.625rem !important;\n  font-weight: 700 !important;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.0625rem);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg) !important;\n}\n\n.resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 0.875rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2rem var(--theme-3-hanover-bg);\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n}\n\n.res-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  letter-spacing: -0.01em;\n}\n\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n  width: 0.375rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--theme-3-border);\n  border-radius: 0.1875rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%] {\n  width: min(72rem, 94vw);\n  max-height: 90vh;\n  margin: auto;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border-radius: 1.25rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  border: 0.0625rem solid var(--theme-3-border);\n  overflow: hidden;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-3);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.5rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  letter-spacing: 0.01em;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 62.5rem;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 0.125rem 0.5rem rgba(15, 23, 42, 0.08);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.pass[_ngcontent-%COMP%] {\n  color: var(--button-text-1);\n  background: var(--button-1);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.fail[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 2.75rem;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--theme-3-text-2);\n  line-height: 1;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex: 0 0 2.75rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.375rem 0.875rem var(--theme-3-hanover-bg);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.125rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.875rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  max-height: calc(90vh - 10rem);\n  padding: 1.5rem;\n}\n\n.attempt-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.75rem 0;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  margin-bottom: 0.875rem;\n}\n\n.attempt-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.attempt-header[_ngcontent-%COMP%]   .score-badge[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #0a8043;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.875rem;\n  margin-left: auto;\n  letter-spacing: 0.01em;\n}\n\n.attempt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-size: 0.8125rem;\n}\n\n.questions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.question-review-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-1);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.125rem 0.375rem rgba(15, 23, 42, 0.03);\n  overflow: hidden;\n}\n\n.question-review-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1) 0%, rgba(99, 102, 241, 0.4) 100%);\n}\n\n.question-review-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem rgba(15, 23, 42, 0.08);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--theme-3-text-1);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .mark-badge[_ngcontent-%COMP%] {\n  float: right;\n  background: #fff3f3;\n  color: var(--red-text);\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.q-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem dashed var(--theme-3-border);\n}\n\n.q-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-index[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0.06) 100%);\n  border: 0.0625rem solid rgba(99, 102, 241, 0.18);\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.875rem;\n  color: var(--button-1);\n  flex-shrink: 0;\n}\n\n.q-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n}\n\n.q-badge[_ngcontent-%COMP%] {\n  background: var(--theme-2-hanover-bg);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--button-1);\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.6875rem;\n  line-height: 1rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.q-info[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.8125rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n\n.q-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  width: 0.9375rem;\n  height: 0.9375rem;\n  color: var(--button-1);\n}\n\n.q-marks.small-muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n}\n\n.q-options.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.q-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.875rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.1);\n  background: #f8fbff;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.opt-left[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.opt-left[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.opt-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 0.75rem;\n  align-self: center;\n  line-height: 1.45;\n}\n\n.opt-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n}\n\n.badge.your-answer[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.badge.correct[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.badge.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border-color: var(--bred-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.1);\n}\n\n.q-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border-color: var(--bgreen-border);\n}\n\n.q-option.correct[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.1);\n}\n\n.q-option.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border-color: var(--bblue-border);\n}\n\n.q-option.missed[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(11, 102, 208, 0.1);\n}\n\n.q-selected[_ngcontent-%COMP%], .q-marks[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.q-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  background: rgba(240, 248, 255, 0.6);\n  padding: 0.625rem 0.75rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%], .q-marks.mark-negative[_ngcontent-%COMP%], .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.25rem;\n  height: 2rem;\n  margin-top: 0;\n  padding: 0 0.625rem;\n  display: inline-grid !important;\n  place-items: center;\n  border-radius: 0.375rem;\n  font-weight: 800 !important;\n  font-size: 0.8125rem;\n  line-height: normal;\n  letter-spacing: 0.01em;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: #0b8a45;\n}\n\n.q-marks.mark-negative[_ngcontent-%COMP%] {\n  background: #fff2f4;\n  color: #b02a37;\n}\n\n.q-marks.mark-mid[_ngcontent-%COMP%] {\n  background: #fff8e6;\n  color: #b36a00;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  background: #fff7ed;\n  border: 0.0625rem solid rgba(245, 166, 35, 0.1);\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.selected[_ngcontent-%COMP%] {\n  background: #e8f6ff;\n  border-color: rgba(2, 112, 255, 0.15);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  border-color: var(--bgreen-border);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-correct[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.8125rem;\n  background-color: var(--green-bg);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.875rem;\n}\n\n.descriptive-answers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.875rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-question[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #8c6ad6;\n  background: rgba(140, 106, 214, 0.08);\n  display: inline-block;\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  flex: 0 0 8.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #f39c12;\n  background: #fff;\n  padding: 0.75rem 0.5rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  margin-top: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--theme-2);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--green-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bgreen-border);\n  border-left: 0.1875rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-label[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .student-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-text[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.55;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  padding: 0.625rem;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0b66d0;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .q-feedback[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-review-comments[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem dashed var(--theme-3-border);\n}\n\n.review-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.875rem;\n}\n\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  padding: 0.875rem;\n  border-radius: 0.75rem;\n  min-height: 4rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.06);\n  transform: translateY(-0.125rem);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.875rem;\n}\n\n.review-columns[_ngcontent-%COMP%]   .col.missed[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--red-bg) 0%, #fff 90%);\n  border-color: var(--bred-border);\n  border-top: 0.1875rem solid var(--red-text);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col.incorrect[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--orange-bg) 0%, #fff 90%);\n  border-color: var(--borange-border);\n  border-top: 0.1875rem solid var(--orange-text);\n}\n\n.review-columns[_ngcontent-%COMP%]   .col.incomplete[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--yellow-bg) 0%, #fff 90%);\n  border-color: var(--byellow-border);\n  border-top: 0.1875rem solid var(--yellow-text);\n}\n\n.col-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.col-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-2);\n}\n\n.dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0.1875rem rgba(0, 0, 0, 0.04);\n}\n\n.dot.red[_ngcontent-%COMP%] {\n  background: var(--red-text);\n}\n\n.dot.orange[_ngcontent-%COMP%] {\n  background: var(--orange-text);\n}\n\n.dot.yellow[_ngcontent-%COMP%] {\n  background: var(--yellow-text);\n}\n\n.review-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: flex-start;\n}\n\n.ri-left[_ngcontent-%COMP%] {\n  width: 2rem;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-shrink: 0;\n}\n\n.ri-icon[_ngcontent-%COMP%] {\n  width: 1.625rem;\n  height: 1.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.ri-icon.missed[_ngcontent-%COMP%] {\n  color: var(--red-text);\n  background: rgba(185, 28, 28, 0.08);\n}\n\n.ri-icon.incorrect[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  background: rgba(194, 65, 12, 0.08);\n}\n\n.ri-icon.incomplete[_ngcontent-%COMP%] {\n  color: var(--yellow-text);\n  background: rgba(180, 83, 9, 0.08);\n}\n\n.ri-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n\n.review-text.deleted[_ngcontent-%COMP%] {\n  color: gray;\n  text-decoration: line-through;\n}\n\n.deleted-by[_ngcontent-%COMP%] {\n  color: #c0392b;\n  font-style: italic;\n  display: block;\n  margin-top: 0.375rem;\n  font-size: 0.75rem;\n}\n\n.review-text-missed[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--theme-3);\n  font-weight: 400;\n  padding: 0.625rem 0.75rem;\n  border: 0.0625rem solid var(--bred-border);\n  border-radius: 0.5rem;\n  line-height: 1.45;\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-text-missed[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.review-text-incorrect[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--theme-3);\n  font-weight: 400;\n  padding: 0.625rem 0.75rem;\n  border: 0.0625rem solid var(--borange-border);\n  border-radius: 0.5rem;\n  line-height: 1.45;\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-text-incorrect[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.review-text-incomplete[_ngcontent-%COMP%] {\n  display: flex;\n  background: var(--theme-3);\n  font-weight: 400;\n  padding: 0.625rem 0.75rem;\n  border: 0.0625rem solid var(--byellow-border);\n  border-radius: 0.5rem;\n  line-height: 1.45;\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-text-incomplete[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.review-meta[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  color: rgba(0, 0, 0, 0.5);\n  margin-top: 0.375rem;\n  letter-spacing: 0.01em;\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.125rem;\n}\n\n.review-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: initial !important;\n}\n\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%], .save-link[_ngcontent-%COMP%], .cancel-link[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  margin-right: 0.375rem;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.1875rem;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%]:hover, .save-link[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.06);\n}\n\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%] {\n  color: #d33;\n}\n\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%]:hover {\n  background: rgba(221, 51, 51, 0.06);\n}\n\n.cancel-link[_ngcontent-%COMP%]:hover {\n  background: rgba(0, 0, 0, 0.04);\n}\n\n.edit-comment-text[_ngcontent-%COMP%] {\n  width: -webkit-fill-available;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  padding: 0.375rem 0.5rem;\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  resize: vertical;\n}\n\n.edit-comment-text[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n\n.marks-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  min-height: 2.25rem;\n}\n\n.marks-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.edit-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  line-height: 1.75rem !important;\n  opacity: 0.6;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.edit-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(99, 102, 241, 0.08);\n}\n\n.marks-edit[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  background: #fff;\n  padding: 0.1875rem 0.375rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid var(--button-1);\n  box-shadow: 0 0.125rem 0.5rem rgba(99, 102, 241, 0.15);\n}\n\n.marks-input[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  padding: 0.25rem 0.375rem;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.marks-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n.marks-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .marks-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.marks-max[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 500;\n}\n\n.save-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  line-height: 1.75rem !important;\n  color: var(--green-text) !important;\n  background: var(--green-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.save-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.save-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.cancel-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  line-height: 1.75rem !important;\n  color: var(--red-text) !important;\n  background: var(--red-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cancel-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.cancel-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.marks-history-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(59, 130, 246, 0.02) 100%);\n  border-radius: 0.75rem;\n  border: 0.0625rem solid rgba(99, 102, 241, 0.1);\n}\n\n.marks-history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(99, 102, 241, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--button-1);\n}\n.marks-history-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.marks-history-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n}\n\n.history-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1.5rem;\n  flex-shrink: 0;\n}\n.history-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 0 0 0.1875rem rgb(255, 255, 255);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  box-shadow: 0 0 0 0.1875rem rgba(16, 185, 129, 0.15), 0 0.125rem 0.375rem rgba(16, 185, 129, 0.25);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.past[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #94a3b8, #64748b);\n  box-shadow: 0 0 0 0.1875rem rgba(148, 163, 184, 0.15);\n}\n.history-indicator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  flex: 1;\n  background: linear-gradient(180deg, rgba(148, 163, 184, 0.4) 0%, rgba(148, 163, 184, 0.1) 100%);\n  margin: 0.25rem 0;\n  min-height: 1rem;\n}\n\n.history-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 0.875rem;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.history-card.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%);\n  border: 0.0625rem solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 0.125rem 0.5rem rgba(16, 185, 129, 0.1);\n}\n.history-card.current[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.375rem 1rem rgba(16, 185, 129, 0.18);\n  transform: translateY(-0.1875rem);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.history-card.past[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.8);\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.history-card.past[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.history-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  margin-bottom: 0.375rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(16, 185, 129, 0.3);\n}\n\n.history-marks[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n}\n.history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.45);\n}\n\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  opacity: 0.6;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.history-card.current[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  color: var(--green-text);\n}\n\n@media (max-width: 55rem) {\n  .page[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem 2rem;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-bottom: 0.625rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 1 1 100%;\n  }\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tab-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-options.two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .user-review-panel[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 0.625rem;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n    margin-top: 0.5rem;\n  }\n  .descriptive-answers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-head-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .q-right[_ngcontent-%COMP%] {\n    margin-left: 3.125rem;\n  }\n}\n@media (max-width: 45rem) {\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0.875rem;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .summary-meta[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    border-radius: 0.625rem;\n    overflow: hidden;\n    border: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: left;\n    border-radius: 0;\n    border: none;\n    border-bottom: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 700;\n    color: var(--theme-3-text-2);\n    margin-right: 0.5rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.manual-check-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 8px;\n  padding: 3px 9px;\n  border: 1px solid #d97706;\n  border-radius: 16px;\n  background: #fff7ed;\n  color: #9a3412;\n  cursor: pointer;\n  font: inherit;\n}\n\n.manual-check-chip.selected[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  font-weight: 600;\n}\n\n.manual-check-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n\n.edit-comment-reason[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 8px;\n}\n\n.review-meta[_ngcontent-%COMP%]   .edit-reason[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n}\n\n.save-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnJvbGUvYWRtaW4vZXhhbS1yZXBvcnRzL2V4YW0tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBZEY7O0FBa0JBO0VBQXdELGFBQUE7QUFkeEQ7O0FBaUJBO0VBQVEsNEJBQUE7QUFiUjs7QUFjQTtFQUFnQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsYUFBQTtBQVJ2RDs7QUFTQTtFQUFXLGFBQUE7RUFBZSxlQUFBO0VBQWlCLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixrREFBQTtBQUN4STs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsNkRBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFBMkUsd0JBQUE7QUFHM0U7O0FBRkE7RUFBK0UsZUFBQTtBQU0vRTs7QUFMQTtFQUFnRixpQkFBQTtFQUFtQixpQkFBQTtBQVVuRzs7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBOztFQUVFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFD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O0FBenBEQTtFQUE4QixtQkFBQTtFQUFxQixnQkFBQTtBQThwRG5EOztBQTdwREE7RUFBOEIsV0FBQTtFQUFhLFlBQUE7RUFBYyxlQUFBO0FBbXFEekQ7O0FBbHFEQTtFQUF1QixjQUFBO0VBQWdCLFdBQUE7RUFBYSxlQUFBO0FBd3FEcEQ7O0FBdnFEQTtFQUE0QixjQUFBO0VBQWdCLGVBQUE7QUE0cUQ1Qzs7QUEzcURBO0VBQXNCLGFBQUE7RUFBYyxtQkFBQTtBQWdyRHBDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRW50ZXJwcmlzZSDDosKAwpMgRXhhbSBSZXBvcnRzICAoZW5oYW5jZWQgdjIpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kZWFzZTogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuJGVhc2Utc21vb3RoOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNSwgMSk7XHJcbiRlYXNlLWJvdW5jZTogY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG4kcmFkaXVzOiAwLjc1cmVtO1xyXG4kc2hhZG93LXNtOiAwIDAuMDYyNXJlbSAwLjE4NzVyZW0gcmdiYSgwLDAsMCwwLjA0KSwgMCAwLjA2MjVyZW0gMC4xMjVyZW0gcmdiYSgwLDAsMCwwLjAzKTtcclxuJHNoYWRvdy1tZDogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgwLDAsMCwwLjA2KTtcclxuJHNoYWRvdy1sZzogMCAxLjI1cmVtIDIuNXJlbSByZ2JhKDAsMCwwLDAuMSksIDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwwLjA2KTtcclxuJHNoYWRvdy1wYW5lbDogMCAxLjVyZW0gMy43NXJlbSByZ2JhKDUsMTgsNDAsMC4yMiksIDAgMC4zNzVyZW0gMXJlbSByZ2JhKDUsMTgsNDAsMC4wOCk7XHJcbiRzaGFkb3ctaG92ZXI6IDAgMC41cmVtIDEuMjVyZW0gcmdiYSgwLDAsMCwwLjA4KTtcclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBIb3N0IHRva2VucyDDosKUwoDDosKUwoBcclxuOmhvc3Qge1xyXG4gIC0tZ3JlZW4tYmc6ICNlOGY5ZWY7XHJcbiAgLS1yZWQtYmc6ICNmZmYyZjQ7XHJcbiAgLS15ZWxsb3ctYmc6ICNmZmY4ZTY7XHJcbiAgLS1vcmFuZ2UtYmc6ICNmZmY0ZTE7XHJcbiAgLS1ibHVlLWJnOiAjZTZmMGZmO1xyXG4gIC0tZ3JlZW4tdGV4dDogIzE2NjUzNDtcclxuICAtLXJlZC10ZXh0OiAjYjkxYzFjO1xyXG4gIC0teWVsbG93LXRleHQ6ICNiNDUzMDk7XHJcbiAgLS1vcmFuZ2UtdGV4dDogI2MyNDEwYztcclxuICAtLWJsdWUtdGV4dDogIzBiNjZkMDtcclxuICAtLWJncmVlbi1ib3JkZXI6ICM4NmVmYWM7XHJcbiAgLS1icmVkLWJvcmRlcjogI2U3ZDZkNjtcclxuICAtLWJ5ZWxsb3ctYm9yZGVyOiAjZmRlNjhhO1xyXG4gIC0tYm9yYW5nZS1ib3JkZXI6ICNmYWVlZGY7XHJcbiAgLS1iYmx1ZS1ib3JkZXI6ICM5M2M1ZmQ7XHJcbiAgLS1zY29yZS1jb2xvcjogI2YzOWMxMjtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hdGVyaWFsIG92ZXJyaWRlcyDDosKUwoDDosKUwoBcclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFnZSAmIHRvb2xiYXIgw6LClMKAw6LClMKAXHJcbi5wYWdlIHsgcGFkZGluZzogMS4yNXJlbSAxLjVyZW0gM3JlbTsgfVxyXG4uZXhhbS1yZXBvcnRzIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxLjEyNXJlbTsgfVxyXG4udG9vbGJhciB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDAuODc1cmVtOyBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7IH1cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vIFNFTEVDVElPTlMgw6LCgMKUIFByZW1pdW0gQXV0b2NvbXBsZXRlIElucHV0c1xyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLnNlbGVjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXg6IDEgMSAyOHJlbTtcclxuICBtaW4td2lkdGg6IDE2cmVtO1xyXG4gIG1heC13aWR0aDogMzZyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMTRyZW07XHJcbiAgbWF4LXdpZHRoOiAxOHJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZmFmYmZjIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICBwYWRkaW5nOiAwIDAuODc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyAkZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tZGMtbm90Y2hlZC1vdXRsaW5lIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggeyBoZWlnaHQ6IDIuNzVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjVyZW0gMDsgbWluLWhlaWdodDogdW5zZXQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHsgXHJcbiAgdG9wOiAxLjM3NXJlbTsgXHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCxcclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLm1kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKSBzY2FsZSgwLjc1KTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIGlucHV0IHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7IFxyXG4gIGNvbG9yOiAjOTRhM2I4OyBcclxuICBmb250LXdlaWdodDogNDAwOyBcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHdpZHRoOiAxLjI1cmVtO1xyXG4gIGhlaWdodDogMS4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2U7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkOmhvdmVyIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkOmhvdmVyIG1hdC1pY29uW21hdFByZWZpeF0geyBjb2xvcjogIzY0NzQ4YjsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwgMTIzLCAyNTUsIDAuMTIpLCAwIDRweCAxNnB4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjA4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vLyBBdXRvY29tcGxldGUgcGFuZWwgc3R5bGluZ1xyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbiB7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDIuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzICRlYXNlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wNikgMCUsIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA0KSAxMDAlKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbi5tYXQtbWRjLW9wdGlvbi1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsIDEyMywgMjU1LCAwLjEpIDAlLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4wNikgMTAwJSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24gLm9wdGlvbi1tYWluIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uIC5vcHRpb24tc3ViIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuLmNvbnRyb2xzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjVyZW07IH1cclxuLmFjdGlvbi1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4uYnV0dG9uLW9uZSB7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSkgIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDsgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlICFpbXBvcnRhbnQ7IH1cclxuLmJ1dHRvbi1vbmU6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMS1ob3ZlcikgIWltcG9ydGFudDsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTIpICFpbXBvcnRhbnQ7IGJveC1zaGFkb3c6ICRzaGFkb3ctbWQgIWltcG9ydGFudDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA2MjVyZW0pOyB9XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gRklMVEVSUyBPVkVSTEFZIFBBTkVMIMOiwoDClCBNb2Rlcm4gZmllbGQgZGVzaWduXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4uZmlsdGVycy1wYW5lbCB7XHJcbiAgd2lkdGg6IDI0cmVtO1xyXG4gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2ZhZmJmYyAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxLjI1cmVtIDNyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjE2KSwgMCAwLjM3NXJlbSAxcmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMjhzICRlYXNlLWJvdW5jZTtcclxufVxyXG5cclxuLmZpbHRlcnMtcGFuZWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4xMjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZhZmJmYyAwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uZmlsdGVycy1wYW5lbC1oZWFkZXIgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG4uZmlsdGVycy1wYW5lbC1oZWFkZXIgaDQgbWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gIGhlaWdodDogMS4xMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxufVxyXG5cclxuLmZpbHRlci1ibG9jayB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4xMjVyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmbGV4OiAxO1xyXG59XHJcbi5maWx0ZXItaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4vLyBGaWx0ZXIgZmllbGQgOjpuZy1kZWVwIG92ZXJyaWRlcyDDosKAwpQgbW9kZXJuIGNvbXBhY3QgbG9va1xyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wMyk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtZmxleCB7IGhlaWdodDogMi41cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzc1cmVtIDA7IG1pbi1oZWlnaHQ6IHVuc2V0OyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwge1xyXG4gIHRvcDogMS4yNXJlbTtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0ubWF0LWZvY3VzZWQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwsXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwubWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZSB7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gaW5wdXQsXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtc2VsZWN0LXZhbHVlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1zZWxlY3QtYXJyb3csXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSAubWF0LWljb24geyBjb2xvcjogIzk0YTNiODsgfVxyXG5cclxuLy8gSG92ZXJcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbTpob3ZlciAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC42MjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxufVxyXG4vLyBGb2N1c1xyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtLm1hdC1mb2N1c2VkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjEyKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLy8gRGF0ZXBpY2tlciB0b2dnbGUgYnV0dG9uIGFsaWdubWVudFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUgYnV0dG9uIHtcclxuICB3aWR0aDogMS43NXJlbTtcclxuICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gU3BhbiBkYXRlIHBpY2tlcnMgZnVsbCB3aWR0aCBvbiBuYXJyb3cgZ3JpZHNcclxuLmZpbHRlci1pdGVtOm50aC1sYXN0LWNoaWxkKC1uKzIpIHsgZ3JpZC1jb2x1bW46IHNwYW4gMTsgfVxyXG5cclxuLmZpbHRlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMC44NzVyZW0gMS4xMjVyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZhZmJmYyAwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2UgIWltcG9ydGFudDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1tZCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNjI1cmVtKTtcclxufVxyXG4uZmlsdGVyLXJlc2V0LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDc1NTY5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODEyNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJvcmRlci1jb2xvciAwLjJzICRlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpbHRlci1yZXNldC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmMgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTEgIWltcG9ydGFudDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0biBtYXQtaWNvbixcclxuLmZpbHRlci1yZXNldC1idG4gbWF0LWljb24geyBmb250LXNpemU6IDFyZW07IHdpZHRoOiAxcmVtOyBoZWlnaHQ6IDFyZW07IG1hcmdpbi1yaWdodDogMC4yNXJlbTsgfVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVyZW0pOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBMaXN0IGNhcmQgKyB0YWJzIHdyYXBwZXIgw6LClMKAw6LClMKAXHJcbi5saXN0LWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAkcmFkaXVzOyBib3gtc2hhZG93OiAkc2hhZG93LW1kOyBvdmVyZmxvdzogaGlkZGVuOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgJGVhc2UsIGJvcmRlci1jb2xvciAwLjNzICRlYXNlOyB9XHJcbi5saXN0LWNhcmQ6aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LWhvdmVyOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgfVxyXG4ubGlzdC13cmFwcGVyIHsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG4uZXhhbS10YWJzIHsgd2lkdGg6IDEwMCU7IH1cclxuLmlubmVyLWFuYWx5dGljcy10YWJzIHsgd2lkdGg6IDEwMCU7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYWluIHRhYnMgKFVzZXIgUmVwb3J0IC8gQW5hbHl0aWNzIFJlcG9ydCkgw6LClMKAw6LClMKAXHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tYXQtbWRjLXRhYi1oZWFkZXIgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBwYWRkaW5nOjAgMC41cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tYXQtbWRjLXRhYi1sYWJlbHMgeyBtaW4taGVpZ2h0OjNyZW07IGdhcDowLjEyNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYiB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC13ZWlnaHQ6NjAwOyBmb250LXNpemU6MC44NzVyZW07IHBhZGRpbmc6MCAxLjI1cmVtOyBtaW4taGVpZ2h0OjNyZW07IGJvcmRlci1yYWRpdXM6JHJhZGl1cyAkcmFkaXVzIDAgMDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYjpob3ZlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYi0tYWN0aXZlIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93Omluc2V0IDAgLTAuMTI1cmVtIDAgdmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgdHJhbnNpdGlvbjpjb2xvciAwLjJzICRlYXNlOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tYXQtbWRjLXRhYi1ib2R5LXdyYXBwZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm9yZGVyLXdpZHRoOjAuMTI1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSW5uZXIgYW5hbHl0aWNzIHRhYnMgKENhdGVnb3J5IFJlcG9ydCAvIFF1ZXN0aW9uIFN1bW1hcnkpIMOiwpTCgMOiwpTCgFxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tYXQtbWRjLXRhYi1oZWFkZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IHBhZGRpbmc6MCAwLjc1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1hdC1tZGMtdGFiLWxhYmVscyB7IG1pbi1oZWlnaHQ6Mi42MjVyZW07IGdhcDowLjI1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWIgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgcGFkZGluZzowIDFyZW07IG1pbi1oZWlnaHQ6Mi42MjVyZW07IGJvcmRlci1yYWRpdXM6MC41cmVtIDAuNXJlbSAwIDA7IHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjJzICRlYXNlLCBjb2xvciAwLjJzICRlYXNlOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWI6aG92ZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTIpOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYi0tYWN0aXZlIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0yKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiX190ZXh0LWxhYmVsIHsgZm9udC13ZWlnaHQ6NjAwOyBsZXR0ZXItc3BhY2luZzowLjAxZW07IHRyYW5zaXRpb246Y29sb3IgMC4ycyAkZWFzZTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm9yZGVyLXdpZHRoOjAuMTI1cmVtOyB9XHJcblxyXG4ucmVwb3J0LXN1bW1hcnktZ3JpZCB7IGRpc3BsYXk6Z3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOnJlcGVhdCg0LCBtaW5tYXgoMCwgMWZyKSk7IGdhcDowLjg3NXJlbTsgcGFkZGluZzoxLjI1cmVtIDFyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLmFuYWx5dGljcy1zdW1tYXJ5LWdyaWQgeyBwYWRkaW5nOjAuMjVyZW0gMCAxcmVtOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOm5vbmU7IH1cclxuLnN1bW1hcnktY2FyZCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6ZmxleC1zdGFydDsgZ2FwOjAuODc1cmVtOyBtaW4td2lkdGg6MDsgcGFkZGluZzoxcmVtIDEuMTI1cmVtOyBib3JkZXI6MXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJveC1zaGFkb3c6MCAwLjI1cmVtIDAuNzVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgJGVhc2U7IH1cclxuLnN1bW1hcnktY2FyZDpob3ZlciB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjE4NzVyZW0pOyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OjAgMC43NXJlbSAxLjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfVxyXG4uc3VtbWFyeS1pY29uIHsgd2lkdGg6Mi43NXJlbTsgaGVpZ2h0OjIuNzVyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmbGV4LXNocmluazowOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBiYWNrZ3JvdW5kOnZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IH1cclxuLnN1bW1hcnktaWNvbjpob3ZlciB7IHRyYW5zZm9ybTpzY2FsZSgxLjA1KTsgfVxyXG4uc3VtbWFyeS1pY29uIG1hdC1pY29uIHsgZm9udC1zaXplOjEuMjVyZW07IHdpZHRoOjEuMjVyZW07IGhlaWdodDoxLjI1cmVtOyB9XHJcbi8vIEljb24gY29sb3IgdmFyaWFudHNcclxuLnN1bW1hcnktaWNvbi0tc3R1ZGVudHMgeyBiYWNrZ3JvdW5kOnJnYmEoOTksMTAyLDI0MSwwLjEpOyBjb2xvcjojNjM2NmYxOyB9XHJcbi5zdW1tYXJ5LWljb24tLXBhZ2UgeyBiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwwLjEpOyBjb2xvcjojM2I4MmY2OyB9XHJcbi5zdW1tYXJ5LWljb24tLXNjb3JlIHsgYmFja2dyb3VuZDpyZ2JhKDI0NSwxNTgsMTEsMC4xKTsgY29sb3I6I2Y1OWUwYjsgfVxyXG4uc3VtbWFyeS1pY29uLS1wYXNzIHsgYmFja2dyb3VuZDpyZ2JhKDE2LDE4NSwxMjksMC4xKTsgY29sb3I6IzEwYjk4MTsgfVxyXG4uc3VtbWFyeS1pY29uLS1jYXRlZ29yaWVzIHsgYmFja2dyb3VuZDpyZ2JhKDEzOSw5MiwyNDYsMC4xKTsgY29sb3I6IzhiNWNmNjsgfVxyXG4uc3VtbWFyeS1pY29uLS1xdWVzdGlvbnMgeyBiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwwLjEpOyBjb2xvcjojM2I4MmY2OyB9XHJcbi5zdW1tYXJ5LWljb24tLWF0dGVtcHRzIHsgYmFja2dyb3VuZDpyZ2JhKDk5LDEwMiwyNDEsMC4xKTsgY29sb3I6IzYzNjZmMTsgfVxyXG4uc3VtbWFyeS1pY29uLS1taXN0YWtlcyB7IGJhY2tncm91bmQ6cmdiYSgyMzksNjgsNjgsMC4xKTsgY29sb3I6I2VmNDQ0NDsgfVxyXG4uc3VtbWFyeS1jb3B5IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjI1cmVtOyBtaW4td2lkdGg6MDsgfVxyXG4uc3VtbWFyeS1sYWJlbCB7IGZvbnQtc2l6ZTp2YXIoLS1mb250LXhzKTsgZm9udC13ZWlnaHQ6NzAwOyBsZXR0ZXItc3BhY2luZzowLjA4ZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi5zdW1tYXJ5LXZhbHVlIHsgZm9udC1zaXplOmNsYW1wKDEuMjVyZW0sIDEuMDVyZW0gKyAwLjd2dywgMS43NXJlbSk7IGZvbnQtd2VpZ2h0OjgwMDsgbGluZS1oZWlnaHQ6MTsgbGV0dGVyLXNwYWNpbmc6LTAuMDNlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5zdW1tYXJ5LW1ldGEgeyBmb250LXNpemU6dmFyKC0tZm9udC14c20pOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0yKTsgd2hpdGUtc3BhY2U6bm93cmFwOyBvdmVyZmxvdzpoaWRkZW47IHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IH1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBUQUIgQUNUSU9OUyDDosKAwpQgQ29tcGFjdCBTZWFyY2ggJiBBY3Rpb24gQmFyIChJbnNpZGUgVGFicylcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi50YWItYWN0aW9ucyB7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjFyZW07IHBhZGRpbmc6MC44NzVyZW0gMXJlbSAxcmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBtYXJnaW46MDsgfVxyXG5cclxuLy8gQ29tcGFjdCBTZWFyY2hcclxuLnRhYi1hY3Rpb25zIC5zZWFyY2ggeyBmbGV4OjE7IG1heC13aWR0aDoyMHJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC43NXJlbTsgcGFkZGluZzowIDAuNzVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IGJveC1zaGFkb3c6MCAwLjVyZW0gMXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4IHsgaGVpZ2h0OiAyLjM3NXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzc1cmVtIDA7IG1pbi1oZWlnaHQ6IHVuc2V0OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7IHRvcDoxLjE4NzVyZW07IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggaW5wdXQgeyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6dmFyKC0tdGhlbWUtMy1pY29uLTEpOyBtYXJnaW4tcmlnaHQ6MC41cmVtOyBmb250LXNpemU6MS4xMjVyZW07IHdpZHRoOjEuMTI1cmVtOyBoZWlnaHQ6MS4xMjVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IH1cclxuLnRhYi1hY3Rpb25zIC5zZWFyY2g6aG92ZXIgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbi50YWItYWN0aW9ucyAuc2VhcmNoOmhvdmVyIDo6bmctZGVlcCBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi8vIENvbXBhY3QgQWN0aW9uIEJ1dHRvbnNcclxuLnRhYi1hY3Rpb25zIC5jb250cm9scyB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyB9XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyB7IGRpc3BsYXk6ZmxleDsgZ2FwOjAuMzc1cmVtOyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvbiB7IGhlaWdodDoyLjI1cmVtOyBwYWRkaW5nOjAgMC44NzVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IGJvcmRlci1yYWRpdXM6MC42MjVyZW07IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZ2FwOjAuMzc1cmVtOyB0cmFuc2l0aW9uOmFsbCAwLjJzICRlYXNlOyB9XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b24gbWF0LWljb24geyBmb250LXNpemU6MXJlbTsgd2lkdGg6MXJlbTsgaGVpZ2h0OjFyZW07IH1cclxuLy8gU2Vjb25kYXJ5IGJ1dHRvbiBzdHlsZSAoU2VhcmNoLCBFeHBvcnQpXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LXN0cm9rZWQtYnV0dG9uXSxcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtYnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTtcclxufVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1zdHJva2VkLWJ1dHRvbl06aG92ZXIsXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWJ1dHRvbl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG59XHJcbi8vIFByaW1hcnkgYnV0dG9uIHN0eWxlXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWZsYXQtYnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbn1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtZmxhdC1idXR0b25dOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMCUsIHZhcigtLWJ1dHRvbi0xKSAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUHJlbWl1bSB0YWJsZSDDosKUwoDDosKUwoBcclxuLnRhYmxlLXdyYXAgeyBvdmVyZmxvdy14OmF1dG87IHBhZGRpbmc6MCAxcmVtIDFyZW07IH1cclxuLnByZW1pdW0tdGFibGUgeyB3aWR0aDogMTAwJTsgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgYm9yZGVyLXJhZGl1czowLjVyZW07IG92ZXJmbG93OmhpZGRlbjsgfVxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwgeyBwb3NpdGlvbjogc3RpY2t5OyB0b3A6IDA7IHotaW5kZXg6IDI7IGJhY2tncm91bmQ6IHZhcigtLXRhYmxlLWhlYWRlci1iZywgI2Y4ZmFmYyk7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyBjb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLXRleHQsICM0NzU1NjkpOyBwYWRkaW5nOiAwLjc1cmVtIDAuODc1cmVtOyBib3JkZXItYm90dG9tOiAwLjEyNXJlbSBzb2xpZCAjZTJlOGYwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRkLm1hdC1jZWxsIHsgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIsICMzMzQxNTUpOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgI2YxZjVmOTsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2U7IH1cclxuLnByZW1pdW0tdGFibGUgdHIubWF0LXJvdzpudGgtY2hpbGQoZXZlbikgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwyNTAsMjUyLDAuNSk7IH1cclxuLnByZW1pdW0tdGFibGUgdHIubWF0LXJvdzpob3ZlciB0ZCB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA0NSk7IGJveC1zaGFkb3c6IGluc2V0IDAuMTg3NXJlbSAwIDAgdmFyKC0tYnV0dG9uLTEpOyB9XHJcbi5zdHVkZW50LW5hbWUgeyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZCk7IGxldHRlci1zcGFjaW5nOiAtMC4wMWVtOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbi5zdHVkZW50LW5hbWU6aG92ZXIgeyBvcGFjaXR5OiAwLjg1OyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjEyNXJlbTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMDYyNXJlbSk7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTdHVkZW50IC8gQ2F0ZWdvcnkgYXZhdGFyIGNlbGxzIMOiwpTCgMOiwpTCgFxyXG4uc3R1ZGVudC1jZWxsIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjYyNXJlbTsgY3Vyc29yOnBvaW50ZXI7IH1cclxuLnN0dWRlbnQtYXZhdGFyIHsgd2lkdGg6MnJlbTsgaGVpZ2h0OjJyZW07IGJvcmRlci1yYWRpdXM6MC41cmVtOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZm9udC13ZWlnaHQ6NzAwOyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjojZmZmOyBmbGV4LXNocmluazowOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2NjdlZWEgMCUsICM3NjRiYTIgMTAwJSk7IH1cclxuLmNhdGVnb3J5LWNlbGwgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNjI1cmVtOyBjdXJzb3I6cG9pbnRlcjsgfVxyXG4uY2F0ZWdvcnktYXZhdGFyIHsgd2lkdGg6MnJlbTsgaGVpZ2h0OjJyZW07IGJvcmRlci1yYWRpdXM6MC41cmVtOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZm9udC13ZWlnaHQ6NzAwOyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjojZmZmOyBmbGV4LXNocmluazowOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmMDkzZmIgMCUsICNmNTU3NmMgMTAwJSk7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBpbmxpbmUgw6LClMKAw6LClMKAXHJcbi5tYXJrcy1pbmxpbmUgeyBmb250LXdlaWdodDo2MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4ubWFya3Mtc2VwIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBtYXJnaW46MCAwLjEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBlcmNlbnRhZ2UgYmFkZ2Ugw6LClMKAw6LClMKAXHJcbi5wY3QtYmFkZ2UgeyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IHBhZGRpbmc6MC4xODc1cmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czowLjM3NXJlbTsgZm9udC1zaXplOjAuNzVyZW07IGZvbnQtd2VpZ2h0OjcwMDsgYmFja2dyb3VuZDpyZ2JhKDk5LDEwMiwyNDEsMC4wOCk7IGNvbG9yOiM2MzY2ZjE7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYW51YWwgcmV2aWV3IHN0YXR1cyDDosKUwoDDosKUwoBcclxuLnJldmlldy1zdGF0dXMgeyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo1MDA7IH1cclxuLnJldmlldy1zdGF0dXMucmV2aWV3LXBlbmRpbmcgeyBjb2xvcjp2YXIoLS1vcmFuZ2UtdGV4dCk7IGZvbnQtd2VpZ2h0OjYwMDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFJlc3VsdCBwaWxscyDDosKUwoDDosKUwoBcclxuLnJlc3VsdC1waWxsIHsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBwYWRkaW5nOjAuMTg3NXJlbSAwLjYyNXJlbTsgYm9yZGVyLXJhZGl1czoxcmVtOyBmb250LXNpemU6MC42ODc1cmVtOyBmb250LXdlaWdodDo3MDA7IGxldHRlci1zcGFjaW5nOjAuMDNlbTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyBiYWNrZ3JvdW5kOnJnYmEoMCwwLDAsMC4wNCk7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4ucmVzdWx0LXBpbGwucmVzdWx0LXBhc3MgeyBiYWNrZ3JvdW5kOnZhcigtLWdyZWVuLWJnKTsgY29sb3I6dmFyKC0tZ3JlZW4tdGV4dCk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLnJlc3VsdC1waWxsLnJlc3VsdC1mYWlsIHsgYmFja2dyb3VuZDp2YXIoLS1yZWQtYmcpOyBjb2xvcjp2YXIoLS1yZWQtdGV4dCk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tYnJlZC1ib3JkZXIpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgVGFibGUgd3JhcCBzY3JvbGxiYXIgw6LClMKAw6LClMKAXHJcbi50YWJsZS13cmFwIHtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4yKSB0cmFuc3BhcmVudDtcclxuICBcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7IGhlaWdodDogMC4zNzVyZW07IH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4yKTsgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtOyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4zNSk7IH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEFuYWx5dGljcyBzZWN0aW9uIMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLXNlY3Rpb24geyBwYWRkaW5nOjEuMjVyZW07IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MS4xMjVyZW07IH1cclxuLmFuYWx5dGljcy1zZWN0aW9uIC50YWJsZS13cmFwIHsgbWF4LWhlaWdodDo2MHZoOyBvdmVyZmxvdzphdXRvOyBib3JkZXItcmFkaXVzOjAuNjI1cmVtOyBib3gtc2hhZG93OiRzaGFkb3ctc207IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFnZXIgw6LClMKAw6LClMKAXHJcbi5wYWdlciB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBnYXA6MXJlbTsgcGFkZGluZzowLjg3NXJlbSAxLjI1cmVtOyBib3JkZXItdG9wOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTIpOyB9XHJcbi5wYWdlciBzcGFuIHsgcGFkZGluZzowLjI1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6MC4zNzVyZW07IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5wYWdlciBidXR0b24geyBib3JkZXItcmFkaXVzOjAuNXJlbSAhaW1wb3J0YW50OyBmb250LXdlaWdodDo2MDAgIWltcG9ydGFudDsgcGFkZGluZzowLjM3NXJlbSAxcmVtICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZSAhaW1wb3J0YW50OyB9XHJcbi5wYWdlciBidXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHsgYm94LXNoYWRvdzokc2hhZG93LW1kICFpbXBvcnRhbnQ7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjA2MjVyZW0pOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTIpICFpbXBvcnRhbnQ7IH1cclxuLnBhZ2VyIGJ1dHRvbltkaXNhYmxlZF0geyBvcGFjaXR5OjAuNDsgfVxyXG5cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH1cclxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XHJcbn1cclxuXHJcbi5sb2FkZXItcGxhY2Vob2xkZXIgeyBcclxuICBwYWRkaW5nOiAyLjVyZW07IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgXHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC4wMikgMjUlLCByZ2JhKDAsMCwwLDAuMDUpIDUwJSwgcmdiYSgwLDAsMCwwLjAyKSA3NSUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xyXG4gIGFuaW1hdGlvbjogc2hpbW1lciAxLjVzIGluZmluaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBXcm9uZy1hbnN3ZXIgbGluayDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktbGluayB7IG1hcmdpbi1sZWZ0OiAwLjM3NXJlbTsgZm9udC1zaXplOiAwLjg1cmVtOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBjdXJzb3I6IHBvaW50ZXI7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTI1cmVtOyBmb250LXdlaWdodDogNjAwOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbi53cm9uZy1zdW1tYXJ5LWxpbms6aG92ZXIgeyBvcGFjaXR5OiAwLjg7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjEyNXJlbSk7IH1cclxuLndhLWNvdW50LWxpbmsgeyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjEyNXJlbTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNzAwOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7IH1cclxuLndhLWNvdW50LWxpbms6aG92ZXIgeyBvcGFjaXR5OiAwLjg1OyB9XHJcbi53YS1hbnN3ZXItbGluayB7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4ud2EtYW5zd2VyLWxpbms6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4wNjI1cmVtKTsgfVxyXG4ubXV0ZWQgeyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXNpemU6IDAuODVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTaGFyZWQgYmFja2Ryb3AgKyBwYW5lbCDDosKUwoDDosKUwoBcclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMCB9IHRvIHsgb3BhY2l0eTogMSB9IH1cclxuQGtleWZyYW1lcyBzbGlkZVVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjI1cmVtKSBzY2FsZSgwLjk2KSB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIH0gfVxyXG5Aa2V5ZnJhbWVzIHN1YnRsZVB1bHNlIHsgMCUsIDEwMCUgeyBib3gtc2hhZG93OiAwIDEuNXJlbSAzLjc1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IH0gNTAlIHsgYm94LXNoYWRvdzogMCAxLjc1cmVtIDRyZW0gdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgfSB9XHJcblxyXG4ud3Jvbmctc3VtbWFyeS1iYWNrZHJvcCB7IHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgxNSwgMjMsIDQyLCAwLjU1KSAwJSwgcmdiYSgzMCwgNDEsIDU5LCAwLjc1KSAxMDAlKTsgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC43NXJlbSkgc2F0dXJhdGUoMTQwJSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjc1cmVtKSBzYXR1cmF0ZSgxNDAlKTsgei1pbmRleDogMTAwNTA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAxLjVyZW07IGFuaW1hdGlvbjogZmFkZUluIDAuMjVzICRlYXNlOyB9XHJcblxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCxcclxuLnJlc291cmNlLXBhbmVsIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogbWluKDU2cmVtLCA5MnZ3KTsgbWF4LWhlaWdodDogODh2aDsgei1pbmRleDogMTAwNjA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFuaW1hdGlvbjogc2xpZGVVcCAwLjM1cyAkZWFzZS1ib3VuY2U7IG1hcmdpbjogYXV0bzsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuY2FyZCxcclxuLnJlc291cmNlLXBhbmVsIC5jYXJkIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgbWF4LWhlaWdodDogODh2aDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDEuMjVyZW07IGJveC1zaGFkb3c6IDAgMnJlbSA0LjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjI4KSwgMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMTIpOyBvdmVyZmxvdzogaGlkZGVuOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFuZWwgaGVhZGVyIMOiwpTCgMOiwpTCgFxyXG4ucGFuZWwtaGVhZGVyIHsgcG9zaXRpb246cmVsYXRpdmU7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZ2FwOjFyZW07IHBhZGRpbmc6MS4yNXJlbSAxLjVyZW07IGJvcmRlci1ib3R0b206MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGZsZXgtc2hyaW5rOjA7IH1cclxuLnBhbmVsLWhlYWRlcjo6YmVmb3JlIHsgY29udGVudDonJzsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDowLjE4NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYnV0dG9uLTEpLCB0cmFuc3BhcmVudCk7IGJvcmRlci1yYWRpdXM6MCAwLjE4NzVyZW0gMC4xODc1cmVtIDA7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWluZm8geyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuODc1cmVtOyBtaW4td2lkdGg6MDsgZmxleDoxOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1jb3B5IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjE4NzVyZW07IG1pbi13aWR0aDowOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIHsgd2lkdGg6M3JlbTsgaGVpZ2h0OjNyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmbGV4LXNocmluazowOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZykgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjVyZW0gMS4yNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpLCBpbnNldCAwIDAgMCAwLjA2MjVyZW0gdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIG1hdC1pY29uIHsgZm9udC1zaXplOjEuMzc1cmVtOyB3aWR0aDoxLjM3NXJlbTsgaGVpZ2h0OjEuMzc1cmVtOyB9XHJcbi5wYW5lbC1oZWFkZXIgaDQgeyBtYXJnaW46MDsgZm9udC1zaXplOjEuMDYyNXJlbTsgZm9udC13ZWlnaHQ6ODAwOyBsZXR0ZXItc3BhY2luZzotMC4wMmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLnBhbmVsLWhlYWRlciAucGFuZWwtc3ViIHsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBtYXJnaW4tdG9wOjA7IGxpbmUtaGVpZ2h0OjEuNDsgfVxyXG4ucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dIHsgd2lkdGg6Mi41cmVtOyBoZWlnaHQ6Mi41cmVtOyBib3JkZXItcmFkaXVzOjAuNzVyZW07IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgZmxleC1zaHJpbms6MDsgfVxyXG4ucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpOyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IHRyYW5zZm9ybTpyb3RhdGUoOTBkZWcpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFuZWwgYm9keSDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHkgeyBwYWRkaW5nOjEuMTI1cmVtIDEuMzc1cmVtOyBvdmVyZmxvdzphdXRvOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucXVlc3Rpb24tdGl0bGUgeyBmb250LXdlaWdodDo3MDA7IG1hcmdpbi1ib3R0b206MC44NzVyZW07IGZvbnQtc2l6ZTowLjkzNzVyZW07IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc21hbGwtbXV0ZWQgeyBmb250LXNpemU6MC42ODc1cmVtOyBwYWRkaW5nLWxlZnQ6MDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3VtbWFyeSB0YWJsZSDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgeyB3aWR0aDoxMDAlOyBib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7IGJvcmRlci1zcGFjaW5nOjAgMC41cmVtOyBtYXJnaW46MCBhdXRvOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHRoIHsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MC43NXJlbSAxcmVtOyBmb250LXdlaWdodDo3MDA7IGZvbnQtc2l6ZTowLjc1cmVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOjAuMDZlbTsgY29sb3I6dmFyKC0tdGhlbWUtMS10ZXh0LTEpOyBiYWNrZ3JvdW5kOnZhcigtLXRhYmxlLWhlYWRlci1iZyk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAuNjI1cmVtIDAgMCAwLjYyNXJlbTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB0aDpsYXN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowIDAuNjI1cmVtIDAuNjI1cmVtIDA7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdHIgeyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjE1cyAkZWFzZTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0cjpob3ZlciB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQgeyBwYWRkaW5nOjAuODc1cmVtIDFyZW07IHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgdGV4dC1hbGlnbjpjZW50ZXI7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAwLjE1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjE1cyAkZWFzZSwgYmFja2dyb3VuZCAwLjE1cyAkZWFzZTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpmaXJzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6MC42MjVyZW0gMCAwIDAuNjI1cmVtOyB0ZXh0LWFsaWduOmxlZnQ7IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOmxhc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAgMC42MjVyZW0gMC42MjVyZW0gMDsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0cjpob3ZlciB0ZCB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJhY2tncm91bmQ6dmFyKC0tYmctMik7IGJveC1zaGFkb3c6MCAwLjVyZW0gMS4yNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbi53YS1hbnN3ZXItbGluaywgLndhLWNvdW50LWxpbmsgeyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGZvbnQtd2VpZ2h0OjYwMDsgdHJhbnNpdGlvbjpvcGFjaXR5IDAuMTVzICRlYXNlOyB9XHJcbi53YS1hbnN3ZXItbGluazpob3ZlciwgLndhLWNvdW50LWxpbms6aG92ZXIgeyBvcGFjaXR5OjAuNzU7IHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDowLjEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFN1bW1hcnkgYWN0aW9ucyDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktYWN0aW9ucyxcclxuLnN1bW1hcnktYWN0aW9ucyB7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyBnYXA6MC41cmVtOyBwYWRkaW5nOjAuODc1cmVtIDEuMzc1cmVtOyBib3JkZXItdG9wOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyB9XHJcbi5zdW1tYXJ5LWFjdGlvbnMgYnV0dG9uIHsgYm9yZGVyLXJhZGl1czowLjYyNXJlbSAhaW1wb3J0YW50OyBmb250LXdlaWdodDo3MDAgIWltcG9ydGFudDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMTVzICRlYXNlLCBib3gtc2hhZG93IDAuMTVzICRlYXNlLCB0cmFuc2Zvcm0gMC4xNXMgJGVhc2UgIWltcG9ydGFudDsgfVxyXG4uc3VtbWFyeS1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjA2MjVyZW0pOyBib3gtc2hhZG93OjAgMC43NXJlbSAxLjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKSAhaW1wb3J0YW50OyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmVzb3VyY2UgcGFuZWwgw6LClMKAw6LClMKAXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keSwgLndyb25nLXN1bW1hcnktcGFuZWwgLnJlc291cmNlLWxpc3QgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuNzVyZW07IH1cclxuLnJlc291cmNlLWxpc3QgeyBsaXN0LXN0eWxlOm5vbmU7IHBhZGRpbmc6MDsgbWFyZ2luOjA7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC43NXJlbTsgfVxyXG4ucmVzb3VyY2UtbGlzdCBsaSB7IHBhZGRpbmc6MC44NzVyZW0gMXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNzVyZW07IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB0cmFuc2l0aW9uOmJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2UsIGJvcmRlci1jb2xvciAwLjI1cyAkZWFzZTsgfVxyXG4ucmVzb3VyY2UtbGlzdCBsaTpob3ZlciB7IGJveC1zaGFkb3c6MCAxcmVtIDJyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuMTI1cmVtKTsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucmVzLXRpdGxlIHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IH1cclxuLnJlcy1kZXNjIHsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi5yZXMtYWN0aW9ucyBhIHsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpOyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBmb250LXdlaWdodDogNjAwOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzICRlYXNlLCBib3gtc2hhZG93IDAuMTVzICRlYXNlOyB9XHJcbi5yZXMtYWN0aW9ucyBhOmhvdmVyIHsgb3BhY2l0eTogMC45OyBib3gtc2hhZG93OiAkc2hhZG93LXNtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU2Nyb2xsYmFyIMOiwpTCgMOiwpTCgFxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keSxcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5LFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHkgeyBvdmVyZmxvdzogYXV0bzsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIgeyBoZWlnaHQ6IDAuMzc1cmVtOyB3aWR0aDogMC4zNzVyZW07IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAwLjE4NzVyZW07IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgVXNlciBSZXZpZXcgUGFuZWwgw6LClMKAw6LClMKAXHJcbi51c2VyLXJldmlldy1wYW5lbCB7IHdpZHRoOiBtaW4oNzJyZW0sIDk0dncpOyBtYXgtaGVpZ2h0OiA5MHZoOyBtYXJnaW46IGF1dG87IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5jYXJkIHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IG1heC1oZWlnaHQ6OTB2aDsgYm9yZGVyLXJhZGl1czoxLjI1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm94LXNoYWRvdzowIDJyZW0gNC41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4yOCksIDAgMC43NXJlbSAxLjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IG92ZXJmbG93OmhpZGRlbjsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciB7IHBvc2l0aW9uOnJlbGF0aXZlOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGdhcDoxcmVtOyBwYWRkaW5nOjEuMjVyZW0gMS41cmVtOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBmbGV4LXNocmluazowOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyOjpiZWZvcmUgeyBjb250ZW50OicnOyBwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgYm90dG9tOjA7IHdpZHRoOjAuMTg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1idXR0b24tMSksIHRyYW5zcGFyZW50KTsgYm9yZGVyLXJhZGl1czowIDAuMTg3NXJlbSAwLjE4NzVyZW0gMDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuaGVhZGVyLWluZm8geyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuNXJlbTsgZmxleDoxOyBtaW4td2lkdGg6MDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuaGVhZGVyLWljb24geyB3aWR0aDozcmVtOyBoZWlnaHQ6M3JlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzowIDAuNXJlbSAxLjI1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyksIGluc2V0IDAgMCAwIDAuMDYyNXJlbSB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGZsZXgtc2hyaW5rOjA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIG1hdC1pY29uIHsgZm9udC1zaXplOjEuMzc1cmVtOyB3aWR0aDoxLjM3NXJlbTsgaGVpZ2h0OjEuMzc1cmVtOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIGg0IHsgbWFyZ2luOjA7IGZvbnQtc2l6ZToxLjEyNXJlbTsgZm9udC13ZWlnaHQ6ODAwOyBsZXR0ZXItc3BhY2luZzotMC4wMmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIGgzIHsgbWFyZ2luOjA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjUwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjVyZW07IGZsZXgtd3JhcDp3cmFwOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5zY29yZSB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0yKTsgZm9udC13ZWlnaHQ6NjAwOyBwYWRkaW5nOjAuMjVyZW0gMC42MjVyZW07IGJvcmRlci1yYWRpdXM6MC41cmVtOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgZm9udC1zaXplOjAuODEyNXJlbTsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXN1bHQgeyBmb250LXdlaWdodDo3MDA7IHBhZGRpbmc6MC4yNXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOjYyLjVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBsZXR0ZXItc3BhY2luZzowLjA0ZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgYm94LXNoYWRvdzowIDAuMTI1cmVtIDAuNXJlbSByZ2JhKDE1LDIzLDQyLDAuMDgpOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXN1bHQucGFzcyB7IGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKTsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXN1bHQuZmFpbCB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG4ge1xyXG4gIHdpZHRoOiAyLjc1cmVtO1xyXG4gIGhlaWdodDogMi43NXJlbTtcclxuICBtaW4td2lkdGg6IDIuNzVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSk7XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMik7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlO1xyXG4gIGZsZXg6IDAgMCAyLjc1cmVtO1xyXG59XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXZpZXctY2xvc2UtYnRuIG1hdC1pY29uIHtcclxuICB3aWR0aDogMS4yNXJlbTtcclxuICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4zNzVyZW0gMC44NzVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0bjpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiAwLjEyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDAuMTI1cmVtO1xyXG59XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtc3ViIHsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHkgeyBmbGV4OjE7IG92ZXJmbG93OmF1dG87IG1heC1oZWlnaHQ6IGNhbGMoOTB2aCAtIDEwcmVtKTsgcGFkZGluZzogMS41cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgQXR0ZW1wdCBoZWFkZXIgw6LClMKAw6LClMKAXHJcbi5hdHRlbXB0LWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMC4zNzVyZW07IHBhZGRpbmc6IDAuNzVyZW0gMDsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7IG1hcmdpbi1ib3R0b206IDAuODc1cmVtOyB9XHJcbi5hdHRlbXB0LWhlYWRlciBoNSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxcmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNzVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAtMC4wMWVtOyB9XHJcbi5hdHRlbXB0LWhlYWRlciAuc2NvcmUtYmFkZ2UgeyBiYWNrZ3JvdW5kOiAjZTlmN2VmOyBjb2xvcjogIzBhODA0MzsgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czogJHJhZGl1czsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAwLjg3NXJlbTsgbWFyZ2luLWxlZnQ6IGF1dG87IGxldHRlci1zcGFjaW5nOiAwLjAxZW07IH1cclxuLmF0dGVtcHQtbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC43NXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUXVlc3Rpb24gcmV2aWV3IGNhcmRzIMOiwpTCgMOiwpTCgFxyXG4ucXVlc3Rpb25zLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDFyZW07IG1hcmdpbi10b3A6IDAuNXJlbTsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAwLjg3NXJlbTsgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07IGJhY2tncm91bmQ6IHZhcigtLWJnLTEpOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2U7IGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgxNSwyMyw0MiwwLjAzKTsgb3ZlcmZsb3c6aGlkZGVuOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZDo6YmVmb3JlIHsgY29udGVudDonJzsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDowLjE4NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCByZ2JhKDk5LDEwMiwyNDEsMC40KSAxMDAlKTsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQ6aG92ZXIgeyBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS43NXJlbSByZ2JhKDE1LDIzLDQyLDAuMDgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIC5xLXRleHQgeyBmb250LXdlaWdodDogNTAwOyBsaW5lLWhlaWdodDogMS41NTsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQgLm1hcmstYmFkZ2UgeyBmbG9hdDogcmlnaHQ7IGJhY2tncm91bmQ6ICNmZmYzZjM7IGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuNzVyZW07IH1cclxuXHJcbi5xLWhlYWQtcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxcmVtOyBtYXJnaW4tYm90dG9tOiAxcmVtOyBwYWRkaW5nLWJvdHRvbTogMXJlbTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIGRhc2hlZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLnEtbGVmdCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC44NzVyZW07IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cclxuLnEtYm9keSB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMC41cmVtOyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cclxuLnEtbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC41cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuLnEtaW5kZXggeyB3aWR0aDogMi4yNXJlbTsgaGVpZ2h0OiAyLjI1cmVtOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsMC4xOCkgMCUsIHJnYmEoOTksMTAyLDI0MSwwLjA2KSAxMDAlKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMTgpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiA4MDA7IGZvbnQtc2l6ZTogMC44NzVyZW07IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5xLXJpZ2h0IHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjYyNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgZmxleC1zaHJpbms6IDA7IH1cbi5xLWJhZGdlIHsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IHBhZGRpbmc6IDAuMjVyZW0gMC42MjVyZW07IGZvbnQtc2l6ZTogMC42ODc1cmVtOyBsaW5lLWhlaWdodDogMXJlbTsgd2lkdGg6IGZpdC1jb250ZW50OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMC4wNmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XHJcbi5xLWluZm8geyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXNpemU6IDAuODEyNXJlbTsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4zNzVyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuLnEtaW5mbyBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMC45Mzc1cmVtOyB3aWR0aDogMC45Mzc1cmVtOyBoZWlnaHQ6IDAuOTM3NXJlbTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucS1tYXJrcy5zbWFsbC1tdXRlZCB7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBRdWVzdGlvbiBvcHRpb25zIChjaG9vc2UgLyBtdWx0aSkgw6LClMKAw6LClMKAXHJcbi5xLW9wdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMC42MjVyZW07IH1cclxuLnEtb3B0aW9ucy50d28tY29sIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDAuNzVyZW07IH1cclxuLnEtb3B0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjc1cmVtOyBwYWRkaW5nOiAwLjc1cmVtIDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4xKTsgYmFja2dyb3VuZDogI2Y4ZmJmZjsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgYmFja2dyb3VuZCAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlOyB9XHJcbi5xLW9wdGlvbjpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xMjVyZW0pOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgfVxyXG4ub3B0LWxlZnQgeyB3aWR0aDogMi41cmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC1zaHJpbms6IDA7IH1cclxuLm9wdC1sZWZ0IC5vcHQtbWFyayB7IHdpZHRoOiAycmVtOyBoZWlnaHQ6IDJyZW07IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODEyNXJlbTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyAkZWFzZTsgfVxyXG4ub3B0LWJvZHkgeyBmbGV4OiAxOyBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtOyBhbGlnbi1zZWxmOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiAxLjQ1OyB9XHJcbi5vcHQtYmFkZ2UgeyBtYXJnaW4tbGVmdDogYXV0bzsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjM3NXJlbTsgZmxleC1zaHJpbms6IDA7IH1cclxuLmJhZGdlIHsgcGFkZGluZzogMC4yNXJlbSAwLjYyNXJlbTsgYm9yZGVyLXJhZGl1czogMXJlbTsgZm9udC1zaXplOiAwLjY4NzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGxldHRlci1zcGFjaW5nOiAwLjAyZW07IH1cclxuLmJhZGdlLnlvdXItYW5zd2VyIHsgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJnKTsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnJlZC1ib3JkZXIpOyB9XHJcbi5iYWRnZS5jb3JyZWN0IHsgYmFja2dyb3VuZDogI2U4ZjllZjsgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4uYmFkZ2UubWlzc2VkIHsgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1iZyk7IGNvbG9yOiB2YXIoLS1iYmx1ZS10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtYmcpOyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uc2VsZWN0ZWQgLm9wdC1tYXJrIHsgYmFja2dyb3VuZDogcmdiYSgxODUsMjgsMjgsMC4xKTsgfVxyXG4ucS1vcHRpb24uY29ycmVjdCB7IGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLWJnKTsgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLW9wdGlvbi5jb3JyZWN0IC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMjIsMTAxLDUyLDAuMSk7IH1cclxuLnEtb3B0aW9uLm1pc3NlZCB7IGJhY2tncm91bmQ6IHZhcigtLWJsdWUtYmcpOyBjb2xvcjogdmFyKC0tYmJsdWUtdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24ubWlzc2VkIC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMTEsMTAyLDIwOCwwLjEpOyB9XHJcblxyXG4ucS1zZWxlY3RlZCwgLnEtbWFya3MgeyBtYXJnaW4tdG9wOiAwLjVyZW07IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuLnEtZmVlZGJhY2sgeyBtYXJnaW4tdG9wOiAwLjYyNXJlbTsgYmFja2dyb3VuZDogcmdiYSgyNDAsMjQ4LDI1NSwwLjYpOyBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNzUpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBiYWRnZSBzdGF0ZXMgw6LClMKAw6LClMKAXHJcbi5xLW1hcmtzLm1hcmstcG9zaXRpdmUsXHJcbi5xLW1hcmtzLm1hcmstbmVnYXRpdmUsXHJcbi5xLW1hcmtzLm1hcmstbWlkIHtcclxuICBtaW4td2lkdGg6IDMuMjVyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucS1tYXJrcy5tYXJrLXBvc2l0aXZlIHsgYmFja2dyb3VuZDogI2U4ZjllZjsgY29sb3I6ICMwYjhhNDU7IH1cclxuLnEtbWFya3MubWFyay1uZWdhdGl2ZSB7IGJhY2tncm91bmQ6ICNmZmYyZjQ7IGNvbG9yOiAjYjAyYTM3OyB9XHJcbi5xLW1hcmtzLm1hcmstbWlkIHsgYmFja2dyb3VuZDogI2ZmZjhlNjsgY29sb3I6ICNiMzZhMDA7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBGaWxsIHF1ZXN0aW9uIMOiwpTCgMOiwpTCgFxyXG4ucS1maWxsIC5maWxsLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC43NXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uIHsgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgYmFja2dyb3VuZDogI2ZmZjdlZDsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgyNDUsMTY2LDM1LDAuMSk7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgJGVhc2U7IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb246aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LXNtOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uLnNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2U4ZjZmZjsgYm9yZGVyLWNvbG9yOiByZ2JhKDIsMTEyLDI1NSwwLjE1KTsgfVxyXG4ucS1maWxsIC5maWxsLW9wdGlvbi5jb3JyZWN0IHsgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tYmcpOyBib3JkZXItY29sb3I6IHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLWZpbGwgLmZpbGwtY29ycmVjdCB7IHBhZGRpbmc6IDAuNjI1cmVtIDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1iZyk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgRGVzY3JpcHRpdmUgcmV2aWV3IMOiwpTCgMOiwpTCgFxyXG4ucS1kZXNjcmlwdGl2ZSB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMC44NzVyZW07IH1cbi5kZXNjcmlwdGl2ZS1hbnN3ZXJzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTsgZ2FwOiAwLjg3NXJlbTsgfVxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDAuNzVyZW07IG1hcmdpbi1ib3R0b206IDAuNjI1cmVtOyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWJnKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5kZXNjLXF1ZXN0aW9uIHsgZmxleDogMSAxIGF1dG87IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5xdWVzdGlvbi1sYWJlbCB7IGZvbnQtc2l6ZTogMC42ODc1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNmVtOyBjb2xvcjogIzhjNmFkNjsgYmFja2dyb3VuZDogcmdiYSgxNDAsMTA2LDIxNCwwLjA4KTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5xdWVzdGlvbi12YWx1ZSB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiByZ2JhKDAsMCwwLDAuODUpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuZGVzYy1zY29yZSB7IHdpZHRoOiA4Ljc1cmVtOyBmbGV4OiAwIDAgOC43NXJlbTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnNjb3JlLWxhYmVsIHsgZm9udC1zaXplOiAwLjgxMjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuc2NvcmUtdmFsdWUgeyBmb250LXNpemU6IDEuMTI1cmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogI2YzOWMxMjsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzogMC43NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDQpOyBtYXJnaW4tdG9wOiAwLjM3NXJlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1tb2RlbCB7IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLTIpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXN0dWRlbnQgeyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1iZyk7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1tb2RlbCAubW9kZWwtbGFiZWwsXHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXN0dWRlbnQgLnN0dWRlbnQtbGFiZWwgeyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogcmdiYSgwLDAsMCwwLjcpOyBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTsgZm9udC1zaXplOiAwLjc1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLW1vZGVsIC5tb2RlbC10ZXh0LFxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zdHVkZW50IC5hbnN3ZXItdGV4dCB7IGNvbG9yOiByZ2JhKDAsMCwwLDAuODUpOyBsaW5lLWhlaWdodDogMS41NTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zY29yZSB7IHdpZHRoOiA4Ljc1cmVtOyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDQpOyBwYWRkaW5nOiAwLjYyNXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuc2NvcmUtbGFiZWwgeyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogcmdiYSgwLDAsMCwwLjYpOyBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuc2NvcmUtdmFsdWUgeyBmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjMGI2NmQwOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5xLWZlZWRiYWNrIHsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1iZyk7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXZpZXcgY29tbWVudCBjb2x1bW5zIMOiwpTCgMOiwpTCgFxyXG4ucS1yZXZpZXctY29tbWVudHMgeyBtYXJnaW4tdG9wOiAxcmVtOyBwYWRkaW5nLXRvcDogMXJlbTsgYm9yZGVyLXRvcDogMC4wNjI1cmVtIGRhc2hlZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLnJldmlldy1jb2x1bW5zIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgZ2FwOiAwLjg3NXJlbTsgfVxyXG4ucmV2aWV3LWNvbHVtbnMgLmNvbCB7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7IHBhZGRpbmc6IDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjc1cmVtOyBtaW4taGVpZ2h0OiA0cmVtOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlOyB9XHJcbi5yZXZpZXctY29sdW1ucyAuY29sOmhvdmVyIHsgYm94LXNoYWRvdzogMCAwLjVyZW0gMS4yNXJlbSByZ2JhKDE1LDIzLDQyLDAuMDYpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTsgfVxyXG4ucmV2aWV3LWNvbHVtbnMgLmNvbCBoNCB7IG1hcmdpbjogMCAwIDAuNXJlbTsgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxyXG4ucmV2aWV3LWNvbHVtbnMgLmNvbC5taXNzZWQgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1yZWQtYmcpIDAlLCAjZmZmIDkwJSk7IGJvcmRlci1jb2xvcjogdmFyKC0tYnJlZC1ib3JkZXIpOyBib3JkZXItdG9wOiAwLjE4NzVyZW0gc29saWQgdmFyKC0tcmVkLXRleHQpOyB9XHJcbi5yZXZpZXctY29sdW1ucyAuY29sLmluY29ycmVjdCB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLW9yYW5nZS1iZykgMCUsICNmZmYgOTAlKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JhbmdlLWJvcmRlcik7IGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1vcmFuZ2UtdGV4dCk7IH1cclxuLnJldmlldy1jb2x1bW5zIC5jb2wuaW5jb21wbGV0ZSB7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXllbGxvdy1iZykgMCUsICNmZmYgOTAlKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1ieWVsbG93LWJvcmRlcik7IGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS15ZWxsb3ctdGV4dCk7IH1cclxuXHJcbi5jb2wtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjVyZW07IG1hcmdpbi1ib3R0b206IDAuNzVyZW07IHBhZGRpbmctYm90dG9tOiAwLjVyZW07IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpOyB9XHJcbi5jb2wtaGVhZGVyIGg0IHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDAuODEyNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTsgfVxyXG4uZG90IHsgd2lkdGg6IDAuNXJlbTsgaGVpZ2h0OiAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDUwJTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBmbGV4LXNocmluazogMDsgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMCwwLDAsMC4wNCk7IH1cclxuLmRvdC5yZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtdGV4dCk7IH1cclxuLmRvdC5vcmFuZ2UgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtdGV4dCk7IH1cclxuLmRvdC55ZWxsb3cgeyBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctdGV4dCk7IH1cclxuXHJcbi5yZXZpZXctaXRlbSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC42MjVyZW07IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XHJcbi5yaS1sZWZ0IHsgd2lkdGg6IDJyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5yaS1pY29uIHsgd2lkdGg6IDEuNjI1cmVtOyBoZWlnaHQ6IDEuNjI1cmVtOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyBmb250LXNpemU6IDAuNzVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IH1cclxuLnJpLWljb24ubWlzc2VkIHsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgYmFja2dyb3VuZDogcmdiYSgxODUsMjgsMjgsMC4wOCk7IH1cclxuLnJpLWljb24uaW5jb3JyZWN0IHsgY29sb3I6IHZhcigtLW9yYW5nZS10ZXh0KTsgYmFja2dyb3VuZDogcmdiYSgxOTQsNjUsMTIsMC4wOCk7IH1cclxuLnJpLWljb24uaW5jb21wbGV0ZSB7IGNvbG9yOiB2YXIoLS15ZWxsb3ctdGV4dCk7IGJhY2tncm91bmQ6IHJnYmEoMTgwLDgzLDksMC4wOCk7IH1cclxuLnJpLWJvZHkgeyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cclxuXHJcbi5yZXZpZXctdGV4dC5kZWxldGVkIHsgY29sb3I6IGdyYXk7IHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoOyB9XHJcbi5kZWxldGVkLWJ5IHsgY29sb3I6ICNjMDM5MmI7IGZvbnQtc3R5bGU6IGl0YWxpYzsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDAuMzc1cmVtOyBmb250LXNpemU6IDAuNzVyZW07IH1cclxuLnJldmlldy10ZXh0LW1pc3NlZCB7IGRpc3BsYXk6IGZsZXg7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMpOyBmb250LXdlaWdodDogNDAwOyBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1icmVkLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNDU7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgJGVhc2U7IH1cclxuLnJldmlldy10ZXh0LW1pc3NlZDpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctc207IH1cclxuLnJldmlldy10ZXh0LWluY29ycmVjdCB7IGRpc3BsYXk6IGZsZXg7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMpOyBmb250LXdlaWdodDogNDAwOyBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JhbmdlLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgbGluZS1oZWlnaHQ6IDEuNDU7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgJGVhc2U7IH1cclxuLnJldmlldy10ZXh0LWluY29ycmVjdDpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctc207IH1cclxuLnJldmlldy10ZXh0LWluY29tcGxldGUgeyBkaXNwbGF5OiBmbGV4OyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zKTsgZm9udC13ZWlnaHQ6IDQwMDsgcGFkZGluZzogMC42MjVyZW0gMC43NXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnllbGxvdy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGxpbmUtaGVpZ2h0OiAxLjQ1OyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzICRlYXNlOyB9XHJcbi5yZXZpZXctdGV4dC1pbmNvbXBsZXRlOmhvdmVyIHsgYm94LXNoYWRvdzogJHNoYWRvdy1zbTsgfVxyXG4ucmV2aWV3LW1ldGEgeyBmb250LXNpemU6IDAuNjg3NXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgbWFyZ2luLXRvcDogMC4zNzVyZW07IGxldHRlci1zcGFjaW5nOiAwLjAxZW07IH1cclxuXHJcbi5yZXZpZXctYWN0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC4xMjVyZW07IH1cclxuLnJldmlldy1hY3Rpb25zIG1hdC1pY29uIHsgZm9udC1zaXplOiBpbml0aWFsICFpbXBvcnRhbnQ7IH1cclxuLnJldmlldy1hY3Rpb25zIC5lZGl0LWxpbmssXHJcbi5yZXZpZXctYWN0aW9ucyAuZGVsZXRlLWxpbmssXHJcbi5zYXZlLWxpbmssXHJcbi5jYW5jZWwtbGluayB7IHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBtYXJnaW4tcmlnaHQ6IDAuMzc1cmVtOyBjdXJzb3I6IHBvaW50ZXI7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4xODc1cmVtOyBmb250LXNpemU6IDAuODEyNXJlbTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyAkZWFzZSwgb3BhY2l0eSAwLjE1cyAkZWFzZTsgfVxyXG4ucmV2aWV3LWFjdGlvbnMgLmVkaXQtbGluazpob3ZlcixcclxuLnNhdmUtbGluazpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA2KTsgfVxyXG4ucmV2aWV3LWFjdGlvbnMgLmRlbGV0ZS1saW5rIHsgY29sb3I6ICNkMzM7IH1cclxuLnJldmlldy1hY3Rpb25zIC5kZWxldGUtbGluazpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMjIxLDUxLDUxLDAuMDYpOyB9XHJcbi5jYW5jZWwtbGluazpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7IH1cclxuLmVkaXQtY29tbWVudC10ZXh0IHsgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJvcmRlci0xKTsgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IHBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbTsgZm9udC1zaXplOiAwLjgxMjVyZW07IGxpbmUtaGVpZ2h0OiAxLjQ1OyB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZTsgcmVzaXplOiB2ZXJ0aWNhbDsgfVxyXG4uZWRpdC1jb21tZW50LXRleHQ6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMSk7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBlZGl0aW5nIGZvciBkZXNjcmlwdGl2ZSBxdWVzdGlvbnMgw6LClMKAw6LClMKAXHJcbi5tYXJrcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMzc1cmVtO1xuICBtaW4taGVpZ2h0OiAyLjI1cmVtO1xufVxuXHJcbi5tYXJrcy1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjM3NXJlbTtcclxufVxyXG5cclxuLmVkaXQtbWFya3MtYnRuIHtcclxuICB3aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC42O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgYmFja2dyb3VuZCAwLjJzICRlYXNlO1xyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wOCk7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtZWRpdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4zNzVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAwLjE4NzVyZW0gMC4zNzVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xyXG59XHJcblxyXG4ubWFya3MtaW5wdXQge1xyXG4gIHdpZHRoOiAzLjVyZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjM3NXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtbWF4IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2F2ZS1tYXJrcy1idG4ge1xyXG4gIHdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICB9XHJcbn1cclxuXHJcbi5jYW5jZWwtbWFya3MtYnRuIHtcclxuICB3aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXJlZC10ZXh0KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBIaXN0b3J5IFNlY3Rpb24gw6LClMKAw6LClMKAXHJcbi5tYXJrcy1oaXN0b3J5LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsMC4wMykgMCUsIHJnYmEoNTksMTMwLDI0NiwwLjAyKSAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjEpO1xyXG59XHJcblxyXG4ubWFya3MtaGlzdG9yeS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJrcy1oaXN0b3J5LXRpbWVsaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwO1xyXG59XHJcblxyXG4uaGlzdG9yeS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC44NzVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGlzdG9yeS1pbmRpY2F0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgXHJcbiAgLmRvdCB7XHJcbiAgICB3aWR0aDogMC43NXJlbTtcclxuICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIFxyXG4gICAgJi5jdXJyZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xNSksIDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnBhc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTRhM2I4LCAjNjQ3NDhiKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMTQ4LDE2MywxODQsMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiAwLjEyNXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE0OCwxNjMsMTg0LDAuNCkgMCUsIHJnYmEoMTQ4LDE2MywxODQsMC4xKSAxMDAlKTtcclxuICAgIG1hcmdpbjogMC4yNXJlbSAwO1xyXG4gICAgbWluLWhlaWdodDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuODc1cmVtO1xyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlO1xyXG4gIFxyXG4gICYuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LDE4NSwxMjksMC4wOCkgMCUsIHJnYmEoNSwxNTAsMTA1LDAuMDQpIDEwMCUpO1xyXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xKTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4zNzVyZW0gMXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xOCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xODc1cmVtKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LDE4NSwxMjksMC4zKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5wYXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LDI1MCwyNTIsMC44KTtcclxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAkc2hhZG93LW1kO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMzc1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1cmVtIDAuMjVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMyk7XHJcbn1cclxuXHJcbi5oaXN0b3J5LW1hcmtzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIFxyXG4gIC5tYXJrcy10b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC40NSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkLnBhc3QgLmhpc3RvcnktbWFya3Mge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICBcclxuICAubWFya3MtdG90YWwge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuICBcclxuICAudXBkYXRlZC1ieSxcclxuICAudXBkYXRlZC1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAwLjg3NXJlbTtcclxuICAgICAgaGVpZ2h0OiAwLjg3NXJlbTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudXBkYXRlZC1ieSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNhcmQuY3VycmVudCAuaGlzdG9yeS1tZXRhIHtcclxuICAudXBkYXRlZC1ieSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCk7XHJcbiAgfVxyXG59XHJcbi8vIMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgFxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVyZW0pIHtcclxuICAucGFnZSB7IHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbSAycmVtOyB9XHJcbiAgLnRvb2xiYXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtOyB9XHJcbiAgLnNlbGVjdGlvbnMgeyBtYXgtd2lkdGg6IDEwMCU7IGZsZXg6IDEgMSAxMDAlOyB9XHJcbiAgLnJlcG9ydC1zdW1tYXJ5LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7IH1cclxuICAudGFiLWFjdGlvbnMgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxyXG4gIC50YWItYWN0aW9ucyAuc2VhcmNoIHsgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbiAgLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IHsgZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgLnJldmlldy1jb2x1bW5zIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAucS1vcHRpb25zLnR3by1jb2wgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC51c2VyLXJldmlldy1wYW5lbCB7IHdpZHRoOiA5NiU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCwgLnJlc291cmNlLXBhbmVsIHsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogMTAwJTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5jYXJkLCAucmVzb3VyY2UtcGFuZWwgLmNhcmQgeyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5IHsgcGFkZGluZzogMC43NXJlbTsgfVxyXG4gIC5xLWRlc2NyaXB0aXZlIC5kZXNjLXJvdyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1zY29yZSB7IHdpZHRoOiAxMDAlOyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLmRlc2Mtc2NvcmUgeyB3aWR0aDogMTAwJTsgZmxleDogbm9uZTsgbWFyZ2luLXRvcDogMC41cmVtOyB9XG4gIC5kZXNjcmlwdGl2ZS1hbnN3ZXJzIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cbiAgLnEtaGVhZC1yb3cgeyBmbGV4LXdyYXA6IHdyYXA7IH1cbiAgLnEtcmlnaHQgeyBtYXJnaW4tbGVmdDogMy4xMjVyZW07IH1cbn1cblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDVyZW0pIHtcclxuICAucmVwb3J0LXN1bW1hcnktZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBwYWRkaW5nOiAwLjg3NXJlbTsgfVxyXG4gIC5zdW1tYXJ5LWNhcmQgeyBwYWRkaW5nOiAwLjg3NXJlbTsgfVxyXG4gIC5zdW1tYXJ5LW1ldGEgeyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHksXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdHIsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGgsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGQgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ciB7IG1hcmdpbi1ib3R0b206IDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZCB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgdGV4dC1hbGlnbjogbGVmdDsgYm9yZGVyLXJhZGl1czogMDsgYm9yZGVyOiBub25lOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQ6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDo6YmVmb3JlIHsgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTsgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cclxuICAuc2VsZWN0aW9ucyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxufVxyXG4ubWFudWFsLWNoZWNrLWNoaXAge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIHBhZGRpbmc6IDNweCA5cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOTc3MDY7XG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gIGJhY2tncm91bmQ6ICNmZmY3ZWQ7XG4gIGNvbG9yOiAjOWEzNDEyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQ6IGluaGVyaXQ7XG59XG5cbi5tYW51YWwtY2hlY2stY2hpcC5zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICNmZmVkZDU7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cbi5tYW51YWwtY2hlY2stY2hpcCBtYXQtaWNvbiB7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGZvbnQtc2l6ZTogMTZweDsgfVxuLmVkaXQtY29tbWVudC1yZWFzb24geyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDhweDsgfVxuLnJldmlldy1tZXRhIC5lZGl0LXJlYXNvbiB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiAycHg7IH1cbi5zYXZlLWxpbmsuZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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