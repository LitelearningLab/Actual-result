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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 131)(1, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_67_td_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r173);
      const row_r171 = restoredCtx.$implicit;
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r172.openUserReview(row_r171));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 134);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Marks / Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 135)(1, "span", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 137);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 135)(1, "span", 138);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Manual Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 135)(1, "span", 139);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_67_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 135)(1, "span", 140);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 141);
  }
}
function ExamReportsComponent_div_26_div_67_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 142);
  }
}
const _c3 = function () {
  return ["student_name", "questions_attempted", "correct_answers", "wrong_answers", "result"];
};
function ExamReportsComponent_div_26_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 100)(1, "table", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_67_th_3_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_67_td_4_Template, 6, 2, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_26_div_67_th_6_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_26_div_67_td_7_Template, 6, 2, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ExamReportsComponent_div_26_div_67_th_9_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_26_div_67_td_10_Template, 3, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ExamReportsComponent_div_26_div_67_th_12_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_26_div_67_td_13_Template, 3, 3, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_26_div_67_th_15_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_26_div_67_td_16_Template, 3, 5, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_26_div_67_tr_17_Template, 1, 0, "tr", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_26_div_67_tr_18_Template, 1, 0, "tr", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 122)(20, "button", 123);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 123);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading user report...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_th_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 131)(1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_td_123_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r184);
      const c_r182 = restoredCtx.$implicit;
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r183.openCategoryQuestionSummary(c_r182));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 134);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 146);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 146);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 146);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 146)(1, "span");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 135)(1, "span", 147);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 141);
  }
}
function ExamReportsComponent_div_26_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 142);
  }
}
function ExamReportsComponent_div_26_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 148)(1, "div", 149)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Filtered by Question Bank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 150);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 135)(1, "span", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r193 = ctx.$implicit;
    const i_r194 = ctx.index;
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("#", q_r193.sno || i_r194 + 1 + (ctx_r147.questionCurrentPage - 1) * ctx_r147.questionPageSize, "");
  }
}
function ExamReportsComponent_div_26_th_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 152);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 146);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 146);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_160_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_td_160_a_1_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r204);
      const q_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r202.openWrongAnswerSummary(q_r198));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r198.mistakes);
  }
}
function ExamReportsComponent_div_26_td_160_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_td_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_td_160_a_1_Template, 3, 1, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_td_160_ng_template_2_Template, 2, 0, "ng-template", null, 154, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 141);
  }
}
function ExamReportsComponent_div_26_tr_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 142);
  }
}
function ExamReportsComponent_div_26_div_170_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 157)(1, "span");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "div", 116)(145, "table", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](146, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](147, ExamReportsComponent_div_26_th_147_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](148, ExamReportsComponent_div_26_td_148_Template, 3, 1, "td", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](149, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](150, ExamReportsComponent_div_26_th_150_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, ExamReportsComponent_div_26_td_151_Template, 2, 1, "td", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](152, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, ExamReportsComponent_div_26_th_153_Template, 2, 0, "th", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, ExamReportsComponent_div_26_td_154_Template, 2, 1, "td", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](155, 121);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](163, "div", 122)(164, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_button_click_164_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r214.prevQuestionPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](165, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](166, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](168, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_button_click_168_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r215 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r215.nextQuestionPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](169, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](170, ExamReportsComponent_div_26_div_170_Template, 3, 2, "div", 124);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](36, 29, ctx_r4.userAverageScore, "1.0-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](48, 32, ctx_r4.userPassRate, "1.0-0"), "%");
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](35, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](36, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.filteredQuestionSummary && ctx_r4.filteredQuestionSummary.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dataSource", ctx_r4.paginatedQuestionSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matHeaderRowDef", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](37, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("matRowDefColumns", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](38, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.questionCurrentPage <= 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("Page ", ctx_r4.questionCurrentPage, " of ", ctx_r4.questionTotalPages, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r4.questionCurrentPage >= ctx_r4.questionTotalPages);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.questionSummary && ctx_r4.questionSummary.length);
  }
}
function ExamReportsComponent_div_27_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading review...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 180)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation is pending for answers in this answer sheet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_1_Template_button_click_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r227);
      const att_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r225.retryEvaluation(null, att_r222));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const att_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", att_r222._retryingEvaluation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", att_r222._retryingEvaluation ? "Evaluating\u2026" : "Run evaluation", " ");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"]("", q_r229.marks_awarded, "/", q_r229.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 3, q_r229.marks_awarded / (q_r229.question_marks || 1) * 100, "1.2-2"), "%)");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_button_5_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r242);
      const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r240.toggleManualReview(q_r229));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " Manual Check Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", q_r229.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("title", "AI confidence is below the configured " + q_r229.ai_confidence_threshold + "% threshold");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-pressed", !!q_r229.manual_review_required);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.manual_review_required ? "check_circle" : "radio_button_unchecked");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-icon", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_button_5_Template, 4, 5, "button", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", q_r229.marks_awarded, "/", q_r229.question_marks, " Marks(", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 5, q_r229.marks_awarded / (q_r229.question_marks || 1) * 100, "1.2-2"), "%) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", "AI Confidence: " + (q_r229.ai_confidence != null ? q_r229.ai_confidence + "%" : "N/A"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.needs_manual_review);
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
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 204)(1, "div", 205)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 206);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_1_Template_button_click_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r249);
      const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r247.startEditMarks(q_r229));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, (q_r229.marks_awarded || 0) == (q_r229.question_marks || 0), (q_r229.marks_awarded || 0) == 0, (q_r229.marks_awarded || 0) > 0 && (q_r229.marks_awarded || 0) < (q_r229.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.marks_awarded != null ? q_r229.marks_awarded : 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.question_marks != null ? q_r229.question_marks : 0);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Description is required when changing marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 208)(1, "div", 209)(2, "input", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r254);
      const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r229._editedMarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "label", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Change comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 213);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "textarea", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r254);
      const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r229._marksEditReason = $event);
    })("input", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_input_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r254);
      const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r229._marksReasonError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template, 2, 0, "small", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 216)(12, "button", 217);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r254);
      const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r259 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r259.saveMarks(q_r229));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 218);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_15_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r254);
      const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r261 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r261.cancelEditMarks(q_r229));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r263 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const q_r229 = ctx_r263.$implicit;
    const qi_r230 = ctx_r263.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", q_r229._editedMarks)("min", 0)("max", q_r229.question_marks || 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("/ ", q_r229.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("for", "marks-reason-" + (q_r229.answer_id || qi_r230));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("input-error", q_r229._marksReasonError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", q_r229._marksEditReason)("id", "marks-reason-" + (q_r229.answer_id || qi_r230));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵattribute"]("aria-invalid", q_r229._marksReasonError);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229._marksReasonError);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 201);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_1_Template, 11, 7, "div", 202);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_div_2_Template, 18, 11, "div", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !q_r229._editingMarks);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229._editingMarks);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 205);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](3, _c7, (q_r229.marks_awarded || 0) == (q_r229.question_marks || 0), (q_r229.marks_awarded || 0) == 0, (q_r229.marks_awarded || 0) > 0 && (q_r229.marks_awarded || 0) < (q_r229.question_marks || 0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", q_r229.marks_awarded != null ? q_r229.marks_awarded : 0, "/", q_r229.question_marks != null ? q_r229.question_marks : 0, "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 224);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Correct Answer: ", q_r229.options[0].option_text || q_r229.options[0], "");
  }
}
const _c8 = function () {
  return [];
};
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 220)(1, "div", 221)(2, "div", 222);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_div_4_Template, 2, 1, "div", 223);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("selected", (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c8)).length)("correct", q_r229.is_correct);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" Student Answer: ", (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c8)).join(", ") || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.marks_awarded === 0);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 254)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation could not be completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.evaluation_error);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 256)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation is pending for this answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 257)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "High-level Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 255);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.feedback || "No high-level feedback was returned for this answer.");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No missed points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 280)(1, "div", 281)(2, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r299 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const rc_r285 = ctx_r299.$implicit;
    const rci_r286 = ctx_r299.index;
    const ctx_r295 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r285.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r286 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r295.toTitleCase(h_r293.comment_text || h_r293.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r303 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284)(1, "div", 281)(2, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r303);
      const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](h_r293._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const rci_r286 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r286 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", h_r293._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r293.updated_by || h_r293.created_by || h_r293.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 293)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r307 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](h_r293.updated_by || h_r293.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r307.formatDate(h_r293.updated_date || h_r293.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r315);
      const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r313 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r313.startEditComment(h_r293));
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
    const _r318 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r318);
      const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r316 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r316.confirmDeleteComment(h_r293));
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
    const _r321 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r321);
      const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r319 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r319.saveReviewComment(h_r293));
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
    const _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r324);
      const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r322.cancelEditComment(h_r293));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r293 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r298.isCommentEdited(h_r293));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r293._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r293._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r293._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r293._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template, 6, 4, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template, 5, 2, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template, 2, 1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_Template, 6, 5, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r293 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r293.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r293._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r293._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r293.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r293.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template, 7, 6, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r285.history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 280)(1, "div", 281)(2, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r327 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rc_r285 = ctx_r327.$implicit;
    const rci_r286 = ctx_r327.index;
    const ctx_r288 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r285.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r286 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r285.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r288.toTitleCase(rc_r285.comment_text || rc_r285.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r330 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284)(1, "div", 281)(2, "span", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r330);
      const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rc_r285._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r331 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rci_r286 = ctx_r331.index;
    const rc_r285 = ctx_r331.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r286 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rc_r285._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 278)(1, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r285.updated_by || rc_r285.created_by || rc_r285.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 293)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r333 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rc_r285.updated_by || rc_r285.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r333.formatDate(rc_r285.updated_date || rc_r285.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r341 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r341);
      const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r339 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r339.startEditComment(rc_r285));
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
    const _r344 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r344);
      const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r342 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r342.confirmDeleteComment(rc_r285));
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
    const _r347 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r347);
      const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r345.saveReviewComment(rc_r285));
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
    const _r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r350);
      const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r348 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r348.cancelEditComment(rc_r285));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template, 11, 2, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template, 4, 0, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r285 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r291.isCommentEdited(rc_r285));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r285._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r285._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r285._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r285._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 269)(2, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template, 2, 1, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template, 6, 6, "div", 272);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template, 5, 2, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template, 3, 1, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_Template, 6, 5, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r285 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r285.history && rc_r285.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r285._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r285._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r285.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r285.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No incorrect points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 305)(1, "div", 281)(2, "span", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r366 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const h_r360 = ctx_r366.$implicit;
    const hi_r361 = ctx_r366.index;
    const ctx_r362 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r360.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r361 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r362.toTitleCase(h_r360.comment_text || h_r360.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r369 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 307)(1, "div", 281)(2, "span", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r369);
      const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](h_r360._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r370 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const hi_r361 = ctx_r370.index;
    const h_r360 = ctx_r370.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r361 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", h_r360._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r360.updated_by || h_r360.created_by || h_r360.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 293)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r372 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](h_r360.updated_by || h_r360.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r372.formatDate(h_r360.updated_date || h_r360.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r380);
      const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r378 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r378.startEditComment(h_r360));
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
    const _r383 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r383);
      const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r381.confirmDeleteComment(h_r360));
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
    const _r386 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r386);
      const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r384 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r384.saveReviewComment(h_r360));
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
    const _r389 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r389);
      const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r387.cancelEditComment(h_r360));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r365 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r365.isCommentEdited(h_r360));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r360._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r360._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r360._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r360._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template, 6, 4, "div", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template, 5, 2, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template, 2, 1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_Template, 6, 5, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r360 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r360.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r360._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r360._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r360.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r360.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template, 7, 6, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r352.history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 305)(1, "div", 281)(2, "span", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rc_r352 = ctx_r392.$implicit;
    const rci_r353 = ctx_r392.index;
    const ctx_r355 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r352.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r353 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r352.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r355.toTitleCase(rc_r352.comment_text || rc_r352.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r395 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 307)(1, "div", 281)(2, "span", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r395);
      const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rc_r352._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r396 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rci_r353 = ctx_r396.index;
    const rc_r352 = ctx_r396.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r353 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rc_r352._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r352.updated_by || rc_r352.reviewer_id || rc_r352.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 293)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r398 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rc_r352.edited_by || rc_r352.updated_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r398.formatDate(rc_r352.edited_at || rc_r352.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r406 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r406);
      const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r404.startEditComment(rc_r352));
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
    const _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r409);
      const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r407.confirmDeleteComment(rc_r352));
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
    const _r412 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r412);
      const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r410 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r410.saveReviewComment(rc_r352));
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
    const _r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r415);
      const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r413 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r413.cancelEditComment(rc_r352));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template, 11, 2, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template, 4, 0, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r352 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r358.isCommentEdited(rc_r352));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r352._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r352._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r352._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r352._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 269)(2, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template, 2, 1, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template, 6, 6, "div", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template, 5, 2, "div", 304);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template, 2, 1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_Template, 6, 5, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r352 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r352.history && rc_r352.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r352._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r352._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r352.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r352.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No incomplete points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 310)(1, "div", 281)(2, "span", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const h_r425 = ctx_r431.$implicit;
    const hi_r426 = ctx_r431.index;
    const ctx_r427 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r425.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r426 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r427.toTitleCase(h_r425.comment_text || h_r425.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r434 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 312)(1, "div", 281)(2, "span", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r434);
      const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](h_r425._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r435 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const hi_r426 = ctx_r435.index;
    const h_r425 = ctx_r435.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](hi_r426 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", h_r425._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r425.updated_by || h_r425.created_by || h_r425.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 293)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r437 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](h_r425.updated_by || h_r425.edited_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r437.formatDate(h_r425.updated_date || h_r425.edited_at));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r445 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r445);
      const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r443 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r443.startEditComment(h_r425));
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
    const _r448 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r448);
      const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r446 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r446.confirmDeleteComment(h_r425));
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
    const _r451 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r451);
      const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r449 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r449.saveReviewComment(h_r425));
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
    const _r454 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r454);
      const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r452 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r452.cancelEditComment(h_r425));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r430 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r430.isCommentEdited(h_r425));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r425._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r425._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r425._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r425._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 277);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template, 6, 4, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template, 5, 2, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template, 2, 1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_Template, 6, 5, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const h_r425 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", h_r425.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !h_r425._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r425._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r425.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", h_r425.is_deleted != 1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template, 7, 6, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r417.history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 310)(1, "div", 281)(2, "span", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 302);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r457 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rc_r417 = ctx_r457.$implicit;
    const rci_r418 = ctx_r457.index;
    const ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r417.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r418 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("deleted", rc_r417.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r420.toTitleCase(rc_r417.comment_text || rc_r417.comment || ""));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r460 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 312)(1, "div", 281)(2, "span", 311);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template_textarea_ngModelChange_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r460);
      const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](rc_r417._editedText = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r461 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    const rci_r418 = ctx_r461.index;
    const rc_r417 = ctx_r461.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rci_r418 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", rc_r417._editedText);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r417.updated_by || rc_r417.reviewer_id || rc_r417.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 293)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 294);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](rc_r417.edited_by || rc_r417.updated_by || "Admin User");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r463.formatDate(rc_r417.edited_at || rc_r417.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r471 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r471);
      const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r469.startEditComment(rc_r417));
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
    const _r474 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 299);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r474);
      const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r472 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r472.confirmDeleteComment(rc_r417));
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
    const _r477 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r477);
      const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r475.saveReviewComment(rc_r417));
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
    const _r480 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r480);
      const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r478 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r478.cancelEditComment(rc_r417));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template, 11, 2, "div", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template, 4, 0, "a", 289);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template, 4, 0, "a", 290);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template, 4, 0, "a", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template, 4, 0, "a", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r417 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r423.isCommentEdited(rc_r417));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r417._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r417._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r417._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r417._editing);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 269)(2, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template, 2, 1, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template, 6, 6, "div", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template, 5, 2, "div", 309);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 278);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template, 2, 1, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_Template, 6, 5, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const rc_r417 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r417.history && rc_r417.history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !rc_r417._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r417._editing);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r417.is_deleted == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", rc_r417.is_deleted != 1);
  }
}
const _c9 = function () {
  return ["incorrct", "incorrect", "incor"];
};
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 258)(1, "div", 259)(2, "div", 260)(3, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Points Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template, 2, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template, 8, 5, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 264)(10, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "span", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Points Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template, 2, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template, 9, 5, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 266)(17, "div", 261);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "span", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Points Incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template, 2, 0, "div", 263);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template, 9, 5, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r272.reviewComments(q_r229, "missing").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r272.reviewComments(q_r229, "missing"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r272.reviewComments(q_r229, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c9)).length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r272.reviewComments(q_r229, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](7, _c9)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r272.reviewComments(q_r229, "incomplete").length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r272.reviewComments(q_r229, "incomplete"));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 313);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 314)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r274.formatDate(q_r229.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 315)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Change comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", q_r229.edit_reason, "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 313);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 314)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "schedule");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mh_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r489 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r489.formatDate(mh_r485.updated_date));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 315)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Change comment:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const mh_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", mh_r485.edit_reason, "");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 316)(1, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_3_Template, 1, 0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 244)(5, "div", 318)(6, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 249)(11, "span", 250)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_span_15_Template, 4, 1, "span", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_div_16_Template, 4, 1, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const mh_r485 = ctx.$implicit;
    const isLast_r487 = ctx.last;
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !isLast_r487);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", mh_r485.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("/ ", q_r229.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](mh_r485.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", mh_r485.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", mh_r485.edit_reason);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 225)(1, "div", 226)(2, "div", 227)(3, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Student's Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 230)(8, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Model Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_12_Template, 6, 1, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_13_Template, 4, 0, "div", 234);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_14_Template, 5, 1, "div", 235);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_15_Template, 23, 8, "div", 236);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 237)(17, "div", 238)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Marks History");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 239)(23, "div", 240)(24, "div", 241);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 242);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_26_Template, 1, 0, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 244)(28, "div", 245)(29, "div", 246);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 247);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 249)(36, "span", 250)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_span_40_Template, 4, 1, "span", 251);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_41_Template, 4, 1, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_div_42_Template, 17, 6, "div", 253);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c8)).join(" ") || "No answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.correct_option || q_r229.options && q_r229.options[0] && (q_r229.options[0].option_text || q_r229.options[0]) || q_r229.correct_answer || "No model answer provided");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.evaluation_status === "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.evaluation_status === "pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.question_type || q_r229.type) === "descriptive" && q_r229.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.question_type || q_r229.type) === "descriptive" && q_r229.evaluation_status !== "failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.marks_history && q_r229.marks_history.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", q_r229.marks_awarded, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("/ ", q_r229.question_marks || "-", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.updated_by || "System");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.updated_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.edit_reason);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", q_r229.marks_history);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template, 2, 0, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template, 2, 0, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template, 2, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c8)).indexOf(opt_r496.option_text || opt_r496) !== -1 && !(opt_r496.is_correct == 1 || opt_r496.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c8)).indexOf(opt_r496.option_text || opt_r496) !== -1 && (opt_r496.is_correct == 1 || opt_r496.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", opt_r496.is_correct && (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c8)).indexOf(opt_r496.option_text || opt_r496) === -1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 332);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Missed Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 327);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template, 2, 0, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template, 2, 0, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template, 2, 0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r496 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](3, _c8)).indexOf(opt_r496.option_text || opt_r496) !== -1 && (opt_r496.is_correct == 1 || opt_r496.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c8)).indexOf(opt_r496.option_text || opt_r496) !== -1 && !(opt_r496.is_correct == 1 || opt_r496.is_correct === true));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", opt_r496.is_correct && (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](5, _c8)).indexOf(opt_r496.option_text || opt_r496) === -1);
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 321)(1, "div", 322)(2, "span", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 324)(5, "div", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template, 4, 6, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template, 4, 6, "div", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const opt_r496 = ctx.$implicit;
    const oi_r497 = ctx.index;
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("correct", opt_r496.is_correct == 1 || opt_r496.is_correct === true)("selected", (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](10, _c8)).indexOf(opt_r496.option_text || opt_r496) !== -1)("missed", opt_r496.is_correct && (q_r229.selected_option || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](11, _c8)).indexOf(opt_r496.option_text || opt_r496) === -1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r495.getOptionLetter(oi_r497));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](opt_r496.option_text || opt_r496);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.question_type == "choose");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.question_type == "multi");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 319);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_div_1_Template, 9, 12, "div", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", q_r229.options || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c8));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 182)(1, "div", 183)(2, "div", 184)(3, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 186)(6, "div", 187)(7, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_9_Template, 3, 6, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_10_Template, 6, 8, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 190)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_15_Template, 3, 2, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_16_Template, 2, 7, "div", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_17_Template, 5, 8, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_18_Template, 43, 14, "div", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_div_19_Template, 2, 2, "div", 196);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r229 = ctx.$implicit;
    const qi_r230 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.sno || q_r229.qno ? q_r229.sno || q_r229.qno : qi_r230 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"]((q_r229.question_type || q_r229.type || "").toUpperCase());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.question_type != "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", q_r229.question_type === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r229.question_text || q_r229.text || q_r229.title || "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.question_type || q_r229.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.question_type || q_r229.type) !== "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.question_type || q_r229.type) === "fill");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.question_type || q_r229.type) === "descriptive");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r229.question_type || q_r229.type) == "choose" || (q_r229.question_type || q_r229.type) == "multi");
  }
}
function ExamReportsComponent_div_27_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_div_1_Template, 6, 2, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_27_div_20_div_1_div_1_div_3_Template, 20, 10, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const att_r222 = ctx.$implicit;
    const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r221.hasPendingEvaluation(att_r222));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", att_r222.review || att_r222.questions || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](2, _c8));
  }
}
function ExamReportsComponent_div_27_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_div_1_Template, 4, 3, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r218.userReviewAttempts);
  }
}
function ExamReportsComponent_div_27_div_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No review data available for this user.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_27_div_20_div_1_Template, 2, 1, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_27_div_20_ng_template_2_Template, 2, 0, "ng-template", null, 175, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r217.userReviewAttempts && ctx_r217.userReviewAttempts.length)("ngIfElse", _r219);
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
    const _r513 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r513);
      const ctx_r512 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r512.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 160)(3, "div", 161)(4, "div", 162)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 163)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h3")(11, "span", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r513);
      const ctx_r515 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r515.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamReportsComponent_div_27_div_19_Template, 2, 0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ExamReportsComponent_div_27_div_20_Template, 4, 2, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 171)(22, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_button_click_22_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r513);
      const ctx_r516 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r516.closeUserReview());
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
    const _r522 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 340)(2, "a", 341);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_div_17_tr_13_Template_a_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r522);
      const wa_r520 = restoredCtx.$implicit;
      const ctx_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r521.openResourcesForWrongAnswer(ctx_r521.selectedQuestionForWrongSummary, wa_r520));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 342)(5, "a", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_div_17_tr_13_Template_a_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r522);
      const wa_r520 = restoredCtx.$implicit;
      const ctx_r523 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r523.openResourcesForWrongAnswer(ctx_r523.selectedQuestionForWrongSummary, wa_r520));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const wa_r520 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](wa_r520.answer);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](wa_r520.count || "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](wa_r520.pct || "-");
  }
}
function ExamReportsComponent_div_28_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No wrong answer data available for this question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_28_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 339)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Wrong Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "No. of times selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Occurrence %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_28_div_17_tr_13_Template, 9, 3, "tr", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_28_div_17_div_14_Template, 2, 0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r517 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Question: ", ctx_r517.selectedQuestionForWrongSummary.question_text || ctx_r517.selectedQuestionForWrongSummary.text || ctx_r517.selectedQuestionForWrongSummary.name || "", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r517.selectedWrongAnswers);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r517.selectedWrongAnswers || !ctx_r517.selectedWrongAnswers.length);
  }
}
function ExamReportsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r525 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r525);
      const ctx_r524 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r524.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 160)(3, "div", 161)(4, "div", 163)(5, "div", 162)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "rule_folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 335)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Wrong Answer Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Details for selected question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 337);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r525);
      const ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r527.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_28_div_17_Template, 15, 3, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 171)(19, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_button_click_19_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r525);
      const ctx_r528 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r528.closeWrongAnswerSummary());
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 348);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 349);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const r_r532 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](r_r532.full_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](r_r532.email || "");
  }
}
function ExamReportsComponent_div_29_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ul", 347);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_29_div_17_li_2_Template, 5, 2, "li", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r529 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r529.selectedResources);
  }
}
function ExamReportsComponent_div_29_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No resources linked for this wrong answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r534 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r534);
      const ctx_r533 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r533.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 160)(3, "div", 161)(4, "div", 163)(5, "div", 162)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "folder_shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 335)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Resources related to the selected wrong answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 346);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r534);
      const ctx_r536 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r536.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_29_div_17_Template, 3, 1, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_29_div_18_Template, 2, 0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 171)(20, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_29_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r534);
      const ctx_r537 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r537.closeResourcePanel());
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
    this.questionCurrentPage = 1; // Reset to page 1
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
    this.questionCurrentPage = 1; // Reset to page 1
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
    this.questionPageSize = 20;
    this.questionCurrentPage = 1;
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
    this.questionCurrentPage = 1; // Reset question page index
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
          this.questionCurrentPage = 1; // Reset page on new load
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
      consts: [[1, "page", "exam-reports"], [1, "toolbar"], [1, "selections"], ["appearance", "outline", 1, "local-institute-field", "disabled-toolbar-field"], ["matPrefix", "", "svgIcon", "institute"], ["matInput", "", "disabled", "", "placeholder", "Institute Name", "aria-label", "Institute", 3, "value"], ["appearance", "outline", 1, "scheduled-test-field", "disabled-toolbar-field"], ["matPrefix", "", "svgIcon", "exam"], ["type", "text", "matInput", "", "disabled", "", "placeholder", "Schedule Test", "aria-label", "Scheduled test", 3, "value"], [1, "controls"], [1, "action-row"], ["mat-flat-button", "", "type", "button", "title", "Refresh & Clear Filters", 1, "refresh-icon-btn", 3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", 1, "refresh-svg-icon"], ["d", "M204-318q-22-38-33-78t-11-82q0-134 93-228t227-94h7l-64-64 56-56 160 160-160 160-56-56 64-64h-7q-100 0-170 70.5T240-478q0 26 6 51t18 49l-60 60ZM481-40 321-200l160-160 56 56-64 64h7q100 0 170-70.5T720-482q0-26-6-51t-18-49l60-60q22 38 33 78t11 82q0 134-93 228t-227 94h-7l64 64-56 56Z"], ["mat-flat-button", "", "type", "button", 1, "button-one", 3, "click"], ["filtersBtn", ""], ["svgIcon", "filter"], ["filtersPanel", ""], ["class", "empty-reports-state", 4, "ngIf"], ["class", "list-card", 4, "ngIf"], ["class", "wrong-summary-backdrop", 3, "click", 4, "ngIf"], [1, "filters-panel", 3, "click"], [1, "filters-panel-header"], [1, "filter-block"], ["appearance", "outline", 1, "filter-item"], ["name", "filterCountry", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", 3, "click"], ["matInput", "", "placeholder", "Search country...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "filterCity", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search city...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["appearance", "outline", "class", "filter-item", 4, "ngIf"], ["name", "filterCampus", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search campus...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterDepartment", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", "select-search-option--multi", 3, "click"], ["matInput", "", "placeholder", "Search department...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterTeam", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search team...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterSchedule", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search schedule...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterActiveStatus", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search status...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["appearance", "outline", 1, "filter-item", "filter-item--full", "date-range-field", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Select date range", 2, "cursor", "pointer", 3, "value"], ["matSuffix", "", 2, "cursor", "pointer", "color", "#0284c7"], [1, "filter-item", "filter-checkbox-item"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "filter-actions"], ["mat-flat-button", "", 1, "filter-apply-btn", 3, "click"], ["svgIcon", "apply"], ["mat-flat-button", "", 1, "filter-reset-btn", 3, "click"], ["svgIcon", "refresh"], [3, "value"], ["name", "filterIndustry", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search industry...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterSector", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search sector...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterInstitute", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search institute...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [1, "empty-reports-state"], [1, "empty-state-card"], [1, "empty-state-icon"], [1, "empty-state-title"], [1, "empty-state-description"], ["mat-flat-button", "", "type", "button", 1, "button-one", "empty-action-btn", 3, "click"], [1, "list-card"], [1, "list-wrapper"], [1, "exam-tabs", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["label", "User Report"], [1, "report-summary-grid"], [1, "summary-card"], [1, "summary-icon", "summary-icon--students"], [1, "summary-copy"], [1, "summary-label"], [1, "summary-value"], [1, "summary-meta"], [1, "summary-icon", "summary-icon--page"], [1, "summary-icon", "summary-icon--score"], [1, "summary-icon", "summary-icon--pass"], [1, "tab-actions"], [1, "search"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by student name", "aria-label", "Search by student name", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["class", "table-wrap", 4, "ngIf"], ["class", "loader-placeholder", 4, "ngIf"], ["label", "Analytics Report"], [1, "analytics-section"], [1, "report-summary-grid", "analytics-summary-grid"], [1, "summary-icon", "summary-icon--categories"], [1, "summary-icon", "summary-icon--questions"], [1, "summary-icon", "summary-icon--attempts"], [1, "summary-icon", "summary-icon--mistakes"], [1, "inner-analytics-tabs", 3, "selectedIndex", "selectedIndexChange"], ["label", "Question Bank Report"], [1, "analytics-tab-body"], [1, "table-wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", "compact", "premium-table", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-primary", 4, "matCellDef"], ["matColumnDef", "questions"], ["mat-cell", "", "class", "cell-num", 4, "matCellDef"], ["matColumnDef", "users_attempted"], ["matColumnDef", "total_attempts"], ["matColumnDef", "mistakes"], ["matColumnDef", "error_pct"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Question Summary"], ["class", "category-filter-banner", 4, "ngIf"], [1, "table-wrap", "question-summary-wrap"], ["matColumnDef", "sno"], ["matColumnDef", "question"], ["mat-cell", "", "class", "question-text-cell", 4, "matCellDef"], ["matColumnDef", "user_attempts"], ["matColumnDef", "attempts"], [1, "pager"], ["mat-button", "", 3, "disabled", "click"], ["class", "analytics-table-footer", 4, "ngIf"], ["matColumnDef", "student_name"], ["matColumnDef", "questions_attempted"], ["matColumnDef", "correct_answers"], ["matColumnDef", "wrong_answers"], ["matColumnDef", "result"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-primary"], [1, "student-cell", 3, "click"], [1, "student-avatar"], [1, "student-name"], ["mat-cell", ""], [1, "marks-inline"], [1, "marks-sep"], [1, "pct-badge"], [1, "review-status"], [1, "result-pill"], ["mat-header-row", ""], ["mat-row", ""], [1, "loader-placeholder"], ["title", "Click to view question summary for this category", 1, "category-cell", 3, "click"], [1, "category-avatar"], ["mat-cell", "", 1, "cell-num"], [1, "pct-badge", 3, "ngClass"], [1, "category-filter-banner"], [1, "banner-text"], ["mat-button", "", "type", "button", 1, "clear-filter-btn", 3, "click"], [1, "cell-mono"], ["mat-cell", "", 1, "question-text-cell"], ["href", "javascript:void(0)", "class", "wrong-summary-link mistakes-pill", 3, "click", 4, "ngIf", "ngIfElse"], ["noMistakes", ""], ["href", "javascript:void(0)", 1, "wrong-summary-link", "mistakes-pill", 3, "click"], [1, "cell-muted"], [1, "analytics-table-footer"], [1, "wrong-summary-backdrop", 3, "click"], [1, "wrong-summary-panel", "user-review-panel", 3, "click"], [1, "card"], [1, "panel-header"], [1, "header-icon"], [1, "header-info"], [1, "score"], [1, "result", 3, "ngClass"], ["mat-icon-button", "", "aria-label", "Close answer sheet", "type", "button", 1, "review-close-btn", 3, "click"], ["aria-hidden", "true"], [1, "panel-body"], ["class", "muted", 4, "ngIf"], [4, "ngIf"], [1, "summary-actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "muted"], [4, "ngIf", "ngIfElse"], ["noUserReview", ""], [4, "ngFor", "ngForOf"], ["class", "q-evaluation-state pending attempt-level-banner", "style", "margin-bottom: 16px; border-radius: 8px;", 4, "ngIf"], [1, "questions-list"], ["class", "question-review-card", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "pending", "attempt-level-banner", 2, "margin-bottom", "16px", "border-radius", "8px"], ["type", "button", 1, "retry-evaluation-btn", 3, "disabled", "click"], [1, "question-review-card"], [1, "q-head-row"], [1, "q-left"], [1, "q-index"], [1, "q-body"], [1, "q-meta"], [1, "q-badge"], ["class", "q-info", 4, "ngIf"], [1, "q-text"], [1, "q-right"], ["class", "marks-container", 4, "ngIf"], ["class", "q-marks small-muted", 3, "ngClass", 4, "ngIf"], ["class", "q-fill", 4, "ngIf"], ["class", "q-descriptive", 4, "ngIf"], ["class", "q-options two-col", 4, "ngIf"], [1, "q-info"], ["svgIcon", "brain"], ["type", "button", "class", "manual-check-chip", 3, "selected", "title", "click", 4, "ngIf"], ["type", "button", 1, "manual-check-chip", 3, "title", "click"], [1, "marks-container"], ["class", "marks-display", "aria-label", "Marks awarded", 4, "ngIf"], ["class", "marks-edit", 4, "ngIf"], ["aria-label", "Marks awarded", 1, "marks-display"], [1, "q-marks", "small-muted", 3, "ngClass"], [1, "marks-divider"], ["mat-icon-button", "", "type", "button", "aria-label", "Edit marks", "title", "Edit marks", 1, "edit-marks-btn", 3, "click"], [1, "marks-edit"], [1, "marks-edit-row"], ["type", "number", "step", "0.5", 1, "marks-input", 3, "ngModel", "min", "max", "ngModelChange"], [1, "marks-max"], [1, "marks-reason-label", 3, "for"], [1, "required-star", 2, "color", "#dc3545"], ["rows", "2", "maxlength", "1000", "placeholder", "Explain why the marks are being changed (Required)", 1, "marks-reason-input", 3, "ngModel", "id", "ngModelChange", "input"], ["class", "marks-reason-error-msg", "style", "color: #dc3545; font-size: 0.75rem; display: block; margin-top: 0.25rem;", 4, "ngIf"], [1, "marks-edit-actions"], ["mat-icon-button", "", "type", "button", "title", "Save marks", 1, "save-marks-btn", 3, "click"], ["mat-icon-button", "", "type", "button", "title", "Cancel", 1, "cancel-marks-btn", 3, "click"], [1, "marks-reason-error-msg", 2, "color", "#dc3545", "font-size", "0.75rem", "display", "block", "margin-top", "0.25rem"], [1, "q-fill"], [1, "fill-row"], [1, "fill-option"], ["class", "fill-correct", 4, "ngIf"], [1, "fill-correct"], [1, "q-descriptive"], [1, "descriptive-answers"], [1, "desc-student"], [1, "student-label"], [1, "answer-text"], [1, "desc-model"], [1, "model-label"], [1, "model-text"], ["class", "q-evaluation-state failed", 4, "ngIf"], ["class", "q-evaluation-state pending", 4, "ngIf"], ["class", "q-feedback", 4, "ngIf"], ["class", "q-review-comments", 4, "ngIf"], [1, "marks-history-section"], [1, "marks-history-header"], [1, "marks-history-timeline"], [1, "history-item", "current"], [1, "history-indicator"], [1, "dot", "current"], ["class", "line", 4, "ngIf"], [1, "history-content"], [1, "history-card", "current"], [1, "history-badge"], [1, "history-marks"], [1, "marks-total"], [1, "history-meta"], [1, "updated-by"], ["class", "updated-date", 4, "ngIf"], ["class", "history-reason", 4, "ngIf"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "failed"], [1, "feedback-text"], [1, "q-evaluation-state", "pending"], [1, "q-feedback"], [1, "q-review-comments"], [1, "review-columns"], [1, "col", "missed"], [1, "col-header"], [1, "dot", "red"], ["class", "review-empty", 4, "ngIf"], [1, "col", "incorrect"], [1, "dot", "orange"], [1, "col", "incomplete"], [1, "dot", "yellow"], [1, "review-empty"], [1, "review-item"], [1, "ri-body"], ["class", "review-text-history", 4, "ngIf"], ["class", "review-text-missed", 3, "deleted", 4, "ngIf"], ["class", "review-text-missed editing", 4, "ngIf"], ["class", "review-meta small-muted", 4, "ngIf"], ["class", "review-actions", 4, "ngIf"], [1, "review-text-history"], [1, "history-entry"], [1, "review-meta", "small-muted"], ["class", "deleted-by", 4, "ngIf"], [1, "review-text-missed"], [1, "ri-left"], [1, "ri-icon", "missed"], [1, "review-text", "deleted"], [1, "review-text-missed", "editing"], ["rows", "2", 1, "edit-comment-text", 3, "ngModel", "ngModelChange"], [1, "deleted-by"], [1, "review-actions"], ["class", "edited-info", 4, "ngIf"], ["class", "edit-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "delete-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "save-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "cancel-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], [1, "edited-info"], [1, "edited-text"], [1, "editor-name"], [1, "edited-date-sep"], [1, "edited-date"], ["href", "javascript:void(0)", 1, "edit-link", 3, "click"], ["href", "javascript:void(0)", 1, "delete-link", 3, "click"], ["href", "javascript:void(0)", 1, "save-link", 3, "click"], ["href", "javascript:void(0)", 1, "cancel-link", 3, "click"], [1, "review-text"], ["class", "review-text-incorrect", 3, "deleted", 4, "ngIf"], ["class", "review-text-incorrect editing", 4, "ngIf"], [1, "review-text-incorrect"], [1, "ri-icon", "incorrect"], [1, "review-text-incorrect", "editing"], ["class", "review-text-incomplete", 3, "deleted", 4, "ngIf"], ["class", "review-text-incomplete editing", 4, "ngIf"], [1, "review-text-incomplete"], [1, "ri-icon", "incomplete"], [1, "review-text-incomplete", "editing"], [1, "line"], [1, "updated-date"], [1, "history-reason"], [1, "history-item"], [1, "dot", "past"], [1, "history-card", "past"], [1, "q-options", "two-col"], ["class", "q-option", 3, "correct", "selected", "missed", 4, "ngFor", "ngForOf"], [1, "q-option"], [1, "opt-left"], [1, "opt-mark"], [1, "opt-body"], [1, "opt-text"], ["class", "opt-badge", 4, "ngIf"], [1, "opt-badge"], ["class", "badge your-answer", 4, "ngIf"], ["class", "badge correct", 4, "ngIf"], ["class", "badge missed", 4, "ngIf"], [1, "badge", "your-answer"], [1, "badge", "correct"], [1, "badge", "missed"], [1, "wrong-summary-panel", 3, "click"], [1, "header-copy"], [1, "panel-sub"], ["mat-icon-button", "", "aria-label", "Close wrong answer summary", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "question-title"], [1, "summary-table"], ["data-label", "Wrong Answer"], ["href", "javascript:void(0)", 1, "wa-answer-link", 3, "click"], ["data-label", "Selected Count"], ["href", "javascript:void(0)", 1, "wa-count-link", 3, "click"], ["data-label", "Occurrence %"], [1, "panel-sub", "small-muted"], ["mat-icon-button", "", "aria-label", "Close resources", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "resource-list"], [1, "res-title"], [1, "res-desc", "small-muted"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_div_26_Template, 171, 39, "div", 19);
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
      styles: ["[_nghost-%COMP%] {\n  --green-bg: #e8f9ef;\n  --red-bg: #fff2f4;\n  --yellow-bg: #fff8e6;\n  --orange-bg: #fff4e1;\n  --blue-bg: #e6f0ff;\n  --green-text: #166534;\n  --red-text: #b91c1c;\n  --yellow-text: #b45309;\n  --orange-text: #c2410c;\n  --blue-text: #0b66d0;\n  --bgreen-border: #86efac;\n  --bred-border: #e7d6d6;\n  --byellow-border: #fde68a;\n  --borange-border: #faeedf;\n  --bblue-border: #93c5fd;\n  --score-color: #f39c12;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 3rem;\n}\n\n.exam-reports[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.875rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.selections[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  flex: 1 1 28rem;\n  min-width: 16rem;\n  max-width: 36rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field {\n  position: relative;\n  min-width: 14rem;\n  max-width: 18rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 0 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-flex {\n  height: 2.75rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-infix {\n  padding: 0.5rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label {\n  top: 1.375rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label.mdc-floating-label--float-above {\n  transform: translateY(-1.5rem) scale(0.75);\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field mat-icon[matPrefix] {\n  color: #94a3b8;\n  margin-right: 0.5rem;\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover mat-icon[matPrefix] {\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12), 0 4px 16px rgba(31, 123, 255, 0.08);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n  transform: scale(1.05);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-text-field-wrapper {\n  background: #f1f5f9 !important;\n  border: 1px solid #cbd5e1 !important;\n  border-radius: 0.75rem !important;\n  cursor: not-allowed !important;\n  box-shadow: none !important;\n  opacity: 0.95;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input {\n  color: #0f172a !important;\n  font-weight: 600 !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #0f172a !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input::placeholder {\n  color: #64748b !important;\n  font-weight: 500 !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-floating-label {\n  color: #475569 !important;\n  font-weight: 600 !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field mat-icon[matPrefix] {\n  color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .lock-icon {\n  font-size: 1.125rem !important;\n  width: 1.125rem !important;\n  height: 1.125rem !important;\n  color: #64748b !important;\n  cursor: not-allowed !important;\n  margin-left: 0.375rem;\n  opacity: 0.85;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled input {\n  background: #f1f5f9 !important;\n  color: #94a3b8 !important;\n  cursor: not-allowed !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-floating-label {\n  color: #94a3b8 !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.empty-reports-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4rem 1.5rem;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  border: 1px dashed #cbd5e1;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.empty-state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 28rem;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  width: 4.25rem;\n  height: 4.25rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.12) 0%, rgba(31, 123, 255, 0.04) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n  border: 1px solid rgba(31, 123, 255, 0.2);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  width: 2.25rem;\n  height: 2.25rem;\n  color: var(--button-1, #1f7bff);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  letter-spacing: -0.01em;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 1.5rem 0;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: 600;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  height: 2.5rem;\n  padding: 0 1.25rem !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel {\n  border-radius: 0.75rem !important;\n  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.03) !important;\n  border: none !important;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option {\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  min-height: 2.75rem;\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active {\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.1) 0%, rgba(31, 123, 255, 0.06) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-main {\n  font-weight: 500;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.125rem;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n[_nghost-%COMP%]     .refresh-icon-btn, .refresh-icon-btn[_ngcontent-%COMP%] {\n  min-width: 2.625rem !important;\n  width: 2.625rem !important;\n  height: 2.625rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.625rem !important;\n  background: var(--button-1) !important;\n  color: #ffffff !important;\n  cursor: pointer;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon, [_nghost-%COMP%]     .refresh-icon-btn mat-icon, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  fill: #ffffff !important;\n  color: #ffffff !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon svg, [_nghost-%COMP%]     .refresh-icon-btn mat-icon svg, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon path, [_nghost-%COMP%]     .refresh-icon-btn mat-icon path, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn .refresh-svg-icon path, .refresh-icon-btn[_ngcontent-%COMP%]   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover, .refresh-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover, #1a6fe8) !important;\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon, .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  transform: rotate(180deg);\n}\n[_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon svg, [_nghost-%COMP%]     .refresh-icon-btn:hover .refresh-svg-icon path, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon svg, [_nghost-%COMP%]     .refresh-icon-btn:hover mat-icon path, .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   .refresh-svg-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n}\n\n.button-one[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.button-one[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  color: var(--button-text-2) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filters-panel[_ngcontent-%COMP%] {\n  width: min(34rem, 100vw - 2rem);\n  max-height: 75vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1rem;\n  box-shadow: 0 1.25rem 3rem rgba(15, 23, 42, 0.16), 0 0.375rem 1rem rgba(15, 23, 42, 0.06);\n  animation: _ngcontent-%COMP%_slideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.filters-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.125rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--button-1);\n}\n\n.filter-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  padding: 1rem 1.125rem;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.filter-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.625rem;\n  padding: 0 0.75rem;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-flex {\n  height: 2.5rem;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label {\n  top: 1.25rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label.mdc-floating-label--float-above {\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item input, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-value-text {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-arrow, [_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle .mat-icon {\n  color: #94a3b8;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 0.25rem 0.625rem rgba(15, 23, 42, 0.06);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle button {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 0.375rem;\n  padding: 0.375rem 0.625rem;\n  font-size: 0.8125rem;\n  color: #0f172a;\n  outline: none;\n  background: #f8fafc;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input:focus {\n  border-color: var(--button-1);\n  background: #ffffff;\n  box-shadow: 0 0 0 2px rgba(31, 123, 255, 0.15);\n}\n[_nghost-%COMP%]     .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n.filter-checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.5rem;\n  grid-column: span 2;\n}\n.filter-checkbox-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #334155;\n}\n\n.filter-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  grid-column: span 1;\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  padding: 0.875rem 1.125rem;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #475569 !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .filter-reset-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-0.375rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.list-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid #e2e8f0;\n  border-radius: 0.75rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  overflow: visible !important;\n}\n\n.list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  overflow: visible !important;\n  max-height: none !important;\n}\n\n.exam-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inner-analytics-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-header {\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.5rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-labels {\n  min-height: 3rem;\n  gap: 0.125rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0 1.25rem;\n  min-height: 3rem;\n  border-radius: 0.75rem 0.75rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab:hover {\n  background: var(--bg-1);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active {\n  background: var(--bg-1);\n  color: var(--button-1);\n  box-shadow: inset 0 -0.125rem 0 var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-body-wrapper {\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-header {\n  background: var(--bg-1);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.75rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-labels {\n  min-height: 2.5rem;\n  gap: 0.25rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.8125rem;\n  padding: 0 1rem;\n  min-height: 2.5rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab:hover {\n  background: var(--bg-2);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active {\n  background: var(--bg-2);\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n.analytics-tab-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.category-filter-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.4rem 0.75rem;\n  margin: 0.5rem 1rem 0.5rem 1rem;\n  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 0.625rem;\n  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.02);\n  animation: _ngcontent-%COMP%_slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1, #1e293b);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  line-height: 1.125rem;\n  color: var(--button-1, #2563eb);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--button-1, #2563eb);\n  font-weight: 700;\n  background: rgba(59, 130, 246, 0.12);\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.375rem;\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .clear-filter-btn {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 0.375rem !important;\n  padding: 0.35rem 0.75rem !important;\n  height: 2rem !important;\n  min-height: 2rem !important;\n  line-height: 1 !important;\n  border-radius: 0.5rem !important;\n  background: var(--bg-1, #ffffff) !important;\n  border: 1px solid var(--theme-3-border, #cbd5e1) !important;\n  color: var(--theme-3-text-2, #475569) !important;\n  font-size: 0.75rem !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     .clear-filter-btn .mdc-button__label {\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 0.375rem !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn mat-icon {\n  font-size: 0.9375rem !important;\n  width: 0.9375rem !important;\n  height: 0.9375rem !important;\n  line-height: 0.9375rem !important;\n  color: var(--theme-3-text-3, #64748b);\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover mat-icon {\n  color: #ef4444 !important;\n}\n\n.report-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n}\n\n.analytics-summary-grid[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 0.5rem;\n  background: transparent;\n  border-bottom: none;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  min-width: 0;\n  padding: 0.5rem 0.875rem;\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 0.125rem 0.5rem var(--theme-3-hanover-bg);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.625rem;\n  background: var(--theme-2-hanover-bg);\n  color: var(--button-1);\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.summary-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.summary-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.summary-icon--students[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--page[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--score[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n\n.summary-icon--pass[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n\n.summary-icon--categories[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n}\n\n.summary-icon--questions[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--attempts[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--mistakes[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n\n.summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  min-width: 0;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-3);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.125rem, 0.95rem + 0.5vw, 1.5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: var(--theme-3-text-1);\n}\n\n.summary-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-xsm);\n  font-weight: 500;\n  color: var(--theme-3-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tab-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-between: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1rem 1rem;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n  margin: 0;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 20rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  padding: 0 0.75rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-flex {\n  height: 2.375rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-floating-label {\n  top: 1.1875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input::placeholder {\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-icon[matPrefix] {\n  color: var(--theme-3-icon-1);\n  margin-right: 0.5rem;\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-focused .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px var(--theme-2-hanover-bg);\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 0.875rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  border-radius: 0.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%], .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  color: var(--theme-3-text-2);\n  border: 1px solid var(--theme-3-border);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover, .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover {\n  background: var(--bg-1);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1);\n  border: none;\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--button-1-hover) 0%, var(--button-1) 100%);\n  box-shadow: 0 1rem 2rem var(--theme-2-hanover-bg);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  padding: 0 0.75rem 0.75rem;\n  scrollbar-width: thin;\n  scrollbar-color: #818cf8 rgba(0, 0, 0, 0.05);\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 0.25rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #818cf8;\n  border-radius: 0.25rem;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #4f46e5;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n.analytics-table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--theme-3-text-2, #475569);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-top: 1px solid var(--theme-3-border, #e2e8f0);\n}\n\n.premium-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate !important;\n  border-spacing: 0 !important;\n  border-radius: 0.5rem;\n}\n\n[_nghost-%COMP%]     .premium-table th.mat-header-cell, [_nghost-%COMP%]     .premium-table th.mat-mdc-header-cell, .premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 0 !important;\n  z-index: 10 !important;\n  background: var(--table-header-bg, #1e293b) !important;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--table-header-text, #ffffff) !important;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 0.125rem solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child, .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 0.1875rem solid var(--button-1);\n}\n\n.premium-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.75rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-2, #334155);\n  border-bottom: 0.0625rem solid #f1f5f9;\n  vertical-align: middle;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.5);\n}\n\n.student-name[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: var(--font-md);\n  letter-spacing: -0.01em;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.student-name[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  transform: translateX(0.0625rem);\n}\n\n.student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.student-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.category-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n\n.marks-inline[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-1);\n}\n\n.marks-sep[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  margin: 0 0.125rem;\n}\n\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366f1;\n}\n\n.review-status[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n\n.review-status.review-pending[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  font-weight: 600;\n}\n\n.result-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--theme-3-text-3);\n}\n\n.result-pill.result-pass[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.result-pill.result-fail[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.analytics-section[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  border-radius: 0.625rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n[_nghost-%COMP%]     .table-wrap.question-summary-wrap, [_nghost-%COMP%]     .analytics-section .table-wrap.question-summary-wrap {\n  min-height: auto !important;\n  max-height: none !important;\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  color: var(--theme-3-text-2);\n}\n\n.pager[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.375rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  padding: 0.375rem 1rem !important;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n  background: var(--bg-2) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.loader-placeholder[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.02) 25%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.02) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%] {\n  margin-left: 0.375rem;\n  font-size: 0.85rem;\n  color: var(--button-1);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  font-weight: 600;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateX(0.125rem);\n}\n\n.wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  cursor: pointer;\n  font-weight: 700;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.wa-answer-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(0.0625rem);\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.85rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_subtlePulse {\n  0%, 100% {\n    box-shadow: 0 1.5rem 3.75rem var(--theme-3-hanover-bg);\n  }\n  50% {\n    box-shadow: 0 1.75rem 4rem var(--theme-2-hanover-bg);\n  }\n}\n.wrong-summary-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.55) 0%, rgba(30, 41, 59, 0.75) 100%);\n  backdrop-filter: blur(0.75rem) saturate(140%);\n  z-index: 10050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(56rem, 92vw);\n  max-height: 88vh;\n  z-index: 10060;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 1.25rem;\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  overflow: hidden;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  min-width: 0;\n  flex: 1;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n}\n\n.panel-header[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  margin-top: 0;\n  line-height: 1.4;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%] {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n  min-width: 2.5rem !important;\n  min-height: 2.5rem !important;\n  max-width: 2.5rem !important;\n  max-height: 2.5rem !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.75rem !important;\n  background: var(--bg-1) !important;\n  border: 0.0625rem solid var(--theme-3-border) !important;\n  color: var(--theme-3-text-2) !important;\n  line-height: 1 !important;\n  flex: 0 0 2.5rem !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n  cursor: pointer !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] .mat-mdc-button-touch-target, [_nghost-%COMP%]     .panel-header .panel-close-btn .mat-mdc-button-touch-target {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] mat-icon, [_nghost-%COMP%]     .panel-header .panel-close-btn mat-icon {\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.25rem !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: var(--theme-3-text-2) !important;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover, .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(239, 68, 68, 0.15) !important;\n  transform: scale(1.04) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n  transform: rotate(90deg) !important;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: 1.125rem 1.375rem;\n  overflow: auto;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.875rem;\n  font-size: 0.9375rem;\n  letter-spacing: -0.01em;\n  color: var(--theme-3-text-1);\n  padding: 0.875rem 1rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: var(--bg-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .small-muted[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  padding-left: 0;\n  color: var(--theme-3-text-3);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  margin: 0 auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-1-text-1);\n  background: var(--table-header-bg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n  text-align: center;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--theme-3-text-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wa-answer-link[_ngcontent-%COMP%], .wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover, .wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%], .summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.875rem 1.375rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.625rem !important;\n  font-weight: 700 !important;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.0625rem);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg) !important;\n}\n\n.resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 0.875rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2rem var(--theme-3-hanover-bg);\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n}\n\n.res-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  letter-spacing: -0.01em;\n}\n\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n  width: 0.375rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--theme-3-border);\n  border-radius: 0.1875rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%] {\n  width: min(72rem, 94vw);\n  max-height: 90vh;\n  margin: auto;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border-radius: 1.25rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  border: 0.0625rem solid var(--theme-3-border);\n  overflow: hidden;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-3);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.5rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  letter-spacing: 0.01em;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 62.5rem;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 0.125rem 0.5rem rgba(15, 23, 42, 0.08);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.pass[_ngcontent-%COMP%] {\n  color: var(--button-text-1);\n  background: var(--button-1);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.fail[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 2.75rem;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--theme-3-text-2);\n  line-height: 1;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex: 0 0 2.75rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.375rem 0.875rem var(--theme-3-hanover-bg);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.125rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.875rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  max-height: calc(90vh - 10rem);\n  padding: 1.5rem;\n}\n\n.attempt-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.75rem 0;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  margin-bottom: 0.875rem;\n}\n\n.attempt-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.attempt-header[_ngcontent-%COMP%]   .score-badge[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #0a8043;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.875rem;\n  margin-left: auto;\n  letter-spacing: 0.01em;\n}\n\n.attempt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-size: 0.8125rem;\n}\n\n.questions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.question-review-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-1);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.125rem 0.375rem rgba(15, 23, 42, 0.03);\n  overflow: hidden;\n}\n\n.question-review-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1) 0%, rgba(99, 102, 241, 0.4) 100%);\n}\n\n.question-review-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem rgba(15, 23, 42, 0.08);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--theme-3-text-1);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .mark-badge[_ngcontent-%COMP%] {\n  float: right;\n  background: #fff3f3;\n  color: var(--red-text);\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.q-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem dashed var(--theme-3-border);\n}\n\n.q-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-index[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0.06) 100%);\n  border: 0.0625rem solid rgba(99, 102, 241, 0.18);\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.875rem;\n  color: var(--button-1);\n  flex-shrink: 0;\n}\n\n.q-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n}\n\n.q-badge[_ngcontent-%COMP%] {\n  background: var(--theme-2-hanover-bg);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--button-1);\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.6875rem;\n  line-height: 1rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.q-info[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.8125rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n\n.q-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  width: 0.9375rem;\n  height: 0.9375rem;\n  color: var(--button-1);\n}\n\n.q-marks.small-muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n}\n\n.q-options.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.q-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.875rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.1);\n  background: #f8fbff;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.opt-left[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.opt-left[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.opt-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 0.75rem;\n  align-self: center;\n  line-height: 1.45;\n}\n\n.opt-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n}\n\n.badge.your-answer[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.badge.correct[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.badge.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border-color: var(--bred-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.1);\n}\n\n.q-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border-color: var(--bgreen-border);\n}\n\n.q-option.correct[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.1);\n}\n\n.q-option.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border-color: var(--bblue-border);\n}\n\n.q-option.missed[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(11, 102, 208, 0.1);\n}\n\n.q-selected[_ngcontent-%COMP%], .q-marks[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.q-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  background: rgba(240, 248, 255, 0.6);\n  padding: 0.625rem 0.75rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-evaluation-state[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  padding: 0.75rem;\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.q-evaluation-state.failed[_ngcontent-%COMP%] {\n  color: #8a1c1c;\n  background: #fff2f2;\n  border: 0.0625rem solid #efb4b4;\n}\n\n.q-evaluation-state.pending[_ngcontent-%COMP%] {\n  color: #6c4a00;\n  background: #fff8e6;\n  border: 0.0625rem solid #e7ca7a;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%] {\n  border: 0.0625rem solid currentColor;\n  border-radius: 0.375rem;\n  padding: 0.4rem 0.7rem;\n  color: inherit;\n  background: #fff;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.6;\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-style: italic;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%], .q-marks.mark-negative[_ngcontent-%COMP%], .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.25rem;\n  height: 2rem;\n  margin-top: 0;\n  padding: 0 0.625rem;\n  display: inline-grid !important;\n  place-items: center;\n  border-radius: 0.375rem;\n  font-weight: 800 !important;\n  font-size: 0.8125rem;\n  line-height: normal;\n  letter-spacing: 0.01em;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: #0b8a45;\n}\n\n.q-marks.mark-negative[_ngcontent-%COMP%] {\n  background: #fff2f4;\n  color: #b02a37;\n}\n\n.q-marks.mark-mid[_ngcontent-%COMP%] {\n  background: #fff8e6;\n  color: #b36a00;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  background: #fff7ed;\n  border: 0.0625rem solid rgba(245, 166, 35, 0.1);\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.selected[_ngcontent-%COMP%] {\n  background: #e8f6ff;\n  border-color: rgba(2, 112, 255, 0.15);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  border-color: var(--bgreen-border);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-correct[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.8125rem;\n  background-color: var(--green-bg);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.875rem;\n}\n\n.descriptive-answers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.875rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-question[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #8c6ad6;\n  background: rgba(140, 106, 214, 0.08);\n  display: inline-block;\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  flex: 0 0 8.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #f39c12;\n  background: #fff;\n  padding: 0.75rem 0.5rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  margin-top: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--theme-2);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--green-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bgreen-border);\n  border-left: 0.1875rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-label[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .student-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-text[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.55;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  padding: 0.625rem;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0b66d0;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .q-feedback[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-review-comments[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem dashed var(--theme-3-border);\n}\n\n.review-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.875rem;\n}\n@media (max-width: 768px) {\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  border-radius: 0.75rem;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.06);\n  transform: translateY(-0.125rem);\n}\n.review-columns[_ngcontent-%COMP%]   .col.missed[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--red-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--bred-border);\n  border-top: 0.1875rem solid var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incorrect[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--orange-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--borange-border);\n  border-top: 0.1875rem solid var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incomplete[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--yellow-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--byellow-border);\n  border-top: 0.1875rem solid var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0.1875rem rgba(0, 0, 0, 0.04);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.red[_ngcontent-%COMP%] {\n  background: var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.orange[_ngcontent-%COMP%] {\n  background: var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.yellow[_ngcontent-%COMP%] {\n  background: var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-2, #374151);\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3, #9CA3AF);\n  font-style: italic;\n  padding: 0.5rem 0;\n}\n\n.review-item[_ngcontent-%COMP%] {\n  background: var(--bg-1, #ffffff);\n  border: 0.0625rem solid rgba(15, 23, 42, 0.08);\n  border-radius: 0.625rem;\n  padding: 0.75rem 0.875rem;\n  margin-bottom: 0.625rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.review-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.review-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(15, 23, 42, 0.14);\n  box-shadow: 0 0.25rem 0.75rem rgba(15, 23, 42, 0.06);\n}\n.review-item[_ngcontent-%COMP%]   .ri-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.review-text-missed[_ngcontent-%COMP%], .review-text-incorrect[_ngcontent-%COMP%], .review-text-incomplete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  width: 100%;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.ri-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n\n.ri-icon[_ngcontent-%COMP%] {\n  width: 1.375rem;\n  height: 1.375rem;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.ri-icon.missed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.ri-icon.incorrect[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.ri-icon.incomplete[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.review-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: #1e293b;\n  font-weight: 500;\n  word-break: break-word;\n  flex: 1;\n}\n.review-text.deleted[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.review-text-history[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.history-entry[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 0.0625rem dashed #e2e8f0;\n}\n.history-entry[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.25rem;\n}\n.history-entry.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.review-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.review-meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  vertical-align: middle;\n  color: #64748b;\n}\n.review-meta[_ngcontent-%COMP%]   .deleted-by[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 500;\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 0.0625rem dashed #e2e8f0;\n  flex-wrap: wrap;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.125rem;\n  margin-bottom: 0.375rem;\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  padding: 0.35rem 0.625rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n  font-size: 0.725rem;\n  line-height: 1.35;\n  color: #475569;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n  transition: all 0.2s ease;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  width: 15px !important;\n  height: 15px !important;\n  line-height: 15px !important;\n  color: #4f46e5 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .editor-name[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date-sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.65rem;\n  margin: 0 0.05rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 400;\n}\n.review-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  border: none;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.16);\n  color: #1d4ed8;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.16);\n  color: #b91c1c;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: rgba(22, 163, 74, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%]:hover {\n  background: rgba(22, 163, 74, 0.16);\n  color: #15803d;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  background: rgba(100, 116, 139, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%]:hover {\n  background: rgba(100, 116, 139, 0.16);\n  color: #475569;\n  text-decoration: none;\n}\n\n.marks-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  min-height: 2.25rem;\n}\n\n.marks-display[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.1875rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.625rem;\n  background: var(--bg-1);\n  box-shadow: 0 0.0625rem 0.125rem rgba(15, 23, 42, 0.04);\n}\n\n.marks-display[_ngcontent-%COMP%]   .q-marks.mark-positive[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-negative[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.5rem;\n  height: 1.75rem;\n  padding: 0 0.5rem;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  border-radius: 0.4375rem;\n}\n\n.marks-divider[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  font-weight: 600;\n}\n\n.edit-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  line-height: 1.75rem !important;\n  border-radius: 0.4375rem !important;\n  color: var(--theme-3-text-2) !important;\n  opacity: 0.72;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.edit-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--button-1) !important;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.0625rem;\n}\n\n.marks-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: min(20rem, 100vw - 4rem);\n  gap: 0.625rem;\n  background: #fff;\n  padding: 0.625rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--button-1);\n  box-shadow: 0 0.125rem 0.5rem rgba(99, 102, 241, 0.15);\n}\n\n.marks-input[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  padding: 0.25rem 0.375rem;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.marks-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n.marks-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .marks-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.marks-max[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 500;\n}\n\n.save-marks-btn[_ngcontent-%COMP%], .cancel-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  line-height: 1 !important;\n  border-radius: 0.4375rem !important;\n  flex: 0 0 1.75rem;\n}\n\n.save-marks-btn[_ngcontent-%COMP%] {\n  color: var(--green-text) !important;\n  background: var(--green-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.save-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.save-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.cancel-marks-btn[_ngcontent-%COMP%] {\n  color: var(--red-text) !important;\n  background: var(--red-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cancel-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.cancel-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.marks-history-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(59, 130, 246, 0.02) 100%);\n  border-radius: 0.75rem;\n  border: 0.0625rem solid rgba(99, 102, 241, 0.1);\n}\n\n.marks-history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(99, 102, 241, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--button-1);\n}\n.marks-history-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.marks-history-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n}\n\n.history-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1.5rem;\n  flex-shrink: 0;\n}\n.history-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 0 0 0.1875rem rgb(255, 255, 255);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  box-shadow: 0 0 0 0.1875rem rgba(16, 185, 129, 0.15), 0 0.125rem 0.375rem rgba(16, 185, 129, 0.25);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.past[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #94a3b8, #64748b);\n  box-shadow: 0 0 0 0.1875rem rgba(148, 163, 184, 0.15);\n}\n.history-indicator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  flex: 1;\n  background: linear-gradient(180deg, rgba(148, 163, 184, 0.4) 0%, rgba(148, 163, 184, 0.1) 100%);\n  margin: 0.25rem 0;\n  min-height: 1rem;\n}\n\n.history-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 0.875rem;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.history-card.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%);\n  border: 0.0625rem solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 0.125rem 0.5rem rgba(16, 185, 129, 0.1);\n}\n.history-card.current[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.375rem 1rem rgba(16, 185, 129, 0.18);\n  transform: translateY(-0.1875rem);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.history-card.past[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.8);\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.history-card.past[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.history-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  margin-bottom: 0.375rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(16, 185, 129, 0.3);\n}\n\n.history-marks[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n}\n.history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.45);\n}\n\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  opacity: 0.6;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.history-card.current[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  color: var(--green-text);\n}\n\n@media (max-width: 55rem) {\n  .page[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem 2rem;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-bottom: 0.625rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 1 1 100%;\n  }\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tab-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-options.two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .user-review-panel[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 0.625rem;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n    margin-top: 0.5rem;\n  }\n  .descriptive-answers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-head-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .q-right[_ngcontent-%COMP%] {\n    margin-left: 3.125rem;\n  }\n}\n.marks-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.marks-reason-label[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.marks-reason-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .marks-reason-error[_ngcontent-%COMP%] {\n  color: var(--red-text);\n}\n\n.marks-reason-error[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n  font-size: 0.75rem;\n  line-height: 1.35;\n}\n\n.marks-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.375rem;\n  min-height: 1.75rem;\n}\n\n.marks-reason-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 5rem;\n  box-sizing: border-box;\n  padding: 0.625rem;\n  border: 0.0625rem solid var(--border-color, #d3d9e2);\n  border-radius: 0.375rem;\n  font: inherit;\n  line-height: 1.4;\n  resize: vertical;\n}\n\n.marks-reason-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color, #267cff);\n  box-shadow: 0 0 0 0.125rem rgba(38, 124, 255, 0.12);\n}\n\n.marks-reason-input[aria-invalid=true][_ngcontent-%COMP%], .marks-reason-input.input-error[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  box-shadow: 0 0 0 0.125rem rgba(220, 53, 69, 0.25) !important;\n}\n\n.history-reason[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  color: rgba(0, 0, 0, 0.68);\n  line-height: 1.4;\n}\n\n@media (max-width: 45rem) {\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0.875rem;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .summary-meta[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    border-radius: 0.625rem;\n    overflow: hidden;\n    border: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: left;\n    border-radius: 0;\n    border: none;\n    border-bottom: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 700;\n    color: var(--theme-3-text-2);\n    margin-right: 0.5rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.manual-check-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 8px;\n  padding: 3px 9px;\n  border: 1px solid #d97706;\n  border-radius: 16px;\n  background: #fff7ed;\n  color: #9a3412;\n  cursor: pointer;\n  font: inherit;\n}\n\n.manual-check-chip.selected[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  font-weight: 600;\n}\n\n.manual-check-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n\n.edit-comment-reason[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 8px;\n}\n\n.review-meta[_ngcontent-%COMP%]   .edit-reason[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n}\n\n.save-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .filter-item.filter-item--full[_ngcontent-%COMP%] {\n  width: 100% !important;\n  flex: 0 0 100% !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnJvbGUvYWRtaW4vZXhhbS1yZXBvcnRzL2V4YW0tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBZEY7O0FBa0JBO0VBQXdELGFBQUE7QUFkeEQ7O0FBaUJBO0VBQVEsNEJBQUE7QUFiUjs7QUFjQTtFQUFnQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsYUFBQTtBQVJ2RDs7QUFTQTtFQUFXLGFBQUE7RUFBZSxlQUFBO0VBQWlCLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixrREFBQTtBQUN4STs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsNkRBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFBMkUsd0JBQUE7QUFHM0U7O0FBRkE7RUFBK0UsZUFBQTtBQU0vRTs7QUFMQTtFQUFnRixpQkFBQTtFQUFtQixpQkFBQTtBQVVuRzs7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBOztFQUVFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtBQWNGOztBQVpBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBZUY7O0FBYkE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0RBQUE7QUFnQkY7O0FBZEE7RUFDRSxxQkFBQTtFQUNBLHlFQUFBO0FBaUJGOztBQWZBO0VBQWdGLGNBQUE7QUFtQmhGOztBQWxCQTtFQUNFLDZCQUFBO0VBQ0EsbUZBQUE7RUFDQSxtQkFBQTtBQXFCRjs7QUFuQkE7RUFDRSxzQkFBQTtFQUNBLHNCQUFBO0FBc0JGOztBQW5CRTtFQUNFLDhCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQ0FBQTtFQUNBLDhCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBc0JKO0FBbkJFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQ0FBQTtBQXFCSjtBQW5CSTtFQUNFLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtFQUNBLDJDQUFBO0FBcUJOO0FBakJFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtBQW1CSjtBQWhCRTtFQUNFLHlCQUFBO0FBa0JKO0FBZkU7RUFDRSw4QkFBQTtFQUNBLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBaUJKOztBQWJBOztFQUVFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSw4QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7QUFnQkY7O0FBZEE7RUFDRSx5QkFBQTtBQWlCRjs7QUFmQTtFQUE0RixhQUFBO0FBbUI1Rjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsNkRBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSxvREFBQTtBQW1CRjs7QUFoQkE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtQkY7QUFqQkU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0ZBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EseUNBQUE7QUFtQko7QUFqQkk7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFtQk47QUFmRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQWlCSjtBQWRFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQWdCSjtBQWRJO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBZ0JOO0FBWkU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQWNKOztBQVRBO0VBQ0UsaUNBQUE7RUFDQSwwRkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0RBQUE7QUFhRjs7QUFYQTtFQUNFLCtGQUFBO0FBY0Y7O0FBWkE7RUFDRSw4RkFBQTtBQWVGOztBQWJBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0FBZ0JGOztBQWRBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFpQkY7O0FBZkE7RUFBWSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsV0FBQTtBQXFCaEQ7O0FBcEJBO0VBQWMsYUFBQTtFQUFlLFdBQUE7RUFBYSxtQkFBQTtBQTBCMUM7O0FBekJBOztFQUVFLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSwyQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQTRCRjtBQTFCRTs7OztFQUVFLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVEQUFBO0FBOEJKO0FBNUJJOzs7O0VBQ0Usd0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7QUFpQ047QUE5Qkk7Ozs7RUFDRSx3QkFBQTtFQUNBLHlCQUFBO0FBbUNOO0FBL0JFOztFQUNFLHdCQUFBO0FBa0NKO0FBL0JFOztFQUNFLHFEQUFBO0FBa0NKO0FBaENJOzs7O0VBRUUseUJBQUE7RUFDQSx5QkFBQTtBQW9DTjtBQWxDTTs7Ozs7OztFQUNFLHdCQUFBO0VBQ0EseUJBQUE7QUEwQ1I7O0FBckNBO0VBQWMsc0NBQUE7RUFBd0Msc0NBQUE7RUFBd0MsZ0NBQUE7RUFBa0MsMkJBQUE7RUFBNkIsc0JBQUE7RUFBd0IscUtBQUE7QUE4Q3JMOztBQTdDQTtFQUFvQiw0Q0FBQTtFQUE4QyxzQ0FBQTtFQUF3Qyw0REFBQTtFQUFtQyxpQ0FBQTtBQW9EN0k7O0FBL0NBO0VBQ0UsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNkRBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EseUZBQUE7RUFDQSwwREFBQTtBQWtERjs7QUEvQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7RUFDQSw2REFBQTtFQUNBLGNBQUE7QUFrREY7O0FBaERBO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBbURGOztBQWpEQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFvREY7O0FBakRBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0FBb0RGOztBQWxEQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBcURGOztBQWpEQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0pBQUE7RUFDQSw0Q0FBQTtBQW9ERjs7QUFsREE7RUFBbUUsd0JBQUE7QUFzRG5FOztBQXJEQTtFQUF1RSxjQUFBO0FBeUR2RTs7QUF4REE7RUFBd0UsbUJBQUE7RUFBcUIsaUJBQUE7QUE2RDdGOztBQTVEQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQStERjs7QUE3REE7O0VBRUUsc0JBQUE7RUFDQSxnQkFBQTtBQWdFRjs7QUE5REE7O0VBRUUsb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpRUY7O0FBL0RBOztFQUMrRSxjQUFBO0FBbUUvRTs7QUFoRUE7RUFDRSxxQkFBQTtFQUNBLHFEQUFBO0FBbUVGOztBQWhFQTtFQUNFLDZCQUFBO0VBQ0EsOENBQUE7RUFDQSxtQkFBQTtBQW1FRjs7QUFqRUE7RUFBb0YsYUFBQTtBQXFFcEY7O0FBbkVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FBc0VGOztBQWxFQTtFQUNFLGdCQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFxRUY7QUFuRUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsaURBQUE7QUFxRUo7QUFuRUk7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EsOENBQUE7QUFxRU47QUFqRUU7O0VBRUUsd0JBQUE7QUFtRUo7O0FBL0RBO0VBQ0UsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQ0FBQTtBQWtFRjtBQWhFRTs7RUFFRSx3QkFBQTtBQWtFSjs7QUE5REE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBaUVGO0FBL0RFO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFpRUo7O0FBNURBO0VBQW9DLG1CQUFBO0FBZ0VwQzs7QUE5REE7RUFDRSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0Q0FBQTtFQUNBLDZEQUFBO0VBQ0EsY0FBQTtBQWlFRjs7QUEvREE7RUFDRSxzQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUtBQUE7QUFrRUY7O0FBaEVBO0VBQ0UsNENBQUE7RUFDQSw0REFBQTtFQUNBLGlDQUFBO0FBbUVGOztBQWpFQTtFQUNFLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLG1IQUFBO0FBb0VGOztBQWxFQTtFQUNFLDhCQUFBO0VBQ0EsZ0NBQUE7QUFxRUY7O0FBbkVBOztFQUM2QixlQUFBO0VBQWlCLFdBQUE7RUFBYSxZQUFBO0VBQWMscUJBQUE7QUEwRXpFOztBQXhFQTtFQUFxQjtJQUFPLFVBQUE7SUFBWSw2QkFBQTtFQThFdEM7RUE5RXVFO0lBQUssVUFBQTtJQUFZLHdCQUFBO0VBa0Z4RjtBQUNGO0FBbEZBO0VBQXVCO0lBQU8sVUFBQTtJQUFZLGdDQUFBO0VBdUZ4QztFQXZGNEU7SUFBSyxVQUFBO0lBQVksd0JBQUE7RUEyRjdGO0FBQ0Y7QUF6RkE7RUFBYSxnQkFBQTtFQUFrQiwrQkFBQTtFQUFpQyxzQkEvaEJ2RDtFQStoQitFLGlEQTdoQjVFO0VBNmhCb0csd0dBQUE7RUFBNEQsNEJBQUE7QUFpRzVLOztBQWhHQTtFQUFtQixnREEzaEJKO0VBMmhCK0Isc0NBQUE7QUFxRzlDOztBQXBHQTtFQUFnQiw0QkFBQTtFQUE4QiwyQkFBQTtBQXlHOUM7O0FBeEdBO0VBQWEsV0FBQTtBQTRHYjs7QUEzR0E7RUFBd0IsV0FBQTtBQStHeEI7O0FBNUdBO0VBQWlELHFFQUFBO0VBQXNFLG9EQUFBO0VBQXFELGlCQUFBO0FBa0g1Szs7QUFqSEE7RUFBaUQsZ0JBQUE7RUFBaUIsYUFBQTtBQXNIbEU7O0FBckhBO0VBQXNDLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLGtDQUFBO0VBQW1DLGlHQUFBO0VBQW9ELHNCQUFBO0FBZ0luTzs7QUEvSEE7RUFBNEMsdUJBQUE7RUFBd0IsNEJBQUE7QUFvSXBFOztBQW5JQTtFQUE4Qyx1QkFBQTtFQUF3QixzQkFBQTtFQUF1QiwrQ0FBQTtBQXlJN0Y7O0FBeElBO0VBQW1FLHNCQUFBO0FBNEluRTs7QUEzSUE7RUFBa0QsZ0JBQUE7RUFBaUIsc0JBQUE7RUFBdUIsbURBQUE7QUFpSjFGOztBQWhKQTtFQUF1RCx1QkFBQTtBQW9KdkQ7O0FBbkpBO0VBQW9FLDZCQUFBO0VBQThCLHNCQUFBO0FBd0psRzs7QUFySkE7RUFBNEQsdUJBQUE7RUFBd0Isb0RBQUE7RUFBcUQsa0JBQUE7QUEySnpJOztBQTFKQTtFQUE0RCxrQkFBQTtFQUFtQixZQUFBO0FBK0ovRTs7QUE5SkE7RUFBaUQsNEJBQUE7RUFBNkIsZ0JBQUE7RUFBaUIsb0JBQUE7RUFBcUIsZUFBQTtFQUFnQixrQkFBQTtFQUFtQixnQ0FBQTtFQUFpQyxpR0FBQTtBQXdLeEw7O0FBdktBO0VBQXVELHVCQUFBO0VBQXdCLDRCQUFBO0FBNEsvRTs7QUEzS0E7RUFBeUQsdUJBQUE7RUFBd0Isc0JBQUE7QUFnTGpGOztBQS9LQTtFQUE4RSxzQkFBQTtBQW1MOUU7O0FBbExBO0VBQTZELGdCQUFBO0VBQWlCLHNCQUFBO0VBQXVCLG1EQUFBO0FBd0xyRzs7QUF2TEE7RUFBK0UsNkJBQUE7RUFBOEIsc0JBQUE7QUE0TDdHOztBQXpMQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUE0TEY7O0FBekxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQkFBQTtFQUNBLCtGQUFBO0VBQ0EseUNBQUE7RUFDQSx1QkFBQTtFQUNBLG1EQUFBO0VBQ0EsdURBQUE7QUE0TEY7QUExTEU7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQ0FBQTtBQTRMSjtBQTFMSTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUE0TE47QUF6TEk7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUEyTE47QUF4TEk7RUFDRSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUEwTE47O0FBckxBO0VBQ0UsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLGtDQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQ0FBQTtFQUNBLHVCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsMkNBQUE7RUFDQSwyREFBQTtFQUNBLGdEQUFBO0VBQ0EsNkJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxpREFBQTtFQUNBLHlDQUFBO0VBQ0EsY0FBQTtBQXdMRjtBQXRMRTtFQUNFLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtBQXdMSjtBQXJMRTtFQUNFLCtCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLGlDQUFBO0VBQ0EscUNBQUE7RUFDQSxtREFBQTtFQUNBLCtCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLG9CQUFBO0FBdUxKO0FBcExFO0VBQ0UsOENBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0FBc0xKO0FBcExJO0VBQ0UseUJBQUE7QUFzTE47O0FBakxBO0VBQXVCLGFBQUE7RUFBYyxnREFBQTtFQUFpRCxZQUFBO0VBQWEsc0JBQUE7RUFBdUIscUVBQUE7RUFBc0UsOENBQUE7QUEwTGhNOztBQXpMQTtFQUEwQix5QkFBQTtFQUEwQix1QkFBQTtFQUF3QixtQkFBQTtBQStMNUU7O0FBOUxBO0VBQWdCLGFBQUE7RUFBYyxtQkFBQTtFQUFvQixhQUFBO0VBQWMsWUFBQTtFQUFhLHdCQUFBO0VBQXlCLHVDQUFBO0VBQXdDLHNCQUFBO0VBQXVCLHFFQUFBO0VBQXNFLHVEQUFBO0VBQXdELDZKQUFBO0FBMk1uUzs7QUExTUE7RUFBc0IsZ0NBQUE7RUFBaUMsNkJBQUE7RUFBOEIsbURBQUE7QUFnTnJGOztBQS9NQTtFQUFnQixjQUFBO0VBQWUsZUFBQTtFQUFnQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsdUJBQUE7RUFBd0IsY0FBQTtFQUFlLHVCQUFBO0VBQXdCLHFDQUFBO0VBQXNDLHNCQUFBO0VBQXVCLDREQUFBO0FBNE43TTs7QUEzTkE7RUFBc0Isc0JBQUE7QUErTnRCOztBQTlOQTtFQUF5QixtQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0FBb083RDs7QUFsT0E7RUFBMEIsbUNBQUE7RUFBaUMsY0FBQTtBQXVPM0Q7O0FBdE9BO0VBQXNCLG1DQUFBO0VBQWlDLGNBQUE7QUEyT3ZEOztBQTFPQTtFQUF1QixtQ0FBQTtFQUFpQyxjQUFBO0FBK094RDs7QUE5T0E7RUFBc0IsbUNBQUE7RUFBaUMsY0FBQTtBQW1QdkQ7O0FBbFBBO0VBQTRCLG1DQUFBO0VBQWlDLGNBQUE7QUF1UDdEOztBQXRQQTtFQUEyQixtQ0FBQTtFQUFpQyxjQUFBO0FBMlA1RDs7QUExUEE7RUFBMEIsbUNBQUE7RUFBaUMsY0FBQTtBQStQM0Q7O0FBOVBBO0VBQTBCLGtDQUFBO0VBQWdDLGNBQUE7QUFtUTFEOztBQWxRQTtFQUFnQixhQUFBO0VBQWMsc0JBQUE7RUFBdUIsYUFBQTtFQUFjLFlBQUE7QUF5UW5FOztBQXhRQTtFQUFpQix5QkFBQTtFQUEwQixnQkFBQTtFQUFpQixzQkFBQTtFQUF1Qix5QkFBQTtFQUEwQiw0QkFBQTtBQWdSN0c7O0FBL1FBO0VBQWlCLG1EQUFBO0VBQW9ELGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLHVCQUFBO0VBQXdCLDRCQUFBO0FBdVIvSDs7QUF0UkE7RUFBZ0IsMEJBQUE7RUFBMkIsZ0JBQUE7RUFBaUIsNEJBQUE7RUFBNkIsbUJBQUE7RUFBb0IsZ0JBQUE7RUFBaUIsdUJBQUE7QUErUjlIOztBQTFSQTtFQUFlLGFBQUE7RUFBYyw4QkFBQTtFQUErQixtQkFBQTtFQUFvQixTQUFBO0VBQVUsMkJBQUE7RUFBNEIscUVBQUE7RUFBc0UsOENBQUE7RUFBK0MsU0FBQTtBQXFTM087O0FBbFNBO0VBQXVCLE9BQUE7RUFBUSxnQkFBQTtBQXVTL0I7O0FBdFNBO0VBQ0UsV0FBQTtBQXlTRjs7QUF2U0E7RUFBbUUscUVBQUE7RUFBc0UsdUNBQUE7RUFBd0Msc0JBQUE7RUFBdUIsa0JBQUE7RUFBbUIsaURBQUE7RUFBMkIsbURBQUE7QUFnVHRQOztBQS9TQTtFQUE0RCx3QkFBQTtBQW1UNUQ7O0FBbFRBO0VBQWdFLGdCQUFBO0FBc1RoRTs7QUFyVEE7RUFBaUUsbUJBQUE7RUFBcUIsaUJBQUE7QUEwVHRGOztBQXpUQTtFQUErRCxjQUFBO0VBQWUsb0JBQUE7RUFBcUIsNEJBQUE7QUErVG5HOztBQTlUQTtFQUE2QyxvQkFBQTtFQUFxQixnQkFBQTtFQUFpQiw0QkFBQTtBQW9VbkY7O0FBblVBO0VBQTBELDRCQUFBO0FBdVUxRDs7QUF0VUE7RUFBMkQsNEJBQUE7RUFBNkIsb0JBQUE7RUFBcUIsbUJBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtFQUFpQixpREFBQTtBQStVbEs7O0FBOVVBO0VBQW1FLDZCQUFBO0VBQThCLHNEQUFBO0FBbVZqRzs7QUFsVkE7RUFBMkQsc0JBQUE7QUFzVjNEOztBQXJWQTs7RUFFRSw2QkFBQTtFQUNBLCtDQUFBO0VBQ0EsdUJBQUE7QUF3VkY7O0FBdFZBO0VBQ0Usc0JBQUE7QUF5VkY7O0FBdlZBO0VBQTZFLGFBQUE7QUEyVjdFOztBQXhWQTtFQUF5QixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsV0FBQTtBQThWM0Q7O0FBN1ZBO0VBQTJCLGFBQUE7RUFBYyxhQUFBO0VBQWMsbUJBQUE7QUFtV3ZEOztBQWxXQTtFQUFrQyxlQUFBO0VBQWdCLG1CQUFBO0VBQW9CLGtCQUFBO0VBQW1CLGdCQUFBO0VBQWlCLHVCQUFBO0VBQXdCLHVCQUFBO0VBQXdCLG9CQUFBO0VBQXFCLG1CQUFBO0VBQW9CLHVCQUFBO0VBQXdCLGFBQUE7RUFBYyxpREFBQTtBQWdYek87O0FBL1dBO0VBQTJDLGVBQUE7RUFBZ0IsV0FBQTtFQUFZLFlBQUE7QUFxWHZFOztBQW5YQTs7RUFFRSxxRUFBQTtFQUNBLDRCQUFBO0VBQ0EsdUNBQUE7RUFDQSxtREFBQTtBQXNYRjs7QUFwWEE7O0VBRUUsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0RBQUE7QUF1WEY7O0FBcFhBO0VBQ0UsbUZBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxzREFBQTtBQXVYRjs7QUFyWEE7RUFDRSxtRkFBQTtFQUNBLGlEQUFBO0FBd1hGOztBQXBYQTtFQUNFLDJCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBdVhGO0FBclhFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBdVhKO0FBclhFO0VBQTZCLCtCQUFBO0VBQThCLHNCQUFBO0FBeVg3RDtBQXhYRTtFQUE2QixtQkFBQTtFQUFxQixzQkFBQTtFQUF3Qiw2QkFBQTtFQUErQiw0QkFBQTtBQThYM0c7QUE3WEU7RUFBbUMsbUJBQUE7RUFBcUIsNkJBQUE7RUFBK0IsNEJBQUE7QUFrWXpGOztBQS9YQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUNBQUE7RUFDQSxxRUFBQTtFQUNBLG9EQUFBO0FBa1lGOztBQWhZQTtFQUFpQixXQUFBO0VBQWEsb0NBQUE7RUFBc0MsNEJBQUE7RUFBOEIscUJBQUE7QUF1WWxHOztBQXRZQTs7OztFQUd3QywyQkFBQTtFQUE2QixpQkFBQTtFQUFtQixzQkFBQTtFQUF3QixzREFBQTtFQUF3RCxnQkFBQTtFQUFrQixvQkFBQTtFQUFzQix5QkFBQTtFQUEyQixzQkFBQTtFQUF3QixtREFBQTtFQUFxRCx1QkFBQTtFQUF5QixxQ0FBQTtFQUF1QyxtQkFBQTtBQXFaeFg7O0FBcFpBOztFQUNvRCw0Q0FBQTtBQXdacEQ7O0FBdlpBOztFQUNpQyx3QkFBQTtFQUEwQixvQkFBQTtFQUFzQixxQ0FBQTtFQUF1QyxzQ0FBQTtFQUF3QyxzQkFBQTtFQUF3QixzR0FBQTtBQWdheEw7O0FBL1pBOztFQUNtRCxvQ0FBQTtBQW1hbkQ7O0FBbGFBO0VBQWdCLHNCQUFBO0VBQXdCLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IseUJBQUE7RUFBMkIsdUJBQUE7RUFBeUIsdUdBQUE7RUFBNkQscUJBQUE7QUE0YTVMOztBQTNhQTtFQUFzQixhQUFBO0VBQWUsMEJBQUE7RUFBNEIsK0JBQUE7RUFBaUMsZ0NBQUE7QUFrYmxHOztBQS9hQTtFQUFnQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsYUFBQTtFQUFjLGVBQUE7QUFzYmhFOztBQXJiQTtFQUFrQixXQUFBO0VBQVksWUFBQTtFQUFhLHFCQUFBO0VBQXNCLGFBQUE7RUFBYyxtQkFBQTtFQUFvQix1QkFBQTtFQUF3QixnQkFBQTtFQUFpQixvQkFBQTtFQUFxQixXQUFBO0VBQVksY0FBQTtFQUFlLDZEQUFBO0FBbWM1TDs7QUFsY0E7RUFBaUIsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLGFBQUE7RUFBYyxlQUFBO0FBeWNqRTs7QUF4Y0E7RUFBbUIsV0FBQTtFQUFZLFlBQUE7RUFBYSxxQkFBQTtFQUFzQixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsdUJBQUE7RUFBd0IsZ0JBQUE7RUFBaUIsb0JBQUE7RUFBcUIsV0FBQTtFQUFZLGNBQUE7RUFBZSw2REFBQTtBQXNkN0w7O0FBbmRBO0VBQWdCLGdCQUFBO0VBQWlCLG9CQUFBO0VBQXFCLDRCQUFBO0FBeWR0RDs7QUF4ZEE7RUFBYSw0QkFBQTtFQUE2QixrQkFBQTtBQTZkMUM7O0FBMWRBO0VBQWEsb0JBQUE7RUFBcUIsbUJBQUE7RUFBb0IseUJBQUE7RUFBMEIsdUJBQUE7RUFBd0Isa0JBQUE7RUFBbUIsZ0JBQUE7RUFBaUIsb0NBQUE7RUFBa0MsY0FBQTtBQXFlOUs7O0FBbGVBO0VBQWlCLG9CQUFBO0VBQXFCLGdCQUFBO0FBdWV0Qzs7QUF0ZUE7RUFBZ0MseUJBQUE7RUFBMEIsZ0JBQUE7QUEyZTFEOztBQXhlQTtFQUFlLG9CQUFBO0VBQXFCLG1CQUFBO0VBQW9CLDJCQUFBO0VBQTRCLG1CQUFBO0VBQW9CLG9CQUFBO0VBQXFCLGdCQUFBO0VBQWlCLHNCQUFBO0VBQXVCLHlCQUFBO0VBQTBCLCtCQUFBO0VBQTZCLDRCQUFBO0FBcWY1Tjs7QUFwZkE7RUFBMkIsMkJBQUE7RUFBNEIsd0JBQUE7RUFBeUIsNENBQUE7QUEwZmhGOztBQXpmQTtFQUEyQix5QkFBQTtFQUEwQixzQkFBQTtFQUF1QiwwQ0FBQTtBQStmNUU7O0FBNWZBO0VBQXFCLHFCQUFBO0VBQXNCLGFBQUE7RUFBYyxzQkFBQTtFQUF1QixZQUFBO0FBbWdCaEY7O0FBbGdCQTtFQUFpQyxpQkFBQTtFQUFtQixxQ0FBQTtFQUE2QywyQkFBQTtFQUE0QiwyQkFBQTtFQUE0Qix1QkFBQTtFQUF3QiwrRkE3ekJySztFQTZ6QjRMLDZDQUFBO0FBNGdCeE07O0FBM2dCQTs7RUFDdUUsMkJBQUE7RUFBNkIsMkJBQUE7QUFnaEJwRzs7QUE3Z0JBO0VBQVMsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLHVCQUFBO0VBQXdCLFNBQUE7RUFBVSx5QkFBQTtFQUEwQixpREFBQTtFQUFrRCxvQkFBQTtFQUFxQixnQkFBQTtFQUFpQixzQkFBQTtFQUF1QixxRUFBQTtFQUFzRSw0QkFBQTtBQTJoQjVSOztBQTFoQkE7RUFBYyx3QkFBQTtFQUF5Qix1QkFBQTtFQUF3Qix1QkFBQTtFQUF3Qiw2Q0FBQTtBQWlpQnZGOztBQWhpQkE7RUFBZ0IsZ0NBQUE7RUFBaUMsMkJBQUE7RUFBNEIsaUNBQUE7RUFBa0MsbUtBQUE7QUF1aUIvRzs7QUF0aUJBO0VBQXNDLDREQUFBO0VBQWtDLGlDQUFBO0VBQWtDLGtDQUFBO0FBNGlCMUc7O0FBM2lCQTtFQUEwQixZQUFBO0FBK2lCMUI7O0FBN2lCQTtFQUNFO0lBQUssNEJBQUE7RUFpakJMO0VBaGpCQTtJQUFPLDJCQUFBO0VBbWpCUDtBQUNGO0FBampCQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZHQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQW1qQkY7O0FBL2lCQTtFQUFzQixxQkFBQTtFQUF1QixrQkFBQTtFQUFvQixzQkFBQTtFQUF3QixlQUFBO0VBQWlCLDBCQUFBO0VBQTRCLCtCQUFBO0VBQWlDLGdCQUFBO0VBQWtCLHVHQUFBO0VBQTZELHFCQUFBO0FBMmpCdFA7O0FBMWpCQTtFQUE0QixZQUFBO0VBQWMsK0JBQUE7QUErakIxQzs7QUE5akJBO0VBQWlCLHNCQUFBO0VBQXdCLDBCQUFBO0VBQTRCLCtCQUFBO0VBQWlDLGVBQUE7RUFBaUIsZ0JBQUE7RUFBa0IsOEZBQUE7QUF1a0J6STs7QUF0a0JBO0VBQXVCLGFBQUE7QUEwa0J2Qjs7QUF6a0JBO0VBQWtCLHNCQUFBO0VBQXdCLGdCQUFBO0VBQWtCLHFCQUFBO0VBQXVCLHVHQUFBO0VBQTZELHFCQUFBO0FBaWxCaEo7O0FBaGxCQTtFQUF3QixnQ0FBQTtBQW9sQnhCOztBQW5sQkE7RUFBUyw0QkFBQTtFQUE4QixrQkFBQTtBQXdsQnZDOztBQXJsQkE7RUFBb0I7SUFBTyxVQUFBO0VBMGxCekI7RUExbEJzQztJQUFLLFVBQUE7RUE2bEIzQztBQUNGO0FBN2xCQTtFQUFxQjtJQUFPLFVBQUE7SUFBWSwwQ0FBQTtFQWttQnRDO0VBbG1CbUY7SUFBSyxVQUFBO0lBQVksaUNBQUE7RUFzbUJwRztBQUNGO0FBdG1CQTtFQUF5QjtJQUFXLHNEQUFBO0VBMG1CbEM7RUExbUI0RjtJQUFNLG9EQUFBO0VBNm1CbEc7QUFDRjtBQTVtQkE7RUFBMEIsZUFBQTtFQUFpQixRQUFBO0VBQVUsc0dBQUE7RUFBK0osNkNBQUE7RUFBK0MsY0FBQTtFQUFnQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZUFBQTtFQUFpQixvREFBQTtBQXluQmpXOztBQXZuQkE7O0VBQ2tCLGtCQUFBO0VBQW9CLHVCQUFBO0VBQXlCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLDBEQUFBO0VBQXVDLFlBQUE7QUFrb0IvSzs7QUFqb0JBOztFQUN3QixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsZ0JBQUE7RUFBa0IscUVBQUE7RUFBdUUsNkNBQUE7RUFBK0Msc0JBQUE7RUFBd0IseUZBQUE7RUFBMkYsZ0JBQUE7QUE0b0IxVDs7QUF6b0JBO0VBQWdCLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxtQkFBQTtFQUFvQiw4QkFBQTtFQUErQixTQUFBO0VBQVUsdUJBQUE7RUFBd0Isb0RBQUE7RUFBcUQscUVBQUE7RUFBc0UsY0FBQTtBQXFwQmpROztBQXBwQkE7RUFBd0IsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLE9BQUE7RUFBUSxNQUFBO0VBQU8sU0FBQTtFQUFVLGdCQUFBO0VBQWlCLGlFQUFBO0VBQWtFLHNDQUFBO0FBK3BCbks7O0FBOXBCQTtFQUE2QixhQUFBO0VBQWMsbUJBQUE7RUFBb0IsYUFBQTtFQUFjLFlBQUE7RUFBYSxPQUFBO0FBc3FCMUY7O0FBcnFCQTtFQUE2QixhQUFBO0VBQWMsc0JBQUE7RUFBdUIsY0FBQTtFQUFlLFlBQUE7QUE0cUJqRjs7QUEzcUJBO0VBQTZCLFdBQUE7RUFBWSxZQUFBO0VBQWEsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLHVCQUFBO0VBQXdCLGNBQUE7RUFBZSx1QkFBQTtFQUF3QixtRkFBQTtFQUFvRixzQkFBQTtFQUF1QixtR0FBQTtBQXdyQmxROztBQXZyQkE7RUFBc0MsbUJBQUE7RUFBb0IsZUFBQTtFQUFnQixnQkFBQTtBQTZyQjFFOztBQTVyQkE7RUFBbUIsU0FBQTtFQUFVLG9CQUFBO0VBQXFCLGdCQUFBO0VBQWlCLHVCQUFBO0VBQXdCLDRCQUFBO0FBb3NCM0Y7O0FBbnNCQTtFQUEyQixvQkFBQTtFQUFxQiw0QkFBQTtFQUE2QixhQUFBO0VBQWMsZ0JBQUE7QUEwc0IzRjs7QUF6c0JBOztFQUVFLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtDQUFBO0VBQ0Esd0RBQUE7RUFDQSx1Q0FBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxvREFBQTtFQUNBLDREQUFBO0VBQ0EsMEJBQUE7QUE0c0JGOztBQXpzQkE7O0VBRUUsd0JBQUE7QUE0c0JGOztBQXpzQkE7O0VBRUUseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEdBQUE7QUE0c0JGOztBQXpzQkE7O0VBRUUsOENBQUE7RUFDQSwrQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0VBQUE7RUFDQSxpQ0FBQTtBQTRzQkY7O0FBenNCQTs7RUFFRSx5QkFBQTtFQUNBLG1DQUFBO0FBNHNCRjs7QUF2c0JBO0VBQW1DLDBCQUFBO0VBQTJCLGNBQUE7RUFBZSxxRUFBQTtBQTZzQjdFOztBQTVzQkE7RUFBdUMsZ0JBQUE7RUFBaUIsdUJBQUE7RUFBd0Isb0JBQUE7RUFBcUIsdUJBQUE7RUFBd0IsNEJBQUE7RUFBNkIsc0JBQUE7RUFBdUIsNkNBQUE7RUFBOEMsdUJBQUE7RUFBd0IsdUJBQUE7QUF3dEJ2UDs7QUF2dEJBO0VBQW9DLG9CQUFBO0VBQXFCLGVBQUE7RUFBZ0IsNEJBQUE7QUE2dEJ6RTs7QUExdEJBO0VBQXNDLFdBQUE7RUFBWSx5QkFBQTtFQUEwQix3QkFBQTtFQUF5QixjQUFBO0FBaXVCckc7O0FBaHVCQTtFQUErQyxrQkFBQTtFQUFtQixxQkFBQTtFQUFzQixnQkFBQTtFQUFpQixrQkFBQTtFQUFtQix5QkFBQTtFQUEwQixzQkFBQTtFQUF1Qiw0QkFBQTtFQUE2QixrQ0FBQTtBQTJ1QjFNOztBQTF1QkE7RUFBMkQsb0NBQUE7QUE4dUIzRDs7QUE3dUJBO0VBQTBELG9DQUFBO0FBaXZCMUQ7O0FBaHZCQTtFQUErQyx1QkFBQTtBQW92Qi9DOztBQW52QkE7RUFBK0Msc0JBQUE7RUFBdUIsc0JBQUE7RUFBdUIsa0JBQUE7RUFBbUIsdUJBQUE7RUFBd0IsNkNBQUE7QUEydkJ4STs7QUExdkJBO0VBQTJELG9DQUFBO0VBQXFDLGdCQUFBO0VBQWlCLGdCQUFBO0VBQWlCLDRCQUFBO0FBaXdCbEk7O0FBaHdCQTtFQUEwRCxvQ0FBQTtBQW93QjFEOztBQW53QkE7RUFBa0Msc0JBQUE7RUFBdUIsZ0JBQUE7RUFBaUIsc0RBQUE7QUF5d0IxRTs7QUF4d0JBO0VBQThDLGFBQUE7RUFBYywwQkFBQTtFQUEyQiwrQkFBQTtBQTh3QnZGOztBQTN3QkE7O0VBQ21CLGFBQUE7RUFBYyx5QkFBQTtFQUEwQixXQUFBO0VBQVksMEJBQUE7RUFBMkIsaURBQUE7RUFBa0QscUVBQUE7QUFveEJwSjs7QUFueEJBO0VBQTBCLGtDQUFBO0VBQW1DLDJCQUFBO0VBQTRCLGlLQUFBO0FBeXhCekY7O0FBeHhCQTtFQUFnQyxpQ0FBQTtFQUFrQyxpRUFBQTtBQTZ4QmxFOztBQTF4QkE7RUFBbUUsYUFBQTtFQUFjLHNCQUFBO0VBQXVCLFlBQUE7QUFneUJ4Rzs7QUEveEJBO0VBQWlCLGdCQUFBO0VBQWlCLFVBQUE7RUFBVyxTQUFBO0VBQVUsYUFBQTtFQUFjLHNCQUFBO0VBQXVCLFlBQUE7QUF3eUI1Rjs7QUF2eUJBO0VBQW9CLHNCQUFBO0VBQXVCLHFFQUFBO0VBQXNFLHVCQUFBO0VBQXdCLGFBQUE7RUFBYyw4QkFBQTtFQUErQixtQkFBQTtFQUFvQixZQUFBO0VBQWEsNkNBQUE7RUFBOEMsNkpBQUE7QUFtekJyUTs7QUFsekJBO0VBQTBCLGlEQUFBO0VBQWtELGdDQUFBO0VBQWlDLDZCQUFBO0FBd3pCN0c7O0FBdnpCQTtFQUFhLGdCQUFBO0VBQWlCLDRCQUFBO0VBQTZCLHVCQUFBO0FBNnpCM0Q7O0FBNXpCQTtFQUFZLG9CQUFBO0VBQXFCLDRCQUFBO0FBaTBCakM7O0FBaDBCQTtFQUFpQiwyQkFBQTtFQUE2QiwyQkFBQTtFQUE2Qix5QkFBQTtFQUEyQix1QkFBQTtFQUF5QixxQkFBQTtFQUF1QixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixxR0FBQTtBQTIwQjlMOztBQTEwQkE7RUFBdUIsWUFBQTtFQUFjLCtGQWw5QnpCO0FBaXlEWjs7QUE1MEJBOzs7RUFFaUMsY0FBQTtBQWcxQmpDOztBQS8wQkE7OztFQUVvRCxnQkFBQTtFQUFrQixlQUFBO0FBbzFCdEU7O0FBbjFCQTs7O0VBRTBELHVCQUFBO0FBdTFCMUQ7O0FBdDFCQTs7O0VBRTBELGlDQUFBO0VBQW1DLHdCQUFBO0FBMjFCN0Y7O0FBMTFCQTs7O0VBRWdFLGlDQUFBO0FBODFCaEU7O0FBMzFCQTtFQUFxQix1QkFBQTtFQUF5QixnQkFBQTtFQUFrQixZQUFBO0FBaTJCaEU7O0FBaDJCQTtFQUEyQixhQUFBO0VBQWMsc0JBQUE7RUFBdUIsZ0JBQUE7RUFBaUIsc0JBQUE7RUFBdUIscUVBQUE7RUFBc0UseUZBQUE7RUFBMEYsNkNBQUE7RUFBOEMsZ0JBQUE7QUEyMkJ0VDs7QUExMkJBO0VBQW1DLGtCQUFBO0VBQW1CLGFBQUE7RUFBYyxtQkFBQTtFQUFvQiw4QkFBQTtFQUErQixTQUFBO0VBQVUsdUJBQUE7RUFBd0Isb0RBQUE7RUFBcUQscUVBQUE7RUFBc0UsY0FBQTtBQXMzQnBSOztBQXIzQkE7RUFBMkMsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLE9BQUE7RUFBUSxNQUFBO0VBQU8sU0FBQTtFQUFVLGdCQUFBO0VBQWlCLGlFQUFBO0VBQWtFLHNDQUFBO0FBZzRCdEw7O0FBLzNCQTtFQUFnRCxhQUFBO0VBQWMsc0JBQUE7RUFBdUIsV0FBQTtFQUFZLE9BQUE7RUFBUSxZQUFBO0FBdTRCekc7O0FBdDRCQTtFQUFnRCxXQUFBO0VBQVksWUFBQTtFQUFhLGFBQUE7RUFBYyxtQkFBQTtFQUFvQix1QkFBQTtFQUF3Qix1QkFBQTtFQUF3QixtRkFBQTtFQUFvRixzQkFBQTtFQUF1QixtR0FBQTtFQUFvRyxjQUFBO0FBbTVCMVc7O0FBbDVCQTtFQUF5RCxtQkFBQTtFQUFvQixlQUFBO0VBQWdCLGdCQUFBO0FBdzVCN0Y7O0FBdjVCQTtFQUFzQyxTQUFBO0VBQVUsbUJBQUE7RUFBb0IsZ0JBQUE7RUFBaUIsdUJBQUE7RUFBd0IsNEJBQUE7RUFBNkIsYUFBQTtFQUFjLG1CQUFBO0VBQW9CLFdBQUE7QUFrNkI1Szs7QUFqNkJBO0VBQXNDLFNBQUE7RUFBVSxvQkFBQTtFQUFxQixnQkFBQTtFQUFpQiw0QkFBQTtFQUE2QixvQkFBQTtFQUFxQixtQkFBQTtFQUFvQixXQUFBO0VBQVksZUFBQTtBQTQ2QnhLOztBQTM2QkE7RUFBMEMsNEJBQUE7RUFBNkIsZ0JBQUE7RUFBaUIseUJBQUE7RUFBMEIscUJBQUE7RUFBc0IsdUJBQUE7RUFBd0IsNkNBQUE7RUFBOEMsb0JBQUE7RUFBcUIsc0JBQUE7QUFzN0JuTzs7QUFyN0JBO0VBQTJDLGdCQUFBO0VBQWlCLHdCQUFBO0VBQXlCLHNCQUFBO0VBQXVCLGtCQUFBO0VBQW1CLHNCQUFBO0VBQXVCLHlCQUFBO0VBQTBCLG9EQUFBO0FBKzdCaEw7O0FBOTdCQTtFQUFnRCwyQkFBQTtFQUE2QiwyQkFBQTtBQW04QjdFOztBQWw4QkE7RUFBZ0QsV0FBQTtFQUFhLGlDQUFBO0FBdThCN0Q7O0FBdDhCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDZDQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsK0xBQUE7RUFDQSxpQkFBQTtBQXk4QkY7O0FBdjhCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUEwOEJGOztBQXg4QkE7RUFDRSxxQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSx5REFBQTtBQTI4QkY7O0FBejhCQTtFQUNFLHVDQUFBO0VBQ0Esd0JBQUE7QUE0OEJGOztBQTE4QkE7RUFBZ0MsNEJBQUE7RUFBOEIsbUJBQUE7QUErOEI5RDs7QUE5OEJBO0VBQWlDLE9BQUE7RUFBUSxjQUFBO0VBQWUsOEJBQUE7RUFBZ0MsZUFBQTtBQXE5QnhGOztBQWw5QkE7RUFBa0IsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLGFBQUE7RUFBZSxrQkFBQTtFQUFvQixrREFBQTtFQUFpRCx1QkFBQTtBQTI5QjdJOztBQTE5QkE7RUFBcUIsU0FBQTtFQUFXLGVBQUE7RUFBaUIsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLFlBQUE7RUFBYyxnQkFBQTtFQUFrQix1QkFBQTtBQW8rQnJIOztBQW4rQkE7RUFBK0IsbUJBQUE7RUFBcUIsY0FBQTtFQUFnQix5QkFBQTtFQUEyQixzQkEzaEN0RjtFQTJoQzhHLGdCQUFBO0VBQWtCLG1CQUFBO0VBQXFCLGlCQUFBO0VBQW1CLHNCQUFBO0FBOCtCakw7O0FBNytCQTtFQUFnQixhQUFBO0VBQWUsWUFBQTtFQUFjLDBCQUFBO0VBQXlCLG9CQUFBO0FBby9CdEU7O0FBai9CQTtFQUFrQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsU0FBQTtFQUFXLGtCQUFBO0FBdy9CcEU7O0FBdi9CQTtFQUF3QixrQkFBQTtFQUFtQiw2Q0FBQTtFQUErQyx1QkFBQTtFQUF5Qix1QkFBQTtFQUF5Qix1QkFBQTtFQUF5Qiw2SkFBQTtFQUE0RixzREFBQTtFQUFxRCxnQkFBQTtBQWtnQ3RUOztBQWpnQ0E7RUFBZ0MsV0FBQTtFQUFZLGtCQUFBO0VBQW1CLE9BQUE7RUFBUSxNQUFBO0VBQU8sU0FBQTtFQUFVLGdCQUFBO0VBQWlCLHFGQUFBO0FBMmdDekc7O0FBMWdDQTtFQUE4QixvREFBQTtFQUFtRCxnQ0FBQTtFQUFrQyxzQ0FBQTtBQWdoQ25IOztBQS9nQ0E7RUFBZ0MsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsNEJBQUE7QUFxaENyRTs7QUFwaENBO0VBQW9DLFlBQUE7RUFBYyxtQkFBQTtFQUFxQixzQkFBQTtFQUF3Qix3QkFBQTtFQUEwQixxQkFBQTtFQUF1QixnQkFBQTtFQUFrQixrQkFBQTtBQThoQ2xLOztBQTVoQ0E7RUFBYyxhQUFBO0VBQWUsOEJBQUE7RUFBZ0MsdUJBQUE7RUFBeUIsU0FBQTtFQUFXLG1CQUFBO0VBQXFCLG9CQUFBO0VBQXNCLHFEQUFBO0FBc2lDNUk7O0FBcmlDQTtFQUFVLGFBQUE7RUFBZSxhQUFBO0VBQWUsdUJBQUE7RUFBeUIsT0FBQTtFQUFTLFlBQUE7QUE2aUMxRTs7QUE1aUNBO0VBQVUsYUFBQTtFQUFlLFdBQUE7RUFBYSxPQUFBO0VBQVMsWUFBQTtBQW1qQy9DOztBQWxqQ0E7RUFBVSxhQUFBO0VBQWUsV0FBQTtFQUFhLG1CQUFBO0VBQXFCLGVBQUE7QUF5akMzRDs7QUF4akNBO0VBQVcsY0FBQTtFQUFnQixlQUFBO0VBQWlCLCtGQUFBO0VBQTJGLGdEQUFBO0VBQStDLHVCQUFBO0VBQXlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQix1QkFBQTtFQUF5QixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixzQkFBQTtFQUF3QixjQUFBO0FBdWtDM1U7O0FBdGtDQTtFQUFXLGFBQUE7RUFBZSxhQUFBO0VBQWUsbUJBQUE7RUFBcUIsc0JBQUE7RUFBd0IsY0FBQTtBQThrQ3RGOztBQTdrQ0E7RUFBVyxxQ0FBQTtFQUF1Qyw2Q0FBQTtFQUErQyxzQkFBQTtFQUF3QixxQkFBQTtFQUF1Qix5QkFBQTtFQUEyQixvQkFBQTtFQUFzQixpQkFBQTtFQUFtQix1QkFBQTtFQUFBLGtCQUFBO0VBQW9CLGdCQUFBO0VBQWtCLHNCQUFBO0VBQXdCLHlCQUFBO0FBMmxDbFI7O0FBMWxDQTtFQUFVLDRCQUFBO0VBQThCLG9CQUFBO0VBQXNCLG9CQUFBO0VBQXNCLG1CQUFBO0VBQXFCLGFBQUE7RUFBZSxnQkFBQTtBQW1tQ3hIOztBQWxtQ0E7RUFBbUIsb0JBQUE7RUFBc0IsZ0JBQUE7RUFBa0IsaUJBQUE7RUFBbUIsc0JBQUE7QUF5bUM5RTs7QUF4bUNBO0VBQXVCLHlCQUFBO0VBQXdCLG1CQUFBO0FBNm1DL0M7O0FBMW1DQTtFQUFhLGFBQUE7RUFBZSxlQUFBO0VBQWlCLGFBQUE7QUFnbkM3Qzs7QUEvbUNBO0VBQXFCLGFBQUE7RUFBZSw4QkFBQTtFQUFnQyxZQUFBO0FBcW5DcEU7O0FBcG5DQTtFQUFZLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixZQUFBO0VBQWMseUJBQUE7RUFBMkIscUJBQUE7RUFBdUIsMENBQUE7RUFBeUMsbUJBQUE7RUFBcUIsNE1BQUE7QUErbkM5Szs7QUE5bkNBO0VBQWtCLGlEQW5qQ047RUFtakM4QixnQ0FBQTtFQUFrQyxzQ0FBQTtBQW9vQzVFOztBQW5vQ0E7RUFBWSxhQUFBO0VBQWUsYUFBQTtFQUFlLG1CQUFBO0VBQXFCLHVCQUFBO0VBQXlCLGNBQUE7QUEyb0N4Rjs7QUExb0NBO0VBQXNCLFdBQUE7RUFBYSxZQUFBO0VBQWMsa0JBQUE7RUFBb0IsK0JBQUE7RUFBOEIsb0JBQUE7RUFBc0IsbUJBQUE7RUFBcUIsdUJBQUE7RUFBeUIsZ0JBQUE7RUFBa0Isb0JBQUE7RUFBc0IseURBQUE7QUF1cEMvTTs7QUF0cENBO0VBQVksT0FBQTtFQUFTLHNCQUFBO0VBQXdCLGtCQUFBO0VBQW9CLGlCQUFBO0FBNnBDakU7O0FBNXBDQTtFQUFhLGlCQUFBO0VBQW1CLGFBQUE7RUFBZSxtQkFBQTtFQUFxQixhQUFBO0VBQWUsY0FBQTtBQW9xQ25GOztBQW5xQ0E7RUFBUyx5QkFBQTtFQUEyQixtQkFBQTtFQUFxQixvQkFBQTtFQUFzQixnQkFBQTtFQUFrQixtQkFBQTtFQUFxQixzQkFBQTtBQTRxQ3RIOztBQTNxQ0E7RUFBcUIseUJBQUE7RUFBMkIsc0JBQUE7RUFBd0IsMENBQUE7QUFpckN4RTs7QUFockNBO0VBQWlCLG1CQUFBO0VBQXFCLHdCQUFBO0VBQTBCLDRDQUFBO0FBc3JDaEU7O0FBcnJDQTtFQUFnQiwwQkFBQTtFQUE0Qix3QkFBQTtFQUEwQiwyQ0FBQTtBQTJyQ3RFOztBQTFyQ0E7RUFBcUIseUJBQUE7RUFBMkIsc0JBQUE7RUFBd0IsZ0NBQUE7QUFnc0N4RTs7QUEvckNBO0VBQStCLGtDQUFBO0FBbXNDL0I7O0FBbHNDQTtFQUFvQiwyQkFBQTtFQUE2Qix3QkFBQTtFQUEwQixrQ0FBQTtBQXdzQzNFOztBQXZzQ0E7RUFBOEIsa0NBQUE7QUEyc0M5Qjs7QUExc0NBO0VBQW1CLDBCQUFBO0VBQTRCLHdCQUFBO0VBQTBCLGlDQUFBO0FBZ3RDekU7O0FBL3NDQTtFQUE2QixtQ0FBQTtBQW10QzdCOztBQWp0Q0E7RUFBd0Isa0JBQUE7RUFBb0IsbUJBQUE7QUFzdEM1Qzs7QUFydENBO0VBQWMsb0JBQUE7RUFBc0Isb0NBQUE7RUFBbUMseUJBQUE7RUFBMkIscUJBQUE7RUFBdUIsMEJBQUE7RUFBeUIsZ0RBQUE7RUFBa0QsZ0JBQUE7QUErdENwTTs7QUE5dENBO0VBQXNCLG9CQUFBO0VBQXNCLGdCQUFBO0VBQWtCLHVCQUFBO0VBQXlCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxTQUFBO0FBd3VDM0o7O0FBdnVDQTtFQUE2QixjQUFBO0VBQWdCLG1CQUFBO0VBQXFCLCtCQUFBO0FBNnVDbEU7O0FBNXVDQTtFQUE4QixjQUFBO0VBQWdCLG1CQUFBO0VBQXFCLCtCQUFBO0FBa3ZDbkU7O0FBanZDQTtFQUF3QixvQ0FBQTtFQUFzQyx1QkFBQTtFQUF5QixzQkFBQTtFQUF3QixjQUFBO0VBQWdCLGdCQUFBO0VBQWtCLGVBQUE7RUFBaUIsbUJBQUE7QUEydkNsSzs7QUExdkNBO0VBQWlDLFlBQUE7RUFBYyxZQUFBO0FBK3ZDL0M7O0FBOXZDQTtFQUFnQix3QkFBQTtFQUEwQiwwQkFBQTtFQUF5QixrQkFBQTtBQW93Q25FOztBQWp3Q0E7OztFQUdFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQW93Q0Y7O0FBbHdDQTtFQUF5QixtQkFBQTtFQUFxQixjQUFBO0FBdXdDOUM7O0FBdHdDQTtFQUF5QixtQkFBQTtFQUFxQixjQUFBO0FBMndDOUM7O0FBMXdDQTtFQUFvQixtQkFBQTtFQUFxQixjQUFBO0FBK3dDekM7O0FBNXdDQTtFQUFvQixhQUFBO0VBQWUsWUFBQTtFQUFjLG1CQUFBO0VBQXFCLGVBQUE7QUFteEN0RTs7QUFseENBO0VBQXVCLDBCQUFBO0VBQTRCLHFCQUFBO0VBQXVCLG1CQUFBO0VBQXFCLCtDQUFBO0VBQThDLHlEQUFBO0FBMHhDN0k7O0FBenhDQTtFQUE2QiwrRkF0bUNqQjtBQW00RVo7O0FBNXhDQTtFQUFnQyxtQkFBQTtFQUFxQixxQ0FBQTtBQWl5Q3JEOztBQWh5Q0E7RUFBK0IsMkJBQUE7RUFBNkIsa0NBQUE7QUFxeUM1RDs7QUFweUNBO0VBQXdCLDBCQUFBO0VBQTRCLHFCQUFBO0VBQXVCLHlCQUFBO0VBQXdCLG9CQUFBO0VBQXNCLGlDQUFBO0VBQW1DLDRDQUFBO0FBNnlDNUo7O0FBMXlDQTtFQUFpQixhQUFBO0VBQWUsYUFBQTtBQSt5Q2hDOztBQTl5Q0E7RUFBdUIsYUFBQTtFQUFlLG9EQUFBO0VBQXNELGFBQUE7QUFvekM1Rjs7QUFuekNBO0VBQThCLGFBQUE7RUFBZSxtQkFBQTtFQUFxQiw4QkFBQTtFQUFnQyxZQUFBO0VBQWMsdUJBQUE7RUFBeUIsZ0JBQUE7RUFBa0IsZ0NBQUE7RUFBa0MsdUJBQUE7RUFBeUIsMkNBQUE7QUErekN0Tjs7QUE5ekNBO0VBQTZDLGNBQUE7QUFrMEM3Qzs7QUFqMENBO0VBQThDLG9CQUFBO0VBQXNCLHlCQUFBO0VBQTJCLHNCQUFBO0VBQXdCLGNBQUE7RUFBZ0IscUNBQUE7RUFBb0MscUJBQUE7RUFBdUIsd0JBQUE7RUFBMEIscUJBQUE7RUFBdUIsZ0JBQUE7RUFBa0IsdUJBQUE7QUE4MENyUTs7QUE3MENBO0VBQThDLGdCQUFBO0VBQWtCLDBCQUFBO0FBazFDaEU7O0FBajFDQTtFQUEwQyxjQUFBO0VBQWdCLGlCQUFBO0VBQW1CLGFBQUE7RUFBZSxzQkFBQTtFQUF3QixtQkFBQTtBQXkxQ3BIOztBQXgxQ0E7RUFBMkMsb0JBQUE7RUFBc0IsMEJBQUE7QUE2MUNqRTs7QUE1MUNBO0VBQTJDLG1CQUFBO0VBQXFCLGdCQUFBO0VBQWtCLGNBQUE7RUFBZ0IsZ0JBQUE7RUFBa0IsdUJBQUE7RUFBeUIsdUJBQUE7RUFBeUIsMkNBQUE7RUFBMEMsb0JBQUE7QUF1MkNoTjs7QUF0MkNBO0VBQTZCLGdCQUFBO0VBQWtCLGdDQUFBO0VBQWtDLHVCQUFBO0VBQXlCLDJDQUFBO0VBQTZDLGdEQUFBO0FBODJDdko7O0FBNzJDQTtFQUErQixnQkFBQTtFQUFrQixpQ0FBQTtFQUFtQyx1QkFBQTtFQUF5Qiw0Q0FBQTtFQUE4QyxpREFBQTtBQXEzQzNKOztBQXAzQ0E7O0VBQzhDLGdCQUFBO0VBQWtCLHlCQUFBO0VBQXdCLHVCQUFBO0VBQXlCLGtCQUFBO0VBQW9CLHlCQUFBO0VBQTJCLHNCQUFBO0FBNjNDaEs7O0FBNTNDQTs7RUFDNEMsMEJBQUE7RUFBeUIsaUJBQUE7QUFpNENyRTs7QUFoNENBO0VBQTZCLGNBQUE7RUFBZ0IsZ0JBQUE7RUFBa0IsMkNBQUE7RUFBMEMsaUJBQUE7RUFBbUIscUJBQUE7RUFBdUIsYUFBQTtFQUFlLHNCQUFBO0VBQXdCLG1CQUFBO0VBQXFCLHVCQUFBO0FBNDRDL007O0FBMzRDQTtFQUE4QixnQkFBQTtFQUFrQix5QkFBQTtFQUF3Qix1QkFBQTtBQWk1Q3hFOztBQWg1Q0E7RUFBOEIsZUFBQTtFQUFpQixnQkFBQTtFQUFrQixjQUFBO0FBczVDakU7O0FBcjVDQTtFQUE2QixnQkFBQTtFQUFrQixnQ0FBQTtFQUFrQyx1QkFBQTtFQUF5QiwyQ0FBQTtFQUE2QyxnREFBQTtFQUFrRCxnQkFBQTtBQTg1Q3pNOztBQTM1Q0E7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0RBQUE7QUE4NUNGOztBQTM1Q0E7RUFDRSxhQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0FBODVDRjtBQTU1Q0U7RUFMRjtJQU1JLDBCQUFBO0VBKzVDRjtBQUNGO0FBNzVDRTtFQUNFLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSw0R0FBQTtBQSs1Q0o7QUE3NUNJO0VBQ0UsbURBQUE7RUFDQSxnQ0FBQTtBQSs1Q047QUE1NUNJO0VBQ0UsNEVBQUE7RUFDQSwwQ0FBQTtFQUNBLDJDQUFBO0FBODVDTjtBQTM1Q0k7RUFDRSwrRUFBQTtFQUNBLDZDQUFBO0VBQ0EsOENBQUE7QUE2NUNOO0FBMTVDSTtFQUNFLCtFQUFBO0VBQ0EsNkNBQUE7RUFDQSw4Q0FBQTtBQTQ1Q047QUF6NUNJO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrREFBQTtBQTI1Q047QUF6NUNNO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLCtDQUFBO0FBMjVDUjtBQXo1Q1E7RUFBUSwyQkFBQTtBQTQ1Q2hCO0FBMzVDUTtFQUFXLDhCQUFBO0FBODVDbkI7QUE3NUNRO0VBQVcsOEJBQUE7QUFnNkNuQjtBQTc1Q007RUFDRSxTQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQ0FBQTtBQSs1Q1I7O0FBejVDQTtFQUNFLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBNDVDRjs7QUF6NUNBO0VBQ0UsZ0NBQUE7RUFDQSw4Q0FBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1EQUFBO0VBQ0EsaURBQUE7QUE0NUNGO0FBMTVDRTtFQUNFLGdCQUFBO0FBNDVDSjtBQXo1Q0U7RUFDRSxvQ0FBQTtFQUNBLG9EQUFBO0FBMjVDSjtBQXg1Q0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBMDVDSjs7QUF0NUNBOzs7RUFHRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQXk1Q0Y7QUF2NUNFOzs7RUFDRSxZQUFBO0FBMjVDSjtBQTE1Q0k7OztFQUNFLDZCQUFBO0VBQ0EsY0FBQTtBQTg1Q047O0FBejVDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBNDVDRjs7QUF6NUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUE0NUNGO0FBMTVDRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtBQTQ1Q0o7QUExNUNFO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0FBNDVDSjtBQTE1Q0U7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUE0NUNKOztBQXg1Q0E7RUFDRSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxPQUFBO0FBMjVDRjtBQXo1Q0U7RUFDRSw2QkFBQTtFQUNBLGNBQUE7QUEyNUNKOztBQXY1Q0E7RUFDRSxxQkFBQTtBQTA1Q0Y7O0FBdjVDQTtFQUNFLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSx1Q0FBQTtBQTA1Q0Y7QUF4NUNFO0VBQ0Usc0JBQUE7QUEwNUNKO0FBdjVDRTtFQUNFLFlBQUE7QUF5NUNKOztBQXI1Q0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBdzVDRjtBQXQ1Q0U7RUFDRSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQXc1Q0o7QUFyNUNFO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBdTVDSjs7QUFuNUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7QUFzNUNGO0FBcDVDRTtFQUNFLFdBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLDRDQUFBO0VBQ0EseUJBQUE7QUFzNUNKO0FBcDVDSTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUFzNUNOO0FBbjVDSTtFQUNFLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7RUFDQSxjQUFBO0FBcTVDTjtBQWw1Q0k7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFvNUNOO0FBajVDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQW01Q047QUFoNUNJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFrNUNOO0FBLzRDSTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQWk1Q047QUE3NENFO0VBQ0UsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7QUErNENKO0FBNTRDRTs7OztFQUlFLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUE4NENKO0FBMzRDRTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtBQTY0Q0o7QUE1NENJO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUE4NENOO0FBMTRDRTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtBQTQ0Q0o7QUEzNENJO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUE2NENOO0FBejRDRTtFQUNFLGNBQUE7RUFDQSxtQ0FBQTtBQTI0Q0o7QUExNENJO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUE0NENOO0FBeDRDRTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtBQTA0Q0o7QUF6NENJO0VBQ0UscUNBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUEyNENOOztBQXI0Q0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUF3NENGOztBQXI0Q0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsdURBQUE7QUF3NENGOztBQXI0Q0E7OztFQUdFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHdCQUFBO0FBdzRDRjs7QUFyNENBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FBdzRDRjs7QUFyNENBO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSxhQUFBO0VBQ0EsNElBQUE7QUF3NENGO0FBdDRDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXc0Q0o7QUFyNENFO0VBQ0UsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUF1NENKO0FBcDRDRTtFQUNFLHVDQUFBO0VBQ0EseUJBQUE7QUFzNENKOztBQWw0Q0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0RBQUE7QUFxNENGOztBQWw0Q0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0dBQUE7QUFxNENGO0FBbjRDRTtFQUNFLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGtEQUFBO0FBcTRDSjtBQWw0Q0U7RUFFRSx3QkFBQTtFQUNBLFNBQUE7QUFtNENKOztBQS8zQ0E7RUFDRSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUFrNENGOztBQS8zQ0E7O0VBRUUseUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0VBQ0EsaUJBQUE7QUFrNENGOztBQS8zQ0E7RUFDRSxtQ0FBQTtFQUNBLHNDQUFBO0VBQ0EscURBQUE7QUFrNENGO0FBaDRDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFrNENKO0FBLzNDRTtFQUNFLGFBQUE7QUFpNENKOztBQTczQ0E7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0VBQ0EscURBQUE7QUFnNENGO0FBOTNDRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFnNENKO0FBNzNDRTtFQUNFLGFBQUE7QUErM0NKOztBQTEzQ0E7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwrRkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0NBQUE7QUE2M0NGOztBQTEzQ0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBNjNDRjtBQTMzQ0U7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQTYzQ0o7O0FBejNDQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE1BQUE7QUE0M0NGOztBQXozQ0E7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBNDNDRjs7QUF6M0NBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtBQTQzQ0Y7QUExM0NFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw4Q0FBQTtBQTQzQ0o7QUExM0NJO0VBQ0UscURBQUE7RUFDQSxrR0FBQTtBQTQzQ047QUF6M0NJO0VBQ0UscURBQUE7RUFDQSxxREFBQTtBQTIzQ047QUF2M0NFO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSwrRkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUF5M0NKOztBQXIzQ0E7RUFDRSxPQUFBO0VBQ0Esd0JBQUE7QUF3M0NGOztBQXIzQ0E7RUFDRSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNkpBQUE7QUF3M0NGO0FBdDNDRTtFQUNFLDhGQUFBO0VBQ0EsK0NBQUE7RUFDQSxxREFBQTtBQXczQ0o7QUF0M0NJO0VBQ0Usb0RBQUE7RUFDQSxpQ0FBQTtFQUNBLHFDQUFBO0FBdzNDTjtBQXAzQ0U7RUFDRSxvQ0FBQTtFQUNBLDJDQUFBO0FBczNDSjtBQXAzQ0k7RUFDRSxpREFydURNO0VBc3VETixnQ0FBQTtFQUNBLGdDQUFBO0FBczNDTjs7QUFqM0NBO0VBQ0Usb0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7RUFDQSxxREFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLHVEQUFBO0FBbzNDRjs7QUFqM0NBO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQW8zQ0Y7QUFsM0NFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7QUFvM0NKOztBQWgzQ0E7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0FBbTNDRjtBQWozQ0U7RUFDRSxtQkFBQTtBQW0zQ0o7O0FBLzJDQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0VBQ0EsMEJBQUE7QUFrM0NGO0FBaDNDRTs7RUFFRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBazNDSjtBQWgzQ0k7O0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBbTNDTjtBQS8yQ0U7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0FBaTNDSjs7QUE1MkNFO0VBQ0Usd0JBQUE7QUErMkNKOztBQTMyQ0E7RUFDRTtJQUFRLDZCQUFBO0VBKzJDUjtFQTkyQ0E7SUFBVyxzQkFBQTtJQUF3QixvQkFBQTtJQUFzQix3QkFBQTtFQW0zQ3pEO0VBbDNDQTtJQUFjLGVBQUE7SUFBaUIsY0FBQTtFQXMzQy9CO0VBcjNDQTtJQUF1QixnREFBQTtFQXczQ3ZCO0VBdjNDQTtJQUFlLHNCQUFBO0lBQXdCLG9CQUFBO0VBMjNDdkM7RUExM0NBO0lBQXVCLGVBQUE7RUE2M0N2QjtFQTUzQ0E7SUFBMkIsZUFBQTtFQSszQzNCO0VBOTNDQTtJQUFrQiwwQkFBQTtFQWk0Q2xCO0VBaDRDQTtJQUFxQiwwQkFBQTtFQW00Q3JCO0VBbDRDQTtJQUFxQixVQUFBO0VBcTRDckI7RUFwNENBO0lBQXdDLFdBQUE7SUFBYSxlQUFBO0VBdzRDckQ7RUF2NENBO0lBQW9ELHVCQUFBO0VBMDRDcEQ7RUF6NENBO0lBQW1DLGdCQUFBO0VBNDRDbkM7RUEzNENBO0lBQTJCLHNCQUFBO0VBODRDM0I7RUE3NENBO0lBQTZCLFdBQUE7RUFnNUM3QjtFQS80Q0E7SUFBOEIsc0JBQUE7SUFBd0IsdUJBQUE7RUFtNUN0RDtFQWw1Q0E7SUFBMEMsV0FBQTtJQUFhLFVBQUE7SUFBWSxrQkFBQTtFQXU1Q25FO0VBdDVDQTtJQUF1QiwwQkFBQTtFQXk1Q3ZCO0VBeDVDQTtJQUFjLGVBQUE7RUEyNUNkO0VBMTVDQTtJQUFXLHFCQUFBO0VBNjVDWDtBQUNGO0FBNTVDQTtFQUFrQixhQUFBO0VBQWUsbUJBQUE7RUFBcUIsYUFBQTtBQWk2Q3REOztBQWg2Q0E7RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFtNkNGOztBQWo2Q0E7O0VBQ3NCLHNCQUFBO0FBcTZDdEI7O0FBcDZDQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXU2Q0Y7O0FBcjZDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBdzZDRjs7QUF0NkNBO0VBQXNCLFdBQUE7RUFBYSxnQkFBQTtFQUFrQixzQkFBQTtFQUF3QixpQkFBQTtFQUFtQixvREFBQTtFQUFzRCx1QkFBQTtFQUF5QixhQUFBO0VBQWUsZ0JBQUE7RUFBa0IsZ0JBQUE7QUFrN0NoTjs7QUFqN0NBO0VBQTRCLGFBQUE7RUFBZSwyQ0FBQTtFQUE2QyxtREFBQTtBQXU3Q3hGOztBQXQ3Q0E7O0VBQ2tDLGdDQUFBO0VBQWtDLDZEQUFBO0FBMjdDcEU7O0FBMTdDQTtFQUFrQixrQkFBQTtFQUFvQiwwQkFBQTtFQUF5QixnQkFBQTtBQWc4Qy9EOztBQTk3Q0E7RUFDRTtJQUF1QiwwQkFBQTtJQUE0QixpQkFBQTtFQW04Q25EO0VBbDhDQTtJQUFnQixpQkFBQTtFQXE4Q2hCO0VBcDhDQTtJQUFnQixtQkFBQTtFQXU4Q2hCO0VBdDhDQTs7Ozs7O0lBS3lDLGNBQUE7SUFBZ0IsV0FBQTtFQTA4Q3pEO0VBejhDQTtJQUE0QyxhQUFBO0VBNDhDNUM7RUEzOENBO0lBQStDLHNCQUFBO0lBQXdCLHVCQUFBO0lBQXlCLGdCQUFBO0lBQWtCLDZDQUFBO0VBaTlDbEg7RUFoOUNBO0lBQStDLGFBQUE7SUFBZSw4QkFBQTtJQUFnQyxtQkFBQTtJQUFxQixnQkFBQTtJQUFrQixnQkFBQTtJQUFrQixZQUFBO0lBQWMsb0RBQUE7RUF5OUNySztFQXg5Q0E7SUFBMEQsbUJBQUE7RUEyOUMxRDtFQTE5Q0E7SUFBdUQseUJBQUE7SUFBMkIsZ0JBQUE7SUFBa0IsNEJBQUE7SUFBOEIsb0JBQUE7RUFnK0NsSTtFQS85Q0E7SUFBYyxzQkFBQTtFQWsrQ2Q7QUFDRjtBQWorQ0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFtK0NGOztBQWgrQ0E7RUFBOEIsbUJBQUE7RUFBcUIsZ0JBQUE7QUFxK0NuRDs7QUFwK0NBO0VBQThCLFdBQUE7RUFBYSxZQUFBO0VBQWMsZUFBQTtBQTArQ3pEOztBQXorQ0E7RUFBdUIsY0FBQTtFQUFnQixXQUFBO0VBQWEsZUFBQTtBQSsrQ3BEOztBQTkrQ0E7RUFBNEIsY0FBQTtFQUFnQixlQUFBO0FBbS9DNUM7O0FBbC9DQTtFQUFzQixhQUFBO0VBQWMsbUJBQUE7QUF1L0NwQzs7QUFyL0NBO0VBQ0Usc0JBQUE7RUFDQSx5QkFBQTtBQXcvQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBFbnRlcnByaXNlIMOiwoDCkyBFeGFtIFJlcG9ydHMgIChlbmhhbmNlZCB2MilcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiRlYXNlOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xyXG4kZWFzZS1zbW9vdGg6IGN1YmljLWJlemllcigwLjY1LCAwLCAwLjM1LCAxKTtcclxuJGVhc2UtYm91bmNlOiBjdWJpYy1iZXppZXIoMC4zNCwgMS41NiwgMC42NCwgMSk7XHJcbiRyYWRpdXM6IDAuNzVyZW07XHJcbiRzaGFkb3ctc206IDAgMC4wNjI1cmVtIDAuMTg3NXJlbSByZ2JhKDAsMCwwLDAuMDQpLCAwIDAuMDYyNXJlbSAwLjEyNXJlbSByZ2JhKDAsMCwwLDAuMDMpO1xyXG4kc2hhZG93LW1kOiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDAsMCwwLDAuMDYpO1xyXG4kc2hhZG93LWxnOiAwIDEuMjVyZW0gMi41cmVtIHJnYmEoMCwwLDAsMC4xKSwgMCAwLjVyZW0gMXJlbSByZ2JhKDAsMCwwLDAuMDYpO1xyXG4kc2hhZG93LXBhbmVsOiAwIDEuNXJlbSAzLjc1cmVtIHJnYmEoNSwxOCw0MCwwLjIyKSwgMCAwLjM3NXJlbSAxcmVtIHJnYmEoNSwxOCw0MCwwLjA4KTtcclxuJHNoYWRvdy1ob3ZlcjogMCAwLjVyZW0gMS4yNXJlbSByZ2JhKDAsMCwwLDAuMDgpO1xyXG5cclxuLy8gw6LClMKAw6LClMKAIEhvc3QgdG9rZW5zIMOiwpTCgMOiwpTCgFxyXG46aG9zdCB7XHJcbiAgLS1ncmVlbi1iZzogI2U4ZjllZjtcclxuICAtLXJlZC1iZzogI2ZmZjJmNDtcclxuICAtLXllbGxvdy1iZzogI2ZmZjhlNjtcclxuICAtLW9yYW5nZS1iZzogI2ZmZjRlMTtcclxuICAtLWJsdWUtYmc6ICNlNmYwZmY7XHJcbiAgLS1ncmVlbi10ZXh0OiAjMTY2NTM0O1xyXG4gIC0tcmVkLXRleHQ6ICNiOTFjMWM7XHJcbiAgLS15ZWxsb3ctdGV4dDogI2I0NTMwOTtcclxuICAtLW9yYW5nZS10ZXh0OiAjYzI0MTBjO1xyXG4gIC0tYmx1ZS10ZXh0OiAjMGI2NmQwO1xyXG4gIC0tYmdyZWVuLWJvcmRlcjogIzg2ZWZhYztcclxuICAtLWJyZWQtYm9yZGVyOiAjZTdkNmQ2O1xyXG4gIC0tYnllbGxvdy1ib3JkZXI6ICNmZGU2OGE7XHJcbiAgLS1ib3JhbmdlLWJvcmRlcjogI2ZhZWVkZjtcclxuICAtLWJibHVlLWJvcmRlcjogIzkzYzVmZDtcclxuICAtLXNjb3JlLWNvbG9yOiAjZjM5YzEyO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWF0ZXJpYWwgb3ZlcnJpZGVzIMOiwpTCgMOiwpTCgFxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQYWdlICYgdG9vbGJhciDDosKUwoDDosKUwoBcclxuLnBhZ2UgeyBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbSAzcmVtOyB9XHJcbi5leGFtLXJlcG9ydHMgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDEuMTI1cmVtOyB9XHJcbi50b29sYmFyIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMC44NzVyZW07IHBhZGRpbmctYm90dG9tOiAwLjc1cmVtOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA2KTsgfVxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gU0VMRUNUSU9OUyDDosKAwpQgUHJlbWl1bSBBdXRvY29tcGxldGUgSW5wdXRzXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4uc2VsZWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleDogMSAxIDI4cmVtO1xyXG4gIG1pbi13aWR0aDogMTZyZW07XHJcbiAgbWF4LXdpZHRoOiAzNnJlbTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLXdpZHRoOiAxNHJlbTtcclxuICBtYXgtd2lkdGg6IDE4cmVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmYWZiZmMgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDAgMC44NzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDFweCAycHggcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1kYy1ub3RjaGVkLW91dGxpbmUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZvcm0tZmllbGQtZmxleCB7IGhlaWdodDogMi43NXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuNXJlbSAwOyBtaW4taGVpZ2h0OiB1bnNldDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwgeyBcclxuICB0b3A6IDEuMzc1cmVtOyBcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLFxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwubWRjLWZsb2F0aW5nLWxhYmVsLS1mbG9hdC1hYm92ZSB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xLjVyZW0pIHNjYWxlKDAuNzUpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgaW5wdXQge1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHsgXHJcbiAgY29sb3I6ICM5NGEzYjg7IFxyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IFxyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICBjb2xvcjogIzk0YTNiODtcclxuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgd2lkdGg6IDEuMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyAkZWFzZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQ6aG92ZXIgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQ6aG92ZXIgbWF0LWljb25bbWF0UHJlZml4XSB7IGNvbG9yOiAjNjQ3NDhiOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xMiksIDAgNHB4IDE2cHggcmdiYSgzMSwgMTIzLCAyNTUsIDAuMDgpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIG1hdC1pY29uW21hdFByZWZpeF0ge1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQuZGlzYWJsZWQtdG9vbGJhci1maWVsZCB7XHJcbiAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNmMWY1ZjkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjYmQ1ZTEgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDAuOTU7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0IHtcclxuICAgIGNvbG9yOiAjMGYxNzJhICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzBmMTcyYSAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgICAmOjpwbGFjZWhvbGRlciB7XHJcbiAgICAgIGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDAgIWltcG9ydGFudDtcclxuICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwge1xyXG4gICAgY29sb3I6ICM0NzU1NjkgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uW21hdFByZWZpeF0ge1xyXG4gICAgY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5sb2NrLWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDEuMTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEuMTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuMzc1cmVtO1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIsXHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogI2YxZjVmOSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjOTRhM2I4ICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2UyZThmMCAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtZGlzYWJsZWQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwge1xyXG4gIGNvbG9yOiAjOTRhM2I4ICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcblxyXG4vLyBFbXB0eSBzdGF0ZSBwbGFjZWhvbGRlciBjYXJkIHdoZW4gbm8gdGVzdCBzZWxlY3RlZFxyXG4uZW1wdHktcmVwb3J0cy1zdGF0ZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDRyZW0gMS41cmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmOGZhZmMgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNjYmQ1ZTE7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC4zcyAkZWFzZTtcclxufVxyXG5cclxuLmVtcHR5LXN0YXRlLWNhcmQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDI4cmVtO1xyXG5cclxuICAuZW1wdHktc3RhdGUtaWNvbiB7XHJcbiAgICB3aWR0aDogNC4yNXJlbTtcclxuICAgIGhlaWdodDogNC4yNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMzEsIDEyMywgMjU1LCAwLjEyKSAwJSwgcmdiYSgzMSwgMTIzLCAyNTUsIDAuMDQpIDEwMCUpO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4yKTtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi4yNXJlbTtcclxuICAgICAgd2lkdGg6IDIuMjVyZW07XHJcbiAgICAgIGhlaWdodDogMi4yNXJlbTtcclxuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xLCAjMWY3YmZmKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lbXB0eS1zdGF0ZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBtYXJnaW46IDAgMCAwLjVyZW0gMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG4gIH1cclxuXHJcbiAgLmVtcHR5LXN0YXRlLWRlc2NyaXB0aW9uIHtcclxuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBtYXJnaW46IDAgMCAxLjVyZW0gMDtcclxuXHJcbiAgICBzdHJvbmcge1xyXG4gICAgICBjb2xvcjogIzMzNDE1NTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5lbXB0eS1hY3Rpb24tYnRuIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBwYWRkaW5nOiAwIDEuMjVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi8vIEF1dG9jb21wbGV0ZSBwYW5lbCBzdHlsaW5nXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwge1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDIwcHggNDBweCAtMTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDMpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uIHtcclxuICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgbWluLWhlaWdodDogMi43NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgJGVhc2U7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb246aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoOTksIDEwMiwgMjQxLCAwLjA2KSAwJSwgcmdiYSgxMzksIDkyLCAyNDYsIDAuMDQpIDEwMCUpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uLm1hdC1tZGMtb3B0aW9uLWFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMSwgMTIzLCAyNTUsIDAuMSkgMCUsIHJnYmEoMzEsIDEyMywgMjU1LCAwLjA2KSAxMDAlKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbiAub3B0aW9uLW1haW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24gLm9wdGlvbi1zdWIge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcclxufVxyXG4uY29udHJvbHMgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNXJlbTsgfVxyXG4uYWN0aW9uLXJvdyB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC41cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbjpob3N0IDo6bmctZGVlcCAucmVmcmVzaC1pY29uLWJ0bixcclxuLnJlZnJlc2gtaWNvbi1idG4ge1xyXG4gIG1pbi13aWR0aDogMi42MjVyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMi42MjVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgLnJlZnJlc2gtc3ZnLWljb24sXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBmaWxsOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzICRlYXNlO1xyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgIGZpbGw6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGF0aCB7XHJcbiAgICAgIGZpbGw6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yZWZyZXNoLXN2Zy1pY29uIHBhdGgge1xyXG4gICAgZmlsbDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMS1ob3ZlciwgIzFhNmZlOCkgIWltcG9ydGFudDtcclxuXHJcbiAgICAucmVmcmVzaC1zdmctaWNvbixcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY29sb3I6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuXHJcbiAgICAgIHN2ZywgcGF0aCB7XHJcbiAgICAgICAgZmlsbDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuLmJ1dHRvbi1vbmUgeyBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSkgIWltcG9ydGFudDsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50OyBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7IGxldHRlci1zcGFjaW5nOiAwLjAxZW07IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4yNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZSAhaW1wb3J0YW50OyB9XHJcbi5idXR0b24tb25lOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIpICFpbXBvcnRhbnQ7IGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0yKSAhaW1wb3J0YW50OyBib3gtc2hhZG93OiAkc2hhZG93LW1kICFpbXBvcnRhbnQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNjI1cmVtKTsgfVxyXG5cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vIEZJTFRFUlMgT1ZFUkxBWSBQQU5FTCDDosKAwpQgTW9kZXJuIGZpZWxkIGRlc2lnblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLmZpbHRlcnMtcGFuZWwge1xyXG4gIHdpZHRoOiBtaW4oMzRyZW0sIGNhbGMoMTAwdncgLSAycmVtKSk7XHJcbiAgbWF4LWhlaWdodDogNzV2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmZmZmZmIDAlLCAjZmFmYmZjIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICBib3gtc2hhZG93OiAwIDEuMjVyZW0gM3JlbSByZ2JhKDE1LCAyMywgNDIsIDAuMTYpLCAwIDAuMzc1cmVtIDFyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICBhbmltYXRpb246IHNsaWRlVXAgMC4yOHMgJGVhc2UtYm91bmNlO1xyXG59XHJcblxyXG4uZmlsdGVycy1wYW5lbC1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogMXJlbSAxLjEyNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA2KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjZmFmYmZjIDAlLCAjZmZmZmZmIDEwMCUpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcbi5maWx0ZXJzLXBhbmVsLWhlYWRlciBoNCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBmb250LXNpemU6IDAuOTM3NXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcbi5maWx0ZXJzLXBhbmVsLWhlYWRlciBoNCBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICB3aWR0aDogMS4xMjVyZW07XHJcbiAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG59XHJcblxyXG4uZmlsdGVyLWJsb2NrIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBnYXA6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMXJlbSAxLjEyNXJlbTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuLmZpbHRlci1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4td2lkdGg6IDA7XHJcbn1cclxuXHJcbi8vIEZpbHRlciBmaWVsZCA6Om5nLWRlZXAgb3ZlcnJpZGVzIMOiwoDClCBtb2Rlcm4gY29tcGFjdCBsb29rXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgcGFkZGluZzogMCAwLjc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2UsIGJhY2tncm91bmQgMC4ycyAkZWFzZTtcclxuICBib3gtc2hhZG93OiAwIDFweCAycHggcmdiYSgxNSwgMjMsIDQyLCAwLjAzKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tZGMtbm90Y2hlZC1vdXRsaW5lIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4IHsgaGVpZ2h0OiAyLjVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC4zNzVyZW0gMDsgbWluLWhlaWdodDogdW5zZXQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7XHJcbiAgdG9wOiAxLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbS5tYXQtZm9jdXNlZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCxcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mbG9hdGluZy1sYWJlbC5tZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSBpbnB1dCxcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1zZWxlY3QtdmFsdWUtdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLXNlbGVjdC1hcnJvdyxcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIC5tYXQtaWNvbiB7IGNvbG9yOiAjOTRhM2I4OyB9XHJcblxyXG4vLyBIb3ZlclxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtOmhvdmVyIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjYyNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG59XHJcbi8vIEZvY3VzXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0ubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgzMSwgMTIzLCAyNTUsIDAuMTIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG4vLyBEYXRlcGlja2VyIHRvZ2dsZSBidXR0b24gYWxpZ25tZW50XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1kYXRlcGlja2VyLXRvZ2dsZSBidXR0b24ge1xyXG4gIHdpZHRoOiAxLjc1cmVtO1xyXG4gIGhlaWdodDogMS43NXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4vLyBTZWFyY2hhYmxlIHNlbGVjdCBpbnB1dCBzdHlsaW5nIGluc2lkZSBzZWxlY3QgZHJvcGRvd24gb3B0aW9uc1xyXG46aG9zdCA6Om5nLWRlZXAgLnNlbGVjdC1zZWFyY2gtb3B0aW9uIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIC5zZWxlY3Qtc2VhcmNoLWlucHV0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgcGFkZGluZzogMC4zNzVyZW0gMC42MjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LXBzZXVkby1jaGVja2JveCxcclxuICAubWF0LW1kYy1vcHRpb24tcHNldWRvLWNoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1zZWxlY3QtcGFuZWwgLnNlbGVjdC1zZWFyY2gtb3B0aW9uIHtcclxuICBwb3NpdGlvbjogc3RpY2t5O1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDA7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZThmMDtcclxuXHJcbiAgLm1hdC1wc2V1ZG8tY2hlY2tib3gsXHJcbiAgLm1hdC1tZGMtb3B0aW9uLXBzZXVkby1jaGVja2JveCB7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcblxyXG4uZmlsdGVyLWNoZWNrYm94LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICBncmlkLWNvbHVtbjogc3BhbiAyO1xyXG5cclxuICBtYXQtY2hlY2tib3gge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzMzNDE1NTtcclxuICB9XHJcbn1cclxuXHJcbi8vIFNwYW4gZGF0ZSBwaWNrZXJzIGZ1bGwgd2lkdGggb24gbmFycm93IGdyaWRzXHJcbi5maWx0ZXItaXRlbTpudGgtbGFzdC1jaGlsZCgtbisyKSB7IGdyaWQtY29sdW1uOiBzcGFuIDE7IH1cclxuXHJcbi5maWx0ZXItYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDAuNXJlbTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAuODc1cmVtIDEuMTI1cmVtO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWZiZmMgMCUsICNmZmZmZmYgMTAwJSk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLmZpbHRlci1hcHBseS1idG4ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODEyNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpbHRlci1hcHBseS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6ICRzaGFkb3ctbWQgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMDYyNXJlbSk7XHJcbn1cclxuLmZpbHRlci1yZXNldC1idG4ge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmYgIWltcG9ydGFudDtcclxuICBjb2xvcjogIzQ3NTU2OSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjAgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIDFyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3JkZXItY29sb3IgMC4ycyAkZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcbi5maWx0ZXItcmVzZXQtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjhmYWZjICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpbHRlci1hcHBseS1idG4gbWF0LWljb24sXHJcbi5maWx0ZXItcmVzZXQtYnRuIG1hdC1pY29uIHsgZm9udC1zaXplOiAxcmVtOyB3aWR0aDogMXJlbTsgaGVpZ2h0OiAxcmVtOyBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07IH1cclxuXHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC41cmVtKTsgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTsgfSB9XHJcbkBrZXlmcmFtZXMgc2xpZGVEb3duIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4zNzVyZW0pOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBMaXN0IGNhcmQgKyB0YWJzIHdyYXBwZXIgw6LClMKAw6LClMKAXHJcbi5saXN0LWNhcmQgeyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjZTJlOGYwOyBib3JkZXItcmFkaXVzOiAkcmFkaXVzOyBib3gtc2hhZG93OiAkc2hhZG93LW1kOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuM3MgJGVhc2UsIGJvcmRlci1jb2xvciAwLjNzICRlYXNlOyBvdmVyZmxvdzogdmlzaWJsZSAhaW1wb3J0YW50OyB9XHJcbi5saXN0LWNhcmQ6aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LWhvdmVyOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjE1KTsgfVxyXG4ubGlzdC13cmFwcGVyIHsgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDsgbWF4LWhlaWdodDogbm9uZSAhaW1wb3J0YW50OyB9XHJcbi5leGFtLXRhYnMgeyB3aWR0aDogMTAwJTsgfVxyXG4uaW5uZXItYW5hbHl0aWNzLXRhYnMgeyB3aWR0aDogMTAwJTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1haW4gdGFicyAoVXNlciBSZXBvcnQgLyBBbmFseXRpY3MgUmVwb3J0KSDDosKUwoDDosKUwoBcclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1hdC1tZGMtdGFiLWhlYWRlciB7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IHBhZGRpbmc6MCAwLjVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1hdC1tZGMtdGFiLWxhYmVscyB7IG1pbi1oZWlnaHQ6M3JlbTsgZ2FwOjAuMTI1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXdlaWdodDo2MDA7IGZvbnQtc2l6ZTowLjg3NXJlbTsgcGFkZGluZzowIDEuMjVyZW07IG1pbi1oZWlnaHQ6M3JlbTsgYm9yZGVyLXJhZGl1czokcmFkaXVzICRyYWRpdXMgMCAwOyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiLS1hY3RpdmUgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6aW5zZXQgMCAtMC4xMjVyZW0gMCB2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWItLWFjdGl2ZSAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB0cmFuc2l0aW9uOmNvbG9yIDAuMnMgJGVhc2U7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1hdC1tZGMtdGFiLWJvZHktd3JhcHBlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUgeyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3JkZXItd2lkdGg6MC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBJbm5lciBhbmFseXRpY3MgdGFicyAoQ2F0ZWdvcnkgUmVwb3J0IC8gUXVlc3Rpb24gU3VtbWFyeSkgw6LClMKAw6LClMKAXHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1hdC1tZGMtdGFiLWhlYWRlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlci1ib3R0b206MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgcGFkZGluZzowIDAuNzVyZW07IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWF0LW1kYy10YWItbGFiZWxzIHsgbWluLWhlaWdodDoyLjVyZW07IGdhcDowLjI1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWIgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgcGFkZGluZzowIDFyZW07IG1pbi1oZWlnaHQ6Mi41cmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbSAwLjVyZW0gMCAwOyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiOmhvdmVyIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0yKTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWItLWFjdGl2ZSB7IGJhY2tncm91bmQ6dmFyKC0tYmctMik7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYl9fdGV4dC1sYWJlbCB7IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB0cmFuc2l0aW9uOmNvbG9yIDAuMnMgJGVhc2U7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYi1pbmRpY2F0b3JfX2NvbnRlbnQtLXVuZGVybGluZSB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJvcmRlci13aWR0aDowLjEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIENhdGVnb3J5IEZpbHRlciBCYW5uZXIgw6LClMKAw6LClMKAXHJcbi5hbmFseXRpY3MtdGFiLWJvZHkge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNhdGVnb3J5LWZpbHRlci1iYW5uZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZ2FwOiAxcmVtO1xyXG4gIHBhZGRpbmc6IDAuNHJlbSAwLjc1cmVtO1xyXG4gIG1hcmdpbjogMC41cmVtIDFyZW0gMC41cmVtIDFyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMDgpIDAlLCByZ2JhKDk5LCAxMDIsIDI0MSwgMC4wNSkgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg1OSwgMTMwLCAyNDYsIDAuMik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjM3NXJlbSByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVEb3duIDAuMjVzICRlYXNlO1xyXG5cclxuICAuYmFubmVyLXRleHQge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTEsICMxZTI5M2IpO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzI1NjNlYik7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDAuMzc1cmVtO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICB9XHJcblxyXG4gICAgc3Ryb25nIHtcclxuICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xLCAjMjU2M2ViKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg1OSwgMTMwLCAyNDYsIDAuMTIpO1xyXG4gICAgICBwYWRkaW5nOiAwLjE1cmVtIDAuNXJlbTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLmNsZWFyLWZpbHRlci1idG4ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgZ2FwOiAwLjM3NXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAuMzVyZW0gMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMnJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEsICNmZmZmZmYpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIsICNjYmQ1ZTEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjNDc1NTY5KSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gIC5tZGMtYnV0dG9uX19sYWJlbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgZ2FwOiAwLjM3NXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjkzNzVyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAwLjkzNzVyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMsICM2NDc0OGIpO1xyXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyAkZWFzZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDgpICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMykgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJlcG9ydC1zdW1tYXJ5LWdyaWQgeyBkaXNwbGF5OmdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczpyZXBlYXQoNCwgbWlubWF4KDAsIDFmcikpOyBnYXA6MC43NXJlbTsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5hbmFseXRpY3Mtc3VtbWFyeS1ncmlkIHsgcGFkZGluZzowLjI1cmVtIDAgMC41cmVtOyBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50OyBib3JkZXItYm90dG9tOm5vbmU7IH1cclxuLnN1bW1hcnktY2FyZCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC42MjVyZW07IG1pbi13aWR0aDowOyBwYWRkaW5nOjAuNXJlbSAwLjg3NXJlbTsgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC43NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJveC1zaGFkb3c6MCAwLjEyNXJlbSAwLjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4yNXMgJGVhc2U7IH1cclxuLnN1bW1hcnktY2FyZDpob3ZlciB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjVyZW0gMXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbi5zdW1tYXJ5LWljb24geyB3aWR0aDoyLjI1cmVtOyBoZWlnaHQ6Mi4yNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZsZXgtc2hyaW5rOjA7IGJvcmRlci1yYWRpdXM6MC42MjVyZW07IGJhY2tncm91bmQ6dmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB0cmFuc2l0aW9uOnRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZTsgfVxyXG4uc3VtbWFyeS1pY29uOmhvdmVyIHsgdHJhbnNmb3JtOnNjYWxlKDEuMDUpOyB9XHJcbi5zdW1tYXJ5LWljb24gbWF0LWljb24geyBmb250LXNpemU6MS4xMjVyZW07IHdpZHRoOjEuMTI1cmVtOyBoZWlnaHQ6MS4xMjVyZW07IH1cclxuLy8gSWNvbiBjb2xvciB2YXJpYW50c1xyXG4uc3VtbWFyeS1pY29uLS1zdHVkZW50cyB7IGJhY2tncm91bmQ6cmdiYSg5OSwxMDIsMjQxLDAuMSk7IGNvbG9yOiM2MzY2ZjE7IH1cclxuLnN1bW1hcnktaWNvbi0tcGFnZSB7IGJhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LDAuMSk7IGNvbG9yOiMzYjgyZjY7IH1cclxuLnN1bW1hcnktaWNvbi0tc2NvcmUgeyBiYWNrZ3JvdW5kOnJnYmEoMjQ1LDE1OCwxMSwwLjEpOyBjb2xvcjojZjU5ZTBiOyB9XHJcbi5zdW1tYXJ5LWljb24tLXBhc3MgeyBiYWNrZ3JvdW5kOnJnYmEoMTYsMTg1LDEyOSwwLjEpOyBjb2xvcjojMTBiOTgxOyB9XHJcbi5zdW1tYXJ5LWljb24tLWNhdGVnb3JpZXMgeyBiYWNrZ3JvdW5kOnJnYmEoMTM5LDkyLDI0NiwwLjEpOyBjb2xvcjojOGI1Y2Y2OyB9XHJcbi5zdW1tYXJ5LWljb24tLXF1ZXN0aW9ucyB7IGJhY2tncm91bmQ6cmdiYSg1OSwxMzAsMjQ2LDAuMSk7IGNvbG9yOiMzYjgyZjY7IH1cclxuLnN1bW1hcnktaWNvbi0tYXR0ZW1wdHMgeyBiYWNrZ3JvdW5kOnJnYmEoOTksMTAyLDI0MSwwLjEpOyBjb2xvcjojNjM2NmYxOyB9XHJcbi5zdW1tYXJ5LWljb24tLW1pc3Rha2VzIHsgYmFja2dyb3VuZDpyZ2JhKDIzOSw2OCw2OCwwLjEpOyBjb2xvcjojZWY0NDQ0OyB9XHJcbi5zdW1tYXJ5LWNvcHkgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuMTI1cmVtOyBtaW4td2lkdGg6MDsgfVxyXG4uc3VtbWFyeS1sYWJlbCB7IGZvbnQtc2l6ZTp2YXIoLS1mb250LXhzKTsgZm9udC13ZWlnaHQ6NzAwOyBsZXR0ZXItc3BhY2luZzowLjA4ZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi5zdW1tYXJ5LXZhbHVlIHsgZm9udC1zaXplOmNsYW1wKDEuMTI1cmVtLCAwLjk1cmVtICsgMC41dncsIDEuNXJlbSk7IGZvbnQtd2VpZ2h0OjgwMDsgbGluZS1oZWlnaHQ6MS4xOyBsZXR0ZXItc3BhY2luZzotMC4wM2VtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLnN1bW1hcnktbWV0YSB7IGZvbnQtc2l6ZTp2YXIoLS1mb250LXhzbSk7IGZvbnQtd2VpZ2h0OjUwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTIpOyB3aGl0ZS1zcGFjZTpub3dyYXA7IG92ZXJmbG93OmhpZGRlbjsgdGV4dC1vdmVyZmxvdzplbGxpcHNpczsgfVxyXG5cclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi8vIFRBQiBBQ1RJT05TIMOiwoDClCBDb21wYWN0IFNlYXJjaCAmIEFjdGlvbiBCYXIgKEluc2lkZSBUYWJzKVxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLnRhYi1hY3Rpb25zIHsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWJldHdlZW46c3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MXJlbTsgcGFkZGluZzowLjg3NXJlbSAxcmVtIDFyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IG1hcmdpbjowOyB9XHJcblxyXG4vLyBDb21wYWN0IFNlYXJjaFxyXG4udGFiLWFjdGlvbnMgLnNlYXJjaCB7IGZsZXg6MTsgbWF4LXdpZHRoOjIwcmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXI6MXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYm9yZGVyLXJhZGl1czowLjc1cmVtOyBwYWRkaW5nOjAgMC43NXJlbTsgdHJhbnNpdGlvbjphbGwgMC4ycyAkZWFzZTsgYm94LXNoYWRvdzowIDAuNXJlbSAxcmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tZGMtbm90Y2hlZC1vdXRsaW5lIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggeyBoZWlnaHQ6IDIuMzc1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC4zNzVyZW0gMDsgbWluLWhlaWdodDogdW5zZXQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHsgdG9wOjEuMTg3NXJlbTsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBpbnB1dCB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjUwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBpbnB1dDo6cGxhY2Vob2xkZXIgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIG1hdC1pY29uW21hdFByZWZpeF0geyBjb2xvcjp2YXIoLS10aGVtZS0zLWljb24tMSk7IG1hcmdpbi1yaWdodDowLjVyZW07IGZvbnQtc2l6ZToxLjEyNXJlbTsgd2lkdGg6MS4xMjVyZW07IGhlaWdodDoxLjEyNXJlbTsgdHJhbnNpdGlvbjphbGwgMC4ycyAkZWFzZTsgfVxyXG4udGFiLWFjdGlvbnMgLnNlYXJjaDpob3ZlciA6Om5nLWRlZXAgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzowIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IH1cclxuLnRhYi1hY3Rpb25zIC5zZWFyY2g6aG92ZXIgOjpuZy1kZWVwIG1hdC1pY29uW21hdFByZWZpeF0geyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWItYWN0aW9ucyAuc2VhcmNoIC5tYXQtZm9jdXNlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIsXHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCBtYXQtaWNvblttYXRQcmVmaXhdIHtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLy8gQ29tcGFjdCBBY3Rpb24gQnV0dG9uc1xyXG4udGFiLWFjdGlvbnMgLmNvbnRyb2xzIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjVyZW07IH1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IHsgZGlzcGxheTpmbGV4OyBnYXA6MC4zNzVyZW07IGFsaWduLWl0ZW1zOmNlbnRlcjsgfVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uIHsgaGVpZ2h0OjIuMjVyZW07IHBhZGRpbmc6MCAwLjg3NXJlbTsgZm9udC1zaXplOjAuNzVyZW07IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDFlbTsgYm9yZGVyLXJhZGl1czowLjYyNXJlbTsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBnYXA6MC4zNzVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IH1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxcmVtOyB3aWR0aDoxcmVtOyBoZWlnaHQ6MXJlbTsgfVxyXG4vLyBTZWNvbmRhcnkgYnV0dG9uIHN0eWxlIChTZWFyY2gsIEV4cG9ydClcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtc3Ryb2tlZC1idXR0b25dLFxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1idXR0b25dIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7XHJcbiAgYm94LXNoYWRvdzogMCAwLjVyZW0gMXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpO1xyXG59XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LXN0cm9rZWQtYnV0dG9uXTpob3ZlcixcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtYnV0dG9uXTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbn1cclxuLy8gUHJpbWFyeSBidXR0b24gc3R5bGVcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtZmxhdC1idXR0b25dIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1idXR0b24tMSkgMCUsIHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAxMDAlKTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJveC1zaGFkb3c6IDAgMC43NXJlbSAxLjVyZW0gdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxufVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1mbGF0LWJ1dHRvbl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLWJ1dHRvbi0xLWhvdmVyKSAwJSwgdmFyKC0tYnV0dG9uLTEpIDEwMCUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMXJlbSAycmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQcmVtaXVtIHRhYmxlIMOiwpTCgMOiwpTCgFxyXG4udGFibGUtd3JhcCB7XHJcbiAgb3ZlcmZsb3cteDogYXV0byAhaW1wb3J0YW50O1xyXG4gIG92ZXJmbG93LXk6IGF1dG8gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiA1MjBweDtcclxuICBtYXgtaGVpZ2h0OiBtYXgoNTQwcHgsIGNhbGMoMTAwdmggLSAxODBweCkpO1xyXG4gIHBhZGRpbmc6IDAgMC43NXJlbSAwLjc1cmVtO1xyXG4gIHNjcm9sbGJhci13aWR0aDogdGhpbjtcclxuICBzY3JvbGxiYXItY29sb3I6ICM4MThjZjggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBcclxuICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICB3aWR0aDogMC42MjVyZW07XHJcbiAgICBoZWlnaHQ6IDAuNjI1cmVtO1xyXG4gIH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNCk7IGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IH1cclxuICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7IGJhY2tncm91bmQ6ICM4MThjZjg7IGJvcmRlci1yYWRpdXM6IDAuMjVyZW07IGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50OyBiYWNrZ3JvdW5kLWNsaXA6IGNvbnRlbnQtYm94OyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiAjNGY0NmU1OyBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDsgfVxyXG59XHJcblxyXG4uYW5hbHl0aWNzLXRhYmxlLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIsICM0NzU1NjkpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIsICNlMmU4ZjApO1xyXG59XHJcbi5wcmVtaXVtLXRhYmxlIHsgd2lkdGg6IDEwMCU7IGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGUgIWltcG9ydGFudDsgYm9yZGVyLXNwYWNpbmc6IDAgIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogMC41cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbjpob3N0IDo6bmctZGVlcCAucHJlbWl1bS10YWJsZSB0aC5tYXQtbWRjLWhlYWRlci1jZWxsLFxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGwsXHJcbi5wcmVtaXVtLXRhYmxlIHRoLm1hdC1tZGMtaGVhZGVyLWNlbGwgeyBwb3NpdGlvbjogc3RpY2t5ICFpbXBvcnRhbnQ7IHRvcDogMCAhaW1wb3J0YW50OyB6LWluZGV4OiAxMCAhaW1wb3J0YW50OyBiYWNrZ3JvdW5kOiB2YXIoLS10YWJsZS1oZWFkZXItYmcsICMxZTI5M2IpICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyBjb2xvcjogdmFyKC0tdGFibGUtaGVhZGVyLXRleHQsICNmZmZmZmYpICFpbXBvcnRhbnQ7IHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtOyBib3JkZXItYm90dG9tOiAwLjEyNXJlbSBzb2xpZCAjZTJlOGYwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRoLm1hdC1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCxcclxuLnByZW1pdW0tdGFibGUgdGgubWF0LW1kYy1oZWFkZXItY2VsbDpmaXJzdC1jaGlsZCB7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRkLm1hdC1jZWxsLFxyXG4ucHJlbWl1bS10YWJsZSB0ZC5tYXQtbWRjLWNlbGwgeyBwYWRkaW5nOiAwLjM4cmVtIDAuNzVyZW07IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIsICMzMzQxNTUpOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgI2YxZjVmOTsgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2U7IH1cclxuLnByZW1pdW0tdGFibGUgdHIubWF0LXJvdzpudGgtY2hpbGQoZXZlbikgdGQsXHJcbi5wcmVtaXVtLXRhYmxlIHRyLm1hdC1tZGMtcm93Om50aC1jaGlsZChldmVuKSB0ZCB7IGJhY2tncm91bmQ6IHJnYmEoMjQ4LDI1MCwyNTIsMC41KTsgfVxyXG4uc3R1ZGVudC1uYW1lIHsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IHZhcigtLWZvbnQtbWQpOyBsZXR0ZXItc3BhY2luZzogLTAuMDFlbTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4uc3R1ZGVudC1uYW1lOmhvdmVyIHsgb3BhY2l0eTogMC44NTsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xMjVyZW07IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjA2MjVyZW0pOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3R1ZGVudCAvIENhdGVnb3J5IGF2YXRhciBjZWxscyDDosKUwoDDosKUwoBcclxuLnN0dWRlbnQtY2VsbCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC42MjVyZW07IGN1cnNvcjpwb2ludGVyOyB9XHJcbi5zdHVkZW50LWF2YXRhciB7IHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6I2ZmZjsgZmxleC1zaHJpbms6MDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjY3ZWVhIDAlLCAjNzY0YmEyIDEwMCUpOyB9XHJcbi5jYXRlZ29yeS1jZWxsIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjYyNXJlbTsgY3Vyc29yOnBvaW50ZXI7IH1cclxuLmNhdGVnb3J5LWF2YXRhciB7IHdpZHRoOjJyZW07IGhlaWdodDoycmVtOyBib3JkZXItcmFkaXVzOjAuNXJlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6I2ZmZjsgZmxleC1zaHJpbms6MDsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjA5M2ZiIDAlLCAjZjU1NzZjIDEwMCUpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgaW5saW5lIMOiwpTCgMOiwpTCgFxyXG4ubWFya3MtaW5saW5lIHsgZm9udC13ZWlnaHQ6NjAwOyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLm1hcmtzLXNlcCB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgbWFyZ2luOjAgMC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQZXJjZW50YWdlIGJhZGdlIMOiwpTCgMOiwpTCgFxyXG4ucGN0LWJhZGdlIHsgZGlzcGxheTppbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBwYWRkaW5nOjAuMTg3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6MC4zNzVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBmb250LXdlaWdodDo3MDA7IGJhY2tncm91bmQ6cmdiYSg5OSwxMDIsMjQxLDAuMDgpOyBjb2xvcjojNjM2NmYxOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFudWFsIHJldmlldyBzdGF0dXMgw6LClMKAw6LClMKAXHJcbi5yZXZpZXctc3RhdHVzIHsgZm9udC1zaXplOjAuODEyNXJlbTsgZm9udC13ZWlnaHQ6NTAwOyB9XHJcbi5yZXZpZXctc3RhdHVzLnJldmlldy1wZW5kaW5nIHsgY29sb3I6dmFyKC0tb3JhbmdlLXRleHQpOyBmb250LXdlaWdodDo2MDA7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXN1bHQgcGlsbHMgw6LClMKAw6LClMKAXHJcbi5yZXN1bHQtcGlsbCB7IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowLjE4NzVyZW0gMC42MjVyZW07IGJvcmRlci1yYWRpdXM6MXJlbTsgZm9udC1zaXplOjAuNjg3NXJlbTsgZm9udC13ZWlnaHQ6NzAwOyBsZXR0ZXItc3BhY2luZzowLjAzZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLDAuMDQpOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuLnJlc3VsdC1waWxsLnJlc3VsdC1wYXNzIHsgYmFja2dyb3VuZDp2YXIoLS1ncmVlbi1iZyk7IGNvbG9yOnZhcigtLWdyZWVuLXRleHQpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5yZXN1bHQtcGlsbC5yZXN1bHQtZmFpbCB7IGJhY2tncm91bmQ6dmFyKC0tcmVkLWJnKTsgY29sb3I6dmFyKC0tcmVkLXRleHQpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEFuYWx5dGljcyBzZWN0aW9uIMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLXNlY3Rpb24geyBwYWRkaW5nOjAuNzVyZW0gMXJlbTsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjc1cmVtOyB9XHJcbi5hbmFseXRpY3Mtc2VjdGlvbiAudGFibGUtd3JhcCB7IG1pbi1oZWlnaHQ6IDUyMHB4OyBtYXgtaGVpZ2h0OiBtYXgoNTQwcHgsIGNhbGMoMTAwdmggLSAxODBweCkpOyBvdmVyZmxvdy14OmF1dG8gIWltcG9ydGFudDsgb3ZlcmZsb3cteTphdXRvICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6MC42MjVyZW07IGJveC1zaGFkb3c6JHNoYWRvdy1zbTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50YWJsZS13cmFwLnF1ZXN0aW9uLXN1bW1hcnktd3JhcCxcclxuOmhvc3QgOjpuZy1kZWVwIC5hbmFseXRpY3Mtc2VjdGlvbiAudGFibGUtd3JhcC5xdWVzdGlvbi1zdW1tYXJ5LXdyYXAgeyBtaW4taGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7IG1heC1oZWlnaHQ6IG5vbmUgIWltcG9ydGFudDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhZ2VyIMOiwpTCgMOiwpTCgFxyXG4ucGFnZXIgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZ2FwOjFyZW07IHBhZGRpbmc6MC44NzVyZW0gMS4yNXJlbTsgYm9yZGVyLXRvcDowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0yKTsgfVxyXG4ucGFnZXIgc3BhbiB7IHBhZGRpbmc6MC4yNXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOjAuMzc1cmVtOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ucGFnZXIgYnV0dG9uIHsgYm9yZGVyLXJhZGl1czowLjVyZW0gIWltcG9ydGFudDsgZm9udC13ZWlnaHQ6NjAwICFpbXBvcnRhbnQ7IHBhZGRpbmc6MC4zNzVyZW0gMXJlbSAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2UgIWltcG9ydGFudDsgfVxyXG4ucGFnZXIgYnV0dG9uOm5vdChbZGlzYWJsZWRdKTpob3ZlciB7IGJveC1zaGFkb3c6JHNoYWRvdy1tZCAhaW1wb3J0YW50OyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4wNjI1cmVtKTsgYmFja2dyb3VuZDp2YXIoLS1iZy0yKSAhaW1wb3J0YW50OyB9XHJcbi5wYWdlciBidXR0b25bZGlzYWJsZWRdIHsgb3BhY2l0eTowLjQ7IH1cclxuXHJcbkBrZXlmcmFtZXMgc2hpbW1lciB7XHJcbiAgMCUgeyBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwOyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDIwMCUgMDsgfVxyXG59XHJcblxyXG4ubG9hZGVyLXBsYWNlaG9sZGVyIHsgXHJcbiAgcGFkZGluZzogMi41cmVtOyBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7IFxyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07IFxyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMCwwLDAuMDIpIDI1JSwgcmdiYSgwLDAsMCwwLjA1KSA1MCUsIHJnYmEoMCwwLDAsMC4wMikgNzUlKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDIwMCUgMTAwJTtcclxuICBhbmltYXRpb246IHNoaW1tZXIgMS41cyBpbmZpbml0ZTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgbWFyZ2luOiAxcmVtO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgV3JvbmctYW5zd2VyIGxpbmsgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LWxpbmsgeyBtYXJnaW4tbGVmdDogMC4zNzVyZW07IGZvbnQtc2l6ZTogMC44NXJlbTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgY3Vyc29yOiBwb2ludGVyOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjEyNXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4ud3Jvbmctc3VtbWFyeS1saW5rOmhvdmVyIHsgb3BhY2l0eTogMC44OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4xMjVyZW0pOyB9XHJcbi53YS1jb3VudC1saW5rIHsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDogMC4xMjVyZW07IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDcwMDsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCBjb2xvciAwLjJzICRlYXNlOyB9XHJcbi53YS1jb3VudC1saW5rOmhvdmVyIHsgb3BhY2l0eTogMC44NTsgfVxyXG4ud2EtYW5zd2VyLWxpbmsgeyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBmb250LXdlaWdodDogNzAwOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLndhLWFuc3dlci1saW5rOmhvdmVyIHsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDAuMDYyNXJlbSk7IH1cclxuLm11dGVkIHsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC1zaXplOiAwLjg1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU2hhcmVkIGJhY2tkcm9wICsgcGFuZWwgw6LClMKAw6LClMKAXHJcbkBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6IDAgfSB0byB7IG9wYWNpdHk6IDEgfSB9XHJcbkBrZXlmcmFtZXMgc2xpZGVVcCB7IGZyb20geyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMS4yNXJlbSkgc2NhbGUoMC45NikgfSB0byB7IG9wYWNpdHk6IDE7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSBzY2FsZSgxKSB9IH1cclxuQGtleWZyYW1lcyBzdWJ0bGVQdWxzZSB7IDAlLCAxMDAlIHsgYm94LXNoYWRvdzogMCAxLjVyZW0gMy43NXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9IDUwJSB7IGJveC1zaGFkb3c6IDAgMS43NXJlbSA0cmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7IH0gfVxyXG5cclxuLndyb25nLXN1bW1hcnktYmFja2Ryb3AgeyBwb3NpdGlvbjogZml4ZWQ7IGluc2V0OiAwOyBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSBhdCBjZW50ZXIsIHJnYmEoMTUsIDIzLCA0MiwgMC41NSkgMCUsIHJnYmEoMzAsIDQxLCA1OSwgMC43NSkgMTAwJSk7IC13ZWJraXQtYmFja2Ryb3AtZmlsdGVyOiBibHVyKDAuNzVyZW0pIHNhdHVyYXRlKDE0MCUpOyBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC43NXJlbSkgc2F0dXJhdGUoMTQwJSk7IHotaW5kZXg6IDEwMDUwOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgcGFkZGluZzogMS41cmVtOyBhbmltYXRpb246IGZhZGVJbiAwLjI1cyAkZWFzZTsgfVxyXG5cclxuLndyb25nLXN1bW1hcnktcGFuZWwsXHJcbi5yZXNvdXJjZS1wYW5lbCB7IHBvc2l0aW9uOiByZWxhdGl2ZTsgd2lkdGg6IG1pbig1NnJlbSwgOTJ2dyk7IG1heC1oZWlnaHQ6IDg4dmg7IHotaW5kZXg6IDEwMDYwOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbmltYXRpb246IHNsaWRlVXAgMC4zNXMgJGVhc2UtYm91bmNlOyBtYXJnaW46IGF1dG87IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLmNhcmQsXHJcbi5yZXNvdXJjZS1wYW5lbCAuY2FyZCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IG1heC1oZWlnaHQ6IDg4dmg7IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAxLjI1cmVtOyBib3gtc2hhZG93OiAwIDJyZW0gNC41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4yOCksIDAgMC43NXJlbSAxLjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTsgb3ZlcmZsb3c6IGhpZGRlbjsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhbmVsIGhlYWRlciDDosKUwoDDosKUwoBcclxuLnBhbmVsLWhlYWRlciB7IHBvc2l0aW9uOnJlbGF0aXZlOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGdhcDoxcmVtOyBwYWRkaW5nOjEuMjVyZW0gMS41cmVtOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBmbGV4LXNocmluazowOyB9XHJcbi5wYW5lbC1oZWFkZXI6OmJlZm9yZSB7IGNvbnRlbnQ6Jyc7IHBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBib3R0b206MDsgd2lkdGg6MC4xODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJ1dHRvbi0xKSwgdHJhbnNwYXJlbnQpOyBib3JkZXItcmFkaXVzOjAgMC4xODc1cmVtIDAuMTg3NXJlbSAwOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1pbmZvIHsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjg3NXJlbTsgbWluLXdpZHRoOjA7IGZsZXg6MTsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItY29weSB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC4xODc1cmVtOyBtaW4td2lkdGg6MDsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiB7IHdpZHRoOjNyZW07IGhlaWdodDozcmVtOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZmxleC1zaHJpbms6MDsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OjAgMC41cmVtIDEuMjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKSwgaW5zZXQgMCAwIDAgMC4wNjI1cmVtIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiBtYXQtaWNvbiB7IGZvbnQtc2l6ZToxLjM3NXJlbTsgd2lkdGg6MS4zNzVyZW07IGhlaWdodDoxLjM3NXJlbTsgfVxyXG4ucGFuZWwtaGVhZGVyIGg0IHsgbWFyZ2luOjA7IGZvbnQtc2l6ZToxLjA2MjVyZW07IGZvbnQtd2VpZ2h0OjgwMDsgbGV0dGVyLXNwYWNpbmc6LTAuMDJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5wYW5lbC1oZWFkZXIgLnBhbmVsLXN1YiB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgbWFyZ2luLXRvcDowOyBsaW5lLWhlaWdodDoxLjQ7IH1cclxuLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXSxcclxuLnBhbmVsLWhlYWRlciAucGFuZWwtY2xvc2UtYnRuIHtcclxuICB3aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi1oZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1heC13aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWF4LWhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKSAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2UgIWltcG9ydGFudDtcclxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wYW5lbC1oZWFkZXIgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0gLm1hdC1tZGMtYnV0dG9uLXRvdWNoLXRhcmdldCxcclxuOmhvc3QgOjpuZy1kZWVwIC5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0biAubWF0LW1kYy1idXR0b24tdG91Y2gtdGFyZ2V0IHtcclxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dIG1hdC1pY29uLFxyXG46aG9zdCA6Om5nLWRlZXAgLnBhbmVsLWhlYWRlciAucGFuZWwtY2xvc2UtYnRuIG1hdC1pY29uIHtcclxuICB3aWR0aDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMikgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXTpob3ZlcixcclxuLnBhbmVsLWhlYWRlciAucGFuZWwtY2xvc2UtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMzksIDY4LCA2OCwgMC4zKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjZWY0NDQ0ICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNzVyZW0gcmdiYSgyMzksIDY4LCA2OCwgMC4xNSkgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wYW5lbC1oZWFkZXIgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl06aG92ZXIgbWF0LWljb24sXHJcbi5wYW5lbC1oZWFkZXIgLnBhbmVsLWNsb3NlLWJ0bjpob3ZlciBtYXQtaWNvbiB7XHJcbiAgY29sb3I6ICNlZjQ0NDQgIWltcG9ydGFudDtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBQYW5lbCBib2R5IMOiwpTCgMOiwpTCgFxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keSB7IHBhZGRpbmc6MS4xMjVyZW0gMS4zNzVyZW07IG92ZXJmbG93OmF1dG87IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5xdWVzdGlvbi10aXRsZSB7IGZvbnQtd2VpZ2h0OjcwMDsgbWFyZ2luLWJvdHRvbTowLjg3NXJlbTsgZm9udC1zaXplOjAuOTM3NXJlbTsgbGV0dGVyLXNwYWNpbmc6LTAuMDFlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyBwYWRkaW5nOjAuODc1cmVtIDFyZW07IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zbWFsbC1tdXRlZCB7IGZvbnQtc2l6ZTowLjY4NzVyZW07IHBhZGRpbmctbGVmdDowOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTdW1tYXJ5IHRhYmxlIMOiwpTCgMOiwpTCgFxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB7IHdpZHRoOjEwMCU7IGJvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZTsgYm9yZGVyLXNwYWNpbmc6MCAwLjVyZW07IG1hcmdpbjowIGF1dG87IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQgdGggeyB0ZXh0LWFsaWduOmNlbnRlcjsgcGFkZGluZzowLjc1cmVtIDFyZW07IGZvbnQtd2VpZ2h0OjcwMDsgZm9udC1zaXplOjAuNzVyZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6MC4wNmVtOyBjb2xvcjp2YXIoLS10aGVtZS0xLXRleHQtMSk7IGJhY2tncm91bmQ6dmFyKC0tdGFibGUtaGVhZGVyLWJnKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB0aDpmaXJzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6MC42MjVyZW0gMCAwIDAuNjI1cmVtOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHRoOmxhc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAgMC42MjVyZW0gMC42MjVyZW0gMDsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ciB7IGJhY2tncm91bmQ6dHJhbnNwYXJlbnQ7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQgeyBwYWRkaW5nOjAuODc1cmVtIDFyZW07IHZlcnRpY2FsLWFsaWduOm1pZGRsZTsgdGV4dC1hbGlnbjpjZW50ZXI7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOmZpcnN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowLjYyNXJlbSAwIDAgMC42MjVyZW07IHRleHQtYWxpZ246bGVmdDsgZm9udC13ZWlnaHQ6NjAwOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQ6bGFzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6MCAwLjYyNXJlbSAwLjYyNXJlbSAwOyB9XHJcbi53YS1hbnN3ZXItbGluaywgLndhLWNvdW50LWxpbmsgeyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGZvbnQtd2VpZ2h0OjYwMDsgdHJhbnNpdGlvbjpvcGFjaXR5IDAuMTVzICRlYXNlOyB9XHJcbi53YS1hbnN3ZXItbGluazpob3ZlciwgLndhLWNvdW50LWxpbms6aG92ZXIgeyBvcGFjaXR5OjAuNzU7IHRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmU7IHRleHQtdW5kZXJsaW5lLW9mZnNldDowLjEyNXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFN1bW1hcnkgYWN0aW9ucyDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktYWN0aW9ucyxcclxuLnN1bW1hcnktYWN0aW9ucyB7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyBnYXA6MC41cmVtOyBwYWRkaW5nOjAuODc1cmVtIDEuMzc1cmVtOyBib3JkZXItdG9wOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyB9XHJcbi5zdW1tYXJ5LWFjdGlvbnMgYnV0dG9uIHsgYm9yZGVyLXJhZGl1czowLjYyNXJlbSAhaW1wb3J0YW50OyBmb250LXdlaWdodDo3MDAgIWltcG9ydGFudDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMTVzICRlYXNlLCBib3gtc2hhZG93IDAuMTVzICRlYXNlLCB0cmFuc2Zvcm0gMC4xNXMgJGVhc2UgIWltcG9ydGFudDsgfVxyXG4uc3VtbWFyeS1hY3Rpb25zIGJ1dHRvbjpob3ZlciB7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjA2MjVyZW0pOyBib3gtc2hhZG93OjAgMC43NXJlbSAxLjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKSAhaW1wb3J0YW50OyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmVzb3VyY2UgcGFuZWwgw6LClMKAw6LClMKAXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keSwgLndyb25nLXN1bW1hcnktcGFuZWwgLnJlc291cmNlLWxpc3QgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuNzVyZW07IH1cclxuLnJlc291cmNlLWxpc3QgeyBsaXN0LXN0eWxlOm5vbmU7IHBhZGRpbmc6MDsgbWFyZ2luOjA7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC43NXJlbTsgfVxyXG4ucmVzb3VyY2UtbGlzdCBsaSB7IHBhZGRpbmc6MC44NzVyZW0gMXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGRpc3BsYXk6ZmxleDsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNzVyZW07IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB0cmFuc2l0aW9uOmJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2UsIGJvcmRlci1jb2xvciAwLjI1cyAkZWFzZTsgfVxyXG4ucmVzb3VyY2UtbGlzdCBsaTpob3ZlciB7IGJveC1zaGFkb3c6MCAxcmVtIDJyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuMTI1cmVtKTsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucmVzLXRpdGxlIHsgZm9udC13ZWlnaHQ6NzAwOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IH1cclxuLnJlcy1kZXNjIHsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi5yZXMtYWN0aW9ucyBhIHsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpOyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSk7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyB0ZXh0LWRlY29yYXRpb246IG5vbmU7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBmb250LXdlaWdodDogNjAwOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzICRlYXNlLCBib3gtc2hhZG93IDAuMTVzICRlYXNlOyB9XHJcbi5yZXMtYWN0aW9ucyBhOmhvdmVyIHsgb3BhY2l0eTogMC45OyBib3gtc2hhZG93OiAkc2hhZG93LXNtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU2Nyb2xsYmFyIMOiwpTCgMOiwpTCgFxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keSxcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5LFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHkgeyBvdmVyZmxvdzogYXV0bzsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIgeyBoZWlnaHQ6IDAuMzc1cmVtOyB3aWR0aDogMC4zNzVyZW07IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHsgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAwLjE4NzVyZW07IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyLFxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHk6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHsgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgVXNlciBSZXZpZXcgUGFuZWwgw6LClMKAw6LClMKAXHJcbi51c2VyLXJldmlldy1wYW5lbCB7IHdpZHRoOiBtaW4oNzJyZW0sIDk0dncpOyBtYXgtaGVpZ2h0OiA5MHZoOyBtYXJnaW46IGF1dG87IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5jYXJkIHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IG1heC1oZWlnaHQ6OTB2aDsgYm9yZGVyLXJhZGl1czoxLjI1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm94LXNoYWRvdzowIDJyZW0gNC41cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4yOCksIDAgMC43NXJlbSAxLjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjEyKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IG92ZXJmbG93OmhpZGRlbjsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciB7IHBvc2l0aW9uOnJlbGF0aXZlOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OnNwYWNlLWJldHdlZW47IGdhcDoxcmVtOyBwYWRkaW5nOjEuMjVyZW0gMS41cmVtOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMikgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBmbGV4LXNocmluazowOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyOjpiZWZvcmUgeyBjb250ZW50OicnOyBwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgYm90dG9tOjA7IHdpZHRoOjAuMTg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1idXR0b24tMSksIHRyYW5zcGFyZW50KTsgYm9yZGVyLXJhZGl1czowIDAuMTg3NXJlbSAwLjE4NzVyZW0gMDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuaGVhZGVyLWluZm8geyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgZ2FwOjAuNXJlbTsgZmxleDoxOyBtaW4td2lkdGg6MDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuaGVhZGVyLWljb24geyB3aWR0aDozcmVtOyBoZWlnaHQ6M3JlbTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGp1c3RpZnktY29udGVudDpjZW50ZXI7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm94LXNoYWRvdzowIDAuNXJlbSAxLjI1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyksIGluc2V0IDAgMCAwIDAuMDYyNXJlbSB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGZsZXgtc2hyaW5rOjA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIG1hdC1pY29uIHsgZm9udC1zaXplOjEuMzc1cmVtOyB3aWR0aDoxLjM3NXJlbTsgaGVpZ2h0OjEuMzc1cmVtOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIGg0IHsgbWFyZ2luOjA7IGZvbnQtc2l6ZToxLjEyNXJlbTsgZm9udC13ZWlnaHQ6ODAwOyBsZXR0ZXItc3BhY2luZzotMC4wMmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIGgzIHsgbWFyZ2luOjA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjUwMDsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjVyZW07IGZsZXgtd3JhcDp3cmFwOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5zY29yZSB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0yKTsgZm9udC13ZWlnaHQ6NjAwOyBwYWRkaW5nOjAuMjVyZW0gMC42MjVyZW07IGJvcmRlci1yYWRpdXM6MC41cmVtOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgZm9udC1zaXplOjAuODEyNXJlbTsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXN1bHQgeyBmb250LXdlaWdodDo3MDA7IHBhZGRpbmc6MC4yNXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOjYyLjVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBsZXR0ZXItc3BhY2luZzowLjA0ZW07IHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTsgYm94LXNoYWRvdzowIDAuMTI1cmVtIDAuNXJlbSByZ2JhKDE1LDIzLDQyLDAuMDgpOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXN1bHQucGFzcyB7IGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKTsgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXN1bHQuZmFpbCB7IGNvbG9yOiAjZmZmOyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG4ge1xyXG4gIHdpZHRoOiAyLjc1cmVtO1xyXG4gIGhlaWdodDogMi43NXJlbTtcclxuICBtaW4td2lkdGg6IDIuNzVyZW07XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSk7XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMik7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3JkZXItY29sb3IgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlO1xyXG4gIGZsZXg6IDAgMCAyLjc1cmVtO1xyXG59XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXZpZXctY2xvc2UtYnRuIG1hdC1pY29uIHtcclxuICB3aWR0aDogMS4yNXJlbTtcclxuICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4yNXJlbTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4zNzVyZW0gMC44NzVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTtcclxufVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0bjpmb2N1cy12aXNpYmxlIHtcclxuICBvdXRsaW5lOiAwLjEyNXJlbSBzb2xpZCB2YXIoLS1idXR0b24tMSk7XHJcbiAgb3V0bGluZS1vZmZzZXQ6IDAuMTI1cmVtO1xyXG59XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtc3ViIHsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWJvZHkgeyBmbGV4OjE7IG92ZXJmbG93OmF1dG87IG1heC1oZWlnaHQ6IGNhbGMoOTB2aCAtIDEwcmVtKTsgcGFkZGluZzogMS41cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgQXR0ZW1wdCBoZWFkZXIgw6LClMKAw6LClMKAXHJcbi5hdHRlbXB0LWhlYWRlciB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMC4zNzVyZW07IHBhZGRpbmc6IDAuNzVyZW0gMDsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7IG1hcmdpbi1ib3R0b206IDAuODc1cmVtOyB9XHJcbi5hdHRlbXB0LWhlYWRlciBoNSB7IG1hcmdpbjogMDsgZm9udC1zaXplOiAxcmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNzVyZW07IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAtMC4wMWVtOyB9XHJcbi5hdHRlbXB0LWhlYWRlciAuc2NvcmUtYmFkZ2UgeyBiYWNrZ3JvdW5kOiAjZTlmN2VmOyBjb2xvcjogIzBhODA0MzsgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czogJHJhZGl1czsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAwLjg3NXJlbTsgbWFyZ2luLWxlZnQ6IGF1dG87IGxldHRlci1zcGFjaW5nOiAwLjAxZW07IH1cclxuLmF0dGVtcHQtbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC43NXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUXVlc3Rpb24gcmV2aWV3IGNhcmRzIMOiwpTCgMOiwpTCgFxyXG4ucXVlc3Rpb25zLWxpc3QgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBnYXA6IDFyZW07IG1hcmdpbi10b3A6IDAuNXJlbTsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQgeyBwb3NpdGlvbjpyZWxhdGl2ZTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOiAwLjg3NXJlbTsgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07IGJhY2tncm91bmQ6IHZhcigtLWJnLTEpOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2U7IGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgxNSwyMyw0MiwwLjAzKTsgb3ZlcmZsb3c6aGlkZGVuOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZDo6YmVmb3JlIHsgY29udGVudDonJzsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDowLjE4NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCByZ2JhKDk5LDEwMiwyNDEsMC40KSAxMDAlKTsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQ6aG92ZXIgeyBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS43NXJlbSByZ2JhKDE1LDIzLDQyLDAuMDgpOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4yNSk7IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkIC5xLXRleHQgeyBmb250LXdlaWdodDogNTAwOyBsaW5lLWhlaWdodDogMS41NTsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQgLm1hcmstYmFkZ2UgeyBmbG9hdDogcmlnaHQ7IGJhY2tncm91bmQ6ICNmZmYzZjM7IGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBmb250LXdlaWdodDogNjAwOyBmb250LXNpemU6IDAuNzVyZW07IH1cclxuXHJcbi5xLWhlYWQtcm93IHsgZGlzcGxheTogZmxleDsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgZ2FwOiAxcmVtOyBtYXJnaW4tYm90dG9tOiAxcmVtOyBwYWRkaW5nLWJvdHRvbTogMXJlbTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIGRhc2hlZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLnEtbGVmdCB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC44NzVyZW07IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cclxuLnEtYm9keSB7IGRpc3BsYXk6IGdyaWQ7IGdhcDogMC41cmVtOyBmbGV4OiAxOyBtaW4td2lkdGg6IDA7IH1cclxuLnEtbWV0YSB7IGRpc3BsYXk6IGZsZXg7IGdhcDogMC41cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuLnEtaW5kZXggeyB3aWR0aDogMi4yNXJlbTsgaGVpZ2h0OiAyLjI1cmVtOyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsMC4xOCkgMCUsIHJnYmEoOTksMTAyLDI0MSwwLjA2KSAxMDAlKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMTgpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiA4MDA7IGZvbnQtc2l6ZTogMC44NzVyZW07IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5xLXJpZ2h0IHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjYyNXJlbTsgYWxpZ24taXRlbXM6IGNlbnRlcjsgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgZmxleC1zaHJpbms6IDA7IH1cclxuLnEtYmFkZ2UgeyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgcGFkZGluZzogMC4yNXJlbSAwLjYyNXJlbTsgZm9udC1zaXplOiAwLjY4NzVyZW07IGxpbmUtaGVpZ2h0OiAxcmVtOyB3aWR0aDogZml0LWNvbnRlbnQ7IGZvbnQtd2VpZ2h0OiA3MDA7IGxldHRlci1zcGFjaW5nOiAwLjA2ZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cclxuLnEtaW5mbyB7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsgZ2FwOiAwLjM3NXJlbTsgZm9udC13ZWlnaHQ6IDUwMDsgfVxyXG4ucS1pbmZvIG1hdC1pY29uIHsgZm9udC1zaXplOiAwLjkzNzVyZW07IHdpZHRoOiAwLjkzNzVyZW07IGhlaWdodDogMC45Mzc1cmVtOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyB9XHJcbi5xLW1hcmtzLnNtYWxsLW11dGVkIHsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFF1ZXN0aW9uIG9wdGlvbnMgKGNob29zZSAvIG11bHRpKSDDosKUwoDDosKUwoBcclxuLnEtb3B0aW9ucyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtd3JhcDogd3JhcDsgZ2FwOiAwLjYyNXJlbTsgfVxyXG4ucS1vcHRpb25zLnR3by1jb2wgeyBkaXNwbGF5OiBncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IGdhcDogMC43NXJlbTsgfVxyXG4ucS1vcHRpb24geyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuNzVyZW07IHBhZGRpbmc6IDAuNzVyZW0gMC44NzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjEpOyBiYWNrZ3JvdW5kOiAjZjhmYmZmOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzICRlYXNlLCBiYWNrZ3JvdW5kIDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2U7IH1cclxuLnEtb3B0aW9uOmhvdmVyIHsgYm94LXNoYWRvdzogJHNoYWRvdy1tZDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjEyNXJlbSk7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyB9XHJcbi5vcHQtbGVmdCB7IHdpZHRoOiAyLjVyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBmbGV4LXNocmluazogMDsgfVxyXG4ub3B0LWxlZnQgLm9wdC1tYXJrIHsgd2lkdGg6IDJyZW07IGhlaWdodDogMnJlbTsgYm9yZGVyLXJhZGl1czogNTAlOyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpOyBkaXNwbGF5OiBpbmxpbmUtZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZvbnQtd2VpZ2h0OiA3MDA7IGZvbnQtc2l6ZTogMC44MTI1cmVtOyB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMTVzICRlYXNlOyB9XHJcbi5vcHQtYm9keSB7IGZsZXg6IDE7IHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07IGFsaWduLXNlbGY6IGNlbnRlcjsgbGluZS1oZWlnaHQ6IDEuNDU7IH1cclxuLm9wdC1iYWRnZSB7IG1hcmdpbi1sZWZ0OiBhdXRvOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuMzc1cmVtOyBmbGV4LXNocmluazogMDsgfVxyXG4uYmFkZ2UgeyBwYWRkaW5nOiAwLjI1cmVtIDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOiAxcmVtOyBmb250LXNpemU6IDAuNjg3NXJlbTsgZm9udC13ZWlnaHQ6IDYwMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTsgfVxyXG4uYmFkZ2UueW91ci1hbnN3ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtYmcpOyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1icmVkLWJvcmRlcik7IH1cclxuLmJhZGdlLmNvcnJlY3QgeyBiYWNrZ3JvdW5kOiAjZThmOWVmOyBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5iYWRnZS5taXNzZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWJnKTsgY29sb3I6IHZhcigtLWJibHVlLXRleHQpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyB9XHJcbi5xLW9wdGlvbi5zZWxlY3RlZCB7IGJhY2tncm91bmQ6IHZhcigtLXJlZC1iZyk7IGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYnJlZC1ib3JkZXIpOyB9XHJcbi5xLW9wdGlvbi5zZWxlY3RlZCAub3B0LW1hcmsgeyBiYWNrZ3JvdW5kOiByZ2JhKDE4NSwyOCwyOCwwLjEpOyB9XHJcbi5xLW9wdGlvbi5jb3JyZWN0IHsgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tYmcpOyBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCk7IGJvcmRlci1jb2xvcjogdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLnEtb3B0aW9uLmNvcnJlY3QgLm9wdC1tYXJrIHsgYmFja2dyb3VuZDogcmdiYSgyMiwxMDEsNTIsMC4xKTsgfVxyXG4ucS1vcHRpb24ubWlzc2VkIHsgYmFja2dyb3VuZDogdmFyKC0tYmx1ZS1iZyk7IGNvbG9yOiB2YXIoLS1iYmx1ZS10ZXh0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1iYmx1ZS1ib3JkZXIpOyB9XHJcbi5xLW9wdGlvbi5taXNzZWQgLm9wdC1tYXJrIHsgYmFja2dyb3VuZDogcmdiYSgxMSwxMDIsMjA4LDAuMSk7IH1cclxuXHJcbi5xLXNlbGVjdGVkLCAucS1tYXJrcyB7IG1hcmdpbi10b3A6IDAuNXJlbTsgZm9udC1zaXplOiAwLjg3NXJlbTsgfVxyXG4ucS1mZWVkYmFjayB7IG1hcmdpbi10b3A6IDAuNjI1cmVtOyBiYWNrZ3JvdW5kOiByZ2JhKDI0MCwyNDgsMjU1LDAuNik7IHBhZGRpbmc6IDAuNjI1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC43NSk7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgbGluZS1oZWlnaHQ6IDEuNTsgfVxyXG4ucS1ldmFsdWF0aW9uLXN0YXRlIHsgbWFyZ2luLXRvcDogMC42MjVyZW07IHBhZGRpbmc6IDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMXJlbTsgfVxyXG4ucS1ldmFsdWF0aW9uLXN0YXRlLmZhaWxlZCB7IGNvbG9yOiAjOGExYzFjOyBiYWNrZ3JvdW5kOiAjZmZmMmYyOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjZWZiNGI0OyB9XHJcbi5xLWV2YWx1YXRpb24tc3RhdGUucGVuZGluZyB7IGNvbG9yOiAjNmM0YTAwOyBiYWNrZ3JvdW5kOiAjZmZmOGU2OyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCAjZTdjYTdhOyB9XHJcbi5yZXRyeS1ldmFsdWF0aW9uLWJ0biB7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIGN1cnJlbnRDb2xvcjsgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IHBhZGRpbmc6IDAuNHJlbSAwLjdyZW07IGNvbG9yOiBpbmhlcml0OyBiYWNrZ3JvdW5kOiAjZmZmOyBjdXJzb3I6IHBvaW50ZXI7IHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cclxuLnJldHJ5LWV2YWx1YXRpb24tYnRuOmRpc2FibGVkIHsgY3Vyc29yOiB3YWl0OyBvcGFjaXR5OiAwLjY7IH1cclxuLnJldmlldy1lbXB0eSB7IHBhZGRpbmc6IDAuNzVyZW0gMC4yNXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7IGZvbnQtc3R5bGU6IGl0YWxpYzsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hcmtzIGJhZGdlIHN0YXRlcyDDosKUwoDDosKUwoBcclxuLnEtbWFya3MubWFyay1wb3NpdGl2ZSxcclxuLnEtbWFya3MubWFyay1uZWdhdGl2ZSxcclxuLnEtbWFya3MubWFyay1taWQge1xyXG4gIG1pbi13aWR0aDogMy4yNXJlbTtcclxuICBoZWlnaHQ6IDJyZW07XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBwYWRkaW5nOiAwIDAuNjI1cmVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ncmlkICFpbXBvcnRhbnQ7XHJcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBmb250LXdlaWdodDogODAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IG5vcm1hbDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbi5xLW1hcmtzLm1hcmstcG9zaXRpdmUgeyBiYWNrZ3JvdW5kOiAjZThmOWVmOyBjb2xvcjogIzBiOGE0NTsgfVxyXG4ucS1tYXJrcy5tYXJrLW5lZ2F0aXZlIHsgYmFja2dyb3VuZDogI2ZmZjJmNDsgY29sb3I6ICNiMDJhMzc7IH1cclxuLnEtbWFya3MubWFyay1taWQgeyBiYWNrZ3JvdW5kOiAjZmZmOGU2OyBjb2xvcjogI2IzNmEwMDsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIEZpbGwgcXVlc3Rpb24gw6LClMKAw6LClMKAXHJcbi5xLWZpbGwgLmZpbGwtcm93IHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjc1cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb24geyBwYWRkaW5nOiAwLjYyNXJlbSAwLjg3NXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBiYWNrZ3JvdW5kOiAjZmZmN2VkOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDI0NSwxNjYsMzUsMC4xKTsgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjE1cyAkZWFzZTsgfVxyXG4ucS1maWxsIC5maWxsLW9wdGlvbjpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctc207IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb24uc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZThmNmZmOyBib3JkZXItY29sb3I6IHJnYmEoMiwxMTIsMjU1LDAuMTUpOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uLmNvcnJlY3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZyk7IGJvcmRlci1jb2xvcjogdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLnEtZmlsbCAuZmlsbC1jb3JyZWN0IHsgcGFkZGluZzogMC42MjVyZW0gMC44NzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC42KTsgZm9udC1zaXplOiAwLjgxMjVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWJnKTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBEZXNjcmlwdGl2ZSByZXZpZXcgw6LClMKAw6LClMKAXHJcbi5xLWRlc2NyaXB0aXZlIHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAwLjg3NXJlbTsgfVxyXG4uZGVzY3JpcHRpdmUtYW5zd2VycyB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDAsIDFmcikgbWlubWF4KDAsIDFmcik7IGdhcDogMC44NzVyZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBnYXA6IDAuNzVyZW07IG1hcmdpbi1ib3R0b206IDAuNjI1cmVtOyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWJnKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5kZXNjLXF1ZXN0aW9uIHsgZmxleDogMSAxIGF1dG87IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5xdWVzdGlvbi1sYWJlbCB7IGZvbnQtc2l6ZTogMC42ODc1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNmVtOyBjb2xvcjogIzhjNmFkNjsgYmFja2dyb3VuZDogcmdiYSgxNDAsMTA2LDIxNCwwLjA4KTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5xdWVzdGlvbi12YWx1ZSB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiByZ2JhKDAsMCwwLDAuODUpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuZGVzYy1zY29yZSB7IHdpZHRoOiA4Ljc1cmVtOyBmbGV4OiAwIDAgOC43NXJlbTsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnNjb3JlLWxhYmVsIHsgZm9udC1zaXplOiAwLjgxMjVyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuc2NvcmUtdmFsdWUgeyBmb250LXNpemU6IDEuMTI1cmVtOyBmb250LXdlaWdodDogODAwOyBjb2xvcjogI2YzOWMxMjsgYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzogMC43NXJlbSAwLjVyZW07IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDQpOyBtYXJnaW4tdG9wOiAwLjM3NXJlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1tb2RlbCB7IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRoZW1lLTIpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXN0dWRlbnQgeyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmVlbi1iZyk7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1tb2RlbCAubW9kZWwtbGFiZWwsXHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXN0dWRlbnQgLnN0dWRlbnQtbGFiZWwgeyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogcmdiYSgwLDAsMCwwLjcpOyBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTsgZm9udC1zaXplOiAwLjc1cmVtOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzogMC4wNGVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLW1vZGVsIC5tb2RlbC10ZXh0LFxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zdHVkZW50IC5hbnN3ZXItdGV4dCB7IGNvbG9yOiByZ2JhKDAsMCwwLDAuODUpOyBsaW5lLWhlaWdodDogMS41NTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1zY29yZSB7IHdpZHRoOiA4Ljc1cmVtOyBiYWNrZ3JvdW5kOiAjZmZmOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDQpOyBwYWRkaW5nOiAwLjYyNXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuc2NvcmUtbGFiZWwgeyBmb250LXdlaWdodDogNzAwOyBjb2xvcjogcmdiYSgwLDAsMCwwLjYpOyBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuc2NvcmUtdmFsdWUgeyBmb250LXNpemU6IDFyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjMGI2NmQwOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5xLWZlZWRiYWNrIHsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1iZyk7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGxpbmUtaGVpZ2h0OiAxLjU7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXZpZXcgY29tbWVudCBjb2x1bW5zIMOiwpTCgMOiwpTCgFxyXG4ucS1yZXZpZXctY29tbWVudHMge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZy10b3A6IDFyZW07XHJcbiAgYm9yZGVyLXRvcDogMC4wNjI1cmVtIGRhc2hlZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7XHJcbn1cclxuXHJcbi5yZXZpZXctY29sdW1ucyB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xyXG4gIGdhcDogMC44NzVyZW07XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgfVxyXG5cclxuICAuY29sIHtcclxuICAgIHBhZGRpbmc6IDAuODc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDRyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwLjVyZW0gMS4yNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTtcclxuICAgIH1cclxuXHJcbiAgICAmLm1pc3NlZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXJlZC1iZykgMCUsIHZhcigtLWJnLTEsICNmZmYpIDkwJSk7XHJcbiAgICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJyZWQtYm9yZGVyKTtcclxuICAgICAgYm9yZGVyLXRvcDogMC4xODc1cmVtIHNvbGlkIHZhcigtLXJlZC10ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmluY29ycmVjdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLW9yYW5nZS1iZykgMCUsIHZhcigtLWJnLTEsICNmZmYpIDkwJSk7XHJcbiAgICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJvcmFuZ2UtYm9yZGVyKTtcclxuICAgICAgYm9yZGVyLXRvcDogMC4xODc1cmVtIHNvbGlkIHZhcigtLW9yYW5nZS10ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAmLmluY29tcGxldGUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS15ZWxsb3ctYmcpIDAlLCB2YXIoLS1iZy0xLCAjZmZmKSA5MCUpO1xyXG4gICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1ieWVsbG93LWJvcmRlcik7XHJcbiAgICAgIGJvcmRlci10b3A6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS15ZWxsb3ctdGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbC1oZWFkZXIge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNik7XHJcblxyXG4gICAgICAuZG90IHtcclxuICAgICAgICB3aWR0aDogMC41cmVtO1xyXG4gICAgICAgIGhlaWdodDogMC41cmVtO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcblxyXG4gICAgICAgICYucmVkIHsgYmFja2dyb3VuZDogdmFyKC0tcmVkLXRleHQpOyB9XHJcbiAgICAgICAgJi5vcmFuZ2UgeyBiYWNrZ3JvdW5kOiB2YXIoLS1vcmFuZ2UtdGV4dCk7IH1cclxuICAgICAgICAmLnllbGxvdyB7IGJhY2tncm91bmQ6IHZhcigtLXllbGxvdy10ZXh0KTsgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMiwgIzM3NDE1MSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctZW1wdHkge1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMywgIzlDQTNBRik7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xyXG59XHJcblxyXG4ucmV2aWV3LWl0ZW0ge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEsICNmZmZmZmYpO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wOCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgcGFkZGluZzogMC43NXJlbSAwLjg3NXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcclxuICBib3gtc2hhZG93OiAwIDAuMDYyNXJlbSAwLjI1cmVtIHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgJGVhc2U7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMTUsIDIzLCA0MiwgMC4xNCk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gIH1cclxuXHJcbiAgLnJpLWJvZHkge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctdGV4dC1taXNzZWQsXHJcbi5yZXZpZXctdGV4dC1pbmNvcnJlY3QsXHJcbi5yZXZpZXctdGV4dC1pbmNvbXBsZXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGdhcDogMC42MjVyZW07XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICYuZGVsZXRlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAucmV2aWV3LXRleHQge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxuICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ucmktbGVmdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xyXG59XHJcblxyXG4ucmktaWNvbiB7XHJcbiAgd2lkdGg6IDEuMzc1cmVtO1xyXG4gIGhlaWdodDogMS4zNzVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcblxyXG4gICYubWlzc2VkIHtcclxuICAgIGJhY2tncm91bmQ6ICNmZWUyZTI7XHJcbiAgICBjb2xvcjogI2I5MWMxYztcclxuICB9XHJcbiAgJi5pbmNvcnJlY3Qge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZWRkNTtcclxuICAgIGNvbG9yOiAjYzI0MTBjO1xyXG4gIH1cclxuICAmLmluY29tcGxldGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZjNjNztcclxuICAgIGNvbG9yOiAjYjQ1MzA5O1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy10ZXh0IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogMS40NTtcclxuICBjb2xvcjogIzFlMjkzYjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgZmxleDogMTtcclxuXHJcbiAgJi5kZWxldGVkIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LXRleHQtaGlzdG9yeSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4uaGlzdG9yeS1lbnRyeSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIGRhc2hlZCAjZTJlOGYwO1xyXG5cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcclxuICB9XHJcblxyXG4gICYuZGVsZXRlZCB7XHJcbiAgICBvcGFjaXR5OiAwLjY7XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LW1ldGEge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4zNzVyZW07XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgfVxyXG5cclxuICAuZGVsZXRlZC1ieSB7XHJcbiAgICBjb2xvcjogI2RjMjYyNjtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LWFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tdG9wOiAwLjVyZW07XHJcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcclxuICBib3JkZXItdG9wOiAwLjA2MjVyZW0gZGFzaGVkICNlMmU4ZjA7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAuZWRpdGVkLWluZm8ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjEyNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuMzc1cmVtO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZ2FwOiAwLjM1cmVtO1xyXG4gICAgcGFkZGluZzogMC4zNXJlbSAwLjYyNXJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmOGZhZmM7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICBmb250LXNpemU6IDAuNzI1cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbiAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDMpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogI2YxZjVmOTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiAjY2JkNWUxO1xyXG4gICAgfVxyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBsaW5lLWhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogIzRmNDZlNSAhaW1wb3J0YW50O1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0ZWQtdGV4dCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIGdhcDogMC4yNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdG9yLW5hbWUge1xyXG4gICAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGVkLWRhdGUtc2VwIHtcclxuICAgICAgY29sb3I6ICM5NGEzYjg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICAgICAgbWFyZ2luOiAwIDAuMDVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRlZC1kYXRlIHtcclxuICAgICAgY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIC5lZGl0LWxpbmssXHJcbiAgLmRlbGV0ZS1saW5rLFxyXG4gIC5zYXZlLWxpbmssXHJcbiAgLmNhbmNlbC1saW5rIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMTVzIGVhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAuZWRpdC1saW5rIHtcclxuICAgIGNvbG9yOiAjMjU2M2ViO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4wOCk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgzNywgOTksIDIzNSwgMC4xNik7XHJcbiAgICAgIGNvbG9yOiAjMWQ0ZWQ4O1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZGVsZXRlLWxpbmsge1xyXG4gICAgY29sb3I6ICNkYzI2MjY7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgMzgsIDM4LCAwLjA4KTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgMzgsIDM4LCAwLjE2KTtcclxuICAgICAgY29sb3I6ICNiOTFjMWM7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zYXZlLWxpbmsge1xyXG4gICAgY29sb3I6ICMxNmEzNGE7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyLCAxNjMsIDc0LCAwLjA4KTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyLCAxNjMsIDc0LCAwLjE2KTtcclxuICAgICAgY29sb3I6ICMxNTgwM2Q7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYW5jZWwtbGluayB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTAwLCAxMTYsIDEzOSwgMC4wOCk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDExNiwgMTM5LCAwLjE2KTtcclxuICAgICAgY29sb3I6ICM0NzU1Njk7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBlZGl0aW5nIGZvciBkZXNjcmlwdGl2ZSBxdWVzdGlvbnMgw6LClMKAw6LClMKAXHJcbi5tYXJrcy1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuMzc1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDIuMjVyZW07XHJcbn1cclxuXHJcbi5tYXJrcy1kaXNwbGF5IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuICBwYWRkaW5nOiAwLjE4NzVyZW07XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1cmVtIDAuMTI1cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNCk7XHJcbn1cclxuXHJcbi5tYXJrcy1kaXNwbGF5IC5xLW1hcmtzLm1hcmstcG9zaXRpdmUsXHJcbi5tYXJrcy1kaXNwbGF5IC5xLW1hcmtzLm1hcmstbmVnYXRpdmUsXHJcbi5tYXJrcy1kaXNwbGF5IC5xLW1hcmtzLm1hcmstbWlkIHtcclxuICBtaW4td2lkdGg6IDMuNXJlbTtcclxuICBoZWlnaHQ6IDEuNzVyZW07XHJcbiAgcGFkZGluZzogMCAwLjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC4yNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW07XHJcbn1cclxuXHJcbi5tYXJrcy1kaXZpZGVyIHtcclxuICBvcGFjaXR5OiAwLjU1O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5lZGl0LW1hcmtzLWJ0biB7XHJcbiAgd2lkdGg6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjQzNzVyZW0gIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMC43MjtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIGJhY2tncm91bmQgMC4ycyAkZWFzZSwgY29sb3IgMC4ycyAkZWFzZTtcclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5OSwxMDIsMjQxLDAuMDgpO1xyXG4gICAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJjpmb2N1cy12aXNpYmxlIHtcclxuICAgIG91dGxpbmU6IDAuMTI1cmVtIHNvbGlkIHZhcigtLWJ1dHRvbi0xKTtcclxuICAgIG91dGxpbmUtb2Zmc2V0OiAwLjA2MjVyZW07XHJcbiAgfVxyXG59XHJcblxyXG4ubWFya3MtZWRpdCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gIHdpZHRoOiBtaW4oMjByZW0sIGNhbGMoMTAwdncgLSA0cmVtKSk7XHJcbiAgZ2FwOiAwLjYyNXJlbTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNXJlbSByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7XHJcbn1cclxuXHJcbi5tYXJrcy1pbnB1dCB7XHJcbiAgd2lkdGg6IDMuNXJlbTtcclxuICBwYWRkaW5nOiAwLjI1cmVtIDAuMzc1cmVtO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJvcmRlci0xKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2U7XHJcbiAgXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjEyNXJlbSByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcclxuICB9XHJcbiAgXHJcbiAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICAmOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJrcy1tYXgge1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5zYXZlLW1hcmtzLWJ0bixcclxuLmNhbmNlbC1tYXJrcy1idG4ge1xyXG4gIHdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLXdpZHRoOiAxLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNDM3NXJlbSAhaW1wb3J0YW50O1xyXG4gIGZsZXg6IDAgMCAxLjc1cmVtO1xyXG59XHJcblxyXG4uc2F2ZS1tYXJrcy1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLWJnKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZTtcclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICB9XHJcbn1cclxuXHJcbi5jYW5jZWwtbWFya3MtYnRuIHtcclxuICBjb2xvcjogdmFyKC0tcmVkLXRleHQpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJnKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZTtcclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB3aWR0aDogMXJlbTtcclxuICAgIGhlaWdodDogMXJlbTtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMC44NTtcclxuICB9XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXJrcyBIaXN0b3J5IFNlY3Rpb24gw6LClMKAw6LClMKAXHJcbi5tYXJrcy1oaXN0b3J5LXNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDk5LDEwMiwyNDEsMC4wMykgMCUsIHJnYmEoNTksMTMwLDI0NiwwLjAyKSAxMDAlKTtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjEpO1xyXG59XHJcblxyXG4ubWFya3MtaGlzdG9yeS1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBnYXA6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjg3NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBcclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gICAgd2lkdGg6IDEuMTI1cmVtO1xyXG4gICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJrcy1oaXN0b3J5LXRpbWVsaW5lIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAwO1xyXG59XHJcblxyXG4uaGlzdG9yeS1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC44NzVyZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaGlzdG9yeS1pbmRpY2F0b3Ige1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxLjVyZW07XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgXHJcbiAgLmRvdCB7XHJcbiAgICB3aWR0aDogMC43NXJlbTtcclxuICAgIGhlaWdodDogMC43NXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgyNTUsMjU1LDI1NSwxKTtcclxuICAgIFxyXG4gICAgJi5jdXJyZW50IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xNSksIDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMjUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAmLnBhc3Qge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOTRhM2I4LCAjNjQ3NDhiKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMTQ4LDE2MywxODQsMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5saW5lIHtcclxuICAgIHdpZHRoOiAwLjEyNXJlbTtcclxuICAgIGZsZXg6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDE0OCwxNjMsMTg0LDAuNCkgMCUsIHJnYmEoMTQ4LDE2MywxODQsMC4xKSAxMDAlKTtcclxuICAgIG1hcmdpbjogMC4yNXJlbSAwO1xyXG4gICAgbWluLWhlaWdodDogMXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNvbnRlbnQge1xyXG4gIGZsZXg6IDE7XHJcbiAgcGFkZGluZy1ib3R0b206IDAuODc1cmVtO1xyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlO1xyXG4gIFxyXG4gICYuY3VycmVudCB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDE2LDE4NSwxMjksMC4wOCkgMCUsIHJnYmEoNSwxNTAsMTA1LDAuMDQpIDEwMCUpO1xyXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgxNiwxODUsMTI5LDAuMik7XHJcbiAgICBib3gtc2hhZG93OiAwIDAuMTI1cmVtIDAuNXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xKTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgMC4zNzVyZW0gMXJlbSByZ2JhKDE2LDE4NSwxMjksMC4xOCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xODc1cmVtKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDE2LDE4NSwxMjksMC4zKTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgJi5wYXN0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LDI1MCwyNTIsMC44KTtcclxuICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNik7XHJcbiAgICBcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAkc2hhZG93LW1kO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTtcclxuICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1iYWRnZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgcGFkZGluZzogMC4xODc1cmVtIDAuNXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDNlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEsICMwNTk2NjkpO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuMzc1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1cmVtIDAuMjVyZW0gcmdiYSgxNiwxODUsMTI5LDAuMyk7XHJcbn1cclxuXHJcbi5oaXN0b3J5LW1hcmtzIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuODUpO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG4gIFxyXG4gIC5tYXJrcy10b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC40NSk7XHJcbiAgfVxyXG59XHJcblxyXG4uaGlzdG9yeS1jYXJkLnBhc3QgLmhpc3RvcnktbWFya3Mge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC42KTtcclxuICBcclxuICAubWFya3MtdG90YWwge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LW1ldGEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTtcclxuICBcclxuICAudXBkYXRlZC1ieSxcclxuICAudXBkYXRlZC1kYXRlIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgICAgIHdpZHRoOiAwLjg3NXJlbTtcclxuICAgICAgaGVpZ2h0OiAwLjg3NXJlbTtcclxuICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAudXBkYXRlZC1ieSB7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHJnYmEoMCwwLDAsMC43KTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNhcmQuY3VycmVudCAuaGlzdG9yeS1tZXRhIHtcclxuICAudXBkYXRlZC1ieSB7XHJcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4tdGV4dCk7XHJcbiAgfVxyXG59XHJcbi8vIMOiwpTCgMOiwpTCgCBSZXNwb25zaXZlIMOiwpTCgMOiwpTCgFxyXG5AbWVkaWEgKG1heC13aWR0aDogNTVyZW0pIHtcclxuICAucGFnZSB7IHBhZGRpbmc6IDAuNzVyZW0gMC43NXJlbSAycmVtOyB9XHJcbiAgLnRvb2xiYXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtOyB9XHJcbiAgLnNlbGVjdGlvbnMgeyBtYXgtd2lkdGg6IDEwMCU7IGZsZXg6IDEgMSAxMDAlOyB9XHJcbiAgLnJlcG9ydC1zdW1tYXJ5LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7IH1cclxuICAudGFiLWFjdGlvbnMgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogc3RyZXRjaDsgfVxyXG4gIC50YWItYWN0aW9ucyAuc2VhcmNoIHsgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbiAgLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IHsgZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgLnJldmlldy1jb2x1bW5zIHsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7IH1cclxuICAucS1vcHRpb25zLnR3by1jb2wgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC51c2VyLXJldmlldy1wYW5lbCB7IHdpZHRoOiA5NiU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCwgLnJlc291cmNlLXBhbmVsIHsgd2lkdGg6IDEwMCU7IG1heC13aWR0aDogMTAwJTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5jYXJkLCAucmVzb3VyY2UtcGFuZWwgLmNhcmQgeyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5IHsgcGFkZGluZzogMC43NXJlbTsgfVxyXG4gIC5xLWRlc2NyaXB0aXZlIC5kZXNjLXJvdyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1zY29yZSB7IHdpZHRoOiAxMDAlOyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLmRlc2Mtc2NvcmUgeyB3aWR0aDogMTAwJTsgZmxleDogbm9uZTsgbWFyZ2luLXRvcDogMC41cmVtOyB9XHJcbiAgLmRlc2NyaXB0aXZlLWFuc3dlcnMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC5xLWhlYWQtcm93IHsgZmxleC13cmFwOiB3cmFwOyB9XHJcbiAgLnEtcmlnaHQgeyBtYXJnaW4tbGVmdDogMy4xMjVyZW07IH1cclxufVxyXG4ubWFya3MtZWRpdC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuMzc1cmVtOyB9XHJcbi5tYXJrcy1yZWFzb24tbGFiZWwge1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMik7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLm1hcmtzLXJlYXNvbi1sYWJlbCBzcGFuLFxyXG4ubWFya3MtcmVhc29uLWVycm9yIHsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgfVxyXG4ubWFya3MtcmVhc29uLWVycm9yIHtcclxuICBtYXJnaW4tdG9wOiAtMC4yNXJlbTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzU7XHJcbn1cclxuLm1hcmtzLWVkaXQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgZ2FwOiAwLjM3NXJlbTtcclxuICBtaW4taGVpZ2h0OiAxLjc1cmVtO1xyXG59XHJcbi5tYXJrcy1yZWFzb24taW5wdXQgeyB3aWR0aDogMTAwJTsgbWluLWhlaWdodDogNXJlbTsgYm94LXNpemluZzogYm9yZGVyLWJveDsgcGFkZGluZzogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciwgI2QzZDllMik7IGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtOyBmb250OiBpbmhlcml0OyBsaW5lLWhlaWdodDogMS40OyByZXNpemU6IHZlcnRpY2FsOyB9XHJcbi5tYXJrcy1yZWFzb24taW5wdXQ6Zm9jdXMgeyBvdXRsaW5lOiBub25lOyBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IsICMyNjdjZmYpOyBib3gtc2hhZG93OiAwIDAgMCAwLjEyNXJlbSByZ2JhKDM4LDEyNCwyNTUsMC4xMik7IH1cclxuLm1hcmtzLXJlYXNvbi1pbnB1dFthcmlhLWludmFsaWQ9XCJ0cnVlXCJdLFxyXG4ubWFya3MtcmVhc29uLWlucHV0LmlucHV0LWVycm9yIHsgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1ICFpbXBvcnRhbnQ7IGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1cmVtIHJnYmEoMjIwLCA1MywgNjksIDAuMjUpICFpbXBvcnRhbnQ7IH1cclxuLmhpc3RvcnktcmVhc29uIHsgbWFyZ2luLXRvcDogMC40cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjY4KTsgbGluZS1oZWlnaHQ6IDEuNDsgfVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ1cmVtKSB7XHJcbiAgLnJlcG9ydC1zdW1tYXJ5LWdyaWQgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgcGFkZGluZzogMC44NzVyZW07IH1cclxuICAuc3VtbWFyeS1jYXJkIHsgcGFkZGluZzogMC44NzVyZW07IH1cclxuICAuc3VtbWFyeS1tZXRhIHsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlLFxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkLFxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5LFxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRyLFxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoLFxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRkIHsgZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMDAlOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQgeyBkaXNwbGF5OiBub25lOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdHIgeyBtYXJnaW4tYm90dG9tOiAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgb3ZlcmZsb3c6IGhpZGRlbjsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IHRleHQtYWxpZ246IGxlZnQ7IGJvcmRlci1yYWRpdXM6IDA7IGJvcmRlcjogbm9uZTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRkOmxhc3QtY2hpbGQgeyBib3JkZXItYm90dG9tOiBub25lOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQ6OmJlZm9yZSB7IGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMik7IG1hcmdpbi1yaWdodDogMC41cmVtOyB9XHJcbiAgLnNlbGVjdGlvbnMgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XHJcbn1cclxuLm1hbnVhbC1jaGVjay1jaGlwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogNHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgcGFkZGluZzogM3B4IDlweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZDk3NzA2O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjdlZDtcclxuICBjb2xvcjogIzlhMzQxMjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udDogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hbnVhbC1jaGVjay1jaGlwLnNlbGVjdGVkIHsgYmFja2dyb3VuZDogI2ZmZWRkNTsgZm9udC13ZWlnaHQ6IDYwMDsgfVxyXG4ubWFudWFsLWNoZWNrLWNoaXAgbWF0LWljb24geyB3aWR0aDogMTZweDsgaGVpZ2h0OiAxNnB4OyBmb250LXNpemU6IDE2cHg7IH1cclxuLmVkaXQtY29tbWVudC1yZWFzb24geyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IG1hcmdpbi10b3A6IDhweDsgfVxyXG4ucmV2aWV3LW1ldGEgLmVkaXQtcmVhc29uIHsgZGlzcGxheTogYmxvY2s7IG1hcmdpbi10b3A6IDJweDsgfVxyXG4uc2F2ZS1saW5rLmRpc2FibGVkIHsgb3BhY2l0eTogLjQ1OyBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XHJcblxyXG4uZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0uZmlsdGVyLWl0ZW0tLWZ1bGwge1xyXG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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