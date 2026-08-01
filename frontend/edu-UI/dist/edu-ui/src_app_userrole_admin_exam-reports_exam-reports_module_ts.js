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
function ExamReportsComponent_ng_template_22_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_form_field_25_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_form_field_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 23)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Industry");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r22.userFilters.industry = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_mat_select_openedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r24.onSelectOpened($event, "industry"));
    })("selectionChange", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_mat_select_selectionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r25.onIndustryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_div_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r27.searchQueries.industry = $event);
    })("click", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_input_keydown_5_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_input_keyup_5_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_mat_form_field_25_Template_input_input_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_22_mat_form_field_25_mat_option_8_Template, 2, 2, "mat-option", 28);
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
function ExamReportsComponent_ng_template_22_mat_form_field_26_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_form_field_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 23)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Sector");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r34.userFilters.sector = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_mat_select_openedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r36.onSelectOpened($event, "sector"));
    })("selectionChange", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_mat_select_selectionChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r37.onSectorChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_div_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r39.searchQueries.sector = $event);
    })("click", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_input_keydown_5_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_input_keyup_5_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_mat_form_field_26_Template_input_input_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_22_mat_form_field_26_mat_option_8_Template, 2, 2, "mat-option", 28);
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
function ExamReportsComponent_ng_template_22_mat_form_field_27_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_form_field_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-form-field", 23)(1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Institute");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-select", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_mat_select_ngModelChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r46.userFilters.institute_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_mat_select_openedChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r48.onSelectOpened($event, "institute"));
    })("selectionChange", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_mat_select_selectionChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r49.onInstituteChange($event.value));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_div_click_4_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_input_ngModelChange_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r51.searchQueries.institute = $event);
    })("click", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_input_click_5_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_input_keydown_5_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_input_keyup_5_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_mat_form_field_27_Template_input_input_5_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_ng_template_22_mat_form_field_27_mat_option_8_Template, 2, 2, "mat-option", 28);
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
function ExamReportsComponent_ng_template_22_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_option_50_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_option_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_mat_option_66_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 52);
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
function ExamReportsComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_0_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21)(2, "h4")(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "tune");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Filters");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 22)(7, "mat-form-field", 23)(8, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_select_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r62.userFilters.country_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_Template_mat_select_openedChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r64.onSelectOpened($event, "country"));
    })("selectionChange", function ExamReportsComponent_ng_template_22_Template_mat_select_selectionChange_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r65.onCountryChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_11_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r67.searchQueries.country = $event);
    })("click", function ExamReportsComponent_ng_template_22_Template_input_click_12_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_Template_input_keydown_12_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_Template_input_keyup_12_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_Template_input_input_12_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_ng_template_22_mat_option_15_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-form-field", 23)(17, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_select_ngModelChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r72.userFilters.city_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_Template_mat_select_openedChange_19_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r73.onSelectOpened($event, "city"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_20_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_input_ngModelChange_21_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r75.searchQueries.city = $event);
    })("click", function ExamReportsComponent_ng_template_22_Template_input_click_21_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_Template_input_keydown_21_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_Template_input_keyup_21_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_Template_input_input_21_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ExamReportsComponent_ng_template_22_mat_option_24_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ExamReportsComponent_ng_template_22_mat_form_field_25_Template, 9, 5, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_ng_template_22_mat_form_field_26_Template, 9, 6, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ExamReportsComponent_ng_template_22_mat_form_field_27_Template, 9, 5, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field", 23)(29, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Campus");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-select", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_select_ngModelChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r80.userFilters.campus_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_Template_mat_select_openedChange_31_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r81.onSelectOpened($event, "campus"));
    })("selectionChange", function ExamReportsComponent_ng_template_22_Template_mat_select_selectionChange_31_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r82.onCampusChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_32_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_input_ngModelChange_33_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r84.searchQueries.campus = $event);
    })("click", function ExamReportsComponent_ng_template_22_Template_input_click_33_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_Template_input_keydown_33_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_Template_input_keyup_33_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_Template_input_input_33_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, ExamReportsComponent_ng_template_22_mat_option_36_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-form-field", 23)(38, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "Department");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_select_ngModelChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r89.userFilters.department_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_Template_mat_select_openedChange_40_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r90.onSelectOpened($event, "department"));
    })("selectionChange", function ExamReportsComponent_ng_template_22_Template_mat_select_selectionChange_40_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r91.onFilterSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_41_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_input_ngModelChange_42_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r93.searchQueries.department = $event);
    })("click", function ExamReportsComponent_ng_template_22_Template_input_click_42_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_Template_input_keydown_42_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_Template_input_keyup_42_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_Template_input_input_42_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, ExamReportsComponent_ng_template_22_mat_option_43_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-form-field", 23)(45, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_select_ngModelChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r98.userFilters.teams_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_Template_mat_select_openedChange_47_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r99.onSelectOpened($event, "team"));
    })("selectionChange", function ExamReportsComponent_ng_template_22_Template_mat_select_selectionChange_47_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r100.onFilterSelectionChange());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_48_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_input_ngModelChange_49_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r102.searchQueries.team = $event);
    })("click", function ExamReportsComponent_ng_template_22_Template_input_click_49_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_Template_input_keydown_49_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_Template_input_keyup_49_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_Template_input_input_49_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, ExamReportsComponent_ng_template_22_mat_option_50_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "mat-form-field", 23)(52, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Schedule Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-select", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_select_ngModelChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r107.userFilters.schedule_id = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_Template_mat_select_openedChange_54_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r108.onSelectOpened($event, "schedule"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_55_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r110.searchQueries.schedule = $event);
    })("click", function ExamReportsComponent_ng_template_22_Template_input_click_56_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_Template_input_keydown_56_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_Template_input_keyup_56_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_Template_input_input_56_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, "Any");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, ExamReportsComponent_ng_template_22_mat_option_59_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-form-field", 23)(61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Active Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-select", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_select_ngModelChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r115.userFilters.active_status = $event);
    })("openedChange", function ExamReportsComponent_ng_template_22_Template_mat_select_openedChange_63_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r116.onSelectOpened($event, "active_status"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_div_click_64_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_input_ngModelChange_65_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r118.searchQueries.active_status = $event);
    })("click", function ExamReportsComponent_ng_template_22_Template_input_click_65_listener($event) {
      return $event.stopPropagation();
    })("keydown", function ExamReportsComponent_ng_template_22_Template_input_keydown_65_listener($event) {
      return $event.stopPropagation();
    })("keyup", function ExamReportsComponent_ng_template_22_Template_input_keyup_65_listener($event) {
      return $event.stopPropagation();
    })("input", function ExamReportsComponent_ng_template_22_Template_input_input_65_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](66, ExamReportsComponent_ng_template_22_mat_option_66_Template, 2, 2, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "mat-form-field", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_mat_form_field_click_67_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r123.openCreatedDateRangePicker());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Created Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "mat-icon", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "calendar_today");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 46)(74, "mat-checkbox", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_ng_template_22_Template_mat_checkbox_ngModelChange_74_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r124.userFilters.created_by_me = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " Created by Me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 48)(77, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_button_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r125.applyFiltersPanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "mat-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, " Apply ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](80, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_ng_template_22_Template_button_click_80_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r63);
      const ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r126.resetFiltersAndReload());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "mat-icon", 12);
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
function ExamReportsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "div", 61)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h3", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "No Test Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "p", 63);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_24_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r128);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r127.openFiltersOverlay());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "mat-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Filter Test Reports ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ExamReportsComponent_div_25_div_67_th_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_div_67_td_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r173 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 128)(1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_div_67_td_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r173);
      const row_r171 = restoredCtx.$implicit;
      const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r172.openUserReview(row_r171));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 131);
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
function ExamReportsComponent_div_25_div_67_th_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Marks / Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_div_67_td_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 132)(1, "span", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 134);
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
function ExamReportsComponent_div_25_div_67_th_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_div_67_td_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 132)(1, "span", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const row_r175 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](row_r175.percentage);
  }
}
function ExamReportsComponent_div_25_div_67_th_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Manual Review");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_div_67_td_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 132)(1, "span", 136);
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
function ExamReportsComponent_div_25_div_67_th_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_div_67_td_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 132)(1, "span", 137);
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
function ExamReportsComponent_div_25_div_67_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 138);
  }
}
function ExamReportsComponent_div_25_div_67_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 139);
  }
}
const _c3 = function () {
  return ["student_name", "questions_attempted", "correct_answers", "wrong_answers", "result"];
};
function ExamReportsComponent_div_25_div_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 98)(1, "table", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2, 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_25_div_67_th_3_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_25_div_67_td_4_Template, 6, 2, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](5, 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_25_div_67_th_6_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_25_div_67_td_7_Template, 6, 2, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](8, 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ExamReportsComponent_div_25_div_67_th_9_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_25_div_67_td_10_Template, 3, 1, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](11, 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ExamReportsComponent_div_25_div_67_th_12_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_25_div_67_td_13_Template, 3, 3, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](14, 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_25_div_67_th_15_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_25_div_67_td_16_Template, 3, 5, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_25_div_67_tr_17_Template, 1, 0, "tr", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_25_div_67_tr_18_Template, 1, 0, "tr", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 125)(20, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_div_67_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r180);
      const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r179.prevPage());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Prev");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "button", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_div_67_Template_button_click_24_listener() {
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
function ExamReportsComponent_div_25_div_68_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading user report...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_th_122_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question Bank");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 128)(1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_td_123_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r184);
      const c_r182 = restoredCtx.$implicit;
      const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r183.openCategoryQuestionSummary(c_r182));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 131);
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
function ExamReportsComponent_div_25_th_125_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r185 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r185.total_questions || c_r185.questions_count || 0);
  }
}
function ExamReportsComponent_div_25_th_128_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_129_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r186 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r186.no_of_students || c_r186.users_attempted || 0);
  }
}
function ExamReportsComponent_div_25_th_131_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const c_r187 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](c_r187.total_attempts || 0);
  }
}
function ExamReportsComponent_div_25_th_134_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_135_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 143)(1, "span");
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
function ExamReportsComponent_div_25_th_137_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
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
function ExamReportsComponent_div_25_td_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 132)(1, "span", 144);
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
function ExamReportsComponent_div_25_tr_139_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 138);
  }
}
function ExamReportsComponent_div_25_tr_140_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 139);
  }
}
function ExamReportsComponent_div_25_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 145)(1, "div", 146)(2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "filter_list");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Filtered by Question Bank: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_div_143_Template_button_click_8_listener() {
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
function ExamReportsComponent_div_25_th_147_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_148_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 132)(1, "span", 148);
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
function ExamReportsComponent_div_25_th_150_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_151_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r195 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", q_r195.question_text || q_r195.text, " ");
  }
}
function ExamReportsComponent_div_25_th_153_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Users Attempted");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_154_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r196 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r196.user_attempts || 0);
  }
}
function ExamReportsComponent_div_25_th_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r197 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r197.attempts || 0);
  }
}
function ExamReportsComponent_div_25_th_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "th", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_160_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_td_160_a_1_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_25_td_160_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_25_td_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "td", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_25_td_160_a_1_Template, 5, 1, "a", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_25_td_160_ng_template_2_Template, 2, 0, "ng-template", null, 151, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r198 = ctx.$implicit;
    const _r200 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (q_r198.mistakes || 0) > 0)("ngIfElse", _r200);
  }
}
function ExamReportsComponent_div_25_tr_161_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 138);
  }
}
function ExamReportsComponent_div_25_tr_162_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tr", 139);
  }
}
function ExamReportsComponent_div_25_div_163_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 154)(1, "span");
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
function ExamReportsComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 65)(1, "div", 66)(2, "mat-tab-group", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedTabChange", function ExamReportsComponent_div_25_Template_mat_tab_group_selectedTabChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r207.onTabChange($event));
    })("selectedIndexChange", function ExamReportsComponent_div_25_Template_mat_tab_group_selectedIndexChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r209.activeMainTabIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "mat-tab", 68)(4, "div", 69)(5, "div", 70)(6, "div", 71)(7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "groups");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 72)(10, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Students");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 70)(17, "div", 76)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "article");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 72)(21, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Current Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, "Paginated user report results");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 70)(28, "div", 77)(29, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "military_tech");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 72)(32, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Average Score");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](36, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Average marks from loaded users");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 70)(40, "div", 78)(41, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "task_alt");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 72)(44, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Pass Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](48, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Success ratio in current view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 79)(52, "div", 80)(53, "mat-form-field", 81)(54, "mat-icon", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_25_Template_input_ngModelChange_56_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r210.searchQuery = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 9)(58, "div", 10)(59, "button", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_Template_button_click_59_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r211.loadUserReport(1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](61, "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, " Search");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "button", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_25_Template_button_click_63_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r212 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r212.exportUserCSV());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](65, "download");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, " Export CSV");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, ExamReportsComponent_div_25_div_67_Template, 26, 9, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, ExamReportsComponent_div_25_div_68_Template, 2, 0, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "mat-tab", 88)(70, "div", 89)(71, "div", 90)(72, "div", 70)(73, "div", 91)(74, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "grid_view");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 72)(77, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Question Banks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Performance groups in analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "div", 70)(84, "div", 92)(85, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "quiz");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 72)(88, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](89, "Questions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 70)(95, "div", 93)(96, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "stacked_line_chart");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 72)(99, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, "Total Attempts");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Attempts recorded across categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 70)(106, "div", 94)(107, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "warning_amber");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "div", 72)(110, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](111, "Mistakes");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](112, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](114, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](115, "Wrong answers identified in analytics");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](116, "mat-tab-group", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedIndexChange", function ExamReportsComponent_div_25_Template_mat_tab_group_selectedIndexChange_116_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r208);
      const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r213.innerAnalyticsTabIndex = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "mat-tab", 96)(118, "div", 97)(119, "div", 98)(120, "table", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](121, 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](122, ExamReportsComponent_div_25_th_122_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](123, ExamReportsComponent_div_25_td_123_Template, 6, 2, "td", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](124, 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](125, ExamReportsComponent_div_25_th_125_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](126, ExamReportsComponent_div_25_td_126_Template, 2, 1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](127, 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](128, ExamReportsComponent_div_25_th_128_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](129, ExamReportsComponent_div_25_td_129_Template, 2, 1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](130, 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](131, ExamReportsComponent_div_25_th_131_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](132, ExamReportsComponent_div_25_td_132_Template, 2, 1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](133, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](134, ExamReportsComponent_div_25_th_134_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](135, ExamReportsComponent_div_25_td_135_Template, 3, 3, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](136, 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](137, ExamReportsComponent_div_25_th_137_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](138, ExamReportsComponent_div_25_td_138_Template, 3, 6, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](139, ExamReportsComponent_div_25_tr_139_Template, 1, 0, "tr", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](140, ExamReportsComponent_div_25_tr_140_Template, 1, 0, "tr", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](141, "mat-tab", 112)(142, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](143, ExamReportsComponent_div_25_div_143_Template, 13, 1, "div", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](144, "div", 98)(145, "table", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](146, 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](147, ExamReportsComponent_div_25_th_147_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](148, ExamReportsComponent_div_25_td_148_Template, 3, 1, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](149, 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](150, ExamReportsComponent_div_25_th_150_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](151, ExamReportsComponent_div_25_td_151_Template, 2, 1, "td", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](152, 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](153, ExamReportsComponent_div_25_th_153_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](154, ExamReportsComponent_div_25_td_154_Template, 2, 1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](155, 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](156, ExamReportsComponent_div_25_th_156_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](157, ExamReportsComponent_div_25_td_157_Template, 2, 1, "td", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](158, 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](159, ExamReportsComponent_div_25_th_159_Template, 2, 0, "th", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](160, ExamReportsComponent_div_25_td_160_Template, 4, 2, "td", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](161, ExamReportsComponent_div_25_tr_161_Template, 1, 0, "tr", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](162, ExamReportsComponent_div_25_tr_162_Template, 1, 0, "tr", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](163, ExamReportsComponent_div_25_div_163_Template, 3, 2, "div", 119);
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
function ExamReportsComponent_div_26_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Loading review...");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r225 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 177)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation is pending for answers in this answer sheet.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "button", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_1_Template_button_click_4_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 194);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_10_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r240 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 197);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_10_button_5_Template_button_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 194);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "mat-icon", 195);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_10_button_5_Template, 4, 5, "button", 196);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r247 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 201)(1, "div", 202)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 203);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "/");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "button", 204);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_1_Template_button_click_8_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "small", 216);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Description is required when changing marks");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r252 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 205)(1, "div", 206)(2, "input", 207);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_Template_input_ngModelChange_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r227._editedMarks = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 208);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "label", 209);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Change comment ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 210);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "textarea", 211);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r227._marksEditReason = $event);
    })("input", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_Template_textarea_input_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](q_r227._marksReasonError = false);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_small_10_Template, 2, 0, "small", 212);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 213)(12, "button", 214);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r252);
      const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
      const ctx_r257 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](5);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r257.saveMarks(q_r227));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 215);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_Template_button_click_15_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 198);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_1_Template, 11, 7, "div", 199);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_div_2_Template, 18, 11, "div", 200);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 202);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_17_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 221);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 217)(1, "div", 218)(2, "div", 219);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_17_div_4_Template, 2, 1, "div", 220);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 251)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation could not be completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.evaluation_error);
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 253)(1, "div")(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "AI evaluation is pending for this answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 254)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "High-level Feedback");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 252);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](q_r227.feedback || "No high-level feedback was returned for this answer.");
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No missed points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 277)(1, "div", 278)(2, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 280);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r301 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 281)(1, "div", 278)(2, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r291 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r291.updated_by || h_r291.created_by || h_r291.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 290)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 294);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r313 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r316 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r319 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r322 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 289);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_2_Template, 6, 4, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_3_Template, 5, 2, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_span_5_Template, 2, 1, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_div_6_Template, 6, 5, "div", 272);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_div_1_Template, 7, 6, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r283.history);
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 277)(1, "div", 278)(2, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 299);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r328 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 281)(1, "div", 278)(2, "span", 279);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template_textarea_ngModelChange_4_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 275)(1, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const rc_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r283.updated_by || rc_r283.created_by || rc_r283.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 290)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 294);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r342 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r345 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r348 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_div_1_Template, 11, 2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_2_Template, 4, 0, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_3_Template, 4, 0, "a", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_4_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_a_5_Template, 4, 0, "a", 289);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 266)(2, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_3_Template, 2, 1, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_4_Template, 6, 6, "div", 269);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_5_Template, 5, 2, "div", 270);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_6_Template, 3, 1, "div", 271);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_div_7_Template, 6, 5, "div", 272);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No incorrect points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 302)(1, "div", 278)(2, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 280);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r367 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 304)(1, "div", 278)(2, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r358 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r358.updated_by || h_r358.created_by || h_r358.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 290)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 294);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r378 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r381 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r384 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r387 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 289);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_2_Template, 6, 4, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_3_Template, 5, 2, "div", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_span_5_Template, 2, 1, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_div_6_Template, 6, 5, "div", 272);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_div_1_Template, 7, 6, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r350.history);
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 302)(1, "div", 278)(2, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 299);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 304)(1, "div", 278)(2, "span", 303);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template_textarea_ngModelChange_4_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r350.updated_by || rc_r350.reviewer_id || rc_r350.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 290)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 294);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r404 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r407 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r410 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_div_1_Template, 11, 2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_2_Template, 4, 0, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_3_Template, 4, 0, "a", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_4_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_a_5_Template, 4, 0, "a", 289);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 266)(2, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_3_Template, 2, 1, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_4_Template, 6, 6, "div", 300);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_5_Template, 5, 2, "div", 301);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_span_7_Template, 2, 1, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_div_8_Template, 6, 5, "div", 272);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 265);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No incomplete points.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 307)(1, "div", 278)(2, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 280);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r432 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 309)(1, "div", 278)(2, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template_textarea_ngModelChange_4_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const h_r423 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", h_r423.updated_by || h_r423.created_by || h_r423.reviewer_id || "System", "");
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 290)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 294);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r443 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r446 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r449 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r452 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_div_1_Template, 11, 2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_2_Template, 4, 0, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_3_Template, 4, 0, "a", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_4_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_a_5_Template, 4, 0, "a", 289);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 274);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_2_Template, 6, 4, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_3_Template, 5, 2, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_span_5_Template, 2, 1, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_div_6_Template, 6, 5, "div", 272);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 273);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_div_1_Template, 7, 6, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", rc_r415.history);
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 307)(1, "div", 278)(2, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span", 299);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r458 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 309)(1, "div", 278)(2, "span", 308);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "textarea", 282);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template_textarea_ngModelChange_4_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 283);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const rc_r415 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Deleted by ", rc_r415.updated_by || rc_r415.reviewer_id || rc_r415.commented_by || "Instructor", "");
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 290)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "edit_note");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "span", 291);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, " Edited by ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "strong", 292);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "span", 293);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "span", 294);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r469 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 295);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r472 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 296);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r475 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 297);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r478 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 298);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template_a_click_0_listener($event) {
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 284);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_div_1_Template, 11, 2, "div", 285);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_2_Template, 4, 0, "a", 286);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_3_Template, 4, 0, "a", 287);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_4_Template, 4, 0, "a", 288);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_a_5_Template, 4, 0, "a", 289);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 266)(2, "div", 267);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_3_Template, 2, 1, "div", 268);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_4_Template, 6, 6, "div", 305);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_5_Template, 5, 2, "div", 306);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 275);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_span_7_Template, 2, 1, "span", 276);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_div_8_Template, 6, 5, "div", 272);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 255)(1, "div", 256)(2, "div", 257)(3, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 259);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "Points Missed");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_7_Template, 2, 0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_8_Template, 8, 5, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 261)(10, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "span", 262);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Points Incorrect");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_14_Template, 2, 0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_15_Template, 9, 5, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 263)(17, "div", 258);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "span", 264);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, "Points Incomplete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](21, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_21_Template, 2, 0, "div", 260);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_div_22_Template, 9, 5, "div", 173);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 310);
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_span_40_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 311)(1, "mat-icon");
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_41_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 312)(1, "strong");
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 310);
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_span_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 311)(1, "mat-icon");
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 312)(1, "strong");
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 313)(1, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 314);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_div_3_Template, 1, 0, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 241)(5, "div", 315)(6, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 246)(11, "span", 247)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_span_15_Template, 4, 1, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_div_16_Template, 4, 1, "div", 249);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 222)(1, "div", 223)(2, "div", 224)(3, "div", 225);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Student's Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 226);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 227)(8, "div", 228);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Model Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 229);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_12_Template, 6, 1, "div", 230);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_13_Template, 4, 0, "div", 231);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_14_Template, 5, 1, "div", 232);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_15_Template, 23, 8, "div", 233);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 234)(17, "div", 235)(18, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "history");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Marks History");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 236)(23, "div", 237)(24, "div", 238);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 239);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_26_Template, 1, 0, "div", 240);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 241)(28, "div", 242)(29, "div", 243);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Current");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 244);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "span", 245);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "div", 246)(36, "span", 247)(37, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](40, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_span_40_Template, 4, 1, "span", 248);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](41, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_41_Template, 4, 1, "div", 249);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_div_42_Template, 17, 6, "div", 250);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_1_Template, 2, 0, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_2_Template, 2, 0, "span", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_span_3_Template, 2, 0, "span", 327);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 329);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 328);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Student Selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 330);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Missed Correct Option");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 324);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_1_Template, 2, 0, "span", 326);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_2_Template, 2, 0, "span", 325);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_span_3_Template, 2, 0, "span", 327);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 318)(1, "div", 319)(2, "span", 320);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 321)(5, "div", 322);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_7_Template, 4, 6, "div", 323);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_div_8_Template, 4, 6, "div", 323);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 316);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_div_1_Template, 9, 12, "div", 317);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const q_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", q_r227.options || _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c8));
  }
}
function ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 179)(1, "div", 180)(2, "div", 181)(3, "div", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 183)(6, "div", 184)(7, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_9_Template, 3, 6, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_10_Template, 6, 8, "div", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 187)(12, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_15_Template, 3, 2, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_16_Template, 2, 7, "div", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_17_Template, 5, 8, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_18_Template, 43, 14, "div", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_div_19_Template, 2, 2, "div", 193);
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
function ExamReportsComponent_div_26_div_20_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_div_1_Template, 6, 2, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ExamReportsComponent_div_26_div_20_div_1_div_1_div_3_Template, 20, 10, "div", 176);
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
function ExamReportsComponent_div_26_div_20_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_div_1_Template, 4, 3, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r216.userReviewAttempts);
  }
}
function ExamReportsComponent_div_26_div_20_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No review data available for this user.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_26_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ExamReportsComponent_div_26_div_20_div_1_Template, 2, 1, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_26_div_20_ng_template_2_Template, 2, 0, "ng-template", null, 172, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
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
function ExamReportsComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r511);
      const ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r510.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 157)(3, "div", 158)(4, "div", 159)(5, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "assignment");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 160)(8, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h3")(11, "span", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "span", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "button", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_button_click_15_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r511);
      const ctx_r513 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r513.closeUserReview());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, ExamReportsComponent_div_26_div_19_Template, 2, 0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, ExamReportsComponent_div_26_div_20_Template, 4, 2, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 168)(22, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_26_Template_button_click_22_listener() {
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
function ExamReportsComponent_div_27_div_17_tr_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r520 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr")(1, "td", 337)(2, "a", 338);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_17_tr_13_Template_a_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r520);
      const wa_r518 = restoredCtx.$implicit;
      const ctx_r519 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r519.openResourcesForWrongAnswer(ctx_r519.selectedQuestionForWrongSummary, wa_r518));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td", 339)(5, "a", 340);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_div_17_tr_13_Template_a_click_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r520);
      const wa_r518 = restoredCtx.$implicit;
      const ctx_r521 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      $event.stopPropagation();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r521.openResourcesForWrongAnswer(ctx_r521.selectedQuestionForWrongSummary, wa_r518));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "td", 341);
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
function ExamReportsComponent_div_27_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No wrong answer data available for this question.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_27_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "table", 336)(4, "thead")(5, "tr")(6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Wrong Answers");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "No. of times selected");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Occurrence %");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, ExamReportsComponent_div_27_div_17_tr_13_Template, 9, 3, "tr", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ExamReportsComponent_div_27_div_17_div_14_Template, 2, 0, "div", 166);
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
function ExamReportsComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r523 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r523);
      const ctx_r522 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r522.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 157)(3, "div", 158)(4, "div", 160)(5, "div", 159)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "rule_folder");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 332)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Wrong Answer Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Details for selected question");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r523);
      const ctx_r525 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r525.closeWrongAnswerSummary());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_27_div_17_Template, 15, 3, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 168)(19, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_27_Template_button_click_19_listener() {
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
function ExamReportsComponent_div_28_div_17_li_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "li")(1, "div", 345);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 346);
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
function ExamReportsComponent_div_28_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ul", 344);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ExamReportsComponent_div_28_div_17_li_2_Template, 5, 2, "li", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r527 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r527.selectedResources);
  }
}
function ExamReportsComponent_div_28_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "No resources linked for this wrong answer.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}
function ExamReportsComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r532 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r532);
      const ctx_r531 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r531.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 331);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_div_click_1_listener($event) {
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 157)(3, "div", 158)(4, "div", 160)(5, "div", 159)(6, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "folder_shared");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 332)(9, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Resources");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 342);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Resources related to the selected wrong answer");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "button", 343);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r532);
      const ctx_r534 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r534.closeResourcePanel());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-icon", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, ExamReportsComponent_div_28_div_17_Template, 3, 1, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, ExamReportsComponent_div_28_div_18_Template, 2, 0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 168)(20, "button", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_div_28_Template_button_click_20_listener() {
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
      decls: 29,
      vars: 7,
      consts: [[1, "page", "exam-reports"], [1, "toolbar"], [1, "selections"], ["appearance", "outline", 1, "local-institute-field", "disabled-toolbar-field"], ["matPrefix", "", "svgIcon", "institute"], ["matInput", "", "disabled", "", "placeholder", "Institute Name", "aria-label", "Institute", 3, "value"], ["appearance", "outline", 1, "scheduled-test-field", "disabled-toolbar-field"], ["matPrefix", "", "svgIcon", "exam"], ["type", "text", "matInput", "", "disabled", "", "placeholder", "Schedule Test", "aria-label", "Scheduled test", 3, "value"], [1, "controls"], [1, "action-row"], ["mat-flat-button", "", "type", "button", "title", "Refresh & Clear Filters", 1, "refresh-icon-btn", 3, "click"], ["svgIcon", "refresh"], ["mat-flat-button", "", "type", "button", 1, "button-one", 3, "click"], ["filtersBtn", ""], ["svgIcon", "filter"], ["filtersPanel", ""], ["class", "empty-reports-state", 4, "ngIf"], ["class", "list-card", 4, "ngIf"], ["class", "wrong-summary-backdrop", 3, "click", 4, "ngIf"], [1, "filters-panel", 3, "click"], [1, "filters-panel-header"], [1, "filter-block"], ["appearance", "outline", 1, "filter-item"], ["name", "filterCountry", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", 3, "click"], ["matInput", "", "placeholder", "Search country...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["name", "filterCity", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search city...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["appearance", "outline", "class", "filter-item", 4, "ngIf"], ["name", "filterCampus", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search campus...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterDepartment", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], [1, "select-search-option", "select-search-option--multi", 3, "click"], ["matInput", "", "placeholder", "Search department...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterTeam", "multiple", "", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search team...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterSchedule", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search schedule...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterActiveStatus", 3, "ngModel", "ngModelChange", "openedChange"], ["matInput", "", "placeholder", "Search status...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["appearance", "outline", 1, "filter-item", "filter-item--full", "date-range-field", 2, "cursor", "pointer", 3, "click"], ["matInput", "", "readonly", "", "placeholder", "Select date range", 2, "cursor", "pointer", 3, "value"], ["matSuffix", "", 2, "cursor", "pointer", "color", "#0284c7"], [1, "filter-item", "filter-checkbox-item"], ["color", "primary", 3, "ngModel", "ngModelChange"], [1, "filter-actions"], ["mat-flat-button", "", 1, "filter-apply-btn", 3, "click"], ["svgIcon", "apply"], ["mat-flat-button", "", 1, "filter-reset-btn", 3, "click"], [3, "value"], ["name", "filterIndustry", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search industry...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterSector", 3, "ngModel", "disabled", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search sector...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], ["name", "filterInstitute", 3, "ngModel", "ngModelChange", "openedChange", "selectionChange"], ["matInput", "", "placeholder", "Search institute...", 1, "select-search-input", 3, "ngModel", "ngModelOptions", "ngModelChange", "click", "keydown", "keyup", "input"], [1, "empty-reports-state"], [1, "empty-state-card"], [1, "empty-state-icon"], [1, "empty-state-title"], [1, "empty-state-description"], ["mat-flat-button", "", "type", "button", 1, "button-one", "empty-action-btn", 3, "click"], [1, "list-card"], [1, "list-wrapper"], [1, "exam-tabs", 3, "selectedIndex", "selectedTabChange", "selectedIndexChange"], ["label", "User Report"], [1, "report-summary-grid"], [1, "summary-card"], [1, "summary-icon", "summary-icon--students"], [1, "summary-copy"], [1, "summary-label"], [1, "summary-value"], [1, "summary-meta"], [1, "summary-icon", "summary-icon--page"], [1, "summary-icon", "summary-icon--score"], [1, "summary-icon", "summary-icon--pass"], [1, "tab-actions"], [1, "search"], ["appearance", "outline", 1, "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Search by student name", "aria-label", "Search by student name", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["class", "table-wrap", 4, "ngIf"], ["class", "loader-placeholder", 4, "ngIf"], ["label", "Analytics Report"], [1, "analytics-section"], [1, "report-summary-grid", "analytics-summary-grid"], [1, "summary-icon", "summary-icon--categories"], [1, "summary-icon", "summary-icon--questions"], [1, "summary-icon", "summary-icon--attempts"], [1, "summary-icon", "summary-icon--mistakes"], [1, "inner-analytics-tabs", 3, "selectedIndex", "selectedIndexChange"], ["label", "Question Bank Report"], [1, "analytics-tab-body"], [1, "table-wrap"], ["mat-table", "", "matSort", "", 1, "mat-elevation-z1", "compact", "premium-table", 3, "dataSource"], ["matColumnDef", "category"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-primary", 4, "matCellDef"], ["matColumnDef", "questions"], ["mat-cell", "", "class", "cell-num", 4, "matCellDef"], ["matColumnDef", "users_attempted"], ["matColumnDef", "total_attempts"], ["matColumnDef", "mistakes"], ["matColumnDef", "error_pct"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["label", "Question Summary"], ["class", "category-filter-banner", 4, "ngIf"], ["matColumnDef", "sno"], ["matColumnDef", "question"], ["mat-cell", "", "class", "question-text-cell", 4, "matCellDef"], ["matColumnDef", "user_attempts"], ["matColumnDef", "attempts"], ["class", "analytics-table-footer", 4, "ngIf"], ["matColumnDef", "student_name"], ["matColumnDef", "questions_attempted"], ["matColumnDef", "correct_answers"], ["matColumnDef", "wrong_answers"], ["matColumnDef", "result"], [1, "pager"], ["mat-button", "", 3, "disabled", "click"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-primary"], [1, "student-cell", 3, "click"], [1, "student-avatar"], [1, "student-name"], ["mat-cell", ""], [1, "marks-inline"], [1, "marks-sep"], [1, "pct-badge"], [1, "review-status"], [1, "result-pill"], ["mat-header-row", ""], ["mat-row", ""], [1, "loader-placeholder"], ["title", "Click to view question summary for this category", 1, "category-cell", 3, "click"], [1, "category-avatar"], ["mat-cell", "", 1, "cell-num"], [1, "pct-badge", 3, "ngClass"], [1, "category-filter-banner"], [1, "banner-text"], ["mat-button", "", "type", "button", 1, "clear-filter-btn", 3, "click"], [1, "cell-mono"], ["mat-cell", "", 1, "question-text-cell"], ["href", "javascript:void(0)", "class", "wrong-summary-link mistakes-pill", 3, "click", 4, "ngIf", "ngIfElse"], ["noMistakes", ""], ["href", "javascript:void(0)", 1, "wrong-summary-link", "mistakes-pill", 3, "click"], [1, "cell-muted"], [1, "analytics-table-footer"], [1, "wrong-summary-backdrop", 3, "click"], [1, "wrong-summary-panel", "user-review-panel", 3, "click"], [1, "card"], [1, "panel-header"], [1, "header-icon"], [1, "header-info"], [1, "score"], [1, "result", 3, "ngClass"], ["mat-icon-button", "", "aria-label", "Close answer sheet", "type", "button", 1, "review-close-btn", 3, "click"], ["aria-hidden", "true"], [1, "panel-body"], ["class", "muted", 4, "ngIf"], [4, "ngIf"], [1, "summary-actions"], ["mat-stroked-button", "", "color", "primary", 3, "click"], [1, "muted"], [4, "ngIf", "ngIfElse"], ["noUserReview", ""], [4, "ngFor", "ngForOf"], ["class", "q-evaluation-state pending attempt-level-banner", "style", "margin-bottom: 16px; border-radius: 8px;", 4, "ngIf"], [1, "questions-list"], ["class", "question-review-card", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "pending", "attempt-level-banner", 2, "margin-bottom", "16px", "border-radius", "8px"], ["type", "button", 1, "retry-evaluation-btn", 3, "disabled", "click"], [1, "question-review-card"], [1, "q-head-row"], [1, "q-left"], [1, "q-index"], [1, "q-body"], [1, "q-meta"], [1, "q-badge"], ["class", "q-info", 4, "ngIf"], [1, "q-text"], [1, "q-right"], ["class", "marks-container", 4, "ngIf"], ["class", "q-marks small-muted", 3, "ngClass", 4, "ngIf"], ["class", "q-fill", 4, "ngIf"], ["class", "q-descriptive", 4, "ngIf"], ["class", "q-options two-col", 4, "ngIf"], [1, "q-info"], ["svgIcon", "brain"], ["type", "button", "class", "manual-check-chip", 3, "selected", "title", "click", 4, "ngIf"], ["type", "button", 1, "manual-check-chip", 3, "title", "click"], [1, "marks-container"], ["class", "marks-display", "aria-label", "Marks awarded", 4, "ngIf"], ["class", "marks-edit", 4, "ngIf"], ["aria-label", "Marks awarded", 1, "marks-display"], [1, "q-marks", "small-muted", 3, "ngClass"], [1, "marks-divider"], ["mat-icon-button", "", "type", "button", "aria-label", "Edit marks", "title", "Edit marks", 1, "edit-marks-btn", 3, "click"], [1, "marks-edit"], [1, "marks-edit-row"], ["type", "number", "step", "0.5", 1, "marks-input", 3, "ngModel", "min", "max", "ngModelChange"], [1, "marks-max"], [1, "marks-reason-label", 3, "for"], [1, "required-star", 2, "color", "#dc3545"], ["rows", "2", "maxlength", "1000", "placeholder", "Explain why the marks are being changed (Required)", 1, "marks-reason-input", 3, "ngModel", "id", "ngModelChange", "input"], ["class", "marks-reason-error-msg", "style", "color: #dc3545; font-size: 0.75rem; display: block; margin-top: 0.25rem;", 4, "ngIf"], [1, "marks-edit-actions"], ["mat-icon-button", "", "type", "button", "title", "Save marks", 1, "save-marks-btn", 3, "click"], ["mat-icon-button", "", "type", "button", "title", "Cancel", 1, "cancel-marks-btn", 3, "click"], [1, "marks-reason-error-msg", 2, "color", "#dc3545", "font-size", "0.75rem", "display", "block", "margin-top", "0.25rem"], [1, "q-fill"], [1, "fill-row"], [1, "fill-option"], ["class", "fill-correct", 4, "ngIf"], [1, "fill-correct"], [1, "q-descriptive"], [1, "descriptive-answers"], [1, "desc-student"], [1, "student-label"], [1, "answer-text"], [1, "desc-model"], [1, "model-label"], [1, "model-text"], ["class", "q-evaluation-state failed", 4, "ngIf"], ["class", "q-evaluation-state pending", 4, "ngIf"], ["class", "q-feedback", 4, "ngIf"], ["class", "q-review-comments", 4, "ngIf"], [1, "marks-history-section"], [1, "marks-history-header"], [1, "marks-history-timeline"], [1, "history-item", "current"], [1, "history-indicator"], [1, "dot", "current"], ["class", "line", 4, "ngIf"], [1, "history-content"], [1, "history-card", "current"], [1, "history-badge"], [1, "history-marks"], [1, "marks-total"], [1, "history-meta"], [1, "updated-by"], ["class", "updated-date", 4, "ngIf"], ["class", "history-reason", 4, "ngIf"], ["class", "history-item", 4, "ngFor", "ngForOf"], [1, "q-evaluation-state", "failed"], [1, "feedback-text"], [1, "q-evaluation-state", "pending"], [1, "q-feedback"], [1, "q-review-comments"], [1, "review-columns"], [1, "col", "missed"], [1, "col-header"], [1, "dot", "red"], ["class", "review-empty", 4, "ngIf"], [1, "col", "incorrect"], [1, "dot", "orange"], [1, "col", "incomplete"], [1, "dot", "yellow"], [1, "review-empty"], [1, "review-item"], [1, "ri-body"], ["class", "review-text-history", 4, "ngIf"], ["class", "review-text-missed", 3, "deleted", 4, "ngIf"], ["class", "review-text-missed editing", 4, "ngIf"], ["class", "review-meta small-muted", 4, "ngIf"], ["class", "review-actions", 4, "ngIf"], [1, "review-text-history"], [1, "history-entry"], [1, "review-meta", "small-muted"], ["class", "deleted-by", 4, "ngIf"], [1, "review-text-missed"], [1, "ri-left"], [1, "ri-icon", "missed"], [1, "review-text", "deleted"], [1, "review-text-missed", "editing"], ["rows", "2", 1, "edit-comment-text", 3, "ngModel", "ngModelChange"], [1, "deleted-by"], [1, "review-actions"], ["class", "edited-info", 4, "ngIf"], ["class", "edit-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "delete-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "save-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], ["class", "cancel-link", "href", "javascript:void(0)", 3, "click", 4, "ngIf"], [1, "edited-info"], [1, "edited-text"], [1, "editor-name"], [1, "edited-date-sep"], [1, "edited-date"], ["href", "javascript:void(0)", 1, "edit-link", 3, "click"], ["href", "javascript:void(0)", 1, "delete-link", 3, "click"], ["href", "javascript:void(0)", 1, "save-link", 3, "click"], ["href", "javascript:void(0)", 1, "cancel-link", 3, "click"], [1, "review-text"], ["class", "review-text-incorrect", 3, "deleted", 4, "ngIf"], ["class", "review-text-incorrect editing", 4, "ngIf"], [1, "review-text-incorrect"], [1, "ri-icon", "incorrect"], [1, "review-text-incorrect", "editing"], ["class", "review-text-incomplete", 3, "deleted", 4, "ngIf"], ["class", "review-text-incomplete editing", 4, "ngIf"], [1, "review-text-incomplete"], [1, "ri-icon", "incomplete"], [1, "review-text-incomplete", "editing"], [1, "line"], [1, "updated-date"], [1, "history-reason"], [1, "history-item"], [1, "dot", "past"], [1, "history-card", "past"], [1, "q-options", "two-col"], ["class", "q-option", 3, "correct", "selected", "missed", 4, "ngFor", "ngForOf"], [1, "q-option"], [1, "opt-left"], [1, "opt-mark"], [1, "opt-body"], [1, "opt-text"], ["class", "opt-badge", 4, "ngIf"], [1, "opt-badge"], ["class", "badge your-answer", 4, "ngIf"], ["class", "badge correct", 4, "ngIf"], ["class", "badge missed", 4, "ngIf"], [1, "badge", "your-answer"], [1, "badge", "correct"], [1, "badge", "missed"], [1, "wrong-summary-panel", 3, "click"], [1, "header-copy"], [1, "panel-sub"], ["mat-icon-button", "", "aria-label", "Close wrong answer summary", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "question-title"], [1, "summary-table"], ["data-label", "Wrong Answer"], ["href", "javascript:void(0)", 1, "wa-answer-link", 3, "click"], ["data-label", "Selected Count"], ["href", "javascript:void(0)", 1, "wa-count-link", 3, "click"], ["data-label", "Occurrence %"], [1, "panel-sub", "small-muted"], ["mat-icon-button", "", "aria-label", "Close resources", "type", "button", 1, "panel-close-btn", 3, "click"], [1, "resource-list"], [1, "res-title"], [1, "res-desc", "small-muted"]],
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
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "mat-icon", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "button", 13, 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ExamReportsComponent_Template_button_click_17_listener($event) {
            $event.stopPropagation();
            return ctx.openFiltersOverlay();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "mat-icon", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Filter Test Reports");
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ExamReportsComponent_ng_template_22_Template, 83, 42, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, ExamReportsComponent_div_24_Template, 21, 0, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, ExamReportsComponent_div_25_Template, 164, 35, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](26, ExamReportsComponent_div_26_Template, 24, 10, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, ExamReportsComponent_div_27_Template, 21, 1, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, ExamReportsComponent_div_28_Template, 22, 2, "div", 19);
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.selectedInstituteName);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx.selectedExamTitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
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
      styles: ["[_nghost-%COMP%] {\n  --green-bg: #e8f9ef;\n  --red-bg: #fff2f4;\n  --yellow-bg: #fff8e6;\n  --orange-bg: #fff4e1;\n  --blue-bg: #e6f0ff;\n  --green-text: #166534;\n  --red-text: #b91c1c;\n  --yellow-text: #b45309;\n  --orange-text: #c2410c;\n  --blue-text: #0b66d0;\n  --bgreen-border: #86efac;\n  --bred-border: #e7d6d6;\n  --byellow-border: #fde68a;\n  --borange-border: #faeedf;\n  --bblue-border: #93c5fd;\n  --score-color: #f39c12;\n}\n\n[_nghost-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.page[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 3rem;\n}\n\n.exam-reports[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.125rem;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.875rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n\n.selections[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n  flex: 1 1 28rem;\n  min-width: 16rem;\n  max-width: 36rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field {\n  position: relative;\n  min-width: 14rem;\n  max-width: 18rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid #e2e8f0;\n  border-radius: 0.75rem;\n  padding: 0 0.875rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-flex {\n  height: 2.75rem;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-infix {\n  padding: 0.5rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label {\n  top: 1.375rem;\n  font-size: 0.875rem;\n  color: #64748b;\n  font-weight: 500;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-floating-label.mdc-floating-label--float-above {\n  transform: translateY(-1.5rem) scale(0.75);\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input {\n  font-size: 0.875rem;\n  font-weight: 500;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field input::placeholder {\n  color: #94a3b8;\n  font-weight: 400;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field mat-icon[matPrefix] {\n  color: #94a3b8;\n  margin-right: 0.5rem;\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field:hover mat-icon[matPrefix] {\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12), 0 4px 16px rgba(31, 123, 255, 0.08);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n  transform: scale(1.05);\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-text-field-wrapper {\n  background: #f1f5f9 !important;\n  border: 1px solid #cbd5e1 !important;\n  border-radius: 0.75rem !important;\n  cursor: not-allowed !important;\n  box-shadow: none !important;\n  opacity: 0.95;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input {\n  color: #0f172a !important;\n  font-weight: 600 !important;\n  cursor: not-allowed !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #0f172a !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field input::placeholder {\n  color: #64748b !important;\n  font-weight: 500 !important;\n  opacity: 1 !important;\n  -webkit-text-fill-color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .mat-mdc-floating-label {\n  color: #475569 !important;\n  font-weight: 600 !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field mat-icon[matPrefix] {\n  color: #64748b !important;\n}\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.disabled-toolbar-field .lock-icon {\n  font-size: 1.125rem !important;\n  width: 1.125rem !important;\n  height: 1.125rem !important;\n  color: #64748b !important;\n  cursor: not-allowed !important;\n  margin-left: 0.375rem;\n  opacity: 0.85;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled input {\n  background: #f1f5f9 !important;\n  color: #94a3b8 !important;\n  cursor: not-allowed !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: none !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field.mat-form-field-disabled .mat-mdc-floating-label {\n  color: #94a3b8 !important;\n}\n\n[_nghost-%COMP%]     .toolbar .selections mat-form-field .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.empty-reports-state[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4rem 1.5rem;\n  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);\n  border: 1px dashed #cbd5e1;\n  border-radius: 1rem;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  animation: _ngcontent-%COMP%_slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.empty-state-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  max-width: 28rem;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%] {\n  width: 4.25rem;\n  height: 4.25rem;\n  border-radius: 50%;\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.12) 0%, rgba(31, 123, 255, 0.04) 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 1.25rem;\n  border: 1px solid rgba(31, 123, 255, 0.2);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  width: 2.25rem;\n  height: 2.25rem;\n  color: var(--button-1, #1f7bff);\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  color: #0f172a;\n  margin: 0 0 0.5rem 0;\n  letter-spacing: -0.01em;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  color: #64748b;\n  line-height: 1.5;\n  margin: 0 0 1.5rem 0;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-state-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #334155;\n  font-weight: 600;\n}\n.empty-state-card[_ngcontent-%COMP%]   .empty-action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  height: 2.5rem;\n  padding: 0 1.25rem !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel {\n  border-radius: 0.75rem !important;\n  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(0, 0, 0, 0.03) !important;\n  border: none !important;\n  margin-top: 0.25rem;\n  overflow: hidden;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option {\n  padding: 0.625rem 1rem;\n  font-size: 0.875rem;\n  min-height: 2.75rem;\n  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option:hover {\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.06) 0%, rgba(139, 92, 246, 0.04) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option.mat-mdc-option-active {\n  background: linear-gradient(135deg, rgba(31, 123, 255, 0.1) 0%, rgba(31, 123, 255, 0.06) 100%);\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-main {\n  font-weight: 500;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .mat-mdc-autocomplete-panel .mat-mdc-option .option-sub {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.125rem;\n}\n\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n}\n\n.refresh-icon-btn[_ngcontent-%COMP%] {\n  min-width: 2.625rem !important;\n  width: 2.625rem !important;\n  height: 2.625rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.625rem !important;\n  background: var(--button-1) !important;\n  color: #ffffff !important;\n}\n.refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem !important;\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  color: #ffffff !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%], .refresh-icon-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: #ffffff !important;\n  color: #ffffff !important;\n  width: 100% !important;\n  height: 100% !important;\n}\n.refresh-icon-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover, #1a6fe8) !important;\n}\n.refresh-icon-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ffffff !important;\n  transform: rotate(180deg);\n}\n\n.button-one[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  letter-spacing: 0.01em;\n  transition: background 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.button-one[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  color: var(--button-text-2) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filters-panel[_ngcontent-%COMP%] {\n  width: min(34rem, 100vw - 2rem);\n  max-height: 75vh;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  background: linear-gradient(180deg, #ffffff 0%, #fafbfc 100%);\n  border: 1px solid rgba(15, 23, 42, 0.08);\n  border-radius: 1rem;\n  box-shadow: 0 1.25rem 3rem rgba(15, 23, 42, 0.16), 0 0.375rem 1rem rgba(15, 23, 42, 0.06);\n  animation: _ngcontent-%COMP%_slideUp 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.filters-panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem 1.125rem;\n  border-bottom: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9375rem;\n  font-weight: 700;\n  color: #0f172a;\n  letter-spacing: -0.01em;\n}\n\n.filters-panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  color: var(--button-1);\n}\n\n.filter-block[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n  padding: 1rem 1.125rem;\n  overflow-y: auto;\n  flex: 1;\n}\n\n.filter-item[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-text-field-wrapper {\n  background: #ffffff;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.625rem;\n  padding: 0 0.75rem;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-flex {\n  height: 2.5rem;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label {\n  top: 1.25rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: #64748b;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-floating-label, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-floating-label.mdc-floating-label--float-above {\n  color: var(--button-1);\n  font-weight: 600;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item input, [_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-value-text {\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-select-arrow, [_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle .mat-icon {\n  color: #94a3b8;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item:hover .mat-mdc-text-field-wrapper {\n  border-color: #cbd5e1;\n  box-shadow: 0 0.25rem 0.625rem rgba(15, 23, 42, 0.06);\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px rgba(31, 123, 255, 0.12);\n  background: #ffffff;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n[_nghost-%COMP%]     .filters-panel .filter-item .mat-datepicker-toggle button {\n  width: 1.75rem;\n  height: 1.75rem;\n  padding: 0;\n}\n\n[_nghost-%COMP%]     .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input {\n  width: 100%;\n  border: 1px solid #cbd5e1;\n  border-radius: 0.375rem;\n  padding: 0.375rem 0.625rem;\n  font-size: 0.8125rem;\n  color: #0f172a;\n  outline: none;\n  background: #f8fafc;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n[_nghost-%COMP%]     .select-search-option .select-search-input:focus {\n  border-color: var(--button-1);\n  background: #ffffff;\n  box-shadow: 0 0 0 2px rgba(31, 123, 255, 0.15);\n}\n[_nghost-%COMP%]     .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #ffffff;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 1px solid #e2e8f0;\n}\n[_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-pseudo-checkbox, [_nghost-%COMP%]     .mat-mdc-select-panel .select-search-option .mat-mdc-option-pseudo-checkbox {\n  display: none !important;\n}\n\n.filter-checkbox-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25rem 0.5rem;\n  grid-column: span 2;\n}\n.filter-checkbox-item[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 600;\n  color: #334155;\n}\n\n.filter-item[_ngcontent-%COMP%]:nth-last-child(-n+2) {\n  grid-column: span 1;\n}\n\n.filter-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  padding: 0.875rem 1.125rem;\n  border-top: 1px solid rgba(15, 23, 42, 0.06);\n  background: linear-gradient(180deg, #fafbfc 0%, #ffffff 100%);\n  flex-shrink: 0;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%] {\n  background: var(--button-1) !important;\n  color: var(--button-text-1) !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]:hover {\n  background: var(--button-1-hover) !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n}\n\n.filter-reset-btn[_ngcontent-%COMP%] {\n  background: #ffffff !important;\n  color: #475569 !important;\n  border: 1px solid #e2e8f0 !important;\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  font-size: 0.8125rem !important;\n  padding: 0 1rem !important;\n  height: 2.25rem;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.filter-reset-btn[_ngcontent-%COMP%]:hover {\n  background: #f8fafc !important;\n  border-color: #cbd5e1 !important;\n}\n\n.filter-apply-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .filter-reset-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.25rem;\n}\n\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(0.5rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-0.375rem);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.list-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 0.0625rem solid #e2e8f0;\n  border-radius: 0.75rem;\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(0, 0, 0, 0.08);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.list-wrapper[_ngcontent-%COMP%] {\n  overflow: visible;\n}\n\n.exam-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.inner-analytics-tabs[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-header {\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.5rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-labels {\n  min-height: 3rem;\n  gap: 0.125rem;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.875rem;\n  padding: 0 1.25rem;\n  min-height: 3rem;\n  border-radius: 0.75rem 0.75rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab:hover {\n  background: var(--bg-1);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active {\n  background: var(--bg-1);\n  color: var(--button-1);\n  box-shadow: inset 0 -0.125rem 0 var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mat-mdc-tab-body-wrapper {\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .exam-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-header {\n  background: var(--bg-1);\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  padding: 0 0.75rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mat-mdc-tab-labels {\n  min-height: 2.5rem;\n  gap: 0.25rem;\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab {\n  color: var(--theme-3-text-3);\n  font-weight: 600;\n  font-size: 0.8125rem;\n  padding: 0 1rem;\n  min-height: 2.5rem;\n  border-radius: 0.5rem 0.5rem 0 0;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab:hover {\n  background: var(--bg-2);\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active {\n  background: var(--bg-2);\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab--active .mdc-tab__text-label {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab__text-label {\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n[_nghost-%COMP%]     .inner-analytics-tabs .mdc-tab-indicator__content--underline {\n  border-color: var(--button-1);\n  border-width: 0.125rem;\n}\n\n.analytics-tab-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.category-filter-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 0.4rem 0.75rem;\n  margin: 0.5rem 1rem 0.5rem 1rem;\n  background: linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, rgba(99, 102, 241, 0.05) 100%);\n  border: 1px solid rgba(59, 130, 246, 0.2);\n  border-radius: 0.625rem;\n  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.02);\n  animation: _ngcontent-%COMP%_slideDown 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1, #1e293b);\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  line-height: 1.125rem;\n  color: var(--button-1, #2563eb);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.category-filter-banner[_ngcontent-%COMP%]   .banner-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--button-1, #2563eb);\n  font-weight: 700;\n  background: rgba(59, 130, 246, 0.12);\n  padding: 0.15rem 0.5rem;\n  border-radius: 0.375rem;\n  letter-spacing: 0.01em;\n}\n\n[_nghost-%COMP%]     .clear-filter-btn {\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  gap: 0.375rem !important;\n  padding: 0.35rem 0.75rem !important;\n  height: 2rem !important;\n  min-height: 2rem !important;\n  line-height: 1 !important;\n  border-radius: 0.5rem !important;\n  background: var(--bg-1, #ffffff) !important;\n  border: 1px solid var(--theme-3-border, #cbd5e1) !important;\n  color: var(--theme-3-text-2, #475569) !important;\n  font-size: 0.75rem !important;\n  font-weight: 600 !important;\n  cursor: pointer;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]     .clear-filter-btn .mdc-button__label {\n  display: inline-flex !important;\n  align-items: center !important;\n  gap: 0.375rem !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn mat-icon {\n  font-size: 0.9375rem !important;\n  width: 0.9375rem !important;\n  height: 0.9375rem !important;\n  line-height: 0.9375rem !important;\n  color: var(--theme-3-text-3, #64748b);\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  margin: 0 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n}\n[_nghost-%COMP%]     .clear-filter-btn:hover mat-icon {\n  color: #ef4444 !important;\n}\n\n.report-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.75rem;\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n}\n\n.analytics-summary-grid[_ngcontent-%COMP%] {\n  padding: 0.25rem 0 0.5rem;\n  background: transparent;\n  border-bottom: none;\n}\n\n.summary-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  min-width: 0;\n  padding: 0.5rem 0.875rem;\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  background: linear-gradient(135deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 0.125rem 0.5rem var(--theme-3-hanover-bg);\n  transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.summary-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.summary-icon[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.625rem;\n  background: var(--theme-2-hanover-bg);\n  color: var(--button-1);\n  transition: transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n\n.summary-icon[_ngcontent-%COMP%]:hover {\n  transform: scale(1.05);\n}\n\n.summary-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.summary-icon--students[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--page[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--score[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.1);\n  color: #f59e0b;\n}\n\n.summary-icon--pass[_ngcontent-%COMP%] {\n  background: rgba(16, 185, 129, 0.1);\n  color: #10b981;\n}\n\n.summary-icon--categories[_ngcontent-%COMP%] {\n  background: rgba(139, 92, 246, 0.1);\n  color: #8b5cf6;\n}\n\n.summary-icon--questions[_ngcontent-%COMP%] {\n  background: rgba(59, 130, 246, 0.1);\n  color: #3b82f6;\n}\n\n.summary-icon--attempts[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.1);\n  color: #6366f1;\n}\n\n.summary-icon--mistakes[_ngcontent-%COMP%] {\n  background: rgba(239, 68, 68, 0.1);\n  color: #ef4444;\n}\n\n.summary-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.125rem;\n  min-width: 0;\n}\n\n.summary-label[_ngcontent-%COMP%] {\n  font-size: var(--font-xs);\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-3);\n}\n\n.summary-value[_ngcontent-%COMP%] {\n  font-size: clamp(1.125rem, 0.95rem + 0.5vw, 1.5rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -0.03em;\n  color: var(--theme-3-text-1);\n}\n\n.summary-meta[_ngcontent-%COMP%] {\n  font-size: var(--font-xsm);\n  font-weight: 500;\n  color: var(--theme-3-text-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.tab-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-between: space-between;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.875rem 1rem 1rem;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-bottom: 1px solid var(--theme-3-border);\n  margin: 0;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 20rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field {\n  width: 100%;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-text-field-wrapper {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 1px solid var(--theme-3-border);\n  border-radius: 0.75rem;\n  padding: 0 0.75rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mdc-notched-outline {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-flex {\n  height: 2.375rem;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-infix {\n  padding: 0.375rem 0;\n  min-height: unset;\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-floating-label {\n  top: 1.1875rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input {\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search input::placeholder {\n  color: var(--theme-3-text-3);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-icon[matPrefix] {\n  color: var(--theme-3-icon-1);\n  margin-right: 0.5rem;\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]:hover     mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-focused .mat-mdc-text-field-wrapper, [_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused .mat-mdc-text-field-wrapper {\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 3px var(--theme-2-hanover-bg);\n  background: var(--bg-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search mat-form-field.mat-focused mat-icon[matPrefix] {\n  color: var(--button-1);\n}\n\n[_nghost-%COMP%]     .tab-actions .search .mat-mdc-form-field-subscript-wrapper {\n  display: none;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.375rem;\n  align-items: center;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 2.25rem;\n  padding: 0 0.875rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  border-radius: 0.625rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.375rem;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%], .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  color: var(--theme-3-text-2);\n  border: 1px solid var(--theme-3-border);\n  box-shadow: 0 0.5rem 1rem var(--theme-3-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-stroked-button][_ngcontent-%COMP%]:hover, .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-button][_ngcontent-%COMP%]:hover {\n  background: var(--bg-1);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, var(--button-1) 0%, var(--button-1-hover) 100%);\n  color: var(--button-text-1);\n  border: none;\n  box-shadow: 0 0.75rem 1.5rem var(--theme-2-hanover-bg);\n}\n\n.tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%]   button[mat-flat-button][_ngcontent-%COMP%]:hover {\n  background: linear-gradient(135deg, var(--button-1-hover) 0%, var(--button-1) 100%);\n  box-shadow: 0 1rem 2rem var(--theme-2-hanover-bg);\n}\n\n.table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  padding: 0 0.75rem 0.75rem;\n  scrollbar-width: thin;\n  scrollbar-color: #818cf8 rgba(0, 0, 0, 0.05);\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0.625rem;\n  height: 0.625rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: rgba(0, 0, 0, 0.04);\n  border-radius: 0.25rem;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #818cf8;\n  border-radius: 0.25rem;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n.table-wrap[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #4f46e5;\n  border: 2px solid transparent;\n  background-clip: content-box;\n}\n\n.analytics-table-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  padding: 0.5rem 1rem;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  color: var(--theme-3-text-2, #475569);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  border-top: 1px solid var(--theme-3-border, #e2e8f0);\n}\n\n.premium-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate !important;\n  border-spacing: 0 !important;\n  border-radius: 0.5rem;\n}\n\n[_nghost-%COMP%]     .premium-table th.mat-header-cell, [_nghost-%COMP%]     .premium-table th.mat-mdc-header-cell, .premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%] {\n  position: sticky !important;\n  top: 0 !important;\n  z-index: 10 !important;\n  background: var(--table-header-bg, #1e293b) !important;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: var(--table-header-text, #ffffff) !important;\n  padding: 0.5rem 0.75rem;\n  border-bottom: 0.125rem solid #e2e8f0;\n  white-space: nowrap;\n}\n\n.premium-table[_ngcontent-%COMP%]   th.mat-header-cell[_ngcontent-%COMP%]:first-child, .premium-table[_ngcontent-%COMP%]   th.mat-mdc-header-cell[_ngcontent-%COMP%]:first-child {\n  border-left: 0.1875rem solid var(--button-1);\n}\n\n.premium-table[_ngcontent-%COMP%]   td.mat-cell[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   td.mat-mdc-cell[_ngcontent-%COMP%] {\n  padding: 0.38rem 0.75rem;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-2, #334155);\n  border-bottom: 0.0625rem solid #f1f5f9;\n  vertical-align: middle;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.premium-table[_ngcontent-%COMP%]   tr.mat-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%], .premium-table[_ngcontent-%COMP%]   tr.mat-mdc-row[_ngcontent-%COMP%]:nth-child(even)   td[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.5);\n}\n\n.student-name[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  cursor: pointer;\n  font-weight: 600;\n  font-size: var(--font-md);\n  letter-spacing: -0.01em;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.student-name[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  transform: translateX(0.0625rem);\n}\n\n.student-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.student-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n}\n\n.category-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.625rem;\n  cursor: pointer;\n}\n\n.category-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 0.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  color: #fff;\n  flex-shrink: 0;\n  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n}\n\n.marks-inline[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-1);\n}\n\n.marks-sep[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  margin: 0 0.125rem;\n}\n\n.pct-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 0.375rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  background: rgba(99, 102, 241, 0.08);\n  color: #6366f1;\n}\n\n.review-status[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  font-weight: 500;\n}\n\n.review-status.review-pending[_ngcontent-%COMP%] {\n  color: var(--orange-text);\n  font-weight: 600;\n}\n\n.result-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.1875rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: rgba(0, 0, 0, 0.04);\n  color: var(--theme-3-text-3);\n}\n\n.result-pill.result-pass[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.result-pill.result-fail[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.analytics-section[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.analytics-section[_ngcontent-%COMP%]   .table-wrap[_ngcontent-%COMP%] {\n  min-height: 520px;\n  max-height: max(540px, 100vh - 180px);\n  overflow-x: auto !important;\n  overflow-y: auto !important;\n  border-radius: 0.625rem;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 0.875rem 1.25rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  font-weight: 600;\n  letter-spacing: 0.01em;\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  color: var(--theme-3-text-2);\n}\n\n.pager[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 0.375rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.5rem !important;\n  font-weight: 600 !important;\n  padding: 0.375rem 1rem !important;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not([disabled]):hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06) !important;\n  transform: translateY(-0.0625rem);\n  background: var(--bg-2) !important;\n}\n\n.pager[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: -200% 0;\n  }\n  100% {\n    background-position: 200% 0;\n  }\n}\n.loader-placeholder[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n  text-align: center;\n  color: rgba(0, 0, 0, 0.5);\n  font-size: 0.875rem;\n  letter-spacing: 0.01em;\n  background: linear-gradient(90deg, rgba(0, 0, 0, 0.02) 25%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.02) 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.5s infinite;\n  border-radius: 0.5rem;\n  margin: 1rem;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%] {\n  margin-left: 0.375rem;\n  font-size: 0.85rem;\n  color: var(--button-1);\n  cursor: pointer;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  font-weight: 600;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wrong-summary-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  transform: translateX(0.125rem);\n}\n\n.wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n  cursor: pointer;\n  font-weight: 700;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.wa-answer-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 700;\n  text-decoration: none;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);\n  display: inline-block;\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover {\n  transform: translateX(0.0625rem);\n}\n\n.muted[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.85rem;\n}\n\n@keyframes _ngcontent-%COMP%_fadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideUp {\n  from {\n    opacity: 0;\n    transform: translateY(1.25rem) scale(0.96);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0) scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_subtlePulse {\n  0%, 100% {\n    box-shadow: 0 1.5rem 3.75rem var(--theme-3-hanover-bg);\n  }\n  50% {\n    box-shadow: 0 1.75rem 4rem var(--theme-2-hanover-bg);\n  }\n}\n.wrong-summary-backdrop[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  background: radial-gradient(ellipse at center, rgba(15, 23, 42, 0.55) 0%, rgba(30, 41, 59, 0.75) 100%);\n  backdrop-filter: blur(0.75rem) saturate(140%);\n  z-index: 10050;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  animation: _ngcontent-%COMP%_fadeIn 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(56rem, 92vw);\n  max-height: 88vh;\n  z-index: 10060;\n  display: flex;\n  flex-direction: column;\n  animation: _ngcontent-%COMP%_slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);\n  margin: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 88vh;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 1.25rem;\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  overflow: hidden;\n}\n\n.panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.875rem;\n  min-width: 0;\n  flex: 1;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.1875rem;\n  min-width: 0;\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n}\n\n.panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.0625rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n}\n\n.panel-header[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n  margin-top: 0;\n  line-height: 1.4;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%] {\n  width: 2.5rem !important;\n  height: 2.5rem !important;\n  min-width: 2.5rem !important;\n  min-height: 2.5rem !important;\n  max-width: 2.5rem !important;\n  max-height: 2.5rem !important;\n  padding: 0 !important;\n  margin: 0 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  border-radius: 0.75rem !important;\n  background: var(--bg-1) !important;\n  border: 0.0625rem solid var(--theme-3-border) !important;\n  color: var(--theme-3-text-2) !important;\n  line-height: 1 !important;\n  flex: 0 0 2.5rem !important;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04) !important;\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;\n  cursor: pointer !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] .mat-mdc-button-touch-target, [_nghost-%COMP%]     .panel-header .panel-close-btn .mat-mdc-button-touch-target {\n  display: none !important;\n}\n\n[_nghost-%COMP%]     .panel-header button[mat-icon-button] mat-icon, [_nghost-%COMP%]     .panel-header .panel-close-btn mat-icon {\n  width: 1.25rem !important;\n  height: 1.25rem !important;\n  font-size: 1.25rem !important;\n  line-height: 1.25rem !important;\n  margin: 0 !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  color: var(--theme-3-text-2) !important;\n  transition: color 0.2s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover, .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(239, 68, 68, 0.08) !important;\n  border-color: rgba(239, 68, 68, 0.3) !important;\n  color: #ef4444 !important;\n  box-shadow: 0 0.25rem 0.75rem rgba(239, 68, 68, 0.15) !important;\n  transform: scale(1.04) !important;\n}\n\n.panel-header[_ngcontent-%COMP%]   button[mat-icon-button][_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .panel-header[_ngcontent-%COMP%]   .panel-close-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%] {\n  color: #ef4444 !important;\n  transform: rotate(90deg) !important;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  padding: 1.125rem 1.375rem;\n  overflow: auto;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .question-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  margin-bottom: 0.875rem;\n  font-size: 0.9375rem;\n  letter-spacing: -0.01em;\n  color: var(--theme-3-text-1);\n  padding: 0.875rem 1rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  background: var(--bg-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .small-muted[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  padding-left: 0;\n  color: var(--theme-3-text-3);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0 0.5rem;\n  margin: 0 auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0.75rem 1rem;\n  font-weight: 700;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: var(--theme-1-text-1);\n  background: var(--table-header-bg);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  vertical-align: middle;\n  text-align: center;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.625rem 0 0 0.625rem;\n  text-align: left;\n  font-weight: 600;\n  color: var(--theme-3-text-1);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0.625rem 0.625rem 0;\n}\n\n.wa-answer-link[_ngcontent-%COMP%], .wa-count-link[_ngcontent-%COMP%] {\n  color: var(--button-1);\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.wa-answer-link[_ngcontent-%COMP%]:hover, .wa-count-link[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n  text-decoration: underline;\n  text-underline-offset: 0.125rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .summary-actions[_ngcontent-%COMP%], .summary-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.5rem;\n  padding: 0.875rem 1.375rem;\n  border-top: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0.625rem !important;\n  font-weight: 700 !important;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.4, 0, 0.2, 1) !important;\n}\n\n.summary-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-0.0625rem);\n  box-shadow: 0 0.75rem 1.5rem var(--theme-3-hanover-bg) !important;\n}\n\n.resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .resource-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  border-radius: 0.875rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.resource-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 1rem 2rem var(--theme-3-hanover-bg);\n  transform: translateY(-0.125rem);\n  border-color: var(--button-1);\n}\n\n.res-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: var(--theme-3-text-1);\n  letter-spacing: -0.01em;\n}\n\n.res-desc[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: var(--button-1);\n  color: var(--button-text-1);\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.375rem;\n  text-decoration: none;\n  font-size: 0.8125rem;\n  font-weight: 600;\n  transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.res-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%], .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar {\n  height: 0.375rem;\n  width: 0.375rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: var(--theme-3-border);\n  border-radius: 0.1875rem;\n}\n\n.wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .resource-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover, .user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%] {\n  width: min(72rem, 94vw);\n  max-height: 90vh;\n  margin: auto;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n  border-radius: 1.25rem;\n  background: linear-gradient(180deg, var(--bg-1) 0%, var(--bg-2) 100%);\n  box-shadow: 0 2rem 4.5rem rgba(15, 23, 42, 0.28), 0 0.75rem 1.5rem rgba(15, 23, 42, 0.12);\n  border: 0.0625rem solid var(--theme-3-border);\n  overflow: hidden;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  padding: 1.25rem 1.5rem;\n  border-bottom: 0.0625rem solid var(--theme-3-border);\n  background: linear-gradient(180deg, var(--bg-2) 0%, var(--bg-1) 100%);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1), transparent);\n  border-radius: 0 0.1875rem 0.1875rem 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 3rem;\n  height: 3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.875rem;\n  background: linear-gradient(135deg, var(--theme-2-hanover-bg) 0%, var(--bg-1) 100%);\n  color: var(--button-1);\n  box-shadow: 0 0.5rem 1.25rem var(--theme-3-hanover-bg), inset 0 0 0 0.0625rem var(--theme-3-border);\n  flex-shrink: 0;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n  width: 1.375rem;\n  height: 1.375rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.125rem;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: var(--theme-3-text-1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 500;\n  color: var(--theme-3-text-3);\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .score[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-weight: 600;\n  padding: 0.25rem 0.625rem;\n  border-radius: 0.5rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  font-size: 0.8125rem;\n  letter-spacing: 0.01em;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result[_ngcontent-%COMP%] {\n  font-weight: 700;\n  padding: 0.25rem 0.75rem;\n  border-radius: 62.5rem;\n  font-size: 0.75rem;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  box-shadow: 0 0.125rem 0.5rem rgba(15, 23, 42, 0.08);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.pass[_ngcontent-%COMP%] {\n  color: var(--button-text-1);\n  background: var(--button-1);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .result.fail[_ngcontent-%COMP%] {\n  color: #fff;\n  background: var(--theme-3-text-3);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%] {\n  width: 2.75rem;\n  height: 2.75rem;\n  min-width: 2.75rem;\n  padding: 0;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0.75rem;\n  background: var(--bg-1);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--theme-3-text-2);\n  line-height: 1;\n  transition: background 0.2s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  flex: 0 0 2.75rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  margin: 0;\n  font-size: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:hover {\n  background: var(--theme-2-hanover-bg);\n  border-color: var(--button-1);\n  color: var(--button-1);\n  box-shadow: 0 0.375rem 0.875rem var(--theme-3-hanover-bg);\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .review-close-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.125rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-sub[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.875rem;\n}\n\n.user-review-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n  max-height: calc(90vh - 10rem);\n  padding: 1.5rem;\n}\n\n.attempt-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.375rem;\n  padding: 0.75rem 0;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n  margin-bottom: 0.875rem;\n}\n\n.attempt-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-weight: 700;\n  letter-spacing: -0.01em;\n}\n\n.attempt-header[_ngcontent-%COMP%]   .score-badge[_ngcontent-%COMP%] {\n  background: #e9f7ef;\n  color: #0a8043;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.75rem;\n  font-weight: 700;\n  font-size: 0.875rem;\n  margin-left: auto;\n  letter-spacing: 0.01em;\n}\n\n.attempt-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-size: 0.8125rem;\n}\n\n.questions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n\n.question-review-card[_ngcontent-%COMP%] {\n  position: relative;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.875rem;\n  padding: 1.25rem 1.5rem;\n  background: var(--bg-1);\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 0.125rem 0.375rem rgba(15, 23, 42, 0.03);\n  overflow: hidden;\n}\n\n.question-review-card[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 0.1875rem;\n  background: linear-gradient(180deg, var(--button-1) 0%, rgba(99, 102, 241, 0.4) 100%);\n}\n\n.question-review-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.75rem 1.75rem rgba(15, 23, 42, 0.08);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.25);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .q-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.55;\n  color: var(--theme-3-text-1);\n}\n\n.question-review-card[_ngcontent-%COMP%]   .mark-badge[_ngcontent-%COMP%] {\n  float: right;\n  background: #fff3f3;\n  color: var(--red-text);\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 600;\n  font-size: 0.75rem;\n}\n\n.q-head-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 0.0625rem dashed var(--theme-3-border);\n}\n\n.q-left[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  align-items: flex-start;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-body[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.5rem;\n  flex: 1;\n  min-width: 0;\n}\n\n.q-meta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-index[_ngcontent-%COMP%] {\n  width: 2.25rem;\n  height: 2.25rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.18) 0%, rgba(99, 102, 241, 0.06) 100%);\n  border: 0.0625rem solid rgba(99, 102, 241, 0.18);\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 800;\n  font-size: 0.875rem;\n  color: var(--button-1);\n  flex-shrink: 0;\n}\n\n.q-right[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n  align-items: center;\n  align-self: flex-start;\n  flex-shrink: 0;\n}\n\n.q-badge[_ngcontent-%COMP%] {\n  background: var(--theme-2-hanover-bg);\n  border: 0.0625rem solid var(--theme-3-border);\n  color: var(--button-1);\n  border-radius: 0.5rem;\n  padding: 0.25rem 0.625rem;\n  font-size: 0.6875rem;\n  line-height: 1rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n}\n\n.q-info[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-3);\n  font-size: 0.8125rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.375rem;\n  font-weight: 500;\n}\n\n.q-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9375rem;\n  width: 0.9375rem;\n  height: 0.9375rem;\n  color: var(--button-1);\n}\n\n.q-marks.small-muted[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.875rem;\n}\n\n.q-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.625rem;\n}\n\n.q-options.two-col[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n\n.q-option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 0.875rem;\n  border-radius: 0.5rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.1);\n  background: #f8fbff;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), background 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(99, 102, 241, 0.15);\n}\n\n.opt-left[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.opt-left[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 50%;\n  background: rgba(0, 0, 0, 0.05);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n  font-size: 0.8125rem;\n  transition: background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.opt-body[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 0.75rem;\n  align-self: center;\n  line-height: 1.45;\n}\n\n.opt-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-shrink: 0;\n}\n\n.badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.625rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  white-space: nowrap;\n  letter-spacing: 0.02em;\n}\n\n.badge.your-answer[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border: 0.0625rem solid var(--bred-border);\n}\n\n.badge.correct[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: var(--green-text);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.badge.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%] {\n  background: var(--red-bg);\n  color: var(--red-text);\n  border-color: var(--bred-border);\n}\n\n.q-option.selected[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(185, 28, 28, 0.1);\n}\n\n.q-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  color: var(--green-text);\n  border-color: var(--bgreen-border);\n}\n\n.q-option.correct[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(22, 101, 52, 0.1);\n}\n\n.q-option.missed[_ngcontent-%COMP%] {\n  background: var(--blue-bg);\n  color: var(--bblue-text);\n  border-color: var(--bblue-border);\n}\n\n.q-option.missed[_ngcontent-%COMP%]   .opt-mark[_ngcontent-%COMP%] {\n  background: rgba(11, 102, 208, 0.1);\n}\n\n.q-selected[_ngcontent-%COMP%], .q-marks[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-size: 0.875rem;\n}\n\n.q-feedback[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  background: rgba(240, 248, 255, 0.6);\n  padding: 0.625rem 0.75rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.75);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-evaluation-state[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  padding: 0.75rem;\n  border-radius: 0.625rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n}\n\n.q-evaluation-state.failed[_ngcontent-%COMP%] {\n  color: #8a1c1c;\n  background: #fff2f2;\n  border: 0.0625rem solid #efb4b4;\n}\n\n.q-evaluation-state.pending[_ngcontent-%COMP%] {\n  color: #6c4a00;\n  background: #fff8e6;\n  border: 0.0625rem solid #e7ca7a;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%] {\n  border: 0.0625rem solid currentColor;\n  border-radius: 0.375rem;\n  padding: 0.4rem 0.7rem;\n  color: inherit;\n  background: #fff;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.retry-evaluation-btn[_ngcontent-%COMP%]:disabled {\n  cursor: wait;\n  opacity: 0.6;\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.25rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-style: italic;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%], .q-marks.mark-negative[_ngcontent-%COMP%], .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.25rem;\n  height: 2rem;\n  margin-top: 0;\n  padding: 0 0.625rem;\n  display: inline-grid !important;\n  place-items: center;\n  border-radius: 0.375rem;\n  font-weight: 800 !important;\n  font-size: 0.8125rem;\n  line-height: normal;\n  letter-spacing: 0.01em;\n  text-align: center;\n  box-sizing: border-box;\n}\n\n.q-marks.mark-positive[_ngcontent-%COMP%] {\n  background: #e8f9ef;\n  color: #0b8a45;\n}\n\n.q-marks.mark-negative[_ngcontent-%COMP%] {\n  background: #fff2f4;\n  color: #b02a37;\n}\n\n.q-marks.mark-mid[_ngcontent-%COMP%] {\n  background: #fff8e6;\n  color: #b36a00;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  background: #fff7ed;\n  border: 0.0625rem solid rgba(245, 166, 35, 0.1);\n  transition: box-shadow 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.0625rem 0.1875rem rgba(0, 0, 0, 0.04), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.03);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.selected[_ngcontent-%COMP%] {\n  background: #e8f6ff;\n  border-color: rgba(2, 112, 255, 0.15);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-option.correct[_ngcontent-%COMP%] {\n  background: var(--green-bg);\n  border-color: var(--bgreen-border);\n}\n\n.q-fill[_ngcontent-%COMP%]   .fill-correct[_ngcontent-%COMP%] {\n  padding: 0.625rem 0.875rem;\n  border-radius: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 0.8125rem;\n  background-color: var(--green-bg);\n  border: 0.0625rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 0.875rem;\n}\n\n.descriptive-answers[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);\n  gap: 0.875rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.75rem;\n  margin-bottom: 0.625rem;\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-question[_ngcontent-%COMP%] {\n  flex: 1 1 auto;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-label[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #8c6ad6;\n  background: rgba(140, 106, 214, 0.08);\n  display: inline-block;\n  padding: 0.375rem 0.5rem;\n  border-radius: 0.5rem;\n  font-weight: 700;\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .question-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  flex: 0 0 8.75rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 800;\n  color: #f39c12;\n  background: #fff;\n  padding: 0.75rem 0.5rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  margin-top: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--theme-2);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--green-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bgreen-border);\n  border-left: 0.1875rem solid var(--bgreen-border);\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-label[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .student-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.7);\n  margin-bottom: 0.375rem;\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-model[_ngcontent-%COMP%]   .model-text[_ngcontent-%COMP%], .q-descriptive[_ngcontent-%COMP%]   .desc-student[_ngcontent-%COMP%]   .answer-text[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.55;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n  width: 8.75rem;\n  background: #fff;\n  border: 0.0625rem solid rgba(0, 0, 0, 0.04);\n  padding: 0.625rem;\n  border-radius: 0.5rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.6);\n  margin-bottom: 0.375rem;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .score-value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0b66d0;\n}\n\n.q-descriptive[_ngcontent-%COMP%]   .q-feedback[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  background-color: var(--blue-bg);\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--bblue-border);\n  border-left: 0.1875rem solid var(--bblue-border);\n  line-height: 1.5;\n}\n\n.q-review-comments[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 0.0625rem dashed var(--theme-3-border);\n}\n\n.review-columns[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 0.875rem;\n}\n@media (max-width: 768px) {\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  border-radius: 0.75rem;\n  min-height: 4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.5rem 1.25rem rgba(15, 23, 42, 0.06);\n  transform: translateY(-0.125rem);\n}\n.review-columns[_ngcontent-%COMP%]   .col.missed[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--red-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--bred-border);\n  border-top: 0.1875rem solid var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incorrect[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--orange-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--borange-border);\n  border-top: 0.1875rem solid var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col.incomplete[_ngcontent-%COMP%] {\n  background: linear-gradient(180deg, var(--yellow-bg) 0%, var(--bg-1, #fff) 90%);\n  border: 0.0625rem solid var(--byellow-border);\n  border-top: 0.1875rem solid var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.5rem;\n  height: 0.5rem;\n  border-radius: 50%;\n  display: inline-block;\n  flex-shrink: 0;\n  box-shadow: 0 0 0 0.1875rem rgba(0, 0, 0, 0.04);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.red[_ngcontent-%COMP%] {\n  background: var(--red-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.orange[_ngcontent-%COMP%] {\n  background: var(--orange-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   .dot.yellow[_ngcontent-%COMP%] {\n  background: var(--yellow-text);\n}\n.review-columns[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .col-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.8125rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--theme-3-text-2, #374151);\n}\n\n.review-empty[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: var(--theme-3-text-3, #9CA3AF);\n  font-style: italic;\n  padding: 0.5rem 0;\n}\n\n.review-item[_ngcontent-%COMP%] {\n  background: var(--bg-1, #ffffff);\n  border: 0.0625rem solid rgba(15, 23, 42, 0.08);\n  border-radius: 0.625rem;\n  padding: 0.75rem 0.875rem;\n  margin-bottom: 0.625rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.03);\n  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.review-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.review-item[_ngcontent-%COMP%]:hover {\n  border-color: rgba(15, 23, 42, 0.14);\n  box-shadow: 0 0.25rem 0.75rem rgba(15, 23, 42, 0.06);\n}\n.review-item[_ngcontent-%COMP%]   .ri-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.review-text-missed[_ngcontent-%COMP%], .review-text-incorrect[_ngcontent-%COMP%], .review-text-incomplete[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.625rem;\n  width: 100%;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.review-text-missed.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incorrect.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%], .review-text-incomplete.deleted[_ngcontent-%COMP%]   .review-text[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.ri-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  margin-top: 0.125rem;\n}\n\n.ri-icon[_ngcontent-%COMP%] {\n  width: 1.375rem;\n  height: 1.375rem;\n  border-radius: 50%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.75rem;\n  font-weight: 700;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.ri-icon.missed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.ri-icon.incorrect[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  color: #c2410c;\n}\n.ri-icon.incomplete[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.review-text[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  line-height: 1.45;\n  color: #1e293b;\n  font-weight: 500;\n  word-break: break-word;\n  flex: 1;\n}\n.review-text.deleted[_ngcontent-%COMP%] {\n  text-decoration: line-through;\n  color: #94a3b8;\n}\n\n.review-text-history[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n\n.history-entry[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.5rem;\n  border-bottom: 0.0625rem dashed #e2e8f0;\n}\n.history-entry[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.25rem;\n}\n.history-entry.deleted[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n\n.review-meta[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #64748b;\n  margin-top: 0.5rem;\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  flex-wrap: wrap;\n}\n.review-meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  vertical-align: middle;\n  color: #64748b;\n}\n.review-meta[_ngcontent-%COMP%]   .deleted-by[_ngcontent-%COMP%] {\n  color: #dc2626;\n  font-weight: 500;\n}\n\n.review-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n  padding-top: 0.5rem;\n  border-top: 0.0625rem dashed #e2e8f0;\n  flex-wrap: wrap;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.125rem;\n  margin-bottom: 0.375rem;\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  padding: 0.35rem 0.625rem;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 0.375rem;\n  font-size: 0.725rem;\n  line-height: 1.35;\n  color: #475569;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.03);\n  transition: all 0.2s ease;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]:hover {\n  background: #f1f5f9;\n  border-color: #cbd5e1;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px !important;\n  width: 15px !important;\n  height: 15px !important;\n  line-height: 15px !important;\n  color: #4f46e5 !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  flex-shrink: 0;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-text[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .editor-name[_ngcontent-%COMP%] {\n  color: #0f172a;\n  font-weight: 600;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date-sep[_ngcontent-%COMP%] {\n  color: #94a3b8;\n  font-size: 0.65rem;\n  margin: 0 0.05rem;\n}\n.review-actions[_ngcontent-%COMP%]   .edited-info[_ngcontent-%COMP%]   .edited-date[_ngcontent-%COMP%] {\n  color: #64748b;\n  font-weight: 400;\n}\n.review-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%], .review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 600;\n  text-decoration: none;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.375rem;\n  transition: all 0.15s ease;\n  cursor: pointer;\n  border: none;\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%] {\n  color: #2563eb;\n  background: rgba(37, 99, 235, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .edit-link[_ngcontent-%COMP%]:hover {\n  background: rgba(37, 99, 235, 0.16);\n  color: #1d4ed8;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%] {\n  color: #dc2626;\n  background: rgba(220, 38, 38, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .delete-link[_ngcontent-%COMP%]:hover {\n  background: rgba(220, 38, 38, 0.16);\n  color: #b91c1c;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%] {\n  color: #16a34a;\n  background: rgba(22, 163, 74, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .save-link[_ngcontent-%COMP%]:hover {\n  background: rgba(22, 163, 74, 0.16);\n  color: #15803d;\n  text-decoration: none;\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%] {\n  color: #64748b;\n  background: rgba(100, 116, 139, 0.08);\n}\n.review-actions[_ngcontent-%COMP%]   .cancel-link[_ngcontent-%COMP%]:hover {\n  background: rgba(100, 116, 139, 0.16);\n  color: #475569;\n  text-decoration: none;\n}\n\n.marks-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n  min-height: 2.25rem;\n}\n\n.marks-display[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.1875rem;\n  border: 0.0625rem solid var(--theme-3-border);\n  border-radius: 0.625rem;\n  background: var(--bg-1);\n  box-shadow: 0 0.0625rem 0.125rem rgba(15, 23, 42, 0.04);\n}\n\n.marks-display[_ngcontent-%COMP%]   .q-marks.mark-positive[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-negative[_ngcontent-%COMP%], .marks-display[_ngcontent-%COMP%]   .q-marks.mark-mid[_ngcontent-%COMP%] {\n  min-width: 3.5rem;\n  height: 1.75rem;\n  padding: 0 0.5rem;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  border-radius: 0.4375rem;\n}\n\n.marks-divider[_ngcontent-%COMP%] {\n  opacity: 0.55;\n  font-weight: 600;\n}\n\n.edit-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  line-height: 1.75rem !important;\n  border-radius: 0.4375rem !important;\n  color: var(--theme-3-text-2) !important;\n  opacity: 0.72;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1), background 0.2s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.edit-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background: rgba(99, 102, 241, 0.08);\n  color: var(--button-1) !important;\n}\n.edit-marks-btn[_ngcontent-%COMP%]:focus-visible {\n  outline: 0.125rem solid var(--button-1);\n  outline-offset: 0.0625rem;\n}\n\n.marks-edit[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  width: min(20rem, 100vw - 4rem);\n  gap: 0.625rem;\n  background: #fff;\n  padding: 0.625rem;\n  border-radius: 0.625rem;\n  border: 0.0625rem solid var(--button-1);\n  box-shadow: 0 0.125rem 0.5rem rgba(99, 102, 241, 0.15);\n}\n\n.marks-input[_ngcontent-%COMP%] {\n  width: 3.5rem;\n  padding: 0.25rem 0.375rem;\n  border: 0.0625rem solid var(--border-1);\n  border-radius: 0.375rem;\n  font-size: 0.875rem;\n  font-weight: 600;\n  text-align: center;\n  transition: border-color 0.2s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.marks-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--button-1);\n  box-shadow: 0 0 0 0.125rem rgba(99, 102, 241, 0.1);\n}\n.marks-input[_ngcontent-%COMP%]::-webkit-inner-spin-button, .marks-input[_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n.marks-max[_ngcontent-%COMP%] {\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n  font-weight: 500;\n}\n\n.save-marks-btn[_ngcontent-%COMP%], .cancel-marks-btn[_ngcontent-%COMP%] {\n  width: 1.75rem !important;\n  height: 1.75rem !important;\n  min-width: 1.75rem !important;\n  padding: 0 !important;\n  display: inline-flex !important;\n  align-items: center;\n  justify-content: center;\n  line-height: 1 !important;\n  border-radius: 0.4375rem !important;\n  flex: 0 0 1.75rem;\n}\n\n.save-marks-btn[_ngcontent-%COMP%] {\n  color: var(--green-text) !important;\n  background: var(--green-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.save-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.save-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.cancel-marks-btn[_ngcontent-%COMP%] {\n  color: var(--red-text) !important;\n  background: var(--red-bg) !important;\n  transition: opacity 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.cancel-marks-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin: 0 !important;\n  line-height: 1rem;\n}\n.cancel-marks-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.85;\n}\n\n.marks-history-section[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background: linear-gradient(135deg, rgba(99, 102, 241, 0.03) 0%, rgba(59, 130, 246, 0.02) 100%);\n  border-radius: 0.75rem;\n  border: 0.0625rem solid rgba(99, 102, 241, 0.1);\n}\n\n.marks-history-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n  padding-bottom: 0.5rem;\n  border-bottom: 0.0625rem solid rgba(99, 102, 241, 0.1);\n  font-weight: 600;\n  font-size: 0.875rem;\n  color: var(--button-1);\n}\n.marks-history-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  width: 1.125rem;\n  height: 1.125rem;\n}\n\n.marks-history-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n\n.history-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.875rem;\n  position: relative;\n}\n\n.history-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 1.5rem;\n  flex-shrink: 0;\n}\n.history-indicator[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  border-radius: 50%;\n  z-index: 1;\n  box-shadow: 0 0 0 0.1875rem rgb(255, 255, 255);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #10b981, #059669);\n  box-shadow: 0 0 0 0.1875rem rgba(16, 185, 129, 0.15), 0 0.125rem 0.375rem rgba(16, 185, 129, 0.25);\n}\n.history-indicator[_ngcontent-%COMP%]   .dot.past[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, #94a3b8, #64748b);\n  box-shadow: 0 0 0 0.1875rem rgba(148, 163, 184, 0.15);\n}\n.history-indicator[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  width: 0.125rem;\n  flex: 1;\n  background: linear-gradient(180deg, rgba(148, 163, 184, 0.4) 0%, rgba(148, 163, 184, 0.1) 100%);\n  margin: 0.25rem 0;\n  min-height: 1rem;\n}\n\n.history-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-bottom: 0.875rem;\n}\n\n.history-card[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 0.625rem;\n  transition: box-shadow 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1), border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.history-card.current[_ngcontent-%COMP%] {\n  background: linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, rgba(5, 150, 105, 0.04) 100%);\n  border: 0.0625rem solid rgba(16, 185, 129, 0.2);\n  box-shadow: 0 0.125rem 0.5rem rgba(16, 185, 129, 0.1);\n}\n.history-card.current[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.375rem 1rem rgba(16, 185, 129, 0.18);\n  transform: translateY(-0.1875rem);\n  border-color: rgba(16, 185, 129, 0.3);\n}\n.history-card.past[_ngcontent-%COMP%] {\n  background: rgba(248, 250, 252, 0.8);\n  border: 0.0625rem solid rgba(0, 0, 0, 0.06);\n}\n.history-card.past[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.06);\n  transform: translateY(-0.125rem);\n  border-color: rgba(0, 0, 0, 0.1);\n}\n\n.history-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 0.1875rem 0.5rem;\n  border-radius: 1rem;\n  font-size: 0.6875rem;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n  background: linear-gradient(135deg, #10b981, #059669);\n  color: #fff;\n  margin-bottom: 0.375rem;\n  box-shadow: 0 0.0625rem 0.25rem rgba(16, 185, 129, 0.3);\n}\n\n.history-marks[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1.2;\n  margin-bottom: 0.5rem;\n}\n.history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.45);\n}\n\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  color: rgba(0, 0, 0, 0.6);\n}\n.history-card.past[_ngcontent-%COMP%]   .history-marks[_ngcontent-%COMP%]   .marks-total[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n\n.history-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  font-size: 0.8125rem;\n  color: rgba(0, 0, 0, 0.55);\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], .history-meta[_ngcontent-%COMP%]   .updated-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  width: 0.875rem;\n  height: 0.875rem;\n  opacity: 0.6;\n}\n.history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: rgba(0, 0, 0, 0.7);\n}\n\n.history-card.current[_ngcontent-%COMP%]   .history-meta[_ngcontent-%COMP%]   .updated-by[_ngcontent-%COMP%] {\n  color: var(--green-text);\n}\n\n@media (max-width: 55rem) {\n  .page[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.75rem 2rem;\n  }\n  .toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding-bottom: 0.625rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    max-width: 100%;\n    flex: 1 1 100%;\n  }\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .tab-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .tab-actions[_ngcontent-%COMP%]   .action-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .review-columns[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-options.two-col[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .user-review-panel[_ngcontent-%COMP%] {\n    width: 96%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%], .resource-panel[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    border-radius: 0.625rem;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .panel-body[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .q-descriptive[_ngcontent-%COMP%]   .desc-header[_ngcontent-%COMP%]   .desc-score[_ngcontent-%COMP%] {\n    width: 100%;\n    flex: none;\n    margin-top: 0.5rem;\n  }\n  .descriptive-answers[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .q-head-row[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .q-right[_ngcontent-%COMP%] {\n    margin-left: 3.125rem;\n  }\n}\n.marks-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.375rem;\n}\n\n.marks-reason-label[_ngcontent-%COMP%] {\n  color: var(--theme-3-text-2);\n  font-size: 0.75rem;\n  font-weight: 700;\n}\n\n.marks-reason-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .marks-reason-error[_ngcontent-%COMP%] {\n  color: var(--red-text);\n}\n\n.marks-reason-error[_ngcontent-%COMP%] {\n  margin-top: -0.25rem;\n  font-size: 0.75rem;\n  line-height: 1.35;\n}\n\n.marks-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.375rem;\n  min-height: 1.75rem;\n}\n\n.marks-reason-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 5rem;\n  box-sizing: border-box;\n  padding: 0.625rem;\n  border: 0.0625rem solid var(--border-color, #d3d9e2);\n  border-radius: 0.375rem;\n  font: inherit;\n  line-height: 1.4;\n  resize: vertical;\n}\n\n.marks-reason-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--primary-color, #267cff);\n  box-shadow: 0 0 0 0.125rem rgba(38, 124, 255, 0.12);\n}\n\n.marks-reason-input[aria-invalid=true][_ngcontent-%COMP%], .marks-reason-input.input-error[_ngcontent-%COMP%] {\n  border-color: #dc3545 !important;\n  box-shadow: 0 0 0 0.125rem rgba(220, 53, 69, 0.25) !important;\n}\n\n.history-reason[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  color: rgba(0, 0, 0, 0.68);\n  line-height: 1.4;\n}\n\n@media (max-width: 45rem) {\n  .report-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 0.875rem;\n  }\n  .summary-card[_ngcontent-%COMP%] {\n    padding: 0.875rem;\n  }\n  .summary-meta[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    margin-bottom: 0.75rem;\n    border-radius: 0.625rem;\n    overflow: hidden;\n    border: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    text-align: left;\n    border-radius: 0;\n    border: none;\n    border-bottom: 0.0625rem solid var(--theme-3-border);\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .wrong-summary-panel[_ngcontent-%COMP%]   .summary-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 700;\n    color: var(--theme-3-text-2);\n    margin-right: 0.5rem;\n  }\n  .selections[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.manual-check-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: 8px;\n  padding: 3px 9px;\n  border: 1px solid #d97706;\n  border-radius: 16px;\n  background: #fff7ed;\n  color: #9a3412;\n  cursor: pointer;\n  font: inherit;\n}\n\n.manual-check-chip.selected[_ngcontent-%COMP%] {\n  background: #ffedd5;\n  font-weight: 600;\n}\n\n.manual-check-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  font-size: 16px;\n}\n\n.edit-comment-reason[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  margin-top: 8px;\n}\n\n.review-meta[_ngcontent-%COMP%]   .edit-reason[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 2px;\n}\n\n.save-link.disabled[_ngcontent-%COMP%] {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.filters-panel[_ngcontent-%COMP%]   .filter-item.filter-item--full[_ngcontent-%COMP%] {\n  width: 100% !important;\n  flex: 0 0 100% !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvdXNlcnJvbGUvYWRtaW4vZXhhbS1yZXBvcnRzL2V4YW0tcmVwb3J0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBZEY7O0FBa0JBO0VBQXdELGFBQUE7QUFkeEQ7O0FBaUJBO0VBQVEsNEJBQUE7QUFiUjs7QUFjQTtFQUFnQixhQUFBO0VBQWUsc0JBQUE7RUFBd0IsYUFBQTtBQVJ2RDs7QUFTQTtFQUFXLGFBQUE7RUFBZSxlQUFBO0VBQWlCLG1CQUFBO0VBQXFCLDhCQUFBO0VBQWdDLGFBQUE7RUFBZSx1QkFBQTtFQUF5QixrREFBQTtBQUN4STs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUVBO0VBQ0UsNkRBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrREFBQTtFQUNBLHdFQUFBO0FBQ0Y7O0FBQ0E7RUFBMkUsd0JBQUE7QUFHM0U7O0FBRkE7RUFBK0UsZUFBQTtBQU0vRTs7QUFMQTtFQUFnRixpQkFBQTtFQUFtQixpQkFBQTtBQVVuRzs7QUFUQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQVlGOztBQVZBOztFQUVFLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWFGOztBQVhBO0VBQ0UsbUJBQUE7RUFD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QUFBO0VBQWdCLFdBQUE7RUFBYSxlQUFBO0FBMDlDcEQ7O0FBejlDQTtFQUE0QixjQUFBO0VBQWdCLGVBQUE7QUE4OUM1Qzs7QUE3OUNBO0VBQXNCLGFBQUE7RUFBYyxtQkFBQTtBQWsrQ3BDOztBQWgrQ0E7RUFDRSxzQkFBQTtFQUNBLHlCQUFBO0FBbStDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEVudGVycHJpc2Ugw6LCgMKTIEV4YW0gUmVwb3J0cyAgKGVuaGFuY2VkIHYyKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuJGVhc2U6IGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XHJcbiRlYXNlLXNtb290aDogY3ViaWMtYmV6aWVyKDAuNjUsIDAsIDAuMzUsIDEpO1xyXG4kZWFzZS1ib3VuY2U6IGN1YmljLWJlemllcigwLjM0LCAxLjU2LCAwLjY0LCAxKTtcclxuJHJhZGl1czogMC43NXJlbTtcclxuJHNoYWRvdy1zbTogMCAwLjA2MjVyZW0gMC4xODc1cmVtIHJnYmEoMCwwLDAsMC4wNCksIDAgMC4wNjI1cmVtIDAuMTI1cmVtIHJnYmEoMCwwLDAsMC4wMyk7XHJcbiRzaGFkb3ctbWQ6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMCwwLDAsMC4wNik7XHJcbiRzaGFkb3ctbGc6IDAgMS4yNXJlbSAyLjVyZW0gcmdiYSgwLDAsMCwwLjEpLCAwIDAuNXJlbSAxcmVtIHJnYmEoMCwwLDAsMC4wNik7XHJcbiRzaGFkb3ctcGFuZWw6IDAgMS41cmVtIDMuNzVyZW0gcmdiYSg1LDE4LDQwLDAuMjIpLCAwIDAuMzc1cmVtIDFyZW0gcmdiYSg1LDE4LDQwLDAuMDgpO1xyXG4kc2hhZG93LWhvdmVyOiAwIDAuNXJlbSAxLjI1cmVtIHJnYmEoMCwwLDAsMC4wOCk7XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSG9zdCB0b2tlbnMgw6LClMKAw6LClMKAXHJcbjpob3N0IHtcclxuICAtLWdyZWVuLWJnOiAjZThmOWVmO1xyXG4gIC0tcmVkLWJnOiAjZmZmMmY0O1xyXG4gIC0teWVsbG93LWJnOiAjZmZmOGU2O1xyXG4gIC0tb3JhbmdlLWJnOiAjZmZmNGUxO1xyXG4gIC0tYmx1ZS1iZzogI2U2ZjBmZjtcclxuICAtLWdyZWVuLXRleHQ6ICMxNjY1MzQ7XHJcbiAgLS1yZWQtdGV4dDogI2I5MWMxYztcclxuICAtLXllbGxvdy10ZXh0OiAjYjQ1MzA5O1xyXG4gIC0tb3JhbmdlLXRleHQ6ICNjMjQxMGM7XHJcbiAgLS1ibHVlLXRleHQ6ICMwYjY2ZDA7XHJcbiAgLS1iZ3JlZW4tYm9yZGVyOiAjODZlZmFjO1xyXG4gIC0tYnJlZC1ib3JkZXI6ICNlN2Q2ZDY7XHJcbiAgLS1ieWVsbG93LWJvcmRlcjogI2ZkZTY4YTtcclxuICAtLWJvcmFuZ2UtYm9yZGVyOiAjZmFlZWRmO1xyXG4gIC0tYmJsdWUtYm9yZGVyOiAjOTNjNWZkO1xyXG4gIC0tc2NvcmUtY29sb3I6ICNmMzljMTI7XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYXRlcmlhbCBvdmVycmlkZXMgw6LClMKAw6LClMKAXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkLXN1YnNjcmlwdC13cmFwcGVyIHsgZGlzcGxheTogbm9uZTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhZ2UgJiB0b29sYmFyIMOiwpTCgMOiwpTCgFxyXG4ucGFnZSB7IHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtIDNyZW07IH1cclxuLmV4YW0tcmVwb3J0cyB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMS4xMjVyZW07IH1cclxuLnRvb2xiYXIgeyBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAwLjg3NXJlbTsgcGFkZGluZy1ib3R0b206IDAuNzVyZW07IGJvcmRlci1ib3R0b206IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMDYpOyB9XHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBTRUxFQ1RJT05TIMOiwoDClCBQcmVtaXVtIEF1dG9jb21wbGV0ZSBJbnB1dHNcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi5zZWxlY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4OiAxIDEgMjhyZW07XHJcbiAgbWluLXdpZHRoOiAxNnJlbTtcclxuICBtYXgtd2lkdGg6IDM2cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtaW4td2lkdGg6IDE0cmVtO1xyXG4gIG1heC13aWR0aDogMThyZW07XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2ZhZmJmYyAxMDAlKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgcGFkZGluZzogMCAwLjg3NXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgJGVhc2U7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDIpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4IHsgaGVpZ2h0OiAyLjc1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHsgcGFkZGluZzogMC41cmVtIDA7IG1pbi1oZWlnaHQ6IHVuc2V0OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7IFxyXG4gIHRvcDogMS4zNzVyZW07IFxyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgY29sb3I6ICM2NDc0OGI7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtZmxvYXRpbmctbGFiZWwsXHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbC5tZGMtZmxvYXRpbmctbGFiZWwtLWZsb2F0LWFib3ZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEuNXJlbSkgc2NhbGUoMC43NSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCBpbnB1dCB7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC4wMWVtO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZCBpbnB1dDo6cGxhY2Vob2xkZXIgeyBcclxuICBjb2xvcjogIzk0YTNiODsgXHJcbiAgZm9udC13ZWlnaHQ6IDQwMDsgXHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkIG1hdC1pY29uW21hdFByZWZpeF0ge1xyXG4gIGNvbG9yOiAjOTRhM2I4O1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICB3aWR0aDogMS4yNXJlbTtcclxuICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzICRlYXNlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZDpob3ZlciAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogI2NiZDVlMTtcclxuICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZDpob3ZlciBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6ICM2NDc0OGI7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDAgM3B4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjEyKSwgMCA0cHggMTZweCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4wOCk7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5kaXNhYmxlZC10b29sYmFyLWZpZWxkIHtcclxuICAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2YxZjVmOSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NiZDVlMSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZCAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMC45NTtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXQge1xyXG4gICAgY29sb3I6ICMwZjE3MmEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDEgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjMGYxNzJhICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgY29sb3I6ICM2NDc0OGIgIWltcG9ydGFudDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMCAhaW1wb3J0YW50O1xyXG4gICAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbiAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7XHJcbiAgICBjb2xvcjogIzQ3NTU2OSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgICBjb2xvcjogIzY0NzQ4YiAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmxvY2staWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMS4xMjVyZW0gIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMS4xMjVyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjNjQ3NDhiICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4zNzVyZW07XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlcixcclxuOmhvc3QgOjpuZy1kZWVwIC50b29sYmFyIC5zZWxlY3Rpb25zIG1hdC1mb3JtLWZpZWxkLm1hdC1mb3JtLWZpZWxkLWRpc2FibGVkIGlucHV0IHtcclxuICBiYWNrZ3JvdW5kOiAjZjFmNWY5ICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICM5NGEzYjggIWltcG9ydGFudDtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZTJlOGYwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudG9vbGJhciAuc2VsZWN0aW9ucyBtYXQtZm9ybS1maWVsZC5tYXQtZm9ybS1maWVsZC1kaXNhYmxlZCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7XHJcbiAgY29sb3I6ICM5NGEzYjggIWltcG9ydGFudDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRvb2xiYXIgLnNlbGVjdGlvbnMgbWF0LWZvcm0tZmllbGQgLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi8vIEVtcHR5IHN0YXRlIHBsYWNlaG9sZGVyIGNhcmQgd2hlbiBubyB0ZXN0IHNlbGVjdGVkXHJcbi5lbXB0eS1yZXBvcnRzLXN0YXRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogNHJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZmZmZmZiAwJSwgI2Y4ZmFmYyAxMDAlKTtcclxuICBib3JkZXI6IDFweCBkYXNoZWQgI2NiZDVlMTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjNzICRlYXNlO1xyXG59XHJcblxyXG4uZW1wdHktc3RhdGUtY2FyZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1heC13aWR0aDogMjhyZW07XHJcblxyXG4gIC5lbXB0eS1zdGF0ZS1pY29uIHtcclxuICAgIHdpZHRoOiA0LjI1cmVtO1xyXG4gICAgaGVpZ2h0OiA0LjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSgzMSwgMTIzLCAyNTUsIDAuMTIpIDAlLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4wNCkgMTAwJSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzEsIDEyMywgMjU1LCAwLjIpO1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gICAgICB3aWR0aDogMi4yNXJlbTtcclxuICAgICAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLTEsICMxZjdiZmYpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVtcHR5LXN0YXRlLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzBmMTcyYTtcclxuICAgIG1hcmdpbjogMCAwIDAuNXJlbSAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbiAgfVxyXG5cclxuICAuZW1wdHktc3RhdGUtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIG1hcmdpbjogMCAwIDEuNXJlbSAwO1xyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmVtcHR5LWFjdGlvbi1idG4ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBoZWlnaHQ6IDIuNXJlbTtcclxuICAgIHBhZGRpbmc6IDAgMS4yNXJlbSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQXV0b2NvbXBsZXRlIHBhbmVsIHN0eWxpbmdcclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMjBweCA0MHB4IC0xMnB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wMykgIWltcG9ydGFudDtcclxuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24ge1xyXG4gIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBtaW4taGVpZ2h0OiAyLjc1cmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjE1cyAkZWFzZTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDYpIDAlLCByZ2JhKDEzOSwgOTIsIDI0NiwgMC4wNCkgMTAwJSk7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLWF1dG9jb21wbGV0ZS1wYW5lbCAubWF0LW1kYy1vcHRpb24ubWF0LW1kYy1vcHRpb24tYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xKSAwJSwgcmdiYSgzMSwgMTIzLCAyNTUsIDAuMDYpIDEwMCUpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAubWF0LW1kYy1hdXRvY29tcGxldGUtcGFuZWwgLm1hdC1tZGMtb3B0aW9uIC5vcHRpb24tbWFpbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzBmMTcyYTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1tZGMtYXV0b2NvbXBsZXRlLXBhbmVsIC5tYXQtbWRjLW9wdGlvbiAub3B0aW9uLXN1YiB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xyXG59XHJcbi5jb250cm9scyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC41cmVtOyB9XHJcbi5hY3Rpb24tcm93IHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjVyZW07IGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cclxuLnJlZnJlc2gtaWNvbi1idG4ge1xyXG4gIG1pbi13aWR0aDogMi42MjVyZW0gIWltcG9ydGFudDtcclxuICB3aWR0aDogMi42MjVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIuNjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSkgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG5cclxuICBtYXQtaWNvbiB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgJGVhc2U7XHJcblxyXG4gICAgc3ZnLCBwYXRoIHtcclxuICAgICAgZmlsbDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIsICMxYTZmZTgpICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4uYnV0dG9uLW9uZSB7IGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi0xKSAhaW1wb3J0YW50OyBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtMSkgIWltcG9ydGFudDsgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDsgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTsgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjI1cyAkZWFzZSwgYm94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlICFpbXBvcnRhbnQ7IH1cclxuLmJ1dHRvbi1vbmU6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMS1ob3ZlcikgIWltcG9ydGFudDsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTIpICFpbXBvcnRhbnQ7IGJveC1zaGFkb3c6ICRzaGFkb3ctbWQgIWltcG9ydGFudDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjA2MjVyZW0pOyB9XHJcblxyXG4vLyDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpDDosKVwpBcclxuLy8gRklMVEVSUyBPVkVSTEFZIFBBTkVMIMOiwoDClCBNb2Rlcm4gZmllbGQgZGVzaWduXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4uZmlsdGVycy1wYW5lbCB7XHJcbiAgd2lkdGg6IG1pbigzNHJlbSwgY2FsYygxMDB2dyAtIDJyZW0pKTtcclxuICBtYXgtaGVpZ2h0OiA3NXZoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmZmZmZmYgMCUsICNmYWZiZmMgMTAwJSk7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcclxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMS4yNXJlbSAzcmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4xNiksIDAgMC4zNzVyZW0gMXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gIGFuaW1hdGlvbjogc2xpZGVVcCAwLjI4cyAkZWFzZS1ib3VuY2U7XHJcbn1cclxuXHJcbi5maWx0ZXJzLXBhbmVsLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBwYWRkaW5nOiAxcmVtIDEuMTI1cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE1LCAyMywgNDIsIDAuMDYpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmYWZiZmMgMCUsICNmZmZmZmYgMTAwJSk7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbn1cclxuLmZpbHRlcnMtcGFuZWwtaGVhZGVyIGg0IHtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC45Mzc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6ICMwZjE3MmE7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XHJcbn1cclxuLmZpbHRlcnMtcGFuZWwtaGVhZGVyIGg0IG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDEuMTI1cmVtO1xyXG4gIHdpZHRoOiAxLjEyNXJlbTtcclxuICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbn1cclxuXHJcbi5maWx0ZXItYmxvY2sge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG4gIGdhcDogMC43NXJlbTtcclxuICBwYWRkaW5nOiAxcmVtIDEuMTI1cmVtO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgZmxleDogMTtcclxufVxyXG4uZmlsdGVyLWl0ZW0ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMDtcclxufVxyXG5cclxuLy8gRmlsdGVyIGZpZWxkIDo6bmctZGVlcCBvdmVycmlkZXMgw6LCgMKUIG1vZGVybiBjb21wYWN0IGxvb2tcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMDtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZSwgYmFja2dyb3VuZCAwLjJzICRlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDE1LCAyMywgNDIsIDAuMDMpO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1kYy1ub3RjaGVkLW91dGxpbmUgeyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LW1kYy1mb3JtLWZpZWxkLWZsZXggeyBoZWlnaHQ6IDIuNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXggeyBwYWRkaW5nOiAwLjM3NXJlbSAwOyBtaW4taGVpZ2h0OiB1bnNldDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsIHtcclxuICB0b3A6IDEuMjVyZW07XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBjb2xvcjogIzY0NzQ4YjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtLm1hdC1mb2N1c2VkIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLm1kYy1mbG9hdGluZy1sYWJlbC0tZmxvYXQtYWJvdmUge1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIGlucHV0LFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLXNlbGVjdC12YWx1ZS10ZXh0IHtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiAjMGYxNzJhO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW0gLm1hdC1tZGMtc2VsZWN0LWFycm93LFxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtZGF0ZXBpY2tlci10b2dnbGUgLm1hdC1pY29uIHsgY29sb3I6ICM5NGEzYjg7IH1cclxuXHJcbi8vIEhvdmVyXHJcbjpob3N0IDo6bmctZGVlcCAuZmlsdGVycy1wYW5lbCAuZmlsdGVyLWl0ZW06aG92ZXIgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgYm94LXNoYWRvdzogMCAwLjI1cmVtIDAuNjI1cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbn1cclxuLy8gRm9jdXNcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbS5tYXQtZm9jdXNlZCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDMxLCAxMjMsIDI1NSwgMC4xMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmZpbHRlcnMtcGFuZWwgLmZpbHRlci1pdGVtIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIgeyBkaXNwbGF5OiBub25lOyB9XHJcbi8vIERhdGVwaWNrZXIgdG9nZ2xlIGJ1dHRvbiBhbGlnbm1lbnRcclxuOmhvc3QgOjpuZy1kZWVwIC5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbSAubWF0LWRhdGVwaWNrZXItdG9nZ2xlIGJ1dHRvbiB7XHJcbiAgd2lkdGg6IDEuNzVyZW07XHJcbiAgaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi8vIFNlYXJjaGFibGUgc2VsZWN0IGlucHV0IHN0eWxpbmcgaW5zaWRlIHNlbGVjdCBkcm9wZG93biBvcHRpb25zXHJcbjpob3N0IDo6bmctZGVlcCAuc2VsZWN0LXNlYXJjaC1vcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgLnNlbGVjdC1zZWFyY2gtaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2JkNWUxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjM3NXJlbSAwLjYyNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gICAgY29sb3I6ICMwZjE3MmE7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMzEsIDEyMywgMjU1LCAwLjE1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5tYXQtcHNldWRvLWNoZWNrYm94LFxyXG4gIC5tYXQtbWRjLW9wdGlvbi1wc2V1ZG8tY2hlY2tib3gge1xyXG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtbWRjLXNlbGVjdC1wYW5lbCAuc2VsZWN0LXNlYXJjaC1vcHRpb24ge1xyXG4gIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDEwMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjc1cmVtO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlOGYwO1xyXG5cclxuICAubWF0LXBzZXVkby1jaGVja2JveCxcclxuICAubWF0LW1kYy1vcHRpb24tcHNldWRvLWNoZWNrYm94IHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5maWx0ZXItY2hlY2tib3gtaXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gIGdyaWQtY29sdW1uOiBzcGFuIDI7XHJcblxyXG4gIG1hdC1jaGVja2JveCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiAjMzM0MTU1O1xyXG4gIH1cclxufVxyXG5cclxuLy8gU3BhbiBkYXRlIHBpY2tlcnMgZnVsbCB3aWR0aCBvbiBuYXJyb3cgZ3JpZHNcclxuLmZpbHRlci1pdGVtOm50aC1sYXN0LWNoaWxkKC1uKzIpIHsgZ3JpZC1jb2x1bW46IHNwYW4gMTsgfVxyXG5cclxuLmZpbHRlci1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgcGFkZGluZzogMC44NzVyZW0gMS4xMjVyZW07XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2ZhZmJmYyAwJSwgI2ZmZmZmZiAxMDAlKTtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMCAxcmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAyLjI1cmVtO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2UgIWltcG9ydGFudDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLTEtaG92ZXIpICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogJHNoYWRvdy1tZCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4wNjI1cmVtKTtcclxufVxyXG4uZmlsdGVyLXJlc2V0LWJ0biB7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjNDc1NTY5ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2UyZThmMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODEyNXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMi4yNXJlbTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJvcmRlci1jb2xvciAwLjJzICRlYXNlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZpbHRlci1yZXNldC1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmOGZhZmMgIWltcG9ydGFudDtcclxuICBib3JkZXItY29sb3I6ICNjYmQ1ZTEgIWltcG9ydGFudDtcclxufVxyXG4uZmlsdGVyLWFwcGx5LWJ0biBtYXQtaWNvbixcclxuLmZpbHRlci1yZXNldC1idG4gbWF0LWljb24geyBmb250LXNpemU6IDFyZW07IHdpZHRoOiAxcmVtOyBoZWlnaHQ6IDFyZW07IG1hcmdpbi1yaWdodDogMC4yNXJlbTsgfVxyXG5cclxuQGtleWZyYW1lcyBzbGlkZVVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwLjVyZW0pOyB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApOyB9IH1cclxuQGtleWZyYW1lcyBzbGlkZURvd24geyBmcm9tIHsgb3BhY2l0eTogMDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjM3NXJlbSk7IH0gdG8geyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7IH0gfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIExpc3QgY2FyZCArIHRhYnMgd3JhcHBlciDDosKUwoDDosKUwoBcclxuLmxpc3QtY2FyZCB7IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNlMmU4ZjA7IGJvcmRlci1yYWRpdXM6ICRyYWRpdXM7IGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4zcyAkZWFzZSwgYm9yZGVyLWNvbG9yIDAuM3MgJGVhc2U7IH1cclxuLmxpc3QtY2FyZDpob3ZlciB7IGJveC1zaGFkb3c6ICRzaGFkb3ctaG92ZXI7IGJvcmRlci1jb2xvcjogcmdiYSg5OSwxMDIsMjQxLDAuMTUpOyB9XHJcbi5saXN0LXdyYXBwZXIgeyBvdmVyZmxvdzogdmlzaWJsZTsgfVxyXG4uZXhhbS10YWJzIHsgd2lkdGg6IDEwMCU7IH1cclxuLmlubmVyLWFuYWx5dGljcy10YWJzIHsgd2lkdGg6IDEwMCU7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBNYWluIHRhYnMgKFVzZXIgUmVwb3J0IC8gQW5hbHl0aWNzIFJlcG9ydCkgw6LClMKAw6LClMKAXHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tYXQtbWRjLXRhYi1oZWFkZXIgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgYm9yZGVyLWJvdHRvbTowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBwYWRkaW5nOjAgMC41cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tYXQtbWRjLXRhYi1sYWJlbHMgeyBtaW4taGVpZ2h0OjNyZW07IGdhcDowLjEyNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYiB7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC13ZWlnaHQ6NjAwOyBmb250LXNpemU6MC44NzVyZW07IHBhZGRpbmc6MCAxLjI1cmVtOyBtaW4taGVpZ2h0OjNyZW07IGJvcmRlci1yYWRpdXM6JHJhZGl1cyAkcmFkaXVzIDAgMDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYjpob3ZlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmV4YW0tdGFicyAubWRjLXRhYi0tYWN0aXZlIHsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93Omluc2V0IDAgLTAuMTI1cmVtIDAgdmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiLS1hY3RpdmUgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5leGFtLXRhYnMgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgdHJhbnNpdGlvbjpjb2xvciAwLjJzICRlYXNlOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tYXQtbWRjLXRhYi1ib2R5LXdyYXBwZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuZXhhbS10YWJzIC5tZGMtdGFiLWluZGljYXRvcl9fY29udGVudC0tdW5kZXJsaW5lIHsgYm9yZGVyLWNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgYm9yZGVyLXdpZHRoOjAuMTI1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgSW5uZXIgYW5hbHl0aWNzIHRhYnMgKENhdGVnb3J5IFJlcG9ydCAvIFF1ZXN0aW9uIFN1bW1hcnkpIMOiwpTCgMOiwpTCgFxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tYXQtbWRjLXRhYi1oZWFkZXIgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTEpOyBib3JkZXItYm90dG9tOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IHBhZGRpbmc6MCAwLjc1cmVtOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1hdC1tZGMtdGFiLWxhYmVscyB7IG1pbi1oZWlnaHQ6Mi41cmVtOyBnYXA6MC4yNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXdlaWdodDo2MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IHBhZGRpbmc6MCAxcmVtOyBtaW4taGVpZ2h0OjIuNXJlbTsgYm9yZGVyLXJhZGl1czowLjVyZW0gMC41cmVtIDAgMDsgdHJhbnNpdGlvbjpiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYjpob3ZlciB7IGJhY2tncm91bmQ6dmFyKC0tYmctMik7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLmlubmVyLWFuYWx5dGljcy10YWJzIC5tZGMtdGFiLS1hY3RpdmUgeyBiYWNrZ3JvdW5kOnZhcigtLWJnLTIpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IH1cclxuOmhvc3QgOjpuZy1kZWVwIC5pbm5lci1hbmFseXRpY3MtdGFicyAubWRjLXRhYi0tYWN0aXZlIC5tZGMtdGFiX190ZXh0LWxhYmVsIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWJfX3RleHQtbGFiZWwgeyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOjAuMDFlbTsgdHJhbnNpdGlvbjpjb2xvciAwLjJzICRlYXNlOyB9XHJcbjpob3N0IDo6bmctZGVlcCAuaW5uZXItYW5hbHl0aWNzLXRhYnMgLm1kYy10YWItaW5kaWNhdG9yX19jb250ZW50LS11bmRlcmxpbmUgeyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3JkZXItd2lkdGg6MC4xMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBDYXRlZ29yeSBGaWx0ZXIgQmFubmVyIMOiwpTCgMOiwpTCgFxyXG4uYW5hbHl0aWNzLXRhYi1ib2R5IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXRlZ29yeS1maWx0ZXItYmFubmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGdhcDogMXJlbTtcclxuICBwYWRkaW5nOiAwLjRyZW0gMC43NXJlbTtcclxuICBtYXJnaW46IDAuNXJlbSAxcmVtIDAuNXJlbSAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjA4KSAwJSwgcmdiYSg5OSwgMTAyLCAyNDEsIDAuMDUpIDEwMCUpO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNTksIDEzMCwgMjQ2LCAwLjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC4zNzVyZW0gcmdiYSgwLCAwLCAwLCAwLjAyKTtcclxuICBhbmltYXRpb246IHNsaWRlRG93biAwLjI1cyAkZWFzZTtcclxuXHJcbiAgLmJhbm5lci10ZXh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGdhcDogMC41cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0xLCAjMWUyOTNiKTtcclxuXHJcbiAgICBtYXQtaWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIHdpZHRoOiAxLjEyNXJlbTtcclxuICAgICAgaGVpZ2h0OiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xyXG4gICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLTEsICMyNTYzZWIpO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZ2FwOiAwLjM3NXJlbTtcclxuICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgfVxyXG5cclxuICAgIHN0cm9uZyB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tMSwgIzI1NjNlYik7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNTksIDEzMCwgMjQ2LCAwLjEyKTtcclxuICAgICAgcGFkZGluZzogMC4xNXJlbSAwLjVyZW07XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5jbGVhci1maWx0ZXItYnRuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGdhcDogMC4zNzVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwLjM1cmVtIDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDJyZW0gIWltcG9ydGFudDtcclxuICBtaW4taGVpZ2h0OiAycmVtICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW0gIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xLCAjZmZmZmZmKSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyLCAjY2JkNWUxKSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMiwgIzQ3NTU2OSkgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuNzVyZW0gIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzICRlYXNlO1xyXG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGZsZXgtc2hyaW5rOiAwO1xyXG5cclxuICAubWRjLWJ1dHRvbl9fbGFiZWwge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGdhcDogMC4zNzVyZW0gIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMC45Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuOTM3NXJlbSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zLCAjNjQ3NDhiKTtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgJGVhc2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG5cclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgY29sb3I6ICNlZjQ0NDQgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yZXBvcnQtc3VtbWFyeS1ncmlkIHsgZGlzcGxheTpncmlkOyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6cmVwZWF0KDQsIG1pbm1heCgwLCAxZnIpKTsgZ2FwOjAuNzVyZW07IHBhZGRpbmc6MC44NzVyZW0gMXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IGJvcmRlci1ib3R0b206MXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4uYW5hbHl0aWNzLXN1bW1hcnktZ3JpZCB7IHBhZGRpbmc6MC4yNXJlbSAwIDAuNXJlbTsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgYm9yZGVyLWJvdHRvbTpub25lOyB9XHJcbi5zdW1tYXJ5LWNhcmQgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNjI1cmVtOyBtaW4td2lkdGg6MDsgcGFkZGluZzowLjVyZW0gMC44NzVyZW07IGJvcmRlcjoxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBib3JkZXItcmFkaXVzOjAuNzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3gtc2hhZG93OjAgMC4xMjVyZW0gMC41cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IHRyYW5zaXRpb246dHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlLCBib3gtc2hhZG93IDAuMjVzICRlYXNlOyB9XHJcbi5zdW1tYXJ5LWNhcmQ6aG92ZXIgeyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4xMjVyZW0pOyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OjAgMC41cmVtIDFyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTsgfVxyXG4uc3VtbWFyeS1pY29uIHsgd2lkdGg6Mi4yNXJlbTsgaGVpZ2h0OjIuMjVyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmbGV4LXNocmluazowOyBib3JkZXItcmFkaXVzOjAuNjI1cmVtOyBiYWNrZ3JvdW5kOnZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgdHJhbnNpdGlvbjp0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IH1cclxuLnN1bW1hcnktaWNvbjpob3ZlciB7IHRyYW5zZm9ybTpzY2FsZSgxLjA1KTsgfVxyXG4uc3VtbWFyeS1pY29uIG1hdC1pY29uIHsgZm9udC1zaXplOjEuMTI1cmVtOyB3aWR0aDoxLjEyNXJlbTsgaGVpZ2h0OjEuMTI1cmVtOyB9XHJcbi8vIEljb24gY29sb3IgdmFyaWFudHNcclxuLnN1bW1hcnktaWNvbi0tc3R1ZGVudHMgeyBiYWNrZ3JvdW5kOnJnYmEoOTksMTAyLDI0MSwwLjEpOyBjb2xvcjojNjM2NmYxOyB9XHJcbi5zdW1tYXJ5LWljb24tLXBhZ2UgeyBiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwwLjEpOyBjb2xvcjojM2I4MmY2OyB9XHJcbi5zdW1tYXJ5LWljb24tLXNjb3JlIHsgYmFja2dyb3VuZDpyZ2JhKDI0NSwxNTgsMTEsMC4xKTsgY29sb3I6I2Y1OWUwYjsgfVxyXG4uc3VtbWFyeS1pY29uLS1wYXNzIHsgYmFja2dyb3VuZDpyZ2JhKDE2LDE4NSwxMjksMC4xKTsgY29sb3I6IzEwYjk4MTsgfVxyXG4uc3VtbWFyeS1pY29uLS1jYXRlZ29yaWVzIHsgYmFja2dyb3VuZDpyZ2JhKDEzOSw5MiwyNDYsMC4xKTsgY29sb3I6IzhiNWNmNjsgfVxyXG4uc3VtbWFyeS1pY29uLS1xdWVzdGlvbnMgeyBiYWNrZ3JvdW5kOnJnYmEoNTksMTMwLDI0NiwwLjEpOyBjb2xvcjojM2I4MmY2OyB9XHJcbi5zdW1tYXJ5LWljb24tLWF0dGVtcHRzIHsgYmFja2dyb3VuZDpyZ2JhKDk5LDEwMiwyNDEsMC4xKTsgY29sb3I6IzYzNjZmMTsgfVxyXG4uc3VtbWFyeS1pY29uLS1taXN0YWtlcyB7IGJhY2tncm91bmQ6cmdiYSgyMzksNjgsNjgsMC4xKTsgY29sb3I6I2VmNDQ0NDsgfVxyXG4uc3VtbWFyeS1jb3B5IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjEyNXJlbTsgbWluLXdpZHRoOjA7IH1cclxuLnN1bW1hcnktbGFiZWwgeyBmb250LXNpemU6dmFyKC0tZm9udC14cyk7IGZvbnQtd2VpZ2h0OjcwMDsgbGV0dGVyLXNwYWNpbmc6MC4wOGVtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4uc3VtbWFyeS12YWx1ZSB7IGZvbnQtc2l6ZTpjbGFtcCgxLjEyNXJlbSwgMC45NXJlbSArIDAuNXZ3LCAxLjVyZW0pOyBmb250LXdlaWdodDo4MDA7IGxpbmUtaGVpZ2h0OjEuMTsgbGV0dGVyLXNwYWNpbmc6LTAuMDNlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5zdW1tYXJ5LW1ldGEgeyBmb250LXNpemU6dmFyKC0tZm9udC14c20pOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0yKTsgd2hpdGUtc3BhY2U6bm93cmFwOyBvdmVyZmxvdzpoaWRkZW47IHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IH1cclxuXHJcbi8vIMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkMOiwpXCkFxyXG4vLyBUQUIgQUNUSU9OUyDDosKAwpQgQ29tcGFjdCBTZWFyY2ggJiBBY3Rpb24gQmFyIChJbnNpZGUgVGFicylcclxuLy8gw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQw6LClcKQXHJcbi50YWItYWN0aW9ucyB7IGRpc3BsYXk6ZmxleDsganVzdGlmeS1iZXR3ZWVuOnNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjFyZW07IHBhZGRpbmc6MC44NzVyZW0gMXJlbSAxcmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgYm9yZGVyLWJvdHRvbToxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBtYXJnaW46MDsgfVxyXG5cclxuLy8gQ29tcGFjdCBTZWFyY2hcclxuLnRhYi1hY3Rpb25zIC5zZWFyY2ggeyBmbGV4OjE7IG1heC13aWR0aDoyMHJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIgeyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyOjFweCBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC43NXJlbTsgcGFkZGluZzowIDAuNzVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IGJveC1zaGFkb3c6MCAwLjVyZW0gMXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWRjLW5vdGNoZWQtb3V0bGluZSB7IGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1mbGV4IHsgaGVpZ2h0OiAyLjM3NXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1pbmZpeCB7IHBhZGRpbmc6IDAuMzc1cmVtIDA7IG1pbi1oZWlnaHQ6IHVuc2V0OyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LW1kYy1mbG9hdGluZy1sYWJlbCB7IHRvcDoxLjE4NzVyZW07IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggaW5wdXQgeyBmb250LXNpemU6MC44MTI1cmVtOyBmb250LXdlaWdodDo1MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggaW5wdXQ6OnBsYWNlaG9sZGVyIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6dmFyKC0tdGhlbWUtMy1pY29uLTEpOyBtYXJnaW4tcmlnaHQ6MC41cmVtOyBmb250LXNpemU6MS4xMjVyZW07IHdpZHRoOjEuMTI1cmVtOyBoZWlnaHQ6MS4xMjVyZW07IHRyYW5zaXRpb246YWxsIDAuMnMgJGVhc2U7IH1cclxuLnRhYi1hY3Rpb25zIC5zZWFyY2g6aG92ZXIgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7IGJvcmRlci1jb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB9XHJcbi50YWItYWN0aW9ucyAuc2VhcmNoOmhvdmVyIDo6bmctZGVlcCBtYXQtaWNvblttYXRQcmVmaXhdIHsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbjpob3N0IDo6bmctZGVlcCAudGFiLWFjdGlvbnMgLnNlYXJjaCAubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyLFxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1tZGMtdGV4dC1maWVsZC13cmFwcGVyIHtcclxuICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICBib3gtc2hhZG93OiAwIDAgMCAzcHggdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggbWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgbWF0LWljb25bbWF0UHJlZml4XSB7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggLm1hdC1tZGMtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7IGRpc3BsYXk6IG5vbmU7IH1cclxuXHJcbi8vIENvbXBhY3QgQWN0aW9uIEJ1dHRvbnNcclxuLnRhYi1hY3Rpb25zIC5jb250cm9scyB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC41cmVtOyB9XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyB7IGRpc3BsYXk6ZmxleDsgZ2FwOjAuMzc1cmVtOyBhbGlnbi1pdGVtczpjZW50ZXI7IH1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvbiB7IGhlaWdodDoyLjI1cmVtOyBwYWRkaW5nOjAgMC44NzVyZW07IGZvbnQtc2l6ZTowLjc1cmVtOyBmb250LXdlaWdodDo2MDA7IGxldHRlci1zcGFjaW5nOi0wLjAxZW07IGJvcmRlci1yYWRpdXM6MC42MjVyZW07IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgZ2FwOjAuMzc1cmVtOyB0cmFuc2l0aW9uOmFsbCAwLjJzICRlYXNlOyB9XHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b24gbWF0LWljb24geyBmb250LXNpemU6MXJlbTsgd2lkdGg6MXJlbTsgaGVpZ2h0OjFyZW07IH1cclxuLy8gU2Vjb25kYXJ5IGJ1dHRvbiBzdHlsZSAoU2VhcmNoLCBFeHBvcnQpXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LXN0cm9rZWQtYnV0dG9uXSxcclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtYnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpO1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMik7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC41cmVtIDFyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKTtcclxufVxyXG4udGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgYnV0dG9uW21hdC1zdHJva2VkLWJ1dHRvbl06aG92ZXIsXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWJ1dHRvbl06aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLTEpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG59XHJcbi8vIFByaW1hcnkgYnV0dG9uIHN0eWxlXHJcbi50YWItYWN0aW9ucyAuYWN0aW9uLXJvdyBidXR0b25bbWF0LWZsYXQtYnV0dG9uXSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgdmFyKC0tYnV0dG9uLTEpIDAlLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMTAwJSk7XHJcbiAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3gtc2hhZG93OiAwIDAuNzVyZW0gMS41cmVtIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7XHJcbn1cclxuLnRhYi1hY3Rpb25zIC5hY3Rpb24tcm93IGJ1dHRvblttYXQtZmxhdC1idXR0b25dOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS1idXR0b24tMS1ob3ZlcikgMCUsIHZhcigtLWJ1dHRvbi0xKSAxMDAlKTtcclxuICBib3gtc2hhZG93OiAwIDFyZW0gMnJlbSB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG59XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUHJlbWl1bSB0YWJsZSDDosKUwoDDosKUwoBcclxuLnRhYmxlLXdyYXAge1xyXG4gIG92ZXJmbG93LXg6IGF1dG8gIWltcG9ydGFudDtcclxuICBvdmVyZmxvdy15OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogNTIwcHg7XHJcbiAgbWF4LWhlaWdodDogbWF4KDU0MHB4LCBjYWxjKDEwMHZoIC0gMTgwcHgpKTtcclxuICBwYWRkaW5nOiAwIDAuNzVyZW0gMC43NXJlbTtcclxuICBzY3JvbGxiYXItd2lkdGg6IHRoaW47XHJcbiAgc2Nyb2xsYmFyLWNvbG9yOiAjODE4Y2Y4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgXHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDAuNjI1cmVtO1xyXG4gICAgaGVpZ2h0OiAwLjYyNXJlbTtcclxuICB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDQpOyBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyB9XHJcbiAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiAjODE4Y2Y4OyBib3JkZXItcmFkaXVzOiAwLjI1cmVtOyBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsgYmFja2dyb3VuZC1jbGlwOiBjb250ZW50LWJveDsgfVxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHsgYmFja2dyb3VuZDogIzRmNDZlNTsgYm9yZGVyOiAycHggc29saWQgdHJhbnNwYXJlbnQ7IGJhY2tncm91bmQtY2xpcDogY29udGVudC1ib3g7IH1cclxufVxyXG5cclxuLmFuYWx5dGljcy10YWJsZS1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjNDc1NTY5KTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyLCAjZTJlOGYwKTtcclxufVxyXG4ucHJlbWl1bS10YWJsZSB7IHdpZHRoOiAxMDAlOyBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlICFpbXBvcnRhbnQ7IGJvcmRlci1zcGFjaW5nOiAwICFpbXBvcnRhbnQ7IGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgfVxyXG46aG9zdCA6Om5nLWRlZXAgLnByZW1pdW0tdGFibGUgdGgubWF0LWhlYWRlci1jZWxsLFxyXG46aG9zdCA6Om5nLWRlZXAgLnByZW1pdW0tdGFibGUgdGgubWF0LW1kYy1oZWFkZXItY2VsbCxcclxuLnByZW1pdW0tdGFibGUgdGgubWF0LWhlYWRlci1jZWxsLFxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtbWRjLWhlYWRlci1jZWxsIHsgcG9zaXRpb246IHN0aWNreSAhaW1wb3J0YW50OyB0b3A6IDAgIWltcG9ydGFudDsgei1pbmRleDogMTAgIWltcG9ydGFudDsgYmFja2dyb3VuZDogdmFyKC0tdGFibGUtaGVhZGVyLWJnLCAjMWUyOTNiKSAhaW1wb3J0YW50OyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODEyNXJlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgbGV0dGVyLXNwYWNpbmc6IDAuMDRlbTsgY29sb3I6IHZhcigtLXRhYmxlLWhlYWRlci10ZXh0LCAjZmZmZmZmKSAhaW1wb3J0YW50OyBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTsgYm9yZGVyLWJvdHRvbTogMC4xMjVyZW0gc29saWQgI2UyZThmMDsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4ucHJlbWl1bS10YWJsZSB0aC5tYXQtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQsXHJcbi5wcmVtaXVtLXRhYmxlIHRoLm1hdC1tZGMtaGVhZGVyLWNlbGw6Zmlyc3QtY2hpbGQgeyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJ1dHRvbi0xKTsgfVxyXG4ucHJlbWl1bS10YWJsZSB0ZC5tYXQtY2VsbCxcclxuLnByZW1pdW0tdGFibGUgdGQubWF0LW1kYy1jZWxsIHsgcGFkZGluZzogMC4zOHJlbSAwLjc1cmVtOyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjMzM0MTU1KTsgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkICNmMWY1Zjk7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycyAkZWFzZSwgYm94LXNoYWRvdyAwLjJzICRlYXNlOyB9XHJcbi5wcmVtaXVtLXRhYmxlIHRyLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHRkLFxyXG4ucHJlbWl1bS10YWJsZSB0ci5tYXQtbWRjLXJvdzpudGgtY2hpbGQoZXZlbikgdGQgeyBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwyNTAsMjUyLDAuNSk7IH1cclxuLnN0dWRlbnQtbmFtZSB7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGN1cnNvcjogcG9pbnRlcjsgZm9udC13ZWlnaHQ6IDYwMDsgZm9udC1zaXplOiB2YXIoLS1mb250LW1kKTsgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07IHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgdHJhbnNmb3JtIDAuMnMgJGVhc2UtYm91bmNlOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cclxuLnN0dWRlbnQtbmFtZTpob3ZlciB7IG9wYWNpdHk6IDAuODU7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTI1cmVtOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4wNjI1cmVtKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFN0dWRlbnQgLyBDYXRlZ29yeSBhdmF0YXIgY2VsbHMgw6LClMKAw6LClMKAXHJcbi5zdHVkZW50LWNlbGwgeyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNjI1cmVtOyBjdXJzb3I6cG9pbnRlcjsgfVxyXG4uc3R1ZGVudC1hdmF0YXIgeyB3aWR0aDoycmVtOyBoZWlnaHQ6MnJlbTsgYm9yZGVyLXJhZGl1czowLjVyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmb250LXdlaWdodDo3MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOiNmZmY7IGZsZXgtc2hyaW5rOjA7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzY2N2VlYSAwJSwgIzc2NGJhMiAxMDAlKTsgfVxyXG4uY2F0ZWdvcnktY2VsbCB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC42MjVyZW07IGN1cnNvcjpwb2ludGVyOyB9XHJcbi5jYXRlZ29yeS1hdmF0YXIgeyB3aWR0aDoycmVtOyBoZWlnaHQ6MnJlbTsgYm9yZGVyLXJhZGl1czowLjVyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmb250LXdlaWdodDo3MDA7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGNvbG9yOiNmZmY7IGZsZXgtc2hyaW5rOjA7IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2YwOTNmYiAwJSwgI2Y1NTc2YyAxMDAlKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hcmtzIGlubGluZSDDosKUwoDDosKUwoBcclxuLm1hcmtzLWlubGluZSB7IGZvbnQtd2VpZ2h0OjYwMDsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5tYXJrcy1zZXAgeyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IG1hcmdpbjowIDAuMTI1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGVyY2VudGFnZSBiYWRnZSDDosKUwoDDosKUwoBcclxuLnBjdC1iYWRnZSB7IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgcGFkZGluZzowLjE4NzVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOjAuMzc1cmVtOyBmb250LXNpemU6MC43NXJlbTsgZm9udC13ZWlnaHQ6NzAwOyBiYWNrZ3JvdW5kOnJnYmEoOTksMTAyLDI0MSwwLjA4KTsgY29sb3I6IzYzNjZmMTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hbnVhbCByZXZpZXcgc3RhdHVzIMOiwpTCgMOiwpTCgFxyXG4ucmV2aWV3LXN0YXR1cyB7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjUwMDsgfVxyXG4ucmV2aWV3LXN0YXR1cy5yZXZpZXctcGVuZGluZyB7IGNvbG9yOnZhcigtLW9yYW5nZS10ZXh0KTsgZm9udC13ZWlnaHQ6NjAwOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUmVzdWx0IHBpbGxzIMOiwpTCgMOiwpTCgFxyXG4ucmVzdWx0LXBpbGwgeyBkaXNwbGF5OmlubGluZS1mbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IHBhZGRpbmc6MC4xODc1cmVtIDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOjFyZW07IGZvbnQtc2l6ZTowLjY4NzVyZW07IGZvbnQtd2VpZ2h0OjcwMDsgbGV0dGVyLXNwYWNpbmc6MC4wM2VtOyB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7IGJhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjA0KTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyB9XHJcbi5yZXN1bHQtcGlsbC5yZXN1bHQtcGFzcyB7IGJhY2tncm91bmQ6dmFyKC0tZ3JlZW4tYmcpOyBjb2xvcjp2YXIoLS1ncmVlbi10ZXh0KTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4ucmVzdWx0LXBpbGwucmVzdWx0LWZhaWwgeyBiYWNrZ3JvdW5kOnZhcigtLXJlZC1iZyk7IGNvbG9yOnZhcigtLXJlZC10ZXh0KTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS1icmVkLWJvcmRlcik7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBBbmFseXRpY3Mgc2VjdGlvbiDDosKUwoDDosKUwoBcclxuLmFuYWx5dGljcy1zZWN0aW9uIHsgcGFkZGluZzowLjc1cmVtIDFyZW07IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC43NXJlbTsgfVxyXG4uYW5hbHl0aWNzLXNlY3Rpb24gLnRhYmxlLXdyYXAgeyBtaW4taGVpZ2h0OiA1MjBweDsgbWF4LWhlaWdodDogbWF4KDU0MHB4LCBjYWxjKDEwMHZoIC0gMTgwcHgpKTsgb3ZlcmZsb3cteDphdXRvICFpbXBvcnRhbnQ7IG92ZXJmbG93LXk6YXV0byAhaW1wb3J0YW50OyBib3JkZXItcmFkaXVzOjAuNjI1cmVtOyBib3gtc2hhZG93OiRzaGFkb3ctc207IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFnZXIgw6LClMKAw6LClMKAXHJcbi5wYWdlciB7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBnYXA6MXJlbTsgcGFkZGluZzowLjg3NXJlbSAxLjI1cmVtOyBib3JkZXItdG9wOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGZvbnQtc2l6ZTowLjgxMjVyZW07IGZvbnQtd2VpZ2h0OjYwMDsgbGV0dGVyLXNwYWNpbmc6MC4wMWVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTIpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTIpOyB9XHJcbi5wYWdlciBzcGFuIHsgcGFkZGluZzowLjI1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6MC4zNzVyZW07IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5wYWdlciBidXR0b24geyBib3JkZXItcmFkaXVzOjAuNXJlbSAhaW1wb3J0YW50OyBmb250LXdlaWdodDo2MDAgIWltcG9ydGFudDsgcGFkZGluZzowLjM3NXJlbSAxcmVtICFpbXBvcnRhbnQ7IHRyYW5zaXRpb246YmFja2dyb3VuZCAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZSAhaW1wb3J0YW50OyB9XHJcbi5wYWdlciBidXR0b246bm90KFtkaXNhYmxlZF0pOmhvdmVyIHsgYm94LXNoYWRvdzokc2hhZG93LW1kICFpbXBvcnRhbnQ7IHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0wLjA2MjVyZW0pOyBiYWNrZ3JvdW5kOnZhcigtLWJnLTIpICFpbXBvcnRhbnQ7IH1cclxuLnBhZ2VyIGJ1dHRvbltkaXNhYmxlZF0geyBvcGFjaXR5OjAuNDsgfVxyXG5cclxuQGtleWZyYW1lcyBzaGltbWVyIHtcclxuICAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IC0yMDAlIDA7IH1cclxuICAxMDAlIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSAwOyB9XHJcbn1cclxuXHJcbi5sb2FkZXItcGxhY2Vob2xkZXIgeyBcclxuICBwYWRkaW5nOiAyLjVyZW07IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41KTsgXHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTsgXHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMCwwLDAsMC4wMikgMjUlLCByZ2JhKDAsMCwwLDAuMDUpIDUwJSwgcmdiYSgwLDAsMCwwLjAyKSA3NSUpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMjAwJSAxMDAlO1xyXG4gIGFuaW1hdGlvbjogc2hpbW1lciAxLjVzIGluZmluaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICBtYXJnaW46IDFyZW07XHJcbn1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBXcm9uZy1hbnN3ZXIgbGluayDDosKUwoDDosKUwoBcclxuLndyb25nLXN1bW1hcnktbGluayB7IG1hcmdpbi1sZWZ0OiAwLjM3NXJlbTsgZm9udC1zaXplOiAwLjg1cmVtOyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyBjdXJzb3I6IHBvaW50ZXI7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB0ZXh0LXVuZGVybGluZS1vZmZzZXQ6IDAuMTI1cmVtOyBmb250LXdlaWdodDogNjAwOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjJzICRlYXNlLWJvdW5jZTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcbi53cm9uZy1zdW1tYXJ5LWxpbms6aG92ZXIgeyBvcGFjaXR5OiAwLjg7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwLjEyNXJlbSk7IH1cclxuLndhLWNvdW50LWxpbmsgeyBjb2xvcjogdmFyKC0tYnV0dG9uLTEpOyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OiAwLjEyNXJlbTsgY3Vyc29yOiBwb2ludGVyOyBmb250LXdlaWdodDogNzAwOyB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMnMgJGVhc2UsIGNvbG9yIDAuMnMgJGVhc2U7IH1cclxuLndhLWNvdW50LWxpbms6aG92ZXIgeyBvcGFjaXR5OiAwLjg1OyB9XHJcbi53YS1hbnN3ZXItbGluayB7IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IGZvbnQtd2VpZ2h0OiA3MDA7IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlLCB0cmFuc2Zvcm0gMC4ycyAkZWFzZS1ib3VuY2U7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxyXG4ud2EtYW5zd2VyLWxpbms6aG92ZXIgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMC4wNjI1cmVtKTsgfVxyXG4ubXV0ZWQgeyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXNpemU6IDAuODVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTaGFyZWQgYmFja2Ryb3AgKyBwYW5lbCDDosKUwoDDosKUwoBcclxuQGtleWZyYW1lcyBmYWRlSW4geyBmcm9tIHsgb3BhY2l0eTogMCB9IHRvIHsgb3BhY2l0eTogMSB9IH1cclxuQGtleWZyYW1lcyBzbGlkZVVwIHsgZnJvbSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxLjI1cmVtKSBzY2FsZSgwLjk2KSB9IHRvIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHNjYWxlKDEpIH0gfVxyXG5Aa2V5ZnJhbWVzIHN1YnRsZVB1bHNlIHsgMCUsIDEwMCUgeyBib3gtc2hhZG93OiAwIDEuNXJlbSAzLjc1cmVtIHZhcigtLXRoZW1lLTMtaGFub3Zlci1iZyk7IH0gNTAlIHsgYm94LXNoYWRvdzogMCAxLjc1cmVtIDRyZW0gdmFyKC0tdGhlbWUtMi1oYW5vdmVyLWJnKTsgfSB9XHJcblxyXG4ud3Jvbmctc3VtbWFyeS1iYWNrZHJvcCB7IHBvc2l0aW9uOiBmaXhlZDsgaW5zZXQ6IDA7IGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChlbGxpcHNlIGF0IGNlbnRlciwgcmdiYSgxNSwgMjMsIDQyLCAwLjU1KSAwJSwgcmdiYSgzMCwgNDEsIDU5LCAwLjc1KSAxMDAlKTsgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMC43NXJlbSkgc2F0dXJhdGUoMTQwJSk7IGJhY2tkcm9wLWZpbHRlcjogYmx1cigwLjc1cmVtKSBzYXR1cmF0ZSgxNDAlKTsgei1pbmRleDogMTAwNTA7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyBwYWRkaW5nOiAxLjVyZW07IGFuaW1hdGlvbjogZmFkZUluIDAuMjVzICRlYXNlOyB9XHJcblxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCxcclxuLnJlc291cmNlLXBhbmVsIHsgcG9zaXRpb246IHJlbGF0aXZlOyB3aWR0aDogbWluKDU2cmVtLCA5MnZ3KTsgbWF4LWhlaWdodDogODh2aDsgei1pbmRleDogMTAwNjA7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFuaW1hdGlvbjogc2xpZGVVcCAwLjM1cyAkZWFzZS1ib3VuY2U7IG1hcmdpbjogYXV0bzsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuY2FyZCxcclxuLnJlc291cmNlLXBhbmVsIC5jYXJkIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgbWF4LWhlaWdodDogODh2aDsgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDEuMjVyZW07IGJveC1zaGFkb3c6IDAgMnJlbSA0LjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjI4KSwgMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMTIpOyBvdmVyZmxvdzogaGlkZGVuOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUGFuZWwgaGVhZGVyIMOiwpTCgMOiwpTCgFxyXG4ucGFuZWwtaGVhZGVyIHsgcG9zaXRpb246cmVsYXRpdmU7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZ2FwOjFyZW07IHBhZGRpbmc6MS4yNXJlbSAxLjVyZW07IGJvcmRlci1ib3R0b206MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGZsZXgtc2hyaW5rOjA7IH1cclxuLnBhbmVsLWhlYWRlcjo6YmVmb3JlIHsgY29udGVudDonJzsgcG9zaXRpb246YWJzb2x1dGU7IGxlZnQ6MDsgdG9wOjA7IGJvdHRvbTowOyB3aWR0aDowLjE4NzVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYnV0dG9uLTEpLCB0cmFuc3BhcmVudCk7IGJvcmRlci1yYWRpdXM6MCAwLjE4NzVyZW0gMC4xODc1cmVtIDA7IH1cclxuLnBhbmVsLWhlYWRlciAuaGVhZGVyLWluZm8geyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuODc1cmVtOyBtaW4td2lkdGg6MDsgZmxleDoxOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1jb3B5IHsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjE4NzVyZW07IG1pbi13aWR0aDowOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIHsgd2lkdGg6M3JlbTsgaGVpZ2h0OjNyZW07IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyOyBmbGV4LXNocmluazowOyBib3JkZXItcmFkaXVzOjAuODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHZhcigtLXRoZW1lLTItaGFub3Zlci1iZykgMCUsIHZhcigtLWJnLTEpIDEwMCUpOyBjb2xvcjp2YXIoLS1idXR0b24tMSk7IGJveC1zaGFkb3c6MCAwLjVyZW0gMS4yNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpLCBpbnNldCAwIDAgMCAwLjA2MjVyZW0gdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbi5wYW5lbC1oZWFkZXIgLmhlYWRlci1pY29uIG1hdC1pY29uIHsgZm9udC1zaXplOjEuMzc1cmVtOyB3aWR0aDoxLjM3NXJlbTsgaGVpZ2h0OjEuMzc1cmVtOyB9XHJcbi5wYW5lbC1oZWFkZXIgaDQgeyBtYXJnaW46MDsgZm9udC1zaXplOjEuMDYyNXJlbTsgZm9udC13ZWlnaHQ6ODAwOyBsZXR0ZXItc3BhY2luZzotMC4wMmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IH1cclxuLnBhbmVsLWhlYWRlciAucGFuZWwtc3ViIHsgZm9udC1zaXplOjAuODEyNXJlbTsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBtYXJnaW4tdG9wOjA7IGxpbmUtaGVpZ2h0OjEuNDsgfVxyXG4ucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dLFxyXG4ucGFuZWwtaGVhZGVyIC5wYW5lbC1jbG9zZS1idG4ge1xyXG4gIHdpZHRoOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDIuNXJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgbWF4LXdpZHRoOiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBtYXgtaGVpZ2h0OiAyLjVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICBib3JkZXItcmFkaXVzOiAwLjc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSkgIWltcG9ydGFudDtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcikgIWltcG9ydGFudDtcclxuICBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTIpICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMi41cmVtICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCkgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZSAhaW1wb3J0YW50O1xyXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXSAubWF0LW1kYy1idXR0b24tdG91Y2gtdGFyZ2V0LFxyXG46aG9zdCA6Om5nLWRlZXAgLnBhbmVsLWhlYWRlciAucGFuZWwtY2xvc2UtYnRuIC5tYXQtbWRjLWJ1dHRvbi10b3VjaC10YXJnZXQge1xyXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wYW5lbC1oZWFkZXIgYnV0dG9uW21hdC1pY29uLWJ1dHRvbl0gbWF0LWljb24sXHJcbjpob3N0IDo6bmctZGVlcCAucGFuZWwtaGVhZGVyIC5wYW5lbC1jbG9zZS1idG4gbWF0LWljb24ge1xyXG4gIHdpZHRoOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtICFpbXBvcnRhbnQ7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjVyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGFuZWwtaGVhZGVyIGJ1dHRvblttYXQtaWNvbi1idXR0b25dOmhvdmVyLFxyXG4ucGFuZWwtaGVhZGVyIC5wYW5lbC1jbG9zZS1idG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjM5LCA2OCwgNjgsIDAuMDgpICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzOSwgNjgsIDY4LCAwLjMpICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNlZjQ0NDQgIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiAwIDAuMjVyZW0gMC43NXJlbSByZ2JhKDIzOSwgNjgsIDY4LCAwLjE1KSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnBhbmVsLWhlYWRlciBidXR0b25bbWF0LWljb24tYnV0dG9uXTpob3ZlciBtYXQtaWNvbixcclxuLnBhbmVsLWhlYWRlciAucGFuZWwtY2xvc2UtYnRuOmhvdmVyIG1hdC1pY29uIHtcclxuICBjb2xvcjogI2VmNDQ0NCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLy8gw6LClMKAw6LClMKAIFBhbmVsIGJvZHkgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5IHsgcGFkZGluZzoxLjEyNXJlbSAxLjM3NXJlbTsgb3ZlcmZsb3c6YXV0bzsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0xKSAwJSwgdmFyKC0tYmctMikgMTAwJSk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnF1ZXN0aW9uLXRpdGxlIHsgZm9udC13ZWlnaHQ6NzAwOyBtYXJnaW4tYm90dG9tOjAuODc1cmVtOyBmb250LXNpemU6MC45Mzc1cmVtOyBsZXR0ZXItc3BhY2luZzotMC4wMWVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMSk7IHBhZGRpbmc6MC44NzVyZW0gMXJlbTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6MC44NzVyZW07IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnNtYWxsLW11dGVkIHsgZm9udC1zaXplOjAuNjg3NXJlbTsgcGFkZGluZy1sZWZ0OjA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFN1bW1hcnkgdGFibGUgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHsgd2lkdGg6MTAwJTsgYm9yZGVyLWNvbGxhcHNlOnNlcGFyYXRlOyBib3JkZXItc3BhY2luZzowIDAuNXJlbTsgbWFyZ2luOjAgYXV0bzsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB0aCB7IHRleHQtYWxpZ246Y2VudGVyOyBwYWRkaW5nOjAuNzVyZW0gMXJlbTsgZm9udC13ZWlnaHQ6NzAwOyBmb250LXNpemU6MC43NXJlbTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyBsZXR0ZXItc3BhY2luZzowLjA2ZW07IGNvbG9yOnZhcigtLXRoZW1lLTEtdGV4dC0xKTsgYmFja2dyb3VuZDp2YXIoLS10YWJsZS1oZWFkZXItYmcpOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRoZWFkIHRoOmZpcnN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowLjYyNXJlbSAwIDAgMC42MjVyZW07IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQgdGg6bGFzdC1jaGlsZCB7IGJvcmRlci1yYWRpdXM6MCAwLjYyNXJlbSAwLjYyNXJlbSAwOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5zdW1tYXJ5LXRhYmxlIHRib2R5IHRyIHsgYmFja2dyb3VuZDp0cmFuc3BhcmVudDsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZCB7IHBhZGRpbmc6MC44NzVyZW0gMXJlbTsgdmVydGljYWwtYWxpZ246bWlkZGxlOyB0ZXh0LWFsaWduOmNlbnRlcjsgYmFja2dyb3VuZDp2YXIoLS1iZy0xKTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQ6Zmlyc3QtY2hpbGQgeyBib3JkZXItcmFkaXVzOjAuNjI1cmVtIDAgMCAwLjYyNXJlbTsgdGV4dC1hbGlnbjpsZWZ0OyBmb250LXdlaWdodDo2MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDpsYXN0LWNoaWxkIHsgYm9yZGVyLXJhZGl1czowIDAuNjI1cmVtIDAuNjI1cmVtIDA7IH1cclxuLndhLWFuc3dlci1saW5rLCAud2EtY291bnQtbGluayB7IGNvbG9yOnZhcigtLWJ1dHRvbi0xKTsgZm9udC13ZWlnaHQ6NjAwOyB0cmFuc2l0aW9uOm9wYWNpdHkgMC4xNXMgJGVhc2U7IH1cclxuLndhLWFuc3dlci1saW5rOmhvdmVyLCAud2EtY291bnQtbGluazpob3ZlciB7IG9wYWNpdHk6MC43NTsgdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTsgdGV4dC11bmRlcmxpbmUtb2Zmc2V0OjAuMTI1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgU3VtbWFyeSBhY3Rpb25zIMOiwpTCgMOiwpTCgFxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS1hY3Rpb25zLFxyXG4uc3VtbWFyeS1hY3Rpb25zIHsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7IGdhcDowLjVyZW07IHBhZGRpbmc6MC44NzVyZW0gMS4zNzVyZW07IGJvcmRlci10b3A6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IH1cclxuLnN1bW1hcnktYWN0aW9ucyBidXR0b24geyBib3JkZXItcmFkaXVzOjAuNjI1cmVtICFpbXBvcnRhbnQ7IGZvbnQtd2VpZ2h0OjcwMCAhaW1wb3J0YW50OyB0cmFuc2l0aW9uOmJhY2tncm91bmQgMC4xNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjE1cyAkZWFzZSAhaW1wb3J0YW50OyB9XHJcbi5zdW1tYXJ5LWFjdGlvbnMgYnV0dG9uOmhvdmVyIHsgdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTAuMDYyNXJlbSk7IGJveC1zaGFkb3c6MCAwLjc1cmVtIDEuNXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpICFpbXBvcnRhbnQ7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBSZXNvdXJjZSBwYW5lbCDDosKUwoDDosKUwoBcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5LCAud3Jvbmctc3VtbWFyeS1wYW5lbCAucmVzb3VyY2UtbGlzdCB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC43NXJlbTsgfVxyXG4ucmVzb3VyY2UtbGlzdCB7IGxpc3Qtc3R5bGU6bm9uZTsgcGFkZGluZzowOyBtYXJnaW46MDsgZGlzcGxheTpmbGV4OyBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IGdhcDowLjc1cmVtOyB9XHJcbi5yZXNvdXJjZS1saXN0IGxpIHsgcGFkZGluZzowLjg3NXJlbSAxcmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJnLTEpIDAlLCB2YXIoLS1iZy0yKSAxMDAlKTsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgZGlzcGxheTpmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6Y2VudGVyOyBnYXA6MC43NXJlbTsgYm9yZGVyOjAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IHRyYW5zaXRpb246Ym94LXNoYWRvdyAwLjI1cyAkZWFzZSwgdHJhbnNmb3JtIDAuMjVzICRlYXNlLWJvdW5jZSwgYm9yZGVyLWNvbG9yIDAuMjVzICRlYXNlOyB9XHJcbi5yZXNvdXJjZS1saXN0IGxpOmhvdmVyIHsgYm94LXNoYWRvdzowIDFyZW0gMnJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpOyB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMC4xMjVyZW0pOyBib3JkZXItY29sb3I6dmFyKC0tYnV0dG9uLTEpOyB9XHJcbi5yZXMtdGl0bGUgeyBmb250LXdlaWdodDo3MDA7IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgbGV0dGVyLXNwYWNpbmc6LTAuMDFlbTsgfVxyXG4ucmVzLWRlc2MgeyBmb250LXNpemU6MC44MTI1cmVtOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuLnJlcy1hY3Rpb25zIGEgeyBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSk7IGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC0xKTsgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IHRleHQtZGVjb3JhdGlvbjogbm9uZTsgZm9udC1zaXplOiAwLjgxMjVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNXMgJGVhc2UsIGJveC1zaGFkb3cgMC4xNXMgJGVhc2U7IH1cclxuLnJlcy1hY3Rpb25zIGE6aG92ZXIgeyBvcGFjaXR5OiAwLjk7IGJveC1zaGFkb3c6ICRzaGFkb3ctc207IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBTY3JvbGxiYXIgw6LClMKAw6LClMKAXHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5LFxyXG4ucmVzb3VyY2UtcGFuZWwgLnBhbmVsLWJvZHksXHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtYm9keSB7IG92ZXJmbG93OiBhdXRvOyB9XHJcbi53cm9uZy1zdW1tYXJ5LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhcixcclxuLnJlc291cmNlLXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhcixcclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1ib2R5Ojotd2Via2l0LXNjcm9sbGJhciB7IGhlaWdodDogMC4zNzVyZW07IHdpZHRoOiAwLjM3NXJlbTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssXHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sgeyBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsXHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDAuMTg3NXJlbTsgfVxyXG4ud3Jvbmctc3VtbWFyeS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIsXHJcbi5yZXNvdXJjZS1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIsXHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIgeyBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0zLXRleHQtMyk7IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBVc2VyIFJldmlldyBQYW5lbCDDosKUwoDDosKUwoBcclxuLnVzZXItcmV2aWV3LXBhbmVsIHsgd2lkdGg6IG1pbig3MnJlbSwgOTR2dyk7IG1heC1oZWlnaHQ6IDkwdmg7IG1hcmdpbjogYXV0bzsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLmNhcmQgeyBkaXNwbGF5OmZsZXg7IGZsZXgtZGlyZWN0aW9uOmNvbHVtbjsgbWF4LWhlaWdodDo5MHZoOyBib3JkZXItcmFkaXVzOjEuMjVyZW07IGJhY2tncm91bmQ6bGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tYmctMSkgMCUsIHZhcigtLWJnLTIpIDEwMCUpOyBib3gtc2hhZG93OjAgMnJlbSA0LjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjI4KSwgMCAwLjc1cmVtIDEuNXJlbSByZ2JhKDE1LCAyMywgNDIsIDAuMTIpOyBib3JkZXI6MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgb3ZlcmZsb3c6aGlkZGVuOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIHsgcG9zaXRpb246cmVsYXRpdmU7IGRpc3BsYXk6ZmxleDsgYWxpZ24taXRlbXM6Y2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2VlbjsgZ2FwOjFyZW07IHBhZGRpbmc6MS4yNXJlbSAxLjVyZW07IGJvcmRlci1ib3R0b206MC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1iZy0yKSAwJSwgdmFyKC0tYmctMSkgMTAwJSk7IGZsZXgtc2hyaW5rOjA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXI6OmJlZm9yZSB7IGNvbnRlbnQ6Jyc7IHBvc2l0aW9uOmFic29sdXRlOyBsZWZ0OjA7IHRvcDowOyBib3R0b206MDsgd2lkdGg6MC4xODc1cmVtOyBiYWNrZ3JvdW5kOmxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLWJ1dHRvbi0xKSwgdHJhbnNwYXJlbnQpOyBib3JkZXItcmFkaXVzOjAgMC4xODc1cmVtIDAuMTg3NXJlbSAwOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5oZWFkZXItaW5mbyB7IGRpc3BsYXk6ZmxleDsgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBnYXA6MC41cmVtOyBmbGV4OjE7IG1pbi13aWR0aDowOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5oZWFkZXItaWNvbiB7IHdpZHRoOjNyZW07IGhlaWdodDozcmVtOyBkaXNwbGF5OmZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsganVzdGlmeS1jb250ZW50OmNlbnRlcjsgYm9yZGVyLXJhZGl1czowLjg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpIDAlLCB2YXIoLS1iZy0xKSAxMDAlKTsgY29sb3I6dmFyKC0tYnV0dG9uLTEpOyBib3gtc2hhZG93OjAgMC41cmVtIDEuMjVyZW0gdmFyKC0tdGhlbWUtMy1oYW5vdmVyLWJnKSwgaW5zZXQgMCAwIDAgMC4wNjI1cmVtIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgZmxleC1zaHJpbms6MDsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAuaGVhZGVyLWljb24gbWF0LWljb24geyBmb250LXNpemU6MS4zNzVyZW07IHdpZHRoOjEuMzc1cmVtOyBoZWlnaHQ6MS4zNzVyZW07IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgaDQgeyBtYXJnaW46MDsgZm9udC1zaXplOjEuMTI1cmVtOyBmb250LXdlaWdodDo4MDA7IGxldHRlci1zcGFjaW5nOi0wLjAyZW07IGNvbG9yOnZhcigtLXRoZW1lLTMtdGV4dC0xKTsgZGlzcGxheTpmbGV4OyBhbGlnbi1pdGVtczpjZW50ZXI7IGdhcDowLjVyZW07IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgaDMgeyBtYXJnaW46MDsgZm9udC1zaXplOjAuODEyNXJlbTsgZm9udC13ZWlnaHQ6NTAwOyBjb2xvcjp2YXIoLS10aGVtZS0zLXRleHQtMyk7IGRpc3BsYXk6aW5saW5lLWZsZXg7IGFsaWduLWl0ZW1zOmNlbnRlcjsgZ2FwOjAuNXJlbTsgZmxleC13cmFwOndyYXA7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnNjb3JlIHsgY29sb3I6dmFyKC0tdGhlbWUtMy10ZXh0LTIpOyBmb250LXdlaWdodDo2MDA7IHBhZGRpbmc6MC4yNXJlbSAwLjYyNXJlbTsgYm9yZGVyLXJhZGl1czowLjVyZW07IGJhY2tncm91bmQ6dmFyKC0tYmctMSk7IGJvcmRlcjowLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyBmb250LXNpemU6MC44MTI1cmVtOyBsZXR0ZXItc3BhY2luZzowLjAxZW07IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJlc3VsdCB7IGZvbnQtd2VpZ2h0OjcwMDsgcGFkZGluZzowLjI1cmVtIDAuNzVyZW07IGJvcmRlci1yYWRpdXM6NjIuNXJlbTsgZm9udC1zaXplOjAuNzVyZW07IGxldHRlci1zcGFjaW5nOjAuMDRlbTsgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlOyBib3gtc2hhZG93OjAgMC4xMjVyZW0gMC41cmVtIHJnYmEoMTUsMjMsNDIsMC4wOCk7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJlc3VsdC5wYXNzIHsgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LTEpOyBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tMSk7IH1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJlc3VsdC5mYWlsIHsgY29sb3I6ICNmZmY7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgfVxyXG4udXNlci1yZXZpZXctcGFuZWwgLnBhbmVsLWhlYWRlciAucmV2aWV3LWNsb3NlLWJ0biB7XHJcbiAgd2lkdGg6IDIuNzVyZW07XHJcbiAgaGVpZ2h0OiAyLjc1cmVtO1xyXG4gIG1pbi13aWR0aDogMi43NXJlbTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy0xKTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgJGVhc2UsIGJvcmRlci1jb2xvciAwLjJzICRlYXNlLCBjb2xvciAwLjJzICRlYXNlLCBib3gtc2hhZG93IDAuMnMgJGVhc2U7XHJcbiAgZmxleDogMCAwIDIuNzVyZW07XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1oZWFkZXIgLnJldmlldy1jbG9zZS1idG4gbWF0LWljb24ge1xyXG4gIHdpZHRoOiAxLjI1cmVtO1xyXG4gIGhlaWdodDogMS4yNXJlbTtcclxuICBtYXJnaW46IDA7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xyXG59XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXZpZXctY2xvc2UtYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS10aGVtZS0yLWhhbm92ZXItYmcpO1xyXG4gIGJvcmRlci1jb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGNvbG9yOiB2YXIoLS1idXR0b24tMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjM3NXJlbSAwLjg3NXJlbSB2YXIoLS10aGVtZS0zLWhhbm92ZXItYmcpO1xyXG59XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtaGVhZGVyIC5yZXZpZXctY2xvc2UtYnRuOmZvY3VzLXZpc2libGUge1xyXG4gIG91dGxpbmU6IDAuMTI1cmVtIHNvbGlkIHZhcigtLWJ1dHRvbi0xKTtcclxuICBvdXRsaW5lLW9mZnNldDogMC4xMjVyZW07XHJcbn1cclxuLnVzZXItcmV2aWV3LXBhbmVsIC5wYW5lbC1zdWIgeyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTMpOyBmb250LXNpemU6IDAuODc1cmVtOyB9XHJcbi51c2VyLXJldmlldy1wYW5lbCAucGFuZWwtYm9keSB7IGZsZXg6MTsgb3ZlcmZsb3c6YXV0bzsgbWF4LWhlaWdodDogY2FsYyg5MHZoIC0gMTByZW0pOyBwYWRkaW5nOiAxLjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBBdHRlbXB0IGhlYWRlciDDosKUwoDDosKUwoBcclxuLmF0dGVtcHQtaGVhZGVyIHsgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgZ2FwOiAwLjM3NXJlbTsgcGFkZGluZzogMC43NXJlbSAwOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA2KTsgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07IH1cclxuLmF0dGVtcHQtaGVhZGVyIGg1IHsgbWFyZ2luOiAwOyBmb250LXNpemU6IDFyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC43NXJlbTsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07IH1cclxuLmF0dGVtcHQtaGVhZGVyIC5zY29yZS1iYWRnZSB7IGJhY2tncm91bmQ6ICNlOWY3ZWY7IGNvbG9yOiAjMGE4MDQzOyBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtOyBib3JkZXItcmFkaXVzOiAkcmFkaXVzOyBmb250LXdlaWdodDogNzAwOyBmb250LXNpemU6IDAuODc1cmVtOyBtYXJnaW4tbGVmdDogYXV0bzsgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTsgfVxyXG4uYXR0ZW1wdC1tZXRhIHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjc1cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTsgZm9udC1zaXplOiAwLjgxMjVyZW07IH1cclxuXHJcbi8vIMOiwpTCgMOiwpTCgCBRdWVzdGlvbiByZXZpZXcgY2FyZHMgw6LClMKAw6LClMKAXHJcbi5xdWVzdGlvbnMtbGlzdCB7IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGdhcDogMXJlbTsgbWFyZ2luLXRvcDogMC41cmVtOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZCB7IHBvc2l0aW9uOnJlbGF0aXZlOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IGJvcmRlci1yYWRpdXM6IDAuODc1cmVtOyBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTsgYmFja2dyb3VuZDogdmFyKC0tYmctMSk7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2UsIGJvcmRlci1jb2xvciAwLjI1cyAkZWFzZTsgYm94LXNoYWRvdzogMCAwLjEyNXJlbSAwLjM3NXJlbSByZ2JhKDE1LDIzLDQyLDAuMDMpOyBvdmVyZmxvdzpoaWRkZW47IH1cclxuLnF1ZXN0aW9uLXJldmlldy1jYXJkOjpiZWZvcmUgeyBjb250ZW50OicnOyBwb3NpdGlvbjphYnNvbHV0ZTsgbGVmdDowOyB0b3A6MDsgYm90dG9tOjA7IHdpZHRoOjAuMTg3NXJlbTsgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCB2YXIoLS1idXR0b24tMSkgMCUsIHJnYmEoOTksMTAyLDI0MSwwLjQpIDEwMCUpOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZDpob3ZlciB7IGJveC1zaGFkb3c6IDAgMC43NXJlbSAxLjc1cmVtIHJnYmEoMTUsMjMsNDIsMC4wOCk7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xMjVyZW0pOyBib3JkZXItY29sb3I6IHJnYmEoOTksMTAyLDI0MSwwLjI1KTsgfVxyXG4ucXVlc3Rpb24tcmV2aWV3LWNhcmQgLnEtdGV4dCB7IGZvbnQtd2VpZ2h0OiA1MDA7IGxpbmUtaGVpZ2h0OiAxLjU1OyBjb2xvcjogdmFyKC0tdGhlbWUtMy10ZXh0LTEpOyB9XHJcbi5xdWVzdGlvbi1yZXZpZXctY2FyZCAubWFyay1iYWRnZSB7IGZsb2F0OiByaWdodDsgYmFja2dyb3VuZDogI2ZmZjNmMzsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgcGFkZGluZzogMC4zNzVyZW0gMC41cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGZvbnQtd2VpZ2h0OiA2MDA7IGZvbnQtc2l6ZTogMC43NXJlbTsgfVxyXG5cclxuLnEtaGVhZC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyBnYXA6IDFyZW07IG1hcmdpbi1ib3R0b206IDFyZW07IHBhZGRpbmctYm90dG9tOiAxcmVtOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gZGFzaGVkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgfVxyXG4ucS1sZWZ0IHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjg3NXJlbTsgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxyXG4ucS1ib2R5IHsgZGlzcGxheTogZ3JpZDsgZ2FwOiAwLjVyZW07IGZsZXg6IDE7IG1pbi13aWR0aDogMDsgfVxyXG4ucS1tZXRhIHsgZGlzcGxheTogZmxleDsgZ2FwOiAwLjVyZW07IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4ucS1pbmRleCB7IHdpZHRoOiAyLjI1cmVtOyBoZWlnaHQ6IDIuMjVyZW07IGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoOTksMTAyLDI0MSwwLjE4KSAwJSwgcmdiYSg5OSwxMDIsMjQxLDAuMDYpIDEwMCUpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDk5LDEwMiwyNDEsMC4xOCk7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC13ZWlnaHQ6IDgwMDsgZm9udC1zaXplOiAwLjg3NXJlbTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgZmxleC1zaHJpbms6IDA7IH1cclxuLnEtcmlnaHQgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNjI1cmVtOyBhbGlnbi1pdGVtczogY2VudGVyOyBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyBmbGV4LXNocmluazogMDsgfVxyXG4ucS1iYWRnZSB7IGJhY2tncm91bmQ6IHZhcigtLXRoZW1lLTItaGFub3Zlci1iZyk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTsgY29sb3I6IHZhcigtLWJ1dHRvbi0xKTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBwYWRkaW5nOiAwLjI1cmVtIDAuNjI1cmVtOyBmb250LXNpemU6IDAuNjg3NXJlbTsgbGluZS1oZWlnaHQ6IDFyZW07IHdpZHRoOiBmaXQtY29udGVudDsgZm9udC13ZWlnaHQ6IDcwMDsgbGV0dGVyLXNwYWNpbmc6IDAuMDZlbTsgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxyXG4ucS1pbmZvIHsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zKTsgZm9udC1zaXplOiAwLjgxMjVyZW07IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBnYXA6IDAuMzc1cmVtOyBmb250LXdlaWdodDogNTAwOyB9XHJcbi5xLWluZm8gbWF0LWljb24geyBmb250LXNpemU6IDAuOTM3NXJlbTsgd2lkdGg6IDAuOTM3NXJlbTsgaGVpZ2h0OiAwLjkzNzVyZW07IGNvbG9yOiB2YXIoLS1idXR0b24tMSk7IH1cclxuLnEtbWFya3Muc21hbGwtbXV0ZWQgeyBjb2xvcjogcmdiYSgwLDAsMCwwLjYpOyBmb250LXNpemU6IDAuODc1cmVtOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgUXVlc3Rpb24gb3B0aW9ucyAoY2hvb3NlIC8gbXVsdGkpIMOiwpTCgMOiwpTCgFxyXG4ucS1vcHRpb25zIHsgZGlzcGxheTogZmxleDsgZmxleC13cmFwOiB3cmFwOyBnYXA6IDAuNjI1cmVtOyB9XHJcbi5xLW9wdGlvbnMudHdvLWNvbCB7IGRpc3BsYXk6IGdyaWQ7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgZ2FwOiAwLjc1cmVtOyB9XHJcbi5xLW9wdGlvbiB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC43NXJlbTsgcGFkZGluZzogMC43NXJlbSAwLjg3NXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDAsMCwwLDAuMSk7IGJhY2tncm91bmQ6ICNmOGZiZmY7IHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4yNXMgJGVhc2UsIGJhY2tncm91bmQgMC4yNXMgJGVhc2UsIHRyYW5zZm9ybSAwLjI1cyAkZWFzZS1ib3VuY2UsIGJvcmRlci1jb2xvciAwLjI1cyAkZWFzZTsgfVxyXG4ucS1vcHRpb246aG92ZXIgeyBib3gtc2hhZG93OiAkc2hhZG93LW1kOyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTAuMTI1cmVtKTsgYm9yZGVyLWNvbG9yOiByZ2JhKDk5LDEwMiwyNDEsMC4xNSk7IH1cclxuLm9wdC1sZWZ0IHsgd2lkdGg6IDIuNXJlbTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5vcHQtbGVmdCAub3B0LW1hcmsgeyB3aWR0aDogMnJlbTsgaGVpZ2h0OiAycmVtOyBib3JkZXItcmFkaXVzOiA1MCU7IGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7IGRpc3BsYXk6IGlubGluZS1mbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZm9udC13ZWlnaHQ6IDcwMDsgZm9udC1zaXplOiAwLjgxMjVyZW07IHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4xNXMgJGVhc2U7IH1cclxuLm9wdC1ib2R5IHsgZmxleDogMTsgcGFkZGluZy1yaWdodDogMC43NXJlbTsgYWxpZ24tc2VsZjogY2VudGVyOyBsaW5lLWhlaWdodDogMS40NTsgfVxyXG4ub3B0LWJhZGdlIHsgbWFyZ2luLWxlZnQ6IGF1dG87IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4zNzVyZW07IGZsZXgtc2hyaW5rOiAwOyB9XHJcbi5iYWRnZSB7IHBhZGRpbmc6IDAuMjVyZW0gMC42MjVyZW07IGJvcmRlci1yYWRpdXM6IDFyZW07IGZvbnQtc2l6ZTogMC42ODc1cmVtOyBmb250LXdlaWdodDogNjAwOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBsZXR0ZXItc3BhY2luZzogMC4wMmVtOyB9XHJcbi5iYWRnZS55b3VyLWFuc3dlciB7IGJhY2tncm91bmQ6IHZhcigtLXJlZC1iZyk7IGNvbG9yOiB2YXIoLS1yZWQtdGV4dCk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJyZWQtYm9yZGVyKTsgfVxyXG4uYmFkZ2UuY29ycmVjdCB7IGJhY2tncm91bmQ6ICNlOGY5ZWY7IGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmdyZWVuLWJvcmRlcik7IH1cclxuLmJhZGdlLm1pc3NlZCB7IGJhY2tncm91bmQ6IHZhcigtLWJsdWUtYmcpOyBjb2xvcjogdmFyKC0tYmJsdWUtdGV4dCk7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtb3B0aW9uLnNlbGVjdGVkIHsgYmFja2dyb3VuZDogdmFyKC0tcmVkLWJnKTsgY29sb3I6IHZhcigtLXJlZC10ZXh0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1icmVkLWJvcmRlcik7IH1cclxuLnEtb3B0aW9uLnNlbGVjdGVkIC5vcHQtbWFyayB7IGJhY2tncm91bmQ6IHJnYmEoMTg1LDI4LDI4LDAuMSk7IH1cclxuLnEtb3B0aW9uLmNvcnJlY3QgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ncmVlbi1iZyk7IGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4ucS1vcHRpb24uY29ycmVjdCAub3B0LW1hcmsgeyBiYWNrZ3JvdW5kOiByZ2JhKDIyLDEwMSw1MiwwLjEpOyB9XHJcbi5xLW9wdGlvbi5taXNzZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1ibHVlLWJnKTsgY29sb3I6IHZhcigtLWJibHVlLXRleHQpOyBib3JkZXItY29sb3I6IHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtb3B0aW9uLm1pc3NlZCAub3B0LW1hcmsgeyBiYWNrZ3JvdW5kOiByZ2JhKDExLDEwMiwyMDgsMC4xKTsgfVxyXG5cclxuLnEtc2VsZWN0ZWQsIC5xLW1hcmtzIHsgbWFyZ2luLXRvcDogMC41cmVtOyBmb250LXNpemU6IDAuODc1cmVtOyB9XHJcbi5xLWZlZWRiYWNrIHsgbWFyZ2luLXRvcDogMC42MjVyZW07IGJhY2tncm91bmQ6IHJnYmEoMjQwLDI0OCwyNTUsMC42KTsgcGFkZGluZzogMC42MjVyZW0gMC43NXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjc1KTsgYm9yZGVyLWxlZnQ6IDAuMTg3NXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBsaW5lLWhlaWdodDogMS41OyB9XHJcbi5xLWV2YWx1YXRpb24tc3RhdGUgeyBtYXJnaW4tdG9wOiAwLjYyNXJlbTsgcGFkZGluZzogMC43NXJlbTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgZ2FwOiAxcmVtOyB9XHJcbi5xLWV2YWx1YXRpb24tc3RhdGUuZmFpbGVkIHsgY29sb3I6ICM4YTFjMWM7IGJhY2tncm91bmQ6ICNmZmYyZjI7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNlZmI0YjQ7IH1cclxuLnEtZXZhbHVhdGlvbi1zdGF0ZS5wZW5kaW5nIHsgY29sb3I6ICM2YzRhMDA7IGJhY2tncm91bmQ6ICNmZmY4ZTY7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkICNlN2NhN2E7IH1cclxuLnJldHJ5LWV2YWx1YXRpb24tYnRuIHsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgY3VycmVudENvbG9yOyBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTsgcGFkZGluZzogMC40cmVtIDAuN3JlbTsgY29sb3I6IGluaGVyaXQ7IGJhY2tncm91bmQ6ICNmZmY7IGN1cnNvcjogcG9pbnRlcjsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxyXG4ucmV0cnktZXZhbHVhdGlvbi1idG46ZGlzYWJsZWQgeyBjdXJzb3I6IHdhaXQ7IG9wYWNpdHk6IDAuNjsgfVxyXG4ucmV2aWV3LWVtcHR5IHsgcGFkZGluZzogMC43NXJlbSAwLjI1cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjU1KTsgZm9udC1zdHlsZTogaXRhbGljOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgTWFya3MgYmFkZ2Ugc3RhdGVzIMOiwpTCgMOiwpTCgFxyXG4ucS1tYXJrcy5tYXJrLXBvc2l0aXZlLFxyXG4ucS1tYXJrcy5tYXJrLW5lZ2F0aXZlLFxyXG4ucS1tYXJrcy5tYXJrLW1pZCB7XHJcbiAgbWluLXdpZHRoOiAzLjI1cmVtO1xyXG4gIGhlaWdodDogMnJlbTtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIHBhZGRpbmc6IDAgMC42MjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWdyaWQgIWltcG9ydGFudDtcclxuICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA4MDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDAuODEyNXJlbTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuLnEtbWFya3MubWFyay1wb3NpdGl2ZSB7IGJhY2tncm91bmQ6ICNlOGY5ZWY7IGNvbG9yOiAjMGI4YTQ1OyB9XHJcbi5xLW1hcmtzLm1hcmstbmVnYXRpdmUgeyBiYWNrZ3JvdW5kOiAjZmZmMmY0OyBjb2xvcjogI2IwMmEzNzsgfVxyXG4ucS1tYXJrcy5tYXJrLW1pZCB7IGJhY2tncm91bmQ6ICNmZmY4ZTY7IGNvbG9yOiAjYjM2YTAwOyB9XHJcblxyXG4vLyDDosKUwoDDosKUwoAgRmlsbCBxdWVzdGlvbiDDosKUwoDDosKUwoBcclxuLnEtZmlsbCAuZmlsbC1yb3cgeyBkaXNwbGF5OiBmbGV4OyBnYXA6IDAuNzVyZW07IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGZsZXgtd3JhcDogd3JhcDsgfVxyXG4ucS1maWxsIC5maWxsLW9wdGlvbiB7IHBhZGRpbmc6IDAuNjI1cmVtIDAuODc1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGJhY2tncm91bmQ6ICNmZmY3ZWQ7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMjQ1LDE2NiwzNSwwLjEpOyB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMTVzICRlYXNlOyB9XHJcbi5xLWZpbGwgLmZpbGwtb3B0aW9uOmhvdmVyIHsgYm94LXNoYWRvdzogJHNoYWRvdy1zbTsgfVxyXG4ucS1maWxsIC5maWxsLW9wdGlvbi5zZWxlY3RlZCB7IGJhY2tncm91bmQ6ICNlOGY2ZmY7IGJvcmRlci1jb2xvcjogcmdiYSgyLDExMiwyNTUsMC4xNSk7IH1cclxuLnEtZmlsbCAuZmlsbC1vcHRpb24uY29ycmVjdCB7IGJhY2tncm91bmQ6IHZhcigtLWdyZWVuLWJnKTsgYm9yZGVyLWNvbG9yOiB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG4ucS1maWxsIC5maWxsLWNvcnJlY3QgeyBwYWRkaW5nOiAwLjYyNXJlbSAwLjg3NXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBjb2xvcjogcmdiYSgwLDAsMCwwLjYpOyBmb250LXNpemU6IDAuODEyNXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JlZW4tYmcpOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iZ3JlZW4tYm9yZGVyKTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIERlc2NyaXB0aXZlIHJldmlldyDDosKUwoDDosKUwoBcclxuLnEtZGVzY3JpcHRpdmUgeyBkaXNwbGF5OiBncmlkOyBnYXA6IDAuODc1cmVtOyB9XHJcbi5kZXNjcmlwdGl2ZS1hbnN3ZXJzIHsgZGlzcGxheTogZ3JpZDsgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMCwgMWZyKSBtaW5tYXgoMCwgMWZyKTsgZ2FwOiAwLjg3NXJlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgeyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IGdhcDogMC43NXJlbTsgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtYmcpOyBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLmRlc2MtcXVlc3Rpb24geyBmbGV4OiAxIDEgYXV0bzsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnF1ZXN0aW9uLWxhYmVsIHsgZm9udC1zaXplOiAwLjY4NzVyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjA2ZW07IGNvbG9yOiAjOGM2YWQ2OyBiYWNrZ3JvdW5kOiByZ2JhKDE0MCwxMDYsMjE0LDAuMDgpOyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IHBhZGRpbmc6IDAuMzc1cmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czogMC41cmVtOyBmb250LXdlaWdodDogNzAwOyBtYXJnaW4tYm90dG9tOiAwLjM3NXJlbTsgfVxyXG4ucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgLnF1ZXN0aW9uLXZhbHVlIHsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5kZXNjLXNjb3JlIHsgd2lkdGg6IDguNzVyZW07IGZsZXg6IDAgMCA4Ljc1cmVtOyBkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogY2VudGVyOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuc2NvcmUtbGFiZWwgeyBmb250LXNpemU6IDAuODEyNXJlbTsgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtaGVhZGVyIC5zY29yZS12YWx1ZSB7IGZvbnQtc2l6ZTogMS4xMjVyZW07IGZvbnQtd2VpZ2h0OiA4MDA7IGNvbG9yOiAjZjM5YzEyOyBiYWNrZ3JvdW5kOiAjZmZmOyBwYWRkaW5nOiAwLjc1cmVtIDAuNXJlbTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNCk7IG1hcmdpbi10b3A6IDAuMzc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLW1vZGVsIHsgcGFkZGluZzogMC43NXJlbTsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGhlbWUtMik7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1iYmx1ZS1ib3JkZXIpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc3R1ZGVudCB7IHBhZGRpbmc6IDAuNzVyZW07IGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZWVuLWJnKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyBib3JkZXItbGVmdDogMC4xODc1cmVtIHNvbGlkIHZhcigtLWJncmVlbi1ib3JkZXIpOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLW1vZGVsIC5tb2RlbC1sYWJlbCxcclxuLnEtZGVzY3JpcHRpdmUgLmRlc2Mtc3R1ZGVudCAuc3R1ZGVudC1sYWJlbCB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNyk7IG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyBmb250LXNpemU6IDAuNzVyZW07IHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IGxldHRlci1zcGFjaW5nOiAwLjA0ZW07IH1cclxuLnEtZGVzY3JpcHRpdmUgLmRlc2MtbW9kZWwgLm1vZGVsLXRleHQsXHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXN0dWRlbnQgLmFuc3dlci10ZXh0IHsgY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7IGxpbmUtaGVpZ2h0OiAxLjU1OyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5kZXNjLXNjb3JlIHsgd2lkdGg6IDguNzVyZW07IGJhY2tncm91bmQ6ICNmZmY7IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHJnYmEoMCwwLDAsMC4wNCk7IHBhZGRpbmc6IDAuNjI1cmVtOyBib3JkZXItcmFkaXVzOiAwLjVyZW07IGRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5zY29yZS1sYWJlbCB7IGZvbnQtd2VpZ2h0OiA3MDA7IGNvbG9yOiByZ2JhKDAsMCwwLDAuNik7IG1hcmdpbi1ib3R0b206IDAuMzc1cmVtOyB9XHJcbi5xLWRlc2NyaXB0aXZlIC5zY29yZS12YWx1ZSB7IGZvbnQtc2l6ZTogMXJlbTsgZm9udC13ZWlnaHQ6IDgwMDsgY29sb3I6ICMwYjY2ZDA7IH1cclxuLnEtZGVzY3JpcHRpdmUgLnEtZmVlZGJhY2sgeyBwYWRkaW5nOiAwLjc1cmVtOyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ibHVlLWJnKTsgYm9yZGVyLXJhZGl1czogMC42MjVyZW07IGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJibHVlLWJvcmRlcik7IGJvcmRlci1sZWZ0OiAwLjE4NzVyZW0gc29saWQgdmFyKC0tYmJsdWUtYm9yZGVyKTsgbGluZS1oZWlnaHQ6IDEuNTsgfVxyXG5cclxuLy8gw6LClMKAw6LClMKAIFJldmlldyBjb21tZW50IGNvbHVtbnMgw6LClMKAw6LClMKAXHJcbi5xLXJldmlldy1jb21tZW50cyB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBib3JkZXItdG9wOiAwLjA2MjVyZW0gZGFzaGVkIHZhcigtLXRoZW1lLTMtYm9yZGVyKTtcclxufVxyXG5cclxuLnJldmlldy1jb2x1bW5zIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XHJcbiAgZ2FwOiAwLjg3NXJlbTtcclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICB9XHJcblxyXG4gIC5jb2wge1xyXG4gICAgcGFkZGluZzogMC44NzVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xyXG4gICAgbWluLWhlaWdodDogNHJlbTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAuNXJlbSAxLjI1cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xMjVyZW0pO1xyXG4gICAgfVxyXG5cclxuICAgICYubWlzc2VkIHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tcmVkLWJnKSAwJSwgdmFyKC0tYmctMSwgI2ZmZikgOTAlKTtcclxuICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnJlZC1ib3JkZXIpO1xyXG4gICAgICBib3JkZXItdG9wOiAwLjE4NzVyZW0gc29saWQgdmFyKC0tcmVkLXRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW5jb3JyZWN0IHtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgdmFyKC0tb3JhbmdlLWJnKSAwJSwgdmFyKC0tYmctMSwgI2ZmZikgOTAlKTtcclxuICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYm9yYW5nZS1ib3JkZXIpO1xyXG4gICAgICBib3JkZXItdG9wOiAwLjE4NzVyZW0gc29saWQgdmFyKC0tb3JhbmdlLXRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgICYuaW5jb21wbGV0ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHZhcigtLXllbGxvdy1iZykgMCUsIHZhcigtLWJnLTEsICNmZmYpIDkwJSk7XHJcbiAgICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWJ5ZWxsb3ctYm9yZGVyKTtcclxuICAgICAgYm9yZGVyLXRvcDogMC4xODc1cmVtIHNvbGlkIHZhcigtLXllbGxvdy10ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAuY29sLWhlYWRlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGdhcDogMC41cmVtO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gICAgICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLCAwLCAwLCAwLjA2KTtcclxuXHJcbiAgICAgIC5kb3Qge1xyXG4gICAgICAgIHdpZHRoOiAwLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAwLjVyZW07XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuXHJcbiAgICAgICAgJi5yZWQgeyBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtdGV4dCk7IH1cclxuICAgICAgICAmLm9yYW5nZSB7IGJhY2tncm91bmQ6IHZhcigtLW9yYW5nZS10ZXh0KTsgfVxyXG4gICAgICAgICYueWVsbG93IHsgYmFja2dyb3VuZDogdmFyKC0teWVsbG93LXRleHQpOyB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNGVtO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yLCAjMzc0MTUxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy1lbXB0eSB7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0zLCAjOUNBM0FGKTtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbiAgcGFkZGluZzogMC41cmVtIDA7XHJcbn1cclxuXHJcbi5yZXZpZXctaXRlbSB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSwgI2ZmZmZmZik7XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgxNSwgMjMsIDQyLCAwLjA4KTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDAuODc1cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4wNjI1cmVtIDAuMjVyZW0gcmdiYSgwLCAwLCAwLCAwLjAzKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyAkZWFzZTtcclxuXHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgxNSwgMjMsIDQyLCAwLjE0KTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4yNXJlbSAwLjc1cmVtIHJnYmEoMTUsIDIzLCA0MiwgMC4wNik7XHJcbiAgfVxyXG5cclxuICAucmktYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnJldmlldy10ZXh0LW1pc3NlZCxcclxuLnJldmlldy10ZXh0LWluY29ycmVjdCxcclxuLnJldmlldy10ZXh0LWluY29tcGxldGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgZ2FwOiAwLjYyNXJlbTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgJi5kZWxldGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIC5yZXZpZXctdGV4dCB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xyXG4gICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5yaS1sZWZ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1zaHJpbms6IDA7XHJcbiAgbWFyZ2luLXRvcDogMC4xMjVyZW07XHJcbn1cclxuXHJcbi5yaS1pY29uIHtcclxuICB3aWR0aDogMS4zNzVyZW07XHJcbiAgaGVpZ2h0OiAxLjM3NXJlbTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMTtcclxuICBmbGV4LXNocmluazogMDtcclxuXHJcbiAgJi5taXNzZWQge1xyXG4gICAgYmFja2dyb3VuZDogI2ZlZTJlMjtcclxuICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gIH1cclxuICAmLmluY29ycmVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZlZGQ1O1xyXG4gICAgY29sb3I6ICNjMjQxMGM7XHJcbiAgfVxyXG4gICYuaW5jb21wbGV0ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmVmM2M3O1xyXG4gICAgY29sb3I6ICNiNDUzMDk7XHJcbiAgfVxyXG59XHJcblxyXG4ucmV2aWV3LXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ1O1xyXG4gIGNvbG9yOiAjMWUyOTNiO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmbGV4OiAxO1xyXG5cclxuICAmLmRlbGV0ZWQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBjb2xvcjogIzk0YTNiODtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctdGV4dC1oaXN0b3J5IHtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5oaXN0b3J5LWVudHJ5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxuICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gZGFzaGVkICNlMmU4ZjA7XHJcblxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xyXG4gIH1cclxuXHJcbiAgJi5kZWxldGVkIHtcclxuICAgIG9wYWNpdHk6IDAuNjtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctbWV0YSB7XHJcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gIGNvbG9yOiAjNjQ3NDhiO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjM3NXJlbTtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogIzY0NzQ4YjtcclxuICB9XHJcblxyXG4gIC5kZWxldGVkLWJ5IHtcclxuICAgIGNvbG9yOiAjZGMyNjI2O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB9XHJcbn1cclxuXHJcbi5yZXZpZXctYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xyXG4gIGJvcmRlci10b3A6IDAuMDYyNXJlbSBkYXNoZWQgI2UyZThmMDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gIC5lZGl0ZWQtaW5mbyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDAuMTI1cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBnYXA6IDAuMzVyZW07XHJcbiAgICBwYWRkaW5nOiAwLjM1cmVtIDAuNjI1cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZmFmYztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMmU4ZjA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMC43MjVyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS4zNTtcclxuICAgIGNvbG9yOiAjNDc1NTY5O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMTUsIDIzLCA0MiwgMC4wMyk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmNWY5O1xyXG4gICAgICBib3JkZXItY29sb3I6ICNjYmQ1ZTE7XHJcbiAgICB9XHJcblxyXG4gICAgbWF0LWljb24ge1xyXG4gICAgICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGNvbG9yOiAjNGY0NmU1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXRlZC10ZXh0IHtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0b3ItbmFtZSB7XHJcbiAgICAgIGNvbG9yOiAjMGYxNzJhO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0ZWQtZGF0ZS1zZXAge1xyXG4gICAgICBjb2xvcjogIzk0YTNiODtcclxuICAgICAgZm9udC1zaXplOiAwLjY1cmVtO1xyXG4gICAgICBtYXJnaW46IDAgMC4wNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuZWRpdGVkLWRhdGUge1xyXG4gICAgICBjb2xvcjogIzY0NzQ4YjtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMTRweCAhaW1wb3J0YW50O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbiAgLmVkaXQtbGluayxcclxuICAuZGVsZXRlLWxpbmssXHJcbiAgLnNhdmUtbGluayxcclxuICAuY2FuY2VsLWxpbmsge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjI1cmVtO1xyXG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xNXMgZWFzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICB9XHJcblxyXG4gIC5lZGl0LWxpbmsge1xyXG4gICAgY29sb3I6ICMyNTYzZWI7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjA4KTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDM3LCA5OSwgMjM1LCAwLjE2KTtcclxuICAgICAgY29sb3I6ICMxZDRlZDg7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5kZWxldGUtbGluayB7XHJcbiAgICBjb2xvcjogI2RjMjYyNjtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAzOCwgMzgsIDAuMDgpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIwLCAzOCwgMzgsIDAuMTYpO1xyXG4gICAgICBjb2xvcjogI2I5MWMxYztcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnNhdmUtbGluayB7XHJcbiAgICBjb2xvcjogIzE2YTM0YTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjIsIDE2MywgNzQsIDAuMDgpO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjIsIDE2MywgNzQsIDAuMTYpO1xyXG4gICAgICBjb2xvcjogIzE1ODAzZDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhbmNlbC1saW5rIHtcclxuICAgIGNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDAsIDExNiwgMTM5LCAwLjA4KTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwMCwgMTE2LCAxMzksIDAuMTYpO1xyXG4gICAgICBjb2xvcjogIzQ3NTU2OTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hcmtzIGVkaXRpbmcgZm9yIGRlc2NyaXB0aXZlIHF1ZXN0aW9ucyDDosKUwoDDosKUwoBcclxuLm1hcmtzLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC4zNzVyZW07XHJcbiAgbWluLWhlaWdodDogMi4yNXJlbTtcclxufVxyXG5cclxuLm1hcmtzLWRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG4gIHBhZGRpbmc6IDAuMTg3NXJlbTtcclxuICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwLjA2MjVyZW0gMC4xMjVyZW0gcmdiYSgxNSwgMjMsIDQyLCAwLjA0KTtcclxufVxyXG5cclxuLm1hcmtzLWRpc3BsYXkgLnEtbWFya3MubWFyay1wb3NpdGl2ZSxcclxuLm1hcmtzLWRpc3BsYXkgLnEtbWFya3MubWFyay1uZWdhdGl2ZSxcclxuLm1hcmtzLWRpc3BsYXkgLnEtbWFya3MubWFyay1taWQge1xyXG4gIG1pbi13aWR0aDogMy41cmVtO1xyXG4gIGhlaWdodDogMS43NXJlbTtcclxuICBwYWRkaW5nOiAwIDAuNXJlbTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjI1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNDM3NXJlbTtcclxufVxyXG5cclxuLm1hcmtzLWRpdmlkZXIge1xyXG4gIG9wYWNpdHk6IDAuNTU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmVkaXQtbWFya3MtYnRuIHtcclxuICB3aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICBsaW5lLWhlaWdodDogMS43NXJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNDM3NXJlbSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiB2YXIoLS10aGVtZS0zLXRleHQtMikgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAwLjcyO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyAkZWFzZSwgYmFja2dyb3VuZCAwLjJzICRlYXNlLCBjb2xvciAwLjJzICRlYXNlO1xyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDEwMiwyNDEsMC4wOCk7XHJcbiAgICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAmOmZvY3VzLXZpc2libGUge1xyXG4gICAgb3V0bGluZTogMC4xMjVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpO1xyXG4gICAgb3V0bGluZS1vZmZzZXQ6IDAuMDYyNXJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJrcy1lZGl0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IG1pbigyMHJlbSwgY2FsYygxMDB2dyAtIDRyZW0pKTtcclxuICBnYXA6IDAuNjI1cmVtO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMC42MjVyZW07XHJcbiAgYm9yZGVyLXJhZGl1czogMC42MjVyZW07XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYnV0dG9uLTEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC41cmVtIHJnYmEoOTksMTAyLDI0MSwwLjE1KTtcclxufVxyXG5cclxuLm1hcmtzLWlucHV0IHtcclxuICB3aWR0aDogMy41cmVtO1xyXG4gIHBhZGRpbmc6IDAuMjVyZW0gMC4zNzVyZW07XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYm9yZGVyLTEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMgJGVhc2UsIGJveC1zaGFkb3cgMC4ycyAkZWFzZTtcclxuICBcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi0xKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1cmVtIHJnYmEoOTksMTAyLDI0MSwwLjEpO1xyXG4gIH1cclxuICBcclxuICAmOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG4gICY6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmtzLW1heCB7XHJcbiAgZm9udC1zaXplOiAwLjgxMjVyZW07XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NSk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLnNhdmUtbWFya3MtYnRuLFxyXG4uY2FuY2VsLW1hcmtzLWJ0biB7XHJcbiAgd2lkdGg6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBtaW4td2lkdGg6IDEuNzVyZW0gIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXggIWltcG9ydGFudDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC40Mzc1cmVtICFpbXBvcnRhbnQ7XHJcbiAgZmxleDogMCAwIDEuNzVyZW07XHJcbn1cclxuXHJcbi5zYXZlLW1hcmtzLWJ0biB7XHJcbiAgY29sb3I6IHZhcigtLWdyZWVuLXRleHQpICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4tYmcpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlO1xyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gIH1cclxufVxyXG5cclxuLmNhbmNlbC1tYXJrcy1idG4ge1xyXG4gIGNvbG9yOiB2YXIoLS1yZWQtdGV4dCkgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQtYmcpICFpbXBvcnRhbnQ7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzICRlYXNlO1xyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHdpZHRoOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcclxuICB9XHJcbiAgXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAwLjg1O1xyXG4gIH1cclxufVxyXG5cclxuLy8gw6LClMKAw6LClMKAIE1hcmtzIEhpc3RvcnkgU2VjdGlvbiDDosKUwoDDosKUwoBcclxuLm1hcmtzLWhpc3Rvcnktc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoOTksMTAyLDI0MSwwLjAzKSAwJSwgcmdiYSg1OSwxMzAsMjQ2LDAuMDIpIDEwMCUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuNzVyZW07XHJcbiAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSg5OSwxMDIsMjQxLDAuMSk7XHJcbn1cclxuXHJcbi5tYXJrcy1oaXN0b3J5LWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGdhcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHJnYmEoOTksMTAyLDI0MSwwLjEpO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICBjb2xvcjogdmFyKC0tYnV0dG9uLTEpO1xyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICB3aWR0aDogMS4xMjVyZW07XHJcbiAgICBoZWlnaHQ6IDEuMTI1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLm1hcmtzLWhpc3RvcnktdGltZWxpbmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDA7XHJcbn1cclxuXHJcbi5oaXN0b3J5LWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAwLjg3NXJlbTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5oaXN0b3J5LWluZGljYXRvciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEuNXJlbTtcclxuICBmbGV4LXNocmluazogMDtcclxuICBcclxuICAuZG90IHtcclxuICAgIHdpZHRoOiAwLjc1cmVtO1xyXG4gICAgaGVpZ2h0OiAwLjc1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMTg3NXJlbSByZ2JhKDI1NSwyNTUsMjU1LDEpO1xyXG4gICAgXHJcbiAgICAmLmN1cnJlbnQge1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxLCAjMDU5NjY5KTtcclxuICAgICAgYm94LXNoYWRvdzogMCAwIDAgMC4xODc1cmVtIHJnYmEoMTYsMTg1LDEyOSwwLjE1KSwgMCAwLjEyNXJlbSAwLjM3NXJlbSByZ2JhKDE2LDE4NSwxMjksMC4yNSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgICYucGFzdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM5NGEzYjgsICM2NDc0OGIpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAwLjE4NzVyZW0gcmdiYSgxNDgsMTYzLDE4NCwwLjE1KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLmxpbmUge1xyXG4gICAgd2lkdGg6IDAuMTI1cmVtO1xyXG4gICAgZmxleDogMTtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMTQ4LDE2MywxODQsMC40KSAwJSwgcmdiYSgxNDgsMTYzLDE4NCwwLjEpIDEwMCUpO1xyXG4gICAgbWFyZ2luOiAwLjI1cmVtIDA7XHJcbiAgICBtaW4taGVpZ2h0OiAxcmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktY29udGVudCB7XHJcbiAgZmxleDogMTtcclxuICBwYWRkaW5nLWJvdHRvbTogMC44NzVyZW07XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNhcmQge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjYyNXJlbTtcclxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMjVzICRlYXNlLCB0cmFuc2Zvcm0gMC4yNXMgJGVhc2UtYm91bmNlLCBib3JkZXItY29sb3IgMC4yNXMgJGVhc2U7XHJcbiAgXHJcbiAgJi5jdXJyZW50IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsIHJnYmEoMTYsMTg1LDEyOSwwLjA4KSAwJSwgcmdiYSg1LDE1MCwxMDUsMC4wNCkgMTAwJSk7XHJcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCByZ2JhKDE2LDE4NSwxMjksMC4yKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMC4xMjVyZW0gMC41cmVtIHJnYmEoMTYsMTg1LDEyOSwwLjEpO1xyXG4gICAgXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgYm94LXNoYWRvdzogMCAwLjM3NXJlbSAxcmVtIHJnYmEoMTYsMTg1LDEyOSwwLjE4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0wLjE4NzVyZW0pO1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMTYsMTg1LDEyOSwwLjMpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmLnBhc3Qge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDgsMjUwLDI1MiwwLjgpO1xyXG4gICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgcmdiYSgwLDAsMCwwLjA2KTtcclxuICAgIFxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJveC1zaGFkb3c6ICRzaGFkb3ctbWQ7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMC4xMjVyZW0pO1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWJhZGdlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBwYWRkaW5nOiAwLjE4NzVyZW0gMC41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZm9udC1zaXplOiAwLjY4NzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wM2VtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzEwYjk4MSwgIzA1OTY2OSk7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMC4zNzVyZW07XHJcbiAgYm94LXNoYWRvdzogMCAwLjA2MjVyZW0gMC4yNXJlbSByZ2JhKDE2LDE4NSwxMjksMC4zKTtcclxufVxyXG5cclxuLmhpc3RvcnktbWFya3Mge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC44NSk7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgXHJcbiAgLm1hcmtzLXRvdGFsIHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjQ1KTtcclxuICB9XHJcbn1cclxuXHJcbi5oaXN0b3J5LWNhcmQucGFzdCAuaGlzdG9yeS1tYXJrcyB7XHJcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjYpO1xyXG4gIFxyXG4gIC5tYXJrcy10b3RhbCB7XHJcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktbWV0YSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZ2FwOiAwLjc1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44MTI1cmVtO1xyXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTUpO1xyXG4gIFxyXG4gIC51cGRhdGVkLWJ5LFxyXG4gIC51cGRhdGVkLWRhdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuMjVyZW07XHJcbiAgICBcclxuICAgIG1hdC1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuICAgICAgd2lkdGg6IDAuODc1cmVtO1xyXG4gICAgICBoZWlnaHQ6IDAuODc1cmVtO1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC51cGRhdGVkLWJ5IHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogcmdiYSgwLDAsMCwwLjcpO1xyXG4gIH1cclxufVxyXG5cclxuLmhpc3RvcnktY2FyZC5jdXJyZW50IC5oaXN0b3J5LW1ldGEge1xyXG4gIC51cGRhdGVkLWJ5IHtcclxuICAgIGNvbG9yOiB2YXIoLS1ncmVlbi10ZXh0KTtcclxuICB9XHJcbn1cclxuLy8gw6LClMKAw6LClMKAIFJlc3BvbnNpdmUgw6LClMKAw6LClMKAXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NXJlbSkge1xyXG4gIC5wYWdlIHsgcGFkZGluZzogMC43NXJlbSAwLjc1cmVtIDJyZW07IH1cclxuICAudG9vbGJhciB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBzdHJldGNoOyBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07IH1cclxuICAuc2VsZWN0aW9ucyB7IG1heC13aWR0aDogMTAwJTsgZmxleDogMSAxIDEwMCU7IH1cclxuICAucmVwb3J0LXN1bW1hcnktZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTsgfVxyXG4gIC50YWItYWN0aW9ucyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XHJcbiAgLnRhYi1hY3Rpb25zIC5zZWFyY2ggeyBtYXgtd2lkdGg6IDEwMCU7IH1cclxuICAudGFiLWFjdGlvbnMgLmFjdGlvbi1yb3cgeyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAucmV2aWV3LWNvbHVtbnMgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gIC5xLW9wdGlvbnMudHdvLWNvbCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbiAgLnVzZXItcmV2aWV3LXBhbmVsIHsgd2lkdGg6IDk2JTsgfVxyXG4gIC53cm9uZy1zdW1tYXJ5LXBhbmVsLCAucmVzb3VyY2UtcGFuZWwgeyB3aWR0aDogMTAwJTsgbWF4LXdpZHRoOiAxMDAlOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLmNhcmQsIC5yZXNvdXJjZS1wYW5lbCAuY2FyZCB7IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnBhbmVsLWJvZHkgeyBwYWRkaW5nOiAwLjc1cmVtOyB9XHJcbiAgLnEtZGVzY3JpcHRpdmUgLmRlc2Mtcm93IHsgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxyXG4gIC5xLWRlc2NyaXB0aXZlIC5kZXNjLXNjb3JlIHsgd2lkdGg6IDEwMCU7IH1cclxuICAucS1kZXNjcmlwdGl2ZSAuZGVzYy1oZWFkZXIgeyBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxyXG4gIC5xLWRlc2NyaXB0aXZlIC5kZXNjLWhlYWRlciAuZGVzYy1zY29yZSB7IHdpZHRoOiAxMDAlOyBmbGV4OiBub25lOyBtYXJnaW4tdG9wOiAwLjVyZW07IH1cclxuICAuZGVzY3JpcHRpdmUtYW5zd2VycyB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XHJcbiAgLnEtaGVhZC1yb3cgeyBmbGV4LXdyYXA6IHdyYXA7IH1cclxuICAucS1yaWdodCB7IG1hcmdpbi1sZWZ0OiAzLjEyNXJlbTsgfVxyXG59XHJcbi5tYXJrcy1lZGl0LXJvdyB7IGRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGdhcDogMC4zNzVyZW07IH1cclxuLm1hcmtzLXJlYXNvbi1sYWJlbCB7XHJcbiAgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTtcclxuICBmb250LXNpemU6IDAuNzVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4ubWFya3MtcmVhc29uLWxhYmVsIHNwYW4sXHJcbi5tYXJrcy1yZWFzb24tZXJyb3IgeyBjb2xvcjogdmFyKC0tcmVkLXRleHQpOyB9XHJcbi5tYXJrcy1yZWFzb24tZXJyb3Ige1xyXG4gIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICBsaW5lLWhlaWdodDogMS4zNTtcclxufVxyXG4ubWFya3MtZWRpdC1hY3Rpb25zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICBnYXA6IDAuMzc1cmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDEuNzVyZW07XHJcbn1cclxuLm1hcmtzLXJlYXNvbi1pbnB1dCB7IHdpZHRoOiAxMDAlOyBtaW4taGVpZ2h0OiA1cmVtOyBib3gtc2l6aW5nOiBib3JkZXItYm94OyBwYWRkaW5nOiAwLjYyNXJlbTsgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yLCAjZDNkOWUyKTsgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07IGZvbnQ6IGluaGVyaXQ7IGxpbmUtaGVpZ2h0OiAxLjQ7IHJlc2l6ZTogdmVydGljYWw7IH1cclxuLm1hcmtzLXJlYXNvbi1pbnB1dDpmb2N1cyB7IG91dGxpbmU6IG5vbmU7IGJvcmRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzI2N2NmZik7IGJveC1zaGFkb3c6IDAgMCAwIDAuMTI1cmVtIHJnYmEoMzgsMTI0LDI1NSwwLjEyKTsgfVxyXG4ubWFya3MtcmVhc29uLWlucHV0W2FyaWEtaW52YWxpZD1cInRydWVcIl0sXHJcbi5tYXJrcy1yZWFzb24taW5wdXQuaW5wdXQtZXJyb3IgeyBib3JkZXItY29sb3I6ICNkYzM1NDUgIWltcG9ydGFudDsgYm94LXNoYWRvdzogMCAwIDAgMC4xMjVyZW0gcmdiYSgyMjAsIDUzLCA2OSwgMC4yNSkgIWltcG9ydGFudDsgfVxyXG4uaGlzdG9yeS1yZWFzb24geyBtYXJnaW4tdG9wOiAwLjRyZW07IGNvbG9yOiByZ2JhKDAsMCwwLDAuNjgpOyBsaW5lLWhlaWdodDogMS40OyB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDVyZW0pIHtcclxuICAucmVwb3J0LXN1bW1hcnktZ3JpZCB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyBwYWRkaW5nOiAwLjg3NXJlbTsgfVxyXG4gIC5zdW1tYXJ5LWNhcmQgeyBwYWRkaW5nOiAwLjg3NXJlbTsgfVxyXG4gIC5zdW1tYXJ5LW1ldGEgeyB3aGl0ZS1zcGFjZTogbm9ybWFsOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGhlYWQsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHksXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdHIsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGgsXHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGQgeyBkaXNwbGF5OiBibG9jazsgd2lkdGg6IDEwMCU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0aGVhZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ciB7IG1hcmdpbi1ib3R0b206IDAuNzVyZW07IGJvcmRlci1yYWRpdXM6IDAuNjI1cmVtOyBvdmVyZmxvdzogaGlkZGVuOyBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS10aGVtZS0zLWJvcmRlcik7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZCB7IGRpc3BsYXk6IGZsZXg7IGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgYWxpZ24taXRlbXM6IGNlbnRlcjsgdGV4dC1hbGlnbjogbGVmdDsgYm9yZGVyLXJhZGl1czogMDsgYm9yZGVyOiBub25lOyBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdGhlbWUtMy1ib3JkZXIpOyB9XHJcbiAgLndyb25nLXN1bW1hcnktcGFuZWwgLnN1bW1hcnktdGFibGUgdGJvZHkgdGQ6bGFzdC1jaGlsZCB7IGJvcmRlci1ib3R0b206IG5vbmU7IH1cclxuICAud3Jvbmctc3VtbWFyeS1wYW5lbCAuc3VtbWFyeS10YWJsZSB0Ym9keSB0ZDo6YmVmb3JlIHsgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTsgZm9udC13ZWlnaHQ6IDcwMDsgY29sb3I6IHZhcigtLXRoZW1lLTMtdGV4dC0yKTsgbWFyZ2luLXJpZ2h0OiAwLjVyZW07IH1cclxuICAuc2VsZWN0aW9ucyB7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cclxufVxyXG4ubWFudWFsLWNoZWNrLWNoaXAge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZ2FwOiA0cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBwYWRkaW5nOiAzcHggOXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOTc3MDY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmN2VkO1xyXG4gIGNvbG9yOiAjOWEzNDEyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250OiBpbmhlcml0O1xyXG59XHJcblxyXG4ubWFudWFsLWNoZWNrLWNoaXAuc2VsZWN0ZWQgeyBiYWNrZ3JvdW5kOiAjZmZlZGQ1OyBmb250LXdlaWdodDogNjAwOyB9XHJcbi5tYW51YWwtY2hlY2stY2hpcCBtYXQtaWNvbiB7IHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7IGZvbnQtc2l6ZTogMTZweDsgfVxyXG4uZWRpdC1jb21tZW50LXJlYXNvbiB7IGRpc3BsYXk6IGJsb2NrOyB3aWR0aDogMTAwJTsgbWFyZ2luLXRvcDogOHB4OyB9XHJcbi5yZXZpZXctbWV0YSAuZWRpdC1yZWFzb24geyBkaXNwbGF5OiBibG9jazsgbWFyZ2luLXRvcDogMnB4OyB9XHJcbi5zYXZlLWxpbmsuZGlzYWJsZWQgeyBvcGFjaXR5OiAuNDU7IGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cclxuXHJcbi5maWx0ZXJzLXBhbmVsIC5maWx0ZXItaXRlbS5maWx0ZXItaXRlbS0tZnVsbCB7XHJcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBmbGV4OiAwIDAgMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
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