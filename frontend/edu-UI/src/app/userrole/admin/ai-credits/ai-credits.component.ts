import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Overlay, OverlayModule, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { API_BASE } from 'src/app/shared/api.config';
import { PageMetaService } from 'src/app/shared/services/page-meta.service';
import { SharedModule } from 'src/app/shared/shared.module';
import {
  DateRangePickerDialogComponent,
  DateRangeDialogResult,
} from 'src/app/shared/components/date-range-picker-dialog/date-range-picker-dialog.component';
import {
  getInstituteTerminology,
  InstituteTerminology,
} from 'src/app/shared/services/institute-terminology.service';
import { Subscription } from 'rxjs';

interface CreditSummary {
  institute_id: string;
  institute_name: string;
  industry_type?: string;
  industry_sector?: string;
  allocated_credits: number;
  used_credits: number;
  remaining_credits: number;
  percentage_used: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  total_operations: number;
  is_low_credit: boolean;
  alert_threshold: number;
}

export interface FeatureColumnItem {
  key?: string;
  feature: string;
  icon?: string;
  count: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  credits_consumed: number;
  last_used?: string | null;
}

interface FeatureBreakdownItem {
  key?: string;
  feature: string;
  icon?: string;
  count: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  credits_consumed: number;
  last_used?: string | null;
}

interface BreakdownTotals {
  count: number;
  prompt_tokens: number;
  completion_tokens: number;
  total_tokens: number;
  credits_consumed: number;
}

interface ChartBar {
  x: number;
  y: number;
  width: number;
  height: number;
  slotX: number;
  slotWidth: number;
  label: string;
  fullLabel: string;
  isoDate: string;
  value: number | null;
  compactValue: string;
  prompt_value: number;
  comp_value: number;
  operations: number;
  isCurrent: boolean;
  isFuture: boolean;
  showXLabel: boolean;
  showValueLabel: boolean;
  tooltipLeftPct: number;
  tooltipTopPct: number;
  tooltipBelow: boolean;
}

interface ChartYAxisTick {
  value: number;
  label: string;
  y: number;
  isBaseline: boolean;
}

interface AnalyticsApiData {
  period: 'today' | 'weekly' | 'monthly';
  period_title?: string;
  month_label?: string;
  date_range_label?: string;
  timezone?: string;
  timezone_abbr?: string;
  is_incomplete?: boolean;
  incomplete_note?: string;
  bucket_count?: number;
  elapsed_days?: number;
  total_days_in_week?: number;
  days_in_month?: number;
  avg_unit?: 'hour' | 'day';
  labels: string[];
  full_labels?: string[];
  iso_dates?: string[];
  is_current_flags?: boolean[];
  is_future_flags?: boolean[];
  operations?: (number | null)[];
  values: (number | null)[];
  prompt_values: (number | null)[];
  completion_values: (number | null)[];
  peak_label: string;
  peak_value: number;
  period_total: number;
  avg: number;
}

export interface InstituteOverviewItem {
  institute_id: string;
  name: string;
  short_name: string;
  industry_type?: string;
  industry_sector?: string;
  allocated_credits: number;
  used_credits: number;
  remaining_credits: number;
  percentage_used: number;
  prompt_tokens: number;
  completion_tokens: number;
  operations: number;
  threshold: number;
  status: string;
}

export interface InstituteOption {
  institute_id: string;
  name: string;
  short_name?: string;
  industry_type?: string;
  industry_sector?: string;
}

export interface TestFeatureItem {
  credits: number;
  count: number;
  prompt_tokens: number;
  completion_tokens: number;
}

export interface TestUsageItem {
  id?: string;
  exam_id: string;
  schedule_id?: string;
  title: string;
  subject: string;
  subject_id?: string;
  department_ids?: string[];
  team_ids?: string[];
  campus_ids?: string[];
  created_by_id?: string;
  created_by_name?: string;
  scheduled_start?: string;
  scheduled_end?: string;
  test_type: 'paper' | 'online' | 'general';
  total_credits: number;
  prompt_tokens: number;
  completion_tokens: number;
  operations_count: number;
  last_activity?: string;
  features: { [key: string]: TestFeatureItem };
  expanded?: boolean;
}

export interface FilterOptionItem {
  id: string;
  name: string;
}

export interface TeamOptionItem {
  id: string;
  name: string;
  department_id?: string | null;
  department_name?: string | null;
}

export interface FilterTestMeta {
  id: string;
  exam_id: string;
  schedule_id?: string | null;
  title: string;
  test_type: 'paper' | 'online' | 'general';
  subject: string;
  subject_id?: string;
  department_ids: string[];
  team_ids: string[];
  campus_ids?: string[];
  created_by_id?: string;
  created_by_name?: string;
  scheduled_start?: string;
  scheduled_end?: string;
}

export interface TestFilterState {
  department_id: string;
  team_id: string;
  campus_id: string;
  subject: string;
  test_id: string;
  created_by_me: boolean;
  start_date: Date | null;
  end_date: Date | null;
}

export interface AppliedFilterChip {
  key: 'department' | 'team' | 'campus' | 'subject' | 'test' | 'created_by_me' | 'date_range';
  label: string;
  required?: boolean;
}

@Component({
  selector: 'app-ai-credits',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCheckboxModule,
    OverlayModule,
  ],
  templateUrl: './ai-credits.component.html',
  styleUrls: ['./ai-credits.component.scss'],
})
export class AiCreditsComponent implements OnInit, OnDestroy {
  isLoading = false;
  summary: CreditSummary | null = null;
  breakdown: FeatureBreakdownItem[] = [];
  featureColumns: FeatureColumnItem[] = [];
  totals: BreakdownTotals | null = null;

  // Super Admin view state
  isSuperAdmin = false;
  selectedInstituteId = 'all';
  institutesList: InstituteOption[] = [];
  institutesOverview: InstituteOverviewItem[] = [];
  instituteSearchTerm = '';

  // Institutes table pagination
  institutePageIndex = 0;
  institutePageSize = 5;
  institutePageSizeOptions = [5, 10, 25, 50];

  get paginatedInstitutes(): InstituteOverviewItem[] {
    const start = this.institutePageIndex * this.institutePageSize;
    return this.institutesOverview.slice(start, start + this.institutePageSize);
  }

  onInstitutePageChange(event: PageEvent): void {
    this.institutePageIndex = event.pageIndex;
    this.institutePageSize = event.pageSize;
  }

  get filteredInstitutes(): InstituteOption[] {
    const term = (this.instituteSearchTerm || '').trim().toLowerCase();
    if (!term) {
      return this.institutesList;
    }
    return this.institutesList.filter(
      (inst) =>
        (inst.name || '').toLowerCase().includes(term) ||
        (inst.short_name || '').toLowerCase().includes(term) ||
        (this.selectedInstituteId !== 'all' && inst.institute_id === this.selectedInstituteId)
    );
  }

  stopFilterSearchEvent(event: Event): void {
    event.stopPropagation();
  }

  onInstSelectOpened(isOpen: boolean): void {
    if (!isOpen) {
      this.instituteSearchTerm = '';
    }
  }

  // Test & Paper Usage state
  testsLoading = false;
  testUsageList: TestUsageItem[] = [];
  paperCreditsTotal = 0;
  onlineCreditsTotal = 0;
  standaloneCreditsTotal = 0;

  testTypeFilter: 'paper' | 'online' = 'paper';
  testSearchTerm = '';

  testPageIndex = 0;
  testPageSize = 10;
  testPageSizeOptions = [5, 10, 25, 50];

  // Logged-in institute scope & dynamic sector terminology
  loggedInstituteId = '';
  loggedIndustryType = '';
  private lastLoadedMasterInstKey: string | null = null;

  // Anchored Filter Popover state (draft vs. applied so closing without Apply discards changes)
  @ViewChild('filtersBtn') filtersBtn?: ElementRef;
  @ViewChild('filtersPanel') filtersPanelTpl!: TemplateRef<any>;
  filtersOverlayRef: OverlayRef | null = null;
  private currentUserIdentifiers = new Set<string>();
  hasAppliedFilters = false;
  appliedFilters: TestFilterState = this.createEmptyFilters();
  draftFilters: TestFilterState = this.createEmptyFilters();
  filterValidationAttempted = false;
  filterValidationError = '';

  // Filter master options
  departmentsList: FilterOptionItem[] = [];
  allTeamsList: TeamOptionItem[] = [];
  campusesList: FilterOptionItem[] = [];
  subjectsList: FilterOptionItem[] = [];
  allTestsMeta: FilterTestMeta[] = [];

  // Search terms inside filter dropdowns
  deptFilterSearch = '';
  teamFilterSearch = '';
  campusFilterSearch = '';
  subjectFilterSearch = '';
  testFilterSearch = '';

  private createEmptyFilters(): TestFilterState {
    return {
      department_id: '',
      team_id: '',
      campus_id: '',
      subject: '',
      test_id: '',
      created_by_me: false,
      start_date: null,
      end_date: null,
    };
  }

  private cloneFilters(src: TestFilterState): TestFilterState {
    return {
      department_id: src.department_id || '',
      team_id: src.team_id || '',
      campus_id: src.campus_id || '',
      subject: src.subject || '',
      test_id: src.test_id || '',
      created_by_me: !!src.created_by_me,
      start_date: src.start_date ? new Date(src.start_date.getTime()) : null,
      end_date: src.end_date ? new Date(src.end_date.getTime()) : null,
    };
  }

  // Cached terminology & filter options (never recomputed inside template getters)
  terminology: InstituteTerminology = getInstituteTerminology('');
  filteredDepartmentsForDraft: FilterOptionItem[] = [];
  filteredTeamsForDraft: TeamOptionItem[] = [];
  filteredCampusesForDraft: FilterOptionItem[] = [];
  filteredSubjectsForDraft: FilterOptionItem[] = [];
  filteredTestsForDraft: FilterTestMeta[] = [];
  appliedFilterChips: AppliedFilterChip[] = [];
  activeFilterCount = 0;

  trackById(_index: number, item: { id: string }): string {
    return item.id;
  }

  private refreshTerminology(): void {
    let industryType = '';

    if (this.summary?.industry_type) {
      industryType = this.summary.industry_type;
    } else if (this.isSuperAdmin && this.selectedInstituteId && this.selectedInstituteId !== 'all') {
      const inst = this.institutesList.find(
        (i) => String(i.institute_id) === String(this.selectedInstituteId)
      );
      industryType = inst?.industry_type || '';
    } else if (!this.isSuperAdmin && this.loggedIndustryType) {
      industryType = this.loggedIndustryType;
    }

    if (!industryType && this.summary?.institute_name) {
      const lowerName = this.summary.institute_name.toLowerCase();
      if (lowerName.includes('school')) {
        industryType = 'School';
      } else if (lowerName.includes('college')) {
        industryType = 'College';
      }
    }

    this.terminology = getInstituteTerminology(industryType);
    this.refreshAppliedFilterChips();
  }

  private computeAvailableTeamsForDraft(): TeamOptionItem[] {
    const deptId = (this.draftFilters.department_id || '').trim();
    if (!deptId) return [];
    const selectedDept = this.departmentsList.find((d) => String(d.id) === deptId);
    const deptNameLower = (selectedDept?.name || '').trim().toLowerCase();
    return this.allTeamsList.filter((t) => {
      const tDeptId = (t.department_id || '').trim();
      const tDeptName = (t.department_name || '').trim().toLowerCase();
      if (tDeptId && tDeptId.toLowerCase() === deptId.toLowerCase()) return true;
      if (deptNameLower && tDeptName && tDeptName === deptNameLower) return true;
      return false;
    });
  }

  private isPlaceholderSubject(name: string): boolean {
    const norm = (name || '').trim().toLowerCase();
    return !norm || norm === 'general' || norm === 'paper test' || norm === 'online test';
  }

  private computeAvailableSubjectsForDraft(): FilterOptionItem[] {
    const deptId = (this.draftFilters.department_id || '').trim().toLowerCase();
    const teamId = (this.draftFilters.team_id || '').trim().toLowerCase();

    const mergedMap = new Map<string, FilterOptionItem>();
    for (const s of this.subjectsList) {
      if (s.name && !this.isPlaceholderSubject(s.name)) {
        mergedMap.set(s.name.toLowerCase(), { id: s.id || s.name, name: s.name });
      }
    }
    for (const t of this.allTestsMeta) {
      const sName = (t.subject || '').trim();
      if (!this.isPlaceholderSubject(sName) && !mergedMap.has(sName.toLowerCase())) {
        mergedMap.set(sName.toLowerCase(), { id: t.subject_id || sName, name: sName });
      }
    }

    const allSortedSubjects = Array.from(mergedMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    if (!deptId && !teamId) {
      return allSortedSubjects;
    }

    const matchingTests = this.allTestsMeta.filter((t) => {
      if (t.test_type !== this.testTypeFilter) {
        return false;
      }
      if (deptId && !(t.department_ids || []).some((d) => d.toLowerCase() === deptId)) {
        return false;
      }
      if (teamId && !(t.team_ids || []).some((tm) => tm.toLowerCase() === teamId)) {
        return false;
      }
      return true;
    });

    const relevantSubjs = new Map<string, FilterOptionItem>();
    for (const t of matchingTests) {
      const sName = (t.subject || '').trim();
      const sId = (t.subject_id || '').trim();
      if (this.isPlaceholderSubject(sName)) continue;
      const key = sName.toLowerCase();
      if (!relevantSubjs.has(key)) {
        const master = mergedMap.get(key);
        relevantSubjs.set(key, master || { id: sId || sName, name: sName });
      }
    }

    if (relevantSubjs.size === 0) {
      return allSortedSubjects;
    }

    return Array.from(relevantSubjs.values()).sort((a, b) => a.name.localeCompare(b.name));
  }

  private computeAvailableTestsForDraft(availableSubjects: FilterOptionItem[]): FilterTestMeta[] {
    const deptId = (this.draftFilters.department_id || '').trim().toLowerCase();
    const teamId = (this.draftFilters.team_id || '').trim().toLowerCase();
    const campusId = (this.draftFilters.campus_id || '').trim().toLowerCase();
    const subjVal =
      this.testTypeFilter === 'paper'
        ? (this.draftFilters.subject || '').trim().toLowerCase()
        : '';

    const selectedSubjObj = availableSubjects.find(
      (s) => s.id.toLowerCase() === subjVal || s.name.toLowerCase() === subjVal
    );
    const subjNameLower = (selectedSubjObj?.name || subjVal).toLowerCase();

    return this.allTestsMeta.filter((t) => {
      if (t.test_type !== this.testTypeFilter) {
        return false;
      }
      if (deptId && !(t.department_ids || []).some((d) => d.toLowerCase() === deptId)) {
        return false;
      }
      if (teamId && !(t.team_ids || []).some((tm) => tm.toLowerCase() === teamId)) {
        return false;
      }
      if (campusId && !(t.campus_ids || []).some((c) => c.toLowerCase() === campusId)) {
        return false;
      }
      if (subjVal) {
        const tSubjId = (t.subject_id || '').toLowerCase();
        const tSubjName = (t.subject || '').toLowerCase();
        if (tSubjId !== subjVal && tSubjName !== subjVal && tSubjName !== subjNameLower) {
          return false;
        }
      }
      if (this.draftFilters.created_by_me && this.currentUserIdentifiers.size > 0) {
        const tCid = (t.created_by_id || '').toLowerCase();
        const tCname = (t.created_by_name || '').toLowerCase();
        if (!this.currentUserIdentifiers.has(tCid) && !this.currentUserIdentifiers.has(tCname)) {
          return false;
        }
      }
      return true;
    });
  }

  refreshDraftOptions(): void {
    const deptQ = (this.deptFilterSearch || '').trim().toLowerCase();
    this.filteredDepartmentsForDraft = deptQ
      ? this.departmentsList.filter((d) => (d.name || '').toLowerCase().includes(deptQ))
      : this.departmentsList;

    const availTeams = this.computeAvailableTeamsForDraft();
    const teamQ = (this.teamFilterSearch || '').trim().toLowerCase();
    this.filteredTeamsForDraft = teamQ
      ? availTeams.filter((t) => (t.name || '').toLowerCase().includes(teamQ))
      : availTeams;

    const campusQ = (this.campusFilterSearch || '').trim().toLowerCase();
    this.filteredCampusesForDraft = campusQ
      ? this.campusesList.filter((c) => (c.name || '').toLowerCase().includes(campusQ))
      : this.campusesList;

    const availSubjects = this.computeAvailableSubjectsForDraft();
    const subjQ = (this.subjectFilterSearch || '').trim().toLowerCase();
    this.filteredSubjectsForDraft = subjQ
      ? availSubjects.filter((s) => (s.name || '').toLowerCase().includes(subjQ))
      : availSubjects;

    const availTests = this.computeAvailableTestsForDraft(availSubjects);
    const testQ = (this.testFilterSearch || '').trim().toLowerCase();
    this.filteredTestsForDraft = testQ
      ? availTests.filter(
          (t) =>
            (t.title || '').toLowerCase().includes(testQ) ||
            (t.subject || '').toLowerCase().includes(testQ)
        )
      : availTests;
  }

  private refreshAppliedFilterChips(): void {
    const chips: AppliedFilterChip[] = [];
    let count = 0;

    if (this.appliedFilters.department_id) {
      count++;
      const d = this.departmentsList.find((x) => x.id === this.appliedFilters.department_id);
      chips.push({
        key: 'department',
        label: `${this.terminology.deptLabel}: ${d?.name || this.appliedFilters.department_id}`,
        required: true,
      });
    }
    if (this.appliedFilters.team_id) {
      count++;
      const t = this.allTeamsList.find((x) => x.id === this.appliedFilters.team_id);
      chips.push({
        key: 'team',
        label: `${this.terminology.teamLabel}: ${t?.name || this.appliedFilters.team_id}`,
        required: true,
      });
    }
    if (this.appliedFilters.campus_id) {
      count++;
      const cp = this.campusesList.find((x) => x.id === this.appliedFilters.campus_id);
      chips.push({
        key: 'campus',
        label: `Campus: ${cp?.name || this.appliedFilters.campus_id}`,
        required: false,
      });
    }
    if (this.appliedFilters.subject) {
      count++;
      const s = this.subjectsList.find(
        (x) => x.id === this.appliedFilters.subject || x.name === this.appliedFilters.subject
      );
      chips.push({
        key: 'subject',
        label: `Subject: ${s?.name || this.appliedFilters.subject}`,
        required: this.testTypeFilter === 'paper',
      });
    }
    if (this.appliedFilters.test_id) {
      count++;
      const tst = this.allTestsMeta.find(
        (x) =>
          x.id === this.appliedFilters.test_id ||
          x.schedule_id === this.appliedFilters.test_id ||
          x.exam_id === this.appliedFilters.test_id
      );
      chips.push({
        key: 'test',
        label: `Test: ${tst?.title || this.appliedFilters.test_id}`,
        required: false,
      });
    }
    if (this.appliedFilters.created_by_me) {
      count++;
      chips.push({
        key: 'created_by_me',
        label: 'Created by Me',
        required: false,
      });
    }
    if (this.appliedFilters.start_date || this.appliedFilters.end_date) {
      count++;
      chips.push({
        key: 'date_range',
        label: `Created Date: ${this.getCreatedDateRangeDisplay(this.appliedFilters)}`,
        required: false,
      });
    }

    this.activeFilterCount = count;
    this.appliedFilterChips = chips;
  }

  get paginatedTests(): TestUsageItem[] {
    const start = this.testPageIndex * this.testPageSize;
    return this.testUsageList.slice(start, start + this.testPageSize);
  }

  onTestPageChange(event: PageEvent): void {
    this.testPageIndex = event.pageIndex;
    this.testPageSize = event.pageSize;
  }

  // Bar Chart state
  selectedPeriod: 'today' | 'weekly' | 'monthly' = 'weekly';
  readonly chartViewBoxWidth = 820;
  readonly chartViewBoxHeight = 278;
  readonly chartPlotLeft = 68;
  readonly chartPlotRight = 796;
  readonly chartPlotTop = 34;
  readonly chartPlotBottom = 222;

  chartBars: ChartBar[] = [];
  chartYAxisTicks: ChartYAxisTick[] = [];
  chartPeakLabel = 'No usage yet';
  chartPeakValue = 0;
  chartPeriodTotal = 0;
  chartAverage = 0;
  chartPeriodTitle = 'This Week';
  chartDateRangeLabel = '';
  chartTimezoneAbbr = '';
  chartIsIncomplete = false;
  chartIncompleteNote = '';
  chartBucketCount = 7;
  chartAvgUnit: 'hour' | 'day' = 'day';
  chartLoading = false;

  // Active hover tooltip
  hoveredBar: ChartBar | null = null;

  private subs: Subscription = new Subscription();

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private pageMeta: PageMetaService,
    private dialog: MatDialog,
    private overlay: Overlay,
    private vcr: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.pageMeta.setMeta('AI Credits', 'Quota allocation, consumption, and status');

    const userStr = sessionStorage.getItem('user');
    if (userStr) {
      try {
        const user = JSON.parse(userStr);
        const role = (user.user_role || user.role || '').toLowerCase();
        this.isSuperAdmin = role.includes('super');
        this.loggedInstituteId = String(user.institute_id || '').trim();
        this.loggedIndustryType = String(user.industry_type || user.industry || '').trim();
        [user.user_id, user.id, user.userId, user.user_name, user.username, user.email, user.full_name, user.name]
          .filter((v) => v !== null && v !== undefined && String(v).trim() !== '')
          .forEach((v) => this.currentUserIdentifiers.add(String(v).trim().toLowerCase()));
      } catch (e) {
        console.error('Failed to parse user session', e);
      }
    }

    this.refreshTerminology();
    this.loadAllData();
  }

  loadAllData(): void {
    this.isLoading = true;
    if (this.isSuperAdmin) {
      this.loadInstitutesOverview();
    }
    this.loadSummary();
    this.loadBreakdown();
    this.loadAnalytics(this.selectedPeriod);
    this.loadFilterMasterData();
    this.loadTestUsageData();
  }

  onInstituteChange(instId: string): void {
    this.selectedInstituteId = instId;
    this.hasAppliedFilters = false;
    this.appliedFilters = this.createEmptyFilters();
    this.draftFilters = this.createEmptyFilters();
    this.filterValidationAttempted = false;
    this.filterValidationError = '';
    this.lastLoadedMasterInstKey = null;
    this.refreshTerminology();
    this.refreshDraftOptions();
    this.loadAllData();
  }

  selectInstitute(instId: string): void {
    this.selectedInstituteId = instId;
    this.hasAppliedFilters = false;
    this.appliedFilters = this.createEmptyFilters();
    this.draftFilters = this.createEmptyFilters();
    this.filterValidationAttempted = false;
    this.filterValidationError = '';
    this.lastLoadedMasterInstKey = null;
    this.refreshTerminology();
    this.refreshDraftOptions();
    this.loadAllData();
  }

  onTestTypeTabChange(type: 'paper' | 'online'): void {
    if (this.testTypeFilter === type) return;
    this.testTypeFilter = type;
    this.closeFiltersOverlay();
    this.hasAppliedFilters = false;
    this.appliedFilters = this.createEmptyFilters();
    this.draftFilters = this.createEmptyFilters();
    this.filterValidationAttempted = false;
    this.filterValidationError = '';
    this.testSearchTerm = '';
    this.refreshDraftOptions();
    this.refreshAppliedFilterChips();
    this.loadTestUsageData();
  }

  getMandatoryFilterSummaryText(): string {
    return this.testTypeFilter === 'paper'
      ? `${this.terminology.deptLabel}, ${this.terminology.teamLabel}, and Subject`
      : `${this.terminology.deptLabel} and ${this.terminology.teamLabel}`;
  }

  private getMissingMandatoryFilterLabels(): string[] {
    const missing: string[] = [];
    if (!(this.draftFilters.department_id || '').trim()) {
      missing.push(this.terminology.deptLabel);
    }
    if (!(this.draftFilters.team_id || '').trim()) {
      missing.push(this.terminology.teamLabel);
    }
    if (this.testTypeFilter === 'paper' && !(this.draftFilters.subject || '').trim()) {
      missing.push('Subject');
    }
    return missing;
  }

  private updateFilterValidationError(): boolean {
    const missing = this.getMissingMandatoryFilterLabels();
    if (missing.length === 0) {
      this.filterValidationError = '';
      return true;
    }
    if (missing.length === 1) {
      this.filterValidationError = `Please select ${missing[0]} before applying filters.`;
    } else if (missing.length === 2) {
      this.filterValidationError = `Please select ${missing[0]} and ${missing[1]} before applying filters.`;
    } else {
      const last = missing[missing.length - 1];
      const rest = missing.slice(0, -1).join(', ');
      this.filterValidationError = `Please select ${rest}, and ${last} before applying filters.`;
    }
    return false;
  }

  isDraftDeptInvalid(): boolean {
    return this.filterValidationAttempted && !(this.draftFilters.department_id || '').trim();
  }

  isDraftTeamInvalid(): boolean {
    return this.filterValidationAttempted && !(this.draftFilters.team_id || '').trim();
  }

  isDraftSubjectInvalid(): boolean {
    return (
      this.filterValidationAttempted &&
      this.testTypeFilter === 'paper' &&
      !(this.draftFilters.subject || '').trim()
    );
  }

  // ─── Anchored Filter Popover (CDK Overlay) Methods ───
  openFiltersOverlay(): void {
    if (!this.filtersBtn) return;
    if (this.filtersOverlayRef) {
      this.closeFiltersOverlay();
      return;
    }

    this.draftFilters = this.cloneFilters(this.appliedFilters);
    this.filterValidationAttempted = false;
    this.filterValidationError = '';
    this.deptFilterSearch = '';
    this.teamFilterSearch = '';
    this.campusFilterSearch = '';
    this.subjectFilterSearch = '';
    this.testFilterSearch = '';
    this.refreshDraftOptions();

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
    this.filtersOverlayRef.keydownEvents().subscribe((ev: KeyboardEvent) => {
      if (ev.key === 'Escape') this.closeFiltersOverlay();
    });

    const portal = new TemplatePortal(this.filtersPanelTpl, this.vcr);
    this.filtersOverlayRef.attach(portal);
  }

  closeFiltersOverlay(): void {
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (_) {}
      this.filtersOverlayRef = null;
    }
  }

  onDraftDepartmentChange(): void {
    this.draftFilters.team_id = '';
    this.draftFilters.subject = '';
    this.draftFilters.test_id = '';
    this.refreshDraftOptions();
    if (this.filterValidationAttempted) {
      this.updateFilterValidationError();
    }
  }

  onDraftTeamChange(): void {
    this.draftFilters.subject = '';
    this.draftFilters.test_id = '';
    this.refreshDraftOptions();
    if (this.filterValidationAttempted) {
      this.updateFilterValidationError();
    }
  }

  onDraftCampusChange(): void {
    this.draftFilters.test_id = '';
    this.refreshDraftOptions();
  }

  onDraftSubjectChange(): void {
    this.draftFilters.test_id = '';
    this.refreshDraftOptions();
    if (this.filterValidationAttempted) {
      this.updateFilterValidationError();
    }
  }

  onDraftCreatedByMeChange(): void {
    this.refreshDraftOptions();
    if (this.draftFilters.test_id) {
      const stillValid = this.filteredTestsForDraft.some((t) => t.id === this.draftFilters.test_id);
      if (!stillValid) {
        this.draftFilters.test_id = '';
      }
    }
  }

  onDropdownSearchInput(event: Event): void {
    event.stopPropagation();
    this.refreshDraftOptions();
  }

  getCreatedDateRangeDisplay(state: TestFilterState = this.draftFilters): string {
    const startStr = this.formatDisplayDate(state.start_date);
    const endStr = this.formatDisplayDate(state.end_date);
    if (startStr && endStr) return `${startStr} - ${endStr}`;
    if (startStr) return startStr;
    if (endStr) return endStr;
    return '';
  }

  openDateRangePicker(): void {
    const dialogRef = this.dialog.open(DateRangePickerDialogComponent, {
      width: '520px',
      data: {
        startDate: this.draftFilters.start_date,
        endDate: this.draftFilters.end_date,
      },
    });

    dialogRef.afterClosed().subscribe((res: DateRangeDialogResult | undefined) => {
      if (res) {
        this.draftFilters.start_date = res.startDate;
        this.draftFilters.end_date = res.endDate;
      }
    });
  }

  clearDraftDates(event: Event): void {
    event.stopPropagation();
    this.draftFilters.start_date = null;
    this.draftFilters.end_date = null;
  }

  applyFilters(): void {
    this.filterValidationAttempted = true;
    if (!this.updateFilterValidationError()) {
      return;
    }
    this.filterValidationAttempted = false;
    this.filterValidationError = '';
    this.appliedFilters = this.cloneFilters(this.draftFilters);
    this.hasAppliedFilters = true;
    this.refreshAppliedFilterChips();
    this.closeFiltersOverlay();
    this.testPageIndex = 0;
    this.loadTestUsageData();
  }

  resetFilters(): void {
    this.draftFilters = this.createEmptyFilters();
    this.appliedFilters = this.createEmptyFilters();
    this.hasAppliedFilters = false;
    this.filterValidationAttempted = false;
    this.filterValidationError = '';
    this.deptFilterSearch = '';
    this.teamFilterSearch = '';
    this.campusFilterSearch = '';
    this.subjectFilterSearch = '';
    this.testFilterSearch = '';
    this.refreshDraftOptions();
    this.refreshAppliedFilterChips();
    this.closeFiltersOverlay();
    this.testPageIndex = 0;
    this.loadTestUsageData();
  }

  removeAppliedFilter(key: AppliedFilterChip['key']): void {
    if (
      key === 'department' ||
      key === 'team' ||
      (key === 'subject' && this.testTypeFilter === 'paper')
    ) {
      return;
    }
    switch (key) {
      case 'campus':
        this.appliedFilters.campus_id = '';
        this.appliedFilters.test_id = '';
        break;
      case 'subject':
        this.appliedFilters.subject = '';
        this.appliedFilters.test_id = '';
        break;
      case 'test':
        this.appliedFilters.test_id = '';
        break;
      case 'created_by_me':
        this.appliedFilters.created_by_me = false;
        break;
      case 'date_range':
        this.appliedFilters.start_date = null;
        this.appliedFilters.end_date = null;
        break;
    }
    this.refreshAppliedFilterChips();
    if (this.activeFilterCount === 0) {
      this.hasAppliedFilters = false;
    }
    this.testPageIndex = 0;
    this.loadTestUsageData();
  }

  formatDisplayDate(d: Date | null): string {
    if (!d || isNaN(d.getTime())) return '';
    const dd = String(d.getDate()).padStart(2, '0');
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const yyyy = d.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  }

  private formatIsoDateParam(d: Date | null): string {
    if (!d || isNaN(d.getTime())) return '';
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  private getEffectiveInstituteIdForMasters(): string {
    if (this.isSuperAdmin) {
      return this.selectedInstituteId && this.selectedInstituteId !== 'all'
        ? this.selectedInstituteId
        : '';
    }
    return this.loggedInstituteId || (this.summary?.institute_id && this.summary.institute_id !== 'all' ? this.summary.institute_id : '');
  }

  loadFilterMasterData(force = false): void {
    const instId = this.getEffectiveInstituteIdForMasters();
    const masterKey = this.isSuperAdmin ? (instId || 'all') : (instId || 'self');
    if (!force && this.lastLoadedMasterInstKey === masterKey) {
      return;
    }
    this.lastLoadedMasterInstKey = masterKey;

    const query = instId ? `?institute_id=${encodeURIComponent(instId)}` : '';
    const headers = this.getAuthHeaders();

    // 1. Departments / Classes
    this.http.get<any>(`${API_BASE}/get-department-list${query}`, { headers }).subscribe({
      next: (res) => {
        const raw = res?.data || res || [];
        const items = Array.isArray(raw) ? raw : [];
        this.departmentsList = items
          .map((d: any) => ({
            id: String(d.department_id || d.id || d.dept_id || d.name || ''),
            name: String(d.name || d.department_name || d.department || d || ''),
          }))
          .filter((x) => !!x.name);
        this.refreshDraftOptions();
        this.refreshAppliedFilterChips();
      },
      error: (err) => {
        console.error('Error loading departments/classes for filter:', err);
        this.departmentsList = [];
        this.refreshDraftOptions();
      },
    });

    // 2. Teams / Sections / Years
    this.http.get<any>(`${API_BASE}/get-teams-list${query}`, { headers }).subscribe({
      next: (res) => {
        const raw = res?.data || res || [];
        const items = Array.isArray(raw) ? raw : [];
        this.allTeamsList = items
          .map((t: any) => ({
            id: String(t.team_id || t.id || t.teamId || t.name || ''),
            name: String(t.name || t.team_name || t.team || t || ''),
            department_id:
              t.department_id != null
                ? String(t.department_id)
                : t.dept_id != null
                ? String(t.dept_id)
                : null,
            department_name: t.department_name || t.department || null,
          }))
          .filter((x) => !!x.name);
        this.refreshDraftOptions();
        this.refreshAppliedFilterChips();
      },
      error: (err) => {
        console.error('Error loading teams/sections for filter:', err);
        this.allTeamsList = [];
        this.refreshDraftOptions();
      },
    });

    // 3. Campuses (endpoint requires institute_id)
    if (instId) {
      this.http
        .get<any>(`${API_BASE}/get-campus-list?institute_id=${encodeURIComponent(instId)}`, {
          headers,
        })
        .subscribe({
          next: (res) => {
            const raw = res?.data || res?.campuses || res || [];
            const items = Array.isArray(raw) ? raw : [];
            this.campusesList = items
              .map((c: any) => ({
                id: String(c.campus_id || c.id || c.name || ''),
                name: String(c.name || c.campus_name || c || ''),
              }))
              .filter((x) => !!x.name);
            this.refreshDraftOptions();
            this.refreshAppliedFilterChips();
          },
          error: (err) => {
            console.error('Error loading campuses for filter:', err);
            this.campusesList = [];
            this.refreshDraftOptions();
          },
        });
    } else {
      this.campusesList = [];
      this.refreshDraftOptions();
    }

    // 4. Subjects
    this.http.get<any>(`${API_BASE}/get-subject-list${query}`, { headers }).subscribe({
      next: (res) => {
        const raw = res?.data || res || [];
        const items = Array.isArray(raw) ? raw : [];
        this.subjectsList = items
          .map((s: any) => ({
            id: String(s.subject_id || s.id || s.subjectId || s.name || ''),
            name: String(s.subject_name || s.name || s.title || s || ''),
          }))
          .filter((x) => !!x.name);
        this.refreshDraftOptions();
        this.refreshAppliedFilterChips();
      },
      error: (err) => {
        console.error('Error loading subjects for filter:', err);
        this.subjectsList = [];
        this.refreshDraftOptions();
      },
    });
  }

  private getAuthHeaders(): { [key: string]: string } {
    const token = sessionStorage.getItem('token');
    const headers: { [key: string]: string } = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    const globalInst = sessionStorage.getItem('globalInstituteId');
    if (globalInst) {
      headers['X-Institute-Id'] = globalInst;
      headers['X-Global-Institute-Id'] = globalInst;
    }
    return headers;
  }

  loadInstitutesOverview(): void {
    if (!this.isSuperAdmin) return;
    this.http
      .get<{ status: boolean; data: InstituteOverviewItem[] }>(
        `${API_BASE}/ai-credits/institutes-overview`,
        { headers: this.getAuthHeaders() }
      )
      .subscribe({
        next: (res) => {
          if (res && res.status && res.data) {
            this.institutesOverview = res.data;
            this.institutePageIndex = 0;
            this.institutesList = res.data.map((item) => ({
              institute_id: item.institute_id,
              name: item.name,
              short_name: item.short_name,
              industry_type: item.industry_type,
              industry_sector: item.industry_sector,
            }));
            this.refreshTerminology();
          }
        },
        error: (err) => {
          console.error('Error fetching institutes overview:', err);
        },
      });
  }

  loadSummary(): void {
    let url = `${API_BASE}/ai-credits/summary`;
    if (this.isSuperAdmin && this.selectedInstituteId) {
      url += `?institute_id=${encodeURIComponent(this.selectedInstituteId)}`;
    }

    this.http
      .get<{ status: boolean; data: CreditSummary }>(url, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          if (res && res.status && res.data) {
            this.summary = res.data;
            if (!this.isSuperAdmin && res.data.institute_id && res.data.institute_id !== 'all') {
              const prevInst = this.loggedInstituteId;
              this.loggedInstituteId = res.data.institute_id;
              if (res.data.industry_type) {
                this.loggedIndustryType = res.data.industry_type;
              }
              if (prevInst !== this.loggedInstituteId) {
                this.loadFilterMasterData(true);
              }
            }
            this.refreshTerminology();
          }
        },
        error: (err) => {
          console.error('Error fetching summary:', err);
        },
      });
  }

  loadBreakdown(): void {
    let url = `${API_BASE}/ai-credits/feature-breakdown`;
    if (this.isSuperAdmin && this.selectedInstituteId) {
      url += `?institute_id=${encodeURIComponent(this.selectedInstituteId)}`;
    }

    this.http
      .get<{
        status: boolean;
        data: {
          columns?: FeatureColumnItem[];
          breakdown: FeatureBreakdownItem[];
          totals: BreakdownTotals;
        };
      }>(url, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          if (res && res.status && res.data) {
            this.featureColumns = res.data.columns || res.data.breakdown || [];
            this.breakdown = res.data.breakdown || [];
            this.totals = res.data.totals || null;
          }
        },
        error: (err) => {
          console.error('Error fetching breakdown:', err);
        },
      });
  }

  private getClientTimezoneParams(): string {
    const parts: string[] = [];
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (tz && tz.trim()) {
        parts.push(`tz=${encodeURIComponent(tz.trim())}`);
      }
    } catch (_) {}
    parts.push(`tz_offset=${encodeURIComponent(String(new Date().getTimezoneOffset()))}`);
    return parts.join('&');
  }

  get chartSubtitleText(): string {
    const range = this.chartDateRangeLabel;
    if (this.selectedPeriod === 'today') {
      const tz = this.chartTimezoneAbbr ? ` (${this.chartTimezoneAbbr})` : '';
      return range
        ? `Hourly token consumption · ${range}${tz}`
        : 'Hourly token consumption for today';
    }
    if (this.selectedPeriod === 'monthly') {
      return range
        ? `Daily token consumption · ${range}`
        : 'Daily token consumption for this month';
    }
    return range
      ? `Daily token consumption · Mon–Sun · ${range}`
      : 'Daily token consumption for the current calendar week (Mon–Sun)';
  }

  get totalMetricLabel(): string {
    if (this.selectedPeriod === 'today') return 'Total Tokens Today';
    if (this.selectedPeriod === 'monthly') return 'Total Tokens This Month';
    return 'Total Tokens (This Week)';
  }

  get peakMetricLabel(): string {
    return this.selectedPeriod === 'today' ? 'Peak Usage Hour' : 'Peak Usage Day';
  }

  get averageMetricLabel(): string {
    return this.selectedPeriod === 'today'
      ? 'Average Tokens Per Hour'
      : 'Average Tokens Per Day';
  }

  get averageMetricSubtext(): string {
    if (this.selectedPeriod === 'today') {
      const hrs = this.chartBucketCount || 1;
      return `tokens / hr (${hrs} elapsed ${hrs === 1 ? 'hr' : 'hrs'})`;
    }
    if (this.selectedPeriod === 'monthly') {
      const days = this.chartBucketCount || 1;
      return `tokens / day (${days} ${days === 1 ? 'day' : 'days'} elapsed)`;
    }
    const elapsedDays = this.chartBucketCount || 1;
    return `tokens / day (${elapsedDays} elapsed ${elapsedDays === 1 ? 'day' : 'days'})`;
  }

  loadAnalytics(period: 'today' | 'weekly' | 'monthly'): void {
    this.selectedPeriod = period;
    this.hoveredBar = null;
    this.chartLoading = true;

    let url = `${API_BASE}/ai-credits/analytics?period=${period}&${this.getClientTimezoneParams()}`;
    if (this.isSuperAdmin && this.selectedInstituteId) {
      url += `&institute_id=${encodeURIComponent(this.selectedInstituteId)}`;
    }

    this.http
      .get<{
        status: boolean;
        data: AnalyticsApiData;
      }>(url, {
        headers: this.getAuthHeaders(),
      })
      .subscribe({
        next: (res) => {
          this.isLoading = false;
          this.chartLoading = false;
          if (res && res.status && res.data) {
            const d = res.data;
            this.chartPeakLabel = d.peak_label || 'No usage yet';
            this.chartPeakValue = d.peak_value || 0;
            this.chartPeriodTotal = d.period_total || 0;
            this.chartAverage = d.avg || 0;
            this.chartPeriodTitle =
              d.period_title ||
              (period === 'today'
                ? 'Today (Hourly)'
                : period === 'monthly'
                ? 'This Month'
                : 'This Week');
            this.chartDateRangeLabel = d.date_range_label || '';
            this.chartTimezoneAbbr = d.timezone_abbr || '';
            this.chartIsIncomplete = !!d.is_incomplete;
            this.chartIncompleteNote = d.incomplete_note || '';
            this.chartBucketCount =
              d.elapsed_days || d.bucket_count || (d.labels || []).length || 1;
            this.chartAvgUnit = d.avg_unit || (period === 'today' ? 'hour' : 'day');
            this.buildChartBars(d);
          }
        },
        error: (err) => {
          this.isLoading = false;
          this.chartLoading = false;
          console.error('Error fetching analytics:', err);
        },
      });
  }

  loadTestUsageData(): void {
    this.testsLoading = true;
    const params: string[] = [`test_type=${encodeURIComponent(this.testTypeFilter)}`];

    if (this.isSuperAdmin && this.selectedInstituteId) {
      params.push(`institute_id=${encodeURIComponent(this.selectedInstituteId)}`);
    }
    if (this.testSearchTerm.trim()) {
      params.push(`search=${encodeURIComponent(this.testSearchTerm.trim())}`);
    }
    if (this.appliedFilters.department_id) {
      params.push(`department_id=${encodeURIComponent(this.appliedFilters.department_id)}`);
    }
    if (this.appliedFilters.team_id) {
      params.push(`team_id=${encodeURIComponent(this.appliedFilters.team_id)}`);
    }
    if (this.appliedFilters.campus_id) {
      params.push(`campus_id=${encodeURIComponent(this.appliedFilters.campus_id)}`);
    }
    if (this.testTypeFilter === 'paper' && this.appliedFilters.subject) {
      params.push(`subject=${encodeURIComponent(this.appliedFilters.subject)}`);
    }
    if (this.appliedFilters.test_id) {
      params.push(`test_id=${encodeURIComponent(this.appliedFilters.test_id)}`);
    }
    if (this.appliedFilters.created_by_me) {
      params.push(`created_by_me=true`);
    }
    const startIso = this.formatIsoDateParam(this.appliedFilters.start_date);
    if (startIso) {
      params.push(`created_start_date=${encodeURIComponent(startIso)}`);
    }
    const endIso = this.formatIsoDateParam(this.appliedFilters.end_date);
    if (endIso) {
      params.push(`created_end_date=${encodeURIComponent(endIso)}`);
    }

    const url = `${API_BASE}/ai-credits/test-usage?${params.join('&')}`;

    this.http
      .get<{
        status: boolean;
        data: {
          summary: {
            total_paper_credits: number;
            total_online_credits: number;
            total_standalone_credits: number;
            grand_total: number;
          };
          tests: TestUsageItem[];
          filter_options?: {
            creators: FilterOptionItem[];
            tests: FilterTestMeta[];
          };
        };
      }>(url, { headers: this.getAuthHeaders() })
      .subscribe({
        next: (res) => {
          this.testsLoading = false;
          if (res && res.status && res.data) {
            this.testUsageList = res.data.tests || [];
            this.testPageIndex = 0;
            const s = res.data.summary || {};
            this.paperCreditsTotal = s.total_paper_credits || 0;
            this.onlineCreditsTotal = s.total_online_credits || 0;
            this.standaloneCreditsTotal = s.total_standalone_credits || 0;
            if (res.data.filter_options) {
              this.allTestsMeta = res.data.filter_options.tests || [];
              this.refreshDraftOptions();
              this.refreshAppliedFilterChips();
            }
          }
        },
        error: (err) => {
          this.testsLoading = false;
          console.error('Error loading test usage data:', err);
        },
      });
  }

  toggleTestExpand(test: TestUsageItem): void {
    test.expanded = !test.expanded;
  }

  getFeatureKeys(features: { [key: string]: TestFeatureItem }): string[] {
    return Object.keys(features || {});
  }

  formatCompactTokens(val: number): string {
    if (!val || val <= 0) return '0';
    if (val >= 1_000_000) {
      return `${Number((val / 1_000_000).toFixed(1))}M`;
    }
    if (val >= 1_000) {
      return `${Number((val / 1_000).toFixed(1))}K`;
    }
    return String(Math.round(val));
  }

  private computeNiceYAxis(maxDataValue: number): { max: number; ticks: ChartYAxisTick[] } {
    const plotTop = this.chartPlotTop;
    const plotBottom = this.chartPlotBottom;
    const plotHeight = plotBottom - plotTop;

    let step: number;
    let numIntervals: number;

    if (!maxDataValue || maxDataValue <= 0) {
      step = 250;
      numIntervals = 4;
    } else {
      const targetIntervals = 4;
      const rawStep = maxDataValue / targetIntervals;
      const magnitude = Math.pow(10, Math.floor(Math.log10(rawStep)));
      const residual = rawStep / magnitude;
      const niceMultipliers = [1, 2, 2.5, 5, 10];
      const multiplier = niceMultipliers.find((m) => m >= residual) || 10;
      step = multiplier * magnitude;
      if (step < 1) {
        step = 1;
      } else if (maxDataValue < 20) {
        step = Math.ceil(step);
      }
      numIntervals = Math.max(2, Math.ceil(maxDataValue / step));
    }

    const niceMax = step * numIntervals;
    const ticks: ChartYAxisTick[] = [];
    for (let i = 0; i <= numIntervals; i++) {
      const value = Math.round(step * i);
      const ratio = niceMax > 0 ? value / niceMax : 0;
      const y = plotBottom - ratio * plotHeight;
      ticks.push({
        value,
        label: this.formatCompactTokens(value),
        y,
        isBaseline: i === 0,
      });
    }

    return { max: niceMax, ticks };
  }

  buildChartBars(data: AnalyticsApiData): void {
    const labels = data.labels || [];
    const values = data.values || [];
    const promptValues = data.prompt_values || [];
    const compValues = data.completion_values || [];
    const fullLabels = data.full_labels || labels;
    const isoDates = data.iso_dates || [];
    const operations = data.operations || [];
    const isCurrentFlags = data.is_current_flags || [];
    const isFutureFlags = data.is_future_flags || [];

    const numericValues = values.filter((v): v is number => v !== null && v !== undefined);
    const maxDataVal = numericValues.length > 0 ? Math.max(...numericValues, 0) : 0;
    const { max: yAxisMax, ticks } = this.computeNiceYAxis(maxDataVal);
    this.chartYAxisTicks = ticks;

    if (labels.length === 0) {
      this.chartBars = [];
      return;
    }

    const plotLeft = this.chartPlotLeft;
    const plotRight = this.chartPlotRight;
    const plotTop = this.chartPlotTop;
    const plotBottom = this.chartPlotBottom;
    const plotWidth = plotRight - plotLeft;
    const plotHeight = plotBottom - plotTop;
    const totalSlots = labels.length;
    const slotWidth = plotWidth / totalSlots;

    // Bar width adapts smoothly for 1..31 slots while keeping balanced whitespace
    const maxBarW = this.selectedPeriod === 'weekly' ? 54 : 38;
    const minBarW = totalSlots > 24 ? 10 : 14;
    const barGap = totalSlots > 20 ? 5 : totalSlots > 12 ? 8 : 16;
    const barWidth = Math.max(minBarW, Math.min(maxBarW, Math.floor(slotWidth - barGap)));

    // Determine X-axis label thinning so labels never collide
    let labelStep = 1;
    if (this.selectedPeriod === 'today' && totalSlots > 12) {
      labelStep = 2;
    } else if (this.selectedPeriod === 'monthly' && totalSlots > 25) {
      labelStep = 2;
    }

    // Show compact value labels on bars only when wide enough to avoid overlap
    const allowAllValueLabels = this.selectedPeriod === 'weekly';
    const allowNonZeroValueLabels = slotWidth >= 34;

    this.chartBars = labels.map((label, i) => {
      const rawVal = values[i];
      const isFuture = !!isFutureFlags[i] || rawVal === null || rawVal === undefined;
      const val = isFuture ? null : Number(rawVal || 0);
      const rawHeight = !isFuture && yAxisMax > 0 && (val || 0) > 0 ? ((val || 0) / yAxisMax) * plotHeight : 0;
      // Preserve true linear scale: future/zero render as 0px; tiny positive values get a 1.5px hairline so they aren't invisible
      const height = isFuture || !val || val <= 0 ? 0 : Math.max(1.5, rawHeight);
      const slotX = plotLeft + i * slotWidth;
      const x = slotX + (slotWidth - barWidth) / 2;
      const y = plotBottom - height;
      const centerX = x + barWidth / 2;

      const isLast = i === totalSlots - 1;
      let showXLabel = true;
      if (labelStep > 1) {
        if (isLast) {
          showXLabel = true;
        } else if (i === totalSlots - 2) {
          showXLabel = false;
        } else {
          showXLabel = i % labelStep === 0;
        }
      }

      // Never show "0" or any value label on future dates
      const showValueLabel = !isFuture && (allowAllValueLabels || (allowNonZeroValueLabels && (val || 0) > 0));
      const rawLeftPct = (centerX / this.chartViewBoxWidth) * 100;
      const tooltipLeftPct = Math.max(14, Math.min(86, rawLeftPct));
      const anchorY = !isFuture && (val || 0) > 0 ? y : plotBottom - 12;
      const tooltipBelow = anchorY < plotTop + 56;
      const tooltipTopPct = tooltipBelow
        ? ((anchorY + 14) / this.chartViewBoxHeight) * 100
        : ((anchorY - 12) / this.chartViewBoxHeight) * 100;

      return {
        x,
        y,
        width: barWidth,
        height,
        slotX,
        slotWidth,
        label,
        fullLabel: fullLabels[i] || label,
        isoDate: isoDates[i] || '',
        value: val,
        compactValue: isFuture ? '' : this.formatCompactTokens(val || 0),
        prompt_value: isFuture ? 0 : Number(promptValues[i] || 0),
        comp_value: isFuture ? 0 : Number(compValues[i] || 0),
        operations: isFuture ? 0 : Number(operations[i] || 0),
        isCurrent: !!isCurrentFlags[i],
        isFuture,
        showXLabel,
        showValueLabel,
        tooltipLeftPct,
        tooltipTopPct,
        tooltipBelow,
      };
    });
  }

  getFeatureIcon(featureName: string): string {
    const f = (featureName || '').toLowerCase();
    if (f.includes('fine')) return 'tune';
    if (f.includes('anchor')) return 'pin_drop';
    if (f.includes('student') || f.includes('roster') || f.includes('identity')) return 'person_search';
    if (f.includes('split')) return 'call_split';
    if (f.includes('paper') || f.includes('sheet')) return 'description';
    if (f.includes('diagnos') || f.includes('misconception')) return 'analytics';
    if (f.includes('subtopic') || f.includes('taxonom')) return 'category';
    if (f.includes('question') && !f.includes('fine')) return 'help_outline';
    if (f.includes('eval') || f.includes('review')) return 'fact_check';
    return 'smart_toy';
  }

  getProgressColor(): string {
    const pct = this.summary?.percentage_used || 0;
    if (pct >= 90) return 'warn';
    if (pct >= 70) return 'accent';
    return 'primary';
  }

  getStatusBadgeClass(status: string): string {
    switch ((status || '').toLowerCase()) {
      case 'active':
        return 'status-active';
      case 'low balance':
        return 'status-warning';
      case 'exhausted':
        return 'status-danger';
      case 'not allocated':
        return 'status-neutral';
      default:
        return 'status-neutral';
    }
  }

  ngOnDestroy(): void {
    this.closeFiltersOverlay();
    this.pageMeta.clear();
    this.subs.unsubscribe();
  }
}
