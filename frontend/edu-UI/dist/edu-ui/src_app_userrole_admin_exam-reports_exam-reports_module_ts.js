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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 9452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 3037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 271);
/* harmony import */ var src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/api.config */ 1892);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ 9168);
/* harmony import */ var src_app_shared_components_date_range_picker_dialog_date_range_picker_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component */ 7235);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/loader.service */ 3657);
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/overlay */ 1570);
/* harmony import */ var src_app_shared_services_page_meta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/page-meta.service */ 3413);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/snack-bar */ 3347);
/* harmony import */ var src_app_shared_services_confirm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/confirm.service */ 5302);
/* harmony import */ var src_app_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/global-institute-context.service */ 4769);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ 2587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/form-field */ 4950);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 5175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 4646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/input */ 5541);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/table */ 7697);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/sort */ 2047);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ 8223);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/checkbox */ 7024);




























const _c0 = ["filtersBtn"];
const _c1 = ["filtersPanel"];
function ExamReportsComponent_ng_template_23_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", c_r18.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r18.name, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", c_r19.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r19.name, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_form_field_25_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ind_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ind_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ind_r21, " ");
  }
}
const _c2 = function () {
  return {
    standalone: true
  };
};
function ExamReportsComponent_ng_template_23_mat_form_field_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 24)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.userFilters.industry = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_mat_select_openedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.onSelectOpened($event, "industry"));
    })("selectionChange", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_mat_select_selectionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.onIndustryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_div_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.searchQueries.industry = $event);
    })("click", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_input_keydown_5_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_input_keyup_5_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_mat_form_field_25_Template_input_input_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_23_mat_form_field_25_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r10.userFilters.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r10.searchQueries.industry)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r10.filteredIndustryList);
  }
}
function ExamReportsComponent_ng_template_23_mat_form_field_26_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const sec_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", sec_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", sec_r33, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_form_field_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 24)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sector");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.userFilters.sector = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_mat_select_openedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.onSelectOpened($event, "sector"));
    })("selectionChange", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_mat_select_selectionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.onSectorChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_div_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.searchQueries.sector = $event);
    })("click", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_input_keydown_5_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_input_keyup_5_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_mat_form_field_26_Template_input_input_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_23_mat_form_field_26_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r11.userFilters.sector)("disabled", !ctx_r11.userFilters.industry);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r11.searchQueries.sector)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r11.filteredSectorList);
  }
}
function ExamReportsComponent_ng_template_23_mat_form_field_27_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const inst_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", inst_r45.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", inst_r45.name, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_form_field_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 24)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.userFilters.institute_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_mat_select_openedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.onSelectOpened($event, "institute"));
    })("selectionChange", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_mat_select_selectionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.onInstituteChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_div_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r51.searchQueries.institute = $event);
    })("click", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_input_keydown_5_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_input_keyup_5_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_mat_form_field_27_Template_input_input_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_23_mat_form_field_27_mat_option_8_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r12.userFilters.institute_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r12.searchQueries.institute)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r12.filteredInstitutesList);
  }
}
function ExamReportsComponent_ng_template_23_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const cp_r56 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", cp_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", cp_r56, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const d_r57 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", d_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", d_r57, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const t_r58 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", t_r58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", t_r58, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const exam_r59 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", exam_r59.schedule_id || exam_r59.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", exam_r59.title || exam_r59.name, " ");
  }
}
function ExamReportsComponent_ng_template_23_mat_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const st_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", st_r60.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", st_r60.label, " ");
  }
}
function ExamReportsComponent_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 22)(2, "h4")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 23)(7, "mat-form-field", 24)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r62.userFilters.country_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_Template_mat_select_openedChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.onSelectOpened($event, "country"));
    })("selectionChange", function ExamReportsComponent_ng_template_23_Template_mat_select_selectionChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.onCountryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_11_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.searchQueries.country = $event);
    })("click", function ExamReportsComponent_ng_template_23_Template_input_click_12_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_Template_input_keydown_12_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_Template_input_keyup_12_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_Template_input_input_12_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_ng_template_23_mat_option_15_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 24)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.userFilters.city_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_Template_mat_select_openedChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.onSelectOpened($event, "city"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_20_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.searchQueries.city = $event);
    })("click", function ExamReportsComponent_ng_template_23_Template_input_click_21_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_Template_input_keydown_21_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_Template_input_keyup_21_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_Template_input_input_21_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ExamReportsComponent_ng_template_23_mat_option_24_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ExamReportsComponent_ng_template_23_mat_form_field_25_Template, 9, 5, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_ng_template_23_mat_form_field_26_Template, 9, 6, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ExamReportsComponent_ng_template_23_mat_form_field_27_Template, 9, 5, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field", 24)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r80.userFilters.campus_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_Template_mat_select_openedChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.onSelectOpened($event, "campus"));
    })("selectionChange", function ExamReportsComponent_ng_template_23_Template_mat_select_selectionChange_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.onCampusChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_32_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.searchQueries.campus = $event);
    })("click", function ExamReportsComponent_ng_template_23_Template_input_click_33_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_Template_input_keydown_33_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_Template_input_keyup_33_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_Template_input_input_33_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ExamReportsComponent_ng_template_23_mat_option_36_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 24)(38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-select", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_select_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.userFilters.department_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_Template_mat_select_openedChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r90.onSelectOpened($event, "department"));
    })("selectionChange", function ExamReportsComponent_ng_template_23_Template_mat_select_selectionChange_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.onFilterSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_41_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r93.searchQueries.department = $event);
    })("click", function ExamReportsComponent_ng_template_23_Template_input_click_42_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_Template_input_keydown_42_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_Template_input_keyup_42_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_Template_input_input_42_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ExamReportsComponent_ng_template_23_mat_option_43_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 24)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_select_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r98.userFilters.teams_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_Template_mat_select_openedChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r99.onSelectOpened($event, "team"));
    })("selectionChange", function ExamReportsComponent_ng_template_23_Template_mat_select_selectionChange_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r100.onFilterSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_48_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r102.searchQueries.team = $event);
    })("click", function ExamReportsComponent_ng_template_23_Template_input_click_49_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_Template_input_keydown_49_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_Template_input_keyup_49_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_Template_input_input_49_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ExamReportsComponent_ng_template_23_mat_option_50_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-form-field", 24)(52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Schedule Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_select_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r107.userFilters.schedule_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_Template_mat_select_openedChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r108.onSelectOpened($event, "schedule"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_55_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r110.searchQueries.schedule = $event);
    })("click", function ExamReportsComponent_ng_template_23_Template_input_click_56_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_Template_input_keydown_56_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_Template_input_keyup_56_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_Template_input_input_56_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ExamReportsComponent_ng_template_23_mat_option_59_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-form-field", 24)(61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Active Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-select", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_select_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r115.userFilters.active_status = $event);
    })("openedChange", function ExamReportsComponent_ng_template_23_Template_mat_select_openedChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r116.onSelectOpened($event, "active_status"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_div_click_64_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r118.searchQueries.active_status = $event);
    })("click", function ExamReportsComponent_ng_template_23_Template_input_click_65_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_23_Template_input_keydown_65_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_23_Template_input_keyup_65_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_23_Template_input_input_65_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, ExamReportsComponent_ng_template_23_mat_option_66_Template, 2, 2, "mat-option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_mat_form_field_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r123.openCreatedDateRangePicker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "mat-icon", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 47)(74, "mat-checkbox", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_23_Template_mat_checkbox_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r124.userFilters.created_by_me = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " Created by Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 49)(77, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_button_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r125.applyFiltersPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "mat-icon", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_23_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r126.resetFiltersAndReload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, " Reset ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.country_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.country)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](35, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCountriesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.city_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.city)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](36, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCitiesList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isGlobalInstituteActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isGlobalInstituteActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.isGlobalInstituteActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.campus)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredCampusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.department_id)("disabled", !ctx_r2.userFilters.institute_id && !ctx_r2.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.department)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](38, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredDepartmentList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.teams_id)("disabled", !ctx_r2.userFilters.institute_id && !ctx_r2.userFilters.campus_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.team)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](39, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredTeamList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.schedule_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.schedule)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](40, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredScheduleList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.active_status);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.searchQueries.active_status)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](41, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.filteredActiveStatusList);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r2.getCreatedDateRangeDisplay());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r2.userFilters.created_by_me);
  }
}
function ExamReportsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 61)(1, "div", 62)(2, "div", 63)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h3", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "No Test Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, " Please select an ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, " and a ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Scheduled Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, " from the toolbar above or use the ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Filter Panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, " to load test reports and analytics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r128);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r127.openFiltersOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Filter Test Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ExamReportsComponent_div_26_div_67_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 130)(1, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_67_td_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r173);
      const row_r171 = restoredCtx.$implicit;
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r172.openUserReview(row_r171));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const row_r171 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((row_r171.student_name || row_r171.name || "S").charAt(0).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r171.student_name || row_r171.name || "Student");
  }
}
function ExamReportsComponent_div_26_div_67_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Marks / Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 134)(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r174 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", row_r174.marks_obtained, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", row_r174.total_marks, "");
  }
}
function ExamReportsComponent_div_26_div_67_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 134)(1, "span", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r175.percentage);
  }
}
function ExamReportsComponent_div_26_div_67_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Manual Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 134)(1, "span", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r176 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("review-pending", row_r176.manual_review === "pending" || row_r176.manual_review === "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r176.manual_review);
  }
}
function ExamReportsComponent_div_26_div_67_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 134)(1, "span", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r177 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("result-pass", (row_r177.result || "").toLowerCase() === "pass" || (row_r177.result || "").toLowerCase() === "passed")("result-fail", (row_r177.result || "").toLowerCase() === "fail" || (row_r177.result || "").toLowerCase() === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r177.result);
  }
}
function ExamReportsComponent_div_26_div_67_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 140);
  }
}
function ExamReportsComponent_div_26_div_67_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 141);
  }
}
const _c3 = function () {
  return ["student_name", "questions_attempted", "correct_answers", "wrong_answers", "result"];
};
function ExamReportsComponent_div_26_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 100)(1, "table", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_67_th_3_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_67_td_4_Template, 6, 2, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_26_div_67_th_6_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_26_div_67_td_7_Template, 6, 2, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ExamReportsComponent_div_26_div_67_th_9_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_26_div_67_td_10_Template, 3, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ExamReportsComponent_div_26_div_67_th_12_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_26_div_67_td_13_Template, 3, 3, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_26_div_67_th_15_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_26_div_67_td_16_Template, 3, 5, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_26_div_67_tr_17_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_26_div_67_tr_18_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 127)(20, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_67_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r180);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r179.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_67_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r180);
      const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r181.nextPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r129.userReportData);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r129.currentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Page ", ctx_r129.currentPage, " of ", ctx_r129.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r129.currentPage >= ctx_r129.totalPages);
  }
}
function ExamReportsComponent_div_26_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading user report...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_th_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 130)(1, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_td_123_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r184);
      const c_r182 = restoredCtx.$implicit;
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r183.openCategoryQuestionSummary(c_r182));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const c_r182 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((c_r182.category_name || c_r182.name || "?").charAt(0).toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r182.category_name || c_r182.name);
  }
}
function ExamReportsComponent_div_26_th_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r185.total_questions || c_r185.questions_count || 0);
  }
}
function ExamReportsComponent_div_26_th_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r186 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r186.no_of_students || c_r186.users_attempted || 0);
  }
}
function ExamReportsComponent_div_26_th_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r187 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r187.total_attempts || 0);
  }
}
function ExamReportsComponent_div_26_th_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 145)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r188 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("text-danger", (c_r188.wrong_answers || c_r188.mistakes || c_r188.wrong_count || 0) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", c_r188.wrong_answers || c_r188.mistakes || c_r188.wrong_count || 0, " ");
  }
}
function ExamReportsComponent_div_26_th_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Error %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
const _c4 = function (a0, a1, a2) {
  return {
    "pct-badge--low": a0,
    "pct-badge--mid": a1,
    "pct-badge--high": a2
  };
};
function ExamReportsComponent_div_26_td_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 134)(1, "span", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const c_r189 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](2, _c4, (c_r189.error_percentage || c_r189.error_pct || 0) <= 10, (c_r189.error_percentage || c_r189.error_pct || 0) > 10 && (c_r189.error_percentage || c_r189.error_pct || 0) <= 30, (c_r189.error_percentage || c_r189.error_pct || 0) > 30));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", c_r189.error_percentage || c_r189.error_pct || 0, "%");
  }
}
function ExamReportsComponent_div_26_tr_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 140);
  }
}
function ExamReportsComponent_div_26_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 141);
  }
}
function ExamReportsComponent_div_26_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 147)(1, "div", 148)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Filtered by Question Bank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_143_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r192);
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r191.clearCategoryFilter());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Show All Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r145.selectedCategoryFilterName || "Selected Category");
  }
}
function ExamReportsComponent_div_26_th_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 134)(1, "span", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r193 = ctx.$implicit;
    const i_r194 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", q_r193.sno || i_r194 + 1, "");
  }
}
function ExamReportsComponent_div_26_th_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r195 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", q_r195.question_text || q_r195.text, " ");
  }
}
function ExamReportsComponent_div_26_th_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r196.user_attempts || 0);
  }
}
function ExamReportsComponent_div_26_th_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r197.attempts || 0);
  }
}
function ExamReportsComponent_div_26_th_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_160_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_td_160_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r204);
      const q_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r202.openWrongAnswerSummary(q_r198));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r198.mistakes);
  }
}
function ExamReportsComponent_div_26_td_160_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_td_160_a_1_Template, 5, 1, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_td_160_ng_template_2_Template, 2, 0, "ng-template", null, 153, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r198 = ctx.$implicit;
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r198.mistakes || 0) > 0)("ngIfElse", _r200);
  }
}
function ExamReportsComponent_div_26_tr_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 140);
  }
}
function ExamReportsComponent_div_26_tr_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 141);
  }
}
function ExamReportsComponent_div_26_div_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 156)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Total ", ctx_r158.activeQuestionCount, " ", ctx_r158.activeQuestionCount === 1 ? "question" : "questions", " loaded");
  }
}
const _c5 = function () {
  return ["category", "questions", "users_attempted", "total_attempts", "mistakes", "error_pct"];
};
const _c6 = function () {
  return ["sno", "question", "user_attempts", "attempts", "mistakes"];
};
function ExamReportsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 67)(1, "div", 68)(2, "mat-tab-group", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedTabChange", function ExamReportsComponent_div_26_Template_mat_tab_group_selectedTabChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r207.onTabChange($event));
    })("selectedIndexChange", function ExamReportsComponent_div_26_Template_mat_tab_group_selectedIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r209.activeMainTabIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-tab", 70)(4, "div", 71)(5, "div", 72)(6, "div", 73)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 74)(10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 72)(17, "div", 78)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 74)(21, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Current Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Paginated user report results");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 72)(28, "div", 79)(29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "military_tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 74)(32, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Average Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Average marks from loaded users");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 72)(40, "div", 80)(41, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "task_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 74)(44, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Pass Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Success ratio in current view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 81)(52, "div", 82)(53, "mat-form-field", 83)(54, "mat-icon", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "input", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r210.searchQuery = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 9)(58, "div", 10)(59, "button", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r211.loadUserReport(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, " Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "button", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r212.exportUserCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " Export CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, ExamReportsComponent_div_26_div_67_Template, 26, 9, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, ExamReportsComponent_div_26_div_68_Template, 2, 0, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-tab", 90)(70, "div", 91)(71, "div", 92)(72, "div", 72)(73, "div", 93)(74, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "grid_view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 74)(77, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Question Banks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Performance groups in analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 72)(84, "div", 94)(85, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 74)(88, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 72)(95, "div", 95)(96, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "stacked_line_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 74)(99, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Attempts recorded across categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 72)(106, "div", 96)(107, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 74)(110, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Wrong answers identified in analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "mat-tab-group", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedIndexChange", function ExamReportsComponent_div_26_Template_mat_tab_group_selectedIndexChange_116_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r213.innerAnalyticsTabIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "mat-tab", 98)(118, "div", 99)(119, "div", 100)(120, "table", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](121, 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, ExamReportsComponent_div_26_th_122_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](123, ExamReportsComponent_div_26_td_123_Template, 6, 2, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](124, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](125, ExamReportsComponent_div_26_th_125_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](126, ExamReportsComponent_div_26_td_126_Template, 2, 1, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](127, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](128, ExamReportsComponent_div_26_th_128_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](129, ExamReportsComponent_div_26_td_129_Template, 2, 1, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](130, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](131, ExamReportsComponent_div_26_th_131_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, ExamReportsComponent_div_26_td_132_Template, 2, 1, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](133, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](134, ExamReportsComponent_div_26_th_134_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](135, ExamReportsComponent_div_26_td_135_Template, 3, 3, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](136, 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](137, ExamReportsComponent_div_26_th_137_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](138, ExamReportsComponent_div_26_td_138_Template, 3, 6, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](139, ExamReportsComponent_div_26_tr_139_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](140, ExamReportsComponent_div_26_tr_140_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "mat-tab", 114)(142, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](143, ExamReportsComponent_div_26_div_143_Template, 13, 1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "div", 100)(145, "table", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](146, 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](147, ExamReportsComponent_div_26_th_147_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](148, ExamReportsComponent_div_26_td_148_Template, 3, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](149, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](150, ExamReportsComponent_div_26_th_150_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, ExamReportsComponent_div_26_td_151_Template, 2, 1, "td", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](152, 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, ExamReportsComponent_div_26_th_153_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, ExamReportsComponent_div_26_td_154_Template, 2, 1, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](155, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, ExamReportsComponent_div_26_th_156_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](157, ExamReportsComponent_div_26_td_157_Template, 2, 1, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](158, 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](159, ExamReportsComponent_div_26_th_159_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](160, ExamReportsComponent_div_26_td_160_Template, 4, 2, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](161, ExamReportsComponent_div_26_tr_161_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](162, ExamReportsComponent_div_26_tr_162_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](163, ExamReportsComponent_div_26_div_163_Template, 3, 2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedIndex", ctx_r4.activeMainTabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.userReportTotal || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r4.userReportData.length || 0, " visible for ", (ctx_r4.selectedExam == null ? null : ctx_r4.selectedExam.title) || (ctx_r4.selectedExam == null ? null : ctx_r4.selectedExam.name) || "selected test", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r4.currentPage, "/", ctx_r4.totalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](36, 25, ctx_r4.userAverageScore, "1.0-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](48, 28, ctx_r4.userPassRate, "1.0-0"), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r4.searchQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r4.loadingUserReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.loadingUserReport);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.categoryAnalytics.length || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.activeQuestionCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.filteredQuestionSummary.length ? "Filtered question summary view" : "Complete question summary view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.analyticsTotalAttempts || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r4.analyticsMistakeCount || 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedIndex", ctx_r4.innerAnalyticsTabIndex);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.categoryAnalytics);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](31, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](32, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.filteredQuestionSummary && ctx_r4.filteredQuestionSummary.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.filteredQuestionSummary && ctx_r4.filteredQuestionSummary.length ? ctx_r4.filteredQuestionSummary : ctx_r4.questionSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](33, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](34, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.questionSummary && ctx_r4.questionSummary.length);
  }
}
function ExamReportsComponent_div_27_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading review...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 179)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation is pending for answers in this answer sheet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_1_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r225);
      const att_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r223.retryEvaluation(null, att_r220));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const att_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", att_r220._retryingEvaluation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", att_r220._retryingEvaluation ? "Evaluating\u2026" : "Run evaluation", " ");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", q_r227.marks_awarded, "/", q_r227.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 3, q_r227.marks_awarded / (q_r227.question_marks || 1) * 100, "1.2-2"), "%)");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r240);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r238 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r238.toggleManualReview(q_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Manual Check Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", q_r227.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "AI confidence is below the configured " + q_r227.ai_confidence_threshold + "% threshold");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-pressed", !!q_r227.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.manual_review_required ? "check_circle" : "radio_button_unchecked");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-icon", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_button_5_Template, 4, 5, "button", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", q_r227.marks_awarded, "/", q_r227.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 5, q_r227.marks_awarded / (q_r227.question_marks || 1) * 100, "1.2-2"), "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "AI Confidence: " + (q_r227.ai_confidence != null ? q_r227.ai_confidence + "%" : "N/A"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.needs_manual_review);
  }
}
const _c7 = function (a0, a1, a2) {
  return {
    "mark-positive": a0,
    "mark-negative": a1,
    "mark-mid": a2
  };
};
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 203)(1, "div", 204)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_1_Template_button_click_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r247);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r245 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r245.startEditMarks(q_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, (q_r227.marks_awarded || 0) == (q_r227.question_marks || 0), (q_r227.marks_awarded || 0) == 0, (q_r227.marks_awarded || 0) > 0 && (q_r227.marks_awarded || 0) < (q_r227.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.marks_awarded != null ? q_r227.marks_awarded : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.question_marks != null ? q_r227.question_marks : 0);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Description is required when changing marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 207)(1, "div", 208)(2, "input", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r227._editedMarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "label", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Change comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "textarea", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r227._marksEditReason = $event);
    })("input", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_input_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r227._marksReasonError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template, 2, 0, "small", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 215)(12, "button", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r257.saveMarks(q_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r259.cancelEditMarks(q_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const q_r227 = ctx_r261.$implicit;
    const qi_r228 = ctx_r261.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", q_r227._editedMarks)("min", 0)("max", q_r227.question_marks || 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("/ ", q_r227.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", "marks-reason-" + (q_r227.answer_id || qi_r228));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("input-error", q_r227._marksReasonError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", q_r227._marksEditReason)("id", "marks-reason-" + (q_r227.answer_id || qi_r228));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", q_r227._marksReasonError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227._marksReasonError);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_1_Template, 11, 7, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template, 18, 11, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !q_r227._editingMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227._editingMarks);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, (q_r227.marks_awarded || 0) == (q_r227.question_marks || 0), (q_r227.marks_awarded || 0) == 0, (q_r227.marks_awarded || 0) > 0 && (q_r227.marks_awarded || 0) < (q_r227.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", q_r227.marks_awarded != null ? q_r227.marks_awarded : 0, "/", q_r227.question_marks != null ? q_r227.question_marks : 0, "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Correct Answer: ", q_r227.options[0].option_text || q_r227.options[0], "");
  }
}
const _c8 = function () {
  return [];
};
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 219)(1, "div", 220)(2, "div", 221);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_div_4_Template, 2, 1, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c8)).length)("correct", q_r227.is_correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Student Answer: ", (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c8)).join(", ") || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.marks_awarded === 0);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 253)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation could not be completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.evaluation_error);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 255)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation is pending for this answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 256)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "High-level Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 254);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.feedback || "No high-level feedback was returned for this answer.");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No missed points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 279)(1, "div", 280)(2, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const rc_r283 = ctx_r297.$implicit;
    const rci_r284 = ctx_r297.index;
    const ctx_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r283.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r284 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r293.toTitleCase(h_r291.comment_text || h_r291.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 283)(1, "div", 280)(2, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r301);
      const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](h_r291._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rci_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r284 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", h_r291._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r291.updated_by || h_r291.created_by || h_r291.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 292)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](h_r291.updated_by || h_r291.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r305.formatDate(h_r291.updated_date || h_r291.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r313);
      const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r311.startEditComment(h_r291));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r316);
      const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r314.confirmDeleteComment(h_r291));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r319);
      const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r317 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r317.saveReviewComment(h_r291));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r322);
      const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r320 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r320.cancelEditComment(h_r291));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r296.isCommentEdited(h_r291));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r291._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r291._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r291._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r291._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template, 6, 4, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template, 5, 2, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template, 2, 1, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_Template, 6, 5, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r291 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r291.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r291._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r291._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r291.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r291.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template, 7, 6, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r283.history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 279)(1, "div", 280)(2, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r325 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rc_r283 = ctx_r325.$implicit;
    const rci_r284 = ctx_r325.index;
    const ctx_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r283.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r284 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r283.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r286.toTitleCase(rc_r283.comment_text || rc_r283.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 283)(1, "div", 280)(2, "span", 281);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r328);
      const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rc_r283._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r329 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rci_r284 = ctx_r329.index;
    const rc_r283 = ctx_r329.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r284 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rc_r283._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 277)(1, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r283.updated_by || rc_r283.created_by || rc_r283.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 292)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rc_r283.updated_by || rc_r283.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r331.formatDate(rc_r283.updated_date || rc_r283.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r339);
      const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r337 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r337.startEditComment(rc_r283));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r342);
      const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r340.confirmDeleteComment(rc_r283));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r345 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r345);
      const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r343 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r343.saveReviewComment(rc_r283));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r348);
      const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r346 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r346.cancelEditComment(rc_r283));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template, 11, 2, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r289 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r289.isCommentEdited(rc_r283));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r283._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r283._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r283._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r283._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 268)(2, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template, 2, 1, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template, 6, 6, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template, 5, 2, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template, 3, 1, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_Template, 6, 5, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r283 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r283.history && rc_r283.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r283._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r283._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r283.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r283.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No incorrect points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 304)(1, "div", 280)(2, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r364 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const h_r358 = ctx_r364.$implicit;
    const hi_r359 = ctx_r364.index;
    const ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r358.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r359 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r360.toTitleCase(h_r358.comment_text || h_r358.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r367 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 306)(1, "div", 280)(2, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r367);
      const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](h_r358._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r368 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const hi_r359 = ctx_r368.index;
    const h_r358 = ctx_r368.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r359 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", h_r358._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r358.updated_by || h_r358.created_by || h_r358.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 292)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](h_r358.updated_by || h_r358.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r370.formatDate(h_r358.updated_date || h_r358.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r378 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r378);
      const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r376 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r376.startEditComment(h_r358));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r381);
      const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r379.confirmDeleteComment(h_r358));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r384);
      const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r382 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r382.saveReviewComment(h_r358));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r387);
      const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r385 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r385.cancelEditComment(h_r358));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r363 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r363.isCommentEdited(h_r358));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r358._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r358._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r358._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r358._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template, 6, 4, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template, 5, 2, "div", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template, 2, 1, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_Template, 6, 5, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r358 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r358.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r358._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r358._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r358.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r358.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template, 7, 6, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r350.history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 304)(1, "div", 280)(2, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r390 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rc_r350 = ctx_r390.$implicit;
    const rci_r351 = ctx_r390.index;
    const ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r350.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r351 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r350.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r353.toTitleCase(rc_r350.comment_text || rc_r350.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 306)(1, "div", 280)(2, "span", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r393);
      const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rc_r350._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r394 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rci_r351 = ctx_r394.index;
    const rc_r350 = ctx_r394.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r351 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rc_r350._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r350.updated_by || rc_r350.reviewer_id || rc_r350.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 292)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rc_r350.edited_by || rc_r350.updated_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r396.formatDate(rc_r350.edited_at || rc_r350.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r404);
      const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r402 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r402.startEditComment(rc_r350));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r407);
      const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r405 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r405.confirmDeleteComment(rc_r350));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r410);
      const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r408 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r408.saveReviewComment(rc_r350));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r413);
      const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r411.cancelEditComment(rc_r350));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template, 11, 2, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r356 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r356.isCommentEdited(rc_r350));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r350._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r350._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r350._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r350._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 268)(2, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template, 2, 1, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template, 6, 6, "div", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template, 5, 2, "div", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template, 2, 1, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_Template, 6, 5, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r350 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r350.history && rc_r350.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r350._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r350._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r350.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r350.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No incomplete points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 309)(1, "div", 280)(2, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r429 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const h_r423 = ctx_r429.$implicit;
    const hi_r424 = ctx_r429.index;
    const ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r423.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r424 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r425.toTitleCase(h_r423.comment_text || h_r423.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r432 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 311)(1, "div", 280)(2, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r432);
      const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](h_r423._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const hi_r424 = ctx_r433.index;
    const h_r423 = ctx_r433.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r424 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", h_r423._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r423.updated_by || h_r423.created_by || h_r423.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 292)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r435 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](h_r423.updated_by || h_r423.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r435.formatDate(h_r423.updated_date || h_r423.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r443);
      const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r441.startEditComment(h_r423));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r446);
      const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r444 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r444.confirmDeleteComment(h_r423));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r449);
      const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r447 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r447.saveReviewComment(h_r423));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r452);
      const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r450.cancelEditComment(h_r423));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r428 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r428.isCommentEdited(h_r423));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r423._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r423._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r423._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r423._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template, 6, 4, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template, 5, 2, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template, 2, 1, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_Template, 6, 5, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r423 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r423.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r423._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r423._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r423.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r423.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template, 7, 6, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r415.history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 309)(1, "div", 280)(2, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r455 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rc_r415 = ctx_r455.$implicit;
    const rci_r416 = ctx_r455.index;
    const ctx_r418 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r415.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r416 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r415.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r418.toTitleCase(rc_r415.comment_text || rc_r415.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r458 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 311)(1, "div", 280)(2, "span", 310);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r458);
      const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rc_r415._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r459 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rci_r416 = ctx_r459.index;
    const rc_r415 = ctx_r459.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r416 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rc_r415._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r415.updated_by || rc_r415.reviewer_id || rc_r415.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 292)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rc_r415.edited_by || rc_r415.updated_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r461.formatDate(rc_r415.edited_at || rc_r415.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r469 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r469);
      const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r467 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r467.startEditComment(rc_r415));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r472 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r472);
      const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r470 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r470.confirmDeleteComment(rc_r415));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r475 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r475);
      const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r473.saveReviewComment(rc_r415));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r478);
      const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r476 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r476.cancelEditComment(rc_r415));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template, 11, 2, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r421 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r421.isCommentEdited(rc_r415));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r415._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r415._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r415._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r415._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 268)(2, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template, 2, 1, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template, 6, 6, "div", 307);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template, 5, 2, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template, 2, 1, "span", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_Template, 6, 5, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r415 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r415.history && rc_r415.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r415._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r415._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r415.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r415.is_deleted != 1);
  }
}
const _c9 = function () {
  return ["incorrct", "incorrect", "incor"];
};
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 257)(1, "div", 258)(2, "div", 259)(3, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Points Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template, 2, 0, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template, 8, 5, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 263)(10, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "span", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Points Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template, 2, 0, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template, 9, 5, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 265)(17, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "span", 266);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Points Incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template, 2, 0, "div", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template, 9, 5, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r270.reviewComments(q_r227, "missing").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r270.reviewComments(q_r227, "missing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r270.reviewComments(q_r227, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c9)).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r270.reviewComments(q_r227, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r270.reviewComments(q_r227, "incomplete").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r270.reviewComments(q_r227, "incomplete"));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 312);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 313)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r272.formatDate(q_r227.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 314)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Change comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", q_r227.edit_reason, "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 312);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 313)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mh_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r487 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r487.formatDate(mh_r483.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 314)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Change comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mh_r483 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mh_r483.edit_reason, "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 315)(1, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_3_Template, 1, 0, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 243)(5, "div", 317)(6, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 248)(11, "span", 249)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_span_15_Template, 4, 1, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_16_Template, 4, 1, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const mh_r483 = ctx.$implicit;
    const isLast_r485 = ctx.last;
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !isLast_r485);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", mh_r483.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("/ ", q_r227.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](mh_r483.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", mh_r483.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", mh_r483.edit_reason);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 224)(1, "div", 225)(2, "div", 226)(3, "div", 227);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Student's Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 229)(8, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Model Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_12_Template, 6, 1, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_13_Template, 4, 0, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_14_Template, 5, 1, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_Template, 23, 8, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 236)(17, "div", 237)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Marks History");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 238)(23, "div", 239)(24, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_26_Template, 1, 0, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 243)(28, "div", 244)(29, "div", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 248)(36, "span", 249)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_span_40_Template, 4, 1, "span", 250);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_41_Template, 4, 1, "div", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_Template, 17, 6, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c8)).join(" ") || "No answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.correct_option || q_r227.options && q_r227.options[0] && (q_r227.options[0].option_text || q_r227.options[0]) || q_r227.correct_answer || "No model answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.evaluation_status === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.evaluation_status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.question_type || q_r227.type) === "descriptive" && q_r227.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.question_type || q_r227.type) === "descriptive" && q_r227.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.marks_history && q_r227.marks_history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", q_r227.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("/ ", q_r227.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.edit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", q_r227.marks_history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template, 2, 0, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template, 2, 0, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template, 2, 0, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c8)).indexOf(opt_r494.option_text || opt_r494) !== -1 && !(opt_r494.is_correct == 1 || opt_r494.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c8)).indexOf(opt_r494.option_text || opt_r494) !== -1 && (opt_r494.is_correct == 1 || opt_r494.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", opt_r494.is_correct && (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c8)).indexOf(opt_r494.option_text || opt_r494) === -1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Missed Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template, 2, 0, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template, 2, 0, "span", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template, 2, 0, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r494 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c8)).indexOf(opt_r494.option_text || opt_r494) !== -1 && (opt_r494.is_correct == 1 || opt_r494.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c8)).indexOf(opt_r494.option_text || opt_r494) !== -1 && !(opt_r494.is_correct == 1 || opt_r494.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", opt_r494.is_correct && (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c8)).indexOf(opt_r494.option_text || opt_r494) === -1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 320)(1, "div", 321)(2, "span", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 323)(5, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template, 4, 6, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template, 4, 6, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r494 = ctx.$implicit;
    const oi_r495 = ctx.index;
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r493 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("correct", opt_r494.is_correct == 1 || opt_r494.is_correct === true)("selected", (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c8)).indexOf(opt_r494.option_text || opt_r494) !== -1)("missed", opt_r494.is_correct && (q_r227.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c8)).indexOf(opt_r494.option_text || opt_r494) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r493.getOptionLetter(oi_r495));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](opt_r494.option_text || opt_r494);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.question_type == "choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.question_type == "multi");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 318);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_Template, 9, 12, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", q_r227.options || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c8));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 181)(1, "div", 182)(2, "div", 183)(3, "div", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 185)(6, "div", 186)(7, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_9_Template, 3, 6, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_Template, 6, 8, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 189)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_Template, 3, 2, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_16_Template, 2, 7, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_Template, 5, 8, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_Template, 43, 14, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_Template, 2, 2, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = ctx.$implicit;
    const qi_r228 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.sno || q_r227.qno ? q_r227.sno || q_r227.qno : qi_r228 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((q_r227.question_type || q_r227.type || "").toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.question_type != "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r227.question_type === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.question_text || q_r227.text || q_r227.title || "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.question_type || q_r227.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.question_type || q_r227.type) !== "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.question_type || q_r227.type) === "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.question_type || q_r227.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r227.question_type || q_r227.type) == "choose" || (q_r227.question_type || q_r227.type) == "multi");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_1_Template, 6, 2, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_Template, 20, 10, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const att_r220 = ctx.$implicit;
    const ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r219.hasPendingEvaluation(att_r220));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", att_r220.review || att_r220.questions || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c8));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_Template, 4, 3, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r216.userReviewAttempts);
  }
}
function ExamReportsComponent_div_27_div_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No review data available for this user.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_Template, 2, 1, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_ng_template_2_Template, 2, 0, "ng-template", null, 174, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r217 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r215.userReviewAttempts && ctx_r215.userReviewAttempts.length)("ngIfElse", _r217);
  }
}
const _c10 = function (a0, a1) {
  return {
    "pass": a0,
    "fail": a1
  };
};
function ExamReportsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r511);
      const ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r510.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 159)(3, "div", 160)(4, "div", 161)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 162)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h3")(11, "span", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r511);
      const ctx_r513 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r513.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamReportsComponent_div_27_div_19_Template, 2, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ExamReportsComponent_div_27_div_20_Template, 4, 2, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 170)(22, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r511);
      const ctx_r514 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r514.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Answer Sheet - ", ctx_r5.selectedUserName || "User", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Score: ", ctx_r5.selectedUserScore || "-", " / ", ctx_r5.totalMarks || "-", " \u00A0|\u00A0Result: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](7, _c10, (ctx_r5.selectedUserResult || "").toLowerCase() === "pass", (ctx_r5.selectedUserResult || "").toLowerCase() === "fail"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r5.selectedUserResult || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.userReviewLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r5.userReviewLoading);
  }
}
function ExamReportsComponent_div_28_div_17_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r520 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 339)(2, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_div_17_tr_13_Template_a_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r520);
      const wa_r518 = restoredCtx.$implicit;
      const ctx_r519 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r519.openResourcesForWrongAnswer(ctx_r519.selectedQuestionForWrongSummary, wa_r518));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 341)(5, "a", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_div_17_tr_13_Template_a_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r520);
      const wa_r518 = restoredCtx.$implicit;
      const ctx_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r521.openResourcesForWrongAnswer(ctx_r521.selectedQuestionForWrongSummary, wa_r518));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wa_r518 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](wa_r518.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](wa_r518.count || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](wa_r518.pct || "-");
  }
}
function ExamReportsComponent_div_28_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No wrong answer data available for this question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_28_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 338)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Wrong Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "No. of times selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Occurrence %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_28_div_17_tr_13_Template, 9, 3, "tr", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_28_div_17_div_14_Template, 2, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Question: ", ctx_r515.selectedQuestionForWrongSummary.question_text || ctx_r515.selectedQuestionForWrongSummary.text || ctx_r515.selectedQuestionForWrongSummary.name || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r515.selectedWrongAnswers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r515.selectedWrongAnswers || !ctx_r515.selectedWrongAnswers.length);
  }
}
function ExamReportsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r523 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r523);
      const ctx_r522 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r522.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 159)(3, "div", 160)(4, "div", 162)(5, "div", 161)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "rule_folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 334)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Wrong Answer Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Details for selected question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r523);
      const ctx_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r525.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_28_div_17_Template, 15, 3, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 170)(19, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r523);
      const ctx_r526 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r526.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.selectedQuestionForWrongSummary);
  }
}
function ExamReportsComponent_div_29_div_17_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r530 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](r_r530.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](r_r530.email || "");
  }
}
function ExamReportsComponent_div_29_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ul", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_29_div_17_li_2_Template, 5, 2, "li", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r527.selectedResources);
  }
}
function ExamReportsComponent_div_29_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No resources linked for this wrong answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r532 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r532);
      const ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r531.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 159)(3, "div", 160)(4, "div", 162)(5, "div", 161)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "folder_shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 334)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Resources related to the selected wrong answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r532);
      const ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r534.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_29_div_17_Template, 3, 1, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_29_div_18_Template, 2, 0, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 170)(20, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r532);
      const ctx_r535 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r535.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.selectedResources && ctx_r7.selectedResources.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.selectedResources || !ctx_r7.selectedResources.length);
  }
}
class ExamReportsComponent {
  get selectedInstituteName() {
    if (!this.selectedInstituteId) return '';
    const found = this.institutes.find(i => String(i.id) === String(this.selectedInstituteId));
    if (found) return found.name;
    if (this.isGlobalInstituteActive) return this.globalContextService.activeInstitute?.institute_name || '';
    return '';
  }
  get selectedExamTitle() {
    if (!this.selectedExam) return '';
    return this.selectedExam.title || this.selectedExam.name || '';
  }
  get filteredCountriesList() {
    const q = (this.searchQueries.country || '').toLowerCase().trim();
    if (!q) return this.countries;
    return (this.countries || []).filter(c => (c.name || '').toLowerCase().includes(q));
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
    const q = (this.searchQueries.schedule || '').toLowerCase().trim();
    let list = this.allTests || [];
    // Filter by campus if selected
    if (this.userFilters.campus_id) {
      const selectedCampus = String(this.userFilters.campus_id).toLowerCase().trim();
      list = list.filter(t => {
        const itemCampus = String(t.campus_id || t.campus || t.campus_name || '').toLowerCase().trim();
        return !itemCampus || itemCampus.includes(selectedCampus);
      });
    }
    // Filter by department if selected
    if (Array.isArray(this.userFilters.department_id) && this.userFilters.department_id.length) {
      const selectedDepts = this.userFilters.department_id.map(d => String(d).toLowerCase().trim());
      list = list.filter(t => {
        const itemDept = String(t.department_id || t.department || t.department_name || t.departments || '').toLowerCase().trim();
        if (!itemDept) return true;
        return selectedDepts.some(sd => itemDept.includes(sd));
      });
    }
    // Filter by team if selected
    if (Array.isArray(this.userFilters.teams_id) && this.userFilters.teams_id.length) {
      const selectedTeams = this.userFilters.teams_id.map(tm => String(tm).toLowerCase().trim());
      list = list.filter(t => {
        const itemTeam = String(t.team_id || t.team || t.team_name || t.teams || '').toLowerCase().trim();
        if (!itemTeam) return true;
        return selectedTeams.some(st => itemTeam.includes(st));
      });
    }
    if (!q) return list;
    return list.filter(t => (t.title || t.name || '').toLowerCase().includes(q));
  }
  get filteredActiveStatusList() {
    const q = (this.searchQueries.active_status || '').toLowerCase().trim();
    if (!q) return this.activeStatusList;
    return (this.activeStatusList || []).filter(a => (a.label || '').toLowerCase().includes(q));
  }
  onSelectOpened(opened, field) {
    if (opened && field && this.searchQueries.hasOwnProperty(field)) {
      this.searchQueries[field] = '';
    }
  }
  onFilterSelectionChange() {
    try {
      this.loadScheduledTest();
    } catch (e) {}
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
  /**
   * Open question summary filtered to a specific category. If analytics data isn't loaded yet,
   * request it first and apply a pending filter.
   */
  openCategoryQuestionSummary(category) {
    if (!category) return;
    const cid = String(category.category_id || category.id || category._id || category.categoryId || '');
    if (!cid) return;
    this.selectedCategoryFilterName = category.category_name || category.name || 'Selected Category';
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
  clearCategoryFilter() {
    this.filteredQuestionSummary = [];
    this.selectedCategoryFilterName = '';
    this._pendingCategoryFilter = null;
  }
  constructor(http, loading, overlay, vcr, pageMeta, _snack, confirm, globalContextService, dialog) {
    this.http = http;
    this.loading = loading;
    this.overlay = overlay;
    this.vcr = vcr;
    this.pageMeta = pageMeta;
    this._snack = _snack;
    this.confirm = confirm;
    this.globalContextService = globalContextService;
    this.dialog = dialog;
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
    this.searchQuery = '';
    this.commentEdit = false;
    this.updatedBy = '';
    // placeholders for template bindings
    this.examCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    this.instituteCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
    this.filteredInstitutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
    this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
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
      'School': ['School'],
      'College': ['Engineering', 'Arts'],
      'BPO': ['Healthcare', 'Finance'],
      'Bank': ['Bank'],
      'IT': ['IT']
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
    this.scheduledTestsLoading = false;
    this.scheduledTestsMessage = '';
    this.scheduledTestsRequestId = 0;
    // simple pagination controls without MatPaginator binding
    this.loadingUserReport = false;
    this.selectedCategoryFilterName = '';
    this.filtersOverlayRef = null;
    this._subs = null;
    this.resetFilters = {};
    this._pendingCategoryFilter = null;
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
    this.currentReviewRow = row;
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
    this.userReviewLoading = true;
    this.loading.show();
    this.http.get(`${src_app_shared_api_config__WEBPACK_IMPORTED_MODULE_0__.API_BASE}/review-user-exam`, {
      params
    }).subscribe({
      next: res => {
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
          // Always synchronize selectedUserScore, selectedUserResult, and main table row with response
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
  // Marks editing helpers for descriptive questions
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
        // Update total score if available
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
    // history_id required for delete action
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
  // Apply filters from overlay panel
  applyFiltersPanel() {
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
        this.loadUserReport(1);
      } else {
        this.loadAnalytics();
      }
    }
    this.closeFiltersOverlay();
  }
  refreshTestReports() {
    this.selectedExam = null;
    if (!this.isGlobalInstituteActive) {
      this.selectedInstituteId = null;
      this.userFilters.institute_id = '';
      try {
        this.instituteCtrl.setValue(null);
      } catch (e) {}
    } else {
      this.userFilters.institute_id = this.globalContextService.activeInstituteId || '';
    }
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
    this.allTests = [];
    this.scheduledTestsMessage = '';
  }
  // Reset filters to empty and return to initial empty state, then close overlay.
  resetFiltersAndReload() {
    this.refreshTestReports();
    this.closeFiltersOverlay();
  }
  displayTest(exam) {
    return exam ? exam.title || exam.name || '' : '';
  }
  onTestAutocompleteSelected(exam) {
    this.selectedExam = exam;
    if (exam) {
      this.userFilters.schedule_id = String(exam.schedule_id || exam.id || exam.scheduleId || '');
    }
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
    const params = {};
    if (this.userFilters.country_id) params.country = this.userFilters.country_id;
    if (this.userFilters.city_id) params.city = this.userFilters.city_id;
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
          this.filteredInstitutes$ = this.instituteCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(val => {
            const q = (typeof val === 'string' ? val : val?.name || '').toLowerCase();
            return (this.filteredInstitutesList || []).filter(it => (it.name || '').toLowerCase().includes(q));
          }));
        } catch (e) {
          this.filteredInstitutes$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.filteredInstitutesList || []);
        }
        const globalInstId = this.globalContextService.activeInstituteId;
        if (globalInstId) {
          this.isGlobalInstituteActive = true;
          this.selectedInstituteId = globalInstId;
          this.userFilters.institute_id = globalInstId;
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
    this.userFilters.city_id = '';
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
    this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
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
          this.scheduledTestsMessage = this.allTests.length ? '' : 'No scheduled tests found for this institute.';
          try {
            this.filteredTests$ = this.examCtrl.valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.startWith)(''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.map)(val => {
              const q = (typeof val === 'string' ? val : val?.title || val?.name || '').toLowerCase();
              return (this.allTests || []).filter(it => (it.title || it.name || '').toLowerCase().includes(q));
            }));
          } catch (e) {
            this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)(this.allTests || []);
          }
        } catch (e) {
          this.allTests = [];
          this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
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
        this.filteredTests$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.of)([]);
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
      ;
      this.filtersOverlayRef = null;
    }
    this.userFilters.institute_id = this.selectedInstituteId || '';
    if (this.selectedExam) {
      this.userFilters.schedule_id = String(this.selectedExam.schedule_id || this.selectedExam.id || this.selectedExam.scheduleId || '');
    }
    Object.keys(this.searchQueries).forEach(k => this.searchQueries[k] = '');
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
    const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__.TemplatePortal(this.filtersPanelTpl, this.vcr);
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
    if (!this.selectedExam) {
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
  // Format a date dynamically converting GMT/UTC timezone offsets to IST
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
  // Convert string to Title Case
  toTitleCase(str) {
    if (!str) return '';
    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
  }
  static {
    this.ɵfac = function ExamReportsComponent_Factory(t) {
      return new (t || ExamReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_loader_service__WEBPACK_IMPORTED_MODULE_2__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_13__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_page_meta_service__WEBPACK_IMPORTED_MODULE_3__.PageMetaService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__.MatSnackBar), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_confirm_service__WEBPACK_IMPORTED_MODULE_4__.ConfirmService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_global_institute_context_service__WEBPACK_IMPORTED_MODULE_5__.GlobalInstituteContextService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__.MatDialog));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
      type: ExamReportsComponent,
      selectors: [["app-exam-reports"]],
      viewQuery: function ExamReportsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filtersBtn = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.filtersPanelTpl = _t.first);
        }
      },
      decls: 30,
      vars: 7,
      consts: [[1, "page", "exam-reports"], [1, "toolbar"], [1, "selections"], ["appearance", "outline", 1, "local-institute-field", "disabled-toolbar-field"], ["matPrefix", "", "svgIcon", "institute"], ["matInput", "", "disabled", "", "placeholder", "Institute Name", "aria-label", "Institute", 3, "value"], ["appearance", "outline", 1, "scheduled-test-field", "disabled-toolbar-field"], ["matPrefix", "", "svgIcon", "exam"], ["type", "text", "matInput", "", "disabled", "", "placeholder", "Schedule Test", "aria-label", "Scheduled test", 3, "value"], [1, "controls"], [1, "action-row"], ["mat-flat-button", "", "type", "button", "title", "Refresh & Clear Filters", 1, "refresh-icon-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", 1, "refresh-svg-icon"], ["d", "M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"], ["mat-flat-button", "", "type", "button", 1, "button-one", 3, "click"], ["filtersBtn", ""], ["svgIcon", "filter"], ["filtersPanel", ""], ["class", "empty-reports-state", 4, "ngIf"], ["class", "list-card", 4, "ngIf"], ["class", "wrong-summary-backdrop", 3, "click", 4, "ngIf"], [1, "filters-panel", 3, "click"], [1, "filters-panel-header"], [1, "filter-block"], ["appearance", "outline", 1, "filter-item"], ["name", "filterCountry", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", 3, "click"], ["matInput", "", "placeholder", "Search country...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "filterCity", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search city...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["appearance", "outline", "class", "filter-item", 4, "ngIf"], ["name", "filterCampus", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search campus...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterDepartment", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", "select-search-option--multi", 3, "click"], ["matInput", "", "placeholder", "Search department...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterTeam", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search team...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterSchedule", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search schedule...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterActiveStatus", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search status...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["appearance", "outline", 1, "filter-item", "filter-item--full", "date-range-field", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Select date range", 2, "cursor", "pointer", 3, "value"], ["matSuffix", "", 2, "cursor", "pointer", "color", "#0284c7"], [1, "filter-item", "filter-checkbox-item"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "filter-actions"], ["mat-flat-button", "", 1, "filter-apply-btn", 3, "click"], ["svgIcon", "apply"], ["mat-flat-button", "", 1, "filter-reset-btn", 3, "click"], ["svgIcon", "refresh"], [3, "value"], ["name", "filterIndustry", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search industry...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterSector", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search sector...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterInstitute", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search institute...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [1, "empty-reports-state"], [1, "empty-state-card"], [1, "empty-state-icon"], [1, "empty-state-title"], [1, "empty-state-description"], ["mat-flat-button", "", "type", "button", 1, "button-one", "empty-action-btn", 3, "click"], [1, "list-card"], [1, "list-wrapper"], [1, "exam-tabs", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["label", "User Report"], [1, "report-summary-grid"], [1, "summary-card"], [1, "summary-icon", "summary-icon--students"], [1, "summary-copy"], [1, "summary-label"], [1, "summary-value"], [1, "summary-meta"], [1, "summary-icon", "summary-icon--page"], [1, "summary-icon", "summary-icon--score"], [1, "summary-icon", "summary-icon--pass"], [1, "tab-actions"], [1, "search"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by student name", "aria-label", "Search by student name", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["class", "table-wrap", 4, "ngIf"], ["class", "loader-placeholder", 4, "ngIf"], ["label", "Analytics Report"], [1, "analytics-section"], [1, "report-summary-grid", "analytics-summary-grid"], [1, "summary-icon", "summary-icon--categories"], [1, "summary-icon", "summary-icon--questions"], [1, "summary-icon", "summary-icon--attempts"], [1, "summary-icon", "summary-icon--mistakes"], [1, "inner-analytics-tabs", 3, "selectedIndex", "selectedIndexChange"], ["label", "Question Bank Report"], [1, "analytics-tab-body"], [1, "table-wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", "compact", "premium-table", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-primary", 4, "matCellDef"], ["matColumnDef", "questions"], ["mat-cell", "", "class", "cell-num", 4, "matCellDef"], ["matColumnDef", "users_attempted"], ["matColumnDef", "total_attempts"], ["matColumnDef", "mistakes"], ["matColumnDef", "error_pct"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Question Summary"], ["class", "category-filter-banner", 4, "ngIf"], ["matColumnDef", "sno"], ["matColumnDef", "question"], ["mat-cell", "", "class", "question-text-cell", 4, "matCellDef"], ["matColumnDef", "user_attempts"], ["matColumnDef", "attempts"], ["class", "analytics-table-footer", 4, "ngIf"], ["matColumnDef", "student_name"], ["matColumnDef", "questions_attempted"], ["matColumnDef", "correct_answers"], ["matColumnDef", "wrong_answers"], ["matColumnDef", "result"], [1, "pager"], ["mat-button", "", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-primary"], [1, "student-cell", 3, "click"], [1, "student-avatar"], [1, "student-name"], ["mat-cell", ""], [1, "marks-inline"], [1, "marks-sep"], [1, "pct-badge"], [1, "review-status"], [1, "result-pill"], ["mat-header-row", ""], ["mat-row", ""], [1, "loader-placeholder"], ["title", "Click to view question summary for this category", 1, "category-cell", 3, "click"], [1, "category-avatar"], ["mat-cell", "", 1, "cell-num"], [1, "pct-badge", 3, "ngClass"], [1, "category-filter-banner"], [1, "banner-text"], ["mat-button", "", "type", "button", 1, "clear-filter-btn", 3, "click"], [1, "cell-mono"], ["mat-cell", "", 1, "question-text-cell"], ["href", "javascript:void(0)", "class", "wrong-summary-link mistakes-pill", 3, "click", 4, "ngIf", "ngIfElse"], ["noMistakes", ""], ["href", "javascript:void(0)", 1, "wrong-summary-link", "mistakes-pill", 3, "click"], [1, "cell-muted"], [1, "analytics-table-footer"], [1, "wrong-summary-backdrop", 3, "click"], [1, "wrong-summary-panel", "user-review-panel", 3, "click"], [1, "card"], [1, "panel-header"], [1, "header-icon"], [1, "header-info"], [1, "score"], [1, "result", 3, "ngClass"], ["mat-icon-button", "", "aria-label", "Close answer sheet", "type", "button", 1, "review-close-btn", 3, "click"], ["aria-hidden", "true"], [1, "panel-body"], ["class", "muted", 4, "ngIf"], [4, "ngIf"], [1, "summary-actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "muted"], [4, "ngIf", "ngIfElse"], ["noUserReview", ""], [4, "ngFor", "ngForOf"], ["class", "q-evaluation-state pending attempt-level-banner", "style", "margin-bottom: 16px; border-radius: 8px;", 4, "ngIf"], [1, "questions-list"], ["class", "question-review-card", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "pending", "attempt-level-banner", 2, "margin-bottom", "16px", "border-radius", "8px"], ["type", "button", 1, "retry-evaluation-btn", 3, "disabled", "click"], [1, "question-review-card"], [1, "q-head-row"], [1, "q-left"], [1, "q-index"], [1, "q-body"], [1, "q-meta"], [1, "q-badge"], ["class", "q-info", 4, "ngIf"], [1, "q-text"], [1, "q-right"], ["class", "marks-container", 4, "ngIf"], ["class", "q-marks small-muted", 3, "ngClass", 4, "ngIf"], ["class", "q-fill", 4, "ngIf"], ["class", "q-descriptive", 4, "ngIf"], ["class", "q-options two-col", 4, "ngIf"], [1, "q-info"], ["svgIcon", "brain"], ["type", "button", "class", "manual-check-chip", 3, "selected", "title", "click", 4, "ngIf"], ["type", "button", 1, "manual-check-chip", 3, "title", "click"], [1, "marks-container"], ["class", "marks-display", "aria-label", "Marks awarded", 4, "ngIf"], ["class", "marks-edit", 4, "ngIf"], ["aria-label", "Marks awarded", 1, "marks-display"], [1, "q-marks", "small-muted", 3, "ngClass"], [1, "marks-divider"], ["mat-icon-button", "", "type", "button", "aria-label", "Edit marks", "title", "Edit marks", 1, "edit-marks-btn", 3, "click"], [1, "marks-edit"], [1, "marks-edit-row"], ["type", "number", "step", "0.5", 1, "marks-input", 3, "ngModel", "min", "max", "ngModelChange"], [1, "marks-max"], [1, "marks-reason-label", 3, "for"], [1, "required-star", 2, "color", "#dc3545"], ["rows", "2", "maxlength", "1000", "placeholder", "Explain why the marks are being changed (Required)", 1, "marks-reason-input", 3, "ngModel", "id", "ngModelChange", "input"], ["class", "marks-reason-error-msg", "style", "color: #dc3545; font-size: 0.75rem; display: block; margin-top: 0.25rem;", 4, "ngIf"], [1, "marks-edit-actions"], ["mat-icon-button", "", "type", "button", "title", "Save marks", 1, "save-marks-btn", 3, "click"], ["mat-icon-button", "", "type", "button", "title", "Cancel", 1, "cancel-marks-btn", 3, "click"], [1, "marks-reason-error-msg", 2, "color", "#dc3545", "font-size", "0.75rem", "display", "block", "margin-top", "0.25rem"], [1, "q-fill"], [1, "fill-row"], [1, "fill-option"], ["class", "fill-correct", 4, "ngIf"], [1, "fill-correct"], [1, "q-descriptive"], [1, "descriptive-answers"], [1, "desc-student"], [1, "student-label"], [1, "answer-text"], [1, "desc-model"], [1, "model-label"], [1, "model-text"], ["class", "q-evaluation-state failed", 4, "ngIf"], ["class", "q-evaluation-state pending", 4, "ngIf"], ["class", "q-feedback", 4, "ngIf"], ["class", "q-review-comments", 4, "ngIf"], [1, "marks-history-section"], [1, "marks-history-header"], [1, "marks-history-timeline"], [1, "history-item", "current"], [1, "history-indicator"], [1, "dot", "current"], ["class", "line", 4, "ngIf"], [1, "history-content"], [1, "history-card", "current"], [1, "history-badge"], [1, "history-marks"], [1, "marks-total"], [1, "history-meta"], [1, "updated-by"], ["class", "updated-date", 4, "ngIf"], ["class", "history-reason", 4, "ngIf"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "failed"], [1, "feedback-text"], [1, "q-evaluation-state", "pending"], [1, "q-feedback"], [1, "q-review-comments"], [1, "review-columns"], [1, "col", "missed"], [1, "col-header"], [1, "dot", "red"], ["class", "review-empty", 4, "ngIf"], [1, "col", "incorrect"], [1, "dot", "orange"], [1, "col", "incomplete"], [1, "dot", "yellow"], [1, "review-empty"], [1, "review-item"], [1, "ri-body"], ["class", "review-text-history", 4, "ngIf"], ["class", "review-text-missed", 3, "deleted", 4, "ngIf"], ["class", "review-text-missed editing", 4, "ngIf"], ["class", "review-meta small-muted", 4, "ngIf"], ["class", "review-actions", 4, "ngIf"], [1, "review-text-history"], [1, "history-entry"], [1, "review-meta", "small-muted"], ["class", "deleted-by", 4, "ngIf"], [1, "review-text-missed"], [1, "ri-left"], [1, "ri-icon", "missed"], [1, "review-text", "deleted"], [1, "review-text-missed", "editing"], ["rows", "2", 1, "edit-comment-text", 3, "ngModel", "ngModelChange"], [1, "deleted-by"], [1, "review-actions"], ["class", "edited-info", 4, "ngIf"], ["class", "edit-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "delete-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "save-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "cancel-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], [1, "edited-info"], [1, "edited-text"], [1, "editor-name"], [1, "edited-date-sep"], [1, "edited-date"], ["href", "javascript:void(0)", 1, "edit-link", 3, "click"], ["href", "javascript:void(0)", 1, "delete-link", 3, "click"], ["href", "javascript:void(0)", 1, "save-link", 3, "click"], ["href", "javascript:void(0)", 1, "cancel-link", 3, "click"], [1, "review-text"], ["class", "review-text-incorrect", 3, "deleted", 4, "ngIf"], ["class", "review-text-incorrect editing", 4, "ngIf"], [1, "review-text-incorrect"], [1, "ri-icon", "incorrect"], [1, "review-text-incorrect", "editing"], ["class", "review-text-incomplete", 3, "deleted", 4, "ngIf"], ["class", "review-text-incomplete editing", 4, "ngIf"], [1, "review-text-incomplete"], [1, "ri-icon", "incomplete"], [1, "review-text-incomplete", "editing"], [1, "line"], [1, "updated-date"], [1, "history-reason"], [1, "history-item"], [1, "dot", "past"], [1, "history-card", "past"], [1, "q-options", "two-col"], ["class", "q-option", 3, "correct", "selected", "missed", 4, "ngFor", "ngForOf"], [1, "q-option"], [1, "opt-left"], [1, "opt-mark"], [1, "opt-body"], [1, "opt-text"], ["class", "opt-badge", 4, "ngIf"], [1, "opt-badge"], ["class", "badge your-answer", 4, "ngIf"], ["class", "badge correct", 4, "ngIf"], ["class", "badge missed", 4, "ngIf"], [1, "badge", "your-answer"], [1, "badge", "correct"], [1, "badge", "missed"], [1, "wrong-summary-panel", 3, "click"], [1, "header-copy"], [1, "panel-sub"], ["mat-icon-button", "", "aria-label", "Close wrong answer summary", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "question-title"], [1, "summary-table"], ["data-label", "Wrong Answer"], ["href", "javascript:void(0)", 1, "wa-answer-link", 3, "click"], ["data-label", "Selected Count"], ["href", "javascript:void(0)", 1, "wa-count-link", 3, "click"], ["data-label", "Occurrence %"], [1, "panel-sub", "small-muted"], ["mat-icon-button", "", "aria-label", "Close resources", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "resource-list"], [1, "res-title"], [1, "res-desc", "small-muted"]],
      template: function ExamReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-form-field", 3)(4, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Institute");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "mat-icon", 4)(7, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-form-field", 6)(9, "mat-label");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Scheduled Test");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "mat-icon", 7)(12, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 9)(14, "div", 10)(15, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_15_listener() {
            return ctx.refreshTestReports();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "svg", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "path", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 14, 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_18_listener($event) {
            $event.stopPropagation();
            return ctx.openFiltersOverlay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "mat-icon", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Filter Test Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, ExamReportsComponent_ng_template_23_Template, 83, 42, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ExamReportsComponent_div_25_Template, 21, 0, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_div_26_Template, 164, 35, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ExamReportsComponent_div_27_Template, 24, 10, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ExamReportsComponent_div_28_Template, 21, 1, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, ExamReportsComponent_div_29_Template, 22, 2, "div", 20);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.selectedInstituteName);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.selectedExamTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.selectedExam);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.selectedExam);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showUserReviewPanel);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showWrongAnswerSummary);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.showResourcePanel);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatPrefix, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_17__.MatSuffix, _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_20__.MatIconButton, _angular_material_input__WEBPACK_IMPORTED_MODULE_21__.MatInput, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_22__.MatRow, _angular_material_sort__WEBPACK_IMPORTED_MODULE_23__.MatSort, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTab, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__.MatTabGroup, _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__.MatIcon, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__.MatCheckbox, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.DecimalPipe],
      styles: ["[_nghost-%COMP%] {\n  --green-bg: #e8f9ef;\n  --red-bg: #fff2f4;\n  --yellow-bg: #fff8e6;\n  --orange-bg: #fff4e1;\n  --blue-bg: #e6f0ff;\n  --green-text: #166534;\n  --red-text: #b91c1c;\n  --yellow-text: #b45309;\n  --orange-text: #c2410c;\n  --blue-text: #0b66d0;\n  --bgreen-border: #86efac;\n  --bred-border: #e7d6d6;\n  --byellow-border: #fde68a;\n  --borange-border: #faeedf;\n  --bblue-border: #93c5fd;\n  --score-color: #f39c12;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 3rem;\n}\n\n.exam-reports[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.875rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.selections[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  flex: 1 1 28rem;\n  min-width: 16rem;\n  max-width: 36rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field {\n  position: relative;\n  min-width: 14rem;\n  max-width: 18rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 0 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-flex {\n  height: 2.75rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-infix {\n  padding: 0.5rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label {\n  top: 1.375rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label.mdc-floating-label--float-above {\n  transform: translateY(-1.5rem) scale(0.75);\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field mat-icon[matPrefix] {\n  color: #94a3b8;\n  margin-right: 0.5rem;\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover mat-icon[matPrefix] {\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12), 0 4px 16px rgba(31, 123, 255, 0.08);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n  transform: scale(1.05);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-text-field-wrapper {\n  background: #f1f5f9 !important;\n  border: 1px solid #cbd5e1 !important;\n  border-radius: 0.75rem !important;\n  cursor: not-allowed !important;\n  box-shadow: none !important;\n  opacity: 0.95;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input {\n  color: #0f172a !important;\n  font-weight: 600 !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #0f172a !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input::placeholder {\n  color: #64748b !important;\n  font-weight: 500 !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-floating-label {\n  color: #475569 !important;\n  font-weight: 600 !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field mat-icon[matPrefix] {\n  color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .lock-icon {\n  font-size: 1.125rem !important;\n  width: 1.125rem !important;\n  height: 1.125rem !important;\n  color: #64748b !important;\n  cursor: not-allowed !important;\n  margin-left: 0.375rem;\n  opacity: 0.85;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled input {\n  background: #f1f5f9 !important;\n  color: #94a3b8 !important;\n  cursor: not-allowed !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-floating-label {\n  color: #94a3b8 !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.empty-reports-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4rem 1.5rem;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  border: 1px dashed #cbd5e1;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.empty-state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 28rem;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  width: 4.25rem;\n  height: 4.25rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.12) 0%, rgba(31, 123, 255, 0.04) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n  border: 1px solid rgba(31, 123, 255, 0.2);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  width: 2.25rem;\n  height: 2.25rem;\n  color: var(--button-1, #1f7bff);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  letter-spacing: -0.01em;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 1.5rem 0;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: 600;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  height: 2.5rem;\n  padding: 0 1.25rem !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel {\n  border-radius: 0.75rem !important;\n  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.03) !important;\n  border: none !important;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option {\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  min-height: 2.75rem;\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active {\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.1) 0%, rgba(31, 123, 255, 0.06) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-main {\n  font-weight: 500;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.125rem;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .refresh-icon-btn, .refresh-icon-btn[_ngcontent-%COMP%] {\n  min-width: 2.625rem !important;\n  width: 2.625rem !important;\n  height: 2.625rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.625rem !important;\n  background: var(--button-1) !important;\n  color: #ffffff !important;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon, [_nghost-%COMP%]     .refresh-icon-btn mat-icon, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  fill: #ffffff !important;\n  color: #ffffff !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon svg, [_nghost-%COMP%]     .refresh-icon-btn mat-icon svg, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon path, [_nghost-%COMP%]     .refresh-icon-btn mat-icon path, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon path, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover, .refresh-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover, #1a6fe8) !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon, .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon svg, [_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon path, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon svg, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon path, .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n}\n\n.button-one[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.button-one[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  color: var(--button-text-2) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filters-panel[_ngcontent-%COMP%] {\n  width: min(34rem, 100vw - 2rem);\n  max-height: 75vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1rem;\n  box-shadow: 0 1.25rem 3rem rgba(15, 23, 42, 0.16), 0 0.375rem 1rem rgba(15, 23, 42, 0.06);\n  animation: _ngcontent-%COMP%_slideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.filters-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.125rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--button-1);\n}\n\n.filter-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  padding: 1rem 1.125rem;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.filter-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.625rem;\n  padding: 0 0.75rem;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-flex {\n  height: 2.5rem;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label {\n  top: 1.25rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label.mdc-floating-label--float-above {\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item input, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-value-text {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-arrow, [_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle .mat-icon {\n  color: #94a3b8;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 0.25rem 0.625rem rgba(15, 23, 42, 0.06);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle button {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 0.375rem;\n  padding: 0.375rem 0.625rem;\n  font-size: 0.8125rem;\n  color: #0f172a;\n  outline: none;\n  background: #f8fafc;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input:focus {\n  border-color: var(--button-1);\n  background: #ffffff;\n  box-shadow: 0 0 0 2px rgba(31, 123, 255, 0.15);\n}\n[_nghost-%COMP%]     .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n.filter-checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.5rem;\n  grid-column: span 2;\n}\n.filter-checkbox-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #334155;\n}\n\n.filter-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  grid-column: span 1;\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  padding: 0.875rem 1.125rem;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #475569 !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .filter-reset-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-0.375rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.list-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid #e2e8f0;\n  border-radius: 0.75rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.exam-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inner-analytics-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-header {\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.5rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-labels {\n  min-height: 3rem;\n  gap: 0.125rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0 1.25rem;\n  min-height: 3rem;\n  border-radius: 0.75rem 0.75rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab:hover {\n  background: var(--bg-1);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active {\n  background: var(--bg-1);\n  color: var(--button-1);\n  box-shadow: inset 0 -0.125rem 0 var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-body-wrapper {\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-header {\n  background: var(--bg-1);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.75rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-labels {\n  min-height: 2.5rem;\n  gap: 0.25rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.8125rem;\n  padding: 0 1rem;\n  min-height: 2.5rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab:hover {\n  background: var(--bg-2);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active {\n  background: var(--bg-2);\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n.analytics-tab-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.category-filter-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.4rem 0.75rem;\n  margin: 0.5rem 1rem 0.5rem 1rem;\n  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 0.625rem;\n  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.02);\n  animation: _ngcontent-%COMP%_slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1, #1e293b);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  line-height: 1.125rem;\n  color: var(--button-1, #2563eb);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--button-1, #2563eb);\n  font-weight: 700;\n  background: rgba(59, 130, 246, 0.12);\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.375rem;\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .clear-filter-btn {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 0.375rem !important;\n  padding: 0.35rem 0.75rem !important;\n  height: 2rem !important;\n  min-height: 2rem !important;\n  line-height: 1 !important;\n  border-radius: 0.5rem !important;\n  background: var(--bg-1, #ffffff) !important;\n  border: 1px solid var(--theme-3-border, #cbd5e1) !important;\n  color: var(--theme-3-text-2, #475569) !important;\n  font-size: 0.75rem !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     .clear-filter-btn .mdc-button__label {\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 0.375rem !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn mat-icon {\n  font-size: 0.9375rem !important;\n  width: 0.9375rem !important;\n  height: 0.9375rem !important;\n  line-height: 0.9375rem !important;\n  color: var(--theme-3-text-3, #64748b);\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover mat-icon {\n  color: #ef4444 !important;\n}\n\n.report-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n}\n\n.analytics-summary-grid[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 0.5rem;\n  background: transparent;\n  border-bottom: none;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  min-width: 0;\n  padding: 0.5rem 0.875rem;\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 0.125rem 0.5rem var(--theme-3-hanover-bg);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.625rem;\n  background: var(--theme-2-hanover-bg);\n  color: var(--button-1);\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.summary-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.summary-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.summary-icon--students[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--page[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--score[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n\n.summary-icon--pass[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n\n.summary-icon--categories[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n}\n\n.summary-icon--questions[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--attempts[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--mistakes[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n\n.summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  min-width: 0;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-3);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.125rem, 0.95rem + 0.5vw, 1.5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: var(--theme-3-text-1);\n}\n\n.summary-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-xsm);\n  font-weight: 500;\n  color: var(--theme-3-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tab-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-between: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1rem 1rem;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n  margin: 0;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 20rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  padding: 0 0.75rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-flex {\n  height: 2.375rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-floating-label {\n  top: 1.1875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input::placeholder {\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-icon[matPrefix] {\n  color: var(--theme-3-icon-1);\n  margin-right: 0.5rem;\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-focused .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px var(--theme-2-hanover-bg);\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 0.875rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  border-radius: 0.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%], .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  color: var(--theme-3-text-2);\n  border: 1px solid var(--theme-3-border);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover, .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover {\n  background: var(--bg-1);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1);\n  border: none;\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--button-1-hover) 0%, var(--button-1) 100%);\n  box-shadow: 0 1rem 2rem var(--theme-2-hanover-bg);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  padding: 0 0.75rem 0.75rem;\n  scrollbar-width: thin;\n  scrollbar-color: #818cf8 rgba(0, 0, 0, 0.05);\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 0.25rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #818cf8;\n  border-radius: 0.25rem;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #4f46e5;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n.analytics-table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--theme-3-text-2, #475569);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-top: 1px solid var(--theme-3-border, #e2e8f0);\n}\n\n.premium-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate !important;\n  border-spacing: 0 !important;\n  border-radius: 0.5rem;\n}\n\n[_nghost-%COMP%]     .premium-table th.mat-header-cell, [_nghost-%COMP%]     .premium-table th.mat-mdc-header-cell, .premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 0 !important;\n  z-index: 10 !important;\n  background: var(--table-header-bg, #1e293b) !important;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--table-header-text, #ffffff) !important;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 0.125rem solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child, .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 0.1875rem solid var(--button-1);\n}\n\n.premium-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.75rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-2, #334155);\n  border-bottom: 0.0625rem solid #f1f5f9;\n  vertical-align: middle;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.5);\n}\n\n.student-name[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: var(--font-md);\n  letter-spacing: -0.01em;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.student-name[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  transform: translateX(0.0625rem);\n}\n\n.student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.student-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.category-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n\n.marks-inline[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-1);\n}\n\n.marks-sep[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  margin: 0 0.125rem;\n}\n\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366f1;\n}\n\n.review-status[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n\n.review-status.review-pending[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  font-weight: 600;\n}\n\n.result-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--theme-3-text-3);\n}\n\n.result-pill.result-pass[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.result-pill.result-fail[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.analytics-section[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  border-radius: 0.625rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  color: var(--theme-3-text-2);\n}\n\n.pager[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.375rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  padding: 0.375rem 1rem !important;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n  background: var(--bg-2) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.loader-placeholder[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.02) 25%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.02) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%] {\n  margin-left: 0.375rem;\n  font-size: 0.85rem;\n  color: var(--button-1);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  font-weight: 600;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateX(0.125rem);\n}\n\n.wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  cursor: pointer;\n  font-weight: 700;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.wa-answer-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(0.0625rem);\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.85rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_subtlePulse {\n  0%, 100% {\n    box-shadow: 0 1.5rem 3.75rem var(--theme-3-hanover-bg);\n  }\n  50% {\n    box-shadow: 0 1.75rem 4rem var(--theme-2-hanover-bg);\n  }\n}\n.wrong-summary-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.55) 0%, rgba(30, 41, 59, 0.75) 100%);\n  backdrop-filter: blur(0.75rem) saturate(140%);\n  z-index: 10050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(56rem, 92vw);\n  max-height: 88vh;\n  z-index: 10060;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 1.25rem;\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  overflow: hidden;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  min-width: 0;\n  flex: 1;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n}\n\n.panel-header[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  margin-top: 0;\n  line-height: 1.4;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%] {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n  min-width: 2.5rem !important;\n  min-height: 2.5rem !important;\n  max-width: 2.5rem !important;\n  max-height: 2.5rem !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.75rem !important;\n  background: var(--bg-1) !important;\n  border: 0.0625rem solid var(--theme-3-border) !important;\n  color: var(--theme-3-text-2) !important;\n  line-height: 1 !important;\n  flex: 0 0 2.5rem !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n  cursor: pointer !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] .mat-mdc-button-touch-target, [_nghost-%COMP%]     .panel-header .panel-close-btn .mat-mdc-button-touch-target {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] mat-icon, [_nghost-%COMP%]     .panel-header .panel-close-btn mat-icon {\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.25rem !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: var(--theme-3-text-2) !important;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover, .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(239, 68, 68, 0.15) !important;\n  transform: scale(1.04) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n  transform: rotate(90deg) !important;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: 1.125rem 1.375rem;\n  overflow: auto;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.875rem;\n  font-size: 0.9375rem;\n  letter-spacing: -0.01em;\n  color: var(--theme-3-text-1);\n  padding: 0.875rem 1rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: var(--bg-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .small-muted[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  padding-left: 0;\n  color: var(--theme-3-text-3);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  margin: 0 auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-1-text-1);\n  background: var(--table-header-bg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n  text-align: center;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--theme-3-text-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wa-answer-link[_ngcontent-%COMP%], .wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover, .wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%], .summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.875rem 1.375rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.625rem !important;\n  font-weight: 700 !important;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.0625rem);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg) !important;\n}\n\n.resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 0.875rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2rem var(--theme-3-hanover-bg);\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n}\n\n.res-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  letter-spacing: -0.01em;\n}\n\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n  width: 0.375rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--theme-3-border);\n  border-radius: 0.1875rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%] {\n  width: min(72rem, 94vw);\n  max-height: 90vh;\n  margin: auto;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border-radius: 1.25rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  border: 0.0625rem solid var(--theme-3-border);\n  overflow: hidden;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-3);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.5rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  letter-spacing: 0.01em;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 62.5rem;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 0.125rem 0.5rem rgba(15, 23, 42, 0.08);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.pass[_ngcontent-%COMP%] {\n  color: var(--button-text-1);\n  background: var(--button-1);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.fail[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 2.75rem;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--theme-3-text-2);\n  line-height: 1;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex: 0 0 2.75rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.375rem 0.875rem var(--theme-3-hanover-bg);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.125rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.875rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  max-height: calc(90vh - 10rem);\n  padding: 1.5rem;\n}\n\n.attempt-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.75rem 0;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  margin-bottom: 0.875rem;\n}\n\n.attempt-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.attempt-header[_ngcontent-%COMP%]   .score-badge[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #0a8043;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.875rem;\n  margin-left: auto;\n  letter-spacing: 0.01em;\n}\n\n.attempt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-size: 0.8125rem;\n}\n\n.questions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.question-review-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-1);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.125rem 0.375rem rgba(15, 23, 42, 0.03);\n  overflow: hidden;\n}\n\n.question-review-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1) 0%, rgba(99, 102, 241, 0.4) 100%);\n}\n\n.question-review-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem rgba(15, 23, 42, 0.08);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--theme-3-text-1);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .mark-badge[_ngcontent-%COMP%] {\n  float: right;\n  background: #fff3f3;\n  color: var(--red-text);\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.q-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem dashed var(--theme-3-border);\n}\n\n.q-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-index[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0.06) 100%);\n  border: 0.0625rem solid rgba(99, 102, 241, 0.18);\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.875rem;\n  color: var(--button-1);\n  flex-shrink: 0;\n}\n\n.q-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n}\n\n.q-badge[_ngcontent-%COMP%] {\n  background: var(--theme-2-hanover-bg);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--button-1);\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.6875rem;\n  line-height: 1rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.q-info[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.8125rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n\n.q-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  width: 0.9375rem;\n  height: 0.9375rem;\n  color: var(--button-1);\n}\n\n.q-marks.small-muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n}\n\n.q-options.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.q-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.875rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.1);\n  background: #f8fbff;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.opt-left[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.opt-left[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.opt-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 0.75rem;\n  align-self: center;\n  line-height: 1.45;\n}\n\n.opt-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n}\n\n.badge.your-answer[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.badge.correct[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.badge.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border-color: var(--bred-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.1);\n}\n\n.q-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border-color: var(--bgreen-border);\n}\n\n.q-option.correct[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.1);\n}\n\n.q-option.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border-color: var(--bblue-border);\n}\n\n.q-option.missed[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(11, 102, 208, 0.1);\n}\n\n.q-selected[_ngcontent-%COMP%], .q-marks[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.q-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  background: rgba(240, 248, 255, 0.6);\n  padding: 0.625rem 0.75rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-evaluation-state[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  padding: 0.75rem;\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.q-evaluation-state.failed[_ngcontent-%COMP%] {\n  color: #8a1c1c;\n  background: #fff2f2;\n  border: 0.0625rem solid #efb4b4;\n}\n\n.q-evaluation-state.pending[_ngcontent-%COMP%] {\n  color: #6c4a00;\n  background: #fff8e6;\n  border: 0.0625rem solid #e7ca7a;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%] {\n  border: 0.0625rem solid currentColor;\n  border-radius: 0.375rem;\n  padding: 0.4rem 0.7rem;\n  color: inherit;\n  background: #fff;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.6;\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-style: italic;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%], .q-marks.mark-negative[_ngcontent-%COMP%], .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.25rem;\n  height: 2rem;\n  margin-top: 0;\n  padding: 0 0.625rem;\n  display: inline-grid !important;\n  place-items: center;\n  border-radius: 0.375rem;\n  font-weight: 800 !important;\n  font-size: 0.8125rem;\n  line-height: normal;\n  letter-spacing: 0.01em;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: #0b8a45;\n}\n\n.q-marks.mark-negative[_ngcontent-%COMP%] {\n  background: #fff2f4;\n  color: #b02a37;\n}\n\n.q-marks.mark-mid[_ngcontent-%COMP%] {\n  background: #fff8e6;\n  color: #b36a00;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  background: #fff7ed;\n  border: 0.0625rem solid rgba(245, 166, 35, 0.1);\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.selected[_ngcontent-%COMP%] {\n  background: #e8f6ff;\n  border-color: rgba(2, 112, 255, 0.15);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  border-color: var(--bgreen-border);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-correct[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.8125rem;\n  background-color: var(--green-bg);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.875rem;\n}\n\n.descriptive-answers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.875rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-question[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #8c6ad6;\n  background: rgba(140, 106, 214, 0.08);\n  display: inline-block;\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  flex: 0 0 8.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #f39c12;\n  background: #fff;\n  padding: 0.75rem 0.5rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  margin-top: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--theme-2);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--green-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bgreen-border);\n  border-left: 0.1875rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-label[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .student-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-text[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.55;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  padding: 0.625rem;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0b66d0;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .q-feedback[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-review-comments[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem dashed var(--theme-3-border);\n}\n\n.review-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.875rem;\n}\n@media (max-width: 768px) {\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  border-radius: 0.75rem;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.06);\n  transform: translateY(-0.125rem);\n}\n.review-columns[_ngcontent-%COMP%]   .col.missed[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--red-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--bred-border);\n  border-top: 0.1875rem solid var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incorrect[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--orange-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--borange-border);\n  border-top: 0.1875rem solid var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incomplete[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--yellow-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--byellow-border);\n  border-top: 0.1875rem solid var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0.1875rem rgba(0, 0, 0, 0.04);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.red[_ngcontent-%COMP%] {\n  background: var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.orange[_ngcontent-%COMP%] {\n  background: var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.yellow[_ngcontent-%COMP%] {\n  background: var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-2, #374151);\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3, #9CA3AF);\n  font-style: italic;\n  padding: 0.5rem 0;\n}\n\n.review-item[_ngcontent-%COMP%] {\n  background: var(--bg-1, #ffffff);\n  border: 0.0625rem solid rgba(15, 23, 42, 0.08);\n  border-radius: 0.625rem;\n  padding: 0.75rem 0.875rem;\n  margin-bottom: 0.625rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.review-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.review-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(15, 23, 42, 0.14);\n  box-shadow: 0 0.25rem 0.75rem rgba(15, 23, 42, 0.06);\n}\n.review-item[_ngcontent-%COMP%]   .ri-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.review-text-missed[_ngcontent-%COMP%], .review-text-incorrect[_ngcontent-%COMP%], .review-text-incomplete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  width: 100%;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.ri-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n\n.ri-icon[_ngcontent-%COMP%] {\n  width: 1.375rem;\n  height: 1.375rem;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.ri-icon.missed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.ri-icon.incorrect[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.ri-icon.incomplete[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.review-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: #1e293b;\n  font-weight: 500;\n  word-break: break-word;\n  flex: 1;\n}\n.review-text.deleted[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.review-text-history[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.history-entry[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 0.0625rem dashed #e2e8f0;\n}\n.history-entry[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.25rem;\n}\n.history-entry.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.review-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.review-meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  vertical-align: middle;\n  color: #64748b;\n}\n.review-meta[_ngcontent-%COMP%]   .deleted-by[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 500;\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 0.0625rem dashed #e2e8f0;\n  flex-wrap: wrap;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.125rem;\n  margin-bottom: 0.375rem;\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  padding: 0.35rem 0.625rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n  font-size: 0.725rem;\n  line-height: 1.35;\n  color: #475569;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n  transition: all 0.2s ease;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  width: 15px !important;\n  height: 15px !important;\n  line-height: 15px !important;\n  color: #4f46e5 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .editor-name[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date-sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.65rem;\n  margin: 0 0.05rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 400;\n}\n.review-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  border: none;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.16);\n  color: #1d4ed8;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.16);\n  color: #b91c1c;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: rgba(22, 163, 74, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%]:hover {\n  background: rgba(22, 163, 74, 0.16);\n  color: #15803d;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  background: rgba(100, 116, 139, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%]:hover {\n  background: rgba(100, 116, 139, 0.16);\n  color: #475569;\n  text-decoration: none;\n}\n\n.marks-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  min-height: 2.25rem;\n}\n\n.marks-display[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.1875rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.625rem;\n  background: var(--bg-1);\n  box-shadow: 0 0.0625rem 0.125rem rgba(15, 23, 42, 0.04);\n}\n\n.marks-display[_ngcontent-%COMP%]   .q-marks.mark-positive[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-negative[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.5rem;\n  height: 1.75rem;\n  padding: 0 0.5rem;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  border-radius: 0.4375rem;\n}\n\n.marks-divider[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  font-weight: 600;\n}\n\n.edit-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  line-height: 1.75rem !important;\n  border-radius: 0.4375rem !important;\n  color: var(--theme-3-text-2) !important;\n  opacity: 0.72;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.edit-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--button-1) !important;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.0625rem;\n}\n\n.marks-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: min(20rem, 100vw - 4rem);\n  gap: 0.625rem;\n  background: #fff;\n  padding: 0.625rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--button-1);\n  box-shadow: 0 0.125rem 0.5rem rgba(99, 102, 241, 0.15);\n}\n\n.marks-input[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  padding: 0.25rem 0.375rem;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.marks-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n.marks-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .marks-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.marks-max[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 500;\n}\n\n.save-marks-btn[_ngcontent-%COMP%], .cancel-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  line-height: 1 !important;\n  border-radius: 0.4375rem !important;\n  flex: 0 0 1.75rem;\n}\n\n.save-marks-btn[_ngcontent-%COMP%] {\n  color: var(--green-text) !important;\n  background: var(--green-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.save-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.save-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.cancel-marks-btn[_ngcontent-%COMP%] {\n  color: var(--red-text) !important;\n  background: var(--red-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cancel-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.cancel-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.marks-history-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(59, 130, 246, 0.02) 100%);\n  border-radius: 0.75rem;\n  border: 0.0625rem solid rgba(99, 102, 241, 0.1);\n}\n\n.marks-history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(99, 102, 241, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--button-1);\n}\n.marks-history-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.marks-history-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n}\n\n.history-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1.5rem;\n  flex-shrink: 0;\n}\n.history-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 0 0 0.1875rem rgb(255, 255, 255);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  box-shadow: 0 0 0 0.1875rem rgba(16, 185, 129, 0.15), 0 0.125rem 0.375rem rgba(16, 185, 129, 0.25);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.past[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #94a3b8, #64748b);\n  box-shadow: 0 0 0 0.1875rem rgba(148, 163, 184, 0.15);\n}\n.history-indicator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  flex: 1;\n  background: linear-gradient(180deg, rgba(148, 163, 184, 0.4) 0%, rgba(148, 163, 184, 0.1) 100%);\n  margin: 0.25rem 0;\n  min-height: 1rem;\n}\n\n.history-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 0.875rem;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.history-card.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%);\n  border: 0.0625rem solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 0.125rem 0.5rem rgba(16, 185, 129, 0.1);\n}\n.history-card.current[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.375rem 1rem rgba(16, 185, 129, 0.18);\n  transform: translateY(-0.1875rem);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.history-card.past[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.8);\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.history-card.past[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.history-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  margin-bottom: 0.375rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(16, 185, 129, 0.3);\n}\n\n.history-marks[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n}\n.history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.45);\n}\n\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  opacity: 0.6;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.history-card.current[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  color: var(--green-text);\n}\n\n@media (max-width: 55rem) {\n  .page[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem 2rem;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-bottom: 0.625rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 1 1 100%;\n  }\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tab-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-options.two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .user-review-panel[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 0.625rem;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n    margin-top: 0.5rem;\n  }\n  .descriptive-answers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-head-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .q-right[_ngcontent-%COMP%] {\n    margin-left: 3.125rem;\n  }\n}\n.marks-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.marks-reason-label[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.marks-reason-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .marks-reason-error[_ngcontent-%COMP%] {\n  color: var(--red-text);\n}\n\n.marks-reason-error[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n  font-size: 0.75rem;\n  line-height: 1.35;\n}\n\n.marks-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.375rem;\n  min-height: 1.75rem;\n}\n\n.marks-reason-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 5rem;\n  box-sizing: border-box;\n  padding: 0.625rem;\n  border: 0.0625rem solid var(--border-color, #d3d9e2);\n  border-radius: 0.375rem;\n  font: inherit;\n  line-height: 1.4;\n  resize: vertical;\n}\n\n.marks-reason-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color, #267cff);\n  box-shadow: 0 0 0 0.125rem rgba(38, 124, 255, 0.12);\n}\n\n.marks-reason-input[aria-invalid=true][_ngcontent-%COMP%], .marks-reason-input.input-error[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  box-shadow: 0 0 0 0.125rem rgba(220, 53, 69, 0.25) !important;\n}\n\n.history-reason[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  color: rgba(0, 0, 0, 0.68);\n  line-height: 1.4;\n}\n\n@media (max-width: 45rem) {\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0.875rem;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .summary-meta[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    border-radius: 0.625rem;\n    overflow: hidden;\n    border: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: left;\n    border-radius: 0;\n    border: none;\n    border-bottom: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 700;\n    color: var(--theme-3-text-2);\n    margin-right: 0.5rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.manual-check-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 8px;\n  padding: 3px 9px;\n  border: 1px solid #d97706;\n  border-radius: 16px;\n  background: #fff7ed;\n  color: #9a3412;\n  cursor: pointer;\n  font: inherit;\n}\n\n.manual-check-chip.selected[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  font-weight: 600;\n}\n\n.manual-check-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n\n.edit-comment-reason[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 8px;\n}\n\n.review-meta[_ngcontent-%COMP%]   .edit-reason[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n}\n\n.save-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .filter-item.filter-item--full[_ngcontent-%COMP%] {\n  width: 100% !important;\n  flex: 0 0 100% !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnJvbGUvYWRtaW4vZXhhbS1yZXBvcnRzL2V4YW0tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBZEY7O0FBa0JBO0VBQXdELGFBQUE7QUFkeEQ7O0FBaUJBO0VBQVEsNEJBQUE7QUFiUjs7QUFjQTtFQUFnQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsYUFBQTtBQVJ2RDs7QUFTQTtFQUFXLGFBQUE7RUFBZSxlQUFBO0VBQWlCLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixrREFBQTtBQUN4STs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsNkRBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFBMkUsd0JBQUE7QUFHM0U7O0FBRkE7RUFBK0UsZUFBQTtBQU0vRTs7QUFMQTtFQUFnRixpQkFBQTtFQUFtQixpQkFBQTtBQVVuRzs7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBOztFQUVFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWNGOztBQVpBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBZUY7O0FBYkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUFnQkY7O0FBZEE7RUFDRSxxQkFBQTtFQUNBLHlFQUFBO0FBaUJGOztBQWZBO0VBQWdGLGNBQUE7QUFtQmhGOztBQWxCQTtFQUNFLDZCQUFBO0VBQ0EsbUZBQUE7RUFDQSxtQkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0FBc0JGOztBQW5CRTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBc0JKO0FBbkJFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQXFCSjtBQW5CSTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBcUJOO0FBakJFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQW1CSjtBQWhCRTtFQUNFLHlCQUFBO0FBa0JKO0FBZkU7RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBaUJKOztBQWJBOztFQUVFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7QUFnQkY7O0FBZEE7RUFDRSx5QkFBQTtBQWlCRjs7QUFmQTtFQUE0RixhQUFBO0FBbUI1Rjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkRBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxvREFBQTtBQW1CRjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7QUFqQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0ZBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7QUFtQko7QUFqQkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFtQk47QUFmRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQWlCSjtBQWRFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQWdCSjtBQWRJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBZ0JOO0FBWkU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQWNKOztBQVRBO0VBQ0UsaUNBQUE7RUFDQSwwRkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUFhRjs7QUFYQTtFQUNFLCtGQUFBO0FBY0Y7O0FBWkE7RUFDRSw4RkFBQTtBQWVGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFpQkY7O0FBZkE7RUFBWSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsV0FBQTtBQXFCaEQ7O0FBcEJBO0VBQWMsYUFBQTtFQUFlLFdBQUE7RUFBYSxtQkFBQTtBQTBCMUM7O0FBekJBOztFQUVFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQTRCRjtBQTFCRTs7OztFQUVFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVEQUFBO0FBOEJKO0FBNUJJOzs7O0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFpQ047QUE5Qkk7Ozs7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FBbUNOO0FBL0JFOztFQUNFLHdCQUFBO0FBa0NKO0FBL0JFOztFQUNFLHFEQUFBO0FBa0NKO0FBaENJOzs7O0VBRUUseUJBQUE7RUFDQSx5QkFBQTtBQW9DTjtBQWxDTTs7Ozs7OztFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUEwQ1I7O0FBckNBO0VBQWMsc0NBQUE7RUFBd0Msc0NBQUE7RUFBd0MsZ0NBQUE7RUFBa0MsMkJBQUE7RUFBNkIsc0JBQUE7RUFBd0IscUtBQUE7QUE4Q3JMOztBQTdDQTtFQUFvQiw0Q0FBQTtFQUE4QyxzQ0FBQTtFQUF3Qyw0REFBQTtFQUFtQyxpQ0FBQTtBQW9EN0k7O0FBL0NBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkRBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUZBQUE7RUFDQSwwREFBQTtBQWtERjs7QUEvQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7QUFrREY7O0FBaERBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBbURGOztBQWpEQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFvREY7O0FBakRBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0FBb0RGOztBQWxEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBcURGOztBQWpEQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0pBQUE7RUFDQSw0Q0FBQTtBQW9ERjs7QUFsREE7RUFBbUUsd0JBQUE7QUFzRG5FOztBQXJEQTtFQUF1RSxjQUFBO0FBeUR2RTs7QUF4REE7RUFBd0UsbUJBQUE7RUFBcUIsaUJBQUE7QUE2RDdGOztBQTVEQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQStERjs7QUE3REE7O0VBRUUsc0JBQUE7RUFDQSxnQkFBQTtBQWdFRjs7QUE5REE7O0VBRUUsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpRUY7O0FBL0RBOztFQUMrRSxjQUFBO0FBbUUvRTs7QUFoRUE7RUFDRSxxQkFBQTtFQUNBLHFEQUFBO0FBbUVGOztBQWhFQTtFQUNFLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtBQW1FRjs7QUFqRUE7RUFBb0YsYUFBQTtBQXFFcEY7O0FBbkVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBc0VGOztBQWxFQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFxRUY7QUFuRUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFxRUo7QUFuRUk7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFxRU47QUFqRUU7O0VBRUUsd0JBQUE7QUFtRUo7O0FBL0RBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQWtFRjtBQWhFRTs7RUFFRSx3QkFBQTtBQWtFSjs7QUE5REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaUVGO0FBL0RFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpRUo7O0FBNURBO0VBQW9DLG1CQUFBO0FBZ0VwQzs7QUE5REE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtBQWlFRjs7QUEvREE7RUFDRSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUtBQUE7QUFrRUY7O0FBaEVBO0VBQ0UsNENBQUE7RUFDQSw0REFBQTtFQUNBLGlDQUFBO0FBbUVGOztBQWpFQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1IQUFBO0FBb0VGOztBQWxFQTtFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUFxRUY7O0FBbkVBOztFQUM2QixlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0VBQWMscUJBQUE7QUEwRXpFOztBQXhFQTtFQUFxQjtJQUFPLFVBQUE7SUFBWSw2QkFBQTtFQThFdEM7RUE5RXVFO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBa0Z4RjtBQUNGO0FBbEZBO0VBQXVCO0lBQU8sVUFBQTtJQUFZLGdDQUFBO0VBdUZ4QztFQXZGNEU7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUEyRjdGO0FBQ0Y7QUF6RkE7RUFBYSxnQkFBQTtFQUFrQiwrQkFBQTtFQUFpQyxzQkEvaEJ2RDtFQStoQitFLGlEQTdoQjVFO0VBNmhCb0csd0dBQUE7QUFnR2hIOztBQS9GQTtFQUFtQixnREEzaEJKO0VBMmhCK0Isc0NBQUE7QUFvRzlDOztBQW5HQTtFQUFnQixpQkFBQTtBQXVHaEI7O0FBdEdBO0VBQWEsV0FBQTtBQTBHYjs7QUF6R0E7RUFBd0IsV0FBQTtBQTZHeEI7O0FBMUdBO0VBQWlELHFFQUFBO0VBQXNFLG9EQUFBO0VBQXFELGlCQUFBO0FBZ0g1Szs7QUEvR0E7RUFBaUQsZ0JBQUE7RUFBaUIsYUFBQTtBQW9IbEU7O0FBbkhBO0VBQXNDLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGtDQUFBO0VBQW1DLGlHQUFBO0VBQW9ELHNCQUFBO0FBOEhuTzs7QUE3SEE7RUFBNEMsdUJBQUE7RUFBd0IsNEJBQUE7QUFrSXBFOztBQWpJQTtFQUE4Qyx1QkFBQTtFQUF3QixzQkFBQTtFQUF1QiwrQ0FBQTtBQXVJN0Y7O0FBdElBO0VBQW1FLHNCQUFBO0FBMEluRTs7QUF6SUE7RUFBa0QsZ0JBQUE7RUFBaUIsc0JBQUE7RUFBdUIsbURBQUE7QUErSTFGOztBQTlJQTtFQUF1RCx1QkFBQTtBQWtKdkQ7O0FBakpBO0VBQW9FLDZCQUFBO0VBQThCLHNCQUFBO0FBc0psRzs7QUFuSkE7RUFBNEQsdUJBQUE7RUFBd0Isb0RBQUE7RUFBcUQsa0JBQUE7QUF5SnpJOztBQXhKQTtFQUE0RCxrQkFBQTtFQUFtQixZQUFBO0FBNkovRTs7QUE1SkE7RUFBaUQsNEJBQUE7RUFBNkIsZ0JBQUE7RUFBaUIsb0JBQUE7RUFBcUIsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixnQ0FBQTtFQUFpQyxpR0FBQTtBQXNLeEw7O0FBcktBO0VBQXVELHVCQUFBO0VBQXdCLDRCQUFBO0FBMEsvRTs7QUF6S0E7RUFBeUQsdUJBQUE7RUFBd0Isc0JBQUE7QUE4S2pGOztBQTdLQTtFQUE4RSxzQkFBQTtBQWlMOUU7O0FBaExBO0VBQTZELGdCQUFBO0VBQWlCLHNCQUFBO0VBQXVCLG1EQUFBO0FBc0xyRzs7QUFyTEE7RUFBK0UsNkJBQUE7RUFBOEIsc0JBQUE7QUEwTDdHOztBQXZMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUEwTEY7O0FBdkxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLCtGQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLG1EQUFBO0VBQ0EsdURBQUE7QUEwTEY7QUF4TEU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQTBMSjtBQXhMSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUEwTE47QUF2TEk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUF5TE47QUF0TEk7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUF3TE47O0FBbkxBO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyREFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtBQXNMRjtBQXBMRTtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQXNMSjtBQW5MRTtFQUNFLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxtREFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBcUxKO0FBbExFO0VBQ0UsOENBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0FBb0xKO0FBbExJO0VBQ0UseUJBQUE7QUFvTE47O0FBL0tBO0VBQXVCLGFBQUE7RUFBYyxnREFBQTtFQUFpRCxZQUFBO0VBQWEsc0JBQUE7RUFBdUIscUVBQUE7RUFBc0UsOENBQUE7QUF3TGhNOztBQXZMQTtFQUEwQix5QkFBQTtFQUEwQix1QkFBQTtFQUF3QixtQkFBQTtBQTZMNUU7O0FBNUxBO0VBQWdCLGFBQUE7RUFBYyxtQkFBQTtFQUFvQixhQUFBO0VBQWMsWUFBQTtFQUFhLHdCQUFBO0VBQXlCLHVDQUFBO0VBQXdDLHNCQUFBO0VBQXVCLHFFQUFBO0VBQXNFLHVEQUFBO0VBQXdELDZKQUFBO0FBeU1uUzs7QUF4TUE7RUFBc0IsZ0NBQUE7RUFBaUMsNkJBQUE7RUFBOEIsbURBQUE7QUE4TXJGOztBQTdNQTtFQUFnQixjQUFBO0VBQWUsZUFBQTtFQUFnQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsdUJBQUE7RUFBd0IsY0FBQTtFQUFlLHVCQUFBO0VBQXdCLHFDQUFBO0VBQXNDLHNCQUFBO0VBQXVCLDREQUFBO0FBME43TTs7QUF6TkE7RUFBc0Isc0JBQUE7QUE2TnRCOztBQTVOQTtFQUF5QixtQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0FBa083RDs7QUFoT0E7RUFBMEIsbUNBQUE7RUFBaUMsY0FBQTtBQXFPM0Q7O0FBcE9BO0VBQXNCLG1DQUFBO0VBQWlDLGNBQUE7QUF5T3ZEOztBQXhPQTtFQUF1QixtQ0FBQTtFQUFpQyxjQUFBO0FBNk94RDs7QUE1T0E7RUFBc0IsbUNBQUE7RUFBaUMsY0FBQTtBQWlQdkQ7O0FBaFBBO0VBQTRCLG1DQUFBO0VBQWlDLGNBQUE7QUFxUDdEOztBQXBQQTtFQUEyQixtQ0FBQTtFQUFpQyxjQUFBO0FBeVA1RDs7QUF4UEE7RUFBMEIsbUNBQUE7RUFBaUMsY0FBQTtBQTZQM0Q7O0FBNVBBO0VBQTBCLGtDQUFBO0VBQWdDLGNBQUE7QUFpUTFEOztBQWhRQTtFQUFnQixhQUFBO0VBQWMsc0JBQUE7RUFBdUIsYUFBQTtFQUFjLFlBQUE7QUF1UW5FOztBQXRRQTtFQUFpQix5QkFBQTtFQUEwQixnQkFBQTtFQUFpQixzQkFBQTtFQUF1Qix5QkFBQTtFQUEwQiw0QkFBQTtBQThRN0c7O0FBN1FBO0VBQWlCLG1EQUFBO0VBQW9ELGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLHVCQUFBO0VBQXdCLDRCQUFBO0FBcVIvSDs7QUFwUkE7RUFBZ0IsMEJBQUE7RUFBMkIsZ0JBQUE7RUFBaUIsNEJBQUE7RUFBNkIsbUJBQUE7RUFBb0IsZ0JBQUE7RUFBaUIsdUJBQUE7QUE2UjlIOztBQXhSQTtFQUFlLGFBQUE7RUFBYyw4QkFBQTtFQUErQixtQkFBQTtFQUFvQixTQUFBO0VBQVUsMkJBQUE7RUFBNEIscUVBQUE7RUFBc0UsOENBQUE7RUFBK0MsU0FBQTtBQW1TM087O0FBaFNBO0VBQXVCLE9BQUE7RUFBUSxnQkFBQTtBQXFTL0I7O0FBcFNBO0VBQ0UsV0FBQTtBQXVTRjs7QUFyU0E7RUFBbUUscUVBQUE7RUFBc0UsdUNBQUE7RUFBd0Msc0JBQUE7RUFBdUIsa0JBQUE7RUFBbUIsaURBQUE7RUFBMkIsbURBQUE7QUE4U3RQOztBQTdTQTtFQUE0RCx3QkFBQTtBQWlUNUQ7O0FBaFRBO0VBQWdFLGdCQUFBO0FBb1RoRTs7QUFuVEE7RUFBaUUsbUJBQUE7RUFBcUIsaUJBQUE7QUF3VHRGOztBQXZUQTtFQUErRCxjQUFBO0VBQWUsb0JBQUE7RUFBcUIsNEJBQUE7QUE2VG5HOztBQTVUQTtFQUE2QyxvQkFBQTtFQUFxQixnQkFBQTtFQUFpQiw0QkFBQTtBQWtVbkY7O0FBalVBO0VBQTBELDRCQUFBO0FBcVUxRDs7QUFwVUE7RUFBMkQsNEJBQUE7RUFBNkIsb0JBQUE7RUFBcUIsbUJBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixpREFBQTtBQTZVbEs7O0FBNVVBO0VBQW1FLDZCQUFBO0VBQThCLHNEQUFBO0FBaVZqRzs7QUFoVkE7RUFBMkQsc0JBQUE7QUFvVjNEOztBQW5WQTs7RUFFRSw2QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUFzVkY7O0FBcFZBO0VBQ0Usc0JBQUE7QUF1VkY7O0FBclZBO0VBQTZFLGFBQUE7QUF5VjdFOztBQXRWQTtFQUF5QixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsV0FBQTtBQTRWM0Q7O0FBM1ZBO0VBQTJCLGFBQUE7RUFBYyxhQUFBO0VBQWMsbUJBQUE7QUFpV3ZEOztBQWhXQTtFQUFrQyxlQUFBO0VBQWdCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLHVCQUFBO0VBQXdCLHVCQUFBO0VBQXdCLG9CQUFBO0VBQXFCLG1CQUFBO0VBQW9CLHVCQUFBO0VBQXdCLGFBQUE7RUFBYyxpREFBQTtBQThXek87O0FBN1dBO0VBQTJDLGVBQUE7RUFBZ0IsV0FBQTtFQUFZLFlBQUE7QUFtWHZFOztBQWpYQTs7RUFFRSxxRUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtREFBQTtBQW9YRjs7QUFsWEE7O0VBRUUsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0RBQUE7QUFxWEY7O0FBbFhBO0VBQ0UsbUZBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtBQXFYRjs7QUFuWEE7RUFDRSxtRkFBQTtFQUNBLGlEQUFBO0FBc1hGOztBQWxYQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBcVhGO0FBblhFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBcVhKO0FBblhFO0VBQTZCLCtCQUFBO0VBQThCLHNCQUFBO0FBdVg3RDtBQXRYRTtFQUE2QixtQkFBQTtFQUFxQixzQkFBQTtFQUF3Qiw2QkFBQTtFQUErQiw0QkFBQTtBQTRYM0c7QUEzWEU7RUFBbUMsbUJBQUE7RUFBcUIsNkJBQUE7RUFBK0IsNEJBQUE7QUFnWXpGOztBQTdYQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxxRUFBQTtFQUNBLG9EQUFBO0FBZ1lGOztBQTlYQTtFQUFpQixXQUFBO0VBQWEsb0NBQUE7RUFBc0MsNEJBQUE7RUFBOEIscUJBQUE7QUFxWWxHOztBQXBZQTs7OztFQUd3QywyQkFBQTtFQUE2QixpQkFBQTtFQUFtQixzQkFBQTtFQUF3QixzREFBQTtFQUF3RCxnQkFBQTtFQUFrQixvQkFBQTtFQUFzQix5QkFBQTtFQUEyQixzQkFBQTtFQUF3QixtREFBQTtFQUFxRCx1QkFBQTtFQUF5QixxQ0FBQTtFQUF1QyxtQkFBQTtBQW1aeFg7O0FBbFpBOztFQUNvRCw0Q0FBQTtBQXNacEQ7O0FBclpBOztFQUNpQyx3QkFBQTtFQUEwQixvQkFBQTtFQUFzQixxQ0FBQTtFQUF1QyxzQ0FBQTtFQUF3QyxzQkFBQTtFQUF3QixzR0FBQTtBQThaeEw7O0FBN1pBOztFQUNtRCxvQ0FBQTtBQWlhbkQ7O0FBaGFBO0VBQWdCLHNCQUFBO0VBQXdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIsdUJBQUE7RUFBeUIsdUdBQUE7RUFBNkQscUJBQUE7QUEwYTVMOztBQXphQTtFQUFzQixhQUFBO0VBQWUsMEJBQUE7RUFBNEIsK0JBQUE7RUFBaUMsZ0NBQUE7QUFnYmxHOztBQTdhQTtFQUFnQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsYUFBQTtFQUFjLGVBQUE7QUFvYmhFOztBQW5iQTtFQUFrQixXQUFBO0VBQVksWUFBQTtFQUFhLHFCQUFBO0VBQXNCLGFBQUE7RUFBYyxtQkFBQTtFQUFvQix1QkFBQTtFQUF3QixnQkFBQTtFQUFpQixvQkFBQTtFQUFxQixXQUFBO0VBQVksY0FBQTtFQUFlLDZEQUFBO0FBaWM1TDs7QUFoY0E7RUFBaUIsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLGFBQUE7RUFBYyxlQUFBO0FBdWNqRTs7QUF0Y0E7RUFBbUIsV0FBQTtFQUFZLFlBQUE7RUFBYSxxQkFBQTtFQUFzQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsdUJBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsb0JBQUE7RUFBcUIsV0FBQTtFQUFZLGNBQUE7RUFBZSw2REFBQTtBQW9kN0w7O0FBamRBO0VBQWdCLGdCQUFBO0VBQWlCLG9CQUFBO0VBQXFCLDRCQUFBO0FBdWR0RDs7QUF0ZEE7RUFBYSw0QkFBQTtFQUE2QixrQkFBQTtBQTJkMUM7O0FBeGRBO0VBQWEsb0JBQUE7RUFBcUIsbUJBQUE7RUFBb0IseUJBQUE7RUFBMEIsdUJBQUE7RUFBd0Isa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsb0NBQUE7RUFBa0MsY0FBQTtBQW1lOUs7O0FBaGVBO0VBQWlCLG9CQUFBO0VBQXFCLGdCQUFBO0FBcWV0Qzs7QUFwZUE7RUFBZ0MseUJBQUE7RUFBMEIsZ0JBQUE7QUF5ZTFEOztBQXRlQTtFQUFlLG9CQUFBO0VBQXFCLG1CQUFBO0VBQW9CLDJCQUFBO0VBQTRCLG1CQUFBO0VBQW9CLG9CQUFBO0VBQXFCLGdCQUFBO0VBQWlCLHNCQUFBO0VBQXVCLHlCQUFBO0VBQTBCLCtCQUFBO0VBQTZCLDRCQUFBO0FBbWY1Tjs7QUFsZkE7RUFBMkIsMkJBQUE7RUFBNEIsd0JBQUE7RUFBeUIsNENBQUE7QUF3ZmhGOztBQXZmQTtFQUEyQix5QkFBQTtFQUEwQixzQkFBQTtFQUF1QiwwQ0FBQTtBQTZmNUU7O0FBMWZBO0VBQXFCLHFCQUFBO0VBQXNCLGFBQUE7RUFBYyxzQkFBQTtFQUF1QixZQUFBO0FBaWdCaEY7O0FBaGdCQTtFQUFpQyxpQkFBQTtFQUFtQixxQ0FBQTtFQUE2QywyQkFBQTtFQUE0QiwyQkFBQTtFQUE0Qix1QkFBQTtFQUF3QiwrRkE3ekJySztFQTZ6QjRMLDZDQUFBO0FBMGdCeE07O0FBdmdCQTtFQUFTLGFBQUE7RUFBYyxtQkFBQTtFQUFvQix1QkFBQTtFQUF3QixTQUFBO0VBQVUseUJBQUE7RUFBMEIsaURBQUE7RUFBa0Qsb0JBQUE7RUFBcUIsZ0JBQUE7RUFBaUIsc0JBQUE7RUFBdUIscUVBQUE7RUFBc0UsNEJBQUE7QUFxaEI1Ujs7QUFwaEJBO0VBQWMsd0JBQUE7RUFBeUIsdUJBQUE7RUFBd0IsdUJBQUE7RUFBd0IsNkNBQUE7QUEyaEJ2Rjs7QUExaEJBO0VBQWdCLGdDQUFBO0VBQWlDLDJCQUFBO0VBQTRCLGlDQUFBO0VBQWtDLG1LQUFBO0FBaWlCL0c7O0FBaGlCQTtFQUFzQyw0REFBQTtFQUFrQyxpQ0FBQTtFQUFrQyxrQ0FBQTtBQXNpQjFHOztBQXJpQkE7RUFBMEIsWUFBQTtBQXlpQjFCOztBQXZpQkE7RUFDRTtJQUFLLDRCQUFBO0VBMmlCTDtFQTFpQkE7SUFBTywyQkFBQTtFQTZpQlA7QUFDRjtBQTNpQkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2R0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUE2aUJGOztBQXppQkE7RUFBc0IscUJBQUE7RUFBdUIsa0JBQUE7RUFBb0Isc0JBQUE7RUFBd0IsZUFBQTtFQUFpQiwwQkFBQTtFQUE0QiwrQkFBQTtFQUFpQyxnQkFBQTtFQUFrQix1R0FBQTtFQUE2RCxxQkFBQTtBQXFqQnRQOztBQXBqQkE7RUFBNEIsWUFBQTtFQUFjLCtCQUFBO0FBeWpCMUM7O0FBeGpCQTtFQUFpQixzQkFBQTtFQUF3QiwwQkFBQTtFQUE0QiwrQkFBQTtFQUFpQyxlQUFBO0VBQWlCLGdCQUFBO0VBQWtCLDhGQUFBO0FBaWtCekk7O0FBaGtCQTtFQUF1QixhQUFBO0FBb2tCdkI7O0FBbmtCQTtFQUFrQixzQkFBQTtFQUF3QixnQkFBQTtFQUFrQixxQkFBQTtFQUF1Qix1R0FBQTtFQUE2RCxxQkFBQTtBQTJrQmhKOztBQTFrQkE7RUFBd0IsZ0NBQUE7QUE4a0J4Qjs7QUE3a0JBO0VBQVMsNEJBQUE7RUFBOEIsa0JBQUE7QUFrbEJ2Qzs7QUEva0JBO0VBQW9CO0lBQU8sVUFBQTtFQW9sQnpCO0VBcGxCc0M7SUFBSyxVQUFBO0VBdWxCM0M7QUFDRjtBQXZsQkE7RUFBcUI7SUFBTyxVQUFBO0lBQVksMENBQUE7RUE0bEJ0QztFQTVsQm1GO0lBQUssVUFBQTtJQUFZLGlDQUFBO0VBZ21CcEc7QUFDRjtBQWhtQkE7RUFBeUI7SUFBVyxzREFBQTtFQW9tQmxDO0VBcG1CNEY7SUFBTSxvREFBQTtFQXVtQmxHO0FBQ0Y7QUF0bUJBO0VBQTBCLGVBQUE7RUFBaUIsUUFBQTtFQUFVLHNHQUFBO0VBQStKLDZDQUFBO0VBQStDLGNBQUE7RUFBZ0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGVBQUE7RUFBaUIsb0RBQUE7QUFtbkJqVzs7QUFqbkJBOztFQUNrQixrQkFBQTtFQUFvQix1QkFBQTtFQUF5QixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGFBQUE7RUFBZSxzQkFBQTtFQUF3QiwwREFBQTtFQUF1QyxZQUFBO0FBNG5CL0s7O0FBM25CQTs7RUFDd0IsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLGdCQUFBO0VBQWtCLHFFQUFBO0VBQXVFLDZDQUFBO0VBQStDLHNCQUFBO0VBQXdCLHlGQUFBO0VBQTJGLGdCQUFBO0FBc29CMVQ7O0FBbm9CQTtFQUFnQixrQkFBQTtFQUFtQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsOEJBQUE7RUFBK0IsU0FBQTtFQUFVLHVCQUFBO0VBQXdCLG9EQUFBO0VBQXFELHFFQUFBO0VBQXNFLGNBQUE7QUErb0JqUTs7QUE5b0JBO0VBQXdCLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixPQUFBO0VBQVEsTUFBQTtFQUFPLFNBQUE7RUFBVSxnQkFBQTtFQUFpQixpRUFBQTtFQUFrRSxzQ0FBQTtBQXlwQm5LOztBQXhwQkE7RUFBNkIsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLGFBQUE7RUFBYyxZQUFBO0VBQWEsT0FBQTtBQWdxQjFGOztBQS9wQkE7RUFBNkIsYUFBQTtFQUFjLHNCQUFBO0VBQXVCLGNBQUE7RUFBZSxZQUFBO0FBc3FCakY7O0FBcnFCQTtFQUE2QixXQUFBO0VBQVksWUFBQTtFQUFhLGFBQUE7RUFBYyxtQkFBQTtFQUFvQix1QkFBQTtFQUF3QixjQUFBO0VBQWUsdUJBQUE7RUFBd0IsbUZBQUE7RUFBb0Ysc0JBQUE7RUFBdUIsbUdBQUE7QUFrckJsUTs7QUFqckJBO0VBQXNDLG1CQUFBO0VBQW9CLGVBQUE7RUFBZ0IsZ0JBQUE7QUF1ckIxRTs7QUF0ckJBO0VBQW1CLFNBQUE7RUFBVSxvQkFBQTtFQUFxQixnQkFBQTtFQUFpQix1QkFBQTtFQUF3Qiw0QkFBQTtBQThyQjNGOztBQTdyQkE7RUFBMkIsb0JBQUE7RUFBcUIsNEJBQUE7RUFBNkIsYUFBQTtFQUFjLGdCQUFBO0FBb3NCM0Y7O0FBbnNCQTs7RUFFRSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQ0FBQTtFQUNBLHdEQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0RBQUE7RUFDQSw0REFBQTtFQUNBLDBCQUFBO0FBc3NCRjs7QUFuc0JBOztFQUVFLHdCQUFBO0FBc3NCRjs7QUFuc0JBOztFQUVFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx3QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSx1Q0FBQTtFQUNBLDRHQUFBO0FBc3NCRjs7QUFuc0JBOztFQUVFLDhDQUFBO0VBQ0EsK0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdFQUFBO0VBQ0EsaUNBQUE7QUFzc0JGOztBQW5zQkE7O0VBRUUseUJBQUE7RUFDQSxtQ0FBQTtBQXNzQkY7O0FBanNCQTtFQUFtQywwQkFBQTtFQUEyQixjQUFBO0VBQWUscUVBQUE7QUF1c0I3RTs7QUF0c0JBO0VBQXVDLGdCQUFBO0VBQWlCLHVCQUFBO0VBQXdCLG9CQUFBO0VBQXFCLHVCQUFBO0VBQXdCLDRCQUFBO0VBQTZCLHNCQUFBO0VBQXVCLDZDQUFBO0VBQThDLHVCQUFBO0VBQXdCLHVCQUFBO0FBa3RCdlA7O0FBanRCQTtFQUFvQyxvQkFBQTtFQUFxQixlQUFBO0VBQWdCLDRCQUFBO0FBdXRCekU7O0FBcHRCQTtFQUFzQyxXQUFBO0VBQVkseUJBQUE7RUFBMEIsd0JBQUE7RUFBeUIsY0FBQTtBQTJ0QnJHOztBQTF0QkE7RUFBK0Msa0JBQUE7RUFBbUIscUJBQUE7RUFBc0IsZ0JBQUE7RUFBaUIsa0JBQUE7RUFBbUIseUJBQUE7RUFBMEIsc0JBQUE7RUFBdUIsNEJBQUE7RUFBNkIsa0NBQUE7QUFxdUIxTTs7QUFwdUJBO0VBQTJELG9DQUFBO0FBd3VCM0Q7O0FBdnVCQTtFQUEwRCxvQ0FBQTtBQTJ1QjFEOztBQTF1QkE7RUFBK0MsdUJBQUE7QUE4dUIvQzs7QUE3dUJBO0VBQStDLHNCQUFBO0VBQXVCLHNCQUFBO0VBQXVCLGtCQUFBO0VBQW1CLHVCQUFBO0VBQXdCLDZDQUFBO0FBcXZCeEk7O0FBcHZCQTtFQUEyRCxvQ0FBQTtFQUFxQyxnQkFBQTtFQUFpQixnQkFBQTtFQUFpQiw0QkFBQTtBQTJ2QmxJOztBQTF2QkE7RUFBMEQsb0NBQUE7QUE4dkIxRDs7QUE3dkJBO0VBQWtDLHNCQUFBO0VBQXVCLGdCQUFBO0VBQWlCLHNEQUFBO0FBbXdCMUU7O0FBbHdCQTtFQUE4QyxhQUFBO0VBQWMsMEJBQUE7RUFBMkIsK0JBQUE7QUF3d0J2Rjs7QUFyd0JBOztFQUNtQixhQUFBO0VBQWMseUJBQUE7RUFBMEIsV0FBQTtFQUFZLDBCQUFBO0VBQTJCLGlEQUFBO0VBQWtELHFFQUFBO0FBOHdCcEo7O0FBN3dCQTtFQUEwQixrQ0FBQTtFQUFtQywyQkFBQTtFQUE0QixpS0FBQTtBQW14QnpGOztBQWx4QkE7RUFBZ0MsaUNBQUE7RUFBa0MsaUVBQUE7QUF1eEJsRTs7QUFweEJBO0VBQW1FLGFBQUE7RUFBYyxzQkFBQTtFQUF1QixZQUFBO0FBMHhCeEc7O0FBenhCQTtFQUFpQixnQkFBQTtFQUFpQixVQUFBO0VBQVcsU0FBQTtFQUFVLGFBQUE7RUFBYyxzQkFBQTtFQUF1QixZQUFBO0FBa3lCNUY7O0FBanlCQTtFQUFvQixzQkFBQTtFQUF1QixxRUFBQTtFQUFzRSx1QkFBQTtFQUF3QixhQUFBO0VBQWMsOEJBQUE7RUFBK0IsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLDZDQUFBO0VBQThDLDZKQUFBO0FBNnlCclE7O0FBNXlCQTtFQUEwQixpREFBQTtFQUFrRCxnQ0FBQTtFQUFpQyw2QkFBQTtBQWt6QjdHOztBQWp6QkE7RUFBYSxnQkFBQTtFQUFpQiw0QkFBQTtFQUE2Qix1QkFBQTtBQXV6QjNEOztBQXR6QkE7RUFBWSxvQkFBQTtFQUFxQiw0QkFBQTtBQTJ6QmpDOztBQTF6QkE7RUFBaUIsMkJBQUE7RUFBNkIsMkJBQUE7RUFBNkIseUJBQUE7RUFBMkIsdUJBQUE7RUFBeUIscUJBQUE7RUFBdUIsb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0IscUdBQUE7QUFxMEI5TDs7QUFwMEJBO0VBQXVCLFlBQUE7RUFBYywrRkFoOUJ6QjtBQXl4RFo7O0FBdDBCQTs7O0VBRWlDLGNBQUE7QUEwMEJqQzs7QUF6MEJBOzs7RUFFb0QsZ0JBQUE7RUFBa0IsZUFBQTtBQTgwQnRFOztBQTcwQkE7OztFQUUwRCx1QkFBQTtBQWkxQjFEOztBQWgxQkE7OztFQUUwRCxpQ0FBQTtFQUFtQyx3QkFBQTtBQXExQjdGOztBQXAxQkE7OztFQUVnRSxpQ0FBQTtBQXcxQmhFOztBQXIxQkE7RUFBcUIsdUJBQUE7RUFBeUIsZ0JBQUE7RUFBa0IsWUFBQTtBQTIxQmhFOztBQTExQkE7RUFBMkIsYUFBQTtFQUFjLHNCQUFBO0VBQXVCLGdCQUFBO0VBQWlCLHNCQUFBO0VBQXVCLHFFQUFBO0VBQXNFLHlGQUFBO0VBQTBGLDZDQUFBO0VBQThDLGdCQUFBO0FBcTJCdFQ7O0FBcDJCQTtFQUFtQyxrQkFBQTtFQUFtQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsOEJBQUE7RUFBK0IsU0FBQTtFQUFVLHVCQUFBO0VBQXdCLG9EQUFBO0VBQXFELHFFQUFBO0VBQXNFLGNBQUE7QUFnM0JwUjs7QUEvMkJBO0VBQTJDLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixPQUFBO0VBQVEsTUFBQTtFQUFPLFNBQUE7RUFBVSxnQkFBQTtFQUFpQixpRUFBQTtFQUFrRSxzQ0FBQTtBQTAzQnRMOztBQXozQkE7RUFBZ0QsYUFBQTtFQUFjLHNCQUFBO0VBQXVCLFdBQUE7RUFBWSxPQUFBO0VBQVEsWUFBQTtBQWk0QnpHOztBQWg0QkE7RUFBZ0QsV0FBQTtFQUFZLFlBQUE7RUFBYSxhQUFBO0VBQWMsbUJBQUE7RUFBb0IsdUJBQUE7RUFBd0IsdUJBQUE7RUFBd0IsbUZBQUE7RUFBb0Ysc0JBQUE7RUFBdUIsbUdBQUE7RUFBb0csY0FBQTtBQTY0QjFXOztBQTU0QkE7RUFBeUQsbUJBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtBQWs1QjdGOztBQWo1QkE7RUFBc0MsU0FBQTtFQUFVLG1CQUFBO0VBQW9CLGdCQUFBO0VBQWlCLHVCQUFBO0VBQXdCLDRCQUFBO0VBQTZCLGFBQUE7RUFBYyxtQkFBQTtFQUFvQixXQUFBO0FBNDVCNUs7O0FBMzVCQTtFQUFzQyxTQUFBO0VBQVUsb0JBQUE7RUFBcUIsZ0JBQUE7RUFBaUIsNEJBQUE7RUFBNkIsb0JBQUE7RUFBcUIsbUJBQUE7RUFBb0IsV0FBQTtFQUFZLGVBQUE7QUFzNkJ4Szs7QUFyNkJBO0VBQTBDLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLHlCQUFBO0VBQTBCLHFCQUFBO0VBQXNCLHVCQUFBO0VBQXdCLDZDQUFBO0VBQThDLG9CQUFBO0VBQXFCLHNCQUFBO0FBZzdCbk87O0FBLzZCQTtFQUEyQyxnQkFBQTtFQUFpQix3QkFBQTtFQUF5QixzQkFBQTtFQUF1QixrQkFBQTtFQUFtQixzQkFBQTtFQUF1Qix5QkFBQTtFQUEwQixvREFBQTtBQXk3QmhMOztBQXg3QkE7RUFBZ0QsMkJBQUE7RUFBNkIsMkJBQUE7QUE2N0I3RTs7QUE1N0JBO0VBQWdELFdBQUE7RUFBYSxpQ0FBQTtBQWk4QjdEOztBQWg4QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtFQUNBLCtMQUFBO0VBQ0EsaUJBQUE7QUFtOEJGOztBQWo4QkE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FBbzhCRjs7QUFsOEJBO0VBQ0UscUNBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0EseURBQUE7QUFxOEJGOztBQW44QkE7RUFDRSx1Q0FBQTtFQUNBLHdCQUFBO0FBczhCRjs7QUFwOEJBO0VBQWdDLDRCQUFBO0VBQThCLG1CQUFBO0FBeThCOUQ7O0FBeDhCQTtFQUFpQyxPQUFBO0VBQVEsY0FBQTtFQUFlLDhCQUFBO0VBQWdDLGVBQUE7QUErOEJ4Rjs7QUE1OEJBO0VBQWtCLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixhQUFBO0VBQWUsa0JBQUE7RUFBb0Isa0RBQUE7RUFBaUQsdUJBQUE7QUFxOUI3STs7QUFwOUJBO0VBQXFCLFNBQUE7RUFBVyxlQUFBO0VBQWlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixZQUFBO0VBQWMsZ0JBQUE7RUFBa0IsdUJBQUE7QUE4OUJySDs7QUE3OUJBO0VBQStCLG1CQUFBO0VBQXFCLGNBQUE7RUFBZ0IseUJBQUE7RUFBMkIsc0JBemhDdEY7RUF5aEM4RyxnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixpQkFBQTtFQUFtQixzQkFBQTtBQXcrQmpMOztBQXYrQkE7RUFBZ0IsYUFBQTtFQUFlLFlBQUE7RUFBYywwQkFBQTtFQUF5QixvQkFBQTtBQTgrQnRFOztBQTMrQkE7RUFBa0IsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLFNBQUE7RUFBVyxrQkFBQTtBQWsvQnBFOztBQWovQkE7RUFBd0Isa0JBQUE7RUFBbUIsNkNBQUE7RUFBK0MsdUJBQUE7RUFBeUIsdUJBQUE7RUFBeUIsdUJBQUE7RUFBeUIsNkpBQUE7RUFBNEYsc0RBQUE7RUFBcUQsZ0JBQUE7QUE0L0J0VDs7QUEzL0JBO0VBQWdDLFdBQUE7RUFBWSxrQkFBQTtFQUFtQixPQUFBO0VBQVEsTUFBQTtFQUFPLFNBQUE7RUFBVSxnQkFBQTtFQUFpQixxRkFBQTtBQXFnQ3pHOztBQXBnQ0E7RUFBOEIsb0RBQUE7RUFBbUQsZ0NBQUE7RUFBa0Msc0NBQUE7QUEwZ0NuSDs7QUF6Z0NBO0VBQWdDLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLDRCQUFBO0FBK2dDckU7O0FBOWdDQTtFQUFvQyxZQUFBO0VBQWMsbUJBQUE7RUFBcUIsc0JBQUE7RUFBd0Isd0JBQUE7RUFBMEIscUJBQUE7RUFBdUIsZ0JBQUE7RUFBa0Isa0JBQUE7QUF3aENsSzs7QUF0aENBO0VBQWMsYUFBQTtFQUFlLDhCQUFBO0VBQWdDLHVCQUFBO0VBQXlCLFNBQUE7RUFBVyxtQkFBQTtFQUFxQixvQkFBQTtFQUFzQixxREFBQTtBQWdpQzVJOztBQS9oQ0E7RUFBVSxhQUFBO0VBQWUsYUFBQTtFQUFlLHVCQUFBO0VBQXlCLE9BQUE7RUFBUyxZQUFBO0FBdWlDMUU7O0FBdGlDQTtFQUFVLGFBQUE7RUFBZSxXQUFBO0VBQWEsT0FBQTtFQUFTLFlBQUE7QUE2aUMvQzs7QUE1aUNBO0VBQVUsYUFBQTtFQUFlLFdBQUE7RUFBYSxtQkFBQTtFQUFxQixlQUFBO0FBbWpDM0Q7O0FBbGpDQTtFQUFXLGNBQUE7RUFBZ0IsZUFBQTtFQUFpQiwrRkFBQTtFQUEyRixnREFBQTtFQUErQyx1QkFBQTtFQUF5QixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIsc0JBQUE7RUFBd0IsY0FBQTtBQWlrQzNVOztBQWhrQ0E7RUFBVyxhQUFBO0VBQWUsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHNCQUFBO0VBQXdCLGNBQUE7QUF3a0N0Rjs7QUF2a0NBO0VBQVcscUNBQUE7RUFBdUMsNkNBQUE7RUFBK0Msc0JBQUE7RUFBd0IscUJBQUE7RUFBdUIseUJBQUE7RUFBMkIsb0JBQUE7RUFBc0IsaUJBQUE7RUFBbUIsdUJBQUE7RUFBQSxrQkFBQTtFQUFvQixnQkFBQTtFQUFrQixzQkFBQTtFQUF3Qix5QkFBQTtBQXFsQ2xSOztBQXBsQ0E7RUFBVSw0QkFBQTtFQUE4QixvQkFBQTtFQUFzQixvQkFBQTtFQUFzQixtQkFBQTtFQUFxQixhQUFBO0VBQWUsZ0JBQUE7QUE2bEN4SDs7QUE1bENBO0VBQW1CLG9CQUFBO0VBQXNCLGdCQUFBO0VBQWtCLGlCQUFBO0VBQW1CLHNCQUFBO0FBbW1DOUU7O0FBbG1DQTtFQUF1Qix5QkFBQTtFQUF3QixtQkFBQTtBQXVtQy9DOztBQXBtQ0E7RUFBYSxhQUFBO0VBQWUsZUFBQTtFQUFpQixhQUFBO0FBMG1DN0M7O0FBem1DQTtFQUFxQixhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsWUFBQTtBQSttQ3BFOztBQTltQ0E7RUFBWSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsWUFBQTtFQUFjLHlCQUFBO0VBQTJCLHFCQUFBO0VBQXVCLDBDQUFBO0VBQXlDLG1CQUFBO0VBQXFCLDRNQUFBO0FBeW5DOUs7O0FBeG5DQTtFQUFrQixpREFqakNOO0VBaWpDOEIsZ0NBQUE7RUFBa0Msc0NBQUE7QUE4bkM1RTs7QUE3bkNBO0VBQVksYUFBQTtFQUFlLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixjQUFBO0FBcW9DeEY7O0FBcG9DQTtFQUFzQixXQUFBO0VBQWEsWUFBQTtFQUFjLGtCQUFBO0VBQW9CLCtCQUFBO0VBQThCLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGdCQUFBO0VBQWtCLG9CQUFBO0VBQXNCLHlEQUFBO0FBaXBDL007O0FBaHBDQTtFQUFZLE9BQUE7RUFBUyxzQkFBQTtFQUF3QixrQkFBQTtFQUFvQixpQkFBQTtBQXVwQ2pFOztBQXRwQ0E7RUFBYSxpQkFBQTtFQUFtQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsYUFBQTtFQUFlLGNBQUE7QUE4cENuRjs7QUE3cENBO0VBQVMseUJBQUE7RUFBMkIsbUJBQUE7RUFBcUIsb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0IsbUJBQUE7RUFBcUIsc0JBQUE7QUFzcUN0SDs7QUFycUNBO0VBQXFCLHlCQUFBO0VBQTJCLHNCQUFBO0VBQXdCLDBDQUFBO0FBMnFDeEU7O0FBMXFDQTtFQUFpQixtQkFBQTtFQUFxQix3QkFBQTtFQUEwQiw0Q0FBQTtBQWdyQ2hFOztBQS9xQ0E7RUFBZ0IsMEJBQUE7RUFBNEIsd0JBQUE7RUFBMEIsMkNBQUE7QUFxckN0RTs7QUFwckNBO0VBQXFCLHlCQUFBO0VBQTJCLHNCQUFBO0VBQXdCLGdDQUFBO0FBMHJDeEU7O0FBenJDQTtFQUErQixrQ0FBQTtBQTZyQy9COztBQTVyQ0E7RUFBb0IsMkJBQUE7RUFBNkIsd0JBQUE7RUFBMEIsa0NBQUE7QUFrc0MzRTs7QUFqc0NBO0VBQThCLGtDQUFBO0FBcXNDOUI7O0FBcHNDQTtFQUFtQiwwQkFBQTtFQUE0Qix3QkFBQTtFQUEwQixpQ0FBQTtBQTBzQ3pFOztBQXpzQ0E7RUFBNkIsbUNBQUE7QUE2c0M3Qjs7QUEzc0NBO0VBQXdCLGtCQUFBO0VBQW9CLG1CQUFBO0FBZ3RDNUM7O0FBL3NDQTtFQUFjLG9CQUFBO0VBQXNCLG9DQUFBO0VBQW1DLHlCQUFBO0VBQTJCLHFCQUFBO0VBQXVCLDBCQUFBO0VBQXlCLGdEQUFBO0VBQWtELGdCQUFBO0FBeXRDcE07O0FBeHRDQTtFQUFzQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQix1QkFBQTtFQUF5QixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFBZ0MsU0FBQTtBQWt1QzNKOztBQWp1Q0E7RUFBNkIsY0FBQTtFQUFnQixtQkFBQTtFQUFxQiwrQkFBQTtBQXV1Q2xFOztBQXR1Q0E7RUFBOEIsY0FBQTtFQUFnQixtQkFBQTtFQUFxQiwrQkFBQTtBQTR1Q25FOztBQTN1Q0E7RUFBd0Isb0NBQUE7RUFBc0MsdUJBQUE7RUFBeUIsc0JBQUE7RUFBd0IsY0FBQTtFQUFnQixnQkFBQTtFQUFrQixlQUFBO0VBQWlCLG1CQUFBO0FBcXZDbEs7O0FBcHZDQTtFQUFpQyxZQUFBO0VBQWMsWUFBQTtBQXl2Qy9DOztBQXh2Q0E7RUFBZ0Isd0JBQUE7RUFBMEIsMEJBQUE7RUFBeUIsa0JBQUE7QUE4dkNuRTs7QUEzdkNBOzs7RUFHRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUE4dkNGOztBQTV2Q0E7RUFBeUIsbUJBQUE7RUFBcUIsY0FBQTtBQWl3QzlDOztBQWh3Q0E7RUFBeUIsbUJBQUE7RUFBcUIsY0FBQTtBQXF3QzlDOztBQXB3Q0E7RUFBb0IsbUJBQUE7RUFBcUIsY0FBQTtBQXl3Q3pDOztBQXR3Q0E7RUFBb0IsYUFBQTtFQUFlLFlBQUE7RUFBYyxtQkFBQTtFQUFxQixlQUFBO0FBNndDdEU7O0FBNXdDQTtFQUF1QiwwQkFBQTtFQUE0QixxQkFBQTtFQUF1QixtQkFBQTtFQUFxQiwrQ0FBQTtFQUE4Qyx5REFBQTtBQW94QzdJOztBQW54Q0E7RUFBNkIsK0ZBcG1DakI7QUEyM0VaOztBQXR4Q0E7RUFBZ0MsbUJBQUE7RUFBcUIscUNBQUE7QUEyeENyRDs7QUExeENBO0VBQStCLDJCQUFBO0VBQTZCLGtDQUFBO0FBK3hDNUQ7O0FBOXhDQTtFQUF3QiwwQkFBQTtFQUE0QixxQkFBQTtFQUF1Qix5QkFBQTtFQUF3QixvQkFBQTtFQUFzQixpQ0FBQTtFQUFtQyw0Q0FBQTtBQXV5QzVKOztBQXB5Q0E7RUFBaUIsYUFBQTtFQUFlLGFBQUE7QUF5eUNoQzs7QUF4eUNBO0VBQXVCLGFBQUE7RUFBZSxvREFBQTtFQUFzRCxhQUFBO0FBOHlDNUY7O0FBN3lDQTtFQUE4QixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsOEJBQUE7RUFBZ0MsWUFBQTtFQUFjLHVCQUFBO0VBQXlCLGdCQUFBO0VBQWtCLGdDQUFBO0VBQWtDLHVCQUFBO0VBQXlCLDJDQUFBO0FBeXpDdE47O0FBeHpDQTtFQUE2QyxjQUFBO0FBNHpDN0M7O0FBM3pDQTtFQUE4QyxvQkFBQTtFQUFzQix5QkFBQTtFQUEyQixzQkFBQTtFQUF3QixjQUFBO0VBQWdCLHFDQUFBO0VBQW9DLHFCQUFBO0VBQXVCLHdCQUFBO0VBQTBCLHFCQUFBO0VBQXVCLGdCQUFBO0VBQWtCLHVCQUFBO0FBdzBDclE7O0FBdjBDQTtFQUE4QyxnQkFBQTtFQUFrQiwwQkFBQTtBQTQwQ2hFOztBQTMwQ0E7RUFBMEMsY0FBQTtFQUFnQixpQkFBQTtFQUFtQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsbUJBQUE7QUFtMUNwSDs7QUFsMUNBO0VBQTJDLG9CQUFBO0VBQXNCLDBCQUFBO0FBdTFDakU7O0FBdDFDQTtFQUEyQyxtQkFBQTtFQUFxQixnQkFBQTtFQUFrQixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLHVCQUFBO0VBQXlCLHVCQUFBO0VBQXlCLDJDQUFBO0VBQTBDLG9CQUFBO0FBaTJDaE47O0FBaDJDQTtFQUE2QixnQkFBQTtFQUFrQixnQ0FBQTtFQUFrQyx1QkFBQTtFQUF5QiwyQ0FBQTtFQUE2QyxnREFBQTtBQXcyQ3ZKOztBQXYyQ0E7RUFBK0IsZ0JBQUE7RUFBa0IsaUNBQUE7RUFBbUMsdUJBQUE7RUFBeUIsNENBQUE7RUFBOEMsaURBQUE7QUErMkMzSjs7QUE5MkNBOztFQUM4QyxnQkFBQTtFQUFrQix5QkFBQTtFQUF3Qix1QkFBQTtFQUF5QixrQkFBQTtFQUFvQix5QkFBQTtFQUEyQixzQkFBQTtBQXUzQ2hLOztBQXQzQ0E7O0VBQzRDLDBCQUFBO0VBQXlCLGlCQUFBO0FBMjNDckU7O0FBMTNDQTtFQUE2QixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLDJDQUFBO0VBQTBDLGlCQUFBO0VBQW1CLHFCQUFBO0VBQXVCLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtFQUFxQix1QkFBQTtBQXM0Qy9NOztBQXI0Q0E7RUFBOEIsZ0JBQUE7RUFBa0IseUJBQUE7RUFBd0IsdUJBQUE7QUEyNEN4RTs7QUExNENBO0VBQThCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsY0FBQTtBQWc1Q2pFOztBQS80Q0E7RUFBNkIsZ0JBQUE7RUFBa0IsZ0NBQUE7RUFBa0MsdUJBQUE7RUFBeUIsMkNBQUE7RUFBNkMsZ0RBQUE7RUFBa0QsZ0JBQUE7QUF3NUN6TTs7QUFyNUNBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtEQUFBO0FBdzVDRjs7QUFyNUNBO0VBQ0UsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsYUFBQTtBQXc1Q0Y7QUF0NUNFO0VBTEY7SUFNSSwwQkFBQTtFQXk1Q0Y7QUFDRjtBQXY1Q0U7RUFDRSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsNEdBQUE7QUF5NUNKO0FBdjVDSTtFQUNFLG1EQUFBO0VBQ0EsZ0NBQUE7QUF5NUNOO0FBdDVDSTtFQUNFLDRFQUFBO0VBQ0EsMENBQUE7RUFDQSwyQ0FBQTtBQXc1Q047QUFyNUNJO0VBQ0UsK0VBQUE7RUFDQSw2Q0FBQTtFQUNBLDhDQUFBO0FBdTVDTjtBQXA1Q0k7RUFDRSwrRUFBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7QUFzNUNOO0FBbjVDSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0RBQUE7QUFxNUNOO0FBbjVDTTtFQUNFLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSwrQ0FBQTtBQXE1Q1I7QUFuNUNRO0VBQVEsMkJBQUE7QUFzNUNoQjtBQXI1Q1E7RUFBVyw4QkFBQTtBQXc1Q25CO0FBdjVDUTtFQUFXLDhCQUFBO0FBMDVDbkI7QUF2NUNNO0VBQ0UsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUNBQUE7QUF5NUNSOztBQW41Q0E7RUFDRSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXM1Q0Y7O0FBbjVDQTtFQUNFLGdDQUFBO0VBQ0EsOENBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtREFBQTtFQUNBLGlEQUFBO0FBczVDRjtBQXA1Q0U7RUFDRSxnQkFBQTtBQXM1Q0o7QUFuNUNFO0VBQ0Usb0NBQUE7RUFDQSxvREFBQTtBQXE1Q0o7QUFsNUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQW81Q0o7O0FBaDVDQTs7O0VBR0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFtNUNGO0FBajVDRTs7O0VBQ0UsWUFBQTtBQXE1Q0o7QUFwNUNJOzs7RUFDRSw2QkFBQTtFQUNBLGNBQUE7QUF3NUNOOztBQW41Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQXM1Q0Y7O0FBbjVDQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBczVDRjtBQXA1Q0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFzNUNKO0FBcDVDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQXM1Q0o7QUFwNUNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBczVDSjs7QUFsNUNBO0VBQ0Usb0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQXE1Q0Y7QUFuNUNFO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0FBcTVDSjs7QUFqNUNBO0VBQ0UscUJBQUE7QUFvNUNGOztBQWo1Q0E7RUFDRSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7QUFvNUNGO0FBbDVDRTtFQUNFLHNCQUFBO0FBbzVDSjtBQWo1Q0U7RUFDRSxZQUFBO0FBbTVDSjs7QUEvNENBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQWs1Q0Y7QUFoNUNFO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUFrNUNKO0FBLzRDRTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWk1Q0o7O0FBNzRDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBZzVDRjtBQTk0Q0U7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0FBZzVDSjtBQTk0Q0k7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBZzVDTjtBQTc0Q0k7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0EsY0FBQTtBQSs0Q047QUE1NENJO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBODRDTjtBQTM0Q0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUE2NENOO0FBMTRDSTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBNDRDTjtBQXo0Q0k7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUEyNENOO0FBdjRDRTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0FBeTRDSjtBQXQ0Q0U7Ozs7RUFJRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBdzRDSjtBQXI0Q0U7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7QUF1NENKO0FBdDRDSTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBdzRDTjtBQXA0Q0U7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7QUFzNENKO0FBcjRDSTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBdTRDTjtBQW40Q0U7RUFDRSxjQUFBO0VBQ0EsbUNBQUE7QUFxNENKO0FBcDRDSTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBczRDTjtBQWw0Q0U7RUFDRSxjQUFBO0VBQ0EscUNBQUE7QUFvNENKO0FBbjRDSTtFQUNFLHFDQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBcTRDTjs7QUEvM0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBazRDRjs7QUEvM0NBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVEQUFBO0FBazRDRjs7QUEvM0NBOzs7RUFHRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSx3QkFBQTtBQWs0Q0Y7O0FBLzNDQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQWs0Q0Y7O0FBLzNDQTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsYUFBQTtFQUNBLDRJQUFBO0FBazRDRjtBQWg0Q0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFrNENKO0FBLzNDRTtFQUNFLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBaTRDSjtBQTkzQ0U7RUFDRSx1Q0FBQTtFQUNBLHlCQUFBO0FBZzRDSjs7QUE1M0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHNEQUFBO0FBKzNDRjs7QUE1M0NBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHdHQUFBO0FBKzNDRjtBQTczQ0U7RUFDRSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxrREFBQTtBQSszQ0o7QUE1M0NFO0VBRUUsd0JBQUE7RUFDQSxTQUFBO0FBNjNDSjs7QUF6M0NBO0VBQ0Usb0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FBNDNDRjs7QUF6M0NBOztFQUVFLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLGlCQUFBO0FBNDNDRjs7QUF6M0NBO0VBQ0UsbUNBQUE7RUFDQSxzQ0FBQTtFQUNBLHFEQUFBO0FBNDNDRjtBQTEzQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBNDNDSjtBQXozQ0U7RUFDRSxhQUFBO0FBMjNDSjs7QUF2M0NBO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtFQUNBLHFEQUFBO0FBMDNDRjtBQXgzQ0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBMDNDSjtBQXYzQ0U7RUFDRSxhQUFBO0FBeTNDSjs7QUFwM0NBO0VBQ0UsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsK0ZBQUE7RUFDQSxzQkFBQTtFQUNBLCtDQUFBO0FBdTNDRjs7QUFwM0NBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzREFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQXUzQ0Y7QUFyM0NFO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF1M0NKOztBQW4zQ0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0FBczNDRjs7QUFuM0NBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQXMzQ0Y7O0FBbjNDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFzM0NGO0FBcDNDRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsOENBQUE7QUFzM0NKO0FBcDNDSTtFQUNFLHFEQUFBO0VBQ0Esa0dBQUE7QUFzM0NOO0FBbjNDSTtFQUNFLHFEQUFBO0VBQ0EscURBQUE7QUFxM0NOO0FBajNDRTtFQUNFLGVBQUE7RUFDQSxPQUFBO0VBQ0EsK0ZBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBbTNDSjs7QUEvMkNBO0VBQ0UsT0FBQTtFQUNBLHdCQUFBO0FBazNDRjs7QUEvMkNBO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZKQUFBO0FBazNDRjtBQWgzQ0U7RUFDRSw4RkFBQTtFQUNBLCtDQUFBO0VBQ0EscURBQUE7QUFrM0NKO0FBaDNDSTtFQUNFLG9EQUFBO0VBQ0EsaUNBQUE7RUFDQSxxQ0FBQTtBQWszQ047QUE5MkNFO0VBQ0Usb0NBQUE7RUFDQSwyQ0FBQTtBQWczQ0o7QUE5MkNJO0VBQ0UsaURBbnVETTtFQW91RE4sZ0NBQUE7RUFDQSxnQ0FBQTtBQWczQ047O0FBMzJDQTtFQUNFLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EscURBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSx1REFBQTtBQTgyQ0Y7O0FBMzJDQTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7QUE4MkNGO0FBNTJDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0FBODJDSjs7QUExMkNBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQTYyQ0Y7QUEzMkNFO0VBQ0UsbUJBQUE7QUE2MkNKOztBQXoyQ0E7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0FBNDJDRjtBQTEyQ0U7O0VBRUUsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQTQyQ0o7QUExMkNJOztFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQTYyQ047QUF6MkNFO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQTIyQ0o7O0FBdDJDRTtFQUNFLHdCQUFBO0FBeTJDSjs7QUFyMkNBO0VBQ0U7SUFBUSw2QkFBQTtFQXkyQ1I7RUF4MkNBO0lBQVcsc0JBQUE7SUFBd0Isb0JBQUE7SUFBc0Isd0JBQUE7RUE2MkN6RDtFQTUyQ0E7SUFBYyxlQUFBO0lBQWlCLGNBQUE7RUFnM0MvQjtFQS8yQ0E7SUFBdUIsZ0RBQUE7RUFrM0N2QjtFQWozQ0E7SUFBZSxzQkFBQTtJQUF3QixvQkFBQTtFQXEzQ3ZDO0VBcDNDQTtJQUF1QixlQUFBO0VBdTNDdkI7RUF0M0NBO0lBQTJCLGVBQUE7RUF5M0MzQjtFQXgzQ0E7SUFBa0IsMEJBQUE7RUEyM0NsQjtFQTEzQ0E7SUFBcUIsMEJBQUE7RUE2M0NyQjtFQTUzQ0E7SUFBcUIsVUFBQTtFQSszQ3JCO0VBOTNDQTtJQUF3QyxXQUFBO0lBQWEsZUFBQTtFQWs0Q3JEO0VBajRDQTtJQUFvRCx1QkFBQTtFQW80Q3BEO0VBbjRDQTtJQUFtQyxnQkFBQTtFQXM0Q25DO0VBcjRDQTtJQUEyQixzQkFBQTtFQXc0QzNCO0VBdjRDQTtJQUE2QixXQUFBO0VBMDRDN0I7RUF6NENBO0lBQThCLHNCQUFBO0lBQXdCLHVCQUFBO0VBNjRDdEQ7RUE1NENBO0lBQTBDLFdBQUE7SUFBYSxVQUFBO0lBQVksa0JBQUE7RUFpNUNuRTtFQWg1Q0E7SUFBdUIsMEJBQUE7RUFtNUN2QjtFQWw1Q0E7SUFBYyxlQUFBO0VBcTVDZDtFQXA1Q0E7SUFBVyxxQkFBQTtFQXU1Q1g7QUFDRjtBQXQ1Q0E7RUFBa0IsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLGFBQUE7QUEyNUN0RDs7QUExNUNBO0VBQ0UsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBNjVDRjs7QUEzNUNBOztFQUNzQixzQkFBQTtBQSs1Q3RCOztBQTk1Q0E7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFpNkNGOztBQS81Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQWs2Q0Y7O0FBaDZDQTtFQUFzQixXQUFBO0VBQWEsZ0JBQUE7RUFBa0Isc0JBQUE7RUFBd0IsaUJBQUE7RUFBbUIsb0RBQUE7RUFBc0QsdUJBQUE7RUFBeUIsYUFBQTtFQUFlLGdCQUFBO0VBQWtCLGdCQUFBO0FBNDZDaE47O0FBMzZDQTtFQUE0QixhQUFBO0VBQWUsMkNBQUE7RUFBNkMsbURBQUE7QUFpN0N4Rjs7QUFoN0NBOztFQUNrQyxnQ0FBQTtFQUFrQyw2REFBQTtBQXE3Q3BFOztBQXA3Q0E7RUFBa0Isa0JBQUE7RUFBb0IsMEJBQUE7RUFBeUIsZ0JBQUE7QUEwN0MvRDs7QUF4N0NBO0VBQ0U7SUFBdUIsMEJBQUE7SUFBNEIsaUJBQUE7RUE2N0NuRDtFQTU3Q0E7SUFBZ0IsaUJBQUE7RUErN0NoQjtFQTk3Q0E7SUFBZ0IsbUJBQUE7RUFpOENoQjtFQWg4Q0E7Ozs7OztJQUt5QyxjQUFBO0lBQWdCLFdBQUE7RUFvOEN6RDtFQW44Q0E7SUFBNEMsYUFBQTtFQXM4QzVDO0VBcjhDQTtJQUErQyxzQkFBQTtJQUF3Qix1QkFBQTtJQUF5QixnQkFBQTtJQUFrQiw2Q0FBQTtFQTI4Q2xIO0VBMThDQTtJQUErQyxhQUFBO0lBQWUsOEJBQUE7SUFBZ0MsbUJBQUE7SUFBcUIsZ0JBQUE7SUFBa0IsZ0JBQUE7SUFBa0IsWUFBQTtJQUFjLG9EQUFBO0VBbTlDcks7RUFsOUNBO0lBQTBELG1CQUFBO0VBcTlDMUQ7RUFwOUNBO0lBQXVELHlCQUFBO0lBQTJCLGdCQUFBO0lBQWtCLDRCQUFBO0lBQThCLG9CQUFBO0VBMDlDbEk7RUF6OUNBO0lBQWMsc0JBQUE7RUE0OUNkO0FBQ0Y7QUEzOUNBO0VBQ0Usb0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FBNjlDRjs7QUExOUNBO0VBQThCLG1CQUFBO0VBQXFCLGdCQUFBO0FBKzlDbkQ7O0FBOTlDQTtFQUE4QixXQUFBO0VBQWEsWUFBQTtFQUFjLGVBQUE7QUFvK0N6RDs7QUFuK0NBO0VBQXVCLGNBQUE7RUFBZ0IsV0FBQTtFQUFhLGVBQUE7QUF5K0NwRDs7QUF4K0NBO0VBQTRCLGNBQUE7RUFBZ0IsZUFBQTtBQTYrQzVDOztBQTUrQ0E7RUFBc0IsYUFBQTtFQUFjLG1CQUFBO0FBaS9DcEM7O0FBLytDQTtFQUNFLHNCQUFBO0VBQ0EseUJBQUE7QUFrL0NGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gRW50ZXJwcmlzZSDDosKAwpMgRXhhbSBSZXBvcnRzICAoZW5oYW5jZWQgdjIpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4kZWFzZTogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcclxuJGVhc2Utc21vb3RoOiBjdWJpYy1iZXppZXIoMC42NSwgMCwgMC4zNSwgMSk7XHJcbiRlYXNlLWJvdW5jZTogY3ViaWMtYmV6aWVyKDAuMzQsIDEuNTYsIDAuNjQsIDEpO1xyXG4kcmFkaXVzOiAwLjc1cmVtO1xyXG4kc2hhZG93LXNtOiAwIDAuMDYyNXJlbSAwLjE4NzVyZW0gcmdiYSgwLDAsMCwwLjA0KSwgMCAwLjA2MjVyZW0gMC4xMjVyZW0gcmdiYSgwLDAsMCwwLjAzKTtcclxuJHNoYWRvdy1tZDogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgwLDAsMCwwLjA2KTtcclxuJHNoYWRvdy1sZzogMCAxLjI1cmVtIDIuNXJlbSByZ2JhKDAsMCwwLDAuMSksIDAgMC41cmVtIDFyZW0gcmdiYSgwLDAsMCwwLjA2KTtcclxuJHNoYWRvdy1wYW5lbDogMCAxLjVyZW0gMy43NXJlbSByZ2JhKDUsMTgsNDAsMC4yMiksIDAgMC4zNzVyZW0gMXJlbSByZ2JhKDUsMTgsNDAsMC4wOCk7XHJcbiRzaGFkb3ctaG92ZXI6IDAgMC41cmVtIDEuMjVyZW0gcmdiYSgwLDAsMCwwLjA4KTtcclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBIb3N0IHRva2VucyDDosKUwoDDosKUwoBcclxuOmhvc3Qge1xyXG4gIC0tZ3JlZW4tYmc6ICNlOGY5ZWY7XHJcbiAgLS1yZWQtYmc6ICNmZmYyZjQ7XHJcbiAgLS15ZWxsb3ctYmc6ICNmZmY4ZTY7XHJcbiAgLS1vcmFuZ2UtYmc6ICNmZmY0ZTE7XHJcbiAgLS1ibHVlLWJnOiAjZTZmMGZmO1xyXG4gIC0tZ3JlZW4tdGV4dDogIzE2NjUzNDtcclxuICAtLXJlZC10ZXh0OiAjYjkxYzFjO1xyXG4gIC0teWVsbG93LXRleHQ6ICNiNDUzMDk7XHJcbiAgLS1vcmFuZ2UtdGV4dDogI2MyNDEwYztcclxuICAtLWJsdWUtdGV4dDogIzBiNjZkMDtcclxuICAtLWJncmVlbi1ib3JkZXI6ICM4NmVmYWM7XHJcbiAgLS1icmVkLWJvcmRlcjogI2U3ZDZkNjtcclxuICAtLWJ5ZWxsb3ctYm9yZGVyOiAjZmRlNjhhO1xyXG4gIC0tYm9yYW5nZS1ib3JkZXI6ICNmYWVlZGY7XHJcbiAgLS1iYmx1ZS1ib3JkZXI6ICM5M2M1ZmQ7XHJcbiAgLS1zY29yZS1jb2xvcjogI2YzOWMxMjtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hdGVyaWFsIG92ZXJyaWRlcyDDosKUwoDDosKUwoBcclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFnZSAmIHRvb2xiYXIgw6LClMKAw6LClMKAXHJcbi5wYWdlIHsgcGFkZGluZzogMS4yNXJlbSAxLjVyZW0gM3JlbTsgfVxyXG4uZXhhbS1yZXBvcnRzIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxLjEyNXJlbTsgfVxyXG4udG9vbGJhciB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDAuODc1cmVtOyBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7IH1cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vIFNFTEVDVElPTlMgw6LCgMKUIFByZW1pdW0gQXV0b2NvbXBsZXRlIElucHV0c1xyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLnNlbGVjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGZsZXg6IDEgMSAyOHJlbTtcclxuICBtaW4td2lkdGg6IDE2cmVtO1xyXG4gIG1heC13aWR0aDogMzZyZW07XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi13aWR0aDogMTRyZW07XHJcbiAgbWF4LXdpZHRoOiAxOHJlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZmFmYmZjIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICBwYWRkaW5nOiAwIDAuODc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyAkZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wMik7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tZGMtbm90Y2hlZC1vdXRsaW5lIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggeyBoZWlnaHQ6IDIuNzVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjVyZW0gMDsgbWluLWhlaWdodDogdW5zZXQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHsgXHJcbiAgdG9wOiAxLjM3NXJlbTsgXHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCxcclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLm1kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUge1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMS41cmVtKSBzY2FsZSgwLjc1KTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIGlucHV0IHtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIGlucHV0OjpwbGFjZWhvbGRlciB7IFxyXG4gIGNvbG9yOiAjOTRhM2I4OyBcclxuICBmb250LXdlaWdodDogNDAwOyBcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6ICM5NGEzYjg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIHdpZHRoOiAxLjI1cmVtO1xyXG4gIGhlaWdodDogMS4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2U7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkOmhvdmVyIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkOmhvdmVyIG1hdC1pY29uW21hdFByZWZpeF0geyBjb2xvcjogIzY0NzQ4YjsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwgMTIzLCAyNTUsIDAuMTIpLCAwIDRweCAxNnB4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjA4KTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLmRpc2FibGVkLXRvb2xiYXItZmllbGQge1xyXG4gIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAwLjk1O1xyXG4gIH1cclxuICBcclxuICBpbnB1dCB7XHJcbiAgICBjb2xvcjogIzBmMTcyYSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICMwZjE3MmEgIWltcG9ydGFudDtcclxuICAgIFxyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XHJcbiAgICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHtcclxuICAgIGNvbG9yOiAjNDc1NTY5ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAubG9jay1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxLjEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjM3NXJlbTtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgaW5wdXQge1xyXG4gIGJhY2tncm91bmQ6ICNmMWY1ZjkgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzk0YTNiOCAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNlMmU4ZjAgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHtcclxuICBjb2xvcjogIzk0YTNiOCAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLy8gRW1wdHkgc3RhdGUgcGxhY2Vob2xkZXIgY2FyZCB3aGVuIG5vIHRlc3Qgc2VsZWN0ZWRcclxuLmVtcHR5LXJlcG9ydHMtc3RhdGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiA0cmVtIDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZjhmYWZjIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjY2JkNWUxO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuM3MgJGVhc2U7XHJcbn1cclxuXHJcbi5lbXB0eS1zdGF0ZS1jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAyOHJlbTtcclxuXHJcbiAgLmVtcHR5LXN0YXRlLWljb24ge1xyXG4gICAgd2lkdGg6IDQuMjVyZW07XHJcbiAgICBoZWlnaHQ6IDQuMjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xMikgMCUsIHJnYmEoMzEsIDEyMywgMjU1LCAwLjA0KSAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgzMSwgMTIzLCAyNTUsIDAuMik7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgICAgIHdpZHRoOiAyLjI1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzFmN2JmZik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW1wdHktc3RhdGUtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgbWFyZ2luOiAwIDAgMC41cmVtIDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxuICB9XHJcblxyXG4gIC5lbXB0eS1zdGF0ZS1kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgbWFyZ2luOiAwIDAgMS41cmVtIDA7XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZW1wdHktYWN0aW9uLWJ0biB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIGhlaWdodDogMi41cmVtO1xyXG4gICAgcGFkZGluZzogMCAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBBdXRvY29tcGxldGUgcGFuZWwgc3R5bGluZ1xyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIHtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAyMHB4IDQwcHggLTEycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjAzKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbiB7XHJcbiAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDIuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMTVzICRlYXNlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wNikgMCUsIHJnYmEoMTM5LCA5MiwgMjQ2LCAwLjA0KSAxMDAlKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbi5tYXQtbWRjLW9wdGlvbi1hY3RpdmUge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsIDEyMywgMjU1LCAwLjEpIDAlLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4wNikgMTAwJSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24gLm9wdGlvbi1tYWluIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uIC5vcHRpb24tc3ViIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuLmNvbnRyb2xzIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjVyZW07IH1cclxuLmFjdGlvbi1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnJlZnJlc2gtaWNvbi1idG4sXHJcbi5yZWZyZXNoLWljb24tYnRuIHtcclxuICBtaW4td2lkdGg6IDIuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDIuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjYyNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gIC5yZWZyZXNoLXN2Zy1pY29uLFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgZmlsbDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyAkZWFzZTtcclxuXHJcbiAgICBzdmcge1xyXG4gICAgICBmaWxsOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuICAgIHBhdGgge1xyXG4gICAgICBmaWxsOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucmVmcmVzaC1zdmctaWNvbiBwYXRoIHtcclxuICAgIGZpbGw6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIsICMxYTZmZTgpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgLnJlZnJlc2gtc3ZnLWljb24sXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcblxyXG4gICAgICBzdmcsIHBhdGgge1xyXG4gICAgICAgIGZpbGw6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi5idXR0b24tb25lIHsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7IGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKSAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50OyBsZXR0ZXItc3BhY2luZzogMC4wMWVtOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMjVzICRlYXNlLCBib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2UgIWltcG9ydGFudDsgfVxyXG4uYnV0dG9uLW9uZTpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMikgIWltcG9ydGFudDsgYm94LXNoYWRvdzogJHNoYWRvdy1tZCAhaW1wb3J0YW50OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDYyNXJlbSk7IH1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBGSUxURVJTIE9WRVJMQVkgUEFORUwgw6LCgMKUIE1vZGVybiBmaWVsZCBkZXNpZ25cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi5maWx0ZXJzLXBhbmVsIHtcclxuICB3aWR0aDogbWluKDM0cmVtLCBjYWxjKDEwMHZ3IC0gMnJlbSkpO1xyXG4gIG1heC1oZWlnaHQ6IDc1dmg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2ZhZmJmYyAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgYm94LXNoYWRvdzogMCAxLjI1cmVtIDNyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjE2KSwgMCAwLjM3NXJlbSAxcmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMjhzICRlYXNlLWJvdW5jZTtcclxufVxyXG5cclxuLmZpbHRlcnMtcGFuZWwtaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4xMjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZhZmJmYyAwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uZmlsdGVycy1wYW5lbC1oZWFkZXIgaDQge1xyXG4gIG1hcmdpbjogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG4uZmlsdGVycy1wYW5lbC1oZWFkZXIgaDQgbWF0LWljb24ge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gIGhlaWdodDogMS4xMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxufVxyXG5cclxuLmZpbHRlci1ibG9jayB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDFyZW0gMS4xMjVyZW07XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBmbGV4OiAxO1xyXG59XHJcbi5maWx0ZXItaXRlbSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAwO1xyXG59XHJcblxyXG4vLyBGaWx0ZXIgZmllbGQgOjpuZy1kZWVwIG92ZXJyaWRlcyDDosKAwpQgbW9kZXJuIGNvbXBhY3QgbG9va1xyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wMyk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtZmxleCB7IGhlaWdodDogMi41cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzc1cmVtIDA7IG1pbi1oZWlnaHQ6IHVuc2V0OyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwge1xyXG4gIHRvcDogMS4yNXJlbTtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0ubWF0LWZvY3VzZWQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwsXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwubWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZSB7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gaW5wdXQsXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtc2VsZWN0LXZhbHVlLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1zZWxlY3QtYXJyb3csXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSAubWF0LWljb24geyBjb2xvcjogIzk0YTNiODsgfVxyXG5cclxuLy8gSG92ZXJcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbTpob3ZlciAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC42MjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxufVxyXG4vLyBGb2N1c1xyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtLm1hdC1mb2N1c2VkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjEyKTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuLy8gRGF0ZXBpY2tlciB0b2dnbGUgYnV0dG9uIGFsaWdubWVudFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUgYnV0dG9uIHtcclxuICB3aWR0aDogMS43NXJlbTtcclxuICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLy8gU2VhcmNoYWJsZSBzZWxlY3QgaW5wdXQgc3R5bGluZyBpbnNpZGUgc2VsZWN0IGRyb3Bkb3duIG9wdGlvbnNcclxuOmhvc3QgOjpuZy1kZWVwIC5zZWxlY3Qtc2VhcmNoLW9wdGlvbiB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAuc2VsZWN0LXNlYXJjaC1pbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XHJcblxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgzMSwgMTIzLCAyNTUsIDAuMTUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gsXHJcbiAgLm1hdC1tZGMtb3B0aW9uLXBzZXVkby1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtc2VsZWN0LXBhbmVsIC5zZWxlY3Qtc2VhcmNoLW9wdGlvbiB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNzVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMmU4ZjA7XHJcblxyXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LFxyXG4gIC5tYXQtbWRjLW9wdGlvbi1wc2V1ZG8tY2hlY2tib3gge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLmZpbHRlci1jaGVja2JveC1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgZ3JpZC1jb2x1bW46IHNwYW4gMjtcclxuXHJcbiAgbWF0LWNoZWNrYm94IHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICMzMzQxNTU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBTcGFuIGRhdGUgcGlja2VycyBmdWxsIHdpZHRoIG9uIG5hcnJvdyBncmlkc1xyXG4uZmlsdGVyLWl0ZW06bnRoLWxhc3QtY2hpbGQoLW4rMikgeyBncmlkLWNvbHVtbjogc3BhbiAxOyB9XHJcblxyXG4uZmlsdGVyLWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBwYWRkaW5nOiAwLjg3NXJlbSAxLjEyNXJlbTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmYmZjIDAlLCAjZmZmZmZmIDEwMCUpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5maWx0ZXItYXBwbHktYnRuIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSkgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDFyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZSAhaW1wb3J0YW50O1xyXG59XHJcbi5maWx0ZXItYXBwbHktYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMS1ob3ZlcikgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAkc2hhZG93LW1kICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA2MjVyZW0pO1xyXG59XHJcbi5maWx0ZXItcmVzZXQtYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM0NzU1NjkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UgIWltcG9ydGFudDtcclxufVxyXG4uZmlsdGVyLXJlc2V0LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2Y4ZmFmYyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2NiZDVlMSAhaW1wb3J0YW50O1xyXG59XHJcbi5maWx0ZXItYXBwbHktYnRuIG1hdC1pY29uLFxyXG4uZmlsdGVyLXJlc2V0LWJ0biBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMXJlbTsgd2lkdGg6IDFyZW07IGhlaWdodDogMXJlbTsgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtOyB9XHJcblxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAgeyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAuNXJlbSk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxyXG5Aa2V5ZnJhbWVzIHNsaWRlRG93biB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMzc1cmVtKTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTGlzdCBjYXJkICsgdGFicyB3cmFwcGVyIMOiwpTCgMOiwpTCgFxyXG4ubGlzdC1jYXJkIHsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2UyZThmMDsgYm9yZGVyLXJhZGl1czogJHJhZGl1czsgYm94LXNoYWRvdzogJHNoYWRvdy1tZDsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjNzICRlYXNlLCBib3JkZXItY29sb3IgMC4zcyAkZWFzZTsgfVxyXG4ubGlzdC1jYXJkOmhvdmVyIHsgYm94LXNoYWRvdzogJHNoYWRvdy1ob3ZlcjsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IH1cclxuLmxpc3Qtd3JhcHBlciB7IG92ZXJmbG93OiB2aXNpYmxlOyB9XHJcbi5leGFtLXRhYnMgeyB3aWR0aDogMTAwJTsgfVxyXG4uaW5uZXItYW5hbHl0aWNzLXRhYnMgeyB3aWR0aDogMTAwJTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1haW4gdGFicyAoVXNlciBSZXBvcnQgLyBBbmFseXRpY3MgUmVwb3J0KSDDosKUwoDDosKUwoBcclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1hdC1tZGMtdGFiLWhlYWRlciB7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IHBhZGRpbmc6MCAwLjVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1hdC1tZGMtdGFiLWxhYmVscyB7IG1pbi1oZWlnaHQ6M3JlbTsgZ2FwOjAuMTI1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXdlaWdodDo2MDA7IGZvbnQtc2l6ZTowLjg3NXJlbTsgcGFkZGluZzowIDEuMjVyZW07IG1pbi1oZWlnaHQ6M3JlbTsgYm9yZGVyLXJhZGl1czokcmFkaXVzICRyYWRpdXMgMCAwOyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiLS1hY3RpdmUgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6aW5zZXQgMCAtMC4xMjVyZW0gMCB2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB0cmFuc2l0aW9uOmNvbG9yIDAuMnMgJGVhc2U7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1hdC1tZGMtdGFiLWJvZHktd3JhcHBlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUgeyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3JkZXItd2lkdGg6MC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBJbm5lciBhbmFseXRpY3MgdGFicyAoQ2F0ZWdvcnkgUmVwb3J0IC8gUXVlc3Rpb24gU3VtbWFyeSkgw6LClMKAw6LClMKAXHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1hdC1tZGMtdGFiLWhlYWRlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlci1ib3R0b206MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgcGFkZGluZzowIDAuNzVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWF0LW1kYy10YWItbGFiZWxzIHsgbWluLWhlaWdodDoyLjVyZW07IGdhcDowLjI1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWIgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgcGFkZGluZzowIDFyZW07IG1pbi1oZWlnaHQ6Mi41cmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbSAwLjVyZW0gMCAwOyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0yKTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWItLWFjdGl2ZSB7IGJhY2tncm91bmQ6dmFyKC0tYmctMik7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB0cmFuc2l0aW9uOmNvbG9yIDAuMnMgJGVhc2U7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJvcmRlci13aWR0aDowLjEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIENhdGVnb3J5IEZpbHRlciBCYW5uZXIgw6LClMKAw6LClMKAXHJcbi5hbmFseXRpY3MtdGFiLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWZpbHRlci1iYW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjc1cmVtO1xyXG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMDgpIDAlLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wNSkgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuMjVzICRlYXNlO1xyXG5cclxuICAuYmFubmVyLXRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTEsICMxZTI5M2IpO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzI1NjNlYik7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDAuMzc1cmVtO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xLCAjMjU2M2ViKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTIpO1xyXG4gICAgICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNsZWFyLWZpbHRlci1idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZ2FwOiAwLjM3NXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAuMzVyZW0gMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEsICNmZmZmZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIsICNjYmQ1ZTEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjNDc1NTY5KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIC5tZGMtYnV0dG9uX19sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZ2FwOiAwLjM3NXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAwLjkzNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM2NDc0OGIpO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyAkZWFzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDgpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMykgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlcG9ydC1zdW1tYXJ5LWdyaWQgeyBkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpOyBnYXA6MC43NXJlbTsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5hbmFseXRpY3Mtc3VtbWFyeS1ncmlkIHsgcGFkZGluZzowLjI1cmVtIDAgMC41cmVtOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOm5vbmU7IH1cclxuLnN1bW1hcnktY2FyZCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC42MjVyZW07IG1pbi13aWR0aDowOyBwYWRkaW5nOjAuNXJlbSAwLjg3NXJlbTsgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC43NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJveC1zaGFkb3c6MCAwLjEyNXJlbSAwLjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgJGVhc2U7IH1cclxuLnN1bW1hcnktY2FyZDpob3ZlciB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjVyZW0gMXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbi5zdW1tYXJ5LWljb24geyB3aWR0aDoyLjI1cmVtOyBoZWlnaHQ6Mi4yNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZsZXgtc2hyaW5rOjA7IGJvcmRlci1yYWRpdXM6MC42MjVyZW07IGJhY2tncm91bmQ6dmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZTsgfVxyXG4uc3VtbWFyeS1pY29uOmhvdmVyIHsgdHJhbnNmb3JtOnNjYWxlKDEuMDUpOyB9XHJcbi5zdW1tYXJ5LWljb24gbWF0LWljb24geyBmb250LXNpemU6MS4xMjVyZW07IHdpZHRoOjEuMTI1cmVtOyBoZWlnaHQ6MS4xMjVyZW07IH1cclxuLy8gSWNvbiBjb2xvciB2YXJpYW50c1xyXG4uc3VtbWFyeS1pY29uLS1zdHVkZW50cyB7IGJhY2tncm91bmQ6cmdiYSg5OSwxMDIsMjQxLDAuMSk7IGNvbG9yOiM2MzY2ZjE7IH1cclxuLnN1bW1hcnktaWNvbi0tcGFnZSB7IGJhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LDAuMSk7IGNvbG9yOiMzYjgyZjY7IH1cclxuLnN1bW1hcnktaWNvbi0tc2NvcmUgeyBiYWNrZ3JvdW5kOnJnYmEoMjQ1LDE1OCwxMSwwLjEpOyBjb2xvcjojZjU5ZTBiOyB9XHJcbi5zdW1tYXJ5LWljb24tLXBhc3MgeyBiYWNrZ3JvdW5kOnJnYmEoMTYsMTg1LDEyOSwwLjEpOyBjb2xvcjojMTBiOTgxOyB9XHJcbi5zdW1tYXJ5LWljb24tLWNhdGVnb3JpZXMgeyBiYWNrZ3JvdW5kOnJnYmEoMTM5LDkyLDI0NiwwLjEpOyBjb2xvcjojOGI1Y2Y2OyB9XHJcbi5zdW1tYXJ5LWljb24tLXF1ZXN0aW9ucyB7IGJhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LDAuMSk7IGNvbG9yOiMzYjgyZjY7IH1cclxuLnN1bW1hcnktaWNvbi0tYXR0ZW1wdHMgeyBiYWNrZ3JvdW5kOnJnYmEoOTksMTAyLDI0MSwwLjEpOyBjb2xvcjojNjM2NmYxOyB9XHJcbi5zdW1tYXJ5LWljb24tLW1pc3Rha2VzIHsgYmFja2dyb3VuZDpyZ2JhKDIzOSw2OCw2OCwwLjEpOyBjb2xvcjojZWY0NDQ0OyB9XHJcbi5zdW1tYXJ5LWNvcHkgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuMTI1cmVtOyBtaW4td2lkdGg6MDsgfVxyXG4uc3VtbWFyeS1sYWJlbCB7IGZvbnQtc2l6ZTp2YXIoLS1mb250LXhzKTsgZm9udC13ZWlnaHQ6NzAwOyBsZXR0ZXItc3BhY2luZzowLjA4ZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi5zdW1tYXJ5LXZhbHVlIHsgZm9udC1zaXplOmNsYW1wKDEuMTI1cmVtLCAwLjk1cmVtICsgMC41dncsIDEuNXJlbSk7IGZvbnQtd2VpZ2h0OjgwMDsgbGluZS1oZWlnaHQ6MS4xOyBsZXR0ZXItc3BhY2luZzotMC4wM2VtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLnN1bW1hcnktbWV0YSB7IGZvbnQtc2l6ZTp2YXIoLS1mb250LXhzbSk7IGZvbnQtd2VpZ2h0OjUwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTIpOyB3aGl0ZS1zcGFjZTpub3dyYXA7IG92ZXJmbG93OmhpZGRlbjsgdGV4dC1vdmVyZmxvdzplbGxpcHNpczsgfVxyXG5cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vIFRBQiBBQ1RJT05TIMOiwoDClCBDb21wYWN0IFNlYXJjaCAmIEFjdGlvbiBCYXIgKEluc2lkZSBUYWJzKVxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLnRhYi1hY3Rpb25zIHsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWJldHdlZW46c3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MXJlbTsgcGFkZGluZzowLjg3NXJlbSAxcmVtIDFyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IG1hcmdpbjowOyB9XHJcblxyXG4vLyBDb21wYWN0IFNlYXJjaFxyXG4udGFiLWFjdGlvbnMgLnNlYXJjaCB7IGZsZXg6MTsgbWF4LXdpZHRoOjIwcmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXI6MXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czowLjc1cmVtOyBwYWRkaW5nOjAgMC43NXJlbTsgdHJhbnNpdGlvbjphbGwgMC4ycyAkZWFzZTsgYm94LXNoYWRvdzowIDAuNXJlbSAxcmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tZGMtbm90Y2hlZC1vdXRsaW5lIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggeyBoZWlnaHQ6IDIuMzc1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC4zNzVyZW0gMDsgbWluLWhlaWdodDogdW5zZXQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHsgdG9wOjEuMTg3NXJlbTsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBpbnB1dCB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjUwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIG1hdC1pY29uW21hdFByZWZpeF0geyBjb2xvcjp2YXIoLS10aGVtZS0zLWljb24tMSk7IG1hcmdpbi1yaWdodDowLjVyZW07IGZvbnQtc2l6ZToxLjEyNXJlbTsgd2lkdGg6MS4xMjVyZW07IGhlaWdodDoxLjEyNXJlbTsgdHJhbnNpdGlvbjphbGwgMC4ycyAkZWFzZTsgfVxyXG4udGFiLWFjdGlvbnMgLnNlYXJjaDpob3ZlciA6Om5nLWRlZXAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzowIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IH1cclxuLnRhYi1hY3Rpb25zIC5zZWFyY2g6aG92ZXIgOjpuZy1kZWVwIG1hdC1pY29uW21hdFByZWZpeF0geyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtZm9jdXNlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIsXHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLy8gQ29tcGFjdCBBY3Rpb24gQnV0dG9uc1xyXG4udGFiLWFjdGlvbnMgLmNvbnRyb2xzIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjVyZW07IH1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IHsgZGlzcGxheTpmbGV4OyBnYXA6MC4zNzVyZW07IGFsaWduLWl0ZW1zOmNlbnRlcjsgfVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uIHsgaGVpZ2h0OjIuMjVyZW07IHBhZGRpbmc6MCAwLjg3NXJlbTsgZm9udC1zaXplOjAuNzVyZW07IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDFlbTsgYm9yZGVyLXJhZGl1czowLjYyNXJlbTsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBnYXA6MC4zNzVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IH1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxcmVtOyB3aWR0aDoxcmVtOyBoZWlnaHQ6MXJlbTsgfVxyXG4vLyBTZWNvbmRhcnkgYnV0dG9uIHN0eWxlIChTZWFyY2gsIEV4cG9ydClcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtc3Ryb2tlZC1idXR0b25dLFxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1idXR0b25dIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpO1xyXG59XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LXN0cm9rZWQtYnV0dG9uXTpob3ZlcixcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtYnV0dG9uXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbn1cclxuLy8gUHJpbWFyeSBidXR0b24gc3R5bGVcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtZmxhdC1idXR0b25dIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1idXR0b24tMSkgMCUsIHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAxMDAlKTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMC43NXJlbSAxLjVyZW0gdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxufVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1mbGF0LWJ1dHRvbl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAwJSwgdmFyKC0tYnV0dG9uLTEpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQcmVtaXVtIHRhYmxlIMOiwpTCgMOiwpTCgFxyXG4udGFibGUtd3JhcCB7XHJcbiAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA1MjBweDtcclxuICBtYXgtaGVpZ2h0OiBtYXgoNTQwcHgsIGNhbGMoMTAwdmggLSAxODBweCkpO1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbSAwLjc1cmVtO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBzY3JvbGxiYXItY29sb3I6ICM4MThjZjggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMC42MjVyZW07XHJcbiAgICBoZWlnaHQ6IDAuNjI1cmVtO1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7IGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6ICM4MThjZjg7IGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94OyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjNGY0NmU1OyBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDsgfVxyXG59XHJcblxyXG4uYW5hbHl0aWNzLXRhYmxlLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIsICM0NzU1NjkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIsICNlMmU4ZjApO1xyXG59XHJcbi5wcmVtaXVtLXRhYmxlIHsgd2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGUgIWltcG9ydGFudDsgYm9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogMC41cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbjpob3N0IDo6bmctZGVlcCAucHJlbWl1bS10YWJsZSB0aC5tYXQtbWRjLWhlYWRlci1jZWxsLFxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbi5wcmVtaXVtLXRhYmxlIHRoLm1hdC1tZGMtaGVhZGVyLWNlbGwgeyBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7IHRvcDogMCAhaW1wb3J0YW50OyB6LWluZGV4OiAxMCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kOiB2YXIoLS10YWJsZS1oZWFkZXItYmcsICMxZTI5M2IpICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyBjb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLXRleHQsICNmZmZmZmYpICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtOyBib3JkZXItYm90dG9tOiAwLjEyNXJlbSBzb2xpZCAjZTJlOGYwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCxcclxuLnByZW1pdW0tdGFibGUgdGgubWF0LW1kYy1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRkLm1hdC1jZWxsLFxyXG4ucHJlbWl1bS10YWJsZSB0ZC5tYXQtbWRjLWNlbGwgeyBwYWRkaW5nOiAwLjM4cmVtIDAuNzVyZW07IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIsICMzMzQxNTUpOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgI2YxZjVmOTsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2U7IH1cclxuLnByZW1pdW0tdGFibGUgdHIubWF0LXJvdzpudGgtY2hpbGQoZXZlbikgdGQsXHJcbi5wcmVtaXVtLXRhYmxlIHRyLm1hdC1tZGMtcm93Om50aC1jaGlsZChldmVuKSB0ZCB7IGJhY2tncm91bmQ6IHJnYmEoMjQ4LDI1MCwyNTIsMC41KTsgfVxyXG4uc3R1ZGVudC1uYW1lIHsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IHZhcigtLWZvbnQtbWQpOyBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4uc3R1ZGVudC1uYW1lOmhvdmVyIHsgb3BhY2l0eTogMC44NTsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xMjVyZW07IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjA2MjVyZW0pOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3R1ZGVudCAvIENhdGVnb3J5IGF2YXRhciBjZWxscyDDosKUwoDDosKUwoBcclxuLnN0dWRlbnQtY2VsbCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC42MjVyZW07IGN1cnNvcjpwb2ludGVyOyB9XHJcbi5zdHVkZW50LWF2YXRhciB7IHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6I2ZmZjsgZmxleC1zaHJpbms6MDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpOyB9XHJcbi5jYXRlZ29yeS1jZWxsIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjYyNXJlbTsgY3Vyc29yOnBvaW50ZXI7IH1cclxuLmNhdGVnb3J5LWF2YXRhciB7IHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6I2ZmZjsgZmxleC1zaHJpbms6MDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgaW5saW5lIMOiwpTCgMOiwpTCgFxyXG4ubWFya3MtaW5saW5lIHsgZm9udC13ZWlnaHQ6NjAwOyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLm1hcmtzLXNlcCB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgbWFyZ2luOjAgMC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQZXJjZW50YWdlIGJhZGdlIMOiwpTCgMOiwpTCgFxyXG4ucGN0LWJhZGdlIHsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBwYWRkaW5nOjAuMTg3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6MC4zNzVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBmb250LXdlaWdodDo3MDA7IGJhY2tncm91bmQ6cmdiYSg5OSwxMDIsMjQxLDAuMDgpOyBjb2xvcjojNjM2NmYxOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFudWFsIHJldmlldyBzdGF0dXMgw6LClMKAw6LClMKAXHJcbi5yZXZpZXctc3RhdHVzIHsgZm9udC1zaXplOjAuODEyNXJlbTsgZm9udC13ZWlnaHQ6NTAwOyB9XHJcbi5yZXZpZXctc3RhdHVzLnJldmlldy1wZW5kaW5nIHsgY29sb3I6dmFyKC0tb3JhbmdlLXRleHQpOyBmb250LXdlaWdodDo2MDA7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXN1bHQgcGlsbHMgw6LClMKAw6LClMKAXHJcbi5yZXN1bHQtcGlsbCB7IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowLjE4NzVyZW0gMC42MjVyZW07IGJvcmRlci1yYWRpdXM6MXJlbTsgZm9udC1zaXplOjAuNjg3NXJlbTsgZm9udC13ZWlnaHQ6NzAwOyBsZXR0ZXItc3BhY2luZzowLjAzZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMDQpOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuLnJlc3VsdC1waWxsLnJlc3VsdC1wYXNzIHsgYmFja2dyb3VuZDp2YXIoLS1ncmVlbi1iZyk7IGNvbG9yOnZhcigtLWdyZWVuLXRleHQpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5yZXN1bHQtcGlsbC5yZXN1bHQtZmFpbCB7IGJhY2tncm91bmQ6dmFyKC0tcmVkLWJnKTsgY29sb3I6dmFyKC0tcmVkLXRleHQpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEFuYWx5dGljcyBzZWN0aW9uIMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLXNlY3Rpb24geyBwYWRkaW5nOjAuNzVyZW0gMXJlbTsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjc1cmVtOyB9XHJcbi5hbmFseXRpY3Mtc2VjdGlvbiAudGFibGUtd3JhcCB7IG1pbi1oZWlnaHQ6IDUyMHB4OyBtYXgtaGVpZ2h0OiBtYXgoNTQwcHgsIGNhbGMoMTAwdmggLSAxODBweCkpOyBvdmVyZmxvdy14OmF1dG8gIWltcG9ydGFudDsgb3ZlcmZsb3cteTphdXRvICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6MC42MjVyZW07IGJveC1zaGFkb3c6JHNoYWRvdy1zbTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQYWdlciDDosKUwoDDosKUwoBcclxuLnBhZ2VyIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGdhcDoxcmVtOyBwYWRkaW5nOjAuODc1cmVtIDEuMjVyZW07IGJvcmRlci10b3A6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgZm9udC1zaXplOjAuODEyNXJlbTsgZm9udC13ZWlnaHQ6NjAwOyBsZXR0ZXItc3BhY2luZzowLjAxZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMik7IH1cclxuLnBhZ2VyIHNwYW4geyBwYWRkaW5nOjAuMjVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czowLjM3NXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLnBhZ2VyIGJ1dHRvbiB7IGJvcmRlci1yYWRpdXM6MC41cmVtICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OjYwMCAhaW1wb3J0YW50OyBwYWRkaW5nOjAuMzc1cmVtIDFyZW0gIWltcG9ydGFudDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlICFpbXBvcnRhbnQ7IH1cclxuLnBhZ2VyIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSk6aG92ZXIgeyBib3gtc2hhZG93OiRzaGFkb3ctbWQgIWltcG9ydGFudDsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuMDYyNXJlbSk7IGJhY2tncm91bmQ6dmFyKC0tYmctMikgIWltcG9ydGFudDsgfVxyXG4ucGFnZXIgYnV0dG9uW2Rpc2FibGVkXSB7IG9wYWNpdHk6MC40OyB9XHJcblxyXG5Aa2V5ZnJhbWVzIHNoaW1tZXIge1xyXG4gIDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMCUgMDsgfVxyXG4gIDEwMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAyMDAlIDA7IH1cclxufVxyXG5cclxuLmxvYWRlci1wbGFjZWhvbGRlciB7IFxyXG4gIHBhZGRpbmc6IDIuNXJlbTsgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjUpOyBcclxuICBmb250LXNpemU6IDAuODc1cmVtOyBcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgwLDAsMCwwLjAyKSAyNSUsIHJnYmEoMCwwLDAsMC4wNSkgNTAlLCByZ2JhKDAsMCwwLDAuMDIpIDc1JSk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XHJcbiAgYW5pbWF0aW9uOiBzaGltbWVyIDEuNXMgaW5maW5pdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gIG1hcmdpbjogMXJlbTtcclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFdyb25nLWFuc3dlciBsaW5rIMOiwpTCgMOiwpTCgFxyXG4ud3Jvbmctc3VtbWFyeS1saW5rIHsgbWFyZ2luLWxlZnQ6IDAuMzc1cmVtOyBmb250LXNpemU6IDAuODVyZW07IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGN1cnNvcjogcG9pbnRlcjsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xMjVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLndyb25nLXN1bW1hcnktbGluazpob3ZlciB7IG9wYWNpdHk6IDAuODsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMTI1cmVtKTsgfVxyXG4ud2EtY291bnQtbGluayB7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTI1cmVtOyBjdXJzb3I6IHBvaW50ZXI7IGZvbnQtd2VpZ2h0OiA3MDA7IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgfVxyXG4ud2EtY291bnQtbGluazpob3ZlciB7IG9wYWNpdHk6IDAuODU7IH1cclxuLndhLWFuc3dlci1saW5rIHsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgZm9udC13ZWlnaHQ6IDcwMDsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbi53YS1hbnN3ZXItbGluazpob3ZlciB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjA2MjVyZW0pOyB9XHJcbi5tdXRlZCB7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtc2l6ZTogMC44NXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFNoYXJlZCBiYWNrZHJvcCArIHBhbmVsIMOiwpTCgMOiwpTCgFxyXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OiAwIH0gdG8geyBvcGFjaXR5OiAxIH0gfVxyXG5Aa2V5ZnJhbWVzIHNsaWRlVXAgeyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEuMjVyZW0pIHNjYWxlKDAuOTYpIH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgc2NhbGUoMSkgfSB9XHJcbkBrZXlmcmFtZXMgc3VidGxlUHVsc2UgeyAwJSwgMTAwJSB7IGJveC1zaGFkb3c6IDAgMS41cmVtIDMuNzVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfSA1MCUgeyBib3gtc2hhZG93OiAwIDEuNzVyZW0gNHJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpOyB9IH1cclxuXHJcbi53cm9uZy1zdW1tYXJ5LWJhY2tkcm9wIHsgcG9zaXRpb246IGZpeGVkOyBpbnNldDogMDsgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UgYXQgY2VudGVyLCByZ2JhKDE1LCAyMywgNDIsIDAuNTUpIDAlLCByZ2JhKDMwLCA0MSwgNTksIDAuNzUpIDEwMCUpOyAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjc1cmVtKSBzYXR1cmF0ZSgxNDAlKTsgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNzVyZW0pIHNhdHVyYXRlKDE0MCUpOyB6LWluZGV4OiAxMDA1MDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IHBhZGRpbmc6IDEuNXJlbTsgYW5pbWF0aW9uOiBmYWRlSW4gMC4yNXMgJGVhc2U7IH1cclxuXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsLFxyXG4ucmVzb3VyY2UtcGFuZWwgeyBwb3NpdGlvbjogcmVsYXRpdmU7IHdpZHRoOiBtaW4oNTZyZW0sIDkydncpOyBtYXgtaGVpZ2h0OiA4OHZoOyB6LWluZGV4OiAxMDA2MDsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYW5pbWF0aW9uOiBzbGlkZVVwIDAuMzVzICRlYXNlLWJvdW5jZTsgbWFyZ2luOiBhdXRvOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5jYXJkLFxyXG4ucmVzb3VyY2UtcGFuZWwgLmNhcmQgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBtYXgtaGVpZ2h0OiA4OHZoOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMS4yNXJlbTsgYm94LXNoYWRvdzogMCAycmVtIDQuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMjgpLCAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7IG92ZXJmbG93OiBoaWRkZW47IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQYW5lbCBoZWFkZXIgw6LClMKAw6LClMKAXHJcbi5wYW5lbC1oZWFkZXIgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBnYXA6MXJlbTsgcGFkZGluZzoxLjI1cmVtIDEuNXJlbTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgZmxleC1zaHJpbms6MDsgfVxyXG4ucGFuZWwtaGVhZGVyOjpiZWZvcmUgeyBjb250ZW50OicnOyBwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgYm90dG9tOjA7IHdpZHRoOjAuMTg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1idXR0b24tMSksIHRyYW5zcGFyZW50KTsgYm9yZGVyLXJhZGl1czowIDAuMTg3NXJlbSAwLjE4NzVyZW0gMDsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItaW5mbyB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC44NzVyZW07IG1pbi13aWR0aDowOyBmbGV4OjE7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWNvcHkgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuMTg3NXJlbTsgbWluLXdpZHRoOjA7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWljb24geyB3aWR0aDozcmVtOyBoZWlnaHQ6M3JlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZsZXgtc2hyaW5rOjA7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzowIDAuNXJlbSAxLjI1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyksIGluc2V0IDAgMCAwIDAuMDYyNXJlbSB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWljb24gbWF0LWljb24geyBmb250LXNpemU6MS4zNzVyZW07IHdpZHRoOjEuMzc1cmVtOyBoZWlnaHQ6MS4zNzVyZW07IH1cclxuLnBhbmVsLWhlYWRlciBoNCB7IG1hcmdpbjowOyBmb250LXNpemU6MS4wNjI1cmVtOyBmb250LXdlaWdodDo4MDA7IGxldHRlci1zcGFjaW5nOi0wLjAyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4ucGFuZWwtaGVhZGVyIC5wYW5lbC1zdWIgeyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IG1hcmdpbi10b3A6MDsgbGluZS1oZWlnaHQ6MS40OyB9XHJcbi5wYW5lbC1oZWFkZXIgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0sXHJcbi5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0biB7XHJcbiAgd2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtYXgtd2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1heC1oZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMikgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAyLjVyZW0gIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjA0KSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dIC5tYXQtbWRjLWJ1dHRvbi10b3VjaC10YXJnZXQsXHJcbjpob3N0IDo6bmctZGVlcCAucGFuZWwtaGVhZGVyIC5wYW5lbC1jbG9zZS1idG4gLm1hdC1tZGMtYnV0dG9uLXRvdWNoLXRhcmdldCB7XHJcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXSBtYXQtaWNvbixcclxuOmhvc3QgOjpuZy1kZWVwIC5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0biBtYXQtaWNvbiB7XHJcbiAgd2lkdGg6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXIgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl06aG92ZXIsXHJcbi5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyMzksIDY4LCA2OCwgMC4wOCkgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMykgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMjM5LCA2OCwgNjgsIDAuMTUpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dOmhvdmVyIG1hdC1pY29uLFxyXG4ucGFuZWwtaGVhZGVyIC5wYW5lbC1jbG9zZS1idG46aG92ZXIgbWF0LWljb24ge1xyXG4gIGNvbG9yOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFuZWwgYm9keSDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHkgeyBwYWRkaW5nOjEuMTI1cmVtIDEuMzc1cmVtOyBvdmVyZmxvdzphdXRvOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucXVlc3Rpb24tdGl0bGUgeyBmb250LXdlaWdodDo3MDA7IG1hcmdpbi1ib3R0b206MC44NzVyZW07IGZvbnQtc2l6ZTowLjkzNzVyZW07IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc21hbGwtbXV0ZWQgeyBmb250LXNpemU6MC42ODc1cmVtOyBwYWRkaW5nLWxlZnQ6MDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3VtbWFyeSB0YWJsZSDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgeyB3aWR0aDoxMDAlOyBib3JkZXItY29sbGFwc2U6c2VwYXJhdGU7IGJvcmRlci1zcGFjaW5nOjAgMC41cmVtOyBtYXJnaW46MCBhdXRvOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHRoIHsgdGV4dC1hbGlnbjpjZW50ZXI7IHBhZGRpbmc6MC43NXJlbSAxcmVtOyBmb250LXdlaWdodDo3MDA7IGZvbnQtc2l6ZTowLjc1cmVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOjAuMDZlbTsgY29sb3I6dmFyKC0tdGhlbWUtMS10ZXh0LTEpOyBiYWNrZ3JvdW5kOnZhcigtLXRhYmxlLWhlYWRlci1iZyk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQgdGg6Zmlyc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAuNjI1cmVtIDAgMCAwLjYyNXJlbTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB0aDpsYXN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowIDAuNjI1cmVtIDAuNjI1cmVtIDA7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdHIgeyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkIHsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyB2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7IHRleHQtYWxpZ246Y2VudGVyOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpmaXJzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6MC42MjVyZW0gMCAwIDAuNjI1cmVtOyB0ZXh0LWFsaWduOmxlZnQ7IGZvbnQtd2VpZ2h0OjYwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOmxhc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAgMC42MjVyZW0gMC42MjVyZW0gMDsgfVxyXG4ud2EtYW5zd2VyLWxpbmssIC53YS1jb3VudC1saW5rIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBmb250LXdlaWdodDo2MDA7IHRyYW5zaXRpb246b3BhY2l0eSAwLjE1cyAkZWFzZTsgfVxyXG4ud2EtYW5zd2VyLWxpbms6aG92ZXIsIC53YS1jb3VudC1saW5rOmhvdmVyIHsgb3BhY2l0eTowLjc1OyB0ZXh0LWRlY29yYXRpb246dW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6MC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTdW1tYXJ5IGFjdGlvbnMgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LWFjdGlvbnMsXHJcbi5zdW1tYXJ5LWFjdGlvbnMgeyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpmbGV4LWVuZDsgZ2FwOjAuNXJlbTsgcGFkZGluZzowLjg3NXJlbSAxLjM3NXJlbTsgYm9yZGVyLXRvcDowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgfVxyXG4uc3VtbWFyeS1hY3Rpb25zIGJ1dHRvbiB7IGJvcmRlci1yYWRpdXM6MC42MjVyZW0gIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6NzAwICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjE1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjE1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMTVzICRlYXNlICFpbXBvcnRhbnQ7IH1cclxuLnN1bW1hcnktYWN0aW9ucyBidXR0b246aG92ZXIgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4wNjI1cmVtKTsgYm94LXNoYWRvdzowIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZykgIWltcG9ydGFudDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFJlc291cmNlIHBhbmVsIMOiwpTCgMOiwpTCgFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHksIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5yZXNvdXJjZS1saXN0IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjc1cmVtOyB9XHJcbi5yZXNvdXJjZS1saXN0IHsgbGlzdC1zdHlsZTpub25lOyBwYWRkaW5nOjA7IG1hcmdpbjowOyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuNzVyZW07IH1cclxuLnJlc291cmNlLWxpc3QgbGkgeyBwYWRkaW5nOjAuODc1cmVtIDFyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBkaXNwbGF5OmZsZXg7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjc1cmVtOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgdHJhbnNpdGlvbjpib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2U7IH1cclxuLnJlc291cmNlLWxpc3QgbGk6aG92ZXIgeyBib3gtc2hhZG93OjAgMXJlbSAycmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuLnJlcy10aXRsZSB7IGZvbnQtd2VpZ2h0OjcwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyBsZXR0ZXItc3BhY2luZzotMC4wMWVtOyB9XHJcbi5yZXMtZGVzYyB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4ucmVzLWFjdGlvbnMgYSB7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKTsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBmb250LXNpemU6IDAuODEyNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjE1cyAkZWFzZTsgfVxyXG4ucmVzLWFjdGlvbnMgYTpob3ZlciB7IG9wYWNpdHk6IDAuOTsgYm94LXNoYWRvdzogJHNoYWRvdy1zbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFNjcm9sbGJhciDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHksXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keSxcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5IHsgb3ZlcmZsb3c6IGF1dG87IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgaGVpZ2h0OiAwLjM3NXJlbTsgd2lkdGg6IDAuMzc1cmVtOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayxcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHRyYW5zcGFyZW50OyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYixcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC4xODc1cmVtOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcixcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFVzZXIgUmV2aWV3IFBhbmVsIMOiwpTCgMOiwpTCgFxyXG4udXNlci1yZXZpZXctcGFuZWwgeyB3aWR0aDogbWluKDcycmVtLCA5NHZ3KTsgbWF4LWhlaWdodDogOTB2aDsgbWFyZ2luOiBhdXRvOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAuY2FyZCB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBtYXgtaGVpZ2h0Ojkwdmg7IGJvcmRlci1yYWRpdXM6MS4yNXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJveC1zaGFkb3c6MCAycmVtIDQuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMjgpLCAwIDAuNzVyZW0gMS41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4xMik7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBvdmVyZmxvdzpoaWRkZW47IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuOyBnYXA6MXJlbTsgcGFkZGluZzoxLjI1cmVtIDEuNXJlbTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgZmxleC1zaHJpbms6MDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlcjo6YmVmb3JlIHsgY29udGVudDonJzsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDowLjE4NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYnV0dG9uLTEpLCB0cmFuc3BhcmVudCk7IGJvcmRlci1yYWRpdXM6MCAwLjE4NzVyZW0gMC4xODc1cmVtIDA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pbmZvIHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjVyZW07IGZsZXg6MTsgbWluLXdpZHRoOjA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIHsgd2lkdGg6M3JlbTsgaGVpZ2h0OjNyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZykgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjVyZW0gMS4yNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpLCBpbnNldCAwIDAgMCAwLjA2MjVyZW0gdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBmbGV4LXNocmluazowOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxLjM3NXJlbTsgd2lkdGg6MS4zNzVyZW07IGhlaWdodDoxLjM3NXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciBoNCB7IG1hcmdpbjowOyBmb250LXNpemU6MS4xMjVyZW07IGZvbnQtd2VpZ2h0OjgwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciBoMyB7IG1hcmdpbjowOyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyBmbGV4LXdyYXA6d3JhcDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuc2NvcmUgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMik7IGZvbnQtd2VpZ2h0OjYwMDsgcGFkZGluZzowLjI1cmVtIDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0IHsgZm9udC13ZWlnaHQ6NzAwOyBwYWRkaW5nOjAuMjVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czo2Mi41cmVtOyBmb250LXNpemU6MC43NXJlbTsgbGV0dGVyLXNwYWNpbmc6MC4wNGVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGJveC1zaGFkb3c6MCAwLjEyNXJlbSAwLjVyZW0gcmdiYSgxNSwyMyw0MiwwLjA4KTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0LnBhc3MgeyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmVzdWx0LmZhaWwgeyBjb2xvcjogI2ZmZjsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXZpZXctY2xvc2UtYnRuIHtcclxuICB3aWR0aDogMi43NXJlbTtcclxuICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgbWluLXdpZHRoOiAyLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZTtcclxuICBmbGV4OiAwIDAgMi43NXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0biBtYXQtaWNvbiB7XHJcbiAgd2lkdGg6IDEuMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIG1hcmdpbjogMDtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuMzc1cmVtIDAuODc1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG46Zm9jdXMtdmlzaWJsZSB7XHJcbiAgb3V0bGluZTogMC4xMjVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpO1xyXG4gIG91dGxpbmUtb2Zmc2V0OiAwLjEyNXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLXN1YiB7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5IHsgZmxleDoxOyBvdmVyZmxvdzphdXRvOyBtYXgtaGVpZ2h0OiBjYWxjKDkwdmggLSAxMHJlbSk7IHBhZGRpbmc6IDEuNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEF0dGVtcHQgaGVhZGVyIMOiwpTCgMOiwpTCgFxyXG4uYXR0ZW1wdC1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDAuMzc1cmVtOyBwYWRkaW5nOiAwLjc1cmVtIDA7IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpOyBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTsgfVxyXG4uYXR0ZW1wdC1oZWFkZXIgaDUgeyBtYXJnaW46IDA7IGZvbnQtc2l6ZTogMXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjc1cmVtOyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTsgfVxyXG4uYXR0ZW1wdC1oZWFkZXIgLnNjb3JlLWJhZGdlIHsgYmFja2dyb3VuZDogI2U5ZjdlZjsgY29sb3I6ICMwYTgwNDM7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44NzVyZW07IG1hcmdpbi1sZWZ0OiBhdXRvOyBsZXR0ZXItc3BhY2luZzogMC4wMWVtOyB9XHJcbi5hdHRlbXB0LW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNzVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpOyBmb250LXNpemU6IDAuODEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFF1ZXN0aW9uIHJldmlldyBjYXJkcyDDosKUwoDDosKUwoBcclxuLnF1ZXN0aW9ucy1saXN0IHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAxcmVtOyBtYXJnaW4tdG9wOiAwLjVyZW07IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIHsgcG9zaXRpb246cmVsYXRpdmU7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czogMC44NzVyZW07IHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtOyBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlOyBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuMzc1cmVtIHJnYmEoMTUsMjMsNDIsMC4wMyk7IG92ZXJmbG93OmhpZGRlbjsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQ6OmJlZm9yZSB7IGNvbnRlbnQ6Jyc7IHBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBib3R0b206MDsgd2lkdGg6MC4xODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJ1dHRvbi0xKSAwJSwgcmdiYSg5OSwxMDIsMjQxLDAuNCkgMTAwJSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkOmhvdmVyIHsgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNzVyZW0gcmdiYSgxNSwyMyw0MiwwLjA4KTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMjUpOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZCAucS10ZXh0IHsgZm9udC13ZWlnaHQ6IDUwMDsgbGluZS1oZWlnaHQ6IDEuNTU7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIC5tYXJrLWJhZGdlIHsgZmxvYXQ6IHJpZ2h0OyBiYWNrZ3JvdW5kOiAjZmZmM2YzOyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiAwLjc1cmVtOyB9XHJcblxyXG4ucS1oZWFkLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGdhcDogMXJlbTsgbWFyZ2luLWJvdHRvbTogMXJlbTsgcGFkZGluZy1ib3R0b206IDFyZW07IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBkYXNoZWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5xLWxlZnQgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuODc1cmVtOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XHJcbi5xLWJvZHkgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDAuNXJlbTsgZmxleDogMTsgbWluLXdpZHRoOiAwOyB9XHJcbi5xLW1ldGEgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XHJcbi5xLWluZGV4IHsgd2lkdGg6IDIuMjVyZW07IGhlaWdodDogMi4yNXJlbTsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwxMDIsMjQxLDAuMTgpIDAlLCByZ2JhKDk5LDEwMiwyNDEsMC4wNikgMTAwJSk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjE4KTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXdlaWdodDogODAwOyBmb250LXNpemU6IDAuODc1cmVtOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBmbGV4LXNocmluazogMDsgfVxyXG4ucS1yaWdodCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC42MjVyZW07IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5xLWJhZGdlIHsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IHBhZGRpbmc6IDAuMjVyZW0gMC42MjVyZW07IGZvbnQtc2l6ZTogMC42ODc1cmVtOyBsaW5lLWhlaWdodDogMXJlbTsgd2lkdGg6IGZpdC1jb250ZW50OyBmb250LXdlaWdodDogNzAwOyBsZXR0ZXItc3BhY2luZzogMC4wNmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XHJcbi5xLWluZm8geyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXNpemU6IDAuODEyNXJlbTsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4zNzVyZW07IGZvbnQtd2VpZ2h0OiA1MDA7IH1cclxuLnEtaW5mbyBtYXQtaWNvbiB7IGZvbnQtc2l6ZTogMC45Mzc1cmVtOyB3aWR0aDogMC45Mzc1cmVtOyBoZWlnaHQ6IDAuOTM3NXJlbTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucS1tYXJrcy5zbWFsbC1tdXRlZCB7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBRdWVzdGlvbiBvcHRpb25zIChjaG9vc2UgLyBtdWx0aSkgw6LClMKAw6LClMKAXHJcbi5xLW9wdGlvbnMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGdhcDogMC42MjVyZW07IH1cclxuLnEtb3B0aW9ucy50d28tY29sIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyOyBnYXA6IDAuNzVyZW07IH1cclxuLnEtb3B0aW9uIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjc1cmVtOyBwYWRkaW5nOiAwLjc1cmVtIDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4xKTsgYmFja2dyb3VuZDogI2Y4ZmJmZjsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgYmFja2dyb3VuZCAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlOyB9XHJcbi5xLW9wdGlvbjpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xMjVyZW0pOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgfVxyXG4ub3B0LWxlZnQgeyB3aWR0aDogMi41cmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZmxleC1zaHJpbms6IDA7IH1cclxuLm9wdC1sZWZ0IC5vcHQtbWFyayB7IHdpZHRoOiAycmVtOyBoZWlnaHQ6IDJyZW07IGJvcmRlci1yYWRpdXM6IDUwJTsgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTsgZGlzcGxheTogaW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODEyNXJlbTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjE1cyAkZWFzZTsgfVxyXG4ub3B0LWJvZHkgeyBmbGV4OiAxOyBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtOyBhbGlnbi1zZWxmOiBjZW50ZXI7IGxpbmUtaGVpZ2h0OiAxLjQ1OyB9XHJcbi5vcHQtYmFkZ2UgeyBtYXJnaW4tbGVmdDogYXV0bzsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjM3NXJlbTsgZmxleC1zaHJpbms6IDA7IH1cclxuLmJhZGdlIHsgcGFkZGluZzogMC4yNXJlbSAwLjYyNXJlbTsgYm9yZGVyLXJhZGl1czogMXJlbTsgZm9udC1zaXplOiAwLjY4NzVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHdoaXRlLXNwYWNlOiBub3dyYXA7IGxldHRlci1zcGFjaW5nOiAwLjAyZW07IH1cclxuLmJhZGdlLnlvdXItYW5zd2VyIHsgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJnKTsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnJlZC1ib3JkZXIpOyB9XHJcbi5iYWRnZS5jb3JyZWN0IHsgYmFja2dyb3VuZDogI2U4ZjllZjsgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4uYmFkZ2UubWlzc2VkIHsgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1iZyk7IGNvbG9yOiB2YXIoLS1iYmx1ZS10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtYmcpOyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uc2VsZWN0ZWQgLm9wdC1tYXJrIHsgYmFja2dyb3VuZDogcmdiYSgxODUsMjgsMjgsMC4xKTsgfVxyXG4ucS1vcHRpb24uY29ycmVjdCB7IGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLWJnKTsgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLW9wdGlvbi5jb3JyZWN0IC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMjIsMTAxLDUyLDAuMSk7IH1cclxuLnEtb3B0aW9uLm1pc3NlZCB7IGJhY2tncm91bmQ6IHZhcigtLWJsdWUtYmcpOyBjb2xvcjogdmFyKC0tYmJsdWUtdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24ubWlzc2VkIC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMTEsMTAyLDIwOCwwLjEpOyB9XHJcblxyXG4ucS1zZWxlY3RlZCwgLnEtbWFya3MgeyBtYXJnaW4tdG9wOiAwLjVyZW07IGZvbnQtc2l6ZTogMC44NzVyZW07IH1cclxuLnEtZmVlZGJhY2sgeyBtYXJnaW4tdG9wOiAwLjYyNXJlbTsgYmFja2dyb3VuZDogcmdiYSgyNDAsMjQ4LDI1NSwwLjYpOyBwYWRkaW5nOiAwLjYyNXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNzUpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxuLnEtZXZhbHVhdGlvbi1zdGF0ZSB7IG1hcmdpbi10b3A6IDAuNjI1cmVtOyBwYWRkaW5nOiAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDFyZW07IH1cclxuLnEtZXZhbHVhdGlvbi1zdGF0ZS5mYWlsZWQgeyBjb2xvcjogIzhhMWMxYzsgYmFja2dyb3VuZDogI2ZmZjJmMjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2VmYjRiNDsgfVxyXG4ucS1ldmFsdWF0aW9uLXN0YXRlLnBlbmRpbmcgeyBjb2xvcjogIzZjNGEwMDsgYmFja2dyb3VuZDogI2ZmZjhlNjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgI2U3Y2E3YTsgfVxyXG4ucmV0cnktZXZhbHVhdGlvbi1idG4geyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCBjdXJyZW50Q29sb3I7IGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyBwYWRkaW5nOiAwLjRyZW0gMC43cmVtOyBjb2xvcjogaW5oZXJpdDsgYmFja2dyb3VuZDogI2ZmZjsgY3Vyc29yOiBwb2ludGVyOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbi5yZXRyeS1ldmFsdWF0aW9uLWJ0bjpkaXNhYmxlZCB7IGN1cnNvcjogd2FpdDsgb3BhY2l0eTogMC42OyB9XHJcbi5yZXZpZXctZW1wdHkgeyBwYWRkaW5nOiAwLjc1cmVtIDAuMjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpOyBmb250LXN0eWxlOiBpdGFsaWM7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBiYWRnZSBzdGF0ZXMgw6LClMKAw6LClMKAXHJcbi5xLW1hcmtzLm1hcmstcG9zaXRpdmUsXHJcbi5xLW1hcmtzLm1hcmstbmVnYXRpdmUsXHJcbi5xLW1hcmtzLm1hcmstbWlkIHtcclxuICBtaW4td2lkdGg6IDMuMjVyZW07XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZ3JpZCAhaW1wb3J0YW50O1xyXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDgwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ucS1tYXJrcy5tYXJrLXBvc2l0aXZlIHsgYmFja2dyb3VuZDogI2U4ZjllZjsgY29sb3I6ICMwYjhhNDU7IH1cclxuLnEtbWFya3MubWFyay1uZWdhdGl2ZSB7IGJhY2tncm91bmQ6ICNmZmYyZjQ7IGNvbG9yOiAjYjAyYTM3OyB9XHJcbi5xLW1hcmtzLm1hcmstbWlkIHsgYmFja2dyb3VuZDogI2ZmZjhlNjsgY29sb3I6ICNiMzZhMDA7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBGaWxsIHF1ZXN0aW9uIMOiwpTCgMOiwpTCgFxyXG4ucS1maWxsIC5maWxsLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC43NXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZmxleC13cmFwOiB3cmFwOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uIHsgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgYmFja2dyb3VuZDogI2ZmZjdlZDsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgyNDUsMTY2LDM1LDAuMSk7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4xNXMgJGVhc2U7IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb246aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LXNtOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uLnNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2U4ZjZmZjsgYm9yZGVyLWNvbG9yOiByZ2JhKDIsMTEyLDI1NSwwLjE1KTsgfVxyXG4ucS1maWxsIC5maWxsLW9wdGlvbi5jb3JyZWN0IHsgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tYmcpOyBib3JkZXItY29sb3I6IHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLWZpbGwgLmZpbGwtY29ycmVjdCB7IHBhZGRpbmc6IDAuNjI1cmVtIDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1iZyk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgRGVzY3JpcHRpdmUgcmV2aWV3IMOiwpTCgMOiwpTCgFxyXG4ucS1kZXNjcmlwdGl2ZSB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMC44NzVyZW07IH1cclxuLmRlc2NyaXB0aXZlLWFuc3dlcnMgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgwLCAxZnIpIG1pbm1heCgwLCAxZnIpOyBnYXA6IDAuODc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAwLjc1cmVtOyBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1iZyk7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuZGVzYy1xdWVzdGlvbiB7IGZsZXg6IDEgMSBhdXRvOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAucXVlc3Rpb24tbGFiZWwgeyBmb250LXNpemU6IDAuNjg3NXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTsgY29sb3I6ICM4YzZhZDY7IGJhY2tncm91bmQ6IHJnYmEoMTQwLDEwNiwyMTQsMC4wOCk7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgcGFkZGluZzogMC4zNzVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAucXVlc3Rpb24tdmFsdWUgeyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLmRlc2Mtc2NvcmUgeyB3aWR0aDogOC43NXJlbTsgZmxleDogMCAwIDguNzVyZW07IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5zY29yZS1sYWJlbCB7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnNjb3JlLXZhbHVlIHsgZm9udC1zaXplOiAxLjEyNXJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICNmMzljMTI7IGJhY2tncm91bmQ6ICNmZmY7IHBhZGRpbmc6IDAuNzVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA0KTsgbWFyZ2luLXRvcDogMC4zNzVyZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtbW9kZWwgeyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10aGVtZS0yKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zdHVkZW50IHsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYmcpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtbW9kZWwgLm1vZGVsLWxhYmVsLFxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zdHVkZW50IC5zdHVkZW50LWxhYmVsIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHJnYmEoMCwwLDAsMC43KTsgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07IGZvbnQtc2l6ZTogMC43NXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1tb2RlbCAubW9kZWwtdGV4dCxcclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc3R1ZGVudCAuYW5zd2VyLXRleHQgeyBjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTsgbGluZS1oZWlnaHQ6IDEuNTU7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc2NvcmUgeyB3aWR0aDogOC43NXJlbTsgYmFja2dyb3VuZDogI2ZmZjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA0KTsgcGFkZGluZzogMC42MjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cclxuLnEtZGVzY3JpcHRpdmUgLnNjb3JlLWxhYmVsIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLnNjb3JlLXZhbHVlIHsgZm9udC1zaXplOiAxcmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogIzBiNjZkMDsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAucS1mZWVkYmFjayB7IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYmcpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBsaW5lLWhlaWdodDogMS41OyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmV2aWV3IGNvbW1lbnQgY29sdW1ucyDDosKUwoDDosKUwoBcclxuLnEtcmV2aWV3LWNvbW1lbnRzIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gIGJvcmRlci10b3A6IDAuMDYyNXJlbSBkYXNoZWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG59XHJcblxyXG4ucmV2aWV3LWNvbHVtbnMge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjtcclxuICBnYXA6IDAuODc1cmVtO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIH1cclxuXHJcbiAgLmNvbCB7XHJcbiAgICBwYWRkaW5nOiAwLjg3NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgICBtaW4taGVpZ2h0OiA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBnYXA6IDAuNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC41cmVtIDEuMjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5taXNzZWQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1yZWQtYmcpIDAlLCB2YXIoLS1iZy0xLCAjZmZmKSA5MCUpO1xyXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1icmVkLWJvcmRlcik7XHJcbiAgICAgIGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1yZWQtdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbmNvcnJlY3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1vcmFuZ2UtYmcpIDAlLCB2YXIoLS1iZy0xLCAjZmZmKSA5MCUpO1xyXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JhbmdlLWJvcmRlcik7XHJcbiAgICAgIGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1vcmFuZ2UtdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbmNvbXBsZXRlIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0teWVsbG93LWJnKSAwJSwgdmFyKC0tYmctMSwgI2ZmZikgOTAlKTtcclxuICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnllbGxvdy1ib3JkZXIpO1xyXG4gICAgICBib3JkZXItdG9wOiAwLjE4NzVyZW0gc29saWQgdmFyKC0teWVsbG93LXRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb2wtaGVhZGVyIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjVyZW07XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDYpO1xyXG5cclxuICAgICAgLmRvdCB7XHJcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcclxuICAgICAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG5cclxuICAgICAgICAmLnJlZCB7IGJhY2tncm91bmQ6IHZhcigtLXJlZC10ZXh0KTsgfVxyXG4gICAgICAgICYub3JhbmdlIHsgYmFja2dyb3VuZDogdmFyKC0tb3JhbmdlLXRleHQpOyB9XHJcbiAgICAgICAgJi55ZWxsb3cgeyBiYWNrZ3JvdW5kOiB2YXIoLS15ZWxsb3ctdGV4dCk7IH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaDQge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA0ZW07XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIsICMzNzQxNTEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LWVtcHR5IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM5Q0EzQUYpO1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBwYWRkaW5nOiAwLjVyZW0gMDtcclxufVxyXG5cclxuLnJldmlldy1pdGVtIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xLCAjZmZmZmZmKTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDgpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMC44NzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjA2MjVyZW0gMC4yNXJlbSByZ2JhKDAsIDAsIDAsIDAuMDMpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE1LCAyMywgNDIsIDAuMTQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICB9XHJcblxyXG4gIC5yaS1ib2R5IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LXRleHQtbWlzc2VkLFxyXG4ucmV2aWV3LXRleHQtaW5jb3JyZWN0LFxyXG4ucmV2aWV3LXRleHQtaW5jb21wbGV0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBnYXA6IDAuNjI1cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAmLmRlbGV0ZWQge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gICAgLnJldmlldy10ZXh0IHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJpLWxlZnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcclxufVxyXG5cclxuLnJpLWljb24ge1xyXG4gIHdpZHRoOiAxLjM3NXJlbTtcclxuICBoZWlnaHQ6IDEuMzc1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAmLm1pc3NlZCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVlMmUyO1xyXG4gICAgY29sb3I6ICNiOTFjMWM7XHJcbiAgfVxyXG4gICYuaW5jb3JyZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNmZmVkZDU7XHJcbiAgICBjb2xvcjogI2MyNDEwYztcclxuICB9XHJcbiAgJi5pbmNvbXBsZXRlIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWYzYzc7XHJcbiAgICBjb2xvcjogI2I0NTMwOTtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuNDU7XHJcbiAgY29sb3I6ICMxZTI5M2I7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gIGZsZXg6IDE7XHJcblxyXG4gICYuZGVsZXRlZCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy10ZXh0LWhpc3Rvcnkge1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG5cclxuLmhpc3RvcnktZW50cnkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBkYXNoZWQgI2UyZThmMDtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XHJcbiAgfVxyXG5cclxuICAmLmRlbGV0ZWQge1xyXG4gICAgb3BhY2l0eTogMC42O1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy1tZXRhIHtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMzc1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZWQtYnkge1xyXG4gICAgY29sb3I6ICNkYzI2MjY7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIHBhZGRpbmctdG9wOiAwLjVyZW07XHJcbiAgYm9yZGVyLXRvcDogMC4wNjI1cmVtIGRhc2hlZCAjZTJlOGYwO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbiAgLmVkaXRlZC1pbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGdhcDogMC4zNXJlbTtcclxuICAgIHBhZGRpbmc6IDAuMzVyZW0gMC42MjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjhmYWZjO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjcyNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG4gICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgxNSwgMjMsIDQyLCAwLjAzKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmMWY1Zjk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICAgIH1cclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICM0ZjQ2ZTUgIWltcG9ydGFudDtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgICBmbGV4LXNocmluazogMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGVkLXRleHQge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICBnYXA6IDAuMjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRvci1uYW1lIHtcclxuICAgICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRlZC1kYXRlLXNlcCB7XHJcbiAgICAgIGNvbG9yOiAjOTRhM2I4O1xyXG4gICAgICBmb250LXNpemU6IDAuNjVyZW07XHJcbiAgICAgIG1hcmdpbjogMCAwLjA1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0ZWQtZGF0ZSB7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1saW5rLFxyXG4gIC5kZWxldGUtbGluayxcclxuICAuc2F2ZS1saW5rLFxyXG4gIC5jYW5jZWwtbGluayB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjE1cyBlYXNlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtbGluayB7XHJcbiAgICBjb2xvcjogIzI1NjNlYjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMDgpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMzcsIDk5LCAyMzUsIDAuMTYpO1xyXG4gICAgICBjb2xvcjogIzFkNGVkODtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmRlbGV0ZS1saW5rIHtcclxuICAgIGNvbG9yOiAjZGMyNjI2O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDM4LCAzOCwgMC4wOCk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDM4LCAzOCwgMC4xNik7XHJcbiAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2F2ZS1saW5rIHtcclxuICAgIGNvbG9yOiAjMTZhMzRhO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMiwgMTYzLCA3NCwgMC4wOCk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMiwgMTYzLCA3NCwgMC4xNik7XHJcbiAgICAgIGNvbG9yOiAjMTU4MDNkO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2FuY2VsLWxpbmsge1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTE2LCAxMzksIDAuMDgpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMTYsIDEzOSwgMC4xNik7XHJcbiAgICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgZWRpdGluZyBmb3IgZGVzY3JpcHRpdmUgcXVlc3Rpb25zIMOiwpTCgMOiwpTCgFxyXG4ubWFya3MtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjM3NXJlbTtcclxuICBtaW4taGVpZ2h0OiAyLjI1cmVtO1xyXG59XHJcblxyXG4ubWFya3MtZGlzcGxheSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMjVyZW07XHJcbiAgcGFkZGluZzogMC4xODc1cmVtO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuMDYyNXJlbSAwLjEyNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDQpO1xyXG59XHJcblxyXG4ubWFya3MtZGlzcGxheSAucS1tYXJrcy5tYXJrLXBvc2l0aXZlLFxyXG4ubWFya3MtZGlzcGxheSAucS1tYXJrcy5tYXJrLW5lZ2F0aXZlLFxyXG4ubWFya3MtZGlzcGxheSAucS1tYXJrcy5tYXJrLW1pZCB7XHJcbiAgbWluLXdpZHRoOiAzLjVyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC41cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuMjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtO1xyXG59XHJcblxyXG4ubWFya3MtZGl2aWRlciB7XHJcbiAgb3BhY2l0eTogMC41NTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZWRpdC1tYXJrcy1idG4ge1xyXG4gIHdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKSAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDAuNzI7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoOTksMTAyLDI0MSwwLjA4KTtcclxuICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gICY6Zm9jdXMtdmlzaWJsZSB7XHJcbiAgICBvdXRsaW5lOiAwLjEyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgICBvdXRsaW5lLW9mZnNldDogMC4wNjI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmtzLWVkaXQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICB3aWR0aDogbWluKDIwcmVtLCBjYWxjKDEwMHZ3IC0gNHJlbSkpO1xyXG4gIGdhcDogMC42MjVyZW07XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBwYWRkaW5nOiAwLjYyNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMTUpO1xyXG59XHJcblxyXG4ubWFya3MtaW5wdXQge1xyXG4gIHdpZHRoOiAzLjVyZW07XHJcbiAgcGFkZGluZzogMC4yNXJlbSAwLjM3NXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlO1xyXG4gIFxyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSg5OSwxMDIsMjQxLDAuMSk7XHJcbiAgfVxyXG4gIFxyXG4gICY6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgJjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtbWF4IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc2F2ZS1tYXJrcy1idG4sXHJcbi5jYW5jZWwtbWFya3MtYnRuIHtcclxuICB3aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW0gIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMS43NXJlbTtcclxufVxyXG5cclxuLnNhdmUtbWFya3MtYnRuIHtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgfVxyXG59XHJcblxyXG4uY2FuY2VsLW1hcmtzLWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLXJlZC10ZXh0KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXJlZC1iZykgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgd2lkdGg6IDFyZW07XHJcbiAgICBoZWlnaHQ6IDFyZW07XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDAuODU7XHJcbiAgfVxyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgSGlzdG9yeSBTZWN0aW9uIMOiwpTCgMOiwpTCgFxyXG4ubWFya3MtaGlzdG9yeS1zZWN0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwxMDIsMjQxLDAuMDMpIDAlLCByZ2JhKDU5LDEzMCwyNDYsMC4wMikgMTAwJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcclxufVxyXG5cclxuLm1hcmtzLWhpc3RvcnktaGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIHdpZHRoOiAxLjEyNXJlbTtcclxuICAgIGhlaWdodDogMS4xMjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtaGlzdG9yeS10aW1lbGluZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMDtcclxufVxyXG5cclxuLmhpc3RvcnktaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuODc1cmVtO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmhpc3RvcnktaW5kaWNhdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIFxyXG4gIC5kb3Qge1xyXG4gICAgd2lkdGg6IDAuNzVyZW07XHJcbiAgICBoZWlnaHQ6IDAuNzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMjU1LDI1NSwyNTUsMSk7XHJcbiAgICBcclxuICAgICYuY3VycmVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMTUpLCAwIDAuMTI1cmVtIDAuMzc1cmVtIHJnYmEoMTYsMTg1LDEyOSwwLjI1KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgJi5wYXN0IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzk0YTNiOCwgIzY0NzQ4Yik7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDE0OCwxNjMsMTg0LDAuMTUpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubGluZSB7XHJcbiAgICB3aWR0aDogMC4xMjVyZW07XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgxNDgsMTYzLDE4NCwwLjQpIDAlLCByZ2JhKDE0OCwxNjMsMTg0LDAuMSkgMTAwJSk7XHJcbiAgICBtYXJnaW46IDAuMjVyZW0gMDtcclxuICAgIG1pbi1oZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1jb250ZW50IHtcclxuICBmbGV4OiAxO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjg3NXJlbTtcclxufVxyXG5cclxuLmhpc3RvcnktY2FyZCB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2UsIGJvcmRlci1jb2xvciAwLjI1cyAkZWFzZTtcclxuICBcclxuICAmLmN1cnJlbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgxNiwxODUsMTI5LDAuMDgpIDAlLCByZ2JhKDUsMTUwLDEwNSwwLjA0KSAxMDAlKTtcclxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMTYsMTg1LDEyOSwwLjIpO1xyXG4gICAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMSk7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAuMzc1cmVtIDFyZW0gcmdiYSgxNiwxODUsMTI5LDAuMTgpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTg3NXJlbSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNiwxODUsMTI5LDAuMyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYucGFzdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwyNTAsMjUyLDAuOCk7XHJcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogJHNoYWRvdy1tZDtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLDAsMCwwLjEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktYmFkZ2Uge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmc6IDAuMTg3NXJlbSAwLjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBmb250LXNpemU6IDAuNjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAzZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTtcclxuICBib3gtc2hhZG93OiAwIDAuMDYyNXJlbSAwLjI1cmVtIHJnYmEoMTYsMTg1LDEyOSwwLjMpO1xyXG59XHJcblxyXG4uaGlzdG9yeS1tYXJrcyB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjg1KTtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBcclxuICAubWFya3MtdG90YWwge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNDUpO1xyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktY2FyZC5wYXN0IC5oaXN0b3J5LW1hcmtzIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XHJcbiAgXHJcbiAgLm1hcmtzLXRvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1tZXRhIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7XHJcbiAgXHJcbiAgLnVwZGF0ZWQtYnksXHJcbiAgLnVwZGF0ZWQtZGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIFxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgICB3aWR0aDogMC44NzVyZW07XHJcbiAgICAgIGhlaWdodDogMC44NzVyZW07XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLnVwZGF0ZWQtYnkge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkLmN1cnJlbnQgLmhpc3RvcnktbWV0YSB7XHJcbiAgLnVwZGF0ZWQtYnkge1xyXG4gICAgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpO1xyXG4gIH1cclxufVxyXG4vLyDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoBcclxuQG1lZGlhIChtYXgtd2lkdGg6IDU1cmVtKSB7XHJcbiAgLnBhZ2UgeyBwYWRkaW5nOiAwLjc1cmVtIDAuNzVyZW0gMnJlbTsgfVxyXG4gIC50b29sYmFyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTsgfVxyXG4gIC5zZWxlY3Rpb25zIHsgbWF4LXdpZHRoOiAxMDAlOyBmbGV4OiAxIDEgMTAwJTsgfVxyXG4gIC5yZXBvcnQtc3VtbWFyeS1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpOyB9XHJcbiAgLnRhYi1hY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cclxuICAudGFiLWFjdGlvbnMgLnNlYXJjaCB7IG1heC13aWR0aDogMTAwJTsgfVxyXG4gIC50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyB7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gIC5yZXZpZXctY29sdW1ucyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbiAgLnEtb3B0aW9ucy50d28tY29sIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAudXNlci1yZXZpZXctcGFuZWwgeyB3aWR0aDogOTYlOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwsIC5yZXNvdXJjZS1wYW5lbCB7IHdpZHRoOiAxMDAlOyBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuY2FyZCwgLnJlc291cmNlLXBhbmVsIC5jYXJkIHsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keSB7IHBhZGRpbmc6IDAuNzVyZW07IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1yb3cgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc2NvcmUgeyB3aWR0aDogMTAwJTsgfVxyXG4gIC5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5kZXNjLXNjb3JlIHsgd2lkdGg6IDEwMCU7IGZsZXg6IG5vbmU7IG1hcmdpbi10b3A6IDAuNXJlbTsgfVxyXG4gIC5kZXNjcmlwdGl2ZS1hbnN3ZXJzIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAucS1oZWFkLXJvdyB7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4gIC5xLXJpZ2h0IHsgbWFyZ2luLWxlZnQ6IDMuMTI1cmVtOyB9XHJcbn1cclxuLm1hcmtzLWVkaXQtcm93IHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjM3NXJlbTsgfVxyXG4ubWFya3MtcmVhc29uLWxhYmVsIHtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5tYXJrcy1yZWFzb24tbGFiZWwgc3BhbixcclxuLm1hcmtzLXJlYXNvbi1lcnJvciB7IGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7IH1cclxuLm1hcmtzLXJlYXNvbi1lcnJvciB7XHJcbiAgbWFyZ2luLXRvcDogLTAuMjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM1O1xyXG59XHJcbi5tYXJrcy1lZGl0LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIGdhcDogMC4zNzVyZW07XHJcbiAgbWluLWhlaWdodDogMS43NXJlbTtcclxufVxyXG4ubWFya3MtcmVhc29uLWlucHV0IHsgd2lkdGg6IDEwMCU7IG1pbi1oZWlnaHQ6IDVyZW07IGJveC1zaXppbmc6IGJvcmRlci1ib3g7IHBhZGRpbmc6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IsICNkM2Q5ZTIpOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgZm9udDogaW5oZXJpdDsgbGluZS1oZWlnaHQ6IDEuNDsgcmVzaXplOiB2ZXJ0aWNhbDsgfVxyXG4ubWFya3MtcmVhc29uLWlucHV0OmZvY3VzIHsgb3V0bGluZTogbm9uZTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjMjY3Y2ZmKTsgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSgzOCwxMjQsMjU1LDAuMTIpOyB9XHJcbi5tYXJrcy1yZWFzb24taW5wdXRbYXJpYS1pbnZhbGlkPVwidHJ1ZVwiXSxcclxuLm1hcmtzLXJlYXNvbi1pbnB1dC5pbnB1dC1lcnJvciB7IGJvcmRlci1jb2xvcjogI2RjMzU0NSAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAwIDAgMCAwLjEyNXJlbSByZ2JhKDIyMCwgNTMsIDY5LCAwLjI1KSAhaW1wb3J0YW50OyB9XHJcbi5oaXN0b3J5LXJlYXNvbiB7IG1hcmdpbi10b3A6IDAuNHJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC42OCk7IGxpbmUtaGVpZ2h0OiAxLjQ7IH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0NXJlbSkge1xyXG4gIC5yZXBvcnQtc3VtbWFyeS1ncmlkIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IHBhZGRpbmc6IDAuODc1cmVtOyB9XHJcbiAgLnN1bW1hcnktY2FyZCB7IHBhZGRpbmc6IDAuODc1cmVtOyB9XHJcbiAgLnN1bW1hcnktbWV0YSB7IHdoaXRlLXNwYWNlOiBub3JtYWw7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0cixcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aCxcclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0ZCB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRyIHsgbWFyZ2luLWJvdHRvbTogMC43NXJlbTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IG92ZXJmbG93OiBoaWRkZW47IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkIHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogY2VudGVyOyB0ZXh0LWFsaWduOiBsZWZ0OyBib3JkZXItcmFkaXVzOiAwOyBib3JkZXI6IG5vbmU7IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpsYXN0LWNoaWxkIHsgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOjpiZWZvcmUgeyBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpOyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpOyBtYXJnaW4tcmlnaHQ6IDAuNXJlbTsgfVxyXG4gIC5zZWxlY3Rpb25zIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG59XHJcbi5tYW51YWwtY2hlY2stY2hpcCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDRweDtcclxuICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gIHBhZGRpbmc6IDNweCA5cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q5NzcwNjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY3ZWQ7XHJcbiAgY29sb3I6ICM5YTM0MTI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYW51YWwtY2hlY2stY2hpcC5zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICNmZmVkZDU7IGZvbnQtd2VpZ2h0OiA2MDA7IH1cclxuLm1hbnVhbC1jaGVjay1jaGlwIG1hdC1pY29uIHsgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDsgZm9udC1zaXplOiAxNnB4OyB9XHJcbi5lZGl0LWNvbW1lbnQtcmVhc29uIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyBtYXJnaW4tdG9wOiA4cHg7IH1cclxuLnJldmlldy1tZXRhIC5lZGl0LXJlYXNvbiB7IGRpc3BsYXk6IGJsb2NrOyBtYXJnaW4tdG9wOiAycHg7IH1cclxuLnNhdmUtbGluay5kaXNhYmxlZCB7IG9wYWNpdHk6IC40NTsgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxyXG5cclxuLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtLmZpbHRlci1pdGVtLS1mdWxsIHtcclxuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
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