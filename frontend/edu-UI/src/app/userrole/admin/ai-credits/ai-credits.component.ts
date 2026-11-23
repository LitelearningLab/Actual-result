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
  institute_id?: string;
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
  country: string;
  city: string;
  industry: string;
  sector: string;
  institute_id: string;
  department_ids: string[];
  team_ids: string[];
  campus_ids: string[];
  subjects: string[];
  test_ids: string[];
  created_by_me: boolean;
  start_date: Date | null;
  end_date: Date | null;
}

export interface AppliedFilterChip {
  key: 'institute' | 'department' | 'team' | 'campus' | 'subject' | 'test' | 'created_by_me' | 'date_range';
  label: string;
  required?: boolean;
}

export interface InstituteFilterState {
  institute_ids: string[];
  countries: string[];
  cities: string[];
  industries: string[];
  sectors: string[];
  active_status: boolean | null;
}

export interface InstAppliedFilterChip {
  key: 'institutes' | 'country' | 'city' | 'industry' | 'sector' | 'active_status';
  label: string;
  required?: boolean;
}

interface InstituteLocationEntry {
  country_code: string;
  country_name: string;
  city: string;
}

interface InstituteMasterRecord {
  id: string;
  name: string;
  short_name: string;
  industry_type: string;
  industry_sector: string;
  active_status: boolean;
  country_codes: string[];
  country_names: string[];
  cities: string[];
  locations: InstituteLocationEntry[];
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

  // Section 3: All Institutes AI Credit Allocations Filter Popover state
  @ViewChild('instFiltersBtn') instFiltersBtn?: ElementRef;
  @ViewChild('instFiltersPanel') instFiltersPanelTpl!: TemplateRef<any>;
  instFiltersOverlayRef: OverlayRef | null = null;
  hasAppliedInstFilters = false;
  instOverviewLoading = false;
  instAppliedFilters: InstituteFilterState = this.createEmptyInstFilters();
  instDraftFilters: InstituteFilterState = this.createEmptyInstFilters();
  instFilterValidationAttempted = false;
  instFilterValidationError = '';

  // Master data & search terms for Institute Table Filters
  private instMasterLoaded = false;
  private instMasterRecords: InstituteMasterRecord[] = [];
  private locationCountriesRaw: Array<{ code: string; name: string }> = [];
  instCountriesList: Array<{ code: string; name: string }> = [];
  readonly instIndustryTypes: string[] = ['School', 'College', 'BPO', 'Bank', 'IT'];
  private readonly instSectorMap: Record<string, string[]> = {
    School: ['School'],
    College: ['Engineering', 'Arts'],
    BPO: ['Healthcare', 'Finance'],
    Bank: ['Bank'],
    IT: ['IT'],
  };
  loadingInstFilterOptions = false;
  loadingInstCountries = false;

  instFilterNameSearch = '';
  instCountrySearch = '';
  instCitySearch = '';
  instIndustrySearch = '';
  instSectorSearch = '';

  filteredInstOptionsForDraft: Array<{ id: string; name: string }> = [];
  filteredInstCountriesForDraft: Array<{ code: string; name: string }> = [];
  filteredInstCitiesForDraft: Array<{ code: string; name: string }> = [];
  filteredInstIndustriesForDraft: string[] = [];
  filteredInstSectorsForDraft: string[] = [];
  instAppliedFilterChips: InstAppliedFilterChip[] = [];
  instActiveFilterCount = 0;

  private createEmptyInstFilters(): InstituteFilterState {
    return {
      institute_ids: [],
      countries: [],
      cities: [],
      industries: [],
      sectors: [],
      active_status: true,
    };
  }

  private cloneInstFilters(src: InstituteFilterState): InstituteFilterState {
    return {
      institute_ids: [...(src.institute_ids || [])],
      countries: [...(src.countries || [])],
      cities: [...(src.cities || [])],
      industries: [...(src.industries || [])],
      sectors: [...(src.sectors || [])],
      active_status: src.active_status === undefined ? true : src.active_status,
    };
  }

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

  get filteredCreditsTotal(): number {
    if (!this.testUsageList || !this.testUsageList.length) return 0;
    return this.testUsageList.reduce((sum, item) => sum + (item.total_credits || 0), 0);
  }

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
  testCountryFilterSearch = '';
  testCityFilterSearch = '';
  testIndustryFilterSearch = '';
  testSectorFilterSearch = '';
  testInstFilterSearch = '';
  deptFilterSearch = '';
  teamFilterSearch = '';
  campusFilterSearch = '';
  subjectFilterSearch = '';
  testFilterSearch = '';

  private createEmptyFilters(): TestFilterState {
    return {
      country: '',
      city: '',
      industry: '',
      sector: '',
      institute_id: '',
      department_ids: [],
      team_ids: [],
      campus_ids: [],
      subjects: [],
      test_ids: [],
      created_by_me: false,
      start_date: null,
      end_date: null,
    };
  }

  private cloneFilters(src: TestFilterState): TestFilterState {
    return {
      country: src.country || '',
      city: src.city || '',
      industry: src.industry || '',
      sector: src.sector || '',
      institute_id: src.institute_id || '',
      department_ids: [...(src.department_ids || [])],
      team_ids: [...(src.team_ids || [])],
      campus_ids: [...(src.campus_ids || [])],
      subjects: [...(src.subjects || [])],
      test_ids: [...(src.test_ids || [])],
      created_by_me: !!src.created_by_me,
      start_date: src.start_date ? new Date(src.start_date.getTime()) : null,
      end_date: src.end_date ? new Date(src.end_date.getTime()) : null,
    };
  }

  // Cached terminology & filter options (never recomputed inside template getters)
  terminology: InstituteTerminology = getInstituteTerminology('');
  filteredTestCountriesForDraft: Array<{ code: string; name: string }> = [];
  filteredTestCitiesForDraft: Array<{ code: string; name: string }> = [];
  filteredTestIndustriesForDraft: string[] = [];
  filteredTestSectorsForDraft: string[] = [];
  filteredTestInstitutesForDraft: Array<{ id: string; name: string }> = [];
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

    if (this.isSuperAdmin) {
      const scopedInstId =
        (this.filtersOverlayRef ? this.draftFilters.institute_id : this.appliedFilters.institute_id) ||
        (this.selectedInstituteId && this.selectedInstituteId !== 'all' ? this.selectedInstituteId : '');
      if (scopedInstId) {
        const masterRec = this.instMasterRecords.find((i) => String(i.id) === String(scopedInstId));
        const listRec = this.institutesList.find(
          (i) => String(i.institute_id) === String(scopedInstId)
        );
        industryType = masterRec?.industry_type || listRec?.industry_type || '';
        if (!industryType) {
          const instName = (masterRec?.name || listRec?.name || '').toLowerCase();
          if (instName.includes('school')) industryType = 'School';
          else if (instName.includes('college')) industryType = 'College';
        }
      }
      if (!industryType && this.summary?.industry_type && this.selectedInstituteId !== 'all') {
        industryType = this.summary.industry_type;
      }
    } else {
      if (this.summary?.industry_type) {
        industryType = this.summary.industry_type;
      } else if (this.loggedIndustryType) {
        industryType = this.loggedIndustryType;
      }
    }

    if (!industryType && this.summary?.institute_name && (!this.isSuperAdmin || this.selectedInstituteId !== 'all')) {
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
    const deptIds = (this.draftFilters.department_ids || [])
      .map((d) => String(d || '').trim())
      .filter(Boolean);
    if (deptIds.length === 0) return [];
    const deptIdLowerSet = new Set(deptIds.map((d) => d.toLowerCase()));
    const deptNameLowerSet = new Set(
      this.departmentsList
        .filter((d) => deptIdLowerSet.has(String(d.id).toLowerCase()))
        .map((d) => (d.name || '').trim().toLowerCase())
        .filter(Boolean)
    );
    return this.allTeamsList.filter((t) => {
      const tDeptId = (t.department_id || '').trim().toLowerCase();
      const tDeptName = (t.department_name || '').trim().toLowerCase();
      if (tDeptId && deptIdLowerSet.has(tDeptId)) return true;
      if (tDeptName && deptNameLowerSet.has(tDeptName)) return true;
      return false;
    });
  }

  private isPlaceholderSubject(name: string): boolean {
    const norm = (name || '').trim().toLowerCase();
    return !norm || norm === 'general' || norm === 'paper test' || norm === 'online test';
  }

  private computeAvailableSubjectsForDraft(): FilterOptionItem[] {
    const instId = this.isSuperAdmin ? (this.draftFilters.institute_id || '').trim().toLowerCase() : '';
    const deptSet = new Set(
      (this.draftFilters.department_ids || []).map((d) => String(d || '').trim().toLowerCase()).filter(Boolean)
    );
    const teamSet = new Set(
      (this.draftFilters.team_ids || []).map((tm) => String(tm || '').trim().toLowerCase()).filter(Boolean)
    );

    const mergedMap = new Map<string, FilterOptionItem>();
    for (const s of this.subjectsList) {
      if (s.name && !this.isPlaceholderSubject(s.name)) {
        mergedMap.set(s.name.toLowerCase(), { id: s.id || s.name, name: s.name });
      }
    }
    for (const t of this.allTestsMeta) {
      if (instId && t.institute_id && t.institute_id.toLowerCase() !== instId) continue;
      const sName = (t.subject || '').trim();
      if (!this.isPlaceholderSubject(sName) && !mergedMap.has(sName.toLowerCase())) {
        mergedMap.set(sName.toLowerCase(), { id: t.subject_id || sName, name: sName });
      }
    }

    const allSortedSubjects = Array.from(mergedMap.values()).sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    if (deptSet.size === 0 && teamSet.size === 0) {
      return allSortedSubjects;
    }

    const matchingTests = this.allTestsMeta.filter((t) => {
      if (t.test_type !== this.testTypeFilter) {
        return false;
      }
      if (instId && t.institute_id && t.institute_id.toLowerCase() !== instId) {
        return false;
      }
      if (deptSet.size > 0 && !(t.department_ids || []).some((d) => deptSet.has(d.toLowerCase()))) {
        return false;
      }
      if (teamSet.size > 0 && !(t.team_ids || []).some((tm) => teamSet.has(tm.toLowerCase()))) {
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
    const instId = this.isSuperAdmin ? (this.draftFilters.institute_id || '').trim().toLowerCase() : '';
    const deptSet = new Set(
      (this.draftFilters.department_ids || []).map((d) => String(d || '').trim().toLowerCase()).filter(Boolean)
    );
    const teamSet = new Set(
      (this.draftFilters.team_ids || []).map((tm) => String(tm || '').trim().toLowerCase()).filter(Boolean)
    );
    const campusSet = new Set(
      (this.draftFilters.campus_ids || []).map((c) => String(c || '').trim().toLowerCase()).filter(Boolean)
    );
    const subjVals =
      this.testTypeFilter === 'paper'
        ? (this.draftFilters.subjects || []).map((s) => String(s || '').trim().toLowerCase()).filter(Boolean)
        : [];
    const subjMatchSet = new Set<string>(subjVals);
    if (subjVals.length > 0) {
      for (const s of availableSubjects) {
        if (subjMatchSet.has(s.id.toLowerCase()) || subjMatchSet.has(s.name.toLowerCase())) {
          subjMatchSet.add(s.id.toLowerCase());
          subjMatchSet.add(s.name.toLowerCase());
        }
      }
    }

    return this.allTestsMeta.filter((t) => {
      if (t.test_type !== this.testTypeFilter) {
        return false;
      }
      if (instId && t.institute_id && t.institute_id.toLowerCase() !== instId) {
        return false;
      }
      if (deptSet.size > 0 && !(t.department_ids || []).some((d) => deptSet.has(d.toLowerCase()))) {
        return false;
      }
      if (teamSet.size > 0 && !(t.team_ids || []).some((tm) => teamSet.has(tm.toLowerCase()))) {
        return false;
      }
      if (campusSet.size > 0 && !(t.campus_ids || []).some((c) => campusSet.has(c.toLowerCase()))) {
        return false;
      }
      if (subjMatchSet.size > 0) {
        const tSubjId = (t.subject_id || '').toLowerCase();
        const tSubjName = (t.subject || '').toLowerCase();
        if (!subjMatchSet.has(tSubjId) && !subjMatchSet.has(tSubjName)) {
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

  private locationMatchesCountry(
    loc: InstituteLocationEntry,
    selCountryCodesLower: string[],
    selCountryNamesLower: string[]
  ): boolean {
    const locCode = (loc.country_code || '').trim().toLowerCase();
    const locName = (loc.country_name || '').trim().toLowerCase();
    if (!locCode && !locName) return false;
    return (
      (!!locCode &&
        (selCountryCodesLower.includes(locCode) || selCountryNamesLower.includes(locCode))) ||
      (!!locName &&
        (selCountryCodesLower.includes(locName) || selCountryNamesLower.includes(locName)))
    );
  }

  private getScopedInstRecordsForTestDraft(): InstituteMasterRecord[] {
    const selCountry = (this.draftFilters.country || '').trim().toLowerCase();
    const selCountryCodes = selCountry ? [selCountry] : [];
    const selCountryObj = selCountry
      ? this.instCountriesList.find((c) => c.code.toLowerCase() === selCountry)
      : null;
    const selCountryNames = selCountryObj?.name ? [selCountryObj.name.toLowerCase()] : [];
    const selCity = (this.draftFilters.city || '').trim().toLowerCase();
    const selIndustry = (this.draftFilters.industry || '').trim().toLowerCase();
    const selSector = (this.draftFilters.sector || '').trim().toLowerCase();

    return this.instMasterRecords.filter((rec) => {
      if (selCountry && selCity) {
        const hasPairedMatch = rec.locations.some(
          (loc) =>
            this.locationMatchesCountry(loc, selCountryCodes, selCountryNames) &&
            (loc.city || '').toLowerCase() === selCity
        );
        if (!hasPairedMatch) return false;
      } else if (selCountry) {
        const hasCountry = rec.locations.some((loc) =>
          this.locationMatchesCountry(loc, selCountryCodes, selCountryNames)
        );
        if (!hasCountry) return false;
      } else if (selCity) {
        const hasCity = rec.locations.some((loc) => (loc.city || '').toLowerCase() === selCity);
        if (!hasCity) return false;
      }
      if (selIndustry) {
        if ((rec.industry_type || '').toLowerCase() !== selIndustry) return false;
      }
      if (selSector) {
        if ((rec.industry_sector || '').toLowerCase() !== selSector) return false;
      }
      return true;
    });
  }

  refreshDraftOptions(): void {
    if (this.isSuperAdmin) {
      // 1. Country options for Test filter
      const cQ = (this.testCountryFilterSearch || '').trim().toLowerCase();
      this.filteredTestCountriesForDraft = cQ
        ? this.instCountriesList.filter((c) => c.name.toLowerCase().includes(cQ))
        : this.instCountriesList;

      // 2. City options (scoped per-campus to the selected Country, matching view-institutes)
      const selCountry = (this.draftFilters.country || '').trim().toLowerCase();
      const selCountryCodes = selCountry ? [selCountry] : [];
      const selCountryObj = selCountry
        ? this.instCountriesList.find((c) => c.code.toLowerCase() === selCountry)
        : null;
      const selCountryNames = selCountryObj?.name ? [selCountryObj.name.toLowerCase()] : [];
      const cityMap = new Map<string, { code: string; name: string }>();
      if (selCountry) {
        for (const rec of this.instMasterRecords) {
          for (const loc of rec.locations) {
            if (
              loc.city &&
              this.locationMatchesCountry(loc, selCountryCodes, selCountryNames)
            ) {
              const key = loc.city.toLowerCase();
              if (!cityMap.has(key)) {
                cityMap.set(key, { code: loc.city, name: loc.city });
              }
            }
          }
        }
      }
      const allCities = Array.from(cityMap.values()).sort((a, b) => a.name.localeCompare(b.name));
      const cityQ = (this.testCityFilterSearch || '').trim().toLowerCase();
      this.filteredTestCitiesForDraft = cityQ
        ? allCities.filter((c) => c.name.toLowerCase().includes(cityQ))
        : allCities;

      // 3. Industry options
      const indQ = (this.testIndustryFilterSearch || '').trim().toLowerCase();
      this.filteredTestIndustriesForDraft = indQ
        ? this.instIndustryTypes.filter((t) => t.toLowerCase().includes(indQ))
        : this.instIndustryTypes;

      // 4. Sector options (scoped to selected Industry)
      const selInd = (this.draftFilters.industry || '').trim();
      const scopedSectors = selInd ? this.instSectorMap[selInd] || [] : [];
      const secQ = (this.testSectorFilterSearch || '').trim().toLowerCase();
      this.filteredTestSectorsForDraft = secQ
        ? scopedSectors.filter((s) => s.toLowerCase().includes(secQ))
        : scopedSectors;

      // 5. Institute options (scoped by Country, City, Industry, Sector)
      const scopedInsts = this.getScopedInstRecordsForTestDraft();
      const instQ = (this.testInstFilterSearch || '').trim().toLowerCase();
      const instMatches = instQ
        ? scopedInsts.filter((i) => i.name.toLowerCase().includes(instQ))
        : scopedInsts;
      this.filteredTestInstitutesForDraft = instMatches.map((i) => ({ id: i.id, name: i.name }));
    }

    const deptQ = (this.deptFilterSearch || '').trim().toLowerCase();
    const selDepts = this.draftFilters.department_ids || [];
    const deptFiltered = deptQ
      ? this.departmentsList.filter(
          (d) => (d.name || '').toLowerCase().includes(deptQ) || selDepts.includes(d.id)
        )
      : [...this.departmentsList];
    this.filteredDepartmentsForDraft = deptFiltered.sort((a, b) => {
      const aSel = selDepts.includes(a.id);
      const bSel = selDepts.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });

    const availTeams = this.computeAvailableTeamsForDraft();
    const teamQ = (this.teamFilterSearch || '').trim().toLowerCase();
    const selTeams = this.draftFilters.team_ids || [];
    const teamFiltered = teamQ
      ? availTeams.filter(
          (t) => (t.name || '').toLowerCase().includes(teamQ) || selTeams.includes(t.id)
        )
      : [...availTeams];
    this.filteredTeamsForDraft = teamFiltered.sort((a, b) => {
      const aSel = selTeams.includes(a.id);
      const bSel = selTeams.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });

    const campusQ = (this.campusFilterSearch || '').trim().toLowerCase();
    const selCampuses = this.draftFilters.campus_ids || [];
    const campusFiltered = campusQ
      ? this.campusesList.filter(
          (c) => (c.name || '').toLowerCase().includes(campusQ) || selCampuses.includes(c.id)
        )
      : [...this.campusesList];
    this.filteredCampusesForDraft = campusFiltered.sort((a, b) => {
      const aSel = selCampuses.includes(a.id);
      const bSel = selCampuses.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });

    const availSubjects = this.computeAvailableSubjectsForDraft();
    const subjQ = (this.subjectFilterSearch || '').trim().toLowerCase();
    const selSubjs = this.draftFilters.subjects || [];
    const subjFiltered = subjQ
      ? availSubjects.filter(
          (s) => (s.name || '').toLowerCase().includes(subjQ) || selSubjs.includes(s.id)
        )
      : [...availSubjects];
    this.filteredSubjectsForDraft = subjFiltered.sort((a, b) => {
      const aSel = selSubjs.includes(a.id);
      const bSel = selSubjs.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.name || '').localeCompare(b.name || '');
    });

    const availTests = this.computeAvailableTestsForDraft(availSubjects);
    const testQ = (this.testFilterSearch || '').trim().toLowerCase();
    const selTests = this.draftFilters.test_ids || [];
    const testFiltered = testQ
      ? availTests.filter(
          (t) =>
            (t.title || '').toLowerCase().includes(testQ) ||
            (t.subject || '').toLowerCase().includes(testQ) ||
            selTests.includes(t.id)
        )
      : [...availTests];
    this.filteredTestsForDraft = testFiltered.sort((a, b) => {
      const aSel = selTests.includes(a.id);
      const bSel = selTests.includes(b.id);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return (a.title || '').localeCompare(b.title || '');
    });
  }

  private refreshAppliedFilterChips(): void {
    const chips: AppliedFilterChip[] = [];
    let count = 0;

    if (this.isSuperAdmin && this.appliedFilters.institute_id) {
      count++;
      const instObj =
        this.instMasterRecords.find((x) => x.id === this.appliedFilters.institute_id) ||
        this.institutesList.find((x) => x.institute_id === this.appliedFilters.institute_id);
      chips.push({
        key: 'institute',
        label: `Institute: ${instObj?.name || this.appliedFilters.institute_id}`,
        required: true,
      });
    }
    if (this.appliedFilters.department_ids.length > 0) {
      count++;
      let label: string;
      if (this.appliedFilters.department_ids.length === 1) {
        const d = this.departmentsList.find((x) => x.id === this.appliedFilters.department_ids[0]);
        label = `${this.terminology.deptLabel}: ${d?.name || this.appliedFilters.department_ids[0]}`;
      } else {
        label = `${this.terminology.deptPluralLabel}: ${this.appliedFilters.department_ids.length} selected`;
      }
      chips.push({ key: 'department', label, required: true });
    }
    if (this.appliedFilters.team_ids.length > 0) {
      count++;
      let label: string;
      if (this.appliedFilters.team_ids.length === 1) {
        const t = this.allTeamsList.find((x) => x.id === this.appliedFilters.team_ids[0]);
        label = `${this.terminology.teamLabel}: ${t?.name || this.appliedFilters.team_ids[0]}`;
      } else {
        label = `${this.terminology.teamPluralLabel}: ${this.appliedFilters.team_ids.length} selected`;
      }
      chips.push({ key: 'team', label, required: true });
    }
    if (this.appliedFilters.campus_ids.length > 0) {
      count++;
      let label: string;
      if (this.appliedFilters.campus_ids.length === 1) {
        const cp = this.campusesList.find((x) => x.id === this.appliedFilters.campus_ids[0]);
        label = `Campus: ${cp?.name || this.appliedFilters.campus_ids[0]}`;
      } else {
        label = `Campuses: ${this.appliedFilters.campus_ids.length} selected`;
      }
      chips.push({ key: 'campus', label, required: false });
    }
    if (this.appliedFilters.subjects.length > 0) {
      count++;
      let label: string;
      if (this.appliedFilters.subjects.length === 1) {
        const sVal = this.appliedFilters.subjects[0];
        const s = this.subjectsList.find((x) => x.id === sVal || x.name === sVal);
        label = `Subject: ${s?.name || sVal}`;
      } else {
        label = `Subjects: ${this.appliedFilters.subjects.length} selected`;
      }
      chips.push({ key: 'subject', label, required: this.testTypeFilter === 'paper' });
    }
    if (this.appliedFilters.test_ids.length > 0) {
      count++;
      let label: string;
      if (this.appliedFilters.test_ids.length === 1) {
        const tid = this.appliedFilters.test_ids[0];
        const tst = this.allTestsMeta.find(
          (x) => x.id === tid || x.schedule_id === tid || x.exam_id === tid
        );
        label = `Test: ${tst?.title || tid}`;
      } else {
        label = `Tests: ${this.appliedFilters.test_ids.length} selected`;
      }
      chips.push({ key: 'test', label, required: false });
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
      this.loadInstFilterMasterData();
      if (this.hasAppliedInstFilters) {
        this.loadInstitutesOverview();
      }
    }
    this.loadSummary();
    this.loadBreakdown();
    this.loadAnalytics(this.selectedPeriod);
    this.loadFilterMasterData();
    this.loadTestUsageData();
  }

  onInstituteChange(instId: string): void {
    this.closeInstFiltersOverlay();
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
    this.closeInstFiltersOverlay();
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
    if (this.isSuperAdmin) {
      return this.testTypeFilter === 'paper'
        ? `Institute, ${this.terminology.deptLabel}, ${this.terminology.teamLabel}, and Subject`
        : `Institute, ${this.terminology.deptLabel}, and ${this.terminology.teamLabel}`;
    }
    return this.testTypeFilter === 'paper'
      ? `${this.terminology.deptLabel}, ${this.terminology.teamLabel}, and Subject`
      : `${this.terminology.deptLabel} and ${this.terminology.teamLabel}`;
  }

  private getMissingMandatoryFilterLabels(): string[] {
    const missing: string[] = [];
    if (this.isSuperAdmin && !(this.draftFilters.institute_id || '').trim()) {
      missing.push('Institute');
    }
    if (!this.draftFilters.department_ids || this.draftFilters.department_ids.length === 0) {
      missing.push(this.terminology.deptLabel);
    }
    if (!this.draftFilters.team_ids || this.draftFilters.team_ids.length === 0) {
      missing.push(this.terminology.teamLabel);
    }
    if (
      this.testTypeFilter === 'paper' &&
      (!this.draftFilters.subjects || this.draftFilters.subjects.length === 0)
    ) {
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

  isDraftTestInstituteInvalid(): boolean {
    return (
      this.isSuperAdmin &&
      this.filterValidationAttempted &&
      !(this.draftFilters.institute_id || '').trim()
    );
  }

  isDraftDeptInvalid(): boolean {
    return (
      this.filterValidationAttempted &&
      (!this.draftFilters.department_ids || this.draftFilters.department_ids.length === 0)
    );
  }

  isDraftTeamInvalid(): boolean {
    return (
      this.filterValidationAttempted &&
      (!this.draftFilters.team_ids || this.draftFilters.team_ids.length === 0)
    );
  }

  isDraftSubjectInvalid(): boolean {
    return (
      this.filterValidationAttempted &&
      this.testTypeFilter === 'paper' &&
      (!this.draftFilters.subjects || this.draftFilters.subjects.length === 0)
    );
  }

  // ─── Anchored Filter Popover (CDK Overlay) Methods ───
  openFiltersOverlay(): void {
    if (!this.filtersBtn) return;
    if (this.filtersOverlayRef) {
      this.closeFiltersOverlay();
      return;
    }

    this.closeInstFiltersOverlay();
    this.draftFilters = this.cloneFilters(this.appliedFilters);
    if (
      this.isSuperAdmin &&
      !this.draftFilters.institute_id &&
      this.selectedInstituteId &&
      this.selectedInstituteId !== 'all'
    ) {
      this.draftFilters.institute_id = this.selectedInstituteId;
    }
    this.filterValidationAttempted = false;
    this.filterValidationError = '';
    this.testCountryFilterSearch = '';
    this.testCityFilterSearch = '';
    this.testIndustryFilterSearch = '';
    this.testSectorFilterSearch = '';
    this.testInstFilterSearch = '';
    this.deptFilterSearch = '';
    this.teamFilterSearch = '';
    this.campusFilterSearch = '';
    this.subjectFilterSearch = '';
    this.testFilterSearch = '';

    if (this.isSuperAdmin) {
      this.loadInstFilterMasterData();
      this.loadFilterMasterData(false, this.draftFilters.institute_id || '');
    }

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
    this.refreshTerminology();
    this.refreshDraftOptions();
  }

  closeFiltersOverlay(): void {
    const hadOverlay = !!this.filtersOverlayRef;
    if (this.filtersOverlayRef) {
      try {
        this.filtersOverlayRef.dispose();
      } catch (_) {}
      this.filtersOverlayRef = null;
    }
    if (hadOverlay && this.isSuperAdmin) {
      const activeInst =
        this.appliedFilters.institute_id ||
        (this.selectedInstituteId !== 'all' ? this.selectedInstituteId : '');
      this.refreshTerminology();
      this.loadFilterMasterData(false, activeInst);
    }
  }

  private pruneTestDraftInstituteIfOutOfScope(): void {
    const scoped = this.getScopedInstRecordsForTestDraft();
    if (
      this.draftFilters.institute_id &&
      !scoped.some((r) => r.id === this.draftFilters.institute_id)
    ) {
      this.draftFilters.institute_id = '';
      this.onTestDraftInstituteChange();
    }
  }

  onTestDraftCountryChange(): void {
    this.draftFilters.city = '';
    this.testCityFilterSearch = '';
    this.pruneTestDraftInstituteIfOutOfScope();
    this.refreshDraftOptions();
  }

  onTestDraftCityChange(): void {
    this.pruneTestDraftInstituteIfOutOfScope();
    this.refreshDraftOptions();
  }

  onTestDraftIndustryChange(): void {
    this.draftFilters.sector = '';
    this.testSectorFilterSearch = '';
    this.pruneTestDraftInstituteIfOutOfScope();
    this.refreshDraftOptions();
  }

  onTestDraftSectorChange(): void {
    this.pruneTestDraftInstituteIfOutOfScope();
    this.refreshDraftOptions();
  }

  onTestDraftInstituteChange(): void {
    this.draftFilters.department_ids = [];
    this.draftFilters.team_ids = [];
    this.draftFilters.campus_ids = [];
    this.draftFilters.subjects = [];
    this.draftFilters.test_ids = [];
    this.refreshTerminology();
    this.loadFilterMasterData(true, this.draftFilters.institute_id || '');
    this.refreshDraftOptions();
    if (this.filterValidationAttempted) {
      this.updateFilterValidationError();
    }
  }

  private pruneTestDraftDependentSelections(): void {
    const validTeamIds = new Set(this.computeAvailableTeamsForDraft().map((t) => t.id));
    this.draftFilters.team_ids = (this.draftFilters.team_ids || []).filter((id) =>
      validTeamIds.has(id)
    );

    const availSubjs = this.computeAvailableSubjectsForDraft();
    const validSubjIds = new Set(availSubjs.map((s) => s.id));
    this.draftFilters.subjects = (this.draftFilters.subjects || []).filter((id) =>
      validSubjIds.has(id)
    );

    const validTestIds = new Set(this.computeAvailableTestsForDraft(availSubjs).map((t) => t.id));
    this.draftFilters.test_ids = (this.draftFilters.test_ids || []).filter((id) =>
      validTestIds.has(id)
    );
  }

  onDraftDepartmentChange(): void {
    this.pruneTestDraftDependentSelections();
    this.refreshDraftOptions();
    if (this.filterValidationAttempted) {
      this.updateFilterValidationError();
    }
  }

  onDraftTeamChange(): void {
    this.pruneTestDraftDependentSelections();
    this.refreshDraftOptions();
    if (this.filterValidationAttempted) {
      this.updateFilterValidationError();
    }
  }

  onDraftCampusChange(): void {
    const availSubjs = this.computeAvailableSubjectsForDraft();
    const validTestIds = new Set(this.computeAvailableTestsForDraft(availSubjs).map((t) => t.id));
    this.draftFilters.test_ids = (this.draftFilters.test_ids || []).filter((id) =>
      validTestIds.has(id)
    );
    this.refreshDraftOptions();
  }

  onDraftSubjectChange(): void {
    const availSubjs = this.computeAvailableSubjectsForDraft();
    const validTestIds = new Set(this.computeAvailableTestsForDraft(availSubjs).map((t) => t.id));
    this.draftFilters.test_ids = (this.draftFilters.test_ids || []).filter((id) =>
      validTestIds.has(id)
    );
    this.refreshDraftOptions();
    if (this.filterValidationAttempted) {
      this.updateFilterValidationError();
    }
  }

  onDraftTestSelectionChange(): void {
    this.refreshDraftOptions();
  }

  onDraftCreatedByMeChange(): void {
    this.refreshDraftOptions();
    if (this.draftFilters.test_ids && this.draftFilters.test_ids.length > 0) {
      const validIds = new Set(this.filteredTestsForDraft.map((t) => t.id));
      this.draftFilters.test_ids = this.draftFilters.test_ids.filter((id) => validIds.has(id));
    }
  }

  // Select All helpers for Section 5 Multi-Select Dropdowns
  isAllDraftDeptsSelected(): boolean {
    const ids = this.filteredDepartmentsForDraft.map((d) => d.id);
    return ids.length > 0 && ids.every((id) => this.draftFilters.department_ids.includes(id));
  }

  toggleSelectAllDraftDepts(): void {
    const ids = this.filteredDepartmentsForDraft.map((d) => d.id);
    this.draftFilters.department_ids = this.isAllDraftDeptsSelected() ? [] : [...ids];
    this.onDraftDepartmentChange();
  }

  isAllDraftTeamsSelected(): boolean {
    const ids = this.filteredTeamsForDraft.map((t) => t.id);
    return ids.length > 0 && ids.every((id) => this.draftFilters.team_ids.includes(id));
  }

  toggleSelectAllDraftTeams(): void {
    const ids = this.filteredTeamsForDraft.map((t) => t.id);
    this.draftFilters.team_ids = this.isAllDraftTeamsSelected() ? [] : [...ids];
    this.onDraftTeamChange();
  }

  isAllDraftCampusesSelected(): boolean {
    const ids = this.filteredCampusesForDraft.map((c) => c.id);
    return ids.length > 0 && ids.every((id) => this.draftFilters.campus_ids.includes(id));
  }

  toggleSelectAllDraftCampuses(): void {
    const ids = this.filteredCampusesForDraft.map((c) => c.id);
    this.draftFilters.campus_ids = this.isAllDraftCampusesSelected() ? [] : [...ids];
    this.onDraftCampusChange();
  }

  isAllDraftSubjectsSelected(): boolean {
    const ids = this.filteredSubjectsForDraft.map((s) => s.id);
    return ids.length > 0 && ids.every((id) => this.draftFilters.subjects.includes(id));
  }

  toggleSelectAllDraftSubjects(): void {
    const ids = this.filteredSubjectsForDraft.map((s) => s.id);
    this.draftFilters.subjects = this.isAllDraftSubjectsSelected() ? [] : [...ids];
    this.onDraftSubjectChange();
  }

  isAllDraftTestsSelected(): boolean {
    const ids = this.filteredTestsForDraft.map((t) => t.id);
    return ids.length > 0 && ids.every((id) => this.draftFilters.test_ids.includes(id));
  }

  toggleSelectAllDraftTests(): void {
    const ids = this.filteredTestsForDraft.map((t) => t.id);
    this.draftFilters.test_ids = this.isAllDraftTestsSelected() ? [] : [...ids];
    this.onDraftTestSelectionChange();
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
    this.testCountryFilterSearch = '';
    this.testCityFilterSearch = '';
    this.testIndustryFilterSearch = '';
    this.testSectorFilterSearch = '';
    this.testInstFilterSearch = '';
    this.deptFilterSearch = '';
    this.teamFilterSearch = '';
    this.campusFilterSearch = '';
    this.subjectFilterSearch = '';
    this.testFilterSearch = '';
    this.closeFiltersOverlay();
    this.refreshTerminology();
    this.loadFilterMasterData(false);
    this.refreshDraftOptions();
    this.refreshAppliedFilterChips();
    this.testPageIndex = 0;
    this.loadTestUsageData();
  }

  removeAppliedFilter(key: AppliedFilterChip['key']): void {
    if (
      key === 'institute' ||
      key === 'department' ||
      key === 'team' ||
      (key === 'subject' && this.testTypeFilter === 'paper')
    ) {
      return;
    }
    switch (key) {
      case 'campus':
        this.appliedFilters.campus_ids = [];
        this.appliedFilters.test_ids = [];
        break;
      case 'subject':
        this.appliedFilters.subjects = [];
        this.appliedFilters.test_ids = [];
        break;
      case 'test':
        this.appliedFilters.test_ids = [];
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
      if (this.appliedFilters.institute_id) {
        return this.appliedFilters.institute_id;
      }
      return this.selectedInstituteId && this.selectedInstituteId !== 'all'
        ? this.selectedInstituteId
        : '';
    }
    return this.loggedInstituteId || (this.summary?.institute_id && this.summary.institute_id !== 'all' ? this.summary.institute_id : '');
  }

  loadFilterMasterData(force = false, overrideInstId?: string): void {
    const instId =
      overrideInstId !== undefined ? overrideInstId : this.getEffectiveInstituteIdForMasters();
    const masterKey = this.isSuperAdmin ? (instId || 'none') : (instId || 'self');
    if (!force && this.lastLoadedMasterInstKey === masterKey) {
      return;
    }
    this.lastLoadedMasterInstKey = masterKey;

    if (this.isSuperAdmin && !instId) {
      this.departmentsList = [];
      this.allTeamsList = [];
      this.campusesList = [];
      this.subjectsList = [];
      this.refreshDraftOptions();
      this.refreshAppliedFilterChips();
      return;
    }

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

  // ─── Section 3: Institute Table Filter Popover & Master Data Methods ───
  private toTitleCase(str: string): string {
    return str
      ? str
          .trim()
          .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.slice(1).toLowerCase())
      : '';
  }

  loadInstFilterMasterData(force = false): void {
    if (!this.isSuperAdmin) return;
    if (!force && this.instMasterLoaded) return;

    this.loadingInstFilterOptions = true;
    this.loadingInstCountries = true;
    const headers = this.getAuthHeaders();

    this.http.get<any>(`${API_BASE}/location-hierarchy`, { headers }).subscribe({
      next: (locRes) => {
        const rawCountries = locRes?.data?.countries || locRes?.countries || locRes?.data || [];
        this.locationCountriesRaw = Array.isArray(rawCountries)
          ? rawCountries
              .map((c: any) => ({
                code: String(c.country_code || c.code || c.country_id || c.id || '').trim(),
                name: String(c.country_name || c.name || c.country || '').trim(),
              }))
              .filter((c) => !!c.code && !!c.name)
          : [];
        this.fetchInstitutesForFilterMaster();
      },
      error: () => {
        this.locationCountriesRaw = [];
        this.fetchInstitutesForFilterMaster();
      },
    });
  }

  private fetchInstitutesForFilterMaster(): void {
    const headers = this.getAuthHeaders();
    this.http.get<any>(`${API_BASE}/get-institutes`, { headers }).subscribe({
      next: (res) => {
        const raw = Array.isArray(res?.data) ? res.data : [];
        const records: InstituteMasterRecord[] = [];
        const countryMap = new Map<string, { code: string; name: string }>();

        for (const r of raw) {
          const id = String(r.institute_id || r.id || '').trim();
          const name = String(r.name || r.institute_name || '').trim();
          if (!id || !name) continue;

          const cCodes = new Set<string>();
          const cNames = new Set<string>();
          const citiesSet = new Set<string>();
          const campusLocations: InstituteLocationEntry[] = [];

          const locations = [r, ...(Array.isArray(r.campuses) ? r.campuses : [])];
          for (const loc of locations) {
            if (!loc) continue;
            const rawCountry = loc.country;
            const cCode = String(
              loc.country_id ||
                loc.country_code ||
                (typeof rawCountry === 'object'
                  ? rawCountry?.country_id || rawCountry?.id || rawCountry?.country_code || rawCountry?.code
                  : rawCountry) ||
                ''
            ).trim();
            const cName = String(
              loc.country_name ||
                (typeof rawCountry === 'object'
                  ? rawCountry?.country_name || rawCountry?.name || rawCountry?.country
                  : rawCountry) ||
                ''
            ).trim();

            const match = this.locationCountriesRaw.find(
              (lc) =>
                (cCode && lc.code.toLowerCase() === cCode.toLowerCase()) ||
                (cName && lc.name.toLowerCase() === cName.toLowerCase())
            );
            const resolvedCode = match?.code || cCode;
            const resolvedName = match?.name || cName;
            if (resolvedCode) cCodes.add(resolvedCode);
            if (resolvedName) cNames.add(resolvedName);
            if (resolvedCode && resolvedName && !countryMap.has(resolvedName.toLowerCase())) {
              countryMap.set(resolvedName.toLowerCase(), {
                code: resolvedCode,
                name: resolvedName,
              });
            }

            const rawCity = loc.city;
            const cityVal = String(
              loc.city_name ||
                (typeof rawCity === 'object' ? rawCity?.city_name || rawCity?.name : rawCity) ||
                ''
            ).trim();
            const formattedCity = cityVal ? this.toTitleCase(cityVal) : '';
            if (formattedCity) {
              citiesSet.add(formattedCity);
            }
            if (resolvedCode || resolvedName || formattedCity) {
              campusLocations.push({
                country_code: resolvedCode,
                country_name: resolvedName,
                city: formattedCity,
              });
            }
          }

          records.push({
            id,
            name,
            short_name: String(r.short_name || r.short || '').trim(),
            industry_type: String(r.industry_type || r.industry || '').trim(),
            industry_sector: String(r.industry_sector || r.sector || '').trim(),
            active_status: r.active_status !== undefined ? !!r.active_status : true,
            country_codes: Array.from(cCodes),
            country_names: Array.from(cNames),
            cities: Array.from(citiesSet),
            locations: campusLocations,
          });
        }

        records.sort((a, b) => a.name.localeCompare(b.name));
        this.instMasterRecords = records;
        this.instMasterLoaded = true;
        this.instCountriesList = Array.from(countryMap.values()).sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        this.institutesList = records.map((rec) => ({
          institute_id: rec.id,
          name: rec.name,
          short_name: rec.short_name,
          industry_type: rec.industry_type,
          industry_sector: rec.industry_sector,
        }));
        this.loadingInstFilterOptions = false;
        this.loadingInstCountries = false;
        this.refreshTerminology();
        this.refreshInstDraftOptions();
        this.refreshInstAppliedFilterChips();
        this.refreshDraftOptions();
      },
      error: (err) => {
        console.error('Error loading institutes master list for filter:', err);
        this.loadingInstFilterOptions = false;
        this.loadingInstCountries = false;
      },
    });
  }

  private getScopedInstRecordsForDraft(): InstituteMasterRecord[] {
    const selCountries = (this.instDraftFilters.countries || []).map((c) => c.toLowerCase());
    const selCountryNames = this.instCountriesList
      .filter((c) => selCountries.includes(c.code.toLowerCase()))
      .map((c) => c.name.toLowerCase());
    const selCities = (this.instDraftFilters.cities || []).map((c) => c.toLowerCase());
    const selIndustries = (this.instDraftFilters.industries || []).map((i) => i.toLowerCase());
    const selSectors = (this.instDraftFilters.sectors || []).map((s) => s.toLowerCase());
    const activeFilter = this.instDraftFilters.active_status;

    return this.instMasterRecords.filter((rec) => {
      if (activeFilter !== null && rec.active_status !== activeFilter) {
        return false;
      }
      if (selCountries.length > 0 && selCities.length > 0) {
        const hasPairedMatch = rec.locations.some(
          (loc) =>
            this.locationMatchesCountry(loc, selCountries, selCountryNames) &&
            selCities.includes((loc.city || '').toLowerCase())
        );
        if (!hasPairedMatch) return false;
      } else if (selCountries.length > 0) {
        const hasCountry = rec.locations.some((loc) =>
          this.locationMatchesCountry(loc, selCountries, selCountryNames)
        );
        if (!hasCountry) return false;
      } else if (selCities.length > 0) {
        const hasCity = rec.locations.some((loc) =>
          selCities.includes((loc.city || '').toLowerCase())
        );
        if (!hasCity) return false;
      }
      if (selIndustries.length > 0) {
        if (!selIndustries.includes((rec.industry_type || '').toLowerCase())) {
          return false;
        }
      }
      if (selSectors.length > 0) {
        if (!selSectors.includes((rec.industry_sector || '').toLowerCase())) {
          return false;
        }
      }
      return true;
    });
  }

  refreshInstDraftOptions(): void {
    // 1. Countries
    const cQ = (this.instCountrySearch || '').trim().toLowerCase();
    const selC = this.instDraftFilters.countries || [];
    const countriesFiltered = cQ
      ? this.instCountriesList.filter(
          (c) => c.name.toLowerCase().includes(cQ) || selC.includes(c.code)
        )
      : [...this.instCountriesList];
    this.filteredInstCountriesForDraft = countriesFiltered.sort((a, b) => {
      const aSel = selC.includes(a.code);
      const bSel = selC.includes(b.code);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.name.localeCompare(b.name);
    });

    // 2. Cities (scoped per-campus to selected countries, matching view-institutes)
    const selCountriesLower = selC.map((c) => c.toLowerCase());
    const selCountryNamesLower = this.instCountriesList
      .filter((c) => selCountriesLower.includes(c.code.toLowerCase()))
      .map((c) => c.name.toLowerCase());
    const cityMap = new Map<string, { code: string; name: string }>();
    if (selCountriesLower.length > 0) {
      for (const rec of this.instMasterRecords) {
        for (const loc of rec.locations) {
          if (
            loc.city &&
            this.locationMatchesCountry(loc, selCountriesLower, selCountryNamesLower)
          ) {
            const key = loc.city.toLowerCase();
            if (!cityMap.has(key)) {
              cityMap.set(key, { code: loc.city, name: loc.city });
            }
          }
        }
      }
    }
    const allCitiesForCountry = Array.from(cityMap.values());
    const cityQ = (this.instCitySearch || '').trim().toLowerCase();
    const selCities = this.instDraftFilters.cities || [];
    const citiesFiltered = cityQ
      ? allCitiesForCountry.filter(
          (c) => c.name.toLowerCase().includes(cityQ) || selCities.includes(c.name)
        )
      : allCitiesForCountry;
    this.filteredInstCitiesForDraft = citiesFiltered.sort((a, b) => {
      const aSel = selCities.includes(a.name);
      const bSel = selCities.includes(b.name);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.name.localeCompare(b.name);
    });

    // 3. Industries
    const indQ = (this.instIndustrySearch || '').trim().toLowerCase();
    const selInd = this.instDraftFilters.industries || [];
    const indFiltered = indQ
      ? this.instIndustryTypes.filter(
          (t) => t.toLowerCase().includes(indQ) || selInd.includes(t)
        )
      : [...this.instIndustryTypes];
    this.filteredInstIndustriesForDraft = indFiltered.sort((a, b) => {
      const aSel = selInd.includes(a);
      const bSel = selInd.includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
    });

    // 4. Sectors (scoped to selected industries)
    const sectorSet = new Set<string>();
    for (const ind of selInd) {
      (this.instSectorMap[ind] || []).forEach((s) => sectorSet.add(s));
    }
    const scopedSectors = Array.from(sectorSet);
    const secQ = (this.instSectorSearch || '').trim().toLowerCase();
    const selSec = this.instDraftFilters.sectors || [];
    const secFiltered = secQ
      ? scopedSectors.filter((s) => s.toLowerCase().includes(secQ) || selSec.includes(s))
      : scopedSectors;
    this.filteredInstSectorsForDraft = secFiltered.sort((a, b) => {
      const aSel = selSec.includes(a);
      const bSel = selSec.includes(b);
      if (aSel && !bSel) return -1;
      if (!aSel && bSel) return 1;
      return a.localeCompare(b);
    });

    // 5. Institutes (scoped by Country, City, Industry, Sector, Active Status)
    const scopedInsts = this.getScopedInstRecordsForDraft();
    const validIds = new Set(scopedInsts.map((r) => r.id));
    if (this.instDraftFilters.institute_ids.length > 0) {
      this.instDraftFilters.institute_ids = this.instDraftFilters.institute_ids.filter((id) =>
        validIds.has(id)
      );
    }
    const instQ = (this.instFilterNameSearch || '').trim().toLowerCase();
    const selInstIds = this.instDraftFilters.institute_ids || [];
    const instList = instQ
      ? scopedInsts.filter(
          (i) => i.name.toLowerCase().includes(instQ) || selInstIds.includes(i.id)
        )
      : scopedInsts;
    this.filteredInstOptionsForDraft = instList
      .map((i) => ({ id: i.id, name: i.name }))
      .sort((a, b) => {
        const aSel = selInstIds.includes(a.id);
        const bSel = selInstIds.includes(b.id);
        if (aSel && !bSel) return -1;
        if (!aSel && bSel) return 1;
        return a.name.localeCompare(b.name);
      });
  }

  openInstFiltersOverlay(): void {
    if (!this.instFiltersBtn) return;
    if (this.instFiltersOverlayRef) {
      this.closeInstFiltersOverlay();
      return;
    }

    this.closeFiltersOverlay();
    this.instDraftFilters = this.cloneInstFilters(this.instAppliedFilters);
    if (this.instDraftFilters.active_status === null) {
      this.instDraftFilters.active_status = true;
    }
    this.instFilterValidationAttempted = false;
    this.instFilterValidationError = '';
    this.instFilterNameSearch = '';
    this.instCountrySearch = '';
    this.instCitySearch = '';
    this.instIndustrySearch = '';
    this.instSectorSearch = '';
    this.refreshInstDraftOptions();

    const targetEl =
      this.instFiltersBtn?.nativeElement ||
      (this.instFiltersBtn as any)?._elementRef?.nativeElement ||
      this.instFiltersBtn;

    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(targetEl)
      .withPositions([
        { originX: 'end', originY: 'bottom', overlayX: 'end', overlayY: 'top', offsetY: 8 },
        { originX: 'start', originY: 'bottom', overlayX: 'start', overlayY: 'top', offsetY: 8 },
      ])
      .withPush(true);

    this.instFiltersOverlayRef = this.overlay.create({
      positionStrategy,
      hasBackdrop: true,
      backdropClass: 'cdk-overlay-transparent-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
    });

    this.instFiltersOverlayRef.backdropClick().subscribe(() => this.closeInstFiltersOverlay());
    this.instFiltersOverlayRef.keydownEvents().subscribe((ev: KeyboardEvent) => {
      if (ev.key === 'Escape') this.closeInstFiltersOverlay();
    });

    const portal = new TemplatePortal(this.instFiltersPanelTpl, this.vcr);
    this.instFiltersOverlayRef.attach(portal);
  }

  closeInstFiltersOverlay(): void {
    if (this.instFiltersOverlayRef) {
      try {
        this.instFiltersOverlayRef.dispose();
      } catch (_) {}
      this.instFiltersOverlayRef = null;
    }
  }

  onInstDropdownSearchInput(event: Event): void {
    event.stopPropagation();
    this.refreshInstDraftOptions();
  }

  onInstFilterSelectOpened(
    opened: boolean,
    field: 'institute' | 'country' | 'city' | 'industry' | 'sector'
  ): void {
    if (!opened) {
      if (field === 'institute') this.instFilterNameSearch = '';
      else if (field === 'country') this.instCountrySearch = '';
      else if (field === 'city') this.instCitySearch = '';
      else if (field === 'industry') this.instIndustrySearch = '';
      else if (field === 'sector') this.instSectorSearch = '';
      this.refreshInstDraftOptions();
    }
  }

  onInstSelectionChange(): void {
    if (this.instFilterValidationAttempted) {
      this.updateInstFilterValidationError();
    }
  }

  onInstCountryFilterChange(): void {
    if (!this.instDraftFilters.countries.length) {
      this.instDraftFilters.cities = [];
    }
    this.refreshInstDraftOptions();
    const validCities = new Set(this.filteredInstCitiesForDraft.map((c) => c.name));
    this.instDraftFilters.cities = this.instDraftFilters.cities.filter((c) => validCities.has(c));
    this.refreshInstDraftOptions();
    if (this.instFilterValidationAttempted) {
      this.updateInstFilterValidationError();
    }
  }

  onInstCityFilterChange(): void {
    this.refreshInstDraftOptions();
    if (this.instFilterValidationAttempted) {
      this.updateInstFilterValidationError();
    }
  }

  onInstIndustryFilterChange(): void {
    if (!this.instDraftFilters.industries.length) {
      this.instDraftFilters.sectors = [];
    }
    this.refreshInstDraftOptions();
    const validSectors = new Set(this.filteredInstSectorsForDraft);
    this.instDraftFilters.sectors = this.instDraftFilters.sectors.filter((s) =>
      validSectors.has(s)
    );
    this.refreshInstDraftOptions();
    if (this.instFilterValidationAttempted) {
      this.updateInstFilterValidationError();
    }
  }

  onInstSectorFilterChange(): void {
    this.refreshInstDraftOptions();
    if (this.instFilterValidationAttempted) {
      this.updateInstFilterValidationError();
    }
  }

  onInstActiveStatusToggle(checked: boolean): void {
    this.instDraftFilters.active_status = checked;
    this.refreshInstDraftOptions();
    if (this.instFilterValidationAttempted) {
      this.updateInstFilterValidationError();
    }
  }

  // Select All helpers for Institute Table Filter dropdowns
  isAllInstFilterSelected(): boolean {
    const ids = this.filteredInstOptionsForDraft.map((i) => i.id);
    return ids.length > 0 && ids.every((id) => this.instDraftFilters.institute_ids.includes(id));
  }

  toggleSelectAllInstFilter(): void {
    const ids = this.filteredInstOptionsForDraft.map((i) => i.id);
    this.instDraftFilters.institute_ids = this.isAllInstFilterSelected() ? [] : [...ids];
    this.onInstSelectionChange();
  }

  isAllInstCountriesSelected(): boolean {
    const codes = this.filteredInstCountriesForDraft.map((c) => c.code);
    return codes.length > 0 && codes.every((c) => this.instDraftFilters.countries.includes(c));
  }

  toggleSelectAllInstCountries(): void {
    const codes = this.filteredInstCountriesForDraft.map((c) => c.code);
    this.instDraftFilters.countries = this.isAllInstCountriesSelected() ? [] : [...codes];
    this.onInstCountryFilterChange();
  }

  isAllInstCitiesSelected(): boolean {
    const names = this.filteredInstCitiesForDraft.map((c) => c.name);
    return names.length > 0 && names.every((n) => this.instDraftFilters.cities.includes(n));
  }

  toggleSelectAllInstCities(): void {
    const names = this.filteredInstCitiesForDraft.map((c) => c.name);
    this.instDraftFilters.cities = this.isAllInstCitiesSelected() ? [] : [...names];
    this.onInstCityFilterChange();
  }

  isAllInstIndustriesSelected(): boolean {
    const items = this.filteredInstIndustriesForDraft;
    return items.length > 0 && items.every((i) => this.instDraftFilters.industries.includes(i));
  }

  toggleSelectAllInstIndustries(): void {
    const items = this.filteredInstIndustriesForDraft;
    this.instDraftFilters.industries = this.isAllInstIndustriesSelected() ? [] : [...items];
    this.onInstIndustryFilterChange();
  }

  isAllInstSectorsSelected(): boolean {
    const items = this.filteredInstSectorsForDraft;
    return items.length > 0 && items.every((s) => this.instDraftFilters.sectors.includes(s));
  }

  toggleSelectAllInstSectors(): void {
    const items = this.filteredInstSectorsForDraft;
    this.instDraftFilters.sectors = this.isAllInstSectorsSelected() ? [] : [...items];
    this.onInstSectorFilterChange();
  }

  isDraftInstInvalid(): boolean {
    return false;
  }

  private updateInstFilterValidationError(): boolean {
    this.instFilterValidationError = '';
    return true;
  }

  applyInstFilters(): void {
    this.instFilterValidationAttempted = false;
    this.instFilterValidationError = '';
    this.instAppliedFilters = this.cloneInstFilters(this.instDraftFilters);
    this.hasAppliedInstFilters = true;
    this.refreshInstAppliedFilterChips();
    this.closeInstFiltersOverlay();
    this.institutePageIndex = 0;
    this.loadInstitutesOverview();
  }

  resetInstFilters(): void {
    this.instDraftFilters = this.createEmptyInstFilters();
    this.instAppliedFilters = this.createEmptyInstFilters();
    this.hasAppliedInstFilters = false;
    this.institutesOverview = [];
    this.instFilterValidationAttempted = false;
    this.instFilterValidationError = '';
    this.instFilterNameSearch = '';
    this.instCountrySearch = '';
    this.instCitySearch = '';
    this.instIndustrySearch = '';
    this.instSectorSearch = '';
    this.refreshInstDraftOptions();
    this.refreshInstAppliedFilterChips();
    this.closeInstFiltersOverlay();
    this.institutePageIndex = 0;
  }

  removeInstAppliedFilter(key: InstAppliedFilterChip['key']): void {
    switch (key) {
      case 'institutes':
        this.instAppliedFilters.institute_ids = [];
        break;
      case 'country':
        this.instAppliedFilters.countries = [];
        this.instAppliedFilters.cities = [];
        break;
      case 'city':
        this.instAppliedFilters.cities = [];
        break;
      case 'industry':
        this.instAppliedFilters.industries = [];
        this.instAppliedFilters.sectors = [];
        break;
      case 'sector':
        this.instAppliedFilters.sectors = [];
        break;
      case 'active_status':
        this.instAppliedFilters.active_status = null;
        break;
    }
    this.refreshInstAppliedFilterChips();
    if (this.instActiveFilterCount === 0) {
      this.hasAppliedInstFilters = false;
      this.institutesOverview = [];
      return;
    }
    this.institutePageIndex = 0;
    this.loadInstitutesOverview();
  }

  private refreshInstAppliedFilterChips(): void {
    if (!this.hasAppliedInstFilters) {
      this.instAppliedFilterChips = [];
      this.instActiveFilterCount = 0;
      return;
    }

    const chips: InstAppliedFilterChip[] = [];
    let count = 0;

    if (this.instAppliedFilters.institute_ids.length > 0) {
      count++;
      let label: string;
      if (this.instAppliedFilters.institute_ids.length === 1) {
        const rec = this.instMasterRecords.find(
          (r) => r.id === this.instAppliedFilters.institute_ids[0]
        );
        label = `Institute: ${rec?.name || '1 selected'}`;
      } else {
        label = `Institutes: ${this.instAppliedFilters.institute_ids.length} selected`;
      }
      chips.push({ key: 'institutes', label, required: false });
    }

    if (this.instAppliedFilters.countries.length > 0) {
      count++;
      const names = this.instAppliedFilters.countries.map((code) => {
        const found = this.instCountriesList.find((c) => c.code === code);
        return found?.name || code;
      });
      chips.push({ key: 'country', label: `Country: ${names.join(', ')}`, required: false });
    }

    if (this.instAppliedFilters.cities.length > 0) {
      count++;
      chips.push({
        key: 'city',
        label: `City: ${this.instAppliedFilters.cities.join(', ')}`,
        required: false,
      });
    }

    if (this.instAppliedFilters.industries.length > 0) {
      count++;
      chips.push({
        key: 'industry',
        label: `Industry: ${this.instAppliedFilters.industries.join(', ')}`,
        required: false,
      });
    }

    if (this.instAppliedFilters.sectors.length > 0) {
      count++;
      chips.push({
        key: 'sector',
        label: `Sector: ${this.instAppliedFilters.sectors.join(', ')}`,
        required: false,
      });
    }

    if (this.instAppliedFilters.active_status !== null) {
      count++;
      chips.push({
        key: 'active_status',
        label: `Status: ${this.instAppliedFilters.active_status ? 'Active' : 'Inactive'}`,
        required: false,
      });
    }

    this.instAppliedFilterChips = chips;
    this.instActiveFilterCount = count;
  }

  loadInstitutesOverview(): void {
    if (!this.isSuperAdmin || !this.hasAppliedInstFilters) return;

    const params: string[] = [];
    if (this.instAppliedFilters.institute_ids.length > 0) {
      params.push(`institute_id=${encodeURIComponent(this.instAppliedFilters.institute_ids.join(','))}`);
    }
    if (this.instAppliedFilters.countries.length > 0) {
      params.push(`country=${encodeURIComponent(this.instAppliedFilters.countries.join(','))}`);
    }
    if (this.instAppliedFilters.cities.length > 0) {
      params.push(`city=${encodeURIComponent(this.instAppliedFilters.cities.join(','))}`);
    }
    if (this.instAppliedFilters.industries.length > 0) {
      params.push(`industry=${encodeURIComponent(this.instAppliedFilters.industries.join(','))}`);
    }
    if (this.instAppliedFilters.sectors.length > 0) {
      params.push(`sector=${encodeURIComponent(this.instAppliedFilters.sectors.join(','))}`);
    }
    if (this.instAppliedFilters.active_status !== null) {
      params.push(`active_status=${this.instAppliedFilters.active_status ? 'true' : 'false'}`);
    }

    const qs = params.length ? `?${params.join('&')}` : '';
    this.instOverviewLoading = true;

    this.http
      .get<{ status: boolean; data: InstituteOverviewItem[] }>(
        `${API_BASE}/ai-credits/institutes-overview${qs}`,
        { headers: this.getAuthHeaders() }
      )
      .subscribe({
        next: (res) => {
          this.instOverviewLoading = false;
          if (res && res.status && res.data) {
            this.institutesOverview = res.data;
            this.institutePageIndex = 0;
          } else {
            this.institutesOverview = [];
          }
        },
        error: (err) => {
          this.instOverviewLoading = false;
          this.institutesOverview = [];
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
    if (this.isSuperAdmin && this.appliedFilters.institute_id) {
      params.push(`filter_institute_id=${encodeURIComponent(this.appliedFilters.institute_id)}`);
    }
    if (this.testSearchTerm.trim()) {
      params.push(`search=${encodeURIComponent(this.testSearchTerm.trim())}`);
    }
    if (this.appliedFilters.department_ids && this.appliedFilters.department_ids.length > 0) {
      params.push(`department_id=${encodeURIComponent(this.appliedFilters.department_ids.join(','))}`);
    }
    if (this.appliedFilters.team_ids && this.appliedFilters.team_ids.length > 0) {
      params.push(`team_id=${encodeURIComponent(this.appliedFilters.team_ids.join(','))}`);
    }
    if (this.appliedFilters.campus_ids && this.appliedFilters.campus_ids.length > 0) {
      params.push(`campus_id=${encodeURIComponent(this.appliedFilters.campus_ids.join(','))}`);
    }
    if (
      this.testTypeFilter === 'paper' &&
      this.appliedFilters.subjects &&
      this.appliedFilters.subjects.length > 0
    ) {
      params.push(`subject=${encodeURIComponent(this.appliedFilters.subjects.join(','))}`);
    }
    if (this.appliedFilters.test_ids && this.appliedFilters.test_ids.length > 0) {
      params.push(`test_id=${encodeURIComponent(this.appliedFilters.test_ids.join(','))}`);
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
    if (f.includes('key')) return 'vpn_key';
    if (f.includes('answer') && f.includes('fine')) return 'auto_fix_high';
    if (f.includes('answer') && (f.includes('gen') || f.includes('draw'))) return 'draw';
    if (f.includes('extract') && f.includes('question')) return 'receipt_long';
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
    this.closeInstFiltersOverlay();
    this.pageMeta.clear();
    this.subs.unsubscribe();
  }
}
