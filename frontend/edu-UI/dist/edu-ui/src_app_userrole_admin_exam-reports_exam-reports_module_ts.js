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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 1873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/api.config */ 1892);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var src_app_shared_components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component */ 7235);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/loader.service */ 3657);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var src_app_shared_services_page_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/page-meta.service */ 3413);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_shared_services_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/confirm.service */ 5302);
/* harmony import */ var src_app_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global-institute-context.service */ 4769);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var src_app_home_service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/home/service/auth.service */ 2241);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/datepicker */ 1977);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);






























const _c0 = ["filtersBtn"];
const _c1 = ["filtersPanel"];
function ExamReportsComponent_ng_template_27_div_7_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inst_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", inst_r29.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", inst_r29.name, " ");
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
function ExamReportsComponent_ng_template_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 50)(1, "mat-form-field", 55)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Institute ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "mat-select", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_7_Template_mat_select_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r30.userFilters.institute_id = $event);
    })("selectionChange", function ExamReportsComponent_ng_template_27_div_7_Template_mat_select_selectionChange_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r32.onInstituteSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_div_7_Template_div_click_7_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_7_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r34.instituteFilterSearch = $event);
    })("click", function ExamReportsComponent_ng_template_27_div_7_Template_input_click_8_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_div_7_Template_input_keydown_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r36.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_div_7_Template_input_keyup_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r37.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_div_7_Template_input_input_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r31);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r38.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ExamReportsComponent_ng_template_27_div_7_mat_option_11_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r16.userFilters.institute_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r16.instituteFilterSearch)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r16.filteredInstitutesForFilter);
  }
}
function ExamReportsComponent_ng_template_27_div_8_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_div_8_mat_option_7_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r44.toggleSelectAllCountries());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r39.isAllCountriesSelected() ? "#2563eb" : "#64748b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r39.isAllCountriesSelected() ? "check_box" : "check_box_outline_blank", " ");
  }
}
function ExamReportsComponent_ng_template_27_div_8_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", c_r46.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r46.name, " ");
  }
}
function ExamReportsComponent_ng_template_27_div_8_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_div_8_mat_option_15_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r48);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r47.toggleSelectAllCities());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r41.isAllCitiesSelected() ? "#2563eb" : "#64748b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r41.isAllCitiesSelected() ? "check_box" : "check_box_outline_blank", " ");
  }
}
function ExamReportsComponent_ng_template_27_div_8_mat_option_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No cities available ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_ng_template_27_div_8_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r49 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", city_r49.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", city_r49.name, " ");
  }
}
function ExamReportsComponent_ng_template_27_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "mat-form-field", 43)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-select", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_8_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r50.selectedCountries = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_div_8_Template_mat_select_openedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r52.onSelectOpened($event, "country"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_div_8_Template_mat_select_selectionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r53.onCountryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_div_8_Template_mat_option_click_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_8_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r55.searchQueries.country = $event);
    })("click", function ExamReportsComponent_ng_template_27_div_8_Template_input_click_6_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_div_8_Template_input_keydown_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r57.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_div_8_Template_input_keyup_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r58.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_div_8_Template_input_input_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r59.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_ng_template_27_div_8_mat_option_7_Template, 5, 3, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_27_div_8_mat_option_8_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-form-field", 43)(10, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "mat-select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_8_Template_mat_select_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r60.selectedCities = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_div_8_Template_mat_select_openedChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r61.onSelectOpened($event, "city"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_div_8_Template_mat_select_selectionChange_12_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r62.onCityFilterChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_div_8_Template_mat_option_click_13_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_8_Template_input_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r64.citySearch = $event);
    })("click", function ExamReportsComponent_ng_template_27_div_8_Template_input_click_14_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_div_8_Template_input_keydown_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r66.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_div_8_Template_input_keyup_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r67.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_div_8_Template_input_input_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r51);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r68.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ExamReportsComponent_ng_template_27_div_8_mat_option_15_Template, 5, 3, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ExamReportsComponent_ng_template_27_div_8_mat_option_16_Template, 2, 0, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ExamReportsComponent_ng_template_27_div_8_mat_option_17_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r17.selectedCountries);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r17.searchQueries.country)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.filteredCountriesList.length && !(ctx_r17.searchQueries.country == null ? null : ctx_r17.searchQueries.country.trim()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.filteredCountriesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r17.selectedCities);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r17.citySearch)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r17.filteredCities.length && !(ctx_r17.citySearch == null ? null : ctx_r17.citySearch.trim()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r17.filteredCities.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r17.filteredCities);
  }
}
function ExamReportsComponent_ng_template_27_div_9_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ind_r71 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ind_r71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ind_r71, " ");
  }
}
function ExamReportsComponent_ng_template_27_div_9_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sec_r72 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", sec_r72);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", sec_r72, " ");
  }
}
function ExamReportsComponent_ng_template_27_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 42)(1, "mat-form-field", 43)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "mat-select", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_9_Template_mat_select_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r73.userFilters.industry = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_div_9_Template_mat_select_openedChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r75.onSelectOpened($event, "industry"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_div_9_Template_mat_select_selectionChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r76.onIndustryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_div_9_Template_div_click_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_9_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r78.searchQueries.industry = $event);
    })("click", function ExamReportsComponent_ng_template_27_div_9_Template_input_click_6_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_div_9_Template_input_keydown_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r80.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_div_9_Template_input_keyup_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r81.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_div_9_Template_input_input_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r82.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ExamReportsComponent_ng_template_27_div_9_mat_option_9_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field", 43)(11, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Sector");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-select", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_9_Template_mat_select_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r83.userFilters.sector = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_div_9_Template_mat_select_openedChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r84.onSelectOpened($event, "sector"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_div_9_Template_mat_select_selectionChange_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r85.onSectorChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_div_9_Template_div_click_14_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_div_9_Template_input_ngModelChange_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r87.searchQueries.sector = $event);
    })("click", function ExamReportsComponent_ng_template_27_div_9_Template_input_click_15_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_div_9_Template_input_keydown_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r89.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_div_9_Template_input_keyup_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r90.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_div_9_Template_input_input_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r74);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r91.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ExamReportsComponent_ng_template_27_div_9_mat_option_18_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r18.userFilters.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r18.searchQueries.industry)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r18.filteredIndustryList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r18.userFilters.sector)("disabled", !ctx_r18.userFilters.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r18.searchQueries.sector)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r18.filteredSectorList);
  }
}
function ExamReportsComponent_ng_template_27_mat_option_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_mat_option_17_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r93);
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r92.toggleSelectAllDepartments());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r19.isAllDepartmentsSelected() ? "#2563eb" : "#64748b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r19.isAllDepartmentsSelected() ? "check_box" : "check_box_outline_blank", " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r94 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", d_r94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", d_r94, " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_mat_option_25_Template_mat_option_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r96);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r95.toggleSelectAllTeams());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleProp"]("color", ctx_r21.isAllTeamsSelected() ? "#2563eb" : "#64748b");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r21.isAllTeamsSelected() ? "check_box" : "check_box_outline_blank", " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r97 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", t_r97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", t_r97, " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cp_r98 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", cp_r98);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", cp_r98, " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r24.isSuperAdmin ? "Select an institute first" : "Select a test", " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r25.isSuperAdmin ? "No tests found for this institute" : "No tests found", " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const exam_r99 = ctx.$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", exam_r99.schedule_id || exam_r99.id || exam_r99.scheduleId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r26.getTestTitle(exam_r99), " ");
  }
}
function ExamReportsComponent_ng_template_27_mat_option_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const st_r100 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", st_r100.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", st_r100.label, " ");
  }
}
function ExamReportsComponent_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 38)(2, "h4")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_ng_template_27_div_7_Template, 12, 5, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_27_div_8_Template, 18, 13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ExamReportsComponent_ng_template_27_div_9_Template, 19, 11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 42)(11, "mat-form-field", 43)(12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-select", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r102.userFilters.department_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_Template_mat_select_openedChange_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r104.onSelectOpened($event, "department"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_Template_mat_select_selectionChange_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r105.onFilterSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_div_click_15_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r107.departmentFilterSearch = $event);
    })("click", function ExamReportsComponent_ng_template_27_Template_input_click_16_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_Template_input_keydown_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r109.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_Template_input_keyup_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r110.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_Template_input_input_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r111.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ExamReportsComponent_ng_template_27_mat_option_17_Template, 5, 3, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ExamReportsComponent_ng_template_27_mat_option_18_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "mat-form-field", 43)(20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "mat-select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r112.userFilters.teams_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_Template_mat_select_openedChange_22_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r113.onSelectOpened($event, "team"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_Template_mat_select_selectionChange_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r114.onFilterSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_div_click_23_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "input", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_input_ngModelChange_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r116.teamFilterSearch = $event);
    })("click", function ExamReportsComponent_ng_template_27_Template_input_click_24_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_Template_input_keydown_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r118.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_Template_input_keyup_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r119.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_Template_input_input_24_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r120.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](25, ExamReportsComponent_ng_template_27_mat_option_25_Template, 5, 3, "mat-option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ExamReportsComponent_ng_template_27_mat_option_26_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 50)(28, "mat-form-field", 43)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](30, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](31, "mat-select", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r121.userFilters.campus_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_Template_mat_select_openedChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r122.onSelectOpened($event, "campus"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_Template_mat_select_selectionChange_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r123.onCampusChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_div_click_32_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r125.searchQueries.campus = $event);
    })("click", function ExamReportsComponent_ng_template_27_Template_input_click_33_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_Template_input_keydown_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r127.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_Template_input_keyup_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r128.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_Template_input_input_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r129.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, ExamReportsComponent_ng_template_27_mat_option_36_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 50)(38, "mat-form-field", 55)(39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "Test Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](42, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r130.userFilters.schedule_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_Template_mat_select_openedChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r131.onSelectOpened($event, "schedule"));
    })("selectionChange", function ExamReportsComponent_ng_template_27_Template_mat_select_selectionChange_43_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r132.onTestFilterSelected($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_div_click_44_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_input_ngModelChange_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r134.searchQueries.schedule = $event);
    })("click", function ExamReportsComponent_ng_template_27_Template_input_click_45_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_Template_input_keydown_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r136.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_Template_input_keyup_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r137.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_Template_input_input_45_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r138.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, ExamReportsComponent_ng_template_27_mat_option_48_Template, 2, 1, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](49, ExamReportsComponent_ng_template_27_mat_option_49_Template, 2, 1, "mat-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](50, ExamReportsComponent_ng_template_27_mat_option_50_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "div", 50)(52, "mat-form-field", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_mat_form_field_click_52_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r139.openCreatedDateRangePicker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](55, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "mat-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "div", 50)(59, "mat-form-field", 43)(60, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](61, "Active Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](62, "mat-select", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_select_ngModelChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r140.userFilters.active_status = $event);
    })("openedChange", function ExamReportsComponent_ng_template_27_Template_mat_select_openedChange_62_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r141.onSelectOpened($event, "active_status"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_div_click_63_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](64, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_input_ngModelChange_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r143.searchQueries.active_status = $event);
    })("click", function ExamReportsComponent_ng_template_27_Template_input_click_64_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_27_Template_input_keydown_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r145.stopFilterSearchEvent($event));
    })("keyup", function ExamReportsComponent_ng_template_27_Template_input_keyup_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r146.stopFilterSearchEvent($event));
    })("input", function ExamReportsComponent_ng_template_27_Template_input_input_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r147.stopFilterSearchEvent($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, ExamReportsComponent_ng_template_27_mat_option_65_Template, 2, 2, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](66, "div", 64)(67, "div", 65)(68, "mat-checkbox", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_27_Template_mat_checkbox_ngModelChange_68_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r148.userFilters.created_by_me = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](69, " Created by Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](70, "div", 67)(71, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_button_click_71_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r149.applyFiltersPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](72, "mat-icon", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](73, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](74, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_27_Template_button_click_74_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r103);
      const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r150.resetFiltersAndReload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](75, "mat-icon", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](76, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("admin-single-col", !ctx_r2.showLocationAndIndustryFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showLocationAndIndustryFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showLocationAndIndustryFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showLocationAndIndustryFilters);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.department_id)("disabled", !ctx_r2.userFilters.institute_id && !ctx_r2.selectedInstituteId && !ctx_r2.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.departmentFilterSearch)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](33, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.filteredDepartmentsForFilter.length && !(ctx_r2.departmentFilterSearch == null ? null : ctx_r2.departmentFilterSearch.trim()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.filteredDepartmentsForFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.teams_id)("disabled", !ctx_r2.userFilters.institute_id && !ctx_r2.selectedInstituteId && !ctx_r2.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.teamFilterSearch)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](34, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.filteredTeamsForFilter.length && !(ctx_r2.teamFilterSearch == null ? null : ctx_r2.teamFilterSearch.trim()));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.filteredTeamsForFilter);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.campus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](35, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCampusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.schedule_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.schedule)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](36, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r2.selectedInstituteId);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.selectedInstituteId && !ctx_r2.filteredScheduleList.length && !ctx_r2.scheduledTestsLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.filteredScheduleList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r2.getCreatedDateRangeDisplay());
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.active_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.active_status)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](37, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.filteredActiveStatusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.created_by_me);
  }
}
function ExamReportsComponent_span_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Select Test \u2192 Select Date \u2192 Select Schedule \u2192 View Report ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_mat_option_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const name_r151 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", name_r151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", name_r151, " ");
  }
}
function ExamReportsComponent_mat_hint_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No tests found for this institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_mat_hint_52_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r7.highlightedDatesSet.size, " test date(s) highlighted in calendar ");
  }
}
function ExamReportsComponent_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-option", 74)(1, "div", 87)(2, "span", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const sched_r152 = ctx.$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx_r8.getScheduleId(sched_r152));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r8.getScheduleDisplayLabel(sched_r152));
  }
}
function ExamReportsComponent_mat_hint_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No schedules on selected date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_61_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96)(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Institute:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r153.selectedInstituteName, " ");
  }
}
function ExamReportsComponent_div_61_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96)(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Test:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r154 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r154.getTestTitle(ctx_r154.selectedExam), " ");
  }
}
function ExamReportsComponent_div_61_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96)(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Campus:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r155.userFilters.campus_id, " ");
  }
}
function ExamReportsComponent_div_61_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96)(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Dept:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r156.userFilters.department_id.join(", "), " ");
  }
}
function ExamReportsComponent_div_61_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96)(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Team:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r157.userFilters.teams_id.join(", "), " ");
  }
}
function ExamReportsComponent_div_61_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96)(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r158.userFilters.active_status, " ");
  }
}
function ExamReportsComponent_div_61_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 96)(1, "span", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Created by Me");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function ExamReportsComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r161 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 89)(1, "div", 90)(2, "mat-icon", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "filter_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Applied Filters:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_61_span_7_Template, 4, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_div_61_span_8_Template, 4, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ExamReportsComponent_div_61_span_9_Template, 4, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ExamReportsComponent_div_61_span_10_Template, 4, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, ExamReportsComponent_div_61_span_11_Template, 4, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ExamReportsComponent_div_61_span_12_Template, 4, 1, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ExamReportsComponent_div_61_span_13_Template, 3, 0, "span", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "button", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_61_Template_button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r161);
      const ctx_r160 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r160.resetFiltersAndReload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, " Clear All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.isSuperAdmin && !ctx_r10.isGlobalInstituteActive && ctx_r10.selectedInstituteName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.selectedExam);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.userFilters.department_id && ctx_r10.userFilters.department_id.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.userFilters.teams_id && ctx_r10.userFilters.teams_id.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.userFilters.active_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.userFilters.created_by_me);
  }
}
function ExamReportsComponent_div_62_p_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " and a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " from the toolbar above or use the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Filter Test Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " panel to load test reports and analytics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_62_p_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "p", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please select a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " from the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Filter Test Reports");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " panel to load test reports and analytics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 98)(1, "div", 99)(2, "div", 100)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h3", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "No Test Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_62_p_7_Template, 11, 0, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_div_62_p_8_Template, 8, 0, "p", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_62_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r165);
      const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r164.openFiltersOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "mat-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, " Filter Test Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r11.isSuperAdmin && !ctx_r11.isGlobalInstituteActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r11.isSuperAdmin || ctx_r11.isGlobalInstituteActive);
  }
}
function ExamReportsComponent_div_63_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Analytics Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_th_57_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Question Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 163)(1, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_td_58_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r200);
      const c_r198 = restoredCtx.$implicit;
      const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r199.openCategoryQuestionSummary(c_r198));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const c_r198 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (c_r198.category_name || c_r198.name || "?").charAt(0).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](c_r198.category_name || c_r198.name);
  }
}
function ExamReportsComponent_div_63_th_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r201 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r201.total_questions || c_r201.questions_count || 0, " ");
  }
}
function ExamReportsComponent_div_63_th_63_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r202 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r202.no_of_students || c_r202.users_attempted || 0, " ");
  }
}
function ExamReportsComponent_div_63_th_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r203 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r203.total_attempts || 0, " ");
  }
}
function ExamReportsComponent_div_63_th_69_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 167)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("text-danger", (c_r204.wrong_answers || c_r204.mistakes || c_r204.wrong_count || 0) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", c_r204.wrong_answers || c_r204.mistakes || c_r204.wrong_count || 0, " ");
  }
}
function ExamReportsComponent_div_63_th_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Error %");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c3 = function (a0, a1, a2) {
  return {
    "pct-badge--low": a0,
    "pct-badge--mid": a1,
    "pct-badge--high": a2
  };
};
function ExamReportsComponent_div_63_td_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 168)(1, "span", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r205 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](2, _c3, (c_r205.error_percentage || c_r205.error_pct || 0) <= 10, (c_r205.error_percentage || c_r205.error_pct || 0) > 10 && (c_r205.error_percentage || c_r205.error_pct || 0) <= 30, (c_r205.error_percentage || c_r205.error_pct || 0) > 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", c_r205.error_percentage || c_r205.error_pct || 0, "%");
  }
}
function ExamReportsComponent_div_63_tr_74_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 170);
  }
}
function ExamReportsComponent_div_63_tr_75_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 171);
  }
}
function ExamReportsComponent_div_63_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 172)(1, "div", 173)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Filtered by Question Bank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_div_78_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r208);
      const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r207.clearCategoryFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Show All Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r181.selectedCategoryFilterName || "Selected Category");
  }
}
function ExamReportsComponent_div_63_th_82_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 168)(1, "span", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const i_r210 = ctx.index;
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("#", i_r210 + 1 + (ctx_r183.questionCurrentPage - 1) * ctx_r183.questionPageSize, "");
  }
}
function ExamReportsComponent_div_63_th_85_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_86_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r211 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", q_r211.question_text || q_r211.text, " ");
  }
}
function ExamReportsComponent_div_63_th_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r212 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r212.attempts || 0);
  }
}
function ExamReportsComponent_div_63_th_91_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No Of Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_92_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_td_92_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r219);
      const q_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r217.openWrongAnswerSummary(q_r213));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r213.mistakes);
  }
}
function ExamReportsComponent_div_63_td_92_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_92_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_63_td_92_a_1_Template, 3, 1, "a", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_63_td_92_ng_template_2_Template, 2, 0, "ng-template", null, 178, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r213 = ctx.$implicit;
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r213.mistakes || 0) > 0)("ngIfElse", _r215);
  }
}
function ExamReportsComponent_div_63_th_94_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Error%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_td_95_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r221 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", q_r221.error_pct || (q_r221.attempts ? ((q_r221.mistakes || 0) / q_r221.attempts * 100).toFixed(2) : 0), "% ");
  }
}
function ExamReportsComponent_div_63_tr_96_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 170);
  }
}
function ExamReportsComponent_div_63_tr_97_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 171);
  }
}
function ExamReportsComponent_div_63_div_105_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 181)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Total ", ctx_r194.activeQuestionCount, " ", ctx_r194.activeQuestionCount === 1 ? "question" : "questions", " loaded");
  }
}
function ExamReportsComponent_div_63_ng_template_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-icon", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "User Report");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_div_171_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_div_171_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 163)(1, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_div_171_td_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r237);
      const row_r235 = restoredCtx.$implicit;
      const ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r236.openUserReview(row_r235));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r235 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (row_r235.student_name || row_r235.name || "S").charAt(0).toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r235.student_name || row_r235.name || "Student");
  }
}
function ExamReportsComponent_div_63_div_171_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Marks / Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_div_171_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 168)(1, "span", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r238 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", row_r238.marks_obtained, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", row_r238.total_marks, "");
  }
}
function ExamReportsComponent_div_63_div_171_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_div_171_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 168)(1, "span", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r239 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r239.percentage);
  }
}
function ExamReportsComponent_div_63_div_171_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Manual Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_div_171_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 168)(1, "span", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r240 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("review-pending", row_r240.manual_review === "pending" || row_r240.manual_review === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r240.manual_review);
  }
}
function ExamReportsComponent_div_63_div_171_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "th", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_63_div_171_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "td", 168)(1, "span", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r241 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("result-pass", (row_r241.result || "").toLowerCase() === "pass" || (row_r241.result || "").toLowerCase() === "passed")("result-fail", (row_r241.result || "").toLowerCase() === "fail" || (row_r241.result || "").toLowerCase() === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](row_r241.result);
  }
}
function ExamReportsComponent_div_63_div_171_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 170);
  }
}
function ExamReportsComponent_div_63_div_171_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tr", 171);
  }
}
const _c4 = function () {
  return ["student_name", "questions_attempted", "correct_answers", "wrong_answers", "result"];
};
function ExamReportsComponent_div_63_div_171_Template(rf, ctx) {
  if (rf & 1) {
    const _r244 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 123)(1, "table", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](2, 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_63_div_171_th_3_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_63_div_171_td_4_Template, 6, 2, "td", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](5, 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ExamReportsComponent_div_63_div_171_th_6_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_63_div_171_td_7_Template, 6, 2, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](8, 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ExamReportsComponent_div_63_div_171_th_9_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ExamReportsComponent_div_63_div_171_td_10_Template, 3, 1, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](11, 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ExamReportsComponent_div_63_div_171_th_12_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ExamReportsComponent_div_63_div_171_td_13_Template, 3, 3, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](14, 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ExamReportsComponent_div_63_div_171_th_15_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ExamReportsComponent_div_63_div_171_td_16_Template, 3, 5, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ExamReportsComponent_div_63_div_171_tr_17_Template, 1, 0, "tr", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ExamReportsComponent_div_63_div_171_tr_18_Template, 1, 0, "tr", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 144)(20, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_div_171_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r244);
      const ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r243.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](24, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_div_171_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r244);
      const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r245.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r196.userReportData);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](8, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r196.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Page ", ctx_r196.currentPage, " of ", ctx_r196.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r196.currentPage >= ctx_r196.totalPages);
  }
}
function ExamReportsComponent_div_63_div_172_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Loading user report...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
const _c5 = function () {
  return ["category", "questions", "users_attempted", "total_attempts", "mistakes", "error_pct"];
};
const _c6 = function () {
  return ["sno", "question", "attempts", "mistakes", "error_pct"];
};
function ExamReportsComponent_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 105)(1, "div", 106)(2, "mat-tab-group", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedTabChange", function ExamReportsComponent_div_63_Template_mat_tab_group_selectedTabChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r246.onTabChange($event));
    })("selectedIndexChange", function ExamReportsComponent_div_63_Template_mat_tab_group_selectedIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r248.activeMainTabIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_63_ng_template_4_Template, 4, 0, "ng-template", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 109)(6, "div", 110)(7, "div", 111)(8, "div", 112)(9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "grid_view");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 113)(12, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Question Banks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "Performance groups in analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 111)(19, "div", 117)(20, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 113)(23, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 111)(30, "div", 118)(31, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "stacked_line_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "div", 113)(34, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](35, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](36, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "Attempts recorded across categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "div", 111)(41, "div", 119)(42, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "div", 113)(45, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](46, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](47, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](50, "Wrong answers identified in analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](51, "mat-tab-group", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectedIndexChange", function ExamReportsComponent_div_63_Template_mat_tab_group_selectedIndexChange_51_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r249 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r249.innerAnalyticsTabIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "mat-tab", 121)(53, "div", 122)(54, "div", 123)(55, "table", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](56, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](57, ExamReportsComponent_div_63_th_57_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](58, ExamReportsComponent_div_63_td_58_Template, 6, 2, "td", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](59, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, ExamReportsComponent_div_63_th_60_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, ExamReportsComponent_div_63_td_61_Template, 2, 1, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](62, 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, ExamReportsComponent_div_63_th_63_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, ExamReportsComponent_div_63_td_64_Template, 2, 1, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](65, 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, ExamReportsComponent_div_63_th_66_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](67, ExamReportsComponent_div_63_td_67_Template, 2, 1, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](68, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](69, ExamReportsComponent_div_63_th_69_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](70, ExamReportsComponent_div_63_td_70_Template, 3, 3, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](71, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](72, ExamReportsComponent_div_63_th_72_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](73, ExamReportsComponent_div_63_td_73_Template, 3, 6, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](74, ExamReportsComponent_div_63_tr_74_Template, 1, 0, "tr", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](75, ExamReportsComponent_div_63_tr_75_Template, 1, 0, "tr", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "mat-tab", 137)(77, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, ExamReportsComponent_div_63_div_78_Template, 13, 1, "div", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "div", 139)(80, "table", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](81, 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](82, ExamReportsComponent_div_63_th_82_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](83, ExamReportsComponent_div_63_td_83_Template, 3, 1, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](84, 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](85, ExamReportsComponent_div_63_th_85_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](86, ExamReportsComponent_div_63_td_86_Template, 2, 1, "td", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](87, 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](88, ExamReportsComponent_div_63_th_88_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, ExamReportsComponent_div_63_td_89_Template, 2, 1, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](90, 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](91, ExamReportsComponent_div_63_th_91_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](92, ExamReportsComponent_div_63_td_92_Template, 4, 2, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](93, 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](94, ExamReportsComponent_div_63_th_94_Template, 2, 0, "th", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](95, ExamReportsComponent_div_63_td_95_Template, 2, 1, "td", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](96, ExamReportsComponent_div_63_tr_96_Template, 1, 0, "tr", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](97, ExamReportsComponent_div_63_tr_97_Template, 1, 0, "tr", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](98, "div", 144)(99, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_Template_button_click_99_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r250.prevQuestionPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](100, " Prev ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](101, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](103, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_Template_button_click_103_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r251 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r251.nextQuestionPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](104, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](105, ExamReportsComponent_div_63_div_105_Template, 3, 2, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](106, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](107, ExamReportsComponent_div_63_ng_template_107_Template, 4, 0, "ng-template", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](108, "div", 147)(109, "div", 111)(110, "div", 148)(111, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](112, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](113, "div", 113)(114, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](115, "Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](116, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](117);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](118, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](119);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](120, "div", 111)(121, "div", 149)(122, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](123, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](124, "div", 113)(125, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](126, "Current Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](127, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](128);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](129, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](130, "Paginated user report results");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](131, "div", 111)(132, "div", 150)(133, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](134, "military_tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](135, "div", 113)(136, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](137, "Average Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](138, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](139);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](140, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](141, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](142, "Average marks from loaded users");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](143, "div", 111)(144, "div", 151)(145, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](146, "task_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](147, "div", 113)(148, "div", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](149, "Pass Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](150, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](151);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](152, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](153, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](154, "Success ratio in current view");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](155, "div", 152)(156, "div", 153)(157, "mat-form-field", 154)(158, "mat-icon", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](159, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](160, "input", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_63_Template_input_ngModelChange_160_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r252.searchQuery = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](161, "div", 10)(162, "div", 11)(163, "button", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_Template_button_click_163_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r253.loadUserReport(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](164, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](165, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](166, " Search ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](167, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_63_Template_button_click_167_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r247);
      const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r254.exportUserCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](168, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](169, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](170, " Export CSV ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](171, ExamReportsComponent_div_63_div_171_Template, 26, 9, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](172, ExamReportsComponent_div_63_div_172_Template, 2, 0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedIndex", ctx_r12.activeMainTabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r12.categoryAnalytics.length || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r12.activeQuestionCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r12.filteredQuestionSummary.length ? "Filtered question summary view" : "Complete question summary view", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r12.analyticsTotalAttempts || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r12.analyticsMistakeCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("selectedIndex", ctx_r12.innerAnalyticsTabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r12.categoryAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](35, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](36, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.filteredQuestionSummary && ctx_r12.filteredQuestionSummary.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx_r12.paginatedQuestionSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](37, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](38, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r12.questionCurrentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Page ", ctx_r12.questionCurrentPage, " of ", ctx_r12.questionTotalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r12.questionCurrentPage >= ctx_r12.questionTotalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.questionSummary && ctx_r12.questionSummary.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r12.userReportTotal || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", ctx_r12.userReportData.length || 0, " visible for ", ctx_r12.getTestTitle(ctx_r12.selectedExam) || "selected test", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("", ctx_r12.currentPage, "/", ctx_r12.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](140, 29, ctx_r12.userAverageScore, "1.0-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](152, 32, ctx_r12.userPassRate, "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r12.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r12.loadingUserReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r12.loadingUserReport);
  }
}
function ExamReportsComponent_div_64_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Loading review...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r266 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 216)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "AI evaluation is pending for answers in this answer sheet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_1_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r266);
      const att_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r264.retryEvaluation(null, att_r261));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const att_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", att_r261._retryingEvaluation);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", att_r261._retryingEvaluation ? "Evaluating\u2026" : "Run evaluation", " ");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", q_r268.marks_awarded, "/", q_r268.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 3, q_r268.marks_awarded / (q_r268.question_marks || 1) * 100, "1.2-2"), "%) ");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_10_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r281);
      const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r279 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r279.toggleManualReview(q_r268));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Manual Check Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", q_r268.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("title", "AI confidence is below the configured " + q_r268.ai_confidence_threshold + "% threshold");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-pressed", !!q_r268.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r268.manual_review_required ? "check_circle" : "radio_button_unchecked");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "mat-icon", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_10_button_5_Template, 4, 5, "button", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate3"](" ", q_r268.marks_awarded, "/", q_r268.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](2, 5, q_r268.marks_awarded / (q_r268.question_marks || 1) * 100, "1.2-2"), "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", "AI Confidence: " + (q_r268.ai_confidence != null ? q_r268.ai_confidence + "%" : "N/A"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.needs_manual_review);
  }
}
const _c7 = function (a0, a1, a2) {
  return {
    "mark-positive": a0,
    "mark-negative": a1,
    "mark-mid": a2
  };
};
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r288 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 240)(1, "div", 241)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "button", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_1_Template_button_click_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r288);
      const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r286.startEditMarks(q_r268));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](3, _c7, (q_r268.marks_awarded || 0) == (q_r268.question_marks || 0), (q_r268.marks_awarded || 0) == 0, (q_r268.marks_awarded || 0) > 0 && (q_r268.marks_awarded || 0) < (q_r268.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r268.marks_awarded != null ? q_r268.marks_awarded : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r268.question_marks != null ? q_r268.question_marks : 0);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "small", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Description is required when changing marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r293 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 244)(1, "div", 245)(2, "input", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r293);
      const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](q_r268._editedMarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "label", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Change comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "textarea", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r293);
      const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](q_r268._marksEditReason = $event);
    })("input", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_input_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r293);
      const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](q_r268._marksReasonError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template, 2, 0, "small", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 252)(12, "button", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r293);
      const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r298.saveMarks(q_r268));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r293);
      const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r300 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r300.cancelEditMarks(q_r268));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const q_r268 = ctx_r302.$implicit;
    const qi_r269 = ctx_r302.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", q_r268._editedMarks)("min", 0)("max", q_r268.question_marks || 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("/ ", q_r268.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", "marks-reason-" + (q_r268.answer_id || qi_r269));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("input-error", q_r268._marksReasonError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", q_r268._marksEditReason)("id", "marks-reason-" + (q_r268.answer_id || qi_r269));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵattribute"]("aria-invalid", q_r268._marksReasonError);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268._marksReasonError);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 237);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_1_Template, 11, 7, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_div_2_Template, 18, 11, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !q_r268._editingMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268._editingMarks);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](3, _c7, (q_r268.marks_awarded || 0) == (q_r268.question_marks || 0), (q_r268.marks_awarded || 0) == 0, (q_r268.marks_awarded || 0) > 0 && (q_r268.marks_awarded || 0) < (q_r268.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"](" ", q_r268.marks_awarded != null ? q_r268.marks_awarded : 0, "/", q_r268.question_marks != null ? q_r268.question_marks : 0, " ");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Correct Answer: ", q_r268.options[0].option_text || q_r268.options[0], " ");
  }
}
const _c8 = function () {
  return [];
};
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 256)(1, "div", 257)(2, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_17_div_4_Template, 2, 1, "div", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("selected", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c8)).length)("correct", q_r268.is_correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Student Answer: ", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c8)).join(", ") || "-", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.marks_awarded === 0);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 290)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "AI evaluation could not be completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r268.evaluation_error);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 292)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "AI evaluation is pending for this answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 293)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "High-level Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", q_r268.feedback || "No high-level feedback was returned for this answer.", " ");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No missed points. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 316)(1, "div", 317)(2, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    const rc_r325 = ctx_r339.$implicit;
    const rci_r326 = ctx_r339.index;
    const ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", rc_r325.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r326 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r335.toTitleCase(h_r333.comment_text || h_r333.comment || ""));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r343 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 320)(1, "div", 317)(2, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r343);
      const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](h_r333._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const rci_r326 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r326 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", h_r333._editedText);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Deleted by ", h_r333.updated_by || h_r333.created_by || h_r333.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 329)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](h_r333.updated_by || h_r333.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r347.formatDate(h_r333.updated_date || h_r333.edited_at));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r355 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r355);
      const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r353.startEditComment(h_r333));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r358 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r358);
      const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r356.confirmDeleteComment(h_r333));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r361 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r361);
      const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r359 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r359.saveReviewComment(h_r333));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r364 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r364);
      const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r362.cancelEditComment(h_r333));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r338 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r338.isCommentEdited(h_r333));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r333._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r333._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r333._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r333._editing);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template, 6, 4, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template, 5, 2, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template, 2, 1, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_Template, 6, 5, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r333 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", h_r333.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r333._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r333._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r333.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r333.is_deleted != 1);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template, 7, 6, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", rc_r325.history);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 316)(1, "div", 317)(2, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const rc_r325 = ctx_r367.$implicit;
    const rci_r326 = ctx_r367.index;
    const ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", rc_r325.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r326 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", rc_r325.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r328.toTitleCase(rc_r325.comment_text || rc_r325.comment || ""));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r370 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 320)(1, "div", 317)(2, "span", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r370);
      const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](rc_r325._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r371 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const rci_r326 = ctx_r371.index;
    const rc_r325 = ctx_r371.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r326 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", rc_r325._editedText);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 314)(1, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Deleted by ", rc_r325.updated_by || rc_r325.created_by || rc_r325.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 329)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r373 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rc_r325.updated_by || rc_r325.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r373.formatDate(rc_r325.updated_date || rc_r325.edited_at));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r381);
      const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r379.startEditComment(rc_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r384);
      const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r382.confirmDeleteComment(rc_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r387);
      const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r385.saveReviewComment(rc_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r390 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r390);
      const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r388 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r388.cancelEditComment(rc_r325));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template, 11, 2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template, 4, 0, "a", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template, 4, 0, "a", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template, 4, 0, "a", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template, 4, 0, "a", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r331.isCommentEdited(rc_r325));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r325._editing);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 305)(2, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template, 2, 1, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template, 6, 6, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template, 5, 2, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template, 3, 1, "div", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_Template, 6, 5, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r325 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r325.history && rc_r325.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r325._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r325.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r325.is_deleted != 1);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No incorrect points. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 341)(1, "div", 317)(2, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r406 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const h_r400 = ctx_r406.$implicit;
    const hi_r401 = ctx_r406.index;
    const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", h_r400.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](hi_r401 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r402.toTitleCase(h_r400.comment_text || h_r400.comment || ""));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 343)(1, "div", 317)(2, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r409);
      const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](h_r400._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const hi_r401 = ctx_r410.index;
    const h_r400 = ctx_r410.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](hi_r401 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", h_r400._editedText);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Deleted by ", h_r400.updated_by || h_r400.created_by || h_r400.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 329)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r412 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](h_r400.updated_by || h_r400.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r412.formatDate(h_r400.updated_date || h_r400.edited_at));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r420 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r420);
      const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r418.startEditComment(h_r400));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r423);
      const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r421.confirmDeleteComment(h_r400));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r426 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r426);
      const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r424 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r424.saveReviewComment(h_r400));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r429);
      const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r427.cancelEditComment(h_r400));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r400 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r405.isCommentEdited(h_r400));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r400._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r400._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r400._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r400._editing);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template, 6, 4, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template, 5, 2, "div", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template, 2, 1, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_Template, 6, 5, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r400 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", h_r400.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r400._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r400._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r400.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r400.is_deleted != 1);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template, 7, 6, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", rc_r392.history);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 341)(1, "div", 317)(2, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r432 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const rc_r392 = ctx_r432.$implicit;
    const rci_r393 = ctx_r432.index;
    const ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", rc_r392.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r393 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", rc_r392.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r395.toTitleCase(rc_r392.comment_text || rc_r392.comment || ""));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 343)(1, "div", 317)(2, "span", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r435);
      const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](rc_r392._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const rci_r393 = ctx_r436.index;
    const rc_r392 = ctx_r436.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r393 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", rc_r392._editedText);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Deleted by ", rc_r392.updated_by || rc_r392.reviewer_id || rc_r392.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 329)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r438 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rc_r392.edited_by || rc_r392.updated_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r438.formatDate(rc_r392.edited_at || rc_r392.updated_date));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r446);
      const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r444.startEditComment(rc_r392));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r449);
      const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r447.confirmDeleteComment(rc_r392));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r452);
      const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r450.saveReviewComment(rc_r392));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r455 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r455);
      const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r453 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r453.cancelEditComment(rc_r392));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template, 11, 2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template, 4, 0, "a", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template, 4, 0, "a", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template, 4, 0, "a", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template, 4, 0, "a", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r398.isCommentEdited(rc_r392));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r392._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r392._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r392._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r392._editing);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 305)(2, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template, 2, 1, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template, 6, 6, "div", 339);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template, 5, 2, "div", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template, 2, 1, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_Template, 6, 5, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r392 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r392.history && rc_r392.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r392._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r392._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r392.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r392.is_deleted != 1);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No incomplete points. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 346)(1, "div", 317)(2, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const h_r465 = ctx_r471.$implicit;
    const hi_r466 = ctx_r471.index;
    const ctx_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", h_r465.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](hi_r466 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r467.toTitleCase(h_r465.comment_text || h_r465.comment || ""));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 348)(1, "div", 317)(2, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r474);
      const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](h_r465._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const hi_r466 = ctx_r475.index;
    const h_r465 = ctx_r475.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](hi_r466 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", h_r465._editedText);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Deleted by ", h_r465.updated_by || h_r465.created_by || h_r465.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 329)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](h_r465.updated_by || h_r465.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r477.formatDate(h_r465.updated_date || h_r465.edited_at));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r485 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r485);
      const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r483.startEditComment(h_r465));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r488 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r488);
      const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r486 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r486.confirmDeleteComment(h_r465));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r491);
      const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r489 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r489.saveReviewComment(h_r465));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r494 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r494);
      const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r492 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r492.cancelEditComment(h_r465));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r465 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r470 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r470.isCommentEdited(h_r465));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r465._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r465._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r465._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r465._editing);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 313);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template, 6, 4, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template, 5, 2, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template, 2, 1, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_Template, 6, 5, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r465 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", h_r465.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !h_r465._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r465._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r465.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", h_r465.is_deleted != 1);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 312);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template, 7, 6, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", rc_r457.history);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 346)(1, "div", 317)(2, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "span", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const rc_r457 = ctx_r497.$implicit;
    const rci_r458 = ctx_r497.index;
    const ctx_r460 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", rc_r457.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r458 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("deleted", rc_r457.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r460.toTitleCase(rc_r457.comment_text || rc_r457.comment || ""));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r500 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 348)(1, "div", 317)(2, "span", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "textarea", 321);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r500);
      const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](rc_r457._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r501 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const rci_r458 = ctx_r501.index;
    const rc_r457 = ctx_r501.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rci_r458 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", rc_r457._editedText);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Deleted by ", rc_r457.updated_by || rc_r457.reviewer_id || rc_r457.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 329)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "strong", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r503 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](rc_r457.edited_by || rc_r457.updated_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r503.formatDate(rc_r457.edited_at || rc_r457.updated_date));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r511);
      const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r509 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r509.startEditComment(rc_r457));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r514 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r514);
      const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r512.confirmDeleteComment(rc_r457));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r517 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r517);
      const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r515.saveReviewComment(rc_r457));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r520 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r520);
      const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
      const ctx_r518 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r518.cancelEditComment(rc_r457));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template, 11, 2, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template, 4, 0, "a", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template, 4, 0, "a", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template, 4, 0, "a", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template, 4, 0, "a", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r463.isCommentEdited(rc_r457));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r457._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r457._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r457._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r457._editing);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 305)(2, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template, 2, 1, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template, 6, 6, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template, 5, 2, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template, 2, 1, "span", 315);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_Template, 6, 5, "div", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r457 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r457.history && rc_r457.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !rc_r457._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r457._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r457.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", rc_r457.is_deleted != 1);
  }
}
const _c9 = function () {
  return ["incorrct", "incorrect", "incor"];
};
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 294)(1, "div", 295)(2, "div", 296)(3, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Points Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template, 2, 0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template, 8, 5, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 300)(10, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "Points Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template, 2, 0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template, 9, 5, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 302)(17, "div", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, "Points Incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template, 2, 0, "div", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](22, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template, 9, 5, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r311.reviewComments(q_r268, "missing").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r311.reviewComments(q_r268, "missing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r311.reviewComments(q_r268, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](6, _c9)).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r311.reviewComments(q_r268, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r311.reviewComments(q_r268, "incomplete").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r311.reviewComments(q_r268, "incomplete"));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 349);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 350);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Current ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_span_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 351)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r314.formatDate(q_r268.updated_date));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 352)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Change comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", q_r268.edit_reason, " ");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "div", 349);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 351)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mh_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r529.formatDate(mh_r525.updated_date));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 352)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "Change comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mh_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", mh_r525.edit_reason, " ");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 353)(1, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 354);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_div_3_Template, 1, 0, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 280)(5, "div", 355)(6, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 285)(11, "span", 286)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_span_15_Template, 4, 1, "span", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_div_16_Template, 4, 1, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const mh_r525 = ctx.$implicit;
    const isLast_r527 = ctx.last;
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !isLast_r527);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", mh_r525.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("/ ", q_r268.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](mh_r525.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", mh_r525.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", mh_r525.edit_reason);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 261)(1, "div", 262)(2, "div", 263)(3, "div", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Student's Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 266)(8, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Model Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_12_Template, 6, 1, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_13_Template, 4, 0, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_14_Template, 5, 1, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_15_Template, 23, 8, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 273)(17, "div", 274)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Marks History");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "div", 275)(23, "div", 276)(24, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](25, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](26, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_26_Template, 1, 0, "div", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 280)(28, "div", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](29, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_29_Template, 2, 0, "div", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "div", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 285)(35, "span", 286)(36, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](39, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_span_39_Template, 4, 1, "span", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](40, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_40_Template, 4, 1, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_div_41_Template, 17, 6, "div", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](14, _c8)).join(" ") || "No answer provided", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", q_r268.correct_option || q_r268.options && q_r268.options[0] && (q_r268.options[0].option_text || q_r268.options[0]) || q_r268.correct_answer || "No model answer provided", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.evaluation_status === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.evaluation_status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.question_type || q_r268.type) === "descriptive" && q_r268.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.question_type || q_r268.type) === "descriptive" && q_r268.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.marks_history && q_r268.marks_history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.updated_by && q_r268.updated_by.toLowerCase() !== "system");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", q_r268.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("/ ", q_r268.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r268.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.edit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", q_r268.marks_history);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Student Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template, 2, 0, "span", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template, 2, 0, "span", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template, 2, 0, "span", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c8)).indexOf(opt_r536.option_text || opt_r536) !== -1 && !(opt_r536.is_correct == 1 || opt_r536.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c8)).indexOf(opt_r536.option_text || opt_r536) !== -1 && (opt_r536.is_correct == 1 || opt_r536.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", opt_r536.is_correct && (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c8)).indexOf(opt_r536.option_text || opt_r536) === -1);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 369);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 368);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Student Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 370);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "Missed Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 364);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template, 2, 0, "span", 366);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template, 2, 0, "span", 365);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template, 2, 0, "span", 367);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](3, _c8)).indexOf(opt_r536.option_text || opt_r536) !== -1 && (opt_r536.is_correct == 1 || opt_r536.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c8)).indexOf(opt_r536.option_text || opt_r536) !== -1 && !(opt_r536.is_correct == 1 || opt_r536.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", opt_r536.is_correct && (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](5, _c8)).indexOf(opt_r536.option_text || opt_r536) === -1);
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 358)(1, "div", 359)(2, "span", 360);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 361)(5, "div", 362);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template, 4, 6, "div", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](8, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template, 4, 6, "div", 363);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r536 = ctx.$implicit;
    const oi_r537 = ctx.index;
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    const ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("correct", opt_r536.is_correct == 1 || opt_r536.is_correct === true)("selected", (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](10, _c8)).indexOf(opt_r536.option_text || opt_r536) !== -1)("missed", opt_r536.is_correct && (q_r268.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c8)).indexOf(opt_r536.option_text || opt_r536) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r535.getOptionLetter(oi_r537));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](opt_r536.option_text || opt_r536);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.question_type == "choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.question_type == "multi");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 356);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_div_1_Template, 9, 12, "div", 357);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", q_r268.options || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](1, _c8));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 218)(1, "div", 219)(2, "div", 220)(3, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 222)(6, "div", 223)(7, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_9_Template, 3, 6, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_10_Template, 6, 8, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 226)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_15_Template, 3, 2, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_16_Template, 2, 7, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_17_Template, 5, 8, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_18_Template, 42, 15, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_div_19_Template, 2, 2, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r268 = ctx.$implicit;
    const qi_r269 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r268.sno || q_r268.qno ? q_r268.sno || q_r268.qno : qi_r269 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", (q_r268.question_type || q_r268.type || "").toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.question_type != "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", q_r268.question_type === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](q_r268.question_text || q_r268.text || q_r268.title || "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.question_type || q_r268.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.question_type || q_r268.type) !== "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.question_type || q_r268.type) === "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.question_type || q_r268.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", (q_r268.question_type || q_r268.type) == "choose" || (q_r268.question_type || q_r268.type) == "multi");
  }
}
function ExamReportsComponent_div_64_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_div_1_Template, 6, 2, "div", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, ExamReportsComponent_div_64_div_20_div_1_div_1_div_3_Template, 20, 10, "div", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const att_r261 = ctx.$implicit;
    const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r260.hasPendingEvaluation(att_r261));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", att_r261.review || att_r261.questions || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](2, _c8));
  }
}
function ExamReportsComponent_div_64_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_div_1_Template, 4, 3, "div", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r257.userReviewAttempts);
  }
}
function ExamReportsComponent_div_64_div_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, "No review data available for this user.");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_64_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, ExamReportsComponent_div_64_div_20_div_1_Template, 2, 1, "div", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_64_div_20_ng_template_2_Template, 2, 0, "ng-template", null, 211, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r258 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](3);
    const ctx_r256 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r256.userReviewAttempts && ctx_r256.userReviewAttempts.length)("ngIfElse", _r258);
  }
}
const _c10 = function (a0, a1) {
  return {
    pass: a0,
    fail: a1
  };
};
function ExamReportsComponent_div_64_Template(rf, ctx) {
  if (rf & 1) {
    const _r553 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r553);
      const ctx_r552 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r552.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 197)(3, "div", 198)(4, "div", 199)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 200)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "h3")(11, "span", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "button", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r553);
      const ctx_r555 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r555.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "mat-icon", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, ExamReportsComponent_div_64_div_19_Template, 2, 0, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, ExamReportsComponent_div_64_div_20_Template, 4, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 207)(22, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_64_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r553);
      const ctx_r556 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r556.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Answer Sheet - ", ctx_r13.selectedUserName || "User", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate2"]("Score: ", ctx_r13.selectedUserScore || "-", " / ", ctx_r13.totalMarks || "-", " \u00A0|\u00A0Result: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction2"](7, _c10, (ctx_r13.selectedUserResult || "").toLowerCase() === "pass", (ctx_r13.selectedUserResult || "").toLowerCase() === "fail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r13.selectedUserResult || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r13.userReviewLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r13.userReviewLoading);
  }
}
function ExamReportsComponent_div_65_div_17_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r562 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr")(1, "td", 377)(2, "a", 378);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_65_div_17_tr_13_Template_a_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r562);
      const wa_r560 = restoredCtx.$implicit;
      const ctx_r561 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r561.openResourcesForWrongAnswer(ctx_r561.selectedQuestionForWrongSummary, wa_r560));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "td", 379)(5, "a", 380);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_65_div_17_tr_13_Template_a_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r562);
      const wa_r560 = restoredCtx.$implicit;
      const ctx_r563 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r563.openResourcesForWrongAnswer(ctx_r563.selectedQuestionForWrongSummary, wa_r560));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td", 381);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wa_r560 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](wa_r560.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](wa_r560.count || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](wa_r560.pct || "-");
  }
}
function ExamReportsComponent_div_65_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No wrong answer data available for this question. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_65_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "div", 375);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "table", 376)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Wrong Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "No. of times selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Occurrence %");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, ExamReportsComponent_div_65_div_17_tr_13_Template, 9, 3, "tr", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, ExamReportsComponent_div_65_div_17_div_14_Template, 2, 0, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r557 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" Question: ", ctx_r557.selectedQuestionForWrongSummary.question_text || ctx_r557.selectedQuestionForWrongSummary.text || ctx_r557.selectedQuestionForWrongSummary.name || "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r557.selectedWrongAnswers);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r557.selectedWrongAnswers || !ctx_r557.selectedWrongAnswers.length);
  }
}
function ExamReportsComponent_div_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r565 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_65_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r565);
      const ctx_r564 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r564.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_65_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 197)(3, "div", 198)(4, "div", 200)(5, "div", 199)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "rule_folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 372)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Wrong Answer Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 373);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Details for selected question");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 374);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_65_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r565);
      const ctx_r567 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r567.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ExamReportsComponent_div_65_div_17_Template, 15, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 207)(19, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_65_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r565);
      const ctx_r568 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r568.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](20, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r14.selectedQuestionForWrongSummary);
  }
}
function ExamReportsComponent_div_66_div_17_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li")(1, "div", 385);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 386);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r572 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](r_r572.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](r_r572.email || "");
  }
}
function ExamReportsComponent_div_66_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div")(1, "ul", 384);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, ExamReportsComponent_div_66_div_17_li_2_Template, 5, 2, "li", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r569 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r569.selectedResources);
  }
}
function ExamReportsComponent_div_66_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " No resources linked for this wrong answer. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_66_Template(rf, ctx) {
  if (rf & 1) {
    const _r574 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_66_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r574);
      const ctx_r573 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r573.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 371);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_66_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 197)(3, "div", 198)(4, "div", 200)(5, "div", 199)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "folder_shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 372)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 382);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Resources related to the selected wrong answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "button", 383);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_66_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r574);
      const ctx_r576 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r576.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-icon", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, ExamReportsComponent_div_66_div_17_Template, 3, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, ExamReportsComponent_div_66_div_18_Template, 2, 0, "div", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 207)(20, "button", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_div_66_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r574);
      const ctx_r577 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r577.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r15.selectedResources && ctx_r15.selectedResources.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r15.selectedResources || !ctx_r15.selectedResources.length);
  }
}
class ExamReportsComponent {
  constructor(http, loading, overlay, vcr, pageMeta, _snack, confirm, globalContextService, dialog, auth) {
    this.http = http;
    this.loading = loading;
    this.overlay = overlay;
    this.vcr = vcr;
    this.pageMeta = pageMeta;
    this._snack = _snack;
    this.confirm = confirm;
    this.globalContextService = globalContextService;
    this.dialog = dialog;
    this.auth = auth;
    this.isSuperAdmin = false;
    this.filtersOverlayRef = null;
    this._subs = null;
    this.resetFilters = {};
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
    this.currentReviewRow = null;
    this.totalQuestions = null;
    this.totalMarks = null;
    this.pageSize = 25;
    this.currentPage = 1;
    this.questionPageSize = 20;
    this.questionCurrentPage = 1;
    this.searchQuery = '';
    this.commentEdit = false;
    this.updatedBy = '';
    // placeholders for template bindings
    this.examCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
    this.instituteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControl('');
    this.filteredInstitutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
    this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
    this.allTests = [];
    this.selectedExam = null;
    this.activeMainTabIndex = 0;
    this.innerAnalyticsTabIndex = 0;
    this.userFilterOpen = false;
    this.isGlobalInstituteActive = false;
    this.userFilters = {
      country_id: '',
      city_id: '',
      industry: '',
      sector: '',
      institute_id: '',
      campus_id: '',
      department_id: [],
      teams_id: [],
      schedule_id: '',
      active_status: '',
      created_after: null,
      created_before: null,
      created_by_me: false,
      joined_after: null,
      joined_before: null
    };
    this.selectedCountries = [];
    this.selectedCities = [];
    this.citySearch = '';
    this.searchQueries = {
      country: '',
      city: '',
      industry: '',
      sector: '',
      institute: '',
      campus: '',
      department: '',
      team: '',
      schedule: '',
      active_status: ''
    };
    this.countries = [];
    this.cities = [];
    this.campusList = [];
    this.departmentList = [];
    this.teamList = [];
    this.industryList = ['School', 'College', 'BPO', 'Bank', 'IT'];
    this.sectorMap = {
      School: ['School'],
      College: ['Engineering', 'Arts'],
      BPO: ['Healthcare', 'Finance'],
      Bank: ['Bank'],
      IT: ['IT']
    };
    this.activeStatusList = [{
      value: '',
      label: 'All'
    }, {
      value: 'active',
      label: 'Active'
    }, {
      value: 'inactive',
      label: 'Inactive'
    }];
    this.institutes = [];
    this.selectedInstituteId = null;
    this.selectedInstitutes = [];
    this.instituteFilterSearch = '';
    this.departmentFilterSearch = '';
    this.teamFilterSearch = '';
    this.scheduledTestsLoading = false;
    this.scheduledTestsMessage = '';
    this.scheduledTestsRequestId = 0;
    // --- 3-Step Test Selection State ---
    this.uniqueTestNames = [];
    this.selectedTestTitle = '';
    this.selectedScheduleDate = null;
    this.highlightedDatesSet = new Set();
    this.availableSchedulesOnDate = [];
    this.selectedScheduleId = '';
    this.displayInstituteName = value => {
      if (!value) return '';
      const found = this.institutes.find(i => String(i.id) === String(value));
      return found ? found.name : String(value);
    };
    this.getTestTitle = exam => {
      if (!exam) return '';
      if (typeof exam === 'string') {
        return exam.replace(/^\d{2}\/\d{2}\/\d{4}\s+\d{2}:\d{2}\s*-\s*/, '').trim();
      }
      const rawTitle = exam.exam?.title || exam.exam_title || exam.test_name || exam.title || exam.name || '';
      return String(rawTitle).replace(/^\d{2}\/\d{2}\/\d{4}\s+\d{2}:\d{2}\s*-\s*/, '').trim();
    };
    this.dateClass = (cellDate, view) => {
      if (view === 'month') {
        const dateStr = this.formatDateToYYYYMMDD(cellDate);
        return this.highlightedDatesSet.has(dateStr) ? 'highlighted-schedule-date' : '';
      }
      return '';
    };
    // simple pagination controls without MatPaginator binding
    this.loadingUserReport = false;
    this.selectedCategoryFilterName = '';
    this._pendingCategoryFilter = null;
    this.displayTest = exam => {
      return this.getTestTitle(exam);
    };
    try {
      this.isSuperAdmin = !!this.auth.currentUserValue && ['super_admin', 'superadmin', 'super-admin'].includes((this.auth.currentUserValue.role || '').toLowerCase());
    } catch (e) {
      this.isSuperAdmin = false;
    }
    this.auth.user$.subscribe(user => {
      try {
        this.isSuperAdmin = !!user && ['super_admin', 'superadmin', 'super-admin'].includes((user.role || '').toLowerCase());
      } catch (e) {
        this.isSuperAdmin = false;
      }
    });
  }
  get showLocationAndIndustryFilters() {
    return this.isSuperAdmin && !this.isGlobalInstituteActive;
  }
  stopFilterSearchEvent(event) {
    event.stopPropagation();
  }
  get selectedInstituteName() {
    if (!this.selectedInstituteId) return '';
    const found = this.institutes.find(i => String(i.id) === String(this.selectedInstituteId));
    if (found) return found.name;
    if (this.isGlobalInstituteActive) return this.globalContextService.activeInstitute?.institute_name || '';
    return '';
  }
  get filteredInstitutesForFilter() {
    const q = (this.instituteFilterSearch || '').toLowerCase().trim();
    let list = this.institutes || [];
    if (this.userFilters.industry) {
      const targetInd = this.userFilters.industry.toLowerCase().trim();
      list = list.filter(i => {
        const ind = (i.industry_type || '').toLowerCase().trim();
        return !ind || ind === targetInd || ind.includes(targetInd) || targetInd.includes(ind);
      });
    }
    if (this.userFilters.sector) {
      const targetSec = this.userFilters.sector.toLowerCase().trim();
      list = list.filter(i => {
        const sec = (i.industry_sector || '').toLowerCase().trim();
        return !sec || sec === targetSec || sec.includes(targetSec) || targetSec.includes(sec);
      });
    }
    if (q) {
      list = list.filter(i => (i.name || '').toLowerCase().includes(q) || !!i.id && this.selectedInstitutes.includes(i.id));
    }
    return [...list].sort((a, b) => {
      const aSel = !!a.id && this.selectedInstitutes.includes(a.id);
      const bSel = !!b.id && this.selectedInstitutes.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }
  isAllInstitutesSelected() {
    const ids = (this.filteredInstitutesForFilter || []).map(i => i.id || '').filter(id => !!id);
    return ids.length > 0 && ids.every(id => (this.selectedInstitutes || []).includes(id));
  }
  toggleSelectAllInstitutes() {
    const ids = (this.filteredInstitutesForFilter || []).map(i => i.id || '').filter(id => !!id);
    if (this.isAllInstitutesSelected()) {
      this.selectedInstitutes = [];
    } else {
      this.selectedInstitutes = [...ids];
    }
    this.onInstituteSelectionChange();
  }
  onInstituteSelectionChange() {
    const iid = typeof this.userFilters.institute_id === 'string' ? this.userFilters.institute_id : this.selectedInstitutes[0] || '';
    this.selectedInstituteId = iid || null;
    this.selectedInstitutes = iid ? [iid] : [];
    this.userFilters.institute_id = iid;
    this.onInstituteChange(iid);
  }
  get filteredDepartmentsForFilter() {
    const q = (this.departmentFilterSearch || '').toLowerCase().trim();
    let list = this.departmentList || [];
    const selected = Array.isArray(this.userFilters.department_id) ? this.userFilters.department_id : [];
    if (q) {
      list = list.filter(d => d.toLowerCase().includes(q) || selected.includes(d));
    }
    return [...list].sort((a, b) => {
      const aSel = selected.includes(a);
      const bSel = selected.includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
    });
  }
  isAllDepartmentsSelected() {
    const list = this.filteredDepartmentsForFilter || [];
    const selected = Array.isArray(this.userFilters.department_id) ? this.userFilters.department_id : [];
    return list.length > 0 && list.every(d => selected.includes(d));
  }
  toggleSelectAllDepartments() {
    const list = this.filteredDepartmentsForFilter || [];
    if (this.isAllDepartmentsSelected()) {
      this.userFilters.department_id = [];
    } else {
      this.userFilters.department_id = [...list];
    }
    this.onFilterSelectionChange();
  }
  get filteredTeamsForFilter() {
    const q = (this.teamFilterSearch || '').toLowerCase().trim();
    let list = this.teamList || [];
    const selected = Array.isArray(this.userFilters.teams_id) ? this.userFilters.teams_id : [];
    if (q) {
      list = list.filter(t => t.toLowerCase().includes(q) || selected.includes(t));
    }
    return [...list].sort((a, b) => {
      const aSel = selected.includes(a);
      const bSel = selected.includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
    });
  }
  isAllTeamsSelected() {
    const list = this.filteredTeamsForFilter || [];
    const selected = Array.isArray(this.userFilters.teams_id) ? this.userFilters.teams_id : [];
    return list.length > 0 && list.every(t => selected.includes(t));
  }
  toggleSelectAllTeams() {
    const list = this.filteredTeamsForFilter || [];
    if (this.isAllTeamsSelected()) {
      this.userFilters.teams_id = [];
    } else {
      this.userFilters.teams_id = [...list];
    }
    this.onFilterSelectionChange();
  }
  get filteredCountriesList() {
    const q = (this.searchQueries.country || '').toLowerCase().trim();
    let list = this.countries || [];
    if (q) {
      list = list.filter(c => (c.name || '').toLowerCase().includes(q) || (this.selectedCountries || []).includes(c.code));
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedCountries || []).includes(a.code);
      const bSel = (this.selectedCountries || []).includes(b.code);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }
  isAllCountriesSelected() {
    const items = this.filteredCountriesList || [];
    return items.length > 0 && items.every(c => (this.selectedCountries || []).includes(c.code));
  }
  toggleSelectAllCountries() {
    const items = this.filteredCountriesList || [];
    if (this.isAllCountriesSelected()) {
      this.selectedCountries = [];
    } else {
      this.selectedCountries = items.map(c => c.code);
    }
    this.onCountryChange();
  }
  get filteredCitiesList() {
    const q = (this.searchQueries.city || '').toLowerCase().trim();
    if (!q) return this.cities;
    return (this.cities || []).filter(c => (c.name || '').toLowerCase().includes(q));
  }
  get filteredIndustryList() {
    const q = (this.searchQueries.industry || '').toLowerCase().trim();
    if (!q) return this.industryList;
    return (this.industryList || []).filter(i => i.toLowerCase().includes(q));
  }
  get filteredSectorList() {
    if (!this.userFilters.industry) return [];
    const sectors = this.sectorMap[this.userFilters.industry] || [];
    const q = (this.searchQueries.sector || '').toLowerCase().trim();
    if (!q) return sectors;
    return sectors.filter(s => s.toLowerCase().includes(q));
  }
  onIndustryChange() {
    const validSectors = this.userFilters.industry ? this.sectorMap[this.userFilters.industry] || [] : [];
    if (!validSectors.includes(this.userFilters.sector)) {
      this.userFilters.sector = '';
    }
    this.loadInstitutes();
    this.onFilterSelectionChange();
  }
  onSectorChange() {
    this.loadInstitutes();
    this.onFilterSelectionChange();
  }
  onCampusChange() {
    if (!this.userFilters.institute_id && !this.userFilters.campus_id) {
      this.userFilters.department_id = [];
      this.userFilters.teams_id = [];
    }
    this.onFilterSelectionChange();
  }
  get filteredInstitutesList() {
    const q = (this.searchQueries.institute || '').toLowerCase().trim();
    let list = this.institutes || [];
    if (this.userFilters.industry) {
      const targetInd = this.userFilters.industry.toLowerCase().trim();
      list = list.filter(i => {
        const ind = (i.industry_type || '').toLowerCase().trim();
        return !ind || ind === targetInd || ind.includes(targetInd) || targetInd.includes(ind);
      });
    }
    if (this.userFilters.sector) {
      const targetSec = this.userFilters.sector.toLowerCase().trim();
      list = list.filter(i => {
        const sec = (i.industry_sector || '').toLowerCase().trim();
        return !sec || sec === targetSec || sec.includes(targetSec) || targetSec.includes(sec);
      });
    }
    if (!q) return list;
    return list.filter(i => (i.name || '').toLowerCase().includes(q));
  }
  onInstituteAutocompleteSelected(id) {
    this.userFilters.institute_id = id || '';
    this.selectedInstituteId = id || this.selectedInstituteId;
    this.onInstituteChange(id || '');
  }
  get filteredCampusList() {
    const q = (this.searchQueries.campus || '').toLowerCase().trim();
    if (!q) return this.campusList;
    return (this.campusList || []).filter(c => c.toLowerCase().includes(q));
  }
  get filteredDepartmentList() {
    const q = (this.searchQueries.department || '').toLowerCase().trim();
    if (!q) return this.departmentList;
    return (this.departmentList || []).filter(d => d.toLowerCase().includes(q));
  }
  get filteredTeamList() {
    const q = (this.searchQueries.team || '').toLowerCase().trim();
    if (!q) return this.teamList;
    return (this.teamList || []).filter(t => t.toLowerCase().includes(q));
  }
  get filteredScheduleList() {
    const q = (typeof this.searchQueries.schedule === 'string' ? this.searchQueries.schedule : '').toLowerCase().trim();
    let list = this.allTests || [];
    // Filter by campus if selected
    if (this.userFilters.campus_id) {
      const selectedCampus = String(this.userFilters.campus_id).toLowerCase().trim();
      list = list.filter(t => {
        const itemCampus = String(t.campus_id || t.campus || t.campus_name || '').toLowerCase().trim();
        return !itemCampus || itemCampus.includes(selectedCampus);
      });
    }
    // Filter strictly by department if selected
    if (Array.isArray(this.userFilters.department_id) && this.userFilters.department_id.length) {
      const selectedDepts = this.userFilters.department_id.map(d => String(d).toLowerCase().trim());
      list = list.filter(t => {
        const itemDept = String(t.department_id || t.department || t.department_name || t.departments || '').toLowerCase().trim();
        if (!itemDept) {
          const userMatch = Array.isArray(t.assigned_users) && t.assigned_users.some(u => {
            const uDept = String(u.department_id || u.department || u.department_name || '').toLowerCase().trim();
            return selectedDepts.some(sd => uDept.includes(sd));
          });
          return userMatch || true;
        }
        return selectedDepts.some(sd => itemDept.includes(sd));
      });
    }
    // Filter strictly by team if selected
    if (Array.isArray(this.userFilters.teams_id) && this.userFilters.teams_id.length) {
      const selectedTeams = this.userFilters.teams_id.map(tm => String(tm).toLowerCase().trim());
      list = list.filter(t => {
        const itemTeam = String(t.team_id || t.team || t.team_name || t.teams || '').toLowerCase().trim();
        if (!itemTeam) {
          const userMatch = Array.isArray(t.assigned_users) && t.assigned_users.some(u => {
            const uTeam = String(u.team_id || u.team || u.team_name || '').toLowerCase().trim();
            return selectedTeams.some(st => uTeam.includes(st));
          });
          return userMatch || true;
        }
        return selectedTeams.some(st => itemTeam.includes(st));
      });
    }
    if (!q) return list;
    return list.filter(t => this.getTestTitle(t).toLowerCase().includes(q));
  }
  get filteredActiveStatusList() {
    const q = (this.searchQueries.active_status || '').toLowerCase().trim();
    if (!q) return this.activeStatusList;
    return (this.activeStatusList || []).filter(a => (a.label || '').toLowerCase().includes(q));
  }
  // --- 3-Step Test Selection Logic ---
  updateUniqueTestNames() {
    const namesSet = new Set();
    (this.allTests || []).forEach(it => {
      const title = this.getTestTitle(it);
      if (title) namesSet.add(title);
    });
    this.uniqueTestNames = Array.from(namesSet).sort((a, b) => a.localeCompare(b));
    if (this.uniqueTestNames.length > 0) {
      if (!this.selectedTestTitle || !this.uniqueTestNames.includes(this.selectedTestTitle)) {
        this.onTestTitleSelect(this.uniqueTestNames[0]);
      } else {
        this.updateHighlightedDates();
        this.updateAvailableSchedulesOnDate();
      }
    } else {
      this.selectedTestTitle = '';
      this.selectedScheduleDate = null;
      this.highlightedDatesSet.clear();
      this.availableSchedulesOnDate = [];
      this.selectedScheduleId = '';
    }
  }
  onTestTitleSelect(title) {
    this.selectedTestTitle = title;
    this.updateHighlightedDates();
    const dateStrs = Array.from(this.highlightedDatesSet).sort();
    if (dateStrs.length > 0) {
      const latestStr = dateStrs[dateStrs.length - 1];
      const parts = latestStr.split('-');
      this.selectedScheduleDate = new Date(Number(parts[0]), Number(parts[1]) - 1, Number(parts[2]));
    } else {
      this.selectedScheduleDate = null;
    }
    this.updateAvailableSchedulesOnDate();
  }
  updateHighlightedDates() {
    this.highlightedDatesSet.clear();
    if (!this.selectedTestTitle) return;
    (this.allTests || []).forEach(it => {
      if (this.getTestTitle(it) === this.selectedTestTitle) {
        const dateStr = this.getScheduleDateString(it);
        if (dateStr) {
          this.highlightedDatesSet.add(dateStr);
        }
      }
    });
  }
  onScheduleDateSelect(date) {
    this.selectedScheduleDate = date;
    this.updateAvailableSchedulesOnDate();
  }
  updateAvailableSchedulesOnDate() {
    if (!this.selectedTestTitle || !this.selectedScheduleDate) {
      this.availableSchedulesOnDate = [];
      this.selectedScheduleId = '';
      return;
    }
    const targetDateStr = this.formatDateToYYYYMMDD(this.selectedScheduleDate);
    this.availableSchedulesOnDate = (this.allTests || []).filter(it => {
      return this.getTestTitle(it) === this.selectedTestTitle && this.getScheduleDateString(it) === targetDateStr;
    });
    if (this.availableSchedulesOnDate.length > 0) {
      const exists = this.availableSchedulesOnDate.find(s => {
        const sid = this.getScheduleId(s);
        return sid === String(this.selectedExam?.schedule_id || this.selectedExam?.id || this.selectedExam?.scheduleId || '');
      });
      if (exists) {
        this.selectedScheduleId = this.getScheduleId(exists);
      } else {
        this.onScheduleSelect(this.availableSchedulesOnDate[0]);
      }
    } else {
      this.selectedScheduleId = '';
    }
  }
  onScheduleSelectFromId(schedId) {
    const sched = (this.availableSchedulesOnDate || []).find(s => this.getScheduleId(s) === String(schedId));
    if (sched) {
      this.onScheduleSelect(sched);
    }
  }
  onScheduleSelect(schedule) {
    if (!schedule) return;
    this.selectedExam = schedule;
    this.selectedScheduleId = this.getScheduleId(schedule);
    this.userFilters.schedule_id = this.selectedScheduleId;
    try {
      this.examCtrl.setValue(schedule);
    } catch (e) {}
    this.questionCurrentPage = 1;
    this.currentPage = 1;
    this.reportsApplied = true;
    if (this.activeMainTabIndex === 0) {
      this.loadAnalytics();
    } else {
      this.loadUserReport(1);
    }
  }
  getScheduleId(item) {
    if (!item) return '';
    return String(item.schedule_id || item.id || item.scheduleId || '');
  }
  getScheduleDateString(item) {
    if (!item) return '';
    const raw = item.start_time || item.start_date || item.created_date || item.date;
    if (!raw) return '';
    const dt = new Date(raw);
    if (isNaN(dt.getTime())) return '';
    return this.formatDateToYYYYMMDD(dt);
  }
  formatDateToYYYYMMDD(dt) {
    const yyyy = dt.getFullYear();
    const mm = String(dt.getMonth() + 1).padStart(2, '0');
    const dd = String(dt.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }
  getScheduleTimeString(item) {
    if (!item) return '';
    const raw = item.start_time || item.start_date || item.created_date;
    if (!raw) return '';
    const dt = new Date(raw);
    if (isNaN(dt.getTime())) return '';
    return dt.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  }
  getScheduleDisplayLabel(item) {
    if (!item) return '';
    const testTitle = this.getTestTitle(item);
    const timeStr = this.getScheduleTimeString(item);
    const dept = item.department_name || item.department || item.target_group || item.title || '';
    const count = item.started_student_count ?? item.assigned_users?.length ?? 0;
    const status = item.has_attendance || count > 0 ? 'Completed' : 'Scheduled';
    let label = `${testTitle}`;
    if (dept && dept !== testTitle) {
      label += ` - ${dept}`;
    }
    if (timeStr) {
      label += ` - ${timeStr}`;
    }
    label += ` (${status}, ${count} Students)`;
    return label;
  }
  onSelectOpened(opened, field) {
    if (opened && field && this.searchQueries.hasOwnProperty(field)) {
      this.searchQueries[field] = '';
    }
  }
  onFilterSelectionChange() {
    // Draft filter state in panel; filters applied on click of Apply button
  }
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
  openCategoryQuestionSummary(category) {
    if (!category) return;
    const cid = String(category.category_id || category.id || category._id || category.categoryId || '');
    if (!cid) return;
    this.selectedCategoryFilterName = category.category_name || category.name || 'Selected Category';
    this.activeMainTabIndex = 0;
    this.questionCurrentPage = 1;
    if (this.questionSummary && this.questionSummary.length) {
      this.filteredQuestionSummary = (this.questionSummary || []).filter(q => this._getQuestionCategoryId(q) === cid);
      this.innerAnalyticsTabIndex = 1;
      return;
    }
    this._pendingCategoryFilter = cid;
    this.loadAnalytics();
  }
  clearCategoryFilter() {
    this.filteredQuestionSummary = [];
    this.selectedCategoryFilterName = '';
    this._pendingCategoryFilter = null;
    this.questionCurrentPage = 1;
  }
  openCreatedDateRangePicker() {
    const dialogRef = this.dialog.open(src_app_shared_components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_1__.DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.userFilters.created_after,
        endDate: this.userFilters.created_before
      }
    });
    dialogRef.afterClosed().subscribe(res => {
      if (res) {
        this.userFilters.created_after = res.startDate;
        this.userFilters.created_before = res.endDate;
      }
    });
  }
  getCreatedDateRangeDisplay() {
    const start = this.userFilters.created_after;
    const end = this.userFilters.created_before;
    if (!start && !end) return '';
    const format = d => {
      if (!d) return '';
      const dt = d instanceof Date ? d : new Date(d);
      if (isNaN(dt.getTime())) return '';
      const dd = String(dt.getDate()).padStart(2, '0');
      const mm = String(dt.getMonth() + 1).padStart(2, '0');
      const yyyy = dt.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };
    const startStr = format(start);
    const endStr = format(end);
    if (startStr && endStr) return `${startStr} - ${endStr}`;
    if (startStr) return `From ${startStr}`;
    if (endStr) return `Until ${endStr}`;
    return '';
  }
  // Robustly extract a category id from different question shapes.
  _getQuestionCategoryId(q) {
    if (!q) return '';
    const cat = q.category;
    if (cat && typeof cat === 'object') {
      return String(cat.id || cat._id || cat.category_id || cat.categoryId || cat.cat_id || '').trim();
    }
    if (Array.isArray(q.category_id) && q.category_id.length) return String(q.category_id[0]).trim();
    return String(q.category_id ?? q.category ?? q.categoryId ?? q.cat_id ?? q.catId ?? '').trim();
  }
  toMetricNumber(value) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }
  _normalizeSelectedOption(selected) {
    if (!selected && selected !== 0) return [];
    try {
      if (Array.isArray(selected)) {
        return selected.map(s => s !== null && s !== undefined ? String(s).trim() : '').filter(Boolean);
      }
      if (typeof selected === 'string') {
        try {
          const parsed = JSON.parse(selected);
          if (Array.isArray(parsed)) {
            return parsed.map(s => s !== null && s !== undefined ? String(s).trim() : '').filter(Boolean);
          }
        } catch (e) {}
        return selected.split(',').map(s => s.trim()).filter(Boolean);
      }
      return [String(selected)];
    } catch (e) {
      return [];
    }
  }
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
  openUserReview(row) {
    if (!row) return;
    this.currentReviewRow = row;
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
    if (!attemptId || q?._retryingEvaluation || attempt?._retryingEvaluation) return;
    attempt._retryingEvaluation = true;
    if (q) q._retryingEvaluation = true;
    this.http.post(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/validate-answers/${attemptId}`, {}).subscribe({
      next: res => {
        attempt._retryingEvaluation = false;
        if (q) q._retryingEvaluation = false;
        const message = res?.status === false ? res?.statusMessage || 'AI evaluation could not be completed.' : 'AI evaluation completed.';
        this._snack.open(message, 'Close', {
          duration: res?.status === false ? 5000 : 3000
        });
        if (this.currentReviewParams) this.fetchUserReview(this.currentReviewParams);
      },
      error: err => {
        attempt._retryingEvaluation = false;
        if (q) q._retryingEvaluation = false;
        const message = err?.error?.statusMessage || 'AI evaluation could not be completed.';
        this._snack.open(message, 'Close', {
          duration: 5000
        });
      }
    });
  }
  hasPendingEvaluation(attempt) {
    const questions = attempt?.review || attempt?.questions || [];
    return questions.some(q => (q.question_type || q.type) === 'descriptive' && (q.evaluation_status === 'pending' || q.evaluation_status === 'failed'));
  }
  fetchUserReview(params) {
    console.log('[fetchUserReview] Re-fetching review with params:', params);
    this.userReviewLoading = true;
    this.loading.show();
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/review-user-exam`, {
      params
    }).subscribe({
      next: res => {
        console.log('[fetchUserReview] Received review data response:', res);
        try {
          const body = res || {};
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
          this.userReviewAttempts = (attempts || []).map(a => {
            const reviewList = a.review || a.questions || a.attempt_review || [];
            const normalizedReview = (Array.isArray(reviewList) ? reviewList : []).map(q => {
              try {
                q.selected_option = this._normalizeSelectedOption(q.selected_option || q.selected_options || q.selected || []);
                if (!Array.isArray(q.options) && q.options && typeof q.options === 'object') {
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
          if (this.userReviewAttempts && this.userReviewAttempts.length) {
            const first = this.userReviewAttempts[0] || {};
            const fetchedScore = first.score ?? first.marks ?? first.marks_obtained;
            if (fetchedScore !== undefined && fetchedScore !== null) {
              this.selectedUserScore = fetchedScore;
              if (this.currentReviewRow) {
                this.currentReviewRow.marks_obtained = fetchedScore;
                this.currentReviewRow.score = fetchedScore;
                this.currentReviewRow.marks = fetchedScore;
              }
            }
            const fetchedResult = first.result ?? first.status ?? first.feedback;
            if (fetchedResult !== undefined && fetchedResult !== null && fetchedResult !== '') {
              this.selectedUserResult = fetchedResult;
              if (this.currentReviewRow) {
                this.currentReviewRow.result = fetchedResult;
                this.currentReviewRow.status = fetchedResult;
              }
            }
            if (first.total_marks !== undefined || first.totalMarks !== undefined || first.total !== undefined) {
              this.totalMarks = first.total_marks ?? first.totalMarks ?? first.total ?? this.totalMarks;
            }
            if (first.total_questions !== undefined || first.totalQuestions !== undefined) {
              this.totalQuestions = first.total_questions ?? first.totalQuestions ?? this.totalQuestions;
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
    this.currentReviewRow = null;
  }
  startEditMarks(q) {
    if (!q) return;
    q._editingMarks = true;
    q._editedMarks = q.marks_awarded ?? 0;
    q._marksEditReason = '';
    q._marksReasonTouched = false;
    q._marksReasonError = false;
  }
  cancelEditMarks(q) {
    if (!q) return;
    q._editingMarks = false;
    q._editedMarks = undefined;
    q._marksEditReason = undefined;
    q._marksReasonTouched = undefined;
    q._marksReasonError = false;
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
      q._marksReasonError = true;
      this._snack.open('Description is required when changing marks', 'Close', {
        duration: 3000
      });
      return;
    }
    q._marksReasonError = false;
    const answerID = q.answer_id || null;
    const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user') || sessionStorage.getItem('user_info') || localStorage.getItem('user_profile') || localStorage.getItem('user') || localStorage.getItem('user_info');
    let updatedBy = '';
    let updatedByName = 'Admin User';
    if (raw) {
      try {
        const u = JSON.parse(raw);
        updatedBy = u.user_id || u.id || u.userId || u._id || '';
        updatedByName = u.full_name || u.fullName || u.name || u.user_name || updatedBy || 'Admin User';
      } catch (e) {}
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
    console.log('[saveMarks] Triggered with item:', {
      question_id: q.question_id,
      answer_id: answerID,
      editedMarks: newMarks,
      reason: editReason
    });
    const payload = {
      answer_id: String(answerID),
      marks_awarded: newMarks,
      updated_by: updatedBy,
      edit_reason: editReason
    };
    console.log('[saveMarks] Sending payload to /update-descriptive-marks:', payload);
    this.loading.show();
    this.http.post(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/update-descriptive-marks`, payload).subscribe({
      next: res => {
        console.log('[saveMarks] Backend responded SUCCESS:', res);
        this.loading.hide();
        const oldMarks = q.marks_awarded || 0;
        const oldReason = q.edit_reason || '';
        q.marks_history = Array.isArray(q.marks_history) ? q.marks_history : [];
        q.marks_history.unshift({
          marks_awarded: oldMarks,
          updated_by: q.updated_by || 'System',
          updated_date: q.updated_date,
          edit_reason: oldReason
        });
        q.marks_awarded = newMarks;
        q.updated_by = updatedByName;
        q.updated_date = new Date().toISOString();
        q.edit_reason = editReason;
        q._editingMarks = false;
        q._editedMarks = undefined;
        q._marksEditReason = undefined;
        q._marksReasonTouched = undefined;
        if (this.selectedUserScore !== null && typeof this.selectedUserScore === 'number') {
          this.selectedUserScore = this.selectedUserScore - oldMarks + newMarks;
        }
        this._snack.open('Marks updated successfully', 'Close', {
          duration: 3000
        });
        if (this.currentReviewParams) {
          this.fetchUserReview(this.currentReviewParams);
        }
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
  startEditComment(rc) {
    if (!rc) return;
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
    this.commentEdit = !!this.userReviewAttempts?.some(att => (att.review || []).some(q => (q.review_comment?.comments || []).some(c => c._editing)));
  }
  isCommentEdited(c) {
    if (!c) return false;
    if (c._isEdited) return true;
    if (c.action === 'edit') return true;
    if (c.edited_by && (c.edited_at || c.updated_date)) return true;
    return false;
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
    const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user') || sessionStorage.getItem('user_info');
    let userName = 'Admin User';
    if (raw) {
      try {
        const u = JSON.parse(raw);
        userName = u.full_name || u.fullName || u.name || u.user_name || 'Admin User';
      } catch (e) {}
    }
    rc.comment_text = newText;
    rc.updated_by = userName;
    rc.edited_by = userName;
    rc.updated_date = new Date().toISOString();
    rc.edited_at = new Date().toISOString();
    rc.action = 'edit';
    rc._isEdited = true;
    rc._editing = false;
    this.updateReviewComment('edit', rc, newText, '');
  }
  requiresEditReason(rc) {
    return false;
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
    const raw = sessionStorage.getItem('user_profile') || sessionStorage.getItem('user') || sessionStorage.getItem('user_info');
    const historyId = rc.history_id || rc.hid || rc._hid || null;
    let userId = '';
    let userName = 'Instructor';
    if (raw) {
      const u = JSON.parse(raw);
      userId = u.user_id || u.id || u.userId || u._id || '';
      userName = u.full_name || u.fullName || u.name || u.user_name || userId || 'Instructor';
    }
    this.updatedBy = userId;
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
        this._snack.open(action === 'edit' ? 'Comment updated' : 'Comment deleted', 'Close', {
          duration: 3000
        });
        if (this.currentReviewParams) {
          this.fetchUserReview(this.currentReviewParams);
        }
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
  applyFiltersPanel() {
    if (!this.selectedInstituteId && !this.userFilters.institute_id) {
      this._snack.open('Please select an Institute first', 'Close', {
        duration: 3000
      });
      return;
    }
    if (!this.userFilters.schedule_id && !this.selectedExam) {
      this._snack.open('Please select a Test Name to view reports', 'Close', {
        duration: 3000
      });
      return;
    }
    if (!this.isGlobalInstituteActive && this.userFilters.institute_id) {
      if (this.selectedInstituteId !== this.userFilters.institute_id) {
        this.selectedInstituteId = this.userFilters.institute_id;
        const found = this.institutes.find(i => i.id === this.selectedInstituteId);
        if (found) {
          try {
            this.instituteCtrl.setValue(found);
          } catch (e) {}
        }
        try {
          this.loadDepartmentList(this.selectedInstituteId);
        } catch (e) {}
        try {
          this.loadTeamsList(this.selectedInstituteId);
        } catch (e) {}
        try {
          this.loadCampusList(this.selectedInstituteId);
        } catch (e) {}
      }
    }
    this.loadScheduledTest();
    if (this.userFilters.schedule_id) {
      const selectedTest = (this.allTests || []).find(t => String(t.schedule_id || t.id || t.scheduleId) === String(this.userFilters.schedule_id));
      if (selectedTest) {
        this.selectedExam = selectedTest;
        try {
          this.examCtrl.setValue(selectedTest);
        } catch (e) {}
      }
    }
    if (this.selectedExam) {
      if (this.activeMainTabIndex === 0) {
        this.loadAnalytics();
      } else {
        this.loadUserReport(1);
      }
    }
    this.closeFiltersOverlay();
  }
  refreshTestReports() {
    this.selectedExam = null;
    this.selectedInstitutes = []; // <-- Clear selected institute dropdown array
    this.instituteFilterSearch = '';
    this.departmentFilterSearch = '';
    this.teamFilterSearch = '';
    if (!this.isGlobalInstituteActive) {
      this.selectedInstituteId = null;
      this.userFilters.institute_id = '';
      try {
        this.instituteCtrl.setValue(null);
      } catch (e) {}
    } else {
      this.userFilters.institute_id = this.globalContextService.activeInstituteId || '';
      if (this.globalContextService.activeInstituteId) {
        this.selectedInstitutes = [this.globalContextService.activeInstituteId];
      }
    }
    // Reset all filter controls
    this.userFilters.country_id = '';
    this.userFilters.city_id = '';
    this.userFilters.industry = '';
    this.userFilters.sector = '';
    this.userFilters.campus_id = '';
    this.userFilters.department_id = [];
    this.userFilters.teams_id = [];
    this.userFilters.schedule_id = '';
    this.userFilters.active_status = '';
    this.userFilters.created_after = null;
    this.userFilters.created_before = null;
    this.userFilters.created_by_me = false;
    this.userFilters.joined_after = null;
    this.userFilters.joined_before = null;
    Object.keys(this.searchQueries).forEach(k => this.searchQueries[k] = '');
    try {
      this.examCtrl.setValue(null);
    } catch (e) {}
    // Reset scheduled tests list and report tables
    this.allTests = [];
    this.uniqueTestNames = [];
    this.selectedTestTitle = '';
    this.selectedScheduleDate = null;
    this.highlightedDatesSet.clear();
    this.availableSchedulesOnDate = [];
    this.selectedScheduleId = '';
    this.scheduledTestsMessage = '';
    this.reportsApplied = false;
    this.appliedFilters = null;
    this.userReportData = [];
    this.userReportTotal = 0;
    this.categoryAnalytics = [];
    this.questionSummary = [];
    this.wrongDistribution = [];
  }
  resetFiltersAndReload() {
    this.refreshTestReports();
    this.closeFiltersOverlay();
  }
  onTestFilterSelected(val) {
    if (!val) {
      this.userFilters.schedule_id = '';
      this.searchQueries.schedule = '';
    } else if (typeof val === 'object') {
      this.userFilters.schedule_id = String(val.schedule_id || val.id || val.scheduleId || '');
      this.searchQueries.schedule = '';
    } else {
      this.userFilters.schedule_id = String(val);
      this.searchQueries.schedule = '';
    }
  }
  onTestAutocompleteSelected(exam) {
    this.selectedExam = exam;
    if (exam) {
      this.userFilters.schedule_id = String(exam.schedule_id || exam.id || exam.scheduleId || '');
    }
    this.questionCurrentPage = 1;
    if (this.activeMainTabIndex === 0) {
      this.loadAnalytics();
    } else if (this.activeMainTabIndex === 1) {
      this.loadUserReport(1);
    }
  }
  closeUserFilter() {
    this.userFilterOpen = false;
  }
  loadInstitutes() {
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/institutes/list`;
    const params = {};
    if (this.selectedCountries && this.selectedCountries.length) {
      params.country = this.selectedCountries.join(',');
    } else if (this.userFilters.country_id) {
      params.country = this.userFilters.country_id;
    }
    if (this.selectedCities && this.selectedCities.length) {
      params.city = this.selectedCities.join(',');
    } else if (this.userFilters.city_id) {
      params.city = this.userFilters.city_id;
    }
    if (this.userFilters.industry) params.industry = this.userFilters.industry;
    if (this.userFilters.sector) params.sector = this.userFilters.sector;
    this.http.get(url, {
      params
    }).subscribe({
      next: res => {
        const list = Array.isArray(res) ? res : res?.institutes || res?.data || [];
        this.institutes = (list || []).map(i => ({
          id: String(i.id || i.institute_id || i._id || ''),
          name: i.name || i.institute || 'Institute',
          industry_type: i.industry_type || i.industry || i.industry_name || '',
          industry_sector: i.industry_sector || i.sector || i.sector_name || ''
        })).filter(i => !!i.id);
        const available = this.filteredInstitutesList;
        if (this.userFilters.institute_id && !available.some(i => String(i.id) === String(this.userFilters.institute_id))) {
          this.onInstituteChange('');
        }
        try {
          this.filteredInstitutes$ = this.instituteCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(val => {
            const q = (typeof val === 'string' ? val : val?.name || '').toLowerCase();
            return (this.filteredInstitutesList || []).filter(it => (it.name || '').toLowerCase().includes(q));
          }));
        } catch (e) {
          this.filteredInstitutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.filteredInstitutesList || []);
        }
        const globalInstId = this.globalContextService.activeInstituteId;
        const userInstId = this.auth.currentUserValue?.institute_id || sessionStorage.getItem('global_institute_id') || sessionStorage.getItem('institute_id') || sessionStorage.getItem('instituteId') || localStorage.getItem('institute_id');
        if (globalInstId) {
          this.isGlobalInstituteActive = true;
          this.selectedInstituteId = String(globalInstId);
          this.userFilters.institute_id = String(globalInstId);
          this.onInstituteChange(String(globalInstId));
        } else if (!this.isSuperAdmin) {
          const defaultInstId = userInstId ? String(userInstId) : this.institutes && this.institutes.length > 0 ? this.institutes[0].id : '';
          if (defaultInstId) {
            this.selectedInstituteId = defaultInstId;
            this.userFilters.institute_id = defaultInstId;
            this.onInstituteChange(defaultInstId);
          }
        } else if (this.userFilters.institute_id) {
          this.selectedInstituteId = this.userFilters.institute_id;
          this.onInstituteChange(this.userFilters.institute_id);
        } else if (!this.userFilters.institute_id) {
          this.isGlobalInstituteActive = false;
          this.selectedInstituteId = null;
        }
        if (this.selectedInstituteId) {
          const selected = this.institutes.find(i => i.id === this.selectedInstituteId);
          if (selected) {
            try {
              this.instituteCtrl.setValue(selected);
            } catch (e) {}
          }
        }
      },
      error: err => console.warn('Failed to load institutes', err)
    });
  }
  onInstituteSelected(inst) {
    if (!inst) return;
    this.selectedInstituteId = inst.id;
    this.userFilters.institute_id = inst.id;
    this.resetSelectedExam();
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
    if (id) {
      this.userFilters.institute_id = id;
    } else {
      this.userFilters.institute_id = '';
      if (!this.userFilters.campus_id) {
        this.userFilters.department_id = [];
        this.userFilters.teams_id = [];
      }
    }
    this.resetSelectedExam();
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
    this.countries = [];
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/location-hierarchy`).subscribe({
      next: locRes => {
        const locationCountries = locRes?.data?.countries || locRes?.countries || locRes?.data || [];
        this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-institutes`).subscribe({
          next: instRes => {
            try {
              const institutes = Array.isArray(instRes?.data) ? instRes.data : Array.isArray(instRes) ? instRes : [];
              const hierarchyCountries = (locationCountries || []).map(country => ({
                code: country.country_code || country.code || country.id,
                name: country.country_name || country.name || country.country
              })).filter(country => country.code && country.name);
              const registeredCountries = [];
              institutes.forEach(institute => {
                const locations = [institute, ...(Array.isArray(institute?.campuses) ? institute.campuses : [])];
                locations.forEach(location => {
                  const rawCountry = location?.country;
                  const countryCode = location?.country_id || location?.country_code || (typeof rawCountry === 'object' ? rawCountry?.country_id || rawCountry?.id || rawCountry?.country_code || rawCountry?.code : rawCountry);
                  const countryName = location?.country_name || (typeof rawCountry === 'object' ? rawCountry?.country_name || rawCountry?.name || rawCountry?.country : rawCountry);
                  const hierarchyMatch = hierarchyCountries.find(country => countryCode && String(country.code).toLowerCase() === String(countryCode).toLowerCase() || countryName && String(country.name).trim().toLowerCase() === String(countryName).trim().toLowerCase());
                  const resolved = hierarchyMatch || (countryCode && countryName ? {
                    code: countryCode,
                    name: countryName
                  } : null);
                  if (resolved) registeredCountries.push({
                    code: String(resolved.code),
                    name: String(resolved.name).trim()
                  });
                });
              });
              const uniqueByName = new Map();
              registeredCountries.forEach(country => {
                const key = country.name.toLowerCase();
                if (!uniqueByName.has(key)) uniqueByName.set(key, country);
              });
              this.countries = Array.from(uniqueByName.values()).sort((a, b) => a.name.localeCompare(b.name));
            } catch (e) {
              this.countries = [];
            }
          },
          error: () => {
            this.countries = [];
          }
        });
      },
      error: () => {
        this.countries = [];
      }
    });
  }
  onCountryChange() {
    this.cities = [];
    this.selectedCities = [];
    this.userFilters.city_id = '';
    const selectedCountryCodes = this.selectedCountries && this.selectedCountries.length ? this.selectedCountries : this.userFilters.country_id ? [this.userFilters.country_id] : [];
    if (!selectedCountryCodes.length) {
      this.loadInstitutes();
      return;
    }
    const toTitleCase = str => str ? str.trim().replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase()) : '';
    const requests = selectedCountryCodes.map(code => this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/location-hierarchy`, {
      params: {
        country_id: code
      }
    }));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_12__.forkJoin)(requests).subscribe({
      next: responses => {
        const uniqueMap = new Map();
        responses.forEach(res => {
          let rawCities = res?.data?.cities || res?.cities || [];
          (rawCities || []).forEach(c => {
            const rawName = c.city_name || c.name || c.city || '';
            if (rawName) {
              const formatted = toTitleCase(rawName);
              if (!uniqueMap.has(formatted.toLowerCase())) {
                uniqueMap.set(formatted.toLowerCase(), {
                  code: formatted,
                  name: formatted
                });
              }
            }
          });
        });
        this.cities = Array.from(uniqueMap.values()).sort((a, b) => a.name.localeCompare(b.name));
        this.loadInstitutes();
      },
      error: () => {
        this.cities = [];
        this.loadInstitutes();
      }
    });
  }
  get filteredCities() {
    const term = (this.citySearch || '').trim().toLowerCase();
    let list = this.cities || [];
    if (term) {
      list = list.filter(c => (c.name || '').toLowerCase().includes(term) || (this.selectedCities || []).includes(c.name));
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedCities || []).includes(a.name);
      const bSel = (this.selectedCities || []).includes(b.name);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }
  isAllCitiesSelected() {
    const items = this.filteredCities || [];
    return items.length > 0 && items.every(c => (this.selectedCities || []).includes(c.name));
  }
  toggleSelectAllCities() {
    const items = this.filteredCities || [];
    if (this.isAllCitiesSelected()) {
      this.selectedCities = [];
    } else {
      this.selectedCities = items.map(c => c.name);
    }
    this.onCityFilterChange();
  }
  onCityFilterChange() {
    this.loadInstitutes();
  }
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
  resetSelectedExam() {
    this.selectedExam = null;
    this.examCtrl.setValue('');
    this.allTests = [];
    this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
    this.userReportData = [];
    this.userReportTotal = 0;
    this.categoryAnalytics = [];
    this.questionSummary = [];
    this.wrongDistribution = [];
  }
  loadScheduledTest() {
    const instituteId = String(this.selectedInstituteId || '').trim();
    if (!instituteId) {
      this.resetSelectedExam();
      this.scheduledTestsMessage = 'Select an institute to load scheduled tests.';
      return;
    }
    const requestId = ++this.scheduledTestsRequestId;
    const url = `${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-exam-schedule-details`;
    this.scheduledTestsLoading = true;
    this.scheduledTestsMessage = '';
    this.loading.show();
    const params = {
      institute_id: instituteId,
      country_id: this.userFilters.country_id || '',
      city_id: this.userFilters.city_id || '',
      campus_id: this.userFilters.campus_id || ''
    };
    if (this.userFilters.industry) params.industry = this.userFilters.industry;
    if (this.userFilters.sector) params.sector = this.userFilters.sector;
    if (Array.isArray(this.userFilters.department_id) && this.userFilters.department_id.length) {
      params.department_id = this.userFilters.department_id.join(',');
    }
    if (Array.isArray(this.userFilters.teams_id) && this.userFilters.teams_id.length) {
      params.team_id = this.userFilters.teams_id.join(',');
    }
    this.http.get(url, {
      params
    }).subscribe({
      next: res => {
        if (requestId !== this.scheduledTestsRequestId || instituteId !== this.selectedInstituteId) return;
        try {
          const items = Array.isArray(res) ? res : res?.data || res?.schedules || [];
          this.allTests = items || [];
          this.updateUniqueTestNames();
          this.scheduledTestsMessage = this.allTests.length ? '' : 'No scheduled tests found for this institute.';
          try {
            this.filteredTests$ = this.examCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)(val => {
              const q = (typeof val === 'string' ? val : this.getTestTitle(val)).toLowerCase();
              return (this.allTests || []).filter(it => this.getTestTitle(it).toLowerCase().includes(q));
            }));
          } catch (e) {
            this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(this.allTests || []);
          }
        } catch (e) {
          this.allTests = [];
          this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
          this.scheduledTestsMessage = 'Unable to read the scheduled tests response.';
          console.warn('Failed to load schedules', e);
        }
        this.scheduledTestsLoading = false;
        try {
          this.loading.hide();
        } catch (e) {}
      },
      error: err => {
        if (requestId !== this.scheduledTestsRequestId || instituteId !== this.selectedInstituteId) return;
        this.allTests = [];
        this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
        this.scheduledTestsLoading = false;
        this.scheduledTestsMessage = err?.status === 404 ? 'No scheduled tests found for this institute.' : err?.error?.statusMessage || 'Scheduled tests could not be loaded. Use Refresh to try again.';
        if (err?.status !== 404) this._snack.open(this.scheduledTestsMessage, 'Close', {
          duration: 5000
        });
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
    try {
      this.loadCountries();
    } catch (e) {}
    try {
      const sub = this.globalContextService.activeInstitute$.subscribe(context => {
        if (context && context.institute_id) {
          this.isGlobalInstituteActive = true;
          this.selectedInstituteId = context.institute_id;
          this.userFilters.institute_id = context.institute_id;
          const found = this.institutes.find(i => i.id === context.institute_id) || {
            id: context.institute_id,
            name: context.institute_name
          };
          try {
            this.instituteCtrl.setValue(found);
          } catch (e) {}
          this.onInstituteChange(context.institute_id);
        } else {
          this.isGlobalInstituteActive = false;
        }
      });
      if (!this._subs) {
        this._subs = sub;
      } else {
        this._subs.add(sub);
      }
    } catch (e) {}
  }
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
      this.filtersOverlayRef = null;
    }
    this.userFilters.institute_id = this.selectedInstituteId || '';
    if (this.selectedExam) {
      this.userFilters.schedule_id = String(this.selectedExam.schedule_id || this.selectedExam.id || this.selectedExam.scheduleId || '');
    }
    Object.keys(this.searchQueries).forEach(k => {
      this.searchQueries[k] = '';
    });
    const targetEl = this.filtersBtn?.nativeElement || this.filtersBtn?._elementRef?.nativeElement || this.filtersBtn;
    const positionStrategy = this.overlay.position().flexibleConnectedTo(targetEl).withPositions([{
      originX: 'end',
      originY: 'bottom',
      overlayX: 'end',
      overlayY: 'top',
      offsetY: 8
    }, {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
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
    const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__.TemplatePortal(this.filtersPanelTpl, this.vcr);
    this.filtersOverlayRef.attach(portal);
  }
  closeFiltersOverlay() {
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (e) {}
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
    if (!this.selectedExam) {
      return;
    }
    if (idx === 0) {
      this.loadAnalytics();
    } else if (idx === 1) {
      this.loadUserReport(1);
    }
  }
  loadUserReport(page = 1) {
    if (!this.selectedExam) return;
    this.currentPage = page || 1;
    const scheduleId = String(this.selectedExam.schedule_id || this.selectedExam.id || this.selectedExam.scheduleId || '');
    const params = {
      schedule_id: scheduleId,
      page: String(this.currentPage),
      page_size: String(this.pageSize)
    };
    if (this.searchQuery) params.q = this.searchQuery;
    if (this.userFilters.country_id) params.country_id = this.userFilters.country_id;
    if (this.userFilters.city_id) params.city_id = this.userFilters.city_id;
    if (this.userFilters.campus_id) params.campus_id = this.userFilters.campus_id;
    if (Array.isArray(this.userFilters.department_id) && this.userFilters.department_id.length) {
      params.department_id = this.userFilters.department_id.join(',');
    } else if (typeof this.userFilters.department_id === 'string' && this.userFilters.department_id) {
      params.department_id = this.userFilters.department_id;
    }
    if (Array.isArray(this.userFilters.teams_id) && this.userFilters.teams_id.length) {
      params.team_id = this.userFilters.teams_id.join(',');
    } else if (typeof this.userFilters.teams_id === 'string' && this.userFilters.teams_id) {
      params.team_id = this.userFilters.teams_id;
    }
    if (this.userFilters.active_status) params.active_status = this.userFilters.active_status;
    const afterDate = this.userFilters.created_after || this.userFilters.joined_after;
    if (afterDate) params.created_after = afterDate instanceof Date ? afterDate.toISOString() : afterDate;
    const beforeDate = this.userFilters.created_before || this.userFilters.joined_before;
    if (beforeDate) params.created_before = beforeDate instanceof Date ? beforeDate.toISOString() : beforeDate;
    if (this.userFilters.created_by_me) params.created_by_me = 'true';
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
          const payload = body.data || body;
          if (payload && Array.isArray(payload.items)) {
            this.userReportData = payload.items;
            this.userReportTotal = Number(payload.total ?? payload.count ?? (payload.items || []).length);
          } else if (Array.isArray(payload)) {
            this.userReportData = payload;
            this.userReportTotal = this.userReportData.length;
          } else {
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
  get questionTotalPages() {
    return Math.ceil(this.activeQuestionCount / this.questionPageSize) || 1;
  }
  get paginatedQuestionSummary() {
    const list = this.filteredQuestionSummary && this.filteredQuestionSummary.length ? this.filteredQuestionSummary : this.questionSummary || [];
    const startIndex = (this.questionCurrentPage - 1) * this.questionPageSize;
    return list.slice(startIndex, startIndex + this.questionPageSize);
  }
  prevQuestionPage() {
    if (this.questionCurrentPage > 1) this.questionCurrentPage--;
  }
  nextQuestionPage() {
    if (this.questionCurrentPage < this.questionTotalPages) this.questionCurrentPage++;
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
          this.questionCurrentPage = 1;
          if (this._pendingCategoryFilter) {
            const cid = String(this._pendingCategoryFilter);
            this.filteredQuestionSummary = (this.questionSummary || []).filter(q => this._getQuestionCategoryId(q) === cid).map((q, idx) => ({
              ...q,
              sno: idx + 1
            }));
            this._pendingCategoryFilter = null;
            try {
              this.activeMainTabIndex = 0;
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
  openWrongAnswerSummary(question) {
    if (!question) return;
    this.selectedQuestionForWrongSummary = question;
    const qid = question.id || question.question_id || question.sno || question.qid || null;
    let entries = [];
    try {
      if (Array.isArray(this.wrongDistribution) && this.wrongDistribution.length) {
        const byQ = this.wrongDistribution.find(d => String(d.question_id || d.qid || d.id || d.sno || '') === String(qid));
        if (byQ) {
          entries = byQ.wrong_answers || byQ.wrong || byQ.answers || byQ.distribution || [];
        } else {
          entries = (this.wrongDistribution || []).filter(d => String(d.question_id || d.qid || d.schedule_question_id || '') === String(qid));
        }
      }
    } catch (e) {
      entries = [];
    }
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
            this.showWrongAnswerSummary = true;
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
  openResourcesForWrongAnswer(question, wa) {
    if (!question || !wa) return;
    this.selectedResourceContext = {
      question,
      wa
    };
    this.selectedResources = [];
    const params = {
      schedule_id: String(this.selectedExam?.schedule_id || this.selectedExam?.id || '')
    };
    if (wa.option_id) params.option_id = wa.option_id;else if (wa.optionId) params.option_id = wa.optionId;
    if (wa.answer_id) params.answer_id = wa.answer_id;else if (wa.answerId) params.answer_id = wa.answerId;
    if (wa.answer && typeof wa.answer === 'string' && !params.answer_id) {
      params.answer_value = wa.answer;
    }
    if (!params.question_id) params.question_id = String(question.question_id || question.id || question.qid || '');
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/get-answer-resources`, {
      params
    }).subscribe({
      next: res => {
        const body = res || {};
        const payload = body.data || body;
        if (Array.isArray(payload)) this.selectedResources = payload;else if (Array.isArray(body.data)) this.selectedResources = body.data;else if (Array.isArray(payload.resources)) this.selectedResources = payload.resources;else if (Array.isArray(body.data?.data)) this.selectedResources = body.data.data;else this.selectedResources = payload || [];
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
  formatDate(dateLike) {
    if (!dateLike) return '';
    try {
      const dateStr = String(dateLike).replace(/^On\s+/i, '').trim();
      if (typeof dateLike === 'string' && (dateLike.includes('GMT') || dateLike.includes('UTC'))) {
        return dateLike.replace(/^On\s+/i, '').replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST').trim();
      }
      const d = dateLike instanceof Date ? dateLike : new Date(dateLike);
      if (isNaN(d.getTime())) {
        return dateStr.replace(/^On\s+/i, '').replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST').trim();
      }
      const formatter = new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata'
      });
      const parts = formatter.formatToParts(d);
      const getPart = type => parts.find(p => p.type === type)?.value || '';
      const day = getPart('day');
      const month = getPart('month');
      const year = getPart('year');
      const hour = getPart('hour');
      const min = getPart('minute');
      return `${day}-${month}-${year} ${hour}:${min} IST`;
    } catch (e) {
      return String(dateLike || '').replace(/^On\s+/i, '').replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST').trim();
    }
  }
  toTitleCase(str) {
    if (!str) return '';
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
  static {
    this.ɵfac = function ExamReportsComponent_Factory(t) {
      return new (t || ExamReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_page_meta_service__WEBPACK_IMPORTED_MODULE_3__.PageMetaService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_16__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_confirm_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_5__.GlobalInstituteContextService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_home_service_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: ExamReportsComponent,
      selectors: [["app-exam-reports"]],
      viewQuery: function ExamReportsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filtersBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.filtersPanelTpl = _t.first);
        }
      },
      decls: 67,
      vars: 25,
      consts: [[1, "page", "exam-reports"], [1, "toolbar"], [1, "selections"], ["appearance", "outline", 1, "local-institute-field", "disabled-toolbar-field", "mandatory-field"], [1, "required-mark"], ["matPrefix", "", "svgIcon", "institute"], ["matInput", "", "disabled", "", "placeholder", "Institute Name", "aria-label", "Institute", 3, "value"], ["appearance", "outline", 1, "scheduled-test-field", "disabled-toolbar-field", "mandatory-field"], ["matPrefix", "", "svgIcon", "exam"], ["matInput", "", "disabled", "", "aria-label", "Test", 3, "value", "placeholder"], [1, "controls"], [1, "action-row"], ["mat-flat-button", "", "type", "button", "title", "Refresh & Clear Filters", 1, "refresh-icon-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", 1, "refresh-svg-icon"], ["d", "M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"], ["mat-flat-button", "", "type", "button", 1, "button-one", 3, "click"], ["filtersBtn", ""], ["svgIcon", "filter"], ["filtersPanel", ""], [1, "test-schedule-selection-card"], [1, "selection-card-header"], [1, "selection-card-title"], ["class", "selection-step-hint", 4, "ngIf"], [1, "selection-fields-grid"], ["appearance", "outline", 1, "selection-field"], ["placeholder", "Select Test", 3, "ngModel", "disabled", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["matInput", "", "placeholder", "Select Date", "readonly", "", 3, "matDatepicker", "ngModel", "disabled", "dateChange"], ["matSuffix", "", 3, "for", "disabled"], [3, "dateClass"], ["scheduleDatePicker", ""], ["placeholder", "Select Schedule", 3, "ngModel", "disabled", "selectionChange"], ["class", "applied-filters-bar", 4, "ngIf"], ["class", "empty-reports-state", 4, "ngIf"], ["class", "list-card", 4, "ngIf"], ["class", "wrong-summary-backdrop", 3, "click", 4, "ngIf"], [1, "filters-panel", "view-questions-filters-panel", 3, "click"], [1, "filters-panel-header"], [1, "filter-block", "filter-grid"], ["class", "filter-col-full", 4, "ngIf"], ["class", "filter-col-full filter-row-two-col", 4, "ngIf"], [1, "filter-col-full", "filter-row-two-col"], ["appearance", "outline", 1, "filter-item"], ["name", "filterDepartment", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", "select-search-option--multi", 3, "click"], ["matInput", "", "placeholder", "Search department...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["class", "select-all-option", 3, "click", 4, "ngIf"], ["name", "filterTeam", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search team...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [1, "filter-col-full"], ["name", "filterCampus", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", 3, "click"], ["matInput", "", "placeholder", "Search campus...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["value", ""], ["appearance", "outline", 1, "filter-item", "mandatory-field"], ["name", "filterTestName", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search test name...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["disabled", "", 4, "ngIf"], ["appearance", "outline", 1, "filter-item", "date-range-field", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Select date range", 2, "cursor", "pointer", 3, "value"], ["matSuffix", "", 2, "cursor", "pointer", "color", "#0284c7"], ["name", "filterActiveStatus", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search status...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [1, "filter-checks"], [1, "checkbox-item"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "filter-actions"], ["mat-flat-button", "", 1, "filter-apply-btn", 3, "click"], ["svgIcon", "apply"], ["mat-flat-button", "", 1, "filter-reset-btn", 3, "click"], ["svgIcon", "refresh"], ["name", "filterInstitute", "placeholder", "Select institute", 3, "ngModel", "ngModelChange", "selectionChange"], ["matInput", "", "placeholder", "Search institute...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [3, "value"], ["multiple", "", "placeholder", "Select Country", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search country", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["multiple", "", "placeholder", "Select City", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search city", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [1, "select-all-option", 3, "click"], [1, "select-all-checkbox-icon"], ["disabled", ""], ["name", "filterIndustry", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search industry...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterSector", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search sector...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [1, "selection-step-hint"], [1, "schedule-option-item"], [1, "sched-title-text"], [1, "applied-filters-bar"], [1, "applied-filters-header"], [1, "filter-icon"], [1, "filter-title"], [1, "applied-chips-wrapper"], ["class", "filter-chip", 4, "ngIf"], ["mat-button", "", "type", "button", "title", "Reset & Clear all filters", 1, "clear-filters-btn", 3, "click"], [1, "filter-chip"], [1, "chip-label"], [1, "empty-reports-state"], [1, "empty-state-card"], [1, "empty-state-icon"], [1, "empty-state-title"], ["class", "empty-state-description", 4, "ngIf"], ["mat-flat-button", "", "type", "button", 1, "button-one", "empty-action-btn", 3, "click"], [1, "empty-state-description"], [1, "list-card"], [1, "list-wrapper"], [1, "exam-tabs", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["mat-tab-label", ""], [1, "analytics-section"], [1, "report-summary-grid", "analytics-summary-grid"], [1, "summary-card"], [1, "summary-icon", "summary-icon--categories"], [1, "summary-copy"], [1, "summary-label"], [1, "summary-value"], [1, "summary-meta"], [1, "summary-icon", "summary-icon--questions"], [1, "summary-icon", "summary-icon--attempts"], [1, "summary-icon", "summary-icon--mistakes"], [1, "inner-analytics-tabs", 3, "selectedIndex", "selectedIndexChange"], ["label", "Question Bank Report"], [1, "analytics-tab-body"], [1, "table-wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", "compact", "premium-table", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-primary", 4, "matCellDef"], ["matColumnDef", "questions"], ["mat-cell", "", "class", "cell-num", 4, "matCellDef"], ["matColumnDef", "users_attempted"], ["matColumnDef", "total_attempts"], ["matColumnDef", "mistakes"], ["matColumnDef", "error_pct"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Question Summary"], ["class", "category-filter-banner", 4, "ngIf"], [1, "table-wrap", "question-summary-wrap"], ["matColumnDef", "sno"], ["matColumnDef", "question"], ["mat-cell", "", "class", "question-text-cell", 4, "matCellDef"], ["matColumnDef", "attempts"], [1, "pager"], ["mat-button", "", 3, "disabled", "click"], ["class", "analytics-table-footer", 4, "ngIf"], [1, "report-summary-grid"], [1, "summary-icon", "summary-icon--students"], [1, "summary-icon", "summary-icon--page"], [1, "summary-icon", "summary-icon--score"], [1, "summary-icon", "summary-icon--pass"], [1, "tab-actions"], [1, "search"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by student name", "aria-label", "Search by student name", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["class", "table-wrap", 4, "ngIf"], ["class", "loader-placeholder", 4, "ngIf"], [1, "tab-label-icon"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-primary"], ["title", "Click to view question summary for this category", 1, "category-cell", 3, "click"], [1, "category-avatar"], [1, "student-name"], ["mat-cell", "", 1, "cell-num"], ["mat-cell", ""], [1, "pct-badge", 3, "ngClass"], ["mat-header-row", ""], ["mat-row", ""], [1, "category-filter-banner"], [1, "banner-text"], ["mat-button", "", "type", "button", 1, "clear-filter-btn", 3, "click"], [1, "cell-mono"], ["mat-cell", "", 1, "question-text-cell"], ["href", "javascript:void(0)", "class", "wrong-summary-link mistakes-pill", 3, "click", 4, "ngIf", "ngIfElse"], ["noMistakes", ""], ["href", "javascript:void(0)", 1, "wrong-summary-link", "mistakes-pill", 3, "click"], [1, "cell-muted"], [1, "analytics-table-footer"], ["matColumnDef", "student_name"], ["matColumnDef", "questions_attempted"], ["matColumnDef", "correct_answers"], ["matColumnDef", "wrong_answers"], ["matColumnDef", "result"], [1, "student-cell", 3, "click"], [1, "student-avatar"], [1, "marks-inline"], [1, "marks-sep"], [1, "pct-badge"], [1, "review-status"], [1, "result-pill"], [1, "loader-placeholder"], [1, "wrong-summary-backdrop", 3, "click"], [1, "wrong-summary-panel", "user-review-panel", 3, "click"], [1, "card"], [1, "panel-header"], [1, "header-icon"], [1, "header-info"], [1, "score"], [1, "result", 3, "ngClass"], ["mat-icon-button", "", "aria-label", "Close answer sheet", "type", "button", 1, "review-close-btn", 3, "click"], ["aria-hidden", "true"], [1, "panel-body"], ["class", "muted", 4, "ngIf"], [1, "summary-actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "muted"], [4, "ngIf", "ngIfElse"], ["noUserReview", ""], [4, "ngFor", "ngForOf"], ["class", "q-evaluation-state pending attempt-level-banner", "style", "margin-bottom: 16px; border-radius: 8px", 4, "ngIf"], [1, "questions-list"], ["class", "question-review-card", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "pending", "attempt-level-banner", 2, "margin-bottom", "16px", "border-radius", "8px"], ["type", "button", 1, "retry-evaluation-btn", 3, "disabled", "click"], [1, "question-review-card"], [1, "q-head-row"], [1, "q-left"], [1, "q-index"], [1, "q-body"], [1, "q-meta"], [1, "q-badge"], ["class", "q-info", 4, "ngIf"], [1, "q-text"], [1, "q-right"], ["class", "marks-container", 4, "ngIf"], ["class", "q-marks small-muted", 3, "ngClass", 4, "ngIf"], ["class", "q-fill", 4, "ngIf"], ["class", "q-descriptive", 4, "ngIf"], ["class", "q-options two-col", 4, "ngIf"], [1, "q-info"], ["svgIcon", "brain"], ["type", "button", "class", "manual-check-chip", 3, "selected", "title", "click", 4, "ngIf"], ["type", "button", 1, "manual-check-chip", 3, "title", "click"], [1, "marks-container"], ["class", "marks-display", "aria-label", "Marks awarded", 4, "ngIf"], ["class", "marks-edit", 4, "ngIf"], ["aria-label", "Marks awarded", 1, "marks-display"], [1, "q-marks", "small-muted", 3, "ngClass"], [1, "marks-divider"], ["mat-icon-button", "", "type", "button", "aria-label", "Edit marks", "title", "Edit marks", 1, "edit-marks-btn", 3, "click"], [1, "marks-edit"], [1, "marks-edit-row"], ["type", "number", "step", "any", 1, "marks-input", 3, "ngModel", "min", "max", "ngModelChange"], [1, "marks-max"], [1, "marks-reason-label", 3, "for"], [1, "required-star", 2, "color", "#dc3545"], ["rows", "2", "maxlength", "1000", "placeholder", "Explain why the marks are being changed (Required)", 1, "marks-reason-input", 3, "ngModel", "id", "ngModelChange", "input"], ["class", "marks-reason-error-msg", "style", "\n                              color: #dc3545;\n                              font-size: 0.75rem;\n                              display: block;\n                              margin-top: 0.25rem;\n                            ", 4, "ngIf"], [1, "marks-edit-actions"], ["mat-icon-button", "", "type", "button", "title", "Save marks", 1, "save-marks-btn", 3, "click"], ["mat-icon-button", "", "type", "button", "title", "Cancel", 1, "cancel-marks-btn", 3, "click"], [1, "marks-reason-error-msg", 2, "color", "#dc3545", "font-size", "0.75rem", "display", "block", "margin-top", "0.25rem"], [1, "q-fill"], [1, "fill-row"], [1, "fill-option"], ["class", "fill-correct", 4, "ngIf"], [1, "fill-correct"], [1, "q-descriptive"], [1, "descriptive-answers"], [1, "desc-student"], [1, "student-label"], [1, "answer-text"], [1, "desc-model"], [1, "model-label"], [1, "model-text"], ["class", "q-evaluation-state failed", 4, "ngIf"], ["class", "q-evaluation-state pending", 4, "ngIf"], ["class", "q-feedback", 4, "ngIf"], ["class", "q-review-comments", 4, "ngIf"], [1, "marks-history-section"], [1, "marks-history-header"], [1, "marks-history-timeline"], [1, "history-item", "current"], [1, "history-indicator"], [1, "dot", "current"], ["class", "line", 4, "ngIf"], [1, "history-content"], [1, "history-card", "current"], ["class", "history-badge", 4, "ngIf"], [1, "history-marks"], [1, "marks-total"], [1, "history-meta"], [1, "updated-by"], ["class", "updated-date", 4, "ngIf"], ["class", "history-reason", 4, "ngIf"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "failed"], [1, "feedback-text"], [1, "q-evaluation-state", "pending"], [1, "q-feedback"], [1, "q-review-comments"], [1, "review-columns"], [1, "col", "missed"], [1, "col-header"], [1, "dot", "red"], ["class", "review-empty", 4, "ngIf"], [1, "col", "incorrect"], [1, "dot", "orange"], [1, "col", "incomplete"], [1, "dot", "yellow"], [1, "review-empty"], [1, "review-item"], [1, "ri-body"], ["class", "review-text-history", 4, "ngIf"], ["class", "review-text-missed", 3, "deleted", 4, "ngIf"], ["class", "review-text-missed editing", 4, "ngIf"], ["class", "review-meta small-muted", 4, "ngIf"], ["class", "review-actions", 4, "ngIf"], [1, "review-text-history"], [1, "history-entry"], [1, "review-meta", "small-muted"], ["class", "deleted-by", 4, "ngIf"], [1, "review-text-missed"], [1, "ri-left"], [1, "ri-icon", "missed"], [1, "review-text", "deleted"], [1, "review-text-missed", "editing"], ["rows", "2", 1, "edit-comment-text", 3, "ngModel", "ngModelChange"], [1, "deleted-by"], [1, "review-actions"], ["class", "edited-info", 4, "ngIf"], ["class", "edit-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "delete-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "save-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "cancel-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], [1, "edited-info"], [1, "edited-text"], [1, "editor-name"], [1, "edited-date-sep"], [1, "edited-date"], ["href", "javascript:void(0)", 1, "edit-link", 3, "click"], ["href", "javascript:void(0)", 1, "delete-link", 3, "click"], ["href", "javascript:void(0)", 1, "save-link", 3, "click"], ["href", "javascript:void(0)", 1, "cancel-link", 3, "click"], [1, "review-text"], ["class", "review-text-incorrect", 3, "deleted", 4, "ngIf"], ["class", "review-text-incorrect editing", 4, "ngIf"], [1, "review-text-incorrect"], [1, "ri-icon", "incorrect"], [1, "review-text-incorrect", "editing"], ["class", "review-text-incomplete", 3, "deleted", 4, "ngIf"], ["class", "review-text-incomplete editing", 4, "ngIf"], [1, "review-text-incomplete"], [1, "ri-icon", "incomplete"], [1, "review-text-incomplete", "editing"], [1, "line"], [1, "history-badge"], [1, "updated-date"], [1, "history-reason"], [1, "history-item"], [1, "dot", "past"], [1, "history-card", "past"], [1, "q-options", "two-col"], ["class", "q-option", 3, "correct", "selected", "missed", 4, "ngFor", "ngForOf"], [1, "q-option"], [1, "opt-left"], [1, "opt-mark"], [1, "opt-body"], [1, "opt-text"], ["class", "opt-badge", 4, "ngIf"], [1, "opt-badge"], ["class", "badge your-answer", 4, "ngIf"], ["class", "badge correct", 4, "ngIf"], ["class", "badge missed", 4, "ngIf"], [1, "badge", "your-answer"], [1, "badge", "correct"], [1, "badge", "missed"], [1, "wrong-summary-panel", 3, "click"], [1, "header-copy"], [1, "panel-sub"], ["mat-icon-button", "", "aria-label", "Close wrong answer summary", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "question-title"], [1, "summary-table"], ["data-label", "Wrong Answer"], ["href", "javascript:void(0)", 1, "wa-answer-link", 3, "click"], ["data-label", "Selected Count"], ["href", "javascript:void(0)", 1, "wa-count-link", 3, "click"], ["data-label", "Occurrence %"], [1, "panel-sub", "small-muted"], ["mat-icon-button", "", "aria-label", "Close resources", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "resource-list"], [1, "res-title"], [1, "res-desc", "small-muted"]],
      template: function ExamReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "Institute ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](8, "mat-icon", 5)(9, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "mat-form-field", 7)(11, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Test ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](15, "mat-icon", 8)(16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 10)(18, "div", 11)(19, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_19_listener() {
            return ctx.refreshTestReports();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "svg", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](21, "path", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](22, "button", 15, 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_22_listener($event) {
            $event.stopPropagation();
            return ctx.openFiltersOverlay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](24, "mat-icon", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](26, "Filter Test Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](27, ExamReportsComponent_ng_template_27_Template, 77, 38, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 19)(30, "div", 20)(31, "h3", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](32, "Test & Schedule Selection");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](33, ExamReportsComponent_span_33_Template, 2, 0, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](34, "div", 23)(35, "mat-form-field", 24)(36, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](37, "Test ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "mat-select", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_Template_mat_select_ngModelChange_40_listener($event) {
            return ctx.onTestTitleSelect($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](41, ExamReportsComponent_mat_option_41_Template, 2, 2, "mat-option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](42, ExamReportsComponent_mat_hint_42_Template, 2, 0, "mat-hint", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](43, "mat-form-field", 24)(44, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45, "Schedule Date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](46, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](48, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("dateChange", function ExamReportsComponent_Template_input_dateChange_48_listener($event) {
            return ctx.onScheduleDateSelect($event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](49, "mat-datepicker-toggle", 29)(50, "mat-datepicker", 30, 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](52, ExamReportsComponent_mat_hint_52_Template, 2, 1, "mat-hint", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](53, "mat-form-field", 24)(54, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](55, "Schedules on this date ");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](56, "span", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](57, "*");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](58, "mat-select", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("selectionChange", function ExamReportsComponent_Template_mat_select_selectionChange_58_listener($event) {
            return ctx.onScheduleSelectFromId($event.value);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, ExamReportsComponent_mat_option_59_Template, 4, 2, "mat-option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](60, ExamReportsComponent_mat_hint_60_Template, 2, 0, "mat-hint", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, ExamReportsComponent_div_61_Template, 18, 7, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, ExamReportsComponent_div_62_Template, 12, 2, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](63, ExamReportsComponent_div_63_Template, 173, 39, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](64, ExamReportsComponent_div_64_Template, 24, 10, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](65, ExamReportsComponent_div_65_Template, 21, 1, "div", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](66, ExamReportsComponent_div_66_Template, 22, 2, "div", 36);
        }
        if (rf & 2) {
          const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](51);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.selectedInstituteName);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", ctx.getTestTitle(ctx.selectedExam))("placeholder", ctx.selectedInstituteId ? "Select test from Filter" : "Select institute first");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.uniqueTestNames.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedTestTitle)("disabled", !ctx.uniqueTestNames.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.uniqueTestNames);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.uniqueTestNames.length && ctx.selectedInstituteId);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("matDatepicker", _r6)("ngModel", ctx.selectedScheduleDate)("disabled", !ctx.selectedTestTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("for", _r6)("disabled", !ctx.selectedTestTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dateClass", ctx.dateClass);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedTestTitle && ctx.highlightedDatesSet.size);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx.selectedScheduleId)("disabled", !ctx.availableSchedulesOnDate.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.availableSchedulesOnDate);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedScheduleDate && !ctx.availableSchedulesOnDate.length);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isSuperAdmin && !ctx.isGlobalInstituteActive && ctx.selectedInstituteName || ctx.selectedExam || ctx.userFilters.campus_id || ctx.userFilters.department_id && ctx.userFilters.department_id.length || ctx.userFilters.teams_id && ctx.userFilters.teams_id.length || ctx.userFilters.active_status || ctx.userFilters.created_by_me);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.selectedExam);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedExam);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showUserReviewPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showWrongAnswerSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showResourcePanel);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_19__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_20__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_21__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_22__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_23__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_24__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_25__.MatSort, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabLabel, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__.MatTabGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_27__.MatIcon, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_28__.MatDatepickerToggle, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_29__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_18__.DecimalPipe],
      styles: [".filters-panel.admin-single-col[_ngcontent-%COMP%] {\n  width: min(24rem, 100vw - 2rem) !important;\n}\n.filters-panel.admin-single-col[_ngcontent-%COMP%]   .filter-grid[_ngcontent-%COMP%], .filters-panel.admin-single-col[_ngcontent-%COMP%]   .filter-block[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 0.75rem !important;\n}\n.filters-panel.admin-single-col[_ngcontent-%COMP%]   .filter-row-two-col[_ngcontent-%COMP%] {\n  display: flex !important;\n  flex-direction: column !important;\n  gap: 0.75rem !important;\n}\n.filters-panel.admin-single-col[_ngcontent-%COMP%]   .filter-col[_ngcontent-%COMP%], .filters-panel.admin-single-col[_ngcontent-%COMP%]   .filter-item[_ngcontent-%COMP%] {\n  width: 100% !important;\n}\n\n[_nghost-%COMP%] {\n  --green-bg: #e8f9ef;\n  --red-bg: #fff2f4;\n  --yellow-bg: #fff8e6;\n  --orange-bg: #fff4e1;\n  --blue-bg: #e6f0ff;\n  --green-text: #166534;\n  --red-text: #b91c1c;\n  --yellow-text: #b45309;\n  --orange-text: #c2410c;\n  --blue-text: #0b66d0;\n  --bgreen-border: #86efac;\n  --bred-border: #e7d6d6;\n  --byellow-border: #fde68a;\n  --borange-border: #faeedf;\n  --bblue-border: #93c5fd;\n  --score-color: #f39c12;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 3rem;\n}\n\n.exam-reports[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.875rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.applied-filters-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  padding: 0.625rem 1rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.625rem;\n  margin-top: 0.5rem;\n  flex-wrap: wrap;\n}\n.applied-filters-bar[_ngcontent-%COMP%]   .applied-filters-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  color: #475569;\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.applied-filters-bar[_ngcontent-%COMP%]   .applied-filters-header[_ngcontent-%COMP%]   .filter-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: #2563eb;\n}\n.applied-filters-bar[_ngcontent-%COMP%]   .applied-chips-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.applied-filters-bar[_ngcontent-%COMP%]   .filter-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.625rem;\n  background: #ffffff;\n  border: 1px solid #cbd5e1;\n  border-radius: 1rem;\n  font-size: 0.8125rem;\n  color: #1e293b;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);\n}\n.applied-filters-bar[_ngcontent-%COMP%]   .filter-chip[_ngcontent-%COMP%]   .chip-label[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 600;\n}\n.applied-filters-bar[_ngcontent-%COMP%]   .clear-filters-btn[_ngcontent-%COMP%] {\n  height: 1.75rem;\n  line-height: 1.75rem;\n  padding: 0 0.5rem;\n  font-size: 0.75rem;\n  color: #ef4444;\n  border-radius: 0.375rem;\n}\n.applied-filters-bar[_ngcontent-%COMP%]   .clear-filters-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 0.875rem;\n  height: 0.875rem;\n}\n\n.selections[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  flex: 1 1 28rem;\n  min-width: 16rem;\n  max-width: 36rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field {\n  position: relative;\n  min-width: 14rem;\n  max-width: 18rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 0 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-flex {\n  height: 2.75rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-infix {\n  padding: 0.5rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label {\n  top: 1.375rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label.mdc-floating-label--float-above {\n  transform: translateY(-1.5rem) scale(0.75);\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input::placeholder {\n  color: #94a3b8 !important;\n  font-weight: 400 !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #94a3b8 !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field mat-icon[matPrefix] {\n  color: #94a3b8;\n  margin-right: 0.5rem;\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover mat-icon[matPrefix] {\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12), 0 4px 16px rgba(31, 123, 255, 0.08);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n  transform: scale(1.05);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-text-field-wrapper {\n  background: #f1f5f9 !important;\n  border: 1px solid #cbd5e1 !important;\n  border-radius: 0.75rem !important;\n  cursor: not-allowed !important;\n  box-shadow: none !important;\n  opacity: 0.95;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input {\n  color: #0f172a !important;\n  font-weight: 600 !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #0f172a !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input::placeholder {\n  color: #64748b !important;\n  font-weight: 500 !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-floating-label {\n  color: #475569 !important;\n  font-weight: 600 !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field mat-icon[matPrefix] {\n  color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .lock-icon {\n  font-size: 1.125rem !important;\n  width: 1.125rem !important;\n  height: 1.125rem !important;\n  color: #64748b !important;\n  cursor: not-allowed !important;\n  margin-left: 0.375rem;\n  opacity: 0.85;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled input {\n  background: #f1f5f9 !important;\n  color: #94a3b8 !important;\n  cursor: not-allowed !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-floating-label {\n  color: #94a3b8 !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.empty-reports-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4rem 1.5rem;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  border: 1px dashed #cbd5e1;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.empty-state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 28rem;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  width: 4.25rem;\n  height: 4.25rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.12) 0%, rgba(31, 123, 255, 0.04) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n  border: 1px solid rgba(31, 123, 255, 0.2);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  width: 2.25rem;\n  height: 2.25rem;\n  color: var(--button-1, #1f7bff);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  letter-spacing: -0.01em;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 1.5rem 0;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: 600;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  height: 2.5rem;\n  padding: 0 1.25rem !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel {\n  border-radius: 0.75rem !important;\n  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.03) !important;\n  border: none !important;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option {\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  min-height: 2.75rem;\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active {\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.1) 0%, rgba(31, 123, 255, 0.06) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-main {\n  font-weight: 500;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.125rem;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .refresh-icon-btn, .refresh-icon-btn[_ngcontent-%COMP%] {\n  min-width: 2.625rem !important;\n  width: 2.625rem !important;\n  height: 2.625rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.625rem !important;\n  background: var(--button-1) !important;\n  color: #ffffff !important;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon, [_nghost-%COMP%]     .refresh-icon-btn mat-icon, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  fill: #ffffff !important;\n  color: #ffffff !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon svg, [_nghost-%COMP%]     .refresh-icon-btn mat-icon svg, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon path, [_nghost-%COMP%]     .refresh-icon-btn mat-icon path, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon path, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover, .refresh-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover, #1a6fe8) !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon, .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon svg, [_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon path, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon svg, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon path, .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n}\n\n.button-one[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.button-one[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  color: var(--button-text-2) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filters-panel[_ngcontent-%COMP%] {\n  width: min(34rem, 100vw - 2rem);\n  max-height: 82vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1rem;\n  box-shadow: 0 1.25rem 3rem rgba(15, 23, 42, 0.16), 0 0.375rem 1rem rgba(15, 23, 42, 0.06);\n  animation: _ngcontent-%COMP%_slideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.filters-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.25rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--button-1);\n}\n\n.filter-block[_ngcontent-%COMP%], .filter-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem 0.5rem;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.filter-col-full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.filter-row-two-col[_ngcontent-%COMP%] {\n  display: grid !important;\n  grid-template-columns: repeat(2, minmax(0, 1fr)) !important;\n  gap: 0.75rem !important;\n}\n\n.filter-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.625rem;\n  padding: 0 0.75rem;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-flex {\n  height: 2.75rem;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-infix {\n  padding: 0.5rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label {\n  top: 1.375rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label.mdc-floating-label--float-above {\n  transform: translateY(-1.5rem) scale(0.75);\n  color: var(--button-1);\n  font-weight: 600;\n  background: #ffffff;\n  padding: 0 0.25rem;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item input, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-value-text {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-arrow, [_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle .mat-icon {\n  color: #94a3b8;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 0.25rem 0.625rem rgba(15, 23, 42, 0.06);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle button {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 0.375rem;\n  padding: 0.375rem 0.625rem;\n  font-size: 0.8125rem;\n  color: #0f172a;\n  outline: none;\n  background: #f8fafc;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input:focus {\n  border-color: var(--button-1);\n  background: #ffffff;\n  box-shadow: 0 0 0 2px rgba(31, 123, 255, 0.15);\n}\n[_nghost-%COMP%]     .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n.filter-checks[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 1.25rem 0.75rem;\n  flex-shrink: 0;\n}\n.filter-checks[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: transparent !important;\n  border: none !important;\n  padding: 0 !important;\n}\n.filter-checks[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #334155;\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  padding: 0.875rem 1.25rem;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #475569 !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .filter-reset-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-0.375rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.list-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid #e2e8f0;\n  border-radius: 0.75rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: visible !important;\n}\n\n.list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  max-height: none !important;\n}\n\n.exam-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inner-analytics-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-header {\n  background: transparent;\n  border-bottom: 1px solid var(--theme-3-border, #e2e8f0);\n  padding: 0.75rem 1rem 0.5rem;\n}\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-label-container {\n  overflow: visible;\n}\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-labels {\n  background: #F1F3F6;\n  border-radius: 0.625rem;\n  padding: 0.25rem;\n  display: flex;\n  width: 100%;\n  gap: 0.25rem;\n  border: 1px solid #E2E8F0;\n  min-height: auto;\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab {\n  flex: 1;\n  height: 2.375rem;\n  min-height: 2.375rem;\n  padding: 0 1.25rem;\n  border-radius: 0.5rem;\n  border: none;\n  background: transparent;\n  color: #64748B;\n  font-weight: 500;\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 1;\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab:hover:not(.mdc-tab--active) {\n  background: rgba(255, 255, 255, 0.6);\n  color: #1E293B;\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab .mdc-tab__text-label {\n  color: inherit;\n  font-weight: inherit;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab .tab-label-icon {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  line-height: 1.125rem;\n  color: inherit;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active {\n  background: #FFFFFF !important;\n  color: var(--button-1, #2563eb) !important;\n  font-weight: 700 !important;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08), 0 1px 2px rgba(0, 0, 0, 0.04) !important;\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1, #2563eb) !important;\n  font-weight: 700 !important;\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active .tab-label-icon {\n  color: var(--button-1, #2563eb) !important;\n}\n[_nghost-%COMP%]     .exam-tabs .mdc-tab-indicator__content--underline, [_nghost-%COMP%]     .exam-tabs .mdc-tab-indicator {\n  display: none !important;\n}\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-body-wrapper {\n  background: var(--bg-1, #ffffff);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-header {\n  background: var(--bg-1);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.75rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-labels {\n  min-height: 2.5rem;\n  gap: 0.25rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.8125rem;\n  padding: 0 1rem;\n  min-height: 2.5rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab:hover {\n  background: var(--bg-2);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active {\n  background: var(--bg-2);\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n.analytics-tab-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.category-filter-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.4rem 0.75rem;\n  margin: 0.5rem 1rem 0.5rem 1rem;\n  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 0.625rem;\n  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.02);\n  animation: _ngcontent-%COMP%_slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1, #1e293b);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  line-height: 1.125rem;\n  color: var(--button-1, #2563eb);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--button-1, #2563eb);\n  font-weight: 700;\n  background: rgba(59, 130, 246, 0.12);\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.375rem;\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .clear-filter-btn {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 0.375rem !important;\n  padding: 0.35rem 0.75rem !important;\n  height: 2rem !important;\n  min-height: 2rem !important;\n  line-height: 1 !important;\n  border-radius: 0.5rem !important;\n  background: var(--bg-1, #ffffff) !important;\n  border: 1px solid var(--theme-3-border, #cbd5e1) !important;\n  color: var(--theme-3-text-2, #475569) !important;\n  font-size: 0.75rem !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     .clear-filter-btn .mdc-button__label {\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 0.375rem !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn mat-icon {\n  font-size: 0.9375rem !important;\n  width: 0.9375rem !important;\n  height: 0.9375rem !important;\n  line-height: 0.9375rem !important;\n  color: var(--theme-3-text-3, #64748b);\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover mat-icon {\n  color: #ef4444 !important;\n}\n\n.report-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n}\n\n.analytics-summary-grid[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 0.5rem;\n  background: transparent;\n  border-bottom: none;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  min-width: 0;\n  padding: 0.5rem 0.875rem;\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 0.125rem 0.5rem var(--theme-3-hanover-bg);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.625rem;\n  background: var(--theme-2-hanover-bg);\n  color: var(--button-1);\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.summary-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.summary-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.summary-icon--students[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--page[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--score[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n\n.summary-icon--pass[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n\n.summary-icon--categories[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n}\n\n.summary-icon--questions[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--attempts[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--mistakes[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n\n.summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  min-width: 0;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-3);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.125rem, 0.95rem + 0.5vw, 1.5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: var(--theme-3-text-1);\n}\n\n.summary-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-xsm);\n  font-weight: 500;\n  color: var(--theme-3-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tab-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-between: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1rem 1rem;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n  margin: 0;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 20rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  padding: 0 0.75rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-flex {\n  height: 2.375rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-floating-label {\n  top: 1.1875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input::placeholder {\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-icon[matPrefix] {\n  color: var(--theme-3-icon-1);\n  margin-right: 0.5rem;\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-focused .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px var(--theme-2-hanover-bg);\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 0.875rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  border-radius: 0.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%], .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  color: var(--theme-3-text-2);\n  border: 1px solid var(--theme-3-border);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover, .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover {\n  background: var(--bg-1);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1);\n  border: none;\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--button-1-hover) 0%, var(--button-1) 100%);\n  box-shadow: 0 1rem 2rem var(--theme-2-hanover-bg);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  padding: 0 0.75rem 0.75rem;\n  scrollbar-width: thin;\n  scrollbar-color: #818cf8 rgba(0, 0, 0, 0.05);\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 0.25rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #818cf8;\n  border-radius: 0.25rem;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #4f46e5;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n.analytics-table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--theme-3-text-2, #475569);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-top: 1px solid var(--theme-3-border, #e2e8f0);\n}\n\n.premium-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate !important;\n  border-spacing: 0 !important;\n  border-radius: 0.5rem;\n}\n\n[_nghost-%COMP%]     .premium-table th.mat-header-cell, [_nghost-%COMP%]     .premium-table th.mat-mdc-header-cell, .premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 0 !important;\n  z-index: 10 !important;\n  background: var(--table-header-bg, #1e293b) !important;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--table-header-text, #ffffff) !important;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 0.125rem solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child, .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 0.1875rem solid var(--button-1);\n}\n\n.premium-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.75rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-2, #334155);\n  border-bottom: 0.0625rem solid #f1f5f9;\n  vertical-align: middle;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.5);\n}\n\n.student-name[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: var(--font-md);\n  letter-spacing: -0.01em;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.student-name[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  transform: translateX(0.0625rem);\n}\n\n.student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.student-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.category-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n\n.marks-inline[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-1);\n}\n\n.marks-sep[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  margin: 0 0.125rem;\n}\n\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366f1;\n}\n\n.review-status[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n\n.review-status.review-pending[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  font-weight: 600;\n}\n\n.result-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--theme-3-text-3);\n}\n\n.result-pill.result-pass[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.result-pill.result-fail[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.analytics-section[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  border-radius: 0.625rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n[_nghost-%COMP%]     .table-wrap.question-summary-wrap, [_nghost-%COMP%]     .analytics-section .table-wrap.question-summary-wrap {\n  min-height: auto !important;\n  max-height: none !important;\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  color: var(--theme-3-text-2);\n}\n\n.pager[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.375rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  padding: 0.375rem 1rem !important;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n  background: var(--bg-2) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.loader-placeholder[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.02) 25%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.02) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%] {\n  margin-left: 0.375rem;\n  font-size: 0.85rem;\n  color: var(--button-1);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  font-weight: 600;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateX(0.125rem);\n}\n\n.wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  cursor: pointer;\n  font-weight: 700;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.wa-answer-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(0.0625rem);\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.85rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_subtlePulse {\n  0%, 100% {\n    box-shadow: 0 1.5rem 3.75rem var(--theme-3-hanover-bg);\n  }\n  50% {\n    box-shadow: 0 1.75rem 4rem var(--theme-2-hanover-bg);\n  }\n}\n.wrong-summary-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.55) 0%, rgba(30, 41, 59, 0.75) 100%);\n  backdrop-filter: blur(0.75rem) saturate(140%);\n  z-index: 10050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(56rem, 92vw);\n  max-height: 88vh;\n  z-index: 10060;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 1.25rem;\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  overflow: hidden;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  min-width: 0;\n  flex: 1;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n}\n\n.panel-header[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  margin-top: 0;\n  line-height: 1.4;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%] {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n  min-width: 2.5rem !important;\n  min-height: 2.5rem !important;\n  max-width: 2.5rem !important;\n  max-height: 2.5rem !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.75rem !important;\n  background: var(--bg-1) !important;\n  border: 0.0625rem solid var(--theme-3-border) !important;\n  color: var(--theme-3-text-2) !important;\n  line-height: 1 !important;\n  flex: 0 0 2.5rem !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n  cursor: pointer !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] .mat-mdc-button-touch-target, [_nghost-%COMP%]     .panel-header .panel-close-btn .mat-mdc-button-touch-target {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] mat-icon, [_nghost-%COMP%]     .panel-header .panel-close-btn mat-icon {\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.25rem !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: var(--theme-3-text-2) !important;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover, .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(239, 68, 68, 0.15) !important;\n  transform: scale(1.04) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n  transform: rotate(90deg) !important;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: 1.125rem 1.375rem;\n  overflow: auto;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.875rem;\n  font-size: 0.9375rem;\n  letter-spacing: -0.01em;\n  color: var(--theme-3-text-1);\n  padding: 0.875rem 1rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: var(--bg-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .small-muted[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  padding-left: 0;\n  color: var(--theme-3-text-3);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  margin: 0 auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-1-text-1);\n  background: var(--table-header-bg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n  text-align: center;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--theme-3-text-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wa-answer-link[_ngcontent-%COMP%], .wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover, .wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%], .summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.875rem 1.375rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.625rem !important;\n  font-weight: 700 !important;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.0625rem);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg) !important;\n}\n\n.resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 0.875rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2rem var(--theme-3-hanover-bg);\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n}\n\n.res-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  letter-spacing: -0.01em;\n}\n\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n  width: 0.375rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--theme-3-border);\n  border-radius: 0.1875rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%] {\n  width: min(72rem, 94vw);\n  max-height: 90vh;\n  margin: auto;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border-radius: 1.25rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  border: 0.0625rem solid var(--theme-3-border);\n  overflow: hidden;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-3);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.5rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  letter-spacing: 0.01em;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 62.5rem;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 0.125rem 0.5rem rgba(15, 23, 42, 0.08);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.pass[_ngcontent-%COMP%] {\n  color: var(--button-text-1);\n  background: var(--button-1);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.fail[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 2.75rem;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--theme-3-text-2);\n  line-height: 1;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex: 0 0 2.75rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.375rem 0.875rem var(--theme-3-hanover-bg);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.125rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.875rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  max-height: calc(90vh - 10rem);\n  padding: 1.5rem;\n}\n\n.attempt-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.75rem 0;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  margin-bottom: 0.875rem;\n}\n\n.attempt-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.attempt-header[_ngcontent-%COMP%]   .score-badge[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #0a8043;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.875rem;\n  margin-left: auto;\n  letter-spacing: 0.01em;\n}\n\n.attempt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-size: 0.8125rem;\n}\n\n.questions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.question-review-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-1);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.125rem 0.375rem rgba(15, 23, 42, 0.03);\n  overflow: hidden;\n}\n\n.question-review-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1) 0%, rgba(99, 102, 241, 0.4) 100%);\n}\n\n.question-review-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem rgba(15, 23, 42, 0.08);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--theme-3-text-1);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .mark-badge[_ngcontent-%COMP%] {\n  float: right;\n  background: #fff3f3;\n  color: var(--red-text);\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.q-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem dashed var(--theme-3-border);\n}\n\n.q-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-index[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0.06) 100%);\n  border: 0.0625rem solid rgba(99, 102, 241, 0.18);\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.875rem;\n  color: var(--button-1);\n  flex-shrink: 0;\n}\n\n.q-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n}\n\n.q-badge[_ngcontent-%COMP%] {\n  background: var(--theme-2-hanover-bg);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--button-1);\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.6875rem;\n  line-height: 1rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.q-info[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.8125rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n\n.q-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  width: 0.9375rem;\n  height: 0.9375rem;\n  color: var(--button-1);\n}\n\n.q-marks.small-muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n}\n\n.q-options.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.q-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.875rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.1);\n  background: #f8fbff;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.opt-left[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.opt-left[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.opt-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 0.75rem;\n  align-self: center;\n  line-height: 1.45;\n}\n\n.opt-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n}\n\n.badge.your-answer[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.badge.correct[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.badge.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border-color: var(--bred-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.1);\n}\n\n.q-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border-color: var(--bgreen-border);\n}\n\n.q-option.correct[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.1);\n}\n\n.q-option.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border-color: var(--bblue-border);\n}\n\n.q-option.missed[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(11, 102, 208, 0.1);\n}\n\n.q-selected[_ngcontent-%COMP%], .q-marks[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.q-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  background: rgba(240, 248, 255, 0.6);\n  padding: 0.625rem 0.75rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-evaluation-state[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  padding: 0.75rem;\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.q-evaluation-state.failed[_ngcontent-%COMP%] {\n  color: #8a1c1c;\n  background: #fff2f2;\n  border: 0.0625rem solid #efb4b4;\n}\n\n.q-evaluation-state.pending[_ngcontent-%COMP%] {\n  color: #6c4a00;\n  background: #fff8e6;\n  border: 0.0625rem solid #e7ca7a;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%] {\n  border: 0.0625rem solid currentColor;\n  border-radius: 0.375rem;\n  padding: 0.4rem 0.7rem;\n  color: inherit;\n  background: #fff;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.6;\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-style: italic;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%], .q-marks.mark-negative[_ngcontent-%COMP%], .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.25rem;\n  height: 2rem;\n  margin-top: 0;\n  padding: 0 0.625rem;\n  display: inline-grid !important;\n  place-items: center;\n  border-radius: 0.375rem;\n  font-weight: 800 !important;\n  font-size: 0.8125rem;\n  line-height: normal;\n  letter-spacing: 0.01em;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: #0b8a45;\n}\n\n.q-marks.mark-negative[_ngcontent-%COMP%] {\n  background: #fff2f4;\n  color: #b02a37;\n}\n\n.q-marks.mark-mid[_ngcontent-%COMP%] {\n  background: #fff8e6;\n  color: #b36a00;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  background: #fff7ed;\n  border: 0.0625rem solid rgba(245, 166, 35, 0.1);\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.selected[_ngcontent-%COMP%] {\n  background: #e8f6ff;\n  border-color: rgba(2, 112, 255, 0.15);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  border-color: var(--bgreen-border);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-correct[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.8125rem;\n  background-color: var(--green-bg);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.875rem;\n}\n\n.descriptive-answers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.875rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-question[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #8c6ad6;\n  background: rgba(140, 106, 214, 0.08);\n  display: inline-block;\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  flex: 0 0 8.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #f39c12;\n  background: #fff;\n  padding: 0.75rem 0.5rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  margin-top: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--theme-2);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--green-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bgreen-border);\n  border-left: 0.1875rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-label[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .student-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-text[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.55;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  padding: 0.625rem;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0b66d0;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .q-feedback[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-review-comments[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem dashed var(--theme-3-border);\n}\n\n.review-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.875rem;\n}\n@media (max-width: 768px) {\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  border-radius: 0.75rem;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.06);\n  transform: translateY(-0.125rem);\n}\n.review-columns[_ngcontent-%COMP%]   .col.missed[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--red-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--bred-border);\n  border-top: 0.1875rem solid var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incorrect[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--orange-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--borange-border);\n  border-top: 0.1875rem solid var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incomplete[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--yellow-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--byellow-border);\n  border-top: 0.1875rem solid var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0.1875rem rgba(0, 0, 0, 0.04);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.red[_ngcontent-%COMP%] {\n  background: var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.orange[_ngcontent-%COMP%] {\n  background: var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.yellow[_ngcontent-%COMP%] {\n  background: var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-2, #374151);\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3, #9CA3AF);\n  font-style: italic;\n  padding: 0.5rem 0;\n}\n\n.review-item[_ngcontent-%COMP%] {\n  background: var(--bg-1, #ffffff);\n  border: 0.0625rem solid rgba(15, 23, 42, 0.08);\n  border-radius: 0.625rem;\n  padding: 0.75rem 0.875rem;\n  margin-bottom: 0.625rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.review-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.review-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(15, 23, 42, 0.14);\n  box-shadow: 0 0.25rem 0.75rem rgba(15, 23, 42, 0.06);\n}\n.review-item[_ngcontent-%COMP%]   .ri-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.review-text-missed[_ngcontent-%COMP%], .review-text-incorrect[_ngcontent-%COMP%], .review-text-incomplete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  width: 100%;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.ri-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n\n.ri-icon[_ngcontent-%COMP%] {\n  width: 1.375rem;\n  height: 1.375rem;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.ri-icon.missed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.ri-icon.incorrect[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.ri-icon.incomplete[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.review-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: #1e293b;\n  font-weight: 500;\n  word-break: break-word;\n  flex: 1;\n}\n.review-text.deleted[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.review-text-history[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.history-entry[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 0.0625rem dashed #e2e8f0;\n}\n.history-entry[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.25rem;\n}\n.history-entry.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.review-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.review-meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  vertical-align: middle;\n  color: #64748b;\n}\n.review-meta[_ngcontent-%COMP%]   .deleted-by[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 500;\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 0.0625rem dashed #e2e8f0;\n  flex-wrap: wrap;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.125rem;\n  margin-bottom: 0.375rem;\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  padding: 0.35rem 0.625rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n  font-size: 0.725rem;\n  line-height: 1.35;\n  color: #475569;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n  transition: all 0.2s ease;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  width: 15px !important;\n  height: 15px !important;\n  line-height: 15px !important;\n  color: #4f46e5 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .editor-name[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date-sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.65rem;\n  margin: 0 0.05rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 400;\n}\n.review-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  border: none;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.16);\n  color: #1d4ed8;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.16);\n  color: #b91c1c;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: rgba(22, 163, 74, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%]:hover {\n  background: rgba(22, 163, 74, 0.16);\n  color: #15803d;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  background: rgba(100, 116, 139, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%]:hover {\n  background: rgba(100, 116, 139, 0.16);\n  color: #475569;\n  text-decoration: none;\n}\n\n.marks-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  min-height: 2.25rem;\n}\n\n.marks-display[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.1875rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.625rem;\n  background: var(--bg-1);\n  box-shadow: 0 0.0625rem 0.125rem rgba(15, 23, 42, 0.04);\n}\n\n.marks-display[_ngcontent-%COMP%]   .q-marks.mark-positive[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-negative[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.5rem;\n  height: 1.75rem;\n  padding: 0 0.5rem;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  border-radius: 0.4375rem;\n}\n\n.marks-divider[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  font-weight: 600;\n}\n\n.edit-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  line-height: 1.75rem !important;\n  border-radius: 0.4375rem !important;\n  color: var(--theme-3-text-2) !important;\n  opacity: 0.72;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.edit-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--button-1) !important;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.0625rem;\n}\n\n.marks-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: min(20rem, 100vw - 4rem);\n  gap: 0.625rem;\n  background: #fff;\n  padding: 0.625rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--button-1);\n  box-shadow: 0 0.125rem 0.5rem rgba(99, 102, 241, 0.15);\n}\n\n.marks-input[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  padding: 0.25rem 0.375rem;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.marks-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n.marks-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .marks-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.marks-max[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 500;\n}\n\n.save-marks-btn[_ngcontent-%COMP%], .cancel-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  line-height: 1 !important;\n  border-radius: 0.4375rem !important;\n  flex: 0 0 1.75rem;\n}\n\n.save-marks-btn[_ngcontent-%COMP%] {\n  color: var(--green-text) !important;\n  background: var(--green-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.save-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.save-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.cancel-marks-btn[_ngcontent-%COMP%] {\n  color: var(--red-text) !important;\n  background: var(--red-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cancel-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.cancel-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.marks-history-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(59, 130, 246, 0.02) 100%);\n  border-radius: 0.75rem;\n  border: 0.0625rem solid rgba(99, 102, 241, 0.1);\n}\n\n.marks-history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(99, 102, 241, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--button-1);\n}\n.marks-history-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.marks-history-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n}\n\n.history-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1.5rem;\n  flex-shrink: 0;\n}\n.history-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 0 0 0.1875rem rgb(255, 255, 255);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  box-shadow: 0 0 0 0.1875rem rgba(16, 185, 129, 0.15), 0 0.125rem 0.375rem rgba(16, 185, 129, 0.25);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.past[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #94a3b8, #64748b);\n  box-shadow: 0 0 0 0.1875rem rgba(148, 163, 184, 0.15);\n}\n.history-indicator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  flex: 1;\n  background: linear-gradient(180deg, rgba(148, 163, 184, 0.4) 0%, rgba(148, 163, 184, 0.1) 100%);\n  margin: 0.25rem 0;\n  min-height: 1rem;\n}\n\n.history-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 0.875rem;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.history-card.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%);\n  border: 0.0625rem solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 0.125rem 0.5rem rgba(16, 185, 129, 0.1);\n}\n.history-card.current[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.375rem 1rem rgba(16, 185, 129, 0.18);\n  transform: translateY(-0.1875rem);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.history-card.past[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.8);\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.history-card.past[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.history-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  margin-bottom: 0.375rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(16, 185, 129, 0.3);\n}\n\n.history-marks[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n}\n.history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.45);\n}\n\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  opacity: 0.6;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.history-card.current[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  color: var(--green-text);\n}\n\n@media (max-width: 55rem) {\n  .page[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem 2rem;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-bottom: 0.625rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 1 1 100%;\n  }\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tab-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-options.two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .user-review-panel[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 0.625rem;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n    margin-top: 0.5rem;\n  }\n  .descriptive-answers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-head-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .q-right[_ngcontent-%COMP%] {\n    margin-left: 3.125rem;\n  }\n}\n.marks-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.marks-reason-label[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.marks-reason-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .marks-reason-error[_ngcontent-%COMP%] {\n  color: var(--red-text);\n}\n\n.marks-reason-error[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n  font-size: 0.75rem;\n  line-height: 1.35;\n}\n\n.marks-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.375rem;\n  min-height: 1.75rem;\n}\n\n.marks-reason-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 5rem;\n  box-sizing: border-box;\n  padding: 0.625rem;\n  border: 0.0625rem solid var(--border-color, #d3d9e2);\n  border-radius: 0.375rem;\n  font: inherit;\n  line-height: 1.4;\n  resize: vertical;\n}\n\n.marks-reason-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color, #267cff);\n  box-shadow: 0 0 0 0.125rem rgba(38, 124, 255, 0.12);\n}\n\n.marks-reason-input[aria-invalid=true][_ngcontent-%COMP%], .marks-reason-input.input-error[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  box-shadow: 0 0 0 0.125rem rgba(220, 53, 69, 0.25) !important;\n}\n\n.history-reason[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  color: rgba(0, 0, 0, 0.68);\n  line-height: 1.4;\n}\n\n@media (max-width: 45rem) {\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0.875rem;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .summary-meta[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    border-radius: 0.625rem;\n    overflow: hidden;\n    border: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: left;\n    border-radius: 0;\n    border: none;\n    border-bottom: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 700;\n    color: var(--theme-3-text-2);\n    margin-right: 0.5rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.manual-check-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 8px;\n  padding: 3px 9px;\n  border: 1px solid #d97706;\n  border-radius: 16px;\n  background: #fff7ed;\n  color: #9a3412;\n  cursor: pointer;\n  font: inherit;\n}\n\n.manual-check-chip.selected[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  font-weight: 600;\n}\n\n.manual-check-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n\n.edit-comment-reason[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 8px;\n}\n\n.review-meta[_ngcontent-%COMP%]   .edit-reason[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n}\n\n.save-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .filter-item.filter-item--full[_ngcontent-%COMP%] {\n  width: 100% !important;\n  flex: 0 0 100% !important;\n}\n\n\n\n  .select-search-option .mat-pseudo-checkbox,   .select-search-option .mat-mdc-option-pseudo-checkbox,   .select-search-option .mdc-checkbox,   .select-all-option .mat-pseudo-checkbox,   .select-all-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n\n\n  .select-all-option .mdc-list-item__primary-text {\n  display: flex !important;\n  align-items: center !important;\n}\n\n  .select-all-checkbox-icon {\n  font-size: 1.25rem !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  line-height: 1.25rem !important;\n  margin-right: 0.5rem !important;\n}\n\n\n\n.required-mark[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-weight: bold;\n  margin-left: 2px;\n}\n\n[_nghost-%COMP%]     .mandatory-field .mat-mdc-text-field-wrapper {\n  background-color: #f0f7ff !important;\n  border-radius: 0.5rem;\n}\n[_nghost-%COMP%]     .mandatory-field .mdc-notched-outline__leading, [_nghost-%COMP%]     .mandatory-field .mdc-notched-outline__notch, [_nghost-%COMP%]     .mandatory-field .mdc-notched-outline__trailing {\n  border-color: #2563eb !important;\n  border-width: 1.5px !important;\n}\n[_nghost-%COMP%]     .mandatory-field .mat-mdc-floating-label {\n  color: #1e40af !important;\n  font-weight: 600 !important;\n}\n\n.test-schedule-selection-card[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.875rem;\n  padding: 1.25rem 1.5rem;\n  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);\n  margin-bottom: 0.75rem;\n  transition: box-shadow 0.2s ease, border-color 0.2s ease;\n}\n.test-schedule-selection-card[_ngcontent-%COMP%]:hover {\n  border-color: #cbd5e1;\n  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.06);\n}\n.test-schedule-selection-card[_ngcontent-%COMP%]   .selection-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n  padding-bottom: 0.625rem;\n  border-bottom: 1px solid #f1f5f9;\n}\n.test-schedule-selection-card[_ngcontent-%COMP%]   .selection-card-header[_ngcontent-%COMP%]   .selection-card-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.test-schedule-selection-card[_ngcontent-%COMP%]   .selection-card-header[_ngcontent-%COMP%]   .selection-card-title[_ngcontent-%COMP%]::before {\n  content: \"\";\n  display: inline-block;\n  width: 4px;\n  height: 1.1rem;\n  background: linear-gradient(135deg, #2563eb, #3b82f6);\n  border-radius: 2px;\n}\n.test-schedule-selection-card[_ngcontent-%COMP%]   .selection-card-header[_ngcontent-%COMP%]   .selection-step-hint[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #2563eb;\n  background: #eff6ff;\n  padding: 0.25rem 0.75rem;\n  border-radius: 1rem;\n  border: 1px solid #dbeafe;\n}\n.test-schedule-selection-card[_ngcontent-%COMP%]   .selection-fields-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));\n  gap: 1.25rem;\n  align-items: flex-start;\n}\n.test-schedule-selection-card[_ngcontent-%COMP%]   .selection-fields-grid[_ngcontent-%COMP%]   .selection-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-calendar-body-cell.highlighted-schedule-date .mat-calendar-body-cell-content {\n  background-color: #dbeafe !important;\n  color: #1e40af !important;\n  font-weight: 700 !important;\n  border-radius: 50% !important;\n  border: 1.5px solid #2563eb !important;\n  position: relative;\n}\n  .mat-calendar-body-cell.highlighted-schedule-date .mat-calendar-body-cell-content::after {\n  content: \"\";\n  position: absolute;\n  bottom: 2px;\n  left: 50%;\n  transform: translateX(-50%);\n  width: 4px;\n  height: 4px;\n  background-color: #2563eb;\n  border-radius: 50%;\n}\n\n.schedule-option-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.schedule-option-item[_ngcontent-%COMP%]   .sched-title-text[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #1e293b;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnJvbGUvYWRtaW4vZXhhbS1yZXBvcnRzL2V4YW0tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLDBDQUFBO0FBSEY7QUFLRTtFQUNFLHdCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQUhKO0FBTUU7RUFDRSx3QkFBQTtFQUNBLGlDQUFBO0VBQ0EsdUJBQUE7QUFKSjtBQU9FOztFQUVFLHNCQUFBO0FBTEo7O0FBb0JBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFqQkY7O0FBcUJBO0VBQXdELGFBQUE7QUFqQnhEOztBQW9CQTtFQUFRLDRCQUFBO0FBaEJSOztBQWlCQTtFQUFnQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsYUFBQTtBQVh2RDs7QUFZQTtFQUFXLGFBQUE7RUFBZSxlQUFBO0VBQWlCLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixrREFBQTtBQUZ4STs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUZGO0FBSUU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBRk47QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFD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QTtBQTA2Q0Y7QUF4NkNFO0VBQ0UscUJBQUE7RUFDQSw2Q0FBQTtBQTA2Q0o7QUF2NkNFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtBQXk2Q0o7QUF2NkNJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQXk2Q047QUF2NkNNO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0FBeTZDUjtBQXI2Q0k7RUFDRSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBdTZDTjtBQW42Q0U7RUFDRSxhQUFBO0VBQ0EsMkRBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFxNkNKO0FBbjZDSTtFQUNFLFdBQUE7QUFxNkNOOztBQTc1Q0k7RUFDRSxvQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw2QkFBQTtFQUNBLHNDQUFBO0VBQ0Esa0JBQUE7QUFnNkNOO0FBOTVDTTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFnNkNSOztBQTE1Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUE2NUNGO0FBMzVDRTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBNjVDSiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVudGVycHJpc2Ugw6LCgMKTIEV4YW0gUmVwb3J0cyAgKGVuaGFuY2VkIHYyKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuLmZpbHRlcnMtcGFuZWwuYWRtaW4tc2luZ2xlLWNvbCB7XHJcbiAgd2lkdGg6IG1pbigyNHJlbSwgY2FsYygxMDB2dyAtIDJyZW0pKSAhaW1wb3J0YW50O1xyXG5cclxuICAuZmlsdGVyLWdyaWQsIC5maWx0ZXItYmxvY2sge1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xyXG4gICAgZ2FwOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZmlsdGVyLXJvdy10d28tY29sIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICAgIGdhcDogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1jb2wsXHJcbiAgLmZpbHRlci1pdGVtIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4kZWFzZTogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuJGVhc2Utc21vb3RoOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNSwgMSk7XHJcbiRlYXNlLWJvdW5jZTogY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG4kcmFkaXVzOiAwLjc1cmVtO1xyXG4kc2hhZG93LXNtOiAwIDAuMDYyNXJlbSAwLjE4NzVyZW0gcmdiYSgwLDAsMCwwLjA0KSwgMCAwLjA2MjVyZW0gMC4xMjVyZW0gcmdiYSgwLDAsMCwwLjAzKTtcclxuJHNoYWRvdy1tZDogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgwLDAsMCwwLjA2KTtcclxuJHNoYWRvdy1sZzogMCAxLjI1cmVtIDIuNXJlbSByZ2JhKDAsMCwwLDAuMSksIDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwwLjA2KTtcclxuJHNoYWRvdy1wYW5lbDogMCAxLjVyZW0gMy43NXJlbSByZ2JhKDUsMTgsNDAsMC4yMiksIDAgMC4zNzVyZW0gMXJlbSByZ2JhKDUsMTgsNDAsMC4wOCk7XHJcbiRzaGFkb3ctaG92ZXI6IDAgMC41cmVtIDEuMjVyZW0gcmdiYSgwLDAsMCwwLjA4KTtcclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBIb3N0IHRva2VucyDDosKUwoDDosKUwoBcclxuOmhvc3Qge1xyXG4gIC0tZ3JlZW4tYmc6ICNlOGY5ZWY7XHJcbiAgLS1yZWQtYmc6ICNmZmYyZjQ7XHJcbiAgLS15ZWxsb3ctYmc6ICNmZmY4ZTY7XHJcbiAgLS1vcmFuZ2UtYmc6ICNmZmY0ZTE7XHJcbiAgLS1ibHVlLWJnOiAjZTZmMGZmO1xyXG4gIC0tZ3JlZW4tdGV4dDogIzE2NjUzNDtcclxuICAtLXJlZC10ZXh0OiAjYjkxYzFjO1xyXG4gIC0teWVsbG93LXRleHQ6ICNiNDUzMDk7XHJcbiAgLS1vcmFuZ2UtdGV4dDogI2MyNDEwYztcclxuICAtLWJsdWUtdGV4dDogIzBiNjZkMDtcclxuICAtLWJncmVlbi1ib3JkZXI6ICM4NmVmYWM7XHJcbiAgLS1icmVkLWJvcmRlcjogI2U3ZDZkNjtcclxuICAtLWJ5ZWxsb3ctYm9yZGVyOiAjZmRlNjhhO1xyXG4gIC0tYm9yYW5nZS1ib3JkZXI6ICNmYWVlZGY7XHJcbiAgLS1iYmx1ZS1ib3JkZXI6ICM5M2M1ZmQ7XHJcbiAgLS1zY29yZS1jb2xvcjogI2YzOWMxMjtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hdGVyaWFsIG92ZXJyaWRlcyDDosKUwoDDosKUwoBcclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFnZSAmIHRvb2xiYXIgw6LClMKAw6LClMKAXHJcbi5wYWdlIHsgcGFkZGluZzogMS4yNXJlbSAxLjVyZW0gM3JlbTsgfVxyXG4uZXhhbS1yZXBvcnRzIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxLjEyNXJlbTsgfVxyXG4udG9vbGJhciB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDAuODc1cmVtOyBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBBcHBsaWVkIEZpbHRlcnMgQmFyIMOiwpTCgMOiwpTCgFxyXG4uYXBwbGllZC1maWx0ZXJzLWJhciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC44NzVyZW07XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgLmFwcGxpZWQtZmlsdGVycy1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMzc1cmVtO1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICAuZmlsdGVyLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgICB3aWR0aDogMS4xMjVyZW07XHJcbiAgICAgIGhlaWdodDogMS4xMjVyZW07XHJcbiAgICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFwcGxpZWQtY2hpcHMtd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gIH1cclxuXHJcbiAgLmZpbHRlci1jaGlwIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcblxyXG4gICAgLmNoaXAtbGFiZWwge1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jbGVhci1maWx0ZXJzLWJ0biB7XHJcbiAgICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgY29sb3I6ICNlZjQ0NDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAwLjg3NXJlbTtcclxuICAgICAgaGVpZ2h0OiAwLjg3NXJlbTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gU0VMRUNUSU9OUyDDosKAwpQgUHJlbWl1bSBBdXRvY29tcGxldGUgSW5wdXRzXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4uc2VsZWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleDogMSAxIDI4cmVtO1xyXG4gIG1pbi13aWR0aDogMTZyZW07XHJcbiAgbWF4LXdpZHRoOiAzNnJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLXdpZHRoOiAxNHJlbTtcclxuICBtYXgtd2lkdGg6IDE4cmVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmYWZiZmMgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC44NzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1kYy1ub3RjaGVkLW91dGxpbmUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZvcm0tZmllbGQtZmxleCB7IGhlaWdodDogMi43NXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuNXJlbSAwOyBtaW4taGVpZ2h0OiB1bnNldDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwgeyBcclxuICB0b3A6IDEuMzc1cmVtOyBcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLFxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwubWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjVyZW0pIHNjYWxlKDAuNzUpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHsgXHJcbiAgY29sb3I6ICM5NGEzYjggIWltcG9ydGFudDsgXHJcbiAgZm9udC13ZWlnaHQ6IDQwMCAhaW1wb3J0YW50OyBcclxuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM5NGEzYjggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHdpZHRoOiAxLjI1cmVtO1xyXG4gIGhlaWdodDogMS4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2U7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkOmhvdmVyIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkOmhvdmVyIG1hdC1pY29uW21hdFByZWZpeF0geyBjb2xvcjogIzY0NzQ4YjsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwgMTIzLCAyNTUsIDAuMTIpLCAwIDRweCAxNnB4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjA4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLmRpc2FibGVkLXRvb2xiYXItZmllbGQge1xyXG4gIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICBjb2xvcjogIzBmMTcyYSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMwZjE3MmEgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNDc1NTY5ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubG9jay1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxLjEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjM3NXJlbTtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1ZjkgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzk0YTNiOCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNlMmU4ZjAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHtcclxuICBjb2xvcjogIzk0YTNiOCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLy8gRW1wdHkgc3RhdGUgcGxhY2Vob2xkZXIgY2FyZCB3aGVuIG5vIHRlc3Qgc2VsZWN0ZWRcclxuLmVtcHR5LXJlcG9ydHMtc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZjhmYWZjIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgJGVhc2U7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZS1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAyOHJlbTtcclxuXHJcbiAgLmVtcHR5LXN0YXRlLWljb24ge1xyXG4gICAgd2lkdGg6IDQuMjVyZW07XHJcbiAgICBoZWlnaHQ6IDQuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xMikgMCUsIHJnYmEoMzEsIDEyMywgMjU1LCAwLjA0KSAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMSwgMTIzLCAyNTUsIDAuMik7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICAgIHdpZHRoOiAyLjI1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzFmN2JmZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW1wdHktc3RhdGUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICB9XHJcblxyXG4gIC5lbXB0eS1zdGF0ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW1wdHktYWN0aW9uLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgcGFkZGluZzogMCAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBdXRvY29tcGxldGUgcGFuZWwgc3R5bGluZ1xyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbiB7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDIuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzICRlYXNlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wNikgMCUsIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA0KSAxMDAlKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbi5tYXQtbWRjLW9wdGlvbi1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsIDEyMywgMjU1LCAwLjEpIDAlLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4wNikgMTAwJSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24gLm9wdGlvbi1tYWluIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uIC5vcHRpb24tc3ViIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuLmNvbnRyb2xzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjVyZW07IH1cclxuLmFjdGlvbi1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnJlZnJlc2gtaWNvbi1idG4sXHJcbi5yZWZyZXNoLWljb24tYnRuIHtcclxuICBtaW4td2lkdGg6IDIuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjYyNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC5yZWZyZXNoLXN2Zy1pY29uLFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZmlsbDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAkZWFzZTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBmaWxsOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGgge1xyXG4gICAgICBmaWxsOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVmcmVzaC1zdmctaWNvbiBwYXRoIHtcclxuICAgIGZpbGw6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIsICMxYTZmZTgpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnJlZnJlc2gtc3ZnLWljb24sXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblxyXG4gICAgICBzdmcsIHBhdGgge1xyXG4gICAgICAgIGZpbGw6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idXR0b24tb25lIHsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7IGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKSAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50OyBsZXR0ZXItc3BhY2luZzogMC4wMWVtOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzICRlYXNlLCBib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2UgIWltcG9ydGFudDsgfVxyXG4uYnV0dG9uLW9uZTpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMikgIWltcG9ydGFudDsgYm94LXNoYWRvdzogJHNoYWRvdy1tZCAhaW1wb3J0YW50OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDYyNXJlbSk7IH1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBGSUxURVJTIE9WRVJMQVkgUEFORUwgw6LCgMKUIE1vZGVybiBmaWVsZCBkZXNpZ25cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi5maWx0ZXJzLXBhbmVsIHtcclxuICB3aWR0aDogbWluKDM0cmVtLCBjYWxjKDEwMHZ3IC0gMnJlbSkpO1xyXG4gIG1heC1oZWlnaHQ6IDgydmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2ZhZmJmYyAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxLjI1cmVtIDNyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjE2KSwgMCAwLjM3NXJlbSAxcmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMjhzICRlYXNlLWJvdW5jZTtcclxufVxyXG5cclxuLmZpbHRlcnMtcGFuZWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4yNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmYmZjIDAlLCAjZmZmZmZmIDEwMCUpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5maWx0ZXJzLXBhbmVsLWhlYWRlciBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcbi5maWx0ZXJzLXBhbmVsLWhlYWRlciBoNCBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICB3aWR0aDogMS4xMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG59XHJcblxyXG4uZmlsdGVyLWJsb2NrLFxyXG4uZmlsdGVyLWdyaWQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAxLjI1cmVtIDAuNXJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi5maWx0ZXItY29sLWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZmlsdGVyLXJvdy10d28tY29sIHtcclxuICBkaXNwbGF5OiBncmlkICFpbXBvcnRhbnQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpICFpbXBvcnRhbnQ7XHJcbiAgZ2FwOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5maWx0ZXItaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4vLyBGaWx0ZXIgZmllbGQgOjpuZy1kZWVwIG92ZXJyaWRlcyDDosKAwpQgbW9kZXJuIGNvbXBhY3QgbG9va1xyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wMyk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtZmxleCB7IGhlaWdodDogMi43NXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjVyZW0gMDsgbWluLWhlaWdodDogdW5zZXQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7XHJcbiAgdG9wOiAxLjM3NXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbS5tYXQtZm9jdXNlZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCxcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mbG9hdGluZy1sYWJlbC5tZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSkgc2NhbGUoMC43NSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMCAwLjI1cmVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gaW5wdXQsXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtc2VsZWN0LXZhbHVlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLXNlbGVjdC1hcnJvdyxcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIC5tYXQtaWNvbiB7IGNvbG9yOiAjOTRhM2I4OyB9XHJcblxyXG4vLyBIb3ZlclxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtOmhvdmVyIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjYyNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG59XHJcbi8vIEZvY3VzXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0ubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwgMTIzLCAyNTUsIDAuMTIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG4vLyBEYXRlcGlja2VyIHRvZ2dsZSBidXR0b24gYWxpZ25tZW50XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSBidXR0b24ge1xyXG4gIHdpZHRoOiAxLjc1cmVtO1xyXG4gIGhlaWdodDogMS43NXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vLyBTZWFyY2hhYmxlIHNlbGVjdCBpbnB1dCBzdHlsaW5nIGluc2lkZSBzZWxlY3QgZHJvcGRvd24gb3B0aW9uc1xyXG46aG9zdCA6Om5nLWRlZXAgLnNlbGVjdC1zZWFyY2gtb3B0aW9uIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5zZWxlY3Qtc2VhcmNoLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC42MjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXBzZXVkby1jaGVja2JveCxcclxuICAubWF0LW1kYy1vcHRpb24tcHNldWRvLWNoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1zZWxlY3QtcGFuZWwgLnNlbGVjdC1zZWFyY2gtb3B0aW9uIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuXHJcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gsXHJcbiAgLm1hdC1tZGMtb3B0aW9uLXBzZXVkby1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyLWNoZWNrcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMS4yNXJlbSAwLjc1cmVtO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAuY2hlY2tib3gtaXRlbSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuXHJcbiAgICBtYXQtY2hlY2tib3gge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMjVyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZhZmJmYyAwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2UgIWltcG9ydGFudDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1tZCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNjI1cmVtKTtcclxufVxyXG4uZmlsdGVyLXJlc2V0LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDc1NTY5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODEyNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJvcmRlci1jb2xvciAwLjJzICRlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpbHRlci1yZXNldC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmMgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTEgIWltcG9ydGFudDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0biBtYXQtaWNvbixcclxuLmZpbHRlci1yZXNldC1idG4gbWF0LWljb24geyBmb250LXNpemU6IDFyZW07IHdpZHRoOiAxcmVtOyBoZWlnaHQ6IDFyZW07IG1hcmdpbi1yaWdodDogMC4yNXJlbTsgfVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVyZW0pOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cclxuQGtleWZyYW1lcyBzbGlkZURvd24geyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjM3NXJlbSk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIExpc3QgY2FyZCArIHRhYnMgd3JhcHBlciDDosKUwoDDosKUwoBcclxuLmxpc3QtY2FyZCB7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7IGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyAkZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgJGVhc2U7IG92ZXJmbG93OiB2aXNpYmxlICFpbXBvcnRhbnQ7IH1cclxuLmxpc3QtY2FyZDpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctaG92ZXI7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyB9XHJcbi5saXN0LXdyYXBwZXIgeyBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OyBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7IH1cclxuLmV4YW0tdGFicyB7IHdpZHRoOiAxMDAlOyB9XHJcbi5pbm5lci1hbmFseXRpY3MtdGFicyB7IHdpZHRoOiAxMDAlOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFpbiB0YWJzIChVc2VyIFJlcG9ydCAvIEFuYWx5dGljcyBSZXBvcnQpIMOiwpTCgMOiwpTCgFxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyB7XHJcbiAgLm1hdC1tZGMtdGFiLWhlYWRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlciwgI2UyZThmMCk7XHJcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW0gMC41cmVtO1xyXG4gIH1cclxuXHJcbiAgLm1hdC1tZGMtdGFiLWxhYmVsLWNvbnRhaW5lciB7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLXRhYi1sYWJlbHMge1xyXG4gICAgYmFja2dyb3VuZDogI0YxRjNGNjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNFMkU4RjA7XHJcbiAgICBtaW4taGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgLm1kYy10YWIge1xyXG4gICAgZmxleDogMTtcclxuICAgIGhlaWdodDogMi4zNzVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiAyLjM3NXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICM2NDc0OEI7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgJjpob3Zlcjpub3QoLm1kYy10YWItLWFjdGl2ZSkge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XHJcbiAgICAgIGNvbG9yOiAjMUUyOTNCO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcclxuICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgJGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYi1sYWJlbC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XHJcbiAgICAgIGNvbG9yOiBpbmhlcml0O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWRjLXRhYi0tYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkYgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzI1NjNlYikgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDgpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KSAhaW1wb3J0YW50O1xyXG5cclxuICAgIC5tZGMtdGFiX190ZXh0LWxhYmVsIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xLCAjMjU2M2ViKSAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhYi1sYWJlbC1pY29uIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xLCAjMjU2M2ViKSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUsXHJcbiAgLm1kYy10YWItaW5kaWNhdG9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLXRhYi1ib2R5LXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctMSwgI2ZmZmZmZik7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSW5uZXIgYW5hbHl0aWNzIHRhYnMgKENhdGVnb3J5IFJlcG9ydCAvIFF1ZXN0aW9uIFN1bW1hcnkpIMOiwpTCgMOiwpTCgFxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tYXQtbWRjLXRhYi1oZWFkZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IHBhZGRpbmc6MCAwLjc1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1hdC1tZGMtdGFiLWxhYmVscyB7IG1pbi1oZWlnaHQ6Mi41cmVtOyBnYXA6MC4yNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXdlaWdodDo2MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IHBhZGRpbmc6MCAxcmVtOyBtaW4taGVpZ2h0OjIuNXJlbTsgYm9yZGVyLXJhZGl1czowLjVyZW0gMC41cmVtIDAgMDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYjpob3ZlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMik7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiLS1hY3RpdmUgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTIpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX190ZXh0LWxhYmVsIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgdHJhbnNpdGlvbjpjb2xvciAwLjJzICRlYXNlOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUgeyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3JkZXItd2lkdGg6MC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBDYXRlZ29yeSBGaWx0ZXIgQmFubmVyIMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLXRhYi1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1maWx0ZXItYmFubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC43NXJlbTtcclxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjA4KSAwJSwgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDUpIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBhbmltYXRpb246IHNsaWRlRG93biAwLjI1cyAkZWFzZTtcclxuXHJcbiAgLmJhbm5lci10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0xLCAjMWUyOTNiKTtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjEyNXJlbTtcclxuICAgICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLTEsICMyNTYzZWIpO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjM3NXJlbTtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzI1NjNlYik7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEyKTtcclxuICAgICAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jbGVhci1maWx0ZXItYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGdhcDogMC4zNzVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xLCAjZmZmZmZmKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyLCAjY2JkNWUxKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMiwgIzQ3NTU2OSkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAubWRjLWJ1dHRvbl9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGdhcDogMC4zNzVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zLCAjNjQ3NDhiKTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgJGVhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY29sb3I6ICNlZjQ0NDQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXBvcnQtc3VtbWFyeS1ncmlkIHsgZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOjAuNzVyZW07IHBhZGRpbmc6MC44NzVyZW0gMXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4uYW5hbHl0aWNzLXN1bW1hcnktZ3JpZCB7IHBhZGRpbmc6MC4yNXJlbSAwIDAuNXJlbTsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTpub25lOyB9XHJcbi5zdW1tYXJ5LWNhcmQgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNjI1cmVtOyBtaW4td2lkdGg6MDsgcGFkZGluZzowLjVyZW0gMC44NzVyZW07IGJvcmRlcjoxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOjAuNzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3gtc2hhZG93OjAgMC4xMjVyZW0gMC41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IHRyYW5zaXRpb246dHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlLCBib3gtc2hhZG93IDAuMjVzICRlYXNlOyB9XHJcbi5zdW1tYXJ5LWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4xMjVyZW0pOyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OjAgMC41cmVtIDFyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfVxyXG4uc3VtbWFyeS1pY29uIHsgd2lkdGg6Mi4yNXJlbTsgaGVpZ2h0OjIuMjVyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmbGV4LXNocmluazowOyBib3JkZXItcmFkaXVzOjAuNjI1cmVtOyBiYWNrZ3JvdW5kOnZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IH1cclxuLnN1bW1hcnktaWNvbjpob3ZlciB7IHRyYW5zZm9ybTpzY2FsZSgxLjA1KTsgfVxyXG4uc3VtbWFyeS1pY29uIG1hdC1pY29uIHsgZm9udC1zaXplOjEuMTI1cmVtOyB3aWR0aDoxLjEyNXJlbTsgaGVpZ2h0OjEuMTI1cmVtOyB9XHJcbi8vIEljb24gY29sb3IgdmFyaWFudHNcclxuLnN1bW1hcnktaWNvbi0tc3R1ZGVudHMgeyBiYWNrZ3JvdW5kOnJnYmEoOTksMTAyLDI0MSwwLjEpOyBjb2xvcjojNjM2NmYxOyB9XHJcbi5zdW1tYXJ5LWljb24tLXBhZ2UgeyBiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwwLjEpOyBjb2xvcjojM2I4MmY2OyB9XHJcbi5zdW1tYXJ5LWljb24tLXNjb3JlIHsgYmFja2dyb3VuZDpyZ2JhKDI0NSwxNTgsMTEsMC4xKTsgY29sb3I6I2Y1OWUwYjsgfVxyXG4uc3VtbWFyeS1pY29uLS1wYXNzIHsgYmFja2dyb3VuZDpyZ2JhKDE2LDE4NSwxMjksMC4xKTsgY29sb3I6IzEwYjk4MTsgfVxyXG4uc3VtbWFyeS1pY29uLS1jYXRlZ29yaWVzIHsgYmFja2dyb3VuZDpyZ2JhKDEzOSw5MiwyNDYsMC4xKTsgY29sb3I6IzhiNWNmNjsgfVxyXG4uc3VtbWFyeS1pY29uLS1xdWVzdGlvbnMgeyBiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwwLjEpOyBjb2xvcjojM2I4MmY2OyB9XHJcbi5zdW1tYXJ5LWljb24tLWF0dGVtcHRzIHsgYmFja2dyb3VuZDpyZ2JhKDk5LDEwMiwyNDEsMC4xKTsgY29sb3I6IzYzNjZmMTsgfVxyXG4uc3VtbWFyeS1pY29uLS1taXN0YWtlcyB7IGJhY2tncm91bmQ6cmdiYSgyMzksNjgsNjgsMC4xKTsgY29sb3I6I2VmNDQ0NDsgfVxyXG4uc3VtbWFyeS1jb3B5IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjEyNXJlbTsgbWluLXdpZHRoOjA7IH1cclxuLnN1bW1hcnktbGFiZWwgeyBmb250LXNpemU6dmFyKC0tZm9udC14cyk7IGZvbnQtd2VpZ2h0OjcwMDsgbGV0dGVyLXNwYWNpbmc6MC4wOGVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4uc3VtbWFyeS12YWx1ZSB7IGZvbnQtc2l6ZTpjbGFtcCgxLjEyNXJlbSwgMC45NXJlbSArIDAuNXZ3LCAxLjVyZW0pOyBmb250LXdlaWdodDo4MDA7IGxpbmUtaGVpZ2h0OjEuMTsgbGV0dGVyLXNwYWNpbmc6LTAuMDNlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5zdW1tYXJ5LW1ldGEgeyBmb250LXNpemU6dmFyKC0tZm9udC14c20pOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0yKTsgd2hpdGUtc3BhY2U6bm93cmFwOyBvdmVyZmxvdzpoaWRkZW47IHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IH1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBUQUIgQUNUSU9OUyDDosKAwpQgQ29tcGFjdCBTZWFyY2ggJiBBY3Rpb24gQmFyIChJbnNpZGUgVGFicylcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi50YWItYWN0aW9ucyB7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1iZXR3ZWVuOnNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjFyZW07IHBhZGRpbmc6MC44NzVyZW0gMXJlbSAxcmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBtYXJnaW46MDsgfVxyXG5cclxuLy8gQ29tcGFjdCBTZWFyY2hcclxuLnRhYi1hY3Rpb25zIC5zZWFyY2ggeyBmbGV4OjE7IG1heC13aWR0aDoyMHJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC43NXJlbTsgcGFkZGluZzowIDAuNzVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IGJveC1zaGFkb3c6MCAwLjVyZW0gMXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4IHsgaGVpZ2h0OiAyLjM3NXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzc1cmVtIDA7IG1pbi1oZWlnaHQ6IHVuc2V0OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7IHRvcDoxLjE4NzVyZW07IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggaW5wdXQgeyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6dmFyKC0tdGhlbWUtMy1pY29uLTEpOyBtYXJnaW4tcmlnaHQ6MC41cmVtOyBmb250LXNpemU6MS4xMjVyZW07IHdpZHRoOjEuMTI1cmVtOyBoZWlnaHQ6MS4xMjVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IH1cclxuLnRhYi1hY3Rpb25zIC5zZWFyY2g6aG92ZXIgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbi50YWItYWN0aW9ucyAuc2VhcmNoOmhvdmVyIDo6bmctZGVlcCBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi8vIENvbXBhY3QgQWN0aW9uIEJ1dHRvbnNcclxuLnRhYi1hY3Rpb25zIC5jb250cm9scyB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyB9XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyB7IGRpc3BsYXk6ZmxleDsgZ2FwOjAuMzc1cmVtOyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvbiB7IGhlaWdodDoyLjI1cmVtOyBwYWRkaW5nOjAgMC44NzVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IGJvcmRlci1yYWRpdXM6MC42MjVyZW07IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZ2FwOjAuMzc1cmVtOyB0cmFuc2l0aW9uOmFsbCAwLjJzICRlYXNlOyB9XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b24gbWF0LWljb24geyBmb250LXNpemU6MXJlbTsgd2lkdGg6MXJlbTsgaGVpZ2h0OjFyZW07IH1cclxuLy8gU2Vjb25kYXJ5IGJ1dHRvbiBzdHlsZSAoU2VhcmNoLCBFeHBvcnQpXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LXN0cm9rZWQtYnV0dG9uXSxcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtYnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTtcclxufVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1zdHJva2VkLWJ1dHRvbl06aG92ZXIsXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWJ1dHRvbl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG59XHJcbi8vIFByaW1hcnkgYnV0dG9uIHN0eWxlXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWZsYXQtYnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbn1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtZmxhdC1idXR0b25dOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMCUsIHZhcigtLWJ1dHRvbi0xKSAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUHJlbWl1bSB0YWJsZSDDosKUwoDDosKUwoBcclxuLnRhYmxlLXdyYXAge1xyXG4gIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogNTIwcHg7XHJcbiAgbWF4LWhlaWdodDogbWF4KDU0MHB4LCBjYWxjKDEwMHZoIC0gMTgwcHgpKTtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW0gMC43NXJlbTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjODE4Y2Y4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDAuNjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAwLjYyNXJlbTtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDQpOyBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiAjODE4Y2Y4OyBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDsgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHsgYmFja2dyb3VuZDogIzRmNDZlNTsgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7IGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7IH1cclxufVxyXG5cclxuLmFuYWx5dGljcy10YWJsZS1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjNDc1NTY5KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyLCAjZTJlOGYwKTtcclxufVxyXG4ucHJlbWl1bS10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlICFpbXBvcnRhbnQ7IGJvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnByZW1pdW0tdGFibGUgdGgubWF0LWhlYWRlci1jZWxsLFxyXG46aG9zdCA6Om5nLWRlZXAgLnByZW1pdW0tdGFibGUgdGgubWF0LW1kYy1oZWFkZXItY2VsbCxcclxuLnByZW1pdW0tdGFibGUgdGgubWF0LWhlYWRlci1jZWxsLFxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtbWRjLWhlYWRlci1jZWxsIHsgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50OyB0b3A6IDAgIWltcG9ydGFudDsgei1pbmRleDogMTAgIWltcG9ydGFudDsgYmFja2dyb3VuZDogdmFyKC0tdGFibGUtaGVhZGVyLWJnLCAjMWUyOTNiKSAhaW1wb3J0YW50OyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODEyNXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci10ZXh0LCAjZmZmZmZmKSAhaW1wb3J0YW50OyBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTsgYm9yZGVyLWJvdHRvbTogMC4xMjVyZW0gc29saWQgI2UyZThmMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQsXHJcbi5wcmVtaXVtLXRhYmxlIHRoLm1hdC1tZGMtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQgeyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucHJlbWl1bS10YWJsZSB0ZC5tYXQtY2VsbCxcclxuLnByZW1pdW0tdGFibGUgdGQubWF0LW1kYy1jZWxsIHsgcGFkZGluZzogMC4zOHJlbSAwLjc1cmVtOyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjMzM0MTU1KTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkICNmMWY1Zjk7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRyLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHRkLFxyXG4ucHJlbWl1bS10YWJsZSB0ci5tYXQtbWRjLXJvdzpudGgtY2hpbGQoZXZlbikgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwyNTAsMjUyLDAuNSk7IH1cclxuLnN0dWRlbnQtbmFtZSB7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiB2YXIoLS1mb250LW1kKTsgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLnN0dWRlbnQtbmFtZTpob3ZlciB7IG9wYWNpdHk6IDAuODU7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTI1cmVtOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4wNjI1cmVtKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFN0dWRlbnQgLyBDYXRlZ29yeSBhdmF0YXIgY2VsbHMgw6LClMKAw6LClMKAXHJcbi5zdHVkZW50LWNlbGwgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNjI1cmVtOyBjdXJzb3I6cG9pbnRlcjsgfVxyXG4uc3R1ZGVudC1hdmF0YXIgeyB3aWR0aDoycmVtOyBoZWlnaHQ6MnJlbTsgYm9yZGVyLXJhZGl1czowLjVyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmb250LXdlaWdodDo3MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOiNmZmY7IGZsZXgtc2hyaW5rOjA7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTsgfVxyXG4uY2F0ZWdvcnktY2VsbCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC42MjVyZW07IGN1cnNvcjpwb2ludGVyOyB9XHJcbi5jYXRlZ29yeS1hdmF0YXIgeyB3aWR0aDoycmVtOyBoZWlnaHQ6MnJlbTsgYm9yZGVyLXJhZGl1czowLjVyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmb250LXdlaWdodDo3MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOiNmZmY7IGZsZXgtc2hyaW5rOjA7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwOTNmYiAwJSwgI2Y1NTc2YyAxMDAlKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hcmtzIGlubGluZSDDosKUwoDDosKUwoBcclxuLm1hcmtzLWlubGluZSB7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5tYXJrcy1zZXAgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IG1hcmdpbjowIDAuMTI1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGVyY2VudGFnZSBiYWRnZSDDosKUwoDDosKUwoBcclxuLnBjdC1iYWRnZSB7IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowLjE4NzVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOjAuMzc1cmVtOyBmb250LXNpemU6MC43NXJlbTsgZm9udC13ZWlnaHQ6NzAwOyBiYWNrZ3JvdW5kOnJnYmEoOTksMTAyLDI0MSwwLjA4KTsgY29sb3I6IzYzNjZmMTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hbnVhbCByZXZpZXcgc3RhdHVzIMOiwpTCgMOiwpTCgFxyXG4ucmV2aWV3LXN0YXR1cyB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjUwMDsgfVxyXG4ucmV2aWV3LXN0YXR1cy5yZXZpZXctcGVuZGluZyB7IGNvbG9yOnZhcigtLW9yYW5nZS10ZXh0KTsgZm9udC13ZWlnaHQ6NjAwOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmVzdWx0IHBpbGxzIMOiwpTCgMOiwpTCgFxyXG4ucmVzdWx0LXBpbGwgeyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IHBhZGRpbmc6MC4xODc1cmVtIDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOjFyZW07IGZvbnQtc2l6ZTowLjY4NzVyZW07IGZvbnQtd2VpZ2h0OjcwMDsgbGV0dGVyLXNwYWNpbmc6MC4wM2VtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjA0KTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi5yZXN1bHQtcGlsbC5yZXN1bHQtcGFzcyB7IGJhY2tncm91bmQ6dmFyKC0tZ3JlZW4tYmcpOyBjb2xvcjp2YXIoLS1ncmVlbi10ZXh0KTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4ucmVzdWx0LXBpbGwucmVzdWx0LWZhaWwgeyBiYWNrZ3JvdW5kOnZhcigtLXJlZC1iZyk7IGNvbG9yOnZhcigtLXJlZC10ZXh0KTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS1icmVkLWJvcmRlcik7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBBbmFseXRpY3Mgc2VjdGlvbiDDosKUwoDDosKUwoBcclxuLmFuYWx5dGljcy1zZWN0aW9uIHsgcGFkZGluZzowLjc1cmVtIDFyZW07IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC43NXJlbTsgfVxyXG4uYW5hbHl0aWNzLXNlY3Rpb24gLnRhYmxlLXdyYXAgeyBtaW4taGVpZ2h0OiA1MjBweDsgbWF4LWhlaWdodDogbWF4KDU0MHB4LCBjYWxjKDEwMHZoIC0gMTgwcHgpKTsgb3ZlcmZsb3cteDphdXRvICFpbXBvcnRhbnQ7IG92ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOjAuNjI1cmVtOyBib3gtc2hhZG93OiRzaGFkb3ctc207IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFibGUtd3JhcC5xdWVzdGlvbi1zdW1tYXJ5LXdyYXAsXHJcbjpob3N0IDo6bmctZGVlcCAuYW5hbHl0aWNzLXNlY3Rpb24gLnRhYmxlLXdyYXAucXVlc3Rpb24tc3VtbWFyeS13cmFwIHsgbWluLWhlaWdodDogYXV0byAhaW1wb3J0YW50OyBtYXgtaGVpZ2h0OiBub25lICFpbXBvcnRhbnQ7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQYWdlciDDosKUwoDDosKUwoBcclxuLnBhZ2VyIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGdhcDoxcmVtOyBwYWRkaW5nOjAuODc1cmVtIDEuMjVyZW07IGJvcmRlci10b3A6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgZm9udC1zaXplOjAuODEyNXJlbTsgZm9udC13ZWlnaHQ6NjAwOyBsZXR0ZXItc3BhY2luZzowLjAxZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMik7IH1cclxuLnBhZ2VyIHNwYW4geyBwYWRkaW5nOjAuMjVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czowLjM3NXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLnBhZ2VyIGJ1dHRvbiB7IGJvcmRlci1yYWRpdXM6MC41cmVtICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OjYwMCAhaW1wb3J0YW50OyBwYWRkaW5nOjAuMzc1cmVtIDFyZW0gIWltcG9ydGFudDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlICFpbXBvcnRhbnQ7IH1cclxuLnBhZ2VyIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIgeyBib3gtc2hhZG93OiRzaGFkb3ctbWQgIWltcG9ydGFudDsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuMDYyNXJlbSk7IGJhY2tncm91bmQ6dmFyKC0tYmctMikgIWltcG9ydGFudDsgfVxyXG4ucGFnZXIgYnV0dG9uW2Rpc2FibGVkXSB7IG9wYWNpdHk6MC40OyB9XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xyXG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH1cclxufVxyXG5cclxuLmxvYWRlci1wbGFjZWhvbGRlciB7IFxyXG4gIHBhZGRpbmc6IDIuNXJlbTsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjUpOyBcclxuICBmb250LXNpemU6IDAuODc1cmVtOyBcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwLjAyKSAyNSUsIHJnYmEoMCwwLDAsMC4wNSkgNTAlLCByZ2JhKDAsMCwwLDAuMDIpIDc1JSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDEuNXMgaW5maW5pdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFdyb25nLWFuc3dlciBsaW5rIMOiwpTCgMOiwpTCgFxyXG4ud3Jvbmctc3VtbWFyeS1saW5rIHsgbWFyZ2luLWxlZnQ6IDAuMzc1cmVtOyBmb250LXNpemU6IDAuODVyZW07IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGN1cnNvcjogcG9pbnRlcjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xMjVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLndyb25nLXN1bW1hcnktbGluazpob3ZlciB7IG9wYWNpdHk6IDAuODsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTI1cmVtKTsgfVxyXG4ud2EtY291bnQtbGluayB7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTI1cmVtOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiA3MDA7IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgfVxyXG4ud2EtY291bnQtbGluazpob3ZlciB7IG9wYWNpdHk6IDAuODU7IH1cclxuLndhLWFuc3dlci1saW5rIHsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbi53YS1hbnN3ZXItbGluazpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjA2MjVyZW0pOyB9XHJcbi5tdXRlZCB7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtc2l6ZTogMC44NXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFNoYXJlZCBiYWNrZHJvcCArIHBhbmVsIMOiwpTCgMOiwpTCgFxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OiAwIH0gdG8geyBvcGFjaXR5OiAxIH0gfVxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAgeyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuMjVyZW0pIHNjYWxlKDAuOTYpIH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgfSB9XHJcbkBrZXlmcmFtZXMgc3VidGxlUHVsc2UgeyAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMS41cmVtIDMuNzVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfSA1MCUgeyBib3gtc2hhZG93OiAwIDEuNzVyZW0gNHJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpOyB9IH1cclxuXHJcbi53cm9uZy1zdW1tYXJ5LWJhY2tkcm9wIHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDE1LCAyMywgNDIsIDAuNTUpIDAlLCByZ2JhKDMwLCA0MSwgNTksIDAuNzUpIDEwMCUpOyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjc1cmVtKSBzYXR1cmF0ZSgxNDAlKTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNzVyZW0pIHNhdHVyYXRlKDE0MCUpOyB6LWluZGV4OiAxMDA1MDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBhZGRpbmc6IDEuNXJlbTsgYW5pbWF0aW9uOiBmYWRlSW4gMC4yNXMgJGVhc2U7IH1cclxuXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsLFxyXG4ucmVzb3VyY2UtcGFuZWwgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiBtaW4oNTZyZW0sIDkydncpOyBtYXgtaGVpZ2h0OiA4OHZoOyB6LWluZGV4OiAxMDA2MDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMzVzICRlYXNlLWJvdW5jZTsgbWFyZ2luOiBhdXRvOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5jYXJkLFxyXG4ucmVzb3VyY2UtcGFuZWwgLmNhcmQgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtYXgtaGVpZ2h0OiA4OHZoOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMS4yNXJlbTsgYm94LXNoYWRvdzogMCAycmVtIDQuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMjgpLCAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQYW5lbCBoZWFkZXIgw6LClMKAw6LClMKAXHJcbi5wYW5lbC1oZWFkZXIgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBnYXA6MXJlbTsgcGFkZGluZzoxLjI1cmVtIDEuNXJlbTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgZmxleC1zaHJpbms6MDsgfVxyXG4ucGFuZWwtaGVhZGVyOjpiZWZvcmUgeyBjb250ZW50OicnOyBwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgYm90dG9tOjA7IHdpZHRoOjAuMTg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1idXR0b24tMSksIHRyYW5zcGFyZW50KTsgYm9yZGVyLXJhZGl1czowIDAuMTg3NXJlbSAwLjE4NzVyZW0gMDsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItaW5mbyB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC44NzVyZW07IG1pbi13aWR0aDowOyBmbGV4OjE7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWNvcHkgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuMTg3NXJlbTsgbWluLXdpZHRoOjA7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWljb24geyB3aWR0aDozcmVtOyBoZWlnaHQ6M3JlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZsZXgtc2hyaW5rOjA7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzowIDAuNXJlbSAxLjI1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyksIGluc2V0IDAgMCAwIDAuMDYyNXJlbSB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWljb24gbWF0LWljb24geyBmb250LXNpemU6MS4zNzVyZW07IHdpZHRoOjEuMzc1cmVtOyBoZWlnaHQ6MS4zNzVyZW07IH1cclxuLnBhbmVsLWhlYWRlciBoNCB7IG1hcmdpbjowOyBmb250LXNpemU6MS4wNjI1cmVtOyBmb250LXdlaWdodDo4MDA7IGxldHRlci1zcGFjaW5nOi0wLjAyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4ucGFuZWwtaGVhZGVyIC5wYW5lbC1zdWIgeyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IG1hcmdpbi10b3A6MDsgbGluZS1oZWlnaHQ6MS40OyB9XHJcbi5wYW5lbC1oZWFkZXIgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0sXHJcbi5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0biB7XHJcbiAgd2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMikgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAyLjVyZW0gIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dIC5tYXQtbWRjLWJ1dHRvbi10b3VjaC10YXJnZXQsXHJcbjpob3N0IDo6bmctZGVlcCAucGFuZWwtaGVhZGVyIC5wYW5lbC1jbG9zZS1idG4gLm1hdC1tZGMtYnV0dG9uLXRvdWNoLXRhcmdldCB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXSBtYXQtaWNvbixcclxuOmhvc3QgOjpuZy1kZWVwIC5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0biBtYXQtaWNvbiB7XHJcbiAgd2lkdGg6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXIgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl06aG92ZXIsXHJcbi5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wOCkgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMykgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dOmhvdmVyIG1hdC1pY29uLFxyXG4ucGFuZWwtaGVhZGVyIC5wYW5lbC1jbG9zZS1idG46aG92ZXIgbWF0LWljb24ge1xyXG4gIGNvbG9yOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFuZWwgYm9keSDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHkgeyBwYWRkaW5nOjEuMTI1cmVtIDEuMzc1cmVtOyBvdmVyZmxvdzphdXRvOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucXVlc3Rpb24tdGl0bGUgeyBmb250LXdlaWdodDo3MDA7IG1hcmdpbi1ib3R0b206MC44NzVyZW07IGZvbnQtc2l6ZTowLjkzNzVyZW07IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc21hbGwtbXV0ZWQgeyBmb250LXNpemU6MC42ODc1cmVtOyBwYWRkaW5nLWxlZnQ6MDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3VtbWFyeSB0YWJsZSDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgeyB3aWR0aDoxMDAlOyBib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7IGJvcmRlci1zcGFjaW5nOjAgMC41cmVtOyBtYXJnaW46MCBhdXRvOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHRoIHsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MC43NXJlbSAxcmVtOyBmb250LXdlaWdodDo3MDA7IGZvbnQtc2l6ZTowLjc1cmVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOjAuMDZlbTsgY29sb3I6dmFyKC0tdGhlbWUtMS10ZXh0LTEpOyBiYWNrZ3JvdW5kOnZhcigtLXRhYmxlLWhlYWRlci1iZyk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAuNjI1cmVtIDAgMCAwLjYyNXJlbTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB0aDpsYXN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowIDAuNjI1cmVtIDAuNjI1cmVtIDA7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdHIgeyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkIHsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IHRleHQtYWxpZ246Y2VudGVyOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpmaXJzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6MC42MjVyZW0gMCAwIDAuNjI1cmVtOyB0ZXh0LWFsaWduOmxlZnQ7IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOmxhc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAgMC42MjVyZW0gMC42MjVyZW0gMDsgfVxyXG4ud2EtYW5zd2VyLWxpbmssIC53YS1jb3VudC1saW5rIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBmb250LXdlaWdodDo2MDA7IHRyYW5zaXRpb246b3BhY2l0eSAwLjE1cyAkZWFzZTsgfVxyXG4ud2EtYW5zd2VyLWxpbms6aG92ZXIsIC53YS1jb3VudC1saW5rOmhvdmVyIHsgb3BhY2l0eTowLjc1OyB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6MC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTdW1tYXJ5IGFjdGlvbnMgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LWFjdGlvbnMsXHJcbi5zdW1tYXJ5LWFjdGlvbnMgeyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpmbGV4LWVuZDsgZ2FwOjAuNXJlbTsgcGFkZGluZzowLjg3NXJlbSAxLjM3NXJlbTsgYm9yZGVyLXRvcDowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgfVxyXG4uc3VtbWFyeS1hY3Rpb25zIGJ1dHRvbiB7IGJvcmRlci1yYWRpdXM6MC42MjVyZW0gIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6NzAwICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjE1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjE1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMTVzICRlYXNlICFpbXBvcnRhbnQ7IH1cclxuLnN1bW1hcnktYWN0aW9ucyBidXR0b246aG92ZXIgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4wNjI1cmVtKTsgYm94LXNoYWRvdzowIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZykgIWltcG9ydGFudDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFJlc291cmNlIHBhbmVsIMOiwpTCgMOiwpTCgFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHksIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5yZXNvdXJjZS1saXN0IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjc1cmVtOyB9XHJcbi5yZXNvdXJjZS1saXN0IHsgbGlzdC1zdHlsZTpub25lOyBwYWRkaW5nOjA7IG1hcmdpbjowOyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuNzVyZW07IH1cclxuLnJlc291cmNlLWxpc3QgbGkgeyBwYWRkaW5nOjAuODc1cmVtIDFyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjc1cmVtOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgdHJhbnNpdGlvbjpib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2U7IH1cclxuLnJlc291cmNlLWxpc3QgbGk6aG92ZXIgeyBib3gtc2hhZG93OjAgMXJlbSAycmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuLnJlcy10aXRsZSB7IGZvbnQtd2VpZ2h0OjcwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyBsZXR0ZXItc3BhY2luZzotMC4wMWVtOyB9XHJcbi5yZXMtZGVzYyB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4ucmVzLWFjdGlvbnMgYSB7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKTsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXNpemU6IDAuODEyNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjE1cyAkZWFzZTsgfVxyXG4ucmVzLWFjdGlvbnMgYTpob3ZlciB7IG9wYWNpdHk6IDAuOTsgYm94LXNoYWRvdzogJHNoYWRvdy1zbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFNjcm9sbGJhciDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHksXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keSxcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5IHsgb3ZlcmZsb3c6IGF1dG87IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgaGVpZ2h0OiAwLjM3NXJlbTsgd2lkdGg6IDAuMzc1cmVtOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFVzZXIgUmV2aWV3IFBhbmVsIMOiwpTCgMOiwpTCgFxyXG4udXNlci1yZXZpZXctcGFuZWwgeyB3aWR0aDogbWluKDcycmVtLCA5NHZ3KTsgbWF4LWhlaWdodDogOTB2aDsgbWFyZ2luOiBhdXRvOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAuY2FyZCB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBtYXgtaGVpZ2h0Ojkwdmg7IGJvcmRlci1yYWRpdXM6MS4yNXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJveC1zaGFkb3c6MCAycmVtIDQuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMjgpLCAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBvdmVyZmxvdzpoaWRkZW47IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBnYXA6MXJlbTsgcGFkZGluZzoxLjI1cmVtIDEuNXJlbTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgZmxleC1zaHJpbms6MDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlcjo6YmVmb3JlIHsgY29udGVudDonJzsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDowLjE4NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYnV0dG9uLTEpLCB0cmFuc3BhcmVudCk7IGJvcmRlci1yYWRpdXM6MCAwLjE4NzVyZW0gMC4xODc1cmVtIDA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pbmZvIHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjVyZW07IGZsZXg6MTsgbWluLXdpZHRoOjA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIHsgd2lkdGg6M3JlbTsgaGVpZ2h0OjNyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZykgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjVyZW0gMS4yNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpLCBpbnNldCAwIDAgMCAwLjA2MjVyZW0gdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBmbGV4LXNocmluazowOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxLjM3NXJlbTsgd2lkdGg6MS4zNzVyZW07IGhlaWdodDoxLjM3NXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciBoNCB7IG1hcmdpbjowOyBmb250LXNpemU6MS4xMjVyZW07IGZvbnQtd2VpZ2h0OjgwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciBoMyB7IG1hcmdpbjowOyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyBmbGV4LXdyYXA6d3JhcDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuc2NvcmUgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMik7IGZvbnQtd2VpZ2h0OjYwMDsgcGFkZGluZzowLjI1cmVtIDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0IHsgZm9udC13ZWlnaHQ6NzAwOyBwYWRkaW5nOjAuMjVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czo2Mi41cmVtOyBmb250LXNpemU6MC43NXJlbTsgbGV0dGVyLXNwYWNpbmc6MC4wNGVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGJveC1zaGFkb3c6MCAwLjEyNXJlbSAwLjVyZW0gcmdiYSgxNSwyMyw0MiwwLjA4KTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0LnBhc3MgeyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0LmZhaWwgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXZpZXctY2xvc2UtYnRuIHtcclxuICB3aWR0aDogMi43NXJlbTtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgbWluLXdpZHRoOiAyLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZTtcclxuICBmbGV4OiAwIDAgMi43NXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0biBtYXQtaWNvbiB7XHJcbiAgd2lkdGg6IDEuMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuMzc1cmVtIDAuODc1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG46Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogMC4xMjVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwLjEyNXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLXN1YiB7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5IHsgZmxleDoxOyBvdmVyZmxvdzphdXRvOyBtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAxMHJlbSk7IHBhZGRpbmc6IDEuNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEF0dGVtcHQgaGVhZGVyIMOiwpTCgMOiwpTCgFxyXG4uYXR0ZW1wdC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDAuMzc1cmVtOyBwYWRkaW5nOiAwLjc1cmVtIDA7IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpOyBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTsgfVxyXG4uYXR0ZW1wdC1oZWFkZXIgaDUgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjc1cmVtOyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTsgfVxyXG4uYXR0ZW1wdC1oZWFkZXIgLnNjb3JlLWJhZGdlIHsgYmFja2dyb3VuZDogI2U5ZjdlZjsgY29sb3I6ICMwYTgwNDM7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44NzVyZW07IG1hcmdpbi1sZWZ0OiBhdXRvOyBsZXR0ZXItc3BhY2luZzogMC4wMWVtOyB9XHJcbi5hdHRlbXB0LW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNzVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpOyBmb250LXNpemU6IDAuODEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFF1ZXN0aW9uIHJldmlldyBjYXJkcyDDosKUwoDDosKUwoBcclxuLnF1ZXN0aW9ucy1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxcmVtOyBtYXJnaW4tdG9wOiAwLjVyZW07IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIHsgcG9zaXRpb246cmVsYXRpdmU7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC44NzVyZW07IHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlOyBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMzc1cmVtIHJnYmEoMTUsMjMsNDIsMC4wMyk7IG92ZXJmbG93OmhpZGRlbjsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQ6OmJlZm9yZSB7IGNvbnRlbnQ6Jyc7IHBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBib3R0b206MDsgd2lkdGg6MC4xODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJ1dHRvbi0xKSAwJSwgcmdiYSg5OSwxMDIsMjQxLDAuNCkgMTAwJSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkOmhvdmVyIHsgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNzVyZW0gcmdiYSgxNSwyMyw0MiwwLjA4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMjUpOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZCAucS10ZXh0IHsgZm9udC13ZWlnaHQ6IDUwMDsgbGluZS1oZWlnaHQ6IDEuNTU7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIC5tYXJrLWJhZGdlIHsgZmxvYXQ6IHJpZ2h0OyBiYWNrZ3JvdW5kOiAjZmZmM2YzOyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjc1cmVtOyB9XHJcblxyXG4ucS1oZWFkLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogMXJlbTsgcGFkZGluZy1ib3R0b206IDFyZW07IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBkYXNoZWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5xLWxlZnQgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuODc1cmVtOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XHJcbi5xLWJvZHkgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDAuNXJlbTsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XHJcbi5xLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XHJcbi5xLWluZGV4IHsgd2lkdGg6IDIuMjVyZW07IGhlaWdodDogMi4yNXJlbTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwxMDIsMjQxLDAuMTgpIDAlLCByZ2JhKDk5LDEwMiwyNDEsMC4wNikgMTAwJSk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjE4KTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXdlaWdodDogODAwOyBmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBmbGV4LXNocmluazogMDsgfVxyXG4ucS1yaWdodCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC42MjVyZW07IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5xLWJhZGdlIHsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IHBhZGRpbmc6IDAuMjVyZW0gMC42MjVyZW07IGZvbnQtc2l6ZTogMC42ODc1cmVtOyBsaW5lLWhlaWdodDogMXJlbTsgd2lkdGg6IGZpdC1jb250ZW50OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMC4wNmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XHJcbi5xLWluZm8geyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXNpemU6IDAuODEyNXJlbTsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4zNzVyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuLnEtaW5mbyBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMC45Mzc1cmVtOyB3aWR0aDogMC45Mzc1cmVtOyBoZWlnaHQ6IDAuOTM3NXJlbTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucS1tYXJrcy5zbWFsbC1tdXRlZCB7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBRdWVzdGlvbiBvcHRpb25zIChjaG9vc2UgLyBtdWx0aSkgw6LClMKAw6LClMKAXHJcbi5xLW9wdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMC42MjVyZW07IH1cclxuLnEtb3B0aW9ucy50d28tY29sIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDAuNzVyZW07IH1cclxuLnEtb3B0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjc1cmVtOyBwYWRkaW5nOiAwLjc1cmVtIDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4xKTsgYmFja2dyb3VuZDogI2Y4ZmJmZjsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgYmFja2dyb3VuZCAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlOyB9XHJcbi5xLW9wdGlvbjpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xMjVyZW0pOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgfVxyXG4ub3B0LWxlZnQgeyB3aWR0aDogMi41cmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC1zaHJpbms6IDA7IH1cclxuLm9wdC1sZWZ0IC5vcHQtbWFyayB7IHdpZHRoOiAycmVtOyBoZWlnaHQ6IDJyZW07IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODEyNXJlbTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyAkZWFzZTsgfVxyXG4ub3B0LWJvZHkgeyBmbGV4OiAxOyBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtOyBhbGlnbi1zZWxmOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiAxLjQ1OyB9XHJcbi5vcHQtYmFkZ2UgeyBtYXJnaW4tbGVmdDogYXV0bzsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjM3NXJlbTsgZmxleC1zaHJpbms6IDA7IH1cclxuLmJhZGdlIHsgcGFkZGluZzogMC4yNXJlbSAwLjYyNXJlbTsgYm9yZGVyLXJhZGl1czogMXJlbTsgZm9udC1zaXplOiAwLjY4NzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGxldHRlci1zcGFjaW5nOiAwLjAyZW07IH1cclxuLmJhZGdlLnlvdXItYW5zd2VyIHsgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJnKTsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnJlZC1ib3JkZXIpOyB9XHJcbi5iYWRnZS5jb3JyZWN0IHsgYmFja2dyb3VuZDogI2U4ZjllZjsgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4uYmFkZ2UubWlzc2VkIHsgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1iZyk7IGNvbG9yOiB2YXIoLS1iYmx1ZS10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtYmcpOyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uc2VsZWN0ZWQgLm9wdC1tYXJrIHsgYmFja2dyb3VuZDogcmdiYSgxODUsMjgsMjgsMC4xKTsgfVxyXG4ucS1vcHRpb24uY29ycmVjdCB7IGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLWJnKTsgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLW9wdGlvbi5jb3JyZWN0IC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMjIsMTAxLDUyLDAuMSk7IH1cclxuLnEtb3B0aW9uLm1pc3NlZCB7IGJhY2tncm91bmQ6IHZhcigtLWJsdWUtYmcpOyBjb2xvcjogdmFyKC0tYmJsdWUtdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24ubWlzc2VkIC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMTEsMTAyLDIwOCwwLjEpOyB9XHJcblxyXG4ucS1zZWxlY3RlZCwgLnEtbWFya3MgeyBtYXJnaW4tdG9wOiAwLjVyZW07IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuLnEtZmVlZGJhY2sgeyBtYXJnaW4tdG9wOiAwLjYyNXJlbTsgYmFja2dyb3VuZDogcmdiYSgyNDAsMjQ4LDI1NSwwLjYpOyBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNzUpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxuLnEtZXZhbHVhdGlvbi1zdGF0ZSB7IG1hcmdpbi10b3A6IDAuNjI1cmVtOyBwYWRkaW5nOiAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDFyZW07IH1cclxuLnEtZXZhbHVhdGlvbi1zdGF0ZS5mYWlsZWQgeyBjb2xvcjogIzhhMWMxYzsgYmFja2dyb3VuZDogI2ZmZjJmMjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2VmYjRiNDsgfVxyXG4ucS1ldmFsdWF0aW9uLXN0YXRlLnBlbmRpbmcgeyBjb2xvcjogIzZjNGEwMDsgYmFja2dyb3VuZDogI2ZmZjhlNjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2U3Y2E3YTsgfVxyXG4ucmV0cnktZXZhbHVhdGlvbi1idG4geyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCBjdXJyZW50Q29sb3I7IGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyBwYWRkaW5nOiAwLjRyZW0gMC43cmVtOyBjb2xvcjogaW5oZXJpdDsgYmFja2dyb3VuZDogI2ZmZjsgY3Vyc29yOiBwb2ludGVyOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbi5yZXRyeS1ldmFsdWF0aW9uLWJ0bjpkaXNhYmxlZCB7IGN1cnNvcjogd2FpdDsgb3BhY2l0eTogMC42OyB9XHJcbi5yZXZpZXctZW1wdHkgeyBwYWRkaW5nOiAwLjc1cmVtIDAuMjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpOyBmb250LXN0eWxlOiBpdGFsaWM7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBiYWRnZSBzdGF0ZXMgw6LClMKAw6LClMKAXHJcbi5xLW1hcmtzLm1hcmstcG9zaXRpdmUsXHJcbi5xLW1hcmtzLm1hcmstbmVnYXRpdmUsXHJcbi5xLW1hcmtzLm1hcmstbWlkIHtcclxuICBtaW4td2lkdGg6IDMuMjVyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucS1tYXJrcy5tYXJrLXBvc2l0aXZlIHsgYmFja2dyb3VuZDogI2U4ZjllZjsgY29sb3I6ICMwYjhhNDU7IH1cclxuLnEtbWFya3MubWFyay1uZWdhdGl2ZSB7IGJhY2tncm91bmQ6ICNmZmYyZjQ7IGNvbG9yOiAjYjAyYTM3OyB9XHJcbi5xLW1hcmtzLm1hcmstbWlkIHsgYmFja2dyb3VuZDogI2ZmZjhlNjsgY29sb3I6ICNiMzZhMDA7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBGaWxsIHF1ZXN0aW9uIMOiwpTCgMOiwpTCgFxyXG4ucS1maWxsIC5maWxsLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC43NXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uIHsgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgYmFja2dyb3VuZDogI2ZmZjdlZDsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgyNDUsMTY2LDM1LDAuMSk7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgJGVhc2U7IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb246aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LXNtOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uLnNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2U4ZjZmZjsgYm9yZGVyLWNvbG9yOiByZ2JhKDIsMTEyLDI1NSwwLjE1KTsgfVxyXG4ucS1maWxsIC5maWxsLW9wdGlvbi5jb3JyZWN0IHsgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tYmcpOyBib3JkZXItY29sb3I6IHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLWZpbGwgLmZpbGwtY29ycmVjdCB7IHBhZGRpbmc6IDAuNjI1cmVtIDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1iZyk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgRGVzY3JpcHRpdmUgcmV2aWV3IMOiwpTCgMOiwpTCgFxyXG4ucS1kZXNjcmlwdGl2ZSB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMC44NzVyZW07IH1cclxuLmRlc2NyaXB0aXZlLWFuc3dlcnMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpOyBnYXA6IDAuODc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAwLjc1cmVtOyBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1iZyk7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuZGVzYy1xdWVzdGlvbiB7IGZsZXg6IDEgMSBhdXRvOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAucXVlc3Rpb24tbGFiZWwgeyBmb250LXNpemU6IDAuNjg3NXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTsgY29sb3I6ICM4YzZhZDY7IGJhY2tncm91bmQ6IHJnYmEoMTQwLDEwNiwyMTQsMC4wOCk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogMC4zNzVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAucXVlc3Rpb24tdmFsdWUgeyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLmRlc2Mtc2NvcmUgeyB3aWR0aDogOC43NXJlbTsgZmxleDogMCAwIDguNzVyZW07IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5zY29yZS1sYWJlbCB7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnNjb3JlLXZhbHVlIHsgZm9udC1zaXplOiAxLjEyNXJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICNmMzljMTI7IGJhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA0KTsgbWFyZ2luLXRvcDogMC4zNzVyZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtbW9kZWwgeyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS0yKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zdHVkZW50IHsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYmcpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtbW9kZWwgLm1vZGVsLWxhYmVsLFxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zdHVkZW50IC5zdHVkZW50LWxhYmVsIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHJnYmEoMCwwLDAsMC43KTsgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07IGZvbnQtc2l6ZTogMC43NXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1tb2RlbCAubW9kZWwtdGV4dCxcclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc3R1ZGVudCAuYW5zd2VyLXRleHQgeyBjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTsgbGluZS1oZWlnaHQ6IDEuNTU7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc2NvcmUgeyB3aWR0aDogOC43NXJlbTsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA0KTsgcGFkZGluZzogMC42MjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuLnEtZGVzY3JpcHRpdmUgLnNjb3JlLWxhYmVsIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLnNjb3JlLXZhbHVlIHsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogIzBiNjZkMDsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAucS1mZWVkYmFjayB7IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYmcpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBsaW5lLWhlaWdodDogMS41OyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmV2aWV3IGNvbW1lbnQgY29sdW1ucyDDosKUwoDDosKUwoBcclxuLnEtcmV2aWV3LWNvbW1lbnRzIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDAuMDYyNXJlbSBkYXNoZWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG59XHJcblxyXG4ucmV2aWV3LWNvbHVtbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBnYXA6IDAuODc1cmVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLmNvbCB7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDEuMjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5taXNzZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1yZWQtYmcpIDAlLCB2YXIoLS1iZy0xLCAjZmZmKSA5MCUpO1xyXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1icmVkLWJvcmRlcik7XHJcbiAgICAgIGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1yZWQtdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbmNvcnJlY3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1vcmFuZ2UtYmcpIDAlLCB2YXIoLS1iZy0xLCAjZmZmKSA5MCUpO1xyXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JhbmdlLWJvcmRlcik7XHJcbiAgICAgIGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1vcmFuZ2UtdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbmNvbXBsZXRlIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0teWVsbG93LWJnKSAwJSwgdmFyKC0tYmctMSwgI2ZmZikgOTAlKTtcclxuICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnllbGxvdy1ib3JkZXIpO1xyXG4gICAgICBib3JkZXItdG9wOiAwLjE4NzVyZW0gc29saWQgdmFyKC0teWVsbG93LXRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG5cclxuICAgICAgLmRvdCB7XHJcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuICAgICAgICAmLnJlZCB7IGJhY2tncm91bmQ6IHZhcigtLXJlZC10ZXh0KTsgfVxyXG4gICAgICAgICYub3JhbmdlIHsgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLXRleHQpOyB9XHJcbiAgICAgICAgJi55ZWxsb3cgeyBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctdGV4dCk7IH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIsICMzNzQxNTEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LWVtcHR5IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM5Q0EzQUYpO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwYWRkaW5nOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLnJldmlldy1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xLCAjZmZmZmZmKTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMC44NzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjA2MjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuMTQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICB9XHJcblxyXG4gIC5yaS1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LXRleHQtbWlzc2VkLFxyXG4ucmV2aWV3LXRleHQtaW5jb3JyZWN0LFxyXG4ucmV2aWV3LXRleHQtaW5jb21wbGV0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDAuNjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmLmRlbGV0ZWQge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgLnJldmlldy10ZXh0IHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJpLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcclxufVxyXG5cclxuLnJpLWljb24ge1xyXG4gIHdpZHRoOiAxLjM3NXJlbTtcclxuICBoZWlnaHQ6IDEuMzc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAmLm1pc3NlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xyXG4gICAgY29sb3I6ICNiOTFjMWM7XHJcbiAgfVxyXG4gICYuaW5jb3JyZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmVkZDU7XHJcbiAgICBjb2xvcjogI2MyNDEwYztcclxuICB9XHJcbiAgJi5pbmNvbXBsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XHJcbiAgICBjb2xvcjogI2I0NTMwOTtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZsZXg6IDE7XHJcblxyXG4gICYuZGVsZXRlZCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy10ZXh0LWhpc3Rvcnkge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmhpc3RvcnktZW50cnkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBkYXNoZWQgI2UyZThmMDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAmLmRlbGV0ZWQge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy1tZXRhIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMzc1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZWQtYnkge1xyXG4gICAgY29sb3I6ICNkYzI2MjY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgYm9yZGVyLXRvcDogMC4wNjI1cmVtIGRhc2hlZCAjZTJlOGYwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgLmVkaXRlZC1pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMC4zNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjcyNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgxNSwgMjMsIDQyLCAwLjAzKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICM0ZjQ2ZTUgIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGVkLXRleHQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDAuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRvci1uYW1lIHtcclxuICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRlZC1kYXRlLXNlcCB7XHJcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICAgIG1hcmdpbjogMCAwLjA1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0ZWQtZGF0ZSB7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1saW5rLFxyXG4gIC5kZWxldGUtbGluayxcclxuICAuc2F2ZS1saW5rLFxyXG4gIC5jYW5jZWwtbGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtbGluayB7XHJcbiAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDgpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTYpO1xyXG4gICAgICBjb2xvcjogIzFkNGVkODtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZS1saW5rIHtcclxuICAgIGNvbG9yOiAjZGMyNjI2O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDM4LCAzOCwgMC4wOCk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDM4LCAzOCwgMC4xNik7XHJcbiAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2F2ZS1saW5rIHtcclxuICAgIGNvbG9yOiAjMTZhMzRhO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMiwgMTYzLCA3NCwgMC4wOCk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMiwgMTYzLCA3NCwgMC4xNik7XHJcbiAgICAgIGNvbG9yOiAjMTU4MDNkO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FuY2VsLWxpbmsge1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTE2LCAxMzksIDAuMDgpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMTYsIDEzOSwgMC4xNik7XHJcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgZWRpdGluZyBmb3IgZGVzY3JpcHRpdmUgcXVlc3Rpb25zIMOiwpTCgMOiwpTCgFxyXG4ubWFya3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjM3NXJlbTtcclxuICBtaW4taGVpZ2h0OiAyLjI1cmVtO1xyXG59XHJcblxyXG4ubWFya3MtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMjVyZW07XHJcbiAgcGFkZGluZzogMC4xODc1cmVtO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuMDYyNXJlbSAwLjEyNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDQpO1xyXG59XHJcblxyXG4ubWFya3MtZGlzcGxheSAucS1tYXJrcy5tYXJrLXBvc2l0aXZlLFxyXG4ubWFya3MtZGlzcGxheSAucS1tYXJrcy5tYXJrLW5lZ2F0aXZlLFxyXG4ubWFya3MtZGlzcGxheSAucS1tYXJrcy5tYXJrLW1pZCB7XHJcbiAgbWluLXdpZHRoOiAzLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuMjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtO1xyXG59XHJcblxyXG4ubWFya3MtZGl2aWRlciB7XHJcbiAgb3BhY2l0eTogMC41NTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZWRpdC1tYXJrcy1idG4ge1xyXG4gIHdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuNzI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA4KTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAwLjEyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMC4wNjI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmtzLWVkaXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB3aWR0aDogbWluKDIwcmVtLCBjYWxjKDEwMHZ3IC0gNHJlbSkpO1xyXG4gIGdhcDogMC42MjVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xyXG59XHJcblxyXG4ubWFya3MtaW5wdXQge1xyXG4gIHdpZHRoOiAzLjVyZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjM3NXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtbWF4IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2F2ZS1tYXJrcy1idG4sXHJcbi5jYW5jZWwtbWFya3MtYnRuIHtcclxuICB3aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW0gIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMS43NXJlbTtcclxufVxyXG5cclxuLnNhdmUtbWFya3MtYnRuIHtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FuY2VsLW1hcmtzLWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLXJlZC10ZXh0KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgSGlzdG9yeSBTZWN0aW9uIMOiwpTCgMOiwpTCgFxyXG4ubWFya3MtaGlzdG9yeS1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwxMDIsMjQxLDAuMDMpIDAlLCByZ2JhKDU5LDEzMCwyNDYsMC4wMikgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcclxufVxyXG5cclxuLm1hcmtzLWhpc3RvcnktaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIHdpZHRoOiAxLjEyNXJlbTtcclxuICAgIGhlaWdodDogMS4xMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtaGlzdG9yeS10aW1lbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMDtcclxufVxyXG5cclxuLmhpc3RvcnktaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuODc1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhpc3RvcnktaW5kaWNhdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIFxyXG4gIC5kb3Qge1xyXG4gICAgd2lkdGg6IDAuNzVyZW07XHJcbiAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbiAgICBcclxuICAgICYuY3VycmVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMTUpLCAwIDAuMTI1cmVtIDAuMzc1cmVtIHJnYmEoMTYsMTg1LDEyOSwwLjI1KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5wYXN0IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzk0YTNiOCwgIzY0NzQ4Yik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDE0OCwxNjMsMTg0LDAuMTUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubGluZSB7XHJcbiAgICB3aWR0aDogMC4xMjVyZW07XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNDgsMTYzLDE4NCwwLjQpIDAlLCByZ2JhKDE0OCwxNjMsMTg0LDAuMSkgMTAwJSk7XHJcbiAgICBtYXJnaW46IDAuMjVyZW0gMDtcclxuICAgIG1pbi1oZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmhpc3RvcnktY2FyZCB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2UsIGJvcmRlci1jb2xvciAwLjI1cyAkZWFzZTtcclxuICBcclxuICAmLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNiwxODUsMTI5LDAuMDgpIDAlLCByZ2JhKDUsMTUwLDEwNSwwLjA0KSAxMDAlKTtcclxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMSk7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAuMzc1cmVtIDFyZW0gcmdiYSgxNiwxODUsMTI5LDAuMTgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTg3NXJlbSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNiwxODUsMTI5LDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYucGFzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwyNTAsMjUyLDAuOCk7XHJcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1tZDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBmb250LXNpemU6IDAuNjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTtcclxuICBib3gtc2hhZG93OiAwIDAuMDYyNXJlbSAwLjI1cmVtIHJnYmEoMTYsMTg1LDEyOSwwLjMpO1xyXG59XHJcblxyXG4uaGlzdG9yeS1tYXJrcyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBcclxuICAubWFya3MtdG90YWwge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNDUpO1xyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktY2FyZC5wYXN0IC5oaXN0b3J5LW1hcmtzIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgXHJcbiAgLm1hcmtzLXRvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7XHJcbiAgXHJcbiAgLnVwZGF0ZWQtYnksXHJcbiAgLnVwZGF0ZWQtZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIFxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMC44NzVyZW07XHJcbiAgICAgIGhlaWdodDogMC44NzVyZW07XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVwZGF0ZWQtYnkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkLmN1cnJlbnQgLmhpc3RvcnktbWV0YSB7XHJcbiAgLnVwZGF0ZWQtYnkge1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpO1xyXG4gIH1cclxufVxyXG4vLyDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1cmVtKSB7XHJcbiAgLnBhZ2UgeyBwYWRkaW5nOiAwLjc1cmVtIDAuNzVyZW0gMnJlbTsgfVxyXG4gIC50b29sYmFyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTsgfVxyXG4gIC5zZWxlY3Rpb25zIHsgbWF4LXdpZHRoOiAxMDAlOyBmbGV4OiAxIDEgMTAwJTsgfVxyXG4gIC5yZXBvcnQtc3VtbWFyeS1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpOyB9XHJcbiAgLnRhYi1hY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cclxuICAudGFiLWFjdGlvbnMgLnNlYXJjaCB7IG1heC13aWR0aDogMTAwJTsgfVxyXG4gIC50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyB7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gIC5yZXZpZXctY29sdW1ucyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbiAgLnEtb3B0aW9ucy50d28tY29sIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAudXNlci1yZXZpZXctcGFuZWwgeyB3aWR0aDogOTYlOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwsIC5yZXNvdXJjZS1wYW5lbCB7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuY2FyZCwgLnJlc291cmNlLXBhbmVsIC5jYXJkIHsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keSB7IHBhZGRpbmc6IDAuNzVyZW07IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1yb3cgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc2NvcmUgeyB3aWR0aDogMTAwJTsgfVxyXG4gIC5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5kZXNjLXNjb3JlIHsgd2lkdGg6IDEwMCU7IGZsZXg6IG5vbmU7IG1hcmdpbi10b3A6IDAuNXJlbTsgfVxyXG4gIC5kZXNjcmlwdGl2ZS1hbnN3ZXJzIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAucS1oZWFkLXJvdyB7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gIC5xLXJpZ2h0IHsgbWFyZ2luLWxlZnQ6IDMuMTI1cmVtOyB9XHJcbn1cclxuLm1hcmtzLWVkaXQtcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjM3NXJlbTsgfVxyXG4ubWFya3MtcmVhc29uLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5tYXJrcy1yZWFzb24tbGFiZWwgc3BhbixcclxuLm1hcmtzLXJlYXNvbi1lcnJvciB7IGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7IH1cclxuLm1hcmtzLXJlYXNvbi1lcnJvciB7XHJcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG59XHJcbi5tYXJrcy1lZGl0LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMC4zNzVyZW07XHJcbiAgbWluLWhlaWdodDogMS43NXJlbTtcclxufVxyXG4ubWFya3MtcmVhc29uLWlucHV0IHsgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDVyZW07IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNkM2Q5ZTIpOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgZm9udDogaW5oZXJpdDsgbGluZS1oZWlnaHQ6IDEuNDsgcmVzaXplOiB2ZXJ0aWNhbDsgfVxyXG4ubWFya3MtcmVhc29uLWlucHV0OmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMjY3Y2ZmKTsgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSgzOCwxMjQsMjU1LDAuMTIpOyB9XHJcbi5tYXJrcy1yZWFzb24taW5wdXRbYXJpYS1pbnZhbGlkPVwidHJ1ZVwiXSxcclxuLm1hcmtzLXJlYXNvbi1pbnB1dC5pbnB1dC1lcnJvciB7IGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAwIDAgMCAwLjEyNXJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KSAhaW1wb3J0YW50OyB9XHJcbi5oaXN0b3J5LXJlYXNvbiB7IG1hcmdpbi10b3A6IDAuNHJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC42OCk7IGxpbmUtaGVpZ2h0OiAxLjQ7IH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NXJlbSkge1xyXG4gIC5yZXBvcnQtc3VtbWFyeS1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IHBhZGRpbmc6IDAuODc1cmVtOyB9XHJcbiAgLnN1bW1hcnktY2FyZCB7IHBhZGRpbmc6IDAuODc1cmVtOyB9XHJcbiAgLnN1bW1hcnktbWV0YSB7IHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0cixcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aCxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0ZCB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRyIHsgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBsZWZ0OyBib3JkZXItcmFkaXVzOiAwOyBib3JkZXI6IG5vbmU7IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOjpiZWZvcmUgeyBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpOyBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxyXG4gIC5zZWxlY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG59XHJcbi5tYW51YWwtY2hlY2stY2hpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5NzcwNjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY3ZWQ7XHJcbiAgY29sb3I6ICM5YTM0MTI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYW51YWwtY2hlY2stY2hpcC5zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICNmZmVkZDU7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuLm1hbnVhbC1jaGVjay1jaGlwIG1hdC1pY29uIHsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZm9udC1zaXplOiAxNnB4OyB9XHJcbi5lZGl0LWNvbW1lbnQtcmVhc29uIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiA4cHg7IH1cclxuLnJldmlldy1tZXRhIC5lZGl0LXJlYXNvbiB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiAycHg7IH1cclxuLnNhdmUtbGluay5kaXNhYmxlZCB7IG9wYWNpdHk6IC40NTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxyXG5cclxuLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtLmZpbHRlci1pdGVtLS1mdWxsIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIEhpZGUgZGVmYXVsdCBwc2V1ZG8tY2hlY2tib3ggb24gc2VhcmNoIHJvdyBhbmQgc2VsZWN0LWFsbCByb3cgKi9cclxuOjpuZy1kZWVwIC5zZWxlY3Qtc2VhcmNoLW9wdGlvbiAubWF0LXBzZXVkby1jaGVja2JveCxcclxuOjpuZy1kZWVwIC5zZWxlY3Qtc2VhcmNoLW9wdGlvbiAubWF0LW1kYy1vcHRpb24tcHNldWRvLWNoZWNrYm94LFxyXG46Om5nLWRlZXAgLnNlbGVjdC1zZWFyY2gtb3B0aW9uIC5tZGMtY2hlY2tib3gsXHJcbjo6bmctZGVlcCAuc2VsZWN0LWFsbC1vcHRpb24gLm1hdC1wc2V1ZG8tY2hlY2tib3gsXHJcbjo6bmctZGVlcCAuc2VsZWN0LWFsbC1vcHRpb24gLm1hdC1tZGMtb3B0aW9uLXBzZXVkby1jaGVja2JveCB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBTdHlsZSBmb3IgY3VzdG9tIHNlbGVjdC1hbGwtY2hlY2tib3gtaWNvbiAqL1xyXG46Om5nLWRlZXAgLnNlbGVjdC1hbGwtb3B0aW9uIC5tZGMtbGlzdC1pdGVtX19wcmltYXJ5LXRleHQge1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuc2VsZWN0LWFsbC1jaGVja2JveC1pY29uIHtcclxuICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogTWFuZGF0b3J5IEZpZWxkIEhpZ2hsaWdodCBTdHlsaW5nICovXHJcbi5yZXF1aXJlZC1tYXJrIHtcclxuICBjb2xvcjogI2VmNDQ0NDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tbGVmdDogMnB4O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hbmRhdG9yeS1maWVsZCB7XHJcbiAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGY3ZmYgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICB9XHJcblxyXG4gIC5tZGMtbm90Y2hlZC1vdXRsaW5lX19sZWFkaW5nLFxyXG4gIC5tZGMtbm90Y2hlZC1vdXRsaW5lX19ub3RjaCxcclxuICAubWRjLW5vdGNoZWQtb3V0bGluZV9fdHJhaWxpbmcge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjU2M2ViICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItd2lkdGg6IDEuNXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzFlNDBhZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVGVzdCAmIFNjaGVkdWxlIFNlbGVjdGlvbiBDYXJkICgzLXN0ZXAgZmxvdylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLnRlc3Qtc2NoZWR1bGUtc2VsZWN0aW9uLWNhcmQge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjg3NXJlbTtcclxuICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxNnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNCk7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnMgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgZWFzZTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAyMHB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgfVxyXG5cclxuICAuc2VsZWN0aW9uLWNhcmQtaGVhZGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMWY1Zjk7XHJcblxyXG4gICAgLnNlbGVjdGlvbi1jYXJkLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDRweDtcclxuICAgICAgICBoZWlnaHQ6IDEuMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjU2M2ViLCAjM2I4MmY2KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2VsZWN0aW9uLXN0ZXAtaGludCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgICAgYmFja2dyb3VuZDogI2VmZjZmZjtcclxuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjc1cmVtO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJlYWZlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNlbGVjdGlvbi1maWVsZHMtZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyNjBweCwgMWZyKSk7XHJcbiAgICBnYXA6IDEuMjVyZW07XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgICAuc2VsZWN0aW9uLWZpZWxkIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyBDYWxlbmRhciBEYXRlIEhpZ2hsaWdodGluZyBmb3IgU2NoZWR1bGVkL0NvbmR1Y3RlZCBUZXN0IERhdGVzXHJcbjo6bmctZGVlcCB7XHJcbiAgLm1hdC1jYWxlbmRhci1ib2R5LWNlbGwuaGlnaGxpZ2h0ZWQtc2NoZWR1bGUtZGF0ZSB7XHJcbiAgICAubWF0LWNhbGVuZGFyLWJvZHktY2VsbC1jb250ZW50IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZWFmZSAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzFlNDBhZiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgICBib3JkZXI6IDEuNXB4IHNvbGlkICMyNTYzZWIgIWltcG9ydGFudDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgJjo6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI1NjNlYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5zY2hlZHVsZS1vcHRpb24taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAuc2NoZWQtdGl0bGUtdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiAjMWUyOTNiO1xyXG4gIH1cclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 5072);
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
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
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
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__.PortalModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forChild([{
        path: '',
        component: _exam_reports_component__WEBPACK_IMPORTED_MODULE_0__.ExamReportsComponent
      }])]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ExamReportsModule, {
    declarations: [_exam_reports_component__WEBPACK_IMPORTED_MODULE_0__.ExamReportsComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.ReactiveFormsModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_5__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButtonModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_7__.MatInputModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_8__.MatTableModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_9__.MatPaginatorModule, _angular_material_sort__WEBPACK_IMPORTED_MODULE_10__.MatSortModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_11__.MatTabsModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__.MatDatepickerModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__.MatCheckboxModule, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_17__.HttpClientModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_19__.PortalModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_userrole_admin_exam-reports_exam-reports_module_ts.js.map