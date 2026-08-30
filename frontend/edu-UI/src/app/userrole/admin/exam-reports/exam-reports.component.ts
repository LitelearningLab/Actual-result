import {
  Component,
  ViewChild,
  ElementRef,
  TemplateRef,
  ViewContainerRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, of, Subscription, forkJoin } from 'rxjs';
import { startWith, map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ConfirmService } from 'src/app/shared/services/confirm.service';
import { API_BASE } from 'src/app/shared/api.config';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TemplatePortal } from '@angular/cdk/portal';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GlobalInstituteContextService } from 'src/app/shared/services/global-institute-context.service';
import { AuthService } from 'src/app/home/service/auth.service';

@Component({
  selector: 'app-exam-reports',
  templateUrl: './exam-reports.component.html',
  styleUrls: ['./exam-reports.component.scss'],
})
export class ExamReportsComponent implements OnInit, OnDestroy {
  @ViewChild('filtersBtn', { read: ElementRef }) filtersBtn!: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;
  isSuperAdmin = false;
  private filtersOverlayRef: OverlayRef | null = null;
  private _subs: Subscription | null = null;
  resetFilters: any = {};
  testNameError = false;
  isUserReportRefreshing = false;
  private searchDebounceTimer: any = null;

  onStudentSearchInput() {
    if (this.searchDebounceTimer) {
      clearTimeout(this.searchDebounceTimer);
    }
    this.searchDebounceTimer = setTimeout(() => {
      this.currentPage = 1;
      this.loadUserReport(1, true);
    }, 300);
  }

  refreshUserReportTable() {
    if (this.isUserReportRefreshing) return;
    this.isUserReportRefreshing = true;

    if (this.activeMainTabIndex === 0) {
      this.loadAnalytics();
    } else {
      this.loadUserReport(this.currentPage || 1);
    }

    setTimeout(() => {
      this.isUserReportRefreshing = false;
    }, 600);
  }

  constructor(
    private http: HttpClient,
    private loading: LoaderService,
    private overlay: Overlay,
    private vcr: ViewContainerRef,
    private pageMeta: PageMetaService,
    private _snack: MatSnackBar,
    private confirm: ConfirmService,
    private globalContextService: GlobalInstituteContextService,
    private dialog: MatDialog,
    private auth: AuthService
  ) {
    try {
      this.isSuperAdmin =
        !!this.auth.currentUserValue &&
        ['super_admin', 'superadmin', 'super-admin'].includes(
          (this.auth.currentUserValue.role || '').toLowerCase()
        );
    } catch (e) {
      this.isSuperAdmin = false;
    }
    this.auth.user$.subscribe((user: any) => {
      try {
        this.isSuperAdmin =
          !!user &&
          ['super_admin', 'superadmin', 'super-admin'].includes((user.role || '').toLowerCase());
      } catch (e) {
        this.isSuperAdmin = false;
      }
    });
  }

  reportsApplied = false;
  appliedFilters: any = null;
  categoryAnalytics: any[] = [];
  questionSummary: any[] = [];
  filteredQuestionSummary: any[] = [];
  wrongDistribution: any[] = [];
  // wrong answer modal state
  showWrongAnswerSummary = false;
  selectedQuestionForWrongSummary: any = null;
  selectedWrongAnswers: Array<{ id: string; answer: string; count?: number; pct?: string } | any> =
    [];
  selectedWrongCombinations: any[] = [];
  // resources modal state
  showResourcePanel = false;
  selectedResources: Array<{
    resource_id?: string;
    full_name?: string;
    email?: string;
    url?: string;
  }> = [];
  selectedResourceContext: any = null; // { question, wrongAnswer }
  // inline wrong answer details expansion state
  expandedWrongAnswer: any = null;
  expandedResources: any[] = [];
  wrongAnswerResourcesLoading = false;
  // user report state
  userReportData: any[] = [];
  userReportTotal = 0;
  // user review panel state
  showUserReviewPanel = false;
  userReviewAttempts: any[] = [];
  userReviewLoading = false;
  selectedUserName: string | null = null;
  selectedUserScore: string | number | null = null;
  selectedUserResult: string | null = null;
  private currentReviewParams: any = null;
  private currentReviewRow: any = null;
  totalQuestions: number | null = null;
  totalMarks: string | number | null = null;
  pageSize = 25;
  currentPage = 1;
  questionPageSize = 20;
  questionCurrentPage = 1;
  searchQuery = '';
  commentEdit = false;
  updatedBy = '';

  // placeholders for template bindings
  examCtrl = new FormControl('');
  instituteCtrl = new FormControl<any>('');
  filteredInstitutes$: Observable<any[]> = of([]);
  filteredTests$: Observable<any[]> = of([]);

  allTests: any[] = [];
  selectedExam: any = null;
  activeMainTabIndex = 0;
  innerAnalyticsTabIndex = 0;
  userFilterOpen = false;
  isGlobalInstituteActive = false;
  get showLocationAndIndustryFilters(): boolean {
    return this.isSuperAdmin && !this.isGlobalInstituteActive;
  }
  get hasAppliedFilters(): boolean {
    return (
      this.reportsApplied &&
      (
        !!this.userFilters.industry ||
        !!this.userFilters.sector ||
        (this.isSuperAdmin && !this.isGlobalInstituteActive && !!this.selectedInstituteName) ||
        !!this.selectedExam ||
        !!this.selectedTestTitle ||
        !!this.userFilters.campus_id ||
        (Array.isArray(this.userFilters.department_id) && this.userFilters.department_id.length > 0) ||
        (Array.isArray(this.userFilters.teams_id) && this.userFilters.teams_id.length > 0) ||
        !!this.userFilters.active_status ||
        !!this.userFilters.created_by_me
      )
    );
  }

  userFilters: any = {
    country_id: '',
    city_id: '',
    industry: '',
    sector: '',
    institute_id: '',
    campus_id: '',
    department_id: [] as string[],
    teams_id: [] as string[],
    schedule_id: '',
    active_status: '',
    created_after: null as Date | string | null,
    created_before: null as Date | string | null,
    created_by_me: false,
    joined_after: null as Date | string | null,
    joined_before: null as Date | string | null,
  };
  selectedCountries: string[] = [];
  selectedCities: string[] = [];
  citySearch = '';
  searchQueries: any = {
    country: '',
    city: '',
    industry: '',
    sector: '',
    institute: '',
    campus: '',
    department: '',
    team: '',
    schedule: '',
    active_status: '',
  };
  countries: any[] = [];
  cities: any[] = [];
  campusList: any[] = [];
  departmentList: any[] = [];
  teamList: any[] = [];
  industryList: string[] = ['School', 'College', 'BPO', 'Bank', 'IT'];
  private sectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };
  activeStatusList: Array<{ value: string; label: string }> = [
    { value: '', label: 'All' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ];
  institutes: Array<{
    id: string;
    name: string;
    industry_type?: string;
    industry_sector?: string;
  }> = [];
  selectedInstituteId: string | null = null;
  selectedInstitutes: string[] = [];
  instituteFilterSearch = '';
  departmentFilterSearch = '';
  teamFilterSearch = '';
  institutesLoading = false;
  countriesLoading = false;
  citiesLoading = false;
  departmentsLoading = false;
  teamsLoading = false;
  campusLoading = false;
  scheduledTestsLoading = false;
  scheduledTestsMessage = '';
  private scheduledTestsRequestId = 0;

  // --- 3-Step Test Selection & Date Range Selection State ---
  selectionMode: 'schedule' | 'daterange' = 'schedule';
  allSchedules: any[] = [];
  uniqueTestNames: string[] = [];
  selectedTestTitle: string = '';
  selectedScheduleDate: Date | null = null;
  highlightedDatesSet: Set<string> = new Set<string>();
  availableSchedulesOnDate: any[] = [];
  selectedScheduleId: string = '';
  selectedDateRangeTestTitle: string = '';
  dateRangeStart: Date | null = null;
  dateRangeEnd: Date | null = null;

  stopFilterSearchEvent(event: Event) {
    event.stopPropagation();
  }

  get displayTestName(): string {
    if (this.selectedExam) {
      return this.getTestTitle(this.selectedExam);
    }
    if (this.selectedTestTitle) {
      return this.selectedTestTitle;
    }
    if (this.selectedDateRangeTestTitle) {
      return this.selectedDateRangeTestTitle;
    }
    if (this.userFilters.schedule_id) {
      const found = (this.allTests || []).find(
        (t) =>
          String(t.schedule_id || t.id || t.scheduleId || t.exam_id) === String(this.userFilters.schedule_id) ||
          this.getTestTitle(t).toLowerCase() === String(this.userFilters.schedule_id).toLowerCase()
      ) || (this.allSchedules || []).find(
        (s) => String(s.schedule_id || s.id || s.scheduleId || s.exam_id) === String(this.userFilters.schedule_id)
      );
      if (found) {
        return this.getTestTitle(found);
      }
    }
    return '';
  }

  formatPercentage(val: any): string {
    if (val === null || val === undefined || val === '') {
      return '0%';
    }
    const str = String(val).trim();
    if (str.endsWith('%')) {
      return str;
    }
    return `${str}%`;
  }

  formatResult(val: any): string {
    if (!val) return '-';
    const str = String(val).trim().toLowerCase();
    if (str === 'failed' || str === 'fail') return 'FAIL';
    if (str === 'passed' || str === 'pass') return 'PASS';
    return String(val).toUpperCase();
  }

  get selectedInstituteName(): string {
    if (!this.selectedInstituteId) return '';
    const found = this.institutes.find((i) => String(i.id) === String(this.selectedInstituteId));
    if (found) return found.name;
    if (this.isGlobalInstituteActive)
      return this.globalContextService.activeInstitute?.institute_name || '';
    return '';
  }

  get filteredInstitutesForFilter() {
    const q = (this.instituteFilterSearch || '').toLowerCase().trim();
    let list = this.institutes || [];

    if (this.userFilters.industry) {
      const targetInd = this.userFilters.industry.toLowerCase().trim();
      list = list.filter((i: any) => {
        const ind = (i.industry_type || '').toLowerCase().trim();
        return !ind || ind === targetInd || ind.includes(targetInd) || targetInd.includes(ind);
      });
    }

    if (this.userFilters.sector) {
      const targetSec = this.userFilters.sector.toLowerCase().trim();
      list = list.filter((i: any) => {
        const sec = (i.industry_sector || '').toLowerCase().trim();
        return !sec || sec === targetSec || sec.includes(targetSec) || targetSec.includes(sec);
      });
    }

    if (q) {
      list = list.filter(
        (i: any) =>
          (i.name || '').toLowerCase().includes(q) ||
          (!!i.id && this.selectedInstitutes.includes(i.id))
      );
    }
    return [...list].sort((a, b) => {
      const aSel = !!a.id && this.selectedInstitutes.includes(a.id);
      const bSel = !!b.id && this.selectedInstitutes.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllInstitutesSelected(): boolean {
    const ids: string[] = (this.filteredInstitutesForFilter || [])
      .map((i) => i.id || '')
      .filter((id): id is string => !!id);
    return ids.length > 0 && ids.every((id) => (this.selectedInstitutes || []).includes(id));
  }

  toggleSelectAllInstitutes() {
    const ids: string[] = (this.filteredInstitutesForFilter || [])
      .map((i) => i.id || '')
      .filter((id): id is string => !!id);
    if (this.isAllInstitutesSelected()) {
      this.selectedInstitutes = [];
    } else {
      this.selectedInstitutes = [...ids];
    }
    this.onInstituteSelectionChange();
  }

  onInstituteSelectionChange() {
    const iid =
      typeof this.userFilters.institute_id === 'string'
        ? this.userFilters.institute_id
        : this.selectedInstitutes[0] || '';
    this.selectedInstituteId = iid || null;
    this.selectedInstitutes = iid ? [iid] : [];
    this.userFilters.institute_id = iid;
    this.onInstituteChange(iid);
  }

  get filteredDepartmentsForFilter(): string[] {
    const q = (this.departmentFilterSearch || '').toLowerCase().trim();
    let list = this.departmentList || [];
    const selected = Array.isArray(this.userFilters.department_id)
      ? this.userFilters.department_id
      : [];
    if (q) {
      list = list.filter((d) => d.toLowerCase().includes(q) || selected.includes(d));
    }
    return [...list].sort((a, b) => {
      const aSel = selected.includes(a);
      const bSel = selected.includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
    });
  }

  isAllDepartmentsSelected(): boolean {
    const list = this.filteredDepartmentsForFilter || [];
    const selected = Array.isArray(this.userFilters.department_id)
      ? this.userFilters.department_id
      : [];
    return list.length > 0 && list.every((d: any) => {
      const val = (typeof d === 'object' && d !== null) ? (d as any).id || (d as any).name : d;
      return selected.includes(val);
    });
  }

  toggleSelectAllDepartments() {
    const list = this.filteredDepartmentsForFilter || [];
    if (this.isAllDepartmentsSelected()) {
      this.userFilters.department_id = [];
    } else {
      this.userFilters.department_id = list.map((d: any) => ((typeof d === 'object' && d !== null) ? (d as any).id || (d as any).name : d));
    }
    this.onFilterSelectionChange();
  }

  get filteredTeamsForFilter(): any[] {
    const q = (this.teamFilterSearch || '').toLowerCase().trim();
    let list = this.teamList || [];
    const selected = Array.isArray(this.userFilters.teams_id) ? this.userFilters.teams_id : [];

    const deptsArr: string[] = (Array.isArray(this.userFilters.department_id)
      ? this.userFilters.department_id
      : [this.userFilters.department_id]
    )
      .filter(Boolean)
      .map((v: any) => String(v));

    if (deptsArr.length > 0) {
      const selectedDeptObjs = (this.departmentList || []).filter(
        (d: any) =>
          deptsArr.includes(String(typeof d === 'object' ? d.id || d.name : d)) ||
          deptsArr.includes(typeof d === 'object' ? d.name : d)
      );
      const deptNames = selectedDeptObjs.map((d: any) =>
        (typeof d === 'object' ? d.name || '' : d).toLowerCase().trim()
      );
      deptsArr.forEach((val) => {
        if (typeof val === 'string' && val.trim()) deptNames.push(val.toLowerCase().trim());
      });

      list = list.filter((t: any) => {
        const teamVal = typeof t === 'object' ? t.id || t.name : t;
        if (selected.includes(teamVal)) return true;

        const teamDeptId = typeof t === 'object' && t.department_id ? String(t.department_id) : '';
        const teamDeptName =
          typeof t === 'object' && t.department_name
            ? (t.department_name || '').toLowerCase().trim()
            : '';

        if (teamDeptId && deptsArr.includes(teamDeptId)) return true;
        if (teamDeptName && deptNames.includes(teamDeptName)) return true;

        return false;
      });
    }

    if (q) {
      list = list.filter((t: any) => {
        const name = typeof t === 'object' ? t.name : t;
        const val = typeof t === 'object' ? t.id || t.name : t;
        return (name || '').toLowerCase().includes(q) || selected.includes(val);
      });
    }

    return [...list].sort((a: any, b: any) => {
      const aVal = typeof a === 'object' ? a.id || a.name : a;
      const bVal = typeof b === 'object' ? b.id || b.name : b;
      const aName = typeof a === 'object' ? a.name : a;
      const bName = typeof b === 'object' ? b.name : b;
      const aSel = selected.includes(aVal);
      const bSel = selected.includes(bVal);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (aName || '').localeCompare(bName || '');
    });
  }

  isAllTeamsSelected(): boolean {
    const list = this.filteredTeamsForFilter || [];
    const selected = Array.isArray(this.userFilters.teams_id) ? this.userFilters.teams_id : [];
    return list.length > 0 && list.every((t) => {
      const val = typeof t === 'object' ? t.id || t.name : t;
      return selected.includes(val);
    });
  }

  toggleSelectAllTeams() {
    const list = this.filteredTeamsForFilter || [];
    if (this.isAllTeamsSelected()) {
      this.userFilters.teams_id = [];
    } else {
      this.userFilters.teams_id = list.map((t) => (typeof t === 'object' ? t.id || t.name : t));
    }
    this.onFilterSelectionChange();
  }

  getTeamDisplayName(teamVal: any): string {
    if (!teamVal) return '';
    const valStr = String(typeof teamVal === 'object' ? teamVal.id || teamVal.name : teamVal);
    const found = (this.teamList || []).find((t: any) => {
      const tId = String(typeof t === 'object' ? t.id || t.name : t);
      const tName = String(typeof t === 'object' ? t.name || t.id : t);
      return tId === valStr || tName === valStr;
    });
    if (found && typeof found === 'object') {
      return found.name || found.id || valStr;
    }
    return valStr;
  }

  getSelectedTeamsDisplay(): string {
    if (!Array.isArray(this.userFilters.teams_id) || !this.userFilters.teams_id.length) return '';
    return this.userFilters.teams_id.map((t: any) => this.getTeamDisplayName(t)).join(', ');
  }

  getDepartmentDisplayName(deptVal: any): string {
    if (!deptVal) return '';
    const valStr = String(typeof deptVal === 'object' ? deptVal.id || deptVal.name : deptVal);
    const found = (this.departmentList || []).find((d: any) => {
      const dId = String(typeof d === 'object' ? d.id || d.name : d);
      const dName = String(typeof d === 'object' ? d.name || d.id : d);
      return dId === valStr || dName === valStr;
    });
    if (found && typeof found === 'object') {
      return found.name || found.id || valStr;
    }
    return valStr;
  }

  getSelectedDepartmentsDisplay(): string {
    if (!Array.isArray(this.userFilters.department_id) || !this.userFilters.department_id.length) return '';
    return this.userFilters.department_id.map((d: any) => this.getDepartmentDisplayName(d)).join(', ');
  }

  get filteredCountriesList(): any[] {
    const q = (this.searchQueries.country || '').toLowerCase().trim();
    let list = this.countries || [];
    if (q) {
      list = list.filter(
        (c) =>
          (c.name || '').toLowerCase().includes(q) ||
          (this.selectedCountries || []).includes(c.code)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedCountries || []).includes(a.code);
      const bSel = (this.selectedCountries || []).includes(b.code);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllCountriesSelected(): boolean {
    const items = this.filteredCountriesList || [];
    return items.length > 0 && items.every((c) => (this.selectedCountries || []).includes(c.code));
  }

  toggleSelectAllCountries(): void {
    const items = this.filteredCountriesList || [];
    if (this.isAllCountriesSelected()) {
      this.selectedCountries = [];
    } else {
      this.selectedCountries = items.map((c) => c.code);
    }
    this.onCountryChange();
  }

  get filteredCitiesList(): any[] {
    const q = (this.searchQueries.city || '').toLowerCase().trim();
    if (!q) return this.cities;
    return (this.cities || []).filter((c) => (c.name || '').toLowerCase().includes(q));
  }

  get filteredIndustryList(): string[] {
    const q = (this.searchQueries.industry || '').toLowerCase().trim();
    if (!q) return this.industryList;
    return (this.industryList || []).filter((i) => i.toLowerCase().includes(q));
  }

  get filteredSectorList(): string[] {
    if (!this.userFilters.industry) return [];
    const sectors = this.sectorMap[this.userFilters.industry] || [];
    const q = (this.searchQueries.sector || '').toLowerCase().trim();
    if (!q) return sectors;
    return sectors.filter((s) => s.toLowerCase().includes(q));
  }

  onIndustryChange(): void {
    const validSectors = this.userFilters.industry
      ? this.sectorMap[this.userFilters.industry] || []
      : [];
    if (!validSectors.includes(this.userFilters.sector)) {
      this.userFilters.sector = '';
    }
    this.loadInstitutes();
    this.onFilterSelectionChange();
  }

  onSectorChange(): void {
    this.loadInstitutes();
    this.onFilterSelectionChange();
  }

  onCampusChange(): void {
    if (!this.userFilters.institute_id && !this.userFilters.campus_id) {
      this.userFilters.department_id = [];
      this.userFilters.teams_id = [];
    }
    this.onFilterSelectionChange();
  }

  get filteredInstitutesList(): Array<{
    id: string;
    name: string;
    industry_type?: string;
    industry_sector?: string;
  }> {
    const q = (this.searchQueries.institute || '').toLowerCase().trim();
    let list = this.institutes || [];

    if (this.userFilters.industry) {
      const targetInd = this.userFilters.industry.toLowerCase().trim();
      list = list.filter((i: any) => {
        const ind = (i.industry_type || '').toLowerCase().trim();
        return !ind || ind === targetInd || ind.includes(targetInd) || targetInd.includes(ind);
      });
    }

    if (this.userFilters.sector) {
      const targetSec = this.userFilters.sector.toLowerCase().trim();
      list = list.filter((i: any) => {
        const sec = (i.industry_sector || '').toLowerCase().trim();
        return !sec || sec === targetSec || sec.includes(targetSec) || targetSec.includes(sec);
      });
    }

    if (!q) return list;
    return list.filter((i: any) => (i.name || '').toLowerCase().includes(q));
  }

  displayInstituteName = (value: string | null): string => {
    if (!value) return '';
    const found = this.institutes.find((i) => String(i.id) === String(value));
    return found ? found.name : String(value);
  };

  onInstituteAutocompleteSelected(id: string) {
    this.userFilters.institute_id = id || '';
    this.selectedInstituteId = id || this.selectedInstituteId;
    this.onInstituteChange(id || '');
  }

  get filteredCampusList(): string[] {
    const q = (this.searchQueries.campus || '').toLowerCase().trim();
    if (!q) return this.campusList;
    return (this.campusList || []).filter((c) => c.toLowerCase().includes(q));
  }

  get filteredDepartmentList(): string[] {
    const q = (this.searchQueries.department || '').toLowerCase().trim();
    if (!q) return this.departmentList;
    return (this.departmentList || []).filter((d) => d.toLowerCase().includes(q));
  }

  get filteredTeamList(): string[] {
    const q = (this.searchQueries.team || '').toLowerCase().trim();
    if (!q) return this.teamList;
    return (this.teamList || []).filter((t) => t.toLowerCase().includes(q));
  }

  getTestTitle = (exam: any): string => {
    if (!exam) return '';
    if (typeof exam === 'string') {
      return exam.replace(/^\d{2}\/\d{2}\/\d{4}\s+\d{2}:\d{2}\s*-\s*/, '').trim();
    }
    const rawTitle =
      exam.exam?.title || exam.exam_title || exam.test_name || exam.title || exam.name || '';
    return String(rawTitle)
      .replace(/^\d{2}\/\d{2}\/\d{4}\s+\d{2}:\d{2}\s*-\s*/, '')
      .trim();
  };

  get filteredScheduleList(): any[] {
    const q = (typeof this.searchQueries.schedule === 'string' ? this.searchQueries.schedule : '')
      .toLowerCase()
      .trim();
    let list = this.allTests || [];

    // Filter by campus if selected
    if (this.userFilters.campus_id) {
      const selectedCampus = String(this.userFilters.campus_id).toLowerCase().trim();
      list = list.filter((t) => {
        const itemCampus = String(t.campus_id || t.campus || t.campus_name || '')
          .toLowerCase()
          .trim();
        return !itemCampus || itemCampus.includes(selectedCampus);
      });
    }

    // Filter by department if specific departments selected (skip filtering if Select All is active)
    if (
      Array.isArray(this.userFilters.department_id) &&
      this.userFilters.department_id.length &&
      !this.isAllDepartmentsSelected()
    ) {
      const selectedDepts: string[] = this.userFilters.department_id.map((d: any) =>
        String(d).toLowerCase().trim()
      );
      list = list.filter((t) => {
        const itemDeptId = String(t.department_id || '').toLowerCase().trim();
        const itemDeptName = String(
          t.department_name || t.department || t.departments || ''
        )
          .toLowerCase()
          .trim();
        if (!itemDeptId && !itemDeptName) return true;
        return selectedDepts.some(
          (sd: string) =>
            (itemDeptId && itemDeptId.includes(sd)) ||
            (itemDeptName && itemDeptName.includes(sd)) ||
            (sd && itemDeptName && sd.includes(itemDeptName))
        );
      });
    }

    // Filter by team if specific teams selected (skip filtering if Select All is active)
    if (
      Array.isArray(this.userFilters.teams_id) &&
      this.userFilters.teams_id.length &&
      !this.isAllTeamsSelected()
    ) {
      const selectedTeams: string[] = this.userFilters.teams_id.map((tm: any) =>
        String(tm).toLowerCase().trim()
      );
      list = list.filter((t) => {
        const itemTeamId = String(t.team_id || '').toLowerCase().trim();
        const itemTeamName = String(t.team_name || t.team || t.teams || '')
          .toLowerCase()
          .trim();
        if (!itemTeamId && !itemTeamName) return true;
        return selectedTeams.some(
          (st: string) =>
            (itemTeamId && itemTeamId.includes(st)) ||
            (itemTeamName && itemTeamName.includes(st)) ||
            (st && itemTeamName && st.includes(itemTeamName))
        );
      });
    }

    if (!q) return list;
    return list.filter((t) => this.getTestTitle(t).toLowerCase().includes(q));
  }

  get filteredActiveStatusList(): Array<{ value: string; label: string }> {
    const q = (this.searchQueries.active_status || '').toLowerCase().trim();
    if (!q) return this.activeStatusList;
    return (this.activeStatusList || []).filter((a) => (a.label || '').toLowerCase().includes(q));
  }

  // --- 3-Step Test Selection Logic ---
  updateUniqueTestNames() {
    const namesSet = new Set<string>();
    (this.allTests || []).forEach((it) => {
      const title = this.getTestTitle(it);
      if (title) namesSet.add(title);
    });
    this.uniqueTestNames = Array.from(namesSet).sort((a, b) => a.localeCompare(b));

    if (this.selectedTestTitle && this.uniqueTestNames.includes(this.selectedTestTitle)) {
      this.updateHighlightedDates();
      this.updateAvailableSchedulesOnDate();
    } else {
      this.selectedTestTitle = '';
      this.selectedScheduleDate = null;
      this.highlightedDatesSet.clear();
      this.availableSchedulesOnDate = [];
      this.selectedScheduleId = '';
    }
  }

  onTestTitleSelect(title: string) {
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
    const items = (this.allSchedules && this.allSchedules.length) ? this.allSchedules : (this.allTests || []);
    items.forEach((it) => {
      if (this.getTestTitle(it).toLowerCase() === this.selectedTestTitle.toLowerCase()) {
        const dateStr = this.getScheduleDateString(it);
        if (dateStr) {
          this.highlightedDatesSet.add(dateStr);
        }
      }
    });
  }

  onScheduleDateSelect(date: Date | null) {
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
    const items = (this.allSchedules && this.allSchedules.length) ? this.allSchedules : (this.allTests || []);
    this.availableSchedulesOnDate = items.filter((it) => {
      return (
        this.getTestTitle(it).toLowerCase() === this.selectedTestTitle.toLowerCase() &&
        this.getScheduleDateString(it) === targetDateStr
      );
    });

    if (this.availableSchedulesOnDate.length > 0) {
      const exists = this.availableSchedulesOnDate.find((s) => {
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

  onScheduleSelectFromId(schedId: string) {
    const sched = (this.availableSchedulesOnDate || []).find(
      (s) => this.getScheduleId(s) === String(schedId)
    );
    if (sched) {
      this.onScheduleSelect(sched);
    }
  }

  onScheduleSelect(schedule: any) {
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

  setSelectionMode(mode: 'schedule' | 'daterange') {
    if (this.selectionMode === mode) return;
    this.selectionMode = mode;
    this.selectedExam = null;
    this.reportsApplied = false;
    this.userReportData = [];
    this.userReportTotal = 0;
    this.categoryAnalytics = [];
    this.questionSummary = [];
    this.wrongDistribution = [];
    this.userFilters.schedule_id = '';

    const activeTitle =
      this.selectedTestTitle ||
      this.selectedDateRangeTestTitle ||
      '';

    if (activeTitle) {
      this.selectedTestTitle = activeTitle;
      this.selectedDateRangeTestTitle = activeTitle;
    }

    if (mode === 'daterange') {
      this.selectedScheduleId = '';
      this.selectedScheduleDate = null;
      this.availableSchedulesOnDate = [];
    } else {
      this.dateRangeStart = null;
      this.dateRangeEnd = null;
      if (this.selectedTestTitle) {
        this.updateHighlightedDates();
        this.updateAvailableSchedulesOnDate();
      }
    }
  }

  onDateRangeTestTitleSelect(title: string) {
    this.selectedTestTitle = title;
    this.selectedDateRangeTestTitle = title;
  }

  onDateRangeApply() {
    const title = this.displayTestName;
    if (!title || !this.dateRangeStart || !this.dateRangeEnd) {
      return;
    }
    const startStr = this.formatDateToYYYYMMDD(this.dateRangeStart);
    const endStr = this.formatDateToYYYYMMDD(this.dateRangeEnd);
    this.userFilters.start_date = startStr;
    this.userFilters.end_date = endStr;
    this.userFilters.created_after = startStr;
    this.userFilters.created_before = endStr;
    this.userFilters.schedule_id = '';
    this.selectedScheduleId = '';
    this.selectedTestTitle = title;
    this.selectedDateRangeTestTitle = title;
    this.selectedExam = {
      isDateRange: true,
      title: title,
      start_date: startStr,
      end_date: endStr,
    };
    this.questionCurrentPage = 1;
    this.currentPage = 1;
    this.reportsApplied = true;
    if (this.activeMainTabIndex === 0) {
      this.loadAnalytics();
    } else {
      this.loadUserReport(1);
    }
  }

  openDateRangeSelectionPicker(): void {
    if (this.dialog.openDialogs.length > 0) return;
    const title = this.displayTestName;
    if (!title) return;
    this.selectedDateRangeTestTitle = title;
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.dateRangeStart,
        endDate: this.dateRangeEnd,
      },
    });

    dialogRef.afterClosed().subscribe((res: DateRangeDialogResult | undefined) => {
      if (res) {
        if (res.startDate === null && res.endDate === null) {
          // User pressed "Clear" inside date dialog
          this.dateRangeStart = null;
          this.dateRangeEnd = null;
        } else if (res.startDate && res.endDate) {
          // User pressed "Apply" with valid dates inside date dialog
          this.dateRangeStart = res.startDate;
          this.dateRangeEnd = res.endDate;
        }
      }
      // If res is undefined (User pressed "Cancel" or backdrop click): state remains unchanged.
    });
  }

  getDateRangeSelectionDisplay(): string {
    if (!this.dateRangeStart && !this.dateRangeEnd) return '';
    const format = (d: any) => {
      if (!d) return '';
      const dt = d instanceof Date ? d : new Date(d);
      if (isNaN(dt.getTime())) return '';
      const dd = String(dt.getDate()).padStart(2, '0');
      const mm = String(dt.getMonth() + 1).padStart(2, '0');
      const yyyy = dt.getFullYear();
      return `${dd}/${mm}/${yyyy}`;
    };
    const startStr = format(this.dateRangeStart);
    const endStr = format(this.dateRangeEnd);
    if (startStr && endStr) return `${startStr} - ${endStr}`;
    if (startStr) return `${startStr} - `;
    return '';
  }


  dateClass = (cellDate: Date, view: string) => {
    if (view === 'month') {
      const dateStr = this.formatDateToYYYYMMDD(cellDate);
      return this.highlightedDatesSet.has(dateStr) ? 'highlighted-schedule-date' : '';
    }
    return '';
  };

  parseScheduleDate(raw: any): Date | null {
    if (!raw) return null;
    if (raw instanceof Date) return isNaN(raw.getTime()) ? null : raw;
    let str = String(raw).trim();
    if (!str) return null;

    // 1) DD/MM/YYYY or DD-MM-YYYY
    const ddMmYyyy = str.match(/^(\d{1,2})[\/\-](\d{1,2})[\/\-](\d{4})(?:\s+(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
    if (ddMmYyyy) {
      const day = Number(ddMmYyyy[1]);
      const month = Number(ddMmYyyy[2]) - 1;
      const year = Number(ddMmYyyy[3]);
      const hour = ddMmYyyy[4] ? Number(ddMmYyyy[4]) : 0;
      const min = ddMmYyyy[5] ? Number(ddMmYyyy[5]) : 0;
      const sec = ddMmYyyy[6] ? Number(ddMmYyyy[6]) : 0;
      const dt = new Date(year, month, day, hour, min, sec);
      if (!isNaN(dt.getTime())) return dt;
    }

    // 2) YYYY-MM-DD or YYYY/MM/DD
    const yyyyMmDd = str.match(/^(\d{4})[\/\-](\d{1,2})[\/\-](\d{1,2})(?:[T\s](\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/);
    if (yyyyMmDd) {
      const year = Number(yyyyMmDd[1]);
      const month = Number(yyyyMmDd[2]) - 1;
      const day = Number(yyyyMmDd[3]);
      const hour = yyyyMmDd[4] ? Number(yyyyMmDd[4]) : 0;
      const min = yyyyMmDd[5] ? Number(yyyyMmDd[5]) : 0;
      const sec = yyyyMmDd[6] ? Number(yyyyMmDd[6]) : 0;
      const dt = new Date(year, month, day, hour, min, sec);
      if (!isNaN(dt.getTime())) return dt;
    }

    // 3) Standard fallback
    const dt = new Date(str);
    if (!isNaN(dt.getTime())) {
      return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate());
    }

    return null;
  }

  getScheduleId(item: any): string {
    if (!item) return '';
    return String(item.schedule_id || item.id || item.scheduleId || '');
  }

  getScheduleDateString(item: any): string {
    if (!item) return '';
    const raw = item.start_time || item.start_date || item.created_date || item.date || item.schedule_date || item.exam_date;
    const dt = this.parseScheduleDate(raw);
    if (!dt) return '';
    return this.formatDateToYYYYMMDD(dt);
  }

  formatDateToYYYYMMDD(dt: Date | null | undefined): string {
    if (!dt) return '';
    const yyyy = dt.getFullYear();
    const mm = String(dt.getMonth() + 1).padStart(2, '0');
    const dd = String(dt.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }


  getScheduleTimeString(item: any): string {
    if (!item) return '';
    const raw = item.start_time || item.start_date || item.created_date || item.date || item.schedule_date;
    const dt = this.parseScheduleDate(raw);
    if (!dt) return '';
    const hh = String(dt.getHours()).padStart(2, '0');
    const mm = String(dt.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  getScheduleDisplayLabel(item: any): string {
    if (!item) return '';
    const name = item.title || item.schedule_name || item.name || this.getTestTitle(item);
    return `${name}`;
  }

  onSelectOpened(opened: boolean, field: string) {
    if (opened && field && this.searchQueries.hasOwnProperty(field)) {
      this.searchQueries[field] = '';
    }
  }

  onFilterSelectionChange() {
    // Draft filter state in panel; filters applied on click of Apply button
  }

  // simple pagination controls without MatPaginator binding
  loadingUserReport = false;

  isAttemptedRow(row: any): boolean {
    if (!row) return false;
    const res = String(row.result || row.status || '').trim().toLowerCase();
    const hasDate = Boolean(row.test_taken_date && row.test_taken_date !== '-');
    const isCompleted = Boolean(row.attempted || row.completed || hasDate);
    if (res === 'no attempt' || res === 'no_attempt' || res === 'unattempted') {
      return false;
    }
    return isCompleted || (!!row.result && res !== '-');
  }

  get displayedUserReportData(): any[] {
    if (!this.userReportData) return [];
    return this.userReportData.filter(row => this.isAttemptedRow(row));
  }

  get hasAttemptedUsers(): boolean {
    return this.displayedUserReportData.length > 0;
  }

  get totalPages(): number {
    return Math.max(1, Math.ceil((this.displayedUserReportData.length || 0) / this.pageSize));
  }

  get userAverageScore(): number {
    const scores = (this.displayedUserReportData || [])
      .map((row: any) => this.toMetricNumber(row.marks_obtained ?? row.score ?? row.marks))
      .filter((value: number) => value > 0);
    return scores.length
      ? scores.reduce((sum: number, value: number) => sum + value, 0) / scores.length
      : 0;
  }

  get userPassRate(): number {
    const rows = this.displayedUserReportData || [];
    const passed = rows.filter(
      (row: any) => String(row.result || row.status || '').toLowerCase() === 'pass'
    ).length;
    return rows.length ? (passed / rows.length) * 100 : 0;
  }

  get analyticsTotalAttempts(): number {
    return (this.categoryAnalytics || []).reduce(
      (sum: number, item: any) => sum + this.toMetricNumber(item.total_attempts ?? item.attempts),
      0
    );
  }

  get analyticsMistakeCount(): number {
    return (this.categoryAnalytics || []).reduce(
      (sum: number, item: any) =>
        sum + this.toMetricNumber(item.wrong_answers ?? item.mistakes ?? item.wrong_count),
      0
    );
  }

  get activeQuestionCount(): number {
    return (
      this.filteredQuestionSummary && this.filteredQuestionSummary.length
        ? this.filteredQuestionSummary
        : this.questionSummary || []
    ).length;
  }

  selectedCategoryFilterName: string = '';

  openCategoryQuestionSummary(category: any) {
    if (!category) return;
    const cid = String(
      category.category_id || category.id || category._id || category.categoryId || ''
    );
    if (!cid) return;
    this.selectedCategoryFilterName =
      category.category_name || category.name || 'Selected Category';
    this.activeMainTabIndex = 0;
    this.questionCurrentPage = 1;
    if (this.questionSummary && this.questionSummary.length) {
      this.filteredQuestionSummary = (this.questionSummary || []).filter(
        (q: any) => this._getQuestionCategoryId(q) === cid
      );
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

  openCreatedDateRangePicker(): void {
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.userFilters.created_after,
        endDate: this.userFilters.created_before,
      },
    });

    dialogRef.afterClosed().subscribe((res: DateRangeDialogResult | undefined) => {
      if (res) {
        this.userFilters.created_after = res.startDate;
        this.userFilters.created_before = res.endDate;
      }
    });
  }

  getCreatedDateRangeDisplay(): string {
    const start = this.userFilters.created_after;
    const end = this.userFilters.created_before;
    if (!start && !end) return '';
    const format = (d: any) => {
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

  private _pendingCategoryFilter: string | null = null;

  // Robustly extract a category id from different question shapes.
  private _getQuestionCategoryId(q: any): string {
    if (!q) return '';
    const cat = q.category;
    if (cat && typeof cat === 'object') {
      return String(
        cat.id || cat._id || cat.category_id || cat.categoryId || cat.cat_id || ''
      ).trim();
    }
    if (Array.isArray(q.category_id) && q.category_id.length)
      return String(q.category_id[0]).trim();
    return String(q.category_id ?? q.category ?? q.categoryId ?? q.cat_id ?? q.catId ?? '').trim();
  }

  private toMetricNumber(value: any): number {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : 0;
  }

  private _normalizeSelectedOption(selected: any): string[] {
    if (!selected && selected !== 0) return [];
    try {
      if (Array.isArray(selected)) {
        return selected
          .map((s) => (s !== null && s !== undefined ? String(s).trim() : ''))
          .filter(Boolean);
      }
      if (typeof selected === 'string') {
        try {
          const parsed = JSON.parse(selected);
          if (Array.isArray(parsed)) {
            return parsed
              .map((s) => (s !== null && s !== undefined ? String(s).trim() : ''))
              .filter(Boolean);
          }
        } catch (e) {}
        return selected
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
      }
      return [String(selected)];
    } catch (e) {
      return [];
    }
  }

  reviewComments(q: any, categories: string | string[]): any[] {
    try {
      const comments =
        q && q.review_comment && Array.isArray(q.review_comment.comments)
          ? q.review_comment.comments
          : [];
      if (!comments || !comments.length) return [];
      const cats = Array.isArray(categories) ? categories.map(String) : [String(categories)];
      const normalized = cats.map((c) => (c || '').toString().toLowerCase());
      return (comments || []).filter((c: any) =>
        normalized.includes(((c && c.category) || '').toString().toLowerCase())
      );
    } catch (e) {
      return [];
    }
  }

  openUserReview(row: any) {
    if (!row) return;
    const resVal = String(row.result || row.status || '').trim().toLowerCase();
    if (resVal === 'no attempt' || resVal === 'no_attempt' || resVal === 'unattempted') {
      this._snack.open('This student has not attempted the test yet.', 'Close', { duration: 4000 });
      return;
    }
    this.currentReviewRow = row;
    try {
      this.selectedUserName =
        row.student_name || row.name || row.user_name || row.full_name || null;
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
    const scheduleId = String(
      row.schedule_id || row.scheduleId || row.scheduler_id || this.selectedExam?.schedule_id || this.selectedExam?.id || this.selectedExam?.scheduleId || ''
    );
    if (!userId) return;
    const params: any = { user_id: String(userId) };
    if (scheduleId) {
      params.scheduler_id = scheduleId;
    }
    this.currentReviewParams = params;
    if (typeof navigator !== 'undefined' && !navigator.onLine) {
      const snack = this._snack.open('You appear to be offline. Retry?', 'Retry', {
        duration: 10000,
      });
      snack.onAction().subscribe(() => this.fetchUserReview(params));
      return;
    }
    this.fetchUserReview(params);
  }


  retryEvaluation(q: any, attempt: any): void {
    const attemptId = attempt?.attempt_id;
    if (!attemptId || q?._retryingEvaluation || attempt?._retryingEvaluation) return;
    attempt._retryingEvaluation = true;
    if (q) q._retryingEvaluation = true;
    this.http.post<any>(`${API_BASE}/validate-answers/${attemptId}`, {}).subscribe({
      next: (res: any) => {
        attempt._retryingEvaluation = false;
        if (q) q._retryingEvaluation = false;
        const message =
          res?.status === false
            ? res?.statusMessage || 'AI evaluation could not be completed.'
            : 'AI evaluation completed.';
        this._snack.open(message, 'Close', { duration: res?.status === false ? 5000 : 3000 });
        if (this.currentReviewParams) this.fetchUserReview(this.currentReviewParams);
      },
      error: (err: any) => {
        attempt._retryingEvaluation = false;
        if (q) q._retryingEvaluation = false;
        const message = err?.error?.statusMessage || 'AI evaluation could not be completed.';
        this._snack.open(message, 'Close', { duration: 5000 });
      },
    });
  }

  hasPendingEvaluation(attempt: any): boolean {
    const questions = attempt?.review || attempt?.questions || [];
    return questions.some(
      (q: any) =>
        (q.question_type || q.type) === 'descriptive' &&
        (q.evaluation_status === 'pending' || q.evaluation_status === 'failed')
    );
  }

  private fetchUserReview(params: any) {
    console.log('[fetchUserReview] Re-fetching review with params:', params);
    this.userReviewLoading = true;
    this.loading.show();
    this.http.get<any>(`${API_BASE}/review-user-exam`, { params }).subscribe({
      next: (res: any) => {
        console.log('[fetchUserReview] Received review data response:', res);
        try {
          const body = res || {};
          let attempts: any[] = [];
          if (Array.isArray(body.data)) {
            attempts = body.data;
          } else if (Array.isArray(body)) {
            attempts = body as any[];
          } else if (Array.isArray(body?.data?.data)) {
            attempts = body.data.data;
          } else if (Array.isArray(body?.attempts)) {
            attempts = body.attempts;
          }

          this.userReviewAttempts = (attempts || []).map((a) => {
            const reviewList = a.review || a.questions || a.attempt_review || [];
            const normalizedReview = (Array.isArray(reviewList) ? reviewList : []).map((q: any) => {
              try {
                q.selected_option = this._normalizeSelectedOption(
                  q.selected_option || q.selected_options || q.selected || []
                );
                if (!Array.isArray(q.options) && q.options && typeof q.options === 'object') {
                  q.options = Object.keys(q.options).map((k) => q.options[k]);
                }
              } catch (e) {}
              return q;
            });
            return { ...a, review: normalizedReview };
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
            if (
              first.total_marks !== undefined ||
              first.totalMarks !== undefined ||
              first.total !== undefined
            ) {
              this.totalMarks =
                first.total_marks ?? first.totalMarks ?? first.total ?? this.totalMarks;
            }
            if (first.total_questions !== undefined || first.totalQuestions !== undefined) {
              this.totalQuestions =
                first.total_questions ?? first.totalQuestions ?? this.totalQuestions;
            }
          }
        } catch (e) {
          console.warn('Failed to parse review-user-exam response', e);
          this.userReviewAttempts = [];
        }
        this.loading.hide();
        this.userReviewLoading = false;
        if (!this.userReviewAttempts || !this.userReviewAttempts.length) {
          this._snack.open('No review data available for this user.', 'Close', { duration: 4000 });
          this.showUserReviewPanel = false;
        } else {
          this.showUserReviewPanel = true;
        }
      },
      error: (err: any) => {
        console.error('[TestReports] review-user-exam failed', err);
        this.userReviewLoading = false;
        this.userReviewAttempts = [];
        if (err && err.status === 0) {
          const snack = this._snack.open(
            'Network or server unreachable — check backend and network.',
            'Retry',
            { duration: 8000 }
          );
          snack.onAction().subscribe(() => {
            this.fetchUserReview(params);
          });
        } else {
          const msg =
            err && err.error && err.error.statusMessage
              ? err.error.statusMessage
              : err && err.message
                ? err.message
                : 'Failed to load review data.';
          this._snack.open(msg, 'Close', { duration: 5000 });
        }
        this.showUserReviewPanel = false;
        this.loading.hide();
      },
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

  startEditMarks(q: any) {
    if (!q) return;
    q._editingMarks = true;
    q._editedMarks = q.marks_awarded ?? 0;
    q._marksEditReason = '';
    q._marksReasonTouched = false;
    q._marksReasonError = false;
  }

  cancelEditMarks(q: any) {
    if (!q) return;
    q._editingMarks = false;
    q._editedMarks = undefined;
    q._marksEditReason = undefined;
    q._marksReasonTouched = undefined;
    q._marksReasonError = false;
  }

  saveMarks(q: any, row?: any) {
    if (!q) return;
    const newMarks = parseFloat(q._editedMarks);
    if (isNaN(newMarks) || newMarks < 0) {
      this._snack.open('Please enter a valid mark value', 'Close', { duration: 3000 });
      return;
    }
    const maxMarks = q.question_marks || q.marks || 0;
    if (newMarks > maxMarks) {
      this._snack.open(`Marks cannot exceed ${maxMarks}`, 'Close', { duration: 3000 });
      return;
    }
    const editReason = String(q._marksEditReason || '').trim();
    if (!editReason) {
      q._marksReasonError = true;
      this._snack.open('Description is required when changing marks', 'Close', { duration: 3000 });
      return;
    }
    q._marksReasonError = false;

    const answerID = q.answer_id || null;

    const raw =
      sessionStorage.getItem('user_profile') ||
      sessionStorage.getItem('user') ||
      sessionStorage.getItem('user_info') ||
      localStorage.getItem('user_profile') ||
      localStorage.getItem('user') ||
      localStorage.getItem('user_info');
    let updatedBy = '';
    let updatedByName = 'Admin User';
    if (raw) {
      try {
        const u = JSON.parse(raw);
        updatedBy = u.user_id || u.id || u.userId || u._id || '';
        updatedByName =
          u.full_name || u.fullName || u.name || u.user_name || updatedBy || 'Admin User';
      } catch (e) {}
    }

    if (!answerID) {
      console.warn('[saveMarks] Missing answer ID:', { answerID });
      this._snack.open('Missing answer ID', 'Close', { duration: 3000 });
      return;
    }

    console.log('[saveMarks] Triggered with item:', {
      question_id: q.question_id,
      answer_id: answerID,
      editedMarks: newMarks,
      reason: editReason,
    });

    const payload = {
      answer_id: String(answerID),
      marks_awarded: newMarks,
      updated_by: updatedBy,
      edit_reason: editReason,
    };

    console.log('[saveMarks] Sending payload to /update-descriptive-marks:', payload);

    this.loading.show();
    this.http.post<any>(`${API_BASE}/update-descriptive-marks`, payload).subscribe({
      next: (res: any) => {
        console.log('[saveMarks] Backend responded SUCCESS:', res);
        this.loading.hide();
        const oldMarks = q.marks_awarded || 0;
        const oldReason = q.edit_reason || '';
        q.marks_history = Array.isArray(q.marks_history) ? q.marks_history : [];
        q.marks_history.unshift({
          marks_awarded: oldMarks,
          updated_by: q.updated_by || 'System',
          updated_date: q.updated_date,
          edit_reason: oldReason,
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

        this._snack.open('Marks updated successfully', 'Close', { duration: 3000 });

        if (this.currentReviewParams) {
          this.fetchUserReview(this.currentReviewParams);
        }
      },
      error: (err: any) => {
        this.loading.hide();
        console.error('Failed to update marks', err);
        const msg = err?.error?.statusMessage || err?.message || 'Failed to update marks.';
        this._snack.open(msg, 'Close', { duration: 5000 });
      },
    });
  }

  startEditComment(rc: any) {
    if (!rc) return;
    rc._editing = true;
    rc._editedText = rc.comment_text || rc.comment || '';
    rc._editReason = '';
    this.commentEdit = true;
  }

  cancelEditComment(rc: any) {
    if (!rc) return;
    rc._editing = false;
    rc._editedText = undefined;
    rc._editReason = undefined;
    this.commentEdit = !!this.userReviewAttempts?.some((att: any) =>
      (att.review || []).some((q: any) =>
        (q.review_comment?.comments || []).some((c: any) => c._editing)
      )
    );
  }

  isCommentEdited(c: any): boolean {
    if (!c) return false;
    if (c._isEdited) return true;
    if (c.action === 'edit') return true;
    if (c.edited_by && (c.edited_at || c.updated_date)) return true;
    return false;
  }

  saveReviewComment(rc: any) {
    if (!rc) return;
    const newText = (rc._editedText || '').toString().trim();
    if (newText.length === 0) {
      this._snack.open('Comment cannot be empty', 'Close', { duration: 3000 });
      return;
    }

    const raw =
      sessionStorage.getItem('user_profile') ||
      sessionStorage.getItem('user') ||
      sessionStorage.getItem('user_info');
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

  requiresEditReason(rc: any): boolean {
    return false;
  }

  confirmDeleteComment(rc: any) {
    if (!rc) return;
    this.confirm
      .confirm({
        title: 'Delete comment',
        message: 'Are you sure you want to delete this review comment?',
      })
      .subscribe((confirmed: any) => {
        if (confirmed)
          this.updateReviewComment(
            'delete',
            rc,
            rc._editedText || rc.comment_text || rc.comment || ''
          );
      });
  }

  private updateReviewComment(
    action: 'edit' | 'delete',
    rc: any,
    text: string,
    editReason: string = ''
  ) {
    if (!rc) return;
    const commentId = rc.comment_id || rc.id || rc._id || rc.commentId || rc.cid || null;
    if (!commentId) {
      this._snack.open('Comment id not found', 'Close', { duration: 3000 });
      return;
    }
    const raw =
      sessionStorage.getItem('user_profile') ||
      sessionStorage.getItem('user') ||
      sessionStorage.getItem('user_info');
    const historyId = rc.history_id || rc.hid || rc._hid || null;
    let userId = '';
    let userName = 'Instructor';
    if (raw) {
      const u = JSON.parse(raw);
      userId = u.user_id || u.id || u.userId || u._id || '';
      userName = u.full_name || u.fullName || u.name || u.user_name || userId || 'Instructor';
    }
    this.updatedBy = userId;
    const payload: any = {
      comment_id: String(commentId),
      history_id: historyId ? String(historyId) : '',
      text: text || '',
      updated_by: this.updatedBy,
      edit_reason: editReason,
    };
    this.loading.show();
    this.http.post<any>(`${API_BASE}/update-review-comments/${action}`, payload).subscribe({
      next: (res: any) => {
        this.loading.hide();
        this._snack.open(action === 'edit' ? 'Comment updated' : 'Comment deleted', 'Close', {
          duration: 3000,
        });
        if (this.currentReviewParams) {
          this.fetchUserReview(this.currentReviewParams);
        }
      },
      error: (err: any) => {
        this.loading.hide();
        console.error('Failed to update review comment', err);
        const msg =
          err && err.error && err.error.statusMessage
            ? err.error.statusMessage
            : err && err.message
              ? err.message
              : 'Failed to update comment.';
        this._snack.open(msg, 'Close', { duration: 5000 });
      },
    });
  }

  toggleManualReview(q: any): void {
    if (!q?.answer_id) return;
    const previous = !!q.manual_review_required;
    q.manual_review_required = !previous;
    this.http
      .put<any>(`${API_BASE}/update-manual-review-status`, {
        answer_id: q.answer_id,
        manual_review_required: q.manual_review_required,
      })
      .subscribe({
        error: (err: any) => {
          q.manual_review_required = previous;
          this._snack.open(err?.error?.statusMessage || 'Failed to update manual check', 'Close', {
            duration: 4000,
          });
        },
      });
  }

  onApply(payload: any) {
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
      this._snack.open('Please select an Institute first', 'Close', { duration: 3000 });
      return;
    }

    if (!this.isGlobalInstituteActive && this.userFilters.institute_id) {
      if (this.selectedInstituteId !== this.userFilters.institute_id) {
        this.selectedInstituteId = this.userFilters.institute_id;
        const found = this.institutes.find((i) => i.id === this.selectedInstituteId);
        if (found) {
          try {
            this.instituteCtrl.setValue(found as any);
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

    const selectedVal = String(this.userFilters.schedule_id || '').trim();

    if (!selectedVal) {
      this.testNameError = true;
      this._snack.open('Test Name is mandatory. Please select a Test Name.', 'Close', { duration: 4000 });
      return;
    }
    this.testNameError = false;

    const selectedTest = (this.allTests || []).find(
        (t: any) =>
          String(this.getScheduleValue(t)) === selectedVal ||
          String(t.schedule_id || t.id || t.scheduleId || t.exam_id) === selectedVal ||
          this.getTestTitle(t).toLowerCase() === selectedVal.toLowerCase()
      );

    const title = selectedTest ? this.getTestTitle(selectedTest) : selectedVal;
    this.selectedTestTitle = title;
    this.selectedDateRangeTestTitle = title;
    if (selectedTest) {
      this.selectedExam = selectedTest;
      try {
        this.examCtrl.setValue(selectedTest);
      } catch (e) {}
    }
    this.onTestTitleSelect(title);

    this.questionCurrentPage = 1;
    this.currentPage = 1;

    if (this.selectedExam || this.selectedTestTitle) {
      this.reportsApplied = true;
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

    Object.keys(this.searchQueries).forEach((k) => (this.searchQueries[k] = ''));

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
    this.selectionMode = 'schedule';
    this.selectedDateRangeTestTitle = '';
    this.dateRangeStart = null;
    this.dateRangeEnd = null;
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

  displayTest = (exam: any): string => {
    return this.getTestTitle(exam);
  };

  onTestFilterSelected(val: any) {
    this.searchQueries.schedule = '';
    const rawVal = typeof val === 'object' && val !== null ? (val.schedule_id || val.id || val.scheduleId || val.exam_id || val.title || '') : val;
    const valStr = String(rawVal || '').trim();

    if (!valStr) {
      this.selectedTestTitle = '';
      this.selectedDateRangeTestTitle = '';
      this.selectedExam = null;
      this.userFilters.schedule_id = '';
      this.selectedScheduleDate = null;
      this.highlightedDatesSet.clear();
      this.availableSchedulesOnDate = [];
      this.selectedScheduleId = '';
      return;
    }

    const found = (this.allTests || []).find(
      (t: any) =>
        String(this.getScheduleValue(t)) === valStr ||
        String(t.schedule_id || t.id || t.exam_id) === valStr ||
        this.getTestTitle(t).toLowerCase() === valStr.toLowerCase()
    );

    const title = found ? this.getTestTitle(found) : valStr;
    this.selectedTestTitle = title;
    this.selectedDateRangeTestTitle = title;
    this.userFilters.schedule_id = valStr;
    this.onTestTitleSelect(title);
  }

  onTestAutocompleteSelected(exam: any) {
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

  private loadInstitutes() {
    const url = `${API_BASE}/institutes/list`;
    const params: any = {};
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

    this.institutesLoading = true;
    this.http.get<any>(url, { params }).subscribe({
      next: (res: any) => {
        this.institutesLoading = false;
        const list = Array.isArray(res) ? res : res?.institutes || res?.data || [];
        this.institutes = (list || [])
          .map((i: any) => ({
            id: String(i.id || i.institute_id || i._id || ''),
            name: i.name || i.institute || 'Institute',
            industry_type: i.industry_type || i.industry || i.industry_name || '',
            industry_sector: i.industry_sector || i.sector || i.sector_name || '',
          }))
          .filter((i: any) => !!i.id);

        const available = this.filteredInstitutesList;
        if (
          this.userFilters.institute_id &&
          !available.some((i: any) => String(i.id) === String(this.userFilters.institute_id))
        ) {
          this.onInstituteChange('');
        }

        try {
          this.filteredInstitutes$ = this.instituteCtrl.valueChanges.pipe(
            startWith(''),
            map((val: any) => {
              const q = (typeof val === 'string' ? val : val?.name || '').toLowerCase();
              return (this.filteredInstitutesList || []).filter((it: any) =>
                (it.name || '').toLowerCase().includes(q)
              );
            })
          );
        } catch (e) {
          this.filteredInstitutes$ = of(this.filteredInstitutesList || []);
        }

        const globalInstId = this.globalContextService.activeInstituteId;
        const userInstId =
          this.auth.currentUserValue?.institute_id ||
          sessionStorage.getItem('global_institute_id') ||
          sessionStorage.getItem('institute_id') ||
          sessionStorage.getItem('instituteId') ||
          localStorage.getItem('institute_id');

        if (globalInstId) {
          this.isGlobalInstituteActive = true;
          this.selectedInstituteId = String(globalInstId);
          this.userFilters.institute_id = String(globalInstId);
          this.onInstituteChange(String(globalInstId));
        } else if (!this.isSuperAdmin) {
          const defaultInstId = userInstId
            ? String(userInstId)
            : this.institutes && this.institutes.length > 0
              ? this.institutes[0].id
              : '';
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
          const selected = this.institutes.find((i) => i.id === this.selectedInstituteId);
          if (selected) {
            try {
              this.instituteCtrl.setValue(selected as any);
            } catch (e) {}
          }
        }
      },
      error: (err: any) => {
        this.institutesLoading = false;
        console.warn('Failed to load institutes', err);
      },
    });
  }

  onInstituteSelected(inst: any) {
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

  displayInstitute(i: any) {
    return i ? i.name : '';
  }
  onInstituteChange(id: string | null) {
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
    this.countriesLoading = true;
    this.http.get<any>(`${API_BASE}/location-hierarchy`).subscribe({
      next: (locRes: any) => {
        const locationCountries =
          locRes?.data?.countries || locRes?.countries || locRes?.data || [];
        this.http.get<any>(`${API_BASE}/get-institutes`).subscribe({
          next: (instRes: any) => {
            this.countriesLoading = false;
            try {
              const institutes = Array.isArray(instRes?.data)
                ? instRes.data
                : Array.isArray(instRes)
                  ? instRes
                  : [];
              const hierarchyCountries = (locationCountries || [])
                .map((country: any) => ({
                  code: country.country_code || country.code || country.id,
                  name: country.country_name || country.name || country.country,
                }))
                .filter((country: any) => country.code && country.name);

              const registeredCountries: Array<{ code: string; name: string }> = [];
              institutes.forEach((institute: any) => {
                const locations = [
                  institute,
                  ...(Array.isArray(institute?.campuses) ? institute.campuses : []),
                ];
                locations.forEach((location: any) => {
                  const rawCountry = location?.country;
                  const countryCode =
                    location?.country_id ||
                    location?.country_code ||
                    (typeof rawCountry === 'object'
                      ? rawCountry?.country_id ||
                        rawCountry?.id ||
                        rawCountry?.country_code ||
                        rawCountry?.code
                      : rawCountry);
                  const countryName =
                    location?.country_name ||
                    (typeof rawCountry === 'object'
                      ? rawCountry?.country_name || rawCountry?.name || rawCountry?.country
                      : rawCountry);
                  const hierarchyMatch = hierarchyCountries.find(
                    (country: any) =>
                      (countryCode &&
                        String(country.code).toLowerCase() === String(countryCode).toLowerCase()) ||
                      (countryName &&
                        String(country.name).trim().toLowerCase() ===
                          String(countryName).trim().toLowerCase())
                  );
                  const resolved =
                    hierarchyMatch ||
                    (countryCode && countryName ? { code: countryCode, name: countryName } : null);
                  if (resolved)
                    registeredCountries.push({
                      code: String(resolved.code),
                      name: String(resolved.name).trim(),
                    });
                });
              });

              const uniqueByName = new Map<string, { code: string; name: string }>();
              registeredCountries.forEach((country) => {
                const key = country.name.toLowerCase();
                if (!uniqueByName.has(key)) uniqueByName.set(key, country);
              });
              this.countries = Array.from(uniqueByName.values()).sort((a, b) =>
                a.name.localeCompare(b.name)
              );
            } catch (e) {
              this.countries = [];
            }
          },
          error: () => {
            this.countriesLoading = false;
            this.countries = [];
          },
        });
      },
      error: () => {
        this.countriesLoading = false;
        this.countries = [];
      },
    });
  }

  onCountryChange() {
    this.cities = [];
    this.selectedCities = [];
    this.userFilters.city_id = '';
    const selectedCountryCodes =
      this.selectedCountries && this.selectedCountries.length
        ? this.selectedCountries
        : this.userFilters.country_id
          ? [this.userFilters.country_id]
          : [];

    if (!selectedCountryCodes.length) {
      this.loadInstitutes();
      return;
    }

    const toTitleCase = (str: string) =>
      str
        ? str
            .trim()
            .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
        : '';

    const requests = selectedCountryCodes.map((code) =>
      this.http.get<any>(`${API_BASE}/location-hierarchy`, { params: { country_id: code } })
    );

    this.citiesLoading = true;
    forkJoin(requests).subscribe({
      next: (responses: any[]) => {
        this.citiesLoading = false;
        const uniqueMap = new Map<string, { code: string; name: string }>();
        responses.forEach((res: any) => {
          let rawCities: any[] = res?.data?.cities || res?.cities || [];
          (rawCities || []).forEach((c: any) => {
            const rawName = c.city_name || c.name || c.city || '';
            if (rawName) {
              const formatted = toTitleCase(rawName);
              if (!uniqueMap.has(formatted.toLowerCase())) {
                uniqueMap.set(formatted.toLowerCase(), { code: formatted, name: formatted });
              }
            }
          });
        });

        this.cities = Array.from(uniqueMap.values()).sort((a, b) => a.name.localeCompare(b.name));
        this.loadInstitutes();
      },
      error: () => {
        this.citiesLoading = false;
        this.cities = [];
        this.loadInstitutes();
      },
    });
  }

  get filteredCities(): Array<{ code: string; name: string }> {
    const term = (this.citySearch || '').trim().toLowerCase();
    let list = this.cities || [];
    if (term) {
      list = list.filter(
        (c) =>
          (c.name || '').toLowerCase().includes(term) ||
          (this.selectedCities || []).includes(c.name)
      );
    }
    return [...list].sort((a, b) => {
      const aSel = (this.selectedCities || []).includes(a.name);
      const bSel = (this.selectedCities || []).includes(b.name);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });
  }

  isAllCitiesSelected(): boolean {
    const items = this.filteredCities || [];
    return items.length > 0 && items.every((c) => (this.selectedCities || []).includes(c.name));
  }

  toggleSelectAllCities(): void {
    const items = this.filteredCities || [];
    if (this.isAllCitiesSelected()) {
      this.selectedCities = [];
    } else {
      this.selectedCities = items.map((c) => c.name);
    }
    this.onCityFilterChange();
  }

  onCityFilterChange() {
    this.loadInstitutes();
  }

  loadDepartmentList(instituteId: string | null) {
    this.departmentList = [];
    if (!instituteId) {
      this.departmentsLoading = false;
      return;
    }
    this.departmentsLoading = true;
    const url = `${API_BASE}/get-department-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url).subscribe({
      next: (res: any) => {
        this.departmentsLoading = false;
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.departmentList = arr
          .map((d: any) => (d.name || d.department_name || d.department || d).toString())
          .filter((s: any) => !!s);
      },
      error: (err: any) => {
        this.departmentsLoading = false;
        console.warn('Failed to load department list', err);
        this.departmentList = [];
      },
    });
  }

  loadTeamsList(instituteId: string | null) {
    this.teamList = [];
    if (!instituteId) {
      this.teamsLoading = false;
      return;
    }
    this.teamsLoading = true;
    const url = `${API_BASE}/get-teams-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url).subscribe({
      next: (res: any) => {
        this.teamsLoading = false;
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.teamList = arr
          .map((t: any) => ({
            id: t.team_id || t.id || t.teamId || (t.name || t.team_name || t.team || t).toString(),
            name: (t.name || t.team_name || t.team || t).toString(),
            department_id: t.department_id || t.departmentId || t.dept_id || null,
            department_name: t.department_name || t.department || null,
          }))
          .filter((s: any) => !!s.name);
      },
      error: (err: any) => {
        this.teamsLoading = false;
        console.warn('Failed to load teams list', err);
        this.teamList = [];
      },
    });
  }

  loadCampusList(instituteId: string | null) {
    this.campusList = [];
    if (!instituteId) {
      this.campusLoading = false;
      return;
    }
    this.campusLoading = true;
    const url = `${API_BASE}/get-campus-list?institute_id=${encodeURIComponent(instituteId)}`;
    this.http.get<any>(url).subscribe({
      next: (res: any) => {
        this.campusLoading = false;
        console.debug('[TestReports] get-campus-list response for', instituteId, res);
        const arr = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        this.campusList = arr
          .map((c: any) => (c.name || c.campus_name || c.campus || c).toString())
          .filter((s: any) => !!s);
      },
      error: (err: any) => {
        this.campusLoading = false;
        console.warn('Failed to load campus list', err);
        this.campusList = [];
      },
    });
  }

  private resetSelectedExam(): void {
    this.selectedExam = null;
    this.examCtrl.setValue('');
    this.selectedTestTitle = '';
    this.selectedScheduleDate = null;
    this.highlightedDatesSet.clear();
    this.availableSchedulesOnDate = [];
    this.selectedScheduleId = '';
    this.allTests = [];
    this.filteredTests$ = of([]);
    this.userReportData = [];
    this.userReportTotal = 0;
    this.categoryAnalytics = [];
    this.questionSummary = [];
    this.wrongDistribution = [];
  }

  getLoggedInInstituteId(): string {
    if (this.selectedInstituteId) return this.selectedInstituteId;
    if (this.userFilters.institute_id) return this.userFilters.institute_id;
    if (this.globalContextService.activeInstituteId) return this.globalContextService.activeInstituteId;
    if (this.auth.currentUserValue?.institute_id) return String(this.auth.currentUserValue.institute_id);

    const keys = ['user_profile', 'user', 'user_info', 'currentUser'];
    for (const key of keys) {
      const raw = sessionStorage.getItem(key) || localStorage.getItem(key);
      if (raw) {
        try {
          const u = JSON.parse(raw);
          const iid = u?.institute_id || u?.instituteId || u?.inst_id || u?.institute?.id || u?.institute?.institute_id;
          if (iid) return String(iid);
        } catch (e) {}
      }
    }
    return (
      sessionStorage.getItem('global_institute_id') ||
      sessionStorage.getItem('institute_id') ||
      sessionStorage.getItem('instituteId') ||
      localStorage.getItem('institute_id') ||
      ''
    );
  }

  loadScheduledTest() {
    const instituteId = this.getLoggedInInstituteId();
    if (!instituteId && this.isSuperAdmin) {
      this.resetSelectedExam();
      this.scheduledTestsMessage = 'Select an institute to load tests.';
      return;
    }
    if (instituteId && !this.selectedInstituteId) {
      this.selectedInstituteId = instituteId;
      this.userFilters.institute_id = instituteId;
    }

    const requestId = ++this.scheduledTestsRequestId;
    this.scheduledTestsLoading = true;
    this.scheduledTestsMessage = '';

    const params: any = {};
    if (instituteId) params.institute_id = instituteId;
    if (this.userFilters.country_id) params.country_id = this.userFilters.country_id;
    if (this.userFilters.city_id) params.city_id = this.userFilters.city_id;
    if (this.userFilters.industry) params.industry = this.userFilters.industry;
    if (this.userFilters.sector) params.sector = this.userFilters.sector;

    const examsListUrl = `${API_BASE}/get-exams-list`;
    const schedulesUrl = `${API_BASE}/get-exam-schedule-details`;

    forkJoin({
      manageTests: this.http.get<any>(examsListUrl, { params }).pipe(catchError(() => of([]))),
      schedules: this.http.get<any>(schedulesUrl, { params }).pipe(catchError(() => of([]))),
    }).subscribe({
      next: (res: { manageTests: any; schedules: any }) => {
        if (requestId !== this.scheduledTestsRequestId) return;
        try {
          const rawExams = Array.isArray(res.manageTests?.data)
            ? res.manageTests.data
            : Array.isArray(res.manageTests)
            ? res.manageTests
            : [];
          const rawSchedules = Array.isArray(res.schedules?.data)
            ? res.schedules.data
            : Array.isArray(res.schedules?.schedules)
            ? res.schedules.schedules
            : Array.isArray(res.schedules)
            ? res.schedules
            : [];

          // Save schedules for date & slot selection
          this.allSchedules = rawSchedules || [];

          // Save master tests for Test Name dropdown (Step 1)
          const uniqueMap = new Map<string, any>();
          rawExams.forEach((x: any) => {
            const title = this.getTestTitle(x);
            if (title && !uniqueMap.has(title.toLowerCase())) {
              uniqueMap.set(title.toLowerCase(), {
                id: x.exam_id || x.test_id || x.id,
                schedule_id: x.exam_id || x.test_id || x.id,
                exam_id: x.exam_id || x.test_id || x.id,
                title: title,
                name: title,
                raw: x,
              });
            }
          });

          // Master exams list (excluding schedules)
          this.allTests = Array.from(uniqueMap.values());
          this.updateUniqueTestNames();
          this.scheduledTestsMessage = this.allTests.length ? '' : 'No tests found for this institute.';

          try {
            this.filteredTests$ = this.examCtrl.valueChanges.pipe(
              startWith(''),
              map((val: any) => {
                const q = (typeof val === 'string' ? val : this.getTestTitle(val)).toLowerCase();
                return (this.allTests || []).filter((it: any) =>
                  this.getTestTitle(it).toLowerCase().includes(q)
                );
              })
            );
          } catch (e) {
            this.filteredTests$ = of(this.allTests || []);
          }
        } catch (e) {
          this.allTests = [];
          this.filteredTests$ = of([]);
          this.scheduledTestsMessage = 'Unable to parse tests.';
        }
        this.scheduledTestsLoading = false;
      },
      error: (err: any) => {
        if (requestId !== this.scheduledTestsRequestId) return;
        this.allTests = [];
        this.filteredTests$ = of([]);
        this.scheduledTestsLoading = false;
        this.scheduledTestsMessage = 'Tests could not be loaded. Use Refresh to try again.';
      },
    });
  }

  ngOnInit(): void {
    try {
      this.pageMeta.setMeta('Test Reports', 'Reports for scheduled tests');
    } catch (e) {}

    const userInstId = this.getLoggedInInstituteId();
    if (!this.isSuperAdmin && userInstId) {
      this.selectedInstituteId = String(userInstId);
      this.userFilters.institute_id = String(userInstId);
      try {
        this.loadDepartmentList(this.selectedInstituteId);
        this.loadTeamsList(this.selectedInstituteId);
        this.loadCampusList(this.selectedInstituteId);
      } catch (e) {}
    }

    this.loadInstitutes();
    try {
      this.loadCountries();
    } catch (e) {}
    this.loadScheduledTest();

    try {
      const sub = this.globalContextService.activeInstitute$.subscribe((context: any) => {
        if (context && context.institute_id) {
          this.isGlobalInstituteActive = true;
          this.selectedInstituteId = context.institute_id;
          this.userFilters.institute_id = context.institute_id;
          const found = this.institutes.find((i) => i.id === context.institute_id) || {
            id: context.institute_id,
            name: context.institute_name,
          };
          try {
            this.instituteCtrl.setValue(found as any);
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

  getOptionLetter(i: number): string {
    try {
      return String.fromCharCode(65 + (Number(i) || 0));
    } catch (e) {
      return '' + i;
    }
  }

  getScheduleValue(exam: any): string {
    if (!exam) return '';
    return String(exam.schedule_id || exam.id || exam.scheduleId || exam.exam_id || exam.title || '');
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
      const examTitle = this.getTestTitle(this.selectedExam);
      const examId = String(
        this.selectedExam.schedule_id || this.selectedExam.id || this.selectedExam.scheduleId || this.selectedExam.exam_id || ''
      );
      const matched = (this.allTests || []).find(
        (t) =>
          (examId && String(t.schedule_id || t.id || t.scheduleId || t.exam_id) === examId) ||
          (examTitle && this.getTestTitle(t).toLowerCase() === examTitle.toLowerCase())
      );
      if (matched) {
        this.userFilters.schedule_id = this.getScheduleValue(matched);
      } else {
        this.userFilters.schedule_id = examId || examTitle || '';
      }
    } else if (this.selectedTestTitle) {
      const matched = (this.allTests || []).find(
        (t) => this.getTestTitle(t).toLowerCase() === this.selectedTestTitle.toLowerCase()
      );
      if (matched) {
        this.userFilters.schedule_id = this.getScheduleValue(matched);
      } else {
        this.userFilters.schedule_id = this.selectedTestTitle;
      }
    } else {
      this.userFilters.schedule_id = '';
    }
    Object.keys(this.searchQueries).forEach((k) => {
      this.searchQueries[k] = '';
    });

    const targetEl =
      this.filtersBtn?.nativeElement ||
      (this.filtersBtn as any)?._elementRef?.nativeElement ||
      this.filtersBtn;

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(targetEl)
      .withPositions([
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 },
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
      ])
      .withPush(true);

    this.filtersOverlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });
    this.filtersOverlayRef.backdropClick().subscribe(() => this.closeFiltersOverlay());
    this.filtersOverlayRef.keydownEvents().subscribe((ev: any) => {
      if (ev.key === 'Escape') this.closeFiltersOverlay();
    });

    const portal = new TemplatePortal(this.filtersPanelTpl, this.vcr);
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

  ngOnDestroy(): void {
    try {
      this._subs?.unsubscribe();
    } catch (e) {}
    try {
      this.closeFiltersOverlay();
    } catch (e) {}
    try {
      this.loading.hide();
    } catch (e) {}
  }

  onTabChange(event: any) {
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

  loadUserReport(page: number = 1, isSilent: boolean = false) {
    if (!this.selectedExam && !this.selectedTestTitle) return;
    this.currentPage = page || 1;
    const params: any = {
      page: String(this.currentPage),
      page_size: String(this.pageSize),
    };
    if (this.selectedInstituteId || this.userFilters.institute_id) {
      params.institute_id = this.selectedInstituteId || this.userFilters.institute_id;
    }
    if (this.selectedExam?.isDateRange || this.selectionMode === 'daterange') {
      params.test_title = this.selectedExam?.title || this.selectedDateRangeTestTitle || this.selectedTestTitle;
      if (this.selectedExam?.start_date || this.dateRangeStart) {
        params.start_date = this.selectedExam?.start_date || this.formatDateToYYYYMMDD(this.dateRangeStart);
      }
      if (this.selectedExam?.end_date || this.dateRangeEnd) {
        params.end_date = this.selectedExam?.end_date || this.formatDateToYYYYMMDD(this.dateRangeEnd);
      }
    } else {
      const schedId = String(
        this.selectedExam?.schedule_id || this.selectedExam?.id || this.selectedExam?.scheduleId || this.selectedScheduleId || ''
      );
      if (schedId) {
        params.schedule_id = schedId;
      }
      if (this.selectedTestTitle || this.selectedExam?.title) {
        params.test_title = this.selectedExam?.title || this.selectedTestTitle;
      }
    }
    if (this.searchQuery) params.q = this.searchQuery;
    if (this.userFilters.country_id) params.country_id = this.userFilters.country_id;
    if (this.userFilters.city_id) params.city_id = this.userFilters.city_id;
    if (this.userFilters.campus_id) params.campus_id = this.userFilters.campus_id;
    if (Array.isArray(this.userFilters.department_id) && this.userFilters.department_id.length) {
      params.department_id = this.userFilters.department_id.join(',');
    } else if (
      typeof this.userFilters.department_id === 'string' &&
      this.userFilters.department_id
    ) {
      params.department_id = this.userFilters.department_id;
    }
    if (Array.isArray(this.userFilters.teams_id) && this.userFilters.teams_id.length) {
      params.team_id = this.userFilters.teams_id.join(',');
    } else if (typeof this.userFilters.teams_id === 'string' && this.userFilters.teams_id) {
      params.team_id = this.userFilters.teams_id;
    }
    if (this.userFilters.active_status) params.active_status = this.userFilters.active_status;
    const afterDate = this.userFilters.created_after || this.userFilters.joined_after;
    if (afterDate)
      params.created_after = afterDate instanceof Date ? afterDate.toISOString() : afterDate;
    const beforeDate = this.userFilters.created_before || this.userFilters.joined_before;
    if (beforeDate)
      params.created_before = beforeDate instanceof Date ? beforeDate.toISOString() : beforeDate;
    if (this.userFilters.created_by_me) params.created_by_me = 'true';

    if (!isSilent) {
      this.loadingUserReport = true;
      try {
        this.loading.show();
      } catch (e) {}
    }

    this.http.get<any>(`${API_BASE}/get-exam-user-report`, { params }).subscribe({
      next: (res: any) => {
        console.debug('[TestReports] get-exam-user-report response:', res);
        try {
          const body = res || {};
          const payload = body.data || body;
          if (payload && Array.isArray(payload.items)) {
            this.userReportData = payload.items;
            this.userReportTotal = Number(
              payload.total ?? payload.count ?? (payload.items || []).length
            );
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
          if (!isSilent) {
            try {
              this.loading.hide();
            } catch (e) {}
          }
        }
      },
      error: (err: any) => {
        console.error('[TestReports] Failed to load user report', err);
        this.userReportData = [];
        this.userReportTotal = 0;
        this.loadingUserReport = false;
        if (!isSilent) {
          try {
            this.loading.hide();
          } catch (e) {}
        }
      },
      complete: () => {
        if (!isSilent) {
          try {
            this.loading.hide();
          } catch (e) {}
        }
      },
    });
  }

  prevPage() {
    if (this.currentPage > 1) this.loadUserReport(this.currentPage - 1);
  }
  nextPage() {
    const totalPages = Math.ceil((this.userReportTotal || 0) / this.pageSize);
    if (this.currentPage < totalPages) this.loadUserReport(this.currentPage + 1);
  }

  get questionTotalPages(): number {
    return Math.ceil(this.activeQuestionCount / this.questionPageSize) || 1;
  }

  get paginatedQuestionSummary(): any[] {
    const list =
      this.filteredQuestionSummary && this.filteredQuestionSummary.length
        ? this.filteredQuestionSummary
        : this.questionSummary || [];
    const startIndex = (this.questionCurrentPage - 1) * this.questionPageSize;
    return list.slice(startIndex, startIndex + this.questionPageSize);
  }

  prevQuestionPage() {
    if (this.questionCurrentPage > 1) this.questionCurrentPage--;
  }
  nextQuestionPage() {
    if (this.questionCurrentPage < this.questionTotalPages) this.questionCurrentPage++;
  }

  formatDateShort(dateLike: any): string {
    if (!dateLike) return '-';
    try {
      const d = dateLike instanceof Date ? dateLike : new Date(dateLike);
      if (isNaN(d.getTime())) return String(dateLike);
      const dd = String(d.getDate()).padStart(2, '0');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const mm = months[d.getMonth()];
      const yyyy = d.getFullYear();
      const hh = String(d.getHours()).padStart(2, '0');
      const min = String(d.getMinutes()).padStart(2, '0');
      return `${dd}-${mm}-${yyyy} ${hh}:${min}`;
    } catch (e) {
      return String(dateLike);
    }
  }

  formatAttemptDateTime(v: any): string {
    if (!v) return '—';
    let d: Date;
    if (typeof v === 'number') {
      d = new Date(v > 1e12 ? v : v * 1000);
    } else if (/^\d+$/.test(String(v))) {
      const n = Number(v);
      d = new Date(n > 1e12 ? n : n * 1000);
    } else {
      d = new Date(String(v));
    }
    if (isNaN(d.getTime())) return String(v);

    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayName = days[d.getDay()];
    const dd = d.getDate();
    const monthName = months[d.getMonth()];
    const yyyy = d.getFullYear();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');

    return `${dayName}, ${dd} ${monthName} ${yyyy} ${hh}:${mm}`;
  }

  formatAttemptDuration(att: any): string {
    if (!att) return '0:00:00';
    if (att.time_taken) return String(att.time_taken).split('.')[0];
    if (att.timeTaken) return String(att.timeTaken).split('.')[0];
    if (att.duration) return String(att.duration);
    const start = att.started_date || att.started_at || att.start_time;
    const end = att.submitted_date || att.submitted_at || att.end_time;
    if (start && end) {
      const s = new Date(start).getTime();
      const e = new Date(end).getTime();
      if (!isNaN(s) && !isNaN(e) && e >= s) {
        const totalSecs = Math.floor((e - s) / 1000);
        const hrs = Math.floor(totalSecs / 3600);
        const mins = Math.floor((totalSecs % 3600) / 60);
        const secs = totalSecs % 60;
        return `${hrs}:${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
      }
    }
    return '0:00:00';
  }

  exportUserCSV() {
    if (!this.userReportData || !this.userReportData.length) return;
    const headers = [
      'Student Name',
      'TEST DATE',
      'PERCENTAGE',
      'RESULT',
      'RETEST DATE',
      'RETEST %',
      'RETEST RESULT',
      'MANUAL REVIEW',
    ];
    const rows = this.userReportData.map((r: any) => [
      r.student_name,
      this.formatDateShort(r.test_taken_date),
      r.percentage !== null && r.percentage !== undefined ? `${r.percentage}%` : '',
      r.result || '-',
      r.retest_date ? this.formatDateShort(r.retest_date) : '-',
      r.retest_percentage !== null && r.retest_percentage !== undefined ? `${r.retest_percentage}%` : '-',
      r.retest_result || '-',
      r.manual_review || '-',
    ]);
    const csv = [
      headers.join(','),
      ...rows.map((r) => r.map((v: any) => `"${String(v || '').replace(/"/g, '""')}"`).join(',')),
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `exam_user_report_${this.selectedExam ? this.selectedExam.schedule_id || this.selectedExam.id || 'report' : 'report'}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  loadAnalytics() {
    if (!this.selectedExam && !this.selectedTestTitle) return;
    const params: any = {};
    if (this.selectedInstituteId || this.userFilters.institute_id) {
      params.institute_id = this.selectedInstituteId || this.userFilters.institute_id;
    }
    if (this.selectedExam?.isDateRange || this.selectionMode === 'daterange') {
      params.test_title = this.selectedExam?.title || this.selectedDateRangeTestTitle || this.selectedTestTitle;
      if (this.selectedExam?.start_date || this.dateRangeStart) {
        params.start_date = this.selectedExam?.start_date || this.formatDateToYYYYMMDD(this.dateRangeStart);
      }
      if (this.selectedExam?.end_date || this.dateRangeEnd) {
        params.end_date = this.selectedExam?.end_date || this.formatDateToYYYYMMDD(this.dateRangeEnd);
      }
    } else {
      const schedId = String(
        this.selectedExam?.schedule_id || this.selectedExam?.id || this.selectedExam?.scheduleId || this.selectedScheduleId || ''
      );
      if (schedId) {
        params.schedule_id = schedId;
      }
      if (this.selectedTestTitle || this.selectedExam?.title) {
        params.test_title = this.selectedExam?.title || this.selectedTestTitle;
      }
    }

    try {
      this.loading.show();
    } catch (e) {}
    this.http.get<any>(`${API_BASE}/get-exam-analytics`, { params }).subscribe({
      next: (res: any) => {
        console.debug('[TestReports] get-exam-analytics response:', res);
        try {
          const body = res || {};
          const payload = body.data || body;
          this.categoryAnalytics = Array.isArray(payload.category_report)
            ? payload.category_report
            : payload.category_report || payload.categories || [];
          this.questionSummary = Array.isArray(payload.question_summary)
            ? payload.question_summary
            : payload.question_summary || payload.questions || [];
          this.wrongDistribution = Array.isArray(payload.wrong_answer_distribution)
            ? payload.wrong_answer_distribution
            : payload.wrong_answer_distribution || payload.distribution || [];
          this.questionCurrentPage = 1;
          if (this._pendingCategoryFilter) {
            const cid = String(this._pendingCategoryFilter);
            this.filteredQuestionSummary = (this.questionSummary || [])
              .filter((q: any) => this._getQuestionCategoryId(q) === cid)
              .map((q: any, idx: number) => ({ ...q, sno: idx + 1 }));

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
      error: (err: any) => {
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
      },
    });
  }

  openWrongAnswerSummary(question: any) {
    if (!question) return;
    this.selectedQuestionForWrongSummary = question;
    const qid = question.id || question.question_id || question.sno || question.qid || null;
    let entries: any[] = [];
    try {
      if (Array.isArray(this.wrongDistribution) && this.wrongDistribution.length) {
        const byQ = this.wrongDistribution.find(
          (d: any) => String(d.question_id || d.qid || d.id || d.sno || '') === String(qid)
        );
        if (byQ) {
          entries = byQ.wrong_answers || byQ.wrong || byQ.answers || byQ.distribution || [];
        } else {
          entries = (this.wrongDistribution || []).filter(
            (d: any) =>
              String(d.question_id || d.qid || d.schedule_question_id || '') === String(qid)
          );
        }
      }
    } catch (e) {
      entries = [];
    }

    this.selectedWrongAnswers = (entries || []).map((en: any, idx: number) => {
      if (typeof en === 'string') return { answer: en, count: null, pct: null };
      return {
        id: en.id || en._id || null,
        answer:
          en.option_text ||
          en.text ||
          en.wrong_answer ||
          en.name ||
          en.label ||
          en.option ||
          'Answer ' + (idx + 1),
        option_id: en.option_id || en.options_id || en.optionId || en.optionId || null,
        answer_id: en.answer_id || en.answerId || null,
        count: en.count || en.times || en.selected_count || en.selected || en.num || null,
        pct:
          en.pct ||
          en.percentage ||
          en.percent ||
          en.pct_str ||
          (en.count &&
          this.selectedQuestionForWrongSummary &&
          this.selectedQuestionForWrongSummary.attempts
            ? (
                (Number(en.count) / Number(this.selectedQuestionForWrongSummary.attempts || 1)) *
                100
              ).toFixed(0) + '%'
            : null),
      };
    });

    const targetQid = String(question.question_id || question.id || question.qid || '');
    const params: any = {
      question_id: targetQid,
    };
    if (this.selectedExam?.isDateRange || this.selectionMode === 'daterange') {
      params.test_title = this.selectedExam?.title || this.selectedDateRangeTestTitle || this.selectedTestTitle;
      if (this.selectedExam?.start_date || this.dateRangeStart) {
        params.start_date = this.selectedExam?.start_date || this.formatDateToYYYYMMDD(this.dateRangeStart);
      }
      if (this.selectedExam?.end_date || this.dateRangeEnd) {
        params.end_date = this.selectedExam?.end_date || this.formatDateToYYYYMMDD(this.dateRangeEnd);
      }
    } else {
      params.schedule_id = String(this.selectedExam?.schedule_id || this.selectedExam?.id || '');
    }

    if (params.question_id) {
      this.http.get<any>(`${API_BASE}/get-question-wrong-answers`, { params }).subscribe({
        next: (res: any) => {
          const body = res || {};
          const payload = body.data || body;
          if (payload?.question_details) {
            this.selectedQuestionForWrongSummary = {
              ...(this.selectedQuestionForWrongSummary || {}),
              ...payload.question_details
            };
          }
          if (Array.isArray(payload?.combinations)) {
            this.selectedWrongCombinations = payload.combinations;
          } else {
            this.selectedWrongCombinations = [];
          }
          const qType = String(
            this.selectedQuestionForWrongSummary?.question_type ||
            this.selectedQuestionForWrongSummary?.answer_type ||
            ''
          ).toLowerCase();
          const isMultiple = qType.includes('multiple') || qType.includes('multi') || qType.includes('select all');

          if (isMultiple && payload?.combinations && payload.combinations.length) {
            this.selectedWrongAnswers = (payload.combinations || []).map((c: any) => ({
              answer: c.combination || c.text || 'Answer',
              count: c.count || 0,
              pct: c.pct || (c.percentage !== undefined ? c.percentage + '%' : null),
            }));
          } else {
            const dist = payload?.distribution || [];
            if (dist && dist.length) {
              this.selectedWrongAnswers = (dist || []).map((d: any) => ({
                answer: d.option_number ? String(d.option_number) : (d.option_text || d.option || d.answer || d.text || 'Answer'),
                option_id: d.option_id || d.options_id || d.optionId || null,
                answer_id: d.answer_id || d.answerId || null,
                option_number: d.option_number || null,
                count: d.count || d.selected_count || 0,
                pct: d.percentage !== undefined ? String(d.percentage) + '%' : d.pct || null,
              }));
            } else if (payload?.raw && payload.raw.length) {
              const raw = payload.raw;
              this.selectedWrongAnswers = (raw || []).map((r: any) => ({
                answer: r.text || r.option_text || 'Answer',
                count: r.count || 0,
                pct: r.pct || null,
              }));
            }
          }
          this.showWrongAnswerSummary = true;
        },
        error: (err: any) => {
          console.warn('Failed to load question wrong answers', err);
          this.showWrongAnswerSummary = true;
        },
      });
      return;
    }

    this.showWrongAnswerSummary = true;
  }

  closeWrongAnswerSummary() {
    this.showWrongAnswerSummary = false;
    this.selectedQuestionForWrongSummary = null;
    this.selectedWrongAnswers = [];
    this.selectedWrongCombinations = [];
    this.expandedWrongAnswer = null;
    this.expandedResources = [];
    this.wrongAnswerResourcesLoading = false;
  }

  isCorrectOption(opt: any): boolean {
    if (!opt) return false;
    const val = opt.is_correct;
    return val === 1 || val === '1' || val === true || String(val).toLowerCase() === 'true';
  }

  get filteredWrongAnswers(): any[] {
    if (!this.selectedWrongAnswers || !this.selectedWrongAnswers.length) return [];
    const options = this.selectedQuestionForWrongSummary?.options || [];
    const correctOptionIds = options
      .filter((o: any) => this.isCorrectOption(o))
      .map((o: any) => String(o.option_id || o.id || '').toLowerCase());
    const correctOptionTexts = options
      .filter((o: any) => this.isCorrectOption(o))
      .map((o: any) => String(o.option_text || o.text || o.answer || '').trim().toLowerCase());

    return this.selectedWrongAnswers.filter((wa: any) => {
      const waId = String(wa.option_id || wa.optionId || '').toLowerCase();
      const waText = String(wa.answer || wa.option_text || wa.text || '').trim().toLowerCase();
      if (waId && correctOptionIds.includes(waId)) return false;
      if (waText && correctOptionTexts.includes(waText)) return false;
      if (this.isCorrectOption(wa)) return false;
      return true;
    });
  }

  isOptionSelectedWrong(opt: any): boolean {
    if (!opt || this.isCorrectOption(opt)) return false;
    const optId = String(opt.option_id || opt.id || '').toLowerCase();
    const optText = String(opt.option_text || opt.text || opt.answer || '').trim().toLowerCase();
    return (this.filteredWrongAnswers || []).some((wa: any) => {
      const waId = String(wa.option_id || wa.optionId || '').toLowerCase();
      const waText = String(wa.answer || wa.option_text || wa.text || '').trim().toLowerCase();
      const isMatch = (optId && waId && optId === waId) || (optText && waText && optText === waText);
      return isMatch && (wa.count === undefined || wa.count === null || Number(wa.count) > 0);
    });
  }

  toggleWrongAnswerResources(question: any, wa: any) {
    if (!question || !wa) return;
    if (this.expandedWrongAnswer === wa) {
      this.expandedWrongAnswer = null;
      this.expandedResources = [];
      this.wrongAnswerResourcesLoading = false;
      return;
    }

    this.expandedWrongAnswer = wa;
    this.expandedResources = [];
    this.wrongAnswerResourcesLoading = true;

    const params: any = {};
    if (this.selectedExam?.isDateRange || this.selectionMode === 'daterange') {
      params.test_title = this.selectedExam?.title || this.selectedDateRangeTestTitle || this.selectedTestTitle;
      if (this.selectedExam?.start_date || this.dateRangeStart) {
        params.start_date = this.selectedExam?.start_date || this.formatDateToYYYYMMDD(this.dateRangeStart);
      }
      if (this.selectedExam?.end_date || this.dateRangeEnd) {
        params.end_date = this.selectedExam?.end_date || this.formatDateToYYYYMMDD(this.dateRangeEnd);
      }
    } else {
      params.schedule_id = String(this.selectedExam?.schedule_id || this.selectedExam?.id || '');
    }

    if (wa.option_id) params.option_id = wa.option_id;
    else if (wa.optionId) params.option_id = wa.optionId;
    else if (wa.answer_id) params.answer_id = wa.answer_id;
    else if (wa.answerId) params.answer_id = wa.answerId;
    if (wa.answer && typeof wa.answer === 'string' && !params.option_id && !params.answer_id) {
      params.answer_value = wa.answer;
    }
    if (!params.question_id)
      params.question_id = String(question.question_id || question.id || question.qid || '');

    this.http.get<any>(`${API_BASE}/get-answer-resources`, { params }).subscribe({
      next: (res: any) => {
        this.wrongAnswerResourcesLoading = false;
        const body = res || {};
        const payload = body.data || body;
        if (Array.isArray(payload)) this.expandedResources = payload;
        else if (Array.isArray(body.data)) this.expandedResources = body.data;
        else if (Array.isArray(payload.resources)) this.expandedResources = payload.resources;
        else if (Array.isArray(body.data?.data)) this.expandedResources = body.data.data;
        else this.expandedResources = payload || [];
      },
      error: (err: any) => {
        console.warn('Failed to fetch resources', err);
        this.wrongAnswerResourcesLoading = false;
        this.expandedResources = [];
      },
    });
  }

  openResourcesForWrongAnswer(question: any, wa: any) {
    this.toggleWrongAnswerResources(question, wa);
  }

  closeResourcePanel() {
    this.showResourcePanel = false;
    this.selectedResources = [];
    this.selectedResourceContext = null;
  }

  formatDate(dateLike: any): string {
    if (!dateLike) return '';
    try {
      const dateStr = String(dateLike)
        .replace(/^On\s+/i, '')
        .trim();

      if (typeof dateLike === 'string' && (dateLike.includes('GMT') || dateLike.includes('UTC'))) {
        return dateLike
          .replace(/^On\s+/i, '')
          .replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST')
          .trim();
      }

      const d = dateLike instanceof Date ? dateLike : new Date(dateLike);
      if (isNaN(d.getTime())) {
        return dateStr
          .replace(/^On\s+/i, '')
          .replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST')
          .trim();
      }

      const formatter = new Intl.DateTimeFormat('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'Asia/Kolkata',
      });
      const parts = formatter.formatToParts(d);
      const getPart = (type: string) => parts.find((p) => p.type === type)?.value || '';

      const day = getPart('day');
      const month = getPart('month');
      const year = getPart('year');
      const hour = getPart('hour');
      const min = getPart('minute');

      return `${day}-${month}-${year} ${hour}:${min} IST`;
    } catch (e) {
      return String(dateLike || '')
        .replace(/^On\s+/i, '')
        .replace(/GMT[+-]?\d*(:\d+)?|\bGMT\b|\bUTC\b/gi, 'IST')
        .trim();
    }
  }

  toTitleCase(str: string | null | undefined): string {
    if (!str) return '';
    return str.replace(
      /\w\S*/g,
      (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    );
  }
}
